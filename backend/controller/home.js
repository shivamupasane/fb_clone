exports.home = (req, res) => {
  res.status(200).json({
    message: "hi from user home",
    info: ["success"],
  });
};
