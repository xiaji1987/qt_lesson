1. get请求的数据会在uRL之后，post请求放在请求体中，
2. get请求提交的url最多只能1024字节，post没有大小限制
3. post请求相对于get请求更安全，get请求明文传输，post放在请求体中
4. get在服务端用resquest.queryString取得变量，post通过resquest.Form获取变量