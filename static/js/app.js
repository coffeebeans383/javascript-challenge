// from data.js
var tableData = data;

// YOUR CODE HERE!
// Create a basic HTML web page or use the [index.html](StarterCode/index.html) file provided (we recommend building your own custom page!).
//using sample for now
// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
var ufoTable = d3.select("table");
var ufoRow = ufoTable.append("tr");
var ufobody = d3.select("tbody");
var button = d3.select("#filter-btn");
var FieldDate = d3.select("#datetime");
var FieldCity = d3.select("#city");
//Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// alert("Welcome!")

// Viewing the available data fromt he data.js
console.log(tableData);

var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = ufobody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addData(tableData);


// Creating an Event Listener for the Button
// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.
button.on("click", () => {

    d3.event.preventDefault();
// Setting up the Filter Button for Date and City
    var inputDate = FieldDate.property("value").trim();
    var inputCity = FieldCity.property("value").trim();
    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    var filterCity = tableData.filter(tableData => tableData.city === inputCity);

    console.log(filterDate)
    console.log(filterCity)

    ufobody.html("");

    let response = {
        filterDate,
        filterCity
    }


    if(response.filterDate.length !== 0) {
        addData(filterDate);
    }
    
        else {
            ufobody.append("tr").append("td").text("No Sightings Found");
        }
})

// Level 2 optional

// Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

// `date/time`
// `city`
// `state`
// `country`
// `shape`
