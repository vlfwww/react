import React, { useContext } from 'react';
import { CounterContext } from '../../context/CounterContext';

const CounterDisplay = () => {
    const { count } = useContext(CounterContext);
    return <h1>Count: {count}</h1>;
};

export default CounterDisplay;