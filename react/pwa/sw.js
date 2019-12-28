console.log('begin')
const CACHE_NAME = 'PWA-v2.0'
this.addEventListener('install', (event) => {
  // cache storage 缓存内容
  // install -> activated
  // Promise resolve -> activated
  console.log('install success')
  this.skipWaiting()
  event.waitUntil(
    caches.open(CACHE_NAME) // 进入模版
      .then(cache => {
        return cache.addAll([ // 添加缓存的内容
          '/bundle.js',
          'service-worker.png',
          'service-worker.html'
        ])
      })
  )
})

// 监听浏览器的请求事件
this.addEventListener('fetch', event => {
  event.respondWith( // 响应
    caches.match(event.request)
      .then(res => {
        if (res) {
          return res
        } else {
          // 后续想缓存的内容
          return fetch(event.request)
            .then(res => {
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, res)
                  return res
                })
            })
        }
      })
  )
})


// 缓存的删除
this.addEventListener('activate', event => {
  // install -> activate
  // 删除之前不必要的资源
  event.waitUntil(
    caches.keys()
      .then(keyList => {
        console.log(keyList)
        return Promise.all(keyList.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key)
          }
          return Promise.resolve()
        }))
      })
  )
})
