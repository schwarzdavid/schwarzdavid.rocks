"use strict";!function(){var e=document.querySelectorAll("[data-target-active]"),t=document.querySelectorAll("#languages .lang canvas");if(!window.localStorage.getItem("cookiesAccepted")){var a=document.querySelector("#cookies");a.style.display="block",a.addEventListener("click",function(e){e.preventDefault(),window.localStorage.setItem("cookiesAccepted","yes"),a.style.display="none"})}document.querySelector("#trigger").addEventListener("click",function(){"teaser"!==document.body.dataset.active?document.body.dataset.active="teaser":delete document.body.dataset.active});for(var r=0;r<e.length;r++)e[r].addEventListener("click",function(e){e.preventDefault();var t=void 0,a=!0,r=!1,o=void 0;try{for(var c,n=e.path[Symbol.iterator]();!(a=(c=n.next()).done);a=!0){var d=c.value;if(d.dataset.hasOwnProperty("targetActive")){t=d.dataset.targetActive;break}}}catch(e){r=!0,o=e}finally{try{!a&&n.return&&n.return()}finally{if(r)throw o}}document.body.dataset.active=t});for(var o=0;o<t.length;o++){var c=t[o].getContext("2d"),n=parseInt(window.getComputedStyle(t[o]).width),d=parseInt(t[o].dataset.value);t[o].width=t[o].height=n,c.lineWidth=15,c.beginPath(),c.strokeStyle="#eaeaea",c.arc(n/2,n/2,n/2-15,0,2*Math.PI),c.stroke(),c.beginPath(),c.strokeStyle="#2c2c2c",c.arc(n/2,n/2,n/2-15,-Math.PI/2,2*Math.PI/100*d-Math.PI/2),c.stroke()}}();
//# sourceMappingURL=main.js.map
