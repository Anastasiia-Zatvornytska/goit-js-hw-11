import{a as f,S as m,i as l}from"./assets/vendor-B4VkUtbg.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function y(o){return f.get("https://pixabay.com/api/",{params:{key:"57499055-067e65e2e7e3e863d9f3345d3",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const g=new m(".gallery a"),u=document.querySelector(".gallery"),i=document.querySelector(".loader");i.style.display="none";function h(o){const t=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:n,comments:p,downloads:d})=>`
        <li class="gallery-item">
          <a href="${a}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${e}"
            />
          </a>
          <div class="info">
            <p>Likes:<span>${r}</span></p>
            <p>Views:<span>${n}</span></p>
            <p>Comments:<span>${p}</span></p>
            <p>Downloads:<span>${d}</span></p>
          </div>
        </li>
      `).join("");u.innerHTML=t,g.refresh()}function L(){u.innerHTML=""}function b(){i.style.display="block"}function c(){i.style.display="none"}const S=document.querySelector(".form");S.addEventListener("submit",o=>{o.preventDefault();const t=o.currentTarget.elements["search-text"].value.trim();o.currentTarget.elements["search-text"].value="",L(),b(),y(t).then(s=>{if(c(),s.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}h(s.hits)}).catch(s=>{c(),l.error({title:"Error",message:"Something went wrong. Please try again later."})})});
//# sourceMappingURL=index.js.map
