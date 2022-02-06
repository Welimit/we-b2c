import React from 'react';
import { NavIcon } from '../Navbar/Navbar.elements';
import { 
    FooterContainer,
    FooterBranch,
    Branch,
    SubBranch,
    FooterBottom,
    FooterLogo,
    FooterRights
} from './Footer.elements';

function Footer() {
    return(
        <FooterContainer>
            <FooterBranch>
                <Branch>Trichy</Branch>
                <SubBranch>Ponmalai | K.K Nagar | Palakarai | Trichy Junction | Mannarpuram |
                            Crawford | Manikandam .
                </SubBranch>
            </FooterBranch>
            <FooterBottom>
                <FooterLogo>
                    <NavIcon />
                    We
                </FooterLogo>
                <FooterRights>We © 2022.All Rights Reserved.</FooterRights>
            </FooterBottom>
        </FooterContainer>
    ) 
}

export default Footer;
