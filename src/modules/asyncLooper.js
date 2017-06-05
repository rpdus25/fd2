module.exports = (action, max, term) => {
  let count = 0;
  const intervalId = setInterval(()=>{
    count++;
    if(count >= max) {
      clearInterval(intervalId);
    }
    action();
  }, term);
};