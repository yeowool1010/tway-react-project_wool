import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideNavBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    .side-nav {
        width: 110px;
        padding: 10px;
        background-color: rgba(0,0,0,0.5);
        color: white;
        border-radius: 5%;
        margin-right: 3%;
        display: flex;
        flex-flow: column;
        cursor: pointer;

    }
    .side-nav-inner {

    }
`

function SideNav() {


    return (
        <SideNavBox>
            <div className='side-nav'>
                <div className='side-nav-inner'>
                    <img src="./"></img>
                    <p>항공훈련센터</p>
                </div>
                <div className='side-nav-inner'>
                    <img src="./"></img>
                    <p>반려동물 동반여행</p>
                </div>
                <div className='side-nav-inner'>
                    <img src="./"></img>
                    <p>쿠폰 다운로드</p>
                </div>
                <div>
                    <p>제휴 더보기 </p>
                </div>
            </div>
        </SideNavBox>
    );
}

export default SideNav;