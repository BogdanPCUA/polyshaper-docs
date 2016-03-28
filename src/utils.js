import { site } from '../data';


export const prettyDate = date => new Date(date).toDateString();
export const stripHTML = str => str.replace(/<(?:.|\n)*?>/gm, '');
export const values = obj => Object.keys(obj).map(k => obj[k]);

export function escapeXML(str) {
  return str.replace(/[<>&'"]/g, c => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

export function linkTo(path = '/') {
    if (path[0] !== '/') { path = `/${path}`; }
    return `${site.baseurl}${path}`;
}
