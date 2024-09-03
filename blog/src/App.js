/* eslint-disable */ 
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [날짜, 날짜변경] = useState(['9월 3일','9월 4일','9월 5일'])
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경( newArray );
  }


  return (
    <div className="App">
      <div className="black-nav">
        <div>React Blog</div>
      </div>  
      <button onClick={() => { 제목바꾸기() } }>변경버튼</button>
      <br />
      <div>
        {/* Add */}
      <input onChange={(e) => { 
        입력값변경(e.target.value);
       }} />
       <button onClick={() => {
        if (입력값 == '') {
          alert('입력값을 입력하세요');
          return;
        } 
        let copy = [...글제목];
        let ThumCopy = [...따봉];
        let dateCopy = [...날짜];
        copy.unshift(입력값);        
        ThumCopy.unshift(0);
        dateCopy.unshift(new Date().toLocaleDateString());
        글제목변경( copy );
        따봉변경( ThumCopy );
        날짜변경 ( dateCopy );
       }}>Add</button>
      </div>

      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h3 onClick={ () => { setModal(true); setTitle(i) }}>{ 글제목[i] } 
                <span onClick={ (e) => {
                  e.stopPropagation(); 
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy)
                 } }>👍</span>{따봉[i]} 
              </h3>
              <p>{날짜[i]} 발행</p>
              <button onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}>삭제</button>
              <hr/>
            </div>
          )
        })
      }

      {
        // 조건식 ? 참일때 실행할코드 : 거짓일때 실행할코드
        modal == true ? <Modal color={['skyblue', 'lightpink']} title={title} 글제목={글제목} 날짜={날짜} 제목바꾸기={제목바꾸기} /> : null
      }
     
     <Modal2 />
    </div>

   

  );
}


function Modal(props){
  return (
    <div className="modal" style={{background : props.color[0]}}>
        <h2>{props.글제목[props.title]}</h2>
        <p>{props.날짜[props.title]} 발행</p>
        <p>상세내용</p>
        <button onClick={ () => {props.제목바꾸기()}}>글수정</button>
      </div>
  )
}

class Modal2 extends React.Component{
  constructor(){
    super();
    // State 만들기
    this.state = {
      name : 'kim',
      age : 20,
    }
  }
  render(){
    return(
      <div>하이 {this.state.age}
        <button onClick={() => {
          this.setState({age : 21})
        }}>State 변경 버튼</button>
      </div>
    )
  }

}

export default App;
