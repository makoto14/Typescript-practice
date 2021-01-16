import { PostModel } from "../../data/PostModel";

export class PostDataCreater {
  public post(): PostModel {
    let postModel = new PostModel();
    postModel.setId = this.elementId();
    postModel.setContent = this.elementContent();
    postModel.setDate = new Date();
    return postModel;
  }
  private elementId(): number {
    let idText = (<HTMLInputElement>document.getElementById("post-id")).value;
    return parseFloat(idText);
  }
  private elementContent(): string {
    let contentText = (<HTMLInputElement>(
      document.getElementById("post-content")
    )).value;
    return contentText;
  }
}
