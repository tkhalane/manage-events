import { ManageEventsPage } from './app.po';

describe('manage-events App', function() {
  let page: ManageEventsPage;

  beforeEach(() => {
    page = new ManageEventsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
