export class BooleanPractice {
  public getBool = (): boolean => false;

  public getBool2 = (): Boolean => {
    return Boolean("");
  };

  public getBool3 = function hoge(): Boolean {
    return Boolean(0);
  };
}
