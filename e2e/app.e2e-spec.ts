import { MorningHarwoodPage } from './app.po';

describe('morning-harwood App', function() {
  let page: MorningHarwoodPage;

  beforeEach(() => {
    page = new MorningHarwoodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
