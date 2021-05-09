import Head from 'next/head';
import { useState } from 'react';
// import Image from 'next/image';
import Layout from '../../components/Layout';
import { Box, Heading, Image, Layer, Text, Paragraph } from 'grommet';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import useTranslation from 'next-translate/useTranslation';

const carouselImages = [];
for (let i = 1; i <= 40; i++) {
  carouselImages.push(i);
}

const paras = [
  'Jackfruit Ceremony is a ritualistic gathering supposedly held in during full moon.',
  'Jackfruit Ceremony is both an attempt at recreating a holy, ritualistic activity out of a fragment that nature gives us; as well as an ultimate celebration of existence, multiversal forces, full moon, earth, togetherness, prosperity, light and love.',
  'Jackfruit Ceremony investigates what it means to create a cultic ceremony out of an uncommon, natural, edible object in this age of massive digital reproduction of postmodern arts. Why do ones hold a ceremony even?',
  'Jackfruit Ceremony may implicitly also correlate to contemporary ecologic crisis that originate from politic-economic issues:',
  'How many individuals can be fed with a single jackfruit?',
  'How does it feel when women, and only those who identify themselves as a woman, have the power to actively hold a ceremonial celebration?',
  'Can one sacrifice a jackfruit instead of an animal, and do so with only bare hands in multitude?',
];

export default function JackfruitCeremony() {
  const [showGallery, setShowGallery] = useState(false);
  const { t, lang } = useTranslation('jackfruit-ceremony');

  const conceptDescription = t(
    'conceptDescription',
    {},
    { returnObjects: true }
  );

  console.log(conceptDescription);

  return (
    <>
      <Head>
        <title>Jackfruit Ceremony | Sphinx Dance | Emin Durak</title>
        <meta
          name="description"
          content="Jackfruit Ceremony | Sphinx Dance | Independent Nomadic Studio for Movement Arts Synthesis & Research"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Heading alignSelf="center" margin={{ bottom: 'xsmall' }}>
          {t('title')}
        </Heading>
        <Text
          size="large"
          textAlign="center"
          as="em"
          margin={{ bottom: 'medium' }}
        >
          {/* a Ritualistic Gathering held in Full Moon */}
          {t('subTitle')}
        </Text>
        <Box
          height="medium"
          width="100%"
          overflow="hidden"
          onClick={() => setShowGallery(true)}
        >
          <Image
            fill="horizontal"
            fit="cover"
            src="/images/jackfruit-ceremony/jackfruit-ceremony-1.jpeg"
          />
        </Box>
        <Box
          onClick={() => setShowGallery(true)}
          alignSelf="center"
          pad="small"
        >
          <Text size="small">{t('showImages')}</Text>
        </Box>
        <Box background="#030303" width="100%">
          <Box alignSelf="center" direction="row">
            <Box width="small" pad="medium">
              <Text margin={{ bottom: 'xsmall' }} as="em">
                {t('conceptEtcBy')}
              </Text>
              <Text margin={{ bottom: 'small' }}>Emin Durak</Text>
            </Box>
            <Box width="small" pad="medium">
              <Text margin={{ bottom: 'xsmall' }} as="em">
                {t('photosBy')}
              </Text>
              <Text margin={{ bottom: 'small' }}>Alya Pogodina</Text>
            </Box>
            <Box width="small" pad="medium">
              <Text margin={{ bottom: 'xsmall' }} as="em">
                {t('actors')}
              </Text>
              <Text margin={{ bottom: 'small' }}>John... etc</Text>
            </Box>
          </Box>
        </Box>
        <Box pad="medium">
          <Box alignSelf="center" width="medium">
            <Heading level="4">{t('concept')}</Heading>
            {conceptDescription.map((p) => (
              <Paragraph size="small" key={p.substr(0, 30)}>
                {p}
              </Paragraph>
            ))}
          </Box>
        </Box>

        {showGallery && (
          <Layer
            full
            onEsc={() => setShowGallery(false)}
            onClickOutside={() => setShowGallery(false)}
          >
            <AliceCarousel
              // autoPlay
              // autoPlayControls
              autoPlayStrategy="none"
              autoPlayInterval={5000}
              animationDuration={500}
              animationType="fadeout"
              infinite
              disableDotsControls
              // disableButtonsControls
              items={carouselImages.map((image) => (
                <Box direction="row" align="center" width="100vw" height="90vh">
                  <Image
                    fit="contain"
                    fill="vertical"
                    src={`/images/jackfruit-ceremony/carousel/${image}.jpg`}
                  />
                </Box>
              ))}
            />
            <Box
              alignSelf="center"
              margin={{ bottom: 'medium' }}
              onClick={() => setShowGallery(false)}
            >
              <Text color="dark-3" size="xsmall">
                CLOSE
              </Text>
            </Box>
          </Layer>
        )}
      </Layout>
    </>
  );
}
