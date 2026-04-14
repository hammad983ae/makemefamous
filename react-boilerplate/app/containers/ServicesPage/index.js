import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import CTASection from 'containers/HomePage/CTASection';
import ServicesHero from './ServicesHero';
import DetailedServices from './DetailedServices';

const ServicesWrapper = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #000000;
  padding-top: 80px; /* Offset for fixed header */
`;

export default function ServicesPage() {
  return (
    <ServicesWrapper>
      <Helmet>
        <title>Services | Make Me Famous</title>
        <meta
          name="description"
          content="Explore Make Me Famous services: marketing strategy, creative direction, SEO, and paid media built to drive real growth."
        />
      </Helmet>

      <ServicesHero />
      <DetailedServices />
      <CTASection />
    </ServicesWrapper>
  );
}
