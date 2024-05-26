const fs = require('fs');
const path = require('path');
const axios = require('axios');
const urlRegex = /(?<=<loc>).*?(?=<\/loc>)/g;

// 读取/public目录下所有 sitemap-*.xml 文件
const dirPath = path.join(__dirname, '../public');
const sitemapFiles = fs.readdirSync(dirPath).filter(file => file.startsWith('sitemap-') && file.endsWith('.xml'));

// 遍历所有 sitemap 文件
const urlList = [];
sitemapFiles.forEach(file => {
  const sitemapPath = path.join(dirPath, file);
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  const urls = sitemapContent.match(urlRegex);
  urlList.push(...urls);
});

const data = {
  host: 'mojocn.org',
  key: '003706cf9d51402fa7e8e5851cbe6b88',
  keyLocation: 'https://mojocn.org/003706cf9d51402fa7e8e5851cbe6b88.txt',
  urlList
};
console.log(data);

axios.post('https://api.indexnow.org/IndexNow', data)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });