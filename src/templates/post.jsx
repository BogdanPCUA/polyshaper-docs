import React from 'react';
import { prettyDate } from '../utils';
import { site } from '../../data';

const DISQUS_SNIPPET = `
    <div id="disqus_thread" class="wrapper"></div>
    <script type="text/javascript">
        // required: replace example with your forum shortname
        var disqus_shortname = '${site.disqus_shortname}';
        /* * * DON'T EDIT BELOW THIS LINE * * */
        (function() {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
    </script>
    <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
    <a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>
`


export default ({ post }) =>
    <article className={'Post post'}>
      <h1 className={'post-title'}>{post.title}</h1>
      <time className={'post-date'} dateTime={post.date}>{prettyDate(post.date)}</time>
      <div dangerouslySetInnerHTML={{ __html: post.__content }} />
      {site.disqus_shortname ? <div className={'post-comments'} dangerouslySetInnerHTML={{ __html: DISQUS_SNIPPET }} /> : null}
    </article>
