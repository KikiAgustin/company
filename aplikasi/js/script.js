function textIntro() {
    $("#judul-awal span").velocity("transition.slideLeftIn", {
        stagger: 150,
        complete: function () {
            textSubIntro();
        }
    });
}

function textSubIntro() {
    $("#sub-awal").removeClass("sub-awal");
    $("#sub-judul-awal").velocity("transition.slideLeftIn", {
        stagger: 1500,
        complete: function () {
            btnNilai();
        }
    });
}

function btnNilai() {
    $("#btn-nilai").removeClass("btn-remove")
        .velocity("transition.bounceUpIn")
        .mouseenter(function () {
            $(this).velocity({ width: 200 });
        })
        .mouseleave(function () {
            $(this).velocity({ width: 230 });
        });
}

function animasiIntroOut() {
    $("#btn-nilai").velocity("transition.whirlOut", {
        stagger: 300,
        complete: function () {
            location.href = "home.html";
        }
    });
}


$(document).ready(function () {
    textIntro();
});