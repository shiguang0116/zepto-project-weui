'use strict';
import './index.less';
import util from 'utils/util.js';

// 页面
const page = {
    time: '',
    init : function(){
        weui.tab('#news-tab',{
            defaultIndex: 0,
            onChange: function(index){
                
            }
        });
        this.bindEvent();
    },
    bindEvent : function(){
        const _this = this;
    }
};

$(function(){
    page.init();
})
