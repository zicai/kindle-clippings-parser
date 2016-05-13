'use strict';

const stream = require('stream');
const split2 = require('split2');
const combine = require('stream-combiner');
const getMetaData = require('./util');

module.exports = kindleParser;

function kindleParser() {
    return combine(
        split2(/==========\r\n/),
        parseClipping()
    )
}

function parseClipping() {
    var ts = stream.Transform({objectMode: true});
    ts._transform = function (data, enc, cb) {
        ts.push(parseItem(data));
        cb();
    };
    return ts;
}

/**
 * 提取每条 clipping 中的信息
 * @param itemStr
 * @returns {{bookname: string, snippet: string, datetime: string, location: string, type: string, page: string}}
 */
function parseItem(itemStr) {
    var result = {
        bookname: '',
        snippet: ''
    };
    var arr = itemStr.split('\r\n\r\n');
    result.snippet = arr[1].trim();
    var metaArray = arr[0].split('\r\n');
    result.bookname = metaArray[0].trim();
    var metaData = getMetaData(metaArray[1].trim());
    Object.assign(result, metaData);
    return result;
}



