const https = require("https");
/* var rootCas = require("ssl-root-cas/latest").create();
https.globalAgent.options.ca = rootCas; */
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

const credentials = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Basic ${process.env.LL_TOKEN}`,
    "X-Experience-API-Version": process.env.LL_XAPI_VERSION,
  },
};

const uploadStatements = (statements) => {
  if (Array.isArray(statements)) {
    let body;
    try {
      body = JSON.stringify(statements);
    } catch (error) {
      console.log(error);
      body = undefined;
    }

    if (body) {
      return new Promise((resolve, reject) => {
        const options = {
          hostname: "lrs.uio.no",
          path: "/data/xAPI/statements",
          method: "POST",
          ...credentials,
        };
        console.log(options);
        const request = https.request(options, (result) => {
          console.log(`statusCode: ${result.statusCode}`);
          console.log(`statusMessage: ${result.statusMessage}`)

          result.on("data", (d) => {
             console.log(d.toString());
          });

          result.on("end", () => {
            resolve("Done");
          });
        });

        request.on("error", (error) => {
          console.error(error);
          reject(error);
        });

        request.write(body);
        request.end();
      });
    }
  }
};

module.exports = {
  uploadStatements,
};
