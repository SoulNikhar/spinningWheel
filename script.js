

var active = 3;
var mncircles = document.querySelectorAll(".mncircle");
var sec = document.querySelectorAll(".sec");


gsap.to(mncircles[active - 1], {
    opacity: 1
});
gsap.to(sec[active - 1], {
    opacity: 1
});

var mncircles = document.querySelectorAll(".mncircle");

mncircles.forEach(function (val, index) {
    console.log(val, index);
    val.addEventListener("click", function () {
        gsap.to(".circle", {
            rotation: (3 - (index + 1)) * 15,
            ease: Expo.easeInOut,
            duration: 2,
        });
        greyOut();
        gsap.to((val), {
            opacity: 1,
        })
        gsap.to(sec[index], {
            opacity: 1,
        })
    });
});

function greyOut() {
    gsap.to(".mncircle", {
        opacity: 0.5
    })
    gsap.to(".sec", {
        opacity: 0.5
    })
}





gsap.to(".circle", {
    rotation: 0,
    ease: Expo.easeInOut,
    duration: 2,
})