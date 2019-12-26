import { toMatchImageSnapshot } from 'jest-image-snapshot';
import puppeteer from 'puppeteer';

expect.extend({ toMatchImageSnapshot });

describe('snapshot testing', () => {

    let browser: puppeteer.Browser;

    beforeAll(async () => {
        browser = await puppeteer.launch()
    })

    it('renders correctly', async () => {
        const page = await browser.newPage();
        await page.goto('http://localhost:3000');
        const image = await page.screenshot();
      
        expect(image).toMatchImageSnapshot();
      });

})