import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import HeroSection from './HeroSection';
import ServicesGrid from './ServicesGrid';
import ResultsSection from './ResultsSection';
import ProcessSection from './ProcessSection';
import CTASection from './CTASection';

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 80px; /* Offset for fixed header */
`;

export default function HomePage() {
  return (
    <Main>
      <Helmet>
        <title>Make Me Famous | Marketing That Gets You Noticed</title>
        <meta
          name="description"
          content="Make Me Famous is a marketing studio helping brands get noticed and grow with strategy, creative, SEO, and paid media."
        />
      </Helmet>
      <HeroSection />
      <ServicesGrid />
      <ResultsSection />
      <ProcessSection />
      <CTASection />
    </Main>
  );
}
