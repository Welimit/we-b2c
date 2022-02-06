import React from 'react';
import { InfoSection, ServiceSection, WhySection } from '../../components';
import { HomePageOne, ServicePage, WhyPage } from './Data';

const Home = () => {
    return(
        <>
            <InfoSection {...HomePageOne} />
            <WhySection {...WhyPage} />
            <ServiceSection {...ServicePage} />
        </>
    )
};

export default Home;
