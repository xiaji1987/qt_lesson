## 
SEO:浏览器会爬取HTML内容 。为了SEO 我们放文字，为了我美观放图片，

场景: 网站的 logo

## css 选择器 优先级
important
style (1000)权重
id (100)
class (10)
元素 伪元素 (*) (1)
举例:
    1. #box span .active 权重(111)
    2. #box span 权重(101)
同等优先级 按照css定义的顺序出现覆盖先出现的

'''css
.red{ color: red}
.blue{ color: blue}
<span class="blue red">123</span>问是什么颜色的？
答案: 蓝色

## animation 动画

forwards : 应用动画结束帧的状态（结束帧与动画运动次数和方向有关）
backwrads: 应用动画起始帧的状态 （与动画运动方向有关）
both : 应用首帧与结束帧（同时应用 forwards 与 backwrads）