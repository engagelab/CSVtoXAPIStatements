const parse = require("csv-parse");
const fs = require("fs");
const { Statement } = require("../models/Statement");

/* const verbs = [];
const activities = []; */
//Create the parser
const statements = [];
const parser = parse({ delimiter: ";" }, (error, data) => {
  if (error) console.log(error);
  else {
    /* console.log(data[0]); */

    data.forEach((elem, index) => {
      if (index > 0) {
        const array = elem[0].split(",");

        /*  if (verbs.indexOf(array[3]) === -1) verbs.push(array[3]);
        if (activities.indexOf(array[4]) === -1) activities.push(array[4]); */
        statements.push(
          new Statement(array[0], array[1], array[2], array[3], array[4])
        );
      }
    });
  }
});

parser.on("end", () => {
  console.log("Ended");
});

/**
 * Method: readCSV
 * Open file and read the CSV file.
 * @param {string} filepath path to file
 */
const readCSV = (filepath) => {
  if (filepath) fs.createReadStream(filepath).pipe(parser);
  else console.error("No filepath");
};

module.exports = {
  readCSV,
};
