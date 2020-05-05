// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3



// iterative
function fib(n) {
  const nums = [0, 1];

  while (nums.length <= n) {
    nums.push(nums[nums.length - 1] + nums[nums.length - 2]);
  }

  return nums[n];
}


// alternate iterative
function fib2(n) {
  const nums = [0, 1];

  for (i = 2; i <= n; i++) {
    nums.push(nums[nums.length - 1] + nums[nums.length - 2])
  }

  return nums[n];
}



// recursive
function fib3(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2)
}


// alternate recursive
function fib4(n, nums = [0, 1]) {
  if (nums.length > n) {
    return nums[n];
  }

  nums.push(nums[nums.length - 1] + nums[nums.length - 2]);

  return fib(n, nums);
}



module.exports = fib;
