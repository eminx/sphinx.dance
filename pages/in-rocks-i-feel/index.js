import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Box, Heading, Image, Text, Paragraph } from 'grommet';
import useTranslation from 'next-translate/useTranslation';
import ReactPlayer from 'react-player';

import Layout from '../../components/Layout';
import FullCarousel from '../../components/FullCarousel';

const carouselImages = [];
for (let i = 1; i <= 5; i++) {
  carouselImages.push(`/images/larvae/carousel/${i}.jpg`);
}

const video = {
  title: '"In Rocks I feel"',
  videoUrl: 'https://vimeo.com/557387212',
};

export default function Irif() {
  const [showGallery, setShowGallery] = useState(false);
  const { t, lang } = useTranslation('irif');

  const openGallery = () => {
    setShowGallery(true);
  };

  return (
    <>
      <Head>
        <title>In Rocks I feel | Sphinx Dance | Emin Durak</title>
        <meta
          name="description"
          content="In Rocks I feel | Sphinx Dance | Independent Nomadic Studio for Movement Arts Synthesis & Research | Emin Durak"
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
                src="/images/larvae/carousel/3.jpg"
              />
            </Box>

            <Box onClick={() => openGallery()} alignSelf="center" pad="small">
              <Text size="small" color="brand" weight="bold">
                {t('showImages')}
              </Text>
            </Box>

            <Box alignSelf="center" width="100%" margin={{ bottom: 'large' }}>
              <Heading
                level="3"
                margin="small"
                textAlign="center"
                alignSelf="center"
              >
                <em>{video.title}</em>
              </Heading>
              <ReactPlayer url={video.videoUrl} width="100%" />
            </Box>
            {/* 
            <Box pad="medium">
              <Box alignSelf="center" width="medium">
                <Heading level="4">{t('concept')}</Heading>
                {description.map((p) => (
                  <Paragraph key={p.substr(0, 30)}>{p}</Paragraph>
                ))}
              </Box>
            </Box> */}

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
