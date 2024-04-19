import xml2js, { parseString } from "xml2js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { XMLParser } from "fast-xml-parser";
// var parser = new xml2js.Parser();
const options = {
  ignoreAttributes: false,
  ignoreDeclaration: true,
  ignorePiTags: true,
};
const parser = new XMLParser(options);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "VehicleData.xml");

const readXMLFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", function (err, data) {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        let jsonObj = parser.parse(data);
        resolve(jsonObj);
      }
    });
  });
};

export default readXMLFile;
/**
 *    // let _data = data.split(`<?xml version="1.0" encoding="UTF-8"?>`);
      // let arr = [];
      // _data.forEach((element) => {
      //   parseString(
      //     element,
      //     { trim: true, explicitRoot: true, explicitArray: false },
      //     function (err, result) {
      //       if (err) {
      //         console.error(err);
      //       } else {
      //         arr.push(result);
      //         console.log(JSON.stringify(result));
      //       }
      //     }
      //   );
      // });
 */
