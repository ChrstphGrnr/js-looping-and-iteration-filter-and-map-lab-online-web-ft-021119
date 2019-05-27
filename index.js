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
  let newDrivers = drivers.filter(function(driver){
    for(const key in keyValue){
      return driver[key] === keyValue[key];
    }
  })
  return newDrivers;
}

function exactMatchToList(drivers, ){
  let newDrivers = exactMatch(drivers, "name");
  return newDrivers.map(function(driver){
    return driver.name;
  })
}
