// Numen - Homework - Class 27

/* 
    Consigna BACK END de la clase de servidores con node.js:

    1* Generar un backend con express-generator ✅
    2* Hacer una ruta con query que me devuelva un texto presentandose por su nombre y diciendo de donde es ✅
    3* Hacer una ruta que divida dos números ✅
        * usar método Number ejemplo ( let num1= Number(req.params.num1). Esto hará que el parámetro pase de formato string a number.
*/
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Home");
});

// #1
app.get("/persona", (req, res) => {
  res.send(`Mi nombre es ${req.query.nombre} y soy de ${req.query.lugar}`);
});

// #2
app.get("/dividendo/:numero1/divisor/:numero2", (req, res) => {
  if (req.params.numero2 == "0") {
    res.send("No se puede dividir por 0.");
  } else {
    let dividendo = Number(req.params.numero1);
    let divisor = Number(req.params.numero2);
    let division = dividendo / divisor;

    res.send(`El resultado de la división es: ${division}.`);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
