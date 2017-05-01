# BIX

Blokaly使用Blokaly Information eXchange (**BIX**)协议在[IPFS](https://ipfs.io)上创建、颁发和展示奖章。

你可以到GitHub上[BIX](https://github.com/blokaly/bix)项目的页面浏览并下载测试。

为了确保颁发奖章的真实性，BIX使用[Blokaly Web Token](#bwt)对所颁发的奖章进行密码数字化签名。
使用密码化的签名能够保证只有是经过真正授权的颁奖着（或颁奖者账户的拥有者）才能够颁发相应奖章或认证，而任何其他人是不能仿制或篡改的。

## BWT

Blokaly Web Token（**BWT**）借鉴了[Ethereum Web Token](https://github.com/cyfin-io/ether-token-js)和[JSON Web Token](https://jwt.io)的技术。
Blokaly会给每一个颁奖者创建一个特有的账户和一个代表这个账户的唯一代码，在颁发奖章或认证时，颁奖者用这个账户对相应奖章或认证的代码进行行密码数字化签名。
签名后会产生一个BWT代码，这个BWT代码随后就可以被用来对所颁发奖章或认证的真实性进行认证。

BWT代码由两个部分组成，其中用点号（.）隔开。这两个部分是

- Payload（载荷）
- Signature（签名）

列如： 
```
eyJoYXNoIjoiNTdmMTU2MzQyNjdiY2M3MjcwMjc0M2M5M2I0OTY0NmZkN2E5NzI3YjlkN2JmNGZhZDQ5YmQ2OTQyMmI3NDdlNSIsInYiOjF9.EG0nMGSv8QlqT6tKnhVn6nGuqata7Q-0OWLYRVaA8gpGauu0FUe6k-7_L15r7DdxtK6LUiUjrXOFV_bKjTs4pg
```

载荷部分是一列经过**Base64Url**编码过的字符串，编码前的原文是由奖章或认证的唯一哈系代码和ECDSA签名的V部分构成的JSON对象。

列如：
```json
{
  "hash":"75612a0ae77ec793ec7072db9bd83e775066a21ab3e6545fe745115c2230151c",
  "v":0
}
```

BWT的签名部分是经过**JOSE**编码过的ECDSA签名。

那如何用BWT来对奖章或认证的真实性进行确认呢？<br />
通过对BWT中的载荷及签名部分进行解码后，我们可以得到相应颁奖者的公共密钥。对公共密钥复原衍算后我们就可以得到颁奖者的账户代码。
然后，我们可以用这个BWT所代表的账户与奖章或认证的颁发者账户对比。账户相同时代表这个奖章或认证是值得信赖的和可以被接受的。

## 数据类型
请参阅[英文版](/en/tech/#data-types)