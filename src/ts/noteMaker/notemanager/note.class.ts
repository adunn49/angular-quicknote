/// <reference path="../../../../typings/globals/angular/index.d.ts" />

export default class Note {
  private title: string;
  private content: string;

  constructor (title, content) {
    this.title = title;
    this.content = content;
  }

  public getTitle() {
    return this.title;
  }

  public getContent() {
    return this.content;
  }
}
