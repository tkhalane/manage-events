export class Event {
    sponsor:string;
    address:string;
    attending:string[];
    likes:string[];
    date:string;
    mainTweleb:string;
    name:string;
    description:string;
    type:string;
    venue:string;

    constructor(values:Object = {}) {
        Object.assign(this, values);
    }
}
