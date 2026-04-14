/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';

import messages from './messages';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Make Me Famous</title>
        <meta name="robots" content="noindex,follow" />
      </Helmet>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    </>
  );
}
