function getRandomNumber(max) {
    return(
    Math.floor(Math.random()*max)
    );
}
function getNextRoundRobin(total, current) {
    if (current === total-1) {
        return 0;
    }
    else {
        return current+1;
    }
}
export { getRandomNumber, getNextRoundRobin}