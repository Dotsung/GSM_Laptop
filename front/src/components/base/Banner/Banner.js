// @flow
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

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

const StyledButton = styled.button`
  background-color: rgba(0,0,0,0);
  color: white;
  border: 1px solid #ffffff;
  margin-bottom: 100px;
  cursor: pointer;
  ${this}:hover{
    background-color: #E6E6E6;
  }
  h4 {
    font-size : 2rem;
    margin-left: 30px;
    margin-right: 30px;
  }
`;

const StyledTypography = styled(Typography)`
  && {
      color : white;
      text-align:center; 
      && h1{
        margin-top: 200px;
        margin-bottom: 110px;
        font-size : 15rem;
      }
      && h2 {
        margin-top: 200px;
        font-size : 4rem;
      }
      && h3 {
        font-size : 2rem;
        margin-bottom : 80px;
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
                    <h2>쉽고 빠르게 자습신청하세요</h2>
                    <h1>36</h1>
                    <h3>남은 좌석</h3>
                </StyledTypography>
                <StyledButton><h4>신청하기</h4></StyledButton>
                <StyledButton><h4>목록 보기</h4></StyledButton>
              </BannerCard>
            </Banner>
          </div>
        );
    }
  }

export default LapTopCard;