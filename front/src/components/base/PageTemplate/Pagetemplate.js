// @flow
import React from 'react';

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {@import url(
    http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
    font-family: 'nanumgothic', sans-serif;
    background: #6EC367
    background-repeat: no-repeat;
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