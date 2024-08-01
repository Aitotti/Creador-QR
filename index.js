

import inquirer from 'inquirer';
import qr from "qr-image";
import fs, { writeFile } from "fs";

inquirer
  .prompt([
    { message : "Escribe tu URL",
      name:"URL",
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('QR Generado.png'));

    fs.writeFile("enlace.txt", url,(err)=>{
      if (err) throw err;
      console.log("El archivo ha sido guardado!");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // 
    } else {
      // 
    }
  });
