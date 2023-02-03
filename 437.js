var pathSum = function(root, targetSum, way = []) {
  if (root === null) {
    return 0;
  }

  way = [...way, root.val]
    let ways = 0
    let sum = 0
    let l = way.length - 1
    for (let i = l; i >= 0; i--) {
        const value = way[i]
        sum += value
        if (sum === targetSum) {
            ways++;
        }
    }

  return (
    ways +
    pathSum(root.left, targetSum, way) +
    pathSum(root.right, targetSum, way)
  );
};