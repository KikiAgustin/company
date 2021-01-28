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
        .velocity("transition.bounceUpIn");

}

$(document).ready(function () {
    textIntro();
});