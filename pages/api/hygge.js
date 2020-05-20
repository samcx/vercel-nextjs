export default function Hygge(req, res) {
  res.json({ hygge: `${process.env.HYGGE} ☀️` });
}
