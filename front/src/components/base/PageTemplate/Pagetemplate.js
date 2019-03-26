// @flow
import React from 'react';

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-image: url(https://cdn.pixabay.com/photo/2016/06/25/12/52/laptop-1478822_960_720.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 0px;
  }
`

const PageTemplate = ({ header, children, footer }) => {
  return (
    <div>
      <GlobalStyles/>
      {header}
      <main>{children}</main>
      {footer}
    </div>
  );
};

export default PageTemplate;