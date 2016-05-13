'use strict';

/**
 * 提取 clipping 时间、位置、类型
 * @param {string} metaStr
 * @return {{datetime: string, location: string, type: string, page: string}}
 * */
function getMetaData(metaStr) {
    // metaStr 可能值
    // "- 您在位置 #692-692的标注 | 添加于 2016年3月16日星期三 上午7:50:22"
    // "- 您在第 32 页（位置 #335-336）的标注 | 添加于 2016年4月1日星期五 下午9:16:27"
    var timeRe = /添加于 (.*)$/;
    var pageRe = /第 (\d+) 页/;
    var locationRe = /(#\d+-\d+)/;
    var typeRe = /的(.*) \|/;
    var result = {
        datetime: '',
        location: '',
        type: '',
        page: ''
    };

    var tmp = timeRe.exec(metaStr);
    if (Array.isArray(tmp)) {
        result.datetime = tmp[1];
    }

    tmp = locationRe.exec(metaStr);
    if (Array.isArray(tmp)) {
        result.location = tmp[1];
    }

    tmp = typeRe.exec(metaStr);
    if (Array.isArray(tmp)) {
        result.type = tmp[1].trim();
    }

    tmp = pageRe.exec(metaStr);
    if (Array.isArray(tmp)) {
        result.page = tmp[1];
    }

    return result;
}

module.exports = getMetaData;