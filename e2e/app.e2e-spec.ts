import { AngularCliprojectPage } from './app.po';

describe('angular-cliproject App', function() {
  let page: AngularCliprojectPage;

  beforeEach(() => {
    page = new AngularCliprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
