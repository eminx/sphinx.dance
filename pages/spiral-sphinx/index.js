import Head from 'next/head';
import { useState } from 'react';
import Layout from '../../components/Layout';
import { Box, Heading, Image, Text, Paragraph } from 'grommet';
import useTranslation from 'next-translate/useTranslation';
import ReactPlayer from 'react-player';

import FullCarousel from '../../components/FullCarousel';

const carouselImages = [];
for (let i = 1; i <= 6; i++) {
  carouselImages.push(`/images/spiral-sphinx/carousel/${i}.jpg`);
}

const spiralVideos = [
  {
    info: 'Alienvation: Journey of two aliens from a deep down tunnel to the sunset and fire',
    videoUrl: 'https://vimeo.com/359961424',
  },
  {
    info: 'Documentative improvisations at Çatı Dans following the Spiral Sphinx workshop',
    videoUrl: 'https://vimeo.com/376707017',
  },
  {
    info: 'An Improvised Choreography at Jungle Dance following the Spiral Sphinx workshop',
    videoUrl: 'https://vimeo.com/400524921',
  },
  {
    info: 'An impro dance performance on a frozen lake in Hellasgården, Sweden',
    videoUrl: 'https://vimeo.com/313034151',
  },
];

export default function SpiralSphinx() {
  const [showGallery, setShowGallery] = useState(false);
  const { t } = useTranslation('spiral-sphinx');

  const description = t('description', {}, { returnObjects: true });
  const credits = t('credits', {}, { returnObjects: true });
  const performedAt = t('performedAt', {}, { returnObjects: true });
  const openGallery = () => {
    setShowGallery(true);
  };

  return (
    <>
      <Head>
        <title>Spiral Sphinx | Sphinx Dance | Emin Durak</title>
        <meta
          name="description"
          content="Spiral Sphinx | Sphinx Dance | Independent Nomadic Studio for Movement Arts Synthesis & Research"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {(size) => (
          <>
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

            <Box alignSelf="center">
              <Heading level="2" margin={{ bottom: 'none' }} textAlign="center">
                Video Works
              </Heading>
            </Box>

            <Box pad="medium">
              {spiralVideos.map((video) => (
                <Box key={video.videoUrl} pad="medium">
                  <ReactPlayer controls url={video.videoUrl} width="100%" />
                  <Box alignSelf="center">
                    <Paragraph color="brand">
                      <em>{video.info}</em>
                    </Paragraph>
                  </Box>
                </Box>
              ))}
            </Box>

            <Box pad="medium">
              <Box alignSelf="center">
                <Heading level="4">{t('concept')}</Heading>
                {description.map((p) => (
                  <Paragraph key={p.substr(0, 30)}>{p}</Paragraph>
                ))}
              </Box>
            </Box>

            <Box pad="medium">
              <Box alignSelf="center">
                <Heading level="4">{t('performedAtTitle')}</Heading>
                {performedAt.map((p) => (
                  <Paragraph key={p.substr(0, 30)}>{p}</Paragraph>
                ))}
              </Box>
            </Box>

            <Box pad="medium">
              <Box alignSelf="center">
                <Heading level="4">{t('creditsTitle')}</Heading>
                {credits.map((p) => (
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
          </>
        )}
      </Layout>
    </>
  );
}
