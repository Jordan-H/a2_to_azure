export class ZenithEvent {
    EventId : number;
    ActivityId : number;
    DateCreated : string;
    FromDate : Date;
    Id : string;
    IsActive : number;
    ToDate : Date;
    ActivityName : string;

    constructor(obj?: any){
        this.EventId = obj && obj.eventId || null;
        this.ActivityId = obj && obj.activityId || null;
        this.DateCreated = obj && obj.dateCreated || null;
        this.FromDate = obj && obj.fromDate || null;
        this.Id = obj && obj.id || null;
        this.IsActive = obj && obj.isActive || null;
        this.ToDate = obj && obj.toDate || null;
    }
}
