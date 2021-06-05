import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import {
  Anchor,
  Box,
  Button,
  CheckBox,
  FormField,
  Heading,
  Grommet,
  Image,
  Menu,
  Nav,
  Paragraph,
  Stack,
  Text,
  TextInput,
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
      <Box background="rgba(0, 0, 0, 0.5)">
        <Heading textAlign="center" margin="large">
          <Anchor href={link}>{title}</Anchor>
        </Heading>
      </Box>
    </Stack>
  );
}

function EmailSignupModal() {
  return (
    <Box>
      <form action="https://joincircles.us10.list-manage.com/subscribe/post">
        <input type="hidden" name="u" value="ce7ac2789abf7ce01f739a2b6"></input>
        <input type="hidden" name="id" value="35899a122a"></input>
        <Grommet theme={footerTheme}>
          <FormField color="light-1" name="email">
            <TextInput
              id="MERGE0"
              name="MERGE0"
              placeholder={t('newsletter-input-placeholder')}
              style={{ color: '#fff' }}
            />
          </FormField>
        </Grommet>
        <Box margin={{ bottom: 'medium' }}>
          <CheckBox
            id="gdpr_45553"
            name="gdpr[45553]"
            value="Y"
            label={
              <Text color="white" size="small">
                {t('newsletter-gdpr-check')}
              </Text>
            }
          />
        </Box>

        <Button
          primary
          color="light-1"
          type="submit"
          label={t('newsletter-signup-button-label')}
          style={{
            borderRadius: 8,
            marginTop: 12,
          }}
        />
      </form>
      <form action="https://joincircles.us10.list-manage.com/subscribe/post">
        <input type="hidden" name="u" value="ce7ac2789abf7ce01f739a2b6"></input>
        <input type="hidden" name="id" value="35899a122a"></input>
        <Grommet theme={footerTheme}>
          <FormField color="light-1" name="email">
            <TextInput
              id="MERGE0"
              name="MERGE0"
              placeholder={t('newsletter-input-placeholder')}
              style={{ color: '#fff' }}
            />
          </FormField>
        </Grommet>
        <Box margin={{ bottom: 'medium' }}>
          <CheckBox
            id="gdpr_45553"
            name="gdpr[45553]"
            value="Y"
            label={
              <Text color="white" size="small">
                {t('newsletter-gdpr-check')}
              </Text>
            }
          />
        </Box>

        <Button
          primary
          color="light-1"
          type="submit"
          label={t('newsletter-signup-button-label')}
          style={{
            borderRadius: 8,
            marginTop: 12,
          }}
        />
      </form>
    </Box>
  );
}
