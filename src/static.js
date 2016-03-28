import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import routes from './routes';
import App from './templates/app.jsx';
import './css';

import 'file?name=CNAME!../CNAME'
import 'file?name=favicon.ico&mimetype=image/x-icon!./images/favicon.ico'

function toFilename(path) {
    if (path.match(/index$/)) { path += '.html' }
    if (path.indexOf('.') < 0) { path += '/index.html'; }
    return path.replace(/^(\\|\/)+/, '');
}

function renderPath(path) {
    return '<!doctype html>' + renderToStaticMarkup(<App path={path} />);
}

export default function(render, done) {
    routes.forEach(route => render(toFilename(route), renderPath(route)));
    done();
}
