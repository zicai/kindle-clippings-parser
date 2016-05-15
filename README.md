# kindle-clippings-parser
parse kindle clippings to json

[![Build Status](https://travis-ci.org/zicai/kindle-clippings-parser.svg?branch=master)](https://travis-ci.org/zicai/kindle-clippings-parser)
[![Coverage Status](https://coveralls.io/repos/github/zicai/kindle-clippings-parser/badge.svg?branch=master)](https://coveralls.io/github/zicai/kindle-clippings-parser?branch=master)


## Installation

```
npm install @zicai/kindle-clippings-parser
```

## Usage

```
var fs = require('fs'),
    kindleClippings = require('@zicai/kindle-clippings-parser');

fs.createReadStream('./My Clippings.txt')
    .pipe(kindleClippings())
    .on('data', function (data) {
        console.log(data);
    });
```

返回结果示例：

```
{
    bookname: '送你一颗子弹 (刘瑜)',
    snippet: '一个人就像一支队伍，对着自己的头脑和心灵招兵买马，不气馁，有召唤，爱自由。”',
    datetime: '2016年4月12日星期二 上午7:56:12',
    location: '#33-34',
    type: '标注',
    page: '290'
    }
    ...
```