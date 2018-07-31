import { element, browser } from 'protractor';
import { AppPage } from './app.po';
import { By } from '../../node_modules/@angular/platform-browser';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  describe('my app', function() {
    it('should display table containing list of deals', function() {
      browser.get('http://localhost:4200');
      browser.waitForAngular();
      expect(element(By.css('id[dealsTable]'))).toBeTruthy();
     });

     it('should have the new deal button available', function() {
      browser.get('http://localhost:4200');
      browser.waitForAngular();
      expect(element(By.css('button[newDealB]'))).toBeTruthy();
     });
  });
});
