// @flow
import Head from "next/head";
import Link from "next/link";
import React from "react";

export default class extends React.Component {
  static async getInitialProps({ req }) {
    if (req) {
      const basePath = req.params[0];
      return { basePath };
    }

    return {
      basePath: "/"
    };
  }
  render() {
    console.log(this.props.basePath);
    return (
      <div>
        <Head>
          <title>{this.props.basePath}</title>
        </Head>
        <pre>{this.props.basePath}</pre>
        <Link href={`/v/something/awesome`} prefetch>
          <a>/v/something/awesome</a>
        </Link>
      </div>
    );
  }
}
