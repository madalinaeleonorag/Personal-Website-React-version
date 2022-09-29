const checkImageURL = (url) => {
  return fetch(url, { method: "HEAD" })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export default checkImageURL;
