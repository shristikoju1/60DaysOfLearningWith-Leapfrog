const fs = require("fs");


function logReqRes(filename){
    return(req, res, next) => {
        fs.appendFile(
            "log.txt",
            `${Date.now()}: ${req.method}: ${req.path}\n`,
            (err) => {
              if (err) console.log("Error writing to log file", err);
              next();
            }
          );
    }
}

module.exports = {
    logReqRes,
}