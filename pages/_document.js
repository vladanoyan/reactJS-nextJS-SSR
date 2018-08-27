import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

class MainDocument extends Document {
  static getInitialProps = async ctx => {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  };

  render() {

    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="stylesheet" href="/_next/static/style.css" />

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />

          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.js" />


        </Head>
        <body>
          <Main />
          <NextScript />
        </body>

      </html>
    );
  }
}

export default MainDocument;
