"use strict";!function(){function e(e){if(e&&o.indexOf(e)<0)throw new Error("Page not allowed");requestAnimationFrame(function(){l.dataset.active=e})}function t(){for(var e=0;e<s.length;e++){var t=s[e].getContext("2d"),n=parseInt(window.getComputedStyle(s[e]).width),a=parseInt(s[e].dataset.value);s[e].width=s[e].height=n,t.lineWidth=15,t.beginPath(),t.strokeStyle="#eaeaea",t.arc(n/2,n/2,n/2-15,0,2*Math.PI),t.stroke(),t.beginPath(),t.strokeStyle="#2c2c2c",t.arc(n/2,n/2,n/2-15,-Math.PI/2,2*Math.PI/100*a-Math.PI/2),t.stroke()}}function n(){t()}var a="cookiesAccepted",o={none:"",teaser:"teaser",resume:"resume"},r="❤ Come back ❤",i=document.title,c=document.querySelector("#cookies"),d=document.querySelectorAll("[data-target-active]"),s=document.querySelectorAll("#languages .lang canvas"),l=document.body;document.querySelector("#trigger").addEventListener("click",function(){e(l.dataset.active===o.none?o.none:o.teaser)}),document.addEventListener("visibilitychange",function(){document.hidden?document.title=r:document.title=i}),window.addEventListener("resize",n),console.info("You like to look under the hood? Check out the source code on github 😎\nhttps://github.com/schwarzdavid/schwarzdavid.rocks"),window.localStorage.getItem(a)||(c.style.display="block",c.addEventListener("click",function(e){e.preventDefault(),window.localStorage.setItem(a,!0),c.style.display="none"})),n();for(var u=0;u<d.length;u++)d[u].addEventListener("click",function(e){e.preventDefault();var t=e.target.dataset.targetActive;if("string"!=typeof t)for(var n=e.target;n=n.parentElement;)if(n.dataset.hasOwnProperty("targetActive")){t=n.dataset.targetActive;break}if("string"!=typeof t)throw new Error("cannot find target attribute");requestAnimationFrame(function(){l.dataset.active=t})})}();
//# sourceMappingURL=main.js.map
