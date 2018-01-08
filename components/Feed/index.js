import React from 'react';
import UpvoteArrow from '../Svg/arrow-up';
import DownvoteArrow from '../Svg/arrow-down';

const Feed = props => (
  <div className="feed-wrapper">
    {props.links.map((link, i) =>
      <div key={`item-${i}`} className="feed-item">
        <div className="score-wrapper">
          <UpvoteArrow className="upvote" fill="#2D72D9" />
          125
          <DownvoteArrow className="upvote" fill="#DEDFE1" />
        </div>
        <div>
          <h2>
            <a href={link.url} className="title">
              {link.description}
            </a>
          </h2>{' '}
          <span className="url">
            {/* display source url & remove http/https from string */}
            ({link.url.replace(/(^\w+:|^)\/\//, '').split(/[/?#]/)[0]})
          </span>
          <div className="meta-info">
            <span>100 points by nosferatu 3 hours ago | hide | 106 comments</span>
          </div>
          {/* make sure each link has a divider below except for the last item in the array */}
          {/* {props.links.length !== i + 1 ? <hr className="divider" /> : null} */}
        </div>
        <style jsx>{`
          div.score-wrapper {
            align-items: center;
            display: flex;
            color: #2D72D9;
            flex-direction: column;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: -0.025em;
            padding: 0 1em 0 0;
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

          span.url {
            color: #807f80;
            font-size: 12px;
          }

          a.url:hover {
            text-decoration: underline;
          }

          div.feed-wrapper {
            background-color: #ffffff;
            border-radius: 3px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            margin: 1em;
            width: 800px;
          }

          div.feed-item {
            align-items: center;
            border-bottom: 1px solid #f8f8f8;
            display: flex;
            padding: 1em;
          }

          div.feed-item:last-child {
            border: none;
          }

          div.meta-info > span {
            color: #807f80;
            font-size: 10px;
          }
        `}</style>
      </div>
    )}
  </div>
);

export default Feed;
