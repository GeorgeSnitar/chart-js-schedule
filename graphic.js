
let ctx = document.getElementById('graphic');
let firstNumber = `133 920 `;
let secondNumber = '772 862';
let thirdNumber = '213 816';
let money = "₽/год";

Chart.defaults.global.defaultFontStyle = '900';
Chart.defaults.global.defaultFontSize = '13';
Chart.defaults.global.defaultFontFamily = "PTSans, sans-serif";
// Chart.defaults.money.defaultFontStyle = "400";
let chart = new Chart(ctx, {
    type: 'bar',
    data:{
        labels:[[firstNumber, money],[secondNumber,money ],[thirdNumber, money]],
        datasets: [
            {
                label: '',
                backgroundColor: ['#4bbe9c', '#79797a', '#c9d5e4'],
                data:[133920,86400,180000],
            },
            {
                label: '',
                backgroundColor: ['', '#858586', '#e7edf5'],
                data: [, 41400, 33816],
            },
            {
                label: '',
                backgroundColor: ['', '#919192', ''],
                data: [ , 180000, ]
            },
            {
                label: '',
                backgroundColor: ['', '#9e9e9f', ''],
                data: [ , 94500, ]
            },
            {
                label: '',
                backgroundColor: ['', '#a9a9aa', ''],
                data: [ , 70970, ]
            },
            {
                label: '',
                backgroundColor: ['', '#c2c2c3', ''],
                data: [ , 18600, ]
            },
            {
                label: '',
                backgroundColor: ['', '#ceced0', ''],
                data: [ , 104520, ]
            },
            {
                label: '',
                backgroundColor: ['', '#d9d9db', ''],
                data: [ , 120000, ]
            },
            {
                label: '',
                backgroundColor: ['', '#e6e6e8', ''],
                data: [ , 16800, ]
            },
            {
                label: '',
                backgroundColor: ['', '#f2f2f4', ''],
                data: [, 40572, ],
            },
        ]
    },
    options: {
        tooltips: {
            mode: 'null'
        },
        legend: {
            display: false,
            position: 'right',
            
        },
        scales: {
            scaleLabel: {
                display  : true,
                fontSize : 8,
                fontColor: "#4a4a4a"
            },
            xAxes: [{
                stacked: true,
                barThickness: 70,
                gridLines: {
                    display: false,
                },  
                ticks: {
                    display: true,
                },
            }],
            yAxes: [{
                stacked: true,
                gridLines: {
                    display: true,
                    drawBorder: false,
                },
                ticks: {
                    display: false
                }
            }]
        },
        responsive: true,
        maintainAspectRatio: false,
     
        plugins: {
            datalabels: {
                align: 'end',
              anchor: 'end',
              backgroundColor: null,
              borderColor: null,
              borderRadius: 4,
              borderWidth: 1,
            }
          }
    }

})



let ctx2 = document.getElementById('graphic2');
let firstNumber2 = `42 120 `;
let secondNumber2 = '416 717 ';
let thirdNumber2 = '213 816 ';
let money2 = "₽/год";


let chart2 = new Chart(ctx2, {
    type: 'bar',
    data:{
        labels:[[firstNumber2, money2],[secondNumber2, money2],[thirdNumber2, money2]],
        datasets: [
            {
                label: '',
                backgroundColor: ['#4bbe9c', '#79797a', '#c9d5e4'],
                data:[42120,,180000],
            },
            {
                label: '',
                backgroundColor: ['', '#858586', '#e7edf5'],
                data: [, 21600, 33816],
            },
            {
                label: '',
                backgroundColor: ['', '#919192', ''],
                data: [ , 180000, ]
            },
            {
                label: '',
                backgroundColor: ['', '#ceced0', ''],
                data: [ , 87745, ]
            },
            {
                label: '',
                backgroundColor: ['', '#d9d9db', ''],
                data: [ , 70000, ]
            },
            {
                label: '',
                backgroundColor: ['', '#e6e6e8', ''],
                data: [ , 16800, ]
            },
            {
                label: '',
                backgroundColor: ['', '#f2f2f4', ''],
                data: [, 40572, ],
            },
        ]
    },
    options: {
        tooltips: {
            mode: 'null'
        },
        legend: {
            display: false,
            position: 'right',
            
        },
        scales: {
            xAxes: [{
                stacked: true,
                barThickness: 70,
                gridLines: {
                    display: false,
                },  
                ticks: {
                    display: true
                },
            }],
            yAxes: [{
                stacked: true,
                gridLines: {
                    display: true,
                    drawBorder: false,
                },
                ticks: {
                    display: false
                }
            }]
        },
        responsive: true,
        maintainAspectRatio: false,
     
        plugins: {
            datalabels: {
                align: 'end',
              anchor: 'end',
              backgroundColor: null,
              borderColor: null,
              borderRadius: 4,
              borderWidth: 1,
            }
          }
    }

})


let ctx3 = document.getElementById('graphic3');
let firstNumber3 = `19 440 `;
let secondNumber3 = '113 672';
let thirdNumber3 = '33 816';
let money3 = "₽/год";


let chart3 = new Chart(ctx3, {
    type: 'bar',
    data:{
        labels:[[firstNumber3,money3],[secondNumber3, money3],[thirdNumber3, money3]],
        datasets: [
            {
                label: '',
                backgroundColor: ['#4bbe9c', '#79797a', '#c9d5e4'],
                data:[19440,,],
            },
            {
                label: '',
                backgroundColor: ['', '#858586', '#e7edf5'],
                data: [, 6300, 33816],
            },
            {
                label: '',
                backgroundColor: ['', '#d9d9db', ''],
                data: [ , 50000, ]
            },
            {
                label: '',
                backgroundColor: ['', '#e6e6e8', ''],
                data: [ , 16800, ]
            },
            {
                label: '',
                backgroundColor: ['', '#f2f2f4', ''],
                data: [, 40572, ],
            },
        ]
    },
    options: {
        tooltips: {
            mode: 'null'
        },
        legend: {
            display: false,
            position: 'right',
            
        },
        scales: {
            xAxes: [{
                stacked: true,
                barThickness: 70,
                gridLines: {
                    display: false,
                },  
                ticks: {
                    display: true
                },
            }],
            yAxes: [{
                stacked: true,
                gridLines: {
                    display: true,
                    drawBorder: false,
                },
                ticks: {
                    display: false
                }
            }]
        },
        responsive: true,
        maintainAspectRatio: false,
     
        plugins: {
            datalabels: {
                align: 'end',
              anchor: 'end',
              backgroundColor: null,
              borderColor: null,
              borderRadius: 4,
              borderWidth: 1,
            }
          }
    }

})



let ctx4 = document.getElementById('graphic4');
let firstNumber4 = `11 800 `;
let secondNumber4 = '57 372 ';
let thirdNumber4 = '33 816 ';
let money4 = "₽/год";


let chart4 = new Chart(ctx4, {
    type: 'bar',
    data:{
        labels:[[firstNumber4,money4],[secondNumber4, money4],[thirdNumber4, money4]],
        datasets: [
            {
                label: '',
                backgroundColor: ['#4bbe9c', '#79797a', '#c9d5e4'],
                data:[11800,,],
            },
            {
                label: '',
                backgroundColor: ['', '#858586', '#e7edf5'],
                data: [, , 33816],
            },
            {
                label: '',
                backgroundColor: ['', '#e6e6e8', ''],
                data: [ , 16800, ]
            },
            {
                label: '',
                backgroundColor: ['', '#f2f2f4', ''],
                data: [, 40572, ],
            },
        ]
    },
    options: {
        tooltips: {
            mode: 'null'
        },
        legend: {
            display: false,
            position: 'right',
            
        },
        scales: {
            xAxes: [{
                stacked: true,
                barThickness: 70,
                gridLines: {
                    display: false,
                },  
                ticks: {
                    display: true
                },
            }],
            yAxes: [{
                stacked: true,
                gridLines: {
                    display: true,
                    drawBorder: false,
                },
                ticks: {
                    display: false
                }
            }]
        },
        responsive: true,
        maintainAspectRatio: false,
     
        plugins: {
            datalabels: {
                align: 'end',
              anchor: 'end',
              backgroundColor: null,
              borderColor: null,
              borderRadius: 4,
              borderWidth: 1,
            }
          }
    }

})