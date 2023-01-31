var minimumSum = function(num) {
    return num.toString()
              .split('')
              .map(Number)
              .sort()
              .reduce((sm,n,id)=>id<=1?sm+(10*n):sm+n,0);
};