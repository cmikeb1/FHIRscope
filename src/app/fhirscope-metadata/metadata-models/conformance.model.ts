export interface Conformance {
  resourceType: string;
  publisher: string;
  date: Date;
  kind: string;
  software: Software;
  implementation: Implementation;
  fhirVersion: string;
  acceptUnknown: string;
  format: string[];
  rest: Rest[];
}

export interface Rest {
  mode: string;
  resource: Resource[];
  interaction: Interaction[];
  operation: Operation[];
}

export interface Operation {
  name: string;
  definition: Definition;
}

export interface Software {
  name: string;
  version: string;
}

export interface Implementation {
  description: string;
}

export interface Extension {
  url: string;
  valueDecimal: number;
}

export interface Profile {
  reference: string;
}

export interface Interaction {
  code: string;
  documentation: string;
}

export interface SearchParam {
  name: string;
  type: string;
  documentation: string;
  chain: string[];
}

export interface Resource {
  extension: Extension[];
  type: string;
  profile: Profile;
  interaction: Interaction[];
  conditionalCreate: boolean;
  conditionalUpdate: boolean;
  conditionalDelete: string;
  searchInclude: string[];
  searchParam: SearchParam[];
}

export interface Definition {
  reference: string;
}
