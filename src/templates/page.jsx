import React from 'react';

export default ({ page }) =>
  <div className="Page">
    <h1 className="Page-title">{page.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: page.__content }} />
  </div>
