import { ConstDateCreaterInterface } from "../../spec/Date/ConstDateCreaterInterface";

export class ConstDateCreater implements ConstDateCreaterInterface {
  private constHours: number;
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
      "" +
      "const is" +
      " H: " +
      String(this.constHours) +
      " M: " +
      String(this.constMinutes) +
      " S: " +
      String(this.constSeconds);
    return now;
  }
}
