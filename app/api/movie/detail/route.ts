import puppeteer from "puppeteer";
const url = `https://melongmovie.site/kill-shot-2023/`;

export async function GET(req: any, res: any) {
  const request = req.method === "GET";
  if (request) {
    const browser = await puppeteer.launch({
      headless: "new", // hide warn message
    });
    const page = await browser.newPage();
    await page.goto(url);

    const result = await page.evaluate(() => {
      const data: any = [];

      document.querySelectorAll(".dzdesu").forEach((el) => {
        el.querySelectorAll("li").forEach((el) => {
          el.querySelectorAll("a").forEach((el) => {
            const title = el.textContent;
            const link = el.href;
            data.push({ title, link });
          });
        });
      });
      return data;
    });

    console.log(result.slice(0, 2), result.length);
    await browser.close();
    return result;
  }
}
