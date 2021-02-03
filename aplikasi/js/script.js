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

// Daftar Dosen
function navdaftarDosen() {
    $("#navbar").velocity("transition.slideLeftIn", {
        stagger: 1050,
        complete: function () {
            daftarDosen();
        }
    });
}

function daftarDosen() {
    $("#daftar_dosen").removeClass("hapus-daftar");
    $("#daftar_dosen .card").velocity("transition.slideLeftIn", {
        stagger: 150
    });
}

// Halaman Home

function halamanHome() {
    $("#navbar-home").velocity("transition.slideLeftIn", {
        stagger: 1050,
        complete: function () {
            navbarHome();
        }
    });
}

function navbarHome() {
    $("#home ").removeClass("hapus-home");
    $("#about ").removeClass("hapus-about");
    $("#daftar-dosen ").removeClass("hapus-daftar-dosen");
    $("#contact ").removeClass("hapus-contact");
    $("#footer ").removeClass("hapus-footer");
    $("#home .col-sm-12").velocity("transition.slideLeftIn", {
        stagger: 150
    });
}


$(document).ready(function () {
    textIntro();
    navdaftarDosen();
    halamanHome();
});