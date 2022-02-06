import React from 'react';
import { Button, Container } from '../../globelStyles';
import { Link  } from 'react-router-dom';
import { 
    ServiceSec,
    TopHeading,
    ServiceRow,
    ServiceColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './ServiceSec.elements';


function ServiceSection({
                lightBg,
                lightServiceText,
                serviceHeading,
                imgStart,
                lightTopLine,
                lightText,
                topLine,
                heading,
                lightTextDesc,
                description,
                primary,
                buttonlabel,
                img,
                start,
                alt,

                imgStartTwo,
                topLineTwo,
                headingTwo,
                descriptionTwo,
                startTwo,
                imgTwo,

                topLineThree,
                headingThree,
                descriptionThree,
                startThree,
                imgThree,
            }) {
    return (
        <ServiceSec lightBg={lightBg}>
            <Container>
            <TopHeading lightServiceText={lightServiceText}>{serviceHeading}</TopHeading>
            <ServiceRow imgStart={imgStart}>
                <ServiceColumn>
                    <TextWrapper>
                        <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                        <Heading lightText={lightText}>{heading}</Heading>
                        <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                        <Link to='/contact'>
                                <Button big fontBig primary={primary}>
                                    {buttonlabel}
                                </Button>
                            </Link>
                    </TextWrapper>
                </ServiceColumn>
                <ServiceColumn>
                    <ImgWrapper start={start}>
                        <Img src={img} alt={alt}/>
                    </ImgWrapper>
                </ServiceColumn>
            </ServiceRow>
            <ServiceRow imgStartTwo={imgStartTwo}>
                <ServiceColumn>
                    <TextWrapper>
                        <TopLine lightTopLine={lightTopLine}>{topLineTwo}</TopLine>
                        <Heading lightText={lightText}>{headingTwo}</Heading>
                        <Subtitle lightTextDesc={lightTextDesc}>{descriptionTwo}</Subtitle>
                        <Link to='/contact'>
                                <Button big fontBig primary={primary}>
                                    {buttonlabel}
                                </Button>
                            </Link>
                    </TextWrapper>
                </ServiceColumn>
                <ServiceColumn>
                    <ImgWrapper startTwo={startTwo}>
                        <Img src={imgTwo} alt={alt}/>
                    </ImgWrapper>Three
                </ServiceColumn>
            </ServiceRow>
            <ServiceRow imgStart={imgStart}>
                <ServiceColumn>
                    <TextWrapper>
                        <TopLine lightTopLine={lightTopLine}>{topLineThree}</TopLine>
                        <Heading lightText={lightText}>{headingThree}</Heading>
                        <Subtitle lightTextDesc={lightTextDesc}>{descriptionThree}</Subtitle>
                        <Link to='/contact'>
                                <Button big fontBig primary={primary}>
                                    {buttonlabel}
                                </Button>
                            </Link>
                    </TextWrapper>
                </ServiceColumn>
                <ServiceColumn>
                    <ImgWrapper startThree={startThree}>
                        <Img src={imgThree} alt={alt}/>
                    </ImgWrapper>
                </ServiceColumn>
            </ServiceRow>
            </Container>
        </ServiceSec>
    )
}

export default ServiceSection;
