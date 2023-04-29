const express = require('express');
const app = express();

// Define the US national average carbon footprint in metric tons of CO2 per year
const US_NATIONAL_AVERAGE = 11.7;

// Define the route for calculating the carbon footprint
app.get('/carbon-footprint', (req, res) => {
  // Extract the car make, miles driven, and fuel cost from the query parameters
  const make = req.query.make;
  const miles = Number(req.query.miles);
  const fuelCost = Number(req.query.fuelCost);

  // Calculate the carbon footprint of the car
  const carbonFootprint = (miles / fuelCost) * 19.6;
  // Calculate the overall carbon footprint based on the user's input
  const overallFootprint = carbonFootprint / 1000; // Convert from pounds of CO2 to metric tons of CO2

  // Compare the overall carbon footprint to the US national average
  if (overallFootprint > US_NATIONAL_AVERAGE) {
    res.send(`Your overall carbon footprint is ${overallFootprint.toFixed(1)} metric tons of CO2 per year, which is above the US national average of ${US_NATIONAL_AVERAGE} metric tons of CO2 per year. Please reduce your carbon footprint.`);
  } else {
    res.send(`Good job! Your overall carbon footprint is ${overallFootprint.toFixed(1)} metric tons of CO2 per year, which is below the US national average of ${US_NATIONAL_AVERAGE} metric tons of CO2 per year.`);
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
