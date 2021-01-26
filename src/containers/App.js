/**
 * @description: React Component as a class to be able to access React methods and
 * control the State.
 * @author: Melkis Espinal
 */

import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: '',
        };
    }

    /**
     * When the components mount (when it renders), fetch the users from this API
     */
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json()) //convert to JSON
            .then(users => this.setState({robots: users})); //update Robots / State
    };
    
    /**
     * On any change of the search field input, update robots
     * @param {*} event: Event onChange from Search Field Component (listener)
     */
    onSearchChange = (event) => {
        //ALWAYS USE REACT'S SETSTATE() METHOD TO CHANGE STATE
        //NEVER DO IT DIRECTLY
        this.setState({ searchField: event.target.value});
    }

    render(){
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField);
        });
        return !robots.length ? 
            <h1>Loading...</h1> :
            (
                <div className='tc'>
                    <h1 className="f2">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots ={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}
export default App;