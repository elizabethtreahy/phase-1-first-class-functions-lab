// Code your solution in this file!
// const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = () => {
  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = () => {
  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
  return drivers.slice(2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(value) {
  function createFare(fare){return fare*value}
  return createFare
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
  // const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
  return returnFirstTwoDrivers()
}
