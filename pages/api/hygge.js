// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function hygge(req, res) {
  res.json({ hygge: `${process.env.HYGGE} ☀️` });
}
