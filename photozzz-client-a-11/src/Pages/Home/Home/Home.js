import React from 'react';
import About from '../About/About';
import About2 from '../About/About2';
import About3 from '../About/About3';
import Banner from '../Banner/Banner';
import Service3 from '../Service3/Service3';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service3></Service3>
            <About></About>
            <About2></About2>
            <About3></About3>
        </div>
    );
};

export default Home;