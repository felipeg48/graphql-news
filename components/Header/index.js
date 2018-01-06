import React from 'react';

const Header = () => (
  <header>
    <h1>GraphQL News</h1>
    <style jsx>{`
      h1 {
        display: inline-block;
        font-size: 16px;
        margin: 0;
      }
    `}</style>
    <nav>
      <ul>
        {/* eslint-disable */}
        <li><a href="#">new</a></li>
        <li><a href="#">comments</a></li>
        <li><a href="#">show</a></li>
        <li><a href="#">ask</a></li>
        <li><a href="#">jobs</a></li>
        <li><a href="#">submit</a></li>
        <li><a href="#">login</a></li>
        {/* eslint-enable */}
        <style jsx>{`
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          li {
            float: left;
            padding: 0 10px 0 10px;
          }
        `}</style>
      </ul>
    </nav>
    <style jsx>{`
      header {
        display: block;
        width: 100%;
      }

      nav {
        display: inline-block;
      }
    `}</style>
  </header>
);

export default Header;
