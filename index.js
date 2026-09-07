import{a as f,S as d,i as l}from"./assets/vendor-B4VkUtbg.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function m(o){return f.get("https://pixabay.com/api/",{params:{key:"57499055-067e65e2e7e3e863d9f3345d3",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const y=new d(".gallery a"),c=document.querySelector(".gallery"),i=document.querySelector(".loader");i.style.display="none";function g(o){const t=o.map(({webformatURL:n,largeImageURL:a,tags:e,likes:r,views:s,comments:u,downloads:p})=>`
        <li class="gallery-item">
          <a href="${a}">
            <img
              class="gallery-image"
              src="${n}"
              alt="${e}"
            />
          </a>
          <div class="info">
            <p>Likes:<span>${r}</span></p>
            <p>Views:<span>${s}</span></p>
            <p>Comments:<span>${u}</span></p>
            <p>Downloads:<span>${p}</span></p>
          </div>
        </li>
      `).join("");c.innerHTML=t,y.refresh()}function h(){c.innerHTML=""}function L(){i.style.display="block"}function b(){i.style.display="none"}const S=document.querySelector(".form");S.addEventListener("submit",o=>{o.preventDefault();const t=o.currentTarget.elements["search-text"].value.trim();t!==""&&(h(),L(),m(t).then(n=>{if(n.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}o.currentTarget.elements["search-text"].value="",g(n.hits)}).catch(n=>{l.error({title:"Error",message:"Something went wrong. Please try again later."})}).finally(()=>{b()}))});
//# sourceMappingURL=index.js.map
