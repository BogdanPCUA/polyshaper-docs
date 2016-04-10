import React from 'react';
import { site } from '../../data';

const GITHUB_FOLLOW_SNIPPET = `<iframe src="https://ghbtns.com/github-btn.html?user=${site.github_username}&type=follow&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>`
const TWITTER_FOLLOW_SNIPPET = `<a href="https://twitter.com/${site.twitter_username}" class="twitter-follow-button" data-show-count="false"></a>
  <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>`
const ANALYTICS_SNIPPET = `<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', '${site.ganalytics_id}', 'auto');
    ga('send', 'pageview');
  </script>`;

const SCRIPTS = [];

site.github_username && SCRIPTS.push(GITHUB_FOLLOW_SNIPPET);
site.twitter_username && SCRIPTS.push(TWITTER_FOLLOW_SNIPPET);
site.ganalytics_id && SCRIPTS.push(ANALYTICS_SNIPPET);

export default () => <div dangerouslySetInnerHTML={{__html: SCRIPTS.join('\n')}} />