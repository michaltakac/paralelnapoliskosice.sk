import React from 'react';
import PropTypes from 'prop-types';

import { PostExcerpt } from 'components/PostExcerpt';

export const Posts = ({ posts }) => (
  <div className="flex -mx-2 flex-wrap">
    {posts.map(post => (
      <PostExcerpt
        key={post.title}
        date={post.date}
        dateLocal={post.dateLocal}
        images={post.images}
        title={post.title}
        url={post.url}
        tags={post.tags}
        author={post.author}
      >
        {post.excerpt}
      </PostExcerpt>
    ))}
  </div>
);

Posts.propTypes = {
  articles: PropTypes.array,
};
