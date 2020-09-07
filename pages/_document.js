import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../lib/gtag'
class MyDocument extends Document {

  render() {
    return (
      <Html lang="ru">
        <Head>

          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="Keywords" content="Форум, Лигал, База КБГУ, КБГУ"/>
          <meta charset="utf-8"/>
          <meta name="description" content="Межрегиональный юридический форум «Лигал–2020»" />

          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&family=Rubik:wght@300;400;500;700;900&display=swap" rel="stylesheet"/>

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument