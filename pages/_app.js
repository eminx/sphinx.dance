import "../styles/globals.css";
import Layout from "../Layout.js";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};
export default MyApp;
