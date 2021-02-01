import { Component, OnInit } from '@angular/core';

import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts/highcharts';

@Component({
  selector: 'app-control-estrategico',
  templateUrl: './control-estrategico.component.html',
  styleUrls: ['./control-estrategico.component.css']
})
export class ControlEstrategicoComponent implements OnInit {

  data1G1 = "[3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4]";
  data2G1 = "[0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2]";

  parsedData1G1 = JSON.parse(this.data1G1);
  parsedData2G1 = JSON.parse(this.data2G1);

  chart = new Chart({
    colors: ['#ED7D31', '#227447'],
    chart: {
        type: 'spline',

    },
    title: {
        text: 'Frecuencia de reportes de análisis',
        style: {
            color: '#227447',
            fontWeight: 'bold'
        }
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        type: 'datetime',
        minTickInterval: 28 * 24 * 3600 * 1000,
        tickInterval: 24 * 3600 * 1000 * 31,
        tickAmount: 12,
        labels: {
            overflow: 'justify',
            rotation: 20,
            style: {
                fontSize: '10px',
                width: 20,
            }
        }
    },
    yAxis: {
        title: {
            text: ''
        },
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null,
        plotBands: [{ // Light air
            from: 0.3,
            to: 1.5,
            color: 'rgba(34, 116, 71, 0.1)',
            label: {
                text: '',
                style: {
                    color: '#606060'
                }
            }
        }, { // Light breeze
            from: 1.5,
            to: 3.3,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: '',
                style: {
                    color: '#606060'
                }
            }
        }, { // Gentle breeze
            from: 3.3,
            to: 5.5,
            color: 'rgba(34, 116, 71, 0.1)',
            label: {
                text: '',
                style: {
                    color: '#606060'
                }
            }
        }, { // Moderate breeze
            from: 5.5,
            to: 8,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: '',
                style: {
                    color: '#606060'
                }
            }
        }, { // Fresh breeze
            from: 8,
            to: 11,
            color: 'rgba(34, 116, 71, 0.1)',
            label: {
                text: '',
                style: {
                    color: '#606060'
                }
            }
        }, { // Strong breeze
            from: 11,
            to: 14,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: '',
                style: {
                    color: '#606060'
                }
            }
        }, { // High wind
            from: 14,
            to: 15,
            color: 'rgba(34, 116, 71, 0.1)',
            label: {
                text: '',
                style: {
                    color: '#606060'
                }
            }
        }]
    },
    tooltip: {
        valueSuffix: ' '
    },
    plotOptions: {
        spline: {
            lineWidth: 4,
            states: {
                hover: {
                    lineWidth: 5
                }
            },
            marker: {
                enabled: false
            },
            pointInterval: 24 * 3600 * 1000 * 31, // one hour
            pointStart: Date.UTC(2018, 0, 1, 0, 0, 0)
        }
    },
    series: [{
        type: 'spline',
        name: 'Operaciones  Inusuales',
        data: this.parsedData1G1
    }, {
      type: 'spline',
        name: 'Operaciones Sospechosas',
        data: this.parsedData2G1
    }],
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    },
    credits: {
      enabled: false
  }
});


  data1G2 = "[3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4, 3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4]";
  data2G2 = "[0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2]";

  parsedData1G2 = JSON.parse(this.data1G2);
  parsedData2G2 = JSON.parse(this.data2G2);

  chart2 = new Chart({
    colors: ['#ED7D31', '#227447'],
    chart: {
        type: 'spline',

    },
    title: {
        text: 'Importe de reportes de análisis',
        style: {
            color: '#227447',
            fontWeight: 'bold'
        }
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        type: 'datetime',
        minTickInterval: 28 * 24 * 3600 * 1000,
        tickInterval: 24 * 3600 * 1000 * 31,
        tickAmount: 12,
        labels: {
            overflow: 'justify',
            rotation: 20,
            style: {
                fontSize: '10px',
                width: 20,
            }
        }
    },
    yAxis: {
        title: {
            text: ''
        },
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null,
        plotBands: [{ // Light air
            from: 0.3,
            to: 1.5,
            color: 'rgba(34, 116, 71, 0.1)',
            label: {
                text: '',
                style: {
                    color: '#606060'
                }
            }
        }, { // Light breeze
            from: 1.5,
            to: 3.3,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: '',
                style: {
                    color: '#606060'
                }
            }
        }, { // Gentle breeze
            from: 3.3,
            to: 5.5,
            color: 'rgba(34, 116, 71, 0.1)',
            label: {
                text: '',
                style: {
                    color: '#606060'
                }
            }
        }, { // Moderate breeze
            from: 5.5,
            to: 8,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: '',
                style: {
                    color: '#606060'
                }
            }
        }, { // Fresh breeze
            from: 8,
            to: 11,
            color: 'rgba(34, 116, 71, 0.1)',
            label: {
                text: '',
                style: {
                    color: '#606060'
                }
            }
        }, { // Strong breeze
            from: 11,
            to: 14,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: '',
                style: {
                    color: '#606060'
                }
            }
        }, { // High wind
            from: 14,
            to: 15,
            color: 'rgba(34, 116, 71, 0.1)',
            label: {
                text: '',
                style: {
                    color: '#606060'
                }
            }
        }]
    },
    tooltip: {
        valueSuffix: ' '
    },
    plotOptions: {
        spline: {
            lineWidth: 4,
            states: {
                hover: {
                    lineWidth: 5
                }
            },
            marker: {
                enabled: false
            },
            pointInterval: 24 * 3600 * 1000 * 31, // one hour
            pointStart: Date.UTC(2018, 0, 1, 0, 0, 0)
        }
    },
    series: [{
        type: 'spline',
        name: 'Operaciones  Inusuales',
        data: this.parsedData1G2
    }, {
        type: 'spline',
        name: 'Operaciones Sospechosas',
        data: this.parsedData2G2
    }],
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    },
    credits: {
      enabled: false
  }
});


  constructor() { }

  ngOnInit(): void {
  }

}
