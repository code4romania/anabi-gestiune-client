import { AnabiPage } from './app.po';

describe('anabi App', () => {
  let page: AnabiPage;

  beforeEach(() => {
    page = new AnabiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
