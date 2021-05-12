// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fetch from 'node-fetch';

export default async function sub(req, res) {
  try {
    const response = await fetch(
      'https://sub-api.dono.gg/v2/subscriptions/active'
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
