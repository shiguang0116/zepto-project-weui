'use strict';
import './index.less';
import util from 'utils/util.js';

const nav = {
    init : function(){
        this.bindEvent();
    },
    bindEvent : function(){
        const _this = this;
        $('.weui-tabbar__item').tap(function () {
            $(this).addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
        });
    }
};

export default nav.init();