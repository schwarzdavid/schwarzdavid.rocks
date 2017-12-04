"use strict";!function(){function e(){a.forEach(function(e){var t=e.getContext("2d"),a=parseInt(window.getComputedStyle(e).width),i=parseInt(e.dataset.value),c=window.devicePixelRatio;t.scale(c,c),e.width=a,e.height=a,t.lineWidth=o,t.beginPath(),t.strokeStyle=n,t.arc(a/2,a/2,a/2-o,0,2*Math.PI),t.stroke(),t.beginPath(),t.strokeStyle=r,t.arc(a/2,a/2,a/2-o,-Math.PI/2,2*Math.PI/100*i-Math.PI/2),t.stroke()})}function t(){e()}var n="#eaeaea",r="#2c2c2c",o=15,a=Array.from(document.querySelectorAll("#languages .lang canvas"));window.addEventListener("resize",t),t()}(),function(){var e="filled",t="https://formspree.io/schwarz.david10@gmail.com",n="SUCCESSFULLY SENT!",r=Array.from(document.querySelectorAll("#contact input, #contact textarea")),o=document.querySelector("#input-message"),a=document.querySelector("#contact form"),i=document.querySelector("#contact button");o.addEventListener("input",function(){requestAnimationFrame(function(){o.style.height="auto",o.style.height=o.scrollHeight+"px"})}),a.addEventListener("submit",function(o){if(o.preventDefault(),grecaptcha.getResponse()){var c=new XMLHttpRequest,l={},s=!0,u=!1,d=void 0;try{for(var f,v=r[Symbol.iterator]();!(s=(f=v.next()).done);s=!0){var m=f.value;l[m.name]=m.value}}catch(e){u=!0,d=e}finally{try{!s&&v.return&&v.return()}finally{if(u)throw d}}c.open("POST",t),c.setRequestHeader("Accept","application/json"),c.setRequestHeader("Content-Type","application/json"),c.addEventListener("error",function(){alert("Unexpected error occured. Please try again later!")}),c.addEventListener("load",function(){var t=Array.from(document.querySelectorAll("."+e));a.reset(),requestAnimationFrame(function(){i.classList.add("finished"),i.textContent=n;var r=!0,o=!1,a=void 0;try{for(var c,l=t[Symbol.iterator]();!(r=(c=l.next()).done);r=!0)c.value.classList.remove(e)}catch(e){o=!0,a=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw a}}})}),c.send(JSON.stringify(l))}else alert("Please complete recaptcha!")}),r.forEach(function(t){t.addEventListener("keyup",function(){requestAnimationFrame(function(){if(t.value)return t.classList.add(e);t.classList.remove(e)})})})}(),function(e){var t="cookiesAccepted",n="invertMe",r=document.querySelector("#cookies"),o=document.querySelector("#map"),a=document.querySelectorAll("a."+n);e.initMap=function(){var e={lat:48.202765,lng:16.303881},t={lat:e.lat-.005,lng:e.lng},n=new google.maps.Map(o,{center:t,zoom:11,clickableIcons:!1,disableDefaultUI:!0,keyboardShortcuts:!1,zoomControl:!1,scrollwheel:!1,styles:[{stylers:[{hue:"#000000"},{saturation:-110},{gamma:1.7}]}]});new google.maps.Marker({position:e,map:n})},function(){console.info("You like to look under the hood? Check out the source code on github 😎\nhttps://github.com/schwarzdavid/schwarzdavid.rocks"),window.localStorage.getItem(t)||(r.style.display="block",r.addEventListener("click",function(e){e.preventDefault(),window.localStorage.setItem(t,!0),r.style.display="none"}));for(var e=0;e<a.length;e++){var o=a[e],i=o.textContent.split("").reverse().join("");if(o.textContent=i,o.classList.remove(n),"A"===o.nodeName){var c=o.href.split("#")[1];o.href=(c?c+":":"")+i}}}()}(window),function(){function e(e){var t=e.toString().toLowerCase(),r="";for(var o in n)n[o]===t&&(r=o);return r}function t(e){requestAnimationFrame(function(){a.dataset.active=n[e]})}var n={HOME:"home",TEASER:"teaser",RESUME:"resume"},r=Array.from(document.querySelectorAll("[data-link]")),o=Array.from(document.querySelectorAll("[data-switch]")),a=document.body;o.forEach(function(n){n.addEventListener("click",function(r){r.preventDefault();var o=n.dataset.switch.split("-"),i=a.dataset.active,c=o[0];i===o[0].toString().toLowerCase()&&(c=o[1]);var l=e(c);if(!l)throw new Error("Illegal page: "+c);return t(l)})}),r.forEach(function(n){n.addEventListener("click",function(r){r.preventDefault();var o=n.dataset.link,a=e(o);if(!a)throw new Error("Illegal page: "+o);return t(a)})})}(),function(){function e(e){if(e.length>1)throw new Error("too many entries on observer");g=e[0].isIntersecting}function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f;requestAnimationFrame(function(){L.classList.remove("notransition");var t=!0,n=!1,r=void 0;try{for(var o,a=E[Symbol.iterator]();!(t=(o=a.next()).done);t=!0)o.value.classList.remove(s)}catch(e){n=!0,r=e}finally{try{!t&&a.return&&a.return()}finally{if(n)throw r}}L.style.transform="translateX("+-100*e+"%)",E[e].classList.add(s),q.value=e+1})}function n(){g&&(f<E.length-1?f++:f=0,t())}function r(e,t){v={x:e,y:t},clearInterval(p),clearTimeout(S),p=null,S=null,requestAnimationFrame(function(){L.classList.add("notransition")}),w||(w=setTimeout(function(){requestAnimationFrame(function(){var e=!0,t=!1,n=void 0;try{for(var r,o=E[Symbol.iterator]();!(e=(r=o.next()).done);e=!0)r.value.classList.remove(s)}catch(e){t=!0,n=e}finally{try{!e&&o.return&&o.return()}finally{if(t)throw n}}h=!0})},u))}function o(e,t){if(v){var n=v.x-e,r=parseInt(window.getComputedStyle(L).width),o=-100*(f+n/r);requestAnimationFrame(function(){L.style.transform="translateX("+o+"%)"}),y={x:e,y:t}}}function a(){if(v&&y){var e=(v.x-y.x)/parseInt(window.getComputedStyle(L).width);e<-l&&f>0&&f--,e>l&&f<E.length-1&&f++}t(f),clearTimeout(w),v=null,y=null,w=null,S=setTimeout(function(){p=setInterval(n,c)},d)}function i(){m&&(m=null,a())}var c=5e3,l=.25,s="active",u=150,d=2e3,f=0,v=void 0,m=void 0,y=void 0,h=void 0,p=void 0,g=!0,w=void 0,S=void 0,L=document.querySelector("#projects .project-slider"),E=Array.from(document.querySelectorAll("#projects .project")),q=document.querySelector("#projects .project-wrapper progress"),x=document.querySelector("#projects");L.addEventListener("touchstart",function(e){e.touches.length>1||r((m={x:e.touches[0].screenX,y:e.touches[0].screenY,identifier:e.touches[0].identifier}).x,m.y)}),L.addEventListener("touchmove",function(e){if(m){var t=void 0,n=!0,r=!1,a=void 0;try{for(var c,l=e.touches[Symbol.iterator]();!(n=(c=l.next()).done);n=!0){var s=c.value;if(s.identifier===m.identifier){t={x:s.screenX,y:s.screenY};break}}}catch(e){r=!0,a=e}finally{try{!n&&l.return&&l.return()}finally{if(r)throw a}}if(!t)return i();var u={x:t.x-m.x,y:t.y-m.y},d=Math.abs(Math.atan2(u.y,u.x));(d<Math.PI/4||d>Math.PI/4*3)&&e.cancelable?(e.preventDefault(),o(t.x,t.y)):i()}}),L.addEventListener("touchend",i),L.addEventListener("touchcancel",i),L.addEventListener("mousedown",function(e){r(e.screenX,e.screenY)}),L.addEventListener("mousemove",function(e){o(e.screenX,e.screenY)}),L.addEventListener("mouseup",function(){a()}),E.forEach(function(e,n){e.addEventListener("click",function(r){h?h=!1:e.classList.contains(s)?console.log("open project"):t(f=n)})}),"IntersectionObserver"in window&&new IntersectionObserver(e).observe(x),p=setInterval(n,c)}();
//# sourceMappingURL=main.js.map
