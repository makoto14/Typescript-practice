export class setCreater {
  public getSet = (): Set<String> => {
    let nameSet: Set<String> = new Set();
    nameSet.add("1");
    nameSet.add("2");
    nameSet.add("1");
    nameSet.add("3");
    return nameSet;
  };
}
