export default (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  if (ip.substr(0, 7) == "::ffff:") {
    ip = ip.substr(7);
  }

  res.status(200).json({ ip });
};
