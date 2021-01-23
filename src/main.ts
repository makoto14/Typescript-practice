import { ConstDateCreater } from "./impl/Date/ConstDateCreater";
import { DateCreater } from "./impl/Date/DateCreater";
import { PostDataCreater } from "./impl/post/PostDataCreate";
import { ArrowFunction } from "./impl/util/ArrowFunction";
import { ListPractice } from "./impl/practice/practice";
import { TestEnum, Place } from "./impl/practice/enumTest";
import { setCreater } from "./impl/practice/setTest";

let date = new ConstDateCreater();
let nowDate = new DateCreater();
let postCreater = new PostDataCreater();
let arrowFnc = new ArrowFunction();
let listPractice = new ListPractice();
let testEnum = new TestEnum();
let testSet = new setCreater();

const exportLog = (): void => {
  console.log(date.calc());
  console.log(nowDate.calc());
  // console.log(postCreater.post());
  postCreater.post();
  arrowFnc.foo4();
  console.log(listPractice.getPersonalData());
  console.log(listPractice.name);
  testEnum.getEnum();
  console.log(`Hello ${Place.Paris}`);
  console.log(testSet.getSet());
};

const button = document.getElementById("post");
button!.addEventListener(
  "click",
  () => {
    exportLog();
  },
  false
);
