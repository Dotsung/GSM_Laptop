// @flow
import React from 'react';
import PageTemplate from 'components/base/PageTemplate';
import Header from 'components/base/Header';
import LapTopList from 'components/LapTopList';

const Lent = () => {
    return (
        <div>
            <PageTemplate header={<Header/>}>
                <LapTopList/>
            </PageTemplate>
        </div>
    );
};

export default Lent;