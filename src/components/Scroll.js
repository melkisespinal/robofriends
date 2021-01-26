/**
 * @description: Pure function React Component that makes its children
 * scrollable.
 * @author: Melkis Espinal
 */

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;