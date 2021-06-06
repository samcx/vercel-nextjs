// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default async function sub(req, res) {
  try {
    const donoResponse = await axios.get(
      'https://sub-api.dono.gg/v2/subscriptions/active'
    );

    const responseObject = {
      status: 'success',
      tiers: [
        donoResponse.data.data[0].price,
        donoResponse.data.data[1].price,
        donoResponse.data.data[2].price,
      ],
      message: '',
    };

    return res.json(responseObject);
  } catch (err) {
    return res.json({
      status: 'failed',
      tiers: null,
      message: null,
      error: JSON.stringify(err.response.data),
    });
  }
}
