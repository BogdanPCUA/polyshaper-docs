import site from './site.yml';
site.baseurl = site.baseurl || '';

const toPath = file => file.replace(/\.\/.*?\//, '/')
                           .replace(/\..*$/, '')
                           .replace(/\index$/, '');

function reduceFn(obj, file) {
  file = { path: toPath(file), ...require(file) };
  return { ...obj, [file.path]: file };
};

const pages = require.context('./', true, /\/pages\/.+\.(md|markdown|html)$/).keys().reduce(reduceFn, {});

export default { pages, site };
