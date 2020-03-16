module.exports = middleware => {
  return context => {
    dispatch(0);
    function dispatch(i) {
      let fn = middleware[i];
      if (!fn) return Promise.resolve();
      // fn = async () => {};  =>
      fn({}, () => {
        return dispatch(i + 1);
      });
      // return Promise.resolve(fn({}, () => {
      //   return dispatch(i + 1);
      // }));
    }
  };
};