// 老师分饼干，每个孩子只能得到一块饼干，但每个孩子想要的饼干大小不尽相同。
// 目标是尽量让更多的孩子满意。 如孩子的要求是 1, 3, 5, 4, 2，饼干是1, 1，
// 最多能让1个孩子满足。
// 如孩子的要求是 10, 9, 8, 7, 6，饼干是7, 6, 5，最多能让2个孩子满足。

/**
 * people: array
 * biscuits: array
 * 贪心算法，每次求出饼干的最优分配方案，
 * 如 7饼干 分给 需求为7的人最优
 * 每次找出最优，利用数据结构map缓存
 */

function fen(peoples, biscuits) {
  let low = 0
  let high = 0
  peoples.sort((a, b) => a - b)
  biscuits.sort((a, b) => a - b)
  while(low < peoples.length && high < biscuits.length) {
    if(peoples[low] <= biscuits[high]) {
      low++
      high++
    } else {
      high++
    }
  }
  console.log(low)
}

fen([10, 9, 8, 7, 6], [7, 6, 5])