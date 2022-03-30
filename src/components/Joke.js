import React from 'react';

const Joke = (props) => {
    return (
        <div>
            {props.setup && <h3>Setup: {props.setup}</h3> }
            <p>Punchline: {props.punchline}</p>
            <hr />
        </div>
    );
};

export default Joke;