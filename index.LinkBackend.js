<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./css/index.css" rel="stylesheet">
  <title>Document</title>
</head>
<body>
  <header>
    <img src="./images/co2footprint.jpeg" alt="logo" class="logo">
    <h1>Carbon Footprint Calculator</h1>
    <nav>
      <ul>
        <li><a href="#" id="nav-link">Home</a></li>
        <li><a href="#" id="nav-link">About</a></li>
        <li><a href="#" id="nav-link">Info</a></li>
      </ul>
    </nav>
  </header>

  <main>  
    <section class="section1">
      <h2>Measure Your Impact: Discover Your <span class="h2-co2-footprint">Carbon Footprint</span> with Ease</h2>
    </section>

    <section class="section2">
      <form>
        <div class="make-wrapper" id="form-wrapper">
          <label for="make" class="make">Vehicle make: </label>
          <input type="text" id="make" name="vehicle">
        </div>
        <div class="model-wrapper" id="form-wrapper">
          <label for="model" class="model">Vehicle model: </label>
          <input type="text" id="model" name="vehicle">
        </div>
        <div class="distance-wrapper" id="form-wrapper">
          <label for="distance" class="distance">Miles driven: </label>
          <input type="text" id="distance" name="distance">
        </div>
        <div class="fuel-wrapper" id="form-wrapper">
          <label for="fuel" class="fuel">Fuel efficiency: </label>
          <input type="text" id="fuel" name="fuel">
        </div>
        <button class="submit-button">Submit</button>
      </form>
    </section>

    <section class="section3">
      <h3>What is a carbon footprint calculator?</h3>
      <p>A carbon footprint calculator is a tool that allows individuals and organizations
        to estimate the amount of greenhouse gas emissions they are responsible for. The calculator 
        takes into account various factors, such as energy use, transportation, food consumption, and 
        waste management, to provide a comprehensive analysis of one's carbon footprint. By using a carbon footprint calculator, 
        individuals and organizations can become more aware of their impact on the environment and take steps to reduce their emissions.</p>
    </section>
  </main>
  <footer>
    <p>Viking Hacks 2023</p>
  </footer>
  
</body>
</html>
