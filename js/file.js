const readline = require('readline');

// Define the US national average carbon footprint in metric tons of CO2 per year
const US_NATIONAL_AVERAGE = 11.7;

// Create a readline interface to prompt the user for input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for their car make, miles driven, and fuel cost
rl.question('What is the make of your car? ', (make) => {
  rl.question('How many miles have you driven? ', (miles) => {
    rl.question('What is the fuel cost per gallon? ', (fuelCost) => {
      // Calculate the carbon footprint of the car
      const carbonFootprint = (miles / fuelCost) * 19.6;
      // Calculate the overall carbon footprint based on the user's input
      const overallFootprint = carbonFootprint / 1000; // Convert from pounds of CO2 to metric tons of CO2

      // Create the data for the pie chart
      const data = [
        { label: 'Miles Driven', value: miles },
        { label: 'Fuel Cost', value: fuelCost }
      ];

      // Define the dimensions of the pie chart
      const width = 300;
      const height = 300;
      const radius = Math.min(width, height) / 2;

      // Define the colors for the pie chart
      const color = d3.scaleOrdinal()
        .domain(data.map(d => d.label))
        .range(d3.schemeCategory10);

      // Create the SVG element for the pie chart
      const svg = d3.select('#chart')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`);

      // Create the pie chart
      const pie = d3.pie()
        .value(d => d.value);

      const arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);

      const arcs = svg.selectAll('arc')
        .data(pie(data))
        .enter()
        .append('g')
        .attr('class', 'arc');

      arcs.append('path')
        .attr('d', arc)
        .attr('fill', d => color(d.data.label));

      // Compare the overall carbon footprint to the US national average
      if (overallFootprint > US_NATIONAL_AVERAGE) {
        console.log(`Your overall carbon footprint is ${overallFootprint.toFixed(1)} metric tons of CO2 per year, which is above the US national average of ${US_NATIONAL_AVERAGE} metric tons of CO2 per year. Please reduce your carbon footprint.`);
      } else {
        console.log(`Good job! Your overall carbon footprint is ${overallFootprint.toFixed(1)} metric tons of CO2 per year, which is below the US national average of ${