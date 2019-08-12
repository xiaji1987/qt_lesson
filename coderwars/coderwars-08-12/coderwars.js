// Create phone Number
// (123)456-7890 美国电话号码
// 编写一个函数， 接受由10个函数组成的数组
// 返回 (123)456-7890的格式的电话号码
// 第一种方法
// const CreatePhoneNumber = (arr) =>{
//     const phone = "(" + arr[0] + arr[1] +arr[2] + ")" + arr[3] + arr[4] + arr[5] + "-" + arr[6] + arr[7] + arr[8] + arr[9];
//     console.log(phone);
// }

// 第二种方法
const CreatePhoneNumber = (number) => {
    let format = "(xxx)xxx-xxxx";
    for (let i = 0; i < number.length; i++) {
        format = format.replace('x', number[i]);
    }
    console.log(format);
}
CreatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])