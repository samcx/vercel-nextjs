export default (req, res) => {
  res.json({ hygge: `${process.env.HYGGE} ☀️` });
};
