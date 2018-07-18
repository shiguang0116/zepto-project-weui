'use strict';
import './index.less';
import util from'utils/util.js';

const page = {
    init : function(){
        this.bindEvent()
    },
    bindEvent: function(){
        $('.weui-switch-cp__box').tap(function(){
            if($('#radio').is(':checked')){
                $('.invoice').show();
                $('.noInvoice').hide();
            }else{
                $('.invoice').hide();
                $('.noInvoice').show();
            }
        })
    }
};

$(function(){
    page.init();
})
