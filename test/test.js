'use strict';
const fs = require('fs');
const getMetaData = require('../util');
const kindleParser = require('../index');
const expect = require('chai').expect;

describe('测试 getMetaData()', function () {
    it('测试输入：- 您在位置 #692-692的标注 | 添加于 2016年3月16日星期三 上午7:50:22', function () {
        var input = "- 您在位置 #692-692的标注 | 添加于 2016年3月16日星期三 上午7:50:22";
        var result = getMetaData(input);
        expect(result.datetime).to.equal('2016年3月16日星期三 上午7:50:22');
        expect(result.location).to.equal('#692-692');
        expect(result.type).to.equal('标注');
        expect(result.page).to.equal('');
    });
    it('测试输入：- 您在第 32 页（位置 #335-336）的标注 | 添加于 2016年4月1日星期五 下午9:16:27', function () {
        var input = "- 您在第 32 页（位置 #335-336）的标注 | 添加于 2016年4月1日星期五 下午9:16:27";
        var result = getMetaData(input);
        expect(result.datetime).to.equal('2016年4月1日星期五 下午9:16:27');
        expect(result.location).to.equal('#335-336');
        expect(result.type).to.equal('标注');
        expect(result.page).to.equal('32');
    });
});

// todo
describe('测试 kindleParser()', function () {
    it('输入 My Clippings.txt', function () {

    })
});