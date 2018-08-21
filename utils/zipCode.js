const randomNumber = (max, min = 0) => Math.floor(Math.random() * (max - min)) + min;

module.exports = () => {
  const n = randomNumber(2) + 1;

  const zipCodeArray = [];
  for (let i = 0; i < n; i += 1) {
    zipCodeArray.push(randomNumber(100000, 10000));
  }

  return zipCodeArray.join('-');
};
