## spl
1. mySql
2. mariaDB
## noSql
1. mongoDB
2. redis: 高性能 基于内存， 场景: 缓存

what：
速度很快的非关系型数据库。
【关系型】：
有多个关系表存入信息
支持复杂查询
提供通用的查询语言 SQL
通过多表关系查询
事务的基本要素：ACID
固定表结构：表结构复杂，表结构变更频繁，发布效率低。
【非关系型】
NoSql 不使用sql查询语言，对不同于传统关系型数据库的统称
对传统关系型数据库出现问题的解决方案（比如：对于一致性要求不是很高的需求）
文档存储：mongoDB(bson),  ElasticSearch(json)
redis 速度快的原因：全内存，单线程
why: 
性能出色
支持多种数据结构，List/Set/Hash/ZSet
支持持久化
How：
key/value的存储的结构：
key 永远为一个字符串
value: List/Set/Hash/ZSet/String

List: 双向链表
Set: 无序不重复元素集合
Hash：Hash 就是 map，Redis本身就是一个Map，当value是一个hash时候，又由多个key/value 组成。
SortedSet: 有序不重复集合，如果分值相同则按照key的字节排序
参考命令：http://redisdoc.com/
如果没有安装redis 可以在线练习： http://try.redis.io/