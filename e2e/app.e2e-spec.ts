import { WebAppAuthPage } from './app.po';

describe('web-app-auth App', () => {
  let page: WebAppAuthPage;

  beforeEach(() => {
    page = new WebAppAuthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
