import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';


function HeaderNav() {
    const [currentNav, setCurrentNav] = useState(false);
    
    const hoverNav = () => {
        setCurrentNav(!currentNav)
    }
    
    
    
const HeaderNavBody = styled.div`
  background-color: white;
  width: 100%;
  height: 4rem;
  position: sticky;
  top: 0;
  border-bottom: solid 1px rgb(212, 212, 212);
  display: grid;
  place-items: center;

`


return (
    <HeaderNavBody onHover={hoverNav}>
      <span id="title">
        <img id="logo" src="." alt="logo" />
      </span>
      <div id="menu">
        <Link to="/">항공권 예매</Link>
        <Link to="/">나의 예약</Link>
        <Link to="/">서비스 안내</Link>
        <Link to="/">온라인 면세점</Link>
        <Link to="/">이벤트</Link>
        <Link to="/">제휴</Link>
      </div>
    </HeaderNavBody>
  );
}

export default HeaderNav;
