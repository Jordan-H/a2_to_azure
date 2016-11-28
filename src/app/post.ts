export class Post {
  activityId: number;
  activityDec: string;
  dateCreated: string;

  constructor(obj?: any) {
    this.activityId = obj && obj.activityId || null;
    this.activityDec = obj && obj.activityDec || null;
    this.dateCreated = obj && obj.dateCreated || null;

  }
}