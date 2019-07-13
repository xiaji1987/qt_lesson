css 烦 浪费时间?
{
    key:value;
}
css 编译 stylus

-stylus 是css预编译
    用stylus语法快多了，其他一些高级功能
    写的是.styl文件 浏览器要的是css

stylus common.styl -o(output编译一下，输出为想要的文件) common.css

stylus -w common.styl -o common.css

-界面第一步是写结构，最重要的
    1.脱离分析标签表面的低级趣味 从内到外
    2.盒子 从外到内
    main.container>ul.tag-list>li.item>.into-box+.action-box
    3.写结构 不要去管css
    4.语义化，用合适的标签