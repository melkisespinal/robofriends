/**
 * @description: Pure function React Component for a search field input.
 * @author: Melkis Espinal
 */

const searchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='Search Robots'
                onChange={searchChange}
            />
        </div>
    );
}

export default searchBox;