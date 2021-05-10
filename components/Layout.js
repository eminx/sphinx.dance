import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  Anchor,
  Box,
  Footer,
  Grommet,
  Heading,
  Main,
  Paragraph,
  ResponsiveContext,
} from 'grommet';
import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';

import theme from '../config/theme';

function Layout(props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { t, lang } = useTranslation('home');

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

      <Main background="#111111" width="100%">
        <Box style={{ position: 'absolute', top: 6, right: 6 }}>
          {lang === 'en' ? (
            <Box onClick={async () => await setLanguage('tr')}>
              <Anchor color="light-4" size="small">
                Türkçe
              </Anchor>
            </Box>
          ) : (
            <Box onClick={async () => await setLanguage('en')}>
              <Anchor color="light-4" size="small">
                English
              </Anchor>
            </Box>
          )}
        </Box>

        <ResponsiveContext.Consumer>
          {(size) => {
            const large = ['large', 'medium'].includes(size);
            return props.children;
          }}
        </ResponsiveContext.Consumer>
      </Main>

      <Footer background="dark-1" direction="column" pad="xlarge">
        <Box direction="row" justify="center">
          <Box width="medium">
            <Paragraph
              color="brand"
              textAlign="center"
              style={{ fontFamily: 'Crimson Pro' }}
            >
              <b>{t('homeAbout')}</b>
            </Paragraph>
          </Box>
        </Box>

        <Heading
          color="light-3"
          level="3"
          textAlign="center"
          margin={{ bottom: 'xsmall' }}
        >
          Contact:{' '}
        </Heading>
        <Anchor href="mailto:namaste@sphinx.dance">namaste@sphinx.dance</Anchor>
        <Anchor href="https://www.sphinx.dance">
          <b>www.sphinx.dance</b>
        </Anchor>
      </Footer>
    </Grommet>
  );
}

export default Layout;
