'use strict';
import './index.less';
import util from'utils/util.js';

// 页面
const page = {
    time: '',
    init : function(){
        this.bindEvent();
    },
    bindEvent : function(){
        const _this = this;
        $('.dropdown-btn').tap(function(){
            $('.dropdown-con').hide()
            $(this).siblings('.dropdown-con').toggle()
            return false;
        });
        $(window).tap(function(){
            $('.dropdown-con').hide()
        });
    }
};

$(function(){
    page.init();
})
