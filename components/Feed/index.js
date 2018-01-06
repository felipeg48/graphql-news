import React from 'react';

const Feed = props => (
  <div className="feed-wrapper">
    {props.links.map((link, i) =>
      <div key={`item-${i}`}>
        <span className="position">
          {i + 1}. {/* arrays start at 0 */}
        </span>
        <h2>
          <a href={link.url} className="title">
            {link.description}
          </a>
        </h2>{' '}
        <a href={link.url} className="url">
          {/* display source url & remove http/https from string */}
          ({link.url.replace(/(^\w+:|^)\/\//, '')})
        </a>
        <div className="meta-info">
          <span>100 points by nosferatu 3 hours ago | hide | 106 comments</span>
        </div>
        {/* make sure each link has a divider below except for the last item in the array */}
        {props.links.length !== i + 1 ? <hr className="divider" /> : null}
        <style jsx>{`
          span.position {
            font-size: 12px;
          }

          h2 {
            display: inline-block;
            font-size: 16px;
            font-weight: 400;
            letter-spacing: -0.025em;
            margin: 0;
            padding: 0;
          }

          a.title {
            color: #000000;
          }

          a.url {
            color: #807f80;
            font-size: 12px;
          }

          a.url:hover {
            text-decoration: underline;
          }

          div.feed-wrapper {
            background-color: #ffffff;
            padding: 1em;
          }

          div.meta-info > span {
            color: #807f80;
            font-size: 10px;
          }

          hr.divider {
            border: none;
            background-color: #f2f3f5;
            height: 1px;
            outline: none;
          }
        `}</style>
      </div>
    )}
  </div>
);

export default Feed;
