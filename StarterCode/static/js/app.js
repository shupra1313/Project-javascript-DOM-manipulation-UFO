// from data.js
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $stateInput = document.querySelector("#state");
var $searchBtn = document.querySelector("#search");
var $cityInput = document.querySelector("#city");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var searchbutton = document.getElementById('filter-btn');
var tableData = data;

// searchbutton.addEventListener("click",handleSearchButtonClick);
d3.selectAll("#filter-btn").on("click", handleSearchButtonClick);

// renderTable renders the filteredAddresses to the tbody
function renderTable(data) {
  $tbody.innerHTML = "";
  for (var i = 0; i < data.length; i++) {
    // Get get the current address object and its fields
    var address = data[i];
    // console.log(address)
    var fields = Object.keys(address);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}

function handleSearchButtonClick() {
  console.log("Clicked the button");
  
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var userDate = $dateInput.value;
  // Prevent the form from refreshing the page
  d3.event.preventDefault();

  // Grab the datetime value from the filter
  let filteredData = tableData;

  // Check to see if a date was entered and filter the data using that date.
  if (userDate) {
    // Apply `filter` to the table data to only keep the rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === userDate);
  }

renderTable(filteredData);

}

// Render the table for the first time on page load
renderTable(tableData);
