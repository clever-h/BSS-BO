////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from 'react';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import Chart from 'react-apexcharts';
import fa from 'apexcharts/dist/locales/fa.json';

////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class CRM extends React.Component {
  state = {
    SeriesTotalProfit: [87, 54, 32, 10],
    OptionsTotalProfit: {
      chart: {
        type: 'radialBar',
        stacked: true,
        toolbar: {
          show: true,
          autoSelected: 'pan',
        },
        locales: [fa],
        defaultLocale: 'fa',
        fontFamily: 'IranSans',
        foreColor: 'var(--mp-theme-color)',
      },
      colors: ['#3CCF4E', '#fb8500', '#3CSDSE', '#fb1500'],
      plotOptions: {
        enabled: true,
        radialBar: {
          startAngle: -150,
          endAngle: 150,
          dataLabels: {
            name: {
              fontSize: '16px',
              color: 'var(--mp-theme-color)',
              offsetY: -10,
            },
            value: {
              offsetY: 10,
              fontSize: '20px',
              color: 'var(--mp-theme-color)',
              formatter: function (val) {
                return val + '%';
              },
            },
          },
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          shadeIntensity: 0.3,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91],
        },
      },
      stroke: {
        dashArray: 4,
        colors: ['var(--mp-theme-color)'],
      },
      yaxis: {
        opposite: true,
      },
    },
    SeriesTotalGrowth: [
      {
        name: 'رشد کل',
        data: [60, 30, 90, 20, 121, 54],
      },
    ],
    OptionsTotalGrowth: {
      chart: {
        type: 'line',
        zoom: {
          enabled: false,
        },
        stacked: true,
        toolbar: {
          show: true,
          autoSelected: 'pan',
        },
        locales: [fa],
        defaultLocale: 'fa',
        fontFamily: 'IranSans',
        foreColor: 'var(--mp-theme-color)',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
        show: true,
        colors: ['#fb8500'],
      },
      grid: {
        row: {
          colors: ['transparent'],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ['شهریور', 'مرداد', 'تیر', 'خرداد', 'اردیبهشت', 'فروردین'],
      },
      yaxis: {
        opposite: true,
      },
    },
    SeriesProjectTimeline: [
      {
        data: [85, 98, 43, 120],
      },
    ],
    OptionsProjectTimeline: {
      chart: {
        type: 'bar',
        stacked: true,
        toolbar: {
          show: true,
          autoSelected: 'pan',
        },
        locales: [fa],
        defaultLocale: 'fa',
        fontFamily: 'samim',
        foreColor: 'var(--mp-theme-color)',
      },
      plotOptions: {
        bar: {
          barHeight: '100%',
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: 'bottom',
          },
        },
      },
      dataLabels: {
        enabled: true,
        textAnchor: 'start',
        offsetX: 15,
        dropShadow: {
          enabled: true,
        },
      },
      stroke: {
        width: 1,
      },
      xaxis: {
        categories: ['سعید', 'ستاره', 'حمیدرضا ', 'پاشا'],
      },
      yaxis: {
        opposite: true,
      },
    },
    SeriesSocialNetworkVisits: [76, 37, 61, 90],
    OptionsSocialNetworkVisits: {
      chart: {
        type: 'radialBar',
        stacked: true,
        toolbar: {
          show: true,
          autoSelected: 'pan',
        },
        locales: [fa],
        defaultLocale: 'fa',
        fontFamily: 'IranSans',
        foreColor: 'var(--mp-theme-color)',
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 250,
          hollow: {
            margin: 5,
            size: '11%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
        },
      },
      colors: ['#3CCF4E', '#0084ff', '#D73333', '#fb8500'],
      labels: ['پیام رسان بله', 'تیکت', 'ایمیل', 'تلفن'],
      legend: {
        show: true,
        floating: true,
        fontSize: '14px',
        position: 'right',
        fontFamily: 'samim',
        offsetX: 210,
        offsetY: 12,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0,
        },
        formatter: function (seriesName, opts) {
          return (
            ' ' + seriesName + ' :  ' + opts.w.globals.series[opts.seriesIndex]
          );
        },
        itemMargin: {
          vertical: 3,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
      yaxis: {
        opposite: true,
      },
    },
    SeriesExternalLinks: [
      {
        name: 'زمان آنکالی',
        data: [10, 13, 14, 5, 3, 5],
      },
      {
        name: 'زمان اداری',
        data: [-30, -40, -20, -15, -64, -20],
      },
    ],
    OptionsExternalLinks: {
      chart: {
        type: 'bar',
        stacked: true,
        toolbar: {
          show: true,
          autoSelected: 'pan',
        },
        locales: [fa],
        defaultLocale: 'fa',
        fontFamily: 'samim',
        foreColor: 'var(--mp-theme-color)',
      },
      colors: ['#666cff', '#fb8500'],
      plotOptions: {
        bar: {
          horizontal: false,
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        width: 1,
        colors: ['var(--mp-theme-color)'],
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      yaxis: {
        opposite: true,
      },
      tooltip: {
        shared: false,
        x: {
          formatter: function (val) {
            return val;
          },
        },
        y: {
          formatter: function (val) {
            return Math.abs(val) + '%';
          },
        },
      },
    },
    SeriesInternalLinks: [
      {
        name: 'تجزیه و تحلیل کار سعید ',
        data: [62.5, 46.5, 47.6, 58.8, 38.5, 52.1],
      },
      {
        name: 'تجزیه و تحلیل کار پاشا ',
        data: [-25.6, -20.5, -50.6, -41.8, -35.4, -32.2],
      },
    ],
    OptionsInternalLinks: {
      chart: {
        type: 'bar',
        stacked: true,
        toolbar: {
          show: true,
          autoSelected: 'pan',
        },
        locales: [fa],
        defaultLocale: 'fa',
        fontFamily: 'IranSans',
        foreColor: 'var(--mp-theme-color)',
      },
      colors: ['#fb8500', '#666cff'],
      plotOptions: {
        bar: {
          horizontal: false,
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        width: 1,
        colors: ['var(--mp-theme-color)'],
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      yaxis: [
        {
          opposite: true,
        },
      ],
      tooltip: {
        shared: false,
        x: {
          formatter: function (val) {
            return val;
          },
        },
        y: {
          formatter: function (val) {
            return Math.abs(val) + '%';
          },
        },
      },
    },
    yaxis: {
      opposite: true,
    },

    series7: [
      {
        name: 'بهمن ماه',
        data: [21, 22, 10, 28, 16, 13],
      },
    ],
    series6: [
      {
        name: 'زمان اداری',
        data: [
          {
            x: 'حمیدرضا رفیعی',
            y: [1, 5],
          },
          {
            x: 'سعید بطحایی',
            y: [4, 6],
          },
          {
            x: 'ستاره احمدی',
            y: [5, 8],
          },
          {
            x: 'پاشا کوراغلی',
            y: [3, 11],
          },
        ],
      },
      {
        name: 'زمان آنکالی',
        data: [
          {
            x: 'تیم1',
            y: [2, 6],
          },
          {
            x: 'تیم2',
            y: [1, 3],
          },
          {
            x: 'تیم3',
            y: [7, 8],
          },
          {
            x: 'تیم4',
            y: [5, 9],
          },
        ],
      },
    ],
    options6: {
      chart: {
        toolbar: {
          show: true,
          autoSelected: 'pan',
        },
        locales: [fa],
        defaultLocale: 'fa',
        fontFamily: 'samim',
        foreColor: 'var(--mp-theme-color)',
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: true,
      },
      yaxis: {
        opposite: true,
      },
    },
    options7: {
      chart: {
        events: {
          click: function (chart, w, e) {},
        },
        toolbar: {
          show: true,
          autoSelected: 'pan',
        },
        locales: [fa],
        defaultLocale: 'fa',
        fontFamily: 'samim',
        foreColor: 'var(--mp-theme-color)',
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          ['Bss Access'],
          ['Bss Problem'],
          ['Business Process'],
          ['Report Problem'],
          ['New Feature '],
          ['Provisioning Error'],
        ],
        labels: {
          style: {
            fontSize: '12px',
          },
        },
      },
      yaxis: {
        opposite: true,
      },
    },
  };

  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="row col-xl-12">
              <section className="row col-xl-12 d-flex flex-row">
                <section className="col-xl-8 p-2">
                  <section className="row col-xl-12 bg-t-o b-r-10">
                    <section className="col-xl-8">
                      <section className="row col-xl-12 pr-3 pt-3">
                        <h3> گزارش کار کارمندان پشتیبانی</h3>
                      </section>
                      <section className="row col-xl-12 pr-3 pt-4"></section>
                    </section>
                    <section className="row col-xl-12 p-3 d-flex align-items-center justify-content-center h-377">
                      <Chart
                        options={this.state.OptionsProjectTimeline}
                        series={this.state.SeriesProjectTimeline}
                        type="bar"
                        width="100%"
                        height="100%"
                      />
                    </section>
                  </section>
                </section>

                <section className="col-xl-4 p-2">
                  <section className="col-xl-12 bg-t-o b-r-10">
                    <section className="row col-xl-12 pr-3 pt-3">
                      <h3>گزارش روش های پیگیری </h3>
                    </section>

                    <section className="row col-xl-12 d-flex align-items-center justify-content-center p-3 h-400">
                      <Chart
                        options={this.state.OptionsSocialNetworkVisits}
                        series={this.state.SeriesSocialNetworkVisits}
                        type="radialBar"
                        width="100%"
                        height="100%"
                      />
                    </section>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>

        <section className="row">
          <section className="row">
            <section className="col-xl-4 p-2">
              <section className="bg-t-o b-r-10">
                <section className="row pr-2 pb-4 pt-4">
                  <h3>گزارش تیم ها درخواست دهنده</h3>
                </section>

                <section className="row d-flex pr-2 pb-1 flex-column">
                  <section className="d-flex align-items-start justify-content-start">
                    <h2 className="m-0 pl-3">2,554</h2>

                    <span className="bg-success b-r-10 p-1">34.6%+</span>
                  </section>

                  <span className="pt-2">گزارش 30 روز گذشته</span>
                </section>

                <section className="row bt pt-3 pb-3 mr-4 ml-4">
                  <section className="col-6">
                    <span>هماهنگ کننده نصب</span>
                  </section>

                  <section className="col-4">
                    <span>1,5623</span>
                  </section>

                  <section className="col-2">
                    <span className="pl-1">55%</span>

                    <KeyboardArrowUp className="text-success" />
                  </section>
                </section>

                <section className="row bt pt-3 pb-3 mr-4 ml-4">
                  <section className="col-6">
                    <span>تیم فروش</span>
                  </section>

                  <section className="col-4">
                    <span>667</span>
                  </section>

                  <section className="col-2">
                    <span className="pl-1">14%</span>

                    <KeyboardArrowDown className="text-danger" />
                  </section>
                </section>

                <section className="row bt pt-3 pb-3 mr-4 ml-4">
                  <section className="col-6">
                    <span>تیم NOC</span>
                  </section>

                  <section className="col-4">
                    <span>443</span>
                  </section>

                  <section className="col-2">
                    <span className="pl-1">78%</span>

                    <KeyboardArrowUp className="text-success" />
                  </section>
                </section>

                <section className="row bt pt-3 pb-3 mr-4 ml-4">
                  <section className="col-6">
                    <span>تیم فروش برساد</span>
                  </section>

                  <section className="col-4">
                    <span>757</span>
                  </section>

                  <section className="col-2">
                    <span className="pl-1">12%</span>

                    <KeyboardArrowUp className="text-success" />
                  </section>
                </section>

                <section className="row bt pt-3 pb-3 mr-4 ml-4">
                  <section className="col-6">
                    <span>پشتیبانی مشتریان</span>
                  </section>

                  <section className="col-4">
                    <span>165</span>
                  </section>

                  <section className="col-2">
                    <span className="pl-1">24%</span>

                    <KeyboardArrowDown className="text-danger" />
                  </section>
                </section>

                <section className="row bt pt-3 pb-3 mr-4 ml-4">
                  <section className="col-6">
                    <span>تیم نصب و نگهداری</span>
                  </section>

                  <section className="col-4">
                    <span>923</span>
                  </section>

                  <section className="col-2">
                    <span className="pl-1">42%</span>

                    <KeyboardArrowUp className="text-success" />
                  </section>
                </section>
              </section>
            </section>

            <section className="col-xl-8 p-2">
              <section className="bg-t-o b-r-10">
                <section className="row p-4 pb-5">
                  <h3>گزارش دسته بندی مشکلات </h3>
                </section>
                <section className="col-12 p-3 h-400">
                  <Chart
                    type="bar"
                    options={this.state.options7}
                    series={this.state.series7}
                    width="100%"
                    height="100%"
                  />
                </section>
              </section>
            </section>
          </section>
        </section>

        <section className="row">
          <section className="row">
            <section className="col-xl-8 p-2">
              <section className="bg-t-o b-r-10">
                <section className="row p-4">
                  <h3>گزارش کارها در زمان آنکالی</h3>
                </section>

                <section className="row d-flex align-items-center justify-content-center h-400 p-3">
                  <Chart
                    type="bar"
                    options={this.state.options6}
                    series={this.state.series6}
                    width="100%"
                    height="100%"
                  />
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    );
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Class
