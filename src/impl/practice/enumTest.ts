export enum Place {
  Tokyo = "Tokyo",
  NewYork = "NewYork",
  Paris = "Paris",
  Seoul = "Seoul"
}

export class TestEnum {
  public getEnum = (): void => {
    let placeEnum: Place = Place.Tokyo;
    console.log(placeEnum);
  };
}
