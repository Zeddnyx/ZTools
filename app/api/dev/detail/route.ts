import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET(req: NextRequest, detail: any) {
  const request = req.method === "GET";
  if (request) {
    const url = `https://dev.to/${detail}`;
    const browser = await puppeteer.launch({
      headless: "new", // hide warn message
    });
    const page = await browser.newPage();
    await page.goto(url);

    const result = await page.evaluate(() => {
      const data = [];
      const title = document.querySelector(".crayons-article__header__meta h1")
        ?.textContent;
      const tag = document.querySelectorAll(".crayons-tag");
      tag.forEach((el) => {
        const tag = el.querySelector("a");
        data.push(tag?.href);
      });
      const article = document.querySelector(".crayons-article__body")
        ?.textContent;
      data.push(title, article);
      return data;
    });
    await browser.close();
    return NextResponse.json(result)
  }
}
