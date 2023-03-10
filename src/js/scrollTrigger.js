$(document).ready(()=>{
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
      });

    const sections = $('.slide-sections__item');
    for(let i=0; i<sections.length; i++){
        if(sections[i].offsetHeight > window.innerHeight){
            gsap.to(sections[i], {
                '--shading': .1,
                scrollTrigger: {
                trigger: sections[i],
                start: 'bottom bottom',
                pin: true,
                pinSpacing: false,
                scrub: 1
                }
            });
        }
        else{
            gsap.to(sections[i], {
                '--shading': .1,
                scrollTrigger: {
                trigger: sections[i],
                start: 'top top',
                pin: true,
                pinSpacing: false,
                scrub: 1
                }
            });
        }
    }
});
