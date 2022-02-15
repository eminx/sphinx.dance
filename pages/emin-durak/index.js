import { useState } from 'react';
import Head from 'next/head';
import { Box, Heading, Image, Text, Paragraph } from 'grommet';
import useTranslation from 'next-translate/useTranslation';

import Layout from '../../components/Layout';
import FullCarousel from '../../components/FullCarousel';

const carouselImages = [];
for (let i = 7; i <= 7; i++) {
  carouselImages.push(`/images/emin-durak/carousel/${i}.jpg`);
}

export default function EminDurak() {
  const [showGallery, setShowGallery] = useState(false);
  const { t } = useTranslation('emin-durak');

  const mainContent = t('mainContent', {}, { returnObjects: true });

  return (
    <>
      <Head>
        <title>Emin Durak | Sphinx Dance | Emin Durak</title>
        <meta
          name="description"
          content="Emin Durak | Sphinx Dance | Independent Nomadic Studio for Movement Arts Synthesis & Research"
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
          height="medium"
          width="100%"
          overflow="hidden"
          onClick={() => setShowGallery(true)}
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

        {/* <Box  width="100%">
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
        </Box> */}

        <Box pad="medium">
          <Box alignSelf="center">
            {mainContent.map((p) => (
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
