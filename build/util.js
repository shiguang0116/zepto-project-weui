'use strict';
const glob    = require('glob');
const path    = require('path');
const config  = require('./config.js');

const pageObj = {
    'wechat-menu'               : { type: 'index', title: '微信菜单' },

    'index'                     : { type: 'index', title:'原油行情' },
    'oil-news'                  : { type: 'index', title:'市场新闻' },
    'oil-news-info'             : { type: 'index', title:'市场新闻' },
    
    'store'                     : { type: 'index', title:'油品商城' },
    'store-createorder'         : { type: 'default', title:'委托采购' },
    'store-result'              : { type: 'default', title:'委托采购' },

    'logistics'                 : { type: 'index', title:'及时物流' },
    'logistics-result'          : { type: 'index', title:'及时物流' },
    
    'user-center'               : { type: 'index', title:'个人中心' },
    'user-info'                 : { type: 'default', title:'个人信息' },
    
    'user-order'                : { type: 'default', title:'我的订单' },
    'user-news'                 : { type: 'default', title:'我的消息' },
    'user-business'             : { type: 'default', title:'交易统计' },
    'user-enquiry'              : { type: 'default', title:'询价单' },
    'user-logistics'            : { type: 'default', title:'物流订单' },
    'user-logistics-info'       : { type: 'default', title:'订单详情' },
    'user-help'                 : { type: 'index', title:'帮助中心' },
    'user-help-info'            : { type: 'index', title:'帮助中心' },
    
    'password-login'            : { type: 'index', title:'登录' },
    'password-register'         : { type: 'index', title:'注册' },
    'password-resetpsw'         : { type: 'index', title:'重置密码' },

    'result-error'              : { type: 'index', title:'错误' },
    'result-404'                : { type: 'index', title:'错误' }
};

const util = {};

util.assetsPath = function (_path) {
    const assetsSubDirectory = config.assetsSubDirectory;
    return path.posix.join(assetsSubDirectory, _path);
};

util.title = function (name) {
    return pageObj[name] ? pageObj[name].title : '及时油';
};

util.urlType = function(name){
    return pageObj[name] ? pageObj[name].type : 'index';
};

util.getEntries = function (globPath) {
    let entries = {};
    // 读取src目录,并进行路径裁剪
    glob.sync(globPath).forEach(function (entry) {
        let tmp = entry.split('/').slice(-3);
        let moduleName = tmp.slice(1, 2);
        entries[moduleName] = entry;
    });
    return entries;
};

util.trim = function (str) { 
    return str.replace(/(^\s*)|(\s*$)/g, ""); 
};

module.exports = util;