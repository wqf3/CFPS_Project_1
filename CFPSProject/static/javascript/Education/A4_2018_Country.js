// A4_2018_Country

var dom = document.getElementById("A4_2018_Country");
var myChart_A4_2018_Country = echarts.init(dom);
var app = {};

var option;

option = {
    title: {
        text: '2018年乡村 最高学历统计',
        left: 'center',
    },
    tooltip: {
        trigger: 'item'
    },
    series: [
        {
            name: '最高学历',
            type: 'pie',
            radius: ['20%', '40%'],
            center: ['55%', '50%'],
            avoidLabelOverlap: true,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '15',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: true,
                length: 30
            },
            label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n {b|{b} : }{c} \n {per|{d}%}  ',
                backgroundColor: '#F6F8FC',
                borderColor: '#8C8D8E',
                borderWidth: 1,
                borderRadius: 4,
                rich: {
                    a: {
                        color: '#6E7079',
                        lineHeight: 22,
                        align: 'center'
                    },
                    hr: {
                        borderColor: '#8C8D8E',
                        width: '100%',
                        borderWidth: 1,
                        height: 0
                    },
                    b: {
                        color: '#4C5058',
                        fontSize: 10,
                        fontWeight: 'bold',
                        lineHeight: 25
                    },
                    per: {
                        color: '#fff',
                        backgroundColor: '#4C5058',
                        padding: [3, 4],
                        borderRadius: 4
                    }
                }
            },
            data: [
                { value: 3203, name: '文盲/半文盲' },
                { value: 2943, name: '小学' },
                { value: 3691, name: '初中' },
                { value: 1486, name: '高中/中专/技校/职高' },
                { value: 387, name: '大专' },
                { value: 206, name: '本科及以上' }
            ]
        }
    ]
};

if (option && typeof option === 'object') {
    myChart_A4_2018_Country.setOption(option);
}