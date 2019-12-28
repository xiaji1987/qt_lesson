## PWA
1. 离线访问 (cacheStorage + service-work)
2. 消息推送 manifest.json
3. 桌面入口 Notification

## web-worker
js 都是单线程的
能够让我们的js 运行在别外一个线程之中

## cache storage
1. 除非明确地更新缓存，否则缓存不会被更新
2. 除非删除，否则缓存数据永不过期
3. 一个域下面限制了缓存数据的大小


## 更新
http, a.js a.js?v1.0.0
sw.js install -> cache.addAll
fetch -> cache.match

不是每次更新，service-work 都会重新install -> activated
如果 service-work 内容变了才会install -> skipWaiting -> activated
skipWaiting 会在这里等着，如果用户把页面关了，再进来，才会到 activated
this.skipWaiting() 会到 activated
