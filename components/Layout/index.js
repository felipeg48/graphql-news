import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../Header';

export default children => (
  <div>
    <Head>
      <style>{`
        html, body {
          margin: 0;
          padding: 0;

          height: 100%;
          width: 100%;
        }
        body {
          background-color: #f2f3f5;
          height: 100%;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 300;
          width: 100%;
        }

        a {
          text-decoration: none;
        }

        div.container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
      `}</style>
    </Head>
    <div className="container">
      <Header />
      {children.children}
    </div>
  </div>
);