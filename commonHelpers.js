(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const d=document.querySelector(".js-open-btn"),i=document.querySelector(".js-mobile-menu"),a=document.querySelector(".js-close-btn");i&&(d&&d.addEventListener("click",()=>{i.classList.add("is-open")}),a&&a.addEventListener("click",()=>{i.classList.remove("is-open")}));const L=()=>new Date().getFullYear(),m=document.querySelector(".js-year");m&&(m.textContent=L());const b=()=>{window.scrollY!=0&&setTimeout(function(){window.scrollTo({top:0,behavior:"smooth"})},300)},l=t=>{const e=document.getElementById(t);if(e){const r=e.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:r-60,behavior:"smooth"})}},S=()=>{const t=document.documentElement.scrollHeight,e=window.scrollY;e<t&&setTimeout(function(){window.scrollBy({top:t-e,behavior:"smooth"})},300)},f=document.querySelector(".js-hero-scroll");f&&f.addEventListener("click",S);const g=document.querySelector(".js-footer-scroll");g&&g.addEventListener("click",b);const p=document.querySelector(".js-footer-menu");p&&p.addEventListener("click",t=>{const e=t.target;if(!e.matches("a"))return;t.preventDefault();const r=e.getAttribute("href").substring(1);l(r)});function w(){const t=E();t.length!==0&&t.forEach(e=>{e.classList.remove("current")})}function q(t){t.classList.add("current")}function E(){const t=document.querySelector(".nav-list");let e=[];return t&&(e=t.querySelectorAll("li")),e}const y=document.querySelector(".nav-list");y&&y.addEventListener("click",t=>{const e=t.target;if(!e.matches("a"))return;t.preventDefault(),w(),q(e.closest("li"));const r=e.getAttribute("href").substring(1);l(r)});const h=document.querySelector(".menu-nav-list"),v=document.querySelector(".js-mobile-menu");h&&v&&h.addEventListener("click",t=>{const e=t.target;if(!e.matches("a"))return;t.preventDefault();const r=e.getAttribute("href").substring(1);l(r),v.classList.remove("is-open")});const s=document.querySelector(".js-main-product");s&&s.addEventListener("click",()=>{s.classList.toggle("rotated"),setTimeout(()=>{s.classList.toggle("rotated")},4e3)});
//# sourceMappingURL=commonHelpers.js.map
