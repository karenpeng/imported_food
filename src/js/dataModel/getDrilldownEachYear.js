/*
[
  {
    name: "Canada",
    id: "Canada",
    tooltip: {
      pointFormat: '<span style="color:{point.color}">{point.y:.1f} Million$</span><br/>',
    },
    dataLabels: {
      enabled: true,
      format: '{point.y:.1f} Million$'
    },
    data: [
      [
        "Bovine",
        123
      ],
      [
        "Sheep",
        123
      ],
    ]
  },
  {
    name: "Mexico",
    id: "Mexico",
    tooltip: {
      pointFormat: '<span style="color:{point.color}">{point.y:.1f} Million$</span><br/>',
    },
    dataLabels: {
      enabled: true,
      format: '{point.y:.1f} Million$'
    },
    data: [
      [
        "Bovine",
        123
      ],
      [
        "Sheep",
        123
      ],
    ]
  }
]
*/
export function getDrilldownEachYear(arr, index){
  let output = []
  arr.forEach((d) =>{

    let obj = {
      name: d.name,
      id: d.id,
      tooltip: d.tooltip,
      dataLabels: d.dataLabels,
      data: []
    }
  
      d.data.forEach((dd) =>{
        obj.data.push([
            dd[0],
            dd[1][index]
          ])
      })

      output.push(obj)
  })
  console.dir(output)
  return output
}

/*

 */
export function getDrilldownEachYearJustY(arr, country, index){
  // let output = []
  //   arr.forEach((d)=>{
  //     if(d[name] === country){
  //       output.push(y: d.data[index])
  //     }
  // })
  // return output
}