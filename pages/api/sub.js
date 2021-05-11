// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fetch from 'node-fetch';

export default async function sub(req, res) {
  try {
    const response = await fetch(
      'https://sub-api.dono.gg/v2/subscriptions/active',
      {
        method: 'GET',
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
        },
      }
    );

    return res.json(response);
  } catch (err) {
    return res.json({
      status: 'failed',
      tiers: null,
      message: null,
      error: err.response.data,
    });
  }
}
