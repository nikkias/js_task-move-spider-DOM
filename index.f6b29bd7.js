document.addEventListener("click",t=>{let e=document.querySelector(".wall"),i=document.elementFromPoint(t.clientX,t.clientY);if(i===e){let i=document.querySelector(".spider"),l=e.clientWidth-i.clientWidth,n=e.clientHeight-i.clientHeight,c=t.offsetX-i.clientWidth/2,o=t.offsetY-i.clientHeight/2;i.style.top=`${Math.max(0,Math.min(n,o))}px`,i.style.left=`${Math.max(0,Math.min(l,c))}px`}});//# sourceMappingURL=index.f6b29bd7.js.map

//# sourceMappingURL=index.f6b29bd7.js.map
