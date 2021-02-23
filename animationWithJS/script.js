const tl = gsap.timeline({ default: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 });

document.querySelector('#about').addEventListener('click', function(){
    document.open('index1.html')
})
