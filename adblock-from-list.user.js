// ==UserScript==
// @name         Adblock list cosmetic filters
// @namespace    https://github.com/Fankrits/adblock
// @version      1.0.0
// @description  Hides the cosmetic ad components listed in adblock-list.txt (163 rules, 49 sites).
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
  "#upcat_ads1 > div:first-child > a:last-child > img"
 ],
 "inu-manga.com": [
  "div.mainholder:nth-child(2) > div.header-ads-section:nth-child(4)",
  "div.mainholder:nth-child(3) > div.header-ads-section:nth-child(4)"
 ],
 "murim-manga.com": [
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
  ".dessert-frame",
  "a:has(> img[src*=\"728x200\"])",
  "a:has(> img[src*=\"728x90\"])",
  "a:has(> img[src*=\"sbobet\"])",
  "a:has(> img[src*=\"ufa\"])",
  "a:has(> img[src*=\"jinda888\"])",
  "a:has(> img[src*=\"dafabet\"])",
  "a:has(> img[src*=\"wy88\"])",
  "a:has(> img[src*=\"luk666\"])",
  "a:has(> img[src*=\"blm808\"])",
  "a:has(> img[src*=\"bacarat\"])",
  "a:has(> img[src*=\"sagame\"])",
  "a:has(> img[src*=\"Pi7\"])",
  "a:has(> img[src*=\"888paruay\"])",
  "a:has(> img[src*=\"hydra888\"])",
  "a:has(> img[src*=\"brazil999\"])",
  "a:has(> img[src*=\"juad888\"])",
  "a[href*=\"ibit.ly\"]",
  "a[href*=\"cutt.ly\"]",
  "a[href*=\"888paruay\"]",
  "a[href*=\"123-hd\"]",
  "a[href*=\"ufagoal\"]",
  "a[href*=\"ufakick\"]"
 ],
 "makimaaaaa.com": [
  "#wbnn"
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
  "#advanced_floating_content_14922"
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
  "#bottom_center_ads"
 ],
 "lami-manga.com": [
  "#wbnn",
  "#content > div.wrapper > div.dessert-frame:first-child"
 ],
 "manga-titans.com": [
  "#custom_html-50 > div.widget_text.widget__inner.widget_custom_html__inner.c-widget-wrap > div.widget_text.widget-content > div.textwidget.custom-html-widget"
 ],
 "wasabith.com": [
  ".cat300_ads"
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
 "mangauptocats.net": [
  "#upcat_ads1"
 ],
 "mangauptocats.com": [
  "#upcat_ads3 > div",
  "#upcat_ads2 > div > a:last-child"
 ],
 "108read.com": [
  "div.ads:nth-child(8)"
 ],
 "niceoppai.net": [
  "#sct_top_banner > div.textwidget > center",
  "#sct_content > div.wpm_pag.mng_rdr:nth-child(4) > center:nth-child(9)",
  "#sct_content > div.wpm_pag.mng_rdr:nth-child(6) > center:nth-child(9)"
 ],
 "god-doujin.com": [
  "#ads_02 > div > a:last-child > img.ads-resm.loading",
  "#ads_04 > div > a:last-child > img.loading",
  "#ads_03 > div > a:last-child > img.ads-resm.loading",
  "#content > div.wrapper:last-child > div.gd-ban.text-center:first-child",
  "#ads_05 > div > a:last-child > img.ads-resm.loading",
  "#content > div.wrapper:last-child > div.gd-ban.text-center:first-child > div.row:first-child",
  "#content > div.gd-ban.text-center:first-child",
  ".gd-ban"
 ],
 "ntr-manga.com": [
  "div.header-ads-section:nth-child(6)",
  "div.header-ads-section:nth-child(7)",
  "div.header-ads-section:nth-child(5)"
 ],
 "doujin69.com": [
  "#wbnn",
  "#content > div.blox.mlb.kln:first-child > div.dessert-frame:last-child",
  "#wbnn > a:last-child > img",
  "#wbnn > a:nth-child(2) > img",
  "#wbnn > span.wbnn-close:first-child"
 ],
 "cat300.com": [
  "#custom_html-4",
  "#cat300_ads3 > div > a:last-child > img",
  "#cat300_ads2 > div > a:last-child > img",
  "#cat300_ads1 > div:last-child > a:last-child > img"
 ],
 "manga-uptocats.com": [
  "#upcat_ads2 > div > a:last-child > img.lazy.loaded",
  "#upcat_ads3 > div > a:last-child",
  "#custom_html-31"
 ],
 "meerkat-doujin.net": [
  ".ads-resm",
  "#ads_04 > div > a:last-child > img",
  "#custom_html-15"
 ],
 "toonhunter.com": [
  "#ads_02 > div > a:last-child > img.ads-resm.loading",
  "#ads_03 > div > a:last-child > img.ads-resm.loading",
  "#ads_04 > div > a:last-child > img.loading",
  "#ads_05 > div > a:last-child > img.ads-resm.loading",
  "#content > div.blox.mlb.kln:first-child > div.th-ban.text-center"
 ],
 "sixmanga.com": [
  "div.wrap:nth-child(2) > div.body-wrap > div.ads.col-md-12.text-center.mt-2.mb-2:nth-child(4)"
 ],
 "baan-series.co": [
  "#floating_banner_top"
 ],
 "anime-sugoi.com": [
  "#bt-ads"
 ],
 "moviethai.com": [
  "div.sponsor-banners:nth-child(3) > a > img.img-responsive"
 ],
 "mawtoload.com": [
  "#sticky-banner > div.side-banner:first-child > a:first-child > img.entered.lazyloaded:first-child",
  "#sticky-banner > div.side-banner:nth-child(2) > div > a:first-child > img.entered.lazyloaded:first-child",
  "#banner-post > div > a:last-child > img.aligncenter.wp-image-27883.size-full.entered.lazyloaded:first-child",
  "#banner-post > div > a:first-child",
  "#banner-post > div > a:nth-child(15) > img.aligncenter.wp-image-27883.size-full.entered.lazyloaded:first-child"
 ],
 "oredoujin.com": [
  "#content > div.wrapper > div.dessert-frame:first-child > center"
 ],
 "moodtoon.com": [
  "#content > div.blox.mlb.kln:first-child > div.mt-ad.text-center",
  "#ads_02 > div > a:last-child > img.ads-resm.loading",
  "#ads_05 > div > a:last-child > img.ads-resm.loading",
  "#ads_03 > div > a:last-child > img.ads-resm.loading",
  "#ads_04 > div > a:last-child > img",
  "#ads_04 > div > a:last-child"
 ],
 "go-manga.com": [
  "#sticky-bottom",
  "#center_gomanga3",
  ".center_gomanga3",
  ".center_gomangasolo3",
  ".floating_content",
  ".center_gomanga",
  "a:has(> img[src*=\"728x200\"])",
  "a:has(> img[src*=\"728x90\"])",
  "a:has(> img[src*=\"sbobet\"])",
  "a:has(> img[src*=\"ufa\"])",
  "a:has(> img[src*=\"jinda888\"])",
  "a:has(> img[src*=\"dafabet\"])",
  "a:has(> img[src*=\"wy88\"])",
  "a:has(> img[src*=\"luk666\"])",
  "a:has(> img[src*=\"blm808\"])",
  "a:has(> img[src*=\"bacarat\"])",
  "a:has(> img[src*=\"sagame\"])",
  "a:has(> img[src*=\"Pi7\"])",
  "a:has(> img[src*=\"888paruay\"])",
  "a:has(> img[src*=\"hydra888\"])",
  "a:has(> img[src*=\"brazil999\"])",
  "a:has(> img[src*=\"juad888\"])",
  "a[href*=\"ibit.ly\"]",
  "a[href*=\"cutt.ly\"]",
  "a[href*=\"888paruay\"]",
  "a[href*=\"123-hd\"]",
  "a[href*=\"ufagoal\"]",
  "a[href*=\"ufakick\"]"
 ],
 "animeyuzu.com": [
  "#animekimiads1",
  "#animekimiads5 > a:last-child",
  "#animekimiads5 > a:first-child",
  "#animekimiads2 > a",
  "#animekimiads3 > a"
 ],
 "tanuki-manga.com": [
  ".ads"
 ],
 "flash-manga.com": [
  ".header-ads-section",
  "div.header-ads-section:nth-child(6)"
 ],
 "nano-manga.com": [
  "#sticky-ads-bottom3",
  "#sticky-ads-bottom2",
  "#sticky-ads-bottom"
 ],
 "speed-manga.com": [
  "#close-teaser",
  "#close-teaser>img",
  "#teaserbottom",
  "a:has(> img[src*=\"728x200\"])",
  "a:has(> img[src*=\"728x90\"])",
  "a:has(> img[src*=\"sbobet\"])",
  "a:has(> img[src*=\"ufa\"])",
  "a:has(> img[src*=\"jinda888\"])",
  "a:has(> img[src*=\"dafabet\"])",
  "a:has(> img[src*=\"wy88\"])",
  "a:has(> img[src*=\"luk666\"])",
  "a:has(> img[src*=\"blm808\"])",
  "a:has(> img[src*=\"bacarat\"])",
  "a:has(> img[src*=\"sagame\"])",
  "a:has(> img[src*=\"Pi7\"])",
  "a:has(> img[src*=\"888paruay\"])",
  "a:has(> img[src*=\"hydra888\"])",
  "a:has(> img[src*=\"brazil999\"])",
  "a:has(> img[src*=\"juad888\"])",
  "a[href*=\"ibit.ly\"]",
  "a[href*=\"cutt.ly\"]",
  "a[href*=\"888paruay\"]",
  "a[href*=\"123-hd\"]",
  "a[href*=\"ufagoal\"]",
  "a[href*=\"ufakick\"]"
 ],
 "slow-manga.com": [
  ".header-ads-section",
  "div.header-ads-section:nth-child(6)",
  "div.header-ads-section:nth-child(6) > a:nth-child(6)",
  "div.header-ads-section:nth-child(6) > a:nth-child(5)",
  "div.header-ads-section:nth-child(6) > a:nth-child(7)"
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
