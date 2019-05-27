// Code your solution here:

function driversWithRevenueOver(drivers, target){
  let newDrivers = drivers.filter(function(drvr){
    return drvr.revenue > target;
  })
  return newDrivers;
}

function driverNamesWithRevenueOver(drivers, target){
  let newDrivers = drivers.filter(function(drvr){
    return drvr.revenue > target;
  });
  return newDrivers.map(function(drvr){
    return drvr.name;
  });
}

function exactMatch(drivers, keyValue){
  let key = keyValue.keys
  let value = keyValue[key]
  let newDrivers = drivers.filter(function(drvr){ return drvr[key] === value;
  })
  return newDrivers;
}
