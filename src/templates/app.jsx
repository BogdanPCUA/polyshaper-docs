import React from 'react';
import { pages, posts } from '../../data';
import Layout from './layout.jsx';
import Home from './home.jsx';
import Page from './page.jsx';
import Post from './post.jsx';

export default ({ path }) =>
<Layout path={path}>
    <div className="Body">
    {
        path === '/' ? <Home path={path} /> :
        pages[path]  ? <Page path={path} page={pages[path]} /> :
        posts[path]  ? <Post path={path} post={posts[path]} /> : null
    }
    </div>
</Layout>
