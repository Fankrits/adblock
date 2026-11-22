// ==UserScript==
// @name         Manga Ad Remover (speed-manga / god-manga / go-manga)
// @namespace    https://github.com/Fankrits/adblock
// @version      1.0.0
// @description  Removes banner, floating, popup and tracking ads on speed-manga, god-manga and go-manga.
// @match        https://speed-manga.com/*
// @match        https://www.speed-manga.com/*
// @match        https://god-manga.com/*
// @match        https://www.god-manga.com/*
// @match        https://go-manga.com/*
// @match        https://www.go-manga.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  // Sites this script runs on. Links, iframes and images pointing anywhere else are treated as ads.
  const OWN_HOSTS = ['speed-manga.com', 'god-manga.com', 'go-manga.com'];

  // Off-site links that belong to the site itself (social and contact links), not ads.
  const ALLOWED_EXTERNAL = ['facebook.com', 'discord.gg', 'discord.com', 't.me'];

  // Ad networks, advertiser domains, tracking hosts and gambling/adult ad keywords.
  // Matched against image/iframe/link URLs and image alt text.
  const AD_PATTERN = new RegExp([
    'cdend\\.com', 'histats\\.com', 'ibit\\.ly', 'cutt\\.ly', 'cutly\\.ink', 't\\.ly\\b',
    'df-play\\.com', 'yut\\.red', '123-hd\\.net', 'baanseries',
    'ufa', 'sbobet', 'sbogool', 'sagame', 'sexy365', 'bacarat', 'baccarat', 'brazil999',
    'juad888', 'hydra888', 'jinda888', 'blm808', 'bet888', 'wy88', 'dafabet', 'luk666',
    'pi7', 'paruay', 'aitdedball', 'slot', 'casino', 'lotto',
    'สล็อต', 'แทงบอล', 'หวย', 'บาคาร่า', 'เว็บตรง', 'คลิปโป๊'
  ].join('|'), 'i');

  // Elements that are ads on these sites (from observed markup and the adblock filter list).
  const AD_SELECTORS = [
    '[id^="custom_html"]', '[id^="advanced_floating_content"]', '[id^="upcat_ads"]',
    '[id^="cat300_ads"]', '[id^="ads_0"]', '[id^="sticky-ads"]', '[id^="animekimiads"]',
    '[id^="bottom_center_ads"]', '#wbnn', '#floating_banner_top', '#bt-ads', '#close-teaser',
    '#teaserbottom', '#sticky-bottom', '#center_gomanga', '#center_gomanga3',
    '.center_gomanga', '.center_gomanga3', '.center_gomangasolo3', '.floating_content',
    '.advanced_floating_content', '.header-ads-section', '.ads-resm', '.gd-ban', '.mt-ad',
    '.th-ban', '.dessert-frame', '.sponsor-banners', '.ads-float', 'div.ads',
    'ins.adsbygoogle', '[class*="advert" i]', '[id*="advert" i]',
    '[class*="sponsor" i]', '[id*="sponsor" i]'
  ];

  const hostOf = (url) => {
    try {
      return new URL(url, location.href).hostname.replace(/^www\./, '');
    } catch (e) {
      return '';
    }
  };
  const matchesDomain = (host, domains) =>
    domains.some((d) => host === d || host.endsWith('.' + d));
  const isExternal = (url) => {
    const host = hostOf(url);
    return !!host && !matchesDomain(host, OWN_HOSTS) && !matchesDomain(host, ALLOWED_EXTERNAL);
  };

  // 1. Block the CSS of known ad containers before they render (no flash of ads).
  const style = document.createElement('style');
  style.textContent =
    AD_SELECTORS.join(',\n') +
    ' { display: none !important; }\n' +
    'iframe[src*="cdend"], iframe[src*="histats"] { display: none !important; }';
  document.documentElement.appendChild(style);

  // 2. Stop popup windows.
  window.open = () => null;

  // 3. DOM sweep: remove ads that are already present or added later.
  function sweep() {
    // Known ad containers.
    document.querySelectorAll(AD_SELECTORS.join(',')).forEach((el) => el.remove());

    // Iframes pointing off-site or at ad hosts.
    document.querySelectorAll('iframe').forEach((frame) => {
      const src = frame.getAttribute('src') || '';
      if (AD_PATTERN.test(src) || isExternal(src)) frame.remove();
    });

    // Images from ad hosts, and images inside links that leave the site.
    document.querySelectorAll('img').forEach((img) => {
      const link = img.closest('a');
      const linkHref = link ? link.getAttribute('href') || '' : '';
      const imgText = [img.currentSrc, img.src, img.getAttribute('data-src'), img.alt].join(' ');
      if (AD_PATTERN.test(imgText)) {
        (link || img).remove();
      } else if (link && isExternal(linkHref)) {
        link.remove();
      }
    });

    // Text or image links to off-site or ad destinations.
    document.querySelectorAll('a[href]').forEach((a) => {
      const href = a.getAttribute('href');
      if (AD_PATTERN.test(href) || isExternal(href)) a.remove();
    });

    // Fixed or sticky overlays (popups, floating banners, close buttons).
    document.querySelectorAll('body div, body aside, body section, body center, body span')
      .forEach((el) => {
        if (!el.isConnected) return;
        const pos = getComputedStyle(el).position;
        if (pos !== 'fixed' && pos !== 'sticky') return;
        if (el.matches('header, nav') || el.querySelector('header, nav')) return;
        const hasAdLink = Array.from(el.querySelectorAll('a[href]'))
          .some((a) => AD_PATTERN.test(a.getAttribute('href')) || isExternal(a.getAttribute('href')));
        const hasCloseButton = !!el.querySelector('img[src*="btn_close"]');
        if (hasAdLink || hasCloseButton) el.remove();
      });
  }

  const safeSweep = () => {
    try {
      sweep();
    } catch (e) {
      // Never let the script break the page.
    }
  };

  let queued = false;
  const queueSweep = () => {
    if (queued) return;
    queued = true;
    setTimeout(() => {
      queued = false;
      safeSweep();
    }, 50);
  };

  const start = () => {
    safeSweep();
    new MutationObserver(queueSweep).observe(document.documentElement, {
      childList: true,
      subtree: true
    });
    setInterval(safeSweep, 2000);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
