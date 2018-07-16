'use strict';
import './index.less';
import util from 'utils/util.js';

// 页面
const page = {
    init : function(){
        this.getList();
        this.bindEvent();
    },
    getList : function (){
        const _this = this;
        const result = util.validate($(this));
        if(result){
            
        }
    },
    bindEvent : function(){
        const _this = this;
        
    }
};

$(function(){
    page.init();
})
