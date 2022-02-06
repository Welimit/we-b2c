import React from 'react';
import ContactImg  from '../../images/contact.png';
import { IoMdCall } from 'react-icons/io';
import { SiGmail } from 'react-icons/si';
import { 
    ContactSec,
    ContactContainer,
    ContainerHeading,
    ContainerBrand,
    ContainerRow,
    ContainerColumn,
    ContainerContent,
    ImgWrapper,
    Img,
    ButtonWrap,
    CallButton,
    MailButton,
} from './ContactSec.elements';


function ContactSection() {

    return (
        <ContactSec>
            <ContactContainer>
                <ContainerHeading>We-Service</ContainerHeading>
                <ContainerContent>
                            Do not hesitate to give us a call, we will be happy to answer you.
                </ContainerContent>
                <ContainerBrand>Don't throw away, contact us!</ContainerBrand>
                <ContainerRow>
                    <ContainerColumn>
                        <ButtonWrap>
                            <a href="tel:+918825826848"><CallButton ><IoMdCall /> Call</CallButton></a>
                            <a href="mailto:deepakpc79@gmail.com"><MailButton ><SiGmail /> Mail</MailButton></a>
                        </ButtonWrap>
                    </ContainerColumn>
                    <ContainerColumn>
                        <ImgWrapper>
                            <Img src={ContactImg} alt='' />
                        </ImgWrapper>
                    </ContainerColumn>
                </ContainerRow>
            </ContactContainer>
        </ContactSec>
    )
}

export default ContactSection;
