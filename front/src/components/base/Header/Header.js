// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styled from "styled-components";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const StyledAppBar = styled(AppBar)`
    && {
        display : flex;
        background-color: rgba(0,0,0,0);
        height: 100px;
        box-shadow: 0px 2px 0px rgba(255, 105, 135, 0);
    }
`;

const StyledTypography = styled(({marginTop, ...other}) => (
  <Typography {...other}/>
))`
  && {
    @import url('https://fonts.googleapis.com/earlyaccess/hanna.css');
    font-family: 'Hanna', sans-serif;
    margin-top : ${props => props.marginTop};
    color : white;
    font-size : 3rem;
  }
`

const Grow = styled.div`
    background: black;
    flex-grow: 1;
`;

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
        <div>
          <StyledAppBar position="static" color="default">
            <Toolbar>
              <StyledTypography marginTop="25px" variant="h6" color="inherit">
                노트북 대여 시스템
              </StyledTypography>
              <Grow/>
            </Toolbar>
          </StyledAppBar>
        </div>
      );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Header;