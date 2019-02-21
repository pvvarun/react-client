function getRandomNumber(max) {
  return (
    Math.floor(Math.random() * max)
  );
}
function getNextRoundRobin(total, current) {
  const value = (current === total - 1) ? 0 : (current + 1);
  return value;
}
export { getRandomNumber, getNextRoundRobin };
