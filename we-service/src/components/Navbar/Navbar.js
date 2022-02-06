import React,{useState}from 'react';
import {  BsFilterRight } from 'react-icons/bs';
import { AiOutlineClose } from "react-icons/ai";
import { Button } from '../../globelStyles';
import { 
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileSection,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
} from './Navbar.elements';

function Navbar() {

    const [click, setCLick] = useState(false);
    //const [button, setButton] = useState(true);

    const handleClick = () => setCLick(!click);
    const closeMobileMenu = () => setCLick(false)

    return(
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick={closeMobileMenu}>
                        <NavIcon />
                        We
                    </NavLogo>
                    <MobileSection >
                        <MobileIcon onClick={handleClick}>
                            {click ? <AiOutlineClose /> : <BsFilterRight />}
                        </MobileIcon>
                    </MobileSection>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/' onClick={closeMobileMenu}>
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/service' onClick={closeMobileMenu}>
                                Service
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/contact' onClick={closeMobileMenu}>
                                <Button primary>Call us</Button>
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    ) 
}

export default Navbar;
