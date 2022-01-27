// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function ip(req, res) {
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if (ip.substr(0, 7) == '::ffff:') {
    ip = ip.substr(7);
  }

  res.status(200).json({ ip });
}
