// @flow
import React from 'react';
import PageTemplate from 'components/base/PageTemplate';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer'
import LapTopList from 'components/LapTopList';

const Lent = () => {
    return (
        <div>
            <PageTemplate header={<Header/>} footer={<Footer/>}>
                <LapTopList/>
            </PageTemplate>
        </div>
    );
};

export default Lent;