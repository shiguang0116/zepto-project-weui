'use strict';
import './index.less';
import util from 'utils/util.js';
import G2 from '@antv/g2';
import DataSet from '@antv/data-set';

// 页面
const page = {
    chartData:[],
    init : function(){
        $('#showStartDate').val(util.getOtherMonth({format:'yyyy-MM',MM:-6}));
        $('#showEndDate').val(util.getFormatDate({format:'yyyy-MM'}));
        this.getList();
        this.bindEvent();
    },
    chart: function () {
        var ds = new DataSet();
        var dv = ds.createView().source(this.chartData);
        dv.transform({
            type: 'fold',
            fields: ['普柴', '汽油', '车柴', '轻燃'], // 展开字段集
            key: 'key', // key字段
            value: 'value', // value字段
        });
        var chart = new G2.Chart({
            container: 'business_chart',
            forceFit: true,
            height: 400,
            padding: [30, 30, 80, 30]
        });
        chart.source(dv, {
            date: {
                range: [0, 1]
            }
        });
        chart.tooltip({
            crosshairs: {
                type: 'line'
            }
        });
        chart.axis('value', {
            label: {
                formatter: function formatter(val) {
                    return val
                }
            }
        });
        chart.line().position('date*value').color('key');//, ['#34B8C2', '#F56A01']
        chart.point().position('date*value').color('key').size(4).shape('circle').style({
            stroke: '#fff',
            lineWidth: 1
        });
        chart.render();
    },
    getList : function (){
        const _this = this;
        const result = util.validate($(this));
        if(result){
            // 有数据
            _this.chartData = [
                { date: '07-09', 'WTI': '74', 'BRENT': '78' },
                { date: '07-10', 'WTI': '72', 'BRENT': '75' },
                { date: '07-11', 'WTI': '71', 'BRENT': '74' },
                { date: '07-12', 'WTI': '73', 'BRENT': '79' },
            ];
            $('#points_chart').empty();
            _this.chart();
        }
    },
    bindEvent : function(){
        const _this = this;
        $('#showStartDate').tap(function () {
            weui.datePicker({
                start: new Date().getFullYear()-1,
                end: $('#showEndDate').val(),
                defaultValue: [new Date($('#showStartDate').val()).getFullYear(), new Date($('#showStartDate').val()).getMonth()+1, new Date($('#showStartDate').val()).getDate()],
                onConfirm: function (res) {
                    const value = util.getDateValue(res,1);
                    $('#showStartDate').val(value);
                    _this.getList();
                }
            });
        });
        $('#showEndDate').tap(function () {
            weui.datePicker({
                start: new Date().getFullYear()-1,
                end: new Date(),
                defaultValue: [new Date($('#showEndDate').val()).getFullYear(), new Date($('#showEndDate').val()).getMonth()+1, new Date($('#showEndDate').val()).getDate()],
                onConfirm: function (res) {
                    const value = util.getDateValue(res,1);
                    $('#showEndDate').val(value);
                    _this.getList();
                }
            });
        });
    }
};

$(function(){
    page.init();
})
