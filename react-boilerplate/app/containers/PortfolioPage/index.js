import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import PortfolioHero from './PortfolioHero';
import PortfolioGrid from './PortfolioGrid';
import PhilosophyBlock from './PhilosophyBlock';

const PortfolioWrapper = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #000000;
  padding-top: 88px; /* Offset for fixed header */
`;

export default function PortfolioPage() {
  return (
    <PortfolioWrapper>
      <Helmet>
        <title>Work | Make Me Famous</title>
        <meta
          name="description"
          content="See featured work from Make Me Famous — creative and performance marketing projects designed to turn attention into growth."
        />
      </Helmet>

      <PortfolioHero />
      <PortfolioGrid />
      <PhilosophyBlock />
    </PortfolioWrapper>
  );
}
