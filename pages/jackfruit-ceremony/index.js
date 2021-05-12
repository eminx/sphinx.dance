import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '../../components/Layout';
import { Box, Heading, Image, Text, Paragraph } from 'grommet';
import useTranslation from 'next-translate/useTranslation';
import FullCarousel from '../../components/FullCarousel';

const carouselImages = [];
for (let i = 1; i <= 40; i++) {
  carouselImages.push(i);
}

export default function JackfruitCeremony() {
  const [showGallery, setShowGallery] = useState(false);
  const { t, lang } = useTranslation('jackfruit-ceremony');

  const conceptDescription = t(
    'conceptDescription',
    {},
    { returnObjects: true }
  );

  const openGallery = () => {
    setShowGallery(true);
  };

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
        <Heading
          alignSelf="center"
          textAlign="center"
          margin={{ bottom: 'xsmall', top: 'small' }}
        >
          {t('title')}
        </Heading>
        <Heading
          level="3"
          size="small"
          textAlign="center"
          alignSelf="center"
          pad={{ horizontal: 'medium' }}
          margin={{ top: 'none', bottom: 'small' }}
          style={{ fontWeight: 200 }}
        >
          <em>{t('subTitle')}</em>
        </Heading>
        <Box
          height="medium"
          width="100%"
          overflow="hidden"
          onClick={() => openGallery()}
        >
          <Image
            fill="horizontal"
            fit="cover"
            src="/images/jackfruit-ceremony/jackfruit-ceremony-1.jpeg"
          />
        </Box>
        <Box onClick={() => openGallery()} alignSelf="center" pad="small">
          <Text size="small" color="brand" weight="bold">
            {t('showImages')}
          </Text>
        </Box>
        <Box background="#030303" width="100%">
          <Box alignSelf="center" direction="row">
            <Box width="small" pad="medium">
              <Heading level="4" margin={{ bottom: 'xsmall' }} as="em">
                {t('conceptEtcBy')}
              </Heading>
              <Text margin={{ bottom: 'small' }}>Emin Durak</Text>
            </Box>
            <Box width="small" pad="medium">
              <Heading level="4" margin={{ bottom: 'xsmall' }} as="em">
                {t('photosBy')}
              </Heading>
              <Text margin={{ bottom: 'small' }}>Alya Pogodina</Text>
            </Box>
            <Box width="small" pad="medium">
              <Heading level="4" margin={{ bottom: 'xsmall' }} as="em">
                {t('actors')}
              </Heading>
              <Text margin={{ bottom: 'small' }}>
                John, Judith, Kasia, Emin, Haya, Amanda, Annette, Coco
              </Text>
            </Box>
          </Box>
        </Box>
        <Box pad="medium">
          <Box alignSelf="center" width="medium">
            <Heading level="3" size="small">
              {t('concept')}
            </Heading>
            {conceptDescription.map((p) => (
              <Paragraph key={p.substr(0, 30)}>{p}</Paragraph>
            ))}
          </Box>
        </Box>

        {showGallery && (
          <FullCarousel
            images={carouselImages}
            onClose={() => setShowGallery(false)}
          />
        )}
      </Layout>
    </>
  );
}
