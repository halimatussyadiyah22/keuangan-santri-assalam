import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  data: any;
  bar : any;

  options: any;
  optionbar: any;


  selectedOption: string | undefined;
  selected: string | undefined;


  constructor(
    private router: Router
  ) {
  }

  items: MenuItem[] | undefined;
  bc: MenuItem[] | undefined;




  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');


    this.items = [
      {label: 'Syahriah'},
      {label: 'Kas'},
      {label: 'Bangunan'},
      {label: 'Saku'},
    ];
  }
  onSelectChange() {
    if (this.selectedOption === 'bulan') {
      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: '#0364FF',
            borderColor: '#0364FF',
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: 'My Second dataset',
            backgroundColor: '#D2B5A8',
            borderColor: '#D2B5A8',
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      };

      this.options = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            labels: {
              color: '#00000'
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#00000',
              font: {
                weight: 500
              }
            },
            grid: {
              color: '#00000',
              drawBorder: false
            }
          },
          y: {
            ticks: {
              color: '#00000'
            },
            grid: {
              color: '#00000',
              drawBorder: false
            }
          }
        }
      };
    } else if (this.selectedOption === 'tahun') {
      this.data = {
        labels: ['2022', '2023', '2024', '2025', '2026', '2027', '2028'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: '#0364FF',
            borderColor: '#0364FF',
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: 'My Second dataset',
            backgroundColor: '#D2B5A8',
            borderColor: '#D2B5A8',
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      };

      this.options = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            labels: {
              color: '#00000'
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#00000',
              font: {
                weight: 500
              }
            },
            grid: {
              color:'#CCCCCC'
        ,
              drawBorder: false
            }
          },
          y: {
            ticks: {
              color: '#00000'
            },
            grid: {
              color: '#CCCCCC',
              drawBorder: false
            }
          }
        }
      };
    }
  }
  barchart() {
    if (this.selected === 'bulan_bar') {
      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: '#0364FF',
            borderColor: '#0364FF',
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: 'My Second dataset',
            backgroundColor: '#D2B5A8',
            borderColor: '#D2B5A8',
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      };
      // Opsi untuk pilihan bulan
    } else if (this.selected === 'tahun_bar') {
      this.data = {
        labels: ['2022', '2023', '2024', '2025', '2026', '2027', '2028'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: '#0364FF',
            borderColor: '#0364FF',
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: 'My Second dataset',
            backgroundColor: '#D2B5A8',
            borderColor: '#D2B5A8',
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      };
      // Opsi untuk pilihan tahun
    }
  }
}


