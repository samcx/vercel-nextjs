// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function sub(req, res) {
  const sub = await fetch('https://sub-api.dono.gg/v2/subscriptions/active');
  const subData = await sub.json();

  res.json({ data: subData });
}
