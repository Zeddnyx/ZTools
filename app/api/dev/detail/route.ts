import puppeteer from "puppeteer";
const url = `https://dev.to/hackmamba/libraries-vs-frameworks-which-is-right-for-your-next-web-project-32pl`;

export async function GET() {
  console.log("Starting...");
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
  console.log(result);
  await browser.close();
};
