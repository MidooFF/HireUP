const useRandom = (total: number) => {
  let randomCompanies = [];
  let randomCompayImage = [];
  for (let i = 1; i <= total; i++) {
    randomCompanies.push(Math.floor(Math.random() * 100) + 1);
  }
  function getRandomImage() {
    return Math.floor(Math.random() * 4) + 1;
  }
  return { randomCompanies, getRandomImage };
};

export default useRandom;
