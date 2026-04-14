import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../images/logo-retina.png';

const FooterWrapper = styled.footer`
  background-color: #0e0e0e;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 48px 40px;
  gap: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-family: 'Space Grotesk', sans-serif;
  text-transform: uppercase;
  font-size: 0.75rem; /* text-xs */
  letter-spacing: 0.2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FooterLogo = styled.div`
  img {
    width: 210px;
    height: auto;
    object-fit: contain;
  }
`;

const FooterNav = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
`;

const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  transition: color 0.15s ease;

  &:hover {
    color: #f6c61e;
  }
`;

const SocialIconLink = styled(FooterLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
    display: block;
    fill: currentColor;
  }
`;

const Copyright = styled.div`
  color: #aaaaaa;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterLogo>
        <img src={LogoImg} alt="MAKE ME FAMOUS" />
      </FooterLogo>
      <FooterNav>
        <FooterLink href="mailto:humza@makemefamous.net">
          humza@makemefamous.net
        </FooterLink>
        <FooterLink href="tel:+923233339481">03233339481</FooterLink>
        <SocialIconLink
          href="https://www.facebook.com/makemefamous.official"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          title="Facebook"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.18 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.197 2.238.197v2.477h-1.26c-1.242 0-1.63.778-1.63 1.576v1.893h2.773l-.443 2.91h-2.33V22c4.78-.76 8.437-4.92 8.437-9.94z" />
          </svg>
        </SocialIconLink>
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
      </FooterNav>
      <Copyright>© 2024 MAKE ME FAMOUS. ALL RIGHTS RESERVED.</Copyright>
    </FooterWrapper>
  );
}
