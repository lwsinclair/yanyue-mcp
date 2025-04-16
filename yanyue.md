以下是在烟悦网请求获取 卷烟品名列表、单品名详情 的过程，我们根据此，开发一个获取卷烟信息的mcp server 。

1. 卷烟品名列表
请求1：
GET /api/rc/search/fulltext?keywords=%E9%BB%84%E5%B1%B1&type=yan&pagenum=12 HTTP/1.1
Host: <www.yanyue.cn>
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36
Content-Length: 2

请求2：
GET /api/rc/product/yanlist?pagenum=12&productname=%E9%BB%84%E5%B1%B1 HTTP/1.1
Host: <www.yanyue.cn>
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36
Content-Length: 6
响应1：
HTTP/1.1 200 OK
Content-Type: text/html; charset=gbk
Content-Length: 37755
Connection: keep-alive
Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0
Pragma: no-cache
Expires: Thu, 19 Nov 1981 08:52:00 GMT
X-Powered-By: PHP/5.6.40
Set-Cookie: PHPSESSID=b5hatuee4nk7cssqj02r0nsbh2; path=/
Date: Wed, 16 Apr 2025 15:27:29 GMT
Server: BAIDU_WAF

{"resultyan":{"totalnum":115,"pagenum":12,"page":1,"productlist":[{"productid":"3568","productname":"\u9ec4\u5c71(\u5fbd\u5546\u65b0\u6982\u5ff5\u7ec6\u652f)","secondname":"","productname_hascn":"\u9ec4\u5c71(\u5fbd\u5546\u65b0\u6982\u5ff5\u7ec6\u652f)","basesortid":"4","basesortname":"\u9999\u70df","typeid":"4","typename":"\u9999\u70df","coverpic":"https:\/\/res1.yanyue.cn:12155\/common\/yan\/productimgs\/f6c3bc15120885ef308b00ffc67d2548.jpg","coverpic_thumb120x90":"https:\/\/res1.yanyue.cn:12155\/thumb\/120x90\/f6c\/3bc\/f6c3bc15120885ef308b00ffc67d2548.jpg","coverpic_thumb400x300":"https:\/\/res1.yanyue.cn:12155\/thumb\/400x300\/f6c\/3bc\/f6c3bc15120885ef308b00ffc67d2548.jpg","packprice":40,"priceunit":"0","barprice":400,"comscore":7.6,"scorewei":7.4,"scorebao":8.9,"scorejia":6.6,"brand":{"brandid":"31","brandname":"\u9ec4\u5c71","brandnamesecond":"","brandalias":"","desp":"\u9ec4\u5c71\u5377\u70df\u521b\u724c\u4e8e1958\u5e74\uff0c\u662f\u5b89\u5fbd\u4e2d\u70df\u5de5\u4e1a\u516c\u53f8\u868c\u57e0\u5377\u70df\u5382\u7684\u4ee3\u8868\u54c1\u724c\uff0c1993\u5e74\u63a8\u51fa\u7279\u5236\u9ec4\u5c71\u83b7\u5f97\u5de8\u5927\u6210\u529f\u540e\u8fc5\u901f\u53d1\u5c55\uff0c\u73b0\u62e5\u6709\u9ec4\u5c71\u4e07\u8c61\u3001\u9ec4\u5c71\u4e2d\u56fd\u98ce\u3001\u9ec4\u5c71\u65b0\u89c6\u754c\u3001\u9ec4\u5c71\u65b0\u6982\u5ff5\u3001\u9ec4\u5c7150\u3001\u9ec4\u5c711993\u3001\u9ec4\u5c71\u786c\u4ee5\u53ca\u9ec4\u5c71\u7696\u70df\u7cfb\u5217\u548c\u9ec4\u5c71\u8fce\u5ba2\u677e\u7cfb\u5217\u7b49\u7b49\u591a\u4e2a\u54c1\u79cd\u548c\u7cfb\u5217\uff0c\u201c\u4e00\u54c1\u9ec4\u5c71\uff0c\u5929\u9ad8\u4e91\u6de1\u201d\u3001\u201c\u4e2d\u56fd\u9999\uff0c\u4e2d\u56fd\u5473\u201d\u7b49\u5e7f\u544a\u8bed\u54cd\u904d\u5927\u6c5f\u5357\u5317\uff0c\u6210\u4e3a\u4e2d\u56fd\u70df\u8349\u54c1\u724c\u4e00\u9053\u4eae\u4e3d\u7684\u98ce\u666f\u7ebf\u3002","basesort":"1","coverpic":"https:\/\/res1.yanyue.cn:12155\/common\/yan\/bcovers\/7ab5ee8399804214353786ee329c1d10.png","parent":{"brandid":"1","brandname":"\u5927\u9646"}},"tar":8,"xj_tar":"","nicotine":0.7,"type":{"typeid":"1","typename":"\u70e4\u70df\u578b"},"pingnum":"213","pingacc":"95.5%","commentnum":"106","othername":"","ciglength":94,"ciglength_in":0,"cigarette_count":20,"xj_model":"","huanjing":0,"zhijing":0,"chandi":"","genpicdata":{"packprice":{"orgstr":"\uffe540\u5143","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/763\/a41\/763a416943457d4a435c278ec0c903eb.png"},"barprice":{"orgstr":"\uffe5400\u5143","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/678\/7ef\/6787ef0f52ffc00348b5bd8a4e83c7d0.png"},"tar":{"orgstr":"8mg","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/4af\/bb2\/4afbb2d48718dffd6fb7b2952435e5bf.png"},"nicotine":{"orgstr":"0.7mg","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/154\/a5b\/154a5b3d18f65092c738312a73461c05.png"},"ciglength":{"orgstr":"94mm","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/3c2\/5cd\/3c25cd93fe253aa8492eb620e66592a2.png"},"cigarette_count":{"orgstr":20,"pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"},"cignum":{"orgstr":20,"pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"}}},{"productid":"3785","productname":"\u9ec4\u5c71(\u5fbd\u5546\u65b0\u6982\u5ff5)","secondname":"","productname_hascn":"\u9ec4\u5c71(\u5fbd\u5546\u65b0\u6982\u5ff5)","basesortid":"4","basesortname":"\u9999\u70df","typeid":"4","typename":"\u9999\u70df","coverpic":"https:\/\/res1.yanyue.cn:12155\/common\/yan\/productimgs\/abea2a03b00cbcd8b63a69c078cd91a3.webp","coverpic_thumb120x90":"https:\/\/res1.yanyue.cn:12155\/thumb\/120x90\/abe\/a2a\/abea2a03b00cbcd8b63a69c078cd91a3.webp","coverpic_thumb400x300":"https:\/\/res1.yanyue.cn:12155\/thumb\/400x300\/abe\/a2a\/abea2a03b00cbcd8b63a69c078cd91a3.webp","packprice":40,"priceunit":"0","barprice":400,"comscore":7.4,"scorewei":7.2,"scorebao":7.7,"scorejia":7.1,"brand":{"brandid":"31","brandname":"\u9ec4\u5c71","brandnamesecond":"","brandalias":"","desp":"\u9ec4\u5c71\u5377\u70df\u521b\u724c\u4e8e1958\u5e74\uff0c\u662f\u5b89\u5fbd\u4e2d\u70df\u5de5\u4e1a\u516c\u53f8\u868c\u57e0\u5377\u70df\u5382\u7684\u4ee3\u8868\u54c1\u724c\uff0c1993\u5e74\u63a8\u51fa\u7279\u5236\u9ec4\u5c71\u83b7\u5f97\u5de8\u5927\u6210\u529f\u540e\u8fc5\u901f\u53d1\u5c55\uff0c\u73b0\u62e5\u6709\u9ec4\u5c71\u4e07\u8c61\u3001\u9ec4\u5c71\u4e2d\u56fd\u98ce\u3001\u9ec4\u5c71\u65b0\u89c6\u754c\u3001\u9ec4\u5c71\u65b0\u6982\u5ff5\u3001\u9ec4\u5c7150\u3001\u9ec4\u5c711993\u3001\u9ec4\u5c71\u786c\u4ee5\u53ca\u9ec4\u5c71\u7696\u70df\u7cfb\u5217\u548c\u9ec4\u5c71\u8fce\u5ba2\u677e\u7cfb\u5217\u7b49\u7b49\u591a\u4e2a\u54c1\u79cd\u548c\u7cfb\u5217\uff0c\u201c\u4e00\u54c1\u9ec4\u5c71\uff0c\u5929\u9ad8\u4e91\u6de1\u201d\u3001\u201c\u4e2d\u56fd\u9999\uff0c\u4e2d\u56fd\u5473\u201d\u7b49\u5e7f\u544a\u8bed\u54cd\u904d\u5927\u6c5f\u5357\u5317\uff0c\u6210\u4e3a\u4e2d\u56fd\u70df\u8349\u54c1\u724c\u4e00\u9053\u4eae\u4e3d\u7684\u98ce\u666f\u7ebf\u3002","basesort":"1","coverpic":"https:\/\/res1.yanyue.cn:12155\/common\/yan\/bcovers\/7ab5ee8399804214353786ee329c1d10.png","parent":{"brandid":"1","brandname":"\u5927\u9646"}},"tar":10,"xj_tar":"","nicotine":1,"type":{"typeid":"1","typename":"\u70e4\u70df\u578b"},"pingnum":"122","pingacc":"92.37%","commentnum":"32","othername":"","ciglength":84,"ciglength_in":0,"cigarette_count":20,"xj_model":"","huanjing":0,"zhijing":0,"chandi":"","genpicdata":{"packprice":{"orgstr":"\uffe540\u5143","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/763\/a41\/763a416943457d4a435c278ec0c903eb.png"},"barprice":{"orgstr":"\uffe5400\u5143","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/678\/7ef\/6787ef0f52ffc00348b5bd8a4e83c7d0.png"},"tar":{"orgstr":"10mg","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/fd0\/a5a\/fd0a5a1127e03b734f91566c7e44f2a1.png"},"nicotine":{"orgstr":"1mg","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/4d3\/6eb\/4d36ebb935332fd2c80e465e6a145a4b.png"},"ciglength":{"orgstr":"84mm","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/5bb\/ded\/5bbded2b064913e77ebf7e7b9ffea5ce.png"},"cigarette_count":{"orgstr":20,"pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"},"cignum":{"orgstr":20,"pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"}}},{"productid":"635","productname":"\u9ec4\u5c71(\u91d1\u7696\u70df)","secondname":"","productname_hascn":"\u9ec4\u5c71(\u91d1\u7696\u70df)","basesortid":"4","basesortname":"\u9999\u70df","typeid":"4","typename":"\u9999\u70df","coverpic":"https:\/\/res1.yanyue.cn:12155\/common\/yan\/productimgs\/a29b1219740e1de5d02f4f72a105badc.jpg","coverpic_thumb120x90":"https:\/\/res1.yanyue.cn:12155\/thumb\/120x90\/a29\/b12\/a29b1219740e1de5d02f4f72a105badc.jpg","coverpic_thumb400x300":"https:\/\/res1.yanyue.cn:12155\/thumb\/400x300\/a29\/b12\/a29b1219740e1de5d02f4f72a105badc.jpg","packprice":28,"priceunit":"0","barprice":280,"comscore":7.2,"scorewei":7.7,"scorebao":7,"scorejia":7,"brand":{"brandid":"31","brandname":"\u9ec4\u5c71","brandnamesecond":"","brandalias":"","desp":"\u9ec4\u5c71\u5377\u70df\u521b\u724c\u4e8e1958\u5e74\uff0c\u662f\u5b89\u5fbd\u4e2d\u70df\u5de5\u4e1a\u516c\u53f8\u868c\u57e0\u5377\u70df\u5382\u7684\u4ee3\u8868\u54c1\u724c\uff0c1993\u5e74\u63a8\u51fa\u7279\u5236\u9ec4\u5c71\u83b7\u5f97\u5de8\u5927\u6210\u529f\u540e\u8fc5\u901f\u53d1\u5c55\uff0c\u73b0\u62e5\u6709\u9ec4\u5c71\u4e07\u8c61\u3001\u9ec4\u5c71\u4e2d\u56fd\u98ce\u3001\u9ec4\u5c71\u65b0\u89c6\u754c\u3001\u9ec4\u5c71\u65b0\u6982\u5ff5\u3001\u9ec4\u5c7150\u3001\u9ec4\u5c711993\u3001\u9ec4\u5c71\u786c\u4ee5\u53ca\u9ec4\u5c71\u7696\u70df\u7cfb\u5217\u548c\u9ec4\u5c71\u8fce\u5ba2\u677e\u7cfb\u5217\u7b49\u7b49\u591a\u4e2a\u54c1\u79cd\u548c\u7cfb\u5217\uff0c\u201c\u4e00\u54c1\u9ec4\u5c71\uff0c\u5929\u9ad8\u4e91\u6de1\u201d\u3001\u201c\u4e2d\u56fd\u9999\uff0c\u4e2d\u56fd\u5473\u201d\u7b49\u5e7f\u544a\u8bed\u54cd\u904d\u5927\u6c5f\u5357\u5317\uff0c\u6210\u4e3a\u4e2d\u56fd\u70df\u8349\u54c1\u724c\u4e00\u9053\u4eae\u4e3d\u7684\u98ce\u666f\u7ebf\u3002","basesort":"1","coverpic":"https:\/\/res1.yanyue.cn:12155\/common\/yan\/bcovers\/7ab5ee8399804214353786ee329c1d10.png","parent":{"brandid":"1","brandname":"\u5927\u9646"}},"tar":11,"xj_tar":"","nicotine":1.2,"type":{"typeid":"1","typename":"\u70e4\u70df\u578b"},"pingnum":"2248","pingacc":"99.49%","commentnum":"275","othername":"","ciglength":84,"ciglength_in":0,"cigarette_count":20,"xj_model":"","huanjing":0,"zhijing":0,"chandi":"","genpicdata":{"packprice":{"orgstr":"\uffe528\u5143","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/3ee\/087\/3ee087a2668f89c474310ff310a2eba0.png"},"barprice":{"orgstr":"\uffe5280\u5143","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/8e1\/183\/8e1183157093190b0d2cffd124aed172.png"},"tar":{"orgstr":"11mg","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/23c\/208\/23c208ccca6a91fcc39bfaf1494273a0.png"},"nicotine":{"orgstr":"1.2mg","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/1b3\/727\/1b3727e8c25203686f846a5a4dec3809.png"},"ciglength":{"orgstr":"84mm","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/5bb\/ded\/5bbded2b064913e77ebf7e7b9ffea5ce.png"},"cigarette_count":{"orgstr":20,"pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"},"cignum":{"orgstr":20,"pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"}}},{"productid":"4090","productname":"\u9ec4\u5c71(\u5fbd\u5546\u65b0\u89c6\u754c\u7ec6\u652f)","secondname":"","productname_hascn":"\u9ec4\u5c71(\u5fbd\u5546\u65b0\u89c6\u754c\u7ec6\u652f)","basesortid":"4","basesortname":"\u9999\u70df","typeid":"4","typename":"\u9999\u70df","coverpic":"https:\/\/res1.yanyue.cn:12155\/common\/yan\/productimgs\/d515be41066e171421137c10bec0c6da.jpg","coverpic_thumb120x90":"https:\/\/res1.yanyue.cn:12155\/thumb\/120x90\/d51\/5be\/d515be41066e171421137c10bec0c6da.jpg","coverpic_thumb400x300":"https:\/\/res1.yanyue.cn:12155\/thumb\/400x300\/d51\/5be\/d515be41066e171421137c10bec0c6da.jpg","packprice":80,"priceunit":"0","barprice":800,"comscore":7.6,"scorewei":7.6,"scorebao":8.9,"scorejia":6.4,"brand":{"brandid":"31","brandname":"\u9ec4\u5c71","brandnamesecond":"","brandalias":"","desp":"\u9ec4\u5c71\u5377\u70df\u521b\u724c\u4e8e1958\u5e74\uff0c\u662f\u5b89\u5fbd\u4e2d\u70df\u5de5\u4e1a\u516c\u53f8\u868c\u57e0\u5377\u70df\u5382\u7684\u4ee3\u8868\u54c1\u724c\uff0c1993\u5e74\u63a8\u51fa\u7279\u5236\u9ec4\u5c71\u83b7\u5f97\u5de8\u5927\u6210\u529f\u540e\u8fc5\u901f\u53d1\u5c55\uff0c\u73b0\u62e5\u6709\u9ec4\u5c71\u4e07\u8c61\u3001\u9ec4\u5c71\u4e2d\u56fd\u98ce\u3001\u9ec4\u5c71\u65b0\u89c6\u754c\u3001\u9ec4\u5c71\u65b0\u6982\u5ff5\u3001\u9ec4\u5c7150\u3001\u9ec4\u5c711993\u3001\u9ec4\u5c71\u786c\u4ee5\u53ca\u9ec4\u5c71\u7696\u70df\u7cfb\u5217\u548c\u9ec4\u5c71\u8fce\u5ba2\u677e\u7cfb\u5217\u7b49\u7b49\u591a\u4e2a\u54c1\u79cd\u548c\u7cfb\u5217\uff0c\u201c\u4e00\u54c1\u9ec4\u5c71\uff0c\u5929\u9ad8\u4e91\u6de1\u201d\u3001\u201c\u4e2d\u56fd\u9999\uff0c\u4e2d\u56fd\u5473\u201d\u7b49\u5e7f\u544a\u8bed\u54cd\u904d\u5927\u6c5f\u5357\u5317\uff0c\u6210\u4e3a\u4e2d\u56fd\u70df\u8349\u54c1\u724c\u4e00\u9053\u4eae\u4e3d\u7684\u98ce\u666f\u7ebf\u3002","basesort":"1","coverpic":"https:\/\/res1.yanyue.cn:12155\/common\/yan\/bcovers\/7ab5ee8399804214353786ee329c1d10.png","parent":{"brandid":"1","brandname":"\u5927\u9646"}},"tar":8,"xj_tar":"","nicotine":0.7,"type":{"typeid":"1","typename":"\u70e4\u70df\u578b"},"pingnum":"88","pingacc":"89.69%","commentnum":"18","othername":"\u5fbd\u5546\u77f3\u659b\u7206\u73e0","ciglength":94,"ciglength_in":0,"cigarette_count":20,"xj_model":"","huanjing":0,"zhijing":0,"chandi":"","genpicdata":{"packprice":{"orgstr":"\uffe580\u5143","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/46e\/87f\/46e87f55dd6184e91887cef461d61883.png"},"barprice":{"orgstr":"\uffe5800\u5143","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/8f2\/0c4\/8f20c4bea727b721b0673a9381a41ac3.png"},"tar":{"orgstr":"8mg","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/4af\/bb2\/4afbb2d48718dffd6fb7b2952435e5bf.png"},"nicotine":{"orgstr":"0.7mg","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/154\/a5b\/154a5b3d18f65092c738312a73461c05.png"},"ciglength":{"orgstr":"94mm","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/3c2\/5cd\/3c25cd93fe253aa8492eb620e66592a2.png"},"cigarette_count":{"orgstr":20,"pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"},"cignum":{"orgstr":20,"pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"}}},{"productid":"5897","productname":"\u9ec4\u5c71(\u9ec4\u7696)","secondname":"","productname_hascn":"\u9ec4\u5c71(\u9ec4\u7696)","basesortid":"4","basesortname":"\u9999\u70df","typeid":"4","typename":"\u9999\u70df","coverpic":"https:\/\/res1.yanyue.cn:12155\/common\/yan\/productimgs\/8af20c3f46b59f2f56e39dc4064f2aee.webp","coverpic_thumb120x90":"https:\/\/res1.yanyue.cn:12155\/thumb\/120x90\/8af\/20c\/8af20c3f46b59f2f56e39dc4064f2aee.webp","coverpic_thumb400x300":"https:\/\/res1.yanyue.cn:12155\/thumb\/400x300\/8af\/20c\/8af20c3f46b59f2f56e39dc4064f2aee.webp","packprice":20,"priceunit":"0","barprice":200,"comscore":8.4,"scorewei":8.4,"scorebao":9.1,"scorejia":7.8,"brand":{"brandid":"31","brandname":"\u9ec4\u5c71","brandnamesecond":"","brandalias":"","desp":"\u9ec4\u5c71\u5377\u70df\u521b\u724c\u4e8e1958\u5e74\uff0c\u662f\u5b89\u5fbd\u4e2d\u70df\u5de5\u4e1a\u516c\u53f8\u868c\u57e0\u5377\u70df\u5382\u7684\u4ee3\u8868\u54c1\u724c\uff0c1993\u5e74\u63a8\u51fa\u7279\u5236\u9ec4\u5c71\u83b7\u5f97\u5de8\u5927\u6210\u529f\u540e\u8fc5\u901f\u53d1\u5c55\uff0c\u73b0\u62e5\u6709\u9ec4\u5c71\u4e07\u8c61\u3001\u9ec4\u5c71\u4e2d\u56fd\u98ce\u3001\u9ec4\u5c71\u65b0\u89c6\u754c\u3001\u9ec4\u5c71\u65b0\u6982\u5ff5\u3001\u9ec4\u5c7150\u3001\u9ec4\u5c711993\u3001\u9ec4\u5c71\u786c\u4ee5\u53ca\u9ec4\u5c71\u7696\u70df\u7cfb\u5217\u548c\u9ec4\u5c71\u8fce\u5ba2\u677e\u7cfb\u5217\u7b49\u7b49\u591a\u4e2a\u54c1\u79cd\u548c\u7cfb\u5217\uff0c\u201c\u4e00\u54c1\u9ec4\u5c71\uff0c\u5929\u9ad8\u4e91\u6de1\u201d\u3001\u201c\u4e2d\u56fd\u9999\uff0c\u4e2d\u56fd\u5473\u201d\u7b49\u5e7f\u544a\u8bed\u54cd\u904d\u5927\u6c5f\u5357\u5317\uff0c\u6210\u4e3a\u4e2d\u56fd\u70df\u8349\u54c1\u724c\u4e00\u9053\u4eae\u4e3d\u7684\u98ce\u666f\u7ebf\u3002","basesort":"1","coverpic":"https:\/\/res1.yanyue.cn:12155\/common\/yan\/bcovers\/7ab5ee8399804214353786ee329c1d10.png","parent":{"brandid":"1","brandname":"\u5927\u9646"}},"tar":10,"xj_tar":"","nicotine":1,"type":{"typeid":"1","typename":"\u70e4\u70df\u578b"},"pingnum":"16","pingacc":"60%","commentnum":"11","othername":"","ciglength":84,"ciglength_in":0,"cigarette_count":20,"xj_model":"","huanjing":0,"zhijing":0,"chandi":"","genpicdata":{"packprice":{"orgstr":"\uffe520\u5143","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/5a8\/240\/5a824059b1105bcaabd8a62189b42a22.png"},"barprice":{"orgstr":"\uffe5200\u5143","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/9a2\/b0e\/9a2b0e6cab75c13f787f8e9a684698b9.png"},"tar":{"orgstr":"10mg","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/fd0\/a5a\/fd0a5a1127e03b734f91566c7e44f2a1.png"},"nicotine":{"orgstr":"1mg","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/4d3\/6eb\/4d36ebb935332fd2c80e465e6a145a4b.png"},"ciglength":{"orgstr":"84mm","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/5bb\/ded\/5bbded2b064913e77ebf7e7b9ffea5ce.png"},"cigarette_count":{"orgstr":20,"pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"},"cignum":{"orgstr":20,"pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"}}},{"productid":"3233","productname":"\u9ec4\u5c71(\u7ea2\u65b9\u5370\u7ec6\u652f)","secondname":"","productname_hascn":"\u9ec4\u5c71(\u7ea2\u65b9\u5370\u7ec6\u652f)","basesortid":"4","basesortname":"\u9999\u70df","typeid":"4","typename":"\u9999\u70df","coverpic":"https:\/\/res1.yanyue.cn:12155\/common\/yan\/productimgs\/53119c523cb2285266d29051ed9315ad.jpg","coverpic_thumb120x90":"https:\/\/res1.yanyue.cn:12155\/thumb\/120x90\/531\/19c\/53119c523cb2285266d29051ed9315ad.jpg","coverpic_thumb400x300":"https:\/\/res1.yanyue.cn:12155\/thumb\/400x300\/531\/19c\/53119c523cb2285266d29051ed9315ad.jpg","packprice":20,"priceunit":"0","barprice":200,"comscore":7.1,"scorewei":6.6,"scorebao":8.1,"scorejia":6.5,"brand":{"brandid":"31","brandname":"\u9ec4\u5c71","brandnamesecond":"","brandalias":"","desp":"\u9ec4\u5c71\u5377\u70df\u521b\u724c\u4e8e1958\u5e74\uff0c\u662f\u5b89\u5fbd\u4e2d\u70df\u5de5\u4e1a\u516c\u53f8\u868c\u57e0\u5377\u70df\u5382\u7684\u4ee3\u8868\u54c1\u724c\uff0c1993\u5e74\u63a8\u51fa\u7279\u5236\u9ec4\u5c71\u83b7\u5f97\u5de8\u5927\u6210\u529f\u540e\u8fc5\u901f\u53d1\u5c55\uff0c\u73b0\u62e5\u6709\u9ec4\u5c71\u4e07\u8c61\u3001\u9ec4\u5c71\u4e2d\u56fd\u98ce\u3001\u9ec4\u5c71\u65b0\u89c6\u754c\u3001\u9ec4\u5c71\u65b0\u6982\u5ff5\u3001\u9ec4\u5c7150\u3001\u9ec4\u5c711993\u3001\u9ec4\u5c71\u786c\u4ee5\u53ca\u9ec4\u5c71\u7696\u70df\u7cfb\u5217\u548c\u9ec4\u5c71\u8fce\u5ba2\u677e\u7cfb\u5217\u7b49\u7b49\u591a\u4e2a\u54c1\u79cd\u548c\u7cfb\u5217\uff0c\u201c\u4e00\u54c1\u9ec4\u5c71\uff0c\u5929\u9ad8\u4e91\u6de1\u201d\u3001\u201c\u4e2d\u56fd\u9999\uff0c\u4e2d\u56fd\u5473\u201d\u7b49\u5e7f\u544a\u8bed\u54cd\u904d\u5927\u6c5f\u5357\u5317\uff0c\u6210\u4e3a\u4e2d\u56fd\u70df\u8349\u54c1\u724c\u4e00\u9053\u4eae\u4e3d\u7684\u98ce\u666f\u7ebf\u3002","basesort":"1","coverpic":"https:\/\/res1.yanyue.cn:12155\/common\/yan\/bcovers\/7ab5ee8399804214353786ee329c1d10.png","parent":{"brandid":"1","brandname":"\u5927\u9646"}},"tar":8,"xj_tar":"","nicotine":0.8,"type":{"typeid":"1","typename":"\u70e4\u70df\u578b"},"pingnum":"250","pingacc":"96.14%","commentnum":"79","othername":"","ciglength":97,"ciglength_in":0,"cigarette_count":20,"xj_model":"","huanjing":0,"zhijing":0,"chandi":"","genpicdata":{"packprice":{"orgstr":"\uffe520\u5143","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/5a8\/240\/5a824059b1105bcaabd8a62189b42a22.png"},"barprice":{"orgstr":"\uffe5200\u5143","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/9a2\/b0e\/9a2b0e6cab75c13f787f8e9a684698b9.png"},"tar":{"orgstr":"8mg","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/4af\/bb2\/4afbb2d48718dffd6fb7b2952435e5bf.png"},"nicotine":{"orgstr":"0.8mg","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/e9f\/31e\/e9f31eff2c370c2eddf50713ae53ab61.png"},"ciglength":{"orgstr":"97mm","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/47b\/d2e\/47bd2e3f822a21411cdd4801a7805d81.png"},"cigarette_count":{"orgstr":20,"pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"},"cignum":{"orgstr":20,"pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"}}},{"productid":"633","productname":"\u9ec4\u5c71(\u65b0\u5236\u7696\u70df)","secondname":"","productname_hascn":"\u9ec4\u5c71(\u65b0\u5236\u7696\u70df)","basesortid":"4","basesortname":"\u9999\u70df","typeid":"4","typename":"\u9999\u70df","coverpic":"https:\/\/res1.yanyue.cn:12155\/common\/yan\/productimgs\/a76271387c737abfbedd36e3f81e0eb2.jpg","coverpic_thumb120x90":"https:\/\/res1.yanyue.cn:12155\/thumb\/120x90\/a76\/271\/a76271387c737abfbedd36e3f81e0eb2.jpg","coverpic_thumb400x300":"https:\/\/res1.yanyue.cn:12155\/thumb\/400x300\/a76\/271\/a76271387c737abfbedd36e3f81e0eb2.jpg","packprice":15,"priceunit":"0","barprice":150,"comscore":7.3,"scorewei":7.4,"scorebao":6.9,"scorejia":7.7,"brand":{"brandid":"31","brandname":"\u9ec4\u5c71","brandnamesecond":"","brandalias":"","desp":"\u9ec4\u5c71\u5377\u70df\u521b\u724c\u4e8e1958\u5e74\uff0c\u662f\u5b89\u5fbd\u4e2d\u70df\u5de5\u4e1a\u516c\u53f8\u868c\u57e0\u5377\u70df\u5382\u7684\u4ee3\u8868\u54c1\u724c\uff0c1993\u5e74\u63a8\u51fa\u7279\u5236\u9ec4\u5c71\u83b7\u5f97\u5de8\u5927\u6210\u529f\u540e\u8fc5\u901f\u53d1\u5c55\uff0c\u73b0\u62e5\u6709\u9ec4\u5c71\u4e07\u8c61\u3001\u9ec4\u5c71\u4e2d\u56fd\u98ce\u3001\u9ec4\u5c71\u65b0\u89c6\u754c\u3001\u9ec4\u5c71\u65b0\u6982\u5ff5\u3001\u9ec4\u5c7150\u3001\u9ec4\u5c711993\u3001\u9ec4\u5c71\u786c\u4ee5\u53ca\u9ec4\u5c71\u7696\u70df\u7cfb\u5217\u548c\u9ec4\u5c71\u8fce\u5ba2\u677e\u7cfb\u5217\u7b49\u7b49\u591a\u4e2a\u54c1\u79cd\u548c\u7cfb\u5217\uff0c\u201c\u4e00\u54c1\u9ec4\u5c71\uff0c\u5929\u9ad8\u4e91\u6de1\u201d\u3001\u201c\u4e2d\u56fd\u9999\uff0c\u4e2d\u56fd\u5473\u201d\u7b49\u5e7f\u544a\u8bed\u54cd\u904d\u5927\u6c5f\u5357\u5317\uff0c\u6210\u4e3a\u4e2d\u56fd\u70df\u8349\u54c1\u724c\u4e00\u9053\u4eae\u4e3d\u7684\u98ce\u666f\u7ebf\u3002","basesort":"1","coverpic":"https:\/\/res1.yanyue.cn:12155\/common\/yan\/bcovers\/7ab5ee8399804214353786ee329c1d10.png","parent":{"brandid":"1","brandname":"\u5927\u9646"}},"tar":10,"xj_tar":"","nicotine":1.1,"type":{"typeid":"1","typename":"\u70e4\u70df\u578b"},"pingnum":"1280","pingacc":"99.12%","commentnum":"304","othername":"\u666e\u7696","ciglength":84,"ciglength_in":0,"cigarette_count":20,"xj_model":"","huanjing":0,"zhijing":0,"chandi":"","genpicdata":{"packprice":{"orgstr":"\uffe515\u5143","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/210\/f7f\/210f7f3a101a84e98c64330a1e3e5bbb.png"},"barprice":{"orgstr":"\uffe5150\u5143","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/345\/eb6\/345eb60d1673e23f74696a6c8fa63d10.png"},"tar":{"orgstr":"10mg","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/fd0\/a5a\/fd0a5a1127e03b734f91566c7e44f2a1.png"},"nicotine":{"orgstr":"1.1mg","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/207\/b99\/207b99d095a1a91017908c5bc8e03acf.png"},"ciglength":{"orgstr":"84mm","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/5bb\/ded\/5bbded2b064913e77ebf7e7b9ffea5ce.png"},"cigarette_count":{"orgstr":20,"pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"},"cignum":{"orgstr":20,"pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"}}},{"productid":"3680","productname":"\u9ec4\u5c71(\u9ed1\u9a6c\u7ec6\u652f)","secondname":"","productname_hascn":"\u9ec4\u5c71(\u9ed1\u9a6c\u7ec6\u652f)","basesortid":"4","basesortname":"\u9999\u70df","typeid":"4","typename":"\u9999\u70df","coverpic":"https:\/\/res1.yanyue.cn:12155\/common\/yan\/productimgs\/f8da164eab816c98a5dcef0adaa99399.jpg","coverpic_thumb120x90":"https:\/\/res1.yanyue.cn:12155\/thumb\/120x90\/f8d\/a16\/f8da164eab816c98a5dcef0adaa99399.jpg","coverpic_thumb400x300":"https:\/\/res1.yanyue.cn:12155\/thumb\/400x300\/f8d\/a16\/f8da164eab816c98a5dcef0adaa99399.jpg","packprice":26,"priceunit":"0","barprice":260,"comscore":7.3,"scorewei":7.3,"scorebao":8.2,"scorejia":6.5,"brand":{"brandid":"31","brandname":"\u9ec4\u5c71","brandnamesecond":"","brandalias":"","desp":"\u9ec4\u5c71\u5377\u70df\u521b\u724c\u4e8e1958\u5e74\uff0c\u662f\u5b89\u5fbd\u4e2d\u70df\u5de5\u4e1a\u516c\u53f8\u868c\u57e0\u5377\u70df\u5382\u7684\u4ee3\u8868\u54c1\u724c\uff0c1993\u5e74\u63a8\u51fa\u7279\u5236\u9ec4\u5c71\u83b7\u5f97\u5de8\u5927\u6210\u529f\u540e\u8fc5\u901f\u53d1\u5c55\uff0c\u73b0\u62e5\u6709\u9ec4\u5c71\u4e07\u8c61\u3001\u9ec4\u5c71\u4e2d\u56fd\u98ce\u3001\u9ec4\u5c71\u65b0\u89c6\u754c\u3001\u9ec4\u5c71\u65b0\u6982\u5ff5\u3001\u9ec4\u5c7150\u3001\u9ec4\u5c711993\u3001\u9ec4\u5c71\u786c\u4ee5\u53ca\u9ec4\u5c71\u7696\u70df\u7cfb\u5217\u548c\u9ec4\u5c71\u8fce\u5ba2\u677e\u7cfb\u5217\u7b49\u7b49\u591a\u4e2a\u54c1\u79cd\u548c\u7cfb\u5217\uff0c\u201c\u4e00\u54c1\u9ec4\u5c71\uff0c\u5929\u9ad8\u4e91\u6de1\u201d\u3001\u201c\u4e2d\u56fd\u9999\uff0c\u4e2d\u56fd\u5473\u201d\u7b49\u5e7f\u544a\u8bed\u54cd\u904d\u5927\u6c5f\u5357\u5317\uff0c\u6210\u4e3a\u4e2d\u56fd\u70df\u8349\u54c1\u724c\u4e00\u9053\u4eae\u4e3d\u7684\u98ce\u666f\u7ebf\u3002","basesort":"1","coverpic":"https:\/\/res1.yanyue.cn:12155\/common\/yan\/bcovers\/7ab5ee8399804214353786ee329c1d10.png","parent":{"brandid":"1","brandname":"\u5927\u9646"}},"tar":6,"xj_tar":"","nicotine":0.5,"type":{"typeid":"1","typename":"\u70e4\u70df\u578b"},"pingnum":"84","pingacc":"89.25%","commentnum":"28","othername":"\u77f3\u659b\u6854\u6da6","ciglength":97,"ciglength_in":0,"cigarette_count":20,"xj_model":"","huanjing":0,"zhijing":0,"chandi":"","genpicdata":{"packprice":{"orgstr":"\uffe526\u5143","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/ac2\/ee6\/ac2ee6a4ffa89754dd8bd02446d7b7fa.png"},"barprice":{"orgstr":"\uffe5260\u5143","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/76e\/67f\/76e67f419db8fa8127a2e62335a36aba.png"},"tar":{"orgstr":"6mg","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/586\/565\/586565cd1677763594d56f11743e97ce.png"},"nicotine":{"orgstr":"0.5mg","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/ae8\/54c\/ae854ca6390c8fef559360d057a46638.png"},"ciglength":{"orgstr":"97mm","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/47b\/d2e\/47bd2e3f822a21411cdd4801a7805d81.png"},"cigarette_count":{"orgstr":20,"pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"},"cignum":{"orgstr":20,"pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"}}},{"productid":"2533","productname":"\u9ec4\u5c71(\u5927\u7ea2\u65b9\u5370)","secondname":"","productname_hascn":"\u9ec4\u5c71(\u5927\u7ea2\u65b9\u5370)","basesortid":"4","basesortname":"\u9999\u70df","typeid":"4","typename":"\u9999\u70df","coverpic":"https:\/\/res1.yanyue.cn:12155\/common\/yan\/productimgs\/b309e9779d4c84271262ad27a4d8a72e.webp","coverpic_thumb120x90":"https:\/\/res1.yanyue.cn:12155\/thumb\/120x90\/b30\/9e9\/b309e9779d4c84271262ad27a4d8a72e.webp","coverpic_thumb400x300":"https:\/\/res1.yanyue.cn:12155\/thumb\/400x300\/b30\/9e9\/b309e9779d4c84271262ad27a4d8a72e.webp","packprice":32,"priceunit":"0","barprice":320,"comscore":7.8,"scorewei":7.6,"scorebao":8.6,"scorejia":7.1,"brand":{"brandid":"31","brandname":"\u9ec4\u5c71","brandnamesecond":"","brandalias":"","desp":"\u9ec4\u5c71\u5377\u70df\u521b\u724c\u4e8e1958\u5e74\uff0c\u662f\u5b89\u5fbd\u4e2d\u70df\u5de5\u4e1a\u516c\u53f8\u868c\u57e0\u5377\u70df\u5382\u7684\u4ee3\u8868\u54c1\u724c\uff0c1993\u5e74\u63a8\u51fa\u7279\u5236\u9ec4\u5c71\u83b7\u5f97\u5de8\u5927\u6210\u529f\u540e\u8fc5\u901f\u53d1\u5c55\uff0c\u73b0\u62e5\u6709\u9ec4\u5c71\u4e07\u8c61\u3001\u9ec4\u5c71\u4e2d\u56fd\u98ce\u3001\u9ec4\u5c71\u65b0\u89c6\u754c\u3001\u9ec4\u5c71\u65b0\u6982\u5ff5\u3001\u9ec4\u5c7150\u3001\u9ec4\u5c711993\u3001\u9ec4\u5c71\u786c\u4ee5\u53ca\u9ec4\u5c71\u7696\u70df\u7cfb\u5217\u548c\u9ec4\u5c71\u8fce\u5ba2\u677e\u7cfb\u5217\u7b49\u7b49\u591a\u4e2a\u54c1\u79cd\u548c\u7cfb\u5217\uff0c\u201c\u4e00\u54c1\u9ec4\u5c71\uff0c\u5929\u9ad8\u4e91\u6de1\u201d\u3001\u201c\u4e2d\u56fd\u9999\uff0c\u4e2d\u56fd\u5473\u201d\u7b49\u5e7f\u544a\u8bed\u54cd\u904d\u5927\u6c5f\u5357\u5317\uff0c\u6210\u4e3a\u4e2d\u56fd\u70df\u8349\u54c1\u724c\u4e00\u9053\u4eae\u4e3d\u7684\u98ce\u666f\u7ebf\u3002","basesort":"1","coverpic":"https:\/\/res1.yanyue.cn:12155\/common\/yan\/bcovers\/7ab5ee8399804214353786ee329c1d10.png","parent":{"brandid":"1","brandname":"\u5927\u9646"}},"tar":10,"xj_tar":"","nicotine":1,"type":{"typeid":"1","typename":"\u70e4\u70df\u578b"},"pingnum":"4656","pingacc":"99.78%","commentnum":"603","othername":"\u5927\u65b9\u5370 \u7701\u5916\u7248","ciglength":84,"ciglength_in":0,"cigarette_count":20,"xj_model":"","huanjing":0,"zhijing":0,"chandi":"","genpicdata":{"packprice":{"orgstr":"\uffe532\u5143","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/272\/24f\/27224feae3f5838095bb774b2190b9c3.png"},"barprice":{"orgstr":"\uffe5320\u5143","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/4ce\/84a\/4ce84adafb84b18414147cabe14859df.png"},"tar":{"orgstr":"10mg","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/fd0\/a5a\/fd0a5a1127e03b734f91566c7e44f2a1.png"},"nicotine":{"orgstr":"1mg","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/4d3\/6eb\/4d36ebb935332fd2c80e465e6a145a4b.png"},"ciglength":{"orgstr":"84mm","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/5bb\/ded\/5bbded2b064913e77ebf7e7b9ffea5ce.png"},"cigarette_count":{"orgstr":20,"pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"},"cignum":{"orgstr":20,"pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"}}},{"productid":"4368","productname":"\u9ec4\u5c71(\u5fbd\u5546\u65b0\u6982\u5ff5\u53cc\u4e2d\u652f)","secondname":"","productname_hascn":"\u9ec4\u5c71(\u5fbd\u5546\u65b0\u6982\u5ff5\u53cc\u4e2d\u652f)","basesortid":"4","basesortname":"\u9999\u70df","typeid":"4","typename":"\u9999\u70df","coverpic":"https:\/\/res1.yanyue.cn:12155\/common\/yan\/productimgs\/315f0a87b1d8b0d1da61432ca9110f3d.jpg","coverpic_thumb120x90":"https:\/\/res1.yanyue.cn:12155\/thumb\/120x90\/315\/f0a\/315f0a87b1d8b0d1da61432ca9110f3d.jpg","coverpic_thumb400x300":"https:\/\/res1.yanyue.cn:12155\/thumb\/400x300\/315\/f0a\/315f0a87b1d8b0d1da61432ca9110f3d.jpg","packprice":43,"priceunit":"0","barprice":430,"comscore":7.5,"scorewei":8.1,"scorebao":8.2,"scorejia":6.2,"brand":{"brandid":"31","brandname":"\u9ec4\u5c71","brandnamesecond":"","brandalias":"","desp":"\u9ec4\u5c71\u5377\u70df\u521b\u724c\u4e8e1958\u5e74\uff0c\u662f\u5b89\u5fbd\u4e2d\u70df\u5de5\u4e1a\u516c\u53f8\u868c\u57e0\u5377\u70df\u5382\u7684\u4ee3\u8868\u54c1\u724c\uff0c1993\u5e74\u63a8\u51fa\u7279\u5236\u9ec4\u5c71\u83b7\u5f97\u5de8\u5927\u6210\u529f\u540e\u8fc5\u901f\u53d1\u5c55\uff0c\u73b0\u62e5\u6709\u9ec4\u5c71\u4e07\u8c61\u3001\u9ec4\u5c71\u4e2d\u56fd\u98ce\u3001\u9ec4\u5c71\u65b0\u89c6\u754c\u3001\u9ec4\u5c71\u65b0\u6982\u5ff5\u3001\u9ec4\u5c7150\u3001\u9ec4\u5c711993\u3001\u9ec4\u5c71\u786c\u4ee5\u53ca\u9ec4\u5c71\u7696\u70df\u7cfb\u5217\u548c\u9ec4\u5c71\u8fce\u5ba2\u677e\u7cfb\u5217\u7b49\u7b49\u591a\u4e2a\u54c1\u79cd\u548c\u7cfb\u5217\uff0c\u201c\u4e00\u54c1\u9ec4\u5c71\uff0c\u5929\u9ad8\u4e91\u6de1\u201d\u3001\u201c\u4e2d\u56fd\u9999\uff0c\u4e2d\u56fd\u5473\u201d\u7b49\u5e7f\u544a\u8bed\u54cd\u904d\u5927\u6c5f\u5357\u5317\uff0c\u6210\u4e3a\u4e2d\u56fd\u70df\u8349\u54c1\u724c\u4e00\u9053\u4eae\u4e3d\u7684\u98ce\u666f\u7ebf\u3002","basesort":"1","coverpic":"https:\/\/res1.yanyue.cn:12155\/common\/yan\/bcovers\/7ab5ee8399804214353786ee329c1d10.png","parent":{"brandid":"1","brandname":"\u5927\u9646"}},"tar":10,"xj_tar":"","nicotine":0.9,"type":{"typeid":"1","typename":"\u70e4\u70df\u578b"},"pingnum":"29","pingacc":"73.68%","commentnum":"9","othername":"","ciglength":88,"ciglength_in":0,"cigarette_count":20,"xj_model":"","huanjing":0,"zhijing":0,"chandi":"","genpicdata":{"packprice":{"orgstr":"\uffe543\u5143","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/72b\/a60\/72ba6030c0cab24504a74db6e699ddf0.png"},"barprice":{"orgstr":"\uffe5430\u5143","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/256\/361\/256361230ec07540b9693bf1ebd9bf1c.png"},"tar":{"orgstr":"10mg","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/fd0\/a5a\/fd0a5a1127e03b734f91566c7e44f2a1.png"},"nicotine":{"orgstr":"0.9mg","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/299\/ec2\/299ec2bb8ab6d3a4c41f9c6bf39411ff.png"},"ciglength":{"orgstr":"88mm","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/f9d\/e44\/f9de4428c919cc1e4b515fe37e74a49c.png"},"cigarette_count":{"orgstr":20,"pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"},"cignum":{"orgstr":20,"pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"}}},{"productid":"5847","productname":"\u9ec4\u5c71(\u7ecf\u5178\u7696\u70df\u7ec6\u652f)","secondname":"","productname_hascn":"\u9ec4\u5c71(\u7ecf\u5178\u7696\u70df\u7ec6\u652f)","basesortid":"4","basesortname":"\u9999\u70df","typeid":"4","typename":"\u9999\u70df","coverpic":"https:\/\/res1.yanyue.cn:12155\/common\/yan\/productimgs\/dcb2db36be174a498149e1741f1f70a7.jpg","coverpic_thumb120x90":"https:\/\/res1.yanyue.cn:12155\/thumb\/120x90\/dcb\/2db\/dcb2db36be174a498149e1741f1f70a7.jpg","coverpic_thumb400x300":"https:\/\/res1.yanyue.cn:12155\/thumb\/400x300\/dcb\/2db\/dcb2db36be174a498149e1741f1f70a7.jpg","packprice":50,"priceunit":"0","barprice":500,"comscore":7.6,"scorewei":7,"scorebao":8.8,"scorejia":7.1,"brand":{"brandid":"31","brandname":"\u9ec4\u5c71","brandnamesecond":"","brandalias":"","desp":"\u9ec4\u5c71\u5377\u70df\u521b\u724c\u4e8e1958\u5e74\uff0c\u662f\u5b89\u5fbd\u4e2d\u70df\u5de5\u4e1a\u516c\u53f8\u868c\u57e0\u5377\u70df\u5382\u7684\u4ee3\u8868\u54c1\u724c\uff0c1993\u5e74\u63a8\u51fa\u7279\u5236\u9ec4\u5c71\u83b7\u5f97\u5de8\u5927\u6210\u529f\u540e\u8fc5\u901f\u53d1\u5c55\uff0c\u73b0\u62e5\u6709\u9ec4\u5c71\u4e07\u8c61\u3001\u9ec4\u5c71\u4e2d\u56fd\u98ce\u3001\u9ec4\u5c71\u65b0\u89c6\u754c\u3001\u9ec4\u5c71\u65b0\u6982\u5ff5\u3001\u9ec4\u5c7150\u3001\u9ec4\u5c711993\u3001\u9ec4\u5c71\u786c\u4ee5\u53ca\u9ec4\u5c71\u7696\u70df\u7cfb\u5217\u548c\u9ec4\u5c71\u8fce\u5ba2\u677e\u7cfb\u5217\u7b49\u7b49\u591a\u4e2a\u54c1\u79cd\u548c\u7cfb\u5217\uff0c\u201c\u4e00\u54c1\u9ec4\u5c71\uff0c\u5929\u9ad8\u4e91\u6de1\u201d\u3001\u201c\u4e2d\u56fd\u9999\uff0c\u4e2d\u56fd\u5473\u201d\u7b49\u5e7f\u544a\u8bed\u54cd\u904d\u5927\u6c5f\u5357\u5317\uff0c\u6210\u4e3a\u4e2d\u56fd\u70df\u8349\u54c1\u724c\u4e00\u9053\u4eae\u4e3d\u7684\u98ce\u666f\u7ebf\u3002","basesort":"1","coverpic":"https:\/\/res1.yanyue.cn:12155\/common\/yan\/bcovers\/7ab5ee8399804214353786ee329c1d10.png","parent":{"brandid":"1","brandname":"\u5927\u9646"}},"tar":8,"xj_tar":"","nicotine":0.7,"type":{"typeid":"1","typename":"\u70e4\u70df\u578b"},"pingnum":"7","pingacc":"37.5%","commentnum":"4","othername":"","ciglength":0,"ciglength_in":0,"cigarette_count":20,"xj_model":"","huanjing":0,"zhijing":0,"chandi":"","genpicdata":{"packprice":{"orgstr":"\uffe550\u5143","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/1ed\/400\/1ed400b70741947ed316ab019a68bee8.png"},"barprice":{"orgstr":"\uffe5500\u5143","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/b03\/60b\/b0360bd0f275ef716631d70623d453b6.png"},"tar":{"orgstr":"8mg","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/4af\/bb2\/4afbb2d48718dffd6fb7b2952435e5bf.png"},"nicotine":{"orgstr":"0.7mg","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/154\/a5b\/154a5b3d18f65092c738312a73461c05.png"},"cigarette_count":{"orgstr":20,"pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"},"cignum":{"orgstr":20,"pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"}}},{"productid":"5078","productname":"\u9ec4\u5c71(\u8f6f\u5fbd\u5546)","secondname":"","productname_hascn":"\u9ec4\u5c71(\u8f6f\u5fbd\u5546)","basesortid":"4","basesortname":"\u9999\u70df","typeid":"4","typename":"\u9999\u70df","coverpic":"https:\/\/res1.yanyue.cn:12155\/common\/yan\/productimgs\/0606cb95bf6b409fe3e539dfa9a9eace.webp","coverpic_thumb120x90":"https:\/\/res1.yanyue.cn:12155\/thumb\/120x90\/060\/6cb\/0606cb95bf6b409fe3e539dfa9a9eace.webp","coverpic_thumb400x300":"https:\/\/res1.yanyue.cn:12155\/thumb\/400x300\/060\/6cb\/0606cb95bf6b409fe3e539dfa9a9eace.webp","packprice":65,"priceunit":"0","barprice":650,"comscore":6.2,"scorewei":6.7,"scorebao":7.1,"scorejia":4.9,"brand":{"brandid":"31","brandname":"\u9ec4\u5c71","brandnamesecond":"","brandalias":"","desp":"\u9ec4\u5c71\u5377\u70df\u521b\u724c\u4e8e1958\u5e74\uff0c\u662f\u5b89\u5fbd\u4e2d\u70df\u5de5\u4e1a\u516c\u53f8\u868c\u57e0\u5377\u70df\u5382\u7684\u4ee3\u8868\u54c1\u724c\uff0c1993\u5e74\u63a8\u51fa\u7279\u5236\u9ec4\u5c71\u83b7\u5f97\u5de8\u5927\u6210\u529f\u540e\u8fc5\u901f\u53d1\u5c55\uff0c\u73b0\u62e5\u6709\u9ec4\u5c71\u4e07\u8c61\u3001\u9ec4\u5c71\u4e2d\u56fd\u98ce\u3001\u9ec4\u5c71\u65b0\u89c6\u754c\u3001\u9ec4\u5c71\u65b0\u6982\u5ff5\u3001\u9ec4\u5c7150\u3001\u9ec4\u5c711993\u3001\u9ec4\u5c71\u786c\u4ee5\u53ca\u9ec4\u5c71\u7696\u70df\u7cfb\u5217\u548c\u9ec4\u5c71\u8fce\u5ba2\u677e\u7cfb\u5217\u7b49\u7b49\u591a\u4e2a\u54c1\u79cd\u548c\u7cfb\u5217\uff0c\u201c\u4e00\u54c1\u9ec4\u5c71\uff0c\u5929\u9ad8\u4e91\u6de1\u201d\u3001\u201c\u4e2d\u56fd\u9999\uff0c\u4e2d\u56fd\u5473\u201d\u7b49\u5e7f\u544a\u8bed\u54cd\u904d\u5927\u6c5f\u5357\u5317\uff0c\u6210\u4e3a\u4e2d\u56fd\u70df\u8349\u54c1\u724c\u4e00\u9053\u4eae\u4e3d\u7684\u98ce\u666f\u7ebf\u3002","basesort":"1","coverpic":"https:\/\/res1.yanyue.cn:12155\/common\/yan\/bcovers\/7ab5ee8399804214353786ee329c1d10.png","parent":{"brandid":"1","brandname":"\u5927\u9646"}},"tar":10,"xj_tar":"","nicotine":1,"type":{"typeid":"1","typename":"\u70e4\u70df\u578b"},"pingnum":"14","pingacc":"56.52%","commentnum":"11","othername":"","ciglength":84,"ciglength_in":0,"cigarette_count":20,"xj_model":"","huanjing":0,"zhijing":0,"chandi":"","genpicdata":{"packprice":{"orgstr":"\uffe565\u5143","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/f8e\/7e7\/f8e7e7b43752eebb3fa9192ed06f1906.png"},"barprice":{"orgstr":"\uffe5650\u5143","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/e24\/802\/e2480214b0edaa5578e543d07ad3cb98.png"},"tar":{"orgstr":"10mg","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/fd0\/a5a\/fd0a5a1127e03b734f91566c7e44f2a1.png"},"nicotine":{"orgstr":"1mg","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/4d3\/6eb\/4d36ebb935332fd2c80e465e6a145a4b.png"},"ciglength":{"orgstr":"84mm","pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/5bb\/ded\/5bbded2b064913e77ebf7e7b9ffea5ce.png"},"cigarette_count":{"orgstr":20,"pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"},"cignum":{"orgstr":20,"pic":"https:\/\/res1.yanyue.cn:12155\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"}}}]}}
响应2：
HTTP/1.1 200 OK
Content-Type: text/html; charset=gbk
Content-Length: 35135
Connection: keep-alive
Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0
Pragma: no-cache
Expires: Thu, 19 Nov 1981 08:52:00 GMT
X-Powered-By: PHP/5.6.40
Set-Cookie: PHPSESSID=vedu5fulfi4so4v887k9rtkb93; path=/
Date: Wed, 16 Apr 2025 15:21:01 GMT
Server: BAIDU_WAF

{"totalnum":114,"pagenum":12,"page":1,"productlist":[{"productid":"6700","productname":"\u9ec4\u5c71(\u56fd\u5bbe\u8fce\u5ba2\u677e)\u9ed1\u5634\u9ed1\u677e\u7248","secondname":"","productname_hascn":"\u9ec4\u5c71(\u56fd\u5bbe\u8fce\u5ba2\u677e)\u9ed1\u5634\u9ed1\u677e\u7248","basesortid":"4","basesortname":"\u9999\u70df","typeid":"4","typename":"\u9999\u70df","coverpic":"https:\/\/res.yanyue.cn\/common\/yan\/productimgs\/c54b12b4c9d8cb95a19f7fd7b8d9bb7e.webp","coverpic_thumb120x90":"https:\/\/res.yanyue.cn\/thumb\/120x90\/c54\/b12\/c54b12b4c9d8cb95a19f7fd7b8d9bb7e.webp","coverpic_thumb400x300":"https:\/\/res.yanyue.cn\/thumb\/400x300\/c54\/b12\/c54b12b4c9d8cb95a19f7fd7b8d9bb7e.webp","packprice":0,"priceunit":"0","barprice":0,"comscore":0,"scorewei":0,"scorebao":0,"scorejia":0,"brand":{"brandid":"31","brandname":"\u9ec4\u5c71","brandnamesecond":"","brandalias":"","desp":"\u9ec4\u5c71\u5377\u70df\u521b\u724c\u4e8e1958\u5e74\uff0c\u662f\u5b89\u5fbd\u4e2d\u70df\u5de5\u4e1a\u516c\u53f8\u868c\u57e0\u5377\u70df\u5382\u7684\u4ee3\u8868\u54c1\u724c\uff0c1993\u5e74\u63a8\u51fa\u7279\u5236\u9ec4\u5c71\u83b7\u5f97\u5de8\u5927\u6210\u529f\u540e\u8fc5\u901f\u53d1\u5c55\uff0c\u73b0\u62e5\u6709\u9ec4\u5c71\u4e07\u8c61\u3001\u9ec4\u5c71\u4e2d\u56fd\u98ce\u3001\u9ec4\u5c71\u65b0\u89c6\u754c\u3001\u9ec4\u5c71\u65b0\u6982\u5ff5\u3001\u9ec4\u5c7150\u3001\u9ec4\u5c711993\u3001\u9ec4\u5c71\u786c\u4ee5\u53ca\u9ec4\u5c71\u7696\u70df\u7cfb\u5217\u548c\u9ec4\u5c71\u8fce\u5ba2\u677e\u7cfb\u5217\u7b49\u7b49\u591a\u4e2a\u54c1\u79cd\u548c\u7cfb\u5217\uff0c\u201c\u4e00\u54c1\u9ec4\u5c71\uff0c\u5929\u9ad8\u4e91\u6de1\u201d\u3001\u201c\u4e2d\u56fd\u9999\uff0c\u4e2d\u56fd\u5473\u201d\u7b49\u5e7f\u544a\u8bed\u54cd\u904d\u5927\u6c5f\u5357\u5317\uff0c\u6210\u4e3a\u4e2d\u56fd\u70df\u8349\u54c1\u724c\u4e00\u9053\u4eae\u4e3d\u7684\u98ce\u666f\u7ebf\u3002","basesort":"1","coverpic":"https:\/\/res.yanyue.cn\/common\/yan\/bcovers\/7ab5ee8399804214353786ee329c1d10.png","parent":{"brandid":"1","brandname":"\u5927\u9646"}},"tar":11,"xj_tar":"","nicotine":1.2,"type":{"typeid":"1","typename":"\u70e4\u70df\u578b"},"pingnum":"0","pingacc":"","commentnum":"4","othername":"","ciglength":84,"ciglength_in":0,"cigarette_count":20,"xj_model":"","huanjing":0,"zhijing":0,"chandi":"","genpicdata":{"tar":{"orgstr":"11mg","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/23c\/208\/23c208ccca6a91fcc39bfaf1494273a0.png"},"nicotine":{"orgstr":"1.2mg","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/1b3\/727\/1b3727e8c25203686f846a5a4dec3809.png"},"ciglength":{"orgstr":"84mm","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/5bb\/ded\/5bbded2b064913e77ebf7e7b9ffea5ce.png"},"cigarette_count":{"orgstr":20,"pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"},"cignum":{"orgstr":20,"pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"}}},{"productid":"57","productname":"\u9ec4\u5c71(\u56fd\u5bbe\u8fce\u5ba2\u677e)","secondname":"","productname_hascn":"\u9ec4\u5c71(\u56fd\u5bbe\u8fce\u5ba2\u677e)","basesortid":"4","basesortname":"\u9999\u70df","typeid":"4","typename":"\u9999\u70df","coverpic":"https:\/\/res.yanyue.cn\/common\/yan\/productimgs\/6489eca905ae2dea9014e179591890ed.jpg","coverpic_thumb120x90":"https:\/\/res.yanyue.cn\/thumb\/120x90\/648\/9ec\/6489eca905ae2dea9014e179591890ed.jpg","coverpic_thumb400x300":"https:\/\/res.yanyue.cn\/thumb\/400x300\/648\/9ec\/6489eca905ae2dea9014e179591890ed.jpg","packprice":22,"priceunit":"0","barprice":220,"comscore":6.7,"scorewei":7.1,"scorebao":6.3,"scorejia":6.7,"brand":{"brandid":"31","brandname":"\u9ec4\u5c71","brandnamesecond":"","brandalias":"","desp":"\u9ec4\u5c71\u5377\u70df\u521b\u724c\u4e8e1958\u5e74\uff0c\u662f\u5b89\u5fbd\u4e2d\u70df\u5de5\u4e1a\u516c\u53f8\u868c\u57e0\u5377\u70df\u5382\u7684\u4ee3\u8868\u54c1\u724c\uff0c1993\u5e74\u63a8\u51fa\u7279\u5236\u9ec4\u5c71\u83b7\u5f97\u5de8\u5927\u6210\u529f\u540e\u8fc5\u901f\u53d1\u5c55\uff0c\u73b0\u62e5\u6709\u9ec4\u5c71\u4e07\u8c61\u3001\u9ec4\u5c71\u4e2d\u56fd\u98ce\u3001\u9ec4\u5c71\u65b0\u89c6\u754c\u3001\u9ec4\u5c71\u65b0\u6982\u5ff5\u3001\u9ec4\u5c7150\u3001\u9ec4\u5c711993\u3001\u9ec4\u5c71\u786c\u4ee5\u53ca\u9ec4\u5c71\u7696\u70df\u7cfb\u5217\u548c\u9ec4\u5c71\u8fce\u5ba2\u677e\u7cfb\u5217\u7b49\u7b49\u591a\u4e2a\u54c1\u79cd\u548c\u7cfb\u5217\uff0c\u201c\u4e00\u54c1\u9ec4\u5c71\uff0c\u5929\u9ad8\u4e91\u6de1\u201d\u3001\u201c\u4e2d\u56fd\u9999\uff0c\u4e2d\u56fd\u5473\u201d\u7b49\u5e7f\u544a\u8bed\u54cd\u904d\u5927\u6c5f\u5357\u5317\uff0c\u6210\u4e3a\u4e2d\u56fd\u70df\u8349\u54c1\u724c\u4e00\u9053\u4eae\u4e3d\u7684\u98ce\u666f\u7ebf\u3002","basesort":"1","coverpic":"https:\/\/res.yanyue.cn\/common\/yan\/bcovers\/7ab5ee8399804214353786ee329c1d10.png","parent":{"brandid":"1","brandname":"\u5927\u9646"}},"tar":11,"xj_tar":"","nicotine":1.2,"type":{"typeid":"1","typename":"\u70e4\u70df\u578b"},"pingnum":"604","pingacc":"98.16%","commentnum":"60","othername":"\u9ec4\u5634\u9ed1\u677e","ciglength":84,"ciglength_in":0,"cigarette_count":20,"xj_model":"","huanjing":0,"zhijing":0,"chandi":"","genpicdata":{"packprice":{"orgstr":"\uffe522\u5143","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/b4f\/b2a\/b4fb2a7bf98f78a7459d74febf822a64.png"},"barprice":{"orgstr":"\uffe5220\u5143","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/1d6\/84f\/1d684fa11575457c6e4d991d3e365e46.png"},"tar":{"orgstr":"11mg","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/23c\/208\/23c208ccca6a91fcc39bfaf1494273a0.png"},"nicotine":{"orgstr":"1.2mg","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/1b3\/727\/1b3727e8c25203686f846a5a4dec3809.png"},"ciglength":{"orgstr":"84mm","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/5bb\/ded\/5bbded2b064913e77ebf7e7b9ffea5ce.png"},"cigarette_count":{"orgstr":20,"pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"},"cignum":{"orgstr":20,"pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"}}},{"productid":"3233","productname":"\u9ec4\u5c71(\u7ea2\u65b9\u5370\u7ec6\u652f)","secondname":"","productname_hascn":"\u9ec4\u5c71(\u7ea2\u65b9\u5370\u7ec6\u652f)","basesortid":"4","basesortname":"\u9999\u70df","typeid":"4","typename":"\u9999\u70df","coverpic":"https:\/\/res.yanyue.cn\/common\/yan\/productimgs\/53119c523cb2285266d29051ed9315ad.jpg","coverpic_thumb120x90":"https:\/\/res.yanyue.cn\/thumb\/120x90\/531\/19c\/53119c523cb2285266d29051ed9315ad.jpg","coverpic_thumb400x300":"https:\/\/res.yanyue.cn\/thumb\/400x300\/531\/19c\/53119c523cb2285266d29051ed9315ad.jpg","packprice":20,"priceunit":"0","barprice":200,"comscore":7.1,"scorewei":6.6,"scorebao":8.1,"scorejia":6.5,"brand":{"brandid":"31","brandname":"\u9ec4\u5c71","brandnamesecond":"","brandalias":"","desp":"\u9ec4\u5c71\u5377\u70df\u521b\u724c\u4e8e1958\u5e74\uff0c\u662f\u5b89\u5fbd\u4e2d\u70df\u5de5\u4e1a\u516c\u53f8\u868c\u57e0\u5377\u70df\u5382\u7684\u4ee3\u8868\u54c1\u724c\uff0c1993\u5e74\u63a8\u51fa\u7279\u5236\u9ec4\u5c71\u83b7\u5f97\u5de8\u5927\u6210\u529f\u540e\u8fc5\u901f\u53d1\u5c55\uff0c\u73b0\u62e5\u6709\u9ec4\u5c71\u4e07\u8c61\u3001\u9ec4\u5c71\u4e2d\u56fd\u98ce\u3001\u9ec4\u5c71\u65b0\u89c6\u754c\u3001\u9ec4\u5c71\u65b0\u6982\u5ff5\u3001\u9ec4\u5c7150\u3001\u9ec4\u5c711993\u3001\u9ec4\u5c71\u786c\u4ee5\u53ca\u9ec4\u5c71\u7696\u70df\u7cfb\u5217\u548c\u9ec4\u5c71\u8fce\u5ba2\u677e\u7cfb\u5217\u7b49\u7b49\u591a\u4e2a\u54c1\u79cd\u548c\u7cfb\u5217\uff0c\u201c\u4e00\u54c1\u9ec4\u5c71\uff0c\u5929\u9ad8\u4e91\u6de1\u201d\u3001\u201c\u4e2d\u56fd\u9999\uff0c\u4e2d\u56fd\u5473\u201d\u7b49\u5e7f\u544a\u8bed\u54cd\u904d\u5927\u6c5f\u5357\u5317\uff0c\u6210\u4e3a\u4e2d\u56fd\u70df\u8349\u54c1\u724c\u4e00\u9053\u4eae\u4e3d\u7684\u98ce\u666f\u7ebf\u3002","basesort":"1","coverpic":"https:\/\/res.yanyue.cn\/common\/yan\/bcovers\/7ab5ee8399804214353786ee329c1d10.png","parent":{"brandid":"1","brandname":"\u5927\u9646"}},"tar":8,"xj_tar":"","nicotine":0.8,"type":{"typeid":"1","typename":"\u70e4\u70df\u578b"},"pingnum":"250","pingacc":"96.14%","commentnum":"79","othername":"","ciglength":97,"ciglength_in":0,"cigarette_count":20,"xj_model":"","huanjing":0,"zhijing":0,"chandi":"","genpicdata":{"packprice":{"orgstr":"\uffe520\u5143","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/5a8\/240\/5a824059b1105bcaabd8a62189b42a22.png"},"barprice":{"orgstr":"\uffe5200\u5143","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/9a2\/b0e\/9a2b0e6cab75c13f787f8e9a684698b9.png"},"tar":{"orgstr":"8mg","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/4af\/bb2\/4afbb2d48718dffd6fb7b2952435e5bf.png"},"nicotine":{"orgstr":"0.8mg","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/e9f\/31e\/e9f31eff2c370c2eddf50713ae53ab61.png"},"ciglength":{"orgstr":"97mm","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/47b\/d2e\/47bd2e3f822a21411cdd4801a7805d81.png"},"cigarette_count":{"orgstr":20,"pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"},"cignum":{"orgstr":20,"pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"}}},{"productid":"3785","productname":"\u9ec4\u5c71(\u5fbd\u5546\u65b0\u6982\u5ff5)","secondname":"","productname_hascn":"\u9ec4\u5c71(\u5fbd\u5546\u65b0\u6982\u5ff5)","basesortid":"4","basesortname":"\u9999\u70df","typeid":"4","typename":"\u9999\u70df","coverpic":"https:\/\/res.yanyue.cn\/common\/yan\/productimgs\/abea2a03b00cbcd8b63a69c078cd91a3.webp","coverpic_thumb120x90":"https:\/\/res.yanyue.cn\/thumb\/120x90\/abe\/a2a\/abea2a03b00cbcd8b63a69c078cd91a3.webp","coverpic_thumb400x300":"https:\/\/res.yanyue.cn\/thumb\/400x300\/abe\/a2a\/abea2a03b00cbcd8b63a69c078cd91a3.webp","packprice":40,"priceunit":"0","barprice":400,"comscore":7.4,"scorewei":7.2,"scorebao":7.7,"scorejia":7.1,"brand":{"brandid":"31","brandname":"\u9ec4\u5c71","brandnamesecond":"","brandalias":"","desp":"\u9ec4\u5c71\u5377\u70df\u521b\u724c\u4e8e1958\u5e74\uff0c\u662f\u5b89\u5fbd\u4e2d\u70df\u5de5\u4e1a\u516c\u53f8\u868c\u57e0\u5377\u70df\u5382\u7684\u4ee3\u8868\u54c1\u724c\uff0c1993\u5e74\u63a8\u51fa\u7279\u5236\u9ec4\u5c71\u83b7\u5f97\u5de8\u5927\u6210\u529f\u540e\u8fc5\u901f\u53d1\u5c55\uff0c\u73b0\u62e5\u6709\u9ec4\u5c71\u4e07\u8c61\u3001\u9ec4\u5c71\u4e2d\u56fd\u98ce\u3001\u9ec4\u5c71\u65b0\u89c6\u754c\u3001\u9ec4\u5c71\u65b0\u6982\u5ff5\u3001\u9ec4\u5c7150\u3001\u9ec4\u5c711993\u3001\u9ec4\u5c71\u786c\u4ee5\u53ca\u9ec4\u5c71\u7696\u70df\u7cfb\u5217\u548c\u9ec4\u5c71\u8fce\u5ba2\u677e\u7cfb\u5217\u7b49\u7b49\u591a\u4e2a\u54c1\u79cd\u548c\u7cfb\u5217\uff0c\u201c\u4e00\u54c1\u9ec4\u5c71\uff0c\u5929\u9ad8\u4e91\u6de1\u201d\u3001\u201c\u4e2d\u56fd\u9999\uff0c\u4e2d\u56fd\u5473\u201d\u7b49\u5e7f\u544a\u8bed\u54cd\u904d\u5927\u6c5f\u5357\u5317\uff0c\u6210\u4e3a\u4e2d\u56fd\u70df\u8349\u54c1\u724c\u4e00\u9053\u4eae\u4e3d\u7684\u98ce\u666f\u7ebf\u3002","basesort":"1","coverpic":"https:\/\/res.yanyue.cn\/common\/yan\/bcovers\/7ab5ee8399804214353786ee329c1d10.png","parent":{"brandid":"1","brandname":"\u5927\u9646"}},"tar":10,"xj_tar":"","nicotine":1,"type":{"typeid":"1","typename":"\u70e4\u70df\u578b"},"pingnum":"122","pingacc":"92.37%","commentnum":"32","othername":"","ciglength":84,"ciglength_in":0,"cigarette_count":20,"xj_model":"","huanjing":0,"zhijing":0,"chandi":"","genpicdata":{"packprice":{"orgstr":"\uffe540\u5143","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/763\/a41\/763a416943457d4a435c278ec0c903eb.png"},"barprice":{"orgstr":"\uffe5400\u5143","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/678\/7ef\/6787ef0f52ffc00348b5bd8a4e83c7d0.png"},"tar":{"orgstr":"10mg","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/fd0\/a5a\/fd0a5a1127e03b734f91566c7e44f2a1.png"},"nicotine":{"orgstr":"1mg","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/4d3\/6eb\/4d36ebb935332fd2c80e465e6a145a4b.png"},"ciglength":{"orgstr":"84mm","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/5bb\/ded\/5bbded2b064913e77ebf7e7b9ffea5ce.png"},"cigarette_count":{"orgstr":20,"pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"},"cignum":{"orgstr":20,"pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"}}},{"productid":"2533","productname":"\u9ec4\u5c71(\u5927\u7ea2\u65b9\u5370)","secondname":"","productname_hascn":"\u9ec4\u5c71(\u5927\u7ea2\u65b9\u5370)","basesortid":"4","basesortname":"\u9999\u70df","typeid":"4","typename":"\u9999\u70df","coverpic":"https:\/\/res.yanyue.cn\/common\/yan\/productimgs\/b309e9779d4c84271262ad27a4d8a72e.webp","coverpic_thumb120x90":"https:\/\/res.yanyue.cn\/thumb\/120x90\/b30\/9e9\/b309e9779d4c84271262ad27a4d8a72e.webp","coverpic_thumb400x300":"https:\/\/res.yanyue.cn\/thumb\/400x300\/b30\/9e9\/b309e9779d4c84271262ad27a4d8a72e.webp","packprice":32,"priceunit":"0","barprice":320,"comscore":7.8,"scorewei":7.6,"scorebao":8.6,"scorejia":7.1,"brand":{"brandid":"31","brandname":"\u9ec4\u5c71","brandnamesecond":"","brandalias":"","desp":"\u9ec4\u5c71\u5377\u70df\u521b\u724c\u4e8e1958\u5e74\uff0c\u662f\u5b89\u5fbd\u4e2d\u70df\u5de5\u4e1a\u516c\u53f8\u868c\u57e0\u5377\u70df\u5382\u7684\u4ee3\u8868\u54c1\u724c\uff0c1993\u5e74\u63a8\u51fa\u7279\u5236\u9ec4\u5c71\u83b7\u5f97\u5de8\u5927\u6210\u529f\u540e\u8fc5\u901f\u53d1\u5c55\uff0c\u73b0\u62e5\u6709\u9ec4\u5c71\u4e07\u8c61\u3001\u9ec4\u5c71\u4e2d\u56fd\u98ce\u3001\u9ec4\u5c71\u65b0\u89c6\u754c\u3001\u9ec4\u5c71\u65b0\u6982\u5ff5\u3001\u9ec4\u5c7150\u3001\u9ec4\u5c711993\u3001\u9ec4\u5c71\u786c\u4ee5\u53ca\u9ec4\u5c71\u7696\u70df\u7cfb\u5217\u548c\u9ec4\u5c71\u8fce\u5ba2\u677e\u7cfb\u5217\u7b49\u7b49\u591a\u4e2a\u54c1\u79cd\u548c\u7cfb\u5217\uff0c\u201c\u4e00\u54c1\u9ec4\u5c71\uff0c\u5929\u9ad8\u4e91\u6de1\u201d\u3001\u201c\u4e2d\u56fd\u9999\uff0c\u4e2d\u56fd\u5473\u201d\u7b49\u5e7f\u544a\u8bed\u54cd\u904d\u5927\u6c5f\u5357\u5317\uff0c\u6210\u4e3a\u4e2d\u56fd\u70df\u8349\u54c1\u724c\u4e00\u9053\u4eae\u4e3d\u7684\u98ce\u666f\u7ebf\u3002","basesort":"1","coverpic":"https:\/\/res.yanyue.cn\/common\/yan\/bcovers\/7ab5ee8399804214353786ee329c1d10.png","parent":{"brandid":"1","brandname":"\u5927\u9646"}},"tar":10,"xj_tar":"","nicotine":1,"type":{"typeid":"1","typename":"\u70e4\u70df\u578b"},"pingnum":"4656","pingacc":"99.78%","commentnum":"603","othername":"\u5927\u65b9\u5370 \u7701\u5916\u7248","ciglength":84,"ciglength_in":0,"cigarette_count":20,"xj_model":"","huanjing":0,"zhijing":0,"chandi":"","genpicdata":{"packprice":{"orgstr":"\uffe532\u5143","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/272\/24f\/27224feae3f5838095bb774b2190b9c3.png"},"barprice":{"orgstr":"\uffe5320\u5143","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/4ce\/84a\/4ce84adafb84b18414147cabe14859df.png"},"tar":{"orgstr":"10mg","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/fd0\/a5a\/fd0a5a1127e03b734f91566c7e44f2a1.png"},"nicotine":{"orgstr":"1mg","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/4d3\/6eb\/4d36ebb935332fd2c80e465e6a145a4b.png"},"ciglength":{"orgstr":"84mm","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/5bb\/ded\/5bbded2b064913e77ebf7e7b9ffea5ce.png"},"cigarette_count":{"orgstr":20,"pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"},"cignum":{"orgstr":20,"pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"}}},{"productid":"5592","productname":"\u9ec4\u5c71(\u7ea2\u65b9\u5370)","secondname":"","productname_hascn":"\u9ec4\u5c71(\u7ea2\u65b9\u5370)","basesortid":"4","basesortname":"\u9999\u70df","typeid":"4","typename":"\u9999\u70df","coverpic":"https:\/\/res.yanyue.cn\/common\/yan\/productimgs\/108420b8bab4bf43397ee3993fb07784.jpg","coverpic_thumb120x90":"https:\/\/res.yanyue.cn\/thumb\/120x90\/108\/420\/108420b8bab4bf43397ee3993fb07784.jpg","coverpic_thumb400x300":"https:\/\/res.yanyue.cn\/thumb\/400x300\/108\/420\/108420b8bab4bf43397ee3993fb07784.jpg","packprice":32,"priceunit":"0","barprice":320,"comscore":10,"scorewei":10,"scorebao":10,"scorejia":10,"brand":{"brandid":"31","brandname":"\u9ec4\u5c71","brandnamesecond":"","brandalias":"","desp":"\u9ec4\u5c71\u5377\u70df\u521b\u724c\u4e8e1958\u5e74\uff0c\u662f\u5b89\u5fbd\u4e2d\u70df\u5de5\u4e1a\u516c\u53f8\u868c\u57e0\u5377\u70df\u5382\u7684\u4ee3\u8868\u54c1\u724c\uff0c1993\u5e74\u63a8\u51fa\u7279\u5236\u9ec4\u5c71\u83b7\u5f97\u5de8\u5927\u6210\u529f\u540e\u8fc5\u901f\u53d1\u5c55\uff0c\u73b0\u62e5\u6709\u9ec4\u5c71\u4e07\u8c61\u3001\u9ec4\u5c71\u4e2d\u56fd\u98ce\u3001\u9ec4\u5c71\u65b0\u89c6\u754c\u3001\u9ec4\u5c71\u65b0\u6982\u5ff5\u3001\u9ec4\u5c7150\u3001\u9ec4\u5c711993\u3001\u9ec4\u5c71\u786c\u4ee5\u53ca\u9ec4\u5c71\u7696\u70df\u7cfb\u5217\u548c\u9ec4\u5c71\u8fce\u5ba2\u677e\u7cfb\u5217\u7b49\u7b49\u591a\u4e2a\u54c1\u79cd\u548c\u7cfb\u5217\uff0c\u201c\u4e00\u54c1\u9ec4\u5c71\uff0c\u5929\u9ad8\u4e91\u6de1\u201d\u3001\u201c\u4e2d\u56fd\u9999\uff0c\u4e2d\u56fd\u5473\u201d\u7b49\u5e7f\u544a\u8bed\u54cd\u904d\u5927\u6c5f\u5357\u5317\uff0c\u6210\u4e3a\u4e2d\u56fd\u70df\u8349\u54c1\u724c\u4e00\u9053\u4eae\u4e3d\u7684\u98ce\u666f\u7ebf\u3002","basesort":"1","coverpic":"https:\/\/res.yanyue.cn\/common\/yan\/bcovers\/7ab5ee8399804214353786ee329c1d10.png","parent":{"brandid":"1","brandname":"\u5927\u9646"}},"tar":10,"xj_tar":"","nicotine":1,"type":{"typeid":"1","typename":"\u70e4\u70df\u578b"},"pingnum":"2","pingacc":"9.09%","commentnum":"1","othername":"\u5927\u65b9\u5370 \u7701\u5185\u7248","ciglength":84,"ciglength_in":0,"cigarette_count":20,"xj_model":"","huanjing":0,"zhijing":0,"chandi":"","genpicdata":{"packprice":{"orgstr":"\uffe532\u5143","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/272\/24f\/27224feae3f5838095bb774b2190b9c3.png"},"barprice":{"orgstr":"\uffe5320\u5143","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/4ce\/84a\/4ce84adafb84b18414147cabe14859df.png"},"tar":{"orgstr":"10mg","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/fd0\/a5a\/fd0a5a1127e03b734f91566c7e44f2a1.png"},"nicotine":{"orgstr":"1mg","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/4d3\/6eb\/4d36ebb935332fd2c80e465e6a145a4b.png"},"ciglength":{"orgstr":"84mm","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/5bb\/ded\/5bbded2b064913e77ebf7e7b9ffea5ce.png"},"cigarette_count":{"orgstr":20,"pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"},"cignum":{"orgstr":20,"pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"}}},{"productid":"3410","productname":"\u9ec4\u5c71(\u5370\u8c61\u4e00\u54c1)","secondname":"","productname_hascn":"\u9ec4\u5c71(\u5370\u8c61\u4e00\u54c1)","basesortid":"4","basesortname":"\u9999\u70df","typeid":"4","typename":"\u9999\u70df","coverpic":"https:\/\/res.yanyue.cn\/common\/yan\/productimgs\/1adde88d672a8c13a39ea1c923ffc35d.webp","coverpic_thumb120x90":"https:\/\/res.yanyue.cn\/thumb\/120x90\/1ad\/de8\/1adde88d672a8c13a39ea1c923ffc35d.webp","coverpic_thumb400x300":"https:\/\/res.yanyue.cn\/thumb\/400x300\/1ad\/de8\/1adde88d672a8c13a39ea1c923ffc35d.webp","packprice":10,"priceunit":"0","barprice":100,"comscore":7.5,"scorewei":7.1,"scorebao":7.5,"scorejia":8,"brand":{"brandid":"31","brandname":"\u9ec4\u5c71","brandnamesecond":"","brandalias":"","desp":"\u9ec4\u5c71\u5377\u70df\u521b\u724c\u4e8e1958\u5e74\uff0c\u662f\u5b89\u5fbd\u4e2d\u70df\u5de5\u4e1a\u516c\u53f8\u868c\u57e0\u5377\u70df\u5382\u7684\u4ee3\u8868\u54c1\u724c\uff0c1993\u5e74\u63a8\u51fa\u7279\u5236\u9ec4\u5c71\u83b7\u5f97\u5de8\u5927\u6210\u529f\u540e\u8fc5\u901f\u53d1\u5c55\uff0c\u73b0\u62e5\u6709\u9ec4\u5c71\u4e07\u8c61\u3001\u9ec4\u5c71\u4e2d\u56fd\u98ce\u3001\u9ec4\u5c71\u65b0\u89c6\u754c\u3001\u9ec4\u5c71\u65b0\u6982\u5ff5\u3001\u9ec4\u5c7150\u3001\u9ec4\u5c711993\u3001\u9ec4\u5c71\u786c\u4ee5\u53ca\u9ec4\u5c71\u7696\u70df\u7cfb\u5217\u548c\u9ec4\u5c71\u8fce\u5ba2\u677e\u7cfb\u5217\u7b49\u7b49\u591a\u4e2a\u54c1\u79cd\u548c\u7cfb\u5217\uff0c\u201c\u4e00\u54c1\u9ec4\u5c71\uff0c\u5929\u9ad8\u4e91\u6de1\u201d\u3001\u201c\u4e2d\u56fd\u9999\uff0c\u4e2d\u56fd\u5473\u201d\u7b49\u5e7f\u544a\u8bed\u54cd\u904d\u5927\u6c5f\u5357\u5317\uff0c\u6210\u4e3a\u4e2d\u56fd\u70df\u8349\u54c1\u724c\u4e00\u9053\u4eae\u4e3d\u7684\u98ce\u666f\u7ebf\u3002","basesort":"1","coverpic":"https:\/\/res.yanyue.cn\/common\/yan\/bcovers\/7ab5ee8399804214353786ee329c1d10.png","parent":{"brandid":"1","brandname":"\u5927\u9646"}},"tar":10,"xj_tar":"","nicotine":0.8,"type":{"typeid":"1","typename":"\u70e4\u70df\u578b"},"pingnum":"131","pingacc":"92.86%","commentnum":"76","othername":"","ciglength":84,"ciglength_in":0,"cigarette_count":20,"xj_model":"","huanjing":0,"zhijing":0,"chandi":"","genpicdata":{"packprice":{"orgstr":"\uffe510\u5143","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/1a5\/10d\/1a510dd86f10f17c703d65916c8d7270.png"},"barprice":{"orgstr":"\uffe5100\u5143","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/038\/66b\/03866b230a4a495dcde8db04ac4f4671.png"},"tar":{"orgstr":"10mg","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/fd0\/a5a\/fd0a5a1127e03b734f91566c7e44f2a1.png"},"nicotine":{"orgstr":"0.8mg","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/e9f\/31e\/e9f31eff2c370c2eddf50713ae53ab61.png"},"ciglength":{"orgstr":"84mm","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/5bb\/ded\/5bbded2b064913e77ebf7e7b9ffea5ce.png"},"cigarette_count":{"orgstr":20,"pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"},"cignum":{"orgstr":20,"pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"}}},{"productid":"3242","productname":"\u9ec4\u5c71(\u786c\u5929\u90fd)","secondname":"","productname_hascn":"\u9ec4\u5c71(\u786c\u5929\u90fd)","basesortid":"4","basesortname":"\u9999\u70df","typeid":"4","typename":"\u9999\u70df","coverpic":"https:\/\/res.yanyue.cn\/common\/yan\/productimgs\/ba7c04e555be30fbd1f49869eb822a6f.webp","coverpic_thumb120x90":"https:\/\/res.yanyue.cn\/thumb\/120x90\/ba7\/c04\/ba7c04e555be30fbd1f49869eb822a6f.webp","coverpic_thumb400x300":"https:\/\/res.yanyue.cn\/thumb\/400x300\/ba7\/c04\/ba7c04e555be30fbd1f49869eb822a6f.webp","packprice":90,"priceunit":"0","barprice":900,"comscore":8,"scorewei":8.5,"scorebao":8.6,"scorejia":7,"brand":{"brandid":"31","brandname":"\u9ec4\u5c71","brandnamesecond":"","brandalias":"","desp":"\u9ec4\u5c71\u5377\u70df\u521b\u724c\u4e8e1958\u5e74\uff0c\u662f\u5b89\u5fbd\u4e2d\u70df\u5de5\u4e1a\u516c\u53f8\u868c\u57e0\u5377\u70df\u5382\u7684\u4ee3\u8868\u54c1\u724c\uff0c1993\u5e74\u63a8\u51fa\u7279\u5236\u9ec4\u5c71\u83b7\u5f97\u5de8\u5927\u6210\u529f\u540e\u8fc5\u901f\u53d1\u5c55\uff0c\u73b0\u62e5\u6709\u9ec4\u5c71\u4e07\u8c61\u3001\u9ec4\u5c71\u4e2d\u56fd\u98ce\u3001\u9ec4\u5c71\u65b0\u89c6\u754c\u3001\u9ec4\u5c71\u65b0\u6982\u5ff5\u3001\u9ec4\u5c7150\u3001\u9ec4\u5c711993\u3001\u9ec4\u5c71\u786c\u4ee5\u53ca\u9ec4\u5c71\u7696\u70df\u7cfb\u5217\u548c\u9ec4\u5c71\u8fce\u5ba2\u677e\u7cfb\u5217\u7b49\u7b49\u591a\u4e2a\u54c1\u79cd\u548c\u7cfb\u5217\uff0c\u201c\u4e00\u54c1\u9ec4\u5c71\uff0c\u5929\u9ad8\u4e91\u6de1\u201d\u3001\u201c\u4e2d\u56fd\u9999\uff0c\u4e2d\u56fd\u5473\u201d\u7b49\u5e7f\u544a\u8bed\u54cd\u904d\u5927\u6c5f\u5357\u5317\uff0c\u6210\u4e3a\u4e2d\u56fd\u70df\u8349\u54c1\u724c\u4e00\u9053\u4eae\u4e3d\u7684\u98ce\u666f\u7ebf\u3002","basesort":"1","coverpic":"https:\/\/res.yanyue.cn\/common\/yan\/bcovers\/7ab5ee8399804214353786ee329c1d10.png","parent":{"brandid":"1","brandname":"\u5927\u9646"}},"tar":10,"xj_tar":"","nicotine":1,"type":{"typeid":"1","typename":"\u70e4\u70df\u578b"},"pingnum":"35","pingacc":"77.27%","commentnum":"16","othername":"\u5de8\u5320","ciglength":84,"ciglength_in":0,"cigarette_count":20,"xj_model":"","huanjing":0,"zhijing":0,"chandi":"","genpicdata":{"packprice":{"orgstr":"\uffe590\u5143","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/724\/f0f\/724f0f5fa0dbcc4871529e6b90479093.png"},"barprice":{"orgstr":"\uffe5900\u5143","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/c96\/46a\/c9646a5ef33e6dcde8e66005af27934a.png"},"tar":{"orgstr":"10mg","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/fd0\/a5a\/fd0a5a1127e03b734f91566c7e44f2a1.png"},"nicotine":{"orgstr":"1mg","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/4d3\/6eb\/4d36ebb935332fd2c80e465e6a145a4b.png"},"ciglength":{"orgstr":"84mm","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/5bb\/ded\/5bbded2b064913e77ebf7e7b9ffea5ce.png"},"cigarette_count":{"orgstr":20,"pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"},"cignum":{"orgstr":20,"pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"}}},{"productid":"5034","productname":"\u9ec4\u5c71(\u5929\u9ad8\u4e91\u6de1\u7ec6\u652f)","secondname":"","productname_hascn":"\u9ec4\u5c71(\u5929\u9ad8\u4e91\u6de1\u7ec6\u652f)","basesortid":"4","basesortname":"\u9999\u70df","typeid":"4","typename":"\u9999\u70df","coverpic":"https:\/\/res.yanyue.cn\/common\/yan\/productimgs\/e7f2ad3b2e0694da9d4366195ec0f700.webp","coverpic_thumb120x90":"https:\/\/res.yanyue.cn\/thumb\/120x90\/e7f\/2ad\/e7f2ad3b2e0694da9d4366195ec0f700.webp","coverpic_thumb400x300":"https:\/\/res.yanyue.cn\/thumb\/400x300\/e7f\/2ad\/e7f2ad3b2e0694da9d4366195ec0f700.webp","packprice":100,"priceunit":"0","barprice":1000,"comscore":7.5,"scorewei":7.5,"scorebao":8.1,"scorejia":6.7,"brand":{"brandid":"31","brandname":"\u9ec4\u5c71","brandnamesecond":"","brandalias":"","desp":"\u9ec4\u5c71\u5377\u70df\u521b\u724c\u4e8e1958\u5e74\uff0c\u662f\u5b89\u5fbd\u4e2d\u70df\u5de5\u4e1a\u516c\u53f8\u868c\u57e0\u5377\u70df\u5382\u7684\u4ee3\u8868\u54c1\u724c\uff0c1993\u5e74\u63a8\u51fa\u7279\u5236\u9ec4\u5c71\u83b7\u5f97\u5de8\u5927\u6210\u529f\u540e\u8fc5\u901f\u53d1\u5c55\uff0c\u73b0\u62e5\u6709\u9ec4\u5c71\u4e07\u8c61\u3001\u9ec4\u5c71\u4e2d\u56fd\u98ce\u3001\u9ec4\u5c71\u65b0\u89c6\u754c\u3001\u9ec4\u5c71\u65b0\u6982\u5ff5\u3001\u9ec4\u5c7150\u3001\u9ec4\u5c711993\u3001\u9ec4\u5c71\u786c\u4ee5\u53ca\u9ec4\u5c71\u7696\u70df\u7cfb\u5217\u548c\u9ec4\u5c71\u8fce\u5ba2\u677e\u7cfb\u5217\u7b49\u7b49\u591a\u4e2a\u54c1\u79cd\u548c\u7cfb\u5217\uff0c\u201c\u4e00\u54c1\u9ec4\u5c71\uff0c\u5929\u9ad8\u4e91\u6de1\u201d\u3001\u201c\u4e2d\u56fd\u9999\uff0c\u4e2d\u56fd\u5473\u201d\u7b49\u5e7f\u544a\u8bed\u54cd\u904d\u5927\u6c5f\u5357\u5317\uff0c\u6210\u4e3a\u4e2d\u56fd\u70df\u8349\u54c1\u724c\u4e00\u9053\u4eae\u4e3d\u7684\u98ce\u666f\u7ebf\u3002","basesort":"1","coverpic":"https:\/\/res.yanyue.cn\/common\/yan\/bcovers\/7ab5ee8399804214353786ee329c1d10.png","parent":{"brandid":"1","brandname":"\u5927\u9646"}},"tar":6,"xj_tar":"","nicotine":0.6,"type":{"typeid":"1","typename":"\u70e4\u70df\u578b"},"pingnum":"13","pingacc":"54.55%","commentnum":"7","othername":"","ciglength":84,"ciglength_in":0,"cigarette_count":20,"xj_model":"","huanjing":0,"zhijing":0,"chandi":"","genpicdata":{"packprice":{"orgstr":"\uffe5100\u5143","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/038\/66b\/03866b230a4a495dcde8db04ac4f4671.png"},"barprice":{"orgstr":"\uffe51000\u5143","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/74b\/3f8\/74b3f801c84ba385a9e378dcfbec05bd.png"},"tar":{"orgstr":"6mg","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/586\/565\/586565cd1677763594d56f11743e97ce.png"},"nicotine":{"orgstr":"0.6mg","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/032\/1bf\/0321bf304f596d2ba2dc38e550cb8420.png"},"ciglength":{"orgstr":"84mm","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/5bb\/ded\/5bbded2b064913e77ebf7e7b9ffea5ce.png"},"cigarette_count":{"orgstr":20,"pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"},"cignum":{"orgstr":20,"pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"}}},{"productid":"1135","productname":"\u9ec4\u5c71\u677e(5\u652f)","secondname":"","productname_hascn":"\u9ec4\u5c71\u677e(5\u652f)","basesortid":"4","basesortname":"\u9999\u70df","typeid":"4","typename":"\u9999\u70df","coverpic":"https:\/\/res.yanyue.cn\/common\/yan\/productimgs\/59b31137df7fb2adb7760af58bf32d94.jpg","coverpic_thumb120x90":"https:\/\/res.yanyue.cn\/thumb\/120x90\/59b\/311\/59b31137df7fb2adb7760af58bf32d94.jpg","coverpic_thumb400x300":"https:\/\/res.yanyue.cn\/thumb\/400x300\/59b\/311\/59b31137df7fb2adb7760af58bf32d94.jpg","packprice":3,"priceunit":"0","barprice":30,"comscore":5.4,"scorewei":5.1,"scorebao":5.9,"scorejia":5.1,"brand":{"brandid":"238","brandname":"\u9ec4\u5c71\u677e","brandnamesecond":"","brandalias":"","desp":"","basesort":"1","coverpic":"https:\/\/res.yanyue.cn\/common\/nopic.jpg","parent":{"brandid":"1","brandname":"\u5927\u9646"}},"tar":0,"xj_tar":"","nicotine":0,"type":{"typeid":"5","typename":"\u96ea\u8304\u70df"},"pingnum":"160","pingacc":"93.38%","commentnum":"53","othername":"","ciglength":110,"ciglength_in":0,"cigarette_count":5,"xj_model":"","huanjing":0,"zhijing":0,"chandi":"","genpicdata":{"packprice":{"orgstr":"\uffe53\u5143","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/db8\/0fe\/db80fe44b2ac2e94293fde4d4f4eeade.png"},"barprice":{"orgstr":"\uffe530\u5143","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/ed8\/b59\/ed8b590d5f194f3f94e142e680666fce.png"},"ciglength":{"orgstr":"110mm","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/25d\/639\/25d639483b2fef2a350936ed5ca70609.png"},"cigarette_count":{"orgstr":5,"pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/a60\/32f\/a6032fdeb6bb5e90b2568bc942838b5a.png"},"cignum":{"orgstr":5,"pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/a60\/32f\/a6032fdeb6bb5e90b2568bc942838b5a.png"}}},{"productid":"5078","productname":"\u9ec4\u5c71(\u8f6f\u5fbd\u5546)","secondname":"","productname_hascn":"\u9ec4\u5c71(\u8f6f\u5fbd\u5546)","basesortid":"4","basesortname":"\u9999\u70df","typeid":"4","typename":"\u9999\u70df","coverpic":"https:\/\/res.yanyue.cn\/common\/yan\/productimgs\/0606cb95bf6b409fe3e539dfa9a9eace.webp","coverpic_thumb120x90":"https:\/\/res.yanyue.cn\/thumb\/120x90\/060\/6cb\/0606cb95bf6b409fe3e539dfa9a9eace.webp","coverpic_thumb400x300":"https:\/\/res.yanyue.cn\/thumb\/400x300\/060\/6cb\/0606cb95bf6b409fe3e539dfa9a9eace.webp","packprice":65,"priceunit":"0","barprice":650,"comscore":6.2,"scorewei":6.7,"scorebao":7.1,"scorejia":4.9,"brand":{"brandid":"31","brandname":"\u9ec4\u5c71","brandnamesecond":"","brandalias":"","desp":"\u9ec4\u5c71\u5377\u70df\u521b\u724c\u4e8e1958\u5e74\uff0c\u662f\u5b89\u5fbd\u4e2d\u70df\u5de5\u4e1a\u516c\u53f8\u868c\u57e0\u5377\u70df\u5382\u7684\u4ee3\u8868\u54c1\u724c\uff0c1993\u5e74\u63a8\u51fa\u7279\u5236\u9ec4\u5c71\u83b7\u5f97\u5de8\u5927\u6210\u529f\u540e\u8fc5\u901f\u53d1\u5c55\uff0c\u73b0\u62e5\u6709\u9ec4\u5c71\u4e07\u8c61\u3001\u9ec4\u5c71\u4e2d\u56fd\u98ce\u3001\u9ec4\u5c71\u65b0\u89c6\u754c\u3001\u9ec4\u5c71\u65b0\u6982\u5ff5\u3001\u9ec4\u5c7150\u3001\u9ec4\u5c711993\u3001\u9ec4\u5c71\u786c\u4ee5\u53ca\u9ec4\u5c71\u7696\u70df\u7cfb\u5217\u548c\u9ec4\u5c71\u8fce\u5ba2\u677e\u7cfb\u5217\u7b49\u7b49\u591a\u4e2a\u54c1\u79cd\u548c\u7cfb\u5217\uff0c\u201c\u4e00\u54c1\u9ec4\u5c71\uff0c\u5929\u9ad8\u4e91\u6de1\u201d\u3001\u201c\u4e2d\u56fd\u9999\uff0c\u4e2d\u56fd\u5473\u201d\u7b49\u5e7f\u544a\u8bed\u54cd\u904d\u5927\u6c5f\u5357\u5317\uff0c\u6210\u4e3a\u4e2d\u56fd\u70df\u8349\u54c1\u724c\u4e00\u9053\u4eae\u4e3d\u7684\u98ce\u666f\u7ebf\u3002","basesort":"1","coverpic":"https:\/\/res.yanyue.cn\/common\/yan\/bcovers\/7ab5ee8399804214353786ee329c1d10.png","parent":{"brandid":"1","brandname":"\u5927\u9646"}},"tar":10,"xj_tar":"","nicotine":1,"type":{"typeid":"1","typename":"\u70e4\u70df\u578b"},"pingnum":"14","pingacc":"56.52%","commentnum":"11","othername":"","ciglength":84,"ciglength_in":0,"cigarette_count":20,"xj_model":"","huanjing":0,"zhijing":0,"chandi":"","genpicdata":{"packprice":{"orgstr":"\uffe565\u5143","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/f8e\/7e7\/f8e7e7b43752eebb3fa9192ed06f1906.png"},"barprice":{"orgstr":"\uffe5650\u5143","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/e24\/802\/e2480214b0edaa5578e543d07ad3cb98.png"},"tar":{"orgstr":"10mg","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/fd0\/a5a\/fd0a5a1127e03b734f91566c7e44f2a1.png"},"nicotine":{"orgstr":"1mg","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/4d3\/6eb\/4d36ebb935332fd2c80e465e6a145a4b.png"},"ciglength":{"orgstr":"84mm","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/5bb\/ded\/5bbded2b064913e77ebf7e7b9ffea5ce.png"},"cigarette_count":{"orgstr":20,"pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"},"cignum":{"orgstr":20,"pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"}}},{"productid":"6514","productname":"\u9ec4\u5c71(\u8fce\u5ba2\u677e\u8d62\u5ba2)","secondname":"","productname_hascn":"\u9ec4\u5c71(\u8fce\u5ba2\u677e\u8d62\u5ba2)","basesortid":"4","basesortname":"\u9999\u70df","typeid":"4","typename":"\u9999\u70df","coverpic":"https:\/\/res.yanyue.cn\/common\/yan\/productimgs\/7191f9e3502d402d0e4ef720339d0a55.webp","coverpic_thumb120x90":"https:\/\/res.yanyue.cn\/thumb\/120x90\/719\/1f9\/7191f9e3502d402d0e4ef720339d0a55.webp","coverpic_thumb400x300":"https:\/\/res.yanyue.cn\/thumb\/400x300\/719\/1f9\/7191f9e3502d402d0e4ef720339d0a55.webp","packprice":36,"priceunit":"0","barprice":360,"comscore":10,"scorewei":10,"scorebao":10,"scorejia":10,"brand":{"brandid":"31","brandname":"\u9ec4\u5c71","brandnamesecond":"","brandalias":"","desp":"\u9ec4\u5c71\u5377\u70df\u521b\u724c\u4e8e1958\u5e74\uff0c\u662f\u5b89\u5fbd\u4e2d\u70df\u5de5\u4e1a\u516c\u53f8\u868c\u57e0\u5377\u70df\u5382\u7684\u4ee3\u8868\u54c1\u724c\uff0c1993\u5e74\u63a8\u51fa\u7279\u5236\u9ec4\u5c71\u83b7\u5f97\u5de8\u5927\u6210\u529f\u540e\u8fc5\u901f\u53d1\u5c55\uff0c\u73b0\u62e5\u6709\u9ec4\u5c71\u4e07\u8c61\u3001\u9ec4\u5c71\u4e2d\u56fd\u98ce\u3001\u9ec4\u5c71\u65b0\u89c6\u754c\u3001\u9ec4\u5c71\u65b0\u6982\u5ff5\u3001\u9ec4\u5c7150\u3001\u9ec4\u5c711993\u3001\u9ec4\u5c71\u786c\u4ee5\u53ca\u9ec4\u5c71\u7696\u70df\u7cfb\u5217\u548c\u9ec4\u5c71\u8fce\u5ba2\u677e\u7cfb\u5217\u7b49\u7b49\u591a\u4e2a\u54c1\u79cd\u548c\u7cfb\u5217\uff0c\u201c\u4e00\u54c1\u9ec4\u5c71\uff0c\u5929\u9ad8\u4e91\u6de1\u201d\u3001\u201c\u4e2d\u56fd\u9999\uff0c\u4e2d\u56fd\u5473\u201d\u7b49\u5e7f\u544a\u8bed\u54cd\u904d\u5927\u6c5f\u5357\u5317\uff0c\u6210\u4e3a\u4e2d\u56fd\u70df\u8349\u54c1\u724c\u4e00\u9053\u4eae\u4e3d\u7684\u98ce\u666f\u7ebf\u3002","basesort":"1","coverpic":"https:\/\/res.yanyue.cn\/common\/yan\/bcovers\/7ab5ee8399804214353786ee329c1d10.png","parent":{"brandid":"1","brandname":"\u5927\u9646"}},"tar":0,"xj_tar":"","nicotine":0,"type":{"typeid":"5","typename":"\u96ea\u8304\u70df"},"pingnum":"1","pingacc":"","commentnum":"20","othername":"","ciglength":84,"ciglength_in":0,"cigarette_count":20,"xj_model":"","huanjing":0,"zhijing":0,"chandi":"","genpicdata":{"packprice":{"orgstr":"\uffe536\u5143","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/9ec\/fe9\/9ecfe98b98f93a401a6784a8e27de435.png"},"barprice":{"orgstr":"\uffe5360\u5143","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/709\/bf1\/709bf1a022fc4ac96ae614908d97d4ef.png"},"ciglength":{"orgstr":"84mm","pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/5bb\/ded\/5bbded2b064913e77ebf7e7b9ffea5ce.png"},"cigarette_count":{"orgstr":20,"pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"},"cignum":{"orgstr":20,"pic":"https:\/\/res.yanyue.cn\/thumb\/genpic\/657\/bd6\/657bd60d1726ca788550516b7507a728.png"}}}]}
2. 获取品名详情

请求：
GET /product/3230 HTTP/1.1
Host: www.yanyue.cn
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36
Referer: https://www.yanyue.cn/search

响应：
HTTP/1.1 200 OK
Content-Type: text/html; charset=gbk
Content-Length: 71263
Connection: keep-alive
Cache-Control: private
Pragma: no-cache
Expires: Thu, 19 Nov 1981 08:52:00 GMT
Set-Cookie: PHPSESSID=ukp0sua4irpv7fivk9nuir48o7; path=/
X-Powered-By: ThinkPHP
Date: Wed, 16 Apr 2025 15:35:23 GMT
Server: BAIDU_WAF

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="applicable-device" content="pc" />
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="Cache-Control" content="no-transform" />
<meta http-equiv="Cache-Control" content="no-siteapp" />
<title>利群(环球阳光) 香烟正品价格表，真伪鉴别口感评测各地价格多少钱 [香烟信息-烟悦网]</title>
<meta name="keywords" content="利群(环球阳光),利群,烤烟型,香烟,价格表,多少钱,一包,真伪,真假,鉴别,口碑,正品" />
<meta name="description" content="利群的利群(环球阳光)香烟价格点击查看全国各地，烤烟型。    这款环球阳光利群属于利群系列高端FB品。包装采用了正面白色，反面咖啡色的包装设计，翻盖顶端加入了标尺刻度设计。" />
<meta name="generator" content="" />

<link href="/favicon.ico" rel="shortcut icon" />

<!-- Bootstrap-->
<script src="https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/2.2.4/jquery.min.js"></script>
<link href="https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/bootstrap/4.5.3/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.staticfile.net/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/bootstrap/4.5.3/js/bootstrap.min.js"></script>

<link href="/Public/css/common.css?ver=374ec06ab0294e3878c9ff559648a33f" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="//at.alicdn.com/t/c/font_3388024_mswtmhvy06.css">

<script src="/Public/js/yanyue.js?ver=374ec06ab0294e3878c9ff559648a33f"></script>
<script>
	var is_user_needbindphone_whenpost=false;
	var is_adblock_open = true;
	var timestamp = "1744817723";
</script>
<script src="/data/cache/attachlist.js?ver=8935"></script>
<script src="/Public/js/attach.js?ver=374ec06ab0294e3878c9ff559648a33f"></script>
<script src="/Public/js/ad/adview_pic_cpc_cpm_cpa_guanggao_gg_ads_300x250.js"></script>


</head>
<body>
<div class="success_icon"></div>
<div id="siteInfo" style="display: none"></div>

     


<div id="header_side">
	<div id="header">
		<div id="headerContent">
			<div id="logo"></div>
			<div class="search-box r clearfix">
				<input type="text" id="productName" class="proname" value="" placeholder="请输入产品关键字"/>
				<button id="searchButton"></button>
			</div>
</div>
	</div>
</div>


<div id="nav">
	<div id="navigation">
		<ul id="tobaccomenu" class="topmenu">            <li class="tobacco"><a href="/tobacco">传统烟</a></li>
            <li class="hnb"><a href="/hnb">低温烟</a></li>
            <li class="e"><a href="/e">电子烟</a></li>
            <li class="mcurrent"><a href="https://jiu.yanyue.cn">酒类</a></li>
			<li class="bbs"><a href="/shequ">社区</a></li>
		</ul>
		<div class="userpanel">
		  			<form id="topmenuloginform" method="post" action="https://user.yanyue.cn/index.php?m=yyuser&a=login">
			    <input type="hidden" name="referer" value="https://www.yanyue.cn/product/3230" />
			    <fieldset>
			      <legend>登录</legend>
			      <label for="username">用户名：</label><input name="username" type="text" id="username" size="14" />
			      <label for="userpass">密码：</label><input type="password" name="password" id="userpass"  size="14" />
			      <input type="submit" value="登录" name="loginsubmit" id="dologin" />
                  <a title='使用qq登录' href='https://user.yanyue.cn/index.php?m=yyuser&a=qqlogin&referer=https://www.yanyue.cn/product/3230'><img src='https://user.yanyue.cn/images/qq_icon_btn.png'/></a>
                  <a title='使用微信登录'href='https://user.yanyue.cn/index.php?m=yyuser&a=wxsrvlogin&referer=https://www.yanyue.cn/product/3230'><img src='https://user.yanyue.cn/images/wechat_icon_btn.png'/></a>
			      <a href="https://user.yanyue.cn/index.php?m=yyuser&a=register&referer=https://www.yanyue.cn/product/3230"  class="userpanel-anchor">注册</a>
			  </fieldset>
			</form>		</div>
	</div>
</div>



<div id="view_content">
	<div id="status">
	   <div id="t1">您的位置：
	   <a href="/tobacco">传统烟</a> &gt;
	       <a href="/sort/1">大陆</a> &gt;
	       <a href="/sort/78">利群</a> &gt;
	       <span>利群(环球阳光)</span>	   </div>

       <div id="t2">
       <a target=_blank href="/search">高级搜索</a>|<a target=_blank href="/sort/1">大陆品牌</a>|<a target=_blank href="/sort/2">国外品牌</a>|<a target=_blank href="/sort/6">港澳台品牌</a>|<a target=_blank href="/product_upload.php">提交未收录</a>       </div>
	   
	</div>
</div>

<link href="/Public/css/product.css?ver=374ec06ab0294e3878c9ff559648a33f" rel="stylesheet" type="text/css" />

<div id="zine_content" class="clearfix">

  <div class="adWrap">
    <ul class="adList clearfix">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  <div class="adWrap" style="text-align:center;">
    <script>(function() {    var s = "_" + Math.random().toString(36).slice(2);    document.write('<div id="' + s + '"></div>');    (window.slotbydup=window.slotbydup || []).push({        id: '3447443',        container: s,        size: '1000,90',        display: 'inlay-fix'    });})();</script>  </div>
  <div id="left" style="margin:5px 0;">
    <div class="edition_wrap">
      <div class="column_tit l column_lef" style="display: flex;padding-top: 0;padding-bottom: 0;margin-bottom: 10px;">
        <h3 style="position: relative;">
          <span class="d-block">利群(环球阳光)</span>
                                      </h3>
	      
                
        <div class="r_content">
          <span class="col_3" style="cursor:pointer;color:#c60 !important;display:none;" class="mr-0" id="whatisredu" data-container="body" data-toggle="popover" data-placement="bottom" data-whatistype="redu" data-content="加载中……"></span>
          <script>
          </script>
        </div>

      </div>


    </div>

    <div class="clearfix mt10">
      <div id="product_img">
        <a href="/gallery/3230" target="_blank" title="查看全部产品图片"><img src="https://res1.yanyue.cn:7709/thumb/400x300/6ad/100/6ad1004a0bc20dfe2ce7d708c6dbae49.webp"
            width="240" height="180"></a>
        <p>
                        <a href="/gallery/3230" target="_blank" title="查看全部产品图片">查看全部<span>44</span>张图片</a>        </p>
      </div>
      <div id="product_detail">
        <p id="detailtitle" class="clearfix">
          <span id="basicinfo_tab" class="active">基本信息</span>
          <input id="product_areaprice_disbtn" type="button" class="productinfobtn" value="各地价格">
        </p>
        <div id="basicinfo" class="clearfix">
          <!-- class="tabcontent" 去掉了class-->
          <ul class="ul_1">
          
            <!-- 香烟相关属性 -->
            <li class="info_title">品牌:</li>
	            <li class="info_content">利群</li>            
            <li class="info_title">类型:</li>
            <li class="info_content">
              <font color="#C00">烤烟型</font>
            </li>
                        
                        
                        
            <li class="info_title">焦油:</li>
            <li class="info_content"><span class="red">
              <img src="https://res1.yanyue.cn:7709/thumb/genpic/4af/bb2/4afbb2d48718dffd6fb7b2952435e5bf.png" class="genpic">              </span>
            </li>              
            <li class="info_title">烟碱:</li>
            <li class="info_content">
              <img src="https://res1.yanyue.cn:7709/thumb/genpic/e9f/31e/e9f31eff2c370c2eddf50713ae53ab61.png" class="genpic">            </li>            
            <li class="info_title">一氧化碳:</li>
            <li class="info_content">
              <img src="https://res1.yanyue.cn:7709/thumb/genpic/fd0/a5a/fd0a5a1127e03b734f91566c7e44f2a1.png" class="genpic">            </li>
            <li class="info_title">长度:</li>
            <li class="info_content">
              <img src="https://res1.yanyue.cn:7709/thumb/genpic/5bb/ded/5bbded2b064913e77ebf7e7b9ffea5ce.png" class="genpic">            </li>            
            
            
            
                        
            <li class="info_title">包装形式:</li>
            <li class="info_content">纸质硬盒</li>
            <li class="info_title">主颜色:</li>
            <li class="info_content">白色</li>            
            <li class="info_title">副颜色:</li>
            <li class="info_content">咖色</li>            
            <li class="info_title">每盒数量:</li>
            <li class="info_content">
              <img src="https://res1.yanyue.cn:7709/thumb/genpic/657/bd6/657bd60d1726ca788550516b7507a728.png" class="genpic">            </li>
            <li class="info_title">条装盒数:</li>
            <li class="info_content">
              <img src="https://res1.yanyue.cn:7709/thumb/genpic/d04/dab/d04dabc2491d2fb911e65f4b14b3007e.png" class="genpic">            </li>
            <li class="info_title">小盒价格:</li>
            <li class="info_content">
              <img src="https://res1.yanyue.cn:7709/thumb/genpic/ad5/e86/ad5e86d2111a62d2a546b8f04e3b2e67.png" class="genpic">            </li>            
            <li class="info_title">条装价格:</li>
            <li class="info_content">
              <img src="https://res1.yanyue.cn:7709/thumb/genpic/fe8/740/fe8740b18bc51921311c78604241c394.png" class="genpic">            </li>
            <li class="info_title">小盒条码:</li>
            <li class="info_content" style="position: relative;">
              <img src="https://res1.yanyue.cn:7709/thumb/genpic/5cc/596/5cc59616a79e89efcfeef50a53488619.png" class="genpic">              <a style="position: absolute;right:18px;" href="#" onclick="return barcode_more_click(this);">更多</a>
                <span style="display:none;"><img src="https://res1.yanyue.cn:7709/thumb/genpic/d59/a2b/d59a2b5279827b40a83d47c5ebc32ab4.png" class="genpic"></span>            </li>            
            <li class="info_title">条装条码:</li>
            <li class="info_content" style="position: relative;">
              <img src="https://res1.yanyue.cn:7709/thumb/genpic/773/67e/77367e74dd6deb128426dab725eb2a3c.png" class="genpic">                          </li>            <!-- 香烟相关属性end -->


            <!-- 雪茄相关属性 -->
                        <!-- 雪茄相关属性end -->



            <!-- HNB烟弹相关属性 -->
                        <!-- HNB烟弹相关属性end -->
            
            <!-- 其他烟品相关属性 -->
                        <!-- 其他烟品相关属性end -->
            

          </ul>
          <div class="clearfix">
            <div class="infosource">

              以上由网友提供，如有错误请<a href="/shopupload/yanupload/productid/3230/ptype/1" target="_blank">点此提出</a>
            </div>

          </div>
        </div>
      </div>

    </div>
    <!-- 去掉长白山的信息 -->
    
    
         
    <div class="clearfix mt10">

      <div id="title_span" class="evaluatetitle">
        <div id="title" class="ft">网友评分</div>
        <span id="spansearch"><a href="/search" target="_blank">高级搜索</a></span>
      </div>
      <div id="evaluate">
        <div id="totalevaluate">

          <div class="subcontent">
            <span class="brown">各项指标得分</span>
            <span style="display:none;">
              （<span id="pingfenarea_pingnum"></span>
              <span id="reliability" data-container="body" data-toggle="popover" data-placement="bottom" data-whatistype="kexindu" data-content="加载中……"></span>）
            </span>
          </div>
          <div class="subcontent3">
            <div class="a">口　味:</div>
            <div class="b"><img src="/images/yanku/rateactbar.gif" width="79%"></div>
            <div class="c">7.9 分</div>
          </div>
          <div class="subcontent3">
            <div class="a">外　观:</div>
            <div class="b"><img src="/images/yanku/rateactbar.gif" width="75%"></div>
            <div class="c">7.5 分</div>
          </div>
          <div class="subcontent3">
            <div class="a">性价比:</div>
            <div class="b"><img src="/images/yanku/rateactbar.gif" width="72%"></div>
            <div class="c">7.2 分</div>
          </div>
          <div class="subcontent3">
            <div class="a">综　合:</div>
            <div class="b"><img src="/images/yanku/rateactbar.gif" width="75%"></div>
            <div class="c">7.5 分</div>
          </div>

        </div>

        <div id="userevaluate">
          <div class="subcontent">
            <span class="brown">我的评分</span>（如有疑问，请<a href="https://bbs.yanyue.cn" target="_blank">论坛发帖</a>）
          </div>


          <!--end-->
          <div class="subcontent2">
            <span class="ratetitle">口　味:</span>
            <span class="kou"></span><span class="kou"></span><span class="kou"></span><span class="kou"></span><span
              class="kou"></span>
            <span class="kou"></span><span class="kou"></span><span class="kou"></span><span class="kou"></span><span
              class="kou"></span>
            <span id="tasterate" class="ratetitle">0分</span>
          </div>
          <div class="subcontent2">
            <span class="ratetitle">外　观:</span>
            <span class="wai"></span><span class="wai"></span><span class="wai"></span><span class="wai"></span><span
              class="wai"></span>
            <span class="wai"></span><span class="wai"></span><span class="wai"></span><span class="wai"></span><span
              class="wai"></span>
            <span id="lookrate" class="ratetitle">0分</span>
          </div>
          <div class="subcontent2">
            <span class="ratetitle">性价比:</span>
            <span class="xing"></span><span class="xing"></span><span class="xing"></span><span
              class="xing"></span><span class="xing"></span>
            <span class="xing"></span><span class="xing"></span><span class="xing"></span><span
              class="xing"></span><span class="xing"></span>
            <span id="costrate" class="ratetitle">0分</span>
          </div>
          <div class="subcontent4">
            <p id="rateinstruction">请在上方评分条中选择您的评分</p>
            <input type="button" name="sumitBtn" value="提交评分" id="ratebtn">
          </div>


        </div>
      </div>
      <!-- end of "evaluate" -->

      
      <div id="productcomment">
      
          <div class="adWrap" style="width:100%;margin:0 0 8px 0;">
	        	      </div>	      
	      
        <div id="commenttitle" class="mb5">
          <h3>网友评论</h3>
          <p>
            <a href="/comment/3230" target="_blank">浏览全部 9条评论 &gt;&gt;</a>            <span><button
                onclick="javascript:window.location.hash='commentform';document.form_area.local_price.focus();"><img
                  src="/images/yanku/comment.gif" alt="评论"> 发表评论</button></span>
          </p>
        </div>
        <ul>
          <li>
              <p class="commentinfo">
                <span class="username">ddllff</span>
                - <a title="会员等级" alt="会员等级" href="https://bbs.yanyue.cn"
                  target="_blank">长老</a>
                                                      <a target="_blank" href="/topic/742716646" style="margin-left:auto;"><span class="iconfont icon-pinglun" style="font-size:12px;">&nbsp;1</span></a>              </p>

              <p class="commenttext" id="282688">
                                <span><font>大字版利群（环球阳光）……&nbsp;</font><a target="_blank" href="/topic/742716646">查看</a></span>
              </p>
              <div class="commentpic">
                <div class="item">
                    <a target="_blank" href="/topic/742716646"><img src="https://res1.yanyue.cn:7709/thumb/image/002/80/86/06_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/742716646"><img src="https://res1.yanyue.cn:7709/thumb/image/002/80/86/07_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/742716646"><img src="https://res1.yanyue.cn:7709/thumb/image/002/80/86/08_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/742716646"><img src="https://res1.yanyue.cn:7709/thumb/image/002/80/86/09_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/742716646"><img src="https://res1.yanyue.cn:7709/thumb/image/002/80/86/10_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/742716646"><img src="https://res1.yanyue.cn:7709/thumb/image/002/80/86/11_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/742716646"><img src="https://res1.yanyue.cn:7709/thumb/image/002/80/86/12_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/742716646"><img src="https://res1.yanyue.cn:7709/thumb/image/002/80/86/13_300_300.jpg"></a>
                    <span class="imgcount">12图</span>                  </div>              </div>
              
              
            </li><li>
              <p class="commentinfo">
                <span class="username">爱烟烟草烟</span>
                - <a title="会员等级" alt="会员等级" href="https://bbs.yanyue.cn"
                  target="_blank">Lv2</a>
                                                      <a target="_blank" href="/topic/762317523" style="margin-left:auto;"><span class="iconfont icon-pinglun" style="font-size:12px;">&nbsp;3</span></a>              </p>

              <p class="commenttext" id="271723">
                                <span><font>利群环球阳光，这款利群特别香，……买了几盒回来抽，特别好抽的一款利群，环球阳光利群还有一款软盒的，不知道还能不能遇到，……&nbsp;</font><a target="_blank" href="/topic/762317523">查看</a></span>
              </p>
              <div class="commentpic">
                <div class="item">
                    <a target="_blank" href="/topic/762317523"><img src="https://res1.yanyue.cn:7709/thumb/image/002/74/87/43_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/762317523"><img src="https://res1.yanyue.cn:7709/thumb/image/002/74/87/44_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/762317523"><img src="https://res1.yanyue.cn:7709/thumb/image/002/74/87/45_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/762317523"><img src="https://res1.yanyue.cn:7709/thumb/image/002/74/87/46_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/762317523"><img src="https://res1.yanyue.cn:7709/thumb/image/002/74/87/47_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/762317523"><img src="https://res1.yanyue.cn:7709/thumb/image/002/74/87/48_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/762317523"><img src="https://res1.yanyue.cn:7709/thumb/image/002/74/87/49_300_300.jpg"></a>
                                      </div>              </div>
              
              
            </li><li>
              <p class="commentinfo">
                <span class="username">un90c2a47ee13a</span>
                - <a title="会员等级" alt="会员等级" href="https://bbs.yanyue.cn"
                  target="_blank"></a>
                                                                    </p>

              <p class="commenttext" id="263276">
                                <span><font>这个哪里有卖的</font></span>
              </p>
              
              
              
            </li><li>
              <p class="commentinfo">
                <span class="username">安徽小烟虫</span>
                - <a title="会员等级" alt="会员等级" href="https://bbs.yanyue.cn"
                  target="_blank">Lv8</a>
                                                      <a target="_blank" href="/topic/713413427" style="margin-left:auto;"><span class="iconfont icon-pinglun" style="font-size:12px;">&nbsp;15</span></a>              </p>

              <p class="commenttext" id="282689">
                                <span><font>利群环球阳光&nbsp;好像也是停产绝版货了，烟嘴挺长的，味道和硬阳光，还有菊花阳光是一个路子的，三项指标也一模一样，不过这款环球更加的醇厚一些，烟灰雪白，持灰不错，燃烧的速度有点快……&nbsp;</font><a target="_blank" href="/topic/713413427">查看</a></span>
              </p>
              <div class="commentpic">
                <div class="item">
                    <a target="_blank" href="/topic/713413427"><img src="https://res1.yanyue.cn:7709/thumb/image/002/56/32/40_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/713413427"><img src="https://res1.yanyue.cn:7709/thumb/image/002/56/32/41_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/713413427"><img src="https://res1.yanyue.cn:7709/thumb/image/002/56/32/42_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/713413427"><img src="https://res1.yanyue.cn:7709/thumb/image/002/56/32/43_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/713413427"><img src="https://res1.yanyue.cn:7709/thumb/image/002/56/32/44_300_300.jpg"></a>
                                      </div>              </div>
              
              
            </li><li>
              <p class="commentinfo">
                <span class="username">m5e9073e422c04</span>
                - <a title="会员等级" alt="会员等级" href="https://bbs.yanyue.cn"
                  target="_blank">Lv10</a>
                                                      <a target="_blank" href="/topic/626081146" style="margin-left:auto;"><span class="iconfont icon-pinglun" style="font-size:12px;">&nbsp;15</span></a>              </p>

              <p class="commenttext" id="282690">
                                <span><font>让心灵去旅行-利群环球阳光&nbsp;盒子打开嗅之淡淡清香，烟味淡雅顺滑，整支通透无杂气，持灰良好。是一款不错的老烟……&nbsp;</font><a target="_blank" href="/topic/626081146">查看</a></span>
              </p>
              <div class="commentpic">
                <div class="item">
                    <a target="_blank" href="/topic/626081146"><img src="https://res1.yanyue.cn:7709/thumb/image/002/47/24/93_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/626081146"><img src="https://res1.yanyue.cn:7709/thumb/image/002/47/24/94_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/626081146"><img src="https://res1.yanyue.cn:7709/thumb/image/002/47/24/95_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/626081146"><img src="https://res1.yanyue.cn:7709/thumb/image/002/47/24/96_300_300.jpg"></a>
                                      </div>              </div>
              
              
            </li><li>
              <p class="commentinfo">
                <span class="username">dawson1009</span>
                - <a title="会员等级" alt="会员等级" href="https://bbs.yanyue.cn"
                  target="_blank">长老</a>
                                                      <a target="_blank" href="/topic/637909799" style="margin-left:auto;"><span class="iconfont icon-pinglun" style="font-size:12px;">&nbsp;4</span></a>              </p>

              <p class="commenttext" id="282691">
                                <span><font>利群（环球阳光）……&nbsp;</font><a target="_blank" href="/topic/637909799">查看</a></span>
              </p>
              <div class="commentpic">
                <div class="item">
                    <a target="_blank" href="/topic/637909799"><img src="https://res1.yanyue.cn:7709/thumb/image/002/44/88/18_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/637909799"><img src="https://res1.yanyue.cn:7709/thumb/image/002/44/88/19_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/637909799"><img src="https://res1.yanyue.cn:7709/thumb/image/002/44/88/20_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/637909799"><img src="https://res1.yanyue.cn:7709/thumb/image/002/44/88/21_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/637909799"><img src="https://res1.yanyue.cn:7709/thumb/image/002/44/88/22_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/637909799"><img src="https://res1.yanyue.cn:7709/thumb/image/002/44/88/23_300_300.jpg"></a>
                                      </div>              </div>
              
              
            </li><li>
              <p class="commentinfo">
                <span class="username">绍兴徐门</span>
                - <a title="会员等级" alt="会员等级" href="https://bbs.yanyue.cn"
                  target="_blank">Lv10</a>
                                                      <a target="_blank" href="/topic/516593469" style="margin-left:auto;"><span class="iconfont icon-pinglun" style="font-size:12px;">&nbsp;11</span></a>              </p>

              <p class="commenttext" id="282693">
                                <span><font>实物收藏之利群（环球阳光）……&nbsp;</font><a target="_blank" href="/topic/516593469">查看</a></span>
              </p>
              <div class="commentpic">
                <div class="item">
                    <a target="_blank" href="/topic/516593469"><img src="https://res1.yanyue.cn:7709/thumb/image/001/79/87/45_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/516593469"><img src="https://res1.yanyue.cn:7709/thumb/image/001/79/87/46_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/516593469"><img src="https://res1.yanyue.cn:7709/thumb/image/001/79/87/47_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/516593469"><img src="https://res1.yanyue.cn:7709/thumb/image/001/79/87/48_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/516593469"><img src="https://res1.yanyue.cn:7709/thumb/image/001/79/87/49_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/516593469"><img src="https://res1.yanyue.cn:7709/thumb/image/001/79/87/50_300_300.jpg"></a>
                                      </div>              </div>
              
              
            </li><li>
              <p class="commentinfo">
                <span class="username">小火鸡</span>
                - <a title="会员等级" alt="会员等级" href="https://bbs.yanyue.cn"
                  target="_blank">Lv4</a>
                                                      <a target="_blank" href="/topic/407200800" style="margin-left:auto;"><span class="iconfont icon-pinglun" style="font-size:12px;">&nbsp;9</span></a>              </p>

              <p class="commenttext" id="282692">
                                <span><font>利群（环球阳光）……&nbsp;</font><a target="_blank" href="/topic/407200800">查看</a></span>
              </p>
              <div class="commentpic">
                <div class="item">
                    <a target="_blank" href="/topic/407200800"><img src="https://res1.yanyue.cn:7709/thumb/image/001/61/47/65_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/407200800"><img src="https://res1.yanyue.cn:7709/thumb/image/001/61/47/66_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/407200800"><img src="https://res1.yanyue.cn:7709/thumb/image/001/61/47/67_300_300.jpg"></a>
                                      </div><div class="item">
                    <a target="_blank" href="/topic/407200800"><img src="https://res1.yanyue.cn:7709/thumb/image/001/61/47/68_300_300.jpg"></a>
                                      </div>              </div>
              
              
            </li>        </ul>

                <p class="commentmore"><a href="/comment/3230"
            target="_blank">浏览全部9条评论 &gt;&gt;</a></p>
        
        
				<div class="nomore" style="margin-top: 10px;text-align: center;color: #CCC;">
				</div>

          <div class="adWrap" style="width:100%;">
	        	      </div>          
      </div>
      <!-- end of productcomment-->
      
            
    </div>
      
    <!-- end of product-->

    <div>
      <div class="column_tit">
        <h3>发表评论<span class="suming"> </span></h3>

      </div>

      <div id="commentform">
        <div class="mt10 clearfix">
          <div class="jiage l">
            <span class="l">当地售价:</span>
            <input class="l" type="text" id="price">
            <span class="ml10 l">元/包</span>
            <span class="ml10 l">所在地区:</span>
          </div>
          <!--省-->
          <div class="sheng l">

            <div class="chose_inp" id="shengbox">请选择省</div>
            <ul class="area_list" id="shenglist"></ul>

          </div>
          <!--市-->
          <div class="sheng l">

            <div class="chose_inp" id="shibox">请选择市</div>
            <ul class="area_list" id="shilist"></ul>

          </div>
          <!--县-->
          <div class="sheng l">

            <div class="chose_inp" id="xianbox">请选择区</div>
            <ul class="area_list" id="xianlist"></ul>

          </div>
        </div>
        <div class="conbox_wrap">
          <textarea placeholder=
"· 售价地区 与 评论内容 互为选填，可不全填
· 仅供填写对产品的评价，咨询请到论坛发帖
· 不允许发布广告、转让、求购、代购等信息
· 本站为烟民交流网站，不出售任何烟草制品" id="conbox" rows="6" style="color: rgb(153, 153, 153);line-height:2.0;"></textarea>

        </div>

		<p class="submitline">
				<span class="point">友情提示：参与评论，请先<a href="https://user.yanyue.cn/index.php?m=yyuser&a=login&referer=https://www.yanyue.cn/product/3230">登录</a>。没有账号？请先<a href="https://user.yanyue.cn/index.php?m=yyuser&a=register&referer=https://www.yanyue.cn/product/3230">注册</a>。
					如有疑问，请<a href="https://bbs.yanyue.cn" target="_blank">论坛发帖</a></span>
			</p>
		      </div>
			
    </div>

    <div style="margin:10px 0 0 0;">
      <div class="column_tit">
        <h3><a href="/product/3230">利群(环球阳光)</a> 产品介绍<span class="suming"> </span>
        </h3>
      </div>
      <div>
        <p style="line-height:30px;">
              这款环球阳光利群属于利群系列高端FB品。包装采用了正面白色，反面咖啡色的包装设计，翻盖顶端加入了标尺刻度设计。        </p>
      </div>
    </div>
    <div id="productuserremarks" style="font-size: 10px;color: #CCC;margin-top:10px;"></div>

      
    <div class="recommend recommend_p mt20">
      <div class="column_tit">
        <h3>阅读推荐</h3><a class="r" target="_blank" href="/views?type=all">更多>></a>
      </div>
      <!--list begin-->
      <div class="recobox clearfix"><a target="_blank" href="/news/5032?tkfs=yp">
			<div class="rec_pic_wrap"><img src="https://res1.yanyue.cn:7709/thumb/400x300/174/418/1744188560502611.jpg"></div>			<div class="recoInfo" >
				<h3 class="tit ft">烟雾寄哀思</h3>
				<p class="briefly col_6" style="height: 70px;overflow: hidden;">有时候，一支烟承载的不只是尼古丁，还有某种情感的寄托。那些曾经在烟雾中的交谈、沉默或思考，在清明这天尤为鲜明。每到清明，墓园里总有那么几个身影，站在亲人墓前，点上一支烟，有时插在香炉旁，有时只是静静地...</p>
				<span class="detail col_9"></span>
			</div>
		</a></div><div class="recobox clearfix"><a target="_blank" href="/news/5031?tkfs=yp">
			<div class="rec_pic_wrap"><img src="https://res1.yanyue.cn:7709/thumb/400x300/174/418/1744188437768676.jpg"></div>			<div class="recoInfo" >
				<h3 class="tit ft">记忆考古：香烟包装上的时代密码</h3>
				<p class="briefly col_6" style="height: 70px;overflow: hidden;">在历史的长河中，每一件物品都可能成为时代的见证者。香烟包装，这个看似不起眼的方寸之间，却承载着中国近现代史的丰富记忆。从计划经济的烙印到改革开放的浪潮，再到公共卫生意识的觉醒，香烟包装如同一部浓缩的史...</p>
				<span class="detail col_9"></span>
			</div>
		</a></div><div class="recobox clearfix"><a target="_blank" href="/news/4989?tkfs=yp">
			<div class="rec_pic_wrap"><img src="https://res1.yanyue.cn:7709/thumb/400x300/174/079/1740799789130666.jpg"></div>			<div class="recoInfo" >
				<h3 class="tit ft">对青少年健康影响隐患渐显 调味电子烟开始走向穷途末路</h3>
				<p class="briefly col_6" style="height: 70px;overflow: hidden;">自进入2025年，青少年使用电子烟的问题受到多国关注。未成年人使用电子烟，特别是调味电子烟的情况越来越令人担忧央视新闻在2024年12月中旬报道了一则荷兰至少14名未成年人因使用电子烟就医的新闻。当地时间12月11日...</p>
				<span class="detail col_9"></span>
			</div>
		</a></div><div class="recobox clearfix"><a target="_blank" href="/news/4909?tkfs=yp">
			<div class="rec_pic_wrap"><img src="https://res1.yanyue.cn:7709/thumb/400x300/172/837/1728379941250875.jpg"></div>			<div class="recoInfo" >
				<h3 class="tit ft">假期出门在外，雪茄工具指南，请查收</h3>
				<p class="briefly col_6" style="height: 70px;overflow: hidden;">国庆假期，各位茄人们是不是要出门游玩啦～是否要带上心爱的雪茄呢？为了在外也能惬意地享受雪茄，茄人需要备上哪些工具呢？本期茄人生活，跟着小茄一起了解一下吧～装茄工具针对假期有1～2天出行计划的茄人们来说，...</p>
				<span class="detail col_9"></span>
			</div>
		</a></div><div class="recobox clearfix"><a target="_blank" href="/news/4886?tkfs=yp">
			<div class="rec_pic_wrap"><img src="https://res1.yanyue.cn:7709/thumb/400x300/172/683/1726830770301222.png"></div>			<div class="recoInfo" >
				<h3 class="tit ft">它那么难抽，为什么还有这么多人喜欢？</h3>
				<p class="briefly col_6" style="height: 70px;overflow: hidden;">人们常常说时尚是个轮回，它不仅体现在服装和食物上，还渗透到生活的方方面面。最近，烟圈里开始流行起一种曾经风靡一时，但因难抽而被放弃的烟草。在回老家过节的路上，我注意到许多烟民都抽起了这种烟。从县城到乡...</p>
				<span class="detail col_9"></span>
			</div>
		</a></div>      <!--list end-->
	      </div>

  </div>
  <div id="right" style="margin:5px 0;">
    <!--  0-1-all 开始 -->
<div class=""></div>

<!--  0-1-all 结束 -->

<script src="/js/yanyue.js" type="text/javascript"></script>
<div class="mt10">
	<div class="column_tit">
		<h3>品牌相关</h3>
		<a href="https://bbs.yanyue.cn" target="_blank">查看更多</a>
	</div>

	<ul class="mt10">
		<li><a href="https://bbs.yanyue.cn/thread-738722-1-1.html"
			title="韩免mini宝亨雪茄烟" alt="韩免mini宝亨雪茄烟" target="_blank">韩免mini宝亨雪茄烟</a></li><li><a href="https://bbs.yanyue.cn/thread-738721-1-1.html"
			title="树上一只鸟" alt="树上一只鸟" target="_blank">树上一只鸟</a></li><li><a href="https://bbs.yanyue.cn/thread-738720-1-1.html"
			title="芙蓉王(绽放) 偶遇芙蓉王新品，据说被炒到..." alt="芙蓉王(绽放) 偶遇芙蓉王新品，据说被炒到..." target="_blank">芙蓉王(绽放) 偶遇芙蓉王新品，据说被...</a></li><li><a href="https://bbs.yanyue.cn/thread-738717-1-1.html"
			title="冬虫夏草(天边细支) ..." alt="冬虫夏草(天边细支) ..." target="_blank">冬虫夏草(天边细支) ...</a></li><li><a href="https://bbs.yanyue.cn/thread-738714-1-1.html"
			title="真的是没想到，像这种地域性强的香烟都能让..." alt="真的是没想到，像这种地域性强的香烟都能让..." target="_blank">真的是没想到，像这种地域性强的香烟...</a></li><li><a href="https://bbs.yanyue.cn/thread-738710-1-1.html"
			title="iqos terea black ruby menthol" alt="iqos terea black ruby menthol" target="_blank">iqos terea black ruby menthol</a></li><li><a href="https://bbs.yanyue.cn/thread-738709-1-1.html"
			title="14mg七星软包，大神们帮忙看下真假，3..." alt="14mg七星软包，大神们帮忙看下真假，3..." target="_blank">14mg七星软包，大神们帮忙看下真假，3...</a></li><li><a href="https://bbs.yanyue.cn/thread-738708-1-1.html"
			title="长城(红色132) 前天晚上灰完王冠小国粹之后..." alt="长城(红色132) 前天晚上灰完王冠小国粹之后..." target="_blank">长城(红色132) 前天晚上灰完王冠小国...</a></li><li><a href="https://bbs.yanyue.cn/thread-738706-1-1.html"
			title="七匹狼(蓝) 第二天评价：挺喜欢烟草香的、..." alt="七匹狼(蓝) 第二天评价：挺喜欢烟草香的、..." target="_blank">七匹狼(蓝) 第二天评价：挺喜欢烟草香...</a></li><li><a href="https://bbs.yanyue.cn/thread-738704-1-1.html"
			title="新第一集—岛国混烟典范佳作" alt="新第一集—岛国混烟典范佳作" target="_blank">新第一集—岛国混烟典范佳作</a></li>	</ul>
</div>

<!--  1-2 开始 -->
<div class="mt10"></div>

<!--  1-2 结束 -->

<div class="mt20">
    <div class="column_tit">
        <h3>论坛热帖</h3>
        <a href="/shequ?f=PR_hot" target="_blank">查看更多</a>
    </div>

    <ul class="mt10">
        <li><a href="https://bbs.yanyue.cn/thread-737507-1-1.html"
            title="4月新书速递！瓶子和罐子的百科全书4月报告" alt="4月新书速递！瓶子和罐子的百科全书4月报告" target="_blank">4月新书速递！瓶子和罐子的百科全书4...</a></li><li><a href="https://bbs.yanyue.cn/thread-737078-1-1.html"
            title="帖子永无终结，短期再见朋友们。——生活不止眼前的苟且（加金砖品吸）" alt="帖子永无终结，短期再见朋友们。——生活不止眼前的苟且（加金砖品吸）" target="_blank">帖子永无终结，短期再见朋友们。——...</a></li><li><a href="https://bbs.yanyue.cn/thread-737008-1-1.html"
            title="第200个帖子（阶段性总结）：淡坛子——不淡情谊（调休—百元档香烟大比武）5943字" alt="第200个帖子（阶段性总结）：淡坛子——不淡情谊（调休—百元档香烟大比武）5943字" target="_blank">第200个帖子（阶段性总结）：淡坛子—...</a></li><li><a href="https://bbs.yanyue.cn/thread-738611-1-1.html"
            title="诓新手的狗屁说法。" alt="诓新手的狗屁说法。" target="_blank">诓新手的狗屁说法。</a></li><li><a href="https://bbs.yanyue.cn/thread-737645-1-1.html"
            title="新概念盛誉国品——中华3mg" alt="新概念盛誉国品——中华3mg" target="_blank">新概念盛誉国品——中华3mg</a></li><li><a href="https://bbs.yanyue.cn/thread-737213-1-1.html"
            title="当年刚入坑，被烟斗饭的403套路了（怀旧小故事）" alt="当年刚入坑，被烟斗饭的403套路了（怀旧小故事）" target="_blank">当年刚入坑，被烟斗饭的403套路了（怀...</a></li><li><a href="https://bbs.yanyue.cn/thread-737701-1-1.html"
            title="求茄" alt="求茄" target="_blank">求茄</a></li><li><a href="https://bbs.yanyue.cn/thread-737445-1-1.html"
            title="Arturo Fuente Casa Cuba Doble Seis---阿图罗.富恩特古巴之家双六" alt="Arturo Fuente Casa Cuba Doble Seis---阿图罗.富恩特古巴之家双六" target="_blank">Arturo Fuente Casa Cuba Doble Seis-...</a></li><li><a href="https://bbs.yanyue.cn/thread-736697-1-1.html"
            title="paperguru耗材安全收货" alt="paperguru耗材安全收货" target="_blank">paperguru耗材安全收货</a></li><li><a href="https://bbs.yanyue.cn/thread-738584-1-1.html"
            title="初恋是最美的不期而遇——漫天游" alt="初恋是最美的不期而遇——漫天游" target="_blank">初恋是最美的不期而遇——漫天游</a></li>    </ul>
</div>

<!--  2-3 开始 -->
<div class="mt10"><a href="http://bbs.yanyue.cn/thread-151482-1-1.html?product" target="_blank"><img src="https://res1.yanyue.cn:5232/common/tpic/250x60/00d15e02834b48d01616fb67042df27c.png" height="auto" width="100%" border="0"></a></div>

<!--  2-3 结束 -->

<div id="product_list" class="mt20">
    <div class="column_tit">
        <h3>烟品风云</h3>
        <div id="product_sub_title" class="sub_title">
            <span id="view_tab" class="active">人气</span>|<span id="good_tab">综合</span>
        </div>
    </div>
    <div class="mt10">
        <div id="view" class="tabcontent" style="display:block;">
            <ul>
                <li>
                    <p class="namepro clearfix">
                        <span class="imp">1</span><a href="/product/2707"
                            target="_blank">南京(雨花石)</a>
                    </p>
                    <div class="proimg" style="display: block;">
                        <a href="/product/2707" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/4c7/727/4c77277a349b0f35b10482baab458312.jpeg"></a>
                    </div>
                </li>
                                <li>
                    <p class="namepro clearfix">
                        <span class="imp">2</span><a href="/product/6168"
                            target="_blank">芙蓉王(沁爽细支)</a>
                    </p>
                    <div class="proimg" style="display: none;">
                        <a href="/product/6168" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/c2e/faa/c2efaaac17bd307fc65ab1ed696c23aa.jpg"></a>
                    </div>
                </li>
                                <li>
                    <p class="namepro clearfix">
                        <span class="imp">3</span><a href="/product/6395"
                            target="_blank">玉溪(细支缤果爆)</a>
                    </p>
                    <div class="proimg" style="display: none;">
                        <a href="/product/6395" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/2c5/2c6/2c52c6144f26ccc6f917690fed905edc.webp"></a>
                    </div>
                </li>
                                <li>
                    <p class="namepro clearfix">
                        <span class="nor">4</span><a href="/product/6187"
                            target="_blank">芙蓉王(绽放)</a>
                    </p>
                    <div class="proimg" style="display: none;">
                        <a href="/product/6187" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/542/5bf/5425bf3fe91bf9c09c7e5b3db9dcd6cf.webp"></a>
                    </div>
                </li>                <li>
                    <p class="namepro clearfix">
                        <span class="nor">5</span><a href="/product/3358"
                            target="_blank">中华(金中支)</a>
                    </p>
                    <div class="proimg" style="display: none;">
                        <a href="/product/3358" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/618/ae8/618ae8cd9c8e44bae4f6b87c742c1533.jpg"></a>
                    </div>
                </li>                <li>
                    <p class="namepro clearfix">
                        <span class="nor">6</span><a href="/product/4385"
                            target="_blank">中华(细支)</a>
                    </p>
                    <div class="proimg" style="display: none;">
                        <a href="/product/4385" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/0be/ba7/0beba7c04ffe4246c4b33c554daec084.jpg"></a>
                    </div>
                </li>                <li>
                    <p class="namepro clearfix">
                        <span class="nor">7</span><a href="/product/2070"
                            target="_blank">南京(炫赫门)</a>
                    </p>
                    <div class="proimg" style="display: none;">
                        <a href="/product/2070" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/de6/52d/de652d7ee42bab5490ed2d7b69897060.jpg"></a>
                    </div>
                </li>                <li>
                    <p class="namepro clearfix">
                        <span class="nor">8</span><a href="/product/15"
                            target="_blank">白沙(和天下)</a>
                    </p>
                    <div class="proimg" style="display: none;">
                        <a href="/product/15" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/669/0da/6690dab9372ff9b5a822b3720a88a09a.jpg"></a>
                    </div>
                </li>                <li>
                    <p class="namepro clearfix">
                        <span class="nor">9</span><a href="/product/3568"
                            target="_blank">黄山(徽商新概念细支)</a>
                    </p>
                    <div class="proimg" style="display: none;">
                        <a href="/product/3568" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/f6c/3bc/f6c3bc15120885ef308b00ffc67d2548.jpg"></a>
                    </div>
                </li>                <li>
                    <p class="namepro clearfix">
                        <span class="nor">10</span><a href="/product/2792"
                            target="_blank">钻石(荷花)</a>
                    </p>
                    <div class="proimg" style="display: none;">
                        <a href="/product/2792" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/321/61a/32161a3be3afc548d80862be085b90ce.webp"></a>
                    </div>
                </li>            </ul>
        </div>
        <div id="good" class="tabcontent" style="display: none;">
            <ul>
                <li>
                    <p class="namepro clearfix">
                        <span class="imp">1</span><a
                            href="/product/3590" target="_blank">阿里山景泰典蓝(蓝莓爆珠)</a>
                    </p>
                    <div class="proimg" style="display: block">
                        <a href="/product/3590" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/e07/2a7/e072a728144fee4af3b41d00d0cb3cb5.jpg"></a>
                    </div>
                </li>
                                <li>
                    <p class="namepro clearfix">
                        <span class="imp">2</span><a
                            href="/product/3368" target="_blank">黄金叶(乐途)</a>
                    </p>
                    <div class="proimg" style="display: none">
                        <a href="/product/3368" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/4ea/d74/4ead740e2df5b6921507a84313f2aff7.jpg"></a>
                    </div>
                </li>
                                <li>
                    <p class="namepro clearfix">
                        <span class="imp">3</span><a
                            href="/product/3424" target="_blank">玉溪(壹零捌)</a>
                    </p>
                    <div class="proimg" style="display: none">
                        <a href="/product/3424" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/a62/f6c/a62f6c79e849e6fde901d78370a0410f.jpg"></a>
                    </div>
                </li>
                                <li>
                    <p class="namepro clearfix">
                        <span class="nor">4</span><a
                            href="/product/1915" target="_blank">七星(银辉)中免版</a>
                    </p>
                    <div class="proimg" style="display: none">
                        <a href="/product/1915" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/63f/bbb/63fbbbc6056ed59c74c1e1420ddc4267.jpg"></a>
                    </div>
                </li>                <li>
                    <p class="namepro clearfix">
                        <span class="nor">5</span><a
                            href="/product/316" target="_blank">云烟(软如意)</a>
                    </p>
                    <div class="proimg" style="display: none">
                        <a href="/product/316" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/8ee/8b9/8ee8b945db51d7c30abd1c8f9a34843c.jpg"></a>
                    </div>
                </li>                <li>
                    <p class="namepro clearfix">
                        <span class="nor">6</span><a
                            href="/product/2421" target="_blank">BOHEM(mojito Double)</a>
                    </p>
                    <div class="proimg" style="display: none">
                        <a href="/product/2421" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/d9b/b90/d9bb90f07ba371c72d02953c8043c205.jpg"></a>
                    </div>
                </li>                <li>
                    <p class="namepro clearfix">
                        <span class="nor">7</span><a
                            href="/product/515" target="_blank">黄鹤楼(软蓝)</a>
                    </p>
                    <div class="proimg" style="display: none">
                        <a href="/product/515" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/733/1bc/7331bc7a151d785c6330e45e139ffde2.jpg"></a>
                    </div>
                </li>                <li>
                    <p class="namepro clearfix">
                        <span class="nor">8</span><a
                            href="/product/513" target="_blank">黄鹤楼(软红)</a>
                    </p>
                    <div class="proimg" style="display: none">
                        <a href="/product/513" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/f70/15e/f7015ead01a120bca791381bd95f3d27.jpg"></a>
                    </div>
                </li>                <li>
                    <p class="namepro clearfix">
                        <span class="nor">9</span><a
                            href="/product/2305" target="_blank">长白山(硬神韵)</a>
                    </p>
                    <div class="proimg" style="display: none">
                        <a href="/product/2305" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/944/603/944603a34da33db636581a43a1846654.jpg"></a>
                    </div>
                </li>                <li>
                    <p class="namepro clearfix">
                        <span class="nor">10</span><a
                            href="/product/1806" target="_blank">红双喜(听装珍藏版)</a>
                    </p>
                    <div class="proimg" style="display: none">
                        <a href="/product/1806" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/a27/cdf/a27cdffa0ef026478542724529f457cc.JPG"></a>
                    </div>
                </li>            </ul>
        </div>
    </div>
</div>
<script>
  Move($('#product_sub_title span'), $('#product_list .tabcontent'), 'active', 'onmouseover');
  ListTab($('#view li'), $('#view .proimg')); 
  ListTab($('#good li'), $('#good .proimg'));
</script>

<!--  3-4 开始 -->
<div class="mt10"></div><!--  3-4 结束 -->

<!--  3+ 开始 -->
<!--  3+ 结束 -->

<!--  3++ 开始 -->
<!--  3++ 结束 -->

<!--  3+++ 开始 -->
<!--  3+++ 结束 -->

<!--  3+ 开始 -->
<!--  3+ 结束 -->

<div id="nbprice_product_list" class="mt20">
    <div class="column_tit">
        <h3>同价推荐</h3>
        <div id="nbprice_sub_title" class="sub_title">
            <span id="nbpriceview_tab" class="active">人气</span>|<span
                id="nbpricegood_tab">综合</span>
        </div>
    </div>
    <div class="mt10">
        <div id="nbpriceview" class="tabcontent">
            <ul>
                <li>
                    <p class="namepro clearfix">
                        <span class="imp">1</span><a
                            href="/product/1189" target="_blank">利群(长嘴)</a>
                    </p>
                    <div class="proimg" style="display: block">
                        <a href="/product/1189" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/9d7/557/9d7557b4b21807d3aea3c0031c00036d.jpg"></a>
                    </div>
                </li>
                                <li>
                    <p class="namepro clearfix">
                        <span class="imp">2</span><a
                            href="/product/635" target="_blank">黄山(金皖烟)</a>
                    </p>
                    <div class="proimg" style="display: none">
                        <a href="/product/635" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/a29/b12/a29b1219740e1de5d02f4f72a105badc.jpg"></a>
                    </div>
                </li>
                                <li>
                    <p class="namepro clearfix">
                        <span class="imp">3</span><a
                            href="/product/3387" target="_blank">芙蓉王(硬细支)</a>
                    </p>
                    <div class="proimg" style="display: none">
                        <a href="/product/3387" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/0bf/993/0bf99342129b7c5243ae10e8f4e3fd9a.jpg"></a>
                    </div>
                </li>
                                <li>
                    <p class="namepro clearfix">
                        <span class="nor">4</span><a
                            href="/product/3820" target="_blank">双喜(花悦)</a>
                    </p>
                    <div class="proimg" style="display: none">
                        <a href="/product/3820" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/f88/28c/f8828cb8b001524b647058b6afecab36.jpg"></a>
                    </div>
                </li>                <li>
                    <p class="namepro clearfix">
                        <span class="nor">5</span><a
                            href="/product/1582" target="_blank">双喜(硬经典1906)</a>
                    </p>
                    <div class="proimg" style="display: none">
                        <a href="/product/1582" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/116/8b7/1168b71c8ab04d9a5ada58704cb180ac.jpg"></a>
                    </div>
                </li>                <li>
                    <p class="namepro clearfix">
                        <span class="nor">6</span><a
                            href="/product/34" target="_blank">中南海(软精品)</a>
                    </p>
                    <div class="proimg" style="display: none">
                        <a href="/product/34" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/23f/500/23f50053834ba3b2d43830717aad39e4.jpg"></a>
                    </div>
                </li>                <li>
                    <p class="namepro clearfix">
                        <span class="nor">7</span><a
                            href="/product/569" target="_blank">牡丹(软)</a>
                    </p>
                    <div class="proimg" style="display: none">
                        <a href="/product/569" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/69c/9df/69c9dff46b2d45ccd35535601750f19e.jpg"></a>
                    </div>
                </li>                <li>
                    <p class="namepro clearfix">
                        <span class="nor">8</span><a
                            href="/product/5167" target="_blank">黄鹤楼(迷你冰爽)</a>
                    </p>
                    <div class="proimg" style="display: none">
                        <a href="/product/5167" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/af9/6b6/af96b66fdf26fe2b97878ed107c293ee.jpg"></a>
                    </div>
                </li>                <li>
                    <p class="namepro clearfix">
                        <span class="nor">9</span><a
                            href="/product/6621" target="_blank">白沙(硬天天向上细支)</a>
                    </p>
                    <div class="proimg" style="display: none">
                        <a href="/product/6621" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/eab/640/eab64036c0d952be9e369a8e843842e3.webp"></a>
                    </div>
                </li>                <li>
                    <p class="namepro clearfix">
                        <span class="nor">10</span><a
                            href="/product/3284" target="_blank">黄鹤楼(硬银紫)</a>
                    </p>
                    <div class="proimg" style="display: none">
                        <a href="/product/3284" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/d37/703/d377035d3c6b927704fb888f816eb13d.webp"></a>
                    </div>
                </li>            </ul>
        </div>
        <div id="nbpricegood" class="tabcontent" style="display: none;">
            <ul>
                <li>
                    <p class="namepro clearfix">
                        <span class="imp">1</span><a
                            href="/product/3590" target="_blank">阿里山景泰典蓝(蓝莓爆珠)</a>
                    </p>
                    <div class="proimg" style="display: block">
                        <a href="/product/3590" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/e07/2a7/e072a728144fee4af3b41d00d0cb3cb5.jpg"></a>
                    </div>
                </li>
                                <li>
                    <p class="namepro clearfix">
                        <span class="imp">2</span><a
                            href="/product/3424" target="_blank">玉溪(壹零捌)</a>
                    </p>
                    <div class="proimg" style="display: none">
                        <a href="/product/3424" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/a62/f6c/a62f6c79e849e6fde901d78370a0410f.jpg"></a>
                    </div>
                </li>
                                <li>
                    <p class="namepro clearfix">
                        <span class="imp">3</span><a
                            href="/product/515" target="_blank">黄鹤楼(软蓝)</a>
                    </p>
                    <div class="proimg" style="display: none">
                        <a href="/product/515" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/733/1bc/7331bc7a151d785c6330e45e139ffde2.jpg"></a>
                    </div>
                </li>
                                <li>
                    <p class="namepro clearfix">
                        <span class="nor">4</span><a
                            href="/product/513" target="_blank">黄鹤楼(软红)</a>
                    </p>
                    <div class="proimg" style="display: none">
                        <a href="/product/513" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/f70/15e/f7015ead01a120bca791381bd95f3d27.jpg"></a>
                    </div>
                </li>                <li>
                    <p class="namepro clearfix">
                        <span class="nor">5</span><a
                            href="/product/2305" target="_blank">长白山(硬神韵)</a>
                    </p>
                    <div class="proimg" style="display: none">
                        <a href="/product/2305" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/944/603/944603a34da33db636581a43a1846654.jpg"></a>
                    </div>
                </li>                <li>
                    <p class="namepro clearfix">
                        <span class="nor">6</span><a
                            href="/product/2532" target="_blank">黄山(小红方印)</a>
                    </p>
                    <div class="proimg" style="display: none">
                        <a href="/product/2532" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/11d/5ed/11d5edf407dd1c4e07858e4794959f11.jpg"></a>
                    </div>
                </li>                <li>
                    <p class="namepro clearfix">
                        <span class="nor">7</span><a
                            href="/product/2176" target="_blank">长白山(揽胜)</a>
                    </p>
                    <div class="proimg" style="display: none">
                        <a href="/product/2176" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/247/371/247371c93ee9f5d797294de8f52c2a56.jpg"></a>
                    </div>
                </li>                <li>
                    <p class="namepro clearfix">
                        <span class="nor">8</span><a
                            href="/product/2370" target="_blank">南京(十二钗薄荷)</a>
                    </p>
                    <div class="proimg" style="display: none">
                        <a href="/product/2370" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/b95/e77/b95e77ecfe6b8e9fd9c62826eb0d5630.jpg"></a>
                    </div>
                </li>                <li>
                    <p class="namepro clearfix">
                        <span class="nor">9</span><a
                            href="/product/2063" target="_blank">黄鹤楼(软雅韵)</a>
                    </p>
                    <div class="proimg" style="display: none">
                        <a href="/product/2063" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/bc1/4a3/bc14a3fb55746e44acced14b2e1a7aab.jpg"></a>
                    </div>
                </li>                <li>
                    <p class="namepro clearfix">
                        <span class="nor">10</span><a
                            href="/product/592" target="_blank">兰州(硬珍品)</a>
                    </p>
                    <div class="proimg" style="display: none">
                        <a href="/product/592" target="_blank"> <img
                            src="https://res1.yanyue.cn:7709/thumb/120x90/1bb/89c/1bb89cef4d85495eb9b06d0fd28a8450.jpg"></a>
                    </div>
                </li>            </ul>
        </div>
    </div>
</div>
<script>
 Move($('#nbprice_sub_title span'), $('#nbprice_product_list .tabcontent'), 'active', 'onmouseover');
 ListTab($('#nbpriceview li'), $('#nbpriceview .proimg'));
 ListTab($('#nbpricegood li'), $('#nbpricegood .proimg'));
</script>

<!--  4+ 开始 -->
<div class="mt10"></div><!--  4+ 结束 -->

<!--  4++ 开始 -->
<div class="mt10"></div><!--  4++ 结束 -->

  </div>
  <script>var productid = "3230";</script>
  <script src="/Public/js/product.js?ver=374ec06ab0294e3878c9ff559648a33f" type="text/javascript"></script>


</div>

<script>
$(document).ready(function(){
  var pingnum = "22";
  var pingacc = "67.74%";
  var heats = "940";

  if(pingnum > 0){
    $("#pingfenarea_pingnum").html("已有" + pingnum + "人参与评分");
    $("#pingfenarea_pingnum").parent().css("display" , "");
  }

  if(pingacc){
    $("#reliability").html("，可信度" + pingacc);
    $("#reliability").parent().css("display" , "");
  }

  if(heats){
    $("#whatisredu").html("热度:"+heats);
    $("#whatisredu").css("display" , "");
  }

  var cm_pl = parseInt("0");
  var cm_pb = parseInt("1");
  if(cm_pl > 0 && cm_pb > 0){
    $(".nomore").html(cm_pl + "条评论等待审核中，"+ cm_pb +"条评论违规已屏蔽");
  }
  else if(cm_pl > 0 && cm_pb == 0){
    $(".nomore").html(cm_pl + "条评论等待审核中");
  }
  else if(cm_pl == 0 && cm_pb > 0){
    $(".nomore").html(cm_pb + "条评论违规已屏蔽");
  }

  $("#productuserremarks").html("(内容来自纸质资料摘录、论坛帖子节选、以及网友提交，不代表本站观点，请自行甄别参考)");
});

var productid = "3230";

$("#product_areaprice_disbtn").click(function(){
  var url = "/product/ajax_areaprice";
  var data = {productid:productid};
  $.post(url , data , function(ret){
    if("undefined" != typeof(ret.areaprice_tb)){
      $("#product_areaprice_disarea").html(ret.areaprice_tb);
    }
  } , 'json');
  alertWin('各地价格','<div id="product_areaprice_disarea">加载中……</div>',600,600);
});

$("#product_contributor_disbtn").click(function(){
  var url = "/product/ajax_contributor";
  var data = {productid:productid};
  $.post(url , data , function(ret){
    if("undefined" != typeof(ret.contributor_tb)){
      $("#product_contributor_disarea").html(ret.contributor_tb);
    }
  } , 'json');
  alertWin('贡献者名单','<div id="product_contributor_disarea">加载中……</div>',430,310);
});

function expandregionprice(obj){
  if("expand" == $(obj).attr("exstatus")){
    $(obj).attr("exstatus" , "collapse");
    $(obj).find("span").css("display" , "none");
    $(obj).find("span").eq(0).css("display" , "");
    $(obj).prev().find("#areaprice_listbody").css("display" , "none");
    
    $(window).scrollTop($('#areaprice_mainarea').offset().top-300);
  }
  else {
    $(obj).attr("exstatus" , "expand");
    $(obj).find("span").css("display" , "none");
    $(obj).find("span").eq(1).css("display" , "");
    $(obj).prev().find("#areaprice_listbody").css("display" , "");
    
    if(null == regionlocationbyip || typeof(regionlocationbyip) == "undefined"){
      //$.post("/index/initcrlo" , {type:"ipregion"} , function(){} , 'json');
    }
  }
}

$("#reliability,#whatisredu").popover().click(function(e){
  var that = this;
  var disarea = $(that).attr('aria-describedby');
  var type = $(that).attr('data-whatistype');
  if($("#"+disarea).length > 0){
    var url = "/product/whatis";
    var data = {type:type};
    $.post(url , data , function(ret){
      var retstr = ret.result;
      $("#"+disarea).find(".popover-body").html(retstr);
    },'json');
  }

  e.preventDefault()
});

function barcode_more_click(obj){
  var moreobj = $(obj).nextAll();
  if("none" == $(obj).css("display")){
    moreobj.css("display","none");
  }
  else {
    moreobj.css("display","");
  }
  $(obj).css("display","none");
  return false;
}

function comment_subcomment_more_display(obj,parentid){
	$("li[id^='subcommentlistitem_"+parentid+"_']").css("display","");
	$(obj).parent().css("display","none");
	return false;
}
</script>

<div id="foot">
    <div id="footer">
        <div id="footer_content">

            <p>吸烟酗酒有害健康，<a href="https://bbs.yanyue.cn/misc.php?mod=faq&action=faq&id=8" target="_blank">烟悦含烟酒内容，不欢迎未成年人浏览</a>&nbsp;
            <a target=_blank href="https://bbs.yanyue.cn/thread-489242-1-1.html">国内互联网经营烟草制品非法，消费者勿盲目网购烟草制品</a>
            </p>
            
            <p>&copy; 2006-2025 <a href="https://www.yanyue.cn">烟悦网</a>&nbsp;
                <a href="https://beian.miit.gov.cn" target="_blank">ICP证京B2-20180970号</a>&nbsp;
                <a href="https://beian.miit.gov.cn" target="_blank">京ICP备07038409号</a>&nbsp;
                <a class="anbei" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502036239"><img src="https://beian.mps.gov.cn/img/logo01.dd7ff50e.png" class="l"/>京公网安备 11010502036239号</a>&nbsp;
                <a href="/index/switchw2m/target/m">移动版</a> | <a href="javascript:;" id="footer_gzhqrcode" title="微信搜索“烟悦”">微信公众号</a> | <a href="https://bbs.yanyue.cn/misc.php?mod=faq&action=faq&id=1" target="_blank">联系我们</a>
            </p>

        </div>
    </div>
</div>




<script src="/Public/js/search.js"></script>
<script>
$(document).ready(function(){
    var thtml = '<img src="https://www.yanyue.cn/Public/images/wxscode.webp" width=100><p>微信搜索“烟悦”</p>';
    $("#footer_gzhqrcode").attr("data-content" , thtml);
});

</script>

<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?09abe82d1cd5a1c4f81584b7035300ab";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-TXKFESR4BD"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-TXKFESR4BD');
</script> 
<script src="/Public/js/yanchecknew.js?ver=374ec06ab0294e3878c9ff559648a33f"></script>
</body>
</html>