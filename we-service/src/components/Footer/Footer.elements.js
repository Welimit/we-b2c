import styled from "styled-components";

export const FooterContainer = styled.div`
    background-color:  #000;
    padding: 2rem 0 1rem 0;
    display: flex;
    flex-direction: column;
`;

export const FooterBranch = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-right: 50px;
    padding-left: 50px;
    padding-bottom: 30px;

`;

export const Branch = styled.p`
    font-size: 18px;
    color: #D3D3D3;

    &:hover{
        color: #fff;
    }
`;

export const SubBranch = styled.p`
    color: #D3D3D3;
    font-size: 17px;

    &:hover{
        color: #fff;
    }
`;

export const FooterBottom = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding-top: 10px;
    align-items: center;
`;

export const FooterLogo = styled.h2`
    font-size: 2rem;
    color: #D3D3D3;
`;

export const FooterRights = styled.p`
    font-size: 16px;
    color: #D3D3D3;
`;