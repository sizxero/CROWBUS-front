import { useEffect, useState } from "react";
import { H4, ContainedButton } from "../../components/atoms";
import { ColumnFlexBoxCenter } from  "../../components/molecules";
import { MainLogo, Menu } from "../../components/organisms";

import { getCookie, removeCookie } from '../../hooks/api/Cookie';
import { useMemberName } from "../../hooks";

const Home = () => {
    const { name } = useMemberName();
    
    return (
        <ColumnFlexBoxCenter className="HomeContainer">
            <MainLogo />
            <ColumnFlexBoxCenter className="MenuWrapper">
            <H4>{name}님, 환영합니다.</H4>
            {getCookie('role') === 'PASSENGER' ? <><Menu role="Passenger" /></> : <></>}
            {getCookie('role') === 'BUSDRIVER' ? <><Menu role="Driver" /></> : <></>}
            <ContainedButton
            className="containedBtnBigGray"
            content="로그아웃" 
            eventHandler={() => {
                removeCookie('user');
                removeCookie('token');
                removeCookie('role');
                window.location.href = '/';
            }}/>
            </ColumnFlexBoxCenter>
        </ColumnFlexBoxCenter>
    );
}

export default Home;