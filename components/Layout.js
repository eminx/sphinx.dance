import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Grommet, Box, ResponsiveContext, Main } from 'grommet';

import theme from '../config/theme';

const fixedHeaderStyle = {
  position: 'fixed',
  top: 0,
  width: '100%',
  maxWidth: 1280,
  zIndex: 99,
  paddingRight: 0,
};

function Layout(props) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event) => {
    setScrollPosition(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <Grommet theme={theme} {...props}>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#660F33" />
      </Head>

      <Main background="dark-1" width="100%" height="100%">
        <ResponsiveContext.Consumer>
          {(size) => {
            const large = ['large', 'medium'].includes(size);
            return props.children;
          }}
        </ResponsiveContext.Consumer>
      </Main>
    </Grommet>
  );
}

export default Layout;
