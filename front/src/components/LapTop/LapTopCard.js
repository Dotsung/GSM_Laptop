// @flow
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import styled from "styled-components";

const StyledButton = styled(({variant, color}) => (
  <Button classes={{ label: 'label'}} variant={variant} color={color} />
))`
  &&{
    height: 50px;
    width: 100px;
  }
`;

const StyledTypography = styled(Typography)`
  && {
      color : #000000;
      text-align:center; 
      && h1{
        margin-top: 200px;
        font-size : 10rem;
      }
      && h2 {
        margin-top: 100px;
        font-size : 4rem;
      }
      && h3 {
        font-size : 2rem;
        margin-bottom : 300px;
      }
  }
`

class LapTopCard extends Component {
    render() {
      const { classes } = this.props;
  
      return (
          <div>
            <StyledTypography>
              <h2>아주 빠르게 자습신청하세요</h2>
              <h1>36</h1>
              <h3>남은 좌석</h3>
              <StyledButton variant="outlined" color="inherit">신청하기</StyledButton>
            </StyledTypography>
          </div>
        );
    }
  }

export default LapTopCard;