export function makeLine (arr, bool){

  let chart = new Highcharts.Chart({
    chart:{
      renderTo: 'main',
      type: 'spline',
      height: window.innerHeight - 180,
      width: window.innerWidth * 0.96
    },
    title:{
      text:''
    },
    subtitle: {
      text: 'Source USDA, www.fas.usda.gov/gats',
      x: -20
    },
    xAxis: {
      title: {
        text: 'Year'
      },
      categories: [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014]
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Million $'
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    tooltip: {
      crosshairs: true,
      //shared: true//,
      // headerFormat: "{point.x}: {point.category}",
      // pointFormat: "<b>{point.y:.1f} Million$<b>"
      formatter(){
        return "<b>"+this.x+" <b>"+this.series.name+":<br/>"+this.y+" Million$"
      }
    },
    legend: {
      enabled: bool,
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0,
      symbolHeight: 10
    },
    plotOptions: {
      spline: {
        lineWidth: 2,
        states: {
          hover: {
            lineWidth: 8
          }
        },
        marker: {
          enabled: false
        }
      }      
    },
    series: arr
  })

}