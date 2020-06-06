import { toMatchImageSnapshot } from 'jest-image-snapshot';
import puppeteer from 'puppeteer';

expect.extend({ toMatchImageSnapshot });

const snapshotTestingTimeout = 10000;

// There might be some small difference between different
// resolutions and between graphical and headless
const failureThreshold = 0.005;

const matchImageOptions = {
  failureThreshold,
  failureThresholdType: 'percent',
} as const;

describe('snapshot testing', () => {
  let browser: puppeteer.Browser;

  beforeAll(async () => {
    browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  });

  it(
    'renders correctly',
    async () => {
      const page = await browser.newPage();
      await page.goto('http://localhost:3000?test');
      const image = await page.screenshot();

      expect(image).toMatchImageSnapshot(matchImageOptions);
    },
    snapshotTestingTimeout
  );

  afterAll(async () => {
    await browser.close();
  });
});
