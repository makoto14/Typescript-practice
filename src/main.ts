import { ConstDateCreater } from "./impl/Date/ConstDateCreater";
import { DateCreater } from "./impl/Date/DateCreater";
import { PostDataCreater } from "./impl/post/PostDataCreate";

let date = new ConstDateCreater();
let nowDate = new DateCreater();
let postCreater = new PostDataCreater();

const exportLog = (): void => {
  console.log(date.calc());
  console.log(nowDate.calc());
  // console.log(postCreater.post());
  postCreater.post();
};

const button = document.getElementById("post");
button!.addEventListener(
  "click",
  () => {
    exportLog();
  },
  false
);
