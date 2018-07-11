'use strict';
import './index.less';
import util from'utils/util.js';

// 页面
const page = {
    time: '',
    init : function(){
        this.getList();
        this.bindEvent();
    },
    getList : function(){

    },
    bindEvent : function(){
        const _this = this;
        $('#logout').tap(function () {
            weui.confirm('退出后您将无法查看交易信息以及采购油品。', function(){ 
                util.toLogin()
            }, { 
                title: '确定退出吗' 
            });
        });
    }
};

$(function(){
    page.init();
})
