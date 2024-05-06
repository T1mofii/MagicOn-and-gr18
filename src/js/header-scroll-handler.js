import {onScrollToElement } from "./scroll";

const headerMenuRef = document.querySelector('.js-header-menu');

headerMenuRef &&
headerMenuRef.addEventListener('click', event => {
    const item = event.target;
    if (!item.matches('a')) return;
    event.preventDefault();   
    const targetId = item.getAttribute('href').substring(1);
    onScrollToElement(targetId);
  });
