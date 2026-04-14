import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from 'components/Header';
import AgencyHero from './AgencyHero';
import Narrative from './Narrative';
import CoreValues from './CoreValues';

const AgencyWrapper = styled.main`
  background-color: #000000;
  min-height: 100vh;
  padding-bottom: 120px;
  overflow: hidden;
`;

const CTASection = styled.section`
  padding: 160px 40px;
  text-align: center;
  max-width: 1440px;
  margin: 0 auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const PrimaryCTA = styled(Link)`
  display: inline-block;
  background-color: #f6c61e;
  color: #000000;
  padding: 24px 64px;
  font-weight: 900;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #ffffff;
    transform: translateY(-8px);
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6);
  }
`;

export default function AgencyPage() {
  return (
    <AgencyWrapper>
      <Helmet>
        <title>About | Make Me Famous</title>
        <meta
          name="description"
          content="Meet Make Me Famous — a marketing studio built for brands that want standout creative, clear strategy, and measurable growth."
        />
      </Helmet>
      <Header />
      <AgencyHero />
      <Narrative />
      <CoreValues />

      <CTASection>
        <h2
          style={{
            color: '#FFFFFF',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: '900',
            textTransform: 'uppercase',
            marginBottom: '64px',
            letterSpacing: '-0.05em',
          }}
        >
          Ready to <br /> <span>Accelerate?</span>
        </h2>
        <PrimaryCTA to="/contact">Let's Talk Strategy</PrimaryCTA>
      </CTASection>
    </AgencyWrapper>
  );
}
