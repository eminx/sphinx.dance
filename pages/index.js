import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import {
  Anchor,
  Box,
  Button,
  FormField,
  Heading,
  Grommet,
  Image,
  Layer,
  Menu,
  Nav,
  Paragraph,
  Stack,
  Text,
  TextInput,
} from 'grommet';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const [signupModal, setSignupModal] = useState(false);
  const { t, lang } = useTranslation('home');

  const buttonLabel = t('newsletter-signup-button-label');
  const emailPlaceholder = t('newsletter-signup-email-placeholder');
  const firstnamePlaceholder = t('newsletter-signup-firstname-placeholder');
  const closeLabel = t('newsletter-signup-close-label');

  const emailSignupProps = {
    buttonLabel,
    emailPlaceholder,
    firstnamePlaceholder,
    closeLabel,
  };

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
        {(size) => (
          <>
            <Heading alignSelf="center" margin={{ bottom: 'small' }}>
              SPHINX DANCE
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

            <Box alignSelf="center" pad="medium">
              <Anchor onClick={() => setSignupModal(true)}>
                {t('newsletterSignup')}
              </Anchor>
            </Box>

            <Box pad={{ vertical: 'large' }}>
              <CoolStack
                title="Larvae"
                anchor="right"
                imageSrc="/images/larvae/carousel/7.jpg"
                objectPosition="center right"
                link="/larvae"
                animation={{ type: 'fadeIn', delay: 300 }}
              />
            </Box>

            <Box pad={{ vertical: 'large' }}>
              <CoolStack
                title="Jackfruit Ceremony"
                anchor="bottom"
                imageSrc="/images/jackfruit-ceremony/home-banner.jpg"
                objectPosition="center left"
                link="/jackfruit-ceremony"
                animation={{ type: 'fadeIn', delay: 600 }}
              />
            </Box>

            <Box pad={{ vertical: 'large' }}>
              <CoolStack
                title="Spiral Sphinx"
                anchor="top"
                imageSrc="/images/spiral-sphinx/carousel/1.jpg"
                objectPosition="center"
                link="/spiral-sphinx"
                animation={{ type: 'fadeIn', delay: 900 }}
              />
            </Box>

            {signupModal && (
              <Layer
                onClickOutside={() => setSignupModal(false)}
                onEsc={() => setSignupModal(false)}
              >
                <EmailSignupModal
                  onClose={() => setSignupModal(false)}
                  {...emailSignupProps}
                />
              </Layer>
            )}
          </>
        )}
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

function CoolStack({
  title,
  anchor,
  imageSrc,
  objectPosition,
  link,
  animation,
}) {
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
        animation={animation || 'fadeIn'}
        hoverIndicator={{ opacity: 0.5 }}
      >
        <Image
          fill="horizontal"
          fit="cover"
          src={imageSrc}
          style={{ objectPosition: objectPosition || 'center left' }}
        />
      </Box>
      <Box background="rgba(255, 255, 255, 0.5)">
        <Heading textAlign="center" margin="large">
          <Link href={link}>{title}</Link>
        </Heading>
      </Box>
    </Stack>
  );
}

function EmailSignupModal({
  buttonLabel,
  emailPlaceholder,
  firstnamePlaceholder,
  closeLabel,
  onClose,
}) {
  return (
    <Box background="dark-1" pad="large">
      <form
        action="https://dance.us6.list-manage.com/subscribe/post"
        method="POST"
      >
        <input type="hidden" name="u" value="7b8549dfefb57d94bc6f1771e"></input>
        <input type="hidden" name="id" value="5bb887747f"></input>
        <Box width="medium" alignSelf="center">
          <FormField color="light-1" name="email">
            <TextInput
              id="MERGE0"
              name="MERGE0"
              placeholder={emailPlaceholder}
              style={{ color: '#fff' }}
            />
          </FormField>
          <FormField color="light-1" name="firstName">
            <TextInput
              id="MERGE1"
              name="MERGE1"
              placeholder={firstnamePlaceholder}
              style={{ color: '#fff' }}
            />
          </FormField>
        </Box>

        <Button
          primary
          color="light-1"
          type="submit"
          label={buttonLabel}
          style={{
            borderRadius: 8,
            marginTop: 12,
          }}
        />
      </form>
      <Box alignSelf="center" pad={{ top: 'medium' }}>
        <Anchor onClick={onClose}>{closeLabel}</Anchor>
      </Box>
    </Box>
  );
}
