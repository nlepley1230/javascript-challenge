// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(tableData);

// Using arrow functions place the data into the table. 
tableData.forEach((ufoVist) => {
    var row = tbody.append("tr");
    Object.entries(ufoVist).forEach(([key, value]) => {
      var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");
var form = d3.select("#form");

// Assign handler function to the target objects in the HTML file. 
button.on("click", runEnter);
form.on("submit", runEnter);

// Declare handler function.
function runEnter(){
    d3.event.preventDefault();
    // Assign input value in the form to a variable.
    inputElement = d3.select("#datetime");
    inputValue = inputElement.property("value");
    // Empty the table object before appending filter results.
    tbody.html('');
    // Filter sightings in the data to the specified date/time.
    var results = tableData.filter(tableData => tableData.datetime == inputValue);
    results.forEach((reportingsUFO) => {
        var row = tbody.append("tr");
        Object.entries(reportingsUFO).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}