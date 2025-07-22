const useRandom = (total: number) => {
  let randomCompanies = [];
  let randomCompanyImages = [];
  for (let i = 1; i <= total; i++) {
    randomCompanies.push(Math.floor(Math.random() * 100) + 1);
  }
  for (let i = 1; i <= total; i++) {
    randomCompanyImages.push(Math.floor(Math.random() * 4) + 1);
  }
  return { randomCompanies, randomCompanyImages };
};

export default useRandom;
