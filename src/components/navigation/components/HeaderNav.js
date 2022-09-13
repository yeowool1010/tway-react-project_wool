import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import ToggleMenu from './ToggleMenu';

const menuList = [
    {tapName:"항공권 예매", list: ["항공권예매", "이벤트/프로모션", "운임 및 수수료 안내"]},
    {tapName:"나의 예약", list: ["예약조회", "온라인 체크인", "부가서비스 추가구매"]},
    {tapName:"서비스 안내", 
        list: [{
            "여행준비": [{ 
                listName1: "항공권 예매 안내",
                listName2: "단체 항공권 예매 안내",
                listName3: "온라인 체크인 안내",
                listName4: "가족 동반 여행",
                listName5: "도움이 필요한 고객",
                listName6: "혼자 여행하는 어린이",
                listName7: "t'pet(반려동물 동반 여행)",
                listName8: "티웨이페이",
                listName9: "항공기 정보"
            }],
            "수하물 안내": [{ 
                listName1: "무료 수하물",
                listName2: "특수 수하물",
                listName3: "운송 제한 물품",
                listName4: "수하물 배상"
            }],
            "항공편 및 공항 정보": [{ 
                listName1: "운항스케줄 조회",
                listName2: "출/도착 조회",
                listName3: "셀프 체크인 안내",
                listName4: "탑승 수속 안내",
                listName5: "공항 카운터 정보",
                listName6: "t'way 라운지",
                listName7: "코로나 19 종합 안내"
            }],
            "기내 서비스": [{ 
                listName1: "기내 제공 서비스",
                listName2: "t'shop",
                listName3: "기내 면세품 예약 및 구매 안내",
                listName4: "channel t'",
                listName5: "기내 이벤트"
            }],
            "부가서비스": [{ 
                listName1: "부가서비스 번들 구매",
                listName2: "사전좌석 구매",
                listName3: "수하물 추가 구매",
                listName4: "기내식 사전 주문",
                listName5: "결제시한연장 서비스",
                listName6: "옆좌석 구매",
                listName7: "t'carrier(펫 운송용기)/포장용 비닐 구매",
                listName8: "t'care 서비스",
                listName9: "원클릭 여행자보험"
            }],
        }]
    },
    {tapName:"온라인 면세점", 
        list: [{
            "카테고리": [{ 
                listName1: "주류",
                listName2: "화장품 & 향수",
                listName3: "쥬얼리 & 선물용품",
                listName4: "건강제품류"
            }],
            "공지사항": [{ 
            }],
            "나의 주문": [{ 
                listName1: "주문조회"
            }],
            "이용 안내": [{ 
                listName1: "FAQ"
            }],
            "이벤트": [{ 
            }],
        }]
    },
    {tapName:"이벤트", 
        list: [{
            "이벤트/프로모션": [{ 
            }],
            "쿠폰": [{ 
                listName1: "쿠폰 안내",
                listName2: "쿠폰북"
            }]
        }]
    },
    {tapName:"제휴", list: ["호텔", "쇼핑 및 편의", "렌터카", "액티비티", "금융 및 여행자보험", "OTT & WIFI"]},

  ];



const HeaderInner = styled.div`
    width: 100%;
    height: 85px;
    margin: 0;
    > .container {
        margin: 0;
        background-color: rgba(0,0,0,0);
        transition: 0.5s;
        color: white;
        &:hover {
            background-color: white;
            transition: 0.5s;
            color: black;
        }
    }
`

const TabMenu = styled.ul`
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    list-style: none;
    margin: 0;

  .submenu {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    padding-left: 20px;
    cursor: pointer;
    transition: 0.5s;
  }

  .focused {
    /* background-color: red; */
    display: flex;
    justify-content: center;
    flex-grow: 1;
    transition: 0.5s;
  }
  .focused:hover {
    background-color: red;
  }
  
`;

const Side = styled.div`
    width: 140px;
    height: 74px;
    list-style: none;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    .sel_lang_wrap {
        display: flex;
        justify-content: space-around;
        
    }
    .util_menu {
        display: flex;
        justify-content: space-around;
    }

    .langBtn {
        border: 0;
        outline: 0;
        background-color: rgba(0,0,0,0);
        cursor: pointer;
    }
`

function HeaderNav() {


    const [currentTab, setCurrentTab] = useState(0)

      const selectMenuHandler = (index) => {
        setCurrentTab(index);
      };

      const [isOn, setisOn] = useState(false);
      const backgroundHandler = (e) => {
        setisOn(!isOn);
      }

      const languageArr = [
          { name: '한국', lang: '한국어' },
          { name: 'Laos', lang: 'English' },
          {  name: '日本', lang: '日本語' },
        ];




    return (

        <HeaderInner >
        <div className='container'>
            
            <TabMenu>

            {menuList.map((el, index) => {
                return <li key={index} 
                className={`${index === currentTab ? 'submenu focused' : 'submenu'}`}
                onMouseOver={() => selectMenuHandler(index)}
                onMouseOut={() => setCurrentTab(9)}
                >{el.tapName}
                    </li>
            })}

  

                <Side>
                    <div className='sel_lang_wrap'>
                    {languageArr.map((el, index) => {
                        if(el.name === "한국") {
                            return <li key={index} >
                                    <button className='langBtn'>{el.name} | {el.lang}</button> 
                                    </li>
                        }
                    
            })}
                    </div>
                    <div className='util_menu'>
                        <a href='/' className='btn_login'><img src=".src/assets/icon/ico_top_login.png"></img> </a>
                        <a href='/' className='btn_search'><img src=".src/assets/icon/ico_top_search.png"></img></a>
                        <a href='/' className='btn_allmenu'><img src=".src/assets/icon/ico_top_allmenu.png"></img></a>
                    </div>
                </Side>
            </TabMenu>
        </div>

        </HeaderInner>
    );
}

export default HeaderNav;
