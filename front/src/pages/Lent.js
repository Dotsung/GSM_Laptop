// @flow
import React from 'react';
import PageTemplate from 'components/base/PageTemplate';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import Banner from 'components/base/Banner';
import { LapTopCard } from 'components/LapTop';

const Lent = () => {
    return (
        <div>
            <PageTemplate header={<Header/>} footer={<Footer/>}>
                <Banner/>
            </PageTemplate>
        </div>
    );
};

export default Lent;