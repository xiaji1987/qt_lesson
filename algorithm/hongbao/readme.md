运算
- 发的总金额等于收的总金额， 不能多， 不能少
- 没人至少要有一分钱
- 保证所有人抢到金额的几率相等

总金额/人数: 15/38 ~= 0.4
会玩？ 抢？
平等机会， 抢的机会
0.01 - 0.8

人数: 10 个人 总额: 100元
10元 0.01 ~ 20元
抢钱是有先后的  0 - 剩余 进行随机

第一种(不可取，不公平的算法)
第1人      0 - 100元      50元(平均值)
第2人      0 - 50元       25元
第3人      0 - 25元       12.5元
...

每次随机的平均值相同
0 - 区间(总金额/人数 * 2)
0 - 20
第二种(发出去总金额 = 总金额) 
第1人      0 - 100元      10元
第2人      0 - 90元       10元
第3人      0 - 80元       10元
...
- 数组存每个人的金额
- Math.random