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

      <Layout isHome>
        <Heading level={2} alignSelf="center" margin={{ bottom: 'small' }}>
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
          <Paragraph textAlign="center">
            {t('homeAbout')} <br />
            <Anchor as="span" hoverIndicator>
              <Link href="/about">{t('learnMore')}</Link>
            </Anchor>
          </Paragraph>
        </Box>

        <Box pad={{ vertical: 'large' }}>
          <CoolStack
            title="Larvae"
            anchor="right"
            imageSrc="/images/larvae/carousel/2.jpg"
            objectPosition="center right"
            link="/larvae"
          />
        </Box>

        <Box pad={{ vertical: 'large' }}>
          <CoolStack
            title="Jackfruit Ceremony"
            anchor="bottom"
            imageSrc="/images/jackfruit-ceremony/home-banner.jpg"
            objectPosition="center left"
            link="/jackfruit-ceremony"
          />
        </Box>

        <Box pad={{ vertical: 'large' }}>
          <CoolStack
            title="Spiral Sphinx"
            anchor="top"
            imageSrc="/images/spiral-sphinx/carousel/1.jpg"
            objectPosition="center"
            link="/spiral-sphinx"
          />
        </Box>
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
            label: <Link href="/larvae">Larvae</Link>,
            onClick: () => {
              router.push('/larvae');
            },
          },
          {
            label: <Link href="/jackfruit-ceremony">Jackfruit Ceremony</Link>,
            onClick: () => {
              router.push('/jackfruit-ceremony');
            },
          },
          {
            label: <Link href="/spiral-sphinx">Spiral Sphinx</Link>,
            onClick: () => {
              router.push('/spiral-sphinx');
            },
          },
        ]}
      />
      {/* <Anchor
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
      </Anchor> */}
    </Nav>
  );
}

function CoolStack({ title, anchor, imageSrc, objectPosition, link }) {
  const router = useRouter();
  return (
    <Stack
      anchor={anchor || 'bottom'}
      style={{ cursor: 'pointer' }}
      onClick={() => router.push(link)}
    >
      <Box
        height="medium"
        width="100%"
        overflow="hidden"
        animation="fadeIn"
        hoverIndicator={{ opacity: 0.5 }}
      >
        <Image
          fill="horizontal"
          fit="cover"
          src={imageSrc}
          style={{ objectPosition: objectPosition || 'center left' }}
        />
      </Box>
      <Box background="rgba(0, 0, 0, 0.5)">
        <Heading textAlign="center" margin="large">
          <Anchor href={link}>{title}</Anchor>
        </Heading>
      </Box>
    </Stack>
  );
}
