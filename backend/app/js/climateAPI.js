const section2 = document.querySelector("#section2-wrapper");
const subSection2 = document.getElementById("section4");
const distanceResults = document.getElementById("distance-results");
const vehicleResults = document.getElementById("vehicle-results");

async function submitButton() {
  const distance = document.getElementById("distance");
  const vehicle = document.getElementById("vehicle");
  const request = {
    distance: distance.value,
    vehicle: vehicle.value
  }
  //where you do the fetch reqeust
  //data == respom
  const data_from_fetch = {
    co2e: 1.54
  }
  console.log(request);

  // hide .section2
  section2.style.display = "none";
  subSection2.style.display = "flex";
  distanceResults.innerText = `Distance traveled: ${distance.value}`;
  vehicleResults.innerText = `Vehicle type: ${vehicle.value}`;
}
