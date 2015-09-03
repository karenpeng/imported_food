/*
[{
  name: "Country",
  //colorByPoint: true,
  data: [{
    name: "Canada",
    y: 56.33
  }, {
    name: "Mexico",
    y: 24.03
  }, 
  ...
  ]
}]
 */

/**
 * @param  {array} arr     result from getCntsInOneCatForPie.js
 * @param  {number} index  which year
 * @return {array}          filter out all the other years
 */
export function getCntsInOneCatForPieEachYear(arr, index){

  let output = []
  output.push({
    name: arr[0].name,
    //colorByPoint: arr[0].colorByPoint,
    data:[]
  })

  arr[0].data.forEach((d, i)=>{
    output[0].data[i] = {
      name: d.name,
      y: d.y[index]
    }
  })
  //console.dir(output)
  return output
}

/*
[12, 23, 21,...]
 */
export function getCntsInOneCatForPieEachYearJustY(arr, index){

  let output = []
  arr[0].data.forEach((d)=>{
    output.push(d.y[index])
  })
  return output
}

