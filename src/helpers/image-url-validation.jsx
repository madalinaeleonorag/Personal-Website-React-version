const checkImageURL = (url) => {
  return fetch(url, { method: "HEAD" }).then((res) => {
    return res;
  });
};

export default checkImageURL;
