// @flow
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import styled from "styled-components";

const StyledCard = styled(Card)`
  &&{
    margin-top : 100px;
    margin-left : 300px;
    margin-right : 300px;
    margin-bottom : 100px;
    width: 275;
  }
`
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
      @import url('https://fonts.googleapis.com/earlyaccess/hanna.css');
      font-family: 'Hanna', sans-serif;
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
              <StyledCard>
                <CardContent>
                  <StyledTypography>
                    <h2>아주 빠르게 자습신청하세요</h2>
                    <h1>36</h1>
                    <h3>남은 좌석</h3>
                    <StyledButton variant="outlined" color="inherit">신청하기</StyledButton>
                  </StyledTypography>
                </CardContent>
              </StyledCard>
          </div>
        );
    }
  }

export default LapTopCard;