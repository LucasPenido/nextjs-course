const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: 'lucas',
        mongodb_password: 'dpYJPpHJHKIBWHm9',
        mongodb_cluster: 'cluster0',
        mongodb_database: 'my-site-dev',
      },
    };
  }
  
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: 'lucas',
      mongodb_password: 'dpYJPpHJHKIBWHm9',
      mongodb_cluster: 'cluster0',
      mongodb_database: 'my-site',
    },
  }
};
