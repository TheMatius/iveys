const getData = (target) => {
  return {
    id: target.id,
    ...target.data()
  };
};

export default getData;