import multiplicar, { dividir } from "./multiplicacionDivision.js";
import { sumar, restar } from "./sumaResta.js";

console.log("Suma:", sumar(5, 3));
console.log("Resta:", restar(10, 4));
console.log("Multiplicacion:", multiplicar(6, 7));

try {
    console.log("Division:", dividir(10, 0));
} catch (error) {
    console.error("Error:", error.message);
}
