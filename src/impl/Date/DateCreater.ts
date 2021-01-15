import { DateCreaterInterface } from "../../spec/Date/DateCreaterInterface";
export class DateCreater implements DateCreaterInterface {
  public calc(): string {
    let date = new Date();
    let now: string =
      "Now" +
      " H: " +
      String(date.getHours()) +
      " M: " +
      String(date.getMinutes()) +
      " S: " +
      String(date.getSeconds());
    return now;
  }
}
