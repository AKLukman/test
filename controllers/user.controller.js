let users = [
  { id: 1, name: "Hammer" },
  { id: 2, name: "Hammer2" },
  { id: 3, name: "Hammer3" },
  { id: 4, name: "Hammer3" },
  { id: 5, name: "Hammer3" },
  { id: 6, name: "Hammer3" },
  { id: 7, name: "Hammer3" },
  { id: 8, name: "Hammer3" },
  { id: 9, name: "Hammer3" },
  { id: 10, name: "Hammer3" },
  { id: 11, name: "Hammer3" },
  { id: 12, name: "Hammer3" },
];

module.exports.getRandomUser = (req, res, next) => {
  res.json(users[Math.floor(Math.random() * users.length)]);
};

module.exports.getAllUser = (req, res, next) => {
  const { limit } = req.query;
  res.json(users.slice(0, limit));
};

module.exports.getHello = (req, res, next) => {
  res.send("Hello");
};
