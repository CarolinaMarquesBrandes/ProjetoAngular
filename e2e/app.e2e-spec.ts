import { SiteStudioPage } from './app.po';

describe('site-studio App', function() {
  let page: SiteStudioPage;

  beforeEach(() => {
    page = new SiteStudioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
