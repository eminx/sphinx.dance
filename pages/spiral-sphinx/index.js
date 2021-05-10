import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
// import Image from 'next/image';
import Layout from '../../components/Layout';
import { Anchor, Box, Heading, Image, Layer, Text, Paragraph } from 'grommet';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import useTranslation from 'next-translate/useTranslation';

const carouselImages = [];
for (let i = 1; i <= 6; i++) {
  carouselImages.push(i);
}

export default function SpiralSphinx() {
  const [showGallery, setShowGallery] = useState(false);
  const { t, lang } = useTranslation('spiral-sphinx');

  const description = t('description', {}, { returnObjects: true });
  const credits = t('credits', {}, { returnObjects: true });
  const performedAt = t('performedAt', {}, { returnObjects: true });
  const openGallery = () => {
    setShowGallery(true);
  };

  return (
    <>
      <Head>
        <title>Jackfruit Ceremony | Sphinx Dance | Emin Durak</title>
        <meta
          name="description"
          content="Spiral Sphinx | Sphinx Dance | Independent Nomadic Studio for Movement Arts Synthesis & Research"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Box alignSelf="center" pad={{ top: 'small' }}>
          <Anchor as="span" size="small" color="dark-5">
            <Link href="/">Home</Link>
          </Anchor>
        </Box>
        <Heading alignSelf="center" margin={{ bottom: 'xsmall' }}>
          {t('title')}
        </Heading>
        <Text
          size="medium"
          textAlign="center"
          as="em"
          margin={{ bottom: 'medium' }}
          pad={{ horizontal: 'medium' }}
        >
          {t('subTitle')}
        </Text>
        <Box
          height="medium"
          width="100%"
          overflow="hidden"
          onClick={() => openGallery()}
        >
          <Image
            fill="horizontal"
            fit="cover"
            src="/images/spiral-sphinx/carousel/1.jpg"
          />
        </Box>
        <Box onClick={() => openGallery()} alignSelf="center" pad="small">
          <Text size="small" color="brand" weight="bold">
            {t('showImages')}
          </Text>
        </Box>
        <Box pad="medium">
          <Box alignSelf="center" width="medium">
            <Heading level="4">{t('concept')}</Heading>
            {description.map((p) => (
              <Paragraph size="small" key={p.substr(0, 30)}>
                {p}
              </Paragraph>
            ))}
          </Box>
        </Box>

        <Box pad="medium">
          <Box alignSelf="center" width="medium">
            <Heading level="4">{t('performedAtTitle')}</Heading>
            {performedAt.map((p) => (
              <Paragraph size="small" key={p.substr(0, 30)}>
                {p}
              </Paragraph>
            ))}
          </Box>
        </Box>

        <Box pad="medium">
          <Box alignSelf="center" width="medium">
            <Heading level="4">{t('creditsTitle')}</Heading>
            {credits.map((p) => (
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
              autoPlay
              // autoPlayControls
              autoPlayStrategy="none"
              autoPlayInterval={5000}
              animationDuration={500}
              animationType="fadeout"
              infinite
              disableDotsControls
              // disableButtonsControls
              items={carouselImages.map((image) => (
                <Box direction="row" align="center" height="90vh">
                  <Image
                    fit="contain"
                    fill="vertical"
                    src={`/images/spiral-sphinx/carousel/${image}.jpg`}
                  />
                </Box>
              ))}
            />
            <Box
              alignSelf="center"
              margin={{ bottom: 'medium' }}
              onClick={() => setShowGallery(false)}
            >
              <Text color="brand" size="xsmall">
                CLOSE
              </Text>
            </Box>
          </Layer>
        )}
      </Layout>
    </>
  );
}
