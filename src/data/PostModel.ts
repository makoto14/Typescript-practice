export class PostModel {
  id?: number;
  content?: string;
  date?: Date;

  // setter
  set setId(id: number) {
    this.id = id;
  }
  set setContent(content: string) {
    this.content = content;
  }
  set setDate(date: Date) {
    this.date = date;
  }

  // getter
  get getId(): number {
    return this.id!;
  }
  get getContent(): string {
    return this.content!;
  }
  getDate(): Date {
    return this.date!;
  }
}
