'use strict';
import './index.less';
import util from'utils/util.js';

// 页面
const page = {
    formData: {
        Address: '湖北省',
        OilFrom: '',
        OilType: '',
        OilMark: '',
        OilLavel: '',
    },
    init : function(){
        weui.tab('#tab',{
            defaultIndex: 0,
            onChange: function(index){
                
            }
        });
        $('#showAddress').val(this.formData.Address);
        util.infinite();
        this.bindEvent();
    },
    bindEvent : function(){
        const _this = this;
        $('#cancel').tap(function(){
            _this.toggleSearch()
        })
        $('#submit').tap(function(){
            _this.toggleSearch()
        })
        $('.filter').tap(function(){
            _this.toggleSearch()
        })
        // 选择项
        $('#showFrom').tap(function () {
            weui.picker([{
                label: '中国石化',
                value: 0
            }, {
                label: '中国石油',
                value: 1
            }, {
                label: '中国中化',
                value: 2
            }], {
                onConfirm: function (res) {
                    $('#showFrom').val(res[0].label);
                    _this.formData.OilFrom = res[0].value;
                },
            });
        });
        $('#showType').tap(function () {
            weui.picker([{
                label: '普柴',
                value: 0
            }, {
                label: '车柴',
                value: 1
            }, {
                label: '汽油',
                value: 2
            }], {
                onConfirm: function (res) {
                    $('#showType').val(res[0].label);
                    _this.formData.OilType = res[0].value;
                },
            });
        });
        
    },
    toggleSearch: function(){
        const d = $('.search').css('display');
        $('.search').toggle(d == 'none');
    }
};

$(function(){
    page.init();
})
