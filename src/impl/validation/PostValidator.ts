import { PostModel } from "../../data/PostModel";

export class PostValidator {
  /**
   * validation
   */
  public validation(validData: PostModel): boolean {
    let result: boolean = false;
    let dataList: any = [validData.id, validData.content];
    if (!dataList.includes(null || undefined || NaN || "")) {
      result = true;
    }
    return result;
  }
}
