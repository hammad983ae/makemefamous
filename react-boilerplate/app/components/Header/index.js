import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import LogoImg from '../../images/logo-retina.png';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 24px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0e0e0e;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: -0.05em;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  img {
    width: 250px;
    height: auto;
    object-fit: contain;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(({ active, ...props }) => <Link {...props} />)`
  font-size: 1rem;
  font-weight: 700;
  color: ${props => (props.active ? '#F6C61E' : '#FFFFFF')};
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.15s ease;
  ${props =>
    props.active && 'border-bottom: 4px solid #F6C61E; padding-bottom: 4px;'}

  &:hover {
    color: #f6c61e;
  }
`;

const MobileMenuButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  width: 44px;
  height: 44px;
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #f6c61e;
    color: #f6c61e;
  }

  @media (max-width: 768px) {
    display: inline-flex;
  }
`;

const HeaderCTA = styled(Link)`
  background-color: #f6c61e;
  color: #000000;
  font-weight: 800;
  padding: 12px 32px;
  border-radius: 0;
  border: none;
  cursor: pointer;
  font-family: 'Space Grotesk', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.75rem;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color: #cca419;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialIconLink = styled.a`
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: color 0.15s ease;
  text-decoration: none;

  &:hover {
    color: #f6c61e;
  }

  svg {
    width: 18px;
    height: 18px;
    display: block;
    fill: currentColor;
  }
`;

const MobileOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(6px);
  z-index: 999;
  opacity: ${props => (props.open ? 1 : 0)};
  pointer-events: ${props => (props.open ? 'auto' : 'none')};
  transition: opacity 220ms ease;
`;

const MobileDrawer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: min(86vw, 360px);
  background: #0e0e0e;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
  transform: ${props => (props.open ? 'translateX(0)' : 'translateX(110%)')};
  transition: transform 260ms cubic-bezier(0.2, 0, 0, 1);
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;
`;

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const DrawerTitle = styled.div`
  font-weight: 900;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
`;

const DrawerClose = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #f6c61e;
    color: #f6c61e;
  }
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MobileNavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.875rem;
  padding: 14px 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(246, 198, 30, 0.7);
    color: #f6c61e;
  }
`;

const MobileBottom = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MobileCTA = styled.a`
  background-color: #f6c61e;
  color: #000000;
  font-weight: 900;
  padding: 16px 16px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  transition: all 0.25s ease;

  &:hover {
    background-color: #ffffff;
    transform: translateY(-2px);
  }
`;

const MobileSocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export default withRouter(function Header({ location }) {
  const isHome = location.pathname === '/';
  const isServices = location.pathname === '/services';
  const isPortfolio = location.pathname === '/portfolio';
  const isContact = location.pathname === '/contact';
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = e => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <HeaderWrapper>
      <Logo to="/">
        <img src={LogoImg} alt="MAKE ME FAMOUS" />
      </Logo>
      <Nav>
        <NavLink to="/" active={isHome}>
          Work
        </NavLink>
        <NavLink to="/services" active={isServices}>
          Services
        </NavLink>
        <NavLink to="/portfolio" active={isPortfolio}>
          Portfolio
        </NavLink>
        <NavLink to="/agency" active={location.pathname === '/agency'}>
          Agency
        </NavLink>
        <NavLink to="/contact" active={isContact}>
          Contact
        </NavLink>
      </Nav>
      <HeaderActions>
        <SocialIconLink
          href="https://www.instagram.com/makemefamous.official?igsh=Z29yZHQ5NTdwbXdt&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9z" />
            <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
            <path d="M17.75 6.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </SocialIconLink>
        <HeaderCTA to="/contact">lets connect</HeaderCTA>
      </HeaderActions>

      <MobileMenuButton
        type="button"
        aria-label="Open menu"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen(true)}
      >
        <span className="material-symbols-outlined">menu</span>
      </MobileMenuButton>

      <MobileOverlay open={mobileOpen} onClick={() => setMobileOpen(false)} />
      <MobileDrawer open={mobileOpen} aria-hidden={!mobileOpen}>
        <DrawerHeader>
          <DrawerTitle>Menu</DrawerTitle>
          <DrawerClose
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </DrawerClose>
        </DrawerHeader>

        <MobileNav>
          <MobileNavLink to="/">Work</MobileNavLink>
          <MobileNavLink to="/services">Services</MobileNavLink>
          <MobileNavLink to="/portfolio">Portfolio</MobileNavLink>
          <MobileNavLink to="/agency">Agency</MobileNavLink>
          <MobileNavLink to="/contact">Contact</MobileNavLink>
        </MobileNav>

        <MobileBottom>
          <MobileCTA
            href="https://wa.me/923233339481"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect With Us
            <span className="material-symbols-outlined">arrow_forward</span>
          </MobileCTA>
          <MobileSocialRow>
            <SocialIconLink
              href="https://www.instagram.com/makemefamous.official?igsh=Z29yZHQ5NTdwbXdt&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9z" />
                <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                <path d="M17.75 6.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </SocialIconLink>
          </MobileSocialRow>
        </MobileBottom>
      </MobileDrawer>
    </HeaderWrapper>
  );
});
