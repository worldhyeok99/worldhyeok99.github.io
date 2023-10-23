import React, { Component } from 'react';
import './App.css';
import ImageSlider from './ImageSlider';

function showMenu(menuNumber) {
  document.getElementById(`menu${menuNumber}`).style.display = "block";
}

function hideMenu(menuNumber) {
  document.getElementById(`menu${menuNumber}`).style.display = "none";
}
class App extends Component {

  state = {
    isModalOpen: false,
    popupType:0,  
  };

  showPopup = function(isOpen, type) {
    this.setState({
      isModalOpen: isOpen,
      popupType:type, 
    });
  };
      
  render() {
       const images = [
      './images/sample1.png',
      './images/sample2.png',
    ];
      
    const { isModalOpen , popupType } = this.state;

    return (
      <div>
        <div className="header">
          <a href="#" className="menu-title">사이트이름</a>
          <div>
            <div class="menu-item" onmouseover="showMenu(1)" onmouseout="hideMenu(1)">메뉴1
              <div class="dropdown-menu" id="menu1">
                <a href="#">서브메뉴1</a>
                <a href="#">서브메뉴2</a>
                <a href="#">서브메뉴3</a>
              </div>
            </div>
            <div class="menu-item" onmouseover="showMenu(2)" onmouseout="hideMenu(2)">메뉴2
              <div class="dropdown-menu" id="menu2">
                <a href="#">서브메뉴4</a>
                <a href="#">서브메뉴5</a>
                <a href="#">서브메뉴6</a>
              </div>
            </div>    
            <div class="menu-item" onmouseover="showMenu(3)" onmouseout="hideMenu(3)">메뉴3
              <div class="dropdown-menu" id="menu3">
                <a href="#">서브메뉴7</a>
                <a href="#">서브메뉴8</a>
                <a href="#">서브메뉴9</a>
              </div>
            </div>    
          </div>
          <div className="menu-right">
            <a href="#" className="menu-item" onClick={this.showPopup.bind(this, true, 0)}>로그인</a>
            <a href="#" className="menu-item" onClick={this.showPopup.bind(this, true, 1)}>회원가입</a>
          </div>
        </div>
        <div className="body">
        <ImageSlider />
        </div>
            
        {isModalOpen && popupType ==0 &&
            (     
                <div className="modal">
                  <div className="modal-content">
                   <close type="button"  onClick={this.showPopup.bind(this, false, 0)} >X</close>
                    <h3>로그인</h3>
                    <input type="text" placeholder="아이디" />
                    <input type="password" placeholder="비밀번호" />
                    <button type="button">로그인</button>
                  </div>
                </div> 
            )}
        {isModalOpen && popupType == 1 && 
            (     
                <div className="modal">
                  <div className="modal-content">
                   <close type="button"  onClick={this.showPopup.bind(this, false, 1)} >X</close>
                    <h3>회원가입</h3>
                    <input type="email" placeholder="이메일" />
                    <input type="text" placeholder="아이디" />
                    <input type="password" placeholder="비밀번호" />
                    <input type="password" placeholder="비밀번호 확인" /> 
                    <button type="button">회원가입</button>
                  </div>
                </div> 
            )}            
      </div>
    );
  }
}

export default App;