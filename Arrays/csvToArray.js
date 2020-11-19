//// Write a JavaScript program to converts a comma-separated values (CSV) string to a 2D array.

function csvToArray(csv, delimiter = ",", omitFirstRow = false) {
    return csv.slice(omitFirstRow ? csv.indexOf('\n')+1 : 0)
              .split("\n")
              .map((element) => element.split(delimiter));
  }
  
  let csv1 = "a,b\nc,d";
  let csv2 = "a;b\nc;d";
  let csv3 = "head1,head2\na,b\nc,d";
  
  let result1 = csvToArray(csv1);
  let result2 = csvToArray(csv2);
  let result3 = csvToArray(csv3);
  
  console.log(result1);
  console.log(result2);
  console.log(result3);