export class DateCreater {
  public calc(): string {
    let date = new Date();
    let now: string =
      "Nowは" +
      String(date.getHours()) +
      "時" +
      String(date.getMinutes()) +
      "分" +
      String(date.getSeconds()) +
      "秒です";
    return now;
  }
}
