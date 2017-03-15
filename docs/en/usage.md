#Welcome to Blokaly 

(private alpha version)

Introduction
------------
[Blokaly](https://www.blokaly.com) is a badge issuing and display platform, built based on [IPFS](https://ipfs.io/) and other blockchain systems, such as [Ethereum](https://www.ethereum.org/).

The idea is borrowed from [OpenBadges](https://openbadges.org/) and [BLOCKCERTS](http://www.blockcerts.org/), where users can create, issue and display badges.
The badges are digitally signed using cryptography by the issuers and persisted onto IPFS, which is characterized as immutable, permanent and distributed network storage.
So the badge can be treated as a tamper-proof digital certificate and could be publicly verified ans shared across the web.
  
If you are interested in this project, join us on slack [<img src="../../images/slack.png" alt="blokaly​.slack​.com" style="hight: 20px; width: 20px;"/>](https://blokaly.slack.com)<br/>
Any feedbacks or helps are welcomed.

LogIn
-----
At the moment, Blokaly is in private alpha version and under heavy development, so no user registration provided.
But there are two pre-loaded demo users you can use to login, `bob@blokaly.com` and `alice@blokaly.com`. Password for both users is `12345`.

Publish
-------
To issue or publish badges, click the [Publish](https://www.blokaly.com/publish) sidebar menu, then follow the steps to fill in the badge image IPFS hash code, badge name and description and the receiver email.
If you don't have the IPFS image hash codes, there are three already uploaded ones you can use:

- [Blokaly Golden Cup](https://gateway.ipfs.io/ipfs/QmcTof1PEHHnHtBjgyG8SNAjJpqUX32N3fKSdtx9tTntLy) `QmcTof1PEHHnHtBjgyG8SNAjJpqUX32N3fKSdtx9tTntLy`
- [Blokaly Silver Cup](https://gateway.ipfs.io/ipfs/QmeTpJx1cvc2RVN5dNtZ44KStWuFz8V6aQeU9MvRasMLJ1) `QmeTpJx1cvc2RVN5dNtZ44KStWuFz8V6aQeU9MvRasMLJ1`
- [Blokaly Bronze Cup](https://gateway.ipfs.io/ipfs/QmXNqyypD8PgroZAtk4FhgyWgY8X7NWLPwHF3BVpTwj8vG) `QmXNqyypD8PgroZAtk4FhgyWgY8X7NWLPwHF3BVpTwj8vG`

If you have your own image for the badge, then you can click the cloud button at the first step to upload it onto IPFS via [ipfs.pic](https://ipfs.pics/).

For demo purpose, you should use `alice@blokaly.com` as the receiver if logged in as `bob@blokaly.com` and vice versa for alice.
 
After the publish process completed, click the share button to preview the issued badge and copy the URL, which should be something like `https://www.blokaly.com/bao/Qmxxxxxx`.
The long string starts with _Qm_ is the badge certification IPFS hash code.

> **Please note:**<br/> 
> Blokaly is using its own private IPFS cloud except for the badge image for development purpose.<br/> 
> So you won't be able to retrieve the badge info from the public IPFS cloud. 
 
Claim
-----
Once the badge issued and published onto IPFS, then you can share the badge certification hash code or URL with the receiver.
The receiver would be able to **claim** the badge by clicking the claim button and login. 

Gallery
-------
After login, click the [Gallery](https://www.blokaly.com/gallery) sidebar menu to view all the claimed badges.
To show more details about a badge, click the drop down button at the top right corner of the badge.