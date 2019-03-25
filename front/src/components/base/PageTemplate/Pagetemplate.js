// @flow
import React from 'react';

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/earlyaccess/hanna.css');
    font-family: 'Hanna', sans-serif;
    background: linear-gradient(45deg, #e66465 30%, #9198e5 70%);
    background-repeat: no-repeat;
  }
`

const PageTemplate = ({ header, children }) => {
  return (
    <div>
      <GlobalStyles/>
      {header}
      <main>{children}</main>
    </div>
  );
};

export default PageTemplate;