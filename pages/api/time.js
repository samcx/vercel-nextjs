export default (req, res) => {
  console.log('test');
  res.status(200).json({ time: new Date().toLocaleString() });
};
