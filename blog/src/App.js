/* eslint-disable */ 
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경( newArray );
  }


  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>  
      <button onClick={() => { 제목바꾸기() } }>변경버튼</button>

      {/* <div className="list">
        <h3 onClick={ () => { setModal(!modal) }}>{ 글제목[0] } <span onClick={ () => { 따봉변경(따봉 + 1) } }>👍</span>{따봉} </h3>
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
      </div> */}

      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h3 onClick={ () => { setModal(true); setTitle(i) }}>{ 글제목[i] } 
                <span onClick={ () => { 
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy)
                 } }>👍</span>{따봉[i]} 
              </h3>
              <p>9월 3일 발행</p>
              <hr/>
            </div>
          )
        })
      }

      {
        // 조건식 ? 참일때 실행할코드 : 거짓일때 실행할코드
        modal == true ? <Modal color={['skyblue', 'lightpink']} title={title} 글제목={글제목} 제목바꾸기={제목바꾸기} /> : null
      }
     

    </div>
  );
}

<input>f</input>



function Modal(props){
  return (
    <div className="modal" style={{background : props.color[0]}}>
        <h2>{props.글제목[props.title]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={ () => {props.제목바꾸기()}}>글수정</button>
      </div>
  )
}

export default App;
