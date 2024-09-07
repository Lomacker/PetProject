import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {decrement, increment} from "../reducers/counterReducer";

interface HomeProps {
    test1: string;
    test2: number;
}

const Home = (props: HomeProps) => {
    const { test1, test2 } = props;
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()


    return (
        <div>
            <div className='badge bg-primary text-wrap'>Test1: {test1}, Test2: {test2}</div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default Home;
