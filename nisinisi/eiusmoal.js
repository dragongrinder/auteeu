var csvData = "John,Doe,25\nJane,Smith,30\n";
var parsedData = d3.csv.parseRows(csvData);
console.log(parsedData);
// Output: [["John", "Doe", "25"], ["Jane", "Smith", "30"]]
