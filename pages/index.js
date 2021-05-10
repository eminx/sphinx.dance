import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import {
  Anchor,
  Box,
  Heading,
  Image,
  Menu,
  Nav,
  Paragraph,
  Stack,
  Text,
} from 'grommet';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t, lang } = useTranslation('home');
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Sphinx Dance | Emin Durak</title>
        <meta
          name="description"
          content="Sphinx Dance | Independent Nomadic Studio for Movement Arts Synthesis & Research"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Heading level={3} alignSelf="center" margin={{ bottom: 'small' }}>
          Sphinx Dance
        </Heading>

        <MainMenu />

        <Box
          alignSelf="center"
          direction="row"
          align="center"
          width="medium"
          pad="large"
        >
          <Paragraph size="small" textAlign="center">
            {t('homeAbout')}{' '}
            <Anchor as="span" hoverIndicator>
              <Link href="/about">Learn more</Link>
            </Anchor>
          </Paragraph>
        </Box>

        <Stack
          anchor="bottom"
          style={{ cursor: 'pointer' }}
          onClick={() => router.push('/jackfruit-ceremony')}
        >
          <Box
            height="medium"
            width="100%"
            overflow="hidden"
            animation="fadeIn"
          >
            <Image
              fill="horizontal"
              fit="cover"
              src="/images/jackfruit-ceremony/home-banner.jpg"
              style={{ objectPosition: 'center left' }}
            />
          </Box>
          <Box background="rgba(0, 0, 0, 0.5)">
            <Heading textAlign="center" margin="large">
              Jackfruit Ceremony
            </Heading>
          </Box>
        </Stack>

        <Text
          size="large"
          textAlign="center"
          as="em"
          margin={{ bottom: 'medium' }}
        ></Text>
      </Layout>
    </>
  );
}

function MainMenu() {
  const { t, lang } = useTranslation('home');
  const router = useRouter();

  return (
    <Nav direction="row" alignSelf="center">
      <Menu
        size="small"
        label={
          <Anchor size="small" color="brand" margin="none" pad="none">
            {t('ongoing')}
          </Anchor>
        }
        items={[
          {
            label: 'Spiral Sphinx',
            onClick: () => {
              router.push('/spiral-sphinx');
            },
          },
          {
            label: 'Larvae',
            onClick: () => {
              router.push('/larvae');
            },
          },
          {
            label: 'Jackfruit Ceremony',
            onClick: () => {
              router.push('/jackfruit-ceremony');
            },
          },
        ]}
      />
      <Anchor
        as="span"
        size="small"
        color="brand"
        hoverIndicator
        margin="small"
      >
        {t('past')}
      </Anchor>
      <Anchor
        as="span"
        size="small"
        color="brand"
        hoverIndicator
        margin="small"
      >
        <Link href="/about">{t('about')}</Link>
      </Anchor>
    </Nav>
  );
}
