1. 渲染方式不同与H5，小程序通过Native原生实现，小程序支持web渲染，h5的渲染方式需要初始化webView组件，然后在webView加载
2. 小程序特有的双薪阿成射击，h5下所有资源都会达到一个bundle.js文件里
小程序编译会有两个bundle， 一个渲染主线程，他负责加载并渲染index.js内容，另一个Service Worker线程，他负责执行index.work.js里的封装业务逻辑