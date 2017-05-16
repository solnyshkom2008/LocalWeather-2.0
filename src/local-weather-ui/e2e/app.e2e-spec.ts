import { LocalWeatherUiPage } from './app.po';

describe('local-weather-ui App', () => {
  let page: LocalWeatherUiPage;

  beforeEach(() => {
    page = new LocalWeatherUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
