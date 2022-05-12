import React from "react";
import styled from "styled-components";
import gobackIcon from "../../shared/icons/icnBackNormalBlack35.svg";
import { Meter } from "grommet";

const Type = ({ onBack, onTypeChange }) => {
  const types = [
    "취업",
    "공모전",
    "자격증",
    "독서",
    "운동",
    "외국어",
    "직업탐색",
    "자기개발",
    "기타",
  ];

  return (
    <Container>
      <div className="arrow" onClick={onBack}>
        <img src={gobackIcon} alt="goback" />
      </div>
      <div className="top"></div>
      <div className="progressBar">
        <Meter
          size="xsmall"
          height="67px"
          width="375px"
          type="bar"
          background="#FAFAFA"
          color="#1FB57E"
          value={80}
        />
      </div>
      <div className="title">
        <div className="title-text">챌린지 주제</div>
        <textarea
          className="titleInput"
          placeholder="이번 챌린지의 주제를 아래에서 &#13;&#10;선택합니다"
          maxLength="0"
          type="text"
        ></textarea>
      </div>
      <Boxes>
        {types.map((cur, i) => (
          <div
            className="box"
            key={cur + i}
            onClick={() => {
              onTypeChange(cur);
            }}
          >
            <p>{cur}</p>
          </div>
        ))}
      </Boxes>
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
    border-bottom: 2px solid #151419;
  }
  .progressBar {
    height: 67px;
    width: 100%;
    border-bottom: 2px solid #151419;
  }
  .title {
    min-height: 120px;
    width: 100%;
    border-bottom: 2px solid #151419;

    .title-text {
      height: 35px;
      width: 130px;
      font-size: 24px;
      color: #151419;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  width: 378px;
  max-height: 381px;

  .box {
    position: relative;
    font-family: Gmarket SansMedium;
    padding-top: 55px;
    text-align: center;
    height: 96px;
    width: 123.7px;
    border-bottom: 2px solid #151419;
    border-right: 2px solid #151419;
    background-color: #ffffff;
    margin-right: 0px;
    &:hover {
      cursor: pointer;
      background-color: #1FB57E;
    }
  }
`;
