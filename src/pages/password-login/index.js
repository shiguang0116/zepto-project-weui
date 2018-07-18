'use strict';
import './index.less';
import util from'utils/util.js';

const page = {
    time: '',
    init : function(){
        this.bindEvent();
    },
    bindEvent : function(){
        $('#submit').tap(function(){
            const result = util.validate($(this))
            if(result){
                console.log('ajax')
            }
        })
    }
};

$(function(){
    page.init();
})
