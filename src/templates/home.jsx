import React from 'react';
import { site, posts, pages } from '../../data';
import { prettyDate, values, linkTo} from '../utils';
import truncatise from 'truncatise';

export default () =>
    <div className="Home">
        <div className="Intro">
            <p>{'Lorem Ipsum'}</p>
        </div>
        <div>
            <h2 id="posts" className="RecentPosts-title">Topics</h2>
            {values(pages).filter((p) => p.listed).map(page => {
                return (<li>
                    <a
                        key={page.path}
                        href={linkTo(page.path)}
                    >
                        {page.title}
                    </a>
                </li>);
            })}
        </div>
    </div>
