import React from 'react';
import { Button, Container } from '../../globelStyles';
import { Link } from 'react-router-dom';
import { 
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './InfoSection.elements';

function InfoSection({
    primary,
    lightBg,
    imgStart,
    lightTopLine,
    topLine,
    lightText,
    heading,
    lightTextDesc,
    description,
    buttonlabel,
    start,
    img,
    alt
}) {
    return(
        <InfoSec lightBg={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
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
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt}/>
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </InfoSec>
    )
}

export default InfoSection;
