import React from 'react';
import _ from 'lodash';

import { pages, posts, site } from '../../data';
import Header from './header.jsx';
import Footer from './footer.jsx';

const TYPEKIT_CODE = `(function(d) {
  var config = {
    kitId: 'xnj4omu',
    scriptTimeout: 3000,
    async: false
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);`;

export default ({ children, path }) =>
  <html>
    <head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content={site.description} />
      <link rel='canonical' href={site.url + site.baseurl + path} />
      <title>{title(path) + site.name}</title>
      <script dangerouslySetInnerHTML={{ __html: TYPEKIT_CODE }}></script>
      <link href={site.baseurl + '/static.css'} rel='stylesheet' type='text/css' />
    </head>
    <body className={`Doc Doc--${_.kebabCase(_.deburr(path))}`}>
      <div className={'Site'}>
        <Header path={path} />
        {children}
        <Footer />
      </div>
    </body>
  </html>

function title(path) {
  return pages[path] ? pages[path].title + ' • ' : '';
}
