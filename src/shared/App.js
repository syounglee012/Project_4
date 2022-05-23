import "./App.css";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ActionCreators as userActions } from "../redux/modules/user";
import { getCookie } from "./cookie";

import Main from "../pages/Main";
import Detailpage from "../pages/detail/Detailpage";
import Login from "../pages/LogIn";
import SignUp from "../pages/signup/SignUp";
import SignupDone from "../pages/signup/SignupDone";
import MyUser from "../pages/MyUser";
import Chat from "../pages/Chat";
import BeginPage from "../pages/test/BeginPage";
import QuestionPage from "../pages/test/QuestionPage";
import ResultPage from "../pages/test/ResultPage";
import KakaoAuth from "./socialLogin/KakaoAuth";
import NaverAuth from "./socialLogin/NaverAuth";
import Search from "../pages/Search";
import SignupData from "../pages/signup/SignupData";
import Challenge from "../pages/Challenge";
import DetailpageRank from "../pages/detail/DetailpageRank";
import DetailpageLink from "../pages/detail/DetailpageLink";
import Link from "../pages/Link";
import MyEdit from "../pages/MyEdit";
import mainImage from "../shared/images/imgWebMainSoliderGreen640.png";

function App() {
  const dispatch = useDispatch();
  const router = useSelector((state) => state.router.location.pathname);

  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      dispatch(userActions.loginCheckDB());
    }
  }, [dispatch, router]);

  return (
    <Background>
      <div id="leftside">
        <div id="title">
          <div id="titleText">전역하고 뭐하지</div>
        </div>
        <div id="mainImage">
          <img
            id="logo"
            src={mainImage}
            alt="mainImage"
            width="640"
            height="370"
          />
        </div>
        <div id="lowerBox">
          <div id="upperText">SOLDIER CHALLENGERS</div>
          <div id="lowerText">솔저 챌린저스</div>
          <span id="lowerText">해야지</span>
        </div>
        <div id="bottomBox">
          <div id="bottomText">
            운동/ 독서/ 스터디/ 자기개발/ 취업/ 외국어/ 진로고민/ 자격증
          </div>
        </div>
      </div>
      <DivBox>
        <Router>
          <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<SignUp />}></Route>
            <Route
              exact
              path="/signupdata/:id"
              element={<SignupData />}
            ></Route>
            <Route exact path="/signupdone" element={<SignupDone />}></Route>
            <Route
              path="/api/auth/kakao/callback"
              exact
              element={<KakaoAuth />}
            />
            <Route
              path="/api/auth/naver/callback"
              exact
              element={<NaverAuth />}
            ></Route>
            <Route
              exact
              path="/detail/chat/:challengeId"
              element={<Chat />}
            ></Route>
            <Route
              exact
              path="/main/preTest/"
              element={<BeginPage />}
            ></Route>
            <Route exact path="/search/" element={<Search />}></Route>
            <Route
              exact
              path="/main/preTest/question"
              element={<QuestionPage />}
            ></Route>
            <Route
              exact
              path="/main/preTest/:id"
              element={<ResultPage />}
            ></Route>
            <Route exact path="/myPage/:id" element={<MyUser />}></Route>
            <Route exact path="/link/:challengeId" element={<Link />}></Route>
            <Route
              exact
              path="/myPage/userProfile/:userId"
              element={<MyEdit />}
            ></Route>
            <Route
              exact
              path="/detailpage/:challengeId"
              element={<Detailpage />}
            ></Route>
            <Route
              exact
              path="/detailpage/rank/:challengeId"
              element={<DetailpageRank />}
            ></Route>
            <Route
              exact
              path="/detailpage/link/:challengeId"
              element={<DetailpageLink />}
            ></Route>
            <Route exact path="/challenge" element={<Challenge />} />
          </Routes>
        </Router>
      </DivBox>
    </Background>
  );
}

const Background = styled.div`
  box-sizing: border-box;
  display: flex;
  border: 4px solid #151419;
  height: 100vh;
  z-index: -10;
  flex: 1;
  #leftside {
    border-right: 2px solid #151419;
    width: 834px;
    height: 100%;
    display: flex;
    flex-direction: column;
    #title {
      border-bottom: 2px solid black;
      padding: 45px;
        display: flex;
        justify-content: center;
      box-sizing: border-box;
      #titleText {
        width: 630px;
        height: 100px;
        font-size: 88px;
        font-family: Gmarket SansBold;
        z-index: -10;
      }
    }
    #mainImage {
      border-bottom: 2px solid black;
      height: 364px;
      #logo {
        margin: 43px;
      }
    }
    #lowerBox {
      padding: 45px 140px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-sizing: border-box;
      border-bottom: 2px solid #151419;
      z-index: -10;
      flex: 2;
      #upperText {
        margin-bottom: 16px;
        font-size: 26px;
        font-family: Gmarket SansMedium;
      }
      #lowerText {
        display: flex;
        box-sizing: border-box;
        font-size: 60px;
        font-family: Gmarket SansBold;
      }
    
    }
    #bottomBox {
    
      #bottomText {
        padding: 24px 140px;
        display: flex;
        font-size: 20px;
        font-family: Gmarket Sans;
      }
    }
  }
`;

const DivBox = styled.div`
  height: 100%;
  margin: 0 auto;

`;

export default App;
