import React from 'react'
import {getCategory} from '../dataModel/getCategory.js'

export let Subline = React.createClass({
  PropTypes:{
    totals: React.PropTypes.array.isRequired,
    cat: React.PropTypes.string.isRequired
  },
  render(){
    let chart = new Highcharts.Chart({
      chart:{
        renderTo: 'bottom',
        type: 'spline',
        width: window.innerWidth - 70,
        height: 160
      },
      title:{
        text:''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        title: {
          text: 'year'
        },
        categories: [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014]
      },
      yAxis: {
        title: {
          text: ''
        },
        labels: {
          enabled: false
        },
        gridLineWidth: 0
      },
      tooltip: {
        crosshairs: true,
        headerFormat: "",
        pointFormat: "Total {point.y:.1f} Million$"
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        spline: {
          lineWidth: 2,
          marker: {
            enabled: false
          }
        }
      },
      series: getCategory(this.props.totals, this.props.cat)
    })
    return null
  }
})