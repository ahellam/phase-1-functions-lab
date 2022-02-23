// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    let scuberHQ = 42;
    return Math.abs(blocks - scuberHQ)
}
function distanceFromHqInFeet(feet) {
   return (distanceFromHqInBlocks(feet) * 264);
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((start-destination)*264)
}

function calculatesFarePrice(start, destination) {
    let lowPrice = Math.abs((distanceTravelledInFeet(start, destination) -400 ) * .02)
    let highPrice = 25

    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far';
    } else if (distanceTravelledInFeet(start, destination) > 2000) {
        return highPrice;
    } else if (distanceTravelledInFeet(start, destination) >= 400) {
        return lowPrice;
    } 
}
console.log(calculatesFarePrice(50, 58));