// Task 10: Write a function to solve the Fibonacci sequence using dynamic prcgrarnming. Log the Fibonacci numbers.

function fibonacci(n) {
  if (n <= 1) return n;

  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[n];
}

function logFibonacciNumbers(n) {
  for (let i = 0; i <= n; i++) {
    console.log(` ${fibonacci(i)}`);
  }
}

// logFibonacciNumbers(10);

// Task 11 : Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.

// The knapsack problem is a classic optimization problem where the goal is to maximize the total value of items placed in a knapsack of limited capacity. Each item has a weight and a value, and the knapsack has a maximum capacity. The goal is to determine the maximum value that can be obtained by placing items in the knapsack without exceeding the capacity.

function knapsack(values, weights, W) {
  let n = values.length;
  let dp = Array(n + 1)
    .fill(null)
    .map(() => Array(W + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= W; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          values[i - 1] + dp[i - 1][w - weights[i - 1]]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][W];
}

let values = [60, 100, 120];
let weights = [10, 20, 30];
let W = 50;

console.log(knapsack(values, weights, W));
