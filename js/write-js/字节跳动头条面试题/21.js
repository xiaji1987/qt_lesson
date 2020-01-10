// 初始化串珠总个数，连续的串珠个数，颜色种类数，所有串珠的颜色信息数组, 同一颜色的串珠数组, 不合格的颜色个数
let ballNums, linkNums, colorNums, ballColor = [], sameColorBall = [], count = 0;
  [ballNums, linkNums, colorNums] = readline().split(' ').map(item => Number(item));

// 依次保存每个串珠所用颜色信息
// 数组的每个元素都是一个数组，元素数组的第一位代表颜色个数，后续代表所用颜色
for(let i = 0; i < ballNums; ++i) {
  ballColor[i] = readline().split(' ').map(item => Number(item))
}

// 将同一颜色出现的串珠序号进行收集
ballColor.forEach((item, index) => {
  // 若该串珠所用颜色种类大于0
  // console.log(item, 'item');
  if(item[0] > 0) {
      let colorArr = item.slice(1)
      // 下面的item代表不同的颜色种类
      colorArr.forEach(color => {
          // 如果之前已经保存过使用某颜色的串珠序号，则直接将其添加到数组中去
          if(sameColorBall[color]) {
              sameColorBall[color].push(index + 1)
          } else {
             sameColorBall[color] = [index + 1]
          }
      })
  }
   
})
sameColorBall.forEach(item => {
  // sameColorBall[0]代表使用‘0’这种颜色的所有串珠的序号数组,这里的序号是按顺序排列的
  for(let i = 0; i < item.length - 1; ++i) {
      if(item[i+1] - item[i] < linkNums) {
          ++count;
          break;
      }
      if(ballNums - item[item.length - 1] + item[0] < linkNums) {
          ++count;
          break;
      }
  }
})

console.log(count);
