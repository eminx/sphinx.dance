import Head from 'next/head';
import Layout from '../components/Layout';
import { Box, Heading, Image, Text } from 'grommet';

export default function Home() {
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

      <Layout>
        <Heading level={3} alignSelf="center">
          Sphinx Dance
        </Heading>

        <Heading alignSelf="center" margin={{ bottom: 'xsmall' }}>
          Jackfruit Ceremony
        </Heading>
        <Text
          size="large"
          textAlign="center"
          as="em"
          margin={{ bottom: 'medium' }}
        >
          a Ritualistic Gathering in Full Moon
        </Text>
        <Box height="medium" width="100%" overflow="hidden">
          <Image
            fill="horizontal"
            fit="cover"
            src="/images/jackfruit-ceremony/jackfruit-ceremony-1.jpeg"
          />
        </Box>
      </Layout>
    </>
  );
}
