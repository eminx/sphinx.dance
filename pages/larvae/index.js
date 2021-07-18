import { useState } from 'react';
import Head from 'next/head';
import { Box, Heading, Image, Text, Paragraph } from 'grommet';
import useTranslation from 'next-translate/useTranslation';
import ReactPlayer from 'react-player';

import Layout from '../../components/Layout';
import FullCarousel from '../../components/FullCarousel';

const carouselImages = [];
for (let i = 7; i <= 7; i++) {
  carouselImages.push(`/images/larvae/carousel/${i}.jpg`);
}

const videos = [
  {
    title: '"In Rocks I feel"',
    videoUrl: 'https://vimeo.com/557387212',
  },
];

export default function Larvae() {
  const [showGallery, setShowGallery] = useState(false);
  const { t, lang } = useTranslation('larvae');

  const description = t('description', {}, { returnObjects: true });
  const performedAt = t('performedAt', {}, { returnObjects: true });
  const openGallery = () => {
    setShowGallery(true);
  };

  return (
    <>
      <Head>
        <title>Larvae | Sphinx Dance | Emin Durak</title>
        <meta
          name="description"
          content="Larvae | Sphinx Dance | Independent Nomadic Studio for Movement Arts Synthesis & Research"
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
          margin={{ top: 'none', bottom: 'xsmall' }}
          style={{ fontWeight: 200 }}
        >
          <em>{t('subTitle')}</em>
        </Heading>

        <Box
          alignSelf="center"
          // background="dark-1"
          height="medium"
          width="100%"
        >
          <ReactPlayer
            controls
            url="https://vimeo.com/576474261"
            width="100%"
          />
        </Box>

        {/* <Box
          height="medium"
          width="100%"
          overflow="hidden"
          onClick={() => openGallery()}
        >
          <Image
            fill="horizontal"
            fit="cover"
            src="/images/larvae/carousel/7.jpg"
          />
        </Box>

        <Box onClick={() => openGallery()} alignSelf="center" pad="small">
          <Text size="small" color="brand" weight="bold">
            {t('showImages')}
          </Text>
        </Box> */}

        <Box background="#030303" width="100%">
          <Box alignSelf="center" direction="row">
            <Box width="small" pad="medium">
              <Heading level="4" margin={{ bottom: 'xsmall' }} as="em">
                {t('concept')}
              </Heading>
              <Text margin={{ bottom: 'small' }}>Emin Durak</Text>
            </Box>
            <Box width="small" pad="medium">
              <Heading level="4" margin={{ bottom: 'xsmall' }} as="em">
                {t('mainCollab')}
              </Heading>
              <Text margin={{ bottom: 'small' }}>Oğuz Emre Divarcı</Text>
            </Box>
            <Box width="small" pad="medium">
              <Heading level="4" margin={{ bottom: 'xsmall' }} as="em">
                {t('otherCollabs')}
              </Heading>
              <Text margin={{ bottom: 'small' }}>
                Simay Yaylacı, Dilan Dibek
              </Text>
            </Box>
          </Box>
        </Box>

        <Box pad="medium" background="light-3">
          <Box alignSelf="center" width="medium">
            <Heading level="4">{t('concept')}</Heading>
            {description.map((p) => (
              <Paragraph key={p.substr(0, 30)}>{p}</Paragraph>
            ))}
          </Box>
        </Box>

        <Box pad="medium">
          <Box alignSelf="center" width="medium">
            <Heading level="4">{t('performedAtTitle')}</Heading>
            {performedAt.map((p) => (
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
