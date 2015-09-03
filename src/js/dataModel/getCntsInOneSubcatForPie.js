/*
[{
  name: "Country",
  //colorByPoint: true,
  data: [{
    name: "Canada",
    y: [56.33, 65, 25, ...]
  }, {
    name: "Mexico",
    y: [24.03, 23, 3...]
  }, 
  ...
  ]
}]
 */
export function getCntsInOneSubcatForPie(obj, subCat){
  let output = []
    output.push({
    name: "Country",
    //colorByPoint: true,
    data: []
  })

  obj.forEach((d, i)=>{
    if(i > 0){
      let key = Object.keys(d)[0]
      if(key === subCat){
        d[key].forEach((dd, ii)=>{
          if(ii > 0){
            let country = Object.keys(dd)[0]
            output[0].data.push({
              name: country,
              y: dd[country]
            })
          }
        })
      }
    }
  })

  //console.dir(output)
  return output
}