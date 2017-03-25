import { FhirscopeMetadataPage } from './app.po';

describe('fhirscope-metadata App', () => {
  let page: FhirscopeMetadataPage;

  beforeEach(() => {
    page = new FhirscopeMetadataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
