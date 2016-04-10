import React from 'react';
import { site, posts, pages } from '../../data';
import { prettyDate, values, linkTo} from '../utils';
import truncatise from 'truncatise';

export default () =>
    <div className="Home">
        <div className="Intro"></div>
            {values(pages).filter((p) => p.listed).map(page => {
                return (
                    <h2>
                        <a
                            key={page.path}
                            href={linkTo(page.path)}
                        >
                            {page.title}
                        </a>
                    </h2>);
            })}
    </div>
