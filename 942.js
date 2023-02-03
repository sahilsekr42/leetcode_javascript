var diStringMatch = function(s) {
    const n = s.length;
  const perm = new Array(n + 1);
  let low = 0;
  let high = n;

  for (let i = 0; i < n; i++) {
    if (s[i] === 'I') {
      perm[i] = low;
      low++;
    } else if (s[i] === 'D') {
      perm[i] = high;
      high--;
    }
  }

  perm[n] = high;

  return perm;
};