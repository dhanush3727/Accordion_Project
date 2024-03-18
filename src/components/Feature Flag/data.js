const dummyAPI = {
  showThemeSwitcher: true,
  showGame: true,
  showColorGenerated: true,
};

const featureFlagsData = () => {
  return new Promise((resolve, reject) => {
    if (dummyAPI) {
      setTimeout(resolve(dummyAPI), 500);
    } else {
      reject("Some error occured! Please try again");
    }
  });
};

export default featureFlagsData;
