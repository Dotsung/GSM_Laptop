// @flow
import React from 'react';
import PageTemplate from 'components/base/PageTemplate';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer'
import { LapTopCard } from 'components/LapTop';

const Lent = () => {
    return (
        <div>
            <PageTemplate header={<Header/>} footer={<Footer/>}>
                <LapTopCard/>
            </PageTemplate>
        </div>
    );
};

export default Lent;