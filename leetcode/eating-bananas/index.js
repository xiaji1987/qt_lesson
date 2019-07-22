var minEatingSpeed = function(piles ,H = 8){
    let lo = 1,
        hi = Math.max(...piles);//max
    while (lo<=hi) {
        // 提前退出
        if (canEatAllBananas(piles,H,lo)) {
            hi--;
            return lo;
        }
        lo++;
    }
    return lo;
}
function canEatAllBananas(piles,H,low){
    let sum=0;
    for(let pile of piles){
        sum+=Math.ceil(pile/low);
    }
    return sum<=H;
}
console.log(minEatingSpeed([3,6,7,11]));