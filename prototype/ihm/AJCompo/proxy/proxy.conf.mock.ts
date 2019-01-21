const mockServerBouchon = require('./backend/index.ts');

function getSelectedProxyEnvMock() {
  mockServerBouchon.listen('9999', () => {
    console.log('Server listening on 9999...');
  });
  return [{
    'context': '/',
    'logLevel': 'debug',
    'target': 'http://localhost:9999',
    'secure': false
  }];
}

const PROXY_CONFIG_MOCK = getSelectedProxyEnvMock();

module.exports = PROXY_CONFIG_MOCK;
