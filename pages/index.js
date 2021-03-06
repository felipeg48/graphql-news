import React from 'react';
import { gql } from 'react-apollo';
import 'babel-polyfill';
import apollo from '../lib/apollo';
import Feed from '../components/Feed';
import Layout from '../components/Layout';

global.fetch = require('node-fetch');

const query = gql`
  {
    allLinks {
      url
      description
    }
  }
`;

export default class App extends React.Component {
  /* eslint-disable */
  static async getInitialProps({ req }) {
    return await apollo.query({
      query,
    });
  }
  /* eslint-enable */

  render() {
    if (this.props.data && this.props.data.allLinks) {
      return (
        <Layout>
          <Feed links={this.props.data.allLinks} />
        </Layout>
      );
    }
    return null;
  }
}
