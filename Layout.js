import React, { useEffect } from "react";
import Head from "next/head";
import { Box, Paragraph } from "grommet";

import Menu from "./components/Menu";

function Layout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const today = new Date();
  const currentHour = today.getHours();

  const isDark = currentHour < 7 || currentHour > 19;

  return (
    <Box background={isDark ? "dark-2" : "light-2"}>
      <Head>
        <title>Emin Durak | Sphinx Dance | Research Projects </title>
      </Head>
      <Menu />
      <main>{children}</main>

      <Box width="100%">
        <Paragraph alignSelf="center" style={{ textAlign: "center" }}>
          hello@sphinx.dance
        </Paragraph>
      </Box>
    </Box>
  );
}

export default Layout;
