import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import ContactHero from './ContactHero';
import ContactFormSection from './ContactFormSection';
import NewsletterSection from './NewsletterSection';

const MainWrapper = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #000000;
  padding-top: 160px; /* Offset for fixed header (pt-40) */
`;

export default function ContactPage() {
  return (
    <MainWrapper>
      <Helmet>
        <title>Contact | Make Me Famous</title>
        <meta
          name="description"
          content="Ready to get noticed? Contact Make Me Famous to share a brief or book a discovery call."
        />
      </Helmet>

      <ContactHero />
      <ContactFormSection />
      <NewsletterSection />
    </MainWrapper>
  );
}
