import React from 'react';

const Header = () => (
  <header>
    <h1 className="title">GraphQL News</h1>
    <nav>
      <ul>
        <li>
          <a href="#" className="link active">
            New
          </a>
        </li>
        <li>
          <a href="#" className="link">
            Comments
          </a>
        </li>
        <li>
          <a href="#" className="link">
            Show
          </a>
        </li>
        <li>
          <a href="#" className="link">
            Ask
          </a>
        </li>
        <li>
          <a href="#" className="link">
            Jobs
          </a>
        </li>
        <li>
          <a href="#" className="link">
            Submit
          </a>
        </li>
        <li className="login">
          <a href="#" className="link login">
            Login
          </a>
        </li>
      </ul>
    </nav>
    <style jsx>{`
      header {
        background-color: #e10098;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0.75em;
      }

      h1.title {
        flex-grow: 1;
        font-size: 16px;
        margin: 0;
        padding: 0 0.75em 0 0;
      }

      nav {
        flex-grow: 10;
      }

      ul {
        list-style: none;
        margin: 0;
        overflow: auto;
        padding: 0;
      }

      li {
        float: left;
        font-weight: 300;
      }

      ul > li:first-child > a {
        padding: 0 0.75em 0 0;
      }

      li.login {
        float: right !important;
      }

      a.active {
        font-weight: 500;
        opacity: 1 !important;
      }

      a.link {
        color: #ffffff;
        padding: 0 0.75em;
        opacity: 0.75;
      }

      a.link:hover {
        color: #ffffff;
      }

      a.login {
        padding: 0 !important;
      }
    `}</style>
  </header>
);

export default Header;
