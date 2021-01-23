export class ArrowFunction {
  public foo = (): string => "Hello";

  public foo2 = (): string => {
    return "Good morning";
  };

  public foo3 = (): void => {
    console.log("Good evening");
  };

  public foo4 = (): void => console.log("Hello world");
}

let createFoo = (): String => {
  return "foo";
};
