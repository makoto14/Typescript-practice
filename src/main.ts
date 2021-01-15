import { ConstDateCreater } from "./impl/Date/ConstDateCreater";
import { DateCreater } from "./impl/Date/DateCreater";

let date = new ConstDateCreater();
let nowDate = new DateCreater();

window.addEventListener("click", () => {
  console.log(date.calc());
  console.log(nowDate.calc());
});
