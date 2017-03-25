import {MetadataSource} from "./metadata-source.model";

export const METADATA_SOURCES: MetadataSource[] = [
  {
    url: 'assets/metadata-samples/hapi_dstu2.json', // https://fhirtest.uhn.ca/baseDstu2/metadata
    name: 'HAPI DSTU2 (local)'
  },
  {
    url: 'https://fhirtest.uhn.ca/baseDstu2/metadata',
    name: 'HAPI DSTU2'
  },
  {
    url: 'https://sb-fhir-dstu2.smarthealthit.org/api/smartdstu2/data/metadata',
    name: 'SMART DSTU2'
  },
  {
    url: 'https://api3.hspconsortium.org/mike2/data/metadata',
    name: 'HSPC DSTU2'
  },
  {
    url: 'assets/metadata-samples/cerner_dstu2_final.json', // https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/metadata
    name: 'Cerner Sandbox DSTU2 Final (1.0.2) (local)'
  },
  {
    url: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/metadata',
    name: 'Cerner Sandbox DSTU2 Final (1.0.2)'
  },
  {
    url: 'https://fhir-open.sandboxcerner.com/may2015/d075cf8b-3261-481d-97e5-ba6c48d3b41f/metadata', //
    name: 'Cerner Sandbox DSTU2 Ballot (1.5.0)'
  },
  {
    url: 'assets/metadata-samples/epic_dstu2.json',  // https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/metadata
    name: 'Epic DSTU2 (local)'
  },
  {
    url: 'https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/metadata',
    name: 'Epic DSTU2'
  }
];
