/* eslint-disable */ 
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0);

  let posts = '강남고기맛집';

  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경( newArray );

    // 글제목변경(['여자 코트 추천', '서초 우동 맛집', '자바독학']);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>  
      <button onClick={() => { 제목바꾸기() } }>변경버튼</button>
      <div className="list">
        <h3>{ 글제목[0] } <span onClick={ () => { 따봉변경(따봉 + 1) } }>👍</span>{따봉} </h3>
        <p>9월 3일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[1] }</h3>
        <p>9월 4일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[2] }</h3>
        <p>9월 5일 발행</p>
        <hr/>
      </div>

    </div>
  );
}

export default App;
