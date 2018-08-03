import {element, browser, by } from 'protractor';
import {AppPage } from './app.po';

describe('workspace-project App', () =>  {
  let page: AppPage;

  beforeEach(() =>  {
    page = new AppPage();
  });

  describe('New deal ', function() {
    it('should go to create a new deal page', async function () {
      // Given
      await browser.get(browser.baseUrl);

      // When
      const newDeal = element(by.css('#newDealB'));

      // Then
      await newDeal.click().then(function () {
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/dealEdit');
      });
    });

    it('should have 14 edit boxes that are editable', async function() {
        // Given
        await browser.get(browser.baseUrl + '/dealEdit');
        await element.all(by.css('#saveButton')).isDisplayed();

        // When
        const elements = element.all(by.css('.form-control'));
        const input = await element.all(by.css('.form-control')).get(1);
        input.sendKeys('abcdefg');

        // Then
        expect(input.getAttribute('value')).toContain('abcdefg');
        expect(elements.count()).toEqual(15);
    });

    it('should Deal Id not be editable', async function() {
        // Given
        await browser.get(browser.baseUrl + '/dealEdit');
        await element.all(by.css('#saveButton')).isDisplayed();

        // When
        const input = await element.all(by.css('.form-control')).get(0);
        input.sendKeys('abcdefg');

        // Then
        expect(input.getAttribute('value')).not.toContain('abcdefg');
    });

    fit ('should save a new deal ', async function() {
        // Given
        await browser.get(browser.baseUrl + '/dealEdit');
        await element.all(by.css('#saveButton')).isDisplayed();
        const save = element(by.css('#saveButton'));

        // When
        await element.all(by.css('.form-control')).get(1).sendKeys('Hello');
        await element.all(by.css('.form-control')).get(4).sendKeys('Hello');
        await element.all(by.css('.form-control')).get(5).sendKeys('2');
        await element.all(by.css('.form-control')).get(7).sendKeys('3');
        await element.all(by.css('.form-control')).get(9).sendKeys('4');
        await element.all(by.css('.form-control')).get(11).sendKeys('8.9');
        await element.all(by.css('.form-control')).get(12).sendKeys('8.9');
        await element.all(by.css('.form-control')).get(14).sendKeys('2003-03-03T00:00:00');
        save.click();

        // Then
        await browser.getCurrentUrl();
        const elements = element.all(by.css('#dealsTable tr'));
        expect(elements.count()).toEqual(6);

    });

    fit('should delete a deal ', async function() {
        // Given
        await browser.get(browser.baseUrl);
        // const name = element.all(by.css('#link')).getText();
        const link = element.all(by.css('#link')).get(4);
        const name = link.getText();
        link.click();
        const deleteButton = element(by.css('#delete'));

        // When
        deleteButton.click();
        const table = element(by.css('#dealsTable')).isEnabled;
        await browser.getCurrentUrl();
        const elements = element.all(by.css('#dealsTable tr'));

        // Then
        expect(table ).toBeTruthy();
        expect(elements.count()).toEqual(5);
        expect(name.isPending).not.toBeTruthy();
      });

  });

});
