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
  let map = new Map
  for (let i = 0; i < peoples.length; i++) {
    for (let j = 0; j < biscuits.length; j++) {
      if (peoples[i] <= biscuits[j]) {
        if (biscuits[j] <= map.get(peoples[i])){
          map.set(peoples[i], biscuits[j])
        } 
      }
    }
  }
  console.log(map)
}

fen([10, 9, 8, 7, 6], [7, 6, 5])