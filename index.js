import { flowRandom } from "./dist/flowRandom.js";

const lblReslut = document.getElementById("lbl-result");
const btnRoll = document.getElementById("btn-roll");

btnRoll.addEventListener("click", () => {
  if (flowRandom(10)) {
    lblReslut.innerHTML = "Pasó !!!";
  } else {
    lblReslut.innerHTML = "Este no pasa";
  }
});
