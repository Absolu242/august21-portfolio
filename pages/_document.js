import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin={true} />
          <link
            href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&display=swap'
            rel='stylesheet'
          />

          <link
            href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css'
            rel='stylesheet'
          ></link>
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
