require('dotenv').config({ silent: process.env.NODE_ENV !== 'development' })
const { readCSV } = require("./services/utilities");

const execute = () => {
  const arguments = process.argv;
  console.log(arguments);
  if (arguments.length > 2) readCSV(arguments[2]);
};

execute();
