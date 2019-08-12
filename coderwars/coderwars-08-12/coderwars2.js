// 140 likes
// 喜欢的人 [] 'on one likes this'
// ["Perter"] 'Perter likes this'
// ["Jacob", "Alex"] 'Jacob and Alex likes this'
// ["Max", "John", "Mark"] 'Max John and Mark likes this'
// ["Alex", "jacob", "Mark", "Max"] 'Alex jacob and 2 others likes this'

// 第一种
// const likes = (names) => {
//     switch (names.length) {
//         case 0:
//             return 'on one likes this';
//         case 1:
//             return names[0] + ' likes this';
//         case 2:
//             return names[0] + ' and ' + names[1] +' likes this';
//         case 3:
//             return names[0] + ' ' + names[1] + ' and ' + names[2] + ' likes this';
//         default:
//             return names[0] + ' ' + names[1] + ' and ' + (names.length - 2) + ' others likes this';
//     }
// }
// console.log(likes(["Alex", "jacob", "Max", "Perter"]));

// 第二种
// 顺序思维 数学思维
// 4 种可能 likes 的模式?
// phone number 1种模式里的匹配 name names[i]

// const likes = names => {
//     const templates = [ 'on one likes this', 
//                         '{name} likes this', 
//                         '{name} and {name} likes this', 
//                         '{name} {name} and {name} likes this', 
//                         '{name} {name} and {length} others likes this'];
//     let idx = names.length <= 4 ? names.length : 4;// 哪一种模式
//     return templates[idx].replace(/{name}|{length}/g, function(val){
//         console.log(val);
//         return val === '{name}' ? names.shift() : names.length;
//     });
// }
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
