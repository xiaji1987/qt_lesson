// //大数据分页
// const originNews = Array.from(
//     {length:10000},
//     (v,k)=>({
//         content:`新闻${k}`
//     })
// )
// //分割
// // console.log(originNews);
// //page limit 函数去做
// // 箭头函数
// //[[0-19],[20-39],...[9980,9999]]
// const chunk = (arr,size)=>
//     Array.from({
//         length:Math.ceil(arr.length/size)
//     },(v,i)=>{
//         //切割数组
//         arr.slice(size*i,size*(i+1));
//     })
// // chunk(originNews,20)
// const element=document.querySelector('.news');
// let page=0;
// let pageNum=Math.ceil(document.body.clientHeight/50);
// let news=chunk(originNews,pageNum);
// const loadObserver=new IntersectionObserver(
//     (entries)=>{
//         if (entries[0].intersectionRatio<=0) {
//             return;
//         }
//         const hasPrePage = page!=0;
//         const hasNextPage = page!=news.length-1;

//         const now = news[page];
//         const pre = hasPrePage?news[page-1]:[];
//         const next = hasNextPage?news[page+1]:[];

//         //渲染
//         render(pre.length,[...pre,...now,...next]);
     
//         page = entries[0].target.className == 'new-footer'||page===0?(hasNextPage?page+1:page):(hasPrePage?page-1:page);
//     },{threshold:[1]}
// );
// loadObserver.observe(document.querySelector('.news-header'));
// loadObserver.observe(document.querySelector('.news-footer'));
// function render(last,data){
//     element.innerHTML = '';
//     data.forEach((i, v) => element.innerHTML
//      += v == last ? `<div id="news-href">${i.content}</div>`:`<div>${i.content}</div>`);
//      window.location.href = '#news-href';
// }
// - 大数据 js 分页
const originNews = Array.from(
  { length: 10000
  },
  (v, k) => ({
    content: `新闻${k}`
  })
)
//分割
// console.log(originNews);
// page limit  函数去做
// 箭头函数
// [[0-19], [20-29], [....]]
const chunk = (arr, size) => 
    Array.from({
      length: Math.ceil(arr.length/size)
    }, (v, i) => 
      // 切割数组
      arr.slice(size*i, i*size + size)
    )

// console.log(chunk(originNews, 20))
const element = document.querySelector('.news');
let page = 0;
let pageNum = Math.ceil(document.body.clientHeight/50);
console.log(pageNum);
let news = chunk(originNews, pageNum);
const loadObserver = new IntersectionObserver(
(entries) => {
    if (entries[0].intersectionRatio <= 0) 
    return;
    
    const hasPrePage = page != 0;
    const hasNextPage = page != news.length - 1;

    const now = news[page];
    const pre = hasPrePage? news[page-1]:[];
    const next = hasNextPage?news[page+1]:[];

    // 渲染 
    render(pre.length,
    [...pre, ...now, ...next]);
    
    page = entries[0].target.className == 'news-footer' || page === 0 ? (hasNextPage? page+1 : page) : (hasPrePage?page-1: page)
}, {threshold: [1]}) 

loadObserver.observe(document.querySelector('.news-header'))
loadObserver.observe(document.querySelector('.news-footer'))

function render(last, data) {
element.innerHTML = '';
data.forEach((i, v) => element.innerHTML+= v == last ? `<div id="news-href">${i.content}</div>`:`<div>${i.content}</div>`);
    window.location.href = '#news-href';
}