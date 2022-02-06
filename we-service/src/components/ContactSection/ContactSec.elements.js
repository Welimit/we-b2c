import styled from "styled-components";

export const ContactSec = styled.div`
    color: #fff;
    padding: 100px 0;
`;

export const ContactContainer = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 50px;
    padding-right: 50px;

    @media screen and (max-width: 991px){
        padding-right: 30px;
        padding-left: 30px;
    }
`;

export const ContainerHeading = styled.h1`
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    line-height: 1.1;
    padding-bottom: 10px;
    font-weight: 600;
    color: #1c2237;
`;

export const ContainerContent = styled.p`
    text-align: center;
    font-size: 20px;
    font-weight: lighter;
    padding-bottom: 20px;
    color: #1c2237;
`;

export const ContainerBrand = styled.h2`
    text-align: center;
    justify-content: center;
    font-size: 25px;
    padding-bottom: 50px;
    color: #1c2237;
`;

export const ContainerRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export const ContainerColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
`;

export const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
    justify-content: flex-start;
`;

export const ButtonWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 30px;
    align-items: center;
`;

export const CallButton = styled.button`
    border-radius: 50px;
    background: #4b59f7;
    white-space: nowrap;
    padding: 12px 64px;
    color: #fff;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    margin-bottom: 30px;

    &:hover{
        transition: all 0.3s ease;
        background: #fff;
        color: #4b59f7;
        border: 1px solid #4b59f7;
    }

    @media screen and (max-width: 960px){
        width: 100%;
    }
`;

export const MailButton = styled.button`
    border-radius: 50px;
    background: #4b59f7;
    white-space: nowrap;
    padding: 12px 68px;
    color: #fff;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover{
        transition: all 0.3s ease;
        background: #fff;
        color: #4b59f7;
        border: 1px solid #4b59f7;
    }

    @media screen and (max-width: 960px){
        width: 100%;
    }
`;
