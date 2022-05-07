// import Head from 'next/head';
// import { Box, Heading, Image, Paragraph, ResponsiveContext } from 'grommet';
// import useTranslation from 'next-translate/useTranslation';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';

// import Layout from '../../components/Layout';

// const carouselImages = [];
// for (let i = 1; i <= 6; i++) {
//   carouselImages.push(`/images/yaban/carousel/${i}.jpg`);
// }

// export default function Yaban() {
//   const { t } = useTranslation('yaban');

//   const shortDescription = t('shortDescription', {}, { returnObjects: true });
//   const longDescription = t('longDescription', {}, { returnObjects: true });

//   return (
//     <>
//       <Head>
//         <title>Yaban | Sphinx Dance | Emin Durak</title>
//         <meta
//           name="description"
//           content="Yaban | Sphinx Dance | Independent Nomadic Studio for Movement Arts Synthesis & Research"
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//         <Layout>
//           {(size) => (
//             <>
//               <Heading
//                 alignSelf="center"
//                 textAlign="center"
//                 margin={{ bottom: 'xsmall', top: 'small' }}
//               >
//                 {t('title')}
//               </Heading>
//               <Heading
//                 level="3"
//                 size="small"
//                 textAlign="center"
//                 alignSelf="center"
//                 pad={{ horizontal: 'medium' }}
//                 margin={{ top: 'none', bottom: 'medium' }}
//                 style={{ fontWeight: 200 }}
//               >
//                 <em>{t('subTitle')}</em>
//               </Heading>

//               <Box align="start" direction={['medium', 'large'].includes(size) ? 'row' : 'column'}>
//                 <Box width="large" pad={{top: 'medium'}}>
//                   <AliceCarousel
//                     autoPlay
//                     autoPlayInterval={5000}
//                     infinite
//                     items={carouselImages.map((image) => (
//                       <Box direction="row" align="center">
//                         <Image fit="contain" fill="vertical" src={image} />
//                       </Box>
//                     ))}
//                   />
//                 </Box>
//                 <Box width="large" pad="medium">
//                   {shortDescription.map(p => (
//                     <Paragraph key={p.substring(0,10)}>{p}</Paragraph>
//                   ))}
//                 </Box>
//               </Box>

//               <Box width="100%" pad="medium" direction="row" justify="center">
//                 <Box>
//                   <Heading level={3} pad="medium">{t('details')}</Heading>
//                   {longDescription.map(p => (
//                     <Paragraph key={p.substring(0,10)}>{p}</Paragraph>
//                   ))}
//                 </Box>
//               </Box>
//             </>
//           )}
//         </Layout>
//     </>
//   );
// }
