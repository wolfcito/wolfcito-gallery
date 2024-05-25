import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" />
          <meta name="description" content="Wolfcito's gallery" />
          <meta property="og:site_name" content="wolfcito.xyz" />
          <meta property="og:description" content="Wolfcito's gallery" />
          <meta property="og:title" content="Momentos increíbles de Wolfcito" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Momentos increíbles de Wolfcito"
          />
          <meta name="twitter:description" content="Wolfcito's gallery" />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
