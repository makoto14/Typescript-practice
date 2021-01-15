export class ConstDateCreater {
  public constHours: number;
  private constMinutes: number;
  private constSeconds: number;
  public constructor() {
    let date = new Date();
    this.constHours = date.getHours();
    this.constMinutes = date.getMinutes();
    this.constSeconds = date.getSeconds();
  }
  public calc(): string {
    let now: string =
      "constは" +
      String(this.constHours) +
      "時" +
      String(this.constMinutes) +
      "分" +
      String(this.constSeconds) +
      "秒です";
    return now;
  }
}
