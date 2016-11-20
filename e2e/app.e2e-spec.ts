import { Ng2d3CliPage } from './app.po';

describe('ng2d3-cli App', function() {
  let page: Ng2d3CliPage;

  beforeEach(() => {
    page = new Ng2d3CliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
