import React from 'react';
import styled from 'styled-components';
import gobackIcon from "../../shared/icons/icnBackNormalBlack35.svg";
import { Meter } from "grommet";


const Type = ({type, onBack}) => {
const types = ["취업", "공모전", "자격증", "독서", "운동", "외국어", "직업탐색", "자기개발", "기타"]



    return (
        <Container>
        <div className="arrow"
         onClick={onBack}>
          <img src={gobackIcon} alt='goback'/>
        </div>
      <div className="top"></div>
      <div className="progressBar">
        <Meter
          size="xsmall"
          height="67px"
          width="375px"
          type="bar"
          background="#FAFAFA"
          color="#6dbb91"
          value={80}
        />
      </div>
      <div className="title">
        <div className="title-text">챌린지 주제</div>
        <textarea
          className="titleInput"
          //  value={title}
          placeholder="이번 챌린지의 주제를 아래에서 &#13;&#10;선택합니다"
          maxLength="0"
          type="text"
        ></textarea>
      </div>
        {types.map((cur,i)=> 
      <Boxes>
        <div className="box">
          <text key={i}>{cur}</text>
        </div>
        </Boxes>
        )}
    </Container>
  );
};

export default Type;

const Container = styled.div`

  .arrow {
    position: absolute;
    margin: 60px 0px 0px 10px;
    cursor: pointer;
  }
  .top {
    height: 44px;
    width: 100%;
    border-bottom: 2px solid #3f3f3f;
  }
  .progressBar {
    height: 67px;
    width: 100%;
    border-bottom: 2px solid #3f3f3f;
  }
  .title {
    min-height: 120px;
    width: 100%;
    border-bottom: 2px solid #3f3f3f;

    .title-text {
      height: 35px;
      width: 130px;
      font-size: 24px;
      color: #3f3f3f;
      font-family: Gmarket SansBold;
      margin: 40px 0px 0px 30px;
    }
    .titleInput {
      height: 54px;
      width: 300px;
      outline: none;
      margin-left: 30px;
      border: 0px;
      max-height: 54px;
      max-width: 295px;
      resize: none;
      font-size: 15px;
      font-family: Gmarket Sans;
    }
  }
  
  `;
  const Boxes = styled.div`
    width: 377px;
    height: 381px;
    .box {
      text-align: center;
      font-family: Gmarket SansMedium;
      padding-top: 55px;
      height: 127px;
      width: 124px;
      border-bottom: 2px solid #3f3f3f;
      border-right: 2px solid #3f3f3f;
      background-color: #ffffff;
      &:hover {
          cursor: pointer;
          background-color: #6dbb91;
      }
    }
  
  `; 
   