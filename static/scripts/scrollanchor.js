!function(){"use strict";function n(n){var e,i,c=document.getElementById(n.replace(/^#/,""));c&&(i=c.getBoundingClientRect(),e=i.top+window.pageYOffset,setTimeout(function(){window.scrollTo(0,e-o)},t))}var t=5,o=50,e=window.location.hash;e&&"#"!==e&&n(e),window.addEventListener("hashchange",function(){n(window.location.hash)})}();