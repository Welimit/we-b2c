import React from 'react';
import { ServiceSection, WhySection } from '../../components';
import { ServicePage, WhyPage } from './Data';

const Service = () => {
    return(
        <>
            <ServiceSection {...ServicePage} />
            <WhySection {...WhyPage} />
        </>
    )
};

export default Service;
