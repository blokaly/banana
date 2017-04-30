# BIX

Blokaly uses the Blokaly Information eXchange (**BIX**) protocol to create, issue and display badges on [IPFS](https://ipfs.io).

Take a look of the [BIX](https://github.com/blokaly/bix) git repo and have a go with it.

To ensure the authenticity of the badge, BIX uses [Blokaly Web Token](#bwt) to sign an issued badge.
The cryptograph will guarantee that it was the authorised [issuer](#issuer) (or the issuer's account owner) 
who published the badge and no one else can fake the badge. 


## BWT

Blokaly Web Token (**BWT**) borrows the ideas from [Ethereum Web Token](https://github.com/cyfin-io/ether-token-js) and [JSON Web Token](https://jwt.io).
Every issuer on Blokaly will have an unique account generated (see this [example](#issuer-example)). Before issuing any badge via Blokaly, 
the badge's unique id hash code is signed cryptographically by the issuer, generating a BWT token (see this [example](#bao-example)) 
that can be used publicly to verify the authenticity of the issuer.

BWT consists of two parts separated by a dot (.), which are

- Payload
- Signature

For example, 
```
eyJoYXNoIjoiNTdmMTU2MzQyNjdiY2M3MjcwMjc0M2M5M2I0OTY0NmZkN2E5NzI3YjlkN2JmNGZhZDQ5YmQ2OTQyMmI3NDdlNSIsInYiOjF9.EG0nMGSv8QlqT6tKnhVn6nGuqata7Q-0OWLYRVaA8gpGauu0FUe6k-7_L15r7DdxtK6LUiUjrXOFV_bKjTs4pg
```

The Payload part is a **Base64Url** encoded string of a json object including the badge's unique id hash and the ECDSA signature's v part:

For example,
```json
{
  "hash":"75612a0ae77ec793ec7072db9bd83e775066a21ab3e6545fe745115c2230151c",
  "v":0
}
```

The Signature part is the **JOSE** encoded string of the ECDSA signature.

How to use BWT to verify the issued badge's authenticity?<br />
Well, by using the payload's hash and the ECDSA signature, 
the public key of the issuer can be derived, and the account. So the issuer's account which was used to issue the badge
can be compared with the one embeded in the badge (see this [example](#badge-example)). Only accept the badge or trust 
the issuer if they are the same.

## Data Types

BIX currently handles the following 4 types of data:

### Issuer:

| Property | Expected Value | Description |
| -------- | ------------- | ----------- |
| **type** | URL | Schema definition of the type 
| **name** | Text | Name of the issuer |
| **account** | Hash | A unique hash code representation of the issuer

<a id="issuer-example"></a>_Example_:
```json
{
   "type": "bloka.ly/bix/issuer/v1",
   "name": "Bob",
   "account": "e8140f6c18fb11d716626a3855b22d65b9cc38c2"
}
```

_Note_:
>The account is generated using [LightWallet](https://github.com/ConsenSys/eth-lightwallet). 

### Recipient:

| Property | Expected Value | Description |
| -------- | -------------- | ----------- |
| **type** | `email` or `group` | Either a specific recipient or a group 
| **hashed** | Boolean | Whether or not the identity value is hashed
| **identity** | Hash or Text | Either the hash of the identity or the plain text value<br/>Hash is composed of _algorithm name_$_hash code_
| **salt** | Text | Salt string used for generating the hashed identity

<a id="recipient-example"></a>_Example_:
```json
{
   "type": "email",
   "hashed": true,
   "identity": "sha256$513f1cd674fbaebd09b96b5f32d0bb5252d4faa7be9020c77910481fce21e95e",
   "salt": "]nayd5:vV1"
}
```

_Note_:
>If the intended recipient email address is known (in this case `alice@blokaly.com`), then the identity hash code
`513f1cd674fbaebd09b96b5f32d0bb5252d4faa7be9020c77910481fce21e95e` can be derived by 
applying **sha256** onto the combined string of email address and the salt (in this case `alice@blokaly.com]nayd5:vV1`).
The recipient identity then can be used to verify the person who is claiming the issued badge.

### Badge

| Property | Expected Value | Description |
| -------- | ------------- | ----------- |
| **type** | URL | Schema definition of the type
| **name** | Text | The name of this badge
| **description** | Text | A short description of this badge
| **image** | IPFS URI | IPFS hash of the badge image
| **issuer** | IPFS URI | IPFS hash of the issuer

<a id="badge-example"></a>_Example_:
```json
{
   "type": "bloka.ly/bix/badge/v1",
   "name": "Blokaly Gold",
   "description": "Gold Cup of Blokaly",
   "image": "ipfs://QmcTof1PEHHnHtBjgyG8SNAjJpqUX32N3fKSdtx9tTntLy",
   "issuer": "ipfs://QmexQQ1zE3kKhd2HcSM8VCwKwGUBqBzBANB2VCJxgq6S4W"
}
```

### BAO (Blokaly Asset Omni)

| Property | Expected Value | Description |  
| -------- | ------------- | ----------- |  
| **type** | URL | Schema definition of the type 
| **assetType** | `Individual` or `Group` | Either issued for a specific recipient or a group 
| **id** | Hash | Unique hash code of the bao
| **recipient** | [Recipient](#recipient) | The recipient of this bao
| **asset** | IPFS URI | IPFS hash of the badge 
| **verification** | [BWT](#bwt) | The Blokaly Web Token signed by the issuer
| **issuedOn** | DateTime | Timestamp of when the bao was issued

<a id="bao-example"></a>_Example_:
```json
{
   "type": "bloka.ly/bix/bao/v1",
   "assetType": "Individual",
   "id": "57f15634267bcc72702743c93b49646fd7a9727b9d7bf4fad49bd69422b747e5",
   "recipient": {
      "type": "email",
      "hashed": true,
      "identity": "sha256$513f1cd674fbaebd09b96b5f32d0bb5252d4faa7be9020c77910481fce21e95e",
      "salt": "]nayd5:vV1"
   },
   "asset": "ipfs://QmNvmZTjUd28YwYbULUpvoyhthjuWYKAUdfXYNzfVFquem",
   "verification": "eyJoYXNoIjoiNTdmMTU2MzQyNjdiY2M3MjcwMjc0M2M5M2I0OTY0NmZkN2E5NzI3YjlkN2JmNGZhZDQ5YmQ2OTQyMmI3NDdlNSIsInYiOjF9.EG0nMGSv8QlqT6tKnhVn6nGuqata7Q-0OWLYRVaA8gpGauu0FUe6k-7_L15r7DdxtK6LUiUjrXOFV_bKjTs4pg",
   "issuedOn": "2017-04-29T04:24:08.987Z"
}
```
_Note_:
> - Every bao should bear a verification [BWT](#bwt), this acts as the signature of the issuer<br /> 
> - The BWT was generated by the issuer signing the bao's unique id, in this case `57f15634267bcc72702743c93b49646fd7a9727b9d7bf4fad49bd69422b747e5`<br /> 
> - The bao's unique id is a hash code derived from the recipient's identity hash code `513f1cd674fbaebd09b96b5f32d0bb5252d4faa7be9020c77910481fce21e95e` 
 and the badge's IPFS hash code `QmNvmZTjUd28YwYbULUpvoyhthjuWYKAUdfXYNzfVFquem`

