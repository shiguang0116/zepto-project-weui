'use strict';
import './index.less';
import util from'utils/util.js';

const page = {
    time: '',
    init : function(){
        this.bindEvent();
    },
    bindEvent : function(){
        $('#showDatePicker').tap(function () {
            weui.datePicker({
                start: new Date(),
                end: new Date().getFullYear()+1,
                defaultValue: [new Date().getFullYear(), new Date().getMonth()+1, new Date().getDate()],
                onConfirm: function (res) {
                    const value = util.getDateValue(res);
                    $('#showDatePicker').val(value);
                }
            });
        });
        $('#submit').tap(function(){
            const result = util.validate($(this));
            if(result){
                console.log('ajax');
            }
        });
    }
};

$(function(){
    page.init();
})
