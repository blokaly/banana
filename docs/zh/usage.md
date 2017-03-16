#欢迎使用Blokaly

(非公开阿尔法版本)

简介
------------
[Blokaly](https://www.blokaly.com)是一个奖项或认证的签发和展示平台，此平台是已[IPFS](https://ipfs.io/)和其它的区块链系统，譬如[以太坊](https://www.ethereum.org/)，为基础构建而成的。

平台的最初架构是借鉴了[OpenBadges](https://openbadges.org/)和[BLOCKCERTS](http://www.blockcerts.org/)的设计与理念，就是世界上的任何用户都可以方便、快捷和安全地创立并颁发奖项和认证，
同时也可以向其他人展示自己所获得的各种成就。所颁发的奖项都是经过颁奖者通过密码学进行数字化签名，然后被存储到IPFS上。
因为IPFS是一个不能被修改、永久性和分布式的云存储网络，所以颁发的奖项可以被作为一种防篡改的数字化认证，并且可以在全世界范围内被公开确认及分享。

如果你对这个项目感兴趣的话，欢迎加入到我们的slack [<img src="../../images/slack.png" alt="blokaly.slack.com" style="hight: 20px; width: 20px;"/>](https://blokaly.slack.com)群<br/>
请多提宝贵意见及建议。

登录
----
目前Blokaly还处于开发阶段，是非公开的阿尔法版本，所以暂时没有用户注册功能。
请用预设定的测试用户，`bob@blokaly.com`和`alice@blokaly.com`登录，密码是`12345`。

签发
----
如果要颁发新奖项的话，点击左侧栏的[签发](https://www.blokaly.com/publish)菜单，然后按照所需步骤逐一填写所颁奖项的IPFS图像代码，奖项名称和描述及领奖人的登录名。
用于测试，以下是三张已预先上载到IPFS的图像代码：

- [Blokaly金奖](https://gateway.ipfs.io/ipfs/QmcTof1PEHHnHtBjgyG8SNAjJpqUX32N3fKSdtx9tTntLy) `QmcTof1PEHHnHtBjgyG8SNAjJpqUX32N3fKSdtx9tTntLy`
- [Blokaly银奖](https://gateway.ipfs.io/ipfs/QmeTpJx1cvc2RVN5dNtZ44KStWuFz8V6aQeU9MvRasMLJ1) `QmeTpJx1cvc2RVN5dNtZ44KStWuFz8V6aQeU9MvRasMLJ1`
- [Blokaly铜奖](https://gateway.ipfs.io/ipfs/QmXNqyypD8PgroZAtk4FhgyWgY8X7NWLPwHF3BVpTwj8vG) `QmXNqyypD8PgroZAtk4FhgyWgY8X7NWLPwHF3BVpTwj8vG`

如果你想用自己的奖项图片，可以在签发的第一步里点击云上载按钮，然后通过[ipfs.pic](https://ipfs.pics/)把图片上传到IPFS，并取得图片的地址代码。

如果是用了`bob@blokaly.com`用户登录测试的话，领奖人可以是`alice@blokaly.com`。反之，用`alice@blokaly.com`登录的话，则领奖人是`bob@blokaly.com`。

当签发步骤完成后，点击**分享**按钮就可以预览已颁发的奖项，然后可以拷贝网址链接给领奖人。链接类似是`https://www.blokaly.com/bao/Qmxxxxxx`，最后以_Qm_开头的一长串字母就是已保存到IPFS上的奖项认证代码。

> **请注意:**<br/> 
> 目前除了奖项图片外，Blokaly用的是自己内部的私有IPFS云存储，所以只有图片是从公有IPFS上获取的。
> 因此在公有IPFS云存储上，是查找不到相关奖项的信息记录的。

领奖
-----
当奖项被签发并发布到IPFS上后，颁奖者就可以发送给领奖者这个奖项的认证代码或网址。
领奖者通过点击**领奖**键并确认登录后，就能领取到相应的奖项。

收藏
----
登录后，点击左侧栏的[收藏](https://www.blokaly.com/gallery)菜单，可以显示所有已领取的奖项。
如果希望了解奖项的详情，请点击每个奖项右上角的下拉选项。