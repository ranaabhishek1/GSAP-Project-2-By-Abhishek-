


let tl=gsap.timeline();

tl.from(".navbar,.nav-logo,.nav-center,.nav-right",{
    y:-100,
    opacity:0,
    duration:0.8,
    delay:0.2,
    stagger:0.5,
});

tl.from(".left-part,.left-part h1,.left-part span",{
    x:-200,
    opacity:0,
    duration:0.5,
    delay:0.2,
    stagger:0.5,
});

tl.from(".right-part",{
    scale:0.5,
    opacity:0,
    duration:0.5,
    delay:0.2,

});

tl.from(".additional-text",{
    
    opacity:0,
    duration:0.5,
    delay:0.2,
    stagger:0.5,
})


tl.from(".scroll-down p",{
    
    y:10,
    duration:0.5,
    delay:0.2,
    repeat:-1,
    yoyo:"true",
    
})


tl.from("#p1,#p2,#p3",{
   scale:0,
   opacity:0,
    duration:1,
    delay:0.2,    
    scrollTrigger:{
        trigger:"#p1,#p2,#p3",
        scroller:"body",
        start:"top 100%",
    scrub:1,
    }
})



tl.from(".box",{
    scale:0.2,
    opacity:0,
    duration:0.3,
    delay:0.2,
    stagger:0.3,
    scrollTrigger:{
        trigger:".box",
        scroller:"body",
        start:"top 100%",
        end:"bottom 40%",
        scrub:1,
    }
})