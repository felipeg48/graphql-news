import React from 'react';

const Header = () => (
  <header>
    <nav>
      <ul className="left-nav">
        <li>
          <a href="#" className="link active">
            Top
          </a>
        </li>
        <li>
          <a href="#" className="link">
            Recent
          </a>
        </li>
        <li>
          <a href="#" className="link">
            Favorites
          </a>
        </li>
      </ul>
      <ul className="right-nav">
        <li>
          <a href="#" className="link login">
            Log in / Register
          </a>
        </li>
        <li>
          <button className="submit-btn">Submit</button>
        </li>
      </ul>
    </nav>
    <style jsx>{`
      header {
        display: flex;
        justify-content: center;
        background-color: #171e26;
        font-size: 14px;
        width: 100%;
      }

      nav {
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        overflow: hidden;
        margin: 1em;
        width: 800px;
      }

      ul {
        display: flex;
        align-items: center;
        flex: 1;
        list-style: none;
        margin: 0;
        overflow: auto;
        padding: 0;
      }

      ul.left-nav {
        justify-content: flex-start;
      }

      ul.right-nav {
        justify-content: flex-end;
      }

      ul > li:first-child > a {
        padding: 0 0.75em 0 0;
      }

      a.active {
        font-weight: 600;
        opacity: 1 !important;
      }

      a.link {
        color: #ffffff;
        padding: 0 0.75em;
      }

      button.submit-btn {
        background-color: #2f353c;
        border: none;
        border-radius: 3px;
        color: #ffffff;
        cursor: pointer;
        font-size: 14px;
        font-weight: 300;
        padding: .75em 1em;
        transition: all 200ms ease;
      }

      button.submit-btn:hover {
        // background-color: #b34213;
      }
    `}</style>
  </header>
);

export default Header;
