import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="영화에 대한 구체적인 정보사이트" />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
        <Script src="../path/to/flowbite/dist/flowbite.js"></Script>
      </Html>
    );
  }
}
