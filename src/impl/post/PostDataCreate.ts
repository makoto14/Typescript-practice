import { PostModel } from "../../data/PostModel";
import { PostValidator } from "../../impl/validation/PostValidator";

export class PostDataCreater {
  public post(): void {
    let postData = this.createPostData();
    let validator = new PostValidator();
    if (validator.validation(postData)) {
      console.log("Post success");
      console.log(postData);
    } else {
      console.log("Post fail");
    }
  }

  private createPostData(): PostModel {
    let postModel = new PostModel();
    postModel.setId = this.getId();
    postModel.setContent = this.getContent();
    postModel.setDate = this.getNowDate();
    return postModel;
  }

  private getId(): number {
    let idText = (<HTMLInputElement>document.getElementById("post-id")).value;
    return parseFloat(idText);
  }

  private getContent(): string {
    let contentText = (<HTMLInputElement>(
      document.getElementById("post-content")
    )).value;
    return contentText;
  }

  private getNowDate(): Date {
    return new Date();
  }
}
