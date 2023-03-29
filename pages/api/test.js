export default function handler(req, res) {
  return fetch("https://api.bookdoreille.com/api/categories-narra")
    .then(response => {
      return response.json();
    })
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch(() => {
      return res.status(400).json({ success: "Error", status: 400 });
    });
};
