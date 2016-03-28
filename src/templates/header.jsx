import React from 'react';
import { site } from '../../data';
import { linkTo } from 'utils';

export default ({path}) =>
  <header className={'Header'}>
    <h1 className="Header-identity">
      <a className="Header-siteName" href={linkTo('')}>{site.name}</a>
      <small className="Header-siteTagline">{site.tagline}</small>
    </h1>
    <a className="Header-goBack" href={site.parent_site_url}>{'Back to Polyshaper homepage'}</a>
  </header>