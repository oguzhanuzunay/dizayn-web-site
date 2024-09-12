/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.dizayngrup.com', // Sitenizin URL'si
  generateRobotsTxt: true,  // robots.txt dosyasını da oluştur
};
