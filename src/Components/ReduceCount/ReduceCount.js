import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
        default:
            return state;
    }
}

const ReduceCount = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>This is Reducer Count: {state.count}</h2>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>
    );
};

export default ReduceCount;