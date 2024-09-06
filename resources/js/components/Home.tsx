import React from "react";

interface HomeProps {
    test1: string;
    test2: number;
}

const Home = (props: HomeProps) => {
    const { test1, test2 } = props;

    return <div className='badge bg-primary text-wrap'>Test1: { test1 }, Test2: { test2 }</div>;
};

export default Home;
