// @flow
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import styled from "styled-components";

const Banner = styled.div`
    text-align:center; 
`;

const BannerCard = styled.div`
    text-align:center; 
    width: 50%;
    border: 1px solid #212121;
    margin-top: 100px;
    margin-bottom: 200px;
    background-color: #000000;
    opacity: 0.7;
    display: inline-block;
`;

const StyledTypography = styled(Typography)`
  && {
      color : white;
      text-align:center; 
      && h1{
        margin-top: 200px;
        font-size : 10rem;
      }
      && h2 {
        margin-top: 200px;
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
            <Banner>
              <BannerCard>
                <StyledTypography>
                    <h2>아주 빠르게 자습신청하세요</h2>
                    <h1>36</h1>
                    <h3>남은 좌석</h3>
                </StyledTypography>
              </BannerCard>
            </Banner>
          </div>
        );
    }
  }

export default LapTopCard;