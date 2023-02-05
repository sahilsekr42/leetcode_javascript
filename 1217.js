var minCostToMoveChips = function(position) {
    return Math.min(position.reduce((sm,n,id)=>sm+(n%2?1:0),0),
                    position.reduce((sm,n,id)=>sm+(!(n%2)?1:0),0)); 
 };