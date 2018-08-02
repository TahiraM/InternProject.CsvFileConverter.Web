import { element, browser, by } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  describe('Main Page', function() {
    it('should display table containing list of deals', async function() {
      // Given
      await browser.get('http://localhost:4200');

      // When
      const dealsTable = element(by.css('#dealsTable')).isDisplayed();
      const newDeal = element(by.css('#newDealB')).isDisplayed();

      // Then
      expect(await dealsTable).toBeTruthy();
      expect(await newDeal).toBeTruthy();
     });

     it('should have 5 rows of deals showing', async function() {
      // Given
      await browser.get('http://localhost:4200');
      await element(by.css('#deleteButton')).isEnabled();

      // When
      const elements = element.all(by.css('#dealsTable tr'));

      // Then
      expect(elements.count()).toEqual(5);
     });

     it('should have 11 columns of deal entities showing', async function() {
      // Given
      await browser.get('http://localhost:4200');
      await element(by.css('#deleteButton')).isEnabled();

      // When
      const elements = element.all(by.css('#dealsTable th'));

      // Then
      expect(elements.count()).toEqual(11);
     });

     it('should go into a particular deals details', async function() {
      // Given
      await browser.get('http://localhost:4200');

      // When
      const elements = element.all(by.css('#link')).get(0);

      // Then
      elements.click().then(function() {
      expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/deals/02B4EFAD4432');
      });
    });

    it('Should be able to delete a deal', async function() {
       // Given
       await browser.get('http://localhost:4200/dealEdit');
       await element.all(by.css('#saveButton')).isDisplayed();
       const save = element(by.css('#saveButton'));
       await element.all(by.css('.form-control')).get(1).sendKeys('HelloDelete');
       await element.all(by.css('.form-control')).get(4).sendKeys('Hello');
       await element.all(by.css('.form-control')).get(5).sendKeys('2');
       await element.all(by.css('.form-control')).get(14).sendKeys('2003-03-03T00:00:00');
       save.click();

       // When
       await browser.getCurrentUrl();
       const deleteButton = element.all(by.css('#deleteButton')).get(4);
       deleteButton.click();

       // Then
       const elements = element.all(by.css('#dealsTable tr'));
       expect(elements.count()).toEqual(5);

    });
  });
});
