import React from 'react';

const Feed = props => (
  <div className="feed-wrapper">
    {props.links.map((link, i) =>
      <div key={`item-${i}`}>
        <span>
          {i + 1}. {/* arrays start at 0 */}
        </span>
        <h2>
          <a href={link.url}>{link.description}</a>
        </h2>
        <style jsx>{`
          h2 {
            display: inline-block;
            font-size: 16px;
            font-weight: 300;
          }

          div.feed-wrapper {
            background-color: #ffffff;
          }
        `}</style>{' '}
        <a href={link.url}>
          {/* display source url & remove http/https from string */}
          ({link.url.replace(/(^\w+:|^)\/\//, '')})
        </a>
      </div>
    )}
  </div>
);

export default Feed;
