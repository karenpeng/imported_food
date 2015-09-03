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
/**
 * [getCatForBar description]
 * @param  {array} obj     for instance, data["Animals"]
 * @return {array}         array in above format 
 */
export function getCntsInOneCatForPie(obj){
  
  let output = []
  
  output.push({
    name: "Country",
    //colorByPoint: true,
    data: []
  })

  let hash = {}

  obj.forEach((d, i) =>{
    if(i > 0){
      let subCategory= d[Object.keys(d)[0]]
      subCategory.forEach((dd, ii) =>{
        if(ii > 0){
          let country = Object.keys(dd)[0]
          if(hash[country] === undefined) hash[country] = []
          dd[country].forEach((c, iii) =>{
            if(hash[country][iii] === undefined) hash[country][iii] = 0
            hash[country][iii] += dd[country][iii]
            hash[country][iii] = parseFloat(hash[country][iii].toFixed(1))
          })
        }
      })
    }
  })


  let arr = []
  for(let key in hash){
    arr.push({
      name: key,
      y: hash[key]
    })
  }
  
  arr.sort((a, b) =>{
    return b.y.reduce((b1, b2)=>{return b1 + b2}) 
    - a.y.reduce((a1, a2)=>{return a1 + a2}) 
  })

  arr = arr.slice(0, 10)
  
  output[0].data = arr
  //console.dir(output)
  return output
}

