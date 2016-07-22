export class InMemoryDataService {
    createDb() {
        let confs = [{
            resourceType: 'The Resource Type',
            publisher: 'The Publisher',
            sourceUrl: 'http://example.com',
            rests: [
                {
                    mode: "server",
                    resources: [
                        {
                            type: "Patient"
                        },
                        {
                            type: "Practitioner"
                        }
                    ]
                }
            ]
        }, {
            resourceType: 'The Resource Type Two',
            publisher: 'The Publisher Two',
            sourceUrl: 'http://example-two.com',
            rests: [
                {
                    mode: "server-two",
                    resources: [
                        {
                            type: "Patient"
                        },
                        {
                            type: "Encounter"
                        },
                        {
                            type: "Observation"
                        }
                    ]
                }
            ]
        }
        ];
        return {confs};
    }
}