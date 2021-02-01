import { Component, OnInit } from '@angular/core';
/* import { Chart } from 'chart.js'; */
import { Chart } from 'angular-highcharts';



@Component({
  selector: 'app-gestion-riesgos',
  templateUrl: './gestion-riesgos.component.html',
  styleUrls: ['./gestion-riesgos.component.css']
})
export class GestionRiesgosComponent implements OnInit {

  /* public chart: any = null; */
  chart = new Chart({
    colors: ['#1F4E79'],
    title: {
        text: 'Proyección de actividades de revisión de debida diligencia'
    },

    xAxis: {
        categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    series: [{
        type: 'column',
        colorByPoint: true,
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        showInLegend: false
    }],
    credits: {
      enabled: false
  }
});

  chart2 = new Chart({
    title: {
        text: 'Segmentacion del riesgo PN segun analisis multifactorial'
    },
    legend: {
        /*layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        labelFormatter:
            function () {
            return this.y + '<br>' + this.name;
        }*/
        enabled: false
    },
    series: [{
        type: 'pie',
        size: '80%',
        innerSize: '60%',
        showInLegend: true,
        dataLabels: {
            //enabled: true
            formatter: function () {
                // display only if larger than 1
                return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
                    this.y + '%' : null;
            }

        },
        data: [{
            name: 'Moderado',
            y: 26,
            color: '#BAC4E2'
        }, {
            name: 'Alto',
            y: 20,
            color: '#8FA2D4'
        }, {
            name: 'Bajo',
            y: 11,
            color: '#4472C4'
        }, {
            name: 'Extremo',
            y: 6,
            color: '#3B64AD'
        }, {
            name: 'Medio',
            y: 37,
            color: '#315493'
        }]
    }],
    credits: {
      enabled: false
  }
});

  chart3 = new Chart({
    title: {
        text: 'Segmentacion del riesgo PN segun analisis multifactorial'
    },
    legend: {
        /*layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        labelFormatter:
            function () {
            return this.y + '<br>' + this.name;
        }*/
        enabled: false
    },
    series: [{
        type: 'pie',
        size: '80%',
        innerSize: '60%',
        showInLegend: true,
        dataLabels: {
            //enabled: true
            formatter: function () {
                // display only if larger than 1
                return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
                    this.y + '%' : null;
            }

        },
        data: [{
            name: 'Moderado',
            y: 26,
            color: '#BAC4E2'
        }, {
            name: 'Alto',
            y: 20,
            color: '#8FA2D4'
        }, {
            name: 'Bajo',
            y: 11,
            color: '#4472C4'
        }, {
            name: 'Extremo',
            y: 6,
            color: '#3B64AD'
        }, {
            name: 'Medio',
            y: 37,
            color: '#315493'
        }]
    }],
    credits: {
      enabled: false
  }
});

  constructor() { }

  ngOnInit(): void {
    /* this.chart = new Chart('realtime', {
      type: 'bar',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        datasets: [{
          label: '# of Votes',
          backgroundColor: '#B0BCCF',
          borderColor: 'rgba(31, 78, 121)',
          data: [29.9, 71.5, 106.4, 129.2, 144, 176, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
      },
      options: {
        tooltips: {
          enabled: true
        },
        legend: {
          display: false,
          position: 'bottom',
          labels: {
            fontColor: 'black'
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              fontColor: "black",
              beginAtZero: true
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: "black",
              beginAtZero: true
            }
          }]
        }
      }
    }); */
  }
}
