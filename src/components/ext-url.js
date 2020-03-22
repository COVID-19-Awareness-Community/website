import React from 'react';

export default ({children, url}) => (
  <a href={url} target="_blank" rel="nofollow">
    { children }
  </a>
);
