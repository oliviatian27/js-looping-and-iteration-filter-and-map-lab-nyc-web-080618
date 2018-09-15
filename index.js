// Code your solution here:
function driversWithRevenueOver(drivers,revenue){
  return drivers.filter(driver=>driver["revenue"]>revenue)
}

function driverNamesWithRevenueOver(drivers,revenue){
  return drivers.filter(driver=>driver["revenue"]>revenue).map(driver=>driver["name"])
}

function exactMatch(drivers,match){
  let k=Object.keys(match)[0]
  return drivers.filter(driver=>driver[k]===match[k])
}

function exactMatchToList(drivers,match){
  return exactMatch(drivers,match).map(driver=>driver["name"])
}
