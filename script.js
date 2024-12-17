const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const targetUrl = 'http://localhost:8080/%E8%A7%84%E8%8C%83/ESlint%20%E8%A7%84%E8%8C%83%20_%20%E5%89%8D%E7%AB%AF%E6%96%87%E6%A1%A3.htm';

  // 启动 Puppeteer 浏览器
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // 拦截资源请求，禁用外部脚本加载
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const resourceType = req.resourceType();
    if (['script', 'image', 'font'].includes(resourceType)) {
      req.abort(); // 禁用不需要的资源
    } else {
      req.continue();
    }
  });

  // 访问目标页面
  await page.goto(targetUrl, { waitUntil: 'networkidle0' });

  // 移除页面中的所有 <script> 标签
  await page.evaluate(() => {
    document.querySelectorAll('script').forEach(script => script.remove());
  });

  // 提取内联 CSS 样式
  const styles = await page.evaluate(() => {
    const styleSheets = Array.from(document.styleSheets);
    const cssRules = styleSheets.map(sheet => {
      try {
        return Array.from(sheet.cssRules || []).map(rule => rule.cssText).join('\n');
      } catch (e) {
        return ''; // 忽略跨域 CSS
      }
    });
    return cssRules.join('\n');
  });

  // 将提取的 CSS 样式添加到页面头部
  await page.evaluate((css) => {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }, styles);

  // 获取最终渲染后的 HTML 内容
  const finalHtml = await page.content();

  // 保存渲染后的 HTML 到文件
  fs.writeFileSync('rendered-page.html', finalHtml, 'utf-8');
  console.log('生成的静态页面已保存为 rendered-page.html');

  await browser.close();
})();
