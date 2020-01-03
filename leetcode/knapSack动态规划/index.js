function pack(w, val, capacity, n) {
  let T = []
  for (let i = 0; i < n; i++) {
    T[i] = []
    for (let j = 0; j <= capacity; j++) {

      if (j === 0) { // 容量为0
        T[i][j] = 0
        continue;
      }

      if (j < w[i]) { //容量小于物品的重量
        if (i === 0) {
          T[i][j] = 0
        } else {
          T[i][j] = T[i - 1][j]
        }
        continue;
      }

      if (i === 0) {
        T[i][j] = val[i]
      } else {
        T[i][j] = Math.max(val[i] + T[i-1][j - w[i]], T[i-1][j])
      }
    }
  }
  console.log(T)
  // [ [ 0, 0, 3, 3, 3, 3 ], [ 0, 0, 3, 4, 4, 7 ], [ 0, 0, 3, 4, 5, 7 ] ]
  findValue(w, val, capacity, n, T)
  return T
}

function findValue(w, val, capacity, n, T) {
  var i = n - 1, j = capacity;
  while (i > 0 && j > 0) {
    if (T[i][j] != T[i - 1][j]) {
      console.log('选择物品' + i + '，重量：' + w[i] + ',价值：' + values[i])
      j = j - w[i]
      i--
    } else {
      i--
    }
  }
  if (i === 0) { // 第一行也包含在内
    if (T[i][j] != 0) {
      console.log('选择物品' + i + '，重量：' + w[i] + ',价值：' + values[i])
    }
  }
}




var values = [3, 4, 5, 4],
    weights = [2, 3, 4, 2],
    capacity = 5,
    n = values.length;

pack(weights, values, capacity, n)

// [ [], [], [] ]
