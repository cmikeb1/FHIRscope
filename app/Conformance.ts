export class Conformance {
    resourceType:string;
    publisher:string;
    sourceUrl:string;
    rests:Rest[];
}

export class Rest {
    resources:Resource[];
    mode:string;
}

export class Resource {
    type:string;
}