import React, { ReactElement } from "react";
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
var config = require('../config.json');

const theme = config.theme;

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
  render(): ReactElement {
    return(
      <Html className={theme == "dark" ? "dark" : "light"}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument