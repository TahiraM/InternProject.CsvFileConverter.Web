import { element, browser, by } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  describe('Deal Details ', function() {
    it('should have 14 edit boxes that are readonly', async function() {
      // Given
      await browser.get(browser.baseUrl + '/deals/02B4EFAD4432');

      // When
      const elements = element.all(by.css('.form-control'));
      const input = element.all(by.css('.form-control')).get(0);
      input.sendKeys('abcdefg');

      // Then
      expect(input.getAttribute('value')).not.toContain('abcdefg');
      expect(elements.count()).toEqual(14);
    });

    it('Should display a delete and edit button ', async function() {
      // Given
      await browser.get(browser.baseUrl + '/deals/02B4EFAD4432');

      // When
      const deleteButton = element(by.css('#delete')).isEnabled();
      const editButton = element(by.css('#edit')).isEnabled();

      // Then
      expect(deleteButton).toBeTruthy();
      expect(editButton).toBeTruthy();
    });
  });
});
