import puppeteer from "puppeteer";
const search = "jsjsjsjsjjs";
const url = `https://melongmovie.site/?s=${search}`;

export async function GET() {
  console.log("Starting...");
  const browser = await puppeteer.launch({
    headless: "new", // hide warn message
  });
  const page = await browser.newPage();
  await page.goto(url);

  const result = await page.evaluate(() => {
    const data:any = [];

    document.querySelectorAll(".bx").forEach((el) => {
      const img = el.querySelector("img")?.src;
      const title = el.querySelector(".entry-title")?.textContent;
      const info = el.querySelector(".addinfox-text")?.textContent;
      const link = el.querySelector(".tip").href;
      const quality = el.querySelector(".overlay")?.textContent;
      data.push({ img, title, info, link, quality });
    });
    return data;
  });

  console.log(result.slice(0, 10), result.length);
  await browser.close();
  return result;
};
