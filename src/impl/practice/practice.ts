// https://mslgt.hatenablog.com/entry/2019/12/06/063526
// https://qiita.com/nogson/items/86b47ee6947f505f6a7b

interface infType {
  bar: string;
  baz: number;
}

type typeSample = {
  id: number;
  name: string;
  isRetired?: boolean;
};

interface listObjects {
  id: number;
  name: string;
  isRetired: boolean;
  announceList: announceInfomation[];
  personalInformation: personalInfomation;
}

interface announceInfomation {
  announceNo: number;
  note: string;
  content: string;
}

interface personalInfomation {
  personalId: number;
  startDate: Date;
  endDate: Date;
  content: string;
}

function sss(): infType {
  let aa: infType = {
    bar: "aa",
    baz: 1
  };
  return aa;
}

function bbb(): typeSample {
  let result: typeSample = {
    id: 1,
    name: "John"
  };
  return result;
}

class TypePractice implements infType {
  // only string
  public bar = "1";
  // only number
  public baz = 1;
}

class InfPractice implements typeSample {
  public id = 1;
  public name = "sara";
  public isRetired = false;
}

class AnnounceCreater implements announceInfomation {
  public announceNo = 123;
  public note = "Hello world";
  public content = "Promotion";
}

class PersonalInfomationCreater implements personalInfomation {
  public personalId = 1;
  public startDate = new Date();
  public endDate = new Date();
  public content = "Hi";
}

export class ListPractice implements listObjects {
  public id = 1;
  public name = "Becca";
  public isRetired = true;
  public announceList = [new AnnounceCreater()];
  public personalInformation = new PersonalInfomationCreater();

  public getPersonalData = (): personalInfomation => {
    return this.personalInformation;
  };
}
