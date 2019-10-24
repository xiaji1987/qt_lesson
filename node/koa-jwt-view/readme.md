sha256: 哈希算法
···js
{
  "alg": "HS256",
  "typ": "JWT"
}
``
part1: base64(header)编码完的
base64: 用 64 
```
part2: base64(payLoad)
Signature:
parts3: sha256(part1 + part2, 'secret')