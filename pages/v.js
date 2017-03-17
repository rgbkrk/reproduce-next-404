// @flow
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
        <pre>{this.props.basePath}</pre>
        <p>Click the link below, watch the 404 flicker</p>
        <Link href={`/v/something/awesome`} prefetch>
          <a>/v/something/awesome</a>
        </Link>
      </div>
    );
  }
}
