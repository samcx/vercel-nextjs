// next.config.js
const cspRules = [
  "default-src 'self' nftx.ethereumdb.com storage.opensea.io",
  "frame-src 'self' widget.portis.io 1bzw2g6x5v1d.statuspage.io",
  `script-src 'self' 'unsafe-inline' www.googletagmanager.com www.google-analytics.com 1bzw2g6x5v1d.statuspage.io rum-static.pingdom.net cdn.speedcurve.com lux.speedcurve.com widget.intercom.io js.intercomcdn.com`,
  "connect-src 'self' nftx.ethereumdb.com api.thegraph.com api.opensea.io api.nftx.xyz test-api.nftx.xyz graph-api.nftx.xyz api.blocknative.com wss://api.blocknative.com api.covalenthq.com www.google-analytics.com rinkeby-api.opensea.io stats.g.doubleclick.net rum-collector-2.pingdom.net eth-mainnet.alchemyapi.io mainnet.infura.io wss://www.walletlink.org wss://bridge.walletconnect.org mainnet-infura.wallet.coinbse.com api.coingecko.com widget.intercom.io api-iam.intercom.io wss://nexus-websocket-*.intercom.io vitals.vercel-insights.com",
  "img-src 'self' cms.nftx.xyz res.cloudinary.com lh3.googleusercontent.com storage.opensea.io raw.githubusercontent.com www.google.com www.google.co.uk www.google-analytics.com data:",
  "style-src 'self' 'unsafe-inline'",
  "base-uri 'self'",
  "form-action 'self'",
  "font-src 'self'",
  "prefetch-src 'self' 'unsafe-inline'",
  "manifest-src 'self'",
].join('; ');

module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Content-Security-Policy',
            value: cspRules,
          },
        ],
      },
    ];
  },
};
