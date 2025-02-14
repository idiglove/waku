import { defineRouter } from 'waku/router/server';

export default defineRouter(
  // getComponent (id is "**/layout" or "**/page")
  async (id) => {
    switch (id) {
      case 'layout':
        return import('./routes/layout.js');
      case 'page':
        return import('./routes/page.js');
      case 'foo/page':
        return import('./routes/foo/page.js');
      default:
        return null;
    }
  },
  // getPathsForBuild
  async () => {
    return ['/', '/foo'];
  },
);
