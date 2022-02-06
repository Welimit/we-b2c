import React from 'react';
import { Container } from '../../globelStyles';
import { 
    WhySec,
    WhyWrapper,
    TopHeading,
    SubHeading,
    WhyQuote,
    WhyRow,
    WhyColumn,
    WhyImg,
    Img,
    WhyContent,
    WhyContentSub
} from './WhySection.elements';


function WhySection ({
                lightBg,
                lightText,
                whyHeading,
                lightTextDesc,
                whySub,
                quote,
                whyHeadingTwo,
                imgStart,
                lightContent,
                lightContentSub,
                img,
                contentOne,
                contentSubOne, 
                img1,
                contentTwo,
                contentSubTwo,
                img2,
                contentThree,
                contentSubThree,
                alt,
                start,
}) {

    return(
        <WhySec lightBg={lightBg}>
            <Container>
                <WhyWrapper>
                    <TopHeading lightText={lightText}>{whyHeading}</TopHeading>
                    <SubHeading lightTextDesc={lightTextDesc}>{whySub}</SubHeading>
                    <WhyQuote lightTextDesc={lightTextDesc}>{quote}</WhyQuote>
                    <TopHeading lightText={lightText}>{whyHeadingTwo}</TopHeading>
                </WhyWrapper>
                <WhyRow imgStart={imgStart}>
                    <WhyColumn>
                        <WhyImg start={start}>
                            <Img src={img} alt={alt} />
                        </WhyImg>
                        <WhyContent lightContent={lightContent}>{contentOne}</WhyContent>
                        <WhyContentSub lightContentSub={lightContentSub}>{contentSubOne}</WhyContentSub>
                    </WhyColumn>
                    <WhyColumn>
                        <WhyImg start={start}>
                            <Img src={img1} alt={alt} />
                        </WhyImg>
                        <WhyContent lightContent={lightContent}>{contentTwo}</WhyContent>
                        <WhyContentSub lightContentSub={lightContentSub}>{contentSubTwo}</WhyContentSub>
                    </WhyColumn>
                    <WhyColumn>
                        <WhyImg start={start}>
                            <Img src={img2} alt={alt} />
                        </WhyImg>
                        <WhyContent lightContent={lightContent}>{contentThree}</WhyContent>
                        <WhyContentSub lightContentSub={lightContentSub}>{contentSubThree}</WhyContentSub>
                    </WhyColumn>
                </WhyRow>
            </Container>
        </WhySec>
    ) 
};

export default WhySection;
