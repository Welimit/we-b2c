import styled from "styled-components";
import { Container } from '../../globelStyles';
import { Link } from 'react-router-dom';
import { FaMagento } from 'react-icons/fa'
import { IoIosCall } from "react-icons/io";

export const Nav = styled.div`
    background: #101522;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: relative;
    top: 0;
    z-index: 999;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;
    ${Container}
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-content: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;

export const NavIcon = styled(FaMagento)`
    margin-right: 0.3rem;
`;

export const MobileSection = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        display: flex;
        top: 0;
        right: 0;
        cursor: pointer;
    }
`;

export const IoIosCallLogo = styled(IoIosCall)`
    margin-right: 1rem;
    font-size: 24px;
`;

export const NavContact = styled(Link)`
    display: flex;

    @media screen and (max-width: 960px){
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 1rem;
        transform: translate( -100%, 80%);
        cursor: pointer;
    }
`;

export const ContactNum = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: flex;
        transform: translate(10%, 50%);
        color: #fff;
        font-weight: lighter;
    }
`;

export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 960px) {
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 70%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }

    &:hover{
        transition: all 0.2s ease-in;
        color: #4b59f7;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({ click }) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: #101522;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover{
        border-bottom: 2px solid #4b59f7;
    }

    @media screen and (max-width: 960px) {
    width: 100%;

        &:hover {
            border: none;
        }
    }
`;

export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #4b59f7;
            transition: all 0.3s ease;
        }
    }
`;

export const NavLinksClose = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    @media screen and (max-width: 960px) {
        display: none;
    }
`;