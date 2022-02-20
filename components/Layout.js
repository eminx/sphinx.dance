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
  const { t, lang } = useTranslation('common');

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

      <Main width="100%">
        <Box style={{ position: 'absolute', top: 6, right: 6 }}>
          {lang === 'en' ? (
            <Box onClick={async () => await setLanguage('tr')}>
              <Anchor color="dark-3" size="small">
                Türkçe
              </Anchor>
            </Box>
          ) : (
            <Box onClick={async () => await setLanguage('en')}>
              <Anchor color="dark-3" size="small">
                English
              </Anchor>
            </Box>
          )}
        </Box>

        {!props.isHome && (
          <Box alignSelf="center" pad={{ top: 'small' }}>
            <Link href="/">
              <Anchor as="span" size="small" color="dark-2">
                {t('home')}
              </Anchor>
            </Link>
          </Box>
        )}

        <ResponsiveContext.Consumer>
          {(size) => {
            return props.children(size);
          }}
        </ResponsiveContext.Consumer>
      </Main>

      <Footer background="light-3" direction="column" pad="small">
        <Box direction="row">
          <Box width="medium">
            <Paragraph
              color="brand"
              textAlign="center"
            >
              <b>{t('footerExcerpt')}</b>
            </Paragraph>

            <Paragraph
              color="brand"
              textAlign="center"
              style={{ fontFamily: 'Crimson Pro' }}
            >
              <em>{t('footerExcerpt2')}</em>
            </Paragraph>
          </Box>
        </Box>
        <Box gap="small" align="center" margin={{ bottom: 'large' }}>
          <Heading
            color="light-3"
            level="4"
            textAlign="center"
            margin={{ bottom: 'xsmall' }}
          >
            Contact:{' '}
          </Heading>
          <Anchor href="hello@sphinx.dance">hello@sphinx.dance</Anchor>
          <Anchor href="https://sphinx.dance">
            <b>sphinx.dance</b>
          </Anchor>
        </Box>
      </Footer>
    </Grommet>
  );
}

export default Layout;
