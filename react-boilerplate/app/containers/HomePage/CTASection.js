import React from 'react';
import styled from 'styled-components';

const CTAWrapper = styled.section`
  padding: 120px 40px;
  background-color: #000000;
`;

const ContentContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  background-color: #0e0e0e;
  padding: 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(246, 198, 30, 0.2);

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const CTATitle = styled.h2`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1; /* Increased from 1 */
  text-transform: uppercase;
  margin-bottom: 40px;
  position: relative;
  z-index: 2;

  span {
    font-style: italic;
    color: #f6c61e;
  }
`;

const CTADescription = styled.p`
  font-size: 1.25rem;
  color: #aaaaaa;
  max-width: 700px;
  margin: 0 auto 48px auto;
  line-height: 1.6;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: -0.01em;
  position: relative;
  z-index: 2;
`;

const PrimaryCTA = styled.a`
  display: inline-block;
  background-color: #f6c61e;
  color: #000000;
  padding: 24px 48px;
  font-weight: 900;
  font-size: 1.25rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;

  &:hover {
    background-color: #ffffff;
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }
`;

const Glow = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: #f6c61e;
  opacity: ${props => props.opacity || 0.1};
  filter: blur(100px);
  z-index: 1;
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
`;

export default function CTASection() {
  const whatsappNumber = '923233339481';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <CTAWrapper>
      <ContentContainer>
        <Glow top="-100px" right="-100px" opacity="0.1" />
        <Glow bottom="-100px" left="-100px" opacity="0.05" />
        <CTATitle>
          Ready to <br />
          <span>Kineticize</span> Your Growth?
        </CTATitle>
        <CTADescription>
          We are selective about our partners. If you're ready for aggressive,
          sustainable scale, let's talk.
        </CTADescription>
        <PrimaryCTA
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect With Us
        </PrimaryCTA>
      </ContentContainer>
    </CTAWrapper>
  );
}
