import { NextApiRequest } from "next";
const search = "reactjs";
const url = `https://dev.to/search?q=${search}&sort_by=published_at&sort_direction=desc`;
import puppeteer from "puppeteer";

export async function GET(req: NextApiRequest) {
  const request = req.method === "GET";
  if (request) {
    const browser = await puppeteer.launch({
      headless: "new", // hide warn message
    });
    const page = await browser.newPage();
    await page.setExtraHTTPHeaders({
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36",
      "upgrade-insecure-requests": "1",
    });
    await page.goto(url);

    const result = await page.evaluate(() => {
      const data: any = [];
      const parent = document.querySelectorAll(".crayons-story__body");
      parent.forEach((el: any) => {
        const title = el.querySelector(".crayons-story__title")?.textContent;
        const link = el.querySelector("h3 a")?.href;
        const time = el.querySelector(".crayons-story__tertiary")?.textContent;
        const author = el.querySelector(".crayons-story__secondary")
          ?.textContent;
        data.push({ author, time, title, link });
      });
      return data;
    });

    await browser.close();

    return result;
  } else {
    return console.log("error");
  }
}
