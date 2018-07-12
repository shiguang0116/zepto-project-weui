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
        
        $('#showDatePicker').tap(function () {
            weui.datePicker({
                start: 2017,
                end: new Date(),
                defaultValue: [new Date().getFullYear(), new Date().getMonth()+1, new Date().getDate()],
                onConfirm: function (res) {
                    var arr = [];
                    var value = '';
                    res.forEach((item,index) => {
                        index !=2 ? arr.push(item.value) : '';
                    });
                    value = arr.join('-');
                    $('#showDatePicker').val(value);
                }
            });
            $('.weui-picker__group').eq(2).remove()
        });
        $('#showAddress').tap(function () {
            weui.picker([
                {
                    label: '飞机票',
                    value: 0,
                    children: [
                        {
                            label: '经济舱',
                            value: 1,
                            children: [
                                {
                                    label: '经济舱',
                                    value: 1
                                },
                                {
                                    label: '商务舱',
                                    value: 2
                                }
                            ]
                        },
                        {
                            label: '商务舱',
                            value: 2,
                            children: [
                                {
                                    label: '经济舱',
                                    value: 1
                                },
                                {
                                    label: '商务舱',
                                    value: 2
                                }
                            ]
                        }
                    ]
                },
                {
                    label: '火车票',
                    value: 1,
                    children: [
                        {
                            label: '卧铺',
                            value: 1,
                            disabled: true, // 不可用
                            children: [
                                {
                                    label: '卧铺',
                                    value: 1,
                                    disabled: true // 不可用
                                },
                                {
                                    label: '坐票',
                                    value: 2
                                }
                            ]
                        },
                        {
                            label: '坐票',
                            value: 2,
                            children: [
                                {
                                    label: '卧铺',
                                    value: 1,
                                    disabled: true // 不可用
                                },
                                {
                                    label: '坐票',
                                    value: 2
                                }
                            ]
                        }
                    ]
                }], {
                   className: 'custom-classname',
                   container: 'body',
                   defaultValue: [1, 3],
                   onChange: function (result) {
                       console.log(result)
                   },
                   onConfirm: function (result) {
                       console.log(result)
                   },
                });
        });
        // 提交
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
