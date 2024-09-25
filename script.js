function calculateCarbonFootprint() {
    // Get the input values from the form
    const carMiles = parseFloat(document.getElementById('carMiles').value);
    const flights = parseFloat(document.getElementById('flights').value);
    const electricity = parseFloat(document.getElementById('electricity').value);
    const diet = document.getElementById('diet').value;
    
    // Constants for emissions in kg CO2 per unit
    const carEmissionFactor = 0.411; // kg CO2 per mile driven
    const flightEmissionFactor = 100; // kg CO2 per flight (approximation)
    const electricityEmissionFactor = 0.233; // kg CO2 per kWh (approximation)

    // Calculate transportation emissions
    const carEmissions = carMiles * 52 * carEmissionFactor; // Annual car emissions
    const flightEmissions = flights * flightEmissionFactor; // Annual flight emissions

    // Calculate energy emissions
    const electricityEmissions = electricity * 12 * electricityEmissionFactor; // Annual electricity usage

    // Calculate diet emissions (approximation)
    let dietEmissions;
    if (diet === "vegetarian") {
        dietEmissions = 1000; // kg CO2 per year for vegetarian
    } else if (diet === "mixed") {
        dietEmissions = 2000; // kg CO2 per year for mixed diet
    } else {
        dietEmissions = 3000; // kg CO2 per year for meat lover
    }

    // Sum all emissions to get total carbon footprint
    const totalEmissions = carEmissions + flightEmissions + electricityEmissions + dietEmissions;

    // Display the result
    let msg=
    document.getElementById('output').innerHTML = `Your estimated annual carbon footprint is ${totalEmissions.toFixed(2)} kg of CO₂.`;
}