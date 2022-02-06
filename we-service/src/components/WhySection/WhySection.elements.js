import styled from "styled-components";

export const WhySec = styled.div`
    color: #fff;
    padding: 100px 0;
    background: ${({ lightBg }) => ( lightBg ? '#fff' : '#101522')};
`;

export const WhyWrapper = styled.div`
    max-width: 1300px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
    }
`;

export const TopHeading = styled.h1`
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    line-height: 1.1;
    padding-bottom: 30px;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`;

export const SubHeading = styled.p`
    text-align: center;
    font-size: 18px;
    line-height: 24px;
    color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
    padding-bottom: 10px;
`;

export const WhyQuote = styled.p`
    text-align: center;
    font-size: 18px;
    line-height: 24px;
    color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
    padding-bottom: 20px;
`;

export const WhyRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({ imgStart }) => ( imgStart ? 'row-reverse' : 'row')};
`;

export const WhyColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 33.33%;
    flex-basis: 33.33%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 100px;
        padding-right: 50px;
        padding-left: 50px;
    }
`;

export const WhyImg = styled.div`
    max-width: 222px;
    display: flex;
    padding-bottom: 30px;
    justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};

    @media screen and (max-width: 768px) {
        max-width: 100%;
        justify-content: flex-start;
    }
`;

export const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: top;
    max-height: 300px;
`;

export const WhyContent = styled.h2`
    display: flex;
    font-size: 35px;
    justify-content: flex-start;
    color: ${({ lightContent }) => (lightContent ?  '#1c2237' : '#f7f8fa' )};
    padding-bottom: 10px;
    
`;

export const WhyContentSub = styled.h3`
    display: flex;
    font-size: 20px;
    justify-content: flex-start;
    font-weight: lighter;
    color: ${({ lightContentSub }) => (lightContentSub ? '#808080' : '#1c2237')};
`;