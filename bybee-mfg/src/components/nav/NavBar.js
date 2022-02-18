import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ReactComponent as NavLogo } from '../../assets/logos/Logo-1.svg';
import './NavBar.css';

// Navbar component
const NavBar = () => {
    const history = useHistory();
    // const { app, forum, facebook, youtube, itunes } = useSelector(state => state.config);

    // const linkedIn = 'https://www.linkedin.com/in/jaden-bybee-784590219/';
    const instagram = 'https://www.instagram.com/bybeemfg/';

    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!open);

    const followLink = (route, newTab) => {
        if (newTab) window.open(route, '_blank');
        else history.push(route);
    }

    return (
        <div className="NavBar">
            <Navbar id="Nav" color="blue" dark expand="md" fixed="top">
                <NavbarBrand href="/" id="brand-logo-container">
                    <NavLogo id="brand-logo" width={42} height={42} />
                </NavbarBrand>
                {/* <NavbarBrand href="/">
                    <span className="NavBar-brand">Bybee <small>LLC</small></span>
                </NavbarBrand> */}
                <NavbarToggler onClick={toggleOpen} />
                <Collapse isOpen={open} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => followLink('/taxidermy', false)}><span className="NavBar-link">Taxidermy</span></NavLink>
                        </NavItem>
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => followLink('/machining', false)}><span className="NavBar-link">Machining</span></NavLink>
                        </NavItem>
                        {/* <NavItem className="NavBar-item">
                            <NavLink onClick={() => followLink('/projects', false)}><span className="NavBar-link">Projects</span></NavLink>
                        </NavItem> */}
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => followLink('/contact', false)}><span className="NavBar-link">Contact</span></NavLink>
                        </NavItem>
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => followLink('/quote', false)}><span className="NavBar-link">Quote</span></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                {/* <NavLink onClick={() => followLink(linkedIn, true)}><span className="NavBar-link-social"><i className="fa fa-linkedin-square" aria-hidden="true" /></span></NavLink> */}
                <NavLink onClick={() => followLink(instagram, true)}><span className="NavBar-link-social"><i className="fa fa-instagram" aria-hidden="true" /></span></NavLink>
            </Navbar>
        </div>
    )
}

export default NavBar;