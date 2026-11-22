// ==UserScript==
// @name         Adblock list cosmetic filters
// @namespace    https://github.com/Fankrits/adblock
// @version      1.0.0
// @description  Hides the cosmetic ad components listed in adblock-list.txt (252 rules, 67 sites).
// @match        *://*/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

// Generated from adblock-list.txt. Do not edit by hand: regenerate from the list instead.
(() => {
  'use strict';

  // domain -> CSS selectors. "*" applies on every site.
  const RULES = {
 "*": [
  "#custom_html-33",
  "#upcat_ads1 > div:first-child > a:last-child > img",
  "div.wrap:first-child > div.body-wrap > div.c-sidebar.c-top-sidebar.wp-manga:nth-child(2)",
  "#post-225378 > div.entry-content.entry-content-single.maincontent:nth-child(3) > div.chdesc:first-child > p"
 ],
 "inu-manga.com": [
  "div.mainholder:nth-child(2) > div.header-ads-section:nth-child(4)",
  "div.mainholder:nth-child(3) > div.header-ads-section:nth-child(4)"
 ],
 "murim-manga.com": [
  "#content > div.wrapper > center:first-child",
  "#wbnn",
  "#content > div.wrapper > div.dessert-frame:first-child"
 ],
 "god-manga.com": [
  "header.header:nth-child(4) > div.blox.mlb.kln:nth-child(4) > div.dessert-frame > center",
  "#wbnn",
  "main:nth-child(6) > div.content:first-child > div.ads:nth-child(3)",
  "main:nth-child(6) > div.content:first-child > div.container:last-child > div.ads:nth-child(2)",
  "div.ads:nth-child(6)",
  "header.header:nth-child(3) > div.blox.mlb.kln:nth-child(4) > div.dessert-frame > center",
  "div.ads:nth-child(9)",
  ".dessert-frame"
 ],
 "makimaaaaa.com": [
  "#content > div.blox.mlb.kln:first-child > center",
  "#wbnn",
  "#post-80722 > div.entry-content.entry-content-single.maincontent:nth-child(3) > div.chdesc:first-child > p",
  ".chdesc",
  ".chaptertags",
  "#colophon",
  "div.mainholder:nth-child(3) > a.scrollToTop:nth-child(7)"
 ],
 "niceoppai.net": [
  "#text-90 > div.con:last-child",
  "#text-33 > div.textwidget > center",
  "#sct_top_banner > div.textwidget > center",
  "#sct_content > div.wpm_pag.mng_rdr:nth-child(4) > center:nth-child(9)",
  "#text-2 > div.textwidget > center",
  "#text-6 > div.con:last-child",
  "#sct_content > div.wpm_pag.mng_rdr:nth-child(6) > center:nth-child(9)"
 ],
 "thaimanga.net": [
  "div.ads:nth-child(7)",
  "div.ads:nth-child(8)"
 ],
 "manhuakey.com": [
  "div.wrap:nth-child(9) > div.body-wrap > div.ads.col-md-12.text-center.mt-2.mb-2:nth-child(4)",
  "div.wrap:nth-child(10) > div.body-wrap > div.ads.col-md-12.text-center.mt-2.mb-2:nth-child(4)",
  "div.ads-float:nth-child(46) > div > a:last-child > img",
  "div.ads-float:nth-child(45) > div > a:last-child > img",
  "div.ads-float:nth-child(47) > div > a:last-child > img",
  "div.ads-float:nth-child(38) > div > a:last-child > img",
  "div.wrap:first-child > div.body-wrap > div.ads.col-md-12.text-center.mt-2.mb-2:nth-child(4)"
 ],
 "rose-manga.com": [
  "#wbnn",
  "main:nth-child(5) > div.content:first-child > div.ads:nth-child(3)"
 ],
 "popsmanga.com": [
  "#content > div.wrapper > div.dessert-frame:first-child > center",
  "#wbnn",
  "#content > div.wrapper > div.dessert-frame:nth-child(2)"
 ],
 "nabee-manga.com": [
  "div.wrap:nth-child(9) > div.body-wrap > div.header-ads-section:nth-child(4)",
  "div.wrap:nth-child(10) > div.body-wrap > div.header-ads-section:nth-child(4)"
 ],
 "manhwathailand.com": [
  "#wbnn",
  "main:nth-child(5) > div.content:first-child > div.ads:nth-child(3)",
  "main:nth-child(5) > div.content:first-child > div.container:last-child > div.ads:nth-child(2)"
 ],
 "catzaa.com": [
  "#custom_html-40",
  "#bottom_center_ads_1 > div:first-child > a:last-child > img",
  "#advanced_floating_content_14918",
  "#advanced_floating_content_14922",
  "div.wrap:nth-child(2) > div.body-wrap > div.c-sidebar.c-top-sidebar.wp-manga:nth-child(2)"
 ],
 "haremmanga.net": [
  "div.header-ads-section:nth-child(8)",
  "div.header-ads-section:nth-child(9)"
 ],
 "manga-sugoi.com": [
  "#wbnn",
  "main:nth-child(5) > div.content:first-child > div.ads:nth-child(2) > a > img",
  "main:nth-child(5) > div.content:first-child > div.ads:nth-child(2)"
 ],
 "mangauptocats.net": [
  "div.wrap:nth-child(2) > div.body-wrap > div.c-sidebar.c-top-sidebar.wp-manga:nth-child(2)",
  "#upcat_ads1"
 ],
 "ped-manga.com": [
  "#wbnn",
  "#content > div.wrapper > div.dessert-frame:first-child"
 ],
 "kapimanga.com": [
  "div.wrap:nth-child(10) > div.body-wrap > div.ads.col-md-12.text-center.mt-2.mb-2:nth-child(4)"
 ],
 "oremanga.net": [
  "div.header-ads-section:nth-child(9)"
 ],
 "expmanga.com": [
  "#wbnn"
 ],
 "mangafin.me": [
  "#advanced_floating_content_3604",
  "#advanced_floating_content_3602",
  "#bottom_center_ads",
  "div.wrap:nth-child(25) > div.body-wrap > div.c-sidebar.c-top-sidebar:nth-child(2)"
 ],
 "plawarn-manga.net": [
  "div.container-fluid:nth-child(4) > article.article.container.p-0 > a:nth-child(2) > img.lazy.animated.fadeIn.loaded",
  "div.container-fluid:nth-child(4) > article.article.container.p-0 > div.row:last-child > div.article__content.col-lg-8:first-child > div.mb-4:nth-child(3)",
  "div.container-fluid:nth-child(4) > article.article.container.p-0 > div.row:last-child > div.article__content.col-lg-8:first-child > div.mb-4:nth-child(2) > p"
 ],
 "lami-manga.com": [
  "#wbnn",
  "#content > div.wrapper > div.dessert-frame:first-child"
 ],
 "manga-titans.com": [
  "#custom_html-50 > div.widget_text.widget__inner.widget_custom_html__inner.c-widget-wrap > div.widget_text.widget-content > div.textwidget.custom-html-widget",
  "div.wrap:nth-child(2) > div.body-wrap > footer.site-footer:last-child > div.c-footer-sidebar:first-child > div.container > div.row.c-row"
 ],
 "wasabith.com": [
  ".cat300_ads",
  "div.wrap:nth-child(2) > div.body-wrap > div.col-md-12.text-center.mt-2:nth-child(2)"
 ],
 "spy-manga.com": [
  "#content > div.wrapper > div.dessert-frame:first-child > center",
  "#wbnn"
 ],
 "toomtam-manga.com": [
  "#wbnn",
  "#content > div.wrapper > div.dessert-frame:first-child > center"
 ],
 "cats-translator.com": [
  "#custom_html-34 > div.widget_text.widget__inner.widget_custom_html__inner.c-widget-wrap > div.widget_text.widget-content > div.textwidget.custom-html-widget > div.text-center > div.col-12",
  "#bottom_center_ads > div:first-child > a:last-child > img",
  ".advanced_floating_content"
 ],
 "mangauptocats.com": [
  "div.wrap:nth-child(2) > div.body-wrap > div.c-sidebar.c-top-sidebar.wp-manga:nth-child(2)",
  "#upcat_ads3 > div",
  "#upcat_ads2 > div > a:last-child"
 ],
 "108read.com": [
  "div.ads:nth-child(8)"
 ],
 "god-doujin.com": [
  "#ads_02 > div > a:last-child > img.ads-resm.loading",
  "#ads_04 > div > a:last-child > img.loading",
  "#ads_03 > div > a:last-child > img.ads-resm.loading",
  "#content > div.wrapper:last-child > div.gd-ban.text-center:first-child",
  "#ads_05 > div > a:last-child > img.ads-resm.loading",
  "#content > div.wrapper:last-child > div.gd-ban.text-center:first-child > div.row:first-child",
  "#content > div.gd-ban.text-center:first-child",
  ".gd-ban, .text-center"
 ],
 "ntr-manga.com": [
  "div.header-ads-section:nth-child(6)",
  "div.header-ads-section:nth-child(7)",
  "#sidebar > div.widget_text.section:first-child > div.textwidget.custom-html-widget:last-child > div > iframe",
  "#sidebar > div.widget_text.section:first-child > div.releases:first-child",
  "#sidebar > div.widget_text.section:first-child > div.textwidget.custom-html-widget:last-child",
  "div.header-ads-section:nth-child(5)"
 ],
 "doujin69.com": [
  "#wbnn",
  "#content > div.blox.mlb.kln:first-child > div.dessert-frame:last-child",
  "#content > div.blox.mlb.kln:first-child > center:first-child > a > img",
  "#wbnn > a:last-child > img",
  "#wbnn > a:nth-child(2) > img",
  "#wbnn > span.wbnn-close:first-child"
 ],
 "1stkissmanga.io": [
  "div.wrap:nth-child(2) > div.body-wrap > header.site-header:first-child > div.c-sub-header-nav.with-border.sticky:last-child"
 ],
 "cat300.com": [
  "#custom_html-4",
  "div.wrap:nth-child(33) > div.body-wrap > div.c-sidebar.c-top-sidebar.wp-manga:nth-child(2)",
  "#cat300_ads3 > div > a:last-child > img",
  "#cat300_ads2 > div > a:last-child > img",
  "div.wrap:nth-child(33) > div.body-wrap > header.site-header:first-child > div.c-sub-header-nav.with-border.sticky:last-child",
  "div.wrap:nth-child(35) > div.body-wrap > div.c-sidebar.c-top-sidebar.wp-manga:nth-child(2)",
  "#cat300_ads1 > div:last-child > a:last-child > img",
  "div.wrap:nth-child(35) > div.body-wrap > header.site-header:first-child > div.c-sub-header-nav.with-border.sticky:last-child",
  "div.wrap:nth-child(34) > div.body-wrap > div.c-sidebar.c-top-sidebar.wp-manga:nth-child(2)",
  "div.wrap:nth-child(34) > div.body-wrap > header.site-header:first-child > div.c-sub-header-nav.with-border.sticky:last-child"
 ],
 "manga-uptocats.com": [
  "#upcat_ads2 > div > a:last-child > img.lazy.loaded",
  "#upcat_ads3 > div > a:last-child",
  "#custom_html-31"
 ],
 "meerkat-doujin.net": [
  ".ads-resm",
  "#ads_04 > div > a:last-child > img",
  "div.wrap:nth-child(10) > div.body-wrap > div.c-sidebar.c-top-sidebar.wp-manga:nth-child(2)",
  "div.wrap:nth-child(10) > div.body-wrap > header.site-header:first-child > div.c-sub-header-nav.with-border.sticky:last-child",
  "#custom_html-15"
 ],
 "toonhunter.com": [
  "#ads_02 > div > a:last-child > img.ads-resm.loading",
  "#ads_03 > div > a:last-child > img.ads-resm.loading",
  "#ads_04 > div > a:last-child > img.loading",
  "#ads_05 > div > a:last-child > img.ads-resm.loading",
  "#content > div.blox.mlb.kln:first-child > div.th-ban.text-center"
 ],
 "miku-doujin.com": [
  "div.container.text-center.mb-3:nth-child(4)"
 ],
 "makeuseof.com": [
  "div.fEy1Z2XT:last-child > div.dgEhJe6g"
 ],
 "sixmanga.com": [
  "div.wrap:nth-child(2) > div.body-wrap > header.site-header:first-child > div.no-subnav.c-sub-header-nav.with-border.sticky:last-child",
  "div.wrap:nth-child(2) > div.body-wrap > div.ads.col-md-12.text-center.mt-2.mb-2:nth-child(4)"
 ],
 "baan-series.co": [
  "div.container.movie-container:nth-child(5) > div.row.mt-1:last-child > div.row:first-child > div.col-12 > div.text-center",
  "div.container.movie-container:last-child > div.row.mt-4:last-child > div.row:first-child",
  "#floating_banner_top",
  "#misa-content > div.row:last-child > div.col-md-12:last-child > div.card > div.card-body:last-child > center:first-child",
  "#misa-content > div.row:last-child > div.col-lg-12:first-child",
  "#misa-content > div.row:last-child > div.col-md-12:last-child > div.card > div.card-body:last-child > center:last-child",
  "div.container.movie-container:last-child > div.row.mt-4:last-child > div.col-lg-3:nth-child(4) > div.row > div.col-lg-12.mb-3:first-child",
  "div.container.movie-container:nth-child(5) > div.row.mt-4:last-child > div.row:first-child"
 ],
 "animehayai.net": [
  "div.container:nth-child(3) > div.col-12:nth-child(2) > div.text-center.bottom-2x > div.row"
 ],
 "anime-sugoi.com": [
  "div.container:nth-child(4) > div.row > center:nth-child(2)",
  "#bt-ads",
  "div.container:nth-child(3) > div.row > div.col-md-8:last-child",
  "div.container:nth-child(4) > div.row > div.col-lg-9:nth-child(4) > div.panel.panel-danger > div.panel-body:last-child > center:nth-child(4)"
 ],
 "hentaithai.com": [
  "#mQ8SrCAn",
  "div.container:nth-child(3) > div > div.row:nth-child(5) > div.col-12.col-md-9:first-child > div.row > div.col-12:last-child > div.pEXC5Wlz:nth-child(6)",
  ".j6oH2eL0",
  "#fxod0kdE",
  "#divExoLayerWrapper",
  "div.container:nth-child(4) > div > div.row:nth-child(2)",
  "div.container:nth-child(4) > div > div.row:nth-child(5) > div.col-12.col-md-9:first-child > div.row > div.col-12:nth-child(2)",
  "#yWHRwgCl",
  "#p8xgamWG",
  ".hIIAy1h7"
 ],
 "moviethai.com": [
  "div.sponsor-banners:nth-child(3) > a > img.img-responsive"
 ],
 "fotor.com": [
  "#main > div._1Pece:last-child",
  "#main > div.d4T4M:first-child > div._3KDv2:last-child"
 ],
 "mawtoload.com": [
  "#sticky-banner > div.side-banner:first-child > a:first-child > img.entered.lazyloaded:first-child",
  "#sticky-banner > div.side-banner:nth-child(2) > div > a:first-child > img.entered.lazyloaded:first-child",
  "#banner-post > div > a:last-child > img.aligncenter.wp-image-27883.size-full.entered.lazyloaded:first-child",
  "#banner-post > div > a:first-child",
  "#banner-post > div > a:nth-child(15) > img.aligncenter.wp-image-27883.size-full.entered.lazyloaded:first-child"
 ],
 "manga-moons.com": [
  "#post-471049 > div.socialts:nth-child(2)",
  "#post-471049 > div.entry-content.entry-content-single.maincontent:nth-child(4) > div.chdesc:first-child > p",
  "#post-471049 > div.ts-breadcrumb.bixbox:nth-child(3)",
  "#post-471049 > div.chaptertags:last-child",
  "#colophon > div.footercopyright > div.copyright:last-child > div.txt > p"
 ],
 "manga168.com": [
  "#colophon > div.footercopyright:nth-child(2) > div.socialbutton:last-child"
 ],
 "gamepur.com": [
  "div.fEy1Z2XT:last-child > div.dgEhJe6g",
  "div.fEy1Z2XT:last-child"
 ],
 "nunghub.com": [
  "#header"
 ],
 "oredoujin.com": [
  "#content > div.wrapper > div.dessert-frame:first-child > center"
 ],
 "storyboardthat.com": [
  "#dvUpgradeBarTop"
 ],
 "thegamer.com": [
  "div.fEy1Z2XT:last-child > div.dgEhJe6g > div._9r0K-Oum._5kE-6aUK:first-child",
  "div.fEy1Z2XT:last-child > div.dgEhJe6g > div.aJVLc6uP:last-child",
  "div.fEy1Z2XT:last-child"
 ],
 "moodtoon.com": [
  "#content > div.blox.mlb.kln:first-child > div.mt-ad.text-center",
  "#ads_02 > div > a:last-child > img.ads-resm.loading",
  "#ads_05 > div > a:last-child > img.ads-resm.loading",
  "#ads_03 > div > a:last-child > img.ads-resm.loading",
  "#ads_04 > div > a:last-child > img",
  "#ads_04 > div > a:last-child"
 ],
 "mangakimi.com": [
  ".chdesc",
  ".chaptertags"
 ],
 "go-manga.com": [
  "#content > div.wrapper > div.readingnav.rnavtop:nth-child(13)",
  "#content > div.wrapper > div.readingnav.rnavbot:nth-child(14) > div.readingnavbot:last-child > div.readingoption:last-child",
  "#sticky-bottom",
  "#center_gomanga3",
  ".center_gomanga3",
  ".center_gomangasolo3",
  ".floating_content",
  "#post-443509 > div.entry-content.entry-content-single.maincontent:nth-child(3) > div.chdesc:first-child > p",
  "div:first-child > h1",
  ".readingnav, .rnavbot",
  "#post-424307 > div.entry-content.entry-content-single.maincontent:nth-child(3) > div.chdesc:first-child > p",
  ".chdesc",
  "#footer",
  "div:nth-child(19)",
  "#post-489221 > div.chaptertags:last-child",
  "#comments",
  ".center_gomanga",
  "div:nth-child(21)"
 ],
 "animeyuzu.com": [
  "#animekimiads1",
  "#animekimiads5 > a:last-child",
  "#animekimiads5 > a:first-child",
  "#animekimiads2 > a",
  "#animekimiads3 > a"
 ],
 "manhwaclan.com": [
  "div.wrap:first-child > div.body-wrap > header.site-header:first-child > div.c-sub-header-nav.with-border.sticky:last-child"
 ],
 "doujin-lc.net": [
  ".c-sub-header-nav, .with-border, .sticky"
 ],
 "manga-lc.net": [
  "div.wrap:first-child > div.body-wrap > header.site-header.mobile:first-child"
 ],
 "tanuki-manga.com": [
  ".ads, .col-md-12, .text-center, .mt-2, .mb-2"
 ],
 "flash-manga.com": [
  ".header-ads-section",
  "div.header-ads-section:nth-child(6)"
 ],
 "nano-manga.com": [
  "#block-5 > div.widget__inner.widget_block__inner.c-widget-wrap > div.widget-content > div.center",
  "#sticky-ads-bottom3",
  "#sticky-ads-bottom2",
  "#sticky-ads-bottom"
 ],
 "speed-manga.com": [
  "#close-teaser",
  "#close-teaser>img",
  ".readingnav, .rnavbot",
  "#teaserbottom",
  ".chdesc",
  "#colophon"
 ],
 "slow-manga.com": [
  ".header-ads-section",
  "div.header-ads-section:nth-child(6)",
  "div.header-ads-section:nth-child(6) > a:nth-child(6)",
  "div.header-ads-section:nth-child(6) > a:nth-child(5)",
  "div.header-ads-section:nth-child(6) > a:nth-child(7)"
 ],
 "miku-manga.com": [
  ".wrapper",
  ".readingnav, .rnavbot"
 ]
};

  const host = location.hostname.replace(/^www\./, '');
  const selectors = [].concat(RULES['*'] || []);
  for (const domain of Object.keys(RULES)) {
    if (domain !== '*' && (host === domain || host.endsWith('.' + domain))) {
      selectors.push(...RULES[domain]);
    }
  }
  if (selectors.length === 0) return;

  const style = document.createElement('style');
  document.documentElement.appendChild(style);
  const sheet = style.sheet;

  // One rule per selector, so a single invalid selector does not drop the rest.
  for (const selector of selectors) {
    try {
      sheet.insertRule(`${selector} { display: none !important; }`, sheet.cssRules.length);
    } catch (e) {
      // Selector not supported by this browser or malformed: skip it.
    }
  }
})();
