function DisableBrowserStorage() {
    localStorage.clear();
    sessionStorage.clear()
}

function CheckCookieConsent() {
    setInterval(function () {
        typeof OptanonActiveGroups != "undefined" && (disableperformanceActivites = OptanonActiveGroups.indexOf(",2,") < 0 ? !0 : !1, OptanonActiveGroups.indexOf(",3,") < 0 ? (disableBrowserStorage = !0, DisableBrowserStorage(), typeof MktoForms2 != "undefined" && (jQuery('[name="avanadeUTMCampaign"]').length > 0 && jQuery('[name="avanadeUTMCampaign"]').val(""), jQuery('[name="avanadeUTMSource"]').length > 0 && jQuery('[name="avanadeUTMSource"]').val(""), jQuery('[name="avanadeUTMMedium"]').length > 0 && jQuery('[name="avanadeUTMMedium"]').val(""), jQuery('[name="avanadeUTMContent"]').length > 0 && jQuery('[name="avanadeUTMContent"]').val(""), jQuery('[name="avanadeUTMTerm"]').length > 0 && jQuery('[name="avanadeUTMTerm"]').val(""))) : disableBrowserStorage = !1, disableTargetActivies = OptanonActiveGroups.indexOf(",4,") < 0 ? !0 : !1)
    }, 1e3)
}

function assignID() {
    function e(t) {
        i++;
        jQuery(u[t]).hasClass("bg" + i) ? (f = t, n = i, i = 0) : e(t)
    }
    for (var t, u = jQuery("section.bg-waves"), i = 0, f, n, r = 0; r < u.length; r++) e(r), jQuery(u[r]).addClass("waveID" + f), t = ".waveID" + f, n == 1 ? backgroundWaves1(t) : n == 2 ? backgroundWaves2(t) : n == 3 ? backgroundWaves3(t) : n == 4 ? backgroundWaves4(t) : n == 5 ? backgroundWaves5(t) : n == 6 && backgroundWaves6(t)
}

function sectionHeight(n) {
    return jQuery(n).outerHeight()
}

function backgroundWaves1(n) {
    var s, h;
    if (typeof controller != "undefined" && typeof TimelineMax != "undefined" && typeof ScrollMagic != "undefined") {
        var f = sectionHeight(n),
            t = window.innerHeight / 2,
            i = new TimelineMax,
            r = new TimelineMax,
            u = new TimelineMax;
        i.fromTo(".wave11", .4, {
            opacity: 0,
            x: 0,
            y: 65
        }, {
                opacity: 1,
                x: -72,
                y: 5,
                ease: Sine.easeOut
            }, "scene1").to(".wave11", .4, {
                x: -144
            }, "scene2").fromTo(".wave12", .43, {
                opacity: 0,
                x: -720,
                y: 65
            }, {
                    opacity: 1,
                    x: -840,
                    y: 5,
                    ease: Sine.easeOut
                }, "scene1").to(".wave12", .43, {
                    x: -900
                }, "scene2").fromTo(".wave13", .43, {
                    opacity: .2,
                    x: 900,
                    y: 37
                }, {
                        opacity: 1,
                        x: 960,
                        y: 6,
                        ease: Sine.easeOut,
                        delay: .13
                    }, "scene1").to(".wave13", .43, {
                        x: 1020
                    }, "scene2").fromTo(".wave14", .43, {
                        opacity: 0,
                        x: -120,
                        y: 37
                    }, {
                            opacity: 1,
                            x: -324,
                            y: 7,
                            ease: Sine.easeOut
                        }, "scene1").to(".wave14", .43, {
                            x: -360
                        }, "scene2");
        var c = new ScrollMagic.Scene({
            triggerElement: n + " .waveContainer",
            duration: 633,
            offset: 43
        }).setTween(i).addTo(controller).triggerHook(1),
            e = n + " .bg-header-title",
            o = n + " .bg-wrapper";
        r.fromTo(e, 1, {
            opacity: .2
        }, {
                opacity: 1
            });
        s = new ScrollMagic.Scene({
            triggerElement: n,
            duration: 400,
            offset: 230
        }).setTween(r).addTo(controller).triggerHook(1);
        u.to(o, 1, {
            opacity: 0
        });
        h = new ScrollMagic.Scene({
            triggerElement: n,
            duration: t,
            offset: f + t
        }).setTween(u).addTo(controller).triggerHook(1)
    }
}

function backgroundWaves2(n) {
    var s, h;
    if (typeof controller != "undefined" && typeof TimelineMax != "undefined" && typeof ScrollMagic != "undefined") {
        var f = sectionHeight(n),
            t = window.innerHeight / 2,
            i = new TimelineMax,
            r = new TimelineMax,
            u = new TimelineMax;
        i.fromTo(".wave21", 1, {
            opacity: .4,
            x: -720,
            y: 17
        }, {
                opacity: 1,
                x: -840,
                y: 1,
                ease: Sine.easeOut
            }, "scene1").to(".wave21", 1, {
                x: -960
            }, "scene2").fromTo(".wave22", 1, {
                opacity: .4,
                x: 0,
                y: 17
            }, {
                    opacity: 1,
                    x: 240,
                    y: 1,
                    ease: Sine.easeOut
                }, "scene1").to(".wave22", 1, {
                    x: 360
                }, "scene2").fromTo(".wave23", 1, {
                    opacity: .4,
                    x: 540,
                    y: 17
                }, {
                        opacity: 1,
                        x: 600,
                        y: 1,
                        ease: Sine.easeOut
                    }, "scene1").to(".wave23", 1, {
                        x: 720
                    }, "scene2");
        var c = new ScrollMagic.Scene({
            triggerElement: n + " .waveContainer",
            duration: 800,
            offset: 63
        }).setTween(i).addTo(controller).triggerHook(1),
            e = n + " .bg-header-title",
            o = n + " .bg-wrapper";
        r.fromTo(e, 1, {
            opacity: .2
        }, {
                opacity: 1
            });
        s = new ScrollMagic.Scene({
            triggerElement: n,
            duration: 400,
            offset: 230
        }).setTween(r).addTo(controller).triggerHook(1);
        u.to(o, 1, {
            opacity: 0
        });
        h = new ScrollMagic.Scene({
            triggerElement: n,
            duration: t,
            offset: f + t
        }).setTween(u).addTo(controller).triggerHook(1)
    }
}

function backgroundWaves3(n) {
    var s, h;
    if (typeof controller != "undefined" && typeof TimelineMax != "undefined" && typeof ScrollMagic != "undefined") {
        var f = sectionHeight(n),
            t = window.innerHeight / 2,
            i = new TimelineMax,
            r = new TimelineMax,
            u = new TimelineMax;
        i.fromTo(".wave31", 1, {
            opacity: 0,
            x: -458,
            y: 145,
            ease: Sine.easeOut
        }, {
                opacity: 1,
                x: -558,
                y: 1
            }, "scene1").to(".wave31", 1, {
                x: -708
            }, "scene2").fromTo(".wave32", 1, {
                opacity: 0,
                x: -484,
                y: 110,
                ease: Sine.easeOut
            }, {
                    opacity: 1,
                    x: -584,
                    y: 1
                }, "scene1").to(".wave32", 1, {
                    x: -684
                }, "scene2").fromTo(".wave33", 1, {
                    opacity: .2,
                    x: -109,
                    y: 145,
                    ease: Sine.easeOut
                }, {
                        opacity: 1,
                        x: 390,
                        y: 1
                    }, "scene1").to(".wave33", 1, {
                        x: 640
                    }, "scene2");
        var c = new ScrollMagic.Scene({
            triggerElement: n + " .waveContainer",
            duration: 650
        }).setTween(i).addTo(controller).triggerHook(1),
            e = n + " .bg-header-title",
            o = n + " .bg-wrapper";
        r.fromTo(e, 1, {
            opacity: .2
        }, {
                opacity: 1
            });
        s = new ScrollMagic.Scene({
            triggerElement: n,
            duration: 400,
            offset: 230
        }).setTween(r).addTo(controller).triggerHook(1);
        u.to(o, 1, {
            opacity: 0
        });
        h = new ScrollMagic.Scene({
            triggerElement: n,
            duration: t,
            offset: f + t
        }).setTween(u).addTo(controller).triggerHook(1)
    }
}

function backgroundWaves4(n) {
    var s, h;
    if (typeof controller != "undefined" && typeof TimelineMax != "undefined" && typeof ScrollMagic != "undefined") {
        var f = sectionHeight(n),
            t = window.innerHeight / 2,
            i = new TimelineMax,
            r = new TimelineMax,
            u = new TimelineMax;
        i.fromTo(".wave41", 1, {
            opacity: 0,
            x: -458,
            y: 90,
            ease: Sine.easeOut
        }, {
                opacity: .4,
                x: -558,
                y: 90
            }, "scene1").to(".wave41", 1, {
                opacity: .6,
                x: -658,
                y: 40
            }, "scene2").to(".wave41", 1, {
                opacity: .8,
                x: -858,
                y: 0,
                ease: Sine.easeOut
            }, "scene3").fromTo(".wave42", 1, {
                opacity: 0,
                x: -347,
                y: 80,
                ease: Sine.easeOut
            }, {
                    opacity: 1,
                    x: -212,
                    y: 1
                }, "scene1").to(".wave42", 1, {
                    x: -112,
                    y: 1
                }, "scene2").to(".wave42", 1, {
                    x: -52,
                    y: 1,
                    ease: Sine.easeOut
                }, "scene3").fromTo(".wave43", 1, {
                    opacity: 0,
                    x: 16,
                    y: 60,
                    ease: Sine.easeOut
                }, {
                        opacity: .4,
                        x: 156,
                        y: 40
                    }, "scene1").to(".wave43", 1, {
                        opacity: .8,
                        x: 256,
                        y: 20
                    }, "scene2").to(".wave43", 1, {
                        opacity: 1,
                        x: 318,
                        y: 30,
                        ease: Sine.easeOut
                    }, "scene3");
        var c = new ScrollMagic.Scene({
            triggerElement: n + " .waveContainer",
            duration: 650,
            offset: 0
        }).setTween(i).addTo(controller).triggerHook(1),
            e = n + " .bg-header-title",
            o = n + " .bg-wrapper";
        r.fromTo(e, 1, {
            opacity: .2
        }, {
                opacity: 1
            });
        s = new ScrollMagic.Scene({
            triggerElement: n,
            duration: 400,
            offset: 230
        }).setTween(r).addTo(controller).triggerHook(1);
        u.to(o, 1, {
            opacity: 0
        });
        h = new ScrollMagic.Scene({
            triggerElement: n,
            duration: t,
            offset: f + t
        }).setTween(u).addTo(controller).triggerHook(1)
    }
}

function backgroundWaves5(n) {
    var s, h;
    if (typeof controller != "undefined" && typeof TimelineMax != "undefined" && typeof ScrollMagic != "undefined") {
        var f = sectionHeight(n),
            t = window.innerHeight / 2,
            i = new TimelineMax,
            r = new TimelineMax,
            u = new TimelineMax;
        i.fromTo(".wave51", 1, {
            opacity: 0,
            x: -440,
            y: 90
        }, {
                opacity: 1,
                x: -520,
                y: 20,
                ease: Sine.easeOut
            }, "scene1").to(".wave51", 1, {
                x: -580,
                y: 20
            }, "scene2").to(".wave51", 1, {
                x: -600,
                y: 24
            }, "scene3").fromTo(".wave52", 1, {
                opacity: 0,
                x: -150,
                y: 60
            }, {
                    opacity: 1,
                    x: -190,
                    y: 5,
                    ease: Sine.easeOut
                }, "scene1").to(".wave52", 1, {
                    x: -240,
                    y: -5
                }, "scene2").to(".wave52", 1, {
                    x: -300,
                    y: 10
                }, "scene3").fromTo(".wave53", 1, {
                    opacity: 0,
                    x: -240,
                    y: 70
                }, {
                        opacity: 1,
                        x: -340,
                        y: 20,
                        ease: Sine.easeOut
                    }, "scene1").to(".wave53", 1, {
                        x: -440,
                        y: 0
                    }, "scene2").to(".wave53", 1, {
                        x: -540
                    }, "scene3");
        var c = new ScrollMagic.Scene({
            triggerElement: n + " .waveContainer",
            duration: 650,
            offset: 0
        }).setTween(i).addTo(controller).triggerHook(1),
            e = n + " .bg-header-title",
            o = n + " .bg-wrapper";
        r.fromTo(e, 1, {
            opacity: .2
        }, {
                opacity: 1
            });
        s = new ScrollMagic.Scene({
            triggerElement: n,
            duration: 400,
            offset: 230
        }).setTween(r).addTo(controller).triggerHook(1);
        u.to(o, 1, {
            opacity: 0
        });
        h = new ScrollMagic.Scene({
            triggerElement: n,
            duration: t,
            offset: f + t
        }).setTween(u).addTo(controller).triggerHook(1)
    }
}

function backgroundWaves6(n) {
    var s, h;
    if (typeof controller != "undefined" && typeof TimelineMax != "undefined" && typeof ScrollMagic != "undefined") {
        var f = sectionHeight(n),
            t = window.innerHeight / 2,
            i = new TimelineMax,
            r = new TimelineMax,
            u = new TimelineMax;
        i.fromTo(".wave61", 1, {
            opacity: 0,
            x: 17,
            y: 70
        }, {
                opacity: 1,
                x: 117,
                y: 0,
                ease: Sine.easeOut
            }, "scene1").to(".wave61", 1, {
                x: 157,
                y: 0
            }, "scene2").to(".wave61", 1, {
                x: 197,
                y: 10
            }, "scene3").fromTo(".wave62", 1, {
                opacity: 0,
                x: 34,
                y: 50
            }, {
                    opacity: 1,
                    x: 90,
                    y: 0,
                    ease: Sine.easeOut
                }, "scene1").to(".wave62", 1, {
                    x: 170
                }, "scene2").to(".wave62", 1, {
                    x: 213
                }, "scene3");
        var c = new ScrollMagic.Scene({
            triggerElement: n + " .waveContainer",
            duration: 650,
            offset: 0
        }).setTween(i).addTo(controller).triggerHook(1),
            e = n + " .bg-header-title",
            o = n + " .bg-wrapper";
        r.fromTo(e, 1, {
            opacity: .2
        }, {
                opacity: 1
            });
        s = new ScrollMagic.Scene({
            triggerElement: n,
            duration: 400,
            offset: 230
        }).setTween(r).addTo(controller).triggerHook(1);
        u.to(o, 1, {
            opacity: 0
        });
        h = new ScrollMagic.Scene({
            triggerElement: n,
            duration: t,
            offset: f + t
        }).setTween(u).addTo(controller).triggerHook(1)
    }
}

function LoadWaves() {
    var e = [1, 2, 3, 4, 5, 6],
        r = [2, 4, 6],
        u = [1, 3, 5],
        n = [],
        a = e[Math.floor(Math.random() * e.length)],
        f, o, s, h, c, t, l;
    for (n.push(a), i = 0; i < 5; i++) f = n[n.length - 1], f % 2 == 0 ? (o = r.indexOf(f), r.splice(o, 1), s = u[Math.floor(Math.random() * u.length)], n.push(s)) : (h = u.indexOf(f), u.splice(h, 1), c = r[Math.floor(Math.random() * r.length)], n.push(c));
    t = 0;
    l = ["<div class='waveContainer'><div class='wave11'><\/div><div class='wave12'><\/div><div class='wave13'><\/div><div class='wave14'>", "<div class='waveContainer'><div class='wave21'><\/div><div class='wave22'><\/div><div class='wave23'>", "<div class='waveContainer'><div class='wave31'><\/div><div class='wave32'><\/div><div class='wave33'>", "<div class='waveContainer'><div class='wave41'><\/div><div class='wave42'><\/div><div class='wave43'>", "<div class='waveContainer'><div class='wave51'><\/div><div class='wave52'><\/div><div class='wave53'>", "<div class='waveContainer'><div class='wave61'><\/div><div class='wave62'>"];
    jQuery("section.bg-waves").each(function () {
        t > n.length - 1 && (t = 0);
        var i = n[t];
        jQuery(this).addClass("bg" + i).append(l[i - 1]);
        jQuery(this).prepend(jQuery('<div class="bg-wrapper"><\/div>'));
        ++t
    })
}

function LoadMoreForGA(n) {
    var t = 2;
    jQuery(n).click(function (i) {
        i.preventDefault();
        jQuery(n).attr("data-lazyload-level", t);
        t = t + 1
    })
}

function NavigateToSearchPage(n) {
    var f = n.val(),
        r, t;
    if (f.indexOf(defaultSearchText) > 0) return !1;
    r = searchPage;
    t = encodeURIComponent(n.siblings("#search").val());
    t = t.replace(/\%20/g, " ");
    var e = t.replace("+", "%20"),
        o = "#q=" + e,
        i = r + o,
        u = window.location.href;
    u.includes("blogs") ? u.includes("de-de") ? (i = i + "&f:Tag=[Suchergebnisse]", typeof t != "undefined" && t !== null && t.length !== 0 && (window.location = i)) : (i = i + "&f:Tag=[BLOG%20RESULTS]", typeof t != "undefined" && t !== null && t.length !== 0 && (window.location = i)) : (i = i + "&f:Tag=[AVANADE.COM]", typeof t != "undefined" && t !== null && t.length !== 0 && (window.location = i))
}

function setCookiePageAgnostic(n, t, i) {
    var r = new Date,
        u;
    r.setTime(r.getTime() + i * 864e5);
    u = "expires=" + r.toUTCString();
    document.cookie = n + "=" + t + ";" + u + "; path=/;secure"
}

function MarketoLeadScore() {
    try {
        var n = new SimpleDTO({
            domain: "avanade.com",
            dataSrc: "https://pages.avanade.com/MarketoDTO.html",
            debug: !1,
            mode: "receive",
            cb: function () {
                try {
                    var u = n.getGlobal().mktoPreFillFields,
                        r = jQuery("#marketocampaignid").val().split(","),
                        t = "";
                    for (i = 0; i < r.length; i++) t = t + u[r[i]] + "|~";
                    t = t.substring(0, t.length - 2);
                    !disableBrowserStorage && sessionStorage && setCookiePageAgnostic("Ava_MarketoScores", t, 365);
                    n.cleanup()
                } catch (f) {
                    console.log()
                }
            }
        })
    } catch (t) {
        console.log()
    }
}

function PopulateArticleComments(n, t, i, r, u, f, e, o, s, h, c, l, a, v) {
    n[0] !== undefined && n[1] !== undefined && n[2] !== undefined && (jQuery("#fname").val(decodeURIComponent(escape(window.atob(n[0])))), jQuery("#lname").val(decodeURIComponent(escape(window.atob(n[1].replace(/\s/g, ""))))), jQuery("#emailComments").val(n[2]), i === 4 && jQuery("#textinput").val(decodeURIComponent(escape(window.atob(n[3])))));
    var p = r,
        y = "";
    jQuery(".default-frm #cmment").focus(function () {
        jQuery(this).parent().next().hasClass("hidden") && jQuery("#conver-form .captcha-img img").attr("src", u);
        jQuery(this).parent().next().removeClass("hidden").addClass("visible");
        jQuery(".FormofReply").hide()
    });
    jQuery("body").on("click", "#submitComment", function (n) {
        var c;
        if (n.preventDefault(), jQuery("#cmment").val() === "") return jQuery("#cmment").parent().addClass("has-error"), jQuery(".control-label.err-msg").show(), !1;
        if (jQuery("#cmment").parent().removeClass("has-error"), jQuery("#fname").val() === "") return jQuery("#fname").parent().addClass("has-error"), jQuery(".control-label.err-msg").show(), !1;
        if (jQuery("#fname").parent().removeClass("has-error"), jQuery("#lname").val() === "") return jQuery("#lname").parent().addClass("has-error"), jQuery(".control-label.err-msg").show(), !1;
        if (jQuery("#lname").parent().removeClass("has-error"), jQuery("#emailComments").val() === "") return jQuery("#emailComments").parent().addClass("has-error"), jQuery(".control-label.err-msg").show(), !1;
        if (jQuery("#emailComments").val() !== "" && (c = ValidateEmailForComment(jQuery("#emailComments").val()), c === !1)) return jQuery(".control-label.err-msg").show(), jQuery("#emailComments").parent().addClass("has-error"), !1;
        if (jQuery("#emailComments").parent().removeClass("has-error"), jQuery("#inputCaptcha").val() === "") return jQuery("#inputCaptcha").parent().addClass("has-error"), jQuery(".control-label.err-msg").show(), !1;
        jQuery("#inputCaptcha").parent().removeClass("has-error");
        var r = window.btoa(unescape(encodeURIComponent(jQuery("#fname").val()))),
            u = window.btoa(unescape(encodeURIComponent(jQuery("#lname").val()))),
            l = jQuery("#emailComments").val(),
            w = window.btoa(unescape(encodeURIComponent(jQuery("#cmment").val()))),
            i = window.btoa(unescape(encodeURIComponent(jQuery("#textinput").val()))),
            t = r + "|^" + u + "|^" + w + "|^" + i + "|^" + p,
            b = r + "|^ " + u + "|^" + l + "|^" + i,
            k = "https://twitter.com/" + i,
            d = jQuery("#fname").val() + " " + jQuery("#lname").val() + "<a href='" + k + "'class='comment-twitterhandler afterCommentTwitter'><img src='/images/Blogs/twitter.svg' alt='' /><span id='AfterPostTwitterid'>" + jQuery("#textinput").val() + "<\/span><\/a>";
        document.getElementById("submitComment").disabled = !0;
        jQuery.ajax({
            url: f,
            type: "POST",
            data: {
                inputCaptcha: jQuery("#inputCaptcha").val()
            },
            success: function (n) {
                var f = "" + n;
                if (f.indexOf("Unmatched") > 0) return flag = !1, jQuery("#inputCaptcha").parent().addClass("has-error"), jQuery(".control-label.err-msg").show(), document.getElementById("submitComment").disabled = !1, !1;
                jQuery("#inputCaptcha").parent().removeClass("has-error");
                jQuery(".control-label.err-msg").hide();
                var c = v,
                    k = jQuery("#fname").val(),
                    g = jQuery("#lname").val(),
                    nt = tohtmlEntities(jQuery("#cmment").val()),
                    tt = jQuery("#textinput").val();
                jQuery.ajax({
                    url: e,
                    type: "POST",
                    data: {
                        itemId: c,
                        firstname: k,
                        lastname: g,
                        emailId: l,
                        commentText: nt,
                        twitterId: tt,
                        language: a
                    },
                    success: function (n) {
                        if (n.length === 4) {
                            y = "";
                            y = decodeURIComponent(escape(window.atob(o)));
                            t = t + "|^" + o;
                            try {
                                disableBrowserStorage || setCookie("Ava_CommentCookie", t, 2)
                            } catch (i) { }
                        } else if (n.length === 36) {
                            y = decodeURIComponent(escape(window.atob(s)));
                            t = t + "|^" + s;
                            try {
                                disableBrowserStorage || (setCookie("Ava_CommentCookie", t, 7), setCookie("Ava_CommentItemid", n, 7))
                            } catch (i) { }
                        } else {
                            y = decodeURIComponent(escape(window.atob(h)));
                            t = t + "|^" + h;
                            try {
                                disableBrowserStorage || setCookie("Ava_CommentCookie", t, 7)
                            } catch (i) { }
                        }
                        jQuery("#formSection").hide()
                    },
                    complete: function () {
                        jQuery("#AfterPostComment").html("<pre>" + decodeURIComponent(escape(window.atob(w).replace(/</g, "&lt;").replace(/>/g, "&gt;") + "<\/pre>")));
                        jQuery("#AfterPostDate").text(p);
                        jQuery("#moderationText").text(y);
                        jQuery("#AfterPost").show();
                        try {
                            disableBrowserStorage || setCookiePageAgnostic("Ava_CommentorInfo", b, 365)
                        } catch (n) { }
                        i === "" ? (jQuery(".afterCommentTwitter").hide(), jQuery("#AfterPostName").text(decodeURIComponent(escape(window.atob(r))) + " " + decodeURIComponent(escape(window.atob(u))))) : jQuery("#AfterPostName").html(d);
                        jQuery("#cmment").hide()
                    }
                })
            }
        })
    });
    jQuery("body").on("click", "#submit1", function (n) {
        var w;
        if (n.preventDefault(), jQuery("#cmment1").val() === "") return jQuery("#cmment1").parent().addClass("has-error"), jQuery(".control-label.err-msg").show(), !1;
        if (jQuery("#cmment1").parent().removeClass("has-error"), jQuery("#fname1").val() === "") return jQuery("#fname1").parent().addClass("has-error"), jQuery(".control-label.err-msg").show(), !1;
        if (jQuery("#fname1").parent().removeClass("has-error"), jQuery("#lname1").val() === "") return jQuery("#lname1").parent().addClass("has-error"), jQuery(".control-label.err-msg").show(), !1;
        if (jQuery("#lname1").parent().removeClass("has-error"), jQuery("#inputcap").val() === "") return jQuery("#inputcap").parent().addClass("has-error"), jQuery(".control-label.err-msg").show(), !1;
        if (jQuery("#email1").val() !== "" && (w = ValidateEmailForComment(jQuery("#email1").val()), w === !1) || (jQuery("#email1").parent().removeClass("has-error"), jQuery("#inputCap").parent().removeClass("has-error"), jQuery("#email1").val() === "")) return jQuery("#email1").parent().addClass("has-error"), jQuery(".control-label.err-msg").show(), !1;
        var u = window.btoa(unescape(encodeURIComponent(jQuery("#fname1").val()))),
            l = window.btoa(unescape(encodeURIComponent(jQuery("#lname1").val()))),
            b = jQuery("#email1").val(),
            k = window.btoa(unescape(encodeURIComponent(jQuery("#cmment1").val()))),
            v = window.btoa(unescape(encodeURIComponent(jQuery("#textinput1").val()))),
            i = jQuery("#submit1").data("name"),
            d = jQuery("#submit1").data("id"),
            t = u + "|^" + l + "|^" + k + "|^" + v + "|^" + r,
            g = u + "|^" + l + "|^" + b + "|^" + v,
            p = "Ava_ReplyComment" + i,
            nt = "Ava_ReplyItemid" + i,
            tt = ".AfteReply-" + i,
            it = "#OpenComment" + i;
        document.getElementById("submit1").disabled = !0;
        jQuery.ajax({
            url: f,
            type: "POST",
            data: {
                inputCaptcha: jQuery("#inputcap").val()
            },
            success: function (n) {
                var i = "" + n;
                if (i.indexOf("Unmatched") > 0) return flag = !1, jQuery("#inputcap").parent().addClass("has-error"), jQuery(".control-label.err-msg").show(), document.getElementById("submit1").disabled = !1, !1;
                jQuery("#inputcap").parent().removeClass("has-error");
                jQuery(".control-label.err-msg").hide();
                var f = jQuery("#fname1").val(),
                    w = jQuery("#lname1").val(),
                    rt = jQuery("#textinput1").val(),
                    ut = tohtmlEntities(jQuery("#cmment1").val());
                jQuery.ajax({
                    url: e,
                    type: "POST",
                    data: {
                        itemId: d,
                        firstname: f,
                        lastname: w,
                        emailId: b,
                        commentText: ut,
                        twitterId: rt,
                        language: a
                    },
                    success: function (n) {
                        if (n.length === 4) {
                            y = o;
                            t = t + "|^" + y;
                            try {
                                disableBrowserStorage || setCookie(p, t, 2)
                            } catch (i) { }
                        } else if (n.length === 36) {
                            y = s;
                            t = t + "|^" + y;
                            try {
                                disableBrowserStorage || (setCookie(p, t, 7), setCookie(nt, n, 7))
                            } catch (i) { }
                        } else {
                            y = h;
                            t = t + "|^" + y;
                            try {
                                disableBrowserStorage || setCookie(p, t, 7)
                            } catch (i) { }
                        }
                    },
                    complete: function () {
                        jQuery.ajax({
                            url: c,
                            type: "POST",
                            data: {
                                fName: u,
                                lName: l,
                                comment: k,
                                twitterId: v,
                                date: r,
                                resultText: y
                            },
                            success: function (n) {
                                jQuery(tt).append(jQuery(n));
                                jQuery(".conversation-frm.cmt-reply").hide()
                            },
                            complete: function () {
                                jQuery("p#paragraphOfReply").text(jQuery("p#paragraphOfReply").text())
                            }
                        });
                        try {
                            disableBrowserStorage || setCookiePageAgnostic("Ava_CommentorInfo", g, 365)
                        } catch (n) { }
                        jQuery(it).hide()
                    }
                })
            }
        })
    });
    jQuery(".comment-reply").on("click", function (t) {
        t.preventDefault();
        var r = jQuery(this),
            f = r.attr("id"),
            e = r.data("name"),
            o = r.data("id"),
            u = "." + f,
            s = jQuery(this).parents("section").next(".cmt-reply");
        jQuery(".cmt-reply").not(s).each(function () {
            jQuery(this).remove()
        });
        jQuery("#formSection").addClass("hidden").removeClass("visible");
        jQuery.ajax({
            url: l,
            success: function (n) {
                jQuery(u).append(jQuery(n));
                jQuery(u).show()
            },
            complete: function () {
                n[0] !== undefined && n[1] !== undefined && n[2] !== undefined && (jQuery("#fname1").val(decodeURIComponent(escape(window.atob(n[0])))), jQuery("#lname1").val(decodeURIComponent(escape(window.atob(n[1])))), jQuery("#email1").val(n[2]), i === 4 && jQuery("#textinput1").val(decodeURIComponent(escape(window.atob(n[1])))), jQuery("#submit1").attr("data-name", e), jQuery("#submit1").attr("data-id", o))
            }
        })
    });
    jQuery("body").on("click", ".inputCaptcha", function (n) {
        n.preventDefault();
        var t = u,
            i = t + "?" + (new Date).getTime();
        jQuery("#conver-form .captcha-img .inputCaptchaImage").attr("src", i);
        jQuery("#inputCaptcha").val("")
    });
    jQuery("body").on("click", ".inputcap", function (n) {
        n.preventDefault();
        var t = u,
            i = t + "?" + (new Date).getTime();
        jQuery("#conver-form1 .captcha-img .inputcapImage").attr("src", i);
        jQuery("#inputcap").val("")
    });
    jQuery("p.comment-desc pre").each(function () {
        var n = jQuery(this).text();
        n = n.indexOf("#!") > 0 ? n.replace(/#!/g, "<br/>") : n.replace(/\n/g, "<br/>");
        jQuery(this).html(n)
    })
}

function setCookie(n, t, i) {
    var r, u, f;
    disableBrowserStorage || typeof currentPageUrl == "undefined" || (r = new Date, u = currentPageUrl, r.setTime(r.getTime() + i * 864e5), f = "expires=" + r.toUTCString(), document.cookie = n + "=" + t + "; " + f + "; path=" + u + ";secure")
}

function tohtmlEntities(n) {
    return String(n).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}

function getCookie(n) {
    for (var t, r = n + "=", u = document.cookie.split(";"), i = 0; i < u.length; i++) {
        for (t = u[i]; t.charAt(0) === " ";) t = t.substring(1);
        if (t.indexOf(r) === 0) return t.substring(r.length, t.length)
    }
    return ""
}

function UTM() {
    !disableBrowserStorage && sessionStorage && typeof MktoForms2 != "undefined" && MktoForms2.whenReady(function (n) {
        sessionStorage.getItem("utm_campaign") !== null && n.addHiddenFields({
            avanadeUTMCampaign: sessionStorage.getItem("utm_campaign")
        });
        sessionStorage.getItem("utm_source") !== null && n.addHiddenFields({
            avanadeUTMSource: sessionStorage.getItem("utm_source")
        });
        sessionStorage.getItem("utm_medium") !== null && n.addHiddenFields({
            avanadeUTMMedium: sessionStorage.getItem("utm_medium")
        });
        sessionStorage.getItem("utm_content") !== null && n.addHiddenFields({
            avanadeUTMContent: sessionStorage.getItem("utm_content")
        });
        sessionStorage.getItem("utm_term") !== null && n.addHiddenFields({
            avanadeUTMTerm: sessionStorage.getItem("utm_term")
        })
    })
}

function TabbedLoadmore(n, t, i, r, u, f, e, o, s, h) {
    n > 10 && t === 0 && (jQuery(window).width() > 751 ? (jQuery(i).show(), jQuery(r).show()) : jQuery(window).width() < 751 && (jQuery("section.tabbed-module-C-tab .row .tab-holder .panel-group .panel:nth-child(-n+10)").show(), jQuery(u).show()));
    n > t && t > 9 && (jQuery(window).width() > 751 ? (jQuery(f).show(), jQuery(e).show()) : jQuery(window).width() < 751 && (jQuery(o).show(), jQuery(s).show()));
    typeof LoadMoreForGA != "undefined" && LoadMoreForGA(".ga-lazyloading-" + h)
}

function TabbedExperienceEditor() {
    jQuery(".tabbed-module-C-tab .row ul.nav-tabs li a").click(function (n) {
        n.preventDefault();
        jQuery(this).tab("show")
    })
}

function ready(n, t) {
    listeners.push({
        selector: n,
        fn: t
    });
    observer || (observer = new MutationObserver(check), observer.observe(doc.documentElement, {
        childList: !0,
        attributes: !0,
        subtree: !0
    }));
    check()
}

function check() {
    for (var r, u, i, e, n, t = 0, f = listeners.length; t < f; t++)
        for (r = listeners[t], u = doc.querySelectorAll(r.selector), i = 0, e = u.length; i < e; i++) n = u[i], n.ready || (n.ready = !0, r.fn.call(n, n))
}

function TabbedCBackButtonFunctionality(n, t, i, r, u, f, e, o, s) {
    function h() {
        var u = window.location.pathname,
            g, p, l, i, d, w, a, b, k, nt, v, tt, y, h, t;
        if (jQuery(".tabbed-module-C-tab").length > 0) {
            for (jQuery(n).click(function () {
                var n = 0,
                    e = jQuery(this),
                    r = e.closest(".tabbed-module-C-tab"),
                    t = jQuery(".tabbed-module-C-tab").index(r),
                    f = r.attr("id"),
                    i;
                !disableBrowserStorage && sessionStorage && (sessionStorage.getItem(u + "-tabmodulec-loadmore-" + t) !== null ? (i = sessionStorage.getItem(u + "-tabmodulec-loadmore-" + t).split("+"), i.length === 2 && (n = i[1], n++ , sessionStorage.setItem(u + "-tabmodulec-loadmore-" + t, f + "+" + n))) : (n++ , sessionStorage.setItem(u + "-tabmodulec-loadmore-" + t, f + "+" + n)))
            }), g = jQuery(".tabbed-module-C-tab").length, p = 0, l = 0; l < g; l++)
                if (!disableBrowserStorage && sessionStorage && sessionStorage.getItem(u + "-tabmodulec-loadmore-" + l) !== null && (h = sessionStorage.getItem(u + "-tabmodulec-loadmore-" + l), h.toString().indexOf("+") > -1 && (t = h.split("+"), t.length === 2 && (i = t[0], d = t[1], d >= 0))))
                    for (w = 1; w <= d; w++)
                        for (p = r * w, a = 1; a <= 10; a++) jQuery(window).width() > 751 ? (jQuery("#" + i + ".tabbed-module-C-tab .row .tab-holder li:nth-child(" + (p + a) + ")").css({
                            display: "block"
                        }), b = jQuery(".tabbed-module-C-tab #tabmoduleC" + s).children("li").filter(function () {
                            return jQuery(this).css("display") === "block"
                        }).length, k = jQuery(".tabbed-module-C-tab .row .tab-holder #tabmoduleC" + s + " li").length, b === k && jQuery(".tabbed-module-C-tab .more-results-b-" + s + ".hidden-xs").css({
                            display: "none"
                        })) : (jQuery("#" + i + ".tabbed-module-C-tab .container .row .tab-holder .panel-group .panel-default:nth-child(" + (p + a) + ")").css({
                            display: "block"
                        }), b = jQuery(f).children("div").filter(function () {
                            return jQuery(this).css("display") === "block"
                        }).length, k = jQuery(e).length, b === k && jQuery(o + ".hidden-lg").css({
                            display: "none"
                        }));
            for (jQuery(".tabbed-module-C-tab .row .tab-holder .panel-group .panel-default").click(function () {
                var t = jQuery(this),
                    e = t.closest(".visible-xs"),
                    o = t.closest(".panel-default"),
                    n = e.find(".panel-default").index(o);
                n++;
                var i = window.location.pathname,
                    u = t.closest(".tabbed-module-C-tab"),
                    r = jQuery(".tabbed-module-C-tab").index(u),
                    f = u.attr("id");
                n !== 1 && !disableBrowserStorage && sessionStorage && (sessionStorage.getItem(i + "-tabmodulec-" + r) === f + "+" + n ? sessionStorage.removeItem(i + "-tabmodulec-" + r) : sessionStorage.setItem(i + "-tabmodulec-" + r, f + "+" + n))
            }), nt = jQuery(".tabbed-module-C-tab").length, v = 0; v < nt; v++)
                if (!disableBrowserStorage && sessionStorage && sessionStorage.getItem(u + "-tabmodulec-" + v) !== null && (h = sessionStorage.getItem(u + "-tabmodulec-" + v), h.toString().indexOf("+") > -1 && (t = h.split("+"), t.length === 2))) {
                    var i = t[0],
                        c = t[1],
                        rt = c;
                    c !== null && (jQuery("#" + i + ".tabbed-module-C-tab .container .row .tab-holder .panel-group .panel-default:nth-child(1) .panel-heading .panel-title a").addClass("collapsed"), jQuery("#" + i + ".tabbed-module-C-tab .container .row .tab-holder .panel-group .panel-default:nth-child(1) .panel-collapse").removeClass("in"), c > 1 && (jQuery("#" + i + ".tabbed-module-C-tab .panel-default:nth-child(" + c + ") .panel-title a").removeClass("collapsed"), jQuery("#" + i + ".tabbed-module-C-tab .panel-default:nth-child(" + c + ") .panel-collapse").addClass("in")))
                }
            for (jQuery(window).width() > 751 && jQuery(".tabbed-module-C-tab .row ul.nav-tabs li a").click(function () {
                var n = jQuery(this),
                    f = n.closest("li"),
                    t = n.closest("ul").find("li").index(f);
                t++;
                var i = n.closest(".tabbed-module-C-tab"),
                    e = jQuery(".tabbed-module-C-tab").index(i),
                    r = i.attr("id");
                setTimeout(function () {
                    var n = jQuery("#" + r + ".tabbed-module-C-tab .tab-content .tab-pane:nth-child(" + t + ")").parent().css("top");
                    !disableBrowserStorage && sessionStorage && sessionStorage.setItem(u + "-tabmodulec-" + e, r + "+" + t + "+" + n)
                }, 500)
            }), tt = jQuery(".tabbed-module-C-tab").length, y = 0; y < tt; y++)
                if (!disableBrowserStorage && sessionStorage && sessionStorage.getItem(u + "-tabmodulec-" + y) !== null && (h = sessionStorage.getItem(u + "-tabmodulec-" + y), h.toString().indexOf("+") > -1 && (t = h.split("+"), t.length === 3))) {
                    var i = t[0],
                        c = t[1],
                        it = t[2];
                    jQuery("#" + i + ".tabbed-module-C-tab ul.nav-tabs li.active").removeClass("active");
                    jQuery("#" + i + ".tabbed-module-C-tab ul.nav-tabs li:nth-child(" + c + ")").addClass(" active ").css({
                        display: "block"
                    });
                    jQuery("#" + i + ".tabbed-module-C-tab .tab-content .tab-pane.active").removeClass("active");
                    jQuery("#" + i + ".tabbed-module-C-tab .tab-content .tab-pane:nth-child(" + c + ")").addClass(" active in ");
                    jQuery("#" + i + ".tabbed-module-C-tab .tab-content .tab-pane:nth-child(" + c + ")").parent().css({
                        top: it
                    })
                }
        }
    }
    jQuery.when(h()).done(function () {
        ImageCenterAlignent()
    })
}

function LoadCardBModule(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p) {
    function k(l) {
        w.iterateCycle = l;
        var v = 12 * l,
            y = v - w.maxElementcnt;
        jQuery.ajax({
            url: t,
            type: "POST",
            data: {
                datasourceid: i,
                skipcnt: y,
                max: 12,
                cardShare: r,
                variation: u,
                lang: f,
                bWidth: b,
                CardCount: e,
                modelname: o,
                loadMoreCount: l
            },
            success: function (n) {
                jQuery(s).append(jQuery(n));
                typeof refreshIndicators != "undefined" && refreshIndicators()
            },
            error: function () { },
            complete: function () {
                function t(n) {
                    var u = jQuery(n),
                        i = u.length,
                        t = 0,
                        r = 0;
                    jQuery(n).each(function () {
                        var n = jQuery(this);
                        t++;
                        r++;
                        r === i && i % 2 != 0 ? jQuery(n).addClass("full-width") : t === 1 ? jQuery(n).addClass("one-1") : t === 2 ? jQuery(n).addClass("two-2") : t === 3 ? jQuery(n).addClass("two-2") : t === 4 && (jQuery(n).addClass("one-1"), t = 0)
                    })
                }
                n <= v && (jQuery(h).hide(), jQuery(c).show());
                t(a);
                try {
                    setTimeout(function () {
                        typeof GifActivator != "undefined" && GifActivator(50)
                    }, 1e3)
                } catch (i) { }
            }
        })
    }

    function d(l) {
        w.iterateCycle = l;
        var a = 4 * l,
            v = a - 4;
        jQuery.ajax({
            url: t,
            type: "POST",
            data: {
                datasourceid: i,
                skipcnt: v,
                max: 4,
                cardShare: r,
                variation: u,
                lang: f,
                bWidth: b,
                CardCount: e,
                modelname: o,
                loadMoreCount: l
            },
            success: function (n) {
                jQuery(s).append(jQuery(n));
                typeof refreshIndicators != "undefined" && refreshIndicators()
            },
            error: function () { },
            complete: function () {
                n <= a && (jQuery(h).hide(), jQuery(c).show());
                jQuery(".card.fullimg").each(function () {
                    var n = jQuery(this),
                        t, i;
                    jQuery(n).hasClass("txt") || (t = jQuery(n).find(".card-body").height(), i = t + 293, jQuery(n).find("div.img-container.img-fluid").css("height", i))
                });
                jQuery(".card.fullimg.txt").each(function () {
                    var n = jQuery(this);
                    jQuery(n).removeClass("fullimg txt").addClass("onlytxt")
                });
                try {
                    setTimeout(function () {
                        typeof GifActivator != "undefined" && GifActivator(50)
                    }, 1e3)
                } catch (t) { }
            }
        })
    }
    var w = {
        iterateCycle: 0,
        maxElementcnt: 12
    },
        b = screen.width;
    screen.width > 751 ? (k(++w.iterateCycle), n > 12 && (jQuery(h).css("display", "block"), jQuery(c).hide()), jQuery(l).click(function (n) {
        n.preventDefault();
        k(++w.iterateCycle)
    })) : (d(++w.iterateCycle), n > 4 && (jQuery(h).show(), jQuery(c).hide()), jQuery(l).click(function (n) {
        n.preventDefault();
        d(++w.iterateCycle)
    }));
    typeof LoadMoreForGA != "undefined" && LoadMoreForGA(v);
    jQuery(y).click(function (n) {
        n.preventDefault();
        jQuery(p).css("background-image", "linear-gradient(0deg,#eef0f4 0%,#fff 100%)")
    })
}

function LoadCardBRelatedModule(n, t, i, r, u, f, e, o, s) {
    function c(i) {
        n.iterateCycle = i;
        var c = 8 * i,
            l = c - n.maxElementcnt;
        jQuery.ajax({
            url: t,
            type: "POST",
            data: {
                datasourceid: r,
                skipcnt: l,
                max: 8,
                cardShare: u,
                variation: f,
                lang: e,
                bWidth: h,
                CardCount: o,
                modelname: s,
                loadMoreCount: i
            },
            success: function (n) {
                jQuery("#cardBsection").append(jQuery(n));
                typeof refreshIndicators != "undefined" && refreshIndicators()
            },
            error: function () { },
            complete: function () {
                function n(n) {
                    var u = jQuery(n),
                        i = u.length,
                        t = 0,
                        r = 0;
                    jQuery(n).each(function () {
                        var n = jQuery(this);
                        t++;
                        r++;
                        r === i && i % 2 != 0 ? jQuery(n).addClass("full-width") : t === 1 ? jQuery(n).addClass("one-1") : t === 2 ? jQuery(n).addClass("two-2") : t === 3 ? jQuery(n).addClass("two-2") : t === 4 && (jQuery(n).addClass("one-1"), t = 0)
                    })
                }
                n(".cards.rebranding.four.fullimg .card")
            }
        })
    }
    var h = jQuery(window).width();
    c(++n.iterateCycle)
}

function LoadCardModuleFeatured(n) {
    var u = screen.width,
        t, i, r;
    for (u < 750 && (jQuery(".MobileTitle").show(), jQuery(".desktopTitle").hide(), jQuery(".desktopDedc").hide(), jQuery(".MobileDedc").show()), t = 1; t < 6; t++) i = "input[name$=hddnAvaVideo-" + n + "-" + t + "]", r = jQuery(i), r.length > 0 && GetImageFromBrightcoveApi("hddnAvaVideo-" + n + "-" + t, "image-card-featured-" + n + "-" + t)
}

function LoadCardModuleG(n, t, i, r) {
    function v() {
        c(++f.iterateCycle)
    }

    function c(i, r) {
        var c;
        f.iterateCycle = i;
        var o = 12 * i,
            h = o - f.maxElementcnt,
            e = [];
        s > 750 && (f.filterSelector = ".searchfiltermodule-tab-navigation .active a");
        c = jQuery("" + f.filterSelector + "").each(function () {
            e.push(jQuery(this).data("filterid"))
        });
        s > 750 && (e.length !== 0 ? !disableBrowserStorage && sessionStorage && (sessionStorage.setItem(u + "-cardFilterG", e), sessionStorage.setItem(u + "-cardloadFilterG", i), jQuery(".reset-filter").show()) : !disableBrowserStorage && sessionStorage && (sessionStorage.clear(), jQuery(".reset-filter").hide(), sessionStorage.setItem(u + "-cardloadFilterG", i)));
        jQuery.ajax({
            url: n,
            type: "POST",
            data: {
                lstFilter: e,
                datasourceid: t,
                skipcnt: h,
                max: o,
                iterationcount: i
            },
            async: !1,
            success: function (n) {
                r === "filterBy" ? jQuery("#cardGSection .cardGCards").html(jQuery(n.html)) : jQuery("#cardGSection .cardGCards").append(jQuery(n.html));
                n.loadMoreVisible ? p() : y();
                typeof refreshIndicators != "undefined" && refreshIndicators()
            },
            complete: function () {
                s > 750 && typeof cardGFullImage != "undefined" && cardGFullImage(".cards.rebranding.four.card-g .card.fullimg");
                s < 751 && typeof cardGFullImage != "undefined" && cardGFullImageMobile()
            }
        })
    }

    function y() {
        jQuery(".cardGLoadMore").hide()
    }

    function p() {
        jQuery(".cardGLoadMore").show()
    }

    function w(i, r) {
        f.iterateCycle = i;
        var e = 12 * i,
            o = e - f.maxElementcnt;
        l = sessionStorage.getItem(u + "-cardFilterG").split(",");
        l.length > 0 && jQuery.ajax({
            url: n,
            type: "POST",
            data: {
                lstFilter: l,
                datasourceid: t,
                skipcnt: o,
                max: e,
                iterationcount: i
            },
            async: !1,
            success: function (n) {
                r === "filterBy" ? jQuery("#cardGSection .cardGCards").html(jQuery(n.html)) : jQuery("#cardGSection .cardGCards").append(jQuery(n.html));
                n.loadMoreVisible ? p() : y();
                typeof refreshIndicators != "undefined" && refreshIndicators()
            },
            complete: function () {
                s > 750 && typeof cardGFullImage != "undefined" && cardGFullImage(".cards.rebranding.four.card-g .card.fullimg");
                s < 751 && typeof cardGFullImage != "undefined" && cardGFullImageMobile()
            }
        })
    }

    function k() {
        if (!disableBrowserStorage && sessionStorage) {
            var n = sessionStorage.getItem(u + "-cardFilterG").split(","),
                t = jQuery(".searchfiltermodule-tab-navigation li");
            jQuery.each(t, function (t, i) {
                var r = i.innerHTML.toString();
                for (o = 0; o < n.length; o++) r.indexOf(n[o]) >= 0 && jQuery(i).addClass("active")
            })
        }
    }
    var h, e, b, a, o;
    typeof LoadMoreForGA != "undefined" && LoadMoreForGA(".ga-lazyloading-" + i);
    var f = {
        iterateCycle: 1,
        maxElementcnt: 12,
        filterSelector: ""
    },
        u = window.location.pathname,
        l = [],
        s = screen.width;
    jQuery(".searchfiltermodule-tab-navigation li a").click(function () {
        var n = jQuery(this).closest("li");
        jQuery(n).hasClass("active") ? jQuery(n).removeClass("active") : jQuery(n).addClass("active")
    });
    jQuery(".btn-filter-close").click(function () {
        jQuery("#myTabContentFilterSrModA").hide()
    });
    jQuery(".cardGLoadMore").on("click", ".more-link-up1", function (n) {
        n.preventDefault();
        v()
    });
    if (jQuery(".filterBy").click(function (n) {
        n.preventDefault();
        f.filterSelector = ".searchfiltermodule-tab-navigation .active a";
        jQuery(".reset-filter").show();
        c(1, "filterBy")
    }), !disableBrowserStorage && sessionStorage && sessionStorage.getItem(u + "-cardFilterG") !== null) {
        if (event.preventDefault(), w(1, "filterBy"), JSON.parse(sessionStorage.getItem(u + "-cardloadFilterG") > 1) && (h = JSON.parse(sessionStorage.getItem(u + "-cardloadFilterG")), e = 0, h > 1))
            for (e = 2; e <= h; e++) w(e);
        k();
        jQuery(".reset-filter").show()
    }
    if (sessionStorage.getItem(u + "-cardFilterG") === null && sessionStorage.getItem(u + "-cardloadFilterG") !== null && (h = JSON.parse(sessionStorage.getItem(u + "-cardloadFilterG")), e = 0, h > 1))
        for (e = h; e > 1; e--) v();
    if (jQuery("#mobSubmit").click(function (n) {
        n.preventDefault();
        f.filterSelector = ".check-options input:checked";
        c(1, "filterBy")
    }), jQuery(".reset-button").click(function () {
        jQuery(".check-options input").prop("checked", !1);
        jQuery(function () {
            jQuery(".check-options li").each(function () {
                jQuery(jQuery(this).find("input").val());
                jQuery(this).find("input").removeProp("checked")
            })
        });
        c(1, "filterBy")
    }), b = "input[name$=hddnAvaVideo-" + r + "]", a = jQuery(b).val(), a > 0)
        for (o = 0; o < a; o++) GetImageFromBrightcoveApi("hddnVideoId-" + o + r, "image-content-G-video-" + o + r);
    jQuery(".reset-filter").on("click", function () {
        jQuery(".searchfiltermodule-tab-navigation li").removeClass("active");
        sessionStorage.clear();
        jQuery(".reset-filter").hide();
        c(1, "filterBy")
    })
}

function LoadHeroA(n) {
    jQuery(window).width() > 751 && jQuery(".hero-module-rebrand-A .carousel .item .carousel-caption .relatedcards .box .caption .box-title .hero-box-title").each(function () {
        var t = n,
            i = jQuery(this).text(),
            r;
        i.length > t && (r = i.substring(0, t) + "...");
        jQuery(this).text(r)
    });
    var t = -1;
    jQuery(".hero-rebrand-A .carousel-inner .item").each(function () {
        jQuery(this).addClass("fullVision");
        t = t > jQuery(this).find(".carousel-caption").height() ? t : jQuery(this).find(".carousel-caption").height();
        jQuery(this).removeClass("fullVision")
    });
    jQuery(".hero-rebrand-A .carousel-inner .item .carousel-caption").each(function () {
        jQuery(this).height(t);
        jQuery(this).addClass("top");
        jQuery(this).parent().parent().height(t + 100);
        jQuery(window).width() > 751 && jQuery(this).parent().parent().height(t + 100)
    })
}

function LoadHeroSmallLarge() {
    jQuery(document).ready(function () {
        jQuery(".carousel.slide").carousel();
        jQuery(".item1").click(function () {
            jQuery(".carousel.slide").carousel(0)
        });
        jQuery(".item2").click(function () {
            jQuery(".carousel.slide").carousel(1)
        });
        jQuery(".item3").click(function () {
            jQuery(".carousel.slide").carousel(2)
        });
        jQuery(".left").click(function () {
            jQuery(".carousel.slide").carousel("prev")
        });
        jQuery(".right").click(function () {
            jQuery(".carousel.slide").carousel("next")
        })
    })
}

function LoadHeroSmallSlide() {
    jQuery(document).ready(function () {
        jQuery(".hero-module.hero-module-G-slider .carousel-inner .item img").each(function () {
            var n = jQuery(this).attr("src");
            jQuery(this).parent().parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
        })
    })
}

function LoadHeroModuleTabbed(n, t, i, r) {
    jQuery(window).width() > 751 && jQuery(".hero-module .banner .carousel .carousel-inner .fit-to-width .container .carousel-caption .cardsSection .card.logo").each(function () {
        var s = jQuery(this),
            o = s.find(".content .content-des span").first(),
            u = s.find(".content .content-des p").first(),
            r = s.parent().children().length,
            i = jQuery.trim(o.text()),
            f = jQuery.trim(u.text()),
            e;
        if (i.length <= t) {
            var h = 105,
                c = 110,
                l = 115,
                a = 120;
            jQuery(window).width() > 1024 && (h = 130, c = 140, l = 150, a = 160);
            r === 4 && i.length + f.length >= h ? (e = h - i.length, u.text(f.substring(0, e) + "...")) : r === 3 && i.length + f.length >= c ? (e = c - i.length, u.text(f.substring(0, e) + "...")) : r === 2 && i.length + f.length >= l ? (e = l - i.length, u.text(f.substring(0, e) + "...")) : r === 1 && i.length + f.length >= a && (e = a - i.length, u.text(f.substring(0, e) + "..."))
        } else (r === 4 || r === 3) && i.length > t && i.length < n ? u.text("") : r === 2 && i.length > t && i.length < n + 20 ? u.text("") : r === 1 && i.length > t && i.length < n + 30 ? u.text("") : (r === 4 || r === 3) && i.length >= n ? (o.text(i.substring(0, n) + "..."), u.text("")) : r === 2 && i.length >= n + 20 ? (o.text(i.substring(0, n + 20) + "..."), u.text("")) : r === 1 && i.length >= n + 30 && (o.text(i.substring(0, n + 30) + "..."), u.text(""))
    });
    jQuery(window).width() > 751 && jQuery(".hero-module .banner .carousel .carousel-inner .fit-to-width .container .carousel-caption .cardsSection .card.no-logo").each(function () {
        var s = jQuery(this),
            o = s.find(".content .content-des span").first(),
            u = s.find(".content .content-des p").first(),
            t = s.parent().children().length,
            n = jQuery.trim(o.text()),
            f = jQuery.trim(u.text()),
            e;
        if (n.length <= i) {
            var h = 150,
                c = 200,
                l = 215,
                a = 245;
            jQuery(window).width() > 1024 && (h = 240, c = 250, l = 270, a = 280);
            t === 4 && n.length + f.length >= h ? (e = h - n.length, u.text(f.substring(0, e) + "...")) : t === 3 && n.length + f.length >= c ? (e = c - n.length, u.text(f.substring(0, e) + "...")) : t === 2 && n.length + f.length >= l ? (e = l - n.length, u.text(f.substring(0, e) + "...")) : t === 1 && n.length + f.length >= a && (e = a - n.length, u.text(f.substring(0, e) + "..."))
        } else t === 4 && n.length > i && n.length < r ? u.text("") : t === 3 && n.length > i && n.length < r + 30 ? u.text("") : (t === 2 || t === 1) && n.length > i && n.length < r + 40 ? u.text("") : t === 4 && n.length >= r ? (o.text(n.substring(0, r) + "..."), u.text("")) : t === 3 && n.length >= r + 30 ? (o.text(n.substring(0, r + 30) + "..."), u.text("")) : (t === 2 || t === 1) && n.length >= r + 40 && (o.text(n.substring(0, r + 40) + "..."), u.text(""))
    })
}

function LoadContentImageGallery(n, t) {
    var i = new Swiper(n, {
        direction: "horizontal",
        pagination: t,
        nextButton: ".next-main",
        prevButton: ".prev-main",
        keyboardControl: !0,
        preloadImages: !0
    });
    i.on("slideChangeStart", function () {
        var n = jQuery(".descriptions-slider"),
            t = n.find(".slider-caption"),
            r = i.activeIndex;
        t.removeClass("active-description");
        jQuery(".descriptions-slider [data-description-slider=" + r + "]").addClass("active-description")
    })
}

function LoadContentGVideoImages(n) {
    var t = "input[name$=hddnAvaVideo-" + n + "]",
        i = jQuery(t).val();
    i > 0 && GetImageFromBrightcoveApi("hddnVideoId-" + n, "image-content-G-" + n)
}

function LoadContentGExpEdit() {
    jQuery(document).ready(function () {
        jQuery(".content-module-G-multiple .nav-tabs a").click(function () {
            jQuery(this).tab("show")
        })
    });
    jQuery(function () {
        jQuery(".content-module-G-multiple ul.nav li").on("click", function () {
            jQuery(this).parent().find("li.active").removeClass("active");
            jQuery(this).addClass("active")
        })
    })
}

function LoadContentJExpEdit() {
    jQuery(document).ready(function () {
        jQuery(".content-module-J-New .panel-title a").click(function () {
            console.log(jQuery(this).hasClass("collapsed"));
            jQuery(this).hasClass("collapsed") ? (jQuery(".content-module-J-New .panel-title a").addClass("collapsed"), jQuery(".content-module-J-New .panel-title a").parent().parent().next().removeClass("in"), jQuery(this).removeClass("collapsed"), jQuery(this).parent().parent().next().addClass("in")) : (jQuery(this).addClass("collapsed"), jQuery(this).parent().parent().next().removeClass("in"))
        })
    })
}

function LoadContentJModule(n, t, i, r, u) {
    function f() {
        jQuery.ajax({
            url: r,
            type: "POST",
            data: {
                datasourceid: u,
                skipcnt: contentJGlobal.skipcnt,
                maxToShowCnt: contentJGlobal.maxToShowCnt
            },
            success: function (n) {
                jQuery(".content-module-J-New #accordion").append(jQuery(n.Html));
                contentJGlobal.skipcnt += contentJGlobal.maxToShowCnt;
                jQuery("#contenJloadmore .more-link-up1").css("display", "none");
                n.IsLoadMoreVisible && jQuery("#contenJloadmore .more-link-up1").show();
                typeof refreshIndicators != "undefined" && refreshIndicators()
            },
            complete: function () {
                jQuery(".content-module-J-New .panel-body .event .image-wrapper > img").each(function () {
                    var n = jQuery(this).attr("src");
                    jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
                })
            }
        })
    }
    typeof LoadMoreForGA != "undefined" && LoadMoreForGA(".ga-lazyloading-" + n);
    contentJGlobal = {
        skipcnt: t,
        totalCnt: i,
        maxToShowCnt: t
    };
    jQuery(".content-module-J-New").on("click", "#contenJloadmore", function () {
        f()
    })
}

function CopyToClipboard() {
    var t = currentUrl,
        i = !0,
        n, r;
    if (window.clipboardData) window.clipboardData.setData("Text", t);
    else {
        n = CreateElementForExecCommand(t);
        SelectContent(n);
        r = !0;
        try {
            isSupported = document.queryCommandSupported("copy");
            isSupported && (i = document.execCommand("copy", !1, null))
        } catch (u) {
            i = !1
        }
        document.body.removeChild(n)
    }
}

function CreateElementForExecCommand(n) {
    var t = document.createElement("div");
    return t !== null && (t.style.position = "absolute", t.style.left = "-10000px", t.style.top = "-10000px"), t.textContent = n, document.body.appendChild(t), t.contentEditable = !0, t
}

function SelectContent(n) {
    var i = document.createRange(),
        t;
    i.selectNodeContents(n);
    t = window.getSelection();
    t.removeAllRanges();
    t.addRange(i)
}

function LoadFilterAModule(n, t, i, r, u, f, e, o, s, h, c) {
    jQuery(document).ready(function () {
        function s(n, t, i) {
            var e, r, o, s;
            t.css("left", "auto");
            var h = n.offset().left,
                u = t.outerWidth(),
                c = u / 2,
                f = i.width();
            window_width = jQuery(window).width();
            e = (window_width - f) / 2;
            r = h - (c + e);
            f < r + u && (o = r + u, s = o - f, r = r - s);
            r < 0 && (r = 0);
            t.css("left", r)
        }
        var r, t, n, u, i, f, e;
        if (!disableBrowserStorage && sessionStorage && sessionStorage.getItem(currentPage + "filter-module") && (r = sessionStorage.getItem(currentPage + "filter-module"), r.toString().indexOf("+") > -1 && (t = r.split("+"), t.length === 4))) {
            if (n = JSON.parse(t[0]), searchKeyword = t[1], u = t[2], moreResultsCount = parseInt(t[3]), n.length > 0) {
                for (i = 0; i < n.length; i++) f = jQuery(".top-checkbox-container input[value=" + n[i] + "]").next().html(), jQuery(".search-result-grid").find("ul").append('<li class="class_' + n[i] + '">' + f + '<img src="/images/header/close_mobleorange_btn.png" alt="' + o + '" width="10px" height="10px" style="margin-left:10px;"/><\/li>'), jQuery(".top-checkbox-container input[value=" + n[i] + "]").prop("checked", !0);
                jQuery("#resetAll").show();
                keepOrangeSelected();
                arrSearch = n;
                GetItems()
            }
            u && (jQuery(".card-four.card-four1").addClass("list-view"), jQuery(".list-inline.grid-list li:eq(0)").find("img").removeClass("active"), jQuery(".list-inline.grid-list li:eq(1)").find("img").addClass("active"));
            searchKeyword && jQuery("#SearchItem").val(searchKeyword);
            GetItems()
        }
        jQuery(".Search-grid-second .pull-right ul.list-inline li a").click(function () {
            searchKeyword = jQuery("#SearchItem").val();
            var n = JSON.stringify(arrSearch);
            setTimeout(function () {
                resultView = jQuery("#myList4 .card-four").hasClass("list-view") ? "list-view" : "";
                !disableBrowserStorage && sessionStorage && sessionStorage.setItem(currentPage + "filter-module", n + "+" + searchKeyword + "+" + resultView + "+" + moreResultsCount)
            }, timeDelay)
        });
        jQuery(".nav.nav-tabs.searchfiltermodule-tab-navigation>li:not(:last-child)").click(function () {
            var n = jQuery('a[data-toggle="tab"]').parents(".active").length,
                t = !1;
            jQuery("#myTabContentFilterSrModA").toggle();
            jQuery(this).hasClass("active") ? (jQuery(jQuery(this).attr("href")).toggleClass("active"), n = !1, jQuery(this).toggleClass("no-after no-before")) : (t = !0, n = this, jQuery(this).removeClass("no-after no-before"), jQuery("#myTabContentFilterSrModA").show())
        });
        jQuery(".top-checkbox-container input").on("click", function () {
            var i, t, r, n;
            keepOrangeSelected();
            i = jQuery(this).next().html();
            jQuery(this).prop("checked") === !0 ? (jQuery(this).prop("checked", !0), jQuery.inArray(jQuery(this).val(), arrSearch) === -1 && (jQuery(".search-result-grid").find("ul").append('<li class="class_' + jQuery(this).val() + '">' + i + '<img src="/images/header/close_mobleorange_btn.png" alt="' + o + '" width="10px" height="10px" style="margin-left:10px;"/><\/li>'), arrSearch.push(jQuery(this).val()), n = JSON.stringify(arrSearch), searchKeyword = jQuery("#SearchItem").val(), !disableBrowserStorage && sessionStorage && sessionStorage.setItem(currentPage + "filter-module", n + "+" + searchKeyword + "+" + resultView + "+" + moreResultsCount), GetItems())) : (jQuery(this).prop("checked", !1), t = arrSearch.indexOf(jQuery(this).val()), r = jQuery(this).val(), t > -1 && arrSearch.splice(t, 1), n = JSON.stringify(arrSearch), searchKeyword = jQuery("#SearchItem").val(), !disableBrowserStorage && sessionStorage && sessionStorage.setItem(currentPage + "filter-module", n + "+" + searchKeyword + "+" + resultView + "+" + moreResultsCount), GetItems(), jQuery(".search-result-grid li").each(function () {
                var n = "class_" + r;
                jQuery(this).hasClass(n) && jQuery(this).remove()
            }));
            jQuery(".checkCurrent li").on("click", function () {
                var n = jQuery(this).attr("class").replace("class_", ""),
                    t = arrSearch.indexOf(n),
                    i;
                t > -1 && arrSearch.splice(t, 1);
                jQuery(".top-checkbox-container input").each(function () {
                    jQuery(this).val() === n && jQuery(this).prop("checked", !1)
                });
                jQuery(this).remove();
                keepOrangeSelected();
                i = JSON.stringify(arrSearch);
                searchKeyword = jQuery("#SearchItem").val();
                !disableBrowserStorage && sessionStorage && sessionStorage.setItem(currentPage + "filter-module", i + "+" + searchKeyword + "+" + resultView + "+" + moreResultsCount);
                GetItems();
                arrSearch.length > 0 ? (jQuery(".caption").show(), jQuery("#resetAll").show()) : (jQuery(".caption").hide(), jQuery("#resetAll").hide())
            });
            arrSearch.length > 0 ? (jQuery(".caption").show(), jQuery("#resetAll").show()) : (jQuery(".caption").hide(), jQuery("#resetAll").hide())
        });
        jQuery(".btn-filter-close").click(function () {
            jQuery("#myTabContentFilterSrModA").hide();
            jQuery(".searchfiltermodule-tab-navigation li").removeClass("active")
        });
        e = !0;
        jQuery("#accordion").on("show.bs.collapse", function () {
            e && jQuery("#accordion .in").collapse("hide")
        });
        jQuery(".checkCurrent li").on("click", function () {
            var n, t, i;
            jQuery(this).closest("li").remove();
            n = jQuery(this).attr("class").replace("class_", "");
            t = arrSearch.indexOf(n);
            t > -1 && arrSearch.splice(t, 1);
            jQuery(".top-checkbox-container input").each(function () {
                jQuery(this).val() === n && jQuery(this).prop("checked", !1)
            });
            jQuery(this).remove();
            keepOrangeSelected();
            i = JSON.stringify(arrSearch);
            searchKeyword = jQuery("#SearchItem").val();
            !disableBrowserStorage && sessionStorage && sessionStorage.setItem(currentPage + "filter-module", i + "+" + searchKeyword + "+" + resultView + "+" + moreResultsCount);
            GetItems();
            arrSearch.length > 0 ? (jQuery(".caption").show(), jQuery("#resetAll").show()) : (jQuery(".caption").hide(), jQuery("#resetAll").hide())
        });
        jQuery(".dropdown-searchbtn").change(function () {
            jQuery(this).val() === "Most Relevance" ? (jQuery("#myList4").show(), jQuery("#myList5").hide()) : jQuery(this).val() === "By Date" && (jQuery("#myList4").hide(), jQuery("#myList5").show())
        });
        jQuery(".btn-reset-filter").on("click", function () {
            jQuery(".filtermodule-A-open .check-options li").find("input[type=checkbox]:checked").removeAttr("checked");
            jQuery(".filtermodule-A-open .panel, .filtermodule-A-open").each(function () {
                jQuery(this).find("input[type=checkbox]:checked").length > 0 ? jQuery(this).prev(".panel-heading").find(".panel-title").css("color", " #000066") : jQuery(this).prev(".panel-heading").find(".panel-title").removeAttr("style")
            })
        });
        jQuery(".mobileCheckbox > input[type=checkbox]").on("click", function () {
            jQuery(".mobileCheckbox > input[type=checkbox]:checked").length > 0 ? jQuery("#donebtn").prop("disabled", !1) : jQuery("#donebtn").prop("disabled", !0)
        });
        jQuery(".filter-by").on("shown.bs.tab", function (n) {
            s(jQuery(n.target), jQuery("#myTabContentFilterSrModA"), jQuery(".filter-by .row"))
        });
        jQuery(".filtermodule-A-open .panel-group").on("hidden.bs.collapse", function () {
            jQuery(".filtermodule-A-open .panel,.filtermodule-A-open").each(function () {
                jQuery(this).find("input[type=checkbox]:checked").length > 0 ? jQuery(this).prev(".panel-heading").find(".panel-title").css("color", " #000066") : jQuery(this).prev(".panel-heading").find(".panel-title").removeAttr("style")
            })
        })
    });
    jQuery("#search-btn").click(function (n) {
        n.preventDefault();
        moreResultsCount = 1;
        searchKeyword = jQuery("#SearchItem").val();
        var t = JSON.stringify(arrSearch);
        !disableBrowserStorage && sessionStorage && sessionStorage.setItem(currentPage + "filter-module", t + "+" + searchKeyword + "+" + resultView + "+" + moreResultsCount);
        GetItems()
    });
    jQuery("a.pull-right").on("click", function () {
        jQuery(".js-tabcollapse-panel-heading").removeAttr("style");
        jQuery(".top-checkbox-container").find("input[type=checkbox]:checked").removeAttr("checked");
        jQuery(".filtermodule-A-open .panel").find("input[type=checkbox]:checked").removeAttr("checked");
        jQuery(".search-result-grid li").remove();
        arrSearch.length = 0;
        jQuery(".caption").hide();
        jQuery("#resetAll").hide();
        jQuery("#SearchItem").val("");
        jQuery("#searchCloseButton").removeClass("removeActive");
        searchKeyword = jQuery("#SearchItem").val();
        var n = JSON.stringify(arrSearch);
        moreResultsCount = 1;
        !disableBrowserStorage && sessionStorage && sessionStorage.clear();
        GetItems()
    });
    jQuery("#resetAll").on("click", function () {
        jQuery(".js-tabcollapse-panel-heading").removeAttr("style");
        jQuery(".top-checkbox-container").find("input[type=checkbox]:checked").removeAttr("checked");
        jQuery(".search-result-grid li").remove();
        jQuery(".caption").hide();
        jQuery("#resetAll").hide();
        moreResultsCount = 1;
        arrSearch.length = 0;
        searchKeyword = jQuery("#SearchItem").val();
        var n = JSON.stringify(arrSearch);
        !disableBrowserStorage && sessionStorage && sessionStorage.setItem(currentPage + "filter-module", n + "+" + searchKeyword + "+" + resultView + "+" + moreResultsCount);
        GetItems()
    });
    jQuery(".filtermodule-A-open .btn-row #resetAll").on("click", function () {
        jQuery(".js-tabcollapse-panel-heading").removeAttr("style");
        jQuery(".top-checkbox-container").find("input[type=checkbox]:checked").removeAttr("checked");
        jQuery(".search-result-grid li").remove();
        jQuery(".caption").hide();
        jQuery("#resetAll").hide();
        moreResultsCount = 1;
        arrSearch.length = 0;
        searchKeyword = jQuery("#SearchItem").val();
        var n = JSON.stringify(arrSearch);
        !disableBrowserStorage && sessionStorage && sessionStorage.setItem(currentPage + "filter-module", n + "+" + searchKeyword + "+" + resultView + "+" + moreResultsCount);
        GetItems()
    });
    jQuery("#MoreResults").click(function (n) {
        n.preventDefault();
        moreResultsCount = parseInt(moreResultsCount) + 1;
        var t = JSON.stringify(arrSearch);
        searchKeyword = jQuery("#SearchItem").val();
        !disableBrowserStorage && sessionStorage && sessionStorage.setItem(currentPage + "filter-module", t + "+" + searchKeyword + "+" + resultView + "+" + moreResultsCount);
        GetItems()
    });
    jQuery("#btnMobFilter").on("click", function () {
        jQuery(".mobileCheckbox > input[type=checkbox]:checked").each(function () {
            jQuery.inArray(jQuery(this).val(), arrSearch) < 0 && jQuery(this).removeAttr("checked")
        })
    });
    jQuery(".btn-reset-filter,.more-link.view-all").click(function () {
        jQuery(".btn-done").attr("disabled", !0);
        jQuery(".panel-title").removeAttr("style")
    });
    typeof LoadMoreForGA != "undefined" && LoadMoreForGA(".ga-lazyloading-" + c)
}

function GetItems() {
    typeof showAnimation != "undefined" && showAnimation();
    var t = jQuery("#search-posts").hasClass("list-view"),
        r = jQuery("#myList4").attr("data-variationclass"),
        i = currentItemId,
        u = currentItemTemplateId,
        n = "";
    n = searchKeyword ? searchKeyword : jQuery("#SearchItem").val();
    jQuery(".more-results-details").hide();
    switch (u.toLowerCase()) {
        case "3ee2d1d6-37a4-4d44-b1f4-84448c257466":
            jQuery.ajax({
                type: "POST",
                url: GetPressReleasesFilter,
                data: {
                    SubCategories: arrSearch,
                    itemId: i,
                    SearchKey: n,
                    resultCount: moreResultsCount
                },
                success: function (n) {
                    var u = n.lstTaxonomyToBeEnable,
                        r, i;
                    jQuery("#filtermoduleA-open-desktop").find(":checkbox").each(function () {
                        this.checked ? jQuery(this).removeAttr("disabled") : jQuery(this).attr("disabled", !0);
                        jQuery.inArray(jQuery(this).val(), u) > -1 && jQuery(this).attr("disabled", !1)
                    });
                    jQuery("#filtermoduleA-open").find(":checkbox").each(function () {
                        this.checked ? jQuery(this).removeAttr("disabled") : jQuery(this).attr("disabled", !0);
                        jQuery.inArray(jQuery(this).val(), u) > -1 && jQuery(this).attr("disabled", !1)
                    });
                    jQuery("#myList4").html(jQuery(n.Html));
                    jQuery("#totalResultA").text(totalResultDictionary + n.TotalResultCount);
                    r = jQuery(n.Html).find(".card-default").length;
                    i = showResultstringDitctonary;
                    i = i.replace("xxxx", "<strong>" + r + "<\/strong>");
                    i = i.replace("yyyy", "<strong>" + n.TotalResultCount + "<\/strong>");
                    jQuery(".more-results-details").html(i);
                    n.TotalResultCount === n.AllRecords ? (jQuery(".pull-right.more-link.view-all").hide(), jQuery(".btn-done").attr("disabled", !0)) : (jQuery(".pull-right.more-link.view-all").show(), jQuery(".btn-done").attr("disabled", !1));
                    n.TotalResultCount - r <= 0 ? jQuery("#MoreResults").css("visibility", "hidden") : jQuery("#MoreResults").css("visibility", "visible");
                    t ? jQuery("#search-posts").addClass("list-view") : jQuery("#search-posts").removeClass("list-view");
                    jQuery(".more-results-details").show();
                    typeof refreshIndicators != "undefined" && refreshIndicators()
                },
                complete: function () {
                    cardVariations(4, ".card-four .card-default");
                    hideAnimation();
                    jQuery(".card-default").each(function () {
                        try {
                            var n = jQuery(this),
                                t = n.find(".noListPara").html().length,
                                i = n.find(".ListPara").html().length;
                            n.parent().hasClass("list-view") ? (jQuery(".havingList").show(), jQuery(".notList").hide(), t > 1 && jQuery(".noListPara").hide(), i > 1 && jQuery(".ListPara").show()) : (jQuery(".havingList").hide(), jQuery(".notList").show(), t > 1 && jQuery(".noListPara").show(), i > 1 && jQuery(".ListPara").hide())
                        } catch (r) { }
                    });
                    try {
                        setTimeout(function () {
                            typeof GifActivator != "undefined" && GifActivator(50)
                        }, 1e3)
                    } catch (n) { }
                }
            });
            break;
        case "705fc2fa-80a7-4005-9c92-122f7e4fe21e":
            jQuery.ajax({
                type: "POST",
                url: GetClientsFilter,
                data: {
                    SubCategories: arrSearch,
                    itemId: i,
                    SearchKey: n,
                    resultCount: moreResultsCount,
                    variationClass: r
                },
                success: function (n) {
                    var u = n.lstTaxonomyToBeEnable,
                        r, i;
                    jQuery("#filtermoduleA-open-desktop").find(":checkbox").each(function () {
                        this.checked ? jQuery(this).removeAttr("disabled") : jQuery(this).attr("disabled", !0);
                        jQuery.inArray(jQuery(this).val(), u) > -1 && jQuery(this).attr("disabled", !1)
                    });
                    jQuery("#filtermoduleA-open").find(":checkbox").each(function () {
                        this.checked ? jQuery(this).removeAttr("disabled") : jQuery(this).attr("disabled", !0);
                        jQuery.inArray(jQuery(this).val(), u) > -1 && jQuery(this).attr("disabled", !1)
                    });
                    jQuery("#myList4").html(jQuery(n.Html));
                    jQuery("#totalResultA").text(totalResultDictionary + n.TotalResultCount);
                    r = jQuery(n.Html).find(".card-default").length;
                    i = showResultstringDitctonary;
                    i = i.replace("xxxx", "<strong>" + r + "<\/strong>");
                    i = i.replace("yyyy", "<strong>" + n.TotalResultCount + "<\/strong>");
                    jQuery(".more-results-details").html(i);
                    n.TotalResultCount === n.AllRecords ? (jQuery(".pull-right.more-link.view-all").hide(), jQuery(".btn-done").attr("disabled", !0)) : (jQuery(".pull-right.more-link.view-all").show(), jQuery(".btn-done").attr("disabled", !1));
                    n.TotalResultCount - r <= 0 ? jQuery("#MoreResults").css("visibility", "hidden") : jQuery("#MoreResults").css("visibility", "visible");
                    t ? jQuery("#search-posts").addClass("list-view") : jQuery("#search-posts").removeClass("list-view");
                    jQuery(".search-module-grid.card .img-wrapper").find("img").each(function () {
                        var n = jQuery(this).attr("src");
                        jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
                    });
                    jQuery(".more-results-details").show();
                    typeof refreshIndicators != "undefined" && refreshIndicators()
                },
                complete: function () {
                    cardVariations(4, ".card-four .card-default");
                    hideAnimation();
                    jQuery(".card-default").each(function () {
                        try {
                            var n = jQuery(this),
                                t = n.find(".noListPara").html().length,
                                i = n.find(".ListPara").html().length;
                            n.parent().hasClass("list-view") ? (jQuery(".havingList").show(), jQuery(".notList").hide(), t > 1 && jQuery(".noListPara").hide(), i > 1 && jQuery(".ListPara").show()) : (jQuery(".havingList").hide(), jQuery(".notList").show(), t > 1 && jQuery(".noListPara").show(), i > 1 && jQuery(".ListPara").hide())
                        } catch (r) { }
                    });
                    try {
                        setTimeout(function () {
                            typeof GifActivator != "undefined" && GifActivator(50)
                        }, 1e3)
                    } catch (n) { }
                }
            });
            break;
        case "9788a62f-18b4-4659-855e-f9e9bc82d27e":
            jQuery.ajax({
                type: "POST",
                url: GetNewsFilter,
                data: {
                    SubCategories: arrSearch,
                    itemId: i,
                    SearchKey: n,
                    resultCount: moreResultsCount
                },
                success: function (n) {
                    var u = n.lstTaxonomyToBeEnable,
                        r, i;
                    jQuery("#filtermoduleA-open-desktop").find(":checkbox").each(function () {
                        this.checked ? jQuery(this).removeAttr("disabled") : jQuery(this).attr("disabled", !0);
                        jQuery.inArray(jQuery(this).val(), u) > -1 && jQuery(this).attr("disabled", !1)
                    });
                    jQuery("#filtermoduleA-open").find(":checkbox").each(function () {
                        this.checked ? jQuery(this).removeAttr("disabled") : jQuery(this).attr("disabled", !0);
                        jQuery.inArray(jQuery(this).val(), u) > -1 && jQuery(this).attr("disabled", !1)
                    });
                    jQuery("#myList4").html(jQuery(n.Html));
                    jQuery("#totalResultA").text(totalResultDictionary + n.TotalResultCount);
                    r = jQuery(n.Html).find(".card-default").length;
                    i = showResultstringDitctonary;
                    i = i.replace("xxxx", "<strong>" + r + "<\/strong>");
                    i = i.replace("yyyy", "<strong>" + n.TotalResultCount + "<\/strong>");
                    jQuery(".more-results-details").html(i);
                    n.TotalResultCount === n.AllRecords ? (jQuery(".pull-right.more-link.view-all").hide(), jQuery(".btn-done").attr("disabled", !0)) : (jQuery(".pull-right.more-link.view-all").show(), jQuery(".btn-done").attr("disabled", !1));
                    n.TotalResultCount - r <= 0 ? jQuery("#MoreResults").css("visibility", "hidden") : jQuery("#MoreResults").css("visibility", "visible");
                    t ? jQuery("#search-posts").addClass("list-view") : jQuery("#search-posts").removeClass("list-view");
                    jQuery(".more-results-details").show();
                    typeof refreshIndicators != "undefined" && refreshIndicators()
                },
                complete: function () {
                    cardVariations(4, ".card-four .card-default");
                    hideAnimation();
                    jQuery(".card-default").each(function () {
                        try {
                            var n = jQuery(this),
                                t = n.find(".noListPara").html().length,
                                i = n.find(".ListPara").html().length;
                            n.parent().hasClass("list-view") ? (jQuery(".havingList").show(), jQuery(".notList").hide(), t > 1 && jQuery(".noListPara").hide(), i > 1 && jQuery(".ListPara").show()) : (jQuery(".havingList").hide(), jQuery(".notList").show(), t > 1 && jQuery(".noListPara").show(), i > 1 && jQuery(".ListPara").hide())
                        } catch (r) { }
                    });
                    try {
                        setTimeout(function () {
                            typeof GifActivator != "undefined" && GifActivator(50)
                        }, 1e3)
                    } catch (n) { }
                }
            });
            break;
        case "24a00db1-4cda-4a0c-a8bf-c057efcf5214":
            jQuery.ajax({
                type: "POST",
                url: GetEventsFilter,
                data: {
                    SubCategories: arrSearch,
                    itemId: i,
                    SearchKey: n,
                    resultCount: moreResultsCount
                },
                success: function (n) {
                    jQuery("#myList4").html(jQuery(n.Html));
                    jQuery("#totalResultA").text(totalResultDictionary + n.TotalResultCount);
                    var r = jQuery(n.Html).find(".card-default").length,
                        i = showResultstringDitctonary;
                    i = i.replace("xxxx", "<strong>" + r + "<\/strong>");
                    i = i.replace("yyyy", "<strong>" + n.TotalResultCount + "<\/strong>");
                    jQuery(".more-results-details").html(i);
                    n.TotalResultCount === n.AllRecords ? (jQuery(".pull-right.more-link.view-all").hide(), jQuery(".btn-done").attr("disabled", !0)) : (jQuery(".pull-right.more-link.view-all").show(), jQuery(".btn-done").attr("disabled", !1));
                    n.TotalResultCount - r <= 0 ? jQuery("#MoreResults").css("visibility", "hidden") : jQuery("#MoreResults").css("visibility", "visible");
                    t ? jQuery("#search-posts").addClass("list-view") : jQuery("#search-posts").removeClass("list-view");
                    jQuery(".more-results-details").show();
                    typeof refreshIndicators != "undefined" && refreshIndicators()
                },
                complete: function () {
                    cardVariations(4, ".card-four .card-default");
                    hideAnimation();
                    jQuery(".card-default").each(function () {
                        try {
                            var n = jQuery(this),
                                t = n.find(".noListPara").html().length,
                                i = n.find(".ListPara").html().length;
                            n.parent().hasClass("list-view") ? (jQuery(".havingList").show(), jQuery(".notList").hide(), t > 1 && jQuery(".noListPara").hide(), i > 1 && jQuery(".ListPara").show()) : (jQuery(".havingList").hide(), jQuery(".notList").show(), t > 1 && jQuery(".noListPara").show(), i > 1 && jQuery(".ListPara").hide())
                        } catch (r) { }
                    });
                    try {
                        setTimeout(function () {
                            typeof GifActivator != "undefined" && GifActivator(50)
                        }, 1e3)
                    } catch (n) { }
                }
            });
            break;
        case "02cd0d34-4a5b-4e2d-b836-487177977bb5":
            jQuery.ajax({
                type: "POST",
                url: GetAuthorsFilter,
                data: {
                    SubCategories: arrSearch,
                    ItemId: i,
                    SearchKey: n,
                    ResultCount: moreResultsCount,
                    VariationClass: r
                },
                success: function (n) {
                    var u = n.lstTaxonomyToBeEnable,
                        r, i;
                    jQuery("#filtermoduleA-open-desktop").find(":checkbox").each(function () {
                        this.checked ? jQuery(this).removeAttr("disabled") : jQuery(this).attr("disabled", !0);
                        jQuery.inArray(jQuery(this).val(), u) > -1 && jQuery(this).attr("disabled", !1)
                    });
                    jQuery("#filtermoduleA-open").find(":checkbox").each(function () {
                        this.checked ? jQuery(this).removeAttr("disabled") : jQuery(this).attr("disabled", !0);
                        jQuery.inArray(jQuery(this).val(), u) > -1 && jQuery(this).attr("disabled", !1)
                    });
                    jQuery("#authorList").html(jQuery(n.Html));
                    jQuery("#totalResultA").text(totalResultDictionary + n.TotalResultCount);
                    r = jQuery("#authorList").find(".author-profile").length;
                    i = showResultstringDitctonary;
                    i = i.replace("xxxx", "<strong>" + r + "<\/strong>");
                    i = i.replace("yyyy", "<strong>" + n.TotalResultCount + "<\/strong>");
                    jQuery(".more-results-details").html(i);
                    n.TotalResultCount === n.AllRecords ? (jQuery(".blog-search-A .search-filter .filter-count").removeAttr("style"), jQuery(".pull-right.more-link.view-all").hide(), jQuery(".btn-done").attr("disabled", !0), jQuery("#author-filtercount").show()) : (jQuery(".pull-right.more-link.view-all").show(), jQuery(".btn-done").attr("disabled", !1), jQuery("#author-filtercount").hide());
                    n.TotalResultCount - r <= 0 ? jQuery("#MoreResults").css("visibility", "hidden") : jQuery("#MoreResults").css("visibility", "visible");
                    t ? jQuery("#author-search").addClass("list-view") : jQuery("#author-search").removeClass("list-view");
                    jQuery(".author-details .col-sm-12").find("img").each(function () {
                        var n = jQuery(this).attr("src");
                        jQuery(this).parent().css("url(" + n + ")")
                    });
                    jQuery(".more-results-details").show();
                    typeof refreshIndicators != "undefined" && refreshIndicators()
                },
                complete: function () {
                    hideAnimation();
                    try {
                        setTimeout(function () {
                            typeof GifActivator != "undefined" && GifActivator(50)
                        }, 1e3)
                    } catch (n) { }
                }
            })
    }
}

function GetItemsOnSubmit() {
    moreResultsCount = 1;
    var n = JSON.stringify(arrSearch);
    searchKeyword = jQuery("#SearchItem").val();
    !disableBrowserStorage && sessionStorage && sessionStorage.setItem(currentPage + "filter-module", n + "+" + searchKeyword + "+" + resultView + "+" + moreResultsCount);
    GetItems()
}

function FilterRecordinMobile() {
    arrSearch.length = 0;
    jQuery(".mobileCheckbox > input[type=checkbox]").each(function () {
        jQuery(".blog-search-A .search-filter .filter-count").css("width", "auto");
        jQuery(this).prop("checked") === !0 && jQuery.inArray(jQuery(this).val(), arrSearch) === -1 && arrSearch.push(jQuery(this).val())
    });
    GetItems()
}

function keepOrangeSelected() {
    jQuery("#myTabContentFilterSrModA .tab-pane").each(function () {
        jQuery(this).find("input[type=checkbox]:checked").length > 0 ? jQuery("#DesktopTab_" + this.id + " a").css("font-weight", "bold") : jQuery("#DesktopTab_" + this.id + " a").removeAttr("style")
    })
}

function LoadLanguageSelector() {
    jQuery("#countryRecognizer").addClass("spaceEliminator");
    jQuery("#countryRecognizerLS").addClass("spaceEliminatorAnchor")
}

function LoadSurveyHTML() {
    AvanadeMaturityModel();
    jQuery("body").bind("DOMNodeInserted", function () {
        jQuery(this).find(".noUi-horizontal").addClass("noUi-extended")
    })
}

function LoadTabbedAModule(n) {
    var u = screen.width,
        f, t, e, r, i;
    for (u < 750 && (jQuery(".MobileTitle").show(), jQuery(".desktopTitle").hide()), f = jQuery("input[name=hddnTabcount]").val(), t = 0; t < f; t++)
        if (e = "input[name$=hddnAvaVideo-" + n + "-tab-" + t + "]", r = jQuery(e).length, r >= 1)
            for (i = 1; i <= r; i++) GetImageFromBrightcoveApi("hddnVideoId-" + n + "-tab-" + t + "-" + i, "image-tab-A-" + n + "-tab-" + t + "-" + i);
    u < 751 && jQuery(".tab-container-rebrand").each(function () {
        jQuery(".tab-drawer-heading").length > 1 && jQuery(".tab-drawer-heading").css("display", "block")
    });
    jQuery(window).resize(function () {
        var n, t;
        jQuery("ul.tabs-rebrand").each(function () {
            var t = jQuery(this).width(),
                i = jQuery(this).find("li").length - 1;
            n = t / i;
            jQuery(this).find("li").css("width", n)
        });
        clearTimeout(t);
        t = setTimeout(function () {
            jQuery("ul.tabs-rebrand .active").each(function () {
                var n = jQuery(this).width(),
                    t = jQuery(this).index(),
                    i = n * t;
                jQuery(this).parent().find("#last-li").css({
                    "margin-left": i
                })
            })
        }, 500)
    })
}

function LoadTabbedAModuleExpEdit() {
    function n() {
        jQuery(".card-a-module .left-single-card-a.mixed-cards").length > 0 && jQuery(".left-single-card-a.mixed-cards").each(function (n) {
            var i = jQuery(this),
                h = jQuery(i).find(".card-a-body").outerHeight(),
                o = jQuery(i).find(".card-a-body h2").outerHeight(!0) + jQuery(i).find(".card-a-body .colp-land").outerHeight(),
                f, s;
            if (o > h) {
                jQuery(i).addClass("scroll-text");
                jQuery(i).find(".card-a-body").addClass("content").attr("id", "content" + n);
                jQuery("#content" + n).css("overflow-y", "scroll");
                jQuery(i).find(".addingScrollBar").attr("id", "scrollbar-y").html('<div class="scrollbar-container" id="scrollbar-container' + n + '"><div class="scrollbar" id="scrollbar' + n + '"><\/div><\/div>');
                var e = document.getElementById.bind(document),
                    u = e("scrollbar-container" + n),
                    t = e("content" + n),
                    r = e("scrollbar" + n);
                typeof t != "undefined" && t !== null && t.length > 0 && t.addEventListener("scroll", function () {
                    r.style.height = u.clientHeight * t.clientHeight / t.scrollHeight + "px";
                    r.style.top = u.clientHeight * t.scrollTop / t.scrollHeight + "px"
                });
                f = document.createEvent("Event");
                f.initEvent("scroll", !0, !0);
                window.addEventListener("resize", t.dispatchEvent.bind(t, f));
                t.dispatchEvent(f);
                r.addEventListener("mousedown", function (n) {
                    n.preventDefault();
                    var f = r.offsetTop,
                        i = function (i) {
                            var e = i.pageY - n.pageY;
                            r.style.top = Math.min(u.clientHeight - r.clientHeight, Math.max(0, f + e)) + "px";
                            t.scrollTop = t.scrollHeight * r.offsetTop / u.clientHeight
                        };
                    document.addEventListener("mousemove", i);
                    document.addEventListener("mouseup", function () {
                        document.removeEventListener("mousemove", i)
                    })
                });
                jQuery("#content" + n).bind("scroll", function () {
                    jQuery(this).scrollTop() + jQuery(this).innerHeight() >= jQuery(this)[0].scrollHeight ? jQuery(".card-a-module .cards-a .left-single-card-a.scroll-text div.cardAScrollFade").removeClass("fadeout") : jQuery(".card-a-module .cards-a .left-single-card-a.scroll-text div.cardAScrollFade").addClass("fadeout")
                })
            } else jQuery("#content" + n).css("overflow-y", "hidden"), jQuery("#scrollbar-container" + n).remove(), jQuery(i).removeClass("scroll-text"), jQuery("#content" + n).removeClass("content");
            s = screen.width;
            s < 751 && (o > 410 ? jQuery(i).addClass("scroll-text") : jQuery(i).removeClass("scroll-text"))
        })
    }
    jQuery(document).ready(function () {
        jQuery(window).resize(function () {
            var n, t;
            jQuery("ul.tabs-rebrand").each(function () {
                var t = jQuery(this).width(),
                    i = jQuery(this).find("li").length - 1;
                n = t / i;
                jQuery(this).find("li").css("width", n)
            });
            clearTimeout(t);
            t = setTimeout(function () {
                jQuery("ul.tabs-rebrand .active").each(function () {
                    var n = jQuery(this).width(),
                        t = jQuery(this).index(),
                        i = n * t;
                    jQuery(this).parent().parent().find("#last-li").css({
                        "margin-left": i
                    })
                })
            }, 500)
        });
        jQuery("ul.tabs-rebrand").each(function () {
            var t = jQuery(this).width(),
                i = jQuery(this).find("li").length - 1,
                r = t / i;
            jQuery(this).find("li").css("width", r);
            jQuery("ul.tabs-rebrand li").click(function () {
                var r = jQuery(this).width(),
                    u = jQuery(this).index(),
                    f = r * u,
                    t, i;
                jQuery(this).parent().parent().find("#last-li").css({
                    "margin-left": f
                });
                t = jQuery(jQuery(this).parent()).parent().parent();
                jQuery(t).find(".tab-content-rebrand").hide();
                i = jQuery(this).attr("href");
                jQuery(i).show();
                jQuery(this).parent().parent().find("li").removeClass("active");
                jQuery(this).addClass("active");
                n()
            })
        })
    });
    jQuery(document).ready(function () {
        function t(t) {
            if (n < 751) {
                var r = jQuery("#tabbed-module-mixed-" + t),
                    i = r.find(".left-single-card-a.mixed-cards"),
                    u = i.find(".card-a-body").height();
                u > 500 ? jQuery(i).addClass("scroll-text") : jQuery(i).removeClass("scroll-text");
                jQuery(this).find(".showtab").on("click", function () {
                    jQuery(this).hide();
                    jQuery(this).parents(".mixed-cards").find(".colp-land").css({
                        "max-height": "initial",
                        "margin-bottom": "0px"
                    });
                    jQuery(this).parents(".mixed-cards").find(".fadeout").css("display", "none");
                    jQuery(this).parents(".mixed-cards").find("span.readmore").css("display", "block");
                    jQuery(this).parents(".mixed-cards").find("span.open").css("display", "block");
                    jQuery(this).parents(".mixed-cards").find("span.download").css("display", "block");
                    jQuery(this).parents(".mixed-cards").find("span.external").css("display", "block");
                    jQuery(this).parents(".mixed-cards").find("span.play").css("display", "block");
                    jQuery(this).parents(".mixed-cards").find(".share-icons").css("display", "block")
                })
            }
        }
        jQuery("ul.tabs-rebrand li").click(function () {
            jQuery(".tab-content-rebrand").addClass("tab-animate")
        });
        var n = screen.width;
        jQuery(".tab-drawer-heading").on("click", function () {
            var n = jQuery(this);
            n.toggleClass("d-active");
            n.next().toggle();
            jQuery("html").animate({
                scrollTop: n.offset().top - 50
            }, 1500);
            t(n.attr("rel"))
        })
    })
}

function LoadTabbedDModuleExpEdit() {
    jQuery(".tabbed-module-d .row ul.nav-tabs li a").click(function () {
        jQuery(this).tab("show")
    });
    jQuery(function () {
        jQuery(".tabbed-module-d ul.nav li").on("click", function () {
            jQuery(this).parent().find("li.active").removeClass("active");
            jQuery(this).addClass("active")
        })
    })
}

function LoadTabbedEModuleExpEdit() {
    jQuery(document).ready(function () {
        jQuery(".tabbed-module-E .nav-tabs li a").click(function () {
            jQuery(this).tab("show")
        })
    });
    jQuery(function () {
        jQuery(".tabbed-module-E  ul.nav li").on("click", function () {
            jQuery(this).parent().find("li.active").removeClass("active");
            jQuery(this).addClass("active")
        })
    });
    jQuery(document).ready(function () {
        jQuery(".tabbed-module-E .tab-carousel").carousel();
        jQuery(".tabbed-module-E .left").click(function () {
            jQuery(".tab-carousel").carousel("prev")
        });
        jQuery(".tabbed-module-E .right").click(function () {
            jQuery(".tab-carousel").carousel("next")
        })
    })
}

function LoadTabbedEModule(n) {
    ViewMoreForTab(".tabbed-module-E .carousel0-" + n + " .item .team-details .row .col-md-3", ".tabeloadmore0-" + n, 4);
    ViewMoreForTab(".tabbed-module-E .carousel1-" + n + " .item .team-details .row .col-md-3", ".tabeloadmore1-" + n, 4);
    ViewMoreForTab(".tabbed-module-E .carousel2-" + n + " .item .team-details .row .col-md-3", ".tabeloadmore2-" + n, 4);
    ViewMoreForTab(".tabbed-module-E .carousel3-" + n + " .item .team-details .row .col-md-3", ".tabeloadmore3-" + n, 4);
    typeof LoadMoreForGA != "undefined" && (LoadMoreForGA(".ga-lazyloading-0-" + n), LoadMoreForGA(".ga-lazyloading-1-" + n), LoadMoreForGA(".ga-lazyloading-2-" + n), LoadMoreForGA(".ga-lazyloading-3-" + n))
}

function LoadTabbedGModuleExpEdit() {
    jQuery(document).ready(function () {
        jQuery(".tabbed-module-G-tab .nav-tabs a").click(function () {
            jQuery(this).tab("show")
        })
    });
    jQuery(".js-tabcollapse-panel-heading").click(function () {
        jQuery(this).hasClass("collapsed") ? (jQuery(".js-tabcollapse-panel-heading").addClass("collapsed"), jQuery(".js-tabcollapse-panel-heading").parent().parent().next().removeClass("in"), jQuery(this).removeClass("collapsed"), jQuery(this).parent().parent().next().addClass("in")) : jQuery(".js-tabcollapse-panel-heading").addClass("collapsed")
    })
}

function LoadTabbedGModule(n, t) {
    n <= 10 && jQuery(".more-results-g").hide();
    typeof LoadMoreForGA != "undefined" && LoadMoreForGA(".ga-lazyloading-" + t);
    var i = jQuery(".tabbed-module-G-tab .tab-right-col .tab-pane.active").attr("id");
    jQuery("#" + i + " .mobile-list").html(jQuery("#" + i + " .listitems").html());
    jQuery("#" + i + " .mobile-list-holder .dropdown-toggle .selected-item").text(jQuery("#" + i + " .listitems li:first").text());
    jQuery(".dropdown-menu.mobile-list li").click(function () {
        jQuery(".mobile-list-holder .dropdown-menu.mobile-list li").removeClass("active");
        jQuery(".mobile-list-holder .dropdown-toggle .selected-item").text(jQuery(this).text())
    })
}

function LoadTestimonialModule(n) {
    var r = "input[name$=hddnTestimonialCarouselCount-" + n + "]",
        i = jQuery(r).val(),
        t;
    if (i > 0)
        for (t = 0; t < i; t++) GetImageFromBrightcoveApi("hddnVideoId-" + t + "-" + n, "image-testimonial-" + t + "-" + n)
}

function TabbedA(n, t) {
    var f = screen.width,
        e, i, r, u;
    for (f < 750 && (jQuery(".MobileTitle").show(), jQuery(".desktopTitle").hide()), e = jQuery("input[name=hddnTabcount]").val(), i = 0; i < e; i++)
        if (r = jQuery(n).length, r >= 1)
            for (u = 1; u <= r; u++) GetImageFromBrightcoveApi(t);
    f < 751 && jQuery(".tab-container-rebrand").each(function () {
        jQuery(".tab-drawer-heading").length > 1 && jQuery(".tab-drawer-heading").css("display", "block")
    });
    jQuery(window).resize(function () {
        var n, t;
        jQuery("ul.tabs-rebrand").each(function () {
            var t = jQuery(this).width(),
                i = jQuery(this).find("li").length - 1;
            n = t / i;
            jQuery(this).find("li").css("width", n)
        });
        clearTimeout(t);
        t = setTimeout(function () {
            jQuery("ul.tabs-rebrand .active").each(function () {
                var n = jQuery(this).width(),
                    t = jQuery(this).index(),
                    i = n * t;
                jQuery(this).parent().find("#last-li").css({
                    "margin-left": i
                })
            })
        }, 500)
    })
}

function tab_click_module(n, t) {
    function r(n) {
        if (i < 751) {
            var r = jQuery("#tabbed-module-mixed-" + n),
                t = r.find(".left-single-card-a.mixed-cards"),
                u = t.find(".card-a-body").height();
            u > 500 ? jQuery(t).addClass("scroll-text") : jQuery(t).removeClass("scroll-text");
            jQuery(this).find(".showtab").on("click", function () {
                jQuery(this).hide();
                jQuery(this).parents(".mixed-cards").find(".colp-land").css({
                    "max-height": "initial",
                    "margin-bottom": "0px"
                });
                jQuery(this).parents(".mixed-cards").find(".fadeout").css("display", "none");
                jQuery(this).parents(".mixed-cards").find("span.readmore").css("display", "block");
                jQuery(this).parents(".mixed-cards").find("span.open").css("display", "block");
                jQuery(this).parents(".mixed-cards").find("span.download").css("display", "block");
                jQuery(this).parents(".mixed-cards").find("span.external").css("display", "block");
                jQuery(this).parents(".mixed-cards").find("span.play").css("display", "block");
                jQuery(this).parents(".mixed-cards").find(".share-icons").css("display", "block")
            })
        }
    }
    jQuery(".card-a-module .left-single-card-a.mixed-cards").length > 0 && jQuery(".left-single-card-a.mixed-cards").each(function (n) {
        var i = jQuery(this),
            h = jQuery(i).find(".card-a-body").outerHeight(),
            o = jQuery(i).find(".card-a-body h2").outerHeight(!0) + jQuery(i).find(".card-a-body .colp-land").outerHeight(),
            f, s;
        if (o > h) {
            jQuery(i).addClass("scroll-text");
            jQuery(i).find(".card-a-body").addClass("content").attr("id", "content" + n);
            jQuery("#content" + n).css("overflow-y", "scroll");
            jQuery(i).find(".addingScrollBar").attr("id", "scrollbar-y").html('<div class="scrollbar-container" id="scrollbar-container' + n + '"><div class="scrollbar" id="scrollbar' + n + '"><\/div><\/div>');
            var e = document.getElementById.bind(document),
                u = e("scrollbar-container" + n),
                t = e("content" + n),
                r = e("scrollbar" + n);
            typeof t != "undefined" && t !== null && t.length > 0 && t.addEventListener("scroll", function () {
                r.style.height = u.clientHeight * t.clientHeight / t.scrollHeight + "px";
                r.style.top = u.clientHeight * t.scrollTop / t.scrollHeight + "px"
            });
            f = document.createEvent("Event");
            f.initEvent("scroll", !0, !0);
            window.addEventListener("resize", t.dispatchEvent.bind(t, f));
            t.dispatchEvent(f);
            r.addEventListener("mousedown", function (n) {
                n.preventDefault();
                var f = r.offsetTop,
                    i = function (i) {
                        var e = i.pageY - n.pageY;
                        r.style.top = Math.min(u.clientHeight - r.clientHeight, Math.max(0, f + e)) + "px";
                        t.scrollTop = t.scrollHeight * r.offsetTop / u.clientHeight
                    };
                document.addEventListener("mousemove", i);
                document.addEventListener("mouseup", function () {
                    document.removeEventListener("mousemove", i)
                })
            });
            jQuery("#content" + n).bind("scroll", function () {
                jQuery(this).scrollTop() + jQuery(this).innerHeight() >= jQuery(this)[0].scrollHeight ? jQuery(".card-a-module .cards-a .left-single-card-a.scroll-text div.cardAScrollFade").removeClass("fadeout") : jQuery(".card-a-module .cards-a .left-single-card-a.scroll-text div.cardAScrollFade").addClass("fadeout")
            })
        } else jQuery("#content" + n).css("overflow-y", "hidden"), jQuery("#scrollbar-container" + n).remove(), jQuery(i).removeClass("scroll-text"), jQuery("#content" + n).removeClass("content");
        s = screen.width;
        s < 751 && (o > 410 ? jQuery(i).addClass("scroll-text") : jQuery(i).removeClass("scroll-text"))
    });
    jQuery(window).resize(function () {
        jQuery("ul.tabs-rebrand").each(function () {
            var t = jQuery(this).width(),
                i = jQuery(this).find("li").length - 1;
            n = t / i;
            jQuery(this).find("li").css("width", n)
        });
        clearTimeout(t);
        t = setTimeout(function () {
            jQuery("ul.tabs-rebrand .active").each(function () {
                var n = jQuery(this).width(),
                    t = jQuery(this).index(),
                    i = n * t;
                jQuery(this).parent().parent().find("#last-li").css({
                    "margin-left": i
                })
            })
        }, 500)
    });
    jQuery("ul.tabs-rebrand").each(function () {
        var n = jQuery(this).width(),
            t = jQuery(this).find("li").length - 1,
            i = n / t;
        jQuery(this).find("li").css("width", i);
        jQuery("ul.tabs-rebrand li").click(function () {
            var i = jQuery(this).width(),
                r = jQuery(this).index(),
                u = i * r,
                n, t;
            jQuery(this).parent().parent().find("#last-li").css({
                "margin-left": u
            });
            n = jQuery(jQuery(this).parent()).parent().parent();
            jQuery(n).find(".tab-content-rebrand").hide();
            t = jQuery(this).attr("href");
            jQuery(t).show();
            jQuery(this).parent().parent().find("li").removeClass("active");
            jQuery(this).addClass("active");
            tab_click_module()
        })
    });
    jQuery("ul.tabs-rebrand li").click(function () {
        jQuery(".tab-content-rebrand").addClass("tab-animate")
    });
    var i = screen.width;
    jQuery(".tab-drawer-heading").on("click", function () {
        var n = jQuery(this);
        n.toggleClass("d-active");
        n.next().toggle();
        jQuery("html").animate({
            scrollTop: n.offset().top - 50
        }, 1500);
        r(n.attr("rel"))
    })
}

function loadmorepostlist(n, t, i, r, u, f, e, o) {
    function s(o) {
        n.iterateCycle = o;
        var s = 10 * o,
            h = s - n.maxElementcnt;
        jQuery.ajax({
            url: r,
            type: "POST",
            data: {
                postList: i,
                skipcnt: h,
                max: 10,
                postCount: t,
                IsCategory: u,
                IsAuthors: f,
                IsTags: e
            },
            success: function (n) {
                jQuery(".article-list").append(jQuery(n));
                typeof refreshIndicators != "undefined" && refreshIndicators()
            },
            error: function () { },
            complete: function () {
                annexModule();
                t <= s && jQuery(".more-results-article").hide()
            }
        })
    }
    typeof LoadMoreForGA != "undefined" && LoadMoreForGA(".ga-lazyloading-" + o);
    t > 10 && jQuery(".more-results-article").show();
    jQuery(".more-results-article").click(function (t) {
        t.preventDefault();
        s(++n.iterateCycle)
    })
}

function HideFooterSubscribe() {
    jQuery(".mktoForm.subscribeFooterInstance").hide();
    jQuery("#subscribeBtn").click(function (n) {
        n.stopPropagation();
        jQuery(".mktoForm.subscribeFooterInstance").toggle()
    });
    jQuery(".FormIntro").click(function (n) {
        n.stopPropagation()
    });
    jQuery(document).click(function () {
        jQuery(".mktoForm.subscribeFooterInstance").hide()
    })
}

function FormatMarketo() {
    jQuery(".mktoFormRow").each(function () {
        jQuery(this).removeClass("one");
        jQuery(this).removeClass("two");
        jQuery(this).removeClass("three");
        var n = jQuery(this).find("div.mktoFormCol").length;
        n === 3 ? jQuery(this).addClass("three") : n === 2 ? jQuery(this).addClass("two") : jQuery(this).addClass("one")
    });
    jQuery(".mktoFormRow").find("select[name=Country]").length && jQuery("select[name=Country]").closest(".mktoFormRow").removeClass("one").addClass("two");
    jQuery(".mktoFormRow").each(function () {
        jQuery(".mktoFormRow").hasClass("three") && jQuery(this).closest("form").addClass("three-col-form")
    });
    jQuery(".mktoFormRow").each(function () {
        jQuery(".mktoFormRow .mktoFormCol").find("textarea") && (jQuery(".mktoFormRow .mktoFormCol textarea").closest(".mktoFormRow .mktoFormCol").addClass("full-width"), jQuery("form.three-col-form .mktoFormRow textarea").addClass("full-width"))
    });
    jQuery(".mktoForm .mktoFieldWrap select").css("background", "url('/images/dropdown-arrow.png') no-repeat");
    jQuery(".mktoForm .mktoFieldWrap select").css("background-position", "right 10px top 50%");
    jQuery(".mktoButton").click(function () {
        jQuery("html,body").animate({
            scrollTop: jQuery(".mktoForm").offset().top - 60
        }, "slow")
    })
}

function Marketoloadform1(n, t, i, r, u, f, e, o, s, h, c) {
    MktoForms2.loadForm("https://pages.avanade.com", "857-NHG-455", h, function (n) {
        typeof FormatMarketo != "undefined" && FormatMarketo();
        n.onSuccess(function () {
            return window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                event: "FormSubmission",
                "Marketo Form ID": h
            }), window._mfq = window._mfq || [], window._mfq.push(["formSubmitSuccess", c]), jQuery("#mktoForm_" + h + "").hide(), jQuery("#successMessage").show(), !disableBrowserStorage && e && (document.cookie = t + "=" + i + "; " + f + "; path=" + r + ";secure"), !1
        })
    })
}

function Marketoloadform2(n, t) {
    MktoForms2.loadForm("https://pages.avanade.com", "857-NHG-455", t, function () {
        return typeof FormatMarketo != "undefined" && FormatMarketo(), jQuery("#mktoForm_" + t + "").hide(), jQuery("#successMessage").show(), !1
    })
}

function Marketoloadform3(n, t, i, r, u, f, e, o, s, h, c) {
    MktoForms2.loadForm("https://pages.avanade.com", "857-NHG-455", s, function (n) {
        typeof FormatMarketo != "undefined" && FormatMarketo();
        n.onSuccess(function () {
            return window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                event: "FormSubmission",
                "Marketo Form ID": s
            }), window._mfq = window._mfq || [], window._mfq.push(["formSubmitSuccess", h]), jQuery("#mktoForm_" + s + "").hide(), jQuery("#successMessage").show(), !disableBrowserStorage && c && (document.cookie = t + "=" + i + "; " + f + "; path=" + r + ";secure"), !1
        })
    })
}

function Marketoloadform4(n, t, i, r, u, f, e, o, s, h, c) {
    MktoForms2.loadForm("https://pages.avanade.com", "857-NHG-455", s, function (r) {
        typeof FormatMarketo != "undefined" && FormatMarketo();
        r.onSuccess(function () {
            return window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                event: "FormSubmission",
                "Marketo Form ID": s
            }), window._mfq = window._mfq || [], window._mfq.push(["formSubmitSuccess", h]), location.href = c, !disableBrowserStorage && f && (document.cookie = n + "=" + t + "; " + u + "; path=" + i + ";secure"), !1
        })
    })
}

function Marketoloadform5(n, t, i, r, u, f, e, o, s, h) {
    MktoForms2.loadForm("https://pages.avanade.com", "857-NHG-455", s, function (r) {
        typeof FormatMarketo != "undefined" && FormatMarketo();
        r.onSuccess(function () {
            return window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                event: "FormSubmission",
                "Marketo Form ID": s
            }), window._mfq = window._mfq || [], window._mfq.push(["formSubmitSuccess", h]), !disableBrowserStorage && f && (document.cookie = n + "=" + t + "; " + u + "; path=" + i + ";secure"), !1
        })
    })
}

function ajaxcall(n, t, i, r) {
    jQuery.ajax({
        type: "POST",
        url: n,
        data: {
            Id: t,
            pageLayout: i,
            currPath: r
        },
        dataType: "html",
        success: function (n) {
            jQuery("#surveyModule").html(n)
        },
        error: function () { }
    })
}

function checkcompleteassesment(n, t, i, r, u) {
    jQuery("#mktoForm_" + u + "").hide();
    cxResultValue ? (n = r, i = n, jQuery.ajax({
        type: "POST",
        url: "/api/sitecore/SurveyQualifierData/GetResult",
        data: {
            ResultItemId: i
        },
        dataType: "html",
        success: function (n) {
            jQuery("#surveyModule").show();
            jQuery("#surveyModule").html(n)
        },
        error: function () { }
    })) : reTakeAssessment2()
}

function submitform(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p) {
    MktoForms2.loadForm("https://pages.avanade.com", "857-NHG-455", t, function (n) {
        FormatMarketo();
        UTM();
        n.onSuccess(function () {
            return window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                event: "FormSubmission",
                "Marketo Form ID": t
            }), window.dataLayer.push({
                event: "SurveySubmission",
                "Form name": "ga-success"
            }), window._mfq = window._mfq || [], window._mfq.push(["formSubmitSuccess", v]), jQuery.ajax({
                type: "POST",
                url: a,
                data: {
                    Id: h,
                    pageLayout: c,
                    currPath: l
                },
                dataType: "html",
                success: function (n) {
                    jQuery("#mktoForm_" + t + "").hide();
                    jQuery("#surveyModule").html(n)
                },
                error: function () { }
            }), !disableBrowserStorage && p && (document.cookie = r + "=" + u + "; " + o + "; path=" + f + ";secure"), !1
        })
    })
}

function InitializeControl() {
    jQuery(".mktoButton").prop("disabled", !0);
    toValidate = jQuery("#FirstName,#LastName,#Email,#Phone,#Country,#Company,#Avanade_Functional_Role,#Avanade_Job_Role,#Avanade_Relationship,#Avanade_Website_ContactUs_Request");
    valid = !1;
    toValidate.keyup(function () {
        jQuery("#FirstName").val().length > 0 && jQuery("#LastName").val().length > 0 && jQuery("#Email").val().length > 0 && jQuery("#Phone").val().length > 0 && jQuery("#Country option:selected").val().length > 0 && jQuery("#Company").val().length > 0 && jQuery("#Avanade_Functional_Role option:selected").val().length > 0 && jQuery("#Avanade_Job_Role option:selected").val().length > 0 && jQuery("#Avanade_Relationship option:selected").val().length > 0 && jQuery("#Avanade_Website_ContactUs_Request").val().length > 0 ? jQuery(".mktoButton").prop("disabled", !1) : jQuery(".mktoButton").prop("disabled", !0)
    })
}

function brightcoveListPlayer() {
    var n = document.getElementById("playListPlayer"),
        t = jQuery("input[name=hddn_p_PlayListId]").val(),
        i = jQuery("input[name=hddn_p_PlayerKey]").val(),
        r = jQuery("input[name=hddn_p_AccountId]").val(),
        u = jQuery("input[name=hddnSharingUrl]").val();
    n.setAttribute("data-account", r);
    n.setAttribute("data-player", i);
    n.setAttribute("data-playlist-id", t);
    bc(n);
    player = videojs(playListPlayer);
    videojs("playListPlayer").ready(function () {
        player = this;
        player.on("loadstart", function () {
            var n = {
                title: player.mediainfo.name,
                description: player.mediainfo.description,
                url: u + player.mediainfo.id,
                deeplinking: !1,
                offset: "00:00:00",
                services: {
                    facebook: !0,
                    twitter: !0,
                    tumblr: !0,
                    pinterest: !0,
                    linkedin: !0
                }
            };
            player.social(n)
        })
    })
}

function brightcoveVideo() {
    var n = document.getElementById("modalPlayer"),
        t = jQuery("input[name=hddn_m_DataVideoId]").val(),
        i = jQuery("input[name=hddn_m_PlayerKey]").val(),
        r = jQuery("input[name=hddn_m_AccountId]").val(),
        u = jQuery("input[name=hddnSharingUrl]").val();
    n.setAttribute("data-account", r);
    n.setAttribute("data-player", i);
    n.setAttribute("data-video-id", t);
    bc(n);
    player = videojs(modalPlayer);
    videojs("modalPlayer").ready(function () {
        player = this;
        player.on("loadstart", function () {
            var n = {
                title: player.mediainfo.name,
                description: player.mediainfo.description,
                url: u + player.mediainfo.id,
                deeplinking: !1,
                offset: "00:00:00",
                services: {
                    facebook: !0,
                    twitter: !0,
                    tumblr: !0,
                    pinterest: !0,
                    linkedin: !0
                }
            };
            player.social(n)
        })
    });
    player.play()
}

function brightcovePlaylistvideo() {
    var n = document.getElementById("modalPlaylistPlayer"),
        t = jQuery("input[name=hddn_m_DataplaylistId]").val(),
        i = jQuery("input[name=hddn_m_PlayerKey]").val(),
        r = jQuery("input[name=hddn_m_AccountId]").val(),
        u = jQuery("input[name=hddnSharingUrl]").val();
    n.setAttribute("data-account", r);
    n.setAttribute("data-player", i);
    n.setAttribute("data-playlist-id", t);
    bc(n);
    player = videojs(modalPlaylistPlayer);
    videojs("modalPlaylistPlayer").ready(function () {
        player = this;
        player.on("loadstart", function () {
            var n = {
                title: player.mediainfo.name,
                description: player.mediainfo.description,
                url: u + player.mediainfo.id,
                deeplinking: !1,
                offset: "00:00:00",
                services: {
                    facebook: !0,
                    twitter: !0,
                    tumblr: !0,
                    pinterest: !0,
                    linkedin: !0
                }
            };
            player.social(n)
        })
    })
}

function brightcovePlayer(n, t, i, r, u) {
    var f = document.getElementById(n),
        e = jQuery(i).val(),
        o = jQuery(t).val(),
        s = jQuery(r).val(),
        h = jQuery(u).val();
    f.setAttribute("data-account", s);
    f.setAttribute("data-player", o);
    f.setAttribute("data-video-id", e);
    bc(f);
    player = videojs(n);
    videojs(n).ready(function () {
        player = this;
        player.on("loadstart", function () {
            var n = {
                title: player.mediainfo.name,
                description: player.mediainfo.description,
                url: h + player.mediainfo.id,
                deeplinking: !1,
                offset: "00:00:00",
                services: {
                    facebook: !0,
                    twitter: !0,
                    tumblr: !0,
                    pinterest: !0,
                    linkedin: !0
                }
            };
            player.social(n)
        })
    });
    player.play()
}

function LoadMultipleMarketoForms(n, t) {
    var i = Function.prototype.call.bind(Array.prototype.slice),
        r = "data-formId";
    MktoForms2.whenRendered(function (n) {
        var u = n.getFormElem()[0],
            f = "_" + (new Date).getTime() + Math.random(),
            r;
        i(u.querySelectorAll("label[for]")).forEach(function (n) {
            var t = u.querySelector('[id="' + n.htmlFor + '"]');
            t && (n.htmlFor = t.id = t.id + f)
        });
        n.onSuccess(function () {
            n.getFormElem().hide();
            EventSignUpGoalTrigger();
            jQuery(".FormIntro").replaceWith(jQuery(".confirmform").show());
            jQuery(".SubscribeWrapperDiv.mkfrm").css("min-height", "39px");
            formPostSubmit = jQuery(".subscribeFooterInstance.mktoForm.mktoHasWidth.mktoLayoutLeft");
            console.log(formPostSubmit[0]);
            formPostSubmit[0].remove();
            var t = jQuery(".confirmform");
            return t.length > 1 && t.nextAll().remove(), !1
        });
        jQuery("ul.sign-up.dropdown-menu").on("click", function (n) {
            n.stopPropagation()
        });
        jQuery("div.SubscribeWrapperDiv").on("click", function (n) {
            n.stopPropogation()
        });
        r = jQuery(".removeDuplicate .mktoButtonRow");
        r.length > 1 && r.nextAll().remove();
        jQuery(".mktoButton").each(function () {
            jQuery(this).attr("disabled", "disabled")
        });
        jQuery(".mktoEmailField").each(function () {
            jQuery(this).attr("placeholder", t)
        });
        jQuery(".mktoform,.mktoForm,.mktoForm span,.mktoform span").each(function () {
            jQuery(this).attr("style", "")
        })
    });
    i(n.formIds).forEach(function (t) {
        var u = MktoForms2.loadForm.bind(MktoForms2, n.podId, n.munchkinId, t),
            f = i(document.querySelectorAll("[" + r + '="' + t + '"]'));
        (function e(n) {
            var i = n.shift();
            typeof i != "undefined" && (i.id = "mktoForm_" + t, u(function () {
                i.id = "";
                n.length && e(n)
            }))
        })(f)
    })
}

function LoadMarketoForm1(n, t, i, r, u, f) {
    MktoForms2.loadForm("https://pages.avanade.com", "857-NHG-455", n, function (u) {
        var o;
        FormatMarketo();
        UTM();
        var l = "mktoForm_= " + n,
            s = "Ava_GatedContentCookie",
            h = t,
            c = i,
            e = new Date;
        e.setTime(e.getTime() + r * 864e5);
        o = "expires=" + e.toUTCString();
        u.onSuccess(function () {
            ContactUsGoalTrigger();
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: "FormSubmission",
                "Marketo Form ID": n
            });
            window._mfq = window._mfq || [];
            window._mfq.push(["formSubmitSuccess", "#MKTOFORM_" + n]);
            jQuery("#mktoForm_" + n + "").hide();
            jQuery("#successMessage").show();
            var t = Boolean(f);
            return !disableBrowserStorage && t && (document.cookie = s + "=" + h + "; " + o + "; path=" + c + ";secure"), typeof LoadSimpleDTOFunctionality != "undefined" && LoadSimpleDTOFunctionality(), !1
        })
    });
    MarketoLeadScore()
}

function LoadMarketoForm2(n) {
    MktoForms2.loadForm("https://pages.avanade.com", "857-NHG-455", n, function () {
        FormatMarketo();
        var t = "mktoForm_" + n;
        return UTM(), jQuery("#mktoForm_" + n + "").hide(), jQuery("#successMessage").show(), typeof LoadSimpleDTOFunctionality != "undefined" && LoadSimpleDTOFunctionality(), !1
    })
}

function LoadMarketoForm3(n, t, i, r, u, f, e) {
    MktoForms2.loadForm("https://pages.avanade.com", "857-NHG-455", n, function (u) {
        var s;
        FormatMarketo();
        UTM();
        var h = "Ava_GatedContentCookie",
            c = t,
            l = i,
            o = new Date;
        o.setTime(o.getTime() + r * 864e5);
        s = "expires=" + o.toUTCString();
        u.onSuccess(function () {
            typeof LoadSimpleDTOFunctionality != "undefined" && LoadSimpleDTOFunctionality();
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: "FormSubmission",
                "Marketo Form ID": n
            });
            window._mfq = window._mfq || [];
            window._mfq.push(["formSubmitSuccess", "#MKTOFORM_" + n]);
            location.href = e;
            var t = Boolean(f);
            return !disableBrowserStorage && t && (document.cookie = h + "=" + c + "; " + s + "; path=" + l + ";secure"), !1
        })
    })
}

function LoadMarketoForm4(n, t, i, r, u, f) {
    MktoForms2.loadForm("https://pages.avanade.com", "857-NHG-455", n, function (u) {
        var o;
        FormatMarketo();
        UTM();
        var s = "Ava_GatedContentCookie",
            h = t,
            c = i,
            e = new Date;
        e.setTime(e.getTime() + r * 864e5);
        o = "expires=" + e.toUTCString();
        u.onSuccess(function () {
            typeof LoadSimpleDTOFunctionality != "undefined" && LoadSimpleDTOFunctionality();
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: "FormSubmission",
                "Marketo Form ID": n
            });
            window._mfq = window._mfq || [];
            window._mfq.push(["formSubmitSuccess", "#MKTOFORM_" + n]);
            var t = Boolean(f);
            return !disableBrowserStorage && t && (document.cookie = s + "=" + h + "; " + o + "; path=" + c + ";secure"), !1
        })
    })
}

function sendDataToServer(n) {
    if (jQuery("#navigation").hide(), jQuery(".surveytab").hide(), typeof flag != "undefined" && typeof AvaFormId != "undefined" && typeof itemId != "undefined" && typeof itemPath != "undefined" && typeof expirationTime != "undefined" && typeof MarketocampaignCookie != "undefined" && typeof goalId != "undefined" && typeof _surveyQualifierSet != "undefined" && typeof GetSurveyToolSurveyQualifierData != "undefined" && typeof _surveyItemId != "undefined" && typeof _pageLayout != "undefined" && typeof _pathName != "undefined")
        if (flag) {
            var t = JSON.stringify(n.data),
                i = "/api/sitecore/SurveyQualifierData/GetQualifier".toString().toLowerCase(),
                r = "/api/sitecore/SurveyQualifierData/GetResult".toString().toLowerCase();
            t.length > 2 && jQuery.ajax({
                type: "POST",
                url: i,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    SurveyResult: t,
                    SurveyQualifierSet: _surveyQualifierSet
                }),
                dataType: "text",
                success: function (n) {
                    jQuery.ajax({
                        type: "POST",
                        url: r,
                        data: {
                            ResultItemId: n
                        },
                        dataType: "html",
                        success: function (t) {
                            disableBrowserStorage || setCookie("Ava_CXResultsCookie", n, 90);
                            jQuery("#mktoForm_" + AvaFormId + "").hide();
                            jQuery("#surveyModule").show();
                            jQuery("#surveyModule").html(t)
                        },
                        error: function () { }
                    })
                },
                error: function () { }
            })
        } else jQuery("#surveyModule").hide(), MktoForms2.loadForm("https://pages.avanade.com", "857-NHG-455", AvaFormId, function (t) {
            var r, u, f;
            FormatMarketo();
            UTM();
            r = document.querySelector(".cx-form .mktoButton");
            u = "VIEW MY RESULTS";
            r.innerText = u;
            var h = "mktoForm_" + AvaFormId,
                e = "Ava_GatedContentCookie",
                o = itemId,
                s = itemPath,
                i = new Date;
            i.setTime(i.getTime() + expirationTime * 864e5);
            f = "expires=" + i.toUTCString();
            t.onSuccess(function () {
                var i;
                typeof LoadSimpleDTOFunctionality != "undefined" && LoadSimpleDTOFunctionality();
                surveyGoalTrigger();
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: "FormSubmission",
                    "Marketo Form ID": AvaFormId
                });
                window.dataLayer.push({
                    event: "SurveySubmission",
                    "Form name": "ga-success"
                });
                window._mfq = window._mfq || [];
                window._mfq.push(["formSubmitSuccess", "#MKTOFORM_" + AvaFormId]);
                var t = JSON.stringify(n.data),
                    r = "/api/sitecore/SurveyQualifierData/GetQualifier".toString().toLowerCase(),
                    u = "/api/sitecore/SurveyQualifierData/GetResult".toString().toLowerCase();
                return t.length > 2 && jQuery.ajax({
                    type: "POST",
                    url: r,
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify({
                        SurveyResult: t,
                        SurveyQualifierSet: _surveyQualifierSet
                    }),
                    dataType: "text",
                    success: function (n) {
                        jQuery.ajax({
                            type: "POST",
                            url: u,
                            data: {
                                ResultItemId: n
                            },
                            dataType: "html",
                            success: function (t) {
                                disableBrowserStorage || setCookie("Ava_CXResultsCookie", n, 90);
                                jQuery("#mktoForm_" + AvaFormId + "").hide();
                                jQuery("#surveyModule").show();
                                jQuery("#surveyModule").html(t)
                            },
                            error: function () { }
                        })
                    },
                    error: function () { }
                }), i = Boolean("MarketocampaignCookie"), !disableBrowserStorage && i && (document.cookie = e + "=" + o + "; " + f + "; path=" + s + ";secure"), !1
            })
        })
}

function reTakeAssessment() {
    typeof AvaFormId != "undefined" && typeof GetSurveyToolSurveyQualifierData != "undefined" && typeof _surveyItemId != "undefined" && typeof _pageLayout != "undefined" && typeof _pathName != "undefined" && jQuery.ajax({
        type: "POST",
        url: GetSurveyToolSurveyQualifierData,
        data: {
            Id: _surveyItemId,
            pageLayout: _pageLayout,
            currPath: _pathName
        },
        dataType: "html",
        success: function (n) {
            jQuery("#mktoForm_" + AvaFormId + "").hide();
            jQuery("#surveyModule").html(n);
            jQuery(".ga-complete").addClass("ga-retake");
            flag = !0;
            typeof AvanadeMaturityModel != "undefined" && AvanadeMaturityModel()
        },
        error: function () { }
    })
}

function LoadMarketoForm5() {
    typeof flag != "undefined" && typeof AvaFormId != "undefined" && typeof itemId != "undefined" && typeof itemPath != "undefined" && typeof expirationTime != "undefined" && typeof MarketocampaignCookie != "undefined" && typeof goalId != "undefined" && typeof _surveyQualifierSet != "undefined" && typeof GetSurveyToolSurveyQualifierData != "undefined" && typeof _surveyItemId != "undefined" && typeof _pageLayout != "undefined" && typeof _pathName != "undefined" && jQuery.ajax({
        type: "POST",
        url: GetSurveyToolSurveyQualifierData,
        data: {
            Id: _surveyItemId,
            pageLayout: _pageLayout,
            currPath: _pathName
        },
        dataType: "html",
        success: function (n) {
            jQuery("#surveyModule").html(n)
        },
        error: function () { }
    })
}

function LoadMarketoForm6() {
    typeof flag != "undefined" && typeof AvaFormId != "undefined" && typeof itemId != "undefined" && typeof itemPath != "undefined" && typeof expirationTime != "undefined" && typeof MarketocampaignCookie != "undefined" && typeof goalId != "undefined" && typeof _surveyQualifierSet != "undefined" && typeof GetSurveyToolSurveyQualifierData != "undefined" && typeof _surveyItemId != "undefined" && typeof _pageLayout != "undefined" && typeof _pathName != "undefined" && typeof cxResultValue != "undefined" && typeof _cxresultCookie != "undefined" && typeof jsonAnswerCookie != "undefined" && typeof answerItemValue != "undefined" && (jQuery("#mktoForm_" + AvaFormId + "").hide(), cxResultValue ? (jsonAnswerCookie = _cxresultCookie, answerItemValue = jsonAnswerCookie, jQuery.ajax({
        type: "POST",
        url: "/api/sitecore/SurveyQualifierData/GetResult",
        data: {
            ResultItemId: answerItemValue
        },
        dataType: "html",
        success: function (n) {
            jQuery("#surveyModule").show();
            jQuery("#surveyModule").html(n)
        },
        error: function () { }
    })) : reTakeAssessment())
}

function LoadMarketoForm7() {
    typeof flag != "undefined" && typeof AvaFormId != "undefined" && typeof itemId != "undefined" && typeof itemPath != "undefined" && typeof expirationTime != "undefined" && typeof MarketocampaignCookie != "undefined" && typeof goalId != "undefined" && typeof _surveyQualifierSet != "undefined" && typeof GetSurveyToolSurveyQualifierData != "undefined" && typeof _surveyItemId != "undefined" && typeof _pageLayout != "undefined" && typeof _pathName != "undefined" && MktoForms2.loadForm("https://pages.avanade.com", "857-NHG-455", AvaFormId, function (n) {
        var i;
        FormatMarketo();
        UTM();
        var e = "mktoForm_" + AvaFormId,
            r = "Ava_GatedContentCookie",
            u = itemId,
            f = itemPath,
            t = new Date;
        t.setTime(t.getTime() + expirationTime * 864e5);
        i = "expires=" + t.toUTCString();
        n.onSuccess(function () {
            typeof LoadSimpleDTOFunctionality != "undefined" && LoadSimpleDTOFunctionality();
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: "FormSubmission",
                "Marketo Form ID": AvaFormId
            });
            window.dataLayer.push({
                event: "SurveySubmission",
                "Form name": "ga-success"
            });
            window._mfq = window._mfq || [];
            window._mfq.push(["formSubmitSuccess", "#MKTOFORM_" + AvaFormId]);
            jQuery.ajax({
                type: "POST",
                url: GetSurveyToolSurveyQualifierData,
                data: {
                    Id: _surveyItemId,
                    pageLayout: _pageLayout,
                    currPath: _pathName
                },
                dataType: "html",
                success: function (n) {
                    jQuery("#mktoForm_" + AvaFormId + "").hide();
                    jQuery("#surveyModule").html(n)
                },
                error: function () { }
            });
            var n = Boolean(MarketocampaignCookie);
            return !disableBrowserStorage && n && (document.cookie = r + "=" + u + "; " + i + "; path=" + f + ";secure"), !1
        })
    })
}

function viewtab(n, t) {
    ViewMoreForTab(".tabbed-module-F .carousel0-" + n + " .item .team-details .row .col-sm-4", ".tabfloadmore0-" + n, t);
    ViewMoreForTab(".tabbed-module-F .carousel1-" + n + " .item .team-details .row .col-sm-4", ".tabfloadmore1-" + n, t);
    ViewMoreForTab(".tabbed-module-F .carousel2-" + n + " .item .team-details .row .col-sm-4", ".tabfloadmore2-" + n, t);
    ViewMoreForTab(".tabbed-module-F .carousel3-" + n + " .item .team-details .row .col-sm-4", ".tabfloadmore3-" + n, t)
}

function loadtab(n) {
    typeof LoadMoreForGA != "undefined" && (LoadMoreForGA(".ga-lazyloading-" + n + "-0"), LoadMoreForGA(".ga-lazyloading-" + n + "-1"), LoadMoreForGA(".ga-lazyloading-" + n + "-2"), LoadMoreForGA(".ga-lazyloading-" + n + "-3"))
}

function fetchBrightcovePlayer() {
    var n = document.getElementById("playListPlayer"),
        t = jQuery("input[name=hddn_p_PlayListId]").val(),
        i = jQuery("input[name=hddn_p_PlayerKey]").val(),
        r = jQuery("input[name=hddn_p_AccountId]").val(),
        u = jQuery("input[name=hddnSharingUrl]").val();
    n.setAttribute("data-account", r);
    n.setAttribute("data-player", i);
    n.setAttribute("data-playlist-id", t);
    typeof bc != "undefined" && bc(n);
    typeof bc != "undefined" && (player = videojs(playListPlayer), videojs("playListPlayer").ready(function () {
        player = this;
        player.on("loadstart", function () {
            var n = {
                title: player.mediainfo.name,
                description: player.mediainfo.description,
                url: u + player.mediainfo.id,
                deeplinking: !1,
                offset: "00:00:00",
                services: {
                    facebook: !0,
                    twitter: !0,
                    tumblr: !0,
                    pinterest: !0,
                    linkedin: !0
                }
            };
            player.social(n)
        });
        player.on("play", function () {
            jQuery(window).width() <= 751 && jQuery(window).scrollTop(jQuery(".content-module-L-video").offset().top - 60)
        })
    }))
}

function blogFeaturedModule(n, t) {
    var i = window.location.href;
    jQuery("#contentk-email").click(function (r) {
        r.preventDefault();
        jQuery.ajax({
            url: t,
            type: "POST",
            data: {
                datasourceid: n,
                _currUrl: i
            },
            success: function (n) {
                jQuery(".email-modal").modal("show");
                jQuery("#email-modal .modal-body").html(jQuery(n));
                jQuery(".email-modal").modal("show");
                jQuery("#email-modal .modal-body").html(jQuery(n))
            }
        })
    })
}

function isScrolledIntoView(n) {
    var t = jQuery(window).scrollTop(),
        r = t + jQuery(window).height(),
        i = jQuery(n).offset().top;
    return r > i && i >= t - 400
}

function refreshIndicators() {
    function n() {
        jQuery(".lazy-load-modules").each(function () {
            var n = jQuery(this).attr("data-content");
            if (typeof n != "undefined" && window["lazyload" + n] !== 1) {
                window["lazyload" + n] = 1;
                jQuery(this).removeClass("lazy-load-modules");
                try {
                    window["LazyLoadModule" + n]()
                } catch (t) { }
            }
        });
        jQuery(".lazy-load-cards").each(function () {
            var n = jQuery(this).attr("data-content");
            if (typeof n != "undefined" && isScrolledIntoView(jQuery(this)) && window["lazyload" + n] !== 1) {
                window["lazyload" + n] = 1;
                jQuery(this).removeClass("lazy-load-cards");
                try {
                    window["LazyLoadCard" + n]()
                } catch (t) { }
            }
        });
        jQuery(".lazy-img-load").each(function () {
            var n = jQuery(this).attr("data-src");
            isScrolledIntoView(jQuery(this)) && (jQuery(this).is(":visible") || jQuery(this).hasClass("slides") || jQuery(this).hasClass("content-k-image-sprite")) && (jQuery(this).attr("src", n), jQuery(this).removeClass("lazy-img-load"))
        });
        jQuery(".lazy-load-marketo").length > 0 && isScrolledIntoView(jQuery(".lazy-load-marketo")) && LoadedMarketoForm === !1 && (LazyLoadMarketoForm(), LoadedMarketoForm = !0)
    }
    jQuery.when(n()).done(function () {
        ImageCenterAlignent()
    })
}

function LazyLoadImages() {
    function n() {
        jQuery(".lazy-load-modules").each(function () {
            var n = jQuery(this).attr("data-content");
            window["lazyload" + n] = 1;
            jQuery(this).removeClass("lazy-load-modules");
            try {
                window["LazyLoadModule" + n]()
            } catch (t) { }
        });
        jQuery(".lazy-load-cards").each(function () {
            var n = jQuery(this).attr("data-content");
            if (typeof n != "undefined") {
                window["lazyload" + n] = 1;
                jQuery(this).removeClass("lazy-load-cards");
                try {
                    window["LazyLoadCard" + n]()
                } catch (t) { }
            }
        });
        jQuery(".lazy-img-load").each(function () {
            var n = jQuery(this).attr("data-src");
            jQuery(this).attr("src", n);
            jQuery(this).removeClass("lazy-img-load")
        });
        jQuery(".lazy-load-waves").each(function () {
            jQuery(this).css("display", "block");
            jQuery(this).removeClass("lazy-load-waves")
        })
    }
    jQuery.when(n()).done(function () {
        ImageCenterAlignent()
    })
}

function ImageCenterAlignent() {
    var i;
    typeof Request != "undefined" && typeof Request.url != "undefined" && (i = Request.url.host);
    var n = "avanade.com",
        t = /^https?:\/\/|^\/\//i;
    win_width < 751 && jQuery(".card .card-default.full-img .img-wrapper > img").each(function () {
        var n = jQuery(this).attr("src");
        jQuery(this).parent().parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
    });
    win_width > 751 && (jQuery(".hero-module .item .container .full-img-caption > div img").each(function () {
        var n = jQuery(this).attr("src");
        jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
    }), jQuery(".hero-rebrand-A .callout-section .post-thumbnail1").find("img").each(function () {
        var n = jQuery(this).attr("src");
        jQuery(this).parent().parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
    }));
    jQuery(".content-section.content-module-G-tab-variation .card .card-default.full-img .img-wrapper .logo-and-btn > img").each(function () {
        if (jQuery(this).attr("class") !== "brightcoveVideo") {
            var n = jQuery(this).attr("src");
            jQuery(this).parent().parent().parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
        }
    });
    jQuery(".card.featured .card-default .img-wrapper").find("img").each(function () {
        if (jQuery(this).attr("class") !== "brightcoveVideo") {
            var n = jQuery(this).attr("src");
            jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
        }
    });
    jQuery(".card-campaign .img-wrapper").find("img").each(function () {
        var n = jQuery(this).attr("src");
        jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
    });
    jQuery(".tabbed-module-B .img-wrapper").find("img").each(function () {
        if (jQuery(this).attr("class") !== "brightcoveVideo") {
            var n = jQuery(this).attr("src");
            jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
        }
    });
    jQuery(".tabbed-module-G-tab .container .row .tab-content .parent-tab .tab-hero").find("img").each(function () {
        var n = jQuery(this).attr("src");
        jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
    });
    jQuery(".search-module-grid.card .img-wrapper").find("img").each(function () {
        if (jQuery(this).attr("class") !== "brightcoveVideo") {
            var n = jQuery(this).attr("src");
            jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
        }
    });
    jQuery(".content-module-G .img-wrapper").find("img").each(function () {
        if (jQuery(this).attr("class") !== "brightcoveVideo") {
            var n = jQuery(this).attr("src");
            jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
        }
    });
    jQuery(".card.featured .card-default .img-wrapper").find("img").each(function () {
        if (jQuery(this).attr("class") !== "brightcoveVideo") {
            var n = jQuery(this).attr("src");
            jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
        }
    });
    jQuery(".content-module-J-New .panel-body .event .image-wrapper > img").each(function () {
        var n = jQuery(this).attr("src");
        jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
    });
    jQuery(".contact-us-module-A .row > div > img").each(function () {
        var n = jQuery(this).attr("src");
        jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
    });
    jQuery(".modalwindow_imginfographic .row .media-container > img").each(function () {
        var n = jQuery(this).attr("src");
        jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
    });
    jQuery(".video-content.content-module-D .row .media-container > img").each(function () {
        if (jQuery(this).attr("class") !== "brightcoveVideo") {
            var n = jQuery(this).attr("src");
            jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
        }
    });
    jQuery(".infograph-gallery .carousel.slide .carousel-inner.infographic-carousel .item > img").wrap("<div><\/div>");
    jQuery(".infograph-gallery .carousel.slide .carousel-inner.infographic-carousel .item > div img").each(function () {
        var n = jQuery(this).attr("src");
        jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
    });
    jQuery(".testimonial-module-A .carousel .item .testimonial_aside > div img").each(function () {
        var n, t;
        jQuery(this).attr("class") !== "img-thumbnail brightcoveVideo-testimonial" && (n = jQuery(this).attr("class"), n !== "img-circle" && (t = jQuery(this).attr("src"), jQuery(this).parent().css("backgroundImage", "url(" + t + ")").addClass("fit-to-width")))
    });
    jQuery(".testimonial-section-img-no-slider.video .testimonial_aside > div img").each(function () {
        jQuery(this).attr("class") !== "img-thumbnail brightcoveVideo-testimonial" && jQuery(this).parent().css("backgroundImage", "url(" + jQuery(this).attr("src") + ")").addClass("fit-to-width")
    });
    jQuery(".card .card-default.only-text.btn-text .content a.btn.btn-default").wrap("<div><\/div>");
    jQuery(".hero-module .carousel-inner .item > img").each(function () {
        var n = jQuery(this).attr("src");
        jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
    });
    jQuery(".hero-module.brandRefresh-E .carousel-inner .item > img").each(function () {
        var n = jQuery(this).attr("src");
        jQuery(this).parent().removeAttr("style")
    });
    jQuery(".author-details  .row .author-search .author-profile> img").each(function () {
        var n = jQuery(this).attr("src");
        jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
    });
    jQuery(".rebrand-contact-us-module-A .row .contactShowed .rebranding-contactus-image").find("img").each(function () {
        var n = jQuery(this).attr("src");
        jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
    });
    jQuery(".hero-module .banner .carousel .carousel-inner").find("img.highcontrast.hero").each(function () {
        var n = jQuery(this).attr("src");
        jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
    });
    jQuery(" .hero-rebrand-A .banner .carousel  .carousel-inner").each(function () {
        jQuery(this).css("backgroundImage", "url(/images/re-brand/glow-1920.png)").addClass("fit-to-width")
    });
    jQuery(".author-bio-module-section .container .row .col-sm-12 .author-bio .media .media-body .media-left .fit-to-width").find("img").each(function () {
        var n = jQuery(this).attr("src");
        jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
    });
    jQuery(".article-main-image-section .container .row .article-main-image .fit-to-width ").find("img").each(function () {
        var n = jQuery(this).attr("src");
        jQuery(this).parent().css("backgroundImage", "url(" + n + ")")
    });
    jQuery(".article-author-container1 .container .row .blog-main .article-author .media .author-left .img-circle").find("img").each(function () {
        var n = jQuery(this).attr("src");
        jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
    });
    jQuery(".article-author-container1 .container .row .article-multiple-author .media .media-left .fit-to-width ").find("img").each(function () {
        var n = jQuery(this).attr("src");
        jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
    });
    jQuery(".header-top .container-fluid .main-comments-nav .nav-section .container .row .list-card .card-box .content-cards .img-card .fit-to-width").find("img").each(function () {
        var n = jQuery(this).attr("src");
        jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
    });
    jQuery(".rebrand-contact-us-module-A .container .row .ContactAnimate .rebranding-contactus-image").find("img").each(function () {
        var n = jQuery(this).attr("src");
        jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
    });
    jQuery(".image-variation-module-section .container .row .col-sm-9 .full-width-image .fit-to-width").find("img").each(function () {
        var n = jQuery(this).attr("src");
        jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
    });
    jQuery(".image-variation-module-section .container .row .col-sm-10 .col-sm-9 .fit-to-width").find("img").each(function () {
        var n = jQuery(this).attr("src");
        jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
    });
    jQuery(".author-details .container .row .author-search .author-profile .col-sm-12 .fit-to-width").find("img").each(function () {
        var n = jQuery(this).attr("src");
        jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
    });
    jQuery(".author-bio-module-section .container .row .col-sm-12 .author-bio .media .media-body .media-left .fit-to-width").find("img").each(function () {
        var n = jQuery(this).attr("src");
        jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
    });
    jQuery(".article-list-module .container .row .col-sm-12 .article-list .media .media-left .fit-to-width").find("img").each(function () {
        var n = jQuery(this).attr("src");
        jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
    });
    jQuery(".rebranding .container .card-listing .row .card").find("a").each(function () {
        var i = jQuery(this).attr("href"),
            r = getDomain(i);
        typeof i != "undefined" && r !== null && !r.toLowerCase().includes(n) && t.test(i) && jQuery(this).attr("rel", "nofollow")
    });
    jQuery(".card-a-module .container .tabbed-carda .tab-container-rebrand .tab-content-rebrand .cards-a .right-cards-a .card-a-multiple").find("a").each(function () {
        var i = jQuery(this).attr("href"),
            r = getDomain(i);
        typeof i != "undefined" && r !== null && !r.toLowerCase().includes(n) && t.test(i) && jQuery(this).attr("rel", "nofollow")
    });
    jQuery(".rebranding .container .card-listing .row .card").find("a").each(function () {
        var i = jQuery(this).attr("href"),
            r = getDomain(i);
        typeof i != "undefined" && r !== null && !r.toLowerCase().includes(n) && t.test(i) && jQuery(this).attr("rel", "nofollow")
    });
    jQuery(".card-a-module .container .cards-a .left-single-card-a").find("a").each(function () {
        var i = jQuery(this).attr("href"),
            r = getDomain(i);
        typeof i != "undefined" && r !== null && !r.toLowerCase().includes(n) && t.test(i) && jQuery(this).attr("rel", "nofollow")
    });
    jQuery(".card-a-module .container .cards-a .left-single-card-a .card-a-body").find("a").each(function () {
        var i = jQuery(this).attr("href"),
            r = getDomain(i);
        typeof i != "undefined" && r !== null && !r.toLowerCase().includes(n) && t.test(i) && jQuery(this).attr("rel", "nofollow")
    });
    jQuery(".hero-rebrand-B .banner .carousel-inner .carousel-caption ").find("a").each(function () {
        var i = jQuery(this).attr("href"),
            r = getDomain(i);
        typeof i != "undefined" && r !== null && !r.toLowerCase().includes(n) && t.test(i) && jQuery(this).attr("rel", "nofollow")
    });
    jQuery(".tab-content-rebrand .cards-a .full-image-card .right-cards-a .card-a-multiple .ga-retabbed-ab").find("a").each(function () {
        var i = jQuery(this).attr("href"),
            r = getDomain(i);
        typeof i != "undefined" && r !== null && !r.toLowerCase().includes(n) && t.test(i) && jQuery(this).attr("rel", "nofollow")
    });
    jQuery(".content-section .container .content-container .box01").find("a").each(function () {
        var i = jQuery(this).attr("href"),
            r = getDomain(i);
        typeof i != "undefined" && r !== null && !r.toLowerCase().includes(n) && t.test(i) && jQuery(this).attr("rel", "nofollow")
    });
    jQuery(".content-section .container .content-container .brochure .box1").find("a").each(function () {
        var i = jQuery(this).attr("href"),
            r = getDomain(i);
        typeof i != "undefined" && r !== null && !r.toLowerCase().includes(n) && t.test(i) && jQuery(this).attr("rel", "nofollow")
    });
    jQuery(".content-module-G-tab-variation  .container .content-container .tab-content .tab-pane .row .card-default .content").find("a").each(function () {
        var i = jQuery(this).attr("href"),
            r = getDomain(i);
        typeof i != "undefined" && r !== null && !r.toLowerCase().includes(n) && t.test(i) && jQuery(this).attr("rel", "nofollow")
    });
    jQuery(".content-module-G-tab-variation  .container .content-container .tab-content .tab-pane .row .box01").find("a").each(function () {
        var i = jQuery(this).attr("href"),
            r = getDomain(i);
        typeof i != "undefined" && r !== null && !r.toLowerCase().includes(n) && t.test(i) && jQuery(this).attr("rel", "nofollow")
    });
    jQuery(".content-section-E .container .content-container .row").find("a").each(function () {
        var i = jQuery(this).attr("href"),
            r = getDomain(i);
        typeof i != "undefined" && r !== null && !r.toLowerCase().includes(n) && t.test(i) && jQuery(this).attr("rel", "nofollow")
    });
    jQuery(".block-module .container .row .left-side").find("a").each(function () {
        var i = jQuery(this).attr("href"),
            r = getDomain(i);
        typeof i != "undefined" && r !== null && !r.toLowerCase().includes(n) && t.test(i) && jQuery(this).attr("rel", "nofollow")
    });
    jQuery(".block-module .container .row .right-side").find("a").each(function () {
        var i = jQuery(this).attr("href"),
            r = getDomain(i);
        typeof i != "undefined" && r !== null && !r.toLowerCase().includes(n) && t.test(i) && jQuery(this).attr("rel", "nofollow")
    });
    jQuery(".article-paragraph-section .container .row .blog-main .article-paragraph").find("a").each(function () {
        var i = jQuery(this).attr("href"),
            r = getDomain(i);
        typeof i != "undefined" && r !== null && !r.toLowerCase().includes(n) && t.test(i) && jQuery(this).attr("rel", "nofollow")
    });
    jQuery(".article-paragraph-section .container .row .blog-main .article-paragraph .article-button").find("a").each(function () {
        var i = jQuery(this).attr("href"),
            r = getDomain(i);
        typeof i != "undefined" && r !== null && !r.toLowerCase().includes(n) && t.test(i) && jQuery(this).attr("rel", "nofollow")
    });
    jQuery(".content-module-J-New  .container .row .panel-group .panel-default .panel-collapse .panel-body .event .content-wrapper .title").find("a").each(function () {
        var i = jQuery(this).attr("href"),
            r = getDomain(i);
        typeof i != "undefined" && r !== null && !r.toLowerCase().includes(n) && t.test(i) && jQuery(this).attr("rel", "nofollow")
    });
    jQuery(".tab-content-rebrand .cards-a .right-cards-a .card-a-multiple").each(function () {
        var i = jQuery(this).attr("href"),
            r = getDomain(i);
        typeof i != "undefined" && r !== null && !r.toLowerCase().includes(n) && t.test(i) && jQuery(this).attr("rel", "nofollow")
    });
    jQuery(".block-module .container .full-width .row .left-side").find("a").each(function () {
        var i = jQuery(this).attr("href"),
            r = getDomain(i);
        typeof i != "undefined" && r !== null && !r.toLowerCase().includes(n) && t.test(i) && jQuery(this).attr("rel", "nofollow")
    });
    jQuery(".content-section .container .content-container .row .col-lg-12 .Bullet-for-RTE li").find("a").each(function () {
        var i = jQuery(this).attr("href"),
            r = getDomain(i);
        typeof i != "undefined" && r !== null && !r.toLowerCase().includes(n) && t.test(i) && jQuery(this).attr("rel", "nofollow")
    });
    jQuery(".media-center-card  .container .card-listing .row .card").find("a").each(function () {
        var i = jQuery(this).attr("href"),
            r = getDomain(i);
        typeof i != "undefined" && r !== null && !r.toLowerCase().includes(n) && t.test(i) && jQuery(this).attr("rel", "nofollow")
    })
}

function LazyLoadJavascriptLibraries() {
    if (LazyLoadJavascriptLibrariesCounter === 0) {
        LazyLoadJavascriptLibrariesCounter = 1;
        try {
            typeof jquery_ui_min_Cdn != "undefined" && jQuery.getScript(jquery_ui_min_Cdn, function () {
                MostSearchWordsFunctionality()
            })
        } catch (n) { }
        typeof TweenMaxCdn != "undefined" && jQuery.getScript(TweenMaxCdn, function () {
            typeof ScrollMagicCdn != "undefined" && jQuery.getScript(ScrollMagicCdn, function () {
                typeof animationJS != "undefined" && jQuery.getScript(animationJS, function () {
                    InitiateWaveAnimation()
                })
            })
        });
        typeof videojs_ga_videocloud != "undefined" && jQuery.getScript(videojs_ga_videocloud);
        disableTargetActivies !== !0 && jQuery.getScript("https://assets.pinterest.com/js/pinit.js");
        typeof fecthMarketoScores != "undefined" && jQuery.getScript(fecthMarketoScores, function () {
            typeof MarketoLeadScore != "undefined" && MarketoLeadScore()
        });
        jQuery(".lazy-load-marketo").length > 0 && LoadedMarketoForm === !1 && (LazyLoadMarketoForm(), LoadedMarketoForm = !0)
    }
}

function WavesAnimation() {
    typeof LoadWaves != "undefined" && typeof ScrollMagic != "undefined" && (controller = new ScrollMagic.Controller, typeof TweenMax != "undefined" && TweenMax.staggerTo(".parallax-bg", 1, {
        opacity: 1,
        y: "-=20",
        ease: Back.easeOut
    }, .3), jQuery(function () {
        try {
            var n = new ScrollMagic.Scene({
                triggerElement: "#ContactAnimate",
                reverse: !1
            }).setClassToggle("#ContactAnimate", "contactShowed").triggerHook(.8).addTo(controller);
            n = new ScrollMagic.Scene({
                triggerElement: "#check"
            })
        } catch (t) { }
    }), jQuery(function () {
        var h = new ScrollMagic.Scene({
            triggerElement: ".trimwaves"
        }).setClassToggle("#top-scroll", "scroll-appear").addTo(controller).triggerHook(1),
            c = new ScrollMagic.Scene({
                triggerElement: ".trimwaves"
            }).setClassToggle("#top1-scroll", "scroll-appear").addTo(controller).triggerHook(1),
            l = new ScrollMagic.Scene({
                triggerElement: ".trimwaves"
            }).setClassToggle("footer", "footer-bg").addTo(controller).triggerHook(1),
            t;
        jQuery(".cross-nav-module").each(function () {
            var n = jQuery(this),
                t = new ScrollMagic.Scene({
                    triggerElement: this,
                    offset: 430
                }).setClassToggle(this, "cross-animation").addTo(controller).triggerHook(1).reverse(!1);
            t.on("enter", function () {
                n.each(function () {
                    var t = jQuery(this).find(".crossnavitems .cross-nav-blocks"),
                        i = jQuery(this).find(".crossnavitems p"),
                        r = jQuery(this).find(".crossnavitems");
                    n.find(".crossnavitems").removeClass("animate-init");
                    t.each(function (n) {
                        jQuery(this).delay(150 * n).css({
                            transitionDelay: 200 + n * n * 15 + "ms",
                            transitionDuration: 400 + n * 40 + "ms"
                        }, 500)
                    })
                })
            });
            t.on("leave", function () {
                jQuery(".crossnavitems").removeClass("animate-init")
            })
        });
        t = ["bg8", "bg9", "bg10", "bg11", "bg12", "bg13", "bg14"];
        try {
            jQuery(".trimwaves").find(".wavefooter").addClass("wave-transparent");
            var i = new ScrollMagic.Scene({
                triggerElement: ".trimwaves",
                offset: 117
            }).setClassToggle("#wavefooter1", "wavefooterShowed").addTo(controller).triggerHook(1),
                r = new ScrollMagic.Scene({
                    triggerElement: ".trimwaves",
                    offset: 117
                }).setClassToggle("#wavefooter2", "wavefooterShowed").addTo(controller).triggerHook(1),
                u = new ScrollMagic.Scene({
                    triggerElement: ".trimwaves",
                    offset: 73
                }).setClassToggle("#wavefooter3", "wavefooterShowed").addTo(controller).triggerHook(1),
                f = new ScrollMagic.Scene({
                    triggerElement: ".trimwaves",
                    offset: 30
                }).setClassToggle("#wavefooter4", "wavefooterShowed").addTo(controller).triggerHook(1),
                e = new ScrollMagic.Scene({
                    triggerElement: ".trimwaves",
                    offset: 117
                }).setClassToggle("#wavefooter5", "wavefooterShowed").addTo(controller).triggerHook(1),
                o = new ScrollMagic.Scene({
                    triggerElement: ".trimwaves",
                    offset: 117
                }).setClassToggle("#wavefooter6", "wavefooterShowed").addTo(controller).triggerHook(1),
                s = new ScrollMagic.Scene({
                    triggerElement: ".trimwaves",
                    offset: 73
                }).setClassToggle("#wavefooter7", "wavefooterShowed").addTo(controller).triggerHook(1),
                n = [i, r, u, f, e, o, s],
                v = new ScrollMagic.Scene({
                    triggerElement: ".trimwaves"
                }).on("leave", function () {
                    n.forEach(function (n) {
                        n.reverse(!0)
                    })
                }).on("enter", function () {
                    n.forEach(function (n) {
                        n.reverse(!1)
                    })
                }).addTo(controller).triggerHook(1)
        } catch (y) { }
    }), LoadWaves())
}

function LazyLoadMarketoForm() {
    typeof marketo_min_cdn != "undefined" && jQuery(".lazy-load-marketo").length > 0 && jQuery.getScript(marketo_min_cdn, function () {
        typeof Initializemarketoform1 != "undefined" && Initializemarketoform1();
        typeof Initializemarketoform2 != "undefined" && Initializemarketoform2();
        typeof Initializemarketoform3 != "undefined" && Initializemarketoform3();
        typeof Initializemarketoform4 != "undefined" && Initializemarketoform4();
        typeof Initializemarketoform5 != "undefined" && Initializemarketoform5();
        typeof Initializeajaxcall != "undefined" && Initializeajaxcall();
        typeof Initializecheckcompleteassesment != "undefined" && Initializecheckcompleteassesment();
        typeof Initializesubmitform != "undefined" && Initializesubmitform();
        typeof InitializeMarketoformcontrol != "undefined" && InitializeMarketoformcontrol();
        typeof InitializeLoadMultipleMarketoForms != "undefined" && InitializeLoadMultipleMarketoForms();
        typeof InitializeLoadMarketoForm1 != "undefined" && InitializeLoadMarketoForm1();
        typeof InitializeLoadMarketoForm2 != "undefined" && InitializeLoadMarketoForm2();
        typeof InitializeLoadMarketoForm3 != "undefined" && InitializeLoadMarketoForm3();
        typeof InitializeLoadMarketoForm4 != "undefined" && InitializeLoadMarketoForm4();
        typeof InitializeLoadMarketoForm5 != "undefined" && InitializeLoadMarketoForm5();
        typeof InitializeLoadMarketoForm6 != "undefined" && InitializeLoadMarketoForm6();
        typeof InitializeLoadMarketoForm7 != "undefined" && InitializeLoadMarketoForm7()
    })
}

function InitiateWaveAnimation() {
    jQuery.when(WavesAnimation()).done(function () {
        assignID()
    })
}

function MostSearchWordsFunctionality() {
    try {
        jQuery(".search-input").autocomplete({
            source: function (n, t) {
                var i = new RegExp("^" + jQuery.ui.autocomplete.escapeRegex(n.term), "i");
                t(jQuery.grep(availableTags, function (n) {
                    return i.test(n)
                }))
            }
        }).autocomplete("disable").on("keyup", function () {
            var n = jQuery(this).val().length;
            return n > 1 ? (jQuery(this).autocomplete("enable"), !1) : (jQuery(this).autocomplete("disable"), !1)
        })
    } catch (n) { }
}

function LoadSimpleDTOFunctionality() {
    typeof MarketoLeadScore != "undefined" && typeof fecthMarketoScores == "undefined" && MarketoLeadScore()
}

function getDomain(n) {
    var i, r, t;
    if (typeof n != "undefined") return i = getHostName(n), r = i, i !== null && (t = i.split(".").reverse(), t !== null && t.length > 1 && (r = t[1] + "." + t[0], i.toLowerCase().indexOf(".co.uk") !== -1 && t.length > 2 && (r = t[2] + "." + r))), r
}

function getHostName(n) {
    if (typeof n != "undefined") {
        var t = n.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
        return t !== null && t.length > 2 && typeof t[2] == "string" && t[2].length > 0 ? t[2] : (t = n.match(/\/(www[0-9]?\.)?(.[^/:]+)/i), t !== null && t.length > 2 && typeof t[2] == "string" && t[2].length > 0) ? t[2] : null
    }
}

function isVisible(n) {
    return !n.offsetParent && n.offsetWidth === 0 && n.offsetHeight === 0 ? !1 : !0
}

function searchGoalTrigger() {
    jQuery.ajax({
        url: "/api/sitecore/customgoal/triggersearchgoal",
        dataType: "json",
        type: "Get",
        data: {
            GoalId: "{796A85C7-15AA-474B-A782-1EF2DBEBA702}"
        },
        success: function () { },
        complete: function () { }
    })
}

function formGoalTrigger() {
    jQuery.ajax({
        url: "/api/sitecore/customgoal/TriggerFormGoal",
        dataType: "json",
        type: "Get",
        data: {
            GoalId: "{128D6820-1A3D-4A45-B5CB-4C3D725AEF11}"
        },
        success: function () { },
        complete: function () { }
    })
}

function surveyGoalTrigger() {
    jQuery.ajax({
        url: "/api/sitecore/customgoal/SurveyFormGoal",
        dataType: "json",
        type: "Get",
        data: {
            GoalId: "{605F6483-5AB4-4827-ACF0-E98DBDB9FFD3}"
        },
        success: function () { },
        complete: function () { }
    })
}

function ContactUsGoalTrigger() {
    jQuery.ajax({
        url: "/api/sitecore/customgoal/TriggerContactUsGoal",
        dataType: "json",
        type: "Get",
        data: {
            GoalId: "{54C61E22-8A96-4B56-A7B5-829C3829AEDD}"
        },
        success: function () { },
        complete: function () { }
    })
}

function EventSignUpGoalTrigger() {
    jQuery.ajax({
        url: "/api/sitecore/customgoal/EventSignUpGoal",
        dataType: "json",
        type: "Get",
        data: {
            GoalId: "{6E34A645-695C-46FB-AE92-BCC412F4F53E}"
        },
        success: function () { },
        complete: function () { }
    })
}

function WatchVideoGoal() {
    jQuery.ajax({
        url: "/api/sitecore/customgoal/WatchVideoGoal",
        dataType: "json",
        type: "Get",
        data: {
            GoalId: "{866B4854-658D-4EF8-AA15-C70C5378BB61}"
        },
        success: function () { },
        complete: function () { }
    })
}

function pageViewGoalTrigger() {
    jQuery.ajax({
        url: "/api/sitecore/customgoal/PageviewGoal",
        dataType: "json",
        type: "Get",
        data: {
            GoalId: "{420ECB4D-CCD7-434C-8970-58AE60D25BC4}"
        },
        success: function () { },
        complete: function () { }
    })
}

function navigateToElement(n) {
    try {
        jQuery("html, body").animate({
            scrollTop: jQuery(n).offset().top - 150
        }, 1500)
    } catch (t) { }
}

function getModalWindowImage(n) {
    jQuery(n).closest("img-Infographic-Modal").length > 0 && jQuery(n).closest("img-Infographic-Modal").find(".img-infographic-width img").attr("src")
}

function bindClickEventToSharingIcon(n) {
    setConditionOnPinterest(n);
    jQuery(".customsocialsharing").on("click", ".g-plus", function (t) {
        var i, r;
        t.preventDefault();
        i = n.shareUrl;
        n.shareType == SharingType.shareinfograph && (i = n.shareImage);
        r = window.open("https://plus.google.com/share?url=" + i + "", "popupwindow", "scrollbars=yes,width=800,height=400");
        r.focus()
    });
    jQuery(".customsocialsharing").on("click", ".twitter", function (t) {
        var i, r, u;
        t.preventDefault();
        i = n.shareUrl;
        n.shareType == SharingType.shareinfograph && (i = n.shareImage);
        r = n.shareTwitterTitle == "" && n.shareTwitterDesc == "" ? encodeURIComponent(i) : "" + encodeURIComponent(n.shareTwitterTitle) + " " + encodeURIComponent(n.shareTwitterDesc) + "-" + encodeURIComponent(i);
        u = window.open("http://twitter.com/intent/tweet?text=" + r + "", "popupwindow", "scrollbars=yes,width=800,height=400");
        u.focus()
    });
    jQuery(".customsocialsharing").on("click", ".linkedin", function (t) {
        var i, r;
        t.preventDefault();
        i = n.shareUrl;
        n.shareType == SharingType.shareinfograph && (i = n.shareImage);
        r = window.open("http://www.linkedin.com/shareArticle?url=" + i + "", "popupwindow", "scrollbars=yes,width=800,height=400");
        r.focus()
    });
    jQuery(".customsocialsharing").on("click", ".facebook", function (t) {
        var i, r;
        t.preventDefault();
        i = n.shareUrl;
        n.shareType == SharingType.shareinfograph && (i = n.shareImage);
        r = window.open("https://www.facebook.com/dialog/share?app_id=" + GlobalAppIds.Ids.fbAppId + "&href=" + i + "", "popupwindow", "scrollbars=yes,width=800,height=400");
        r.focus()
    });
    jQuery(".customsocialsharing").on("click", ".pinterest", function (t) {
        var i, r;
        if (t.preventDefault(), i = n.shareUrl, n.shareType == SharingType.sharemedia || n.shareType == SharingType.sharevideo) return !1;
        r = window.open("http://pinterest.com/pin/create/button/?url=" + i + "&media=" + n.shareImage + "&description=" + n.shareTitle + "", "popupwindow", "scrollbars=yes,width=800,height=400");
        r.focus()
    });
    jQuery(".customsocialsharing").on("click", ".email", function (t) {
        t.preventDefault();
        var i = n.shareUrl;
        n.shareType == SharingType.shareinfograph && (i = n.shareImage);
        GetEmailData(n.shareItemId, i, "", n.shareType)
    })
}

function setConditionOnPinterest(n) {
    n.shareType == SharingType.sharemedia || n.shareType == SharingType.sharevideo ? (jQuery(".popover .popover-content > .video-social-buttons > ul > li.pinterest").addClass("disableSocialIcon"), jQuery("#sharingInPage .dropdown-menu.mobile-view.customsocialsharing > li.pinterest").addClass("disableSocialIcon")) : (jQuery(".popover .popover-content > .video-social-buttons > ul > li.pinterest").removeClass("disableSocialIcon"), jQuery("#sharingInPage .dropdown-menu.mobile-view.customsocialsharing > li.pinterest").removeClass("disableSocialIcon"))
}

function GetEmailView(n, t, i, r) {
    jQuery.ajax({
        url: "/api/sitecore/SendMailer/GetViewMail",
        type: "POST",
        data: {
            datasourceid: "" + n + "",
            _currUrl: "" + t + "",
            body: "" + i + "",
            sharingtype: "" + r + ""
        },
        success: function (n) {
            jQuery(".email-modal").modal("show");
            jQuery("#email-modal .modal-body").html(jQuery(n))
        }
    })
}

function GetEmailData(n, t, i, r) {
    jQuery.ajax({
        url: GetEmailJsonDataSendMailer,
        type: "POST",
        data: {
            datasourceid: "" + n + "",
            _currUrl: "" + t + "",
            body: "" + i + "",
            sharingtype: "" + r + ""
        },
        success: function (n) {
            var i = n.Subject == "" ? " " : n.Subject,
                r, u;
            return i = encodeURIComponent(i), r = encodeURIComponent(n.Body), u = "mailto:?subject=" + i + "&body=" + r + " - " + t, window.location.href = u, !1
        }
    })
}

function tabbedC(n, t) {
    var b = jQuery(window),
        k = b.width(),
        s, f, w;
    if (n)
        if (t) {
            var l = n,
                a = l.closest("ul"),
                i = a.height(),
                e = a.find("li"),
                d = e.first().height(),
                g = e.filter(function () {
                    return jQuery(this).css("display") != "none"
                });
            tab_module_C_LI_visible_length = g.length;
            var nt = l.closest(".tabbed-module-C-tab , .tabbed-module-G-tab"),
                r = nt.find(".tab-content-holder"),
                u = r.find(".tab-content"),
                o = r.height(),
                v = n.parent("li"),
                tt = e.index(v),
                y = v.position();
            if (k > 750)
                if (o > i) r.removeAttr("style"), u.css({
                    "max-height": i,
                    overflow: "auto"
                });
                else if (r.removeAttr("style"), tt < Math.round(tab_module_C_LI_visible_length / 2)) s = y.top - d * 2, f = s > 0 ? s : 0, o + f >= i && (f = 0, u.css({
                    "max-height": i,
                    overflow: "auto"
                })), u.css({
                    position: "relative",
                    top: f
                });
                else {
                    var h = 0,
                        c = y.top,
                        p = c + o;
                    p > i ? (w = p - i, h = c - w + 1) : h = c;
                    u.css({
                        position: "relative",
                        top: h
                    })
                } else r.removeAttr("style")
        } else n.each(function () {
            var t = jQuery(this),
                i = t.height(),
                r = t.closest(".tabbed-module-C-tab , .tabbed-module-G-tab"),
                n = r.find(".tab-content-holder"),
                u = n.height(),
                f = n.find(".tab-content");
            u > i && (n.removeAttr("style"), f.css({
                "max-height": i,
                overflow: "auto"
            }))
        })
}

function equalWidthTab(n) {
    var t = 0;
    jQuery(n).each(function () {
        jQuery(this).width() > t && (t = jQuery(this).width() + 5)
    });
    jQuery(n).css("width", t)
}

function ShowMore(n, t, i) {
    var u = jQuery(n).size(),
        r = i,
        f;
    jQuery(n + ":lt(" + r + ")").show();
    f = " Showing " + r + " of " + u + " results ";
    jQuery(t + " .more-results-details").html(f);
    jQuery("#totalResult").html(u);
    u <= r && jQuery(t).hide();
    jQuery(t).click(function (f) {
        if (f.preventDefault(), u > r || u == r) {
            r = r + i <= u ? r + i : u;
            jQuery(n + ":lt(" + r + ")").show();
            var e = "Showing " + r + " of " + u + " results ";
            jQuery(t + " .more-results-details").html(e);
            u == r && jQuery(t).hide()
        }
    })
}

function cardVariations(n, t) {
    var i = 0,
        r = n;
    jQuery(t).each(function (t) {
        t == i && (jQuery(this).css("margin-left", "0px"), i = i + n);
        t == r - 1 && (jQuery(this).css("margin-right", "0px"), r = r + n)
    })
}

function cardOverflow() {
    var t = document.querySelectorAll(".card .card-default"),
        r = document.querySelectorAll(".card .card-default .content"),
        n, u;
    for (i = 0; i < t.length; ++i) t[i].className.match("only-text btn-text") || r[i].offsetHeight + 5 < r[i].scrollHeight && (n = document.createElement("div"), n.setAttribute("class", "ellipsis"), u = document.createTextNode("..."), typeof n != "undefined" && n !== null && n.lenght > 0 && n.appendChild(u), typeof document.getElementsByClassName("content")[i] != "undefined" && document.getElementsByClassName("content")[i].length > 0 && document.getElementsByClassName("content")[i].appendChild(n))
}

function tabReposition(n, t, i) {
    var e, r, o, s;
    t.css("left", "auto");
    var h = n.offset().left,
        u = t.outerWidth(),
        c = u / 2,
        f = i.width();
    window_width = jQuery(window).width();
    e = (window_width - f) / 2;
    r = h - (c + e);
    f < r + u && (o = r + u, s = o - f, r = r - s);
    r < 0 && (r = 0);
    t.css("left", r)
}

function annexModule() {
    var n = jQuery(".annex-module");
    n.each(function () {
        var n = jQuery(this).find(".annex-width .annex-content"),
            u = jQuery(this).find(".more-content-width"),
            f = n.width(),
            i = 0,
            t = 0,
            r;
        n.find("li").each(function () {
            jQuery(this).width() > 0 && f > i + jQuery(this).width() + 5 && t == 0 ? i += jQuery(this).outerWidth(!0) + 5 : (t = t + 1, jQuery(this).addClass("hidelist"))
        });
        n.find("li").hasClass("hidelist") ? (r = n.find("li.hidelist").closest("div").prop("id"), r.indexOf("annex-module") < 0 && (n.find(".hidelist").wrapAll('<div class="collapse" id="annex-module" />'), n.css("height", "auto"))) : u.hide()
    })
}

function ValidateEmail() {
    var n = jQuery("#email-subscribe").val();
    return n.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? (document.form1.email.focus(), jQuery("#submit-subscribe").removeClass("sign-up").addClass("orangeEmail").removeAttr("disabled"), !0) : (document.form1.email.focus(), jQuery("#submit-subscribe").hasClass("orangeEmail") && jQuery("#submit-subscribe").removeClass("orangeEmail").addClass("sign-up").attr("disabled", "disabled"), !1)
}

function ValidateEmailForComment(n) {
    return n.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? !0 : (jQuery("#email").parent().addClass("has-error"), !1)
}

function GifActivator(n) {
    var r, u, f;
    try {
        var e = winheight,
            t = 0,
            i = 0,
            s = 0,
            o = [];
        for (r = n; i < e; r = t) {
            if (u = document.elementFromPoint(0, r), u != null) {
                if (f = jQuery(u).outerHeight(), f = Math.round(f), i = u.getBoundingClientRect().top, i = Math.round(i), t = i < 0 ? f + i : f + i, t < r && (t = t + r), t = Math.round(t), o.indexOf(t) == -1) o.push(t);
                else {
                    t = t + r;
                    continue
                }
                ActiveRefresh(u)
            } else i = e;
            s = u
        }
    } catch (h) { }
}

function CarouselSwiperGifActivator(n) {
    for (var i = document.querySelectorAll(".item.fit-to-width"), u = i.length, t = 0, f = 0, r = 0; r < u; r++) jQuery(i[r]).hasClass("active") && (currentSlidePosition = jQuery(i[r]).data("position"), t = currentSlidePosition - 1);
    jQuery(n).hasClass("carousel-control") && (jQuery(n).hasClass("right") ? f = t != u - 1 ? t + 1 : 0 : jQuery(n).hasClass("left") && (f = t != 0 ? t - 1 : u - 1));
    ActiveRefresh(i[f])
}

function ActiveRefresh(n) {
    var i, t, r;
    if (n != null)
        for (i = n.querySelectorAll("img"), t = 0; t < i.length; t++) r = jQuery(i[t]).attr("src"), typeof r != "undefined" && r.toLowerCase().indexOf(".gif") > -1 && AnimateGif(i[t], r)
}

function AnimateGif(n, t) {
    var r = jQuery(n).parent(),
        u = jQuery(r).parent(),
        f = "?";
    t.indexOf("?") > -1 && (f = "&");
    var i = t + f + (new Date).getTime(),
        e = jQuery(r).css("background-image"),
        o = jQuery(u).css("background-image");
    e != "none" ? (jQuery(r).css("background-image", ""), typeof i != "undefined" && i !== "undefined" && jQuery(r).css("background-image", 'url("' + i + '")')) : o !== "none" ? (jQuery(u).css("background-image", ""), typeof i != "undefined" && i !== "undefined" && jQuery(u).css("background-image", 'url("' + i + '")')) : jQuery(n).attr("src", i)
}

function HandleBlogExternalLink() {
    try {
        jQuery("a").each(function () {
            var n = jQuery(this),
                i = n.attr("href"),
                t;
            if (i != null && i.indexOf("/blogs") > -1 && (i.indexOf("/") == 0 || i.indexOf(window.location.hostname) > -1)) {
                for (n.attr("target") == "_blank" && n.attr("target", "_parent"), t = n.children("span"), index = 0, len = externalLinkClasses.length; index < len; ++index) n.hasClass(externalLinkClasses[index]) && (n.removeClass(externalLinkClasses[index]), n.addClass(internalLinkClasses[index]), n.css("display", "block"));
                if (t != null)
                    for (index = 0, len = externalLinkClasses.length; index < len; ++index) t.hasClass(externalLinkClasses[index]) && (t.removeClass(externalLinkClasses[index]), t.addClass(internalLinkClasses[index]))
            }
        })
    } catch (n) { }
}

function feedReferred() {
    if (window.location.href.indexOf("#comments-section") > -1) {
        jQuery(".navbar-default.blog-nav").addClass("shrinkedchange navbar-fixed-top shrinkedchange-nav");
        var n = jQuery("#comments-section"),
            t = jQuery(".main-comments-nav").outerHeight(),
            i = jQuery(".blog-comments-nav").outerHeight(),
            r = parseInt(t) + parseInt(i),
            u = n.offset().top - r;
        n.length && jQuery("html, body").animate({
            scrollTop: u
        }, "slow", function () { });
        jQuery("#feeds").hasClass("comments-blog") && jQuery("#cmment").focus()
    }
    return null
}

function ViewMoreForTab(n, t, i) {
    var u = jQuery(n).length,
        r = i,
        f;
    jQuery(n + ":lt(" + r + ")").show();
    f = " Showing " + r + " of " + u + " results ";
    jQuery(t + " .more-results-details").html(f);
    jQuery("#totalResult").html(u);
    u <= r ? (jQuery(t).hide(), jQuery(".viewmoreitem").show()) : jQuery(window).width() < 751 && jQuery(".viewmoreitem").hide();
    jQuery(t).click(function (f) {
        if (f.preventDefault(), u > r || u == r) {
            r = r + i <= u ? r + i : u;
            jQuery(n + ":lt(" + r + ")").show();
            var e = "Showing " + r + " of " + u + " results ";
            jQuery(t + " .more-results-details").html(e);
            u == r && (jQuery(t).hide(), jQuery(".viewmoreitem").show())
        }
    })
}

function ViewMoreCrossNav(n, t, i, r) {
    var f = jQuery(n).length,
        u = i,
        e;
    jQuery(n + ":lt(" + u + ")").show();
    e = " Showing " + u + " of " + f + " results ";
    jQuery(t + " .more-results-details").html(e);
    jQuery("#totalResult").html(f);
    f <= u ? (jQuery(t).hide(), jQuery(r).show()) : jQuery(window).width() < 751 && jQuery(r).hide();
    jQuery(t).click(function (e) {
        if (e.preventDefault(), f > u || f == u) {
            u = u + i <= f ? u + i : f;
            jQuery(n + ":lt(" + u + ")").show();
            var o = "Showing " + u + " of " + f + " results ";
            jQuery(t + " .more-results-details").html(o);
            f == u && (jQuery(t).hide(), jQuery(r).show())
        }
    })
}

function LoadTabModule(n, t, i, r) {
    var f = jQuery(n).length,
        u = r;
    jQuery(t).click(function (r) {
        r.preventDefault();
        (f > u || f == u) && (u = u + i <= f ? u + i : f, jQuery(n + ":lt(" + u + ")").show(), f == u && jQuery(t).hide())
    })
}

function GetImageFromBrightcoveApi(n, t) {
    var i = "input[name$=" + n + "]",
        r = jQuery(i).val(),
        u = "#" + t + "",
        f = "https://edge.api.brightcove.com/playback/v1/accounts/2103045685001/videos/" + r,
        e = {
            async: !0,
            crossDomain: !0,
            url: f,
            method: "GET",
            headers: {
                accept: "application/json;pk=BCpkADawqM0DSvJQGOR_RCqy5NuH9uU5eE31ZD3vmNttkA64Olp2evG7qhMP_Qd3Ddtpp-rCFDXEGUKllZH_HotCZ0JkeFmxQdbn901H4qY0_TCpBgs_VXc-zVxPxbFtNPVZrUf6_Bal7kMQ"
            }
        };
    jQuery.ajax(e).done(function (n) {
        for (x = 0; x < n.poster_sources.length; x++) {
            var t = window.location.protocol;
            n.poster_sources[x].src.indexOf(t) != -1 && jQuery(u).attr("src", n.poster_sources[x].src)
        }
    })
}

function AvanadeMaturityModel() {
    function a(t, r, u, f) {
        return widget = {
            name: t,
            htmlTemplate: "<div id='" + t + "'><\/div>",
            isFit: function (n) {
                return n.renderAs === t
            },
            afterRender: function (o, s) {
                function a(n) {
                    return n % 1e3 ? 3 : e
                }

                function v(n) {
                    return "<span>" + n + "<\/span>" + f[n]
                }

                function y(n) {
                    return f.indexOf(n)
                }

                function p(n) {
                    b(n);
                    h = n;
                    return u[n]
                }

                function w(n) {
                    return n
                }

                function b(n) {
                    u[n] == "" ? jQuery(".panel-body .noUi-target .noUi-base .noUi-origin .noUi-tooltip").addClass("cx-tooltip-null") : jQuery(".panel-body .noUi-target .noUi-base .noUi-origin .noUi-tooltip").removeClass("cx-tooltip-null")
                }

                function l() {
                    h != e ? (jQuery("#surveyNext").prop("disabled", !1), jQuery("#surveyComplete").prop("disabled", !1), jQuery("#surveyCompleteMobile").prop("disabled", !1), o.value = n[r].elements[0].answers[h - 1].ID) : (jQuery("#surveyNext").prop("disabled", !0), jQuery("#surveyComplete").prop("disabled", !0), jQuery("#surveyCompleteMobile").prop("disabled", !0));
                    i[r] = h;
                    var t = JSON.stringify(i);
                    disableBrowserStorage || setCookie("Ava_CXAssessmentCookie", t, 90)
                }
                var c = s.querySelector("#" + t),
                    k = document.getElementById("pips-steps"),
                    h = 0;
                noUiSlider.create(c, {
                    start: i[r] != null ? i[r] : e,
                    connect: "lower",
                    behaviour: "tap-drag",
                    step: 1,
                    tooltips: !0,
                    format: {
                        from: w,
                        to: p
                    },
                    range: {
                        min: 0,
                        max: 5
                    },
                    pips: {
                        mode: "steps",
                        density: 20,
                        filter: a,
                        format: {
                            from: y,
                            to: v
                        }
                    }
                });
                c.noUiSlider.on("set", function () {
                    l()
                });
                l()
            },
            willUnmount: function (n, i) {
                var r = i.querySelector("#" + t);
                r.noUiSlider.destroy()
            }
        }
    }

    function h(t) {
        jQuery("#surveyStart").html(n[t.currentPage.visibleIndex].nexttext);
        jQuery("#surveyPrev").html(n[t.currentPage.visibleIndex].previoustext);
        jQuery("#surveyNext").html(n[t.currentPage.visibleIndex].nexttext);
        jQuery("#surveyComplete").html(n[t.currentPage.visibleIndex].completedtext);
        jQuery("#surveyCompleteMobile").html(n[t.currentPage.visibleIndex].mobilecompletedtext);
        document.getElementById("surveyStart").style.display = t.isFirstPage ? "inline" : "none";
        document.getElementById("surveyPrev").style.display = t.isFirstPage ? "none" : "inline";
        document.getElementById("surveyNext").style.display = t.isFirstPage ? "none" : "inline";
        t.isLastPage ? document.getElementById("surveyNext").style.display = t.isLastPage ? "none" : "inline" : "";
        document.getElementById("surveyComplete").style.display = t.isLastPage ? "inline" : "none";
        document.getElementById("surveyCompleteMobile").style.display = t.isLastPage ? "inline" : "none";
        jQuery("#surveyQuote").html(n[t.currentPage.visibleIndex].surveyQuote);
        jQuery("#surveyAuthor").html(n[t.currentPage.visibleIndex].surveyAuthor);
        t.isFirstPage ? jQuery(".cxLeftImage").show() : jQuery(".cxLeftImage").hide();
        t.isFirstPage ? jQuery(".totalQuestions").show() : jQuery(".totalQuestions").hide();
        t.isFirstPage ? jQuery(".surveytab").hide() : jQuery(".surveytab").show();
        t.isFirstPage ? jQuery(".selectOption").hide() : jQuery(".selectOption").show();
        t.isFirstPage ? jQuery("#surveyProgress").hide() : jQuery("#surveyProgress").show();
        document.getElementById("surveyProgress").innerText = +t.currentPageNo + " of " + (t.visiblePageCount - 1);
        document.getElementById("surveyPageNo") && (document.getElementById("surveyPageNo").value = t.currentPageNo)
    }
    var n = avanadeSurvey.pages,
        e = 0,
        r, t, i, u, f, o, s, c, l;
    Survey.Survey.cssType = "bootstrap";
    r = [];
    for (page in n) n[page].isQuestionPage == !0 && (r[r.length] = n[page].elements[0].renderAs);
    Survey.JsonObject.metaData.addProperty("checkbox", {
        name: "renderAs",
        "default": "standard",
        choices: JSON.stringify(r)
    });
    t = new Survey.Model(avanadeSurvey);
    t.pagePrevText = "Previous";
    t.pageNextText = "Next";
    t.completeText = "submit";
    t.showProgressBar = "top";
    i = [];
    answerArrayString != "" && (i = JSON.parse(answerArrayString));
    for (page in n)
        if (n[page].isQuestionPage == !0) {
            u = [];
            f = [];
            u[0] = slideToSelectText;
            f[0] = "0";
            for (answer in n[page].elements[0].answers) o = parseInt(answer, 10) + 1, u[o] = n[page].elements[0].answers[answer].answer, f[o] = n[page].elements[0].answers[answer].answerTitleLabel;
            Survey.CustomWidgetCollection.Instance.addCustomWidget(a(n[page].elements[0].renderAs, page, u, f))
        }
    s = {
        progress: "",
        progressBar: "",
        question: {
            title: ""
        }
    };
    jQuery("#surveyContainer").Survey({
        model: t,
        css: s,
        onCurrentPageChanged: h,
        onComplete: sendDataToServer
    });
    h(t);
    jQuery("#surveyPrev").on("click", function () {
        t.prevPage()
    });
    jQuery("#surveyStart").on("click", function () {
        t.nextPage()
    });
    jQuery("#surveyNext").on("click", function () {
        t.nextPage()
    });
    jQuery("#surveyComplete").on("click", function () {
        t.completeLastPage()
    });
    jQuery("#surveyCompleteMobile").on("click", function () {
        t.completeLastPage()
    });
    t.isFirstPage && (c = n[t.currentPage.visibleIndex].elements[0].cxImageUrl, l = n[t.currentPage.visibleIndex].elements[0].cxImageAlt, jQuery(".cxLeftImage .cxImage img").attr("src", c), jQuery(".cxLeftImage .cxImage img").attr("alt", l))
}
var LoadedMarketoForm, controller, LazyLoadJavascriptLibrariesCounter, LoadSimpleDTOFunctionalityTriggered, windowLength, SharingType, cardtype, winheight, externalLinkClasses, internalLinkClasses, flag, is_iPad, isMobile, win_width, currenturl;
typeof jQuery != "undefined" && jQuery.noConflict();
disableBrowserStorage = !1;
disableperformanceActivites = !1;
disableTargetActivies = !1;
CheckCookieConsent();
!disableBrowserStorage && sessionStorage && typeof MktoForms2 != "undefined" && MktoForms2.whenReady(function (n) {
    sessionStorage.getItem("utm_campaign") != null && n.addHiddenFields({
        avanadeUTMCampaign: sessionStorage.getItem("utm_campaign")
    });
    sessionStorage.getItem("utm_source") != null && n.addHiddenFields({
        avanadeUTMSource: sessionStorage.getItem("utm_source")
    });
    sessionStorage.getItem("utm_medium") != null && n.addHiddenFields({
        avanadeUTMMedium: sessionStorage.getItem("utm_medium")
    });
    sessionStorage.getItem("utm_content") != null && n.addHiddenFields({
        avanadeUTMContent: sessionStorage.getItem("utm_content")
    });
    sessionStorage.getItem("utm_term") != null && n.addHiddenFields({
        avanadeUTMTerm: sessionStorage.getItem("utm_term")
    })
});
jQuery(document).ready(function () {
    jQuery("#top-scroll").click(function () {
        return jQuery("html, body").animate({
            scrollTop: 0
        }, 3e3), !1
    });
    jQuery("#top1-scroll").click(function () {
        return jQuery("html, body").animate({
            scrollTop: 0
        }, 3e3), !1
    });
    jQuery("#top-scroll,#top1-scroll").click(function () {
        jQuery("#top-scroll").addClass("scroll-exit");
        setTimeout(function () {
            jQuery("#top-scroll,#top1-scroll").removeClass("scroll-exit")
        }, 2e3)
    });
    jQuery("section").hasClass("rebrand-contact-us-module-A") || jQuery("footer").css({
        "padding-top": "50px"
    })
});
! function (n) {
    "use strict";
    var t = function (n, t) {
        this.options = t;
        this.$tabs = jQuery(n);
        this._accordionVisible = !1;
        this._initAccordion();
        var i = this;
        setTimeout(function () {
            i.checkState()
        }, 0)
    };
    t.DEFAULTS = {
        accordionClass: "visible-xs visible-sm",
        tabsClass: "hidden-xs hidden-sm",
        accordionTemplate: function (n, t, i, r) {
            return '<div class="panel panel-default mobile-tab">   <div class="panel-heading" onclick="invokeselectpanel(this)">      <h4 class="panel-title">      <\/h4>   <\/div>   <div id="' + t + '" class="tab-content-section panel-collapse collapse ' + (r ? "in" : "") + '">       <div class="panel-body js-tabcollapse-panel-body">       <\/div>   <\/div><\/div>'
        }
    };
    t.prototype.checkState = function () {
        var n = jQuery(".tabbed-module-G-tab .tab-right-col .tab-pane.active").attr("id"),
            t = jQuery(this.$tabs[0]).attr("class").split(" ")[2];
        t == "listitems" ? jQuery(window).width() > 750 ? (this.showAccordion(), this._accordionVisible = !0, jQuery("#" + n + " .js-tabcollapse-panel-heading").addClass("collapsed"), jQuery("#" + n + " .tab-content-section").removeClass("in")) : (this.showTabs(), this._accordionVisible = !1) : (this.showTabs(), this._accordionVisible = !1, this.$tabs.is(":visible") && this._accordionVisible ? (this.showTabs(), this._accordionVisible = !1) : this.$accordion.is(":visible") && !this._accordionVisible && (this.showAccordion(), this._accordionVisible = !0, jQuery("#" + n + " .js-tabcollapse-panel-heading").addClass("collapsed"), jQuery("#" + n + " .tab-content-section").removeClass("in")))
    };
    t.prototype.showTabs = function () {
        var u = this,
            t, i, r;
        this.$tabs.trigger(n.Event("show-tabs.bs.tabcollapse"));
        t = this.$accordion.find(".js-tabcollapse-panel-heading").detach();
        t.each(function () {
            var t = jQuery(this),
                n = t.data("bs.tabcollapse.parentLi"),
                i = u._panelHeadingToTabHeading(t);
            n.removeClass("active");
            n.parent().hasClass("dropdown-menu") && !n.siblings("li").hasClass("active") && n.parent().parent().removeClass("active");
            i.hasClass("collapsed") ? i.removeClass("collapsed") : (n.addClass("active"), n.parent().hasClass("dropdown-menu") && n.parent().parent().addClass("active"));
            n.append(t)
        });
        jQuery("li").hasClass("active") || jQuery("li").first().addClass("active");
        i = this.$accordion.find(".js-tabcollapse-panel-body");
        i.each(function () {
            var n = jQuery(this),
                t = n.data("bs.tabcollapse.tabpane");
            t.append(n.contents().detach())
        });
        this.$accordion.html("");
        this.options.updateLinks && (r = this.getTabContentElement(), r.find('[data-toggle-was="tab"], [data-toggle-was="pill"]').each(function () {
            var n = jQuery(this),
                t = n.attr("href").replace(/-collapse$/g, "");
            n.attr({
                "data-toggle": n.attr("data-toggle-was"),
                "data-toggle-was": "",
                "data-parent": "",
                href: t
            })
        }));
        this.$tabs.trigger(n.Event("shown-tabs.bs.tabcollapse"))
    };
    t.prototype.getTabContentElement = function () {
        var n = jQuery(this.options.tabContentSelector);
        return n.length === 0 && (n = this.$tabs.siblings(".tab-content")), n
    };
    t.prototype.showAccordion = function () {
        var i, t, r, u;
        this.$tabs.trigger(n.Event("show-accordion.bs.tabcollapse"));
        i = this.$tabs.find('li:not(.dropdown) [data-toggle="tab"], li:not(.dropdown) [data-toggle="pill"]');
        t = this;
        i.each(function () {
            var n = jQuery(this),
                i = n.parent();
            n.data("bs.tabcollapse.parentLi", i);
            t.$accordion.append(t._createAccordionGroup(t.$accordion.attr("id"), n.detach()))
        });
        this.options.updateLinks && (r = this.$accordion.attr("id"), u = this.$accordion.find(".js-tabcollapse-panel-body"), u.find('[data-toggle="tab"], [data-toggle="pill"]').each(function () {
            var n = jQuery(this),
                t = n.attr("href") + "-collapse";
            n.attr({
                "data-toggle-was": n.attr("data-toggle"),
                "data-toggle": "collapse",
                "data-parent": "#" + r,
                href: t
            })
        }));
        this.$tabs.trigger(n.Event("shown-accordion.bs.tabcollapse"))
    };
    t.prototype._panelHeadingToTabHeading = function (n) {
        var t = n.attr("href").replace(/-collapse$/g, "");
        return n.attr({
            "data-toggle": "tab",
            href: t,
            "data-parent": ""
        }), n
    };
    t.prototype._tabHeadingToPanelHeading = function (n, t, i, r) {
        return n.addClass("js-tabcollapse-panel-heading " + (r ? "" : "collapsed")), n.attr({
            "data-toggle": "collapse",
            "data-parent": "#" + i,
            href: "#" + t
        }), n
    };
    t.prototype._initAccordion = function () {
        var t = function () {
            for (var n = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = 0; i < 5; i++) n += t.charAt(Math.floor(Math.random() * t.length));
            return n
        },
            n = this.$tabs.attr("id"),
            i = (n ? n : t()) + "-accordion";
        this.$accordion = jQuery('<div class="panel-group ' + this.options.accordionClass + '" id="' + i + '"><\/div>');
        this.$tabs.after(this.$accordion);
        this.$tabs.addClass(this.options.tabsClass);
        this.getTabContentElement().addClass(this.options.tabsClass)
    };
    t.prototype._createAccordionGroup = function (n, t) {
        var i = t.attr("data-target"),
            f = t.data("bs.tabcollapse.parentLi").is(".active");
        i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, ""));
        var r = jQuery(i),
            e = r.attr("id") + "-collapse",
            u = jQuery(this.options.accordionTemplate(t, e, n, f));
        return u.find(".panel-heading > .panel-title").append(this._tabHeadingToPanelHeading(t, e, n, f)), u.find(".panel-body").append(r.contents().detach()).data("bs.tabcollapse.tabpane", r), u
    };
    n.fn.tabCollapse = function (i) {
        var u = jQuery(this[0]).attr("id"),
            r = "";
        return jQuery(this[0]) != null && jQuery(this[0]).attr("class") != null && jQuery(this[0]).attr("class").split(" ").length > 1 && jQuery(this[0]).attr("class").split(" ")[2] == "listitems" && (r = "listitems"), jQuery(window).width() <= 750 || r == "listitems" || u == "tabset" && jQuery(window).width() <= 750 ? this.each(function () {
            var r = jQuery(this),
                u = r.data("bs.tabcollapse"),
                f = n.extend({}, t.DEFAULTS, r.data(), typeof i == "object" && i);
            u || r.data("bs.tabcollapse", new t(this, f))
        }) : void 0
    };
    n.fn.tabCollapse.Constructor = t
}(window.jQuery),
    function () {
        "use strict";

        function s(n) {
            t.push(n);
            1 == t.length && e()
        }

        function h() {
            for (; t.length;) t[0](), t.shift()
        }

        function n(n) {
            this.a = i;
            this.b = void 0;
            this.f = [];
            var t = this;
            try {
                n(function (n) {
                    o(t, n)
                }, function (n) {
                    r(t, n)
                })
            } catch (u) {
                r(t, u)
            }
        }

        function c(t) {
            return new n(function (n, i) {
                i(t)
            })
        }

        function u(t) {
            return new n(function (n) {
                n(t)
            })
        }

        function o(n, t) {
            var u, e;
            if (n.a == i) {
                if (t == n) throw new TypeError;
                u = !1;
                try {
                    if (e = t && t.then, null != t && "object" == typeof t && "function" == typeof e) {
                        e.call(t, function (t) {
                            u || o(n, t);
                            u = !0
                        }, function (t) {
                            u || r(n, t);
                            u = !0
                        });
                        return
                    }
                } catch (s) {
                    u || r(n, s);
                    return
                }
                n.a = 0;
                n.b = t;
                f(n)
            }
        }

        function r(n, t) {
            if (n.a == i) {
                if (t == n) throw new TypeError;
                n.a = 1;
                n.b = t;
                f(n)
            }
        }

        function f(n) {
            s(function () {
                if (n.a != i)
                    for (; n.f.length;) {
                        var t = n.f.shift(),
                            u = t[0],
                            f = t[1],
                            r = t[2],
                            t = t[3];
                        try {
                            0 == n.a ? "function" == typeof u ? r(u.call(void 0, n.b)) : r(n.b) : 1 == n.a && ("function" == typeof f ? r(f.call(void 0, n.b)) : t(n.b))
                        } catch (e) {
                            t(e)
                        }
                    }
            })
        }

        function l(t) {
            return new n(function (n, i) {
                function o(i) {
                    return function (r) {
                        f[i] = r;
                        e += 1;
                        e == t.length && n(f)
                    }
                }
                var e = 0,
                    f = [],
                    r;
                for (0 == t.length && n(f), r = 0; r < t.length; r += 1) u(t[r]).c(o(r), i)
            })
        }

        function a(t) {
            return new n(function (n, i) {
                for (var r = 0; r < t.length; r += 1) u(t[r]).c(n, i)
            })
        }
        var e, t = [],
            i;
        e = function () {
            setTimeout(h)
        };
        i = 2;
        n.prototype.g = function (n) {
            return this.c(void 0, n)
        };
        n.prototype.c = function (t, i) {
            var r = this;
            return new n(function (n, u) {
                r.f.push([t, i, n, u]);
                f(r)
            })
        };
        window.Promise || (window.Promise = n, window.Promise.resolve = u, window.Promise.reject = c, window.Promise.race = a, window.Promise.all = l, window.Promise.prototype.then = n.prototype.c, window.Promise.prototype["catch"] = n.prototype.g)
    }(),
    function () {
        function h(n, t) {
            document.addEventListener ? n.addEventListener("scroll", t, !1) : n.attachEvent("scroll", t)
        }

        function a(n) {
            document.body ? n() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function t() {
                document.removeEventListener("DOMContentLoaded", t);
                n()
            }) : document.attachEvent("onreadystatechange", function i() {
                ("interactive" == document.readyState || "complete" == document.readyState) && (document.detachEvent("onreadystatechange", i), n())
            })
        }

        function u(n) {
            this.a = document.createElement("div");
            this.a.setAttribute("aria-hidden", "true");
            this.a.appendChild(document.createTextNode(n));
            this.b = document.createElement("span");
            this.c = document.createElement("span");
            this.h = document.createElement("span");
            this.f = document.createElement("span");
            this.g = -1;
            this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
            this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
            this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
            this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";
            this.b.appendChild(this.h);
            this.c.appendChild(this.f);
            this.a.appendChild(this.b);
            this.a.appendChild(this.c)
        }

        function t(n, t) {
            n.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + t + ";"
        }

        function c(n) {
            var t = n.a.offsetWidth,
                i = t + 100;
            return n.f.style.width = i + "px", n.c.scrollLeft = i, n.b.scrollLeft = n.b.scrollWidth + 100, n.g !== t ? (n.g = t, !0) : !1
        }

        function f(n, t) {
            function i() {
                var n = r;
                c(n) && n.a.parentNode && t(n.g)
            }
            var r = n;
            h(n.b, i);
            h(n.c, i);
            c(n)
        }

        function i(n, t) {
            var i = t || {};
            this.family = n;
            this.style = i.style || "normal";
            this.weight = i.weight || "normal";
            this.stretch = i.stretch || "normal"
        }

        function v() {
            if (null === r)
                if (l() && /Apple/.test(window.navigator.vendor)) {
                    var n = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                    r = !!n && 603 > parseInt(n[1], 10)
                } else r = !1;
            return r
        }

        function l() {
            return null === s && (s = !!document.fonts), s
        }

        function y() {
            if (null === o) {
                var n = document.createElement("div");
                try {
                    n.style.font = "condensed 100px sans-serif"
                } catch (t) { }
                o = "" !== n.style.font
            }
            return o
        }

        function n(n, t) {
            return [n.style, n.weight, y() ? n.stretch : "", "100px", t].join(" ")
        }
        var e = null,
            r = null,
            o = null,
            s = null;
        i.prototype.load = function (i, r) {
            var o = this,
                h = i || "BESbswy",
                c = 0,
                s = r || 3e3,
                y = (new Date).getTime();
            return new Promise(function (i, r) {
                if (l() && !v()) {
                    var p = new Promise(function (t, i) {
                        function r() {
                            (new Date).getTime() - y >= s ? i(Error("" + s + "ms timeout exceeded")) : document.fonts.load(n(o, '"' + o.family + '"'), h).then(function (n) {
                                1 <= n.length ? t() : setTimeout(r, 25)
                            }, i)
                        }
                        r()
                    }),
                        w = new Promise(function (n, t) {
                            c = setTimeout(function () {
                                t(Error("" + s + "ms timeout exceeded"))
                            }, s)
                        });
                    Promise.race([w, p]).then(function () {
                        clearTimeout(c);
                        i(o)
                    }, r)
                } else a(function () {
                    function d() {
                        var n;
                        (n = -1 != a && -1 != v || -1 != a && -1 != p || -1 != v && -1 != p) && ((n = a != v && a != p && v != p) || (null === e && (n = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), e = !!n && (536 > parseInt(n[1], 10) || 536 === parseInt(n[1], 10) && 11 >= parseInt(n[2], 10))), n = e && (a == g && v == g && p == g || a == nt && v == nt && p == nt || a == tt && v == tt && p == tt)), n = !n);
                        n && (l.parentNode && l.parentNode.removeChild(l), clearTimeout(c), i(o))
                    }

                    function it() {
                        if ((new Date).getTime() - y >= s) l.parentNode && l.parentNode.removeChild(l), r(Error("" + s + "ms timeout exceeded"));
                        else {
                            var n = document.hidden;
                            (!0 === n || void 0 === n) && (a = w.a.offsetWidth, v = b.a.offsetWidth, p = k.a.offsetWidth, d());
                            c = setTimeout(it, 50)
                        }
                    }
                    var w = new u(h),
                        b = new u(h),
                        k = new u(h),
                        a = -1,
                        v = -1,
                        p = -1,
                        g = -1,
                        nt = -1,
                        tt = -1,
                        l = document.createElement("div");
                    l.dir = "ltr";
                    t(w, n(o, "sans-serif"));
                    t(b, n(o, "serif"));
                    t(k, n(o, "monospace"));
                    l.appendChild(w.a);
                    l.appendChild(b.a);
                    l.appendChild(k.a);
                    document.body.appendChild(l);
                    g = w.a.offsetWidth;
                    nt = b.a.offsetWidth;
                    tt = k.a.offsetWidth;
                    it();
                    f(w, function (n) {
                        a = n;
                        d()
                    });
                    t(w, n(o, '"' + o.family + '",sans-serif'));
                    f(b, function (n) {
                        v = n;
                        d()
                    });
                    t(b, n(o, '"' + o.family + '",serif'));
                    f(k, function (n) {
                        p = n;
                        d()
                    });
                    t(k, n(o, '"' + o.family + '",monospace'))
                })
            })
        };
        "object" == typeof module ? module.exports = i : (window.FontFaceObserver = i, window.FontFaceObserver.prototype.load = i.prototype.load)
    }();
const WeblySleekUIObserver = new FontFaceObserver("WeblySleek UI"),
    WeblySleekUILightObserver = new FontFaceObserver("WeblySleek UILight"),
    WeblySleekUIBoldObserver = new FontFaceObserver("WeblySleek UIBold"),
    GlyphiconsHalflingsObserver = new FontFaceObserver("Glyphicons Halflings");
typeof blockFonts != "undefined" && blockFonts === !0 || Promise.all([WeblySleekUIObserver.load(), WeblySleekUILightObserver.load(), WeblySleekUIBoldObserver.load(), GlyphiconsHalflingsObserver.load()]).then(function () {
    document.documentElement.className += " fonts-loaded"
});
var arrSearch = [],
    searchKeyword = "",
    resultView = "",
    currentPage = window.location.pathname,
    moreResultsCount = parseInt(1),
    timeDelay = 2;
jQuery(window).on("load", function () {
    try {
        var n = document.querySelectorAll("iframe[data-transfer-object='true']");
        n[0].style.display = "none"
    } catch (t) { }
});
jQuery(document).ready(function () {
    if (typeof HasItemVersionLanguageSelector != "undefined") jQuery("li[class*=country] a").on("click", function (n) {
        n.preventDefault();
        var t = location.protocol + "//" + location.host + jQuery(this).attr("href"),
            i = location.protocol + "//" + location.host + "/" + jQuery(this).attr("data-lang"),
            r = jQuery(this).attr("data-country"),
            u = jQuery(this).attr("data-itemPath"),
            f = jQuery(this).attr("data-lang");
        jQuery.ajax({
            url: HasItemVersionLanguageSelector,
            data: {
                ItemPath: u,
                language: f
            },
            success: function (n) {
                n === "true" || n === !0 ? jQuery.ajax({
                    cache: !1,
                    url: SetCookieLanguageSelector,
                    data: {
                        country: r
                    },
                    success: function () {
                        location.href = t
                    }
                }) : location.href = i
            }
        })
    })
});
jQuery(document).ready(function () {
    function r(n) {
        for (var i, u = window.location.search.substring(1), r = u.split("&"), t = 0; t < r.length; t++)
            if (i = r[t].split("="), i[0] === n) return i[1]
    }
    var i = jQuery("#executive-carousel .item").length,
        t = 1,
        n;
    jQuery("#appendItem").click(function () {
        jQuery(".item").each(function () {
            if (jQuery(this).hasClass("hidden-xs")) return jQuery(this).removeClass("hidden-xs"), jQuery(".item").removeClass("scroll"), jQuery(this).addClass("scroll"), t++ , !1
        });
        jQuery("html,body").animate({
            scrollTop: jQuery(".scroll:first").offset().top
        }, "slow");
        i === t && jQuery("#appendItem").hide()
    });
    jQuery(".btn-filter-close").click(function () {
        jQuery("#myTabContentFilterSrModA").hide(200)
    });
    jQuery(".btn-filter-close").click(function () {
        jQuery("#myTabContentFilterSrModA").hide()
    });
    jQuery(function () {
        function t(t, i, r) {
            var f = jQuery(t).size(),
                u = r,
                e;
            u > f && (u = f);
            jQuery(t + ":lt(" + u + ")").show();
            e = showingResults;
            e = e.replace("xxxx", u);
            e = e.replace("yyyy", f);
            jQuery(i + " .more-results-details").html(e);
            jQuery("#totalResult").html(f);
            jQuery(i).click(function () {
                if (f > u || f === u) {
                    u = u + n <= f ? u + n : f;
                    jQuery(t + ":lt(" + u + ")").show();
                    var r = showingResults;
                    r = r.replace("xxxx", u);
                    r = r.replace("yyyy", f);
                    jQuery(i + " .more-results-details").html(r)
                }
                f === u && (jQuery(".more-results.more-results-b.text-center .more-link-up1").css("display", "none"), jQuery(".more-results.more-results-b.text-center .more-results-details").css("cursor", "auto"))
            })
        }

        function i(t, i, r) {
            var f, e, u;
            t = "#mylist3 div.number" + jQuery("#search-jobs").val();
            jQuery("#search-jobs").val() === "" && (t = "#mylist3 div.box-border");
            f = r;
            e = jQuery(t).size();
            n = r;
            jQuery(t + ":lt(" + f + ")").show();
            u = showingResults;
            u = u.replace("xxxx", f);
            u = u.replace("yyyy", e);
            jQuery(".more-results-c .more-results-details").html(u);
            jQuery("#totalResult").html(e)
        }
        var n;
        jQuery.each({
            candidate: [{
                JobTitle: "Sr Business Analyst - Digital Customer Team",
                JobLocation: "United States",
                JobArea: "Solution Developer"
            }, {
                JobTitle: "Business Inteilligence",
                JobLocation: "California",
                JobArea: "Developer"
            }, {
                JobTitle: "Business Analyst",
                JobLocation: "USA",
                JobArea: "Solution Developer"
            }, {
                JobTitle: ".Net Developer",
                JobLocation: "New York",
                JobArea: "Solution Developer"
            }, {
                JobTitle: "Business Inteilligence (BI) Consultant with Hadoop experience",
                JobLocation: "San Francisco, California",
                JobArea: "Solution Developer"
            }, {
                JobTitle: "Sr Business Analyst - Digital Customer Team",
                JobLocation: "United States",
                JobArea: "Solution Developer"
            }, {
                JobTitle: "Business Inteilligence",
                JobLocation: "California",
                JobArea: "Developer"
            }, {
                JobTitle: "Business Analyst",
                JobLocation: "USA",
                JobArea: "Solution Developer"
            }, {
                JobTitle: ".Net Developer",
                JobLocation: "New York",
                JobArea: "Solution Developer"
            }, {
                JobTitle: "Business Inteilligence (BI) Consultant with Hadoop experience",
                JobLocation: "San Francisco, California",
                JobArea: "Solution Developer"
            }, {
                JobTitle: "Sr Business Analyst - Digital Customer Team",
                JobLocation: "United States",
                JobArea: "Solution Developer"
            }, {
                JobTitle: "Business Inteilligence",
                JobLocation: "California",
                JobArea: "Developer"
            }, {
                JobTitle: "Business Analyst",
                JobLocation: "USA",
                JobArea: "Solution Developer"
            }, {
                JobTitle: ".Net Developer",
                JobLocation: "New York",
                JobArea: "Solution Developer"
            }]
        }.candidate, function (n, t) {
            var i = "<div class='row'><div class='col-md-4 col-xs-12'><span class='job-title'><a href='#'>" + t.JobTitle + "<\/a><\/span><\/div><div class='col-md-4 col-xs-12'><span class='job-location'>" + t.JobLocation + "<\/span><\/div><div class='col-md-4 col-xs-12'><span class='job-location'>" + t.JobArea + "<\/span><\/div><\/div>";
            jQuery(i).appendTo("#candidateData")
        });
        n = 10;
        jQuery(".more-results-c").click(function () {
            var t, i;
            contentSelector = "#mylist3 div.number" + jQuery("#search-jobs").val();
            jQuery("#search-jobs").val() === "" && (contentSelector = "#mylist3 div.box-border");
            t = jQuery(contentSelector).size();
            x = n;
            (t > x || t === x) && (x = x + n <= t ? x + n : t, jQuery(contentSelector + ":lt(" + x + ")").show(), i = showingResults, i = i.replace("xxxx", x), i = i.replace("yyyy", t), n = x, jQuery(".more-results-c .more-results-details").html(i))
        });
        jQuery("#myList2 div.row").length > 0 && t("#myList2 div.row", ".more-results-d", n);
        jQuery("#mylist3 div.number").length > 0 && i("#mylist3 div.number" + jQuery("#search-jobs").val(), ".more-results-c", n)
    });
    window.location.search.indexOf("sparam") > 0 && (n = r("sparam"), n !== null && typeof n != "undefined" && (n.indexOf("+") > -1 && (n = n.replace(/\+/g, " ")), n = decodeURIComponent(n), jQuery(".global-search-form #search").val(n), n.length !== 0 && jQuery(".fa.fa-times1.remove.remove").addClass("removeActive")));
    jQuery(".global-search-b-form").submit(function (n) {
        var f = jQuery(this),
            t = f.children("#search").val(),
            u;
        if (t !== null && t.length === 0) return !1;
        n.preventDefault();
        t = encodeURIComponent(t);
        u = searchPage;
        t = t.replace(/\%20/g, " ");
        t = t.replace("+", "%20");
        var e = t.replace("+", "%20"),
            o = "#q=" + e,
            i = u + o,
            r = window.location.href;
        jQuery(".CoveoQuerySummary div").hasClass("coveo-query-summary-no-results-string") === !0 && jQuery(".coveo-facet-column").css("display", "block");
        r.includes("blogs") ? r.includes("de-de") ? (i = i + "&f:Tag=[Suchergebnisse]", t.length !== 0 && (window.location = i)) : r.includes("nl-nl") ? (i = i + "&f:@avaz95xwebsitetag=[BLOG%20RESULTS]", t.length !== 0 && (window.location = i)) : (i = i + "&f:Tag=[BLOG%20RESULTS]", t.length !== 0 && (window.location = i)) : (i = i + "&f:Tag=[AVANADE.COM]", t.length !== 0 && (window.location = i))
    });
    jQuery(".content-module-G-multiple .nav-tabs ").tabCollapse()
});
jQuery(document).ready(function (n) {
    function i() {
        var u, i, r;
        n(".blog-Search-B.search-result-module-B").length > 0 && (u = n(".blog-Search-B .nav.nav-pills.nav-stacked li").length, u > 0 && (n(".blog-Search-B .nav.nav-pills.nav-stacked li a").click(function () {
            var i = n(this),
                r = n(".blog-Search-B .nav.nav-pills.nav-stacked li").index(i.parent());
            !disableBrowserStorage && sessionStorage && sessionStorage.setItem(t + "-searchb", r)
        }), !disableBrowserStorage && sessionStorage && sessionStorage.getItem(t + "-searchb") !== null && (i = sessionStorage.getItem(t + "-searchb"), i++ , r = n(".blog-Search-B .nav.nav-pills.nav-stacked li").length, r !== 1 && i <= n(".blog-Search-B .nav.nav-pills.nav-stacked li").length && (n(".blog-Search-B .nav.nav-pills.nav-stacked li.active").removeClass("active"), n(".blog-Search-B .nav.nav-pills.nav-stacked li:nth-child(" + i + ")").addClass("active")), r !== 1 && i <= n(".blog-Search-B .blog-Search-Result div").length && (n(".blog-Search-B .blog-Search-Result div.active").removeClass("active"), n(".blog-Search-B .blog-Search-Result div.in").removeClass("in"), n(".blog-Search-B .blog-Search-Result div:nth-child(" + i + ")").addClass("active"), n(".blog-Search-B .blog-Search-Result div:nth-child(" + i + ")").addClass("in")))))
    }
    var t = window.location.pathname;
    n.when(i()).done(function () {
        ImageCenterAlignent()
    })
});
jQuery(document).ready(function (n) {
    n("section a").each(function () {
        var i = n(this),
            t = i.attr("href"),
            r;
        typeof t != "undefined" && t !== null && t.length > 0 && t.indexOf("/") !== 0 && t.indexOf(".avanade.") === -1 && t.indexOf(location.hostname) === -1 && t.indexOf("#") !== 0 && t.indexOf("sip") !== 0 && t.indexOf("tel") !== 0 && t.indexOf("mailto:") !== 0 && t.indexOf("javascript:") !== 0 && (r = i.attr("onclick"), typeof r != "undefined" && i.attr("target", "_blank"))
    })
});
typeof InitializePopulateArticleComments != "undefined" && InitializePopulateArticleComments();
typeof Initializesetcookie != "undefined" && Initializesetcookie();
typeof InitializegetCookie != "undefined" && InitializegetCookie();
typeof InitializeUTM != "undefined" && InitializeUTM();
typeof InitializeTabbedExperienceEditor != "undefined" && InitializeTabbedExperienceEditor();
var listeners = [],
    doc = window.document,
    MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
    observer;
window.ready = ready;
typeof InitializeLoadHeroA != "undefined" && InitializeLoadHeroA();
typeof InitializeLoadHeroSmallLarge != "undefined" && InitializeLoadHeroSmallLarge();
typeof InitializeLoadHeroSmallSlide != "undefined" && InitializeLoadHeroSmallSlide();
typeof InitializeLoadHeroModuleTabbed != "undefined" && InitializeLoadHeroModuleTabbed();
jQuery(document).ready(function (n) {
    n(window).width() < 751 && (n(".shareOption").click(function () {
        n(".closeOption").hide()
    }), n(".close").click(function () {
        n(".closeOption").show()
    }))
});
typeof InitializeLoadContentGExpEdit != "undefined" && InitializeLoadContentGExpEdit();
typeof InitializeLoadContentJExpEdit != "undefined" && InitializeLoadContentJExpEdit();
typeof InitializeLoadContentJModule != "undefined" && InitializeLoadContentJModule();
jQuery(document).ready(function () {
    typeof itemId != "undefined" && typeof contextLang != "undefined" && typeof twitterDictionary != "undefined" && typeof facebookDictionary != "undefined" && typeof linkedInDictionary != "undefined" && typeof Xing != "undefined" && typeof viadeo != "undefined" && typeof emailDictionary != "undefined" && typeof currentUrl != "undefined" && typeof GetEmailJsonDataSendMailer != "undefined" && typeof subject != "undefined" && (jQuery(".twitter-sidebar-count").click(function () {
        jQuery.ajax({
            url: "/api/sitecore/CDTOCMEditor/SendRequestToUpdateItemFromCDServer",
            type: "POST",
            data: {
                itemId: itemId,
                fieldType: "twitter",
                contextLanguage: contextLang
            },
            success: function (n) {
                n.indexOf("0") > -1 || jQuery(".tweet").html(twitterDictionary + " (" + n + ")")
            }
        })
    }), jQuery(".facebook-sidebar-count").click(function () {
        jQuery.ajax({
            url: "/api/sitecore/CDTOCMEditor/SendRequestToUpdateItemFromCDServer",
            type: "POST",
            data: {
                itemId: itemId,
                fieldType: "facebook",
                contextLanguage: contextLang
            },
            success: function (n) {
                n.indexOf("0") > -1 || jQuery(".fb").html(facebookDictionary + " (" + n + ")")
            }
        })
    }), jQuery(".linkedin-sidebar-count").click(function () {
        jQuery.ajax({
            url: "/api/sitecore/CDTOCMEditor/SendRequestToUpdateItemFromCDServer",
            type: "POST",
            data: {
                itemId: itemId,
                fieldType: "linkedin",
                contextLanguage: contextLang
            },
            success: function (n) {
                n.indexOf("0") > -1 || jQuery(".linkedin-span-count").html(linkedInDictionary + " (" + n + ")")
            }
        })
    }), jQuery(".xing-sidebar-count").click(function () {
        jQuery.ajax({
            url: "/api/sitecore/CDTOCMEditor/SendRequestToUpdateItemFromCDServer",
            type: "POST",
            data: {
                itemId: itemId,
                fieldType: "xing",
                contextLanguage: contextLang
            },
            success: function (n) {
                n.indexOf("0") > -1 || jQuery(".xingShare").html(Xing + " (" + n + ")")
            }
        })
    }), jQuery(".viadeo-sidebar-count").click(function () {
        jQuery.ajax({
            url: "/api/sitecore/CDTOCMEditor/SendRequestToUpdateItemFromCDServer",
            type: "POST",
            data: {
                itemId: itemId,
                fieldType: "viadeo",
                contextLanguage: contextLang
            },
            success: function (n) {
                n.indexOf("0") > -1 || jQuery(".viadeoShare").html(viadeo + " (" + n + ")")
            }
        })
    }), jQuery(".article-sidebar-email").click(function () {
        jQuery.ajax({
            url: "/api/sitecore/CDTOCMEditor/SendRequestToUpdateItemFromCDServer",
            type: "POST",
            data: {
                itemId: itemId,
                fieldType: "email",
                contextLanguage: contextLang
            },
            success: function (n) {
                n.indexOf("0") > -1 || jQuery(".emailShare").html(emailDictionary + " (" + n + ")")
            }
        })
    }), jQuery(".contentk-email").click(function (n) {
        n.preventDefault();
        jQuery.ajax({
            url: GetEmailJsonDataSendMailer,
            type: "POST",
            data: {
                datasourceid: itemId,
                _currUrl: currentUrl
            },
            success: function (n) {
                var t = n.Subject === "" ? " " : n.Subject,
                    i, r;
                return t = encodeURIComponent(t), i = encodeURIComponent(n.Body), r = "mailto:?subject=" + t + "&body=" + i + " - " + currentUrl, window.location.href = r, !1
            }
        })
    }), jQuery(".article-sidebar-email").click(function (n) {
        n.preventDefault();
        sub = encodeURIComponent(subject);
        var t = "mailto:?subject=" + sub + "&body= - " + currentUrl;
        window.location.href = t
    }))
});
typeof InitializeLoadFilterAModule != "undefined" && InitializeLoadFilterAModule();
typeof InitializeLoadLanguageSelector != "undefined" && InitializeLoadLanguageSelector();
typeof InitializeLoadSurveyHTML != "undefined" && InitializeLoadSurveyHTML();
typeof InitializeLoadTabbedAModuleExpEdit != "undefined" && InitializeLoadTabbedAModuleExpEdit();
typeof InitializeLoadTabbedDModuleExpEdit != "undefined" && InitializeLoadTabbedDModuleExpEdit();
typeof InitializeLoadTabbedEModuleExpEdit != "undefined" && InitializeLoadTabbedEModuleExpEdit();
typeof InitializeLoadTabbedGModuleExpEdit != "undefined" && InitializeLoadTabbedGModuleExpEdit();
typeof InitializeLoadTabbedA != "undefined" && InitializeLoadTabbedA();
typeof InitializeTabclick != "undefined" && InitializeTabclick();
typeof Initializeloadmorepostlist != "undefined" && Initializeloadmorepostlist();
typeof InitializeHideFooterSubscribe != "undefined" && InitializeHideFooterSubscribe();
typeof InitializebrightcoveListPlayer != "undefined" && InitializebrightcoveListPlayer();
typeof InitializebrightcoveVideo != "undefined" && InitializebrightcoveVideo();
typeof InitializebrightcovePlaylistvideo != "undefined" && InitializebrightcovePlaylistvideo();
typeof InitializebrightcovePlayer != "undefined" && InitializebrightcovePlayer();
jQuery(document).ready(function () {
    jQuery(document).on("click", "#re-take-assessment", function () {
        typeof reTakeAssessment != "undefined" && reTakeAssessment()
    })
});
typeof InitializeTabF != "undefined" && InitializeTabF();
typeof InitializefetchBrightcovePlayer != "undefined" && InitializefetchBrightcovePlayer(),
    function () {
        function n() {
            this.parentNode && this.parentNode.removeChild(this)
        }
        Element.prototype.remove || (Element.prototype.remove = n);
        Text && !Text.prototype.remove && (Text.prototype.remove = n)
    }();
typeof InitializeblogFeaturedModule != "undefined" && InitializeblogFeaturedModule();
LoadedMarketoForm = !1;
jQuery("body").on("load", ".lazy-img-load", refreshIndicators);
jQuery(".lazy-img-load").on("load", refreshIndicators);
jQuery(document).on("scroll", refreshIndicators);
jQuery(document).on("resize", refreshIndicators);
jQuery(window).on("orientationChange", refreshIndicators);
jQuery(document).on("click", refreshIndicators);
jQuery(document).on("load", refreshIndicators);
jQuery(document).on("click", LazyLoadImages);
jQuery(document).on("scroll", LazyLoadImages);
refreshIndicators();
LazyLoadJavascriptLibrariesCounter = 0;
jQuery(document).one("scroll", LazyLoadJavascriptLibraries);
jQuery(document).one("click", LazyLoadJavascriptLibraries);
LoadSimpleDTOFunctionalityTriggered = !1;
jQuery(window).one("scroll", LoadSimpleDTOFunctionality);
jQuery(window).one("click", LoadSimpleDTOFunctionality);
typeof InvokeSelectionSharer != "undefined" && InvokeSelectionSharer();
jQuery("body").on("click", ".coveo-search-button, .search-btn", function () {
    var n = !1;
    jQuery(".magic-box-highlight-container").text().length > 0 ? n = !0 : jQuery("#search").val().length > 0 && (n = !0);
    n === !0 && searchGoalTrigger()
});
jQuery("body").on("click", ".btn.rebrand-hero-btn", function () {
    var n = jQuery(".rebrand-hero-btn").attr("href");
    typeof n != "undefined" && n.includes("#mktoForm") && formGoalTrigger()
});
window.addEventListener("keyup", function (n) {
    if (n.keyCode === 13) {
        var t = !1;
        jQuery(".magic-box-highlight-container").text().length > 0 ? t = !0 : jQuery(".search-input").val().length > 0 && (t = !0);
        t === !0 && searchGoalTrigger()
    }
}, !1);
jQuery(".global-search-form").submit(function () {
    jQuery("#search").val().length > 0 && searchGoalTrigger()
});
jQuery(document).ready(function () {
    jQuery("body").on("click", ".clickGoalEvent , a.vjs-social-share-link", function () {
        jQuery.ajax({
            url: "/api/sitecore/customgoal/TriggerSocialShareGoal",
            dataType: "json",
            type: "Get",
            data: {
                GoalId: "{95A68C82-E1E7-44A1-9E49-86718142FDCF}"
            },
            success: function () { },
            complete: function () { }
        })
    });
    jQuery("body").on("click", ".interactiveRichContent", function () {
        jQuery.ajax({
            url: "/api/sitecore/customgoal/interactiveRichContentGoal",
            dataType: "json",
            type: "Get",
            data: {
                GoalId: "{AE253676-938F-47CD-AA10-E29F6EC27462}"
            },
            success: function () { },
            complete: function () { }
        })
    });
    jQuery("body").on("click", "#playListPlayer .play-btn, .vjs-playlist-item", function () {
        WatchVideoGoal()
    })
});
jQuery(document).ready(function () {
    var i = getCookie("Ava_PageVisitCount"),
        o = parseInt(i),
        n = 1,
        r, t;
    if ((o === "NaN" || "undefined" && i < 1) && (t = new Date, setCookiePageAgnostic("Ava_PageVisitCount", n + "^" + t, 1)), i.toString().indexOf("^") > -1 && (r = i.split("^"), r.length === 2)) {
        var u = r[0],
            f = r[1],
            t = new Date;
        u >= 1 && (n = ++u, setCookiePageAgnostic("Ava_PageVisitCount", n + "^" + f, 1));
        var s = new Date(f),
            h = t - s,
            e = h / 6e4;
        parseInt(e) > 60 && (n = 1, t = new Date, setCookiePageAgnostic("Ava_PageVisitCount", n + "^" + t, 1));
        parseInt(e) < 60 && u > 5 && pageViewGoalTrigger()
    }
});
win_width = screen.width;
jQuery("#blog-main-nav li").click(function () {
    jQuery("#blog-main-nav li.active").removeClass("active");
    jQuery(this).addClass("active")
});
jQuery("body").on("click", ".social-roll", function (n) {
    n.preventDefault()
});
jQuery('a[data-toggle="tab"]').on("shown.bs.tab", function () {
    var n = jQuery(".tab-pane.active .check-options li").length;
    n >= 10 && n <= 0 ? jQuery(".tab-pane.active").parent().removeClass("column-two").addClass("column-one") : n >= 10 && n <= 20 ? jQuery(".tab-pane.active").parent().removeClass("column-two").addClass("column-two") : n >= 20 && jQuery(".tab-pane.active").parent().removeClass("column-two").addClass("column-three")
});
jQuery(".reset-filter").on("click", function () {
    jQuery(".css-checkbox").prop("checked", !1)
});
jQuery(".btn-reset-filter").on("click", function () {
    jQuery(".css-checkbox").prop("checked", !1)
});
if (windowLength = screen.width, jQuery(document).ready(function () {
    function n(n) {
        jQuery(".content-module-J-New .panel-group").on("shown.bs.collapse", ".panel-default", function () {
            jQuery("html,body").animate({
                scrollTop: jQuery(this).offset().top - n
            }, 500)
        })
    }

    function t(n) {
        var t, i, r = n;
        return t = document.createElement("div"), t !== null && (t.style.color = "rgb(31, 41, 59)"), document.body.appendChild(t), i = document.defaultView ? document.defaultView.getComputedStyle(t, null).color : t.currentStyle.color, i = i.replace(/ /g, ""), document.body.removeChild(t), i !== "rgb(31,41,59)" ? !0 : !1
    }
    if (jQuery(".intrapage-nav")) n(130);
    else jQuery(".content-module-J-New .panel-group").on("shown.bs.collapse", ".panel-default", function () {
        n(125)
    });
    jQuery(".carousel").on("touchstart", function (n) {
        var t = n.originalEvent.touches[0].pageX;
        jQuery(this).one("touchmove", function (n) {
            var i = n.originalEvent.touches[0].pageX;
            Math.floor(t - i) > 5 ? jQuery(this).carousel("next") : Math.floor(t - i) < -5 && jQuery(this).carousel("prev")
        });
        jQuery(".carousel").on("touchend", function () {
            jQuery(this).off("touchmove")
        })
    });
    jQuery(function () {
        var n = t();
        n === !0 ? jQuery(".rebrand").addClass("moz-contrast") : jQuery(".rebrand").removeClass("moz-contrast")
    });
    jQuery(".skip").click(function () {
        var n = "#" + this.href.split("#")[1];
        jQuery(n).attr("tabindex", -1).on("blur focusout", function () {
            jQuery(this).removeAttr("tabindex")
        }).focus()
    });
    win_width > 750 && (jQuery("#banner-section .carousel").bind("slide.bs.carousel", function () {
        jQuery(this).find(".accessbuilt").focus();
        jQuery(this).find(".rebrandAccessBuilt").focus()
    }), jQuery("#banner-section .carousel").bind("slid.bs.carousel", function () {
        jQuery(this).find(".accessbuilt").focus();
        jQuery(this).find(".rebrandAccessBuilt").focus()
    }));
    jQuery(document).keyup(function (n) {
        n.which == 27 && jQuery(".popover.top.in").css("display", "none ")
    });
    jQuery(document).keyup(function (n) {
        n.which == 27 && jQuery(".popover.bottom.in").css("display", "none ")
    });
    jQuery(".navbar-nav .dropdown-menu").on("keyup", function (n) {
        n.keyCode == 27 && (jQuery(this).parent().children().css("outline", "none"), jQuery(this).removeClass("active").css({
            opacity: "",
            visibility: ""
        }));
        jQuery(".navbar-default.main-navigation .navbar-brand1").on("focus", function () {
            jQuery(".dropdown-menu").css({
                opacity: "",
                visibility: ""
            })
        })
    });
    jQuery(".navbar-nav .dropdown-toggle.ga-track").on("focus", function () {
        jQuery(this).removeClass("reb-nav");
        jQuery(this).next().find("dropdown-menu").removeClass("active");
        jQuery(".navbar-nav .dropdown-menu.active").removeClass("active");
        jQuery(this).nextAll(".dropdown-menu").addClass("active");
        jQuery(".dropdown-menu").css({
            opacity: "0",
            visibility: "hidden"
        });
        jQuery(this).nextAll(".dropdown-menu.active").css({
            opacity: "1",
            visibility: "visible"
        });
        jQuery(this).nextAll(".dropdown-menu.active")
    });
    jQuery("#main-navbar ul.navbar-nav li:last-child ul.dropdown-menu.second-dropdown li:last-child").focusout(function () {
        jQuery(".dropdown-menu").css({
            opacity: "",
            visibility: ""
        })
    });
    jQuery("#main-navbar ul.navbar-nav li:last-child ul.dropdown-menu.second-dropdown li:last-child").focusout(function () {
        jQuery(".navbar-nav .dropdown-menu.active").removeClass("active");
        jQuery(".dropdown-menu").css({
            opacity: "",
            display: ""
        })
    });
    setTimeout(function () {
        jQuery(".dropdown-menu.second-dropdown.active").removeClass("active")
    }, 500);
    jQuery(".rebrand .main-navigation #main-navbar>ul.navbar-nav >li >a").on("focus", function () {
        jQuery(".navbar-nav .dropdown-menu.active").removeClass("active");
        jQuery(this).nextAll(".dropdown-menu").addClass("active");
        jQuery(".dropdown-menu").css({
            opacity: "0",
            visibility: "hidden"
        });
        jQuery(this).nextAll(".dropdown-menu.active").css({
            opacity: "1",
            visibility: "visible"
        })
    });
    jQuery(".navbar-nav .dropdown-toggle.ga-track").on("keyup", function (n) {
        n.keyCode == 27 && (jQuery(this).addClass("reb-nav").css("outline", "none "), jQuery(".dropdown-menu").removeClass("active").css({
            opacity: "",
            visibility: ""
        }))
    });
    jQuery(".navbar-default.main-navigation .navbar-brand1").on("focus", function () {
        jQuery(".navbar-nav .dropdown-menu.active").removeClass("active")
    });
    document.body.addEventListener("mousedown", function () {
        document.body.classList.add("using-mouse")
    });
    document.body.addEventListener("keydown", function () {
        document.body.classList.remove("using-mouse")
    })
}), jQuery(document).ready(function () {
    function t(n, t) {
        t || (t = window.location.href.toLowerCase());
        n = n.replace(/[\[\]]/g, "\\jQuery&");
        var r = new RegExp("[?&]" + n + "(=([^&#]*)|&|#|jQuery)"),
            i = r.exec(t);
        return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
    }

    function k() {
        return navigator.platform.indexOf("iPhone") != -1 || navigator.platform.indexOf("iPad") != -1
    }
    var o, i, u, f, s, h, c, l, a, e, n, r, w, v, y, b, p;
    jQuery("body").on("click", ".img-Infographic-Modal .modal-dialog", function (n) {
        if (jQuery(n.target).hasClass("modal-dialog")) {
            var t = jQuery(n.target.parentElement).attr("id");
            jQuery("#modalPlaylistPlayer-").remove()
        }
    });
    jQuery(".img-modal").on("hidden.bs.modal", function () {
        jQuery("#modalPlayer").remove();
        jQuery("#modalPlaylistPlayer-").remove()
    });
    o = jQuery(".intrapage-nav ul").height();
    jQuery(".intrapage-nav ul li, .intrapage-nav .navbar-collapse .contact-btn").not(".intrapage-nav .navbar-collapse .contact-btn li").height(o);
    setTimeout(function () {
        jQuery(".one-tab .panel-heading a").removeAttr("href data-toggle")
    }, 500);
    jQuery("section.cross-nav-module .container .row.rebrand-title").parent().parent().addClass("present-rebrand");
    i = jQuery(".main-navigation");
    u = 0;
    i.length != 0 && (u = i.offset().top);
    jQuery(window).scroll(function () {
        var n = jQuery(this).scrollTop();
        n >= u ? i.addClass("shrinkedchange") : i.removeClass("shrinkedchange");
        jQuery(document).scrollTop() > 95 ? (jQuery("header-top").addClass("shrinkedchange"), jQuery("nav.main-navigation").addClass("shrinkedchange"), jQuery("nav:not(.intrapage-nav)").addClass("shrinkedchange"), jQuery(".intrapage-nav").addClass("shrinkedchange"), jQuery(".mainHeader").addClass("shrinkedchange")) : (jQuery(".header-top").removeClass("shrinkedchange"), jQuery("nav.main-navigation").removeClass("shrinkedchange"), jQuery(".intrapage-nav").removeClass("shrinkedchange"), jQuery("nav").removeClass("shrinkedchange"), jQuery(".mainHeader").removeClass("shrinkedchange"))
    });
    jQuery(".rebrand .top-menu ul.nav > li").append('<i class="divider"><\/i>');
    jQuery.fn.outerHTML = function (n) {
        return n ? this.before(n).remove() : jQuery(".NavigationModal").append(this.eq(0).clone()).html()
    };
    jQuery("#main-navbar").append(jQuery("#abc").outerHTML());
    jQuery.fn.globleLanguage = function (n) {
        return n ? this.before(n).remove() : jQuery(".dropdown.choose-language ul").append(this.eq(0).clone()).html()
    };
    jQuery(".dropdown-menu.mobile-view.scrollbox3").append(jQuery("#abc").globleLanguage());
    jQuery("#main-navbar .dropdown a.dropdown-toggle,.NavigationModal ul.navbar-nav li.dropdown a").click(function () {
        window.location = this.href
    });
    jQuery(".choose-language").click(function () {
        typeof LazyLoadImages != "undefined" && LazyLoadImages();
        jQuery(".selector-bg").toggle();
        jQuery("body").toggleClass("modal-open")
    });
    jQuery(".selector-bg").click(function () {
        jQuery(".selector-bg").hide();
        jQuery("body").removeClass("modal-open")
    });
    jQuery("body").click(function () {
        jQuery(".dropdown-menu.second-dropdown").removeAttr("style")
    });
    jQuery("input").on("keyup", function () {
        this.value.length > 0 ? jQuery(this).parent().find(".remove").addClass("removeActive") : jQuery(this).parent().find(".remove").removeClass("removeActive")
    });
    jQuery(".remove").on("click", function (n) {
        n.preventDefault();
        jQuery(this).parent().find("input").val("");
        jQuery(this).parent().find(".remove").removeClass("removeActive")
    });
    if (jQuery(document).bind("keyup", function (n) {
        jQuery("body").hasClass("modal-open") || (n.keyCode == 39 ? jQuery("a.carousel-control.right").trigger("click") : n.keyCode == 37 && jQuery("a.carousel-control.left").trigger("click"))
    }), window.location.href.toLowerCase().indexOf("videoid") != -1 && (f = t("videoid"), n = "SJXTqvOM", n !== undefined && n.length !== 0 && (r = "https://players.brightcove.net/2103045685001/" + n + "_default/index.min.js", f != null && jQuery.getScript(r, function () {
        jQuery.ajax({
            url: GetVideoFromQuerystring,
            type: "POST",
            data: {
                videoID: f
            },
            success: function (n) {
                jQuery(".video-infographic-width").html(n);
                jQuery("#Modal-D").modal("show")
            }
        })
    }))), !disableBrowserStorage && sessionStorage && (window.location.href.indexOf("utm_campaign") != -1 && (s = t("utm_campaign"), sessionStorage.setItem("utm_campaign", s)), window.location.href.indexOf("utm_source") != -1 && (h = t("utm_source"), sessionStorage.setItem("utm_source", h)), window.location.href.indexOf("utm_medium") != -1 && (c = t("utm_medium"), sessionStorage.setItem("utm_medium", c)), window.location.href.indexOf("utm_content") != -1 && (l = t("utm_content"), sessionStorage.setItem("utm_content", l)), window.location.href.indexOf("utm_term") != -1 && (a = t("utm_term"), sessionStorage.setItem("utm_term", a))), window.location.href.toLowerCase().indexOf("playlistid") != -1 && (e = t("playlistid"), n = "ryfVT8tf", n !== undefined && n.length !== 0 && (r = "https://players.brightcove.net/2103045685001/" + n + "_default/index.min.js", e != null && jQuery.getScript(r, function () {
        jQuery.ajax({
            url: GetPlaylistVideoFromQuerystring,
            type: "POST",
            data: {
                playlistId: e
            },
            success: function (n) {
                jQuery(".video-infographic-width").html(n);
                jQuery("#Modal-D #brightcove-playlist").hide();
                jQuery("#Modal-D").modal("show")
            }
        })
    })), jQuery(".content-module-L-video "))) {
        jQuery(".content-module-L-video #brightcove-playlist");
        jQuery(".content-module-L-video #brightcove-playlist").hide();
        w = jQuery(".content-module-L-video .vjs-playlist").clone();
        v = jQuery("#Modal-D").modal("show");
        listp = document.getElementById("brightcove-playlist");
        jQuery("#Modal-D #brightcove-playlist").hide();
        v.append(listp);
        jQuery("#Modal-D").on("click", ".closeOption", function () {
            jQuery("#Modal-D #brightcove-playlist").remove();
            jQuery(".content-module-L-video #brightcove-playlist").show();
            jQuery(".content-module-L-video").append(listp)
        })
    }
    jQuery("#imagepreview").height(jQuery(window).height() - 200);
    jQuery("#imagepreview-expanded").height(jQuery(window).height() - 200);
    y = win_width - 56;
    jQuery(".search-frm1").width(y);
    jQuery("body").on("click", ".play-btn", function () {
        var t = jQuery(this).attr("data-theVideo"),
            n = jQuery(this).attr("data-player-key"),
            i, r;
        n !== undefined && n.length !== 0 && (i = "https://players.brightcove.net/2103045685001/" + n + "_default/index.min.js", r = jQuery(this).attr("class").indexOf("forcontent-module-D"), t !== null && r <= 0 && !jQuery(this).hasClass("cldtlnt") && jQuery.getScript(i, function () {
            jQuery.ajax({
                url: GetVideoUrl,
                type: "POST",
                data: {
                    ID: t
                },
                success: function (n) {
                    var t = jQuery(n);
                    jQuery(".video-infographic-width").html(t);
                    jQuery("#Modal-D").modal("show")
                }
            })
        }))
    });
    jQuery("body").on("click", ".rebrand-video", function () {
        var t = jQuery(this).attr("data-theVideo"),
            n = jQuery(this).attr("data-player-key"),
            i, r;
        n !== undefined && n.length !== 0 && (i = "https://players.brightcove.net/2103045685001/" + n + "_default/index.min.js", r = jQuery(this).attr("class").indexOf("forcontent-module-D"), t !== null && r <= 0 && jQuery.getScript(i, function () {
            jQuery.ajax({
                url: GetVideoUrl,
                type: "POST",
                data: {
                    ID: t
                },
                success: function (n) {
                    var t = jQuery(n);
                    jQuery(".video-infographic-width").html(t);
                    jQuery("#Modal-D").modal("show")
                }
            })
        }))
    });
    jQuery("body").on("click", ".modalVideo", function () {
        var t = jQuery(this).attr("data-theVideo"),
            r = jQuery(this).attr("class").indexOf("forcontent-module-D"),
            n = jQuery(this).attr("data-player-key"),
            i;
        n !== undefined && n.length !== 0 && (i = "https://players.brightcove.net/2103045685001/" + n + "_default/index.min.js", t !== null && r <= 0 && jQuery.getScript(i, function () {
            jQuery.ajax({
                url: GetVideoUrl,
                type: "POST",
                data: {
                    ID: t
                },
                success: function (n) {
                    var t = jQuery(n);
                    jQuery(".video-infographic-width").html(t);
                    jQuery("#Modal-D").modal("show")
                }
            })
        }))
    });
    b = jQuery("#Brightcove-modifications");
    jQuery(".forcontent-module-D").click(function () {
        var n = jQuery(this),
            i = n.attr("data-theVideo"),
            u = n.attr("data-videofield"),
            f = n.attr("data-playerfield"),
            t = jQuery(this).attr("data-player-key"),
            r;
        t !== undefined && t.length !== 0 && (r = "https://players.brightcove.net/2103045685001/" + t + "_default/index.min.js", i !== null && jQuery.getScript(r, function () {
            jQuery.ajax({
                url: GetVideoUsingParam,
                type: "POST",
                data: {
                    ID: i,
                    videofield: u,
                    playerfield: f
                },
                success: function (t) {
                    var u = n.parent().parent().parent().find(".replacevideo"),
                        f = jQuery(t),
                        i, r;
                    u.html(f);
                    i = n.parent().parent().parent().find("#forvideo");
                    i.show();
                    r = n.parent().parent().parent().find("#beforevideo");
                    r.hide()
                }
            })
        }))
    });
    jQuery(window).resize(function () {
        var n = win_width - 56;
        jQuery(".search-frm1").width(n)
    });
    jQuery(".secondery-menu button").on("click", function () {
        jQuery(".secondery-menu button").removeClass("active");
        jQuery(this).addClass("active")
    });
    tabbedC(jQuery(".tabmoduleC"), !1);
    jQuery("#myCarousel").on("swiperight", function () {
        jQuery(this).carousel("prev")
    });
    jQuery("#myCarousel").on("swipeleft", function () {
        jQuery(this).carousel("next")
    });
    if (k()) jQuery("#main-navbar .dropdown").on("show.bs.dropdown", function () {
        jQuery(this).siblings(".open").removeClass("open").find("#main-navbar a.dropdown-toggle").attr("data-toggle", "dropdown");
        jQuery(this).find("#main-navbar a.dropdown-toggle").removeAttr("data-toggle")
    });
    jQuery(".dropdown-check-list ul.items li a").on("click", function () {
        jQuery("#list3 span").html(jQuery(this).html());
        jQuery(".dropdown-check-list.visible").removeClass("visible")
    });
    try {
        jQuery("body").highlighter()
    } catch (d) {
        console.log()
    }
    jQuery(".content-section").addClass("col-md-10 col-sm-10");
    jQuery(".testimonial-module-A,.tabbed-module-E,.tabbed-module-B,.testimonial-section").removeClass("col-md-10 col-sm-10");
    jQuery(".carousel").carousel({
        interval: !1
    });
    jQuery(".carousel").carousel("pause");
    jQuery(".carousel").on("swiperight", function () {
        jQuery(this).carousel("prev");
        var n = document.getElementsByClassName("left carousel-control");
        CarouselOrSwiperDirection = n;
        CarouselSwiperGifActivator(CarouselOrSwiperDirection)
    });
    jQuery(".carousel").on("swipeleft", function () {
        jQuery(this).carousel("next");
        var n = document.getElementsByClassName("right carousel-control");
        CarouselOrSwiperDirection = n;
        CarouselSwiperGifActivator(CarouselOrSwiperDirection)
    });
    jQuery("#main-navbar .nav li").on("click", function () {
        jQuery("#main-navbar .nav li").removeClass("active");
        jQuery(this).addClass("active")
    });
    jQuery(".top-menu .nav.navbar-nav li").on("click", function () {
        jQuery(".top-menu .nav.navbar-nav li").removeClass("active");
        jQuery(this).addClass("active")
    });
    p = window.location.href;
    p.indexOf("cloudtalent") > -1 && jQuery("#main-navbar ul.nav li.dropdown").hover(function () {
        jQuery(this).find(".dropdown-menu").stop(!0, !0).delay(120).fadeIn(500)
    }, function () {
        navigationflag = navigationflag - 1;
        jQuery(this).find(".dropdown-menu").stop(!0, !0).delay(130).fadeOut(500)
    })
}), jQuery(document).ready(function () {
    function i() {
        var n = jQuery(document).scrollTop();
        jQuery(".intrapage-nav ul.navbar-nav li a, .intrapage-nav ul.contact-btn li a").each(function () {
            var i = jQuery(this),
                r = i.attr("href").split("#", 2),
                u = jQuery("." + r[1]),
                n = u.position(),
                t = jQuery(window).scrollTop();
            t >= 600 ? jQuery(".intrapage-nav").addClass("fixed") : jQuery(".intrapage-nav").removeClass("fixed");
            typeof n != "undefined" && t > n.top - 150 && (jQuery(".intrapage-nav ul.navbar-nav li a, .intrapage-nav ul.contact-btn li a").removeClass("active"), jQuery(this).addClass("active"))
        })
    }
    var t, n;
    if (win_width < 751) {
        setTimeout(function () {
            jQuery(".panel-group").on("shown.bs.collapse", function () {
                var t = jQuery(this).find("a[data-toggle=collapse]:not(.collapsed)"),
                    i = t.attr("href");
                n(i)
            })
        }, 500);

        function n(n) {
            jQuery("html, body").animate({
                scrollTop: jQuery(n).offset().top - 150
            }, 1500)
        }
        jQuery(".content-module-I.JobSearchByLocation h4").on("click", function () {
            jQuery(this).next().css("display") == "none" ? (jQuery(this).next().addClass("contentAccordian"), jQuery(".content-module-I ul").hide(), jQuery(".content-module-I h4").removeClass("contentAccordian"), jQuery(".content-module-I ul").hasClass("contentAccordian") && (jQuery(".contentAccordian").show(), jQuery(this).addClass("contentAccordian"))) : (jQuery(this).next().hide(), jQuery(this).removeClass("contentAccordian"));
            jQuery(this).next().removeClass("contentAccordian")
        });
        jQuery(".content-module-I .sitemap-blog h4").on("click", function (n) {
            n.preventDefault();
            jQuery(".navbar-default.blog-nav").addClass("navbar-fixed-top shrinkedchange-nav shrinkedchange");
            var t = jQuery(".accordianBlog").height();
            jQuery(this).next().css("display") == "none" ? (jQuery(this).next().addClass("contentAccordian"), jQuery(".content-module-I ul").hide(), jQuery(".content-module-I h4").removeClass("contentAccordian"), jQuery(".content-module-I ul").hasClass("contentAccordian") && (jQuery(".contentAccordian").show(), jQuery(this).addClass("contentAccordian"))) : (jQuery(this).next().hide(), jQuery(this).removeClass("contentAccordian"));
            jQuery(this).next().removeClass("contentAccordian");
            jQuery("html, body").animate({
                scrollTop: jQuery(this).offset().top - t
            }, "slow", function () { })
        });
        jQuery(".content-module-I .sitemap-dotcom h4").on("click", function (n) {
            n.preventDefault();
            var t = jQuery(".accordianBlog").height();
            jQuery(this).next().css("display") == "none" ? (jQuery(this).next().addClass("contentAccordian"), jQuery(".content-module-I ul").hide(), jQuery(".content-module-I h4").removeClass("contentAccordian"), jQuery(".content-module-I ul").hasClass("contentAccordian") && (jQuery(".contentAccordian").show(), jQuery(this).addClass("contentAccordian"))) : (jQuery(this).next().hide(), jQuery(this).removeClass("contentAccordian"));
            jQuery(this).next().removeClass("contentAccordian")
        });
        jQuery(".content-module-I ul").slideToggle("slow");
        jQuery(".img-modal").on("shown.bs.modal", function () {
            jQuery("body").addClass("img-overflow")
        });
        jQuery(".img-modal").on("hidden.bs.modal", function () {
            jQuery("body").removeClass("img-overflow")
        })
    }
    jQuery(".img-modal").on("shown.bs.modal", function () {
        jQuery("body").css("overflow", "hidden")
    });
    jQuery(".img-modal").on("hidden.bs.modal", function () {
        jQuery("body").css({
            "overflow-x": "hidden",
            "overflow-y": "visible"
        })
    });
    jQuery(".img-modal").on("hidden.bs.modal", function () {
        jQuery("body").removeAttr("style")
    });
    jQuery("section .navbar").hasClass("intrapage-nav") && jQuery(".main-container").find(".sticky").addClass("intrapage");
    jQuery("section").hasClass("hero-module") && jQuery("section.hero-module").parent().parent().find(".main-container .sticky").addClass("plus-hero-module");
    jQuery("section").hasClass("hero-module") && jQuery("section .navbar").hasClass("intrapage-nav") && jQuery("section.hero-module").parent().parent().find(".main-container .sticky").addClass("plus-hero-intrapage");
    jQuery(".content-section").eq(0).addClass("top-sticky").end().eq(-1).addClass("bottom-sticky").end();
    jQuery(".sticky").show();
    jQuery(window).scroll(function () {
        var n = jQuery(".footer-bottom").height() + 50;
        jQuery(".scroll-top").css("bottom", n);
        jQuery(window).scrollTop() + jQuery(window).height() < jQuery(document).height() - jQuery(".footer-top").outerHeight() ? jQuery(".scroll-top").fadeOut("slow") : jQuery(".scroll-top").fadeIn("slow")
    });
    jQuery(".main-container").length && (jQuery(".sticky").css("top", jQuery(".main-container").position().top), jQuery(".main-container").height() < jQuery(".sticky").height() && jQuery(".main-container").height(jQuery(".sticky").height()), jQuery(window).scroll(function () {
        var n = jQuery(".intrapage-nav.shrinkedchange").height() + jQuery(".main-container").position().top;
        jQuery(".sticky").css("top", n);
        jQuery(document).scrollTop() + jQuery(".main-navigation.shrinkedchange").height() >= jQuery(".main-container").position().top ? (jQuery(".content-section.top-sticky").parent().find(".sticky").addClass("fixed"), jQuery(".sticky").css("top", jQuery(".intrapage-nav").height() + jQuery(".main-navigation").height())) : (jQuery(".content-section.top-sticky").parent().find(".sticky").not(".blog-sidebar.sticky").removeClass("fixed"), jQuery(".sticky").css("top", n), jQuery(".blog-sidebar.sticky").css("top", "auto"));
        jQuery(document).scrollTop() + jQuery(window).height() >= jQuery(".main-container").height() + jQuery(".main-container").position().top ? (jQuery(".content-section.top-sticky").parent().find(".sticky").not(".blog-sidebar.sticky").removeClass("fixed"), jQuery(".sticky").css("top", "auto"), jQuery("section.sticky").addClass("sticky-bottom"), jQuery("body > .main-container").addClass("sticky-bottom")) : (jQuery("section.sticky").removeClass("sticky-bottom"), jQuery("body > .main-container").removeClass("sticky-bottom"))
    }));
    jQuery(".scroll-top").click(function () {
        return jQuery("html, body").animate({
            scrollTop: 0
        }, 3e3), !1
    });
    jQuery(".fast-scroll-top").click(function () {
        var n = jQuery(".content-module-J-New").offset().top;
        return n = n - 130, jQuery("html, body").animate({
            scrollTop: n
        }, 2e3), !1
    });
    jQuery(".text-large").click(function (n) {
        n.preventDefault();
        jQuery(".content-module-K .change-font ul li a.text-large").addClass("active");
        jQuery(".content-module-K .change-font ul li a.text-medium").removeClass("active");
        jQuery(".content-module-K .change-font ul li a.text-small").removeClass("active");
        jQuery(".content-section *, .content-section-E2 li, .content-module-J-New p, .article-paragraph ul li, .article-paragraph ol li, .article-paragraph p, .half-width-left, .half-width-right").addClass("text-large");
        jQuery(".content-section *, .content-section-E2 li, .content-module-J-New p, .article-paragraph ul li,  .article-paragraph ol li, .article-paragraph p, .half-width-left, .half-width-right").removeClass("text-medium");
        jQuery(".content-section *, .content-section-E2 li, .content-module-J-New p, .article-paragraph ul li, .article-paragraph ol li, .article-paragraph p, .half-width-left, .half-width-right").removeClass("text-small")
    });
    jQuery(".text-medium").click(function (n) {
        n.preventDefault();
        jQuery(".content-module-K .change-font ul li a.text-medium").addClass("active");
        jQuery(".content-module-K .change-font ul li a.text-large").removeClass("active");
        jQuery(".content-module-K .change-font ul li a.text-small").removeClass("active");
        jQuery(".content-section *, .content-section-E2 li, .content-module-J-New p, .article-paragraph ul li,  .article-paragraph ol li, .article-paragraph p, .half-width-left, .half-width-right").addClass("text-medium");
        jQuery(".content-section *, .content-section-E2 li, .content-module-J-New p, .article-paragraph ul li,  .article-paragraph ol li, .article-paragraph p, .half-width-left, .half-width-right").removeClass("text-large");
        jQuery(".content-section *, .content-section-E2 li, .content-module-J-New p, .article-paragraph ul li,  .article-paragraph ol li, .article-paragraph p, .half-width-left, .half-width-right").removeClass("text-small")
    });
    jQuery(".text-small").click(function (n) {
        n.preventDefault();
        jQuery(".content-module-K .change-font ul li a.text-small").addClass("active");
        jQuery(".content-module-K .change-font ul li a.text-large").removeClass("active");
        jQuery(".content-module-K .change-font ul li a.text-medium").removeClass("active");
        jQuery(".content-section *, .content-section-E2 li, .content-module-J-New p, .article-paragraph ul li,  .article-paragraph ol li, .article-paragraph p, .half-width-left, .half-width-right").addClass("text-small");
        jQuery(".content-section *, .content-section-E2 li, .content-module-J-New p, .article-paragraph ul li,  .article-paragraph ol li, .article-paragraph p, .half-width-left, .half-width-right").removeClass("text-large");
        jQuery(".content-section *, .content-section-E2 li, .content-module-J-New p, .article-paragraph ul li,  .article-paragraph ol li, .article-paragraph p, .half-width-left, .half-width-right").removeClass("text-medium")
    });
    jQuery(".intrapage-nav").closest("section").prev("div, section") && (t = jQuery("section:eq(1)").height(), jQuery(window).scroll(function () {
        jQuery(window).scrollTop() > t ? jQuery(".intrapage-nav").addClass("shrinkedchange") : jQuery(window).scrollTop() < t && jQuery(".intrapage-nav").removeClass("shrinkedchange")
    }));
    n = document.getElementById("video1");
    jQuery(window).on("scroll", i);
    jQuery(".intrapage-nav ul.navbar-nav li a, .intrapage-nav ul.contact-btn li a").click(function (n) {
        var i, t;
        n.preventDefault();
        i = jQuery(this).data("id");
        switch (i) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                jQuery(".intrapage-nav").addClass("shrinkedchange");
                jQuery(".rebrand-whole-intranave").parent().next().addClass("top-margin")
        }
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname && (t = jQuery(this.hash), t = t.length ? t : jQuery("[name=" + this.hash.slice(1) + "]"), t.length)) return jQuery("html, body").animate({
            scrollTop: t.offset().top - 100
        }, 1e3), !1
    })
}), jQuery(function () {
    jQuery("#country_address").change(function () {
        jQuery("div.number").hide();
        jQuery("#number" + jQuery(this).val()).show()
    }).change()
}), windowLength < 751) {
    var didScroll, lastScrollTop = 0,
        delta = 5,
        navbarHeight = jQuery("header").outerHeight();
    jQuery(window).scroll(function () {
        didScroll = !0
    });
    setInterval(function () {
        didScroll && (n(), didScroll = !1)
    }, 250);

    function n() {
        var n = jQuery(this).scrollTop();
        Math.abs(lastScrollTop - n) <= delta || (n > lastScrollTop && n > navbarHeight ? jQuery(".fixed-sharing").removeClass("nav-down").addClass("nav-up") : n + jQuery(window).height() < jQuery(document).height() && jQuery(".fixed-sharing").removeClass("nav-up").addClass("nav-down"), lastScrollTop = n)
    }
}
SharingType = {
    sharecontent: "content",
    sharemedia: "media",
    shareinfograph: "infograph",
    sharevideo: "video"
};
jQuery("body").on("focus", ".shareOption", function () {
    var r = this,
        t = jQuery(this).attr("class"),
        f = jQuery(r).closest("div.analytics-modal-id"),
        e = jQuery(f).find(".swiper-slide-active"),
        o = jQuery(e).find("img").attr("src"),
        u, n, i;
    t.indexOf("infograph-gallery-module") > -1 ? t = "shareinfograph-gallery" : t.indexOf("infograph-single-module") > -1 && (t = "shareinfograph");
    jQuery(this).hasClass("infograph-gallery-module") && jQuery(".infograph-gallery-module").attr("data-galleryShare", jQuery(".shareinfograph-gallery").attr("data-sharedomainurl") + o);
    jQuery(this).hasClass("infograph-single-module") && (u = jQuery(".infograph-single-module").parent().siblings().find("img").attr("src"), jQuery(".infograph-single-module").attr("data-shareinfographdetails", jQuery(".taba").attr("data-sharedomainurl") + u));
    jQuery(".customsocialsharing").removeClass("shareinfograph shareinfograph-gallery");
    jQuery(".customsocialsharing").addClass(t);
    n = {
        shareUrl: "",
        shareImage: "",
        shareTitle: "",
        shareDesc: "",
        shareTwitterTitle: "",
        shareTwitterDesc: "",
        shareType: "",
        shareItemId: ""
    };
    jQuery(this).popover({
        trigger: "hover",
        html: !0,
        animation: !1,
        placement: "auto bottom",
        content: function () {
            var n = jQuery(".social-share-rollover").html();
            return console.log(n), n
        }
    });
    n.shareUrl = window.location.href;
    n.shareItemId = "{00000000-0000-0000-0000-000000000000}";
    i = "";
    jQuery(this).closest(".expand-zoom-slider2").length > 0 ? i = jQuery(this).parent().data("sharedomainurl") + jQuery("#modal-expand-singleSlide-zoom").attr("src") : jQuery(this).closest(".expand-zoom-slider").length > 0 && (i = jQuery(this).parent().data("sharedomainurl") + jQuery(".zoom-slider-modal.swiper-slide-active").find("img").attr("src"));
    n.shareImage = i;
    n.shareType = SharingType.shareinfograph;
    win_width < 751 || jQuery(this).popover("show");
    jQuery(".popover").removeClass("top").addClass("bottom");
    jQuery(".popover").css("top", "61px");
    bindClickEventToSharingIcon(n);
    jQuery(".popover").on("mouseleave", function () {
        jQuery(r).popover("hide")
    });
    jQuery(".shareinfograph-gallery").attr("data-galleryShare", i)
});
jQuery("body").on("mouseenter", ".shareOption", function () {
    var r = this,
        t = jQuery(this).attr("class"),
        f = jQuery(r).closest("div.analytics-modal-id"),
        e = jQuery(f).find(".swiper-slide-active"),
        o = jQuery(e).find("img").attr("src"),
        u, n, i;
    t.indexOf("infograph-gallery-module") > -1 ? t = "shareinfograph-gallery" : t.indexOf("infograph-single-module") > -1 && (t = "shareinfograph");
    jQuery(this).hasClass("infograph-gallery-module") && jQuery(".infograph-gallery-module").attr("data-galleryShare", jQuery(".shareinfograph-gallery").attr("data-sharedomainurl") + o);
    jQuery(this).hasClass("infograph-single-module") && (u = jQuery(".infograph-single-module").parent().siblings().find("img").attr("src"), jQuery(".infograph-single-module").attr("data-shareinfographdetails", jQuery(".taba").attr("data-sharedomainurl") + u));
    jQuery(".customsocialsharing").removeClass("shareinfograph shareinfograph-gallery");
    jQuery(".customsocialsharing").addClass(t);
    n = {
        shareUrl: "",
        shareImage: "",
        shareTitle: "",
        shareDesc: "",
        shareTwitterTitle: "",
        shareTwitterDesc: "",
        shareType: "",
        shareItemId: ""
    };
    jQuery(this).popover({
        trigger: "manual",
        html: !0,
        animation: !1,
        placement: "auto bottom",
        content: function () {
            return jQuery(".social-share-rollover").html()
        }
    });
    n.shareUrl = window.location.href;
    n.shareItemId = "{00000000-0000-0000-0000-000000000000}";
    i = "";
    jQuery(this).closest(".expand-zoom-slider2").length > 0 ? i = jQuery(this).parent().data("sharedomainurl") + jQuery("#modal-expand-singleSlide-zoom").attr("src") : jQuery(this).closest(".expand-zoom-slider").length > 0 && (i = jQuery(this).parent().data("sharedomainurl") + jQuery(".zoom-slider-modal.swiper-slide-active").find("img").attr("src"));
    n.shareImage = i;
    n.shareType = SharingType.shareinfograph;
    win_width < 751 || jQuery(this).popover("show");
    jQuery(".popover").removeClass("top").addClass("bottom");
    jQuery(".popover").css("top", "61px");
    bindClickEventToSharingIcon(n);
    jQuery(".popover").on("mouseleave", function () {
        jQuery(r).popover("hide")
    });
    jQuery(".shareinfograph-gallery").attr("data-galleryShare", i)
});
jQuery("body").on("mouseleave", ".shareOption", function () {
    var n = this;
    jQuery(this).popover({
        trigger: "manual",
        html: !0,
        animation: !1,
        placement: "auto bottom",
        content: function () {
            return jQuery(".social-share-rollover").html()
        }
    });
    setTimeout(function () {
        jQuery(".popover:hover").length || jQuery(n).popover("hide")
    }, 300)
});
jQuery("body").on("click", ".social-roll", function () {
    var n = this;
    jQuery(".analytics-share").attr("data-sharevideodetails", jQuery(n).attr("data-sharevideo"))
});
jQuery("body").on("mouseenter", ".social-roll", function () {
    var i = this,
        u = "#" + jQuery(i).closest("div.analytics-id").attr("id") + " .swiper-slide-active",
        r = jQuery(this).parent().attr("class"),
        n, t;
    r.indexOf("shareinfograph-gallery") > -1 && (r = "shareinfograph-gallery");
    jQuery(".customsocialsharing").removeClass("sharevideo shareinfograph sharemedia sharecontent shareinfograph-gallery");
    jQuery(".customsocialsharing").addClass(r);
    n = {
        shareUrl: "",
        shareImage: "",
        shareTitle: "",
        shareDesc: "",
        shareTwitterTitle: "",
        shareTwitterDesc: "",
        shareType: "",
        shareItemId: ""
    };
    jQuery(this).popover({
        trigger: "manual",
        html: !0,
        animation: !1,
        placement: "auto top",
        content: function () {
            return jQuery(".social-share-rollover").html()
        }
    });
    jQuery(this).hasClass("contentCShareGallery") ? (n.shareImage = jQuery(this).parent().data("sharedomainurl") + jQuery(".swiper-slide-active").find("img").attr("src"), n.shareType = SharingType.shareinfograph, n.shareUrl = window.location.href, n.shareTwitterTitle = n.shareTitle = jQuery(".description-slider.active-description").text(), n.shareItemId = jQuery(".swiper-slide-active").data("itemid"), jQuery(".infograph-gallery-module").attr("data-galleryShare", jQuery(".shareinfograph-gallery").attr("data-sharedomainurl") + jQuery(u).find("img").attr("src"))) : (t = jQuery(this).parent(), t.hasClass("sharecontent") ? (n.shareUrl = t.data("shareurl"), n.shareImage = t.data("shareimage"), n.shareTitle = t.data("sharetitle"), n.shareDesc = t.data("sharedesc"), n.shareTwitterTitle = t.data("sharetwittertitle"), n.shareTwitterDesc = t.data("sharetwitterdesc"), n.shareItemId = t.data("itemid"), n.shareType = SharingType.sharecontent) : t.hasClass("sharemedia") ? (n.shareUrl = t.data("sharemedia"), n.shareImage = t.data("shareimage"), n.shareTitle = t.data("sharetitle"), n.shareDesc = t.data("sharedesc"), n.shareTwitterTitle = t.data("sharetwittertitle"), n.shareTwitterDesc = t.data("sharetwitterdesc"), n.shareItemId = t.data("itemid"), n.shareType = SharingType.sharemedia) : t.hasClass("shareinfograph") ? (n.shareUrl = t.data("shareurl"), n.shareImage = t.data("shareimage"), n.shareTitle = t.data("sharetitle"), n.shareDesc = t.data("sharedesc"), n.shareTwitterTitle = t.data("sharetwittertitle"), n.shareTwitterDesc = t.data("sharetwitterdesc"), n.shareItemId = t.data("itemid"), n.shareType = SharingType.shareinfograph, jQuery(".infograph-single-module").attr("data-shareinfographdetails", jQuery(i).attr("data-shareimage"))) : t.hasClass("sharevideo") && (n.shareUrl = t.data("shareurl"), n.shareImage = t.data("shareimage"), n.shareTitle = t.data("sharetitle"), n.shareDesc = t.data("sharedesc"), n.shareTwitterTitle = t.data("sharetwittertitle"), n.shareTwitterDesc = t.data("sharetwitterdesc"), n.shareItemId = t.data("itemid"), n.shareType = SharingType.sharevideo, jQuery(".analytics-share").attr("data-sharevideodetails", jQuery(i).attr("data-sharevideo"))));
    win_width < 751 || jQuery(this).popover("show");
    bindClickEventToSharingIcon(n);
    jQuery(".popover").css("top", parseInt(jQuery(".popover").css("top")) - 12 + "px");
    jQuery(".popover").on("mouseleave", function () {
        jQuery(i).popover("hide")
    })
});
jQuery("body").on("focus", ".social-roll", function () {
    var i = this,
        u = "#" + jQuery(i).closest("div.analytics-id").attr("id") + " .swiper-slide-active",
        r = jQuery(this).parent().attr("class"),
        n, t;
    r.indexOf("shareinfograph-gallery") > -1 && (r = "shareinfograph-gallery");
    jQuery(".customsocialsharing").removeClass("sharevideo shareinfograph sharemedia sharecontent shareinfograph-gallery");
    jQuery(".customsocialsharing").addClass(r);
    n = {
        shareUrl: "",
        shareImage: "",
        shareTitle: "",
        shareDesc: "",
        shareTwitterTitle: "",
        shareTwitterDesc: "",
        shareType: "",
        shareItemId: ""
    };
    jQuery(this).popover({
        trigger: "hover",
        html: !0,
        animation: !1,
        placement: "auto top",
        content: function () {
            return jQuery(".social-share-rollover").html()
        }
    });
    jQuery(this).hasClass("contentCShareGallery") ? (n.shareImage = jQuery(this).parent().data("sharedomainurl") + jQuery(".swiper-slide-active").find("img").attr("src"), n.shareType = SharingType.shareinfograph, n.shareUrl = window.location.href, n.shareTwitterTitle = n.shareTitle = jQuery(".description-slider.active-description").text(), n.shareItemId = jQuery(".swiper-slide-active").data("itemid"), jQuery(".infograph-gallery-module").attr("data-galleryShare", jQuery(".shareinfograph-gallery").attr("data-sharedomainurl") + jQuery(u).find("img").attr("src"))) : (t = jQuery(this).parent(), t.hasClass("sharecontent") ? (n.shareUrl = t.data("shareurl"), n.shareImage = t.data("shareimage"), n.shareTitle = t.data("sharetitle"), n.shareDesc = t.data("sharedesc"), n.shareTwitterTitle = t.data("sharetwittertitle"), n.shareTwitterDesc = t.data("sharetwitterdesc"), n.shareItemId = t.data("itemid"), n.shareType = SharingType.sharecontent) : t.hasClass("sharemedia") ? (n.shareUrl = t.data("sharemedia"), n.shareImage = t.data("shareimage"), n.shareTitle = t.data("sharetitle"), n.shareDesc = t.data("sharedesc"), n.shareTwitterTitle = t.data("sharetwittertitle"), n.shareTwitterDesc = t.data("sharetwitterdesc"), n.shareItemId = t.data("itemid"), n.shareType = SharingType.sharemedia) : t.hasClass("shareinfograph") ? (n.shareUrl = t.data("shareurl"), n.shareImage = t.data("shareimage"), n.shareTitle = t.data("sharetitle"), n.shareDesc = t.data("sharedesc"), n.shareTwitterTitle = t.data("sharetwittertitle"), n.shareTwitterDesc = t.data("sharetwitterdesc"), n.shareItemId = t.data("itemid"), n.shareType = SharingType.shareinfograph, jQuery(".infograph-single-module").attr("data-shareinfographdetails", jQuery(i).attr("data-shareimage"))) : t.hasClass("sharevideo") && (n.shareUrl = t.data("shareurl"), n.shareImage = t.data("shareimage"), n.shareTitle = t.data("sharetitle"), n.shareDesc = t.data("sharedesc"), n.shareTwitterTitle = t.data("sharetwittertitle"), n.shareTwitterDesc = t.data("sharetwitterdesc"), n.shareItemId = t.data("itemid"), n.shareType = SharingType.sharevideo, jQuery(".analytics-share").attr("data-sharevideodetails", jQuery(i).attr("data-sharevideo"))));
    win_width < 751 || jQuery(this).popover("show");
    bindClickEventToSharingIcon(n);
    jQuery(".popover").css("top", parseInt(jQuery(".popover").css("top")) - 12 + "px");
    jQuery(".popover").on("mouseleave", function () {
        jQuery(i).popover("hide")
    })
});
jQuery("body").on("mouseleave", ".social-roll", function () {
    var n = this;
    jQuery(this).popover({
        trigger: "manual",
        html: !0,
        animation: !1,
        placement: "auto top",
        content: function () {
            return jQuery(".social-share-rollover").html()
        }
    });
    setTimeout(function () {
        jQuery(".popover:hover").length || jQuery(n).popover("hide")
    }, 300)
});
jQuery(".tabbed-module-C-tab, .tabbed-module-G-tab").on("shown.bs.tab", function (n) {
    tabbedC(jQuery(n.target), !0)
});
win_width > 800 && (equalWidthTab(".tabbed-module-A .tab-navigation1 li "), equalWidthTab(".tabbed-module-F .tab-navigation1 li "), equalWidthTab(".tabbed-module-d .tab-navigation1 li "), equalWidthTab(".tabbed-module-E .tab-navigation1 li "));
jQuery(".choose-language ul.dropdown-menu li a").on("mouseover", function () {
    jQuery("li a").removeClass("country-active");
    jQuery(this).addClass("country-active")
});
jQuery(".choose-language ul.dropdown-menu li a").on("mouseout", function () {
    jQuery("li a").removeClass("country-active")
});
cardtype = 2;
cardVariations(cardtype, ".card-two .card-default");
cardVariations(3, ".card-three .card-default");
cardVariations(4, ".card-four .card-default");
cardVariations(5, ".card-five .card-default");
jQuery("ul.searchfiltermodule-tab-navigation li a, .card-filter-module .view-Result a").click(function () {
    function n(n, t) {
        var i = 0,
            r = n;
        jQuery(t).each(function (t) {
            t == i && (jQuery(this).css("margin-left", "0px"), i = i + n);
            t == r - 1 && (jQuery(this).css("margin-right", "0px"), r = r + n)
        })
    }
    n(2, ".card-two .card-default");
    n(3, ".card-three .card-default");
    n(4, ".card-four .card-default");
    n(5, ".card-five .card-default")
});
jQuery(".fast-scroll-next").on("click", function () {
    var n = jQuery(this).parents().nextAll("section:first, .main-container:first"),
        t = jQuery(".header-top").height() != 0 ? jQuery(".header-top").height() + 50 : jQuery("header .main-navigation").height() + 10;
    try {
        jQuery("html, body").animate({
            scrollTop: jQuery(n).offset().top - t
        }, 1500)
    } catch (i) { }
    return !1
});
jQuery(document).ready(function (n) {
    function s(t) {
        var i = 0,
            r = [],
            u = 0;
        t.removeAttr("style");
        t.each(function () {
            r.push(n(this).height());
            u++
        });
        i = Math.max.apply(Math, r);
        i <= "240" ? t.height("300px").addClass("group-height") : t.height(i);
        t.length > 0 && cardOverflow()
    }

    function l(t) {
        t.on("shown.bs.tab", function (t) {
            var o = n(t.target).attr("href"),
                u, f, r, e;
            for (s(n(o + " .row > div")), u = document.querySelectorAll(".card .card-default"), f = document.querySelectorAll(".card .card-default .content"), i = 0; i < u.length; ++i) u[i].className.match("only-text btn-text") || f[i].offsetHeight + 5 < f[i].scrollHeight && (r = document.createElement("div"), r.setAttribute("class", "ellipsis"), e = document.createTextNode("..."), typeof r != "undefined" && r !== null && r.length > 0 && r.appendChild(e), document.getElementsByClassName("content")[i].appendChild(r))
        })
    }

    function v() {
        var t = " -webkit- -moz- -o- -ms- ".split(" "),
            i = function (n) {
                return window.matchMedia(n).matches
            },
            n;
        return "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch ? !0 : (n = ["(", t.join("touch-enabled),("), "heartz", ")"].join(""), i(n))
    }
    var o = window.location.pathname,
        f, r, a, u, t, h, c, e;
    if (win_width > 751) {
        function t() {
            var e, t, u, r, i, f;
            if (n(".content-section.content-module-G-multiple").length > 0)
                for (n(".content-section.content-module-G-multiple ul.nav-tabs li a").click(function () {
                    var i = n(this),
                        t = i.closest(".content-module-G-multiple"),
                        f = t.attr("id"),
                        r = t.find("ul.nav-tabs li").index(i.parent()),
                        u;
                    r++;
                    u = n(".content-module-G-multiple").index(t);
                    !disableBrowserStorage && sessionStorage && sessionStorage.setItem(o + "-contentg-" + u, f + "+" + r)
                }), e = n(".content-section.content-module-G-multiple").length, t = 0; t < e; t++) !disableBrowserStorage && sessionStorage && sessionStorage.getItem(o + "-contentg-" + t) != null && (u = sessionStorage.getItem(o + "-contentg-" + t), u.toString().indexOf("+") > -1 && (r = u.split("+"), r.length == 2 && (i = r[0], f = r[1], l(n(".content-section.content-module-G-tab-variation")), n("#" + i + ".content-section.content-module-G-multiple ul.nav-tabs li.active").removeClass("active"), n("#" + i + ".content-section.content-module-G-multiple ul.nav-tabs li:nth-child(" + f + ")").addClass(" active "), n("#" + i + ".content-section.content-module-G-multiple .tab-content .tab-pane.active").removeClass("in active"), n("#" + i + ".content-section.content-module-G-multiple .tab-content .tab-pane:nth-child(" + f + ")").addClass(" active in "))))
        }
        n.when(t()).done(function () {
            refreshIndicators()
        })
    }
    for (win_width > 751 && (s(n(".content-section.content-module-G .content-container > div")), s(n(".content-section.content-module-G-tab-variation .tab-content .tab-pane.active .row > div")), l(n(".content-section.content-module-G-tab-variation"))), f = document.querySelectorAll(".content-module-J-New .panel-group .panel-default .content-wrapper"), i = 0; i < f.length; ++i) f[i].offsetHeight + 5 < f[i].scrollHeight && (r = document.createElement("div"), r.setAttribute("class", "ellipsis"), a = document.createTextNode("..."), typeof r != "undefined" && (r.appendChild(a), document.getElementsByClassName("content-wrapper")[i].appendChild(r)));
    n(".tab-box").each(function () {
        var t = n(this).height();
        t >= 120 && n(this).addClass("tab-box ellipsis-hero")
    });
    n("#country_address").change(function () {
        equalheight = function (t) {
            var u = 0,
                f = 0,
                r = [],
                i;
            n(t).each(function () {
                if (i = n(this), n(i).height("auto"), topPostion = i.position().top, f != topPostion) {
                    for (currentDiv = 0; currentDiv < r.length; currentDiv++) r[currentDiv].height(u);
                    r.length = 0;
                    f = topPostion;
                    u = i.height();
                    r.push(i)
                } else r.push(i), u = u < i.height() ? i.height() : u;
                for (currentDiv = 0; currentDiv < r.length; currentDiv++) r[currentDiv].height(u)
            })
        };
        n("div.number").hide();
        n("#number" + n(this).val()).show()
    }).change();
    n(".search-module-listBtn img").click(function (t) {
        n("#search-posts").removeClass("list-view");
        n(".search-module-imageBtn img").removeClass("active");
        n(this).addClass("active");
        n(".card-default").each(function () {
            try {
                var t = n(this),
                    i = t.find(".noListPara").html().length,
                    r = t.find(".ListPara").html().length;
                n(".havingList").hide();
                n(".notList").show();
                i > 1 && n(".noListPara").show();
                r > 1 && n(".ListPara").hide()
            } catch (u) { }
        });
        t.preventDefault()
    });
    n(".search-module-imageBtn img").click(function (t) {
        n("#search-posts").addClass("list-view");
        n(".search-module-listBtn img").removeClass("active");
        n(this).addClass("active");
        n(".card-default").each(function () {
            try {
                var t = n(this),
                    i = t.find(".noListPara").html().length,
                    r = t.find(".ListPara").html().length;
                n(".havingList").show();
                n(".notList").hide();
                i > 1 && n(".noListPara").hide();
                r > 1 && n(".ListPara").show()
            } catch (u) { }
        });
        t.preventDefault()
    });
    n(".carousel-inner").each(function () {
        n(this).children("div.item").length === 1 && (n(this).siblings(".carousel-indicators").hide(), n(this).find("a.carousel-control").hide())
    });
    n(document).click(function () {
        n(".highlighter-container").hide()
    });
    u = !1;
    n(document).ready(function (n) {
        var t = n("body"),
            i = function (n) {
                n.type === "mousedown" ? u = !0 : n.type === "touchstart" && (u = !1);
                t.off("mousedown touchstart", i)
            };
        t.on("mousedown touchstart", i)
    });
    n(document).ready(function (n) {
        if (win_width > 751 && win_width < 1025 || v() && !u) n(document).on("touchstart", function (t) {
            n(t.target).closest(".blog-main-nav li.dropdown").length || (n(".blog-main-nav li.dropdown .multi-column").hide(), n(".blog-main-nav li.dropdown").removeClass("open"))
        })
    });
    t = 0;
    h = 0;
    n(".main-navigation ul.navbar-nav > li > a").click(function (i) {
        var r = n(this),
            f = n(".main-navigation ul.navbar-nav > li > a").index(this) + 1;
        if (win_width < 1025 || v() && !u) return i.stopImmediatePropagation(), r.closest("li").hasClass("dropdown") ? h !== f ? (h = f, t = 0) : t = t + 1 : t = t + 1, t === 1 && (ga("send", "event", {
            eventCategory: "Main Navigation",
            eventAction: window.location.href,
            eventLabel: r.text().toUpperCase()
        }), window.location.href = n(this).attr("href")), !1
    });
    c = "";
    n(".dropdown").on("shown.bs.dropdown", function () {
        var t = n(this);
        n(document).keypress(function (i) {
            var r = String.fromCharCode(i.which);
            c != r && (t.find("li").removeClass("visited active"), c = r);
            t.find("li").each(function (i, u) {
                if (n(u).text().charAt(0).toLowerCase() != r || n(u).hasClass("visited")) n(u).text().charAt(0).toLowerCase() === r && t.find("li").removeClass("visited active");
                else return n(".visited").removeClass("active"), n(u).addClass("active visited"), n(".location-dropdown > span.anchor").text(n(u).text()), !1
            })
        })
    });
    n(".dropdown").on("hide.bs.dropdown", function () {
        var t = n(this);
        n(document).unbind("keypress");
        t.find("li").removeClass("active visited")
    });
    n(".top-menu .nav.navbar-nav li.dropdown").on("hidden.bs.dropdown", function () {
        n(this).removeClass("active")
    });
    n(".modal").on("shown.bs.modal", function () { });
    n(".modal").on("hidden.bs.modal", function () {
        n("body").removeClass("no-scroll");
        n("html").removeClass("no-scroll")
    });
    n("#searchModal").on("hidden.bs.modal", function () {
        n(".top-menu .nav.navbar-nav li.search").removeClass("active");
        n(".rebrand .main-navigation>.container>.row>.mobile-view .search>a").removeClass("active")
    });
    n("#searchModal").on("shown.bs.modal", function () {
        n(".rebrand .main-navigation>.container>.row>.mobile-view .search>a").addClass("active")
    });
    n("#BlogSearch").on("hidden.bs.modal", function () {
        n(".blog-nav .nav-section .search>a").removeClass("active")
    });
    n("#BlogSearch").on("shown.bs.modal", function () {
        n(".blog-nav .nav-section .search>a").addClass("active")
    });
    n("#BlogNavigationModal").on("hidden.bs.modal", function () {
        n(".blogMenu .menu-icon button").removeClass("active")
    });
    n("#BlogNavigationModal").on("shown.bs.modal", function () {
        n(".blogMenu .menu-icon button").addClass("active")
    });
    e = n(".view-more");
    e.on("click", function () {
        n(this).addClass("clicked")
    });
    e.contextmenu(function () {
        n(this).addClass("clicked")
    });
    e.on("mouseout", function () {
        n(this).removeClass("clicked")
    })
});
window.onload = function () {
    jQuery(".filter-by").on("shown.bs.tab", function (n) {
        tabReposition(jQuery(n.target), jQuery("#myTabContentFilterSrModA"), jQuery(".filter-by .row"))
    })
};
jQuery(document).ready(function (n) {
    var s, u, f, r, i, e, o;
    if (n(".brandRefresh-E").length && (n("#hero-e-module1").length && (s = n("#hero-e-module1 .item").height() - 60, win_width > 751 ? n(".item").parent().height(s) : n(".item").parent().css("height", "auto")), n("section").hasClass("hero-rebrand hero-rebrand-A brandRefresh-E"))) {
        var t = 0;
        n(".carousel .item").each(function () {
            n(this).addClass("fullVision");
            n(".hero-module.brandRefresh-E .carousel-caption").css({
                "min-height": 425
            });
            n(".carousel-caption", this).each(function () {
                n(this).height() > t && (t = n(this).height())
            });
            n(this).removeClass("fullVision");
            n(".hero-module.brandRefresh-E .carousel-caption").removeAttr("style")
        });
        win_width <= 751 && (h = n(this).find(".cardsSection").height(), t = h + 200, n(".hero-module.brandRefresh-E .carousel .item").css({
            height: t
        }));
        win_width >= 751 && (t = t + 70, n(".hero-module.brandRefresh-E .carousel .item").css({
            height: t
        }))
    }
    for (win_width < 751 && (n(".hero-module.B .carousel .carousel-inner .item").each(function () {
        n(this).find(".share").length != 0 && n(this).find(".share").appendTo(this)
    }), n(".hero-module .hero-module-G-slider .carousel .carousel-inner .item").each(function () {
        n(this).find(".share").length != 0 && n(this).find(".share").appendTo(this)
    })), win_width < 751 && n(".cross-nav-module .carousel").removeClass("slide"), win_width > 751 && n(function () {
        n.each(n("#main-navbar ul li.dropdown"), function () {
            var t = n(this).find("ul.second-dropdown li").length;
            t <= 11 ? n(this).find("ul.second-dropdown").addClass("lessthan10") : t > 11 && t <= 20 ? n(this).find("ul.second-dropdown").addClass("columns-2") : n(this).find("ul.second-dropdown").addClass("columns-3")
        })
    }), win_width < 751 && (u = n(".main-navigation .mobile-view .languages .dropdown-toggle-top"), u[0] != undefined && (f = u[0].id, n(".header-top .GlobalLanguage .dropdown-menu.mobile-view .country").each(function () {
        var t = n(this)[0].id;
        f == t && n(this).addClass("mobileselected");
        f == "global" && (n(".globalOrangeImage").css("display", "none"), n(".globalWhiteImage").css("display", "inline"))
    }))), r = document.querySelectorAll("section"), i = 0; i < r.length; i++)
        if (r[i].className.indexOf("hero-rebrand-B") > -1 || r[i].className.indexOf("hero-rebrand-G") > -1) {
            n(".navbar-default.top-menu").removeClass("flame-1920");
            n(".navbar-default.top-menu").addClass("aurora-1920");
            n(".rebrand-breadcrumb-module").removeClass("flame-1920");
            n(".rebrand-breadcrumb-module").addClass("hero-breadcrumb");
            break
        } else if (r[i].className.indexOf("hero-rebrand-A") > -1) {
            n(".navbar-default.top-menu").removeClass("flame-1920");
            n(".navbar-default.top-menu").addClass("glow-1920");
            break
        } else if (r[i].className.indexOf("hero-module-I") > -1) {
            n(".navbar-default.top-menu").removeClass("flame-1920");
            n(".navbar-default.top-menu").addClass("thermal-1920");
            n(".rebrand-breadcrumb-module").removeClass("flame-1920");
            n(".rebrand-breadcrumb-module").addClass("hero-breadcrumb");
            break
        } else n(".navbar-default.top-menu").addClass("flame-1920"), n(".rebrand-breadcrumb-module").addClass("flame-1920");
    win_width <= 768 && (e = document.getElementById("HeroReBrand"), e != null && e.style.removeProperty("background-size"));
    win_width < 751 && (o = n("#HeroReBrand"), n(o).css("background-image", ""), n(o).css("background-image", 'url("/images/re-brand/glow-640.png")'), n(".rebrand.hero-module-I").removeClass("thermal-1920").addClass("thermal-mobile"))
});
jQuery(document).ready(function () {
    document.getElementById('headerImages').removeAttribute("style");
});
jQuery(document).ready(function () {
    var t = jQuery("#myCarousel .item").length,
        n, i = 11;
    jQuery("#myCarousel .carousel-control").on("click", function () {
        n = jQuery("#myCarousel .item.active").index() + 1;
        jQuery(this).hasClass("left") ? (jQuery("#myCarousel").carousel("prev"), n == 0 ? jQuery(".carousel-inner").animate({
            "background-position-x": i * t + "%"
        }) : n < t ? jQuery(".carousel-inner").animate({
            "background-position-x": n * i + "%"
        }) : jQuery(".carousel-inner").animate({
            "background-position-x": i * t + "%"
        })) : (jQuery("#myCarousel").carousel("next"), n == t ? jQuery(".carousel-inner").animate({
            "background-position-x": i * t + "%"
        }) : jQuery(".carousel-inner").animate({
            "background-position-x": n * i + "%"
        }))
    });
    jQuery("#myCarousel").on("swiperight", function () {
        n = jQuery("#myCarousel .item.active").index() + 1;
        jQuery(this).carousel("prev");
        n == 0 ? jQuery(".carousel-inner").animate({
            "background-position-x": i * t + "%"
        }) : n < t ? jQuery(".carousel-inner").animate({
            "background-position-x": n * i + "%"
        }) : jQuery(".carousel-inner").animate({
            "background-position-x": i * t + "%"
        })
    });
    jQuery("#myCarousel").on("swipeleft", function () {
        n = jQuery("#myCarousel .item.active").index() + 1;
        jQuery(this).carousel("next");
        n == t ? jQuery(".carousel-inner").animate({
            "background-position-x": i * t + "%"
        }) : jQuery(".carousel-inner").animate({
            "background-position-x": n * i + "%"
        })
    })
});
jQuery(document).ready(function () {
    annexModule()
});
jQuery(document).ready(function () {
    jQuery(".article-paragraph-section iframe").each(function () {
        var n = jQuery(this);
        n.wrapAll('<div class="video-container-blog"/>')
    })
});
jQuery("body").on("click", ".more-content-width", function () {
    var t = jQuery(this),
        n = jQuery(this).children(),
        i = t.prev().children();
    return i.toggleClass("in"), jQuery(n).html(jQuery(n).text().trim() == moreDictionary ? lessDictionary + '<span class="glyphicon glyphicon-article-up"><\/span>' : moreDictionary + ' <span class="glyphicon glyphicon-article-down"><\/span>'), !1
});
jQuery(document).ready(function () {
    jQuery(".subscribe-head").bind("input propertychange", function () {
        var n = jQuery(this).val();
        return n.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? (jQuery(this).parent().next().find(".btn").removeAttr("disabled"), !0) : (jQuery(this).parent().next().find(".btn").attr("disabled", "disabled"), !1)
    });
    jQuery("#email-subscribe").bind("input propertychange", function () {
        ValidateEmail()
    });
    jQuery(".subscribe-button form").on("click", function (n) {
        n.stopPropagation()
    });
    jQuery("#subscribeBtn").click(function () {
        jQuery("#subscribeForm").toggle();
        jQuery("#subscribeBtn").toggleClass("btn-highlight")
    });
    jQuery(document).click(function (n) {
        n.target.id != "subscribeBtn" && (jQuery("#subscribeForm").hide(), jQuery("#subscribeBtn").removeClass("btn-highlight"))
    })
});
jQuery.fn.scrollEnd = function (n, t) {
    jQuery(this).scroll(function () {
        var i = jQuery(this);
        i.data("scrollTimeout") && clearTimeout(i.data("scrollTimeout"));
        i.data("scrollTimeout", setTimeout(n, t))
    })
};
winheight = jQuery(window).height();
jQuery(window).scrollEnd(function () {
    var t = jQuery(window).scrollTop(),
        i = t + winheight,
        n = t;
    n = n > 0 ? jQuery(".navbar-default.main-navigation.shrinkedchange").height() : jQuery("section.header-top").height();
    i < jQuery(document).height() && GifActivator(n)
}, 1e3);
try {
    GifActivator(jQuery("section.header-top").height())
} catch (err) { }
jQuery("body").on("click", ".hero-module .carousel-control", function (n) {
    var t = n.currentTarget;
    CarouselOrSwiperDirection = t;
    CarouselSwiperGifActivator(CarouselOrSwiperDirection)
});
jQuery(".hero-module ol.carousel-indicators li").on("click", function () {
    GifActivator(130)
});
jQuery(".modal-custom").on("show.bs.modal", function () {
    setTimeout(function () {
        jQuery(".modal-backdrop").addClass("modal-backdrop-custom")
    })
});
externalLinkClasses = ["glyphicon-external", "external-link"];
internalLinkClasses = ["glyphicon-more", "more-link"];
HandleBlogExternalLink();
jQuery(document).bind("DOMNodeInserted", function () {
    HandleBlogExternalLink()
});
jQuery(document).ready(function () {
    jQuery(".blog-search-filter .tab-wrapper ul li").on("click", function () {
        jQuery(this).hasClass("active") ? (jQuery(".blog-search-filter .tab-wrapper ul li.active").toggleClass("selected"), jQuery(".blog-search-filter .tab-wrapper ul li.active a").toggleClass("select-dropdown")) : (jQuery(".blog-search-filter .tab-wrapper ul li").removeClass("selected"), jQuery(".blog-search-filter .tab-wrapper ul li a").removeClass("select-dropdown"))
    })
});
jQuery(document).ready(function () {
    function t(t, i, r) {
        console.log("currentPos", n, "totalLength", i);
        n = n >= 0 && n <= i ? r == !1 ? n + 1 : n - 1 : 0;
        t.removeClass("active");
        jQuery(t.get(n)).addClass("active")
    }

    function i() {
        jQuery("#list3").parent("div").on("keydown.drop123", function (n) {
            var i, r;
            switch (n.which) {
                case 38:
                    n.preventDefault();
                    n.stopPropagation();
                    i = jQuery("#list3").find(".dropdown-menu li");
                    r = jQuery("#list3").find(".dropdown-menu li.active a").text();
                    t(i, i.length, !0);
                    jQuery("#list3 span#countries").text(r).text();
                    break;
                case 40:
                    n.preventDefault();
                    n.stopPropagation();
                    i = jQuery("#list3").find(".dropdown-menu li");
                    r = jQuery("#list3").find(".dropdown-menu li.active a").text();
                    t(i, i.length, !1);
                    jQuery("#list3 span#countries").text(r).text()
            }
        })
    }

    function r() {
        jQuery("#list4").parent("div").on("keydown.drop123", function (n) {
            var i, r;
            switch (n.which) {
                case 38:
                    n.preventDefault();
                    n.stopPropagation();
                    i = jQuery("#list4").find(".dropdown-menu li");
                    r = jQuery("#list4").find(".dropdown-menu li.active a").text();
                    t(i, i.length, !0);
                    jQuery("#list4 span#countries").text(r).text();
                    break;
                case 40:
                    n.preventDefault();
                    n.stopPropagation();
                    i = jQuery("#list4").find(".dropdown-menu li");
                    r = jQuery("#list4").find(".dropdown-menu li.active a").text();
                    t(i, i.length, !1);
                    jQuery("#list4 span#countries").text(r).text()
            }
        })
    }
    var n = 0;
    jQuery("#list3").parent().on("focus", function () {
        jQuery(this).on("keyup", function (n) {
            n.keyCode == 13 && (jQuery(this).find(".dropdown").hasClass("open") ? jQuery(this).find(".dropdown").removeClass("open") : (jQuery(this).find(".dropdown").addClass("open"), i()));
            n.keyCode == 27 && jQuery(this).find(".dropdown").removeClass("open")
        })
    });
    jQuery("#list3").parent().on("blur", function () {
        jQuery(this).find(".dropdown").removeClass("open")
    });
    jQuery("#list4").parent().on("focus", function () {
        jQuery(this).on("keyup", function (n) {
            n.keyCode == 13 && (jQuery(this).find(".dropdown").hasClass("open") ? jQuery(this).find(".dropdown").removeClass("open") : (jQuery(this).find(".dropdown").addClass("open"), r()));
            n.keyCode == 27 && jQuery(this).find(".dropdown").removeClass("open")
        })
    });
    jQuery("#list4").parent().on("blur", function () {
        jQuery(this).find(".dropdown").removeClass("open")
    });
    jQuery("#list3").parent().on("click", function () {
        jQuery("#list3").parent("div").on("keydown.drop123", function (n) {
            var i, r;
            switch (n.which) {
                case 38:
                    n.preventDefault();
                    n.stopPropagation();
                    i = jQuery("#list3").find(".dropdown-menu li");
                    r = jQuery("#list3").find(".dropdown-menu li.active a").text();
                    t(i, i.length, !0);
                    jQuery("#list3 span#countries").text(r).text();
                    break;
                case 40:
                    n.preventDefault();
                    n.stopPropagation();
                    i = jQuery("#list3").find(".dropdown-menu li");
                    r = jQuery("#list3").find(".dropdown-menu li.active a").text();
                    t(i, i.length, !1);
                    jQuery("#list3 span#countries").text(r).text()
            }
        })
    });
    jQuery("#list4").parent().on("click", function () {
        jQuery("#list4").parent("div").on("keydown.drop123", function (n) {
            var i, r;
            switch (n.which) {
                case 38:
                    n.preventDefault();
                    n.stopPropagation();
                    i = jQuery("#list4").find(".dropdown-menu li");
                    r = jQuery("#list4").find(".dropdown-menu li.active a").text();
                    t(i, i.length, !0);
                    jQuery("#list4 span#countries").text(r).text();
                    break;
                case 40:
                    n.preventDefault();
                    n.stopPropagation();
                    i = jQuery("#list4").find(".dropdown-menu li");
                    r = jQuery("#list4").find(".dropdown-menu li.active a").text();
                    t(i, i.length, !1);
                    jQuery("#list4 span#countries").text(r).text()
            }
        })
    })
});
jQuery(document).ready(function (n) {
    function r() {
        var c, p, d, g, it, l, s, nt, a, b, h, f, v, y, w, e, r, u, o, i;
        if (n(".hero-module").length > 0 && (c = 0, n(".item").each(function () {
            var t = parseInt(n(this).data("position"));
            c = t > c ? t : c
        }), !disableBrowserStorage && sessionStorage && sessionStorage.getItem(t + "-hero") != null && (isNaN(sessionStorage.getItem(t + "-hero")) || (p = sessionStorage.getItem(t + "-hero"), c >= p ? (n(".hero-rebrand-A .item.active").length > 0 && p++ , n(".hero-module .item.active").removeClass("active"), n(".hero-module .carousel-inner .item:nth-child(" + p + ")").addClass(" active ")) : sessionStorage.clear(t + "-hero"))), n(".hero-module .left.carousel-control").click(function () {
            var i = n(".carousel-inner div.active").attr("data-position");
            i == 1 ? i = c : i--;
            !disableBrowserStorage && sessionStorage && sessionStorage.setItem(t + "-hero", i)
        }), n(".hero-module .right.carousel-control").click(function () {
            var i = n(".carousel-inner div.active").attr("data-position");
            i == c ? i = 1 : i++;
            !disableBrowserStorage && sessionStorage && sessionStorage.setItem(t + "-hero", i)
        })), n(".content-module-J-New").length > 0) {
            o = 0;
            n("#contenJloadmore .more-link-up1").click(function () {
                o++;
                !disableBrowserStorage && sessionStorage && sessionStorage.setItem(t + "-contentj-loadmoreclicks", o)
            });
            n(document.body).on("click", ".content-module-J-New .panel-heading .panel-title a", function () {
                var i = n(this),
                    r = i.closest(".content-module-J-New"),
                    u = i.closest(".panel-default"),
                    f = r.find(".panel-default").index(u);
                !disableBrowserStorage && sessionStorage && sessionStorage.setItem(t + "-contentj-rowno", f)
            });
            if (!disableBrowserStorage && sessionStorage && sessionStorage.getItem(t + "-contentj-loadmoreclicks") != null && (f = sessionStorage.getItem(t + "-contentj-loadmoreclicks"), f > 0))
                for (d = 0; d < f; d++) getContentJResults();
            if (!disableBrowserStorage && sessionStorage && sessionStorage.getItem(t + "-contentj-rowno") != null) {
                i = sessionStorage.getItem(t + "-contentj-rowno");
                i++;
                n(".content-module-J-New .panel-default:nth-child(1) .panel-title a").addClass("collapsed");
                n(".content-module-J-New .panel-default:nth-child(1) .panel-collapse").removeClass("in");
                g = setInterval(r, 1);

                function r() {
                    n(".content-module-J-New .panel-default:nth-child(" + i + ") .panel-title a").length > 0 && (n(".content-module-J-New .panel-default:nth-child(" + i + ") .panel-title a").removeClass("collapsed"), n(".content-module-J-New .panel-default:nth-child(" + i + ") .panel-collapse").addClass("in"), clearInterval(g))
                }
            }
        }
        if (n(".desktopTabbedMod").length > 0) {
            for (h = n(".desktopTabbedMod").length, f = 0; f < h; f++)
                if (!disableBrowserStorage && sessionStorage && sessionStorage.getItem(t + "-tabmoduleb-" + f) != null && (e = sessionStorage.getItem(t + "-tabmoduleb-" + f), e.toString().indexOf("+") > -1 && (r = e.split("+"), r.length == 3))) {
                    var i = r[0],
                        u = r[1],
                        tt = r[2];
                    n("#" + i + ".desktopTabbedMod .tabbed-carda ul.tabs-rebrand li.active").removeClass("active");
                    n("#" + i + ".desktopTabbedMod .tabbed-carda ul.tabs-rebrand li:nth-child(" + u + ")").addClass(" active ");
                    n("#" + i + ".desktopTabbedMod .tabbed-carda ul.tabs-rebrand li:last-child").css({
                        "margin-left": tt
                    });
                    n("#" + i + ".desktopTabbedMod .tabbed-carda .tab-container-rebrand .tab-content-rebrand").css({
                        display: "none"
                    });
                    n("#" + i + "-tab" + u).css({
                        display: "block"
                    })
                }
            if (n(".desktopTabbedMod .tabbed-carda ul.tabs-rebrand li ").click(function () {
                var i = n(this),
                    f = i.closest("li"),
                    u = i.closest("ul").find("li").index(f);
                u++;
                var r = i.closest(".desktopTabbedMod"),
                    e = n(".desktopTabbedMod").index(r),
                    o = r.attr("id");
                setTimeout(function () {
                    var n = r.find(".tabbed-carda ul.tabs-rebrand li:last-child").css("margin-left");
                    !disableBrowserStorage && sessionStorage && sessionStorage.setItem(t + "-tabmoduleb-" + e, o + "+" + u + "+" + n)
                }, 500)
            }), n(".testimonial-module-A .carousel-indicators li").length > 0) {
                if (!disableBrowserStorage && sessionStorage)
                    for (h = n(".testimonial-module-A").length, f = 0; f < h; f++) sessionStorage.getItem(t + "-testimonial-" + f) != null && (e = sessionStorage.getItem(t + "-testimonial-" + f), e.toString().indexOf("+") > -1 && (r = e.split("+"), r.length == 2 && (i = r[0], u = r[1], u++ , n("#" + i + ".testimonial-module-A .item.active").removeClass("active"), n("#" + i + ".testimonial-module-A .carousel-indicators .active").removeClass("active"), n("#" + i + ".testimonial-module-A .carousel-indicators li:nth-child(" + u + ")").addClass("active"), n("#" + i + ".testimonial-module-A .carousel-inner .item:nth-child(" + u + ")").addClass("active"))));
                it = n(".testimonial-module-A .carousel-indicators li").length;
                n(".testimonial-module-A .carousel-indicators li").click(function () {
                    var i = n(this),
                        r = i.closest(".testimonial-module-A"),
                        u = n(".testimonial-module-A").index(r),
                        f = r.attr("id");
                    !disableBrowserStorage && sessionStorage && sessionStorage.setItem(t + "-testimonial-" + u, f + "+" + i.attr("data-slide-to"))
                });
                n(".testimonial-module-A .left.carousel-control").click(function () {
                    var u = n(this),
                        i = u.closest(".testimonial-module-A"),
                        f = n(".testimonial-module-A").index(i),
                        r = i.attr("id");
                    setTimeout(function () {
                        var i = n("#" + r + ".testimonial-module-A .carousel-indicators li.active").attr("data-slide-to");
                        !disableBrowserStorage && sessionStorage && sessionStorage.setItem(t + "-testimonial-" + f, r + "+" + i)
                    }, 5)
                });
                n(".testimonial-module-A .right.carousel-control").click(function () {
                    var u = n(this),
                        i = u.closest(".testimonial-module-A"),
                        f = n(".testimonial-module-A").index(i),
                        r = i.attr("id");
                    setTimeout(function () {
                        var i = n("#" + r + ".testimonial-module-A .carousel-indicators li.active").attr("data-slide-to");
                        !disableBrowserStorage && sessionStorage && sessionStorage.setItem(t + "-testimonial-" + f, r + "+" + i)
                    }, 5)
                })
            }
            if (win_width > 750 && (n(".tabbed-module-d").length > 0 && (n(".tabbed-module-d select#country_address1").change(function () {
                var i = n(".tabbed-module-d select#country_address1 option").index(n(".tabbed-module-d select#country_address1 option:selected"));
                !disableBrowserStorage && sessionStorage && sessionStorage.setItem(t + "-tabmoduled-selectedIndex", i)
            }), n(".tabbed-module-d ul.nav-tabs li a").click(function () {
                var i = n(this),
                    r = i.closest("ul.nav-tabs li"),
                    u = n(".tabbed-module-d ul.nav-tabs li").index(r);
                !disableBrowserStorage && sessionStorage && sessionStorage.setItem(t + "-tabmoduled-tabNumber", u)
            }), !disableBrowserStorage && sessionStorage && sessionStorage.getItem(t + "-tabmoduled-tabNumber") && (u = sessionStorage.getItem(t + "-tabmoduled-tabNumber"), n(".tabbed-module-d ul.nav-tabs li.active").removeClass("active"), n(".tabbed-module-d ul.nav-tabs li:nth-child(" + ++u + ")").addClass("active"), n(".tabbed-module-d .tab-content .tab-pane.active").removeClass("active"), n(".tabbed-module-d .tab-content .tab-pane:nth-child(" + u + ")").addClass(" active in ")), !disableBrowserStorage && sessionStorage && sessionStorage.getItem(t + "-tabmoduled-selectedIndex") && (w = sessionStorage.getItem(t + "-tabmoduled-selectedIndex"), n(".tabbed-module-d select#country_address1").val(n(".tabbed-module-d select#country_address1 option:nth-child(" + ++w + ")").attr("value")).change())), n(".carousel-indicators li").length > 0 && (!disableBrowserStorage && sessionStorage && sessionStorage.getItem(t + "-tabbedmoduleE") != null && (l = sessionStorage.getItem(t + "-tabbedmoduleE"), l.toString().indexOf("+") > -1 && (r = l.split("+"), r.length == 2 && (u = parseInt(r[0]), s = parseInt(r[1]), s++ , n("#tabbedModuleE li.active").removeClass("active"), n("#tabbedModuleE li:nth-child(" + u + ")").addClass(" active "), n(".tabbed-module-E .tab-content .tab-pane.active").removeClass("active"), n(".tabbed-module-E .tab-content .tab-pane:nth-child(" + u + ")").addClass(" active in "), n(".tabbed-module-E .tab-content .tab-pane.active .item.active").removeClass("active"), n(".tabbed-module-E .tab-content .tab-pane.active .carousel-indicators .active").removeClass("active"), n(".tabbed-module-E .tab-content .tab-pane.active .carousel-indicators li:nth-child(" + s + ")").addClass("active"), n(".tabbed-module-E").length > 0 ? n(".tabbed-module-E .tab-pane.active .tab-carousel .carousel-inner .item:nth-child(" + s + ")").addClass(" active ") : n(".tabbed-module-E .tab-pane.active .tab-carousel .carousel-inner .item:nth-child(" + s + ")").addClass(" active ")))), nt = n(".tabbed-module-E .tab-content div.active .carousel-indicators li").length, n(".tabbed-module-E .tab-navigation1 li a").click(function () {
                setTimeout(function () {
                    var i = n("#tabbedModuleE li.active"),
                        f = i.closest("li"),
                        r = i.closest("ul").find("li").index(f),
                        u;
                    r++;
                    u = n(".tabbed-module-E #myTabContent div.active .carousel-indicators li.active").attr("data-slide-to");
                    !disableBrowserStorage && sessionStorage && sessionStorage.setItem(t + "-tabbedmoduleE", r + "+" + u)
                }, 10)
            }), a = 0, n(".tabbed-module-E .carousel-indicators li").click(function () {
                var u = n(this),
                    i = n("#tabbedModuleE li.active"),
                    f = i.closest("li"),
                    r = i.closest("ul").find("li").index(f);
                r++;
                a = parseInt(u.attr("data-slide-to"));
                !disableBrowserStorage && sessionStorage && sessionStorage.setItem(t + "-tabbedmoduleE", r + "+" + a)
            }), n(".tabbed-module-E .left.carousel-control").click(function () {
                var i = n(this);
                setTimeout(function () {
                    var f = i.closest(".slide.tab-carousel"),
                        e = f.find(".carousel-indicators li.active").attr("data-slide-to"),
                        r = n("#tabbedModuleE li.active"),
                        o = r.closest("li"),
                        u = r.closest("ul").find("li").index(o);
                    u++;
                    !disableBrowserStorage && sessionStorage && sessionStorage.setItem(t + "-tabbedmoduleE", u + "+" + e)
                }, 5)
            }), n(".tabbed-module-E .right.carousel-control").click(function () {
                var i = n(this);
                setTimeout(function () {
                    var f = i.closest(".slide.tab-carousel"),
                        e = f.find(".carousel-indicators li.active").attr("data-slide-to"),
                        r = n("#tabbedModuleE li.active"),
                        o = r.closest("li"),
                        u = r.closest("ul").find("li").index(o);
                    u++;
                    !disableBrowserStorage && sessionStorage && sessionStorage.setItem(t + "-tabbedmoduleE", u + "+" + e)
                }, 5)
            })), n(".carousel-indicators li").length > 0 && (!disableBrowserStorage && sessionStorage && sessionStorage.getItem(t + "-tabbedmoduleF") != null && (l = sessionStorage.getItem(t + "-tabbedmoduleF"), l.toString().indexOf("+") > -1 && (r = l.split("+"), r.length == 2 && (u = parseInt(r[0]), s = parseInt(r[1]), s++ , n(".tabbed-module-F .nav-tabs li.active").removeClass("active"), n(".tabbed-module-F .nav-tabs li:nth-child(" + u + ")").addClass(" active "), n(".tabbed-module-F .tab-content .tab-pane.active").removeClass("active"), n(".tabbed-module-F .tab-content .tab-pane:nth-child(" + u + ")").addClass(" active in "), n(".tabbed-module-F .tab-content .tab-pane.active .item.active").removeClass("active"), n(".tabbed-module-F .tab-content .tab-pane.active .carousel-indicators .active").removeClass("active"), n(".tabbed-module-F .tab-content .tab-pane.active .carousel-indicators li:nth-child(" + s + ")").addClass("active"), n(".tabbed-module-F").length > 0 ? n(".tabbed-module-F .tab-pane.active .tab-carousel .carousel-inner .item:nth-child(" + s + ")").addClass(" active ") : n(".tabbed-module-F .tab-pane.active .tab-carousel .carousel-inner .item:nth-child(" + s + ")").addClass(" active ")))), nt = n(".tabbed-module-F .tab-content div.active .carousel-indicators li").length, n(".tabbed-module-F .tab-navigation1 li a").click(function () {
                setTimeout(function () {
                    var i = n("#tabModuleF li.active"),
                        f = i.closest("li"),
                        r = i.closest("ul").find("li").index(f),
                        u;
                    r++;
                    u = n(".tabbed-module-F #myTabContent div.active .carousel-indicators li.active").attr("data-slide-to");
                    !disableBrowserStorage && sessionStorage && sessionStorage.setItem(t + "-tabbedmoduleF", r + "+" + u)
                }, 10)
            }), a = 0, n(".tabbed-module-F .carousel-indicators li").click(function () {
                var u = n(this),
                    i = n("#tabModuleF li.active"),
                    f = i.closest("li"),
                    r = i.closest("ul").find("li").index(f);
                r++;
                a = parseInt(u.attr("data-slide-to"));
                !disableBrowserStorage && sessionStorage && sessionStorage.setItem(t + "-tabbedmoduleF", r + "+" + a)
            }), n(".tabbed-module-F .left.carousel-control").click(function () {
                var i = n(this);
                setTimeout(function () {
                    var f = i.closest(".slide.tab-carousel"),
                        e = f.find(".carousel-indicators li.active").attr("data-slide-to"),
                        r = n("#tabModuleF li.active"),
                        o = r.closest("li"),
                        u = r.closest("ul").find("li").index(o);
                    u++;
                    !disableBrowserStorage && sessionStorage && sessionStorage.setItem(t + "-tabbedmoduleF", u + "+" + e)
                }, 5)
            }), n(".tabbed-module-F .right.carousel-control").click(function () {
                var i = n(this);
                setTimeout(function () {
                    var f = i.closest(".slide.tab-carousel"),
                        e = f.find(".carousel-indicators li.active").attr("data-slide-to"),
                        r = n("#tabModuleF li.active"),
                        o = r.closest("li"),
                        u = r.closest("ul").find("li").index(o);
                    u++;
                    !disableBrowserStorage && sessionStorage && sessionStorage.setItem(t + "-tabbedmoduleF", u + "+" + e)
                }, 5)
            })), b = 0, n(".tabbed-module-G-tab").length > 0 && (n(".tabbed-module-G-tab .row ul.nav-tabs li a").click(function () {
                var i = n(this),
                    r;
                if (i.attr("data-position") != undefined) r = i.attr("data-position"), setTimeout(function () {
                    if (!disableBrowserStorage && sessionStorage) {
                        var i = n(".tabbed-module-G-tab .row .tab-content-holder .tab-content").css("top");
                        sessionStorage.setItem(t + "-tabmoduleg-", r + "+" + b + "+" + i)
                    }
                }, 1e3);
                else if (i.hasClass("collapsed")) {
                    var u = n(".tabbed-module-G-tab .row ul.nav-tabs li.active"),
                        s = u.closest("li"),
                        f = u.closest("ul").find("li").index(s);
                    f++;
                    var e = i.closest(".mobile-tab"),
                        h = e.closest(".panel"),
                        o = e.closest(".panel-group").find(".panel").index(h);
                    o++;
                    setTimeout(function () {
                        if (!disableBrowserStorage && sessionStorage) {
                            var i = n(".tabbed-module-G-tab .row .tab-content-holder .tab-content").css("top");
                            sessionStorage.setItem(t + "-tabmoduleg-", f + "+" + o + "+" + i)
                        }
                    }, 1e3)
                }
            }), !disableBrowserStorage && sessionStorage && sessionStorage.getItem(t + "-tabmoduleg-") != null && (e = sessionStorage.getItem(t + "-tabmoduleg-"), e.toString().indexOf("+") > -1 && (r = e.split("+"), r.length == 3))))) {
                var k = r[0],
                    b = r[1],
                    rt = r[2];
                n(".tabbed-module-G-tab ul.commonTabMod li.active").removeClass("active");
                n(".tabbed-module-G-tab ul.commonTabMod li:nth-child(" + k + ")").addClass(" active ");
                n(".tabbed-module-G-tab .tab-content .parent-tab.active").removeClass("active");
                n(".tabbed-module-G-tab .tab-content .parent-tab:nth-child(" + k + ")").addClass(" active in ");
                setTimeout(function () {
                    var t = n(".tabbed-module-G-tab .tab-content .parent-tab.active").attr("id");
                    n("#" + t + " .panel-default:nth-child(" + k + ") .panel-title a").addClass("collapsed");
                    n("#" + t + " .panel-default:nth-child(" + k + ") .panel-collapse").removeClass("in");
                    n("#" + t + " .panel-default:nth-child(" + b + ") .panel-title a").removeClass("collapsed");
                    n("#" + t + " .panel-default:nth-child(" + b + ") .panel-collapse").addClass("in");
                    n(".tabbed-module-G-tab .row .tab-content-holder .tab-content").css({
                        top: rt
                    })
                }, 500)
            }
            if (windowLength < 751) {
                if (h = n(".desktopTabbedMod").length, h > 0) {
                    for (f = 0; f < h; f++) sessionStorage.getItem(t + "-tabmoduleb-" + f) != null && (e = sessionStorage.getItem(t + "-tabmoduleb-" + f), e.toString().indexOf("+") > -1 && (r = e.split("+"), r.length == 2 && (i = r[0], u = r[1], n("#" + i + ".desktopTabbedMod .tabbed-carda .tab-container-rebrand .tab-drawer-heading:nth-child(2)").removeClass("d-active"), n("#" + i + ".desktopTabbedMod .tabbed-carda .tab-container-rebrand .tab-content-rebrand:nth-child(3)").css({
                        display: "none"
                    }), u > 0 && (n("#" + i + ".desktopTabbedMod .tabbed-carda .tab-container-rebrand .tab-drawer-heading:nth-child(" + 2 * u + ")").addClass("d-active"), n("#" + i + ".desktopTabbedMod .tabbed-carda .tab-container-rebrand .tab-content-rebrand:nth-child(" + (2 * u + 1) + ")").css({
                        display: "block"
                    })))));
                    n(".desktopTabbedMod .tabbed-carda .tab-container-rebrand .tab-drawer-heading ").click(function () {
                        var l = n(this),
                            o = parseInt(n(this).data("position")),
                            s = l.closest(".desktopTabbedMod"),
                            a = n(".desktopTabbedMod").length,
                            v = n(".desktopTabbedMod").index(s),
                            h = s.attr("id"),
                            y = h + "+" + o,
                            r, u, f, i, e, c;
                        if (!disableBrowserStorage && sessionStorage)
                            for (r = 0; r < a; r++) v == r && (u = sessionStorage.getItem(t + "-tabmoduleb-" + r), u == null && (u = "tabbed-module-full"), sessionStorage.setItem(t + "-tabmoduleb-" + r, h + "+" + o), sessionStorage.removeItem(t + "-tabmoduleB-loadmoreclicks-" + r), u.toString().indexOf("+") > -1 && (f = u.split("+"), f.length == 2 && (i = f[0], e = f[1], u != y && (sessionStorage.removeItem(t + "-tabmoduleB-loadmoreclicks-" + r), c = n("#" + i + " .tabbed-carda .tab-container-rebrand .d-active").next(".tab-content-rebrand").attr("id"), n("#" + i + " .left-single-card-a.mixed-cards").length > 0 && n("#" + c + " .left-single-card-a.mixed-cards").each(function () {
                                var t = n(this),
                                    u = n(t).find(".card-a-body").outerHeight(),
                                    r = n(t).find(".card-a-body h2").outerHeight(!0) + n(t).find(".card-a-body .colp-land").outerHeight();
                                win_width < 751 && r > 410 && (n("#" + i + " .tab-container-rebrand #" + i + "-tab" + e + " .cards-a .left-single-card-a.mixed-cards  .fadeout").css({
                                    display: "block"
                                }), n("#" + i + " .tab-container-rebrand #" + i + "-tab" + e + " .cards-a .left-single-card-a.mixed-cards  .showtab").css({
                                    display: "block"
                                }), n("#" + i + " .tab-container-rebrand #" + i + "-tab" + e + " .cards-a .left-single-card-a.mixed-cards").removeClass("scroll-text"))
                            }), (i == "tabbed-module-full" || i == "tabbed-full") && (n(".card-a-module #tabbed-module-full-tab1 .cards-a .left-single-card-a.scroll-text .fadeout").css({
                                display: "block"
                            }), n(".card-a-module #tabbed-module-full-tab1 .cards-a .left-single-card-a.mixed-cards .showtab").css({
                                display: "block"
                            }), n(".card-a-module .tabbed-carda .tab-container-rebrand #tabbed-module-full-tab1 .cards-a .colp-land").removeAttr("style"), n(".card-a-module #tabbed-full-tab1 .cards-a .left-single-card-a.mixed-cards .showtab").css({
                                display: "block"
                            }), n(".card-a-module .tabbed-carda .tab-container-rebrand #tabbed-full-tab1 .cards-a .colp-land").removeAttr("style"), n(".card-a-module #tabbed-full-tab1 .cards-a .left-single-card-a.scroll-text .fadeout").css({
                                display: "block"
                            }))))))
                    })
                }
                if (windowLength < 751 && n(".desktopTabbedMod").length > 0 && (n(".desktopTabbedMod .tabbed-carda .tab-container-rebrand .tab-content-rebrand  .showtab").click(function () {
                    var o = n(this),
                        u = 0,
                        s = parseInt(n(this).data("position")),
                        h = n(".desktopTabbedMod").length,
                        f = o.closest(".desktopTabbedMod"),
                        c = f.attr("id"),
                        i = n(".desktopTabbedMod").index(f),
                        l = f.attr("id"),
                        a = l + "+" + s,
                        r, e;
                    if (!disableBrowserStorage && sessionStorage)
                        for (r = 0; r < h; r++) i == r && (e = sessionStorage.getItem(t + "-tabmoduleb-" + i), u++ , sessionStorage.setItem(t + "-tabmoduleB-loadmoreclicks-" + i, e + "+" + u), e == null && sessionStorage.setItem(t + "-tabmoduleB-loadmoreclicks-" + i, c + "+" + u))
                }), !disableBrowserStorage && sessionStorage && n(".desktopTabbedMod").length > 0))
                    for (h = n(".desktopTabbedMod").length, f = 0; f <= h; f++)
                        if (sessionStorage.getItem(t + "-tabmoduleB-loadmoreclicks-" + f) != null && (e = sessionStorage.getItem(t + "-tabmoduleB-loadmoreclicks-" + f), e.toString().indexOf("+") > -1))
                            if (r = e.split("+"), r.length == 3) {
                                var i = r[0],
                                    u = r[1],
                                    ut = r[2];
                                u > 0 && (n("#" + i + " #" + i + "-tab" + u + " .cards-a .left-single-card-a.mixed-cards .fadeout").css({
                                    display: "none"
                                }), n("#" + i + " #" + i + "-tab" + u + " .cards-a .left-single-card-a.mixed-cards .showtab").css({
                                    display: "none"
                                }), n("#" + i + " #" + i + "-tab" + u + " .cards-a .left-single-card-a").removeClass("scroll-text"), n("#" + i + " #" + i + "-tab" + u + " .cards-a .left-single-card-a.mixed-cards .card-a-body .colp-land").css({
                                    "max-height": "initial"
                                }), n("#" + i + " #" + i + "-tab" + u + " .cards-a .left-single-card-a.mixed-cards .card-a-body .colp-land").css({
                                    "margin-bottom": "0px"
                                }))
                            } else r.length == 2 && (i = r[0], u = r[1], i.includes("tabbed-module-full") ? (n(".card-a-module #tabbed-module-full-single-tab1 .cards-a .left-single-card-a .fadeout").css({
                                display: "none"
                            }), n(".card-a-module #tabbed-module-full-single-tab1 .cards-a .left-single-card-a.mixed-cards .showtab").css({
                                display: "none"
                            }), n(".card-a-module #tabbed-module-full-single-tab1 .cards-a .left-single-card-a.mixed-cards .card-a-body .colp-land").css({
                                "max-height": "initial"
                            }), n(".card-a-module #tabbed-module-full-single-tab1 .cards-a .left-single-card-a.mixed-cards .card-a-body .colp-land").css({
                                "margin-bottom": "0px"
                            }), n(".card-a-module #tabbed-module-full-tab1 .cards-a .left-single-card-a .fadeout").css({
                                display: "none"
                            }), n(".card-a-module #tabbed-module-full-tab1 .cards-a .left-single-card-a.mixed-cards .showtab").css({
                                display: "none"
                            }), n(".card-a-module #tabbed-module-full-tab1 .cards-a .left-single-card-a.mixed-cards .card-a-body .colp-land").css({
                                "max-height": "initial"
                            }), n(".card-a-module #tabbed-module-full-tab1 .cards-a .left-single-card-a.mixed-cards .card-a-body .colp-land").css({
                                "margin-bottom": "0px"
                            })) : i.includes("tabbed-module-half") && (n(".card-a-module #tabbed-module-half-single-tab1 .cards-a .left-single-card-a .fadeout").css({
                                display: "none"
                            }), n(".card-a-module #tabbed-module-half-single-tab1 .cards-a .left-single-card-a.mixed-cards .showtab").css({
                                display: "none"
                            }), n(".card-a-module #tabbed-module-half-single-tab1 .cards-a .left-single-card-a.mixed-cards .card-a-body .colp-land").css({
                                "max-height": "initial"
                            }), n(".card-a-module #tabbed-module-half-single-tab1 .cards-a .left-single-card-a.mixed-cards .card-a-body .colp-land").css({
                                "margin-bottom": "0px"
                            }), n(".card-a-module #tabbed-module-half-tab1 .cards-a .left-single-card-a .fadeout").css({
                                display: "none"
                            }), n(".card-a-module #tabbed-module-half-tab1 .cards-a .left-single-card-a.mixed-cards .showtab").css({
                                display: "none"
                            }), n(".card-a-module #tabbed-module-half-tab1 .cards-a .left-single-card-a.mixed-cards .card-a-body .colp-land").css({
                                "max-height": "initial"
                            }), n(".card-a-module #tabbed-module-half-tab1 .cards-a .left-single-card-a.mixed-cards .card-a-body .colp-land").css({
                                "margin-bottom": "0px"
                            })));
                if (n(".content-section.content-module-G-multiple ").length > 0) {
                    n(document.body).on("click", ".content-section.content-module-G-multiple .panel-group .panel-title a", function () {
                        var i = n(this),
                            t = n(".content-section.content-module-G-multiple").find(".panel-group .panel-title").index(i.parent()),
                            r;
                        t++;
                        r = n(".content-module-G-multiple").index(i.closest(".content-module-G-multiple"));
                        t != 1 ? !disableBrowserStorage && sessionStorage && (sessionStorage.getItem("-contentg-") == t ? sessionStorage.removeItem("-contentg-") : sessionStorage.setItem("-contentg-", t)) : sessionStorage.removeItem("-contentg-")
                    });
                    !disableBrowserStorage && sessionStorage && sessionStorage.getItem("-contentg-") != null && (v = sessionStorage.getItem("-contentg-"), v != null && setTimeout(function () {
                        n(".content-section.content-module-G-multiple .panel-default:nth-child(1) .panel-heading .panel-title a").addClass("collapsed");
                        n(".content-section.content-module-G-multiple .panel-default:nth-child(1) .panel-collapse").removeClass("in");
                        v > 1 && (n(".content-section.content-module-G-multiple .panel-default:nth-child(" + v + ") .panel-title a").removeClass("collapsed"), n(".content-section.content-module-G-multiple .panel-default:nth-child(" + v + ") .panel-collapse").addClass("in"))
                    }, 1e3))
                }
                if (n(".tabbed-module-d").length > 0) {
                    n(document.body).on("click", ".tabbed-module-d h4.panel-title a", function () {
                        var r = n(this),
                            u = r.closest("h4.panel-title a"),
                            i = n(".tabbed-module-d h4.panel-title").index(r.parent());
                        i++;
                        setTimeout(function () {
                            i != 1 ? !disableBrowserStorage && sessionStorage && (sessionStorage.getItem(t + "-tabmoduled-selectedIndex") == i ? sessionStorage.removeItem(t + "-tabmoduled-selectedIndex") : sessionStorage.setItem(t + "-tabmoduled-selectedIndex", i)) : sessionStorage.removeItem(t + "-tabmoduled-selectedIndex")
                        }, 500)
                    });
                    n(".tabbed-module-d select#country_address1").change(function () {
                        var i = n(".tabbed-module-d select#country_address1 option").index(n(".tabbed-module-d select#country_address1 option:selected"));
                        !disableBrowserStorage && sessionStorage && sessionStorage.setItem(t + "-tabmoduled-selectedIndex-1", i)
                    });
                    !disableBrowserStorage && sessionStorage && (sessionStorage.getItem(t + "-tabmoduled-selectedIndex") != null && (y = sessionStorage.getItem(t + "-tabmoduled-selectedIndex"), y != null && setTimeout(function () {
                        n(".tabbed-module-d .container .row .tab-heading .panel-group .panel-default:nth-child(1) .panel-heading .panel-title a").addClass("collapsed");
                        n(".tabbed-module-d .container .row .tab-heading .panel-group .panel-default:nth-child(1) .panel-collapse").removeClass("in");
                        y > 1 && (n(".tabbed-module-d .panel-default:nth-child(" + y + ") .panel-title a").removeClass("collapsed"), n(".tabbed-module-d .panel-default:nth-child(" + y + ") .panel-collapse").addClass("in"))
                    }, 1e3)), sessionStorage.getItem(t + "-tabmoduled-selectedIndex-1") && (w = sessionStorage.getItem(t + "-tabmoduled-selectedIndex-1"), n(".tabbed-module-d select#country_address1").val(n(".tabbed-module-d select#country_address1 option:nth-child(" + ++w + ")").attr("value")).change()))
                }
                if (n(".tabbed-module-G-tab ").length > 0) {
                    o = 0;
                    n("#job-roles-tab .viewmore").click(function () {
                        var n = 0;
                        n++;
                        sessionStorage.getItem(t + "-tabnumber") != null && (n = sessionStorage.getItem(t + "-tabnumber"));
                        o++;
                        !disableBrowserStorage && sessionStorage && sessionStorage.setItem(t + "-tabmoduleG-loadmoreclicks" + n, o)
                    });
                    n(document.body).on("click", ".tabbed-module-G-tab .panel-heading .panel-title a", function () {
                        var r = n(this),
                            u = r.closest(".tabbed-module-G-tab"),
                            f = r.closest(".panel-default"),
                            i = u.find(".panel-default").index(f);
                        i++;
                        i != 1 ? !disableBrowserStorage && sessionStorage && (sessionStorage.getItem(t + "-tabnumber") == i ? sessionStorage.removeItem(t + "-tabnumber") : sessionStorage.setItem(t + "-tabnumber", i)) : sessionStorage.removeItem(t + "-tabnumber")
                    });
                    n("body").on("click", ".dropdown-menu.mobile-list li a", function () {
                        var r = n(".dropdown-menu.mobile-list li.selected").index(),
                            i = sessionStorage.getItem(t + "-tabnumber");
                        r++;
                        i == null && (i = 1);
                        !disableBrowserStorage && sessionStorage && (sessionStorage.getItem(t + "-tabnumber-dropdown") != null && sessionStorage.removeItem(t + "-tabnumber-dropdown"), sessionStorage.setItem(t + "-tabnumber-dropdown", i + "+" + r))
                    });
                    !disableBrowserStorage && sessionStorage && setTimeout(function () {
                        for (var f, u, e, i, o, s, h = n(".tabbed-module-G-tab .panel-default").length, r = 1; r <= h; r++)
                            if (sessionStorage.getItem(t + "-tabmoduleG-loadmoreclicks" + r) != null && (f = sessionStorage.getItem(t + "-tabmoduleG-loadmoreclicks" + r), f > 0))
                                for (u = 1; u <= f; u++)
                                    for (e = u * 10, i = 1; i <= 10; i++) i, n(".tabbed-module-G-tab .panel-default:nth-child(" + (e + i) + ")").css({
                                        display: "block"
                                    }), o = n(".tabbed-module-G-tab .panel-default").length, s = n(".tabbed-module-G-tab #tabset-accordion").children("div").filter(function () {
                                        return n(this).css("display") == "block"
                                    }).length, s == o && n(".tabbed-module-G-tab .more-results-g").css({
                                        display: "none"
                                    })
                    }, 1e3);
                    !disableBrowserStorage && sessionStorage && sessionStorage.getItem(t + "-tabnumber") != null && (i = sessionStorage.getItem(t + "-tabnumber"), setTimeout(function () {
                        n(".tabbed-module-G-tab .panel-default:nth-child(1) .panel-title a").addClass("collapsed");
                        n(".tabbed-module-G-tab .panel-default:nth-child(1) .panel-collapse").removeClass("in");
                        i > 1 && (n(".tabbed-module-G-tab .panel-default:nth-child(" + i + ") .panel-title a").removeClass("collapsed"), n(".tabbed-module-G-tab .panel-default:nth-child(" + i + ") .panel-collapse").addClass("in"))
                    }, 1e3));
                    !disableBrowserStorage && sessionStorage && sessionStorage.getItem(t + "-tabnumber-dropdown") != null && (e = sessionStorage.getItem(t + "-tabnumber-dropdown"), e.toString().indexOf("+") > -1 && (r = e.split("+"), r.length == 2 && (i = r[0], u = r[1], setTimeout(function () {
                        i > 1 && n(".tabbed-module-G-tab .panel-default:nth-child(" + i + ") .mobile-list").html(n(".tabbed-module-G-tab .panel-default:nth-child(" + i + ") .listitems").html());
                        n(".tabbed-module-G-tab .panel-default:nth-child(" + i + ") .dropdown-menu.mobile-list li:nth-child(" + u + ")").addClass("selected");
                        n(".tabbed-module-G-tab .panel-default:nth-child(" + i + ") .mobile-list-holder .dropdown-toggle .selected-item").text(n(".tabbed-module-G-tab .panel-default:nth-child(" + i + ") .dropdown-menu.mobile-list li.selected").text());
                        n(".tabbed-module-G-tab .panel-default:nth-child(" + i + ") .tab-content .tab-pane:nth-child(" + u + ")").addClass(" active in ")
                    }, 1e3))))
                }
                if (n(".tabbed-module-E ").length > 0) {
                    o = 0;
                    n("#auto-tabbed-e .more-link-up1").click(function () {
                        var n = 0;
                        n++;
                        sessionStorage.getItem(t + "-tabnumber") != null && (n = sessionStorage.getItem(t + "-tabnumber"));
                        o++;
                        !disableBrowserStorage && sessionStorage && sessionStorage.setItem(t + "-tabmoduleE-loadmoreclicks" + n, o)
                    });
                    n(document.body).on("click", ".tabbed-module-E .panel-heading .panel-title a", function () {
                        var r = n(this),
                            u = r.closest(".tabbed-module-E"),
                            f = r.closest(".panel-default"),
                            i = u.find(".panel-default").index(f);
                        i++;
                        i != 1 ? !disableBrowserStorage && sessionStorage && (sessionStorage.getItem(t + "-tabnumber") == i ? sessionStorage.removeItem(t + "-tabnumber") : sessionStorage.setItem(t + "-tabnumber", i)) : sessionStorage.removeItem(t + "-tabnumber")
                    });
                    !disableBrowserStorage && sessionStorage && setTimeout(function () {
                        for (var u, r, f, e, o = n(".tabbed-module-E .panel-default").length, i = 1; i <= o; i++)
                            if (sessionStorage.getItem(t + "-tabmoduleE-loadmoreclicks" + i) != null && (u = sessionStorage.getItem(t + "-tabmoduleE-loadmoreclicks" + i), u > 0))
                                for (r = 1; r <= u; r++) n(".tabbed-module-E .panel-default:nth-child(" + i + ") .tab-carousel .item:nth-child(" + r + ") .team-details .row .col-md-3").css({
                                    display: "block"
                                }), f = n(".tabbed-module-E .panel-default:nth-child(" + i + ") .tab-carousel .item .team-details .row .col-md-3").length, e = n(".tabbed-module-E .panel-default:nth-child(" + i + ") .tab-carousel .item .team-details .row").children("div").filter(function () {
                                    return n(this).css("display") == "block"
                                }).length, e == f && n(".tabbed-module-E .panel-default:nth-child(" + i + ") .more-results-e").css({
                                    display: "none"
                                })
                    }, 1e3);
                    !disableBrowserStorage && sessionStorage && sessionStorage.getItem(t + "-tabnumber") != null && (i = sessionStorage.getItem(t + "-tabnumber"), setTimeout(function () {
                        n(".tabbed-module-E .panel-default:nth-child(1) .panel-title a").addClass("collapsed");
                        n(".tabbed-module-E .panel-default:nth-child(1) .panel-collapse").removeClass("in");
                        i > 1 && (n(".tabbed-module-E .panel-default:nth-child(" + i + ") .panel-title a").removeClass("collapsed"), n(".tabbed-module-E .panel-default:nth-child(" + i + ") .panel-collapse").addClass("in"))
                    }, 1e3))
                }
                if (n(".tabbed-module-F").length > 0) {
                    o = 0;
                    n("#TabModuleF .more-link-f").click(function () {
                        var n = 0;
                        n++;
                        sessionStorage.getItem(t + "-tabnumber") != null && (n = sessionStorage.getItem(t + "-tabnumber"));
                        o++;
                        !disableBrowserStorage && sessionStorage && sessionStorage.setItem(t + "-tabmodulef-loadmoreclicks" + n, o)
                    });
                    n(document.body).on("click", ".tabbed-module-F .panel-heading .panel-title a", function () {
                        var r = n(this),
                            u = r.closest(".tabbed-module-F"),
                            f = r.closest(".panel-default"),
                            i = u.find(".panel-default").index(f);
                        i++;
                        i != 1 ? !disableBrowserStorage && sessionStorage && (sessionStorage.getItem(t + "-tabnumber") == i ? sessionStorage.removeItem(t + "-tabnumber") : sessionStorage.setItem(t + "-tabnumber", i)) : sessionStorage.removeItem(t + "-tabnumber")
                    });
                    !disableBrowserStorage && sessionStorage && setTimeout(function () {
                        for (var u, r, f, e, o = n(".tabbed-module-F .panel-default").length, i = 1; i <= o; i++)
                            if (sessionStorage.getItem(t + "-tabmodulef-loadmoreclicks" + i) != null && (u = sessionStorage.getItem(t + "-tabmodulef-loadmoreclicks" + i), u > 0))
                                for (r = 1; r <= u; r++) n(".tabbed-module-F .panel-default:nth-child(" + i + ") .tab-carousel .item:nth-child(" + (r + 1) + ") .team-details .row .col-xs-12").css({
                                    display: "block"
                                }), f = n(".tabbed-module-F .panel-default:nth-child(" + i + ") .tab-carousel .item .team-details .row .col-xs-12").length, e = n(".tabbed-module-F .panel-default:nth-child(" + i + ") .tab-carousel .item .team-details .row").children("div").filter(function () {
                                    return n(this).css("display") == "block"
                                }).length, e == f && n(".tabbed-module-F .panel-default:nth-child(" + i + ") .more-results-f").css({
                                    display: "none"
                                })
                    }, 1e3);
                    !disableBrowserStorage && sessionStorage && sessionStorage.getItem(t + "-tabnumber") != null && (i = sessionStorage.getItem(t + "-tabnumber"), setTimeout(function () {
                        n(".tabbed-module-F .panel-default:nth-child(1) .panel-title a").addClass("collapsed");
                        n(".tabbed-module-F .panel-default:nth-child(1) .panel-collapse").removeClass("in");
                        i > 1 && (n(".tabbed-module-F .panel-default:nth-child(" + i + ") .panel-title a").removeClass("collapsed"), n(".tabbed-module-F .panel-default:nth-child(" + i + ") .panel-collapse").addClass("in"))
                    }, 1e3))
                }
            }
        }
    }

    function u(n) {
        return /[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(n) ? !0 : !1
    }
    var t = window.location.pathname,
        i;
    n.when(r()).done(function () {
        refreshIndicators()
    });
    n(document).ready(function (n) {
        var t = n(".intrapage-nav").parent().parent().next().css("background-color");
        n(".intrapage-nav").css("background-color", t);
        n(".intrapage-nav").parent().css("background-color", t)
    });
    n(".rebrand-intra-nav").length && n(".intrapage-nav").closest("section").prev("div, section") && (i = n(".rebrand-intra-nav").offset().top - 240, n(window).scroll(function () {
        n(window).scrollTop() > i ? n(".intrapage-nav").addClass("shrinkedchange") : n(window).scrollTop() < i && n(".intrapage-nav").removeClass("shrinkedchange")
    }));
    n(document).ready(function () {
        var i;
        if (n("section.cross-nav-module .right img").click(function () {
            n(this).parent().parent().children().children().removeClass("rebrand-second");
            var t = n(this).parent().parent().find(".active").next("div");
            t.length == 0 ? n(this).parent().parent().first(".item").children().children().addClass("rebrand-second") : n(this).parent().parent().find(".active").next("div").children().addClass("rebrand-second");
            n(this).parent().parent().find(".item").children().removeClass("rebrand-first")
        }), n("section.cross-nav-module .left img").click(function () {
            n(this).parent().parent().children().children().removeClass("rebrand-first");
            var t = n(this).parent().parent().find(".active").prev("div");
            t.length == 0 ? n(this).parent().parent().last(".item").children().children().addClass("rebrand-first") : n(this).parent().parent().find(".active").prev("div").children().addClass("rebrand-first");
            n(this).parent().parent().find(".item").children().removeClass("rebrand-second")
        }), n(".cross-nav-module .carousel-control img").click(function () {
            n(".cross-nav-module .carousel").removeClass("slide")
        }), win_width > 751 && n("section").hasClass("rebrand-slider-anim") && (i = 0, n(".carousel .item").each(function () {
            n(".lastClass", this).each(function () {
                n(this).height() > i && (i = n(this).height())
            })
        }), n(".rebrand-slider-anim .carousel .item").css({
            height: i
        })), win_width < 751) {
            function t(t) {
                n("#NavigationModal.modal .modal-dialog, #GlobalModal.modal .modal-dialog,#sharingInPageContentK.modal .modal-dialog,#searchModal.modal .modal-dialog").attr("class", "modal-dialog  " + t + "  animated")
            }
            n("#NavigationModal, #GlobalModal, #sharingInPageContentK , #searchModal").on("show.bs.modal", function () {
                t("fadeInRight")
            });
            n("#NavigationModal, #GlobalModal, #sharingInPageContentK ,#searchModal").on("hide.bs.modal", function () {
                t("fadeOutRight")
            });
            n(".modal-body.search-frm1").removeClass("fadeInDown").removeClass("fadeInRight")
        }
        var t = 0,
            r = navigator.userAgent.toLowerCase(),
            u = r.match(/(iPad|iPhone|iPod)/i);
        if (u) {
            function i() {
                n(".modal").on("show.bs.modal", function () {
                    t = n("body").scrollTop();
                    n("body").css({
                        overflow: "hidden",
                        position: "fixed",
                        top: -t
                    })
                }).on("hide.bs.modal", function () {
                    n("body").css({
                        overflow: "",
                        position: "",
                        top: ""
                    }).scrollTop(t)
                });
                n("body").on("click", ".cookie-settings-button", function () {
                    t = n("body").scrollTop();
                    n("body").css({
                        overflow: "hidden",
                        position: "fixed",
                        top: -t
                    })
                });
                n("body").on("click", ".optanon-close-link,.optanon-white-button-middle", function () {
                    n("body").css({
                        overflow: "",
                        position: "",
                        top: ""
                    }).scrollTop(t)
                })
            }
            i()
        }
    });
    windowLength > 750 ? n(".sign-up-frm").children().find(".mktoButton").addClass("HeaderSubscribeDesktop") : n(".sign-up-frm").children().find(".mktoButton").addClass("HeaderSubscribe");
    n(".subscribeFooterInstance ").children().find(".mktoButton").addClass("FooterSubscribe");
    n(document).on("input", ".mktoEmailField", function () {
        var t = n(this);
        t !== null && t.val() == "" ? t.closest("form").find(".mktoButton").attr("disabled", "disabled") : t !== null && u(t.val()) ? t.closest("form").find(".mktoButton").removeAttr("disabled").addClass("active") : t.closest("form").find(".mktoButton").attr("disabled", "disabled")
    });
    n(document).ready(function () {
        var r;
        if (windowLength < 751) {
            var t, i = 0,
                u = 5,
                f = n("header").outerHeight();
            n(window).scroll(function () {
                t = !0
            });
            setInterval(function () {
                t && (r(), t = !1)
            }, 250);

            function r() {
                var t = n(this).scrollTop();
                Math.abs(i - t) <= u || (t > i && t > f ? n(".fixed-sharing").removeClass("nav-down").addClass("nav-up") : t + n(window).height() < n(document).height() && n(".fixed-sharing").removeClass("nav-up").addClass("nav-down"), i = t)
            }
        }
        n("body").on("click", ".img-Infographic-Modal .modal-dialog", function (t) {
            if (n(t.target).hasClass("modal-dialog")) {
                var i = n(t.target.parentElement).attr("id");
                n("#" + i).modal("hide");
                n("#Modal-D.img-Infographic-Modal.play-Video-L .modal-dialog .modal-body ").remove();
                n("#modalPlayer").remove();
                n("#singlePlayer-").remove();
                n("#modalPlaylistPlayer").remove()
            }
        });
        n(".img-modal").on("hidden.bs.modal", function () {
            n("#modalPlayer").remove();
            n("#singlePlayer-").remove();
            n("#modalPlaylistPlayer").remove()
        });
        n("ul").on("click", ".init", function () {
            n(this).closest("ul").children("li:not(.init)").toggle()
        });
        r = n("ul").children("li:not(.init)");
        n("ul").on("click", "li:not(.init)", function () {
            r.removeClass("selected");
            n(this).addClass("selected")
        })
    });
    windowLength < 751 && n(document).ready(function () {
        n("ul.mobile-list").on("click", ".init", function () {
            n(this).closest("ul.mobile-list").children("li:not(.init)").toggle()
        });
        var t = n("ul.mobile-list").children("li:not(.init)");
        n("ul.mobile-list").on("click", "li:not(.init)", function () {
            n(this).siblings().removeClass("selected");
            n(this).addClass("selected")
        })
    })
});
jQuery(".modal-custom").on("shown.bs.modal", function () {
    jQuery("#search").focus()
});
jQuery(".optanon-alert-box-body").attr("tabindex", "1").focus();
jQuery(".optanon-alert-box-body p a").attr("tabindex", "2");
jQuery(".cookie-settings-button, .optanon-toggle-display").attr("tabindex", "3");
jQuery(".accept-cookies-button, .optanon-allow-all").attr("tabindex", "4");
setTimeout(function () {
    href = jQuery(".pinterest span").attr("data-pin-href");
    class1 = jQuery(".pinterest span").attr("class");
    datalog1 = jQuery(".pinterest span").attr("data-pin-log");
    jQuery(".desk").wrapInner('<a data-pin-log="' + datalog1 + '" href ="' + href + '" / rel ="nofollow">')
}, 5e3);
win_width > 750 && jQuery("#myCarousel").bind("slide.bs.carousel", function () {
    jQuery(this).find(".accessbuilt").focus();
    jQuery(this).find(".content").focus()
});
jQuery(document).keyup(function (n) {
    n.which == 27 && jQuery(".popover").popover("hide")
});
jQuery(".skip,.content-module-D .play-btn").click(function () {
    event.preventDefault()
});
flag = 0;
jQuery(document).ready(function () {
    if (windowLength < 751) {
        function n() {
            var r, n, u, i, t, f;
            if (jQuery(".tabbed-module-G-tab ").length > 0) {
                r = 0;
                n = window.location.pathname;
                jQuery("#auto-tabbed-g .viewmore").click(function () {
                    var t = 0;
                    t++;
                    sessionStorage.getItem(n + "-tabnumber") != null && (t = sessionStorage.getItem(n + "-tabnumber"));
                    r++;
                    !disableBrowserStorage && sessionStorage && sessionStorage.setItem(n + "-tabmoduleG-loadmoreclicks" + t, r)
                });
                jQuery(document.body).on("click", ".tabbed-module-G-tab .panel-heading .panel-title a", function () {
                    var i = jQuery(this),
                        r = i.closest(".tabbed-module-G-tab"),
                        u = i.closest(".panel-default"),
                        t = r.find(".panel-default").index(u);
                    t++;
                    t != 1 ? !disableBrowserStorage && sessionStorage && (sessionStorage.getItem(n + "-tabnumber-dropdown") != null && sessionStorage.removeItem(n + "-tabnumber-dropdown"), sessionStorage.getItem(n + "-tabnumber") == t ? (sessionStorage.removeItem(n + "-tabnumber"), jQuery(".tabbed-module-G-tab .panel-default:nth-child(" + t + ") .tab-content .tab-pane:nth-child(1)").addClass(" active in ")) : (sessionStorage.setItem(n + "-tabnumber", t), jQuery(".tabbed-module-G-tab .panel-default:nth-child(" + t + ") .tab-content .tab-pane:nth-child(1)").addClass(" active in "), jQuery(".tabbed-module-G-tab .panel-default:nth-child(" + t + ") .dropdown-menu.mobile-list li:nth-child(1)").addClass("selected"))) : (sessionStorage.getItem(n + "-tabnumber-dropdown") != null && sessionStorage.removeItem(n + "-tabnumber-dropdown"), sessionStorage.removeItem(n + "-tabnumber"))
                });
                jQuery("ul.mobile-list").on("click", "li:not(.init)", function () {
                    jQuery(this).siblings().removeClass("selected");
                    jQuery(this).addClass("selected")
                });
                jQuery("body").on("click", ".dropdown-menu.mobile-list li a", function () {
                    var i = jQuery(".dropdown-menu.mobile-list li.selected").index(),
                        t = sessionStorage.getItem(n + "-tabnumber");
                    i++;
                    t == null && (t = 1);
                    jQuery(".tabbed-module-G-tab .panel-default:nth-child(" + t + ") .mobile-list-holder .dropdown-toggle .selected-item").text(jQuery(".tabbed-module-G-tab .panel-default:nth-child(" + t + ") .dropdown-menu.mobile-list li.selected").text());
                    !disableBrowserStorage && sessionStorage && (sessionStorage.getItem(n + "-tabnumber-dropdown") != null && sessionStorage.removeItem(n + "-tabnumber-dropdown"), sessionStorage.setItem(n + "-tabnumber-dropdown", t + "+" + i))
                });
                !disableBrowserStorage && sessionStorage && setTimeout(function () {
                    for (var u, r, f, t, e, o, s = jQuery(".tabbed-module-G-tab .panel-default").length, i = 1; i <= s; i++)
                        if (sessionStorage.getItem(n + "-tabmoduleG-loadmoreclicks" + i) != null && (u = sessionStorage.getItem(n + "-tabmoduleG-loadmoreclicks" + i), u > 0))
                            for (r = 1; r <= u; r++)
                                for (f = r * 10, t = 1; t <= 10; t++) t, jQuery(".tabbed-module-G-tab .panel-default:nth-child(" + (f + t) + ")").css({
                                    display: "block"
                                }), e = jQuery(".tabbed-module-G-tab .panel-default").length, o = jQuery(".tabbed-module-G-tab #tabset-accordion").children("div").filter(function () {
                                    return jQuery(this).css("display") == "block"
                                }).length, o == e && jQuery(".tabbed-module-G-tab .more-results-g").css({
                                    display: "none"
                                })
                }, 1e3);
                !disableBrowserStorage && sessionStorage && sessionStorage.getItem(n + "-tabnumber") != null && (t = sessionStorage.getItem(n + "-tabnumber"), setTimeout(function () {
                    jQuery(".tabbed-module-G-tab .panel-default:nth-child(1) .panel-title a").addClass("collapsed");
                    jQuery(".tabbed-module-G-tab .panel-default:nth-child(1) .panel-collapse").removeClass("in");
                    t > 1 && (jQuery(".tabbed-module-G-tab .panel-default:nth-child(" + t + ") .panel-title a").removeClass("collapsed"), jQuery(".tabbed-module-G-tab .panel-default:nth-child(" + t + ") .panel-collapse").addClass("in"), jQuery(".tabbed-module-G-tab .panel-default:nth-child(" + t + ") .mobile-list").html(jQuery(".tabbed-module-G-tab .panel-default:nth-child(" + t + ") .listitems").html()), jQuery(".tabbed-module-G-tab .panel-default:nth-child(" + t + ") .mobile-list-holder .dropdown-toggle .selected-item").text(jQuery(".tabbed-module-G-tab .panel-default:nth-child(" + t + ") .dropdown-menu.mobile-list li:nth-child(1)").text()))
                }, 1e3));
                !disableBrowserStorage && sessionStorage && sessionStorage.getItem(n + "-tabnumber-dropdown") != null && (u = sessionStorage.getItem(n + "-tabnumber-dropdown"), u.toString().indexOf("+") > -1 && (i = u.split("+"), i.length == 2 && (t = i[0], f = i[1], setTimeout(function () {
                    t > 1 && jQuery(".tabbed-module-G-tab .panel-default:nth-child(" + t + ") .mobile-list").html(jQuery(".tabbed-module-G-tab .panel-default:nth-child(" + t + ") .listitems").html());
                    jQuery(".tabbed-module-G-tab .panel-default:nth-child(" + t + ") .dropdown-menu.mobile-list li:nth-child(" + f + ")").addClass("selected");
                    jQuery(".tabbed-module-G-tab .panel-default:nth-child(" + t + ") .mobile-list-holder .dropdown-toggle .selected-item").text(jQuery(".tabbed-module-G-tab .panel-default:nth-child(" + t + ") .dropdown-menu.mobile-list li.selected").text());
                    jQuery(".tabbed-module-G-tab .panel-default:nth-child(" + t + ") .tab-content .tab-pane").removeClass(" active in ");
                    jQuery(".tabbed-module-G-tab .panel-default:nth-child(" + t + ") .tab-content .tab-pane:nth-child(" + f + ")").addClass(" active in ");
                    flag++
                }, 1e3))))
            }
        }
        jQuery.when(n()).done(function () {
            refreshIndicators()
        })
    }
});
jQuery(window).on("load", function () {
    flag == 0 && jQuery("section.tabbed-module-G-tab .js-tabcollapse-panel-body .tab-content > div:first-child").addClass("fade active in")
});
if (is_iPad = navigator.userAgent.match(/iPad/i) !== null, is_iPad === !0 && jQuery(".rebrand").addClass("ipadlandscape"), navigator.userAgent.match(/SAMSUNG|SGH-[I|N|T]|GT-[I|P|N]|SM-[N|P|T|Z|G]|SHV-E|SCH-[I|J|R|S]|SPH-L/i) && jQuery(".rebrand").addClass("galaxy"), isMobile = /Android/i.test(navigator.userAgent) ? !0 : !1, isMobile && jQuery(".rebrand").addClass("onePlus"), jQuery(document).ready(function () {
    screen.width > 751 && screen.width < 1025 && jQuery(".content-text-card").each(function () {
        var n = jQuery(this),
            t = n.find(".box-title a").html().length;
        t > 96 && n.find(".box-title a").text(n.find(".box-title a").text().substr(0, 91) + "...")
    })
}), win_width = screen.width, jQuery(document).ready(function () {
    jQuery(".header-top").addClass("blog-shrinkedchange");
    jQuery(".main-navigation.navbar-fixed-top").addClass("blog-shrinkedchange");
    var n = jQuery("header").offset();
    jQuery(window).scroll(function () {
        win_width > 750 && (jQuery(document).scrollTop() > n.top ? (jQuery(".blog-nav").addClass("navbar-fixed-top shrinkedchange-nav"), jQuery(".a").fadeOut(), jQuery(".blog-menu").removeClass("col-md-offset-4 col-sm-offset-2"), jQuery(".blog-logo").removeClass("col-md-8").addClass("col-md-4")) : (jQuery(".blog-nav").removeClass("navbar-fixed-top shrinkedchange-nav"), jQuery(".a").fadeIn(), jQuery(".blog-menu").addClass("col-md-offset-4"), jQuery(".blog-logo").removeClass("col-md-4").addClass("col-md-8")));
        win_width < 751 && (jQuery(document).scrollTop() > n.top ? (jQuery(".blog-nav").addClass("navbar-fixed-top shrinkedchange-nav"), jQuery(".article-list-module").css("margin-top", jQuery(".main-navigation").outerHeight() + jQuery(".blog-nav").outerHeight() + 50)) : (jQuery(".blog-nav").removeClass("navbar-fixed-top shrinkedchange-nav"), jQuery(".article-list-module").css("margin-top", 0)));
        jQuery(document).scrollTop() > 0 ? (jQuery(".blog-sidebar").parent().find(".sticky").addClass("fixed"), jQuery(".blog-sidebar .content-module-K.blog-share").addClass("upperSpace")) : jQuery(document).scrollTop() == 0 && jQuery(".blog-sidebar .content-module-K.blog-share").removeClass("upperSpace");
        jQuery(".main-container").length > 0 && jQuery(document).scrollTop() + jQuery(window).height() >= jQuery(".main-container").height() + jQuery(".main-container").position().top && (jQuery(".blog-sidebar .content-module-K.blog-share").removeClass("upperSpace"), jQuery(".blog-sidebar").addClass("sticky-bottom"))
    });
    win_width < 900 && jQuery(".blog-menu").removeClass("col-sm-10 col-md-offset-4").addClass("col-sm-12");
    win_width > 751 && (jQuery.fn.blogNavHTML = function (n) {
        return n ? this.before(n).remove() : jQuery(".BlogNavigationModal").append(this.clone()).html()
    }, jQuery("#blog-main-nav").append(jQuery("#bbc").blogNavHTML()), jQuery.fn.signUpHTML = function (n) {
        return n ? this.before(n).remove() : jQuery("#SignUp").append(this.eq(0).clone()).html()
    });
    jQuery(".conversation-frm.default-frm.cmt-open textarea").focus(function () {
        jQuery(this).parent().next().removeClass("hidden").addClass("visible");
        jQuery(this).parent().addClass("increse")
    });
    jQuery("#blog-main-nav li a").on("click", function () {
        jQuery("#blog-main-nav li").removeClass("active");
        jQuery(this).closest("li").addClass("active")
    });
    jQuery(".BlogNavigationModal ul.dropdown-menu.second-dropdown").on("click", function (n) {
        n.stopPropagation()
    });
    jQuery("a.join-conversation").on("click", function (n) {
        n.preventDefault();
        jQuery(".navbar-default.blog-nav").addClass("shrinkedchange navbar-fixed-top shrinkedchange-nav");
        var e = this,
            t = jQuery(this.hash),
            r = jQuery(".main-comments-nav").outerHeight(),
            u = jQuery(".blog-comments-nav").outerHeight(),
            f = parseInt(r) + parseInt(u),
            i = 0;
        t.length != 0 && (i = t.offset().top - f);
        t.length && jQuery("html, body").animate({
            scrollTop: i
        }, "slow", function () { });
        jQuery(this).hasClass("comments-blog") && jQuery("#cmment").focus()
    });
    feedReferred()
}), jQuery(document).ready(function () {
    if (jQuery(".article-paragraph p").each(function () {
        jQuery.trim(jQuery(this).text()) == "" && jQuery(this).children().length == 0 && jQuery(this).remove()
    }), win_width > 751) jQuery("#BlogSearch").on("shown.bs.modal", function () {
        jQuery(".modal-backdrop").hide();
        jQuery(".navbar-inverse").hasClass("shrinkedchange") ? (jQuery(".modal-backdrop").addClass("dropshrinkedchange"), jQuery(".modal-backdrop").show()) : (jQuery(".modal-backdrop").addClass("drop"), jQuery(".modal-backdrop").show())
    });
    if (win_width > 751) {
        var n = jQuery(".nav-section").find("div.a").length,
            t = jQuery("header").offset();
        if (n == 1) jQuery(window).on("scroll", function () {
            var n = jQuery(window).scrollTop();
            n > t.top ? (jQuery(".nav-section").stop().animate({
                height: "65px"
            }, 100), jQuery("#ArticleList").css("padding-top", "150px"), jQuery(".article-list-module").css("margin-top", jQuery(".main-navigation").outerHeight() + jQuery(".blog-nav").outerHeight() + 100)) : (jQuery(".nav-section").stop().animate({
                height: "350px"
            }, 100), jQuery("#ArticleList").css("padding-top", "62px"), jQuery(".article-list-module").css("margin-top", 0))
        })
    }
    jQuery(".blog-search-filter").each(function () {
        var n = jQuery(this).find(".js-tabcollapse-panel-heading");
        n.parent().on("click", function () {
            var n = jQuery(this).index();
            n == 2 ? jQuery(this).parents(".blog-search-filter").find(".tab-content").removeClass("column-two").addClass("column-three") : jQuery(this).parents(".blog-search-filter").find(".tab-content").removeClass("column-three").addClass("column-two")
        })
    })
}), jQuery(window).scroll(function () {
    if (jQuery(".rebrand-contact-us-module-A").length > 0) {
        var n = jQuery(".rebrand-contact-us-module-A").offset().top,
            t = jQuery(".rebrand-contact-us-module-A").outerHeight(),
            i = jQuery(window).height(),
            r = jQuery(this).scrollTop();
        r > n + t - i && setTimeout(function () {
            jQuery(".contact-button").removeClass("button-hide").addClass("fadeIn zoomIn animated")
        }, 700)
    }
}), jQuery(document).ready(function () {
    win_width <= 750 && jQuery(".card.fullimg .card-body").each(function () {
        var n = jQuery(this).height(),
            t = n + 293;
        jQuery(this).siblings("a").children().css("height", t)
    })
}), function (n) {
    function i(n) {
        var i = n,
            t;
        try {
            for (t = n.previousSibling; t && t.nodeType != 1;) i = t, t = t.previousSibling
        } catch (r) {
            return console.log(r), topOffset = -15, i
        }
        return t ? t : i
    }
    n.event.special.tripleclick = {
        setup: function () {
            var n = this,
                t = jQuery(n);
            t.bind("click", jQuery.event.special.tripleclick.handler)
        },
        teardown: function () {
            var n = this,
                t = jQuery(n);
            t.unbind("click", jQuery.event.special.tripleclick.handler)
        },
        handler: function (n) {
            var r = this,
                i = jQuery(r),
                t = i.data("clicks") || 0;
            t += 1;
            t === 3 && (t = 0, n.type = "tripleclick", jQuery.event.dispatch.apply(this, arguments));
            i.data("clicks", t)
        }
    };
    var t = {
        init: function (t) {
            var u = n.extend({
                selector: ".highlighter-container",
                minWords: 0,
                complete: function () { }
            }, t),
                f = 0,
                e = 0,
                o = 0,
                s = !1,
                r;
            return this.each(function () {
                function t(t) {
                    var p = "<span class='dummy'><span>",
                        v, a, h, s, c, w, l, b, y;
                    if (e = 0, o = 0, f === t) {
                        if (v = navigator.appName === "Microsoft Internet Explorer", window.getSelection) {
                            if (a = window.getSelection(), r = a.toString(), n.trim(r) === "" || r.split(" ").length < u.minWords) return;
                            if (a.getRangeAt && a.rangeCount) {
                                if (h = window.getSelection().getRangeAt(0), s = h.cloneRange(), s.collapse(!1), w = document.createElement("div"), w.innerHTML = p, l = document.createElement("span"), h.startOffset === 0 && h.endOffset === 0) {
                                    b = s.startContainer;
                                    y = i(b);
                                    try {
                                        s.selectNode(y.lastChild)
                                    } catch (k) {
                                        o = 40;
                                        e = -15;
                                        s.selectNode(y)
                                    }
                                    s.collapse(!1)
                                } else h.endOffset === 0 && (e = -25, o = 40);
                                if (f !== t) return;
                                v || n.trim(r) !== n.trim(s.startContainer.innerText) ? v || n.trim(r) !== n.trim(s.endContainer.innerText) ? (s.insertNode(l), c = n(l).offset(), l.parentNode.removeChild(l)) : (s.endContainer.innerHTML += "<span class='dummy'>&nbsp;<\/span>", c = n(".dummy").offset(), n(".dummy").remove()) : (s.startContainer.innerHTML += "<span class='dummy'>&nbsp;<\/span>", c = n(".dummy").offset(), n(".dummy").remove())
                            }
                        } else if (document.selection && document.selection.createRange) {
                            if (h = document.selection.createRange(), s = h.duplicate(), r = s.text, n.trim(r) === "" || r.split(" ").length < u.minWords) return;
                            h.collapse(!1);
                            h.pasteHTML(p);
                            s.setEndPoint("EndToEnd", h);
                            s.select();
                            c = n(".dummy").offset();
                            n(".dummy").remove()
                        }
                        n(u.selector).css("top", c.top + e + "px");
                        n(u.selector).css("left", c.left + o + "px");
                        n(u.selector).show(300, function () {
                            u.complete(r)
                        })
                    }
                }
                n(u.selector).css("position", "absolute");
                n(document).bind("mouseup.highlighter", function () {
                    s && (f = 1, clicks = 0, setTimeout(function () {
                        t(1)
                    }, 300), s = !1)
                });
                n(this).bind("mouseup.highlighter", function () {
                    f = 1;
                    clicks = 0;
                    setTimeout(function () {
                        t(1)
                    }, 300)
                });
                n(this).bind("tripleclick.highlighter", function () {
                    f = 3;
                    setTimeout(function () {
                        t(3)
                    }, 200)
                });
                n(this).bind("dblclick.highlighter", function () {
                    f = 2;
                    setTimeout(function () {
                        t(2)
                    }, 300)
                });
                n(this).bind("mousedown.highlighter", function () {
                    s = !0
                })
            })
        },
        destroy: function () {
            return this.each(function () {
                n(document).unbind("mouseup.highlighter");
                n(this).unbind("mouseup.highlighter");
                n(this).unbind("tripleclick.highlighter");
                n(this).unbind("dblclick.highlighter");
                n(this).unbind("mousedown.highlighter")
            })
        }
    };
    n.fn.highlighter = function (i) {
        if (t[i]) return t[i].apply(this, Array.prototype.slice.call(arguments, 1));
        if (typeof i != "object" && i) n.error("Method " + i + " does not exist on jQuery.highlighter");
        else return t.init.apply(this, arguments)
    }
}(jQuery), typeof Object.create != "function" && (Object.create = function (n) {
    function t() { }
    return t.prototype = n, new t
}), function (n, t, i, r) {
    var u = {
        reposition: function () {
            var n = this;
            n.zoomContainer && n.zoomContainer.offset(n.$elem.offset())
        },
        init: function (t, i) {
            var r = this;
            r.elem = i;
            r.$elem = n(i);
            var u = .4,
                f = r.$elem.width() * u,
                e = r.$elem.height() * u;
            r.$minimapImage = n('<img style="position: absolute; border: 1px white solid; z-index: 9999999; left: 0px; top: 0px; max-width: none; width: ' + f + "px; height: " + e + 'px;" src="' + r.$elem.attr("src") + '">');
            r.imageSrc = r.$elem.data("zoom-image") ? r.$elem.data("zoom-image") : r.$elem.attr("src");
            r.options = n.extend({}, n.fn.jspanzoom.options, t);
            r.isHold = !1;
            r.options.tint && (r.options.lensColour = "none", r.options.lensOpacity = "1");
            r.options.zoomType == "inner" && (r.options.showLens = !1);
            r.options.zoomWindowHeight = r.$elem.height();
            r.options.zoomWindowWidth = r.$elem.width();
            r.$elem.parent().removeAttr("title").removeAttr("alt");
            r.zoomImage = r.imageSrc;
            r.refresh(1);
            n("#" + r.options.gallery + " a").click(function (t) {
                return r.options.galleryActiveClass && (n("#" + r.options.gallery + " a").removeClass(r.options.galleryActiveClass), n(this).addClass(r.options.galleryActiveClass)), t.preventDefault(), r.zoomImagePre = n(this).data("zoom-image") ? n(this).data("zoom-image") : n(this).data("image"), r.swaptheimage(n(this).data("image"), r.zoomImagePre), !1
            })
        },
        refresh: function (n) {
            var t = this;
            setTimeout(function () {
                t.fetch(t.imageSrc)
            }, n || t.options.refresh)
        },
        fetch: function (n) {
            var t = this,
                i = new Image;
            i.onload = function () {
                t.largeWidth = i.width;
                t.largeHeight = i.height;
                t.startZoom();
                t.currentImage = t.imageSrc;
                t.options.onZoomedImageLoaded(t.$elem)
            };
            i.src = n;
            return
        },
        startZoom: function () {
            var i = this,
                o, s, h, c, u, f, l, a;
            i.nzWidth = i.$minimapImage.width();
            i.nzHeight = i.$minimapImage.height();
            i.isWindowActive = !1;
            i.isLensActive = !1;
            i.isTintActive = !1;
            i.overWindow = !1;
            i.isHold = !1;
            i.options.imageCrossfade && (i.zoomWrap = i.$elem.wrap('<div style="height:' + i.nzHeight + "px;width:" + i.nzWidth + 'px;" class="zoomWrapper" />'), i.$elem.css("position", "absolute"));
            i.zoomLock = 1;
            i.scrollingLock = !1;
            i.changeBgSize = !1;
            i.currentZoomLevel = i.options.zoomLevel;
            i.nzOffset = i.$elem.offset();
            i.widthRatio = i.largeWidth / i.currentZoomLevel / i.nzWidth;
            i.heightRatio = i.largeHeight / i.currentZoomLevel / i.nzHeight;
            i.options.zoomType == "window" && (i.zoomWindowStyle = "overflow: hidden;background-position: 0px 0px;text-align:center;background-color: " + String(i.options.zoomWindowBgColour) + ";width: " + t.innerWidth + "px;height: " + String(i.$elem.height()) + "px;float: left;background-size: " + i.largeWidth / i.currentZoomLevel + "px " + i.largeHeight / i.currentZoomLevel + "px;display: none;z-index:100;;background-repeat: no-repeat;position: absolute;cursor: move;-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;");
            i.options.zoomType == "inner" && (o = i.$elem.css("border-left-width"), i.zoomWindowStyle = "overflow: hidden;margin-left: " + String(o) + ";margin-top: " + String(o) + ";background-position: 0px 0px;width: " + t.innerWidth + "px;height: " + String(i.$elem.height()) + "px;float: left;display: none;cursor: move;background-repeat: no-repeat;position: absolute;-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;");
            i.options.zoomType == "window" && (lensHeight = i.nzHeight < i.options.zoomWindowWidth / i.widthRatio ? i.nzHeight : String(i.options.zoomWindowHeight / i.heightRatio), lensWidth = i.largeWidth < i.options.zoomWindowWidth ? i.nzWidth : i.options.zoomWindowWidth / i.widthRatio, i.lensStyle = "background-position: 0px 0px;width: " + String(i.options.zoomWindowWidth / i.widthRatio) + "px;height: " + String(i.options.zoomWindowHeight / i.heightRatio) + "px;float: right;display: none;overflow: hidden;z-index: 9999999;-webkit-transform: translateZ(0);opacity:" + i.options.lensOpacity + ";filter: alpha(opacity = " + i.options.lensOpacity * 100 + "); zoom:1;width:" + lensWidth + "px;height:" + lensHeight + "px;background-color:" + i.options.lensColour + ";cursor: move;border: " + i.options.lensBorderSize + "px solid " + i.options.lensBorderColour + ";background-repeat: no-repeat;position: absolute;");
            i.tintStyle = "display: block;position: absolute;background-color: " + i.options.tintColour + ";filter:alpha(opacity=0);opacity: 0;width: " + i.nzWidth + "px;height: " + i.nzHeight + "px;";
            i.lensRound = "";
            i.options.zoomType == "lens" && (i.lensStyle = "background-position: 0px 0px;float: left;display: none;border: " + String(i.options.borderSize) + "px solid " + i.options.borderColour + ";width:" + String(i.options.lensSize) + "px;height:" + String(i.options.lensSize) + "px;background-repeat: no-repeat;position: absolute;");
            i.options.lensShape == "round" && (i.lensRound = "border-top-left-radius: " + String(i.options.lensSize / 2 + i.options.borderSize) + "px;border-top-right-radius: " + String(i.options.lensSize / 2 + i.options.borderSize) + "px;border-bottom-left-radius: " + String(i.options.lensSize / 2 + i.options.borderSize) + "px;border-bottom-right-radius: " + String(i.options.lensSize / 2 + i.options.borderSize) + "px;");
            i.nzOffset.left = i.nzOffset.left - 9;
            i.zoomContainer = n('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;z-index:1000001; left:' + i.nzOffset.left + "px;top:" + i.nzOffset.top + "px;height:" + i.nzHeight + "px;width:" + i.nzWidth + 'px;"><\/div>');
            i.zoomContainer.append(i.$minimapImage);
            s = "-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;";
            i.$zoomInBtn = n('<div class="zoom-btn zoom-btn-plus" style="' + s + '"><\/div>');
            i.zoomContainer.append(i.$zoomInBtn);
            i.$zoomOutBtn = n('<div class="zoom-btn zoom-btn-minus" style="' + s + '"><\/div>');
            i.zoomContainer.append(i.$zoomOutBtn);
            n("body").append(i.zoomContainer);
            i.options.containLensZoom && i.options.zoomType == "lens" && i.zoomContainer.css("overflow", "hidden");
            i.options.zoomType != "inner" && (i.zoomLens = n("<div class='zoomLens' style='" + i.lensStyle + i.lensRound + "'>&nbsp;<\/div>").appendTo(i.zoomContainer).click(function () {
                i.$elem.trigger("click")
            }), i.options.tint && (i.tintContainer = n("<div/>").addClass("tintContainer"), i.zoomTint = n("<div class='zoomTint' style='" + i.tintStyle + "'><\/div>"), i.zoomLens.wrap(i.tintContainer), i.zoomTintcss = i.zoomLens.after(i.zoomTint), i.zoomTintImage = n('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' + i.nzWidth + "px; height: " + i.nzHeight + 'px;" src="' + i.imageSrc + '">').appendTo(i.zoomLens).click(function () {
                i.$elem.trigger("click")
            })));
            i.zoomWindow = isNaN(i.options.zoomWindowPosition) ? n("<div style='z-index:999;" + i.zoomWindowStyle + "' class='zoomWindow'>&nbsp;<\/div>").appendTo("body").click(function () {
                i.$elem.trigger("click")
            }) : n("<div style='z-index:999;" + i.zoomWindowStyle + "' class='zoomWindow'>&nbsp;<\/div>").appendTo(i.zoomContainer).click(function () {
                i.$elem.trigger("click")
            });
            i.zoomWindowContainer = n("<div/>").addClass("zoomWindowContainer").css("width", t.innerWidth);
            i.zoomWindow.wrap(i.zoomWindowContainer);
            i.options.zoomType == "lens" && i.zoomLens.css({
                backgroundImage: "url('" + i.imageSrc + "')"
            });
            i.options.zoomType == "window" && i.zoomWindow.css({
                backgroundImage: "url('" + i.imageSrc + "')"
            });
            i.options.zoomType == "inner" && i.zoomWindow.css({
                backgroundImage: "url('" + i.imageSrc + "')"
            });
            i.$minimapImage.bind("touchmove", function (n) {
                n.preventDefault();
                var t = n.originalEvent.touches[0] || n.originalEvent.changedTouches[0];
                i.setPosition(t)
            });
            i.zoomContainer.bind("touchmove", function (n) {
                i.options.zoomType == "inner" && i.showHideWindow("show");
                n.preventDefault();
                var t = n.originalEvent.touches[0] || n.originalEvent.changedTouches[0];
                i.setPosition(t)
            });
            i.zoomContainer.bind("touchend", function () {
                i.showHideWindow("hide");
                i.options.showLens && i.showHideLens("hide");
                i.options.tint && i.options.zoomType != "inner" && i.showHideTint("hide")
            });
            i.$minimapImage.bind("touchend", function () {
                i.showHideWindow("hide");
                i.options.showLens && i.showHideLens("hide");
                i.options.tint && i.options.zoomType != "inner" && i.showHideTint("hide")
            });
            i.options.showLens && (i.zoomLens.bind("touchmove", function (n) {
                n.preventDefault();
                var t = n.originalEvent.touches[0] || n.originalEvent.changedTouches[0];
                i.setPosition(t)
            }), i.zoomLens.bind("touchend", function () {
                i.showHideWindow("hide");
                i.options.showLens && i.showHideLens("hide");
                i.options.tint && i.options.zoomType != "inner" && i.showHideTint("hide")
            }));
            i.$minimapImage.bind("mousemove", function (n) {
                i.isHold && (i.overWindow == !1 && i.setElements("show"), (i.lastX !== n.clientX || i.lastY !== n.clientY) && (i.setPosition(n), i.currentLoc = n), i.lastX = n.clientX, i.lastY = n.clientY)
            });
            i.zoomContainer.bind("mousemove", function () { });
            i.$minimapImage.bind("mousedown", function (n) {
                i.overWindow == !1 && i.setElements("show");
                (i.lastX !== n.clientX || i.lastY !== n.clientY) && (i.setPosition(n), i.currentLoc = n);
                i.lastX = n.clientX;
                i.lastY = n.clientY;
                i.isHold = !0
            });
            i.$minimapImage.bind("mouseup", function (n) {
                (i.lastX !== n.clientX || i.lastY !== n.clientY) && (i.setPosition(n), i.currentLoc = n);
                i.lastX = n.clientX;
                i.lastY = n.clientY;
                i.isHold = !1
            });
            i.options.zoomType != "inner" && (i.zoomLens.bind("mousemove", function (n) {
                i.isHold && ((i.lastX !== n.clientX || i.lastY !== n.clientY) && (i.setPosition(n), i.currentLoc = n), i.lastX = n.clientX, i.lastY = n.clientY)
            }), i.zoomLens.bind("mousedown", function (n) {
                (i.lastX !== n.clientX || i.lastY !== n.clientY) && (i.setPosition(n), i.currentLoc = n);
                i.lastX = n.clientX;
                i.lastY = n.clientY;
                i.isHold = !0
            }), i.zoomLens.bind("mouseup", function (n) {
                (i.lastX !== n.clientX || i.lastY !== n.clientY) && (i.setPosition(n), i.currentLoc = n);
                i.lastX = n.clientX;
                i.lastY = n.clientY;
                i.isHold = !1
            }));
            i.options.tint && i.options.zoomType != "inner" && i.zoomTint.bind("mousemove", function (n) {
                (i.lastX !== n.clientX || i.lastY !== n.clientY) && (i.setPosition(n), i.currentLoc = n);
                i.lastX = n.clientX;
                i.lastY = n.clientY
            });
            i.options.zoomType == "inner" && i.zoomWindow.bind("mousemove", function (n) {
                (i.lastX !== n.clientX || i.lastY !== n.clientY) && (i.setPosition(n), i.currentLoc = n);
                i.lastX = n.clientX;
                i.lastY = n.clientY
            });
            i.zoomContainer.add(i.$minimapImage).mouseenter(function () {
                i.overWindow == !1 && i.setElements("show")
            }).mouseleave(function () {
                !i.scrollLock
            });
            l = .8;
            i.options.zoomType != "inner" && i.zoomWindow.mouseenter(function () {
                i.overWindow = !0
            }).mouseleave(function () {
                i.overWindow = !1
            }).mousedown(function (n) {
                i.lastX = n.clientX;
                i.lastY = n.clientY;
                i.isHold = !0;
                h = n.pageX;
                c = n.pageY
            }).mouseup(function (n) {
                i.lastX = n.clientX;
                i.lastY = n.clientY;
                i.isHold = !1;
                u == r && (u = jQuery(".zoomLens").offset().left + i.zoomWindow.width() / 2, f = jQuery(".zoomLens").offset().top + i.zoomWindow.height() / 2, i.currentLoc = n)
            }).mousemove(function (n) {
                if (i.isHold) {
                    u += -(h - n.pageX) * l;
                    f += -(c - n.pageY) * l;
                    var t = i.zoomWindow.width() / i.$minimapImage.width(),
                        r = i.zoomWindow.width() / i.$minimapImage.width(),
                        e = i.$minimapImage.width() / i.zoomWindow.width(),
                        o = i.$minimapImage.height() / i.zoomWindow.height();
                    u = Math.min(Math.max(i.zoomWindow.offset().left + t * (i.zoomLens.width() / 2), u), i.zoomWindow.offset().left + i.zoomWindow.width() - t * (i.zoomLens.width() / 2));
                    f = Math.min(Math.max(i.zoomWindow.offset().top + r * (i.zoomLens.height() / 2), f), i.zoomWindow.offset().top + i.zoomWindow.height() - r * (i.zoomLens.height() / 2));
                    h = n.pageX;
                    c = n.pageY;
                    n.pageX = i.$minimapImage.offset().left + (u - i.$minimapImage.offset().left) * e;
                    n.pageY = i.$minimapImage.offset().top + (f - i.$minimapImage.offset().top) * o;
                    (i.lastX !== n.clientX || i.lastY !== n.clientY) && (i.setPosition(n), i.currentLoc = n);
                    i.lastX = n.clientX;
                    i.lastY = n.clientY
                }
            });
            i.options.zoomLevel != 1;
            i.minZoomLevel = i.options.minZoomLevel ? i.options.minZoomLevel : i.options.scrollZoomIncrement * 2;
            i.options.scrollZoom && (i.zoomContainer.add(i.$minimapImage).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function (t) {
                i.scrollLock = !0;
                clearTimeout(n.data(this, "timer"));
                n.data(this, "timer", setTimeout(function () {
                    i.scrollLock = !1
                }, 250));
                var r = t.originalEvent.wheelDelta || t.originalEvent.detail * -1;
                return t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault(), r / 120 > 0 ? i.currentZoomLevel >= i.minZoomLevel && i.changeZoomLevel(i.currentZoomLevel - i.options.scrollZoomIncrement) : i.options.maxZoomLevel ? i.currentZoomLevel <= i.options.maxZoomLevel && i.changeZoomLevel(parseFloat(i.currentZoomLevel) + i.options.scrollZoomIncrement) : i.changeZoomLevel(parseFloat(i.currentZoomLevel) + i.options.scrollZoomIncrement), !1
            }), i.$zoomInBtn.bind("click", function (n) {
                i.currentZoomLevel >= i.minZoomLevel && i.changeZoomLevel(i.currentZoomLevel - i.options.scrollZoomIncrement);
                n.stopPropagation();
                n.preventDefault()
            }), i.$zoomOutBtn.bind("click", function (n) {
                i.options.maxZoomLevel ? i.currentZoomLevel <= i.options.maxZoomLevel && i.changeZoomLevel(parseFloat(i.currentZoomLevel) + i.options.scrollZoomIncrement) : i.changeZoomLevel(parseFloat(i.currentZoomLevel) + i.options.scrollZoomIncrement);
                n.stopPropagation();
                n.preventDefault()
            }));
            i.showHideWindow("show");
            i.showHideLens("show");
            var e = i.zoomWindow.offset(),
                v = i.$minimapImage.width() / 2,
                y = i.$minimapImage.height() / 2;
            console.log(e);
            a = {
                which: 1,
                pageX: e.left + v,
                pageY: e.top + y,
                clientX: e.left + v,
                clientY: e.top + y
            };
            i.zoomWindow.trigger(jQuery.Event("mousedown", a));
            i.zoomWindow.trigger(jQuery.Event("mouseup", a))
        },
        setElements: function (n) {
            var t = this;
            if (!t.options.zoomEnabled) return !1;
            n == "show" && t.isWindowSet && (t.options.zoomType == "inner" && t.showHideWindow("show"), t.options.zoomType == "window" && t.showHideWindow("show"), t.options.showLens && t.showHideLens("show"), t.options.tint && t.options.zoomType != "inner" && t.showHideTint("show"));
            n == "hide" && (t.options.zoomType == "window" && t.showHideWindow("hide"), t.options.tint || t.showHideWindow("hide"), t.options.showLens && t.showHideLens("hide"), t.options.tint && t.showHideTint("hide"))
        },
        setPosition: function (n) {
            var t = this;
            if (!t.options.zoomEnabled) return !1;
            (t.nzHeight = t.$minimapImage.height(), t.nzWidth = t.$minimapImage.width(), t.nzOffset = t.$minimapImage.offset(), t.options.tint && t.options.zoomType != "inner" && (t.zoomTint.css({
                top: 0
            }), t.zoomTint.css({
                left: 0
            })), t.options.responsive && !t.options.scrollZoom && t.options.showLens && (lensHeight = t.nzHeight < t.options.zoomWindowWidth / t.widthRatio ? t.nzHeight : String(t.options.zoomWindowHeight / t.heightRatio), lensWidth = t.largeWidth < t.options.zoomWindowWidth ? t.nzWidth : t.options.zoomWindowWidth / t.widthRatio, t.widthRatio = t.largeWidth / t.nzWidth, t.heightRatio = t.largeHeight / t.nzHeight, t.options.zoomType != "lens" && (lensHeight = t.nzHeight < t.options.zoomWindowWidth / t.widthRatio ? t.nzHeight : String(t.options.zoomWindowHeight / t.heightRatio), lensWidth = t.options.zoomWindowWidth < t.options.zoomWindowWidth ? t.nzWidth : t.options.zoomWindowWidth / t.widthRatio, t.zoomLens.css("width", lensWidth), t.zoomLens.css("height", lensHeight), t.options.tint && (t.zoomTintImage.css("width", t.nzWidth), t.zoomTintImage.css("height", t.nzHeight))), t.options.zoomType == "lens" && t.zoomLens.css({
                width: String(t.options.lensSize) + "px",
                height: String(t.options.lensSize) + "px"
            })), t.mouseLeft = parseInt(n.pageX - t.nzOffset.left), t.mouseTop = parseInt(n.pageY - t.nzOffset.top), t.options.zoomType == "window" && (t.Etoppos = t.mouseTop < t.zoomLens.height() / 2, t.Eboppos = t.mouseTop > t.nzHeight - t.zoomLens.height() / 2 - t.options.lensBorderSize * 2, t.Eloppos = t.mouseLeft < 0 + t.zoomLens.width() / 2, t.Eroppos = t.mouseLeft > t.nzWidth - t.zoomLens.width() / 2 - t.options.lensBorderSize * 2), t.options.zoomType == "inner" && (t.Etoppos = t.mouseTop < t.nzHeight / 2 / t.heightRatio, t.Eboppos = t.mouseTop > t.nzHeight - t.nzHeight / 2 / t.heightRatio, t.Eloppos = t.mouseLeft < 0 + t.nzWidth / 2 / t.widthRatio, t.Eroppos = t.mouseLeft > t.nzWidth - t.nzWidth / 2 / t.widthRatio - t.options.lensBorderSize * 2), !1 && (t.mouseLeft <= 0 || t.mouseTop < 0 || t.mouseLeft > t.nzWidth || t.mouseTop > t.nzHeight)) || (t.options.showLens && (t.lensLeftPos = String(t.mouseLeft - t.zoomLens.width() / 2), t.lensTopPos = String(t.mouseTop - t.zoomLens.height() / 2)), t.Etoppos && (t.lensTopPos = 0), t.Eloppos && (t.windowLeftPos = 0, t.lensLeftPos = 0, t.tintpos = 0), t.options.zoomType == "window" && (t.Eboppos && (t.lensTopPos = Math.max(t.nzHeight - t.zoomLens.height() - t.options.lensBorderSize * 2, 0)), t.Eroppos && (t.lensLeftPos = t.nzWidth - t.zoomLens.width() - t.options.lensBorderSize * 2)), t.options.zoomType == "inner" && (t.Eboppos && (t.lensTopPos = Math.max(t.nzHeight - t.options.lensBorderSize * 2, 0)), t.Eroppos && (t.lensLeftPos = t.nzWidth - t.nzWidth - t.options.lensBorderSize * 2)), t.options.zoomType == "lens" && (t.windowLeftPos = String(((n.pageX - t.nzOffset.left) * t.widthRatio - t.zoomLens.width() / 2) * -1), t.windowTopPos = String(((n.pageY - t.nzOffset.top) * t.heightRatio - t.zoomLens.height() / 2) * -1), t.zoomLens.css({
                backgroundPosition: t.windowLeftPos + "px " + t.windowTopPos + "px"
            }), t.changeBgSize && (t.nzHeight > t.nzWidth ? (t.options.zoomType == "lens" && t.zoomLens.css({
                "background-size": t.largeWidth / t.newvalueheight + "px " + t.largeHeight / t.newvalueheight + "px"
            }), t.zoomWindow.css({
                "background-size": t.largeWidth / t.newvalueheight + "px " + t.largeHeight / t.newvalueheight + "px"
            })) : (t.options.zoomType == "lens" && t.zoomLens.css({
                "background-size": t.largeWidth / t.newvaluewidth + "px " + t.largeHeight / t.newvaluewidth + "px"
            }), t.zoomWindow.css({
                "background-size": t.largeWidth / t.newvaluewidth + "px " + t.largeHeight / t.newvaluewidth + "px"
            })), t.changeBgSize = !1), t.setWindowPostition(n)), t.options.tint && t.options.zoomType != "inner" && t.setTintPosition(n), t.options.zoomType == "window" && t.setWindowPostition(n), t.options.zoomType == "inner" && t.setWindowPostition(n), t.options.showLens && (t.fullwidth && t.options.zoomType != "lens" && (t.lensLeftPos = 0), t.zoomLens.css({
                left: t.lensLeftPos + "px",
                top: t.lensTopPos + "px"
            })))
        },
        showHideWindow: function (n) {
            var t = this;
            n == "show" && (t.isWindowActive || (t.options.zoomWindowFadeIn ? t.zoomWindow.stop(!0, !0, !1).fadeIn(t.options.zoomWindowFadeIn) : t.zoomWindow.show(), t.isWindowActive = !0));
            n == "hide" && t.isWindowActive && (t.options.zoomWindowFadeOut ? t.zoomWindow.stop(!0, !0).fadeOut(t.options.zoomWindowFadeOut) : t.zoomWindow.hide(), t.isWindowActive = !1)
        },
        showHideLens: function (n) {
            var t = this;
            n == "show" && (t.isLensActive || (t.options.lensFadeIn ? t.zoomLens.stop(!0, !0, !1).fadeIn(t.options.lensFadeIn) : t.zoomLens.show(), t.isLensActive = !0));
            n == "hide" && t.isLensActive && (t.options.lensFadeOut ? t.zoomLens.stop(!0, !0).fadeOut(t.options.lensFadeOut) : t.zoomLens.hide(), t.isLensActive = !1)
        },
        showHideTint: function (n) {
            var t = this;
            n == "show" && (t.isTintActive || (t.options.zoomTintFadeIn ? t.zoomTint.css({
                opacity: t.options.tintOpacity
            }).animate().stop(!0, !0).fadeIn("slow") : (t.zoomTint.css({
                opacity: t.options.tintOpacity
            }).animate(), t.zoomTint.show()), t.isTintActive = !0));
            n == "hide" && t.isTintActive && (t.options.zoomTintFadeOut ? t.zoomTint.stop(!0, !0).fadeOut(t.options.zoomTintFadeOut) : t.zoomTint.hide(), t.isTintActive = !1)
        },
        setLensPostition: function () { },
        setWindowPostition: function (t) {
            var i = this,
                r = i.zoomWindow.width(),
                u = i.zoomWindow.height();
            if (isNaN(i.options.zoomWindowPosition)) i.externalContainer = n("#" + i.options.zoomWindowPosition), i.externalContainerWidth = i.externalContainer.width(), i.externalContainerHeight = i.externalContainer.height(), i.externalContainerOffset = i.externalContainer.offset(), i.windowOffsetTop = i.externalContainerOffset.top, i.windowOffsetLeft = i.externalContainerOffset.left;
            else switch (i.options.zoomWindowPosition) {
                case 1:
                    i.windowOffsetTop = i.options.zoomWindowOffety;
                    i.windowOffsetLeft = +r;
                    break;
                case 2:
                    i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = (i.options.zoomWindowHeight / 2 - i.nzHeight / 2) * -1, i.windowOffsetLeft = i.nzWidth);
                    break;
                case 3:
                    i.windowOffsetTop = i.nzHeight - i.zoomWindow.height() - i.options.borderSize * 2;
                    i.windowOffsetLeft = i.nzWidth;
                    break;
                case 4:
                    i.windowOffsetTop = i.nzHeight;
                    i.windowOffsetLeft = i.nzWidth;
                    break;
                case 5:
                    i.windowOffsetTop = i.nzHeight;
                    i.windowOffsetLeft = i.nzWidth - i.zoomWindow.width() - i.options.borderSize * 2;
                    break;
                case 6:
                    i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = (i.options.zoomWindowWidth / 2 - i.nzWidth / 2 + i.options.borderSize * 2) * -1);
                    break;
                case 7:
                    i.windowOffsetTop = i.nzHeight;
                    i.windowOffsetLeft = 0;
                    break;
                case 8:
                    i.windowOffsetTop = i.nzHeight;
                    i.windowOffsetLeft = (i.zoomWindow.width() + i.options.borderSize * 2) * -1;
                    break;
                case 9:
                    i.windowOffsetTop = i.nzHeight - i.zoomWindow.height() - i.options.borderSize * 2;
                    i.windowOffsetLeft = (i.zoomWindow.width() + i.options.borderSize * 2) * -1;
                    break;
                case 10:
                    i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = (i.options.zoomWindowHeight / 2 - i.nzHeight / 2) * -1, i.windowOffsetLeft = (i.zoomWindow.width() + i.options.borderSize * 2) * -1);
                    break;
                case 11:
                    i.windowOffsetTop = i.options.zoomWindowOffety;
                    i.windowOffsetLeft = (i.zoomWindow.width() + i.options.borderSize * 2) * -1;
                    break;
                case 12:
                    i.windowOffsetTop = (i.zoomWindow.height() + i.options.borderSize * 2) * -1;
                    i.windowOffsetLeft = (i.zoomWindow.width() + i.options.borderSize * 2) * -1;
                    break;
                case 13:
                    i.windowOffsetTop = (i.zoomWindow.height() + i.options.borderSize * 2) * -1;
                    i.windowOffsetLeft = 0;
                    break;
                case 14:
                    i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = (i.zoomWindow.height() + i.options.borderSize * 2) * -1, i.windowOffsetLeft = (i.options.zoomWindowWidth / 2 - r / 2 + i.options.borderSize * 2) * -1);
                    break;
                case 15:
                    i.windowOffsetTop = (i.zoomWindow.height() + i.options.borderSize * 2) * -1;
                    i.windowOffsetLeft = r - i.zoomWindow.width() - i.options.borderSize * 2;
                    break;
                case 16:
                    i.windowOffsetTop = (i.zoomWindow.height() + i.options.borderSize * 2) * -1;
                    i.windowOffsetLeft = r;
                    break;
                default:
                    i.windowOffsetTop = i.options.zoomWindowOffety;
                    i.windowOffsetLeft = r
            }
            i.isWindowSet = !0;
            i.windowOffsetTop = i.windowOffsetTop + i.options.zoomWindowOffety;
            i.windowOffsetLeft = i.windowOffsetLeft + i.options.zoomWindowOffetx;
            i.windowLeftPos = String(((t.pageX - i.nzOffset.left) * i.widthRatio - i.zoomWindow.width() / 2) * -1);
            i.windowTopPos = String(((t.pageY - i.nzOffset.top) * i.heightRatio - i.zoomWindow.height() / 2) * -1);
            i.Etoppos && (i.windowTopPos = 0);
            i.Eloppos && (i.windowLeftPos = 0);
            i.Eboppos && (i.windowTopPos = (i.largeHeight / i.currentZoomLevel - i.zoomWindow.height()) * -1);
            i.Eroppos && (i.windowLeftPos = (i.largeWidth / i.currentZoomLevel - i.zoomWindow.width()) * -1);
            i.fullheight && (i.windowTopPos = 0);
            i.fullwidth && (i.windowLeftPos = 0);
            (i.options.zoomType == "window" || i.options.zoomType == "inner") && (i.zoomLock == 1 && (i.widthRatio <= 1 && (i.windowLeftPos = 0), i.heightRatio <= 1 && (i.windowTopPos = 0)), i.largeHeight < i.options.zoomWindowHeight && (i.windowTopPos = 0), i.largeWidth < i.options.zoomWindowWidth && (i.windowLeftPos = 0), i.options.easing ? (i.xp || (i.xp = 0), i.yp || (i.yp = 0), i.loop || (i.loop = setInterval(function () {
                i.xp += (i.windowLeftPos - i.xp) / i.options.easingAmount;
                i.yp += (i.windowTopPos - i.yp) / i.options.easingAmount;
                i.scrollingLock ? (clearInterval(i.loop), i.xp = i.windowLeftPos, i.yp = i.windowTopPos, i.xp = ((t.pageX - i.nzOffset.left) * i.widthRatio - i.zoomWindow.width() / 2) * -1, i.yp = ((t.pageY - i.nzOffset.top) * i.heightRatio - i.zoomWindow.height() / 2) * -1, i.changeBgSize && (u > r ? (i.options.zoomType == "lens" && i.zoomLens.css({
                    "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"
                }), i.zoomWindow.css({
                    "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"
                })) : (i.options.zoomType != "lens" && i.zoomLens.css({
                    "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvalueheight + "px"
                }), i.zoomWindow.css({
                    "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px"
                })), i.changeBgSize = !1), i.zoomWindow.css({
                    backgroundPosition: i.windowLeftPos + "px " + i.windowTopPos + "px"
                }), i.scrollingLock = !1, i.loop = !1) : (i.changeBgSize && (u > r ? (i.options.zoomType == "lens" && i.zoomLens.css({
                    "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"
                }), i.zoomWindow.css({
                    "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"
                })) : (i.options.zoomType != "lens" && i.zoomLens.css({
                    "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px"
                }), i.zoomWindow.css({
                    "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px"
                })), i.changeBgSize = !1), i.zoomWindow.css({
                    backgroundPosition: i.xp + "px " + i.yp + "px"
                }))
            }, 16))) : (i.changeBgSize && (u > r ? (i.options.zoomType == "lens" && i.zoomLens.css({
                "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"
            }), i.zoomWindow.css({
                "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"
            })) : (i.options.zoomType == "lens" && i.zoomLens.css({
                "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px"
            }), i.largeHeight / i.newvaluewidth < i.options.zoomWindowHeight ? i.zoomWindow.css({
                "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px"
            }) : i.zoomWindow.css({
                "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"
            })), i.changeBgSize = !1), i.zoomWindow.css({
                backgroundPosition: i.windowLeftPos + "px " + i.windowTopPos + "px"
            })))
        },
        setTintPosition: function (n) {
            var t = this;
            t.nzOffset = t.$minimapImage.offset();
            t.tintpos = String((n.pageX - t.nzOffset.left - t.zoomLens.width() / 2) * -1);
            t.tintposy = String((n.pageY - t.nzOffset.top - t.zoomLens.height() / 2) * -1);
            t.Etoppos && (t.tintposy = 0);
            t.Eloppos && (t.tintpos = 0);
            t.Eboppos && (t.tintposy = (t.nzHeight - t.zoomLens.height() - t.options.lensBorderSize * 2) * -1);
            t.Eroppos && (t.tintpos = (t.nzWidth - t.zoomLens.width() - t.options.lensBorderSize * 2) * -1);
            t.options.tint && (t.fullheight && (t.tintposy = 0), t.fullwidth && (t.tintpos = 0), t.zoomTintImage.css({
                left: t.tintpos + "px"
            }), t.zoomTintImage.css({
                top: t.tintposy + "px"
            }))
        },
        swaptheimage: function (t, i) {
            var r = this,
                u = new Image;
            r.options.loadingIcon && (r.spinner = n("<div style=\"background: url('" + r.options.loadingIcon + "') no-repeat center;height:" + r.nzHeight + "px;width:" + r.nzWidth + 'px;z-index: 2000;position: absolute; background-position: center center;"><\/div>'), r.$elem.after(r.spinner));
            r.options.onImageSwap(r.$elem);
            u.onload = function () {
                r.largeWidth = u.width;
                r.largeHeight = u.height;
                r.zoomImage = i;
                r.zoomWindow.css({
                    "background-size": r.largeWidth + "px " + r.largeHeight + "px"
                });
                r.zoomWindow.css({
                    "background-size": r.largeWidth + "px " + r.largeHeight + "px"
                });
                r.swapAction(t, i);
                return
            };
            u.src = i
        },
        swapAction: function (t, i) {
            var r = this,
                u = new Image,
                f, e, o, s;
            u.onload = function () {
                r.nzHeight = u.height;
                r.nzWidth = u.width;
                r.options.onImageSwapComplete(r.$elem);
                r.doneCallback();
                return
            };
            u.src = t;
            r.currentZoomLevel = r.options.zoomLevel;
            r.options.maxZoomLevel = !1;
            r.options.zoomType == "lens" && r.zoomLens.css({
                backgroundImage: "url('" + i + "')"
            });
            r.options.zoomType == "window" && r.zoomWindow.css({
                backgroundImage: "url('" + i + "')"
            });
            r.options.zoomType == "inner" && r.zoomWindow.css({
                backgroundImage: "url('" + i + "')"
            });
            r.currentImage = i;
            r.options.imageCrossfade ? (f = r.$elem, e = f.clone(), r.$elem.attr("src", t), r.$elem.after(e), e.stop(!0).fadeOut(r.options.imageCrossfade, function () {
                n(this).remove()
            }), r.$elem.width("auto").removeAttr("width"), r.$elem.height("auto").removeAttr("height"), f.fadeIn(r.options.imageCrossfade), r.options.tint && r.options.zoomType != "inner" && (o = r.zoomTintImage, s = o.clone(), r.zoomTintImage.attr("src", i), r.zoomTintImage.after(s), s.stop(!0).fadeOut(r.options.imageCrossfade, function () {
                n(this).remove()
            }), o.fadeIn(r.options.imageCrossfade), r.zoomTint.css({
                height: r.$elem.height()
            }), r.zoomTint.css({
                width: r.$elem.width()
            })), r.zoomContainer.css("height", r.$elem.height()), r.zoomContainer.css("width", r.$elem.width()), r.options.zoomType == "inner" && (r.options.constrainType || (r.zoomWrap.parent().css("height", r.$elem.height()), r.zoomWrap.parent().css("width", r.$elem.width()), r.zoomWindow.css("height", r.$elem.height()), r.zoomWindow.css("width", r.$elem.width()))), r.options.imageCrossfade && (r.zoomWrap.css("height", r.$elem.height()), r.zoomWrap.css("width", r.$elem.width()))) : (r.$elem.attr("src", t), r.options.tint && (r.zoomTintImage.attr("src", i), r.zoomTintImage.attr("height", r.$elem.height()), r.zoomTintImage.css({
                height: r.$elem.height()
            }), r.zoomTint.css({
                height: r.$elem.height()
            })), r.zoomContainer.css("height", r.$elem.height()), r.zoomContainer.css("width", r.$elem.width()), r.options.imageCrossfade && (r.zoomWrap.css("height", r.$elem.height()), r.zoomWrap.css("width", r.$elem.width())));
            r.options.constrainType && (r.options.constrainType == "height" && (r.zoomContainer.css("height", r.options.constrainSize), r.zoomContainer.css("width", "auto"), r.options.imageCrossfade ? (r.zoomWrap.css("height", r.options.constrainSize), r.zoomWrap.css("width", "auto"), r.constwidth = r.zoomWrap.width()) : (r.$elem.css("height", r.options.constrainSize), r.$elem.css("width", "auto"), r.constwidth = r.$elem.width()), r.options.zoomType == "inner" && (r.zoomWrap.parent().css("height", r.options.constrainSize), r.zoomWrap.parent().css("width", r.constwidth), r.zoomWindow.css("height", r.options.constrainSize), r.zoomWindow.css("width", r.constwidth)), r.options.tint && (r.tintContainer.css("height", r.options.constrainSize), r.tintContainer.css("width", r.constwidth), r.zoomTint.css("height", r.options.constrainSize), r.zoomTint.css("width", r.constwidth), r.zoomTintImage.css("height", r.options.constrainSize), r.zoomTintImage.css("width", r.constwidth))), r.options.constrainType == "width" && (r.zoomContainer.css("height", "auto"), r.zoomContainer.css("width", r.options.constrainSize), r.options.imageCrossfade ? (r.zoomWrap.css("height", "auto"), r.zoomWrap.css("width", r.options.constrainSize), r.constheight = r.zoomWrap.height()) : (r.$elem.css("height", "auto"), r.$elem.css("width", r.options.constrainSize), r.constheight = r.$elem.height()), r.options.zoomType == "inner" && (r.zoomWrap.parent().css("height", r.constheight), r.zoomWrap.parent().css("width", r.options.constrainSize), r.zoomWindow.css("height", r.constheight), r.zoomWindow.css("width", r.options.constrainSize)), r.options.tint && (r.tintContainer.css("height", r.constheight), r.tintContainer.css("width", r.options.constrainSize), r.zoomTint.css("height", r.constheight), r.zoomTint.css("width", r.options.constrainSize), r.zoomTintImage.css("height", r.constheight), r.zoomTintImage.css("width", r.options.constrainSize))))
        },
        doneCallback: function () {
            var n = this;
            n.options.loadingIcon && n.spinner.hide();
            n.nzOffset = n.$elem.offset();
            n.nzWidth = n.$elem.width();
            n.nzHeight = n.$elem.height();
            n.currentZoomLevel = n.options.zoomLevel;
            n.widthRatio = n.largeWidth / n.nzWidth;
            n.heightRatio = n.largeHeight / n.nzHeight;
            n.options.zoomType == "window" && (lensHeight = n.nzHeight < n.options.zoomWindowWidth / n.widthRatio ? n.nzHeight : String(n.options.zoomWindowHeight / n.heightRatio), lensWidth = n.options.zoomWindowWidth < n.options.zoomWindowWidth ? n.nzWidth : n.options.zoomWindowWidth / n.widthRatio, n.zoomLens && (n.zoomLens.css("width", lensWidth), n.zoomLens.css("height", lensHeight)))
        },
        getCurrentImage: function () {
            var n = this;
            return n.zoomImage
        },
        getGalleryList: function () {
            var t = this;
            return t.gallerylist = [], t.options.gallery ? n("#" + t.options.gallery + " a").each(function () {
                var i = "";
                n(this).data("zoom-image") ? i = n(this).data("zoom-image") : n(this).data("image") && (i = n(this).data("image"));
                i == t.zoomImage ? t.gallerylist.unshift({
                    href: "" + i + "",
                    title: n(this).find("img").attr("title")
                }) : t.gallerylist.push({
                    href: "" + i + "",
                    title: n(this).find("img").attr("title")
                })
            }) : t.gallerylist.push({
                href: "" + t.zoomImage + "",
                title: n(this).find("img").attr("title")
            }), t.gallerylist
        },
        changeZoomLevel: function (n) {
            var t = this;
            t.scrollingLock = !0;
            t.newvalue = parseFloat(n).toFixed(2);
            newvalue = parseFloat(n).toFixed(2);
            maxheightnewvalue = t.largeHeight / (t.options.zoomWindowHeight / t.nzHeight * t.nzHeight);
            maxwidthtnewvalue = t.largeWidth / (t.options.zoomWindowWidth / t.nzWidth * t.nzWidth);
            t.options.zoomType != "inner" && (maxheightnewvalue <= newvalue ? (t.heightRatio = t.largeHeight / maxheightnewvalue / t.nzHeight, t.newvalueheight = maxheightnewvalue, t.fullheight = !0) : (t.heightRatio = t.largeHeight / newvalue / t.nzHeight, t.newvalueheight = newvalue, t.fullheight = !1), maxwidthtnewvalue <= newvalue ? (t.widthRatio = t.largeWidth / maxwidthtnewvalue / t.nzWidth, t.newvaluewidth = maxwidthtnewvalue, t.fullwidth = !0) : (t.widthRatio = t.largeWidth / newvalue / t.nzWidth, t.newvaluewidth = newvalue, t.fullwidth = !1), t.options.zoomType == "lens" && (maxheightnewvalue <= newvalue ? (t.fullwidth = !0, t.newvaluewidth = maxheightnewvalue) : (t.widthRatio = t.largeWidth / newvalue / t.nzWidth, t.newvaluewidth = newvalue, t.fullwidth = !1)));
            t.options.zoomType == "inner" && (maxheightnewvalue = parseFloat(t.largeHeight / t.nzHeight).toFixed(2), maxwidthtnewvalue = parseFloat(t.largeWidth / t.nzWidth).toFixed(2), newvalue > maxheightnewvalue && (newvalue = maxheightnewvalue), newvalue > maxwidthtnewvalue && (newvalue = maxwidthtnewvalue), maxheightnewvalue <= newvalue ? (t.heightRatio = t.largeHeight / newvalue / t.nzHeight, t.newvalueheight = newvalue > maxheightnewvalue ? maxheightnewvalue : newvalue, t.fullheight = !0) : (t.heightRatio = t.largeHeight / newvalue / t.nzHeight, t.newvalueheight = newvalue > maxheightnewvalue ? maxheightnewvalue : newvalue, t.fullheight = !1), maxwidthtnewvalue <= newvalue ? (t.widthRatio = t.largeWidth / newvalue / t.nzWidth, t.newvaluewidth = newvalue > maxwidthtnewvalue ? maxwidthtnewvalue : newvalue, t.fullwidth = !0) : (t.widthRatio = t.largeWidth / newvalue / t.nzWidth, t.newvaluewidth = newvalue, t.fullwidth = !1));
            scrcontinue = !1;
            t.options.zoomType == "inner" && (t.nzWidth >= t.nzHeight && (t.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, t.fullheight = !0, t.fullwidth = !0)), t.nzHeight > t.nzWidth && (t.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, t.fullheight = !0, t.fullwidth = !0)));
            t.options.zoomType != "inner" && (scrcontinue = !0);
            scrcontinue && (t.zoomLock = 0, t.changeZoom = !0, t.options.zoomWindowHeight / t.heightRatio <= t.nzHeight && (t.currentZoomLevel = t.newvalueheight, t.options.zoomType != "lens" && t.options.zoomType != "inner" && (t.changeBgSize = !0, t.zoomLens.css({
                height: String(t.options.zoomWindowHeight / t.heightRatio) + "px"
            })), (t.options.zoomType == "lens" || t.options.zoomType == "inner") && (t.changeBgSize = !0)), t.options.zoomWindowWidth / t.widthRatio <= t.nzWidth && (t.options.zoomType != "inner" && t.newvaluewidth > t.newvalueheight && (t.currentZoomLevel = t.newvaluewidth), t.options.zoomType != "lens" && t.options.zoomType != "inner" && (t.changeBgSize = !0, t.zoomLens.css({
                width: String(t.options.zoomWindowWidth / t.widthRatio) + "px"
            })), (t.options.zoomType == "lens" || t.options.zoomType == "inner") && (t.changeBgSize = !0)), t.options.zoomType == "inner" && (t.changeBgSize = !0, t.nzWidth > t.nzHeight && (t.currentZoomLevel = t.newvaluewidth), t.nzHeight > t.nzWidth && (t.currentZoomLevel = t.newvaluewidth)));
            t.setPosition(t.currentLoc)
        },
        closeAll: function () {
            self.zoomWindow && self.zoomWindow.hide();
            self.zoomLens && self.zoomLens.hide();
            self.zoomTint && self.zoomTint.hide()
        },
        changeState: function (n) {
            var t = this;
            n == "enable" && (t.options.zoomEnabled = !0);
            n == "disable" && (t.options.zoomEnabled = !1)
        }
    };
    n.fn.jspanzoom = function (t) {
        return this.each(function () {
            var i = Object.create(u);
            i.init(t, this);
            n.data(this, "jspanzoom", i)
        })
    };
    n.fn.jspanzoom.options = {
        zoomActivation: "hover",
        zoomEnabled: !0,
        preloading: 1,
        zoomLevel: 1,
        scrollZoom: !0,
        scrollZoomIncrement: 0,
        minZoomLevel: !1,
        maxZoomLevel: !1,
        easing: !1,
        easingAmount: 12,
        lensSize: 100,
        zoomWindowWidth: 100,
        zoomWindowHeight: 100,
        zoomWindowOffetx: 0,
        zoomWindowOffety: 0,
        zoomWindowPosition: 1,
        zoomWindowBgColour: "#fff",
        lensFadeIn: !1,
        lensFadeOut: !1,
        debug: !1,
        zoomWindowFadeIn: !1,
        zoomWindowFadeOut: !1,
        zoomWindowAlwaysShow: !1,
        zoomTintFadeIn: !1,
        zoomTintFadeOut: !1,
        borderSize: 4,
        showLens: !0,
        borderColour: "#888",
        lensBorderSize: 2,
        lensBorderColour: "red",
        lensShape: "square",
        zoomType: "window",
        containLensZoom: !1,
        lensColour: "white",
        lensOpacity: .4,
        lenszoom: !1,
        tint: !1,
        tintColour: "#333",
        tintOpacity: .4,
        gallery: !1,
        galleryActiveClass: "zoomGalleryActive",
        imageCrossfade: !1,
        constrainType: !1,
        constrainSize: !1,
        loadingIcon: !1,
        cursor: "default",
        responsive: !0,
        onComplete: n.noop,
        onZoomedImageLoaded: function () { },
        onImageSwap: n.noop,
        onImageSwapComplete: n.noop
    }
}(jQuery, window, document), jQuery(document).ready(function () {
    var i, t, n;
    jQuery(".tabbed-module-G-tab").length && jQuery("#tabset").tabCollapse();
    jQuery(".tabbed-module-d").length && jQuery("#tabModuleD").tabCollapse();
    jQuery(".tabbed-module-E").length && jQuery(".tabbedModuleE").tabCollapse();
    jQuery(".tabbed-module-F").length && jQuery(".tabModuleFAccordian").tabCollapse();
    jQuery(".tabbed-module-C-tab").length && jQuery(".tabmoduleC").tabCollapse();
    jQuery(".tabbed-module-A").length && jQuery(".tabbedmodulea").tabCollapse();
    jQuery(".cross-nav-module").length && jQuery(".tabbedModuleEF").tabCollapse();
    i = jQuery("#executive-carousel .item").length;
    t = 1;
    jQuery("#appendItem").click(function () {
        jQuery(".item").each(function () {
            if (jQuery(this).hasClass("hidden-xs")) return jQuery(this).removeClass("hidden-xs"), jQuery(".item").removeClass("scroll"), jQuery(this).addClass("scroll"), t++ , !1
        });
        jQuery("html,body").animate({
            scrollTop: jQuery(".scroll:first").offset().top
        }, "slow");
        i == t && jQuery("#appendItem").hide()
    });
    jQuery("#country_address1").change(function () {
        var n = jQuery(this).val(),
            t = jQuery(".OfficeDirectory").attr("data-tabID");
        jQuery.ajax({
            type: "POST",
            url: getActionOfficeDirectoryUrl.GetOfficeDirectoryUrl,
            data: {
                CountryId: n,
                TabName: t
            },
            success: function (n) {
                jQuery("#number2").html(jQuery(n))
            }
        })
    });
    n = jQuery(".tabbed-module-G-tab .tab-right-col .tab-pane.active").attr("id");
    jQuery(".listitems").each(function () {
        jQuery(this).tabCollapse()
    });
    jQuery("#" + n + " .mobile-list").html(jQuery("#" + n + " .listitems").html());
    jQuery("#" + n + " .mobile-list-holder .dropdown-toggle .selected-item").text(jQuery("#" + n + " .listitems li:first").text());
    jQuery(".dropdown-menu.mobile-list li").click(function () {
        jQuery(".mobile-list-holder .dropdown-menu.mobile-list li").removeClass("active");
        jQuery(".mobile-list-holder .dropdown-toggle .selected-item").text(jQuery(this).text())
    });
    jQuery(".tabbed-module-G-tab .tab-content .tab-pane .tab-hero > img").each(function () {
        var n = jQuery(this).attr("src");
        jQuery(this).parent().css("backgroundImage", "url(" + n + ")").addClass("fit-to-width")
    })
}), jQuery("section.tabbed-module-G-tab .js-tabcollapse-panel-body .tab-content > div:first-child").addClass("fade active in"), jQuery(document).ready(function () {
    jQuery(".viewmore").click(function () { })
}), jQuery(document).ready(function (n) {
    n(".modalInfograph").click(function (t) {
        t.preventDefault();
        n("#imagepreview").attr("src", n(this).prev().attr("src"));
        n("#card-module-img").modal("show")
    });
    n(".modal-header").on("click", ".closeOption", function () {
        n("#Modal-D.img-Infographic-Modal.play-Video-L .modal-dialog .modal-body ").remove()
    });
    n(".modal-header").on("click", ".closeOption", function () {
        n("#singlePlayer-").remove();
        n("#modalPlayer").remove();
        n("#modalPlaylistPlayer").remove()
    });
    n(".vjs-big-play-button").addClass("vjs-big-play-button play-btn")
}), jQuery(document).ready(function () {
    function n(n) {
        var t = n.next("div.sharing-box").attr("data-sharetype");
        t == "Media" || t == "Video" ? n.next("div.sharing-box").find(".pinterest-share").addClass("disableSocialIcon") : n.next("div.sharing-box").find(".pinterest-share").removeClass("disableSocialIcon")
    }

    function t(n) {
        var u = jQuery(n),
            i = u.length,
            t = 0,
            r = 0;
        jQuery(n).each(function () {
            var n = jQuery(this);
            t++;
            r++;
            r == i && i % 2 != 0 ? jQuery(n).addClass("full-width") : t == 1 ? jQuery(n).addClass("one-1") : t == 2 ? jQuery(n).addClass("two-2") : t == 3 ? jQuery(n).addClass("two-2") : t == 4 && (jQuery(n).addClass("one-1"), t = 0)
        })
    }

    function i() {
        jQuery(".cards.rebranding.four.card-g .card.fullimg").each(function () {
            var n = jQuery(this),
                t, i;
            jQuery(n).hasClass("txt") || (t = jQuery(n).find(".card-body").height(), i = t + 293, jQuery(n).find("div.img-container.img-fluid").css("height", i))
        });
        jQuery(".cards.rebranding.four.card-g .card.fullimg.txt").each(function () {
            var n = jQuery(this);
            jQuery(n).removeClass("fullimg txt").addClass("onlytxt")
        })
    }
    jQuery("body").on("click", ".facebook-share", function (n) {
        var r;
        n.preventDefault();
        var t = jQuery(this).parents("div.sharing-box").attr("data-url"),
            u = jQuery(this).parents("div.sharing-box").attr("data-imageurl"),
            f = jQuery(this).parents("div.sharing-box").attr("data-sharedomainurl"),
            e = f + jQuery(this).parents("div.sharing-box").attr("data-pdfurl"),
            i = jQuery(this).parents("div.sharing-box").attr("data-sharetype");
        i == "Infograph" && (t = u);
        i == "Media" && (t = e);
        r = window.open("https://www.facebook.com/dialog/share?app_id=" + GlobalAppIds.Ids.fbAppId + "&href=" + t + "", "popupwindow", "scrollbars=yes,width=800,height=400");
        r.focus()
    });
    jQuery("body").on("click", ".pinterest-share", function (n) {
        var i;
        n.preventDefault();
        var r = jQuery(this).parents("div.sharing-box").attr("data-url"),
            u = jQuery(this).parents("div.sharing-box").attr("data-imageurl"),
            t = jQuery(this).parents("div.sharing-box").attr("data-sharetype"),
            f = jQuery(this).parents("div.sharing-box").attr("data-title");
        if (t == "Media" || t == "Video") return !1;
        i = window.open("http://pinterest.com/pin/create/button/?url=" + r + "&media=" + u + "&description=" + f + "", "popupwindow", "scrollbars=yes,width=800,height=400");
        i.focus()
    });
    jQuery("body").on("click", ".linkedin-share", function (n) {
        var r;
        n.preventDefault();
        var t = jQuery(this).parents("div.sharing-box").attr("data-url"),
            u = jQuery(this).parents("div.sharing-box").attr("data-imageurl"),
            f = jQuery(this).parents("div.sharing-box").attr("data-sharedomainurl"),
            e = f + jQuery(this).parents("div.sharing-box").attr("data-pdfurl"),
            i = jQuery(this).parents("div.sharing-box").attr("data-sharetype");
        i == "Infograph" && (t = u);
        i == "Media" && (t = e);
        r = window.open("http://www.linkedin.com/shareArticle?url=" + t + "", "popupwindow", "scrollbars=yes,width=800,height=400");
        r.focus()
    });
    jQuery("body").on("click", ".googleplus-share", function (n) {
        var r;
        n.preventDefault();
        var t = jQuery(this).parents("div.sharing-box").attr("data-url"),
            u = jQuery(this).parents("div.sharing-box").attr("data-imageurl"),
            f = jQuery(this).parents("div.sharing-box").attr("data-sharedomainurl"),
            e = f + jQuery(this).parents("div.sharing-box").attr("data-pdfurl"),
            i = jQuery(this).parents("div.sharing-box").attr("data-sharetype");
        i == "Infograph" && (t = u);
        i == "Media" && (t = e);
        r = window.open("https://plus.google.com/share?url=" + t + "", "popupwindow", "scrollbars=yes,width=800,height=400");
        r.focus()
    });
    jQuery("body").on("click", ".twitter-share", function (n) {
        var f, e;
        n.preventDefault();
        var t = jQuery(this).parents("div.sharing-box").attr("data-url"),
            o = jQuery(this).parents("div.sharing-box").attr("data-imageurl"),
            s = jQuery(this).parents("div.sharing-box").attr("data-sharedomainurl"),
            h = s + jQuery(this).parents("div.sharing-box").attr("data-pdfurl"),
            i = jQuery(this).parents("div.sharing-box").attr("data-twittertitle"),
            r = jQuery(this).parents("div.sharing-box").attr("data-twitterdesc"),
            u = jQuery(this).parents("div.sharing-box").attr("data-sharetype");
        u == "Infograph" && (t = o);
        u == "Media" && (t = h);
        f = i == "" && r == "" ? encodeURIComponent(t) : "" + encodeURIComponent(i) + " " + encodeURIComponent(r) + "-" + encodeURIComponent(t);
        e = window.open("http://twitter.com/intent/tweet?text=" + f + "", "popupwindow", "scrollbars=yes,width=800,height=400");
        e.focus()
    });
    jQuery("body").on("click", ".email-share", function (n) {
        n.preventDefault();
        var t = jQuery(this).parents("div.sharing-box").attr("data-url"),
            i = jQuery(this).parents("div.sharing-box").attr("data-sharetype"),
            r = jQuery(this).parents("div.sharing-box").attr("data-itemid"),
            u = jQuery(this).parents("div.sharing-box").attr("data-sharedomainurl"),
            i = jQuery(this).parents("div.sharing-box").attr("data-sharetype"),
            f = u + jQuery(this).parents("div.sharing-box").attr("data-pdfurl"),
            e = jQuery(this).parents("div.sharing-box").attr("data-imageurl");
        i == "Infograph" && (t = e);
        i == "Media" && (t = f);
        GetEmailData(r, t, "", i)
    });
    jQuery("body").on("click", ".share-close-buton", function () {
        jQuery(this).parents(".sharing-box").hide();
        jQuery(this).parents(".sharing-box").css({
            opacity: 0,
            height: 0
        });
        jQuery(this).parents(".sharing-box").find("ul").css({
            opacity: 0,
            height: 0
        })
    });
    jQuery("body").on("click", ".share-icons", function (t) {
        var i = jQuery(this),
            r = i.next(),
            u = i.next().find("ul");
        t.stopPropagation();
        jQuery(".sharing-box").hide();
        jQuery(".sharing-box").css({
            opacity: 0,
            height: 0
        });
        jQuery(".sharing-box ul").css({
            opacity: 0,
            height: 0
        });
        r.show();
        r.animate({
            height: "270px",
            opacity: 1
        }, 200, function () {
            u.animate({
                opacity: 1,
                height: "270px"
            }, 140)
        });
        n(i)
    });
    jQuery(window).width() > 750 && typeof t != "undefined" && t(".cards.rebranding.four.card-g .card.fullimg");
    jQuery(window).width() < 751 && typeof i != "undefined" && i();
    jQuery("body").click(function (n) {
        jQuery(n.target).closest(".sharing-box ").length || jQuery(".sharing-box").hide()
    })
}), jQuery(document).ready(function () {
    AvanadeLoader = function (n) {
        this.loader = jQuery(n);
        this.container = this.loader.find(".lines-hold");
        this.text = this.loader.find(".text")
    };
    AvanadeLoader.prototype.animation = function (n) {
        var t = this;
        switch (n) {
            case "open":
                t.loader.addClass("active");
                setTimeout(function () {
                    t.container.addClass("active");
                    setTimeout(function () {
                        t.text.addClass("active")
                    }, 250)
                }, 300);
                break;
            case "close":
                t.loader.removeClass("active");
                t.container.removeClass("active");
                t.text.removeClass("active")
        }
    };
    showAnimation = function () {
        var n = new AvanadeLoader("#loader-avanade1");
        n.animation("open")
    };
    hideAnimation = function () {
        var n = new AvanadeLoader("#loader-avanade1");
        n.animation("close")
    }
}), jQuery.fn.zoomManage = function () {
    return this.each(function () {
        new ZoomManage(this)
    })
}, TabletIndicators = function (n) {
    this.main = jQuery(n);
    this.settings = {
        thumb: ".thumb-slider-modal",
        img: "img",
        row: ".row"
    };
    this.init(this.main)
}, TabletIndicators.prototype.init = function (n) {
    var u = this,
        t = u.settings,
        i = n,
        f = i.find(t.thumb),
        r = f.find(t.img),
        e = i.find(t.row),
        o = r[0].clientWidth,
        s = r[0].clientHeight;
    e.append('<div class="disclousure" style="width:' + o + "px; height:" + s + 'px;"><\/div>')
}, jQuery.fn.tabletIndicators = function () {
    return this.each(function () {
        new TabletIndicators(this)
    })
}, ZoomGallery = function () {
    this.settings = {
        isMoving: !1,
        standardW: 960,
        standarH: 750,
        expand_btn: ".expand_infography",
        kill: ".killSlider",
        swiper_zoom: ".swiper-zoom-gallary",
        hidders: ".hidders"
    };
    this.slideSettingsPlace = {
        slider: "#carousel-test-modal",
        itemPosition: "data-item",
        swiper_item: ".swiper-slide",
        active_swipe: "swiper-slide-active",
        pagination: "swiper-pagination-bullet",
        active_pagination: ".swiper-pagination-bullet-active",
        mobile_share: "#share-mobile-slider",
        menu_share: ".socials-slider-dropdown",
        active_menu: "mobile-view",
        descriptions: ".descriptions-slider",
        active_d: "active-description"
    };
    this.zoomSettings = {
        thumb: ".thumb-img",
        infoG: " .container-infoG"
    }
}, ZoomGallery.prototype.init = function (n) {
    var t = this,
        e = t.settings,
        o = t.slideSettingsPlace,
        i = jQuery(n),
        u = i.find(".swiper-wrapper"),
        r = u.children(".swiper-slide"),
        f = i.find(".control-buttons"),
        s = r.lenght;
    return t.addEvents(n), r.get(1) == undefined ? (f.addClass("noSwiper"), !1) : void 0
}, ZoomGallery.prototype.addEvents = function (n) {
    function f() {
        var n = 1;
        return window.screen.systemXDPI !== undefined && window.screen.logicalXDPI !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI ? n = window.screen.systemXDPI / window.screen.logicalXDPI : window.devicePixelRatio !== undefined && (n = window.devicePixelRatio), n > 1 && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && jQuery("html").addClass("touch"), n
    }
    var t = this,
        u = t.settings,
        i = t.slideSettingsPlace,
        r;
    t.sizeIt();
    r = new CreateModal;
    f();
    jQuery("body").on("click", u.expand_btn, function (r) {
        var o = jQuery(window).width(),
            s = jQuery("html").hasClass("touch"),
            u, f, h, e;
        if (o <= 760 && s) return r.preventDefault(), u = jQuery(this).parents(".item"), f = u.find("img"), window.open(f.attr("src"), "_blank"), !1;
        h = jQuery(i.slider);
        e = jQuery(this).attr(i.itemPosition);
        setTimeout(function () {
            t.InitializeIt(e, ".swiper-carousel-infographic");
            t.activateZoom(n)
        }, 300)
    });
    jQuery("body").on("click", ".expand_infography-single", function (n) {
        var e = this,
            u, f, o, s;
        if (n.preventDefault(), u = jQuery(window).width(), f = jQuery("html").hasClass("touch"), u <= 760 && f) return n.preventDefault(), window.open(jQuery(e).data("image-zoom"), "_blank"), !1;
        r.init(this);
        o = jQuery(i.slider);
        s = 0;
        setTimeout(function () {
            t.activateZoom(".swiper-carousel")
        }, 300)
    });
    jQuery(document).ready(function () {
        function f(n, t) {
            t || (t = window.location.href.toLowerCase());
            n = n.replace(/[\[\]]/g, "\\$&");
            var r = new RegExp("[?&]" + n + "(=([^&#]*)|&|#|$)"),
                i = r.exec(t);
            return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
        }
        var u = new CreateModal,
            r;
        window.location.href.toLowerCase().indexOf("popupimage") != -1 && (r = f("popupimage"), jQuery(window).width() <= 760 ? window.open("https://" + window.location.hostname + r, "_blank") : r != null && jQuery.ajax({
            url: GetImageFromQuerystring,
            type: "POST",
            data: {
                popupPath: r
            },
            success: function (r) {
                var s, h;
                jQuery(".swiper-wrapper.popupimage").html(r);
                var f = n,
                    e = jQuery(window).width(),
                    o = jQuery("html").hasClass("touch");
                if (e <= 760 && o) return event.preventDefault(), window.open(jQuery(f).data("image-zoom"), "_blank"), !1;
                u.init(n);
                s = jQuery(i.slider);
                h = 0;
                setTimeout(function () {
                    t.activateZoom(".swiper-carousel")
                }, 300)
            }
        }))
    });
    jQuery(window).on("resize", function () {
        var i;
        clearTimeout(i);
        i = setTimeout(function () {
            t.activateZoom(n)
        }, 50);
        t.sizeIt()
    });
    jQuery("body").on("click", ".share-mobile-button", function () {
        var n = jQuery("#share-mobile-slider").find(".socials-slider-dropdown");
        setTimeout(function () {
            n.addClass("mobile-view")
        }, 250)
    });
    jQuery("body").on("click", "#share-mobile-slider-close", function () {
        var n = jQuery("#share-mobile-slider").find(".socials-slider-dropdown");
        setTimeout(function () {
            n.removeClass("mobile-view")
        }, 350)
    });
    jQuery(".shareSlider").on("click", function () {
        jQuery(".dropdown-menu").removeClass("openModal");
        setTimeout(function () {
            jQuery(".dropdown-menu").addClass("openModal")
        }, 150)
    });
    jQuery(".zoom-slider-modal").bind("touchstart", function () {
        var t = jQuery(this).parents(".modal-infographic-carousel"),
            n;
        t.hasClass("in") && (n = jQuery("body").find(".disclousure"), n.addClass("disable"))
    })
}, ZoomGallery.prototype.sizeIt = function () {
    var t = this,
        u = t.settings,
        n = jQuery(".swiper-carousel"),
        i = n.width(),
        r = 9 / 16 * i;
    n.css({
        height: r
    })
}, ZoomGallery.prototype.InitializeIt = function (n, t) {
    var r = this,
        e = r.settings,
        s = r.slideSettingsPlace,
        u = jQuery(t),
        t = u.find(".swiper-wrapper"),
        f = t.children(".swiper-slide"),
        o = u.find(".controls-swipe"),
        h = f.lenght,
        i;
    if (f.get(1) == undefined) return o.addClass("noSwiper"), !1;
    i = new Swiper(e.swiper_zoom, {
        direction: "horizontal",
        pagination: ".pag-modal",
        nextButton: ".next-modal",
        prevButton: ".prev-modal",
        keyboardControl: !0,
        preloadImages: !0
    });
    setTimeout(function () {
        if (Object.prototype.toString.call(i) === "[object Array]")
            for (var r = 0; r < i.length; r++) {
                i[r].slideTo(n);
                n == 0 && t.css("transform", "translate3d(0px, 0px, 0px)");
                i[r].on("onSlideChangeStart", function () {
                    jQuery(".dropdown-menu").removeClass("openModal");
                    jQuery(".slider-share-Group").removeClass("open");
                    jQuery(".shareSlider").attr("aria-expanded", !1)
                })
            } else {
            i.slideTo(n);
            n == 0 && t.css("transform", "translate3d(0px, 0px, 0px)");
            i.on("onSlideChangeStart", function () {
                jQuery(".dropdown-menu").removeClass("openModal");
                jQuery(".slider-share-Group").removeClass("open");
                jQuery(".shareSlider").attr("aria-expanded", !1)
            })
        }
    }, 50)
}, ZoomGallery.prototype.InitializeItSingle = function (n) {
    var t = this,
        f = t.settings,
        e = t.slideSettingsPlace,
        i = jQuery(n),
        n = i.find(".swiper-wrapper"),
        r = n.children(".swiper-slide"),
        u = i.find(".controls-swipe"),
        o = r.lenght;
    if (r.get(1) == undefined) return u.addClass("noSwiper"), !1
}, ZoomGallery.prototype.activateZoom = function () {
    var r = this,
        s = r.settings,
        t = r.zoomSettings,
        h = jQuery(".swiper-carousel"),
        f = jQuery("html").hasClass("touch"),
        e = jQuery(".zoom-slider-modal").find(t.infoG),
        c = e.find("img"),
        u = jQuery(window).height() - 80,
        n = jQuery(window).width() * .91,
        i, o;
    if (n >= 1220 && (n = 1230), i = (jQuery(window).width() - n) / 2, o = jQuery(window).width(), f) return setTimeout(function () {
        jQuery(".zoom-slider-modal").tabletIndicators()
    }, 250), jQuery(t.thumb).bind("touchmove", function () {
        var r = jQuery(this).attr("id"),
            t = jQuery(this).data("elevateZoom"),
            f = r + "-container";
        jQuery(".swiper-container-infographic").addClass("visible");
        jQuery(".swiper-pagination").addClass("goBack");
        typeof t == "undefined" ? jQuery(this).elevateZoom({
            zoomWindowPosition: f,
            zoomWindowHeight: u,
            zoomWindowWidth: n,
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 500,
            lensFadeIn: 500,
            lensFadeOut: 500,
            easing: !0,
            borderSize: 0,
            lensColour: "black",
            responsive: !0,
            cursor: "pointer",
            keyboardControl: !0,
            scrollZoom: !0
        }) : t.changeState("enable");
        setTimeout(function () {
            var n = jQuery("body").find(".zoomWindowContainer");
            n.css({
                "margin-left": i - 5
            })
        }, 150)
    }), jQuery(t.thumb).bind("touchend", function () {
        jQuery(".swiper-container-infographic").removeClass("visible");
        jQuery(".swiper-pagination").removeClass("goBack")
    }), !1;
    jQuery(t.thumb).hover(function () {
        var r = jQuery(this).attr("id"),
            t = jQuery(this).data("elevateZoom"),
            f = r + "-container";
        jQuery(this).addClass("overThumb");
        jQuery(".swiper-container-infographic").addClass("visible");
        jQuery(".swiper-pagination").addClass("goBack");
        typeof t == "undefined" ? jQuery(this).elevateZoom({
            zoomWindowPosition: f,
            zoomWindowHeight: u,
            zoomWindowWidth: n,
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 500,
            lensFadeIn: 500,
            lensFadeOut: 500,
            easing: !0,
            borderSize: 0,
            lensColour: "black",
            responsive: !0,
            cursor: "pointer",
            keyboardControl: !0,
            scrollZoom: !0
        }) : t.changeState("enable");
        setTimeout(function () {
            var n = jQuery("body").find(".zoomWindowContainer");
            n.css({
                "margin-left": i - 5
            })
        }, 150)
    })
}, ZoomManage = function (n) {
    this.settings = {
        isMoving: !1,
        standardW: 960,
        standarH: 750,
        inGallery: !1,
        imgBlur: ".container-infoG",
        hidders: ".hidders",
        menus_modal: ".menus-modal",
        timeout: ""
    };
    this.htmlItems = {
        imgBlur: jQuery(n).find(".container-infoG"),
        hidders: jQuery(n).find(".hidders"),
        menus_modal: jQuery(n).find(".menus-modal")
    };
    this.addEvents(n)
}, ZoomManage.prototype.mouseWithin = function (n, t, i) {
    var r = n.offset(),
        u = r.left,
        f = r.top,
        e = n.height(),
        o = n.width(),
        s = u + o,
        h = f + e;
    return i <= h && i >= f && t <= s && t >= u
}, ZoomManage.prototype.addEvents = function (n) {
    var i = this,
        t = i.settings;
    h = i.htmlItems;
    var r = jQuery(n),
        u = r.attr("id"),
        f = r.find(".thumb-slider-modal"),
        e = f.find(".thumb-img").attr("id"),
        o = jQuery("html").hasClass("touch");
    if (o) return !1;
    jQuery("#" + u).mousemove(function (n) {
        var u = jQuery("#" + e),
            r = i.mouseWithin(u, n.pageX, n.pageY);
        setTimeout(function () {
            jQuery(t.hidders).addClass("visible")
        }, 300);
        t.isMoving = !0;
        i.hiddeThings();
        r && !t.inGallery && jQuery(".thumb-slider-modal").each(function () {
            var n = jQuery(this).data("elevateZoom");
            typeof n != "undefined" && n.changeState("enable")
        });
        t.inGallery && r || (t.isMoving = !1, i.hiddeThings(), jQuery(".thumb-slider-modal").each(function () {
            var n = jQuery(this).data("elevateZoom");
            typeof n != "undefined" && (n.changeState("disable"), jQuery(this).removeData("elevateZoom"), jQuery(".zoomContainer").remove())
        }));
        t.inGallery = r
    });
    jQuery("body").on("mouseenter", ".zoomContainer", function () {
        jQuery(".swiper-pagination").addClass("goBack");
        jQuery(".swiper-container-infographic").addClass("visible")
    });
    jQuery("body").on("mouseleave", ".zoomContainer", function () {
        jQuery(".swiper-pagination").removeClass("goBack");
        jQuery(".swiper-container-infographic").removeClass("visible")
    })
}, ZoomManage.prototype.hiddeThings = function () {
    var t = this,
        n = t.settings;
    return (clearTimeout(n.timeout), n.isMoving) ? !1 : (n.timeout = setTimeout(function () {
        jQuery(".swiper-pagination").removeClass("goBack");
        jQuery(n.hidders).removeClass("visible")
    }, 1500), !1)
}, CreateModal = function () {
    this.settings = {
        single_expand: ".expand_infography-single",
        modal: "#modal-expand-singleSlide",
        mainImg: "#modal-expand-singleSlide-dragmeOn",
        thumbCont: "#modal-expand-singleSlide-zoom-thumb",
        thumImg: "#modal-expand-singleSlide-zoom",
        dataImg: "data-image-zoom",
        imgType: "data-image-type",
        zoom_container: ".zoomWindowContainer"
    }
}, CreateModal.prototype.init = function (n) {
    var t = this,
        i = t.settings;
    t.create(n)
}, CreateModal.prototype.create = function (n) {
    var u = this,
        t = u.settings,
        f = jQuery(n).attr("id"),
        i = jQuery(n).attr(t.dataImg),
        r = jQuery(n).attr(t.imgType);
    jQuery(t.thumImg).addClass(r);
    jQuery(t.thumbCont).addClass(r);
    jQuery(t.mainImg).attr("src", i);
    jQuery(t.thumImg).attr("src", i);
    jQuery(t.thumImg).attr(t.dataImg, i);
    setTimeout(function () {
        jQuery(t.modal).modal("show");
        setTimeout(function () {
            var n = jQuery("body").find(t.zoom_container);
            jQuery(n).children().css({
                "background-image": "url(" + i + ")"
            })
        }, 150)
    }, 150)
}, AvanadeLoader = function (n) {
    this.loader = jQuery(n);
    this.container = this.loader.find(".lines-hold");
    this.text = this.loader.find(".text")
}, AvanadeLoader.prototype.animation = function (n) {
    var t = this;
    switch (n) {
        case "open":
            t.loader.addClass("active");
            setTimeout(function () {
                t.container.addClass("active");
                setTimeout(function () {
                    t.text.addClass("active")
                }, 250)
            }, 300);
            break;
        case "close":
            t.loader.removeClass("active");
            t.container.removeClass("active");
            t.text.removeClass("active")
    }
}, jQuery(window).ready(function () {
    var n = new ZoomGallery,
        t;
    n.init(".swiper-carousel");
    jQuery.fn.zoomManage = function () {
        return this.each(function () {
            new ZoomManage(this)
        })
    };
    t = new AvanadeLoader("#loader-avanade1");
    jQuery(".zoom-slider-modal").zoomManage()
}), jQuery(document).ready(function () {
    function n() {
        jQuery(".card-a-module .left-single-card-a.mixed-cards").length > 0 && jQuery(".left-single-card-a.mixed-cards").each(function (n) {
            var i = jQuery(this),
                s = jQuery(i).find(".card-a-body").outerHeight(),
                o = jQuery(i).find(".card-a-body h2").outerHeight(!0) + jQuery(i).find(".card-a-body .colp-land").outerHeight(),
                f;
            if (o > s) {
                jQuery(i).addClass("scroll-text");
                jQuery(i).find(".card-a-body").addClass("content").attr("id", "content" + n);
                jQuery("#content" + n).css("overflow-y", "scroll");
                jQuery(i).find(".addingScrollBar").attr("id", "scrollbar-y").html('<div class="scrollbar-container" id="scrollbar-container' + n + '"><div class="scrollbar" id="scrollbar' + n + '"><\/div><\/div>');
                var e = document.getElementById.bind(document),
                    u = e("scrollbar-container" + n),
                    t = e("content" + n),
                    r = e("scrollbar" + n);
                t.addEventListener("scroll", function () {
                    r.style.height = u.clientHeight * t.clientHeight / t.scrollHeight + "px";
                    r.style.top = u.clientHeight * t.scrollTop / t.scrollHeight + "px"
                });
                f = document.createEvent("Event");
                f.initEvent("scroll", !0, !0);
                window.addEventListener("resize", t.dispatchEvent.bind(t, f));
                t.dispatchEvent(f);
                r.addEventListener("mousedown", function (n) {
                    n.preventDefault();
                    var f = r.offsetTop,
                        i = function (i) {
                            var e = i.pageY - n.pageY;
                            r.style.top = Math.min(u.clientHeight - r.clientHeight, Math.max(0, f + e)) + "px";
                            t.scrollTop = t.scrollHeight * r.offsetTop / u.clientHeight
                        };
                    document.addEventListener("mousemove", i);
                    document.addEventListener("mouseup", function () {
                        document.removeEventListener("mousemove", i)
                    })
                });
                jQuery("#content" + n).bind("scroll", function () {
                    jQuery(this).scrollTop() + jQuery(this).innerHeight() >= jQuery(this)[0].scrollHeight ? jQuery(".card-a-module .cards-a .left-single-card-a.scroll-text div.cardAScrollFade").removeClass("fadeout") : jQuery(".card-a-module .cards-a .left-single-card-a.scroll-text div.cardAScrollFade").addClass("fadeout")
                })
            } else jQuery("#content" + n).css("overflow-y", "hidden"), jQuery("#scrollbar-container" + n).remove(), jQuery(i).removeClass("scroll-text"), jQuery("#content" + n).removeClass("content");
            jQuery(window).width() < 751 && (o > 410 ? jQuery(i).addClass("scroll-text") : jQuery(i).removeClass("scroll-text"))
        })
    }

    function t(n) {
        if (jQuery(window).width() < 751) {
            var i = jQuery("#tabbed-module-mixed-" + n),
                t = i.find(".left-single-card-a.mixed-cards"),
                r = t.find(".card-a-body").height();
            r > 500 ? jQuery(t).addClass("scroll-text") : jQuery(t).removeClass("scroll-text");
            jQuery(this).find(".showtab").on("click", function () {
                jQuery(this).hide();
                jQuery(this).parents(".mixed-cards").find(".colp-land").css({
                    "max-height": "initial",
                    "margin-bottom": "0px"
                });
                jQuery(this).parents(".mixed-cards").find(".fadeout").css("display", "none");
                jQuery(this).parents(".mixed-cards").find("span.readmore").css("display", "block");
                jQuery(this).parents(".mixed-cards").find("span.open").css("display", "block");
                jQuery(this).parents(".mixed-cards").find("span.download").css("display", "block");
                jQuery(this).parents(".mixed-cards").find("span.external").css("display", "block");
                jQuery(this).parents(".mixed-cards").find("span.play").css("display", "block");
                jQuery(this).parents(".mixed-cards").find(".share-icons").css("display", "block")
            })
        }
    }
    jQuery(window).resize(function () {
        var n, t;
        jQuery("ul.tabs-rebrand").each(function () {
            var t = jQuery(this).width(),
                i = jQuery(this).find("li").length - 1;
            n = t / i;
            jQuery(this).find("li").css("width", n)
        });
        clearTimeout(t);
        t = setTimeout(function () {
            jQuery("ul.tabs-rebrand .active").each(function () {
                var n = jQuery(this).width(),
                    t = jQuery(this).index(),
                    i = n * t;
                jQuery(this).parent().find("#last-li").css({
                    "margin-left": i
                })
            })
        }, 500)
    });
    jQuery("ul.tabs-rebrand").each(function () {
        var t = jQuery(this).width(),
            i = jQuery(this).find("li").length - 1,
            r = t / i;
        jQuery(this).find("li").css("width", r);
        jQuery("ul.tabs-rebrand li").click(function () {
            var r = jQuery(this).width(),
                u = jQuery(this).index(),
                f = r * u,
                t, i;
            jQuery(this).parent().find("#last-li").css({
                "margin-left": f
            });
            t = jQuery(jQuery(this).parent()).parent();
            jQuery(t).find(".tab-content-rebrand").hide();
            i = jQuery(this).attr("href");
            jQuery(i).show();
            jQuery(this).parent().find("li").removeClass("active");
            jQuery(this).addClass("active");
            n()
        })
    });
    jQuery("ul.tabs-rebrand li").click(function () {
        jQuery(".tab-content-rebrand").addClass("tab-animate")
    });
    jQuery(".tab-drawer-heading").on("click", function () {
        var n = jQuery(this);
        jQuery(this).hasClass("d-active") ? jQuery(this).hasClass("d-active") && (jQuery(this).removeClass("d-active"), jQuery(this).next("div").hide()) : (jQuery(this).closest(".tab-container-rebrand").find(".d-active").next("div").hide(), jQuery(this).closest(".tab-container-rebrand").find(".d-active").removeClass("d-active"), jQuery(this).addClass("d-active"), jQuery(this).next("div").show());
        jQuery("html, body").animate({
            scrollTop: n.offset().top - 50
        }, 1e3);
        t(n.attr("rel"))
    });
    jQuery(".tab-drawer-heading.full-image-card").on("click", function () {
        var n = jQuery(".full-image-card .tabbed-carda .tab-container-rebrand .d-active").next(".tab-content-rebrand").attr("id");
        jQuery(".card-a-module .left-single-card-a.mixed-cards").length > 0 && jQuery("#" + n + " .left-single-card-a.mixed-cards").each(function () {
            var n = jQuery(this),
                i = jQuery(n).find(".card-a-body").outerHeight(),
                t = jQuery(n).find(".card-a-body h2").outerHeight(!0) + jQuery(n).find(".card-a-body .colp-land").outerHeight();
            jQuery(".full-image-card .tabbed-carda .tab-container-rebrand .d-active") && jQuery(window).width() < 751 && t > 410 && (jQuery(n).addClass("scroll-text"), jQuery(".full-image-card .tabbed-carda .tab-container-rebrand .cards-a .left-single-card-a.scroll-text .fadeout").css({
                display: "block"
            }), jQuery(".full-image-card .tabbed-carda .tab-container-rebrand .cards-a .left-single-card-a.scroll-text .showtab").css({
                display: "block"
            }))
        })
    });
    jQuery(".tab-drawer-heading.img-text").on("click", function () {
        var n = jQuery(".img-text .tabbed-carda .tab-container-rebrand .d-active").next(".tab-content-rebrand").attr("id");
        jQuery(".card-a-module .left-single-card-a.mixed-cards").length > 0 && jQuery("#" + n + " .left-single-card-a.mixed-cards").each(function () {
            var t = jQuery("#" + n + " .left-single-card-a.mixed-cards"),
                i = jQuery(t).find(".card-a-body h2").outerHeight(!0) + jQuery(t).find(".card-a-body .colp-land").outerHeight();
            jQuery(".img-text .tabbed-carda .tab-container-rebrand .d-active") && jQuery(window).width() < 751 && i > 410 && (jQuery(t).addClass("scroll-text"), jQuery(".img-text .tabbed-carda .tab-container-rebrand .cards-a .left-single-card-a.scroll-text .fadeout").css({
                display: "block"
            }), jQuery(".img-text .tabbed-carda .tab-container-rebrand .cards-a .left-single-card-a.scroll-text .showtab").css({
                display: "block"
            }), jQuery(".img-text .tabbed-carda .tab-container-rebrand .cards-a .colp-land").removeAttr("style"))
        })
    })
}), jQuery(document).ready(function () {
    jQuery(".halfimage .card").hover(function () {
        jQuery(this).toggleClass("hovered")
    });
    jQuery("section.footer .contactus").hover(function () {
        jQuery("section.footer .shadowContact").toggleClass("hovered")
    })
}), jQuery(document).ready(function () {
    jQuery(window).width() > 768 && jQuery(".brandRefresh-E .item .cardsSection").each(function () {
        function h() {
            var r = jQuery(this),
                n = jQuery(this).find(".preload").attr("data");
            switch (r.attr("data")) {
                case "identifier1":
                    setTimeout(u(t.img1, i.one, n), 500);
                    break;
                case "identifier2":
                    setTimeout(u(t.img2, i.two, n), 500);
                    break;
                case "identifier3":
                    setTimeout(u(t.img3, i.three, n), 500);
                    break;
                case "identifier4":
                    setTimeout(u(t.img4, i.four, n), 500);
                    break;
                case "identifier5":
                    setTimeout(u(t.img5, i.five, n), 500)
            }
        }

        function c() {
            var i = jQuery(this),
                t = n.find(s);
            l(t);
            f = 0
        }

        function u(n, t, i) {
            if (i !== null) {
                f = 0;
                for (var r = 0; r < t.length; r++) jQuery(t[r]).find(".preload, .tile-mask").css({
                    "background-image": "url(" + i + ")",
                    "background-position": f + "% 0px",
                    width: "100%",
                    height: "100%",
                    "background-repeat": "no-repeat"
                }).addClass(n).stop().addClass("fadein"), f += 35.96
            }
        }

        function l() {
            jQuery(".preload").attr("class", "preload").removeAttr("style");
            jQuery(".tile-mask").stop().fadeOut("slow");
            setTimeout(function () {
                jQuery(".tile-mask").attr("class", "tile-mask").removeAttr("style")
            }, 300)
        }
        var r;
        $this = jQuery(this);
        var o = jQuery($this),
            n = jQuery(o.find(".card")),
            e = 0,
            f = 0,
            s = jQuery(".tile-mask"),
            a = jQuery(".preload"),
            t = {
                img1: "bg1",
                img2: "bg2",
                img3: "bg3",
                img4: "bg4",
                img5: "bg5"
            },
            i = {
                one: n.slice(1),
                two: jQuery.merge(n.slice(0, 1), n.slice(2, 5)),
                three: jQuery.merge(n.slice(0, 2), n.slice(3, 5)),
                four: jQuery.merge(n.slice(0, 3), n.slice(4, 5)),
                five: n.slice(0, 4)
            };
        for (r = 0; r < n.length; r++) {
            e++;
            n[r].setAttribute("data", "identifier" + e);
            jQuery(n[r]).on({
                mouseenter: h,
                mouseleave: c
            })
        }
    })
}), jQuery(document).ready(function () {
    jQuery("body").on("click", ".card-a-module .left-single-card-a.scroll-text span.showmore", function () {
        jQuery(".card-a-module .left-single-card-a.scroll-text .card-a-body .colp-land").css({
            "max-height": "initial"
        });
        jQuery(".card-a-module .left-single-card-a.scroll-text  span.showmore").css({
            display: "none"
        });
        jQuery(".card-a-module .left-single-card-a.scroll-text .fadeout").css({
            display: "none"
        });
        jQuery(".card-a-module .left-single-card-a.scroll-text  span.readmore").css({
            display: "block"
        });
        jQuery(".card-a-module .left-single-card-a.scroll-text  span.open").css({
            display: "block"
        });
        jQuery(".card-a-module .left-single-card-a.scroll-text  span.download").css({
            display: "block"
        });
        jQuery(".card-a-module .left-single-card-a.scroll-text  span.external").css({
            display: "block"
        });
        jQuery(".card-a-module .left-single-card-a.scroll-text  span.play").css({
            display: "block"
        });
        jQuery(".card-a-module .left-single-card-a.scroll-text .share-icons").css({
            display: "block"
        })
    });
    jQuery(".card-a-module .left-single-card-a.mixed-cards").length > 0 && jQuery(".left-single-card-a.mixed-cards").each(function (n) {
        var i = jQuery(this),
            s = jQuery(i).find(".card-a-body").height(),
            o = jQuery(i).find(".card-a-body h2").height() + jQuery(i).find(".card-a-body .colp-land").height(),
            f;
        if (o > s) {
            jQuery(i).addClass("scroll-text");
            jQuery(i).find(".card-a-body").addClass("content").attr("id", "content" + n);
            jQuery("#content" + n).css("overflow-y", "scroll");
            jQuery(i).find(".addingScrollBar").attr("id", "scrollbar-y").html('<div class="scrollbar-container" id="scrollbar-container' + n + '"><div class="scrollbar" id="scrollbar' + n + '"><\/div><\/div>');
            var e = document.getElementById.bind(document),
                u = e("scrollbar-container" + n),
                t = e("content" + n),
                r = e("scrollbar" + n);
            typeof t != "undefined" && t != null && t.addEventListener("scroll", function () {
                r.style.height = u.clientHeight * t.clientHeight / t.scrollHeight + "px";
                r.style.top = u.clientHeight * t.scrollTop / t.scrollHeight + "px"
            });
            f = document.createEvent("Event");
            f.initEvent("scroll", !0, !0);
            window.addEventListener("resize", t.dispatchEvent.bind(t, f));
            t.dispatchEvent(f);
            r.addEventListener("mousedown", function (n) {
                n.preventDefault();
                var f = r.offsetTop,
                    i = function (i) {
                        var e = i.pageY - n.pageY;
                        r.style.top = Math.min(u.clientHeight - r.clientHeight, Math.max(0, f + e)) + "px";
                        t.scrollTop = t.scrollHeight * r.offsetTop / u.clientHeight
                    };
                document.addEventListener("mousemove", i);
                document.addEventListener("mouseup", function () {
                    document.removeEventListener("mousemove", i)
                })
            });
            jQuery("#content" + n).bind("scroll", function () {
                jQuery(this).scrollTop() + jQuery(this).innerHeight() >= jQuery(this)[0].scrollHeight ? jQuery(".card-a-module .cards-a .left-single-card-a.scroll-text div.cardAScrollFade").removeClass("fadeout") : jQuery(".card-a-module .cards-a .left-single-card-a.scroll-text div.cardAScrollFade").addClass("fadeout")
            })
        } else jQuery("#content" + n).css("overflow-y", "hidden");
        if (jQuery(window).width() < 751) {
            o > 410 ? jQuery(i).addClass("scroll-text") : jQuery(i).removeClass("scroll-text");
            jQuery(i).find(".showtab").on("click", function () {
                jQuery(this).hide();
                jQuery(this).parents(".mixed-cards").find(".colp-land").css({
                    "max-height": "initial",
                    "margin-bottom": "0px"
                });
                jQuery(this).parents(".mixed-cards").find(".fadeout").css("display", "none");
                jQuery(this).parents(".mixed-cards").find("span.readmore").css("display", "block");
                jQuery(this).parents(".mixed-cards").find("span.open").css("display", "block");
                jQuery(this).parents(".mixed-cards").find("span.download").css("display", "block");
                jQuery(this).parents(".mixed-cards").find("span.external").css("display", "block");
                jQuery(this).parents(".mixed-cards").find("span.play").css("display", "block");
                jQuery(this).parents(".mixed-cards").find(".share-icons").css("display", "block")
            })
        }
    })
}), function () {
    "use strict";
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var n = document.createElement("style");
        n.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}"));
        document.querySelector("head").appendChild(n)
    }
}(), ! function (n, t, i, r) {
    var k = {
        verticalScrolling: !0,
        horizontalScrolling: !1,
        verticalScrollerSide: "right",
        showOnHover: !1,
        scrollIncrement: 20,
        minScrollbarLength: 40,
        pollChanges: !0,
        drawCorner: !0,
        drawScrollButtons: !1,
        clickTrackToScroll: !0,
        easingDuration: 500,
        propagateWheelEvent: !0,
        verticalTrackClass: "vertical-track",
        horizontalTrackClass: "horizontal-track",
        horizontalHandleClass: "horizontal-handle",
        verticalHandleClass: "vertical-handle",
        scrollUpButtonClass: "scroll-up-btn",
        scrollDownButtonClass: "scroll-down-btn",
        scrollLeftButtonClass: "scroll-left-btn",
        scrollRightButtonClass: "scroll-right-btn",
        cornerClass: "scrollbar-corner",
        zIndex: 1,
        addPaddingToPane: !0,
        horizontalHandleHTML: '<div class="left"><\/div><div class="right"><\/div>',
        verticalHandleHTML: '<div class="top"><\/div><div class="bottom"><\/div>'
    },
        y = function (n) {
            n.preventDefault ? n.preventDefault() : n.returnValue = !1;
            n.stopPropagation ? n.stopPropagation() : n.cancelBubble = !0
        },
        u = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (n) {
            setTimeout(n, 17)
        },
        f = function (t, i) {
            var u = n(t).css(i),
                r = /^-?\d+/.exec(u);
            return r ? +r[0] : 0
        },
        d = function (n) {
            var r, i, u = {
                width: "5px",
                height: "1px",
                overflow: "hidden",
                padding: "8px 0",
                visibility: "hidden",
                whiteSpace: "pre-line",
                font: "10px/1 serif"
            },
                t = document.createElement(n),
                f = document.createTextNode("a\na");
            for (i in u) t.style[i] = u[i];
            return t.appendChild(f), document.body.appendChild(t), r = t.scrollHeight < 28, document.body.removeChild(t), r
        },
        g = .5 * Math.PI,
        nt = 10 * Math.log(2),
        a = function (n, t, i) {
            var r = g / t,
                u = n * r;
            return Math.round(u * Math.cos(r * i))
        },
        tt = function (n, t, i) {
            return Math.round(n * nt * Math.pow(2, -10 * i / t + 1) / t)
        },
        w = function (n, t, i, r) {
            return 2 * i / Math.PI * Math.asin((r - n) / t)
        },
        e = function (t) {
            var i = n(this).data("enscroll"),
                u = this,
                r = i.settings,
                f = function () {
                    var t = n(this).data("enscroll"),
                        i = t.settings;
                    t && i.showOnHover && (i.verticalScrolling && n(t.verticalTrackWrapper).is(":visible") && n(t.verticalTrackWrapper).stop().fadeTo(275, 0), i.horizontalScrolling && n(t.horizontalTrackWrapper).is(":visible") && n(t.horizontalTrackWrapper).stop().fadeTo(275, 0), t._fadeTimer = null)
                };
            i && r.showOnHover && (i._fadeTimer ? clearTimeout(i._fadeTimer) : (r.verticalScrolling && n(i.verticalTrackWrapper).is(":visible") && n(i.verticalTrackWrapper).stop().fadeTo(275, 1), r.horizontalScrolling && n(i.horizontalTrackWrapper).is(":visible") && n(i.horizontalTrackWrapper).stop().fadeTo(275, 1)), t !== !1 && (i._fadeTimer = setTimeout(function () {
                f.call(u)
            }, 1750)))
        },
        c = function (t, i) {
            var r = n(t),
                u = r.data("enscroll"),
                f = r.scrollTop();
            u && u.settings.verticalScrolling && (r.scrollTop(f + i), u.settings.showOnHover && e.call(t))
        },
        l = function (t, i) {
            var r = n(t),
                u = r.data("enscroll"),
                f = r.scrollLeft();
            u && u.settings.horizontalScrolling && (r.scrollLeft(f + i), u.settings.showOnHover && e.call(t))
        },
        it = function (t) {
            if (1 === t.which) {
                var f, o, r, y, w, b, k, a, d, c = t.data.pane,
                    l = n(c),
                    h = l.data("enscroll"),
                    v = !0,
                    g = function () {
                        v && (r !== y && (h._scrollingY || (h._scrollingY = !0, h._startY = l.scrollTop(), u(function () {
                            s(l)
                        })), o.style.top = r + "px", h._endY = r * d / a, y = r), u(g), h.settings.showOnHover && e.call(c))
                    },
                    tt = function (n) {
                        return v && (r = n.clientY - b - w, r = Math.min(0 > r ? 0 : r, a)), !1
                    },
                    nt = function () {
                        return v = !1, i.body.style.cursor = k, this.style.cursor = "", f.removeClass("dragging"), n(i.body).off("mousemove.enscroll.vertical").off("mouseup.enscroll.vertical"), n(i).off("mouseout.enscroll.vertical"), l.on("scroll.enscroll.pane", function (n) {
                            p.call(this, n)
                        }), !1
                    };
                return f = n(h.verticalTrackWrapper).find(".enscroll-track"), o = f.children().first()[0], r = parseInt(o.style.top, 10), d = c.scrollHeight - (h._scrollHeightNoPadding ? n(c).height() : n(c).innerHeight()), w = t.clientY - n(o).offset().top, a = f.height() - n(o).outerHeight(), b = f.offset().top, l.off("scroll.enscroll.pane"), n(i.body).on({
                    "mousemove.enscroll.vertical": tt,
                    "mouseup.enscroll.vertical": function (n) {
                        nt.call(o, n)
                    }
                }), n(i).on("mouseout.enscroll.vertical", function (n) {
                    n.target.nodeName && "HTML" === n.target.nodeName.toUpperCase() && nt.call(o, n)
                }), f.hasClass("dragging") || (f.addClass("dragging"), k = n(i.body).css("cursor"), this.style.cursor = i.body.style.cursor = "ns-resize"), u(g), !1
            }
        },
        rt = function (t) {
            if (1 === t.which) {
                var f, o, r, y, w, b, k, d, a, c = t.data.pane,
                    l = n(c),
                    h = n(c).data("enscroll"),
                    v = !0,
                    g = function () {
                        v && (r !== y && (h._scrollingX || (h._scrollingX = !0, h._startX = l.scrollLeft(), u(function () {
                            s(l)
                        })), o.style.left = r + "px", h._endX = r * w / a, y = r), u(g), h.settings.showOnHover && e.call(c))
                    },
                    tt = function (n) {
                        return v && (r = n.clientX - k - b, r = Math.min(0 > r ? 0 : r, a)), !1
                    },
                    nt = function () {
                        return v = !1, f.removeClass("dragging"), i.body.style.cursor = d, this.style.cursor = "", f.removeClass("dragging"), n(i.body).off("mousemove.enscroll.horizontal").off("mouseup.enscroll.horizontal"), n(i).off("mouseout.enscroll.horizontal"), l.on("scroll.enscroll.pane", function (n) {
                            p.call(this, n)
                        }), !1
                    };
                return f = n(h.horizontalTrackWrapper).find(".enscroll-track"), o = f.children().first()[0], r = parseInt(o.style.left, 10), w = c.scrollWidth - n(c).innerWidth(), b = t.clientX - n(o).offset().left, a = f.width() - n(o).outerWidth(), k = f.offset().left, l.off("scroll.enscroll.pane"), n(i.body).on({
                    "mousemove.enscroll.horizontal": tt,
                    "mouseup.enscroll.horizontal": function (n) {
                        nt.call(o, n)
                    }
                }), n(i).on("mouseout.enscroll.horizontal", function (n) {
                    n.target.nodeName && "HTML" === n.target.nodeName.toUpperCase() && nt.call(o, n)
                }), f.hasClass("dragging") || (f.addClass("dragging"), d = n("body").css("cursor"), this.style.cursor = i.body.style.cursor = "ew-resize"), u(g), !1
            }
        },
        s = function (n) {
            var i, r, f, t = n.data("enscroll"),
                e = t._duration;
            t._scrollingX === !0 && (i = t._endX - t._startX, 0 === i ? t._scrollingX = !1 : (r = n.scrollLeft(), f = w(t._startX, i, e, r), i > 0 ? r >= t._endX || r < t._startX ? t._scrollingX = !1 : (l(n, Math.max(1, a(i, e, f))), u(function () {
                s(n)
            })) : r <= t._endX || r > t._startX ? t._scrollingX = !1 : (l(n, Math.min(-1, a(i, e, f))), u(function () {
                s(n)
            }))));
            t._scrollingY === !0 && (i = t._endY - t._startY, 0 === i ? t._scrollingY = !1 : (r = n.scrollTop(), f = w(t._startY, i, e, r), i > 0 ? r >= t._endY || r < t._startY ? t._scrollingY = !1 : (c(n, Math.max(1, a(i, e, f))), u(function () {
                s(n)
            })) : r <= t._endY || r > t._startY ? t._scrollingY = !1 : (c(n, Math.min(-1, a(i, e, f))), u(function () {
                s(n)
            }))))
        },
        v = function (n, t) {
            var i = n.data("enscroll"),
                r = n.scrollLeft(),
                f = n[0].scrollWidth - n.innerWidth();
            return !i.settings.horizontalScrolling || i._scrollingY ? !1 : (i._scrollingX || (i._scrollingX = !0, i._startX = r, i._endX = i._startX, u(function () {
                s(n)
            })), i._endX = t > 0 ? Math.min(r + t, f) : Math.max(0, r + t), 0 > t && r > 0 || t > 0 && f > r)
        },
        h = function (n, t) {
            var i = n.data("enscroll"),
                r = n.scrollTop(),
                f = n[0].scrollHeight - (i._scrollHeightNoPadding ? n.height() : n.innerHeight());
            return !i.settings.verticalScrolling || i._scrollingX ? !1 : (i._scrollingY || (i._scrollingY = !0, i._startY = r, i._endY = i._startY, u(function () {
                s(n)
            })), i._endY = t > 0 ? Math.min(r + t, f) : Math.max(0, r + t), 0 > t && r > 0 || t > 0 && f > r)
        },
        ut = function (t) {
            var i, u = n(this),
                f = u.data("enscroll"),
                r = f.settings.scrollIncrement,
                e = "deltaX" in t ? -t.deltaX : "wheelDeltaX" in t ? t.wheelDeltaX : 0,
                o = "deltaY" in t ? -t.deltaY : "wheelDeltaY" in t ? t.wheelDeltaY : "wheelDelta" in t ? t.wheelDelta : 0;
            Math.abs(e) > Math.abs(o) ? (i = (e > 0 ? -r : r) << 2, (v(u, i) || !f.settings.propagateWheelEvent) && y(t)) : (i = (o > 0 ? -r : r) << 2, (h(u, i) || !f.settings.propagateWheelEvent) && y(t))
        },
        p = function () {
            var i, r, t, u = n(this),
                f = u.data("enscroll");
            f && (f.settings.verticalScrolling && (r = n(f.verticalTrackWrapper).find(".enscroll-track")[0], i = r.firstChild, t = u.scrollTop() / (this.scrollHeight - (f._scrollHeightNoPadding ? u.height() : u.innerHeight())), t = isNaN(t) ? 0 : t, i.style.top = t * (n(r).height() - n(i).outerHeight()) + "px"), f.settings.horizontalScrolling && (r = n(f.horizontalTrackWrapper).find(".enscroll-track")[0], i = r.firstChild, t = u.scrollLeft() / (this.scrollWidth - u.innerWidth()), t = isNaN(t) ? 0 : t, i.style.left = t * (n(r).width() - n(i).innerWidth()) + "px"))
        },
        ft = function (t) {
            var r, i = n(this),
                u = i.data("enscroll");
            if (!/(input)|(select)|(textarea)/i.test(this.nodeName) && t.target === this && u) {
                switch (r = u.settings.scrollIncrement, t.keyCode) {
                    case 32:
                    case 34:
                        return h(i, i.height()), !1;
                    case 33:
                        return h(i, -i.height()), !1;
                    case 35:
                        return h(i, this.scrollHeight), !1;
                    case 36:
                        return h(i, -this.scrollHeight), !1;
                    case 37:
                        return v(i, -r), !1;
                    case 38:
                        return h(i, -r), !1;
                    case 39:
                        return v(i, r), !1;
                    case 40:
                        return h(i, r), !1
                }
                return !0
            }
        },
        et = function () {
            var t = this,
                s = n(t).data("enscroll").settings,
                h = !0,
                r = 0,
                f = 0,
                e = n(t).offset().top,
                a = e + n(t).outerHeight(),
                o = n(t).offset().left,
                v = o + n(t).outerWidth(),
                p = function (n) {
                    var t = n.pageX,
                        i = n.pageY;
                    r = o > t ? t - o : t > v ? t - v : 0;
                    f = e > i ? i - e : i > a ? i - a : 0
                },
                y = function () {
                    s.horizontalScrolling && r && l(t, parseInt(r / 4, 10));
                    s.verticalScrolling && f && c(t, parseInt(f / 4, 10));
                    h && u(y)
                },
                w = function () {
                    h = !1;
                    n(i).off("mousemove.enscroll.pane").off("mouseup.enscroll.pane")
                };
            u(y);
            n(i).on({
                "mousemove.enscroll.pane": p,
                "mouseup.enscroll.pane": w
            })
        },
        b = function (n) {
            var t, i, o, f, e, s, h, a = this,
                v = function (n) {
                    t = n.touches[0].clientX;
                    i = n.touches[0].clientY;
                    o || (o = i === e && t === f ? r : Math.abs(e - i) > Math.abs(f - t) ? "y" : "x");
                    y(n)
                },
                p = function () {
                    s && ("y" === o ? (c(a, e - i), h = e - i, e = i) : "x" === o && (l(a, f - t), h = f - t, f = t), u(p))
                },
                w = function () {
                    var n = 0,
                        t = Math.abs(1.5 * h);
                    this.removeEventListener("touchmove", v, !1);
                    this.removeEventListener("touchend", w, !1);
                    s = !1;
                    u(function i() {
                        var r;
                        n === t || s || (r = tt(h, t, n), isNaN(r) || 0 === r || (n += 1, "y" === o ? c(a, r) : l(a, r), u(i)))
                    })
                };
            1 === n.touches.length && (f = n.touches[0].clientX, e = n.touches[0].clientY, s = !0, this.addEventListener("touchmove", v, !1), this.addEventListener("touchend", w, !1), u(p))
        },
        o = {
            reposition: function () {
                return this.each(function () {
                    var e, r, t, u = n(this),
                        i = u.data("enscroll"),
                        o = function (n, t, i) {
                            n.style.left = t + "px";
                            n.style.top = i + "px"
                        };
                    i && (t = u.position(), e = i.corner, i.settings.verticalScrolling && (r = i.verticalTrackWrapper, o(r, "right" === i.settings.verticalScrollerSide ? t.left + u.outerWidth() - n(r).width() - f(this, "border-right-width") : t.left + f(this, "border-left-width"), t.top + f(this, "border-top-width"))), i.settings.horizontalScrolling && (r = i.horizontalTrackWrapper, o(r, t.left + f(this, "border-left-width"), t.top + u.outerHeight() - n(r).height() - f(this, "border-bottom-width"))), e && o(e, t.left + u.outerWidth() - n(e).outerWidth() - f(this, "border-right-width"), t.top + u.outerHeight() - n(e).outerHeight() - f(this, "border-bottom-width")))
                })
            },
            resize: function () {
                return this.each(function () {
                    var i, c, l, r, u, f, s, h, p, w, b, k, e, a, v, y, o = n(this),
                        t = o.data("enscroll");
                    return t ? (i = t.settings, o.is(":visible") ? (i.verticalScrolling && (r = t.verticalTrackWrapper, c = o.innerHeight(), u = c / this.scrollHeight, f = n(r).find(".enscroll-track")[0], p = n(r).find("." + i.scrollUpButtonClass), w = n(r).find("." + i.scrollDownButtonClass), h = i.horizontalScrolling ? c - n(t.horizontalTrackWrapper).find(".enscroll-track").outerHeight() : c, h -= n(f).outerHeight() - n(f).height() + p.outerHeight() + w.outerHeight(), e = f.firstChild, v = Math.max(u * h, i.minScrollbarLength), v -= n(e).outerHeight() - n(e).height(), r.style.display = "none", f.style.height = h + "px", e.style.height = v + "px", 1 > u && (u = o.scrollTop() / (this.scrollHeight - o.height()), e.style.top = u * (h - v) + "px", r.style.display = "block")), i.horizontalScrolling && (r = t.horizontalTrackWrapper, l = o.innerWidth(), u = l / this.scrollWidth, f = n(r).find(".enscroll-track")[0], b = n(r).find("." + i.scrollLeftButtonClass), k = n(r).find("." + i.scrollRightButtonClass), s = i.verticalScrolling ? l - n(t.verticalTrackWrapper).find(".enscroll-track").outerWidth() : l, s -= n(f).outerWidth() - n(f).width() + b.outerWidth() + k.outerWidth(), e = f.firstChild, a = Math.max(u * s, i.minScrollbarLength), a -= n(e).outerWidth() - n(e).width(), r.style.display = "none", f.style.width = s + "px", e.style.width = a + "px", 1 > u && (u = o.scrollLeft() / (this.scrollWidth - o.width()), e.style.left = u * (s - a) + "px", r.style.display = "block"), t._prybar && (y = t._prybar, this.removeChild(y), i.verticalScrolling && (y.style.width = this.scrollWidth + n(t.verticalTrackWrapper).find(".enscroll-track").outerWidth() + "px", this.appendChild(y)))), t.corner && (t.corner.style.display = t.verticalTrackWrapper && t.horizontalTrackWrapper && n(t.verticalTrackWrapper).is(":visible") && n(t.horizontalTrackWrapper).is(":visible") ? "" : "none")) : (i.verticalScrolling && (t.verticalTrackWrapper.style.display = "none"), i.horizontalScrolling && (t.horizontalTrackWrapper.style.display = "none"), t.corner && (t.corner.style.display = "none")), void 0) : !0
                })
            },
            startPolling: function () {
                return this.each(function () {
                    var u, i = n(this).data("enscroll"),
                        r = this,
                        t = n(r),
                        f = -1,
                        e = -1,
                        s = -1,
                        h = -1,
                        c = function () {
                            if (i.settings.pollChanges) {
                                var v = r.scrollWidth,
                                    y = r.scrollHeight,
                                    n = t.width(),
                                    l = t.height(),
                                    a = t.offset();
                                (i.settings.verticalScrolling && (l !== e || y !== h) || i.settings.horizontalScrolling && (n !== f || v !== s)) && (s = v, h = y, o.resize.call(t));
                                (u.left !== a.left || u.top !== a.top || n !== f || l !== e) && (u = a, f = n, e = l, o.reposition.call(t));
                                setTimeout(c, 350)
                            }
                        };
                    i && (i.settings.pollChanges = !0, h = r.scrollHeight, s = r.scrollWidth, u = t.offset(), c())
                })
            },
            stopPolling: function () {
                return this.each(function () {
                    var t = n(this).data("enscroll");
                    t && (t.settings.pollChanges = !1)
                })
            },
            destroy: function () {
                return this.each(function () {
                    var r, u, f = n(this),
                        i = f.data("enscroll");
                    i && (o.stopPolling.call(f), u = i._mouseScrollHandler, i.settings.verticalScrolling && (r = i.verticalTrackWrapper, n(r).remove(), r = null), i.settings.horizontalScrolling && (r = i.horizontalTrackWrapper, n(r).remove(), r = null), i._fadeTimer && clearTimeout(i._fadeTimer), i.corner && n(i.corner).remove(), i._prybar && i._prybar.parentNode && i._prybar.parentNode === this && n(i._prybar).remove(), this.setAttribute("style", i._style || ""), i._hadTabIndex || f.removeAttr("tabindex"), f.off("scroll.enscroll.pane").off("keydown.enscroll.pane").off("mouseenter.enscroll.pane").off("mousedown.enscroll.pane").data("enscroll", null), this.removeEventListener ? (this.removeEventListener("wheel", u, !1), this.removeEventListener("mousewheel", u, !1), this.removeEventListener("touchstart", b, !1)) : this.detachEvent && this.detachEvent("onmousewheel", u), n(t).off("resize.enscroll.window"))
                })
            }
        };
    n.fn.enscroll = function (r) {
        var u;
        return o[r] ? o[r].call(this) : (u = n.extend({}, k, r), this.each(function () {
            if (u.verticalScrolling || u.horizontalScrolling) {
                var a, y, w, k, g, nt, yt, pt, wt, bt, st, tt, ht, ct, kt, lt, at, dt, r = n(this),
                    s = this,
                    ti = r.attr("style"),
                    gt = !0,
                    vt = {
                        position: "absolute",
                        margin: 0,
                        padding: 0
                    },
                    ot = function (n) {
                        ut.call(s, n)
                    },
                    ni = function (t, i) {
                        "string" == typeof i ? n(t).html(i) : t.appendChild(i)
                    };
                if (u.verticalScrolling) {
                    y = i.createElement("div");
                    k = i.createElement("div");
                    nt = i.createElement("a");
                    n(k).css("position", "relative").addClass("enscroll-track").addClass(u.verticalTrackClass).appendTo(y);
                    u.drawScrollButtons && (yt = i.createElement("a"), pt = i.createElement("a"), n(yt).css({
                        display: "block",
                        "text-decoration": "none"
                    }).attr("href", "").html("&nbsp;").addClass(u.scrollUpButtonClass).on("click", function () {
                        return c(s, -u.scrollIncrement), !1
                    }).insertBefore(k), n(pt).css({
                        display: "block",
                        "text-decoration": "none"
                    }).attr("href", "").html("&nbsp;").on("click", function () {
                        return c(s, u.scrollIncrement), !1
                    }).addClass(u.scrollDownButtonClass).appendTo(y));
                    u.clickTrackToScroll && n(k).on("click", function (t) {
                        t.target === this && h(r, t.pageY > n(nt).offset().top ? r.height() : -r.height())
                    });
                    n(nt).css({
                        position: "absolute",
                        "z-index": 1
                    }).attr("href", "").addClass(u.verticalHandleClass).mousedown({
                        pane: this
                    }, it).click(function () {
                        return !1
                    }).appendTo(k);
                    ni(nt, u.verticalHandleHTML);
                    n(y).css(vt).insertAfter(this);
                    u.showOnHover && n(y).css("opacity", 0).on("mouseover.enscroll.vertical", function () {
                        e.call(s, !1)
                    }).on("mouseout.enscroll.vertical", function () {
                        e.call(s)
                    });
                    tt = n(k).outerWidth();
                    u.addPaddingToPane && (dt = "right" === u.verticalScrollerSide ? {
                        "padding-right": f(this, "padding-right") + tt + "px"
                    } : {
                            "padding-left": f(this, "padding-left") + tt + "px"
                        }, r.css(n.extend({
                            width: r.width() - tt + "px"
                        }, dt)));
                    try {
                        lt = parseInt(r.css("outline-width"), 10);
                        (0 === lt || isNaN(lt)) && "none" === r.css("outline-style") && r.css("outline", "none")
                    } catch (ii) {
                        r.css("outline", "none")
                    }
                }
                u.horizontalScrolling && (a = i.createElement("div"), w = i.createElement("div"), g = i.createElement("a"), n(w).css({
                    position: "relative",
                    "z-index": 1
                }).addClass("enscroll-track").addClass(u.horizontalTrackClass).appendTo(a), u.drawScrollButtons && (wt = i.createElement("a"), bt = i.createElement("a"), n(wt).css("display", "block").attr("href", "").on("click", function () {
                    return l(s, -u.scrollIncrement), !1
                }).addClass(u.scrollLeftButtonClass).insertBefore(w), n(bt).css("display", "block").attr("href", "").on("click", function () {
                    return l(s, u.scrollIncrement), !1
                }).addClass(u.scrollRightButtonClass).appendTo(a)), u.clickTrackToScroll && n(w).on("click", function (t) {
                    t.target === this && v(r, t.pageX > n(g).offset().left ? r.width() : -r.width())
                }), n(g).css({
                    position: "absolute",
                    "z-index": 1
                }).attr("href", "").addClass(u.horizontalHandleClass).click(function () {
                    return !1
                }).mousedown({
                    pane: this
                }, rt).appendTo(w), ni(g, u.horizontalHandleHTML), n(a).css(vt).insertAfter(this), u.showOnHover && n(a).css("opacity", 0).on("mouseover.enscroll.horizontal", function () {
                    e.call(s, !1)
                }).on("mouseout.enscroll.horizontal", function () {
                    e.call(s)
                }), st = n(w).outerHeight(), u.addPaddingToPane && r.css({
                    height: r.height() - st + "px",
                    "padding-bottom": parseInt(r.css("padding-bottom"), 10) + st + "px"
                }), at = document.createElement("div"), n(at).css({
                    width: "1px",
                    height: "1px",
                    visibility: "hidden",
                    padding: 0,
                    margin: "-1px"
                }).appendTo(this));
                u.verticalScrolling && u.horizontalScrolling && u.drawCorner && (ht = i.createElement("div"), n(ht).addClass(u.cornerClass).css(vt).insertAfter(this));
                kt = r.attr("tabindex");
                kt || (r.attr("tabindex", 0), gt = !1);
                try {
                    ct = r.css("outline");
                    (!ct || ct.length < 1) && r.css("outline", "none")
                } catch (ii) {
                    r.css("outline", "none")
                }
                r.on({
                    "scroll.enscroll.pane": function (n) {
                        p.call(this, n)
                    },
                    "keydown.enscroll.pane": ft,
                    "mousedown.enscroll.pane": et
                }).css("overflow", "hidden").data("enscroll", {
                    settings: u,
                    horizontalTrackWrapper: a,
                    verticalTrackWrapper: y,
                    corner: ht,
                    _prybar: at,
                    _mouseScrollHandler: ot,
                    _hadTabIndex: gt,
                    _style: ti,
                    _scrollingX: !1,
                    _scrollingY: !1,
                    _startX: 0,
                    _startY: 0,
                    _endX: 0,
                    _endY: 0,
                    _duration: parseInt(u.easingDuration / 16.66666, 10),
                    _scrollHeightNoPadding: d(this.nodeName)
                });
                n(t).on("resize.enscroll.window", function () {
                    o.reposition.call(r)
                });
                u.showOnHover && r.on("mouseenter.enscroll.pane", function () {
                    e.call(this)
                });
                this.addEventListener ? ("onwheel" in this || "WheelEvent" in t && navigator.userAgent.toLowerCase().indexOf("msie") >= 0 ? this.addEventListener("wheel", ot, !1) : "onmousewheel" in this && this.addEventListener("mousewheel", ot, !1), this.addEventListener("touchstart", b, !1)) : this.attachEvent && this.attachEvent("onmousewheel", ot);
                u.pollChanges && o.startPolling.call(r);
                o.resize.call(r);
                o.reposition.call(r)
            }
        }))
    }
}(jQuery, window, document), jQuery(document).ready(function (n) {
    n(".playVideo").click(function (t) {
        t.preventDefault();
        var r = n(this).data("itemid"),
            u = n(this).data("target"),
            i = n(this).attr("data-player-key"),
            f = "https://players.brightcove.net/2103045685001/" + i + "_default/index.min.js";
        i !== undefined && i.length !== 0 && r != null && n.getScript(f, function () {
            n.ajax({
                url: GetVideoUrl,
                type: "GET",
                data: {
                    ID: r
                },
                success: function (t) {
                    var i = n(this).data("target"),
                        f = n(t),
                        r;
                    n("#playVideo").css("display") == "none" && (n(i).hide(), r = '<a href="javascript:void(0)" class="modal-btn closeOption video-btn hero"><span class="hidden-xs">Close <\/span><div class="sr-only">video button<\/div><\/a>', n("#playVideo").append(r).append(f), n("" + u + "").hide(), n("#playVideo").show().focus(), n("#playVideo .modal-btn.closeOption.video-btn.hero").click(function () {
                        n(i).show();
                        n("" + u + "").show();
                        n("#playVideo").hide();
                        n(".item .accessbuilt").focus();
                        n("#playVideo").contents().remove()
                    }))
                }
            })
        })
    })
}), jQuery(document).ready(function () { }), ! function (n) {
    "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? module.exports = n() : window.wNumb = n()
}(function () {
    "use strict";

    function t(n) {
        return n.split("").reverse().join("")
    }

    function i(n, t) {
        return n.substring(0, t.length) === t
    }

    function o(n, t) {
        return n.slice(-1 * t.length) === t
    }

    function r(n, t, i) {
        if ((n[t] || n[i]) && n[t] === n[i]) throw new Error(t);
    }

    function f(n) {
        return "number" == typeof n && isFinite(n)
    }

    function s(n, t) {
        return n = n.toString().split("e"), n = Math.round(+(n[0] + "e" + (n[1] ? +n[1] + t : t))), n = n.toString().split("e"), (+(n[0] + "e" + (n[1] ? +n[1] - t : -t))).toFixed(t)
    }

    function h(n, i, r, u, e, o, h, c, l, a, v, y) {
        var b, k, w, g = y,
            d = "",
            p = "";
        return o && (y = o(y)), !!f(y) && (n !== !1 && 0 === parseFloat(y.toFixed(n)) && (y = 0), y < 0 && (b = !0, y = Math.abs(y)), n !== !1 && (y = s(y, n)), y = y.toString(), y.indexOf(".") !== -1 ? (k = y.split("."), w = k[0], r && (d = r + k[1])) : w = y, i && (w = t(w).match(/.{1,3}/g), w = t(w.join(t(i)))), b && c && (p += c), u && (p += u), b && l && (p += l), p += w, p += d, e && (p += e), a && (p = a(p, g)), p)
    }

    function c(n, t, r, u, e, s, h, c, l, a, v, y) {
        var w, p = "";
        return v && (y = v(y)), !(!y || "string" != typeof y) && (c && i(y, c) && (y = y.replace(c, ""), w = !0), u && i(y, u) && (y = y.replace(u, "")), l && i(y, l) && (y = y.replace(l, ""), w = !0), e && o(y, e) && (y = y.slice(0, -1 * e.length)), t && (y = y.split(t).join("")), r && (y = y.replace(r, ".")), w && (p += "-"), p += y, p = p.replace(/[^0-9\.\-.]/g, ""), "" !== p && (p = Number(p), h && (p = h(p)), !!f(p) && p))
    }

    function l(t) {
        var e, i, f, u = {};
        for (void 0 === t.suffix && (t.suffix = t.postfix), e = 0; e < n.length; e += 1)
            if (i = n[e], f = t[i], void 0 === f) u[i] = "negative" !== i || u.negativeBefore ? "mark" === i && "." !== u.thousand ? "." : !1 : "-";
            else if ("decimals" === i) {
                if (!(f >= 0 && f < 8)) throw new Error(i);
                u[i] = f
            } else if ("encoder" === i || "decoder" === i || "edit" === i || "undo" === i) {
                if ("function" != typeof f) throw new Error(i);
                u[i] = f
            } else {
                if ("string" != typeof f) throw new Error(i);
                u[i] = f
            }
        return r(u, "mark", "thousand"), r(u, "prefix", "negative"), r(u, "prefix", "negativeBefore"), u
    }

    function e(t, i, r) {
        for (var f = [], u = 0; u < n.length; u += 1) f.push(t[n[u]]);
        return f.push(r), i.apply("", f)
    }

    function u(n) {
        return this instanceof u ? void ("object" == typeof n && (n = l(n), this.to = function (t) {
            return e(n, h, t)
        }, this.from = function (t) {
            return e(n, c, t)
        })) : new u(n)
    }
    var n = ["decimals", "thousand", "mark", "prefix", "suffix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo"];
    return u
}), ! function (n) {
    "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? module.exports = n() : window.noUiSlider = n()
}(function () {
    "use strict";

    function u(n, i) {
        var r = document.createElement("div");
        return t(r, i), n.appendChild(r), r
    }

    function p(n) {
        return n.filter(function (n) {
            return !this[n] && (this[n] = !0)
        }, {})
    }

    function w(n, t) {
        return Math.round(n / t) * t
    }

    function b(n, t) {
        var r = n.getBoundingClientRect(),
            f = n.ownerDocument,
            u = f.documentElement,
            i = l();
        return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (i.x = 0), t ? r.top + i.y - u.clientTop : r.left + i.x - u.clientLeft
    }

    function r(n) {
        return "number" == typeof n && !isNaN(n) && isFinite(n)
    }

    function c(n, i, r) {
        r > 0 && (t(n, i), setTimeout(function () {
            f(n, i)
        }, r))
    }

    function k(n) {
        return Math.max(Math.min(n, 100), 0)
    }

    function o(n) {
        return Array.isArray(n) ? n : [n]
    }

    function d(n) {
        n = String(n);
        var t = n.split(".");
        return t.length > 1 ? t[1].length : 0
    }

    function t(n, t) {
        n.classList ? n.classList.add(t) : n.className += " " + t
    }

    function f(n, t) {
        n.classList ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")
    }

    function g(n, t) {
        return n.classList ? n.classList.contains(t) : new RegExp("\\b" + t + "\\b").test(n.className)
    }

    function l() {
        var n = void 0 !== window.pageXOffset,
            t = "CSS1Compat" === (document.compatMode || ""),
            i = n ? window.pageXOffset : t ? document.documentElement.scrollLeft : document.body.scrollLeft,
            r = n ? window.pageYOffset : t ? document.documentElement.scrollTop : document.body.scrollTop;
        return {
            x: i,
            y: r
        }
    }

    function nt() {
        return window.navigator.pointerEnabled ? {
            start: "pointerdown",
            move: "pointermove",
            end: "pointerup"
        } : window.navigator.msPointerEnabled ? {
            start: "MSPointerDown",
            move: "MSPointerMove",
            end: "MSPointerUp"
        } : {
                    start: "mousedown touchstart",
                    move: "mousemove touchmove",
                    end: "mouseup touchend"
                }
    }

    function s(n, t) {
        return 100 / (t - n)
    }

    function h(n, t) {
        return 100 * t / (n[1] - n[0])
    }

    function tt(n, t) {
        return h(n, n[0] < 0 ? t + Math.abs(n[0]) : t - n[0])
    }

    function it(n, t) {
        return t * (n[1] - n[0]) / 100 + n[0]
    }

    function e(n, t) {
        for (var i = 1; n >= t[i];) i += 1;
        return i
    }

    function rt(n, t, i) {
        if (i >= n.slice(-1)[0]) return 100;
        var f, o, u, h, r = e(i, n);
        return f = n[r - 1], o = n[r], u = t[r - 1], h = t[r], u + tt([f, o], i) / s(u, h)
    }

    function ut(n, t, i) {
        if (i >= 100) return n.slice(-1)[0];
        var f, o, u, h, r = e(i, t);
        return f = n[r - 1], o = n[r], u = t[r - 1], h = t[r], it([f, o], (i - u) * s(u, h))
    }

    function ft(n, t, i, r) {
        if (100 === r) return r;
        var f, o, u = e(r, n);
        return i ? (f = n[u - 1], o = n[u], r - f > (o - f) / 2 ? o : f) : t[u - 1] ? n[u - 1] + w(r - n[u - 1], t[u - 1]) : r
    }

    function et(t, i, u) {
        var f;
        if ("number" == typeof i && (i = [i]), "[object Array]" !== Object.prototype.toString.call(i)) throw new Error("noUiSlider (" + n + "): 'range' contains invalid value.");
        if (f = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t), !r(f) || !r(i[0])) throw new Error("noUiSlider (" + n + "): 'range' value isn't numeric.");
        u.xPct.push(f);
        u.xVal.push(i[0]);
        f ? u.xSteps.push(!isNaN(i[1]) && i[1]) : isNaN(i[1]) || (u.xSteps[0] = i[1]);
        u.xHighestCompleteStep.push(0)
    }

    function ot(n, t, i) {
        if (!t) return !0;
        i.xSteps[n] = h([i.xVal[n], i.xVal[n + 1]], t) / s(i.xPct[n], i.xPct[n + 1]);
        var r = (i.xVal[n + 1] - i.xVal[n]) / i.xNumSteps[n],
            u = Math.ceil(Number(r.toFixed(3)) - 1),
            f = i.xVal[n] + i.xNumSteps[n] * u;
        i.xHighestCompleteStep[n] = f
    }

    function i(n, t, i, r) {
        this.xPct = [];
        this.xVal = [];
        this.xSteps = [r || !1];
        this.xNumSteps = [!1];
        this.xHighestCompleteStep = [];
        this.snap = t;
        this.direction = i;
        var u, f = [];
        for (u in n) n.hasOwnProperty(u) && f.push([n[u], u]);
        for (f.length && "object" == typeof f[0][0] ? f.sort(function (n, t) {
            return n[0][0] - t[0][0]
        }) : f.sort(function (n, t) {
            return n[0] - t[0]
        }), u = 0; u < f.length; u++) et(f[u][1], f[u][0], this);
        for (this.xNumSteps = this.xSteps.slice(0), u = 0; u < this.xNumSteps.length; u++) ot(u, this.xNumSteps[u], this)
    }

    function st(t, i) {
        if (!r(i)) throw new Error("noUiSlider (" + n + "): 'step' is not numeric.");
        t.singleStep = i
    }

    function ht(t, r) {
        if ("object" != typeof r || Array.isArray(r)) throw new Error("noUiSlider (" + n + "): 'range' is not an object.");
        if (void 0 === r.min || void 0 === r.max) throw new Error("noUiSlider (" + n + "): Missing 'min' or 'max' in 'range'.");
        if (r.min === r.max) throw new Error("noUiSlider (" + n + "): 'range' 'min' and 'max' cannot be equal.");
        t.spectrum = new i(r, t.snap, t.dir, t.singleStep)
    }

    function ct(t, i) {
        if (i = o(i), !Array.isArray(i) || !i.length) throw new Error("noUiSlider (" + n + "): 'start' option is incorrect.");
        t.handles = i.length;
        t.start = i
    }

    function lt(t, i) {
        if (t.snap = i, "boolean" != typeof i) throw new Error("noUiSlider (" + n + "): 'snap' option must be a boolean.");
    }

    function at(t, i) {
        if (t.animate = i, "boolean" != typeof i) throw new Error("noUiSlider (" + n + "): 'animate' option must be a boolean.");
    }

    function vt(t, i) {
        if (t.animationDuration = i, "number" != typeof i) throw new Error("noUiSlider (" + n + "): 'animationDuration' option must be a number.");
    }

    function yt(t, i) {
        var u, r = [!1];
        if ("lower" === i ? i = [!0, !1] : "upper" === i && (i = [!1, !0]), i === !0 || i === !1) {
            for (u = 1; u < t.handles; u++) r.push(i);
            r.push(!1)
        } else {
            if (!Array.isArray(i) || !i.length || i.length !== t.handles + 1) throw new Error("noUiSlider (" + n + "): 'connect' option doesn't match handle count.");
            r = i
        }
        t.connect = r
    }

    function pt(t, i) {
        switch (i) {
            case "horizontal":
                t.ort = 0;
                break;
            case "vertical":
                t.ort = 1;
                break;
            default:
                throw new Error("noUiSlider (" + n + "): 'orientation' option is invalid.");
        }
    }

    function a(t, i) {
        if (!r(i)) throw new Error("noUiSlider (" + n + "): 'margin' option must be numeric.");
        if (0 !== i && (t.margin = t.spectrum.getMargin(i), !t.margin)) throw new Error("noUiSlider (" + n + "): 'margin' option is only supported on linear sliders.");
    }

    function wt(t, i) {
        if (!r(i)) throw new Error("noUiSlider (" + n + "): 'limit' option must be numeric.");
        if (t.limit = t.spectrum.getMargin(i), !t.limit || t.handles < 2) throw new Error("noUiSlider (" + n + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
    }

    function bt(t, i) {
        if (!r(i)) throw new Error("noUiSlider (" + n + "): 'padding' option must be numeric.");
        if (0 !== i) {
            if (t.padding = t.spectrum.getMargin(i), !t.padding) throw new Error("noUiSlider (" + n + "): 'padding' option is only supported on linear sliders.");
            if (t.padding < 0) throw new Error("noUiSlider (" + n + "): 'padding' option must be a positive number.");
            if (t.padding >= 50) throw new Error("noUiSlider (" + n + "): 'padding' option must be less than half the range.");
        }
    }

    function kt(t, i) {
        switch (i) {
            case "ltr":
                t.dir = 0;
                break;
            case "rtl":
                t.dir = 1;
                break;
            default:
                throw new Error("noUiSlider (" + n + "): 'direction' option was not recognized.");
        }
    }

    function dt(t, i) {
        if ("string" != typeof i) throw new Error("noUiSlider (" + n + "): 'behaviour' must be a string containing options.");
        var f = i.indexOf("tap") >= 0,
            e = i.indexOf("drag") >= 0,
            r = i.indexOf("fixed") >= 0,
            u = i.indexOf("snap") >= 0,
            o = i.indexOf("hover") >= 0;
        if (r) {
            if (2 !== t.handles) throw new Error("noUiSlider (" + n + "): 'fixed' behaviour must be used with 2 handles");
            a(t, t.start[1] - t.start[0])
        }
        t.events = {
            tap: f || u,
            drag: e,
            fixed: r,
            snap: u,
            hover: o
        }
    }

    function gt(t, i) {
        if (i !== !1)
            if (i === !0) {
                t.tooltips = [];
                for (var r = 0; r < t.handles; r++) t.tooltips.push(!0)
            } else {
                if (t.tooltips = o(i), t.tooltips.length !== t.handles) throw new Error("noUiSlider (" + n + "): must pass a formatter for all handles.");
                t.tooltips.forEach(function (t) {
                    if ("boolean" != typeof t && ("object" != typeof t || "function" != typeof t.to)) throw new Error("noUiSlider (" + n + "): 'tooltips' must be passed a formatter or 'false'.");
                })
            }
    }

    function ni(t, i) {
        if (t.format = i, "function" == typeof i.to && "function" == typeof i.from) return !0;
        throw new Error("noUiSlider (" + n + "): 'format' requires 'to' and 'from' methods.");
    }

    function ti(t, i) {
        if (void 0 !== i && "string" != typeof i && i !== !1) throw new Error("noUiSlider (" + n + "): 'cssPrefix' must be a string or `false`.");
        t.cssPrefix = i
    }

    function ii(t, i) {
        if (void 0 !== i && "object" != typeof i) throw new Error("noUiSlider (" + n + "): 'cssClasses' must be an object.");
        if ("string" == typeof t.cssPrefix) {
            t.cssClasses = {};
            for (var r in i) i.hasOwnProperty(r) && (t.cssClasses[r] = t.cssPrefix + i[r])
        } else t.cssClasses = i
    }

    function ri(t, i) {
        if (i !== !0 && i !== !1) throw new Error("noUiSlider (" + n + "): 'useRequestAnimationFrame' option should be true (default) or false.");
        t.useRequestAnimationFrame = i
    }

    function v(t) {
        var i = {
            margin: 0,
            limit: 0,
            padding: 0,
            animate: !0,
            animationDuration: 300,
            format: y
        },
            r = {
                step: {
                    r: !1,
                    t: st
                },
                start: {
                    r: !0,
                    t: ct
                },
                connect: {
                    r: !0,
                    t: yt
                },
                direction: {
                    r: !0,
                    t: kt
                },
                snap: {
                    r: !1,
                    t: lt
                },
                animate: {
                    r: !1,
                    t: at
                },
                animationDuration: {
                    r: !1,
                    t: vt
                },
                range: {
                    r: !0,
                    t: ht
                },
                orientation: {
                    r: !1,
                    t: pt
                },
                margin: {
                    r: !1,
                    t: a
                },
                limit: {
                    r: !1,
                    t: wt
                },
                padding: {
                    r: !1,
                    t: bt
                },
                behaviour: {
                    r: !0,
                    t: dt
                },
                format: {
                    r: !1,
                    t: ni
                },
                tooltips: {
                    r: !1,
                    t: gt
                },
                cssPrefix: {
                    r: !1,
                    t: ti
                },
                cssClasses: {
                    r: !1,
                    t: ii
                },
                useRequestAnimationFrame: {
                    r: !1,
                    t: ri
                }
            },
            f = {
                connect: !1,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                cssPrefix: "noUi-",
                cssClasses: {
                    target: "target",
                    base: "base",
                    origin: "origin",
                    handle: "handle",
                    handleLower: "handle-lower",
                    handleUpper: "handle-upper",
                    horizontal: "horizontal",
                    vertical: "vertical",
                    background: "background",
                    connect: "connect",
                    ltr: "ltr",
                    rtl: "rtl",
                    draggable: "draggable",
                    drag: "state-drag",
                    tap: "state-tap",
                    active: "active",
                    tooltip: "tooltip",
                    pips: "pips",
                    pipsHorizontal: "pips-horizontal",
                    pipsVertical: "pips-vertical",
                    marker: "marker",
                    markerHorizontal: "marker-horizontal",
                    markerVertical: "marker-vertical",
                    markerNormal: "marker-normal",
                    markerLarge: "marker-large",
                    markerSub: "marker-sub",
                    value: "value",
                    valueHorizontal: "value-horizontal",
                    valueVertical: "value-vertical",
                    valueNormal: "value-normal",
                    valueLarge: "value-large",
                    valueSub: "value-sub"
                },
                useRequestAnimationFrame: !0
            },
            u;
        return Object.keys(r).forEach(function (u) {
            if (void 0 === t[u] && void 0 === f[u]) {
                if (r[u].r) throw new Error("noUiSlider (" + n + "): '" + u + "' is required.");
                return !0
            }
            r[u].t(i, void 0 === t[u] ? f[u] : t[u])
        }), i.pips = t.pips, u = [
            ["left", "top"],
            ["right", "bottom"]
        ], i.style = u[i.dir][i.ort], i.styleOposite = u[i.dir ? 0 : 1][i.ort], i
    }

    function ui(i, r, e) {
        function ri(n, i) {
            var e = u(n, r.cssClasses.origin),
                f = u(e, r.cssClasses.handle);
            return f.setAttribute("data-handle", i), 0 === i ? t(f, r.cssClasses.handleLower) : i === r.handles - 1 && t(f, r.cssClasses.handleUpper), e
        }

        function pt(n, t) {
            return !!t && u(n, r.cssClasses.connect)
        }

        function ui(n, t) {
            h = [];
            d = [];
            d.push(pt(t, n[0]));
            for (var i = 0; i < r.handles; i++) h.push(ri(t, i)), ct[i] = i, d.push(pt(t, n[i + 1]))
        }

        function fi(n) {
            t(n, r.cssClasses.target);
            0 === r.dir ? t(n, r.cssClasses.ltr) : t(n, r.cssClasses.rtl);
            0 === r.ort ? t(n, r.cssClasses.horizontal) : t(n, r.cssClasses.vertical);
            it = u(n, r.cssClasses.base)
        }

        function ei(n, t) {
            return !!r.tooltips[t] && u(n.firstChild, r.cssClasses.tooltip)
        }

        function oi() {
            var n = h.map(ei);
            ii("update", function (t, i, u) {
                if (n[i]) {
                    var f = t[i];
                    r.tooltips[i] !== !0 && (f = r.tooltips[i].to(u[i]));
                    n[i].innerHTML = f
                }
            })
        }

        function si(t, i, r) {
            if ("range" === t || "steps" === t) return s.xVal;
            if ("count" === t) {
                if (!i) throw new Error("noUiSlider (" + n + "): 'values' required for mode 'count'.");
                var u, f = 100 / (i - 1),
                    e = 0;
                for (i = [];
                    (u = e++ * f) <= 100;) i.push(u);
                t = "positions"
            }
            return "positions" === t ? i.map(function (n) {
                return s.fromStepping(r ? s.getStep(n) : n)
            }) : "values" === t ? r ? i.map(function (n) {
                return s.fromStepping(s.getStep(s.toStepping(n)))
            }) : i : void 0
        }

        function hi(n, t, i) {
            function c(n, t) {
                return (n + t).toFixed(7) / 1
            }
            var r = {},
                f = s.xVal[0],
                e = s.xVal[s.xVal.length - 1],
                o = !1,
                h = !1,
                u = 0;
            return i = p(i.slice().sort(function (n, t) {
                return n - t
            })), i[0] !== f && (i.unshift(f), o = !0), i[i.length - 1] !== e && (i.push(e), h = !0), i.forEach(function (f, e) {
                var a, l, v, y, w, g, b, nt, k, tt, d = f,
                    p = i[e + 1];
                if ("steps" === t && (a = s.xNumSteps[e]), a || (a = p - d), d !== !1 && void 0 !== p)
                    for (a = Math.max(a, 1e-7), l = d; l <= p; l = c(l, a)) {
                        for (y = s.toStepping(l), w = y - u, nt = w / n, k = Math.round(nt), tt = w / k, v = 1; v <= k; v += 1) g = u + v * tt, r[g.toFixed(5)] = ["x", 0];
                        b = i.indexOf(l) > -1 ? 1 : "steps" === t ? 2 : 0;
                        !e && o && (b = 0);
                        l === p && h || (r[y.toFixed(5)] = [l, b]);
                        u = y
                    }
            }), r
        }

        function ci(n, i, u) {
            function s(n, t) {
                var i = t === r.cssClasses.value,
                    u = i ? a : v,
                    f = i ? c : l;
                return t + " " + u[r.ort] + " " + f[n]
            }

            function o(n, t, i) {
                return 'class="' + s(i[1], t) + '" style="' + r.style + ": " + n + '%"'
            }

            function h(n, t) {
                t[1] = t[1] && i ? i(t[0], t[1]) : t[1];
                e += "<div " + o(n, r.cssClasses.marker, t) + "><\/div>";
                t[1] && (e += "<div " + o(n, r.cssClasses.value, t) + ">" + u.to(t[0]) + "<\/div>")
            }
            var f = document.createElement("div"),
                e = "",
                c = [r.cssClasses.valueNormal, r.cssClasses.valueLarge, r.cssClasses.valueSub],
                l = [r.cssClasses.markerNormal, r.cssClasses.markerLarge, r.cssClasses.markerSub],
                a = [r.cssClasses.valueHorizontal, r.cssClasses.valueVertical],
                v = [r.cssClasses.markerHorizontal, r.cssClasses.markerVertical];
            return t(f, r.cssClasses.pips), t(f, 0 === r.ort ? r.cssClasses.pipsHorizontal : r.cssClasses.pipsVertical), Object.keys(n).forEach(function (t) {
                h(t, n[t])
            }), f.innerHTML = e, f
        }

        function wt(n) {
            var t = n.mode,
                i = n.density || 1,
                r = n.filter || !1,
                u = n.values || !1,
                f = n.stepped || !1,
                e = si(t, u, f),
                o = hi(i, t, e),
                s = n.format || {
                    to: Math.round
                };
            return a.appendChild(ci(o, r, s))
        }

        function bt() {
            var n = it.getBoundingClientRect(),
                t = "offset" + ["Width", "Height"][r.ort];
            return 0 === r.ort ? n.width || it[t] : n.height || it[t]
        }

        function rt(n, t, i, u) {
            var f = function (t) {
                return !a.hasAttribute("disabled") && !g(a, r.cssClasses.tap) && !!(t = li(t, u.pageOffset)) && !(n === ut.start && void 0 !== t.buttons && t.buttons > 1) && (!u.hover || !t.buttons) && (t.calcPoint = t.points[r.ort], void i(t, u))
            },
                e = [];
            return n.split(" ").forEach(function (n) {
                t.addEventListener(n, f, !1);
                e.push([n, f])
            }), e
        }

        function li(n, t) {
            n.preventDefault();
            var i, r, e = 0 === n.type.indexOf("touch"),
                f = 0 === n.type.indexOf("mouse"),
                u = 0 === n.type.indexOf("pointer");
            if (0 === n.type.indexOf("MSPointer") && (u = !0), e) {
                if (n.touches.length > 1) return !1;
                i = n.changedTouches[0].pageX;
                r = n.changedTouches[0].pageY
            }
            return t = t || l(), (f || u) && (i = n.clientX + t.x, r = n.clientY + t.y), n.pageOffset = t, n.points = [i, r], n.cursor = f || u, n
        }

        function kt(n) {
            var i = n - b(it, r.ort),
                t = 100 * i / bt();
            return r.dir ? 100 - t : t
        }

        function ai(n) {
            var t = 100,
                i = !1;
            return h.forEach(function (r, u) {
                if (!r.hasAttribute("disabled")) {
                    var f = Math.abs(w[u] - n);
                    f < t && (i = u, t = f)
                }
            }), i
        }

        function dt(n, t, i, r) {
            var u = i.slice(),
                e = [!n, n],
                o = [n, !n],
                f;
            r = r.slice();
            n && r.reverse();
            r.length > 1 ? r.forEach(function (n, i) {
                var r = gt(u, n, u[n] + t, e[i], o[i]);
                r === !1 ? t = 0 : (t = r - u[n], u[n] = r)
            }) : e = o = [!0];
            f = !1;
            r.forEach(function (n, r) {
                f = ot(n, i[n] + t, e[r], o[r]) || f
            });
            f && r.forEach(function (n) {
                y("update", n);
                y("slide", n)
            })
        }

        function y(n, t, i) {
            Object.keys(tt).forEach(function (u) {
                var f = u.split(".")[0];
                n === f && tt[u].forEach(function (n) {
                    n.call(ht, et.map(r.format.to), t, et.slice(), i || !1, w.slice())
                })
            })
        }

        function vi(n, t) {
            "mouseout" === n.type && "HTML" === n.target.nodeName && null === n.relatedTarget && lt(n, t)
        }

        function yi(n, t) {
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && 0 === n.buttons && 0 !== t.buttonsProperty) return lt(n, t);
            var i = (r.dir ? -1 : 1) * (n.calcPoint - t.startCalcPoint),
                u = 100 * i / t.baseSize;
            dt(i > 0, u, t.locations, t.handleNumbers)
        }

        function lt(n, t) {
            ft && (f(ft, r.cssClasses.active), ft = !1);
            n.cursor && (document.body.style.cursor = "", document.body.removeEventListener("selectstart", document.body.noUiListener));
            document.documentElement.noUiListeners.forEach(function (n) {
                document.documentElement.removeEventListener(n[0], n[1])
            });
            f(a, r.cssClasses.drag);
            yt();
            t.handleNumbers.forEach(function (n) {
                y("set", n);
                y("change", n);
                y("end", n)
            })
        }

        function at(n, i) {
            var u, f;
            if (1 === i.handleNumbers.length) {
                if (u = h[i.handleNumbers[0]], u.hasAttribute("disabled")) return !1;
                ft = u.children[0];
                t(ft, r.cssClasses.active)
            }
            n.preventDefault();
            n.stopPropagation();
            var e = rt(ut.move, document.documentElement, yi, {
                startCalcPoint: n.calcPoint,
                baseSize: bt(),
                pageOffset: n.pageOffset,
                handleNumbers: i.handleNumbers,
                buttonsProperty: n.buttons,
                locations: w.slice()
            }),
                o = rt(ut.end, document.documentElement, lt, {
                    handleNumbers: i.handleNumbers
                }),
                s = rt("mouseout", document.documentElement, vi, {
                    handleNumbers: i.handleNumbers
                });
            (document.documentElement.noUiListeners = e.concat(o, s), n.cursor) && (document.body.style.cursor = getComputedStyle(n.target).cursor, h.length > 1 && t(a, r.cssClasses.drag), f = function () {
                return !1
            }, document.body.noUiListener = f, document.body.addEventListener("selectstart", f, !1));
            i.handleNumbers.forEach(function (n) {
                y("start", n)
            })
        }

        function pi(n) {
            n.stopPropagation();
            var i = kt(n.calcPoint),
                t = ai(i);
            return t !== !1 && (r.events.snap || c(a, r.cssClasses.tap, r.animationDuration), ot(t, i, !0, !0), yt(), y("slide", t, !0), y("set", t, !0), y("change", t, !0), y("update", t, !0), void (r.events.snap && at(n, {
                handleNumbers: [t]
            })))
        }

        function wi(n) {
            var t = kt(n.calcPoint),
                i = s.getStep(t),
                r = s.fromStepping(i);
            Object.keys(tt).forEach(function (n) {
                "hover" === n.split(".")[0] && tt[n].forEach(function (n) {
                    n.call(ht, r)
                })
            })
        }

        function bi(n) {
            n.fixed || h.forEach(function (n, t) {
                rt(ut.start, n.children[0], at, {
                    handleNumbers: [t]
                })
            });
            n.tap && rt(ut.start, it, pi, {});
            n.hover && rt(ut.move, it, wi, {
                hover: !0
            });
            n.drag && d.forEach(function (i, u) {
                if (i !== !1 && 0 !== u && u !== d.length - 1) {
                    var e = h[u - 1],
                        o = h[u],
                        f = [i];
                    t(i, r.cssClasses.draggable);
                    n.fixed && (f.push(e.children[0]), f.push(o.children[0]));
                    f.forEach(function (n) {
                        rt(ut.start, n, at, {
                            handles: [e, o],
                            handleNumbers: [u - 1, u]
                        })
                    })
                }
            })
        }

        function gt(n, t, i, u, f) {
            return h.length > 1 && (u && t > 0 && (i = Math.max(i, n[t - 1] + r.margin)), f && t < h.length - 1 && (i = Math.min(i, n[t + 1] - r.margin))), h.length > 1 && r.limit && (u && t > 0 && (i = Math.min(i, n[t - 1] + r.limit)), f && t < h.length - 1 && (i = Math.max(i, n[t + 1] - r.limit))), r.padding && (0 === t && (i = Math.max(i, r.padding)), t === h.length - 1 && (i = Math.min(i, 100 - r.padding))), i = s.getStep(i), i = k(i), i !== n[t] && i
        }

        function vt(n) {
            return n + "%"
        }

        function ki(n, t) {
            w[n] = t;
            et[n] = s.fromStepping(t);
            var i = function () {
                h[n].style[r.style] = vt(t);
                ni(n);
                ni(n + 1)
            };
            window.requestAnimationFrame && r.useRequestAnimationFrame ? window.requestAnimationFrame(i) : i()
        }

        function yt() {
            ct.forEach(function (n) {
                var t = w[n] > 50 ? -1 : 1,
                    i = 3 + (h.length + t * n);
                h[n].childNodes[0].style.zIndex = i
            })
        }

        function ot(n, t, i, r) {
            return t = gt(w, n, t, i, r), t !== !1 && (ki(n, t), !0)
        }

        function ni(n) {
            if (d[n]) {
                var t = 0,
                    i = 100;
                0 !== n && (t = w[n - 1]);
                n !== d.length - 1 && (i = w[n]);
                d[n].style[r.style] = vt(t);
                d[n].style[r.styleOposite] = vt(100 - i)
            }
        }

        function di(n, t) {
            null !== n && n !== !1 && ("number" == typeof n && (n = String(n)), n = r.format.from(n), n === !1 || isNaN(n) || ot(t, s.toStepping(n), !1, !1))
        }

        function st(n, t) {
            var i = o(n),
                u = void 0 === w[0];
            t = void 0 === t || !!t;
            i.forEach(di);
            r.animate && !u && c(a, r.cssClasses.tap, r.animationDuration);
            ct.forEach(function (n) {
                ot(n, w[n], !0, !1)
            });
            yt();
            ct.forEach(function (n) {
                y("update", n);
                null !== i[n] && t && y("set", n)
            })
        }

        function gi(n) {
            st(r.start, n)
        }

        function ti() {
            var n = et.map(r.format.to);
            return 1 === n.length ? n[0] : n
        }

        function nr() {
            for (var n in r.cssClasses) r.cssClasses.hasOwnProperty(n) && f(a, r.cssClasses[n]);
            for (; a.firstChild;) a.removeChild(a.firstChild);
            delete a.noUiSlider
        }

        function tr() {
            return w.map(function (n, t) {
                var r = s.getNearbySteps(n),
                    f = et[t],
                    i = r.thisStep.step,
                    u = null,
                    e;
                return i !== !1 && f + i > r.stepAfter.startValue && (i = r.stepAfter.startValue - f), u = f > r.thisStep.startValue ? r.thisStep.step : r.stepBefore.step !== !1 && f - r.stepBefore.highestStep, 100 === n ? i = null : 0 === n && (u = null), e = s.countStepDecimals(), null !== i && i !== !1 && (i = Number(i.toFixed(e))), null !== u && u !== !1 && (u = Number(u.toFixed(e))), [u, i]
            })
        }

        function ii(n, t) {
            tt[n] = tt[n] || [];
            tt[n].push(t);
            "update" === n.split(".")[0] && h.forEach(function (n, t) {
                y("update", t)
            })
        }

        function ir(n) {
            var t = n && n.split(".")[0],
                i = t && n.substring(t.length);
            Object.keys(tt).forEach(function (n) {
                var r = n.split(".")[0],
                    u = n.substring(r.length);
                t && t !== r || i && i !== u || delete tt[n]
            })
        }

        function rr(n, t) {
            var f = ti(),
                u = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format"],
                i;
            u.forEach(function (t) {
                void 0 !== n[t] && (e[t] = n[t])
            });
            i = v(e);
            u.forEach(function (t) {
                void 0 !== n[t] && (r[t] = i[t])
            });
            i.spectrum.direction = s.direction;
            s = i.spectrum;
            r.margin = i.margin;
            r.limit = i.limit;
            r.padding = i.padding;
            w = [];
            st(n.start || f, t)
        }
        var it, h, d, ht, ut = nt(),
            a = i,
            w = [],
            ct = [],
            ft = !1,
            s = r.spectrum,
            et = [],
            tt = {};
        if (a.noUiSlider) throw new Error("noUiSlider (" + n + "): Slider was already initialized.");
        return fi(a), ui(r.connect, it), ht = {
            destroy: nr,
            steps: tr,
            on: ii,
            off: ir,
            get: ti,
            set: st,
            reset: gi,
            __moveHandles: function (n, t, i) {
                dt(n, t, w, i)
            },
            options: e,
            updateOptions: rr,
            target: a,
            pips: wt
        }, bi(r.events), st(r.start), r.pips && wt(r.pips), r.tooltips && oi(), ht
    }

    function fi(t, i) {
        if (!t.nodeName) throw new Error("noUiSlider (" + n + "): create requires a single element.");
        var u = v(i, t),
            r = ui(t, u, i);
        return t.noUiSlider = r, r
    }
    var n = "9.2.0",
        y;
    return i.prototype.getMargin = function (t) {
        var i = this.xNumSteps[0];
        if (i && t / i % 1 != 0) throw new Error("noUiSlider (" + n + "): 'limit', 'margin' and 'padding' must be divisible by step.");
        return 2 === this.xPct.length && h(this.xVal, t)
    }, i.prototype.toStepping = function (n) {
        return rt(this.xVal, this.xPct, n)
    }, i.prototype.fromStepping = function (n) {
        return ut(this.xVal, this.xPct, n)
    }, i.prototype.getStep = function (n) {
        return ft(this.xPct, this.xSteps, this.snap, n)
    }, i.prototype.getNearbySteps = function (n) {
        var t = e(n, this.xPct);
        return {
            stepBefore: {
                startValue: this.xVal[t - 2],
                step: this.xNumSteps[t - 2],
                highestStep: this.xHighestCompleteStep[t - 2]
            },
            thisStep: {
                startValue: this.xVal[t - 1],
                step: this.xNumSteps[t - 1],
                highestStep: this.xHighestCompleteStep[t - 1]
            },
            stepAfter: {
                startValue: this.xVal[+t],
                step: this.xNumSteps[+t],
                highestStep: this.xHighestCompleteStep[+t]
            }
        }
    }, i.prototype.countStepDecimals = function () {
        var n = this.xNumSteps.map(d);
        return Math.max.apply(null, n)
    }, i.prototype.convert = function (n) {
        return this.getStep(this.toStepping(n))
    }, y = {
        to: function (n) {
            return void 0 !== n && n.toFixed(2)
        },
        from: Number
    }, {
            version: n,
            create: fi
        }
}), ! function (n, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define("Survey", ["jquery"], t) : "object" == typeof exports ? exports.Survey = t(require("jquery")) : n.Survey = t(n.jQuery)
}(this, function (n) {
    return function (n) {
        function t(r) {
            if (i[r]) return i[r].exports;
            var u = i[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return n[r].call(u.exports, u, u.exports, t), u.l = !0, u.exports
        }
        var i = {};
        return t.m = n, t.c = i, t.i = function (n) {
            return n
        }, t.d = function (n, i, r) {
            t.o(n, i) || Object.defineProperty(n, i, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, t.n = function (n) {
            var i = n && n.__esModule ? function () {
                return n.default
            } : function () {
                return n
            };
            return t.d(i, "a", i), i
        }, t.o = function (n, t) {
            return Object.prototype.hasOwnProperty.call(n, t)
        }, t.p = "", t(t.s = 85)
    }([function (n, t, i) {
        "use strict";

        function r(n, t) {
            function r() {
                this.constructor = n
            }
            for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
            n.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
        }
        i.d(t, "a", function () {
            return u
        });
        t.b = r;
        i.d(t, "c", function () {
            return f
        });
        var u = Object.assign || function (n) {
            for (var t, r, i = 1, u = arguments.length; i < u; i++) {
                t = arguments[i];
                for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
            }
            return n
        },
            f = function (n, t, i, r) {
                var f, e = arguments.length,
                    u = e < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r,
                    o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) u = Reflect.decorate(n, t, i, r);
                else
                    for (o = n.length - 1; o >= 0; o--)(f = n[o]) && (u = (e < 3 ? f(u) : e > 3 ? f(t, i, u) : f(t, i)) || u);
                return e > 3 && u && Object.defineProperty(t, i, u), u
            }
    }, function (n, t, i) {
        "use strict";
        i.d(t, "a", function () {
            return u
        });
        i.d(t, "b", function () {
            return r
        });
        var u = {
            currentLocale: "",
            locales: {},
            getString: function (n) {
                var t = this.currentLocale ? this.locales[this.currentLocale] : r;
                return t && t[n] || (t = r), t[n]
            },
            getLocales: function () {
                var n = [],
                    t;
                n.push("");
                for (t in this.locales) n.push(t);
                return n.sort(), n
            }
        },
            r = {
                pagePrevText: "Previous",
                pageNextText: "Next",
                completeText: "Complete",
                otherItemText: "Other (describe)",
                progressText: "Page {0} of {1}",
                emptySurvey: "There is no visible page or question in the survey.",
                completingSurvey: "Thank you for completing the survey!",
                loadingSurvey: "Survey is loading...",
                optionsCaption: "Choose...",
                requiredError: "Please answer the question.",
                requiredInAllRowsError: "Please answer questions in all rows.",
                numericError: "The value should be numeric.",
                textMinLength: "Please enter at least {0} symbols.",
                textMaxLength: "Please enter less than {0} symbols.",
                textMinMaxLength: "Please enter more than {0} and less than {1} symbols.",
                minRowCountError: "Please fill in at least {0} rows.",
                minSelectError: "Please select at least {0} variants.",
                maxSelectError: "Please select no more than {0} variants.",
                numericMinMax: "The '{0}' should be equal or more than {1} and equal or less than {2}",
                numericMin: "The '{0}' should be equal or more than {1}",
                numericMax: "The '{0}' should be equal or less than {1}",
                invalidEmail: "Please enter a valid e-mail address.",
                urlRequestError: "The request returned error '{0}'. {1}",
                urlGetChoicesError: "The request returned empty data or the 'path' property is incorrect",
                exceedMaxSize: "The file size should not exceed {0}.",
                otherRequiredError: "Please enter the other value.",
                uploadingFile: "Your file is uploading. Please wait several seconds and try again.",
                addRow: "Add row",
                removeRow: "Remove",
                choices_firstItem: "first item",
                choices_secondItem: "second item",
                choices_thirdItem: "third item",
                matrix_column: "Column",
                matrix_row: "Row"
            };
        u.locales.en = r;
        String.prototype.format || (String.prototype.format = function () {
            var n = arguments;
            return this.replace(/{(\d+)}/g, function (t, i) {
                return void 0 !== n[i] ? n[i] : t
            })
        })
    }, function (n, t, i) {
        "use strict";
        (function (n) {
            function kt(n) {
                return n && n.__esModule ? n : {
                    "default": n
                }
            }

            function dt(n, t) {
                if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
            }

            function gt() {
                return null
            }

            function ni(n) {
                var t = n.nodeName,
                    i = n.attributes;
                n.attributes = {};
                t.defaultProps && f(n.attributes, t.defaultProps);
                i && f(n.attributes, i)
            }

            function ti(n, t) {
                var r = void 0,
                    u = void 0,
                    i = void 0;
                if (t) {
                    for (i in t)
                        if (r = pt.test(i)) break;
                    if (r) {
                        u = n.attributes = {};
                        for (i in t) t.hasOwnProperty(i) && (u[pt.test(i) ? i.replace(/([A-Z0-9])/, "-$1").toLowerCase() : i] = t[i])
                    }
                }
            }

            function p(n, t, i) {
                var u = t && t._preactCompatRendered,
                    e, f;
                for (u && u.parentNode !== t && (u = null), u || (u = t.children[0]), e = t.childNodes.length; e--;) t.childNodes[e] !== u && t.removeChild(t.childNodes[e]);
                return f = r.render(n, t, u), t && (t._preactCompatRendered = f), "function" == typeof i && i(), f && f._component || f.base
            }

            function ft(n, t, i, u) {
                var e = r.h(ki, {
                    context: n.context
                }, t),
                    f = p(e, i);
                return u && u(f), f
            }

            function et(n) {
                var t = n._preactCompatRendered;
                return !(!t || t.parentNode !== n) && (r.render(r.h(gt), n, t), !0)
            }

            function w(n) {
                return h.bind(null, n)
            }

            function ot(n, t) {
                for (var i, r = t || 0; r < n.length; r++) i = n[r], Array.isArray(i) ? ot(i) : i && "object" === (void 0 === i ? "undefined" : g(i)) && !c(i) && (i.props && i.type || i.attributes && i.nodeName || i.children) && (n[r] = h(i.type || i.nodeName, i.props || i.attributes, i.children))
            }

            function ii(n) {
                return "function" == typeof n && !(n.prototype && n.prototype.render)
            }

            function ri(n) {
                return k({
                    displayName: n.displayName || n.name,
                    render: function () {
                        return n(this.props, this.context)
                    }
                })
            }

            function ui(n) {
                var t = n[y];
                return t ? !0 === t ? n : t : (t = ri(n), Object.defineProperty(t, y, {
                    configurable: !0,
                    value: !0
                }), t.displayName = n.displayName, t.propTypes = n.propTypes, t.defaultProps = n.defaultProps, Object.defineProperty(n, y, {
                    configurable: !0,
                    value: t
                }), t)
            }

            function h() {
                for (var i = arguments.length, t = Array(i), n = 0; n < i; n++) t[n] = arguments[n];
                return ot(t, 2), b(r.h.apply(void 0, t))
            }

            function b(n) {
                n.preactCompatNormalized = !0;
                oi(n);
                ii(n.nodeName) && (n.nodeName = ui(n.nodeName));
                var t = n.attributes.ref,
                    i = t && (void 0 === t ? "undefined" : g(t));
                return !s || "string" !== i && "number" !== i || (n.attributes.ref = fi(t, s)), ei(n), n
            }

            function st(n, t) {
                if (!c(n)) return n;
                for (var u = n.attributes || n.props, o = r.h(n.nodeName || n.type, u, n.children || u && u.children), f = arguments.length, e = Array(f > 2 ? f - 2 : 0), i = 2; i < f; i++) e[i - 2] = arguments[i];
                return b(r.cloneElement.apply(void 0, [o, t].concat(e)))
            }

            function c(n) {
                return n && (n instanceof e || n.$$typeof === yt)
            }

            function fi(n, t) {
                return t._refProxies[n] || (t._refProxies[n] = function (i) {
                    t && t.refs && (t.refs[n] = i, null === i && (delete t._refProxies[n], t = null))
                })
            }

            function ei(n) {
                var u = n.nodeName,
                    t = n.attributes,
                    i, f, r;
                if (t && "string" == typeof u) {
                    i = {};
                    for (f in t) i[f.toLowerCase()] = f;
                    (i.ondoubleclick && (t.ondblclick = t[i.ondoubleclick], delete t[i.ondoubleclick]), i.onchange && ("textarea" === u || "input" === u.toLowerCase() && !/^fil|che|rad/i.test(t.type))) && (r = i.oninput || "oninput", t[r] || (t[r] = a([t[r], t[i.onchange]]), delete t[i.onchange]))
                }
            }

            function oi(n) {
                var t = n.attributes,
                    i;
                t && (i = t.className || t.class, i && (t.className = i))
            }

            function f(n, t) {
                for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
                return n
            }

            function ht(n, t) {
                var r, i;
                for (r in n)
                    if (!(r in t)) return !0;
                for (i in t)
                    if (n[i] !== t[i]) return !0;
                return !1
            }

            function ct(n) {
                return n && n.base || n
            }

            function l() { }

            function k(n) {
                function t(n, t) {
                    ci(this);
                    u.call(this, n, t, wt);
                    lt.call(this, n, t)
                }
                return n = f({
                    constructor: t
                }, n), n.mixins && hi(n, si(n.mixins)), n.statics && f(t, n.statics), n.propTypes && (t.propTypes = n.propTypes), n.defaultProps && (t.defaultProps = n.defaultProps), n.getDefaultProps && (t.defaultProps = n.getDefaultProps()), l.prototype = u.prototype, t.prototype = f(new l, n), t.displayName = n.displayName || "Component", t
            }

            function si(n) {
                for (var i, t, r = {}, u = 0; u < n.length; u++) {
                    i = n[u];
                    for (t in i) i.hasOwnProperty(t) && "function" == typeof i[t] && (r[t] || (r[t] = [])).push(i[t])
                }
                return r
            }

            function hi(n, t) {
                for (var i in t) t.hasOwnProperty(i) && (n[i] = a(t[i].concat(n[i] || bt), "getDefaultProps" === i || "getInitialState" === i || "getChildContext" === i))
            }

            function ci(n) {
                var t, i;
                for (t in n) i = n[t], "function" != typeof i || i.__bound || wi.hasOwnProperty(t) || ((n[t] = i.bind(n)).__bound = !0)
            }

            function li(n, t, i) {
                if ("string" == typeof t && (t = n.constructor.prototype[t]), "function" == typeof t) return t.apply(n, i)
            }

            function a(n, t) {
                return function () {
                    for (var i, f, r = void 0, u = 0; u < n.length; u++)
                        if (i = li(this, n[u], arguments), t && null != i) {
                            r || (r = {});
                            for (f in i) i.hasOwnProperty(f) && (r[f] = i[f])
                        } else void 0 !== i && (r = i);
                    return r
                }
            }

            function lt(n, t) {
                d.call(this, n, t);
                this.componentWillReceiveProps = a([d, this.componentWillReceiveProps || "componentWillReceiveProps"]);
                this.render = a([d, ai, this.render || "render", vi])
            }

            function d(n) {
                var i, f, t, r, e, u;
                if (n && (i = n.children, (i && Array.isArray(i) && 1 === i.length && (n.children = i[0], n.children && "object" === g(n.children) && (n.children.length = 1, n.children[0] = n.children)), bi) && (f = "function" == typeof this ? this : this.constructor, t = this.propTypes || f.propTypes, t)))
                    for (r in t) t.hasOwnProperty(r) && "function" == typeof t[r] && (e = this.displayName || f.name, u = t[r](n, r, e, "prop"), u && console.error(new Error(u.message || u)))
            }

            function ai() {
                s = this
            }

            function vi() {
                s === this && (s = null)
            }

            function u(n, t, i) {
                r.Component.call(this, n, t);
                this.state = this.getInitialState ? this.getInitialState() : {};
                this.refs = {};
                this._refProxies = {};
                i !== wt && lt.call(this, n, t)
            }

            function v(n, t) {
                u.call(this, n, t)
            }
            var tt, it;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.unstable_renderSubtreeIntoContainer = t.PureComponent = t.Component = t.unmountComponentAtNode = t.findDOMNode = t.isValidElement = t.cloneElement = t.createElement = t.createFactory = t.createClass = t.render = t.Children = t.PropTypes = t.DOM = t.version = void 0;
            var g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            },
                yi = function () {
                    function n(n, t) {
                        for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
                    }
                    return function (t, i, r) {
                        return i && n(t.prototype, i), r && n(t, r), t
                    }
                }(),
                pi = i(41),
                at = kt(pi),
                r = i(39),
                vt = "15.1.0",
                nt = "a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(" "),
                yt = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
                y = "undefined" != typeof Symbol ? Symbol.for("__preactCompatWrapper") : "__preactCompatWrapper",
                wi = {
                    constructor: 1,
                    render: 1,
                    shouldComponentUpdate: 1,
                    componentWillReceiveProps: 1,
                    componentWillUpdate: 1,
                    componentDidUpdate: 1,
                    componentWillMount: 1,
                    componentDidMount: 1,
                    componentWillUnmount: 1,
                    componentDidUnmount: 1
                },
                pt = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vert|word|writing|x)[A-Z]/,
                wt = {},
                bi = void 0 === n || !n.env || "production" !== n.env.NODE_ENV,
                e = r.h("a", null).constructor;
            e.prototype.$$typeof = yt;
            e.prototype.preactCompatUpgraded = !1;
            e.prototype.preactCompatNormalized = !1;
            Object.defineProperty(e.prototype, "type", {
                get: function () {
                    return this.nodeName
                },
                set: function (n) {
                    this.nodeName = n
                },
                configurable: !0
            });
            Object.defineProperty(e.prototype, "props", {
                get: function () {
                    return this.attributes
                },
                set: function (n) {
                    this.attributes = n
                },
                configurable: !0
            });
            tt = r.options.event;
            r.options.event = function (n) {
                return tt && (n = tt(n)), n.persist = Object, n.nativeEvent = n, n
            };
            it = r.options.vnode;
            r.options.vnode = function (n) {
                if (!n.preactCompatUpgraded) {
                    n.preactCompatUpgraded = !0;
                    var i = n.nodeName,
                        t = n.attributes;
                    t || (t = n.attributes = {});
                    "function" == typeof i ? (!0 === i[y] || i.prototype && "isReactComponent" in i.prototype) && (n.children && !n.children.length && (n.children = void 0), n.children && (t.children = n.children), n.preactCompatNormalized || b(n), ni(n)) : (n.children && !n.children.length && (n.children = void 0), n.children && (t.children = n.children), t.defaultValue && (t.value || 0 === t.value || (t.value = t.defaultValue), delete t.defaultValue), ti(n, t))
                }
                it && it(n)
            };
            for (var ki = function () {
                function n() {
                    dt(this, n)
                }
                return yi(n, [{
                    key: "getChildContext",
                    value: function () {
                        return this.props.context
                    }
                }, {
                    key: "render",
                    value: function (n) {
                        return n.children[0]
                    }
                }]), n
            }(), bt = [], o = {
                map: function (n, t, i) {
                    return null == n ? null : (n = o.toArray(n), i && i !== n && (t = t.bind(i)), n.map(t))
                },
                forEach: function (n, t, i) {
                    if (null == n) return null;
                    n = o.toArray(n);
                    i && i !== n && (t = t.bind(i));
                    n.forEach(t)
                },
                count: function (n) {
                    return n && n.length || 0
                },
                only: function (n) {
                    if (n = o.toArray(n), 1 !== n.length) throw new Error("Children.only() expects only one child.");
                    return n[0]
                },
                toArray: function (n) {
                    return Array.isArray && Array.isArray(n) ? n : bt.concat(n)
                }
            }, s = void 0, rt = {}, ut = nt.length; ut--;) rt[nt[ut]] = w(nt[ut]);
            f(u.prototype = new r.Component, {
                constructor: u,
                isReactComponent: {},
                replaceState: function (n, t) {
                    this.setState(n, t);
                    for (var i in this.state) i in n || delete this.state[i]
                },
                getDOMNode: function () {
                    return this.base
                },
                isMounted: function () {
                    return !!this.base
                }
            });
            l.prototype = u.prototype;
            v.prototype = new l;
            v.prototype.shouldComponentUpdate = function (n, t) {
                return ht(this.props, n) || ht(this.state, t)
            };
            t.version = vt;
            t.DOM = rt;
            t.PropTypes = at.default;
            t.Children = o;
            t.render = p;
            t.createClass = k;
            t.createFactory = w;
            t.createElement = h;
            t.cloneElement = st;
            t.isValidElement = c;
            t.findDOMNode = ct;
            t.unmountComponentAtNode = et;
            t.Component = u;
            t.PureComponent = v;
            t.unstable_renderSubtreeIntoContainer = ft;
            t.default = {
                version: vt,
                DOM: rt,
                PropTypes: at.default,
                Children: o,
                render: p,
                createClass: k,
                createFactory: w,
                createElement: h,
                cloneElement: st,
                isValidElement: c,
                findDOMNode: ct,
                unmountComponentAtNode: et,
                Component: u,
                PureComponent: v,
                unstable_renderSubtreeIntoContainer: ft
            }
        }).call(t, i(40))
    }, function (n, t, i) {
        "use strict";
        var u = i(0),
            o, f;
        i.d(t, "h", function () {
            return o
        });
        i.d(t, "e", function () {
            return f
        });
        i.d(t, "d", function () {
            return h
        });
        i.d(t, "b", function () {
            return e
        });
        i.d(t, "j", function () {
            return c
        });
        i.d(t, "g", function () {
            return s
        });
        i.d(t, "f", function () {
            return l
        });
        i.d(t, "c", function () {
            return a
        });
        i.d(t, "i", function () {
            return v
        });
        i.d(t, "a", function () {
            return r
        });
        o = function () {
            function n(n) {
                this.name = n;
                this.typeValue = null;
                this.choicesValue = null;
                this.choicesfunc = null;
                this.className = null;
                this.alternativeName = null;
                this.classNamePart = null;
                this.baseClassName = null;
                this.defaultValue = null;
                this.readOnly = !1;
                this.visible = !0;
                this.isLocalizable = !1;
                this.serializationProperty = null;
                this.onGetValue = null
            }
            return Object.defineProperty(n.prototype, "type", {
                get: function () {
                    return this.typeValue ? this.typeValue : "string"
                },
                set: function (n) {
                    this.typeValue = n
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "hasToUseGetValue", {
                get: function () {
                    return this.onGetValue || this.serializationProperty
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.isDefaultValue = function (n) {
                return this.defaultValue ? this.defaultValue == n : !n
            }, n.prototype.getValue = function (n) {
                return this.onGetValue ? this.onGetValue(n) : this.serializationProperty ? n[this.serializationProperty].getJson() : n[this.name]
            }, n.prototype.getPropertyValue = function (n) {
                return this.isLocalizable ? n[this.serializationProperty].text : this.getValue(n)
            }, Object.defineProperty(n.prototype, "hasToUseSetValue", {
                get: function () {
                    return this.onSetValue || this.serializationProperty
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.setValue = function (n, t, i) {
                this.onSetValue ? this.onSetValue(n, t, i) : this.serializationProperty ? n[this.serializationProperty].setJson(t) : n[this.name] = t
            }, n.prototype.getObjType = function (n) {
                return this.classNamePart ? n.replace(this.classNamePart, "") : n
            }, n.prototype.getClassName = function (n) {
                return this.classNamePart && n.indexOf(this.classNamePart) < 0 ? n + this.classNamePart : n
            }, Object.defineProperty(n.prototype, "choices", {
                get: function () {
                    return null != this.choicesValue ? this.choicesValue : null != this.choicesfunc ? this.choicesfunc() : null
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.setChoices = function (n, t) {
                this.choicesValue = n;
                this.choicesfunc = t
            }, n
        }();
        f = function () {
            function n(n, t, i, r) {
                var u, f;
                for (void 0 === i && (i = null), void 0 === r && (r = null), this.name = n, this.creator = i, this.parentName = r, this.properties = null, this.requiredProperties = null, this.properties = [], u = 0; u < t.length; u++) f = this.createProperty(t[u]), f && this.properties.push(f)
            }
            return n.prototype.find = function (n) {
                for (var t = 0; t < this.properties.length; t++)
                    if (this.properties[t].name == n) return this.properties[t];
                return null
            }, n.prototype.createProperty = function (t) {
                var r = "string" == typeof t ? t : t.name,
                    u, f, i, e, s;
                if (r) return u = null, f = r.indexOf(n.typeSymbol), f > -1 && (u = r.substring(f + 1), r = r.substring(0, f)), r = this.getPropertyName(r), i = new o(r), (u && (i.type = u), "object" == typeof t) && ((t.type && (i.type = t.type), t.default && (i.defaultValue = t.default), !1 === t.visible && (i.visible = !1), t.isRequired && this.makePropertyRequired(i.name), t.choices) && (e = "function" == typeof t.choices ? t.choices : null, s = "function" != typeof t.choices ? t.choices : null, i.setChoices(s, e)), (t.onGetValue && (i.onGetValue = t.onGetValue), t.onSetValue && (i.onSetValue = t.onSetValue), t.serializationProperty) && (i.serializationProperty = t.serializationProperty, i.serializationProperty && 0 == i.serializationProperty.indexOf("loc") && (i.isLocalizable = !0)), t.isLocalizable && (i.isLocalizable = t.isLocalizable), t.className && (i.className = t.className), t.baseClassName && (i.baseClassName = t.baseClassName), t.classNamePart && (i.classNamePart = t.classNamePart), t.alternativeName && (i.alternativeName = t.alternativeName)), i
            }, n.prototype.getPropertyName = function (t) {
                return 0 == t.length || t[0] != n.requiredSymbol ? t : (t = t.slice(1), this.makePropertyRequired(t), t)
            }, n.prototype.makePropertyRequired = function (n) {
                this.requiredProperties || (this.requiredProperties = []);
                this.requiredProperties.push(n)
            }, n
        }();
        f.requiredSymbol = "!";
        f.typeSymbol = ":";
        var h = function () {
            function n() {
                this.classes = {};
                this.childrenClasses = {};
                this.classProperties = {};
                this.classRequiredProperties = {}
            }
            return n.prototype.addClass = function (n, t, i, r) {
                void 0 === i && (i = null);
                void 0 === r && (r = null);
                var u = new f(n, t, i, r);
                return (this.classes[n] = u, r) && (this.childrenClasses[r] || (this.childrenClasses[r] = []), this.childrenClasses[r].push(u)), u
            }, n.prototype.overrideClassCreatore = function (n, t) {
                var i = this.findClass(n);
                i && (i.creator = t)
            }, n.prototype.getProperties = function (n) {
                var t = this.classProperties[n];
                return t || (t = [], this.fillProperties(n, t), this.classProperties[n] = t), t
            }, n.prototype.findProperty = function (n, t) {
                for (var r = this.getProperties(n), i = 0; i < r.length; i++)
                    if (r[i].name == t) return r[i];
                return null
            }, n.prototype.createClass = function (n) {
                var t = this.findClass(n);
                return t ? t.creator() : null
            }, n.prototype.getChildrenClasses = function (n, t) {
                void 0 === t && (t = !1);
                var i = [];
                return this.fillChildrenClasses(n, t, i), i
            }, n.prototype.getRequiredProperties = function (n) {
                var t = this.classRequiredProperties[n];
                return t || (t = [], this.fillRequiredProperties(n, t), this.classRequiredProperties[n] = t), t
            }, n.prototype.addProperty = function (n, t) {
                var i = this.findClass(n),
                    r;
                i && (r = i.createProperty(t), r && (this.addPropertyToClass(i, r), this.emptyClassPropertiesHash(i)))
            }, n.prototype.removeProperty = function (n, t) {
                var i = this.findClass(n),
                    r;
                if (!i) return !1;
                r = i.find(t);
                r && (this.removePropertyFromClass(i, r), this.emptyClassPropertiesHash(i))
            }, n.prototype.addPropertyToClass = function (n, t) {
                null == n.find(t.name) && n.properties.push(t)
            }, n.prototype.removePropertyFromClass = function (n, t) {
                var i = n.properties.indexOf(t);
                i < 0 || (n.properties.splice(i, 1), n.requiredProperties && (i = n.requiredProperties.indexOf(t.name)) >= 0 && n.requiredProperties.splice(i, 1))
            }, n.prototype.emptyClassPropertiesHash = function (n) {
                this.classProperties[n.name] = null;
                for (var i = this.getChildrenClasses(n.name), t = 0; t < i.length; t++) this.classProperties[i[t].name] = null
            }, n.prototype.fillChildrenClasses = function (n, t, i) {
                var u = this.childrenClasses[n],
                    r;
                if (u)
                    for (r = 0; r < u.length; r++) t && !u[r].creator || i.push(u[r]), this.fillChildrenClasses(u[r].name, t, i)
            }, n.prototype.findClass = function (n) {
                return this.classes[n]
            }, n.prototype.fillProperties = function (n, t) {
                var i = this.findClass(n),
                    r;
                if (i)
                    for (i.parentName && this.fillProperties(i.parentName, t), r = 0; r < i.properties.length; r++) this.addPropertyCore(i.properties[r], t, t.length)
            }, n.prototype.addPropertyCore = function (n, t, i) {
                for (var u = -1, r = 0; r < i; r++)
                    if (t[r].name == n.name) {
                        u = r;
                        break
                    }
                u < 0 ? t.push(n) : t[u] = n
            }, n.prototype.fillRequiredProperties = function (n, t) {
                var i = this.findClass(n);
                i && (i.requiredProperties && Array.prototype.push.apply(t, i.requiredProperties), i.parentName && this.fillRequiredProperties(i.parentName, t))
            }, n
        }(),
            e = function () {
                function n(n, t) {
                    this.type = n;
                    this.message = t;
                    this.description = "";
                    this.at = -1
                }
                return n.prototype.getFullDescription = function () {
                    return this.message + (this.description ? "\n" + this.description : "")
                }, n
            }(),
            c = function (n) {
                function t(t, i) {
                    var u = n.call(this, "unknownproperty", "The property '" + t + "' in class '" + i + "' is unknown.") || this,
                        e, f;
                    if (u.propertyName = t, u.className = i, e = r.metaData.getProperties(i), e) {
                        for (u.description = "The list of available properties are: ", f = 0; f < e.length; f++) f > 0 && (u.description += ", "), u.description += e[f].name;
                        u.description += "."
                    }
                    return u
                }
                return u.b(t, n), t
            }(e),
            s = function (n) {
                function t(t, i, u) {
                    var f = n.call(this, i, u) || this,
                        o, e;
                    for (f.baseClassName = t, f.type = i, f.message = u, f.description = "The following types are available: ", o = r.metaData.getChildrenClasses(t, !0), e = 0; e < o.length; e++) e > 0 && (f.description += ", "), f.description += "'" + o[e].name + "'";
                    return f.description += ".", f
                }
                return u.b(t, n), t
            }(e),
            l = function (n) {
                function t(t, i) {
                    var r = n.call(this, i, "missingtypeproperty", "The property type is missing in the object. Please take a look at property: '" + t + "'.") || this;
                    return r.propertyName = t, r.baseClassName = i, r
                }
                return u.b(t, n), t
            }(s),
            a = function (n) {
                function t(t, i) {
                    var r = n.call(this, i, "incorrecttypeproperty", "The property type is incorrect in the object. Please take a look at property: '" + t + "'.") || this;
                    return r.propertyName = t, r.baseClassName = i, r
                }
                return u.b(t, n), t
            }(s),
            v = function (n) {
                function t(t, i) {
                    var r = n.call(this, "requiredproperty", "The property '" + t + "' is required in class '" + i + "'.") || this;
                    return r.propertyName = t, r.className = i, r
                }
                return u.b(t, n), t
            }(e),
            r = function () {
                function n() {
                    this.errors = []
                }
                return Object.defineProperty(n, "metaData", {
                    get: function () {
                        return n.metaDataValue
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.toJsonObject = function (n) {
                    return this.toJsonObjectCore(n, null)
                }, n.prototype.toObject = function (t, i) {
                    var u, r, f;
                    if (t && (u = null, i.getType && (u = n.metaData.getProperties(i.getType())), u))
                        for (r in t) r != n.typePropertyName && (r != n.positionPropertyName ? (f = this.findProperty(u, r), f ? this.valueToObj(t[r], i, r, f) : this.addNewError(new c(r.toString(), i.getType()), t)) : i[r] = t[r])
                }, n.prototype.toJsonObjectCore = function (t, i) {
                    var r, f, u;
                    if (!t.getType) return t;
                    for (r = {}, null == i || i.className || (r[n.typePropertyName] = i.getObjType(t.getType())), f = n.metaData.getProperties(t.getType()), u = 0; u < f.length; u++) this.valueToJson(t, r, f[u]);
                    return r
                }, n.prototype.valueToJson = function (n, t, i) {
                    var r = i.getValue(n),
                        u, f;
                    if (void 0 !== r && null !== r && !i.isDefaultValue(r)) {
                        if (this.isValueArray(r)) {
                            for (u = [], f = 0; f < r.length; f++) u.push(this.toJsonObjectCore(r[f], i));
                            r = u.length > 0 ? u : null
                        } else r = this.toJsonObjectCore(r, i);
                        i.isDefaultValue(r) || (t[i.name] = r)
                    }
                }, n.prototype.valueToObj = function (n, t, i, r) {
                    if (null != n) {
                        if (null != r && r.hasToUseSetValue) return void r.setValue(t, n, this);
                        if (this.isValueArray(n)) return void this.valueToArray(n, t, r.name, r);
                        var u = this.createNewObj(n, r);
                        u.newObj && (this.toObject(n, u.newObj), n = u.newObj);
                        u.error || (t[r.name] = n)
                    }
                }, n.prototype.isValueArray = function (n) {
                    return n && Array.isArray(n)
                }, n.prototype.createNewObj = function (t, i) {
                    var u = {
                        newObj: null,
                        error: null
                    },
                        r = t[n.typePropertyName];
                    return !r && null != i && i.className && (r = i.className), r = i.getClassName(r), u.newObj = r ? n.metaData.createClass(r) : null, u.error = this.checkNewObjectOnErrors(u.newObj, t, i, r), u
                }, n.prototype.checkNewObjectOnErrors = function (t, i, r, u) {
                    var f = null,
                        e, o;
                    if (t) {
                        if (e = n.metaData.getRequiredProperties(u), e)
                            for (o = 0; o < e.length; o++)
                                if (!i[e[o]]) {
                                    f = new v(e[o], u);
                                    break
                                }
                    } else r.baseClassName && (f = u ? new a(r.name, r.baseClassName) : new l(r.name, r.baseClassName));
                    return f && this.addNewError(f, i), f
                }, n.prototype.addNewError = function (t, i) {
                    i && i[n.positionPropertyName] && (t.at = i[n.positionPropertyName].start);
                    this.errors.push(t)
                }, n.prototype.valueToArray = function (n, t, i, r) {
                    var u, f;
                    for (t[i] && n.length > 0 && t[i].splice(0, t[i].length), u = 0; u < n.length; u++) f = this.createNewObj(n[u], r), f.newObj ? (t[i].push(f.newObj), this.toObject(n[u], f.newObj)) : f.error || t[i].push(n[u])
                }, n.prototype.findProperty = function (n, t) {
                    var i, r;
                    if (!n) return null;
                    for (i = 0; i < n.length; i++)
                        if (r = n[i], r.name == t || r.alternativeName == t) return r;
                    return null
                }, n
            }();
        r.typePropertyName = "type";
        r.positionPropertyName = "pos";
        r.metaDataValue = new h
    }, function (n, t, i) {
        "use strict";
        var f = i(0),
            r = i(2),
            u, e;
        i.n(r);
        i.d(t, "a", function () {
            return u
        });
        i.d(t, "b", function () {
            return e
        });
        u = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.css = t.css, i.rootCss = t.rootCss, i.isDisplayMode = t.isDisplayMode || !1, i
            }
            return f.b(t, n), t.renderLocString = function (n, t) {
                if (void 0 === t && (t = null), n.hasHtml) {
                    var i = {
                        __html: n.renderedHtml
                    };
                    return r.createElement("span", {
                        style: t,
                        dangerouslySetInnerHTML: i
                    })
                }
                return r.createElement("span", {
                    style: t
                }, n.renderedHtml)
            }, t.prototype.componentWillReceiveProps = function (n) {
                this.css = n.css;
                this.rootCss = n.rootCss;
                this.isDisplayMode = n.isDisplayMode || !1
            }, t.prototype.renderLocString = function (n, i) {
                return void 0 === i && (i = null), t.renderLocString(n, i)
            }, t
        }(r.Component);
        e = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.questionBase = t.question, i.creator = t.creator, i
            }
            return f.b(t, n), t.prototype.componentWillReceiveProps = function (t) {
                n.prototype.componentWillReceiveProps.call(this, t);
                this.questionBase = t.question;
                this.creator = t.creator
            }, t.prototype.shouldComponentUpdate = function () {
                return !this.questionBase.customWidget || !!this.questionBase.customWidgetData.isNeedRender || !!this.questionBase.customWidget.widgetJson.render
            }, t
        }(u)
    }, function (n, t, i) {
        "use strict";
        var r, u, f, e, o;
        i.d(t, "b", function () {
            return u
        });
        i.d(t, "d", function () {
            return f
        });
        i.d(t, "e", function () {
            return r
        });
        i.d(t, "a", function () {
            return e
        });
        i.d(t, "c", function () {
            return o
        });
        u = function () {
            function n() { }
            return n.isValueEmpty = function (n) {
                return !(!Array.isArray(n) || 0 !== n.length) || !n && 0 !== n && !1 !== n
            }, n.prototype.getType = function () {
                throw new Error("This method is abstract");
            }, n.prototype.isTwoValueEquals = function (n, t) {
                if (n === t) return !0;
                if (!(n instanceof Object && t instanceof Object)) return !1;
                for (var i in n)
                    if (n.hasOwnProperty(i) && (!t.hasOwnProperty(i) || n[i] !== t[i] && ("object" != typeof n[i] || !this.isTwoValueEquals(n[i], t[i])))) return !1;
                for (i in t)
                    if (t.hasOwnProperty(i) && !n.hasOwnProperty(i)) return !1;
                return !0
            }, n
        }();
        f = function () {
            function n() { }
            return n.prototype.getText = function () {
                throw new Error("This method is abstract");
            }, n
        }();
        r = "sq_page";
        e = function () {
            function n() { }
            return n.ScrollElementToTop = function (n) {
                var t, i;
                return n ? (t = document.getElementById(n), !t || !t.scrollIntoView) ? !1 : (i = t.getBoundingClientRect().top, i < 0 && t.scrollIntoView(), i < 0) : !1
            }, n.GetFirstNonTextElement = function (n) {
                if (n && n.length) {
                    for (var t = 0; t < n.length; t++)
                        if ("#text" != n[t].nodeName && "#comment" != n[t].nodeName) return n[t];
                    return null
                }
            }, n.FocusElement = function (n) {
                if (!n) return !1;
                var t = document.getElementById(n);
                return !!t && (t.focus(), !0)
            }, n
        }();
        o = function () {
            function n() { }
            return Object.defineProperty(n.prototype, "isEmpty", {
                get: function () {
                    return null == this.callbacks || 0 == this.callbacks.length
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.fire = function (n, t) {
                if (null != this.callbacks)
                    for (var i = 0; i < this.callbacks.length; i++) this.callbacks[i](n, t)
            }, n.prototype.add = function (n) {
                null == this.callbacks && (this.callbacks = []);
                this.callbacks.push(n)
            }, n.prototype.remove = function (n) {
                if (null != this.callbacks) {
                    var t = this.callbacks.indexOf(n, 0);
                    void 0 != t && this.callbacks.splice(t, 1)
                }
            }, n
        }()
    }, function (n, t, i) {
        "use strict";
        var u = i(1),
            r, f;
        i.d(t, "a", function () {
            return r
        });
        i.d(t, "b", function () {
            return f
        });
        r = function () {
            function n() {
                this.creatorHash = {}
            }
            return Object.defineProperty(n, "DefaultChoices", {
                get: function () {
                    return ["1|" + u.a.getString("choices_firstItem"), "2|" + u.a.getString("choices_secondItem"), "3|" + u.a.getString("choices_thirdItem")]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n, "DefaultColums", {
                get: function () {
                    var n = u.a.getString("matrix_column") + " ";
                    return [n + "1", n + "2", n + "3"]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n, "DefaultRows", {
                get: function () {
                    var n = u.a.getString("matrix_row") + " ";
                    return [n + "1", n + "2"]
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.registerQuestion = function (n, t) {
                this.creatorHash[n] = t
            }, n.prototype.clear = function () {
                this.creatorHash = {}
            }, n.prototype.getAllTypes = function () {
                var n = [];
                for (var t in this.creatorHash) n.push(t);
                return n.sort()
            }, n.prototype.createQuestion = function (n, t) {
                var i = this.creatorHash[n];
                return null == i ? null : i(t)
            }, n
        }();
        r.Instance = new r;
        f = function () {
            function n() {
                this.creatorHash = {}
            }
            return n.prototype.registerElement = function (n, t) {
                this.creatorHash[n] = t
            }, n.prototype.clear = function () {
                this.creatorHash = {}
            }, n.prototype.getAllTypes = function () {
                var n = r.Instance.getAllTypes();
                for (var t in this.creatorHash) n.push(t);
                return n.sort()
            }, n.prototype.createElement = function (n, t) {
                var i = this.creatorHash[n];
                return null == i ? r.Instance.createQuestion(n, t) : i(t)
            }, n
        }();
        f.Instance = new f
    }, function (n, t, i) {
        "use strict";
        i.d(t, "a", function () {
            return r
        });
        var r = function () {
            function n() {
                this.creatorHash = {}
            }
            return n.prototype.registerQuestion = function (n, t) {
                this.creatorHash[n] = t
            }, n.prototype.getAllTypes = function () {
                var n = [];
                for (var t in this.creatorHash) n.push(t);
                return n.sort()
            }, n.prototype.createQuestion = function (n, t) {
                var i = this.creatorHash[n];
                return null == i ? null : i(t)
            }, n
        }();
        r.Instance = new r
    }, function (n, t, i) {
        "use strict";
        i.d(t, "a", function () {
            return r
        });
        var r = function () {
            function n(n, t) {
                void 0 === t && (t = !1);
                this.owner = n;
                this.useMarkdown = t;
                this.values = {};
                this.htmlValues = {};
                this.onGetTextCallback = null;
                this.onCreating()
            }
            return Object.defineProperty(n.prototype, "locale", {
                get: function () {
                    return this.owner ? this.owner.getLocale() : ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "text", {
                get: function () {
                    var n = this.pureText;
                    return this.onGetTextCallback && (n = this.onGetTextCallback(n)), n
                },
                set: function (n) {
                    this.setLocaleText(this.locale, n)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "pureText", {
                get: function () {
                    var i = this.locale,
                        t;
                    return i || (i = n.defaultLocale), t = this.values[i], t || i === n.defaultLocale || (t = this.values[n.defaultLocale]), t || (t = ""), t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "hasHtml", {
                get: function () {
                    return this.hasHtmlValue()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "html", {
                get: function () {
                    return this.hasHtml ? this.getHtmlValue() : ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "textOrHtml", {
                get: function () {
                    return this.hasHtml ? this.getHtmlValue() : this.text
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "renderedHtml", {
                get: function () {
                    var n = this.textOrHtml;
                    return this.onRenderedHtmlCallback ? this.onRenderedHtmlCallback(n) : n
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.getLocaleText = function (t) {
                t || (t = n.defaultLocale);
                var i = this.values[t];
                return i || ""
            }, n.prototype.setLocaleText = function (t, i) {
                i != this.getLocaleText(t) && (t || (t = n.defaultLocale), delete this.htmlValues[t], i ? "string" == typeof i && (t != n.defaultLocale && i == this.getLocaleText(n.defaultLocale) ? this.setLocaleText(t, null) : (this.values[t] = i, t == n.defaultLocale && this.deleteValuesEqualsToDefault(i))) : this.values[t] && delete this.values[t], this.onChanged())
            }, n.prototype.getJson = function () {
                var t = Object.keys(this.values);
                return 0 == t.length ? null : 1 == t.length && t[0] == n.defaultLocale ? this.values[t[0]] : this.values
            }, n.prototype.setJson = function (n) {
                if (this.values = {}, this.htmlValues = {}, n) {
                    if ("string" == typeof n) this.setLocaleText(null, n);
                    else
                        for (var t in n) this.setLocaleText(t, n[t]);
                    this.onChanged()
                }
            }, n.prototype.onChanged = function () { }, n.prototype.onCreating = function () { }, n.prototype.hasHtmlValue = function () {
                var i, t;
                return !this.owner || !this.useMarkdown ? !1 : (i = this.text, !i) ? !1 : (t = this.locale, t || (t = n.defaultLocale), t in this.htmlValues || (this.htmlValues[t] = this.owner.getMarkdownHtml(i)), !!this.htmlValues[t])
            }, n.prototype.getHtmlValue = function () {
                var t = this.locale;
                return t || (t = n.defaultLocale), this.htmlValues[t]
            }, n.prototype.deleteValuesEqualsToDefault = function (t) {
                for (var r = Object.keys(this.values), i = 0; i < r.length; i++) r[i] != n.defaultLocale && this.values[r[i]] == t && delete this.values[r[i]]
            }, n
        }();
        r.defaultLocale = "default"
    }, function (n, t, i) {
        "use strict";
        var r = i(0),
            f = i(1),
            u = i(5);
        i.d(t, "a", function () {
            return e
        });
        i.d(t, "b", function () {
            return o
        });
        i.d(t, "d", function () {
            return s
        });
        i.d(t, "c", function () {
            return h
        });
        var e = function (n) {
            function t() {
                return n.call(this) || this
            }
            return r.b(t, n), t.prototype.getText = function () {
                return f.a.getString("requiredError")
            }, t
        }(u.d),
            o = function (n) {
                function t() {
                    return n.call(this) || this
                }
                return r.b(t, n), t.prototype.getText = function () {
                    return f.a.getString("numericError")
                }, t
            }(u.d),
            s = function (n) {
                function t(t) {
                    var i = n.call(this) || this;
                    return i.maxSize = t, i
                }
                return r.b(t, n), t.prototype.getText = function () {
                    return f.a.getString("exceedMaxSize").format(this.getTextSize())
                }, t.prototype.getTextSize = function () {
                    var n;
                    return 0 == this.maxSize ? "0 Byte" : (n = Math.floor(Math.log(this.maxSize) / Math.log(1024)), (this.maxSize / Math.pow(1024, n)).toFixed([0, 0, 2, 3, 3][n]) + " " + ["Bytes", "KB", "MB", "GB", "TB"][n])
                }, t
            }(u.d),
            h = function (n) {
                function t(t) {
                    var i = n.call(this) || this;
                    return i.text = t, i
                }
                return r.b(t, n), t.prototype.getText = function () {
                    return this.text
                }, t
            }(u.d)
    }, function (n, t, i) {
        "use strict";
        var e = i(0),
            o = i(3),
            s = i(21),
            r = i(5),
            h = i(1),
            c = i(9),
            l = i(26),
            a = i(25),
            u = i(8),
            f;
        i.d(t, "a", function () {
            return f
        });
        f = function (n) {
            function t(t) {
                var i = n.call(this, t) || this,
                    r;
                return i.name = t, i.isRequiredValue = !1, i.hasCommentValue = !1, i.hasOtherValue = !1, i.readOnlyValue = !1, i.errors = [], i.validators = [], i.isvalueChangedCallbackFiring = !1, i.isValueChangedInSurvey = !1, i.locTitleValue = new u.a(i, !0), r = i, i.locTitleValue.onRenderedHtmlCallback = function () {
                    return r.fullTitle
                }, i.locCommentTextValue = new u.a(i, !0), i
            }
            return e.b(t, n), Object.defineProperty(t.prototype, "hasTitle", {
                get: function () {
                    return !0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "hasInput", {
                get: function () {
                    return !0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "inputId", {
                get: function () {
                    return this.id + "i"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "title", {
                get: function () {
                    var n = this.locTitle.text;
                    return n || this.name
                },
                set: function (n) {
                    this.locTitle.text = n;
                    this.fireCallback(this.titleChangedCallback)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "locTitle", {
                get: function () {
                    return this.locTitleValue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "locCommentText", {
                get: function () {
                    return this.locCommentTextValue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "locTitleHtml", {
                get: function () {
                    var n = this.locTitle.textOrHtml;
                    return n || this.name
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.onLocaleChanged = function () {
                n.prototype.onLocaleChanged.call(this);
                this.locTitle.onChanged();
                this.locCommentText.onChanged()
            }, Object.defineProperty(t.prototype, "processedTitle", {
                get: function () {
                    return null != this.survey ? this.survey.processText(this.locTitleHtml) : this.locTitleHtml
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "fullTitle", {
                get: function () {
                    var i, n, t;
                    return this.survey && this.survey.getQuestionTitleTemplate() ? (this.textPreProcessor || (i = this, this.textPreProcessor = new a.a, this.textPreProcessor.onHasValue = function (n) {
                        return i.canProcessedTextValues(n.toLowerCase())
                    }, this.textPreProcessor.onProcess = function (n) {
                        return i.getProcessedTextValue(n)
                    }), this.textPreProcessor.process(this.survey.getQuestionTitleTemplate())) : (n = this.requiredText, n && (n += " "), t = this.no, t && (t += ". "), t + n + this.processedTitle)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.focus = function (n) {
                void 0 === n && (n = !1);
                r.a.ScrollElementToTop(this.id);
                var t = n ? this.getFirstErrorInputElementId() : this.getFirstInputElementId();
                r.a.FocusElement(t) && this.fireCallback(this.focusCallback)
            }, t.prototype.getFirstInputElementId = function () {
                return this.inputId
            }, t.prototype.getFirstErrorInputElementId = function () {
                return this.getFirstInputElementId()
            }, t.prototype.canProcessedTextValues = function (n) {
                return "no" == n || "title" == n || "require" == n
            }, t.prototype.getProcessedTextValue = function (n) {
                return "no" == n ? this.no : "title" == n ? this.processedTitle : "require" == n ? this.requiredText : null
            }, t.prototype.supportComment = function () {
                return !1
            }, t.prototype.supportOther = function () {
                return !1
            }, Object.defineProperty(t.prototype, "isRequired", {
                get: function () {
                    return this.isRequiredValue
                },
                set: function (n) {
                    this.isRequired != n && (this.isRequiredValue = n, this.fireCallback(this.titleChangedCallback))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "hasComment", {
                get: function () {
                    return this.hasCommentValue
                },
                set: function (n) {
                    this.supportComment() && (this.hasCommentValue = n, this.hasComment && (this.hasOther = !1))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "commentText", {
                get: function () {
                    var n = this.locCommentText.text;
                    return n || h.a.getString("otherItemText")
                },
                set: function (n) {
                    this.locCommentText.text = n
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "hasOther", {
                get: function () {
                    return this.hasOtherValue
                },
                set: function (n) {
                    this.supportOther() && this.hasOther != n && (this.hasOtherValue = n, this.hasOther && (this.hasComment = !1), this.hasOtherChanged())
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.hasOtherChanged = function () { }, Object.defineProperty(t.prototype, "isReadOnly", {
                get: function () {
                    return this.readOnly || this.survey && this.survey.isDisplayMode
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "readOnly", {
                get: function () {
                    return this.readOnlyValue
                },
                set: function (n) {
                    this.readOnly != n && (this.readOnlyValue = n, this.readOnlyChanged())
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.readOnlyChanged = function () {
                this.fireCallback(this.readOnlyChangedCallback)
            }, Object.defineProperty(t.prototype, "no", {
                get: function () {
                    if (this.visibleIndex < 0) return "";
                    var t = 1,
                        i = !0,
                        n = "";
                    return this.survey && this.survey.questionStartIndex && (n = this.survey.questionStartIndex, parseInt(n) ? t = parseInt(n) : 1 == n.length && (i = !1)), i ? (this.visibleIndex + t).toString() : String.fromCharCode(n.charCodeAt(0) + this.visibleIndex)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.onSetData = function () {
                n.prototype.onSetData.call(this);
                this.onSurveyValueChanged(this.value)
            }, Object.defineProperty(t.prototype, "value", {
                get: function () {
                    return this.valueFromData(this.getValueCore())
                },
                set: function (n) {
                    this.setNewValue(n);
                    this.isvalueChangedCallbackFiring || (this.isvalueChangedCallbackFiring = !0, this.fireCallback(this.valueChangedCallback), this.isvalueChangedCallbackFiring = !1)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "comment", {
                get: function () {
                    return this.getComment()
                },
                set: function (n) {
                    this.comment != n && (this.setComment(n), this.fireCallback(this.commentChangedCallback))
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getComment = function () {
                return null != this.data ? this.data.getComment(this.name) : this.questionComment
            }, t.prototype.setComment = function (n) {
                this.setNewComment(n)
            }, t.prototype.isEmpty = function () {
                return r.b.isValueEmpty(this.value)
            }, t.prototype.hasErrors = function (n) {
                return void 0 === n && (n = !0), this.checkForErrors(n), this.errors.length > 0
            }, Object.defineProperty(t.prototype, "currentErrorCount", {
                get: function () {
                    return this.errors.length
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "requiredText", {
                get: function () {
                    return null != this.survey && this.isRequired ? this.survey.requiredText : ""
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.addError = function (n) {
                this.errors.push(n);
                this.fireCallback(this.errorsChangedCallback)
            }, t.prototype.checkForErrors = function (n) {
                var i = this.errors ? this.errors.length : 0,
                    t;
                (this.errors = [], this.onCheckForErrors(this.errors), 0 == this.errors.length && this.value) && (t = this.runValidators(), t && this.errors.push(t));
                this.survey && 0 == this.errors.length && (t = this.survey.validateQuestion(this.name), t && this.errors.push(t));
                n && (i != this.errors.length || i > 0) && this.fireCallback(this.errorsChangedCallback)
            }, t.prototype.onCheckForErrors = function () {
                this.hasRequiredError() && this.errors.push(new c.a)
            }, t.prototype.hasRequiredError = function () {
                return this.isRequired && this.isEmpty()
            }, t.prototype.runValidators = function () {
                return (new l.a).run(this)
            }, t.prototype.setNewValue = function (n) {
                this.setNewValueInData(n);
                this.onValueChanged()
            }, t.prototype.setNewValueInData = function (n) {
                this.isValueChangedInSurvey || (n = this.valueToData(n), this.setValueCore(n))
            }, t.prototype.getValueCore = function () {
                return null != this.data ? this.data.getValue(this.name) : this.questionValue
            }, t.prototype.setValueCore = function (n) {
                null != this.data ? this.data.setValue(this.name, n) : this.questionValue = n
            }, t.prototype.valueFromData = function (n) {
                return n
            }, t.prototype.valueToData = function (n) {
                return n
            }, t.prototype.onValueChanged = function () { }, t.prototype.setNewComment = function (n) {
                null != this.data ? this.data.setComment(this.name, n) : this.questionComment = n
            }, t.prototype.onSurveyValueChanged = function (n) {
                this.isValueChangedInSurvey = !0;
                this.value = this.valueFromData(n);
                this.fireCallback(this.commentChangedCallback);
                this.isValueChangedInSurvey = !1
            }, t.prototype.getValidatorTitle = function () {
                return null
            }, t
        }(s.a);
        o.a.metaData.addClass("question", [{
            name: "title:text",
            serializationProperty: "locTitle"
        }, {
            name: "commentText",
            serializationProperty: "locCommentText"
        }, "isRequired:boolean", "readOnly:boolean", {
            name: "validators:validators",
            baseClassName: "surveyvalidator",
            classNamePart: "validator"
        }], null, "questionbase")
    }, function (n, t, i) {
        "use strict";
        var u = i(8),
            r;
        i.d(t, "a", function () {
            return r
        });
        r = function () {
            function n(n, t) {
                void 0 === t && (t = null);
                this.locTextValue = new u.a(null, !0);
                var i = this;
                this.locTextValue.onGetTextCallback = function (n) {
                    return n || (i.value ? i.value.toString() : null)
                };
                t && (this.locText.text = t);
                this.value = n
            }
            return n.createArray = function (t) {
                var i = [];
                return n.setupArray(i, t), i
            }, n.setupArray = function (n, t) {
                n.push = function (n) {
                    var i = Array.prototype.push.call(this, n);
                    return n.locOwner = t, i
                };
                n.splice = function (n, i) {
                    for (var e, f, o, r = [], u = 2; u < arguments.length; u++) r[u - 2] = arguments[u];
                    for (e = (o = Array.prototype.splice).call.apply(o, [this, n, i].concat(r)), r || (r = []), f = 0; f < r.length; f++) r[f].locOwner = t;
                    return e
                }
            }, n.setData = function (t, i) {
                var r, f, u;
                for (t.length = 0, r = 0; r < i.length; r++) f = i[r], u = new n(null), u.setData(f), t.push(u)
            }, n.getData = function (n) {
                for (var r, u, t = [], i = 0; i < n.length; i++) r = n[i], u = r.locText.getJson(), u ? t.push({
                    value: r.value,
                    text: u
                }) : t.push(r.value);
                return t
            }, n.getItemByValue = function (n, t) {
                for (var i = 0; i < n.length; i++)
                    if (n[i].value == t) return n[i];
                return null
            }, n.NotifyArrayOnLocaleChanged = function (n) {
                for (var t = 0; t < n.length; t++) n[t].locText.onChanged()
            }, n.prototype.getType = function () {
                return "itemvalue"
            }, Object.defineProperty(n.prototype, "locText", {
                get: function () {
                    return this.locTextValue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "locOwner", {
                get: function () {
                    return this.locText.owner
                },
                set: function (n) {
                    this.locText.owner = n
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "value", {
                get: function () {
                    return this.itemValue
                },
                set: function (t) {
                    if (this.itemValue = t, this.itemValue) {
                        var i = this.itemValue.toString(),
                            r = i.indexOf(n.Separator);
                        r > -1 && (this.itemValue = i.slice(0, r), this.text = i.slice(r + 1))
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "hasText", {
                get: function () {
                    return !!this.locText.pureText
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "text", {
                get: function () {
                    return this.locText.text
                },
                set: function (n) {
                    this.locText.text = n
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.setData = function (t) {
                if (void 0 !== t.value) {
                    var i = null;
                    this.isObjItemValue(t) && (t.itemValue = t.itemValue, this.locText.setJson(t.locText.getJson()), i = n.itemValueProp);
                    this.copyAttributes(t, i)
                } else this.value = t
            }, n.prototype.isObjItemValue = function (n) {
                return void 0 !== n.getType && "itemvalue" == n.getType()
            }, n.prototype.copyAttributes = function (n, t) {
                for (var i in n) "function" != typeof n[i] && (t && t.indexOf(i) > -1 || ("text" == i ? this.locText.setJson(n[i]) : this[i] = n[i]))
            }, n
        }();
        r.Separator = "|";
        r.itemValueProp = ["text", "value", "hasText", "locOwner", "locText"]
    }, function (n, t, i) {
        "use strict";
        var f = i(0),
            r = i(2),
            e = (i.n(r), i(4)),
            s = i(7),
            u, o;
        i.d(t, "b", function () {
            return u
        });
        i.d(t, "a", function () {
            return o
        });
        u = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.state = {
                    value: i.question.value || ""
                }, i.handleOnChange = i.handleOnChange.bind(i), i.handleOnBlur = i.handleOnBlur.bind(i), i
            }
            return f.b(t, n), Object.defineProperty(t.prototype, "question", {
                get: function () {
                    return this.questionBase
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.componentWillReceiveProps = function (t) {
                n.prototype.componentWillReceiveProps.call(this, t);
                this.state = {
                    value: this.question.value || ""
                }
            }, t.prototype.handleOnChange = function (n) {
                this.setState({
                    value: n.target.value
                })
            }, t.prototype.handleOnBlur = function (n) {
                this.question.value = n.target.value;
                this.setState({
                    value: this.question.value || ""
                })
            }, t.prototype.render = function () {
                return this.question ? this.isDisplayMode ? r.createElement("div", {
                    id: this.question.inputId,
                    className: this.css
                }, this.question.value) : r.createElement("textarea", {
                    id: this.question.inputId,
                    className: this.css,
                    type: "text",
                    value: this.state.value,
                    placeholder: this.question.placeHolder,
                    onBlur: this.handleOnBlur,
                    onChange: this.handleOnChange,
                    cols: this.question.cols,
                    rows: this.question.rows
                }) : null
            }, t
        }(e.b);
        o = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.question = t.question, i.comment = i.question.comment, i.state = {
                    value: i.comment
                }, i.handleOnChange = i.handleOnChange.bind(i), i.handleOnBlur = i.handleOnBlur.bind(i), i
            }
            return f.b(t, n), t.prototype.handleOnChange = function (n) {
                this.comment = n.target.value;
                this.setState({
                    value: this.comment
                })
            }, t.prototype.handleOnBlur = function () {
                this.question.comment = this.comment
            }, t.prototype.componentWillReceiveProps = function (n) {
                this.question = n.question
            }, t.prototype.render = function () {
                return this.question ? this.isDisplayMode ? r.createElement("div", {
                    className: this.css.question.comment
                }, this.comment) : r.createElement("input", {
                    type: "text",
                    className: this.css.question.comment,
                    value: this.state.value,
                    onChange: this.handleOnChange,
                    onBlur: this.handleOnBlur
                }) : null
            }, t
        }(e.a);
        s.a.Instance.registerQuestion("comment", function (n) {
            return r.createElement(u, n)
        })
    }, function (n, t, i) {
        "use strict";
        var e = i(0),
            o = i(3),
            c = i(10),
            r = i(11),
            u = i(1),
            l = i(9),
            a = i(17),
            s = i(8),
            f, h;
        i.d(t, "b", function () {
            return f
        });
        i.d(t, "a", function () {
            return h
        });
        f = function (n) {
            function t(t) {
                var i = n.call(this, t) || this,
                    f;
                return i.visibleChoicesCache = null, i.otherItemValue = new r.a("other", u.a.getString("otherItemText")), i.choicesFromUrl = null, i.cachedValueForUrlRequestion = null, i.storeOthersAsComment = !0, i.choicesOrderValue = "none", i.isSettingComment = !1, i.choicesValues = r.a.createArray(i), i.choicesByUrl = i.createRestfull(), i.locOtherTextValue = new s.a(i, !0), i.locOtherErrorTextValue = new s.a(i, !0), i.otherItemValue.locOwner = i, f = i, i.choicesByUrl.getResultCallback = function (n) {
                    f.onLoadChoicesFromUrl(n)
                }, i
            }
            return e.b(t, n), Object.defineProperty(t.prototype, "otherItem", {
                get: function () {
                    return this.otherItemValue.text = this.otherText ? this.otherText : u.a.getString("otherItemText"), this.otherItemValue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isOtherSelected", {
                get: function () {
                    return this.getStoreOthersAsComment() ? this.getHasOther(this.value) : this.getHasOther(this.cachedValue)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getHasOther = function (n) {
                return n == this.otherItem.value
            }, t.prototype.createRestfull = function () {
                return new a.a
            }, t.prototype.getComment = function () {
                return this.getStoreOthersAsComment() ? n.prototype.getComment.call(this) : this.commentValue
            }, t.prototype.setComment = function (t) {
                this.getStoreOthersAsComment() ? n.prototype.setComment.call(this, t) : this.isSettingComment || t == this.commentValue || (this.isSettingComment = !0, this.commentValue = t, this.isOtherSelected && this.setNewValueInData(this.cachedValue), this.isSettingComment = !1)
            }, t.prototype.setNewValue = function (t) {
                t && (this.cachedValueForUrlRequestion = t);
                n.prototype.setNewValue.call(this, t)
            }, t.prototype.valueFromData = function (t) {
                return this.getStoreOthersAsComment() ? n.prototype.valueFromData.call(this, t) : (this.cachedValue = this.valueFromDataCore(t), this.cachedValue)
            }, t.prototype.valueToData = function (t) {
                return this.getStoreOthersAsComment() ? n.prototype.valueToData.call(this, t) : (this.cachedValue = t, this.valueToDataCore(t))
            }, t.prototype.valueFromDataCore = function (n) {
                return this.hasUnknownValue(n) ? n == this.otherItem.value ? n : (this.comment = n, this.otherItem.value) : n
            }, t.prototype.valueToDataCore = function (n) {
                return n == this.otherItem.value && this.getComment() && (n = this.getComment()), n
            }, t.prototype.hasUnknownValue = function (n) {
                if (!n) return !1;
                for (var i = this.activeChoices, t = 0; t < i.length; t++)
                    if (i[t].value == n) return !1;
                return !0
            }, Object.defineProperty(t.prototype, "choices", {
                get: function () {
                    return this.choicesValues
                },
                set: function (n) {
                    r.a.setData(this.choicesValues, n);
                    this.onVisibleChoicesChanged()
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.hasOtherChanged = function () {
                this.onVisibleChoicesChanged()
            }, Object.defineProperty(t.prototype, "choicesOrder", {
                get: function () {
                    return this.choicesOrderValue
                },
                set: function (n) {
                    n != this.choicesOrderValue && (this.choicesOrderValue = n, this.onVisibleChoicesChanged())
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "otherText", {
                get: function () {
                    return this.locOtherText.text
                },
                set: function (n) {
                    this.locOtherText.text = n;
                    this.onVisibleChoicesChanged()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "otherErrorText", {
                get: function () {
                    return this.locOtherErrorText.text
                },
                set: function (n) {
                    this.locOtherErrorText.text = n
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "locOtherText", {
                get: function () {
                    return this.locOtherTextValue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "locOtherErrorText", {
                get: function () {
                    return this.locOtherErrorTextValue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "visibleChoices", {
                get: function () {
                    return this.hasOther || "none" != this.choicesOrder ? (this.visibleChoicesCache || (this.visibleChoicesCache = this.sortVisibleChoices(this.activeChoices.slice()), this.hasOther && this.visibleChoicesCache.push(this.otherItem)), this.visibleChoicesCache) : this.activeChoices
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "activeChoices", {
                get: function () {
                    return this.choicesFromUrl ? this.choicesFromUrl : this.choices
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.supportComment = function () {
                return !0
            }, t.prototype.supportOther = function () {
                return !0
            }, t.prototype.onCheckForErrors = function (t) {
                if (n.prototype.onCheckForErrors.call(this, t), this.isOtherSelected && !this.comment) {
                    var i = this.otherErrorText;
                    i || (i = u.a.getString("otherRequiredError"));
                    t.push(new l.c(i))
                }
            }, t.prototype.onLocaleChanged = function () {
                n.prototype.onLocaleChanged.call(this);
                this.onVisibleChoicesChanged();
                r.a.NotifyArrayOnLocaleChanged(this.visibleChoices)
            }, t.prototype.getStoreOthersAsComment = function () {
                return this.storeOthersAsComment && (null == this.survey || this.survey.storeOthersAsComment)
            }, t.prototype.onSurveyLoad = function () {
                this.choicesByUrl && this.choicesByUrl.run()
            }, t.prototype.onLoadChoicesFromUrl = function (n) {
                var i = this.errors.length,
                    t;
                this.errors = [];
                this.choicesByUrl && this.choicesByUrl.error && this.errors.push(this.choicesByUrl.error);
                (i > 0 || this.errors.length > 0) && this.fireCallback(this.errorsChangedCallback);
                t = null;
                n && n.length > 0 && (t = [], r.a.setData(t, n));
                this.choicesFromUrl = t;
                this.onVisibleChoicesChanged();
                this.cachedValueForUrlRequestion && (this.value = this.cachedValueForUrlRequestion)
            }, t.prototype.onVisibleChoicesChanged = function () {
                this.visibleChoicesCache = null;
                this.fireCallback(this.choicesChangedCallback)
            }, t.prototype.sortVisibleChoices = function (n) {
                var t = this.choicesOrder.toLowerCase();
                return "asc" == t ? this.sortArray(n, 1) : "desc" == t ? this.sortArray(n, -1) : "random" == t ? this.randomizeArray(n) : n
            }, t.prototype.sortArray = function (n, t) {
                return n.sort(function (n, i) {
                    return n.text < i.text ? -1 * t : n.text > i.text ? 1 * t : 0
                })
            }, t.prototype.randomizeArray = function (n) {
                for (var i, r, t = n.length - 1; t > 0; t--) i = Math.floor(Math.random() * (t + 1)), r = n[t], n[t] = n[i], n[i] = r;
                return n
            }, t.prototype.clearUnusedValues = function () {
                n.prototype.clearUnusedValues.call(this);
                this.isOtherSelected || (this.comment = null)
            }, t
        }(c.a);
        h = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.name = t, i.colCountValue = 1, i
            }
            return e.b(t, n), Object.defineProperty(t.prototype, "colCount", {
                get: function () {
                    return this.colCountValue
                },
                set: function (n) {
                    n < 0 || n > 4 || (this.colCountValue = n, this.fireCallback(this.colCountChangedCallback))
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(f);
        o.a.metaData.addClass("selectbase", ["hasComment:boolean", "hasOther:boolean", {
            name: "choices:itemvalues",
            onGetValue: function (n) {
                return r.a.getData(n.choices)
            },
            onSetValue: function (n, t) {
                n.choices = t
            }
        }, {
                name: "choicesOrder",
                "default": "none",
                choices: ["none", "asc", "desc", "random"]
            }, {
                name: "choicesByUrl:restfull",
                className: "ChoicesRestfull",
                onGetValue: function (n) {
                    return n.choicesByUrl.isEmpty ? null : n.choicesByUrl
                },
                onSetValue: function (n, t) {
                    n.choicesByUrl.setData(t)
                }
            }, {
                name: "otherText",
                serializationProperty: "locOtherText"
            }, {
                name: "otherErrorText",
                serializationProperty: "locOtherErrorText"
            }, {
                name: "storeOthersAsComment:boolean",
                "default": !0
            }], null, "question");
        o.a.metaData.addClass("checkboxbase", [{
            name: "colCount:number",
            "default": 1,
            choices: [0, 1, 2, 3, 4]
        }], null, "selectbase")
    }, function (n, t, i) {
        "use strict";
        var e = i(28),
            o = i(18),
            r, u, f;
        i.d(t, "b", function () {
            return r
        });
        i.d(t, "c", function () {
            return u
        });
        i.d(t, "a", function () {
            return f
        });
        r = function () {
            function n() {
                this.opValue = "equal"
            }
            return Object.defineProperty(n, "operators", {
                get: function () {
                    return null != n.operatorsValue ? n.operatorsValue : (n.operatorsValue = {
                        empty: function (n) {
                            return !n
                        },
                        notempty: function (n) {
                            return !!n
                        },
                        equal: function (n, t) {
                            return n == t
                        },
                        notequal: function (n, t) {
                            return n != t
                        },
                        contains: function (n, t) {
                            return n && n.indexOf && n.indexOf(t) > -1
                        },
                        notcontains: function (n, t) {
                            return !n || !n.indexOf || -1 == n.indexOf(t)
                        },
                        greater: function (n, t) {
                            return n > t
                        },
                        less: function (n, t) {
                            return n < t
                        },
                        greaterorequal: function (n, t) {
                            return n >= t
                        },
                        lessorequal: function (n, t) {
                            return n <= t
                        }
                    }, n.operatorsValue)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "operator", {
                get: function () {
                    return this.opValue
                },
                set: function (t) {
                    t && (t = t.toLowerCase(), n.operators[t] && (this.opValue = t))
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.perform = function (t, i) {
                return void 0 === t && (t = null), void 0 === i && (i = null), t || (t = this.left), i || (i = this.right), n.operators[this.operator](this.getPureValue(t), this.getPureValue(i))
            }, n.prototype.getPureValue = function (n) {
                if (!n || "string" != typeof n) return n;
                n.length > 0 && ("'" == n[0] || '"' == n[0]) && (n = n.substr(1));
                var t = n.length;
                return t > 0 && ("'" == n[t - 1] || '"' == n[t - 1]) && (n = n.substr(0, t - 1)), n
            }, n
        }();
        r.operatorsValue = null;
        u = function () {
            function n() {
                this.connectiveValue = "and";
                this.children = []
            }
            return Object.defineProperty(n.prototype, "connective", {
                get: function () {
                    return this.connectiveValue
                },
                set: function (n) {
                    n && (n = n.toLowerCase(), "&" != n && "&&" != n || (n = "and"), "|" != n && "||" != n || (n = "or"), "and" != n && "or" != n || (this.connectiveValue = n))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "isEmpty", {
                get: function () {
                    return 0 == this.children.length
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.clear = function () {
                this.children = [];
                this.connective = "and"
            }, n
        }();
        f = function () {
            function n(n) {
                this.root = new u;
                this.expression = n;
                this.processValue = new o.a
            }
            return Object.defineProperty(n.prototype, "expression", {
                get: function () {
                    return this.expressionValue
                },
                set: function (n) {
                    this.expression != n && (this.expressionValue = n, (new e.a).parse(this.expressionValue, this.root))
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.run = function (n) {
                return this.values = n, this.runNode(this.root)
            }, n.prototype.runNode = function (n) {
                for (var r, t = "and" == n.connective, i = 0; i < n.children.length; i++) {
                    if (r = this.runNodeCondition(n.children[i]), !r && t) return !1;
                    if (r && !t) return !0
                }
                return t
            }, n.prototype.runNodeCondition = function (n) {
                return !!n && (n.children ? this.runNode(n) : !!n.left && this.runCondition(n))
            }, n.prototype.runCondition = function (n) {
                var r = n.left,
                    t = this.getValueName(r),
                    i;
                if (t) {
                    if (!this.processValue.hasValue(t, this.values)) return "empty" === n.operator;
                    r = this.processValue.getValue(t, this.values)
                }
                if (i = n.right, t = this.getValueName(i)) {
                    if (!this.processValue.hasValue(t, this.values)) return !1;
                    i = this.processValue.getValue(t, this.values)
                }
                return n.perform(r, i)
            }, n.prototype.getValueName = function (n) {
                return n ? "string" != typeof n ? null : n.length < 3 || "{" != n[0] || "}" != n[n.length - 1] ? null : n.substr(1, n.length - 2) : null
            }, n
        }()
    }, function (n, t, i) {
        "use strict";
        var f = i(0),
            r = i(2),
            e = (i.n(r), i(10)),
            h = i(12),
            o = i(4),
            c = i(70),
            s, u;
        i.d(t, "a", function () {
            return s
        });
        i.d(t, "b", function () {
            return u
        });
        s = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.setQuestion(t.question), i.creator = t.creator, i.css = t.css, i
            }
            return f.b(t, n), t.prototype.componentWillReceiveProps = function (n) {
                this.creator = n.creator;
                this.css = n.css;
                this.setQuestion(n.question)
            }, t.prototype.setQuestion = function (n) {
                this.questionBase = n;
                this.question = n instanceof e.a ? n : null;
                var t = this.question ? this.question.value : null;
                this.state = {
                    visible: this.questionBase.visible,
                    value: t,
                    error: 0,
                    renderWidth: 0,
                    visibleIndexValue: -1,
                    isReadOnly: this.questionBase.isReadOnly
                }
            }, t.prototype.componentDidMount = function () {
                var n, t;
                this.questionBase && (n = this, this.questionBase.react = n, this.questionBase.renderWidthChangedCallback = function () {
                    n.state.renderWidth = n.state.renderWidth + 1;
                    n.setState(n.state)
                }, this.questionBase.visibleIndexChangedCallback = function () {
                    n.state.visibleIndexValue = n.questionBase.visibleIndex;
                    n.setState(n.state)
                }, this.questionBase.readOnlyChangedCallback = function () {
                    n.state.isReadOnly = n.questionBase.isReadOnly;
                    n.setState(n.state)
                }, t = this.refs.root, t && this.questionBase.survey && this.questionBase.survey.afterRenderQuestion(this.questionBase, t))
            }, t.prototype.componentWillUnmount = function () {
                this.refs.root;
                this.questionBase && (this.questionBase.react = null, this.questionBase.renderWidthChangedCallback = null, this.questionBase.visibleIndexChangedCallback = null, this.questionBase.readOnlyChangedCallback = null)
            }, t.prototype.render = function () {
                if (!this.questionBase || !this.creator || !this.questionBase.visible) return null;
                var f = this.renderQuestion(),
                    t = this.questionBase.hasTitle ? this.renderTitle() : null,
                    e = "top" == this.creator.questionTitleLocation() ? t : null,
                    o = "bottom" == this.creator.questionTitleLocation() ? t : null,
                    s = this.question && this.question.hasComment ? this.renderComment() : null,
                    h = this.renderErrors(),
                    i = this.questionBase.indent > 0 ? this.questionBase.indent * this.css.question.indent + "px" : null,
                    u = this.questionBase.rightIndent > 0 ? this.questionBase.rightIndent * this.css.question.indent + "px" : null,
                    n = {
                        display: "inline-block",
                        verticalAlign: "top"
                    };
                return this.questionBase.renderWidth && (n.width = this.questionBase.renderWidth), i && (n.marginLeft = i), u && (n.paddingRight = u), r.createElement("div", {
                    ref: "root",
                    id: this.questionBase.id,
                    className: this.css.question.root,
                    style: n
                }, e, h, f, s, o)
            }, t.prototype.renderQuestion = function () {
                return this.questionBase.customWidget ? r.createElement(c.a, {
                    creator: this.creator,
                    question: this.questionBase
                }) : this.creator.createQuestionElement(this.questionBase)
            }, t.prototype.renderTitle = function () {
                var n = o.a.renderLocString(this.question.locTitle);
                return r.createElement("h5", {
                    className: this.css.question.title
                }, n)
            }, t.prototype.renderComment = function () {
                var n = o.a.renderLocString(this.question.locCommentText);
                return r.createElement("div", null, r.createElement("div", null, n), r.createElement(h.a, {
                    question: this.question,
                    css: this.css
                }))
            }, t.prototype.renderErrors = function () {
                return r.createElement(u, {
                    question: this.question,
                    css: this.css,
                    creator: this.creator
                })
            }, t
        }(r.Component);
        u = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.setQuestion(t.question), i.creator = t.creator, i.css = t.css, i
            }
            return f.b(t, n), t.prototype.componentWillReceiveProps = function (n) {
                this.setQuestion(n.question);
                this.creator = n.creator;
                this.css = n.css
            }, t.prototype.setQuestion = function (n) {
                if (this.question = n instanceof e.a ? n : null, this.question) {
                    var t = this;
                    this.question.errorsChangedCallback = function () {
                        t.state.error = t.state.error + 1;
                        t.setState(t.state)
                    }
                }
                this.state = {
                    error: 0
                }
            }, t.prototype.render = function () {
                var t, n, i, u;
                if (!this.question || 0 == this.question.errors.length) return null;
                for (t = [], n = 0; n < this.question.errors.length; n++) i = this.question.errors[n].getText(), u = "error" + n, t.push(this.creator.renderError(u, i));
                return r.createElement("div", {
                    className: this.css.error.root
                }, t)
            }, t
        }(r.Component)
    }, function (n, t, i) {
        "use strict";
        var o = i(0),
            r = i(2),
            f = (i.n(r), i(23)),
            s = i(35),
            h = i(33),
            c = i(7),
            u = i(19),
            l = i(34),
            a = i(5),
            v = i(4),
            e;
        i.d(t, "a", function () {
            return e
        });
        e = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.isCurrentPageChanged = !1, i.updateSurvey(t), i
            }
            return o.b(t, n), Object.defineProperty(t, "cssType", {
                get: function () {
                    return u.b.currentType
                },
                set: function (n) {
                    u.b.currentType = n
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.componentWillReceiveProps = function (n) {
                this.updateSurvey(n)
            }, t.prototype.componentDidUpdate = function () {
                this.isCurrentPageChanged && (this.isCurrentPageChanged = !1, this.survey.focusFirstQuestionAutomatic && this.survey.focusFirstQuestion())
            }, t.prototype.componentDidMount = function () {
                var n = this.refs.root;
                n && this.survey && this.survey.doAfterRenderSurvey(n)
            }, t.prototype.render = function () {
                return "completed" == this.survey.state ? this.renderCompleted() : "loading" == this.survey.state ? this.renderLoading() : this.renderSurvey()
            }, Object.defineProperty(t.prototype, "css", {
                get: function () {
                    return u.b.getCss()
                },
                set: function (n) {
                    this.survey.mergeCss(n, this.css)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.renderCompleted = function () {
                if (!this.survey.showCompletedPage) return null;
                var n = {
                    __html: this.survey.processedCompletedHtml
                };
                return r.createElement("div", {
                    dangerouslySetInnerHTML: n
                })
            }, t.prototype.renderLoading = function () {
                var n = {
                    __html: this.survey.processedLoadingHtml
                };
                return r.createElement("div", {
                    dangerouslySetInnerHTML: n
                })
            }, t.prototype.renderSurvey = function () {
                var t = this.survey.title && this.survey.showTitle ? this.renderTitle() : null,
                    n = this.survey.currentPage ? this.renderPage() : null,
                    i = "top" == this.survey.showProgressBar ? this.renderProgress(!0) : null,
                    u = "bottom" == this.survey.showProgressBar ? this.renderProgress(!1) : null,
                    f = n && this.survey.showNavigationButtons ? this.renderNavigation() : null;
                return n || (n = this.renderEmptySurvey()), r.createElement("div", {
                    ref: "root",
                    className: this.css.root
                }, t, r.createElement("div", {
                    id: a.e,
                    className: this.css.body
                }, i, n, u), f)
            }, t.prototype.renderTitle = function () {
                var n = v.a.renderLocString(this.survey.locTitle);
                return r.createElement("div", {
                    className: this.css.header
                }, r.createElement("h3", null, n))
            }, t.prototype.renderPage = function () {
                return r.createElement(s.a, {
                    survey: this.survey,
                    page: this.survey.currentPage,
                    css: this.css,
                    creator: this
                })
            }, t.prototype.renderProgress = function (n) {
                return r.createElement(l.a, {
                    survey: this.survey,
                    css: this.css,
                    isTop: n
                })
            }, t.prototype.renderNavigation = function () {
                return r.createElement(h.a, {
                    survey: this.survey,
                    css: this.css
                })
            }, t.prototype.renderEmptySurvey = function () {
                return r.createElement("span", null, this.survey.emptySurveyText)
            }, t.prototype.updateSurvey = function (n) {
                n ? n.model ? this.survey = n.model : n.json && (this.survey = new f.a(n.json)) : this.survey = new f.a;
                n && (n.clientId && (this.survey.clientId = n.clientId), n.data && (this.survey.data = n.data), n.css && this.survey.mergeCss(n.css, this.css));
                this.survey.currentPage;
                this.state = {
                    pageIndexChange: 0,
                    isCompleted: !1,
                    modelChanged: 0
                };
                this.setSurveyEvents(n)
            }, t.prototype.setSurveyEvents = function (n) {
                var t = this;
                this.survey.renderCallback = function () {
                    t.state.modelChanged = t.state.modelChanged + 1;
                    t.setState(t.state)
                };
                this.survey.onComplete.add(function () {
                    t.state.isCompleted = !0;
                    t.setState(t.state)
                });
                this.survey.onPartialSend.add(function () {
                    t.setState(t.state)
                });
                this.survey.onCurrentPageChanged.add(function (i, r) {
                    t.isCurrentPageChanged = !0;
                    t.state.pageIndexChange = t.state.pageIndexChange + 1;
                    t.setState(t.state);
                    n && n.onCurrentPageChanged && n.onCurrentPageChanged(i, r)
                });
                this.survey.onVisibleChanged.add(function (n, t) {
                    if (t.question && t.question.react) {
                        var i = t.question.react.state;
                        i.visible = t.question.visible;
                        t.question.react.setState(i)
                    }
                });
                this.survey.onValueChanged.add(function (n, t) {
                    if (t.question && t.question.react) {
                        var i = t.question.react.state;
                        i.value = t.value;
                        t.question.react.setState(i)
                    }
                });
                n && (this.survey.onValueChanged.add(function (t, i) {
                    n.data && (n.data[i.name] = i.value);
                    n.onValueChanged && n.onValueChanged(t, i)
                }), n.onComplete && this.survey.onComplete.add(function (t) {
                    n.onComplete(t)
                }), n.onPartialSend && this.survey.onPartialSend.add(function (t) {
                    n.onPartialSend(t)
                }), this.survey.onPageVisibleChanged.add(function (t, i) {
                    n.onPageVisibleChanged && n.onPageVisibleChanged(t, i)
                }), n.onServerValidateQuestions && (this.survey.onServerValidateQuestions = n.onServerValidateQuestions), n.onQuestionAdded && this.survey.onQuestionAdded.add(function (t, i) {
                    n.onQuestionAdded(t, i)
                }), n.onQuestionRemoved && this.survey.onQuestionRemoved.add(function (t, i) {
                    n.onQuestionRemoved(t, i)
                }), n.onValidateQuestion && this.survey.onValidateQuestion.add(function (t, i) {
                    n.onValidateQuestion(t, i)
                }), n.onSendResult && this.survey.onSendResult.add(function (t, i) {
                    n.onSendResult(t, i)
                }), n.onGetResult && this.survey.onGetResult.add(function (t, i) {
                    n.onGetResult(t, i)
                }), n.onProcessHtml && this.survey.onProcessHtml.add(function (t, i) {
                    n.onProcessHtml(t, i)
                }), n.onAfterRenderSurvey && this.survey.onAfterRenderSurvey.add(function (t, i) {
                    n.onAfterRenderSurvey(t, i)
                }), n.onAfterRenderPage && this.survey.onAfterRenderPage.add(function (t, i) {
                    n.onAfterRenderPage(t, i)
                }), n.onAfterRenderQuestion && this.survey.onAfterRenderQuestion.add(function (t, i) {
                    n.onAfterRenderQuestion(t, i)
                }), n.onTextMarkdown && this.survey.onTextMarkdown.add(function (t, i) {
                    n.onTextMarkdown(t, i)
                }))
            }, t.prototype.createQuestionElement = function (n) {
                var t = this.css[n.getType()];
                return c.a.Instance.createQuestion(n.getType(), {
                    question: n,
                    css: t,
                    rootCss: this.css,
                    isDisplayMode: n.isReadOnly,
                    creator: this
                })
            }, t.prototype.renderError = function (n, t) {
                return r.createElement("div", {
                    key: n,
                    className: this.css.error.item
                }, t)
            }, t.prototype.questionTitleLocation = function () {
                return this.survey.questionTitleLocation
            }, t
        }(r.Component)
    }, function (n, t, i) {
        "use strict";
        var e = i(0),
            o = i(5),
            s = i(11),
            h = i(3),
            u = i(1),
            f = i(9),
            r;
        i.d(t, "a", function () {
            return r
        });
        r = function (n) {
            function t() {
                var t = n.call(this) || this;
                return t.url = "", t.path = "", t.valueName = "", t.titleName = "", t.error = null, t
            }
            return e.b(t, n), t.getCachedItemsResult = function (n) {
                var r = n.objHash,
                    i = t.itemsResult[r];
                return !!i && (n.getResultCallback && n.getResultCallback(i), !0)
            }, t.prototype.run = function () {
                var n, i;
                this.url && this.getResultCallback && !t.getCachedItemsResult(this) && (this.error = null, n = new XMLHttpRequest, n.open("GET", this.url), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i = this, n.onload = function () {
                    200 == n.status ? i.onLoad(JSON.parse(n.response)) : i.onError(n.statusText, n.responseText)
                }, n.send())
            }, t.prototype.getType = function () {
                return "choicesByUrl"
            }, Object.defineProperty(t.prototype, "isEmpty", {
                get: function () {
                    return !(this.url || this.path || this.valueName || this.titleName)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.setData = function (n) {
                this.clear();
                n.url && (this.url = n.url);
                n.path && (this.path = n.path);
                n.valueName && (this.valueName = n.valueName);
                n.titleName && (this.titleName = n.titleName)
            }, t.prototype.clear = function () {
                this.url = "";
                this.path = "";
                this.valueName = "";
                this.titleName = ""
            }, t.prototype.onLoad = function (n) {
                var e = [],
                    i, r, o, h;
                if ((n = this.getResultAfterPath(n)) && n.length)
                    for (i = 0; i < n.length; i++) r = n[i], r && (o = this.getValue(r), h = this.getTitle(r), e.push(new s.a(o, h)));
                else this.error = new f.c(u.a.getString("urlGetChoicesError"));
                t.itemsResult[this.objHash] = e;
                this.getResultCallback(e)
            }, t.prototype.onError = function (n, t) {
                this.error = new f.c(u.a.getString("urlRequestError").format(n, t));
                this.getResultCallback([])
            }, t.prototype.getResultAfterPath = function (n) {
                if (!n || !this.path) return n;
                for (var i = this.getPathes(), t = 0; t < i.length; t++)
                    if (!(n = n[i[t]])) return null;
                return n
            }, t.prototype.getPathes = function () {
                var n = [];
                return n = this.path.indexOf(";") > -1 ? this.path.split(";") : this.path.split(","), 0 == n.length && n.push(this.path), n
            }, t.prototype.getValue = function (n) {
                return this.valueName ? n[this.valueName] : Object.keys(n).length < 1 ? null : n[Object.keys(n)[0]]
            }, t.prototype.getTitle = function (n) {
                return this.titleName ? n[this.titleName] : null
            }, Object.defineProperty(t.prototype, "objHash", {
                get: function () {
                    return this.url + ";" + this.path + ";" + this.valueName + ";" + this.titleName
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(o.b);
        r.itemsResult = {};
        h.a.metaData.addClass("choicesByUrl", ["url", "path", "valueName", "titleName"], function () {
            return new r
        })
    }, function (n, t, i) {
        "use strict";
        i.d(t, "a", function () {
            return r
        });
        var r = function () {
            function n() { }
            return n.prototype.getFirstName = function (n) {
                var r, t, i;
                if (!n) return n;
                for (r = "", t = 0; t < n.length; t++) {
                    if (i = n[t], "." == i || "[" == i) break;
                    r += i
                }
                return r
            }, n.prototype.hasValue = function (n, t) {
                return this.getValueCore(n, t).hasValue
            }, n.prototype.getValue = function (n, t) {
                return this.getValueCore(n, t).value
            }, n.prototype.getValueCore = function (n, t) {
                var u = {
                    hasValue: !1,
                    value: null
                },
                    r = t,
                    e, i, o, f;
                if (!r) return u;
                for (e = !0; n && n.length > 0;) {
                    if (e || "[" != n[0]) {
                        if ((e || (n = n.substr(1)), f = this.getFirstName(n), !f) || !r[f]) return u;
                        r = r[f];
                        n = n.substr(f.length)
                    } else {
                        if (!Array.isArray(r)) return u;
                        for (i = 1, o = ""; i < n.length && "]" != n[i];) o += n[i], i++;
                        if (n = i < n.length ? n.substr(i + 1) : "", (i = this.getIntValue(o)) < 0 || i >= r.length) return u;
                        r = r[i]
                    }
                    e = !1
                }
                return u.value = r, u.hasValue = !0, u
            }, n.prototype.getIntValue = function (n) {
                return "0" == n || (0 | n) > 0 && n % 1 == 0 ? Number(n) : -1
            }, n
        }()
    }, function (n, t, i) {
        "use strict";
        i.d(t, "b", function () {
            return u
        });
        i.d(t, "a", function () {
            return r
        });
        var u = {
            currentType: "",
            getCss: function () {
                var n = this.currentType ? this[this.currentType] : r;
                return n || (n = r), n
            }
        },
            r = {
                root: "sv_main",
                header: "",
                body: "sv_body",
                footer: "sv_nav",
                navigationButton: "",
                navigation: {
                    complete: "",
                    prev: "",
                    next: ""
                },
                progress: "sv_progress",
                progressBar: "",
                pageTitle: "sv_p_title",
                row: "sv_row",
                question: {
                    root: "sv_q",
                    title: "sv_q_title",
                    comment: "",
                    indent: 20
                },
                error: {
                    root: "sv_q_erbox",
                    icon: "",
                    item: ""
                },
                checkbox: {
                    root: "sv_qcbc",
                    item: "sv_q_checkbox",
                    other: "sv_q_other"
                },
                comment: "",
                dropdown: {
                    root: "",
                    control: ""
                },
                matrix: {
                    root: "sv_q_matrix"
                },
                matrixdropdown: {
                    root: "sv_q_matrix"
                },
                matrixdynamic: {
                    root: "table",
                    button: ""
                },
                multipletext: {
                    root: "",
                    itemTitle: "",
                    itemValue: ""
                },
                radiogroup: {
                    root: "sv_qcbc",
                    item: "sv_q_radiogroup",
                    label: "",
                    other: "sv_q_other"
                },
                rating: {
                    root: "sv_q_rating",
                    item: "sv_q_rating_item"
                },
                text: "",
                window: {
                    root: "sv_window",
                    body: "sv_window_content",
                    header: {
                        root: "sv_window_title",
                        title: "",
                        button: "",
                        buttonExpanded: "",
                        buttonCollapsed: ""
                    }
                }
            };
        u.standard = r
    }, function (n, t, i) {
        "use strict";
        var o = i(0),
            s = i(3),
            v = i(10),
            h = i(5),
            r = i(11),
            y = i(1),
            p = i(13),
            w = i(17),
            c = i(6),
            u = i(8),
            e;
        i.d(t, "b", function () {
            return f
        });
        i.d(t, "a", function () {
            return l
        });
        i.d(t, "c", function () {
            return a
        });
        i.d(t, "d", function () {
            return e
        });
        var f = function (n) {
            function t(t, i) {
                var f, e;
                return void 0 === i && (i = null), f = n.call(this) || this, f.name = t, f.isRequired = !1, f.hasOther = !1, f.minWidth = "", f.cellType = "default", f.inputType = "text", f.choicesOrder = "none", f.colOwner = null, f.validators = [], f.colCountValue = -1, f.choicesValue = r.a.createArray(f), f.locTitleValue = new u.a(f, !0), e = f, f.locTitleValue.onRenderedHtmlCallback = function (n) {
                    return e.getFullTitle(n)
                }, f.locOptionsCaptionValue = new u.a(f), f.locPlaceHolderValue = new u.a(f), f.choicesByUrl = new w.a, i && (f.title = i), f
            }
            return o.b(t, n), t.prototype.getType = function () {
                return "matrixdropdowncolumn"
            }, Object.defineProperty(t.prototype, "title", {
                get: function () {
                    return this.locTitle.text ? this.locTitle.text : this.name
                },
                set: function (n) {
                    this.locTitle.text = n
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "fullTitle", {
                get: function () {
                    return this.getFullTitle(this.locTitle.textOrHtml)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getFullTitle = function (n) {
                if (n || (n = this.name), this.isRequired) {
                    var t = this.colOwner ? this.colOwner.getRequiredText() : "";
                    t && (t += " ");
                    n = t + n
                }
                return n
            }, Object.defineProperty(t.prototype, "locTitle", {
                get: function () {
                    return this.locTitleValue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "optionsCaption", {
                get: function () {
                    return this.locOptionsCaption.text
                },
                set: function (n) {
                    this.locOptionsCaption.text = n
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "locOptionsCaption", {
                get: function () {
                    return this.locOptionsCaptionValue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "placeHolder", {
                get: function () {
                    return this.locPlaceHolder.text
                },
                set: function (n) {
                    this.locPlaceHolder.text = n
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "locPlaceHolder", {
                get: function () {
                    return this.locPlaceHolderValue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "choices", {
                get: function () {
                    return this.choicesValue
                },
                set: function (n) {
                    r.a.setData(this.choicesValue, n)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "colCount", {
                get: function () {
                    return this.colCountValue
                },
                set: function (n) {
                    n < -1 || n > 4 || (this.colCountValue = n)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getLocale = function () {
                return this.colOwner ? this.colOwner.getLocale() : ""
            }, t.prototype.getMarkdownHtml = function (n) {
                return this.colOwner ? this.colOwner.getMarkdownHtml(n) : null
            }, t.prototype.onLocaleChanged = function () {
                this.locTitle.onChanged();
                this.locOptionsCaption.onChanged();
                r.a.NotifyArrayOnLocaleChanged(this.choices)
            }, t
        }(h.b),
            l = function () {
                function n(n, t, i) {
                    this.column = n;
                    this.row = t;
                    this.questionValue = i.createQuestion(this.row, this.column);
                    this.questionValue.setData(t)
                }
                return Object.defineProperty(n.prototype, "question", {
                    get: function () {
                        return this.questionValue
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "value", {
                    get: function () {
                        return this.question.value
                    },
                    set: function (n) {
                        this.question.value = n
                    },
                    enumerable: !0,
                    configurable: !0
                }), n
            }(),
            a = function () {
                function n(t, i) {
                    this.rowValues = {};
                    this.rowComments = {};
                    this.isSettingValue = !1;
                    this.cells = [];
                    this.data = t;
                    this.value = i;
                    this.idValue = n.getId();
                    this.buildCells()
                }
                return n.getId = function () {
                    return "srow_" + n.idCounter++
                }, Object.defineProperty(n.prototype, "id", {
                    get: function () {
                        return this.idValue
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "rowName", {
                    get: function () {
                        return null
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "value", {
                    get: function () {
                        return this.rowValues
                    },
                    set: function (n) {
                        var i, t;
                        if (this.isSettingValue = !0, this.rowValues = {}, null != n)
                            for (i in n) this.rowValues[i] = n[i];
                        for (t = 0; t < this.cells.length; t++) this.cells[t].question.onSurveyValueChanged(this.getValue(this.cells[t].column.name));
                        this.isSettingValue = !1
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.getValue = function (n) {
                    return this.rowValues[n]
                }, n.prototype.setValue = function (n, t) {
                    this.isSettingValue || ("" === t && (t = null), null != t ? this.rowValues[n] = t : delete this.rowValues[n], this.data.onRowChanged(this, this.value))
                }, n.prototype.getComment = function (n) {
                    return this.rowComments[n]
                }, n.prototype.setComment = function (n, t) {
                    this.rowComments[n] = t
                }, Object.defineProperty(n.prototype, "isEmpty", {
                    get: function () {
                        var n = this.value,
                            t;
                        if (h.b.isValueEmpty(n)) return !0;
                        for (t in n) return !1;
                        return !0
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.getLocale = function () {
                    return this.data ? this.data.getLocale() : ""
                }, n.prototype.getMarkdownHtml = function (n) {
                    return this.data ? this.data.getMarkdownHtml(n) : null
                }, n.prototype.onLocaleChanged = function () {
                    for (var n = 0; n < this.cells.length; n++) this.cells[n].question.onLocaleChanged()
                }, n.prototype.buildCells = function () {
                    for (var i, t = this.data.columns, n = 0; n < t.length; n++) i = t[n], this.cells.push(this.createCell(i))
                }, n.prototype.createCell = function (n) {
                    return new l(n, this, this.data)
                }, n
            }();
        a.idCounter = 1;
        e = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.name = t, i.columnsValue = [], i.isRowChanging = !1, i.generatedVisibleRows = null, i.cellTypeValue = "dropdown", i.columnColCountValue = 0, i.columnMinWidth = "", i.horizontalScroll = !1, i.choicesValue = r.a.createArray(i), i.locOptionsCaptionValue = new u.a(i), i.overrideColumnsMethods(), i
            }
            return o.b(t, n), t.addDefaultColumns = function (n) {
                for (var i = c.a.DefaultColums, t = 0; t < i.length; t++) n.addColumn(i[t])
            }, t.prototype.getType = function () {
                return "matrixdropdownbase"
            }, Object.defineProperty(t.prototype, "columns", {
                get: function () {
                    return this.columnsValue
                },
                set: function (n) {
                    this.columnsValue = n;
                    this.overrideColumnsMethods();
                    this.fireCallback(this.columnsChangedCallback)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.overrideColumnsMethods = function () {
                var n = this;
                this.columnsValue.push = function (t) {
                    var i = Array.prototype.push.call(this, t);
                    return t.colOwner = n, null != n.data && n.fireCallback(n.columnsChangedCallback), i
                };
                this.columnsValue.splice = function (t, i) {
                    for (var e, f, o, r = [], u = 2; u < arguments.length; u++) r[u - 2] = arguments[u];
                    for (e = (o = Array.prototype.splice).call.apply(o, [this, t, i].concat(r)), r || (r = []), f = 0; f < r.length; f++) r[f].colOwner = n;
                    return null != n.data && n.fireCallback(n.columnsChangedCallback), e
                }
            }, Object.defineProperty(t.prototype, "cellType", {
                get: function () {
                    return this.cellTypeValue
                },
                set: function (n) {
                    this.cellType != n && (this.cellTypeValue = n, this.fireCallback(this.updateCellsCallback))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "columnColCount", {
                get: function () {
                    return this.columnColCountValue
                },
                set: function (n) {
                    n < 0 || n > 4 || (this.columnColCountValue = n, this.fireCallback(this.updateCellsCallback))
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getRequiredText = function () {
                return this.survey ? this.survey.requiredText : ""
            }, t.prototype.onLocaleChanged = function () {
                var i, t;
                for (n.prototype.onLocaleChanged.call(this), this.locOptionsCaption.onChanged(), t = 0; t < this.columns.length; t++) this.columns[t].onLocaleChanged();
                for (i = this.visibleRows, t = 0; t < i.length; t++) i[t].onLocaleChanged();
                this.fireCallback(this.updateCellsCallback)
            }, t.prototype.getColumnWidth = function (n) {
                return n.minWidth ? n.minWidth : this.columnMinWidth
            }, Object.defineProperty(t.prototype, "choices", {
                get: function () {
                    return this.choicesValue
                },
                set: function (n) {
                    r.a.setData(this.choicesValue, n)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "optionsCaption", {
                get: function () {
                    return this.locOptionsCaption.text ? this.locOptionsCaption.text : y.a.getString("optionsCaption")
                },
                set: function (n) {
                    this.locOptionsCaption.text = n
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "locOptionsCaption", {
                get: function () {
                    return this.locOptionsCaptionValue
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.addColumn = function (n, t) {
                void 0 === t && (t = null);
                var i = new f(n, t);
                return this.columnsValue.push(i), i
            }, Object.defineProperty(t.prototype, "visibleRows", {
                get: function () {
                    return this.generatedVisibleRows = this.generateRows(), this.generatedVisibleRows
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.generateRows = function () {
                return null
            }, t.prototype.createNewValue = function (n) {
                return n || {}
            }, t.prototype.getRowValue = function (n, t, i) {
                void 0 === i && (i = !1);
                var r = t[n.rowName] ? t[n.rowName] : null;
                return !r && i && (r = {}, t[n.rowName] = r), r
            }, t.prototype.onBeforeValueChanged = function () { }, t.prototype.onValueChanged = function () {
                var t, n, i;
                if (!this.isRowChanging && (this.onBeforeValueChanged(this.value), this.generatedVisibleRows && 0 != this.generatedVisibleRows.length)) {
                    for (this.isRowChanging = !0, t = this.createNewValue(this.value), n = 0; n < this.generatedVisibleRows.length; n++) i = this.generatedVisibleRows[n], this.generatedVisibleRows[n].value = this.getRowValue(i, t);
                    this.isRowChanging = !1
                }
            }, t.prototype.supportGoNextPageAutomatic = function () {
                var n = this.generatedVisibleRows,
                    t, i, r, u;
                if (n || (n = this.visibleRows), !n) return !0;
                for (t = 0; t < n.length; t++)
                    if (i = this.generatedVisibleRows[t].cells, i)
                        for (r = 0; r < i.length; r++)
                            if (u = i[r].question, u && (!u.supportGoNextPageAutomatic() || !u.value)) return !1;
                return !0
            }, t.prototype.hasErrors = function (t) {
                void 0 === t && (t = !0);
                var i = this.hasErrorInColumns(t);
                return n.prototype.hasErrors.call(this, t) || i
            }, t.prototype.hasErrorInColumns = function (n) {
                var r, t, u, i;
                if (!this.generatedVisibleRows) return !1;
                for (r = !1, t = 0; t < this.columns.length; t++)
                    for (u = 0; u < this.generatedVisibleRows.length; u++) i = this.generatedVisibleRows[u].cells, r = i && i[t] && i[t].question && i[t].question.hasErrors(n) || r;
                return r
            }, t.prototype.getFirstInputElementId = function () {
                var t = this.getFirstCellQuestion(!1);
                return t ? t.inputId : n.prototype.getFirstInputElementId.call(this)
            }, t.prototype.getFirstErrorInputElementId = function () {
                var t = this.getFirstCellQuestion(!0);
                return t ? t.inputId : n.prototype.getFirstErrorInputElementId.call(this)
            }, t.prototype.getFirstCellQuestion = function (n) {
                var i, r, t;
                if (!this.generatedVisibleRows) return null;
                for (i = 0; i < this.generatedVisibleRows.length; i++)
                    for (r = this.generatedVisibleRows[i].cells, t = 0; t < this.columns.length; t++)
                        if (!n || r[t].question.currentErrorCount > 0) return r[t].question;
                return null
            }, t.prototype.createQuestion = function (n, t) {
                var i = this.createQuestionCore(n, t);
                return i.name = t.name, i.isRequired = t.isRequired, i.hasOther = t.hasOther, i.readOnly = this.readOnly, i.validators = t.validators, i.setData(this.survey), t.hasOther && i instanceof p.b && (i.storeOthersAsComment = !1), i
            }, t.prototype.createQuestionCore = function (n, t) {
                var r = "default" == t.cellType ? this.cellType : t.cellType,
                    i = this.getQuestionName(n, t);
                return "checkbox" == r ? this.createCheckbox(i, t) : "radiogroup" == r ? this.createRadiogroup(i, t) : "text" == r ? this.createText(i, t) : "comment" == r ? this.createComment(i, t) : this.createDropdown(i, t)
            }, t.prototype.getQuestionName = function (n, t) {
                return n.rowName + "_" + t.name
            }, t.prototype.getColumnChoices = function (n) {
                return n.choices && n.choices.length > 0 ? n.choices : this.choices
            }, t.prototype.getColumnOptionsCaption = function (n) {
                return n.optionsCaption ? n.optionsCaption : this.optionsCaption
            }, t.prototype.createDropdown = function (n, t) {
                var i = this.createCellQuestion("dropdown", n);
                return this.setSelectBaseProperties(i, t), i.optionsCaption = this.getColumnOptionsCaption(t), i
            }, t.prototype.createCheckbox = function (n, t) {
                var i = this.createCellQuestion("checkbox", n);
                return this.setSelectBaseProperties(i, t), i.colCount = t.colCount > -1 ? t.colCount : this.columnColCount, i
            }, t.prototype.createRadiogroup = function (n, t) {
                var i = this.createCellQuestion("radiogroup", n);
                return this.setSelectBaseProperties(i, t), i.colCount = t.colCount > -1 ? t.colCount : this.columnColCount, i
            }, t.prototype.setSelectBaseProperties = function (n, t) {
                n.choicesOrder = t.choicesOrder;
                n.choices = this.getColumnChoices(t);
                n.choicesByUrl.setData(t.choicesByUrl);
                n.choicesByUrl.isEmpty || n.choicesByUrl.run()
            }, t.prototype.createText = function (n, t) {
                var i = this.createCellQuestion("text", n);
                return i.inputType = t.inputType, i.placeHolder = t.placeHolder, i
            }, t.prototype.createComment = function (n, t) {
                var i = this.createCellQuestion("comment", n);
                return i.placeHolder = t.placeHolder, i
            }, t.prototype.createCellQuestion = function (n, t) {
                return c.a.Instance.createQuestion(n, t)
            }, t.prototype.deleteRowValue = function (n, t) {
                return delete n[t.rowName], 0 == Object.keys(n).length ? null : n
            }, t.prototype.onRowChanged = function (n, t) {
                var i = this.createNewValue(this.value),
                    r = this.getRowValue(n, i, !0);
                for (var u in r) delete r[u];
                if (t) {
                    t = JSON.parse(JSON.stringify(t));
                    for (u in t) r[u] = t[u]
                }
                0 == Object.keys(r).length && (i = this.deleteRowValue(i, n));
                this.isRowChanging = !0;
                this.setNewValue(i);
                this.isRowChanging = !1
            }, t
        }(v.a);
        s.a.metaData.addClass("matrixdropdowncolumn", ["name", {
            name: "title",
            serializationProperty: "locTitle"
        }, {
                name: "choices:itemvalues",
                onGetValue: function (n) {
                    return r.a.getData(n.choices)
                },
                onSetValue: function (n, t) {
                    n.choices = t
                }
            }, {
                name: "optionsCaption",
                serializationProperty: "locOptionsCaption"
            }, {
                name: "cellType",
                "default": "default",
                choices: ["default", "dropdown", "checkbox", "radiogroup", "text", "comment"]
            }, {
                name: "colCount",
                "default": -1,
                choices: [-1, 0, 1, 2, 3, 4]
            }, "isRequired:boolean", "hasOther:boolean", "minWidth", {
                name: "placeHolder",
                serializationProperty: "locPlaceHolder"
            }, {
                name: "choicesOrder",
                "default": "none",
                choices: ["none", "asc", "desc", "random"]
            }, {
                name: "choicesByUrl:restfull",
                className: "ChoicesRestfull",
                onGetValue: function (n) {
                    return n.choicesByUrl.isEmpty ? null : n.choicesByUrl
                },
                onSetValue: function (n, t) {
                    n.choicesByUrl.setData(t)
                }
            }, {
                name: "inputType",
                "default": "text",
                choices: ["color", "date", "datetime", "datetime-local", "email", "month", "number", "password", "range", "tel", "text", "time", "url", "week"]
            }, {
                name: "validators:validators",
                baseClassName: "surveyvalidator",
                classNamePart: "validator"
            }], function () {
                return new f("")
            });
        s.a.metaData.addClass("matrixdropdownbase", [{
            name: "columns:matrixdropdowncolumns",
            className: "matrixdropdowncolumn"
        }, "horizontalScroll:boolean", {
            name: "choices:itemvalues",
            onGetValue: function (n) {
                return r.a.getData(n.choices)
            },
            onSetValue: function (n, t) {
                n.choices = t
            }
        }, {
            name: "optionsCaption",
            serializationProperty: "locOptionsCaption"
        }, {
            name: "cellType",
            "default": "dropdown",
            choices: ["dropdown", "checkbox", "radiogroup", "text", "comment"]
        }, {
            name: "columnColCount",
            "default": 0,
            choices: [0, 1, 2, 3, 4]
        }, "columnMinWidth"], function () {
            return new e("")
        }, "question")
    }, function (n, t, i) {
        "use strict";
        var f = i(0),
            u = i(5),
            e = i(3),
            o = i(14),
            r;
        i.d(t, "a", function () {
            return r
        });
        r = function (n) {
            function t(i) {
                var r = n.call(this) || this;
                return r.name = i, r.conditionRunner = null, r.customWidgetData = {
                    isNeedRender: !0
                }, r.visibleIf = "", r.visibleValue = !0, r.startWithNewLineValue = !0, r.visibleIndexValue = -1, r.width = "", r.renderWidthValue = "", r.rightIndentValue = 0, r.indent = 0, r.localeChanged = new u.c, r.idValue = t.getQuestionId(), r.onCreating(), r
            }
            return f.b(t, n), t.getQuestionId = function () {
                return "sq_" + t.questionCounter++
            }, Object.defineProperty(t.prototype, "isPanel", {
                get: function () {
                    return !1
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "visible", {
                get: function () {
                    return this.visibleValue
                },
                set: function (n) {
                    n != this.visible && (this.visibleValue = n, this.fireCallback(this.visibilityChangedCallback), this.fireCallback(this.rowVisibilityChangedCallback), this.survey && this.survey.questionVisibilityChanged(this, this.visible))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isVisible", {
                get: function () {
                    return this.visible || this.survey && this.survey.isDesignMode
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isReadOnly", {
                get: function () {
                    return !0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "visibleIndex", {
                get: function () {
                    return this.visibleIndexValue
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.hasErrors = function (n) {
                return void 0 === n && (n = !0), !1
            }, Object.defineProperty(t.prototype, "currentErrorCount", {
                get: function () {
                    return 0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "hasTitle", {
                get: function () {
                    return !1
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "hasInput", {
                get: function () {
                    return !1
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "hasComment", {
                get: function () {
                    return !1
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "id", {
                get: function () {
                    return this.idValue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "startWithNewLine", {
                get: function () {
                    return this.startWithNewLineValue
                },
                set: function (n) {
                    this.startWithNewLine != n && (this.startWithNewLineValue = n, this.startWithNewLineChangedCallback && this.startWithNewLineChangedCallback())
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "renderWidth", {
                get: function () {
                    return this.renderWidthValue
                },
                set: function (n) {
                    n != this.renderWidth && (this.renderWidthValue = n, this.fireCallback(this.renderWidthChangedCallback))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "rightIndent", {
                get: function () {
                    return this.rightIndentValue
                },
                set: function (n) {
                    n != this.rightIndent && (this.rightIndentValue = n, this.fireCallback(this.renderWidthChangedCallback))
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.focus = function (n) {
                void 0 === n && (n = !1)
            }, t.prototype.setData = function (n) {
                this.data = n;
                n && n.questionAdded && (this.surveyValue = n);
                this.onSetData()
            }, Object.defineProperty(t.prototype, "survey", {
                get: function () {
                    return this.surveyValue
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.fireCallback = function (n) {
                n && n()
            }, t.prototype.onSetData = function () { }, t.prototype.onCreating = function () { }, t.prototype.runCondition = function (n) {
                this.visibleIf && (this.conditionRunner || (this.conditionRunner = new o.a(this.visibleIf)), this.conditionRunner.expression = this.visibleIf, this.visible = this.conditionRunner.run(n))
            }, t.prototype.onSurveyValueChanged = function () { }, t.prototype.onSurveyLoad = function () { }, t.prototype.setVisibleIndex = function (n) {
                this.visibleIndexValue != n && (this.visibleIndexValue = n, this.fireCallback(this.visibleIndexChangedCallback))
            }, t.prototype.supportGoNextPageAutomatic = function () {
                return !1
            }, t.prototype.clearUnusedValues = function () { }, t.prototype.onLocaleChanged = function () {
                this.localeChanged.fire(this, this.getLocale())
            }, t.prototype.getLocale = function () {
                return this.data ? this.data.getLocale() : ""
            }, t.prototype.getMarkdownHtml = function (n) {
                return this.data ? this.data.getMarkdownHtml(n) : null
            }, t
        }(u.b);
        r.questionCounter = 100;
        e.a.metaData.addClass("questionbase", ["!name", {
            name: "visible:boolean",
            "default": !0
        }, "visibleIf:expression", {
                name: "width"
            }, {
                name: "startWithNewLine:boolean",
                "default": !0
            }, {
                name: "indent:number",
                "default": 0,
                choices: [0, 1, 2, 3]
            }])
    }, function (n, t, i) {
        "use strict";
        var f = i(0),
            r = i(2),
            u;
        i.n(r);
        i.d(t, "a", function () {
            return u
        });
        u = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.updateStateFunction = null, i.survey = t.survey, i.css = t.css, i.state = {
                    update: 0
                }, i
            }
            return f.b(t, n), t.prototype.componentWillReceiveProps = function (n) {
                this.survey = n.survey;
                this.css = n.css
            }, t.prototype.componentDidMount = function () {
                if (this.survey) {
                    var n = this;
                    this.updateStateFunction = function () {
                        n.state.update = n.state.update + 1;
                        n.setState(n.state)
                    };
                    this.survey.onPageVisibleChanged.add(this.updateStateFunction)
                }
            }, t.prototype.componentWillUnmount = function () {
                this.survey && this.updateStateFunction && (this.survey.onPageVisibleChanged.remove(this.updateStateFunction), this.updateStateFunction = null)
            }, t
        }(r.Component)
    }, function (n, t, i) {
        "use strict";
        var u = i(0),
            f = i(24),
            r;
        i.d(t, "a", function () {
            return r
        });
        r = function (n) {
            function t(t) {
                return void 0 === t && (t = null), n.call(this, t) || this
            }
            return u.b(t, n), t.prototype.render = function () {
                this.renderCallback && this.renderCallback()
            }, t.prototype.mergeCss = function (n, t) {
                this.mergeValues(n, t)
            }, t.prototype.doAfterRenderSurvey = function (n) {
                this.afterRenderSurvey(n)
            }, t.prototype.onLoadSurveyFromService = function () {
                this.render()
            }, t.prototype.onLoadingSurveyFromService = function () {
                this.render()
            }, t
        }(f.a)
    }, function (n, t, i) {
        "use strict";
        var l = i(0),
            s = i(3),
            r = i(5),
            a = i(30),
            v = i(25),
            f = i(18),
            e = i(29),
            o = i(1),
            h = i(9),
            y = i(32),
            u = i(8),
            c;
        i.d(t, "a", function () {
            return c
        });
        c = function (n) {
            function t(t) {
                var i, f;
                return void 0 === t && (t = null), i = n.call(this) || this, i.surveyId = null, i.surveyPostId = null, i.clientId = null, i.cookieName = null, i.sendResultOnPageNext = !1, i.commentPrefix = "-Comment", i.focusFirstQuestionAutomatic = !0, i.showNavigationButtons = !0, i.showTitle = !0, i.showPageTitles = !0, i.showCompletedPage = !0, i.requiredText = "*", i.questionStartIndex = "", i.showProgressBar = "off", i.storeOthersAsComment = !0, i.goNextPageAutomatic = !1, i.pages = [], i.triggers = [], i.clearInvisibleValues = !1, i.currentPageValue = null, i.valuesHash = {}, i.variablesHash = {}, i.showPageNumbersValue = !1, i.showQuestionNumbersValue = "on", i.questionTitleLocationValue = "top", i.localeValue = "", i.isCompleted = !1, i.isLoading = !1, i.processedTextValues = {}, i.isValidatingOnServerValue = !1, i.modeValue = "edit", i.isDesignModeValue = !1, i.onComplete = new r.c, i.onPartialSend = new r.c, i.onCurrentPageChanged = new r.c, i.onValueChanged = new r.c, i.onVisibleChanged = new r.c, i.onPageVisibleChanged = new r.c, i.onQuestionAdded = new r.c, i.onQuestionRemoved = new r.c, i.onPanelAdded = new r.c, i.onPanelRemoved = new r.c, i.onValidateQuestion = new r.c, i.onProcessHtml = new r.c, i.onTextMarkdown = new r.c, i.onSendResult = new r.c, i.onGetResult = new r.c, i.onUploadFile = new r.c, i.onAfterRenderSurvey = new r.c, i.onAfterRenderPage = new r.c, i.onAfterRenderQuestion = new r.c, i.onAfterRenderPanel = new r.c, i.jsonErrors = null, i.isLoadingFromJsonValue = !1, f = i, i.locTitleValue = new u.a(i, !0), i.locTitleValue.onRenderedHtmlCallback = function () {
                    return f.processedTitle
                }, i.locCompletedHtmlValue = new u.a(i), i.locPagePrevTextValue = new u.a(i), i.locPageNextTextValue = new u.a(i), i.locCompleteTextValue = new u.a(i), i.locQuestionTitleTemplateValue = new u.a(i, !0), i.textPreProcessor = new v.a, i.textPreProcessor.onHasValue = function (n) {
                    return f.hasProcessedTextValue(n)
                }, i.textPreProcessor.onProcess = function (n) {
                    return f.getProcessedTextValue(n)
                }, i.pages.push = function (n) {
                    return n.data = f, Array.prototype.push.call(this, n)
                }, i.triggers.push = function (n) {
                    return n.setOwner(f), Array.prototype.push.call(this, n)
                }, i.updateProcessedTextValues(), i.onBeforeCreating(), t && (i.setJsonObject(t), i.surveyId && i.loadSurveyFromService(i.surveyId)), i.onCreating(), i
            }
            return l.b(t, n), t.prototype.getType = function () {
                return "survey"
            }, Object.defineProperty(t.prototype, "locale", {
                get: function () {
                    return this.localeValue
                },
                set: function (n) {
                    this.localeValue = n;
                    o.a.currentLocale = n;
                    for (var t = 0; t < this.pages.length; t++) this.pages[t].onLocaleChanged()
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getLocale = function () {
                return this.locale
            }, t.prototype.getMarkdownHtml = function (n) {
                var t = {
                    text: n,
                    html: null
                };
                return this.onTextMarkdown.fire(this, t), t.html
            }, t.prototype.getLocString = function (n) {
                return o.a.getString(n)
            }, Object.defineProperty(t.prototype, "emptySurveyText", {
                get: function () {
                    return this.getLocString("emptySurvey")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "title", {
                get: function () {
                    return this.locTitle.text
                },
                set: function (n) {
                    this.locTitle.text = n
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "locTitle", {
                get: function () {
                    return this.locTitleValue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "completedHtml", {
                get: function () {
                    return this.locCompletedHtml.text
                },
                set: function (n) {
                    this.locCompletedHtml.text = n
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "locCompletedHtml", {
                get: function () {
                    return this.locCompletedHtmlValue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "pagePrevText", {
                get: function () {
                    return this.locPagePrevText.text ? this.locPagePrevText.text : this.getLocString("pagePrevText")
                },
                set: function (n) {
                    this.locPagePrevText.text = n
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "locPagePrevText", {
                get: function () {
                    return this.locPagePrevTextValue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "pageNextText", {
                get: function () {
                    return this.locPageNextText.text ? this.locPageNextText.text : this.getLocString("pageNextText")
                },
                set: function (n) {
                    this.locPageNextText.text = n
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "locPageNextText", {
                get: function () {
                    return this.locPageNextTextValue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "completeText", {
                get: function () {
                    return this.locCompleteText.text ? this.locCompleteText.text : this.getLocString("completeText")
                },
                set: function (n) {
                    this.locCompleteText.text = n
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "locCompleteText", {
                get: function () {
                    return this.locCompleteTextValue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "questionTitleTemplate", {
                get: function () {
                    return this.locQuestionTitleTemplate.text
                },
                set: function (n) {
                    this.locQuestionTitleTemplate.text = n
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getQuestionTitleTemplate = function () {
                return this.locQuestionTitleTemplate.textOrHtml
            }, Object.defineProperty(t.prototype, "locQuestionTitleTemplate", {
                get: function () {
                    return this.locQuestionTitleTemplateValue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "showPageNumbers", {
                get: function () {
                    return this.showPageNumbersValue
                },
                set: function (n) {
                    n !== this.showPageNumbers && (this.showPageNumbersValue = n, this.updateVisibleIndexes())
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "showQuestionNumbers", {
                get: function () {
                    return this.showQuestionNumbersValue
                },
                set: function (n) {
                    n !== this.showQuestionNumbers && (this.showQuestionNumbersValue = n, this.updateVisibleIndexes())
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "processedTitle", {
                get: function () {
                    return this.processText(this.locTitle.textOrHtml)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "questionTitleLocation", {
                get: function () {
                    return this.questionTitleLocationValue
                },
                set: function (n) {
                    n !== this.questionTitleLocationValue && (this.questionTitleLocationValue = n)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "mode", {
                get: function () {
                    return this.modeValue
                },
                set: function (n) {
                    n != this.mode && ("edit" != n && "display" != n || (this.modeValue = n))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "data", {
                get: function () {
                    var n = {};
                    for (var t in this.valuesHash) n[t] = this.valuesHash[t];
                    return n
                },
                set: function (n) {
                    if (this.valuesHash = {}, n)
                        for (var t in n) this._setDataValue(n, t), this.checkTriggers(t, n[t], !1), this.processedTextValues[t.toLowerCase()] || (this.processedTextValues[t.toLowerCase()] = "value");
                    this.notifyAllQuestionsOnValueChanged();
                    this.runConditions()
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype._setDataValue = function (n, t) {
                this.valuesHash[t] = n[t]
            }, Object.defineProperty(t.prototype, "comments", {
                get: function () {
                    var t = {};
                    for (var n in this.valuesHash) n.indexOf(this.commentPrefix) > 0 && (t[n] = this.valuesHash[n]);
                    return t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "visiblePages", {
                get: function () {
                    if (this.isDesignMode) return this.pages;
                    for (var t = [], n = 0; n < this.pages.length; n++) this.pages[n].isVisible && t.push(this.pages[n]);
                    return t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isEmpty", {
                get: function () {
                    return 0 == this.pages.length
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "PageCount", {
                get: function () {
                    return this.pages.length
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "visiblePageCount", {
                get: function () {
                    return this.visiblePages.length
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "currentPage", {
                get: function () {
                    var n = this.visiblePages;
                    return null != this.currentPageValue && n.indexOf(this.currentPageValue) < 0 && (this.currentPage = null), null == this.currentPageValue && n.length > 0 && (this.currentPage = n[0]), this.currentPageValue
                },
                set: function (n) {
                    var i = this.visiblePages,
                        t;
                    null != n && i.indexOf(n) < 0 || n == this.currentPageValue || (t = this.currentPageValue, this.currentPageValue = n, this.updateCustomWidgets(n), this.currentPageChanged(n, t))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "currentPageNo", {
                get: function () {
                    return this.visiblePages.indexOf(this.currentPage)
                },
                set: function (n) {
                    this.visiblePages;
                    n < 0 || n >= this.visiblePages.length || (this.currentPage = this.visiblePages[n])
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.focusFirstQuestion = function () {
                this.currentPageValue && (this.currentPageValue.scrollToTop(), this.currentPageValue.focusFirstQuestion())
            }, Object.defineProperty(t.prototype, "state", {
                get: function () {
                    return this.isLoading ? "loading" : this.isCompleted ? "completed" : this.currentPage ? "running" : "empty"
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.clear = function (n, t) {
                void 0 === n && (n = !0);
                void 0 === t && (t = !0);
                n && (this.data = null, this.variablesHash = {});
                this.isCompleted = !1;
                t && this.visiblePageCount > 0 && (this.currentPage = this.visiblePages[0])
            }, t.prototype.mergeValues = function (n, t) {
                var i, r;
                if (t && n)
                    for (i in n) r = n[i], r && "object" == typeof r ? (t[i] || (t[i] = {}), this.mergeValues(r, t[i])) : t[i] = r
            }, t.prototype.updateCustomWidgets = function (n) {
                if (n)
                    for (var t = 0; t < n.questions.length; t++) n.questions[t].customWidget = y.a.Instance.getCustomWidget(n.questions[t])
            }, t.prototype.currentPageChanged = function (n, t) {
                this.onCurrentPageChanged.fire(this, {
                    oldCurrentPage: t,
                    newCurrentPage: n
                })
            }, t.prototype.getProgress = function () {
                if (null == this.currentPage) return 0;
                var n = this.visiblePages.indexOf(this.currentPage) + 1;
                return Math.ceil(100 * n / this.visiblePageCount)
            }, Object.defineProperty(t.prototype, "isNavigationButtonsShowing", {
                get: function () {
                    if (this.isDesignMode) return !1;
                    var n = this.currentPage;
                    return !!n && ("show" == n.navigationButtonsVisibility || "hide" != n.navigationButtonsVisibility && this.showNavigationButtons)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isEditMode", {
                get: function () {
                    return "edit" == this.mode
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isDisplayMode", {
                get: function () {
                    return "display" == this.mode
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isDesignMode", {
                get: function () {
                    return this.isDesignModeValue
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.setDesignMode = function (n) {
                this.isDesignModeValue = n
            }, Object.defineProperty(t.prototype, "hasCookie", {
                get: function () {
                    if (!this.cookieName) return !1;
                    var n = document.cookie;
                    return n && n.indexOf(this.cookieName + "=true") > -1
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.setCookie = function () {
                this.cookieName && (document.cookie = this.cookieName + "=true; expires=Fri, 31 Dec 9999 0:0:0 GMT")
            }, t.prototype.deleteCookie = function () {
                this.cookieName && (document.cookie = this.cookieName + "=;")
            }, t.prototype.nextPage = function () {
                return !this.isLastPage && (!this.isEditMode || !this.isCurrentPageHasErrors) && !this.doServerValidation() && (this.doNextPage(), !0)
            }, Object.defineProperty(t.prototype, "isCurrentPageHasErrors", {
                get: function () {
                    return null == this.currentPage || this.currentPage.hasErrors(!0, !0)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.prevPage = function () {
                if (this.isFirstPage) return !1;
                var n = this.visiblePages,
                    t = n.indexOf(this.currentPage);
                this.currentPage = n[t - 1]
            }, t.prototype.completeLastPage = function () {
                return (!this.isEditMode || !this.isCurrentPageHasErrors) && !this.doServerValidation() && (this.doComplete(), !0)
            }, Object.defineProperty(t.prototype, "isFirstPage", {
                get: function () {
                    return null == this.currentPage || 0 == this.visiblePages.indexOf(this.currentPage)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isLastPage", {
                get: function () {
                    if (null == this.currentPage) return !0;
                    var n = this.visiblePages;
                    return n.indexOf(this.currentPage) == n.length - 1
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.doComplete = function () {
                this.clearUnusedValues();
                this.setCookie();
                this.setCompleted();
                this.onComplete.fire(this, null);
                this.surveyPostId && this.sendResult()
            }, Object.defineProperty(t.prototype, "isValidatingOnServer", {
                get: function () {
                    return this.isValidatingOnServerValue
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.setIsValidatingOnServer = function (n) {
                n != this.isValidatingOnServer && (this.isValidatingOnServerValue = n, this.onIsValidatingOnServerChanged())
            }, t.prototype.onIsValidatingOnServerChanged = function () { }, t.prototype.doServerValidation = function () {
                var n, u;
                if (!this.onServerValidateQuestions) return !1;
                for (var f = this, t = {
                    data: {},
                    errors: {},
                    survey: this,
                    complete: function () {
                        f.completeServerValidation(t)
                    }
                }, i = 0; i < this.currentPage.questions.length; i++) n = this.currentPage.questions[i], n.visible && (u = this.getValue(n.name), r.b.isValueEmpty(u) || (t.data[n.name] = u));
                return this.setIsValidatingOnServer(!0), this.onServerValidateQuestions(this, t), !0
            }, t.prototype.completeServerValidation = function (n) {
                var t, r, u, i;
                if (this.setIsValidatingOnServer(!1), n || n.survey) {
                    if (t = n.survey, r = !1, n.errors)
                        for (u in n.errors) i = t.getQuestionByName(u), i && i.errors && (r = !0, i.addError(new h.c(n.errors[u])));
                    r || (t.isLastPage ? t.doComplete() : t.doNextPage())
                }
            }, t.prototype.doNextPage = function () {
                this.checkOnPageTriggers();
                this.sendResultOnPageNext && this.sendResult(this.surveyPostId, this.clientId, !0);
                var n = this.visiblePages,
                    t = n.indexOf(this.currentPage);
                this.currentPage = n[t + 1]
            }, t.prototype.setCompleted = function () {
                this.isCompleted = !0
            }, Object.defineProperty(t.prototype, "processedCompletedHtml", {
                get: function () {
                    return this.completedHtml ? this.processHtml(this.completedHtml) : "<h3>" + this.getLocString("completingSurvey") + "<\/h3>"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "processedLoadingHtml", {
                get: function () {
                    return "<h3>" + this.getLocString("loadingSurvey") + "<\/h3>"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "progressText", {
                get: function () {
                    if (null == this.currentPage) return "";
                    var n = this.visiblePages,
                        t = n.indexOf(this.currentPage) + 1;
                    return this.getLocString("progressText").format(t, n.length)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.afterRenderSurvey = function (n) {
                this.onAfterRenderSurvey.fire(this, {
                    survey: this,
                    htmlElement: n
                })
            }, t.prototype.afterRenderPage = function (n) {
                this.onAfterRenderPage.isEmpty || this.onAfterRenderPage.fire(this, {
                    page: this.currentPage,
                    htmlElement: n
                })
            }, t.prototype.afterRenderQuestion = function (n, t) {
                this.onAfterRenderQuestion.fire(this, {
                    question: n,
                    htmlElement: t
                })
            }, t.prototype.afterRenderPanel = function (n, t) {
                this.onAfterRenderPanel.fire(this, {
                    panel: n,
                    htmlElement: t
                })
            }, t.prototype.uploadFile = function (n, t, i, r) {
                var u = !0;
                return this.onUploadFile.fire(this, {
                    name: n,
                    file: t,
                    accept: u
                }), !!u && (!i && this.surveyPostId && this.uploadFileCore(n, t, r), !0)
            }, t.prototype.uploadFileCore = function (n, t, i) {
                var r = this;
                i && i("uploading");
                (new e.a).sendFile(this.surveyPostId, t, function (t, u) {
                    i && i(t ? "success" : "error");
                    t && r.setValue(n, u)
                })
            }, t.prototype.getPage = function (n) {
                return this.pages[n]
            }, t.prototype.addPage = function (n) {
                null != n && (this.pages.push(n), this.updateVisibleIndexes())
            }, t.prototype.addNewPage = function (n) {
                var t = this.createNewPage(n);
                return this.addPage(t), t
            }, t.prototype.removePage = function (n) {
                var t = this.pages.indexOf(n);
                t < 0 || (this.pages.splice(t, 1), this.currentPageValue == n && (this.currentPage = this.pages.length > 0 ? this.pages[0] : null), this.updateVisibleIndexes())
            }, t.prototype.getQuestionByName = function (n, t) {
                var r, i, u;
                for (void 0 === t && (t = !1), r = this.getAllQuestions(), t && (n = n.toLowerCase()), i = 0; i < r.length; i++)
                    if (u = r[i].name, t && (u = u.toLowerCase()), u == n) return r[i];
                return null
            }, t.prototype.getQuestionsByNames = function (n, t) {
                var r, i, u;
                if (void 0 === t && (t = !1), r = [], !n) return r;
                for (i = 0; i < n.length; i++) n[i] && (u = this.getQuestionByName(n[i], t), u && r.push(u));
                return r
            }, t.prototype.getPageByElement = function (n) {
                for (var i, t = 0; t < this.pages.length; t++)
                    if (i = this.pages[t], i.containsElement(n)) return i;
                return null
            }, t.prototype.getPageByQuestion = function (n) {
                return this.getPageByElement(n)
            }, t.prototype.getPageByName = function (n) {
                for (var t = 0; t < this.pages.length; t++)
                    if (this.pages[t].name == n) return this.pages[t];
                return null
            }, t.prototype.getPagesByNames = function (n) {
                var i = [],
                    t, r;
                if (!n) return i;
                for (t = 0; t < n.length; t++) n[t] && (r = this.getPageByName(n[t]), r && i.push(r));
                return i
            }, t.prototype.getAllQuestions = function (n) {
                void 0 === n && (n = !1);
                for (var i = [], t = 0; t < this.pages.length; t++) this.pages[t].addQuestionsToList(i, n);
                return i
            }, t.prototype.createNewPage = function (n) {
                return new a.a(n)
            }, t.prototype.notifyQuestionOnValueChanged = function (n, t) {
                for (var r = this.getAllQuestions(), u = null, i = 0; i < r.length; i++) r[i].name == n && (u = r[i], this.doSurveyValueChanged(u, t));
                this.onValueChanged.fire(this, {
                    name: n,
                    question: u,
                    value: t
                })
            }, t.prototype.notifyAllQuestionsOnValueChanged = function () {
                for (var t = this.getAllQuestions(), n = 0; n < t.length; n++) this.doSurveyValueChanged(t[n], this.getValue(t[n].name))
            }, t.prototype.doSurveyValueChanged = function (n, t) {
                n.onSurveyValueChanged(t)
            }, t.prototype.checkOnPageTriggers = function () {
                for (var i, r, t = this.getCurrentPageQuestions(), n = 0; n < t.length; n++) i = t[n], r = this.getValue(i.name), this.checkTriggers(i.name, r, !0)
            }, t.prototype.getCurrentPageQuestions = function () {
                var i = [],
                    r = this.currentPage,
                    n, t;
                if (!r) return i;
                for (n = 0; n < r.questions.length; n++) t = r.questions[n], t.visible && t.name && i.push(t);
                return i
            }, t.prototype.checkTriggers = function (n, t, i) {
                for (var u, r = 0; r < this.triggers.length; r++) u = this.triggers[r], u.name == n && u.isOnNextPage == i && u.check(t)
            }, t.prototype.doElementsOnLoad = function () {
                for (var n = 0; n < this.pages.length; n++) this.pages[n].onSurveyLoad()
            }, t.prototype.runConditions = function () {
                for (var t = this.pages, n = 0; n < t.length; n++) t[n].runCondition(this.valuesHash)
            }, t.prototype.sendResult = function (n, t, i) {
                if (void 0 === n && (n = null), void 0 === t && (t = null), void 0 === i && (i = !1), this.isEditMode && (i && this.onPartialSend && this.onPartialSend.fire(this, null), !n && this.surveyPostId && (n = this.surveyPostId), n && (t && (this.clientId = t), !i || this.clientId))) {
                    var r = this;
                    (new e.a).sendResult(n, this.data, function (n, t) {
                        r.onSendResult.fire(r, {
                            success: n,
                            response: t
                        })
                    }, this.clientId, i)
                }
            }, t.prototype.getResult = function (n, t) {
                var i = this;
                (new e.a).getResult(n, t, function (n, t, r, u) {
                    i.onGetResult.fire(i, {
                        success: n,
                        data: t,
                        dataList: r,
                        response: u
                    })
                })
            }, t.prototype.loadSurveyFromService = function (n) {
                void 0 === n && (n = null);
                n && (this.surveyId = n);
                var t = this;
                this.isLoading = !0;
                this.onLoadingSurveyFromService();
                (new e.a).loadSurvey(this.surveyId, function (n, i) {
                    t.isLoading = !1;
                    n && i && (t.setJsonObject(i), t.notifyAllQuestionsOnValueChanged(), t.onLoadSurveyFromService())
                })
            }, t.prototype.onLoadingSurveyFromService = function () { }, t.prototype.onLoadSurveyFromService = function () { }, t.prototype.checkPageVisibility = function (n, t) {
                var i = this.getPageByQuestion(n),
                    r;
                i && (r = i.isVisible, (r != i.getIsPageVisible(n) || t) && this.pageVisibilityChanged(i, r))
            }, t.prototype.updateVisibleIndexes = function () {
                if (this.updatePageVisibleIndexes(this.showPageNumbers), "onPage" == this.showQuestionNumbers)
                    for (var t = this.visiblePages, n = 0; n < t.length; n++) this.updateQuestionVisibleIndexes(t[n].questions, !0);
                else this.updateQuestionVisibleIndexes(this.getAllQuestions(!1), "on" == this.showQuestionNumbers)
            }, t.prototype.updatePageVisibleIndexes = function (n) {
                for (var i = 0, t = 0; t < this.pages.length; t++) this.pages[t].visibleIndex = this.pages[t].visible ? i++ : -1, this.pages[t].num = n && this.pages[t].visible ? this.pages[t].visibleIndex + 1 : -1
            }, t.prototype.updateQuestionVisibleIndexes = function (n, t) {
                for (var r = 0, i = 0; i < n.length; i++) n[i].setVisibleIndex(t && n[i].visible && n[i].hasTitle ? r++ : -1)
            }, Object.defineProperty(t.prototype, "isLoadingFromJson", {
                get: function () {
                    return this.isLoadingFromJsonValue
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.setJsonObject = function (n) {
                if (n) {
                    this.jsonErrors = null;
                    this.isLoadingFromJsonValue = !0;
                    var t = new s.a;
                    t.toObject(n, this);
                    t.errors.length > 0 && (this.jsonErrors = t.errors);
                    this.isLoadingFromJsonValue = !1;
                    this.updateProcessedTextValues();
                    this.hasCookie && this.doComplete();
                    this.doElementsOnLoad();
                    this.runConditions();
                    this.updateVisibleIndexes()
                }
            }, t.prototype.onBeforeCreating = function () { }, t.prototype.onCreating = function () { }, t.prototype.updateProcessedTextValues = function () {
                var n, i, t;
                for (this.processedTextValues = {}, n = this, this.processedTextValues.pageno = function () {
                    return null != n.currentPage ? n.visiblePages.indexOf(n.currentPage) + 1 : 0
                }, this.processedTextValues.pagecount = function () {
                    return n.visiblePageCount
                }, i = this.getAllQuestions(), t = 0; t < i.length; t++) this.addQuestionToProcessedTextValues(i[t])
            }, t.prototype.addQuestionToProcessedTextValues = function (n) {
                this.processedTextValues[n.name.toLowerCase()] = "question"
            }, t.prototype.hasProcessedTextValue = function (n) {
                var t = (new f.a).getFirstName(n);
                return this.processedTextValues[t.toLowerCase()]
            }, t.prototype.getProcessedTextValue = function (n) {
                var i = (new f.a).getFirstName(n),
                    t = this.processedTextValues[i.toLowerCase()],
                    r;
                return t ? "variable" == t ? this.getVariable(n.toLowerCase()) : "question" == t ? (r = this.getQuestionByName(i, !0), r ? (n = r.name + n.substr(i.length), (new f.a).getValue(n, this.valuesHash)) : null) : "value" == t ? (new f.a).getValue(n, this.valuesHash) : t(n) : null
            }, t.prototype.clearUnusedValues = function () {
                for (var t = this.getAllQuestions(), n = 0; n < t.length; n++) t[n].clearUnusedValues();
                this.clearInvisibleValues && this.clearInvisibleQuestionValues()
            }, t.prototype.clearInvisibleQuestionValues = function () {
                for (var t = this.getAllQuestions(), n = 0; n < t.length; n++) t[n].visible || this.clearValue(t[n].name)
            }, t.prototype.getVariable = function (n) {
                return n ? this.variablesHash[n] : null
            }, t.prototype.setVariable = function (n, t) {
                n && (this.variablesHash[n] = t, this.processedTextValues[n.toLowerCase()] = "variable")
            }, t.prototype.getUnbindValue = function (n) {
                return n && n instanceof Object ? JSON.parse(JSON.stringify(n)) : n
            }, t.prototype.getValue = function (n) {
                if (!n || 0 == n.length) return null;
                var t = this.valuesHash[n];
                return this.getUnbindValue(t)
            }, t.prototype.setValue = function (n, t) {
                this.isValueEqual(n, t) || ("" === t || null === t ? delete this.valuesHash[n] : (t = this.getUnbindValue(t), this.valuesHash[n] = t, this.processedTextValues[n.toLowerCase()] = "value"), this.notifyQuestionOnValueChanged(n, t), this.checkTriggers(n, t, !1), this.runConditions(), this.tryGoNextPageAutomatic(n))
            }, t.prototype.isValueEqual = function (n, t) {
                "" == t && (t = null);
                var i = this.getValue(n);
                return null === t || null === i ? t === i : this.isTwoValueEquals(t, i)
            }, t.prototype.tryGoNextPageAutomatic = function (n) {
                var i, u, t, f;
                if (this.goNextPageAutomatic && this.currentPage && (i = this.getQuestionByName(n), !i || i.visible && i.supportGoNextPageAutomatic())) {
                    for (u = this.getCurrentPageQuestions(), t = 0; t < u.length; t++)
                        if (f = this.getValue(u[t].name), u[t].hasInput && r.b.isValueEmpty(f)) return;
                    this.currentPage.hasErrors(!0, !1) || (this.isLastPage ? this.doComplete() : this.nextPage())
                }
            }, t.prototype.getComment = function (n) {
                var t = this.data[n + this.commentPrefix];
                return null == t && (t = ""), t
            }, t.prototype.setComment = function (n, t) {
                var i = n + this.commentPrefix,
                    r;
                "" === t || null === t ? delete this.valuesHash[i] : (this.valuesHash[i] = t, this.tryGoNextPageAutomatic(n));
                r = this.getQuestionByName(n);
                r && this.onValueChanged.fire(this, {
                    name: i,
                    question: r,
                    value: t
                })
            }, t.prototype.clearValue = function (n) {
                this.setValue(n, null);
                this.setComment(n, null)
            }, t.prototype.questionVisibilityChanged = function (n, t) {
                this.updateVisibleIndexes();
                this.onVisibleChanged.fire(this, {
                    question: n,
                    name: n.name,
                    visible: t
                });
                this.checkPageVisibility(n, !t)
            }, t.prototype.pageVisibilityChanged = function (n, t) {
                this.updateVisibleIndexes();
                this.onPageVisibleChanged.fire(this, {
                    page: n,
                    visible: t
                })
            }, t.prototype.questionAdded = function (n, t, i, r) {
                this.updateVisibleIndexes();
                this.addQuestionToProcessedTextValues(n);
                this.onQuestionAdded.fire(this, {
                    question: n,
                    name: n.name,
                    index: t,
                    parentPanel: i,
                    rootPanel: r
                })
            }, t.prototype.questionRemoved = function (n) {
                this.updateVisibleIndexes();
                this.onQuestionRemoved.fire(this, {
                    question: n,
                    name: n.name
                })
            }, t.prototype.panelAdded = function (n, t, i, r) {
                this.updateVisibleIndexes();
                this.onPanelAdded.fire(this, {
                    panel: n,
                    name: n.name,
                    index: t,
                    parentPanel: i,
                    rootPanel: r
                })
            }, t.prototype.panelRemoved = function (n) {
                this.updateVisibleIndexes();
                this.onPanelRemoved.fire(this, {
                    panel: n,
                    name: n.name
                })
            }, t.prototype.validateQuestion = function (n) {
                if (this.onValidateQuestion.isEmpty) return null;
                var t = {
                    name: n,
                    value: this.getValue(n),
                    error: null
                };
                return this.onValidateQuestion.fire(this, t), t.error ? new h.c(t.error) : null
            }, t.prototype.processHtml = function (n) {
                var t = {
                    html: n
                };
                return this.onProcessHtml.fire(this, t), this.processText(t.html)
            }, t.prototype.processText = function (n) {
                return this.textPreProcessor.process(n)
            }, t.prototype.getObjects = function (n, t) {
                var i = [];
                return Array.prototype.push.apply(i, this.getPagesByNames(n)), Array.prototype.push.apply(i, this.getQuestionsByNames(t)), i
            }, t.prototype.setTriggerValue = function (n, t, i) {
                n && (i ? this.setVariable(n, t) : this.setValue(n, t))
            }, t
        }(r.b);
        s.a.metaData.addClass("survey", [{
            name: "locale",
            choices: function () {
                return o.a.getLocales()
            }
        }, {
            name: "title",
            serializationProperty: "locTitle"
        }, {
            name: "focusFirstQuestionAutomatic:boolean",
            "default": !0
        }, {
            name: "completedHtml:html",
            serializationProperty: "locCompletedHtml"
        }, {
            name: "pages",
            className: "page",
            visible: !1
        }, {
            name: "questions",
            baseClassName: "question",
            visible: !1,
            onGetValue: function () {
                return null
            },
            onSetValue: function (n, t, i) {
                var r = n.addNewPage("");
                i.toObject({
                    questions: t
                }, r)
            }
        }, {
            name: "triggers:triggers",
            baseClassName: "surveytrigger",
            classNamePart: "trigger"
        }, "surveyId", "surveyPostId", "cookieName", "sendResultOnPageNext:boolean", {
            name: "showNavigationButtons:boolean",
            "default": !0
        }, {
            name: "showTitle:boolean",
            "default": !0
        }, {
            name: "showPageTitles:boolean",
            "default": !0
        }, {
            name: "showCompletedPage:boolean",
            "default": !0
        }, "showPageNumbers:boolean", {
            name: "showQuestionNumbers",
            "default": "on",
            choices: ["on", "onPage", "off"]
        }, {
            name: "questionTitleLocation",
            "default": "top",
            choices: ["top", "bottom"]
        }, {
            name: "showProgressBar",
            "default": "off",
            choices: ["off", "top", "bottom"]
        }, {
            name: "mode",
            "default": "edit",
            choices: ["edit", "display"]
        }, {
            name: "storeOthersAsComment:boolean",
            "default": !0
        }, "goNextPageAutomatic:boolean", "clearInvisibleValues:boolean", {
            name: "pagePrevText",
            serializationProperty: "locPagePrevText"
        }, {
            name: "pageNextText",
            serializationProperty: "locPageNextText"
        }, {
            name: "completeText",
            serializationProperty: "locCompleteText"
        }, {
            name: "requiredText",
            "default": "*"
        }, "questionStartIndex", {
            name: "questionTitleTemplate",
            serializationProperty: "locQuestionTitleTemplate"
        }])
    }, function (n, t, i) {
        "use strict";
        i.d(t, "a", function () {
            return u
        });
        var r = function () {
            function n() { }
            return n
        }(),
            u = function () {
                function n() { }
                return n.prototype.process = function (n) {
                    var f, i, t, r, u;
                    if (!n || !this.onProcess) return n;
                    for (f = this.getItems(n), i = f.length - 1; i >= 0; i--) t = f[i], r = this.getName(n.substring(t.start + 1, t.end)), this.canProcessName(r) && (!this.onHasValue || this.onHasValue(r)) && (u = this.onProcess(r), null == u && (u = ""), n = n.substr(0, t.start) + u + n.substr(t.end + 1));
                    return n
                }, n.prototype.getItems = function (n) {
                    for (var u, e = [], o = n.length, i = -1, f = "", t = 0; t < o; t++)(f = n[t], "{" == f && (i = t), "}" == f) && (i > -1 && (u = new r, u.start = i, u.end = t, e.push(u)), i = -1);
                    return e
                }, n.prototype.getName = function (n) {
                    if (n) return n.trim()
                }, n.prototype.canProcessName = function (n) {
                    var t, i;
                    if (!n) return !1;
                    for (t = 0; t < n.length; t++)
                        if (i = n[t], " " == i || "-" == i || "&" == i) return !1;
                    return !0
                }, n
            }()
    }, function (n, t, i) {
        "use strict";
        var e = i(0),
            y = i(5),
            r = i(9),
            u = i(1),
            o = i(3);
        i.d(t, "h", function () {
            return f
        });
        i.d(t, "f", function () {
            return s
        });
        i.d(t, "a", function () {
            return p
        });
        i.d(t, "d", function () {
            return h
        });
        i.d(t, "g", function () {
            return c
        });
        i.d(t, "b", function () {
            return l
        });
        i.d(t, "e", function () {
            return a
        });
        i.d(t, "c", function () {
            return v
        });
        var f = function () {
            function n(n, t) {
                void 0 === t && (t = null);
                this.value = n;
                this.error = t
            }
            return n
        }(),
            s = function (n) {
                function t() {
                    var t = n.call(this) || this;
                    return t.text = "", t
                }
                return e.b(t, n), t.prototype.getErrorText = function (n) {
                    return this.text ? this.text : this.getDefaultErrorText(n)
                }, t.prototype.getDefaultErrorText = function () {
                    return ""
                }, t.prototype.validate = function (n, t) {
                    return void 0 === t && (t = null), null
                }, t
            }(y.b),
            p = function () {
                function n() { }
                return n.prototype.run = function (n) {
                    for (var t, i = 0; i < n.validators.length; i++)
                        if (t = n.validators[i].validate(n.value, n.getValidatorTitle()), null != t) {
                            if (t.error) return t.error;
                            t.value && (n.value = t.value)
                        }
                    return null
                }, n
            }(),
            h = function (n) {
                function t(t, i) {
                    void 0 === t && (t = null);
                    void 0 === i && (i = null);
                    var r = n.call(this) || this;
                    return r.minValue = t, r.maxValue = i, r
                }
                return e.b(t, n), t.prototype.getType = function () {
                    return "numericvalidator"
                }, t.prototype.validate = function (n, t) {
                    if (void 0 === t && (t = null), !n || !this.isNumber(n)) return new f(null, new r.b);
                    var i = new f(parseFloat(n));
                    return this.minValue && this.minValue > i.value ? (i.error = new r.c(this.getErrorText(t)), i) : this.maxValue && this.maxValue < i.value ? (i.error = new r.c(this.getErrorText(t)), i) : "number" == typeof n ? null : i
                }, t.prototype.getDefaultErrorText = function (n) {
                    var t = n || "value";
                    return this.minValue && this.maxValue ? u.a.getString("numericMinMax").format(t, this.minValue, this.maxValue) : this.minValue ? u.a.getString("numericMin").format(t, this.minValue) : u.a.getString("numericMax").format(t, this.maxValue)
                }, t.prototype.isNumber = function (n) {
                    return !isNaN(parseFloat(n)) && isFinite(n)
                }, t
            }(s),
            c = function (n) {
                function t(t, i) {
                    void 0 === t && (t = 0);
                    void 0 === i && (i = 0);
                    var r = n.call(this) || this;
                    return r.minLength = t, r.maxLength = i, r
                }
                return e.b(t, n), t.prototype.getType = function () {
                    return "textvalidator"
                }, t.prototype.validate = function (n, t) {
                    return void 0 === t && (t = null), this.minLength > 0 && n.length < this.minLength ? new f(null, new r.c(this.getErrorText(t))) : this.maxLength > 0 && n.length > this.maxLength ? new f(null, new r.c(this.getErrorText(t))) : null
                }, t.prototype.getDefaultErrorText = function () {
                    return this.minLength > 0 && this.maxLength > 0 ? u.a.getString("textMinMaxLength").format(this.minLength, this.maxLength) : this.minLength > 0 ? u.a.getString("textMinLength").format(this.minLength) : u.a.getString("textMaxLength").format(this.maxLength)
                }, t
            }(s),
            l = function (n) {
                function t(t, i) {
                    void 0 === t && (t = null);
                    void 0 === i && (i = null);
                    var r = n.call(this) || this;
                    return r.minCount = t, r.maxCount = i, r
                }
                return e.b(t, n), t.prototype.getType = function () {
                    return "answercountvalidator"
                }, t.prototype.validate = function (n, t) {
                    if (void 0 === t && (t = null), null == n || n.constructor != Array) return null;
                    var i = n.length;
                    return this.minCount && i < this.minCount ? new f(null, new r.c(this.getErrorText(u.a.getString("minSelectError").format(this.minCount)))) : this.maxCount && i > this.maxCount ? new f(null, new r.c(this.getErrorText(u.a.getString("maxSelectError").format(this.maxCount)))) : null
                }, t.prototype.getDefaultErrorText = function (n) {
                    return n
                }, t
            }(s),
            a = function (n) {
                function t(t) {
                    void 0 === t && (t = null);
                    var i = n.call(this) || this;
                    return i.regex = t, i
                }
                return e.b(t, n), t.prototype.getType = function () {
                    return "regexvalidator"
                }, t.prototype.validate = function (n, t) {
                    return void 0 === t && (t = null), this.regex && n ? new RegExp(this.regex).test(n) ? null : new f(n, new r.c(this.getErrorText(t))) : null
                }, t
            }(s),
            v = function (n) {
                function t() {
                    var t = n.call(this) || this;
                    return t.re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, t
                }
                return e.b(t, n), t.prototype.getType = function () {
                    return "emailvalidator"
                }, t.prototype.validate = function (n, t) {
                    return void 0 === t && (t = null), n ? this.re.test(n) ? null : new f(n, new r.c(this.getErrorText(t))) : null
                }, t.prototype.getDefaultErrorText = function () {
                    return u.a.getString("invalidEmail")
                }, t
            }(s);
        o.a.metaData.addClass("surveyvalidator", ["text"]);
        o.a.metaData.addClass("numericvalidator", ["minValue:number", "maxValue:number"], function () {
            return new h
        }, "surveyvalidator");
        o.a.metaData.addClass("textvalidator", ["minLength:number", "maxLength:number"], function () {
            return new c
        }, "surveyvalidator");
        o.a.metaData.addClass("answercountvalidator", ["minCount:number", "maxCount:number"], function () {
            return new l
        }, "surveyvalidator");
        o.a.metaData.addClass("regexvalidator", ["regex"], function () {
            return new a
        }, "surveyvalidator");
        o.a.metaData.addClass("emailvalidator", [], function () {
            return new v
        }, "surveyvalidator")
    }, function (n, t, i) {
        "use strict";
        var f = i(0),
            r = i(2),
            e = (i.n(r), i(16)),
            u;
        i.d(t, "a", function () {
            return u
        });
        u = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.handleOnExpanded = i.handleOnExpanded.bind(i), i
            }
            return f.b(t, n), t.prototype.handleOnExpanded = function () {
                this.state.expanded = !this.state.expanded;
                this.setState(this.state)
            }, t.prototype.render = function () {
                if (this.state.hidden) return null;
                var n = this.renderHeader(),
                    t = this.state.expanded ? this.renderBody() : null;
                return r.createElement("div", {
                    className: this.css.window.root,
                    style: {
                        position: "fixed",
                        bottom: "3px",
                        right: "10px"
                    }
                }, n, t)
            }, t.prototype.renderHeader = function () {
                var n = this.state.expanded ? this.css.window.header.buttonCollapsed : this.css.window.header.buttonExpanded;
                return n = "glyphicon pull-right " + n, r.createElement("div", {
                    className: this.css.window.header.root
                }, r.createElement("a", {
                    href: "#",
                    onClick: this.handleOnExpanded,
                    style: {
                        width: "100%"
                    }
                }, r.createElement("span", {
                    className: this.css.window.header.title,
                    style: {
                        paddingRight: "10px"
                    }
                }, this.title), r.createElement("span", {
                    className: n,
                    "aria-hidden": "true"
                })))
            }, t.prototype.renderBody = function () {
                return r.createElement("div", {
                    className: this.css.window.body
                }, this.renderSurvey())
            }, t.prototype.updateSurvey = function (t) {
                var r, i;
                n.prototype.updateSurvey.call(this, t);
                this.title = t.title ? t.title : this.survey.title;
                r = !!t.expanded && t.expanded;
                this.state = {
                    expanded: r,
                    hidden: !1
                };
                i = this;
                this.survey.onComplete.add(function () {
                    i.state.hidden = !0;
                    i.setState(i.state)
                })
            }, t
        }(e.a)
    }, function (n, t, i) {
        "use strict";
        var r = i(14),
            u;
        i.d(t, "a", function () {
            return u
        });
        u = function () {
            function n() { }
            return n.prototype.parse = function (n, t) {
                return this.text = n, this.root = t, this.root.clear(), this.at = 0, this.length = this.text.length, this.parseText()
            }, n.prototype.toString = function (n) {
                return this.root = n, this.nodeToString(n)
            }, n.prototype.toStringCore = function (n) {
                return n ? n.children ? this.nodeToString(n) : n.left ? this.conditionToString(n) : "" : ""
            }, n.prototype.nodeToString = function (n) {
                var t, i, r;
                if (n.isEmpty) return "";
                for (t = "", i = 0; i < n.children.length; i++) r = this.toStringCore(n.children[i]), r && (t && (t += " " + n.connective + " "), t += r);
                return n != this.root && n.children.length > 1 && (t = "(" + t + ")"), t
            }, n.prototype.conditionToString = function (n) {
                var t, r, i;
                return !n.right || !n.operator ? "" : (t = n.left, t && !this.isNumeric(t) && (t = "'" + t + "'"), r = t + " " + this.operationToString(n.operator), this.isNoRightOperation(n.operator)) ? r : (i = n.right, i && !this.isNumeric(i) && (i = "'" + i + "'"), r + " " + i)
            }, n.prototype.operationToString = function (n) {
                return "equal" == n ? "=" : "notequal" == n ? "!=" : "greater" == n ? ">" : "less" == n ? "<" : "greaterorequal" == n ? ">=" : "lessorequal" == n ? "<=" : n
            }, n.prototype.isNumeric = function (n) {
                var t = parseFloat(n);
                return !isNaN(t) && isFinite(t)
            }, n.prototype.parseText = function () {
                return this.node = this.root, this.expressionNodes = [], this.expressionNodes.push(this.node), this.readConditions() && this.at >= this.length
            }, n.prototype.readConditions = function () {
                var t = this.readCondition(),
                    n;
                return t ? (n = this.readConnective(), !n || (this.addConnective(n), this.readConditions())) : t
            }, n.prototype.readCondition = function () {
                var f = this.readExpression(),
                    i, t, n, u;
                if (f < 0) return !1;
                if (1 == f) return !0;
                if ((i = this.readString(), !i) || (t = this.readOperator(), !t)) return !1;
                if (n = new r.b, n.left = i, n.operator = t, !this.isNoRightOperation(t)) {
                    if (u = this.readString(), !u) return !1;
                    n.right = u
                }
                return this.addCondition(n), !0
            }, n.prototype.readExpression = function () {
                if (this.skip(), this.at >= this.length || "(" != this.ch) return 0;
                this.at++;
                this.pushExpression();
                var n = this.readConditions();
                return n ? (this.skip(), n = ")" == this.ch, this.at++ , this.popExpression(), 1) : -1
            }, Object.defineProperty(n.prototype, "ch", {
                get: function () {
                    return this.text.charAt(this.at)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.skip = function () {
                for (; this.at < this.length && this.isSpace(this.ch);) this.at++
            }, n.prototype.isSpace = function (n) {
                return " " == n || "\n" == n || "\t" == n || "\r" == n
            }, n.prototype.isQuotes = function (n) {
                return "'" == n || '"' == n
            }, n.prototype.isOperatorChar = function (n) {
                return ">" == n || "<" == n || "=" == n || "!" == n
            }, n.prototype.isBrackets = function (n) {
                return "(" == n || ")" == n
            }, n.prototype.readString = function () {
                var i, t, u, n, r;
                if (this.skip(), this.at >= this.length) return null;
                for (i = this.at, t = this.isQuotes(this.ch), t && this.at++ , u = this.isOperatorChar(this.ch); this.at < this.length && (t || !this.isSpace(this.ch));) {
                    if (this.isQuotes(this.ch)) {
                        t && this.at++;
                        break
                    }
                    if (!t) {
                        if (u != this.isOperatorChar(this.ch)) break;
                        if (this.isBrackets(this.ch)) break
                    }
                    this.at++
                }
                return this.at <= i ? null : (n = this.text.substr(i, this.at - i), n && n.length > 1 && this.isQuotes(n[0]) && (r = n.length - 1, this.isQuotes(n[n.length - 1]) && r-- , n = n.substr(1, r)), n)
            }, n.prototype.isNoRightOperation = function (n) {
                return "empty" == n || "notempty" == n
            }, n.prototype.readOperator = function () {
                var n = this.readString();
                return n ? (n = n.toLowerCase(), ">" == n && (n = "greater"), "<" == n && (n = "less"), ">=" != n && "=>" != n || (n = "greaterorequal"), "<=" != n && "=<" != n || (n = "lessorequal"), "=" != n && "==" != n || (n = "equal"), "<>" != n && "!=" != n || (n = "notequal"), "contain" == n && (n = "contains"), "notcontain" == n && (n = "notcontains"), n) : null
            }, n.prototype.readConnective = function () {
                var n = this.readString();
                return n ? (n = n.toLowerCase(), "&" != n && "&&" != n || (n = "and"), "|" != n && "||" != n || (n = "or"), "and" != n && "or" != n && (n = null), n) : null
            }, n.prototype.pushExpression = function () {
                var n = new r.c;
                this.expressionNodes.push(n);
                this.node = n
            }, n.prototype.popExpression = function () {
                var n = this.expressionNodes.pop();
                this.node = this.expressionNodes[this.expressionNodes.length - 1];
                this.node.children.push(n)
            }, n.prototype.addCondition = function (n) {
                this.node.children.push(n)
            }, n.prototype.addConnective = function (n) {
                var u, f, t, i;
                this.node.children.length < 2 ? this.node.connective = n : this.node.connective != n && (u = this.node.connective, f = this.node.children, this.node.clear(), this.node.connective = n, t = new r.c, t.connective = u, t.children = f, this.node.children.push(t), i = new r.c, this.node.children.push(i), this.node = i)
            }, n
        }()
    }, function (n, t, i) {
        "use strict";
        i.d(t, "a", function () {
            return r
        });
        var r = function () {
            function n() { }
            return n.prototype.loadSurvey = function (t, i) {
                var r = new XMLHttpRequest;
                r.open("GET", n.serviceUrl + "/getSurvey?surveyId=" + t);
                r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                r.onload = function () {
                    var n = JSON.parse(r.response);
                    i(200 == r.status, n, r.response)
                };
                r.send()
            }, n.prototype.sendResult = function (t, i, r, u, f) {
                var e, o, s;
                void 0 === u && (u = null);
                void 0 === f && (f = !1);
                e = new XMLHttpRequest;
                e.open("POST", n.serviceUrl + "/post/");
                e.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                o = {
                    postId: t,
                    surveyResult: JSON.stringify(i)
                };
                u && (o.clientId = u);
                f && (o.isPartialCompleted = !0);
                s = JSON.stringify(o);
                e.onload = e.onerror = function () {
                    r && r(200 == e.status, e.response)
                };
                e.send(s)
            }, n.prototype.sendFile = function (t, i, r) {
                var u = new XMLHttpRequest,
                    f;
                u.onload = u.onerror = function () {
                    r && r(200 == u.status, JSON.parse(u.response))
                };
                u.open("POST", n.serviceUrl + "/upload/", !0);
                f = new FormData;
                f.append("file", i);
                f.append("postId", t);
                u.send(f)
            }, n.prototype.getResult = function (t, i, r) {
                var u = new XMLHttpRequest,
                    f = "resultId=" + t + "&name=" + i;
                u.open("GET", n.serviceUrl + "/getResult?" + f);
                u.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                u.onload = function () {
                    var n = null,
                        t = null,
                        i, f;
                    if (200 == u.status) {
                        n = JSON.parse(u.response);
                        t = [];
                        for (i in n.QuestionResult) f = {
                            name: i,
                            value: n.QuestionResult[i]
                        }, t.push(f)
                    }
                    r(200 == u.status, n, t, u.response)
                };
                u.send()
            }, n.prototype.isCompleted = function (t, i, r) {
                var u = new XMLHttpRequest,
                    f = "resultId=" + t + "&clientId=" + i;
                u.open("GET", n.serviceUrl + "/isCompleted?" + f);
                u.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                u.onload = function () {
                    var n = null;
                    200 == u.status && (n = JSON.parse(u.response));
                    r(200 == u.status, n, u.response)
                };
                u.send()
            }, n
        }();
        r.serviceUrl = "https://dxsurveyapi.azurewebsites.net/api/Survey"
    }, function (n, t, i) {
        "use strict";
        var f = i(0),
            e = i(3),
            u = i(5),
            o = i(31),
            r;
        i.d(t, "a", function () {
            return r
        });
        r = function (n) {
            function t(t) {
                void 0 === t && (t = "");
                var i = n.call(this, t) || this;
                return i.name = t, i.numValue = -1, i.navigationButtonsVisibility = "inherit", i
            }
            return f.b(t, n), t.prototype.getType = function () {
                return "page"
            }, Object.defineProperty(t.prototype, "num", {
                get: function () {
                    return this.numValue
                },
                set: function (n) {
                    this.numValue != n && (this.numValue = n, this.onNumChanged(n))
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getRendredTitle = function (t) {
                return t = n.prototype.getRendredTitle.call(this, t), this.num > 0 && (t = this.num + ". " + t), t
            }, t.prototype.focusFirstQuestion = function () {
                for (var t, n = 0; n < this.questions.length; n++)
                    if (t = this.questions[n], t.visible && t.hasInput) {
                        this.questions[n].focus();
                        break
                    }
            }, t.prototype.focusFirstErrorQuestion = function () {
                for (var n = 0; n < this.questions.length; n++)
                    if (this.questions[n].visible && 0 != this.questions[n].currentErrorCount) {
                        this.questions[n].focus(!0);
                        break
                    }
            }, t.prototype.scrollToTop = function () {
                u.a.ScrollElementToTop(u.e)
            }, t.prototype.onNumChanged = function () { }, t.prototype.onVisibleChanged = function () {
                n.prototype.onVisibleChanged.call(this);
                null != this.data && this.data.pageVisibilityChanged(this, this.visible)
            }, t
        }(o.a);
        e.a.metaData.addClass("page", [{
            name: "navigationButtonsVisibility",
            "default": "inherit",
            choices: ["iherit", "show", "hide"]
        }], function () {
            return new r
        }, "panel")
    }, function (n, t, i) {
        "use strict";
        var e = i(0),
            o = i(3),
            s = i(5),
            h = i(14),
            c = i(6),
            l = i(8),
            f, r, u;
        i.d(t, "c", function () {
            return f
        });
        i.d(t, "a", function () {
            return r
        });
        i.d(t, "b", function () {
            return u
        });
        f = function () {
            function n(n) {
                this.panel = n;
                this.elements = [];
                this.visibleValue = n.data && n.data.isDesignMode
            }
            return Object.defineProperty(n.prototype, "questions", {
                get: function () {
                    return this.elements
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "visible", {
                get: function () {
                    return this.visibleValue
                },
                set: function (n) {
                    n != this.visible && (this.visibleValue = n, this.onVisibleChanged())
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.updateVisible = function () {
                this.visible = this.calcVisible();
                this.setWidth()
            }, n.prototype.addElement = function (n) {
                this.elements.push(n);
                this.updateVisible()
            }, n.prototype.onVisibleChanged = function () {
                this.visibilityChangedCallback && this.visibilityChangedCallback()
            }, n.prototype.setWidth = function () {
                var i = this.getVisibleCount(),
                    r, n, t;
                if (0 != i)
                    for (r = 0, n = 0; n < this.elements.length; n++) this.elements[n].isVisible && (t = this.elements[n], t.renderWidth = t.width ? t.width : Math.floor(100 / i) + "%", t.rightIndent = r < i - 1 ? 1 : 0, r++)
            }, n.prototype.getVisibleCount = function () {
                for (var t = 0, n = 0; n < this.elements.length; n++) this.elements[n].isVisible && t++;
                return t
            }, n.prototype.calcVisible = function () {
                return this.getVisibleCount() > 0
            }, n
        }();
        r = function (n) {
            function t(i) {
                var r, u;
                return void 0 === i && (i = ""), r = n.call(this) || this, r.name = i, r.dataValue = null, r.rowValues = null, r.conditionRunner = null, r.elementsValue = [], r.isQuestionsReady = !1, r.questionsValue = [], r.parent = null, r.visibleIf = "", r.visibleIndex = -1, r.visibleValue = !0, r.idValue = t.getPanelId(), r.locTitleValue = new l.a(r, !0), u = r, r.locTitleValue.onRenderedHtmlCallback = function (n) {
                    return u.getRendredTitle(n)
                }, r.elementsValue.push = function (n) {
                    return u.doOnPushElement(this, n)
                }, r.elementsValue.splice = function (n, t) {
                    for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                    return u.doSpliceElements.apply(u, [this, n, t].concat(r))
                }, r
            }
            return e.b(t, n), t.getPanelId = function () {
                return "sp_" + t.panelCounter++
            }, Object.defineProperty(t.prototype, "data", {
                get: function () {
                    return this.dataValue
                },
                set: function (n) {
                    if (this.dataValue !== n) {
                        this.dataValue = n;
                        for (var t = 0; t < this.elements.length; t++) this.elements[t].setData(n)
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "title", {
                get: function () {
                    return this.locTitle.text
                },
                set: function (n) {
                    this.locTitle.text = n
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "locTitle", {
                get: function () {
                    return this.locTitleValue
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getLocale = function () {
                return this.data ? this.data.getLocale() : ""
            }, t.prototype.getMarkdownHtml = function (n) {
                return this.data ? this.data.getMarkdownHtml(n) : null
            }, Object.defineProperty(t.prototype, "id", {
                get: function () {
                    return this.idValue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isPanel", {
                get: function () {
                    return !1
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "questions", {
                get: function () {
                    var n, t, r, i;
                    if (!this.isQuestionsReady) {
                        for (this.questionsValue = [], n = 0; n < this.elements.length; n++)
                            if (t = this.elements[n], t.isPanel)
                                for (r = t.questions, i = 0; i < r.length; i++) this.questionsValue.push(r[i]);
                            else this.questionsValue.push(t);
                        this.isQuestionsReady = !0
                    }
                    return this.questionsValue
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.markQuestionListDirty = function () {
                this.isQuestionsReady = !1;
                this.parent && this.parent.markQuestionListDirty()
            }, Object.defineProperty(t.prototype, "elements", {
                get: function () {
                    return this.elementsValue
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.containsElement = function (n) {
                for (var i, t = 0; t < this.elements.length; t++)
                    if ((i = this.elements[t], i == n) || i.isPanel && i.containsElement(n)) return !0;
                return !1
            }, t.prototype.hasErrors = function (n, t) {
                var r, u;
                void 0 === n && (n = !0);
                void 0 === t && (t = !1);
                var e = !1,
                    i = null,
                    f = [];
                for (this.addQuestionsToList(f, !0), r = 0; r < f.length; r++) u = f[r], u.isReadOnly || u.hasErrors(n) && (t && null == i && (i = u), e = !0);
                return i && i.focus(!0), e
            }, t.prototype.addQuestionsToList = function (n, t) {
                var r, i;
                if (void 0 === t && (t = !1), !t || this.visible)
                    for (r = 0; r < this.elements.length; r++) i = this.elements[r], t && !i.visible || (i.isPanel ? i.addQuestionsToList(n, t) : n.push(i))
            }, Object.defineProperty(t.prototype, "rows", {
                get: function () {
                    return this.rowValues || (this.rowValues = this.buildRows()), this.rowValues
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isActive", {
                get: function () {
                    return !this.data || this.data.currentPage == this.root
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "root", {
                get: function () {
                    for (var n = this; n.parent;) n = n.parent;
                    return n
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.createRow = function () {
                return new f(this)
            }, t.prototype.onSurveyLoad = function () {
                for (var n = 0; n < this.elements.length; n++) this.elements[n].onSurveyLoad();
                this.rowsChangedCallback && this.rowsChangedCallback()
            }, Object.defineProperty(t.prototype, "isLoadingFromJson", {
                get: function () {
                    return this.data && this.data.isLoadingFromJson
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.onRowsChanged = function () {
                this.rowValues = null;
                this.rowsChangedCallback && !this.isLoadingFromJson && this.rowsChangedCallback()
            }, Object.defineProperty(t.prototype, "isDesignMode", {
                get: function () {
                    return this.data && this.data.isDesignMode
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.doOnPushElement = function (n, t) {
                var i = Array.prototype.push.call(n, t);
                return this.markQuestionListDirty(), this.onAddElement(t, n.length), this.onRowsChanged(), i
            }, t.prototype.doSpliceElements = function (n, t, i) {
                for (var e, o, r, s, u = [], f = 3; f < arguments.length; f++) u[f - 3] = arguments[f];
                for (t || (t = 0), i || (i = 0), e = [], r = 0; r < i; r++) r + t >= n.length || e.push(n[r + t]);
                for (o = (s = Array.prototype.splice).call.apply(s, [n, t, i].concat(u)), this.markQuestionListDirty(), u || (u = []), r = 0; r < e.length; r++) this.onRemoveElement(e[r]);
                for (r = 0; r < u.length; r++) this.onAddElement(u[r], t + r);
                return this.onRowsChanged(), o
            }, t.prototype.onAddElement = function (n, t) {
                var i, r, u;
                n.isPanel ? (i = n, i.data = this.data, i.parent = this, this.data && this.data.panelAdded(i, t, this, this.root)) : this.data && (r = n, r.setData(this.data), this.data.questionAdded(r, t, this, this.root));
                u = this;
                n.rowVisibilityChangedCallback = function () {
                    u.onElementVisibilityChanged(n)
                };
                n.startWithNewLineChangedCallback = function () {
                    u.onElementStartWithNewLineChanged(n)
                }
            }, t.prototype.onRemoveElement = function (n) {
                n.isPanel ? this.data && this.data.panelRemoved(n) : this.data && this.data.questionRemoved(n)
            }, t.prototype.onElementVisibilityChanged = function (n) {
                this.rowValues && this.updateRowsVisibility(n);
                this.parent && this.parent.onElementVisibilityChanged(this)
            }, t.prototype.onElementStartWithNewLineChanged = function () {
                this.onRowsChanged()
            }, t.prototype.updateRowsVisibility = function (n) {
                for (var i, t = 0; t < this.rowValues.length; t++)
                    if (i = this.rowValues[t], i.elements.indexOf(n) > -1) {
                        i.updateVisible();
                        break
                    }
            }, t.prototype.buildRows = function () {
                for (var t = [], n = 0; n < this.elements.length; n++) {
                    var i = this.elements[n],
                        r = 0 == n || i.startWithNewLine,
                        u = r ? this.createRow() : t[t.length - 1];
                    r && t.push(u);
                    u.addElement(i)
                }
                for (n = 0; n < t.length; n++) t[n].updateVisible();
                return t
            }, Object.defineProperty(t.prototype, "processedTitle", {
                get: function () {
                    return this.getRendredTitle(this.locTitle.textOrHtml)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getRendredTitle = function (n) {
                return !n && this.isPanel && this.isDesignMode ? "[" + this.name + "]" : null != this.data ? this.data.processText(n) : n
            }, Object.defineProperty(t.prototype, "visible", {
                get: function () {
                    return this.visibleValue
                },
                set: function (n) {
                    n !== this.visible && (this.visibleValue = n, this.onVisibleChanged())
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.onVisibleChanged = function () { }, Object.defineProperty(t.prototype, "isVisible", {
                get: function () {
                    return this.data && this.data.isDesignMode || this.getIsPageVisible(null)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getIsPageVisible = function (n) {
                if (!this.visible) return !1;
                for (var t = 0; t < this.questions.length; t++)
                    if (this.questions[t] != n && this.questions[t].visible) return !0;
                return !1
            }, t.prototype.addElement = function (n, t) {
                void 0 === t && (t = -1);
                null != n && (t < 0 || t >= this.elements.length ? this.elements.push(n) : this.elements.splice(t, 0, n))
            }, t.prototype.addQuestion = function (n, t) {
                void 0 === t && (t = -1);
                this.addElement(n, t)
            }, t.prototype.addPanel = function (n, t) {
                void 0 === t && (t = -1);
                this.addElement(n, t)
            }, t.prototype.addNewQuestion = function (n, t) {
                var i = c.a.Instance.createQuestion(n, t);
                return this.addQuestion(i), i
            }, t.prototype.addNewPanel = function (n) {
                var t = this.createNewPanel(n);
                return this.addPanel(t), t
            }, t.prototype.createNewPanel = function (n) {
                return new u(n)
            }, t.prototype.removeElement = function (n) {
                var r = this.elements.indexOf(n),
                    t, i;
                if (r < 0) {
                    for (t = 0; t < this.elements.length; t++)
                        if (i = this.elements[t], i.isPanel && i.removeElement(n)) return !0;
                    return !1
                }
                return this.elements.splice(r, 1), !0
            }, t.prototype.removeQuestion = function (n) {
                this.removeElement(n)
            }, t.prototype.runCondition = function (n) {
                for (var t = 0; t < this.elements.length; t++) this.elements[t].runCondition(n);
                this.visibleIf && (this.conditionRunner || (this.conditionRunner = new h.a(this.visibleIf)), this.conditionRunner.expression = this.visibleIf, this.visible = this.conditionRunner.run(n))
            }, t.prototype.onLocaleChanged = function () {
                for (var n = 0; n < this.elements.length; n++) this.elements[n].onLocaleChanged();
                this.locTitle.onChanged()
            }, t
        }(s.b);
        r.panelCounter = 100;
        u = function (n) {
            function t(t) {
                void 0 === t && (t = "");
                var i = n.call(this, t) || this;
                return i.name = t, i.innerIndentValue = 0, i.startWithNewLineValue = !0, i
            }
            return e.b(t, n), t.prototype.getType = function () {
                return "panel"
            }, t.prototype.setData = function (n) {
                this.data = n
            }, Object.defineProperty(t.prototype, "isPanel", {
                get: function () {
                    return !0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "innerIndent", {
                get: function () {
                    return this.innerIndentValue
                },
                set: function (n) {
                    n != this.innerIndentValue && (this.innerIndentValue = n, this.renderWidthChangedCallback && this.renderWidthChangedCallback())
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "renderWidth", {
                get: function () {
                    return this.renderWidthValue
                },
                set: function (n) {
                    n != this.renderWidth && (this.renderWidthValue = n, this.renderWidthChangedCallback && this.renderWidthChangedCallback())
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "startWithNewLine", {
                get: function () {
                    return this.startWithNewLineValue
                },
                set: function (n) {
                    this.startWithNewLine != n && (this.startWithNewLineValue = n, this.startWithNewLineChangedCallback && this.startWithNewLineChangedCallback())
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "rightIndent", {
                get: function () {
                    return this.rightIndentValue
                },
                set: function (n) {
                    n != this.rightIndent && (this.rightIndentValue = n, this.renderWidthChangedCallback && this.renderWidthChangedCallback())
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.onVisibleChanged = function () {
                this.rowVisibilityChangedCallback && this.rowVisibilityChangedCallback()
            }, t
        }(r);
        o.a.metaData.addClass("panel", ["name", {
            name: "elements",
            alternativeName: "questions",
            baseClassName: "question",
            visible: !1
        }, {
                name: "visible:boolean",
                "default": !0
            }, "visibleIf:expression", {
                name: "title:text",
                serializationProperty: "locTitle"
            }, {
                name: "innerIndent:number",
                "default": 0,
                choices: [0, 1, 2, 3]
            }], function () {
                return new u
            })
    }, function (n, t, i) {
        "use strict";
        var f = i(5),
            u, r;
        i.d(t, "b", function () {
            return u
        });
        i.d(t, "a", function () {
            return r
        });
        u = function () {
            function n(n, t) {
                this.name = n;
                this.widgetJson = t;
                this.htmlTemplate = t.htmlTemplate ? t.htmlTemplate : ""
            }
            return n.prototype.afterRender = function (n, t) {
                this.widgetJson.afterRender && this.widgetJson.afterRender(n, t)
            }, n.prototype.willUnmount = function (n, t) {
                this.widgetJson.willUnmount && this.widgetJson.willUnmount(n, t)
            }, n.prototype.isFit = function (n) {
                return !!this.widgetJson.isFit && this.widgetJson.isFit(n)
            }, n
        }();
        r = function () {
            function n() {
                this.widgetsValues = [];
                this.onCustomWidgetAdded = new f.c
            }
            return Object.defineProperty(n.prototype, "widgets", {
                get: function () {
                    return this.widgetsValues
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.addCustomWidget = function (n) {
                var t = n.name,
                    i;
                t || (t = "widget_" + this.widgets.length + 1);
                i = new u(t, n);
                this.widgetsValues.push(i);
                this.onCustomWidgetAdded.fire(i, null)
            }, n.prototype.clear = function () {
                this.widgetsValues = []
            }, n.prototype.getCustomWidget = function (n) {
                for (var t = 0; t < this.widgetsValues.length; t++)
                    if (this.widgetsValues[t].isFit(n)) return this.widgetsValues[t];
                return null
            }, n
        }();
        r.Instance = new r
    }, function (n, t, i) {
        "use strict";
        var f = i(0),
            r = i(2),
            e = (i.n(r), i(22)),
            u;
        i.d(t, "a", function () {
            return u
        });
        u = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.handlePrevClick = i.handlePrevClick.bind(i), i.handleNextClick = i.handleNextClick.bind(i), i.handleCompleteClick = i.handleCompleteClick.bind(i), i
            }
            return f.b(t, n), t.prototype.handlePrevClick = function () {
                this.survey.prevPage()
            }, t.prototype.handleNextClick = function () {
                this.survey.nextPage()
            }, t.prototype.handleCompleteClick = function () {
                this.survey.completeLastPage()
            }, t.prototype.render = function () {
                if (!this.survey || !this.survey.isNavigationButtonsShowing) return null;
                var n = this.survey.isFirstPage ? null : this.renderButton(this.handlePrevClick, this.survey.pagePrevText, this.css.navigation.prev),
                    t = this.survey.isLastPage ? null : this.renderButton(this.handleNextClick, this.survey.pageNextText, this.css.navigation.next),
                    i = this.survey.isLastPage && this.survey.isEditMode ? this.renderButton(this.handleCompleteClick, this.survey.completeText, this.css.navigation.complete) : null;
                return r.createElement("div", {
                    className: this.css.footer
                }, n, t, i)
            }, t.prototype.renderButton = function (n, t, i) {
                var u = this.css.navigationButton + (i ? " " + i : "");
                return r.createElement("input", {
                    className: u,
                    style: {
                        marginRight: "5px"
                    },
                    type: "button",
                    onClick: n,
                    value: t
                })
            }, t
        }(e.a)
    }, function (n, t, i) {
        "use strict";
        var f = i(0),
            r = i(2),
            e = (i.n(r), i(22)),
            u;
        i.d(t, "a", function () {
            return u
        });
        u = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.isTop = t.isTop, i
            }
            return f.b(t, n), t.prototype.componentWillReceiveProps = function (t) {
                n.prototype.componentWillReceiveProps.call(this, t);
                this.isTop = t.isTop
            }, Object.defineProperty(t.prototype, "progress", {
                get: function () {
                    return this.survey.getProgress()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "progressText", {
                get: function () {
                    return this.survey.progressText
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.render = function () {
                var n = this.isTop ? {
                    width: "60%"
                } : {
                        width: "60%",
                        marginTop: "10px"
                    },
                    t = {
                        width: this.progress + "%"
                    };
                return r.createElement("div", {
                    className: this.css.progress,
                    style: n
                }, r.createElement("div", {
                    style: t,
                    className: this.css.progressBar,
                    role: "progressbar",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                }, r.createElement("span", null, this.progressText)))
            }, t
        }(e.a)
    }, function (n, t, i) {
        "use strict";
        var u = i(0),
            r = i(2),
            o = (i.n(r), i(15)),
            e = i(4);
        i.d(t, "a", function () {
            return s
        });
        i.d(t, "b", function () {
            return f
        });
        var s = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.page = t.page, i.survey = t.survey, i.creator = t.creator, i.css = t.css, i
            }
            return u.b(t, n), t.prototype.componentWillReceiveProps = function (n) {
                this.page = n.page;
                this.survey = n.survey;
                this.creator = n.creator;
                this.css = n.css
            }, t.prototype.componentDidMount = function () {
                var n = this.refs.root;
                n && this.survey && this.survey.afterRenderPage(n)
            }, t.prototype.render = function () {
                if (null == this.page || null == this.survey || null == this.creator) return null;
                for (var u = this.renderTitle(), t = [], i = this.page.rows, n = 0; n < i.length; n++) t.push(this.createRow(i[n], n));
                return r.createElement("div", {
                    ref: "root"
                }, u, t)
            }, t.prototype.createRow = function (n, t) {
                var i = "row" + (t + 1);
                return r.createElement(f, {
                    key: i,
                    row: n,
                    survey: this.survey,
                    creator: this.creator,
                    css: this.css
                })
            }, t.prototype.renderTitle = function () {
                if (!this.page.title || !this.survey.showPageTitles) return null;
                var n = e.a.renderLocString(this.page.locTitle);
                return r.createElement("h4", {
                    className: this.css.pageTitle
                }, n)
            }, t
        }(r.Component),
            h = function (n) {
                function t(t) {
                    var i = n.call(this, t) || this;
                    return i.panel = t.panel, i.survey = t.survey, i.creator = t.creator, i.css = t.css, i
                }
                return u.b(t, n), t.prototype.componentWillReceiveProps = function (n) {
                    this.panel = n.panel;
                    this.survey = n.survey;
                    this.creator = n.creator;
                    this.css = n.css
                }, t.prototype.componentDidMount = function () {
                    var n = this.refs.root;
                    n && this.survey && this.survey.afterRenderPage(n)
                }, t.prototype.render = function () {
                    var u;
                    if (null == this.panel || null == this.survey || null == this.creator) return null;
                    for (var f = this.renderTitle(), t = [], i = this.panel.rows, n = 0; n < i.length; n++) t.push(this.createRow(i[n], n));
                    return u = {
                        marginLeft: this.panel.innerIndent * this.css.question.indent + "px"
                    }, r.createElement("div", {
                        ref: "root"
                    }, f, r.createElement("div", {
                        style: u
                    }, t))
                }, t.prototype.createRow = function (n, t) {
                    var i = "row" + (t + 1);
                    return r.createElement(f, {
                        key: i,
                        row: n,
                        survey: this.survey,
                        creator: this.creator,
                        css: this.css
                    })
                }, t.prototype.renderTitle = function () {
                    if (!this.panel.title) return null;
                    var n = e.a.renderLocString(this.panel.locTitle);
                    return r.createElement("h4", {
                        className: this.css.pageTitle
                    }, n)
                }, t
            }(r.Component),
            f = function (n) {
                function t(t) {
                    var i = n.call(this, t) || this;
                    return i.setProperties(t), i
                }
                return u.b(t, n), t.prototype.componentWillReceiveProps = function (n) {
                    this.setProperties(n)
                }, t.prototype.setProperties = function (n) {
                    if (this.row = n.row, this.row) {
                        var t = this;
                        this.row.visibilityChangedCallback = function () {
                            t.setState({
                                visible: t.row.visible
                            })
                        }
                    }
                    this.survey = n.survey;
                    this.creator = n.creator;
                    this.css = n.css
                }, t.prototype.render = function () {
                    var n, t, i, u;
                    if (null == this.row || null == this.survey || null == this.creator) return null;
                    if (n = null, this.row.visible)
                        for (n = [], t = 0; t < this.row.elements.length; t++) i = this.row.elements[t], n.push(this.createQuestion(i));
                    return u = this.row.visible ? {} : {
                        display: "none"
                    }, r.createElement("div", {
                        className: this.css.row,
                        style: u
                    }, n)
                }, t.prototype.createQuestion = function (n) {
                    return n.isPanel ? r.createElement(h, {
                        key: n.name,
                        panel: n,
                        creator: this.creator,
                        survey: this.survey,
                        css: this.css
                    }) : r.createElement(o.a, {
                        key: n.name,
                        question: n,
                        creator: this.creator,
                        css: this.css
                    })
                }, t
            }(r.Component)
    }, function (n, t, i) {
        "use strict";
        var r = i(44),
            u, w, b, k, f, d, g, e, o, s, h, c, nt, l, a, tt, it, v, rt, ut, y, ft, et, ot, p;
        i.d(t, "J", function () {
            return r.a
        });
        i.d(t, "K", function () {
            return r.b
        });
        i.d(t, "L", function () {
            return r.c
        });
        i.d(t, "M", function () {
            return r.d
        });
        i.d(t, "N", function () {
            return r.e
        });
        i.d(t, "O", function () {
            return r.f
        });
        i.d(t, "P", function () {
            return r.g
        });
        i.d(t, "Q", function () {
            return r.h
        });
        i.d(t, "R", function () {
            return r.i
        });
        i.d(t, "S", function () {
            return r.j
        });
        i.d(t, "T", function () {
            return r.k
        });
        i.d(t, "U", function () {
            return r.l
        });
        i.d(t, "V", function () {
            return r.m
        });
        i.d(t, "W", function () {
            return r.n
        });
        i.d(t, "X", function () {
            return r.o
        });
        i.d(t, "Y", function () {
            return r.p
        });
        i.d(t, "Z", function () {
            return r.q
        });
        i.d(t, "_0", function () {
            return r.r
        });
        i.d(t, "_1", function () {
            return r.s
        });
        i.d(t, "_2", function () {
            return r.t
        });
        i.d(t, "_3", function () {
            return r.u
        });
        i.d(t, "_4", function () {
            return r.v
        });
        i.d(t, "_5", function () {
            return r.w
        });
        i.d(t, "_6", function () {
            return r.x
        });
        i.d(t, "_7", function () {
            return r.y
        });
        i.d(t, "_8", function () {
            return r.z
        });
        i.d(t, "_9", function () {
            return r.A
        });
        i.d(t, "_10", function () {
            return r.B
        });
        i.d(t, "_11", function () {
            return r.C
        });
        i.d(t, "_12", function () {
            return r.D
        });
        i.d(t, "_13", function () {
            return r.E
        });
        i.d(t, "_14", function () {
            return r.F
        });
        i.d(t, "_15", function () {
            return r.G
        });
        i.d(t, "_16", function () {
            return r.H
        });
        i.d(t, "_17", function () {
            return r.I
        });
        i.d(t, "_18", function () {
            return r.J
        });
        i.d(t, "_19", function () {
            return r.K
        });
        i.d(t, "_20", function () {
            return r.L
        });
        i.d(t, "_21", function () {
            return r.M
        });
        i.d(t, "_22", function () {
            return r.N
        });
        i.d(t, "_23", function () {
            return r.O
        });
        i.d(t, "_24", function () {
            return r.P
        });
        i.d(t, "_25", function () {
            return r.Q
        });
        i.d(t, "_26", function () {
            return r.R
        });
        i.d(t, "_27", function () {
            return r.S
        });
        i.d(t, "_28", function () {
            return r.T
        });
        i.d(t, "_29", function () {
            return r.U
        });
        i.d(t, "_30", function () {
            return r.V
        });
        i.d(t, "_31", function () {
            return r.W
        });
        i.d(t, "_32", function () {
            return r.X
        });
        i.d(t, "_33", function () {
            return r.Y
        });
        i.d(t, "_34", function () {
            return r.Z
        });
        i.d(t, "_35", function () {
            return r._0
        });
        i.d(t, "_36", function () {
            return r._1
        });
        i.d(t, "_37", function () {
            return r._2
        });
        i.d(t, "_38", function () {
            return r._3
        });
        i.d(t, "_39", function () {
            return r._4
        });
        i.d(t, "_40", function () {
            return r._5
        });
        i.d(t, "_41", function () {
            return r._6
        });
        i.d(t, "_42", function () {
            return r._7
        });
        i.d(t, "_43", function () {
            return r._8
        });
        i.d(t, "_44", function () {
            return r._9
        });
        i.d(t, "_45", function () {
            return r._10
        });
        i.d(t, "_46", function () {
            return r._11
        });
        i.d(t, "_47", function () {
            return r._12
        });
        i.d(t, "_48", function () {
            return r._13
        });
        i.d(t, "_49", function () {
            return r._14
        });
        i.d(t, "_50", function () {
            return r._15
        });
        i.d(t, "_51", function () {
            return r._16
        });
        i.d(t, "_52", function () {
            return r._17
        });
        i.d(t, "_53", function () {
            return r._18
        });
        i.d(t, "_54", function () {
            return r._19
        });
        i.d(t, "_55", function () {
            return r._20
        });
        i.d(t, "_56", function () {
            return r._21
        });
        i.d(t, "_57", function () {
            return r._22
        });
        u = (i(43), i(0));
        i.d(t, "_58", function () {
            return u.a
        });
        i.d(t, "_59", function () {
            return u.b
        });
        i.d(t, "_60", function () {
            return u.c
        });
        w = i(19);
        i.d(t, "a", function () {
            return w.a
        });
        b = i(42);
        i.d(t, "b", function () {
            return b.a
        });
        k = i(16);
        i.d(t, "c", function () {
            return k.a
        });
        f = i(23);
        i.d(t, "d", function () {
            return f.a
        });
        i.d(t, "e", function () {
            return f.a
        });
        d = i(22);
        i.d(t, "f", function () {
            return d.a
        });
        g = i(33);
        i.d(t, "g", function () {
            return g.a
        });
        e = i(35);
        i.d(t, "h", function () {
            return e.a
        });
        i.d(t, "i", function () {
            return e.b
        });
        o = i(15);
        i.d(t, "j", function () {
            return o.a
        });
        i.d(t, "k", function () {
            return o.b
        });
        s = i(4);
        i.d(t, "l", function () {
            return s.a
        });
        i.d(t, "m", function () {
            return s.b
        });
        h = i(12);
        i.d(t, "n", function () {
            return h.a
        });
        i.d(t, "o", function () {
            return h.b
        });
        c = i(71);
        i.d(t, "p", function () {
            return c.a
        });
        i.d(t, "q", function () {
            return c.b
        });
        nt = i(72);
        i.d(t, "r", function () {
            return nt.a
        });
        l = i(76);
        i.d(t, "s", function () {
            return l.a
        });
        i.d(t, "t", function () {
            return l.b
        });
        a = i(75);
        i.d(t, "u", function () {
            return a.a
        });
        i.d(t, "v", function () {
            return a.b
        });
        tt = i(74);
        i.d(t, "w", function () {
            return tt.a
        });
        it = i(73);
        i.d(t, "x", function () {
            return it.a
        });
        v = i(78);
        i.d(t, "y", function () {
            return v.a
        });
        i.d(t, "z", function () {
            return v.b
        });
        rt = i(79);
        i.d(t, "A", function () {
            return rt.a
        });
        ut = i(81);
        i.d(t, "B", function () {
            return ut.a
        });
        y = i(77);
        i.d(t, "C", function () {
            return y.a
        });
        i.d(t, "D", function () {
            return y.b
        });
        ft = i(34);
        i.d(t, "E", function () {
            return ft.a
        });
        et = i(80);
        i.d(t, "F", function () {
            return et.a
        });
        ot = i(27);
        i.d(t, "G", function () {
            return ot.a
        });
        p = i(7);
        i.d(t, "H", function () {
            return p.a
        });
        i.d(t, "I", function () {
            return p.a
        })
    }, function (t) {
        t.exports = n
    }, function () { }, function (n, t) {
        ! function (n, i) {
            i(t)
        }(0, function (n) {
            function kt(n, t, i) {
                this.nodeName = n;
                this.attributes = t;
                this.children = i;
                this.key = t && t.key
            }

            function it(n, i) {
                for (var f, h, r, e, o, u = arguments.length; u-- > 2;) s.push(arguments[u]);
                for (i && i.children && (s.length || s.push(i.children), delete i.children); s.length;)
                    if ((r = s.pop()) instanceof Array)
                        for (u = r.length; u--;) s.push(r[u]);
                    else null != r && !0 !== r && !1 !== r && ("number" == typeof r && (r = String(r)), e = "string" == typeof r, e && h ? f[f.length - 1] += r : ((f || (f = [])).push(r), h = e));
                return o = new kt(n, i || void 0, f || ci), t.vnode && t.vnode(o), o
            }

            function h(n, t) {
                if (t)
                    for (var i in t) n[i] = t[i];
                return n
            }

            function c(n) {
                return h({}, n)
            }

            function dt(n, t) {
                for (var r = t.split("."), i = 0; i < r.length && n; i++) n = n[r[i]];
                return n
            }

            function o(n) {
                return "function" == typeof n
            }

            function f(n) {
                return "string" == typeof n
            }

            function gt(n) {
                var t = "";
                for (var i in n) n[i] && (t && (t += " "), t += i);
                return t
            }

            function ni(n, t) {
                return it(n.nodeName, h(c(n.attributes), t), arguments.length > 2 ? [].slice.call(arguments, 2) : n.children)
            }

            function ti(n, t, i) {
                var r = t.split(".");
                return function (t) {
                    for (var e = t && t.target || this, s = {}, o = s, h = f(i) ? dt(t, i) : e.nodeName ? e.type.match(/^che|rad/) ? e.checked : e.value : t, u = 0; u < r.length - 1; u++) o = o[r[u]] || (o[r[u]] = !u && n.state[r[u]] || {});
                    o[r[u]] = h;
                    n.setState(s)
                }
            }

            function rt(n) {
                !n._dirty && (n._dirty = !0) && 1 == g.push(n) && (t.debounceRendering || li)(ut)
            }

            function ut() {
                var n, t = g;
                for (g = []; n = t.pop();) n._dirty && a(n)
            }

            function w(n) {
                var t = n && n.nodeName;
                return t && o(t) && !(t.prototype && t.prototype.render)
            }

            function ft(n, t) {
                return n.nodeName(b(n), t || ai)
            }

            function ii(n, t) {
                return f(t) ? n instanceof Text : f(t.nodeName) ? !n._componentConstructor && et(n, t.nodeName) : o(t.nodeName) ? !n._componentConstructor || n._componentConstructor === t.nodeName || w(t) : void 0
            }

            function et(n, t) {
                return n.normalizedNodeName === t || e(n.nodeName) === e(t)
            }

            function b(n) {
                var t = c(n.attributes),
                    i, r;
                if (t.children = n.children, i = n.nodeName.defaultProps, i)
                    for (r in i) void 0 === t[r] && (t[r] = i[r]);
                return t
            }

            function k(n) {
                var t = n.parentNode;
                t && t.removeChild(n)
            }

            function ot(n, t, i, r, u) {
                var s, c, h;
                if ("className" === t && (t = "class"), "class" === t && r && "object" == typeof r && (r = gt(r)), "key" !== t)
                    if ("class" !== t || u)
                        if ("style" === t) {
                            if ((!r || f(r) || f(i)) && (n.style.cssText = r || ""), r && "object" == typeof r) {
                                if (!f(i))
                                    for (s in i) s in r || (n.style[s] = "");
                                for (s in r) n.style[s] = "number" != typeof r[s] || vi[s] ? r[s] : r[s] + "px"
                            }
                        } else "dangerouslySetInnerHTML" === t ? r && (n.innerHTML = r.__html || "") : "o" == t[0] && "n" == t[1] ? (c = n._listeners || (n._listeners = {}), t = e(t.substring(2)), r ? c[t] || n.addEventListener(t, st, !!wt[t]) : c[t] && n.removeEventListener(t, st, !!wt[t]), c[t] = r) : "list" !== t && "type" !== t && !u && t in n ? (ri(n, t, null == r ? "" : r), null != r && !1 !== r || n.removeAttribute(t)) : (h = u && t.match(/^xlink\:?(.+)/), null == r || !1 === r ? h ? n.removeAttributeNS("http://www.w3.org/1999/xlink", e(h[1])) : n.removeAttribute(t) : "object" == typeof r || o(r) || (h ? n.setAttributeNS("http://www.w3.org/1999/xlink", e(h[1]), r) : n.setAttribute(t, r)));
                    else n.className = r || ""
            }

            function ri(n, t, i) {
                try {
                    n[t] = i
                } catch (n) { }
            }

            function st(n) {
                return this._listeners[n.type](t.event && t.event(n) || n)
            }

            function ui(n) {
                if (k(n), n instanceof Element) {
                    n._component = n._componentConstructor = null;
                    var t = n.normalizedNodeName || e(n.nodeName);
                    (y[t] || (y[t] = [])).push(n)
                }
            }

            function ht(n, t) {
                var i = e(n),
                    r = y[i] && y[i].pop() || (t ? document.createElementNS("http://www.w3.org/2000/svg", n) : document.createElement(n));
                return r.normalizedNodeName = i, r
            }

            function ct() {
                for (var n; n = bt.pop();) t.afterMount && t.afterMount(n), n.componentDidMount && n.componentDidMount()
            }

            function lt(n, t, u, f, e, o) {
                nt++ || (r = e && void 0 !== e.ownerSVGElement, p = n && !(i in n));
                var s = at(n, t, u, f);
                return e && s.parentNode !== e && e.appendChild(s), --nt || (p = !1, o || ct()), s
            }

            function at(n, t, e, s) {
                for (var l, a, y, b, k = t && t.attributes && t.attributes.ref; w(t);) t = ft(t, e);
                if (null == t && (t = ""), f(t)) return n && n instanceof Text && n.parentNode ? n.nodeValue != t && (n.nodeValue = t) : (n && u(n), n = document.createTextNode(t)), n;
                if (o(t.nodeName)) return si(n, t, e, s);
                var h = n,
                    v = String(t.nodeName),
                    d = r,
                    c = t.children;
                if (r = "svg" === v || "foreignObject" !== v && r, n) {
                    if (!et(n, v)) {
                        for (h = ht(v, r); n.firstChild;) h.appendChild(n.firstChild);
                        n.parentNode && n.parentNode.replaceChild(h, n);
                        u(n)
                    }
                } else h = ht(v, r);
                if (l = h.firstChild, a = h[i], !a)
                    for (h[i] = a = {}, y = h.attributes, b = y.length; b--;) a[y[b].name] = y[b].value;
                return !p && c && 1 === c.length && "string" == typeof c[0] && l && l instanceof Text && !l.nextSibling ? l.nodeValue != c[0] && (l.nodeValue = c[0]) : (c && c.length || l) && fi(h, c, e, s, !!a.dangerouslySetInnerHTML), ei(h, t.attributes, a), k && (a.ref = k)(h), r = d, h
            }

            function fi(n, t, r, f, e) {
                var h, y, d, s, v = n.childNodes,
                    g = [],
                    c = {},
                    nt = 0,
                    w = 0,
                    tt = v.length,
                    l = 0,
                    it = t && t.length,
                    a, o;
                if (tt)
                    for (o = 0; o < tt; o++) {
                        var b = v[o],
                            rt = b[i],
                            a = it ? (y = b._component) ? y.__key : rt ? rt.key : null : null;
                        null != a ? (nt++ , c[a] = b) : (p || e || rt || b instanceof Text) && (g[l++] = b)
                    }
                if (it)
                    for (o = 0; o < it; o++) {
                        if (d = t[o], s = null, a = d.key, null != a) nt && a in c && (s = c[a], c[a] = void 0, nt--);
                        else if (!s && w < l)
                            for (h = w; h < l; h++)
                                if ((y = g[h]) && ii(y, d)) {
                                    s = y;
                                    g[h] = void 0;
                                    h === l - 1 && l--;
                                    h === w && w++;
                                    break
                                }
                        s = at(s, d, r, f);
                        s && s !== n && (o >= tt ? n.appendChild(s) : s !== v[o] && (s === v[o + 1] && k(v[o]), n.insertBefore(s, v[o] || null)))
                    }
                if (nt)
                    for (o in c) c[o] && u(c[o]);
                for (; w <= l;)(s = g[l--]) && u(s)
            }

            function u(n, t) {
                var r = n._component,
                    f;
                if (r) v(r, !t);
                else
                    for (n[i] && n[i].ref && n[i].ref(null), t || ui(n); f = n.lastChild;) u(f, t)
            }

            function ei(n, t, i) {
                for (var u in i) t && u in t || null == i[u] || ot(n, u, i[u], i[u] = void 0, r);
                if (t)
                    for (u in t) "children" === u || "innerHTML" === u || u in i && t[u] === ("value" === u || "checked" === u ? n[u] : i[u]) || ot(n, u, i[u], i[u] = t[u], r)
            }

            function oi(n) {
                var t = n.constructor.name,
                    i = tt[t];
                i ? i.push(n) : tt[t] = [n]
            }

            function vt(n, t, i) {
                var f = new n(t, i),
                    r = tt[n.name],
                    u;
                if (d.call(f, t, i), r)
                    for (u = r.length; u--;)
                        if (r[u].constructor === n) {
                            f.nextBase = r[u].nextBase;
                            r.splice(u, 1);
                            break
                        }
                return f
            }

            function l(n, i, r, u, f) {
                n._disable || (n._disable = !0, (n.__ref = i.ref) && delete i.ref, (n.__key = i.key) && delete i.key, !n.base || f ? n.componentWillMount && n.componentWillMount() : n.componentWillReceiveProps && n.componentWillReceiveProps(i, u), u && u !== n.context && (n.prevContext || (n.prevContext = n.context), n.context = u), n.prevProps || (n.prevProps = n.props), n.props = i, n._disable = !1, 0 !== r && (1 !== r && !1 === t.syncComponentUpdates && n.base ? rt(n) : a(n, 1, f)), n.__ref && n.__ref(n))
            }

            function a(n, i, r, f) {
                var d, p, et, rt, ot, st, ht, ni, pt;
                if (!n._disable) {
                    var at, k, e, g, tt = n.props,
                        it = n.state,
                        s = n.context,
                        wt = n.prevProps || tt,
                        kt = n.prevState || it,
                        dt = n.prevContext || s,
                        ut = n.base,
                        gt = n.nextBase,
                        y = ut || gt,
                        yt = n._component;
                    if (ut && (n.props = wt, n.state = kt, n.context = dt, 2 !== i && n.shouldComponentUpdate && !1 === n.shouldComponentUpdate(tt, it, s) ? at = !0 : n.componentWillUpdate && n.componentWillUpdate(tt, it, s), n.props = tt, n.state = it, n.context = s), n.prevProps = n.prevState = n.prevContext = n.nextBase = null, n._dirty = !1, !at) {
                        for (n.render && (k = n.render(tt, it, s)), n.getChildContext && (s = h(c(s), n.getChildContext())); w(k);) k = ft(k, s);
                        if (et = k && k.nodeName, o(et) ? (rt = b(k), e = yt, e && e.constructor === et && rt.key == e.__key ? l(e, rt, 1, s) : (d = e, e = vt(et, rt, s), e.nextBase = e.nextBase || gt, e._parentComponent = n, n._component = e, l(e, rt, 0, s), a(e, 1, r, !0)), p = e.base) : (g = y, d = yt, d && (g = n._component = null), (y || 1 === i) && (g && (g._component = null), p = lt(g, k, s, r || !ut, y && y.parentNode, !0))), y && p !== y && e !== yt && (ot = y.parentNode, ot && p !== ot && (ot.replaceChild(p, y), d || (y._component = null, u(y)))), d && v(d, p !== y), n.base = p, p && !f) {
                            for (st = n, ht = n; ht = ht._parentComponent;)(st = ht).base = p;
                            p._component = st;
                            p._componentConstructor = st.constructor
                        }
                    }
                    if (!ut || r ? bt.unshift(n) : at || (n.componentDidUpdate && n.componentDidUpdate(wt, kt, dt), t.afterUpdate && t.afterUpdate(n)), pt = n._renderCallbacks, pt)
                        for (; ni = pt.pop();) ni.call(n);
                    nt || f || ct()
                }
            }

            function si(n, t, i, r) {
                for (var f = n && n._component, h = f, e = n, c = f && n._componentConstructor === t.nodeName, o = c, s = b(t); f && !o && (f = f._parentComponent);) o = f.constructor === t.nodeName;
                return f && o && (!r || f._component) ? (l(f, s, 3, i, r), n = f.base) : (h && !c && (v(h, !0), n = e = null), f = vt(t.nodeName, s, i), n && !f.nextBase && (f.nextBase = n, e = null), l(f, s, 1, i, r), n = f.base, e && n !== e && (e._component = null, u(e))), n
            }

            function v(n, r) {
                var f, e, o;
                if (t.beforeUnmount && t.beforeUnmount(n), f = n.base, n._disable = !0, n.componentWillUnmount && n.componentWillUnmount(), n.base = null, e = n._component, e) v(e, r);
                else if (f)
                    for (f[i] && f[i].ref && f[i].ref(null), n.nextBase = f, r && (k(f), oi(n)); o = f.lastChild;) u(o, !r);
                n.__ref && n.__ref(null);
                n.componentDidUnmount && n.componentDidUnmount()
            }

            function d(n, t) {
                this._dirty = !0;
                this.context = t;
                this.props = n;
                this.state || (this.state = {})
            }

            function hi(n, t, i) {
                return lt(i, n, {}, !1, t)
            }
            var t = {},
                s = [],
                ci = [],
                yt = {},
                e = function (n) {
                    return yt[n] || (yt[n] = n.toLowerCase())
                },
                pt = "undefined" != typeof Promise && Promise.resolve(),
                li = pt ? function (n) {
                    pt.then(n)
                } : setTimeout,
                ai = {},
                i = "undefined" != typeof Symbol ? Symbol.for("preactattr") : "__preactattr_",
                vi = {
                    boxFlex: 1,
                    boxFlexGroup: 1,
                    columnCount: 1,
                    fillOpacity: 1,
                    flex: 1,
                    flexGrow: 1,
                    flexPositive: 1,
                    flexshrinkedchange: 1,
                    flexNegative: 1,
                    fontWeight: 1,
                    lineClamp: 1,
                    lineHeight: 1,
                    opacity: 1,
                    order: 1,
                    orphans: 1,
                    strokeOpacity: 1,
                    widows: 1,
                    zIndex: 1,
                    zoom: 1
                },
                wt = {
                    blur: 1,
                    error: 1,
                    focus: 1,
                    load: 1,
                    resize: 1,
                    scroll: 1
                },
                g = [],
                y = {},
                bt = [],
                nt = 0,
                r = !1,
                p = !1,
                tt = {};
            h(d.prototype, {
                linkState: function (n, t) {
                    var i = this._linkedStates || (this._linkedStates = {});
                    return i[n + t] || (i[n + t] = ti(this, n, t))
                },
                setState: function (n, t) {
                    var i = this.state;
                    this.prevState || (this.prevState = c(i));
                    h(i, o(n) ? n(i, this.props) : n);
                    t && (this._renderCallbacks = this._renderCallbacks || []).push(t);
                    rt(this)
                },
                forceUpdate: function () {
                    a(this, 2)
                },
                render: function () { }
            });
            n.h = it;
            n.cloneElement = ni;
            n.Component = d;
            n.render = hi;
            n.rerender = ut;
            n.options = t
        })
    }, function (n) {
        function h() {
            throw new Error("setTimeout has not been defined");
        }

        function c() {
            throw new Error("clearTimeout has not been defined");
        }

        function l(n) {
            if (r === setTimeout) return setTimeout(n, 0);
            if ((r === h || !r) && setTimeout) return r = setTimeout, setTimeout(n, 0);
            try {
                return r(n, 0)
            } catch (t) {
                try {
                    return r.call(null, n, 0)
                } catch (t) {
                    return r.call(this, n, 0)
                }
            }
        }

        function y(n) {
            if (u === clearTimeout) return clearTimeout(n);
            if ((u === c || !u) && clearTimeout) return u = clearTimeout, clearTimeout(n);
            try {
                return u(n)
            } catch (t) {
                try {
                    return u.call(null, n)
                } catch (t) {
                    return u.call(this, n)
                }
            }
        }

        function p() {
            o && e && (o = !1, e.length ? f = e.concat(f) : s = -1, f.length && a())
        }

        function a() {
            var t, n;
            if (!o) {
                for (t = l(p), o = !0, n = f.length; n;) {
                    for (e = f, f = []; ++s < n;) e && e[s].run();
                    s = -1;
                    n = f.length
                }
                e = null;
                o = !1;
                y(t)
            }
        }

        function v(n, t) {
            this.fun = n;
            this.array = t
        }

        function i() { }
        var r, u, t = n.exports = {};
        ! function () {
            try {
                r = "function" == typeof setTimeout ? setTimeout : h
            } catch (n) {
                r = h
            }
            try {
                u = "function" == typeof clearTimeout ? clearTimeout : c
            } catch (n) {
                u = c
            }
        }();
        var e, f = [],
            o = !1,
            s = -1;
        t.nextTick = function (n) {
            var i = new Array(arguments.length - 1),
                t;
            if (arguments.length > 1)
                for (t = 1; t < arguments.length; t++) i[t - 1] = arguments[t];
            f.push(new v(n, i));
            1 !== f.length || o || l(a)
        };
        v.prototype.run = function () {
            this.fun.apply(null, this.array)
        };
        t.title = "browser";
        t.browser = !0;
        t.env = {};
        t.argv = [];
        t.version = "";
        t.versions = {};
        t.on = i;
        t.addListener = i;
        t.once = i;
        t.off = i;
        t.removeListener = i;
        t.removeAllListeners = i;
        t.emit = i;
        t.prependListener = i;
        t.prependOnceListener = i;
        t.listeners = function () {
            return []
        };
        t.binding = function () {
            throw new Error("process.binding is not supported");
        };
        t.cwd = function () {
            return "/"
        };
        t.chdir = function () {
            throw new Error("process.chdir is not supported");
        };
        t.umask = function () {
            return 0
        }
    }, function (n, t) {
        var i, r, u;
        ! function (f, e) {
            r = [t, n];
            i = e;
            void 0 !== (u = "function" == typeof i ? i.apply(t, r) : i) && (n.exports = u)
        }(0, function (n, t) {
            "use strict";

            function c(n) {
                var t = n && (h && n[h] || n[ut]);
                if ("function" == typeof t) return t
            }

            function i(n) {
                function t(t, i, u, f, e, o) {
                    if (f = f || s, o = o || u, null == i[u]) {
                        var h = r[e];
                        return t ? new Error("Required " + h + " `" + o + "` was not specified in `" + f + "`.") : null
                    }
                    return n(i, u, f, e, o)
                }
                var i = t.bind(null, !1);
                return i.isRequired = t.bind(null, !0), i
            }

            function u(n) {
                function t(t, i, u, e, o) {
                    var s = t[i],
                        h, c;
                    return f(s) !== n ? (h = r[e], c = nt(s), new Error("Invalid " + h + " `" + o + "` of type `" + c + "` supplied to `" + u + "`, expected `" + n + "`.")) : null
                }
                return i(t)
            }

            function l() {
                return i(rt.thatReturns(null))
            }

            function a(n) {
                function t(t, i, u, e, o) {
                    var h = t[i],
                        l, a, s, c;
                    if (!Array.isArray(h)) return l = r[e], a = f(h), new Error("Invalid " + l + " `" + o + "` of type `" + a + "` supplied to `" + u + "`, expected an array.");
                    for (s = 0; s < h.length; s++)
                        if (c = n(h, s, u, e, o + "[" + s + "]"), c instanceof Error) return c;
                    return null
                }
                return i(t)
            }

            function v() {
                function n(n, t, i, u, f) {
                    if (!o.isValidElement(n[t])) {
                        var e = r[u];
                        return new Error("Invalid " + e + " `" + f + "` supplied to `" + i + "`, expected a single ReactElement.")
                    }
                    return null
                }
                return i(n)
            }

            function y(n) {
                function t(t, i, u, f, e) {
                    if (!(t[i] instanceof n)) {
                        var o = r[f],
                            h = n.name || s,
                            c = tt(t[i]);
                        return new Error("Invalid " + o + " `" + e + "` of type `" + c + "` supplied to `" + u + "`, expected instance of `" + h + "`.")
                    }
                    return null
                }
                return i(t)
            }

            function p(n) {
                function t(t, i, u, f, e) {
                    for (var h, c, s = t[i], o = 0; o < n.length; o++)
                        if (s === n[o]) return null;
                    return h = r[f], c = JSON.stringify(n), new Error("Invalid " + h + " `" + e + "` of value `" + s + "` supplied to `" + u + "`, expected one of " + c + ".")
                }
                return i(Array.isArray(n) ? t : function () {
                    return new Error("Invalid argument supplied to oneOf, expected an instance of array.")
                })
            }

            function w(n) {
                function t(t, i, u, e, o) {
                    var s = t[i],
                        l = f(s),
                        a, h, c;
                    if ("object" !== l) return a = r[e], new Error("Invalid " + a + " `" + o + "` of type `" + l + "` supplied to `" + u + "`, expected an object.");
                    for (h in s)
                        if (s.hasOwnProperty(h) && (c = n(s, h, u, e, o + "." + h), c instanceof Error)) return c;
                    return null
                }
                return i(t)
            }

            function b(n) {
                function t(t, i, u, f, e) {
                    for (var s, o = 0; o < n.length; o++)
                        if (null == n[o](t, i, u, f, e)) return null;
                    return s = r[f], new Error("Invalid " + s + " `" + e + "` supplied to `" + u + "`.")
                }
                return i(Array.isArray(n) ? t : function () {
                    return new Error("Invalid argument supplied to oneOfType, expected an instance of array.")
                })
            }

            function k() {
                function n(n, t, i, u, f) {
                    if (!e(n[t])) {
                        var o = r[u];
                        return new Error("Invalid " + o + " `" + f + "` supplied to `" + i + "`, expected a ReactNode.")
                    }
                    return null
                }
                return i(n)
            }

            function d(n) {
                function t(t, i, u, e, o) {
                    var l = t[i],
                        a = f(l),
                        v, s, h, c;
                    if ("object" !== a) return v = r[e], new Error("Invalid " + v + " `" + o + "` of type `" + a + "` supplied to `" + u + "`, expected `object`.");
                    for (s in n)
                        if (h = n[s], h && (c = h(l, s, u, e, o + "." + s), c)) return c;
                    return null
                }
                return i(t)
            }

            function e(n) {
                var t, i, r, u;
                switch (typeof n) {
                    case "number":
                    case "string":
                    case "undefined":
                        return !0;
                    case "boolean":
                        return !n;
                    case "object":
                        if (Array.isArray(n)) return n.every(e);
                        if (null === n || o.isValidElement(n)) return !0;
                        if (t = c(n), !t) return !1;
                        if (r = t.call(n), t !== n.entries) {
                            for (; !(i = r.next()).done;)
                                if (!e(i.value)) return !1
                        } else
                            for (; !(i = r.next()).done;)
                                if (u = i.value, u && !e(u[1])) return !1;
                        return !0;
                    default:
                        return !1
                }
            }

            function g(n, t) {
                return "symbol" === n || "Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol
            }

            function f(n) {
                var t = typeof n;
                return Array.isArray(n) ? "array" : n instanceof RegExp ? "object" : g(t, n) ? "symbol" : t
            }

            function nt(n) {
                var t = f(n);
                if ("object" === t) {
                    if (n instanceof Date) return "date";
                    if (n instanceof RegExp) return "regexp"
                }
                return t
            }

            function tt(n) {
                return n.constructor && n.constructor.name ? n.constructor.name : s
            }
            var it = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
                o = {};
            o.isValidElement = function (n) {
                return "object" == typeof n && null !== n && n.$$typeof === it
            };
            var r = {
                prop: "prop",
                context: "context",
                childContext: "child context"
            },
                rt = {
                    thatReturns: function (n) {
                        return function () {
                            return n
                        }
                    }
                },
                h = "function" == typeof Symbol && Symbol.iterator,
                ut = "@@iterator",
                s = "<<anonymous>>",
                ft = {
                    array: u("array"),
                    bool: u("boolean"),
                    func: u("function"),
                    number: u("number"),
                    object: u("object"),
                    string: u("string"),
                    symbol: u("symbol"),
                    any: l(),
                    arrayOf: a,
                    element: v(),
                    instanceOf: y,
                    node: k(),
                    objectOf: w,
                    oneOf: p,
                    oneOfType: b,
                    shape: d
                };
            t.exports = ft
        })
    }, function (n, t, i) {
        "use strict";
        var u = i(19),
            r;
        i.d(t, "a", function () {
            return r
        });
        r = {
            root: "",
            header: "panel-heading",
            body: "panel-body",
            footer: "panel-footer",
            navigationButton: "",
            navigation: {
                complete: "",
                prev: "",
                next: ""
            },
            progress: "progress center-block",
            progressBar: "progress-bar",
            pageTitle: "",
            row: "",
            question: {
                root: "",
                title: "",
                comment: "form-control",
                indent: 20
            },
            error: {
                root: "alert alert-danger",
                icon: "glyphicon glyphicon-exclamation-sign",
                item: ""
            },
            checkbox: {
                root: "form-inline",
                item: "checkbox",
                other: ""
            },
            comment: "form-control",
            dropdown: {
                root: "",
                control: "form-control"
            },
            matrix: {
                root: "table"
            },
            matrixdropdown: {
                root: "table"
            },
            matrixdynamic: {
                root: "table",
                button: "button"
            },
            multipletext: {
                root: "table",
                itemTitle: "",
                itemValue: "form-control"
            },
            radiogroup: {
                root: "form-inline",
                item: "radio",
                label: "",
                other: ""
            },
            rating: {
                root: "btn-group",
                item: "btn btn-default"
            },
            text: "form-control",
            window: {
                root: "modal-content",
                body: "modal-body",
                header: {
                    root: "modal-header panel-title",
                    title: "pull-left",
                    button: "glyphicon pull-right",
                    buttonExpanded: "glyphicon pull-right glyphicon-chevron-up",
                    buttonCollapsed: "glyphicon pull-right glyphicon-chevron-down"
                }
            }
        };
        u.b.bootstrap = r
    }, function (n, t, i) {
        "use strict";
        i(45);
        i(46);
        i(47);
        i(48);
        i(49);
        i(50);
        i(51);
        i(52);
        i(53);
        i(54);
        i(55);
        i(56);
        i(57)
    }, function (n, t, i) {
        "use strict";
        var dt = i(38),
            u = (i.n(dt), i(26)),
            o, k, d, g, s, nt, tt, h, r, e, l, a, v, y, c, it, rt, ut, p, ft, et, ot, st, ht, ct, lt, at, vt, yt, f, pt, wt, bt, w, b, kt;
        i.d(t, "b", function () {
            return u.b
        });
        i.d(t, "c", function () {
            return u.c
        });
        i.d(t, "d", function () {
            return u.d
        });
        i.d(t, "e", function () {
            return u.e
        });
        i.d(t, "f", function () {
            return u.f
        });
        i.d(t, "g", function () {
            return u.g
        });
        i.d(t, "h", function () {
            return u.h
        });
        i.d(t, "i", function () {
            return u.a
        });
        o = i(5);
        i.d(t, "j", function () {
            return o.b
        });
        i.d(t, "k", function () {
            return o.c
        });
        i.d(t, "l", function () {
            return o.d
        });
        k = i(11);
        i.d(t, "m", function () {
            return k.a
        });
        d = i(8);
        i.d(t, "n", function () {
            return d.a
        });
        g = i(17);
        i.d(t, "o", function () {
            return g.a
        });
        s = i(14);
        i.d(t, "p", function () {
            return s.b
        });
        i.d(t, "q", function () {
            return s.c
        });
        i.d(t, "r", function () {
            return s.a
        });
        nt = i(28);
        i.d(t, "s", function () {
            return nt.a
        });
        tt = i(18);
        i.d(t, "t", function () {
            return tt.a
        });
        h = i(9);
        i.d(t, "u", function () {
            return h.c
        });
        i.d(t, "v", function () {
            return h.d
        });
        i.d(t, "w", function () {
            return h.b
        });
        r = i(3);
        i.d(t, "x", function () {
            return r.b
        });
        i.d(t, "y", function () {
            return r.c
        });
        i.d(t, "z", function () {
            return r.d
        });
        i.d(t, "A", function () {
            return r.e
        });
        i.d(t, "B", function () {
            return r.f
        });
        i.d(t, "C", function () {
            return r.g
        });
        i.d(t, "D", function () {
            return r.a
        });
        i.d(t, "E", function () {
            return r.h
        });
        i.d(t, "F", function () {
            return r.i
        });
        i.d(t, "G", function () {
            return r.j
        });
        e = i(20);
        i.d(t, "H", function () {
            return e.a
        });
        i.d(t, "I", function () {
            return e.b
        });
        i.d(t, "J", function () {
            return e.c
        });
        i.d(t, "K", function () {
            return e.d
        });
        l = i(64);
        i.d(t, "L", function () {
            return l.a
        });
        i.d(t, "M", function () {
            return l.b
        });
        a = i(65);
        i.d(t, "N", function () {
            return a.a
        });
        i.d(t, "O", function () {
            return a.b
        });
        v = i(63);
        i.d(t, "P", function () {
            return v.a
        });
        i.d(t, "Q", function () {
            return v.b
        });
        y = i(66);
        i.d(t, "R", function () {
            return y.a
        });
        i.d(t, "S", function () {
            return y.b
        });
        c = i(31);
        i.d(t, "T", function () {
            return c.b
        });
        i.d(t, "U", function () {
            return c.a
        });
        i.d(t, "V", function () {
            return c.c
        });
        it = i(30);
        i.d(t, "W", function () {
            return it.a
        });
        rt = i(10);
        i.d(t, "X", function () {
            return rt.a
        });
        ut = i(21);
        i.d(t, "Y", function () {
            return ut.a
        });
        p = i(13);
        i.d(t, "Z", function () {
            return p.a
        });
        i.d(t, "_0", function () {
            return p.b
        });
        ft = i(58);
        i.d(t, "_1", function () {
            return ft.a
        });
        et = i(59);
        i.d(t, "_2", function () {
            return et.a
        });
        ot = i(60);
        i.d(t, "_3", function () {
            return ot.a
        });
        st = i(6);
        i.d(t, "_4", function () {
            return st.b
        });
        ht = i(61);
        i.d(t, "_5", function () {
            return ht.a
        });
        ct = i(62);
        i.d(t, "_6", function () {
            return ct.a
        });
        lt = i(67);
        i.d(t, "_7", function () {
            return lt.a
        });
        at = i(68);
        i.d(t, "_8", function () {
            return at.a
        });
        vt = i(69);
        i.d(t, "_9", function () {
            return vt.a
        });
        yt = i(24);
        i.d(t, "_10", function () {
            return yt.a
        });
        f = i(83);
        i.d(t, "_11", function () {
            return f.a
        });
        i.d(t, "_12", function () {
            return f.b
        });
        i.d(t, "_13", function () {
            return f.c
        });
        i.d(t, "_14", function () {
            return f.d
        });
        i.d(t, "_15", function () {
            return f.e
        });
        pt = i(82);
        i.d(t, "_16", function () {
            return pt.a
        });
        wt = i(25);
        i.d(t, "_17", function () {
            return wt.a
        });
        bt = i(29);
        i.d(t, "_18", function () {
            return bt.a
        });
        w = i(1);
        i.d(t, "_19", function () {
            return w.a
        });
        i.d(t, "_20", function () {
            return w.b
        });
        b = i(32);
        i.d(t, "_21", function () {
            return b.b
        });
        i.d(t, "_22", function () {
            return b.a
        });
        i.d(t, "a", function () {
            return kt
        });
        kt = "0.12.12"
    }, function (n, t, i) {
        "use strict";
        var r = i(1);
        r.a.locales.cz = {
            pagePrevText: "Předchozí",
            pageNextText: "Další",
            completeText: "Hotovo",
            otherItemText: "Jiná odpověď (napište)",
            progressText: "Strana {0} z {1}",
            emptySurvey: "Průzkumu neobsahuje žádné otázky.",
            completingSurvey: "Děkujeme za vyplnění průzkumu!",
            loadingSurvey: "Probíhá načítání průzkumu...",
            optionsCaption: "Vyber...",
            requiredError: "Odpovězte prosím na otázku.",
            requiredInAllRowsError: "Odpovězte prosím na všechny otázky.",
            numericError: "V tomto poli lze zadat pouze čísla.",
            textMinLength: "Zadejte prosím alespoň {0} znaků.",
            textMaxLength: "Zadejte prosím méně než {0} znaků.",
            textMinMaxLength: "Zadejte prosím více než {0} a méně než {1} znaků.",
            minRowCountError: "Vyplňte prosím alespoň {0} řádků.",
            minSelectError: "Vyberte prosím alespoň {0} varianty.",
            maxSelectError: "Nevybírejte prosím více než {0} variant.",
            numericMinMax: "Odpověď '{0}' by mělo být větší nebo rovno {1} a menší nebo rovno {2}",
            numericMin: "Odpověď '{0}' by mělo být větší nebo rovno {1}",
            numericMax: "Odpověď '{0}' by mělo být menší nebo rovno {1}",
            invalidEmail: "Zadejte prosím platnou e-mailovou adresu.",
            urlRequestError: "Požadavek vrátil chybu '{0}'. {1}",
            urlGetChoicesError: "Požadavek nevrátil data nebo cesta je neplatná",
            exceedMaxSize: "Velikost souboru by neměla být větší než {0}.",
            otherRequiredError: "Zadejte prosím jinou hodnotu.",
            uploadingFile: "Váš soubor se nahrává. Zkuste to prosím za několik sekund.",
            addRow: "Přidat řádek",
            removeRow: "Odstranit"
        }
    }, function (n, t, i) {
        "use strict";
        var r = i(1);
        r.a.locales.da = {
            pagePrevText: "Tilbage",
            pageNextText: "Videre",
            completeText: "Færdig",
            progressText: "Side {0} af {1}",
            emptySurvey: "Der er ingen synlige spørgsmål.",
            completingSurvey: "Mange tak for din besvarelse!",
            loadingSurvey: "Spørgeskemaet hentes fra serveren...",
            otherItemText: "Valgfrit svar...",
            optionsCaption: "Vælg...",
            requiredError: "Besvar venligst spørgsmålet.",
            numericError: "Angiv et tal.",
            textMinLength: "Angiv mindst {0} tegn.",
            minSelectError: "Vælg venligst mindst  {0} svarmulighed(er).",
            maxSelectError: "Vælg venligst færre {0} svarmuligheder(er).",
            numericMinMax: "'{0}' skal være lig med eller større end {1} og lig med eller mindre end {2}",
            numericMin: "'{0}' skal være lig med eller større end {1}",
            numericMax: "'{0}' skal være lig med eller mindre end {1}",
            invalidEmail: "Angiv venligst en gyldig e-mail adresse.",
            exceedMaxSize: "Filstørrelsen må ikke overstige {0}.",
            otherRequiredError: "Angiv en værdi for dit valgfrie svar."
        }
    }, function (n, t, i) {
        "use strict";
        var r = i(1);
        r.a.locales.nl = {
            pagePrevText: "Vorige",
            pageNextText: "Volgende",
            completeText: "Afsluiten",
            otherItemText: "Andere",
            progressText: "Pagina {0} van {1}",
            emptySurvey: "Er is geen zichtbare pagina of vraag in deze vragenlijst",
            completingSurvey: "Bedankt om deze vragenlijst in te vullen",
            loadingSurvey: "De vragenlijst is aan het laden...",
            optionsCaption: "Kies...",
            requiredError: "Gelieve een antwoord in te vullen",
            numericError: "Het antwoord moet een getal zijn",
            textMinLength: "Gelieve minsten {0} karakters in te vullen.",
            minSelectError: "Gelieve minimum {0} antwoorden te selecteren.",
            maxSelectError: "Gelieve niet meer dan {0} antwoorden te selecteren.",
            numericMinMax: "Uw antwoord '{0}' moet groter of gelijk zijn aan {1} en kleiner of gelijk aan {2}",
            numericMin: "Uw antwoord '{0}' moet groter of gelijk zijn aan {1}",
            numericMax: "Uw antwoord '{0}' moet groter of gelijk zijn aan {1}",
            invalidEmail: "Gelieve een geldig e-mailadres in te vullen.",
            exceedMaxSize: "De grootte van het bestand mag niet groter zijn dan {0}.",
            otherRequiredError: "Gelieve het veld 'Andere' in te vullen"
        }
    }, function (n, t, i) {
        "use strict";
        var r = i(1);
        r.a.locales.fi = {
            pagePrevText: "Edellinen",
            pageNextText: "Seuraava",
            completeText: "Valmis",
            otherItemText: "Muu (kuvaile)",
            progressText: "Sivu {0}/{1}",
            emptySurvey: "Tässä kyselyssä ei ole yhtäkään näkyvillä olevaa sivua tai kysymystä.",
            completingSurvey: "Kiitos kyselyyn vastaamisesta!",
            loadingSurvey: "Kyselyä ladataan palvelimelta...",
            optionsCaption: "Valitse...",
            requiredError: "Vastaa kysymykseen, kiitos.",
            numericError: "Arvon tulee olla numeerinen.",
            textMinLength: "Ole hyvä ja syötä vähintään {0} merkkiä.",
            minSelectError: "Ole hyvä ja valitse vähintään {0} vaihtoehtoa.",
            maxSelectError: "Ole hyvä ja valitse enintään {0} vaihtoehtoa.",
            numericMinMax: "'{0}' täytyy olla enemmän tai yhtä suuri kuin {1} ja vähemmän tai yhtä suuri kuin {2}",
            numericMin: "'{0}' täytyy olla enemmän tai yhtä suuri kuin {1}",
            numericMax: "'{0}' täytyy olla vähemmän tai yhtä suuri kuin {1}",
            invalidEmail: "Syötä validi sähköpostiosoite.",
            otherRequiredError: 'Ole hyvä ja syötä "Muu (kuvaile)"'
        }
    }, function (n, t, i) {
        "use strict";
        var r = i(1);
        r.a.locales.fr = {
            pagePrevText: "Précédent",
            pageNextText: "Suivant",
            completeText: "Terminer",
            otherItemText: "Autre (préciser)",
            progressText: "Page {0} sur {1}",
            emptySurvey: "Il n'y a ni page visible ni question visible dans ce questionnaire",
            completingSurvey: "Merci d'avoir répondu au questionnaire!",
            loadingSurvey: "Le questionnaire est en cours de chargement...",
            optionsCaption: "Choisissez...",
            requiredError: "La réponse à cette question est obligatoire.",
            requiredInAllRowsError: "Toutes les lignes sont obligatoires",
            numericError: "La réponse doit être un nombre.",
            textMinLength: "Merci d'entrer au moins {0} symboles.",
            minSelectError: "Merci de sélectionner au moins {0}réponses.",
            maxSelectError: "Merci de sélectionner au plus {0}réponses.",
            numericMinMax: "Votre réponse '{0}' doit êtresupérieure ou égale à {1} et inférieure ouégale à {2}",
            numericMin: "Votre réponse '{0}' doit êtresupérieure ou égale à {1}",
            numericMax: "Votre réponse '{0}' doit êtreinférieure ou égale à {1}",
            invalidEmail: "Merci d'entrer une adresse mail valide.",
            exceedMaxSize: "La taille du fichier ne doit pas excéder {0}.",
            otherRequiredError: "Merci de préciser le champ 'Autre'."
        }
    }, function (n, t, i) {
        "use strict";
        var r = i(1);
        r.a.locales.de = {
            pagePrevText: "Zurück",
            pageNextText: "Weiter",
            completeText: "Fertig",
            progressText: "Seite {0} von {1}",
            emptySurvey: "Es gibt keine sichtbare Frage.",
            completingSurvey: "Vielen Dank für das Ausfüllen des Fragebogens!",
            loadingSurvey: "Der Fragebogen wird vom Server geladen...",
            otherItemText: "Benutzerdefinierte Antwort...",
            optionsCaption: "Wählen...",
            requiredError: "Bitte antworten Sie auf die Frage.",
            numericError: "Der Wert sollte eine Zahl sein.",
            textMinLength: "Bitte geben Sie mindestens {0} Symbole.",
            minSelectError: "Bitte wählen Sie mindestens {0} Varianten.",
            maxSelectError: "Bitte wählen Sie nicht mehr als {0} Varianten.",
            numericMinMax: "'{0}' sollte gleich oder größer sein als {1} und gleich oder kleiner als {2}",
            numericMin: "'{0}' sollte gleich oder größer sein als {1}",
            numericMax: "'{0}' sollte gleich oder kleiner als {1}",
            invalidEmail: "Bitte geben Sie eine gültige Email-Adresse ein.",
            exceedMaxSize: "Die Dateigröße soll nicht mehr als {0}.",
            otherRequiredError: "Bitte geben Sie einen Wert für Ihre benutzerdefinierte Antwort ein."
        }
    }, function (n, t, i) {
        "use strict";
        var r = i(1);
        r.a.locales.gr = {
            pagePrevText: "Προηγούμενο",
            pageNextText: "Επόμενο",
            completeText: "Ολοκλήρωση",
            otherItemText: "Άλλο (παρακαλώ διευκρινίστε)",
            progressText: "Σελίδα {0} από {1}",
            emptySurvey: "Δεν υπάρχει καμία ορατή σελίδα ή ορατή ερώτηση σε αυτό το ερωτηματολόγιο.",
            completingSurvey: "Ευχαριστούμε για την συμπλήρωση αυτου του ερωτηματολογίου!",
            loadingSurvey: "Το ερωτηματολόγιο φορτώνεται απο το διακομιστή...",
            optionsCaption: "Επιλέξτε...",
            requiredError: "Παρακαλώ απαντήστε στην ερώτηση.",
            requiredInAllRowsError: "Παρακαλώ απαντήστε στις ερωτήσεις σε όλες τις γραμμές.",
            numericError: "Η τιμή πρέπει να είναι αριθμιτική.",
            textMinLength: "Παρακαλώ συμπληρώστε τουλάχιστον {0} σύμβολα.",
            minRowCountError: "Παρακαλώ συμπληρώστε τουλάχιστον {0} γραμμές.",
            minSelectError: "Παρακαλώ επιλέξτε τουλάχιστον {0} παραλλαγές.",
            maxSelectError: "Παρακαλώ επιλέξτε όχι παραπάνω απο {0} παραλλαγές.",
            numericMinMax: "Το '{0}' θα πρέπει να είναι ίσο ή μεγαλύτερο απο το {1} και ίσο ή μικρότερο απο το {2}",
            numericMin: "Το '{0}' πρέπει να είναι μεγαλύτερο ή ισο με το {1}",
            numericMax: "Το '{0}' πρέπει να είναι μικρότερο ή ίσο απο το {1}",
            invalidEmail: "Παρακαλώ δώστε μια αποδεκτή διεύθυνση e-mail.",
            urlRequestError: "Η αίτηση επέστρεψε σφάλμα '{0}'. {1}",
            urlGetChoicesError: "Η αίτηση επέστρεψε κενά δεδομένα ή η ιδότητα 'μονοπάτι/path' είναι εσφαλέμένη",
            exceedMaxSize: "Το μέγεθος δεν μπορεί να υπερβένει τα {0}.",
            otherRequiredError: "Παρακαλώ συμπληρώστε την τιμή για το πεδίο 'άλλο'.",
            uploadingFile: "Το αρχείο σας ανεβαίνει. Παρακαλώ περιμένετε καποια δευτερόλεπτα και δοκιμάστε ξανά.",
            addRow: "Προσθήκη γραμμής",
            removeRow: "Αφαίρεση"
        }
    }, function (n, t, i) {
        "use strict";
        var r = i(1);
        r.a.locales.pl = {
            pagePrevText: "Wstecz",
            pageNextText: "Dalej",
            completeText: "Gotowe",
            otherItemText: "Inna odpowiedź (wpisz)",
            progressText: "Strona {0} z {1}",
            emptySurvey: "Nie ma widocznych pytań.",
            completingSurvey: "Dziękujemy za wypełnienie ankiety!",
            loadingSurvey: "Trwa wczytywanie ankiety...",
            optionsCaption: "Wybierz...",
            requiredError: "Proszę odpowiedzieć na to pytanie.",
            requiredInAllRowsError: "Proszę odpowiedzieć na wszystkie pytania.",
            numericError: "W tym polu można wpisać tylko liczby.",
            textMinLength: "Proszę wpisać co najmniej {0} znaków.",
            textMaxLength: "Proszę wpisać mniej niż {0} znaków.",
            textMinMaxLength: "Proszę wpisać więcej niż {0} i mniej niż {1} znaków.",
            minRowCountError: "Proszę uzupełnić przynajmniej {0} wierszy.",
            minSelectError: "Proszę wybrać co najmniej {0} pozycji.",
            maxSelectError: "Proszę wybrać nie więcej niż {0} pozycji.",
            numericMinMax: "Odpowiedź '{0}' powinna być większa lub równa {1} oraz mniejsza lub równa {2}",
            numericMin: "Odpowiedź '{0}' powinna być większa lub równa {1}",
            numericMax: "Odpowiedź '{0}' powinna być mniejsza lub równa {1}",
            invalidEmail: "Proszę podać prawidłowy adres email.",
            urlRequestError: "Żądanie zwróciło błąd '{0}'. {1}",
            urlGetChoicesError: "Żądanie nie zwróciło danych albo ścieżka jest nieprawidłowa",
            exceedMaxSize: "Rozmiar przesłanego pliku nie może przekraczać {0}.",
            otherRequiredError: "Proszę podać inną odpowiedź.",
            uploadingFile: "Trwa przenoszenie Twojego pliku, proszę spróbować ponownie za kilka sekund.",
            addRow: "Dodaj wiersz",
            removeRow: "Usuń"
        }
    }, function (n, t, i) {
        "use strict";
        var r = i(1);
        r.a.locales.ro = {
            pagePrevText: "Precedent",
            pageNextText: "Următor",
            completeText: "Finalizare",
            otherItemText: "Altul(precizaţi)",
            progressText: "Pagina {0} din {1}",
            emptySurvey: "Nu sunt întrebări pentru acest chestionar",
            completingSurvey: "Vă mulţumim pentru timpul acordat!",
            loadingSurvey: "Chestionarul se încarcă...",
            optionsCaption: "Alegeţi...",
            requiredError: "Răspunsul la această întrebare este obligatoriu.",
            requiredInAllRowsError: "Toate răspunsurile sunt obligatorii",
            numericError: "Răspunsul trebuie să fie numeric.",
            textMinLength: "Trebuie să introduci minim {0} caractere.",
            minSelectError: "Trebuie să selectezi minim {0} opţiuni.",
            maxSelectError: "Trebuie să selectezi maxim {0} opţiuni.",
            numericMinMax: "Răspunsul '{0}' trebuie să fie mai mare sau egal ca {1} şî mai mic sau egal cu {2}",
            numericMin: "Răspunsul '{0}' trebuie să fie mai mare sau egal ca {1}",
            numericMax: "Răspunsul '{0}' trebuie să fie mai mic sau egal ca {1}",
            invalidEmail: "Trebuie să introduceţi o adresa de email validă.",
            exceedMaxSize: "Dimensiunea fişierului nu trebuie să depăşească {0}.",
            otherRequiredError: "Trebuie să completezi câmpul 'Altul'."
        }
    }, function (n, t, i) {
        "use strict";
        var r = i(1);
        r.a.locales.ru = {
            pagePrevText: "Назад",
            pageNextText: "Далее",
            completeText: "Готово",
            progressText: "Страница {0} из {1}",
            emptySurvey: "Нет ни одного вопроса.",
            completingSurvey: "Благодарим Вас за заполнение анкеты!",
            loadingSurvey: "Загрузка с сервера...",
            otherItemText: "Другое (пожалуйста, опишите)",
            optionsCaption: "Выбрать...",
            requiredError: "Пожалуйста, ответьте на вопрос.",
            numericError: "Ответ должен быть числом.",
            textMinLength: "Пожалуйста, введите хотя бы {0} символов.",
            minSelectError: "Пожалуйста, выберите хотя бы {0} вариантов.",
            maxSelectError: "Пожалуйста, выберите не более {0} вариантов.",
            numericMinMax: "'{0}' должно быть равным или больше, чем {1}, и равным или меньше, чем {2}",
            numericMin: "'{0}' должно быть равным или больше, чем {1}",
            numericMax: "'{0}' должно быть равным или меньше, чем {1}",
            invalidEmail: "Пожалуйста, введите действительный адрес электронной почты.",
            otherRequiredError: 'Пожалуйста, введите данные в поле "Другое"'
        }
    }, function (n, t, i) {
        "use strict";
        var r = i(1);
        r.a.locales.es = {
            pagePrevText: "Anterior",
            pageNextText: "Siguiente",
            completeText: "Completo",
            otherItemText: "Otro (describa)",
            progressText: "Pagina {0} de {1}",
            emptySurvey: "No hay pagina visible o pregunta en la encuesta.",
            completingSurvey: "Gracias por completar la encuesta!",
            loadingSurvey: "La encuesta se esta cargando...",
            optionsCaption: "Seleccione...",
            requiredError: "Por favor conteste la pregunta.",
            requiredInAllRowsError: "Por favor conteste las preguntas en cada hilera.",
            numericError: "La estimacion debe ser numerica.",
            textMinLength: "Por favor entre por lo menos {0} symbolos.",
            textMaxLength: "Por favor entre menos de {0} symbolos.",
            textMinMaxLength: "Por favor entre mas de {0} y menos de {1} symbolos.",
            minRowCountError: "Por favor llene por lo menos {0} hileras.",
            minSelectError: "Por favor seleccione por lo menos {0} variantes.",
            maxSelectError: "Por favor seleccione no mas de {0} variantes.",
            numericMinMax: "El '{0}' debe de ser igual o mas de {1} y igual o menos de {2}",
            numericMin: "El '{0}' debe ser igual o mas de {1}",
            numericMax: "El '{0}' debe ser igual o menos de {1}",
            invalidEmail: "Por favor agrege un correo electonico valido.",
            urlRequestError: "La solicitud regreso error '{0}'. {1}",
            urlGetChoicesError: "La solicitud regreso vacio de data o la propiedad 'trayectoria' no es correcta",
            exceedMaxSize: "El tamaño der archivo no debe de exceder {0}.",
            otherRequiredError: "Por favor agrege la otra estimacion.",
            uploadingFile: "Su archivo se esta subiendo. Por favor espere unos segundos y intente de nuevo.",
            addRow: "Agrege hilera",
            removeRow: "Retire",
            choices_firstItem: "primer articulo",
            choices_secondItem: "segundo articulo",
            choices_thirdItem: "tercer articulo",
            matrix_column: "Columna",
            matrix_row: "Hilera"
        }
    }, function (n, t, i) {
        "use strict";
        var r = i(1);
        r.a.locales.sv = {
            pagePrevText: "Föregående",
            pageNextText: "Nästa",
            completeText: "Färdig",
            otherItemText: "Annat (beskriv)",
            progressText: "Sida {0} av {1}",
            emptySurvey: "Det finns ingen synlig sida eller fråga i enkäten.",
            completingSurvey: "Tack för att du genomfört enkäten!!",
            loadingSurvey: "Enkäten laddas...",
            optionsCaption: "Välj...",
            requiredError: "Var vänlig besvara frågan.",
            requiredInAllRowsError: "Var vänlig besvara frågorna på alla rader.",
            numericError: "Värdet ska vara numeriskt.",
            textMinLength: "Var vänlig ange minst {0} tecken.",
            minRowCountError: "Var vänlig fyll i minst {0} rader.",
            minSelectError: "Var vänlig välj åtminstone {0} varianter.",
            maxSelectError: "Var vänlig välj inte fler än {0} varianter.",
            numericMinMax: "'{0}' ska vara lika med eller mer än {1} samt lika med eller mindre än {2}",
            numericMin: "'{0}' ska vara lika med eller mer än {1}",
            numericMax: "'{0}' ska vara lika med eller mindre än {1}",
            invalidEmail: "Var vänlig ange en korrekt e-postadress.",
            urlRequestError: "Förfrågan returnerade felet '{0}'. {1}",
            urlGetChoicesError: "Antingen returnerade förfrågan ingen data eller så är egenskapen 'path' inte korrekt",
            exceedMaxSize: "Filstorleken får ej överstiga {0}.",
            otherRequiredError: "Var vänlig ange det andra värdet.",
            uploadingFile: "Din fil laddas upp. Var vänlig vänta några sekunder och försök sedan igen.",
            addRow: "Lägg till rad",
            removeRow: "Ta bort"
        }
    }, function (n, t, i) {
        "use strict";
        var r = i(1);
        r.a.locales.tr = {
            pagePrevText: "Geri",
            pageNextText: "İleri",
            completeText: "Anketi Tamamla",
            otherItemText: "Diğer (açıklayınız)",
            progressText: "Sayfa {0} / {1}",
            emptySurvey: "Ankette görüntülenecek sayfa ya da soru mevcut değil.",
            completingSurvey: "Anketimizi tamamladığınız için teşekkür ederiz.",
            loadingSurvey: "Anket sunucudan yükleniyor ...",
            optionsCaption: "Seçiniz ...",
            requiredError: "Lütfen soruya cevap veriniz",
            numericError: "Girilen değer numerik olmalıdır",
            textMinLength: "En az {0} sembol giriniz.",
            minRowCountError: "Lütfen en az {0} satırı doldurun.",
            minSelectError: "Lütfen en az {0} seçeneği seçiniz.",
            maxSelectError: "Lütfen {0} adetten fazla seçmeyiniz.",
            numericMinMax: "The '{0}' should be equal or more than {1} and equal or less than {2}",
            numericMin: "'{0}' değeri {1} değerine eşit veya büyük olmalıdır",
            numericMax: "'{0}' değeri {1} değerine eşit ya da küçük olmalıdır.",
            invalidEmail: "Lütfen geçerli bir eposta adresi giriniz.",
            urlRequestError: "Talebi şu hatayı döndü '{0}'. {1}",
            urlGetChoicesError: "Talep herhangi bir veri dönmedi ya da 'path' özelliği hatalı.",
            exceedMaxSize: "Dosya boyutu {0} değerini geçemez.",
            otherRequiredError: "Lütfen diğer değerleri giriniz.",
            uploadingFile: "Dosyanız yükleniyor. LÜtfen birkaç saniye bekleyin ve tekrar deneyin.",
            addRow: "Satır Ekle",
            removeRow: "Kaldır"
        }
    }, function (n, t, i) {
        "use strict";
        var f = i(0),
            e = i(3),
            u = i(6),
            o = i(13),
            r;
        i.d(t, "a", function () {
            return r
        });
        r = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.name = t, i
            }
            return f.b(t, n), t.prototype.getHasOther = function (n) {
                return !(!n || !Array.isArray(n)) && n.indexOf(this.otherItem.value) >= 0
            }, t.prototype.valueFromData = function (t) {
                return t ? Array.isArray(t) ? n.prototype.valueFromData.call(this, t) : [t] : t
            }, t.prototype.valueFromDataCore = function (n) {
                for (var i, t = 0; t < n.length; t++) {
                    if (n[t] == this.otherItem.value) return n;
                    if (this.hasUnknownValue(n[t])) return this.comment = n[t], i = n.slice(), i[t] = this.otherItem.value, i
                }
                return n
            }, t.prototype.valueToDataCore = function (n) {
                var t, i;
                if (!n || !n.length) return n;
                for (t = 0; t < n.length; t++)
                    if (n[t] == this.otherItem.value && this.getComment()) return i = n.slice(), i[t] = this.getComment(), i;
                return n
            }, t.prototype.getType = function () {
                return "checkbox"
            }, t
        }(o.a);
        e.a.metaData.addClass("checkbox", [], function () {
            return new r("")
        }, "checkboxbase");
        u.a.Instance.registerQuestion("checkbox", function (n) {
            var t = new r(n);
            return t.choices = u.a.DefaultChoices, t
        })
    }, function (n, t, i) {
        "use strict";
        var u = i(0),
            f = i(10),
            e = i(3),
            o = i(6),
            s = i(8),
            r;
        i.d(t, "a", function () {
            return r
        });
        r = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.name = t, i.rows = 4, i.cols = 50, i.locPlaceHolderValue = new s.a(i), i
            }
            return u.b(t, n), Object.defineProperty(t.prototype, "placeHolder", {
                get: function () {
                    return this.locPlaceHolder.text
                },
                set: function (n) {
                    this.locPlaceHolder.text = n
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "locPlaceHolder", {
                get: function () {
                    return this.locPlaceHolderValue
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getType = function () {
                return "comment"
            }, t.prototype.isEmpty = function () {
                return n.prototype.isEmpty.call(this) || "" === this.value
            }, t
        }(f.a);
        e.a.metaData.addClass("comment", [{
            name: "cols:number",
            "default": 50
        }, {
            name: "rows:number",
            "default": 4
        }, {
            name: "placeHolder",
            serializationProperty: "locPlaceHolder"
        }], function () {
            return new r("")
        }, "question");
        o.a.Instance.registerQuestion("comment", function (n) {
            return new r(n)
        })
    }, function (n, t, i) {
        "use strict";
        var f = i(0),
            e = i(3),
            u = i(6),
            o = i(13),
            s = i(1),
            h = i(8),
            r;
        i.d(t, "a", function () {
            return r
        });
        r = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.name = t, i.locOptionsCaptionValue = new h.a(i), i
            }
            return f.b(t, n), Object.defineProperty(t.prototype, "optionsCaption", {
                get: function () {
                    return this.locOptionsCaption.text ? this.locOptionsCaption.text : s.a.getString("optionsCaption")
                },
                set: function (n) {
                    this.locOptionsCaption.text = n
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "locOptionsCaption", {
                get: function () {
                    return this.locOptionsCaptionValue
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getType = function () {
                return "dropdown"
            }, t.prototype.onLocaleChanged = function () {
                n.prototype.onLocaleChanged.call(this);
                this.locOptionsCaption.onChanged()
            }, t.prototype.supportGoNextPageAutomatic = function () {
                return !0
            }, t
        }(o.b);
        e.a.metaData.addClass("dropdown", [{
            name: "optionsCaption",
            serializationProperty: "locOptionsCaption"
        }], function () {
            return new r("")
        }, "selectbase");
        u.a.Instance.registerQuestion("dropdown", function (n) {
            var t = new r(n);
            return t.choices = u.a.DefaultChoices, t
        })
    }, function (n, t, i) {
        "use strict";
        var f = i(0),
            e = i(10),
            o = i(3),
            s = i(6),
            u = i(9),
            h = i(1),
            r;
        i.d(t, "a", function () {
            return r
        });
        r = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.name = t, i.showPreviewValue = !1, i.isUploading = !1, i
            }
            return f.b(t, n), t.prototype.getType = function () {
                return "file"
            }, Object.defineProperty(t.prototype, "showPreview", {
                get: function () {
                    return this.showPreviewValue
                },
                set: function (n) {
                    this.showPreviewValue = n
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.loadFile = function (n) {
                var t = this;
                this.survey && !this.survey.uploadFile(this.name, n, this.storeDataAsText, function (n) {
                    t.isUploading = "uploading" == n
                }) || this.setFileValue(n)
            }, t.prototype.setFileValue = function (n) {
                if (FileReader && (this.showPreview || this.storeDataAsText) && !this.checkFileForErrors(n)) {
                    var i = new FileReader,
                        t = this;
                    i.onload = function () {
                        t.showPreview && (t.previewValue = t.isFileImage(n) ? i.result : null, t.fireCallback(t.previewValueLoadedCallback));
                        t.storeDataAsText && (t.value = i.result)
                    };
                    i.readAsDataURL(n)
                }
            }, t.prototype.onCheckForErrors = function (t) {
                n.prototype.onCheckForErrors.call(this, t);
                this.isUploading && this.errors.push(new u.c(h.a.getString("uploadingFile")))
            }, t.prototype.checkFileForErrors = function (n) {
                var t = this.errors ? this.errors.length : 0;
                return this.errors = [], this.maxSize > 0 && n.size > this.maxSize && this.errors.push(new u.d(this.maxSize)), (t != this.errors.length || this.errors.length > 0) && this.fireCallback(this.errorsChangedCallback), this.errors.length > 0
            }, t.prototype.isFileImage = function (n) {
                if (n && n.type) return 0 == n.type.toLowerCase().indexOf("image")
            }, t
        }(e.a);
        o.a.metaData.addClass("file", ["showPreview:boolean", "imageHeight", "imageWidth", "storeDataAsText:boolean", "maxSize:number"], function () {
            return new r("")
        }, "question");
        s.a.Instance.registerQuestion("file", function (n) {
            return new r(n)
        })
    }, function (n, t, i) {
        "use strict";
        var u = i(0),
            f = i(21),
            e = i(3),
            o = i(6),
            s = i(8),
            r;
        i.d(t, "a", function () {
            return r
        });
        r = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.name = t, i.locHtmlValue = new s.a(i), i
            }
            return u.b(t, n), t.prototype.getType = function () {
                return "html"
            }, Object.defineProperty(t.prototype, "html", {
                get: function () {
                    return this.locHtml.text
                },
                set: function (n) {
                    this.locHtml.text = n
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "locHtml", {
                get: function () {
                    return this.locHtmlValue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "processedHtml", {
                get: function () {
                    return this.survey ? this.survey.processHtml(this.html) : this.html
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(f.a);
        e.a.metaData.addClass("html", [{
            name: "html:html",
            serializationProperty: "locHtml"
        }], function () {
            return new r("")
        }, "questionbase");
        o.a.Instance.registerQuestion("html", function (n) {
            return new r(n)
        })
    }, function (n, t, i) {
        "use strict";
        var o = i(0),
            s = i(5),
            r = i(11),
            h = i(10),
            c = i(3),
            l = i(1),
            a = i(9),
            f = i(6),
            e, u;
        i.d(t, "a", function () {
            return e
        });
        i.d(t, "b", function () {
            return u
        });
        e = function (n) {
            function t(t, i, r, u) {
                var f = n.call(this) || this;
                return f.fullName = i, f.item = t, f.data = r, f.rowValue = u, f
            }
            return o.b(t, n), Object.defineProperty(t.prototype, "name", {
                get: function () {
                    return this.item.value
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "text", {
                get: function () {
                    return this.item.text
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "locText", {
                get: function () {
                    return this.item.locText
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "value", {
                get: function () {
                    return this.rowValue
                },
                set: function (n) {
                    this.rowValue = n;
                    this.data && this.data.onMatrixRowChanged(this);
                    this.onValueChanged()
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.onValueChanged = function () { }, t
        }(s.b);
        u = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.name = t, i.isRowChanging = !1, i.isAllRowRequired = !1, i.columnsValue = r.a.createArray(i), i.rowsValue = r.a.createArray(i), i
            }
            return o.b(t, n), t.prototype.getType = function () {
                return "matrix"
            }, Object.defineProperty(t.prototype, "hasRows", {
                get: function () {
                    return this.rowsValue.length > 0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "columns", {
                get: function () {
                    return this.columnsValue
                },
                set: function (n) {
                    r.a.setData(this.columnsValue, n)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "rows", {
                get: function () {
                    return this.rowsValue
                },
                set: function (n) {
                    r.a.setData(this.rowsValue, n)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "visibleRows", {
                get: function () {
                    var t = [],
                        i = this.value,
                        n;
                    for (i || (i = {}), n = 0; n < this.rows.length; n++) this.rows[n].value && t.push(this.createMatrixRow(this.rows[n], this.name + "_" + this.rows[n].value.toString(), i[this.rows[n].value]));
                    return 0 == t.length && t.push(this.createMatrixRow(new r.a(null), this.name, i)), this.generatedVisibleRows = t, t
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.onLocaleChanged = function () {
                n.prototype.onLocaleChanged.call(this);
                r.a.NotifyArrayOnLocaleChanged(this.columns);
                r.a.NotifyArrayOnLocaleChanged(this.rows)
            }, t.prototype.supportGoNextPageAutomatic = function () {
                return this.hasValuesInAllRows()
            }, t.prototype.onCheckForErrors = function (t) {
                n.prototype.onCheckForErrors.call(this, t);
                this.hasErrorInRows() && this.errors.push(new a.c(l.a.getString("requiredInAllRowsError")))
            }, t.prototype.hasErrorInRows = function () {
                return !!this.isAllRowRequired && !this.hasValuesInAllRows()
            }, t.prototype.hasValuesInAllRows = function () {
                var n = this.generatedVisibleRows,
                    t;
                if (n || (n = this.visibleRows), !n) return !0;
                for (t = 0; t < n.length; t++)
                    if (!n[t].value) return !1;
                return !0
            }, t.prototype.createMatrixRow = function (n, t, i) {
                return new e(n, t, this, i)
            }, t.prototype.onValueChanged = function () {
                var n, t, i, r;
                if (!this.isRowChanging && this.generatedVisibleRows && 0 != this.generatedVisibleRows.length) {
                    if (this.isRowChanging = !0, n = this.value, n || (n = {}), 0 == this.rows.length) this.generatedVisibleRows[0].value = n;
                    else
                        for (t = 0; t < this.generatedVisibleRows.length; t++) i = this.generatedVisibleRows[t], r = n[i.name] ? n[i.name] : null, this.generatedVisibleRows[t].value = r;
                    this.isRowChanging = !1
                }
            }, t.prototype.onMatrixRowChanged = function (n) {
                if (!this.isRowChanging) {
                    if (this.isRowChanging = !0, this.hasRows) {
                        var t = this.value;
                        t || (t = {});
                        t[n.name] = n.value;
                        this.setNewValue(t)
                    } else this.setNewValue(n.value);
                    this.isRowChanging = !1
                }
            }, t
        }(h.a);
        c.a.metaData.addClass("matrix", [{
            name: "columns:itemvalues",
            onGetValue: function (n) {
                return r.a.getData(n.columns)
            },
            onSetValue: function (n, t) {
                n.columns = t
            }
        }, {
            name: "rows:itemvalues",
            onGetValue: function (n) {
                return r.a.getData(n.rows)
            },
            onSetValue: function (n, t) {
                n.rows = t
            }
        }, "isAllRowRequired:boolean"], function () {
            return new u("")
        }, "question");
        f.a.Instance.registerQuestion("matrix", function (n) {
            var t = new u(n);
            return t.rows = f.a.DefaultRows, t.columns = f.a.DefaultColums, t
        })
    }, function (n, t, i) {
        "use strict";
        var o = i(0),
            f = i(20),
            h = i(3),
            r = i(11),
            s = i(6),
            e, u;
        i.d(t, "a", function () {
            return e
        });
        i.d(t, "b", function () {
            return u
        });
        e = function (n) {
            function t(t, i, r, u) {
                var f = n.call(this, r, u) || this;
                return f.name = t, f.item = i, f
            }
            return o.b(t, n), Object.defineProperty(t.prototype, "rowName", {
                get: function () {
                    return this.name
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "text", {
                get: function () {
                    return this.item.text
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "locText", {
                get: function () {
                    return this.item.locText
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(f.c);
        u = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.name = t, i.rowsValue = r.a.createArray(i), i
            }
            return o.b(t, n), t.prototype.getType = function () {
                return "matrixdropdown"
            }, Object.defineProperty(t.prototype, "rows", {
                get: function () {
                    return this.rowsValue
                },
                set: function (n) {
                    r.a.setData(this.rowsValue, n)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.onLocaleChanged = function () {
                n.prototype.onLocaleChanged.call(this);
                r.a.NotifyArrayOnLocaleChanged(this.rowsValue)
            }, t.prototype.generateRows = function () {
                var i = [],
                    t, n;
                if (!this.rows || 0 === this.rows.length) return i;
                for (t = this.value, t || (t = {}), n = 0; n < this.rows.length; n++) this.rows[n].value && i.push(this.createMatrixRow(this.rows[n], t[this.rows[n].value]));
                return i
            }, t.prototype.createMatrixRow = function (n, t) {
                return new e(n.value, n, this, t)
            }, t
        }(f.d);
        h.a.metaData.addClass("matrixdropdown", [{
            name: "rows:itemvalues",
            onGetValue: function (n) {
                return r.a.getData(n.rows)
            },
            onSetValue: function (n, t) {
                n.rows = t
            }
        }], function () {
            return new u("")
        }, "matrixdropdownbase");
        s.a.Instance.registerQuestion("matrixdropdown", function (n) {
            var t = new u(n);
            return t.choices = [1, 2, 3, 4, 5], t.rows = s.a.DefaultColums, f.d.addDefaultColumns(t), t
        })
    }, function (n, t, i) {
        "use strict";
        var o = i(0),
            u = i(20),
            h = i(3),
            c = i(6),
            f = i(1),
            l = i(9),
            s = i(8),
            e, r;
        i.d(t, "a", function () {
            return e
        });
        i.d(t, "b", function () {
            return r
        });
        e = function (n) {
            function t(t, i, r) {
                var u = n.call(this, i, r) || this;
                return u.index = t, u
            }
            return o.b(t, n), Object.defineProperty(t.prototype, "rowName", {
                get: function () {
                    return "row" + this.index
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(u.c);
        r = function (n) {
            function t(i) {
                var r = n.call(this, i) || this;
                return r.name = i, r.rowCounter = 0, r.rowCountValue = 2, r.minRowCountValue = 0, r.maxRowCountValue = t.MaxRowCount, r.locAddRowTextValue = new s.a(r), r.locRemoveRowTextValue = new s.a(r), r
            }
            return o.b(t, n), t.prototype.getType = function () {
                return "matrixdynamic"
            }, Object.defineProperty(t.prototype, "rowCount", {
                get: function () {
                    return this.rowCountValue
                },
                set: function (n) {
                    if (!(n < 0 || n > t.MaxRowCount)) {
                        if (this.rowCountValue = n, this.value && this.value.length > n) {
                            var i = this.value;
                            i.splice(n);
                            this.value = i
                        }
                        this.fireCallback(this.rowCountChangedCallback)
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "minRowCount", {
                get: function () {
                    return this.minRowCountValue
                },
                set: function (n) {
                    n < 0 && (n = 0);
                    n == this.minRowCount || n > this.maxRowCount || (this.minRowCountValue = n, this.rowCount < n && (this.rowCount = n))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "maxRowCount", {
                get: function () {
                    return this.maxRowCountValue
                },
                set: function (n) {
                    n <= 0 || (n > t.MaxRowCount && (n = t.MaxRowCount), n == this.maxRowCount || n < this.minRowCount || (this.maxRowCountValue = n, this.rowCount > n && (this.rowCount = n)))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "canAddRow", {
                get: function () {
                    return this.rowCount < this.maxRowCount
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "canRemoveRow", {
                get: function () {
                    return this.rowCount > this.minRowCount
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.addRow = function () {
                this.canAddRow && (this.generatedVisibleRows && this.generatedVisibleRows.push(this.createMatrixRow(null)), this.rowCount++)
            }, t.prototype.removeRow = function (n) {
                if (this.canRemoveRow && !(n < 0 || n >= this.rowCount)) {
                    if (this.generatedVisibleRows && n < this.generatedVisibleRows.length && this.generatedVisibleRows.splice(n, 1), this.value) {
                        var t = this.createNewValue(this.value);
                        t.splice(n, 1);
                        t = this.deleteRowValue(t, null);
                        this.value = t
                    }
                    this.rowCount--
                }
            }, Object.defineProperty(t.prototype, "addRowText", {
                get: function () {
                    return this.locAddRowText.text ? this.locAddRowText.text : f.a.getString("addRow")
                },
                set: function (n) {
                    this.locAddRowText.text = n
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "locAddRowText", {
                get: function () {
                    return this.locAddRowTextValue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "removeRowText", {
                get: function () {
                    return this.locRemoveRowText.text ? this.locRemoveRowText.text : f.a.getString("removeRow")
                },
                set: function (n) {
                    this.locRemoveRowText.text = n
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "locRemoveRowText", {
                get: function () {
                    return this.locRemoveRowTextValue
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.supportGoNextPageAutomatic = function () {
                return !1
            }, Object.defineProperty(t.prototype, "cachedVisibleRows", {
                get: function () {
                    return this.generatedVisibleRows && this.generatedVisibleRows.length == this.rowCount ? this.generatedVisibleRows : this.visibleRows
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.onCheckForErrors = function (t) {
                n.prototype.onCheckForErrors.call(this, t);
                this.hasErrorInRows() && t.push(new l.c(f.a.getString("minRowCountError").format(this.minRowCount)))
            }, t.prototype.hasErrorInRows = function () {
                if (this.minRowCount <= 0 || !this.generatedVisibleRows) return !1;
                for (var t = 0, n = 0; n < this.generatedVisibleRows.length; n++) this.generatedVisibleRows[n].isEmpty || t++;
                return t < this.minRowCount
            }, t.prototype.generateRows = function () {
                var t = [],
                    i, n;
                if (0 === this.rowCount) return t;
                for (i = this.createNewValue(this.value), n = 0; n < this.rowCount; n++) t.push(this.createMatrixRow(this.getRowValueByIndex(i, n)));
                return t
            }, t.prototype.createMatrixRow = function (n) {
                return new e(this.rowCounter++, this, n)
            }, t.prototype.onBeforeValueChanged = function (n) {
                var t = n && Array.isArray(n) ? n.length : 0;
                t <= this.rowCount || (this.rowCountValue = t, this.generatedVisibleRows && (this.generatedVisibleRows = this.visibleRows))
            }, t.prototype.createNewValue = function (n) {
                var t = n,
                    i;
                for (t || (t = []), t.length > this.rowCount && t.splice(this.rowCount - 1), i = t.length; i < this.rowCount; i++) t.push({});
                return t
            }, t.prototype.deleteRowValue = function (n) {
                for (var i = !0, t = 0; t < n.length; t++)
                    if (Object.keys(n[t]).length > 0) {
                        i = !1;
                        break
                    }
                return i ? null : n
            }, t.prototype.getRowValueByIndex = function (n, t) {
                return t >= 0 && t < n.length ? n[t] : null
            }, t.prototype.getRowValue = function (n, t, i) {
                return void 0 === i && (i = !1), this.getRowValueByIndex(t, this.generatedVisibleRows.indexOf(n))
            }, t
        }(u.d);
        r.MaxRowCount = 100;
        h.a.metaData.addClass("matrixdynamic", [{
            name: "rowCount:number",
            "default": 2
        }, {
            name: "minRowCount:number",
            "default": 0
        }, {
            name: "maxRowCount:number",
            "default": r.MaxRowCount
        }, {
            name: "addRowText",
            serializationProperty: "locAddRowText"
        }, {
            name: "removeRowText",
            serializationProperty: "locRemoveRowText"
        }], function () {
            return new r("")
        }, "matrixdropdownbase");
        c.a.Instance.registerQuestion("matrixdynamic", function (n) {
            var t = new r(n);
            return t.choices = [1, 2, 3, 4, 5], u.d.addDefaultColumns(t), t
        })
    }, function (n, t, i) {
        "use strict";
        var f = i(0),
            s = i(5),
            h = i(26),
            c = i(10),
            e = i(3),
            l = i(6),
            a = i(9),
            o = i(8),
            r, u;
        i.d(t, "a", function () {
            return r
        });
        i.d(t, "b", function () {
            return u
        });
        r = function (n) {
            function t(t, i) {
                var r, u;
                return void 0 === t && (t = null), void 0 === i && (i = null), r = n.call(this) || this, r.name = t, r.isRequired = !1, r.inputType = "text", r.validators = [], r.locTitleValue = new o.a(r, !0), u = r, r.locTitleValue.onRenderedHtmlCallback = function (n) {
                    return u.getFullTitle(n)
                }, r.title = i, r.locPlaceHolderValue = new o.a(r), r
            }
            return f.b(t, n), t.prototype.getType = function () {
                return "multipletextitem"
            }, t.prototype.setData = function (n) {
                this.data = n
            }, Object.defineProperty(t.prototype, "title", {
                get: function () {
                    return this.locTitle.text ? this.locTitle.text : this.name
                },
                set: function (n) {
                    this.locTitle.text = n
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "locTitle", {
                get: function () {
                    return this.locTitleValue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "fullTitle", {
                get: function () {
                    return this.getFullTitle(this.locTitle.textOrHtml)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getFullTitle = function (n) {
                return n || (n = this.name), this.isRequired && this.data && (n = this.data.getIsRequiredText() + " " + n), n
            }, Object.defineProperty(t.prototype, "placeHolder", {
                get: function () {
                    return this.locPlaceHolder.text
                },
                set: function (n) {
                    this.locPlaceHolder.text = n
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "locPlaceHolder", {
                get: function () {
                    return this.locPlaceHolderValue
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.onLocaleChanged = function () {
                this.locTitle.onChanged()
            }, Object.defineProperty(t.prototype, "value", {
                get: function () {
                    return this.data ? this.data.getMultipleTextValue(this.name) : null
                },
                set: function (n) {
                    null != this.data && this.data.setMultipleTextValue(this.name, n)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.onValueChanged = function () { }, t.prototype.getValidatorTitle = function () {
                return this.title
            }, t.prototype.getLocale = function () {
                return this.data ? this.data.getLocale() : ""
            }, t.prototype.getMarkdownHtml = function (n) {
                return this.data ? this.data.getMarkdownHtml(n) : null
            }, t
        }(s.b);
        u = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.name = t, i.colCountValue = 1, i.itemSize = 25, i.itemsValues = [], i.isMultipleItemValueChanging = !1, i.setItemsOverriddenMethods(), i
            }
            return f.b(t, n), t.prototype.getType = function () {
                return "multipletext"
            }, Object.defineProperty(t.prototype, "items", {
                get: function () {
                    return this.itemsValues
                },
                set: function (n) {
                    this.itemsValues = n;
                    this.setItemsOverriddenMethods();
                    this.fireCallback(this.colCountChangedCallback)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.addItem = function (n, t) {
                void 0 === t && (t = null);
                var i = this.createTextItem(n, t);
                return this.items.push(i), i
            }, t.prototype.onLocaleChanged = function () {
                n.prototype.onLocaleChanged.call(this);
                for (var t = 0; t < this.items.length; t++) this.items[t].onLocaleChanged()
            }, t.prototype.setItemsOverriddenMethods = function () {
                var n = this;
                this.itemsValues.push = function (t) {
                    t.setData(n);
                    var i = Array.prototype.push.call(this, t);
                    return n.fireCallback(n.colCountChangedCallback), i
                };
                this.itemsValues.splice = function (t, i) {
                    for (var e, f, o, r = [], u = 2; u < arguments.length; u++) r[u - 2] = arguments[u];
                    for (t || (t = 0), i || (i = 0), e = (o = Array.prototype.splice).call.apply(o, [n.itemsValues, t, i].concat(r)), r || (r = []), f = 0; f < r.length; f++) r[f].setData(n);
                    return n.fireCallback(n.colCountChangedCallback), e
                }
            }, t.prototype.supportGoNextPageAutomatic = function () {
                for (var n = 0; n < this.items.length; n++)
                    if (!this.items[n].value) return !1;
                return !0
            }, Object.defineProperty(t.prototype, "colCount", {
                get: function () {
                    return this.colCountValue
                },
                set: function (n) {
                    n < 1 || n > 4 || (this.colCountValue = n, this.fireCallback(this.colCountChangedCallback))
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getRows = function () {
                for (var u = this.colCount, r = this.items, n = [], t = 0, i = 0; i < r.length; i++) 0 == t && n.push([]), n[n.length - 1].push(r[i]), ++t >= u && (t = 0);
                return n
            }, t.prototype.onValueChanged = function () {
                n.prototype.onValueChanged.call(this);
                this.onItemValueChanged()
            }, t.prototype.createTextItem = function (n, t) {
                return new r(n, t)
            }, t.prototype.onItemValueChanged = function () {
                var n, t;
                if (!this.isMultipleItemValueChanging)
                    for (n = 0; n < this.items.length; n++) t = null, this.value && this.items[n].name in this.value && (t = this.value[this.items[n].name]), this.items[n].onValueChanged(t)
            }, t.prototype.runValidators = function () {
                var t = n.prototype.runValidators.call(this),
                    i;
                if (null != t) return t;
                for (i = 0; i < this.items.length; i++)
                    if (null != (t = (new h.a).run(this.items[i]))) return t;
                return null
            }, t.prototype.hasErrors = function (t) {
                void 0 === t && (t = !0);
                var i = n.prototype.hasErrors.call(this, t);
                return i || (i = this.hasErrorInItems(t)), i
            }, t.prototype.hasErrorInItems = function (n) {
                for (var i, t = 0; t < this.items.length; t++)
                    if (i = this.items[t], i.isRequired && !i.value) return this.errors.push(new a.a), n && this.fireCallback(this.errorsChangedCallback), !0;
                return !1
            }, t.prototype.getMultipleTextValue = function (n) {
                return this.value ? this.value[n] : null
            }, t.prototype.setMultipleTextValue = function (n, t) {
                this.isMultipleItemValueChanging = !0;
                var i = this.value;
                i || (i = {});
                i[n] = t;
                this.setNewValue(i);
                this.isMultipleItemValueChanging = !1
            }, t.prototype.getIsRequiredText = function () {
                return this.survey ? this.survey.requiredText : ""
            }, t
        }(c.a);
        e.a.metaData.addClass("multipletextitem", ["name", "isRequired:boolean", {
            name: "placeHolder",
            serializationProperty: "locPlaceHolder"
        }, {
                name: "inputType",
                "default": "text",
                choices: ["color", "date", "datetime", "datetime-local", "email", "month", "number", "password", "range", "tel", "text", "time", "url", "week"]
            }, {
                name: "title",
                serializationProperty: "locTitle"
            }, {
                name: "validators:validators",
                baseClassName: "surveyvalidator",
                classNamePart: "validator"
            }], function () {
                return new r("")
            });
        e.a.metaData.addClass("multipletext", [{
            name: "!items:textitems",
            className: "multipletextitem"
        }, {
            name: "itemSize:number",
            "default": 25
        }, {
            name: "colCount:number",
            "default": 1,
            choices: [1, 2, 3, 4]
        }], function () {
            return new u("")
        }, "question");
        l.a.Instance.registerQuestion("multipletext", function (n) {
            var t = new u(n);
            return t.addItem("text1"), t.addItem("text2"), t
        })
    }, function (n, t, i) {
        "use strict";
        var f = i(0),
            e = i(3),
            u = i(6),
            o = i(13),
            r;
        i.d(t, "a", function () {
            return r
        });
        r = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.name = t, i
            }
            return f.b(t, n), t.prototype.getType = function () {
                return "radiogroup"
            }, t.prototype.supportGoNextPageAutomatic = function () {
                return !0
            }, t
        }(o.a);
        e.a.metaData.addClass("radiogroup", [], function () {
            return new r("")
        }, "checkboxbase");
        u.a.Instance.registerQuestion("radiogroup", function (n) {
            var t = new r(n);
            return t.choices = u.a.DefaultChoices, t
        })
    }, function (n, t, i) {
        "use strict";
        var e = i(0),
            u = i(11),
            o = i(10),
            s = i(3),
            h = i(6),
            f = i(8),
            r;
        i.d(t, "a", function () {
            return r
        });
        r = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.name = t, i.rates = u.a.createArray(i), i.locMinRateDescriptionValue = new f.a(i, !0), i.locMaxRateDescriptionValue = new f.a(i, !0), i.locMinRateDescriptionValue.onRenderedHtmlCallback = function (n) {
                    return n ? n + " " : n
                }, i.locMaxRateDescriptionValue.onRenderedHtmlCallback = function (n) {
                    return n ? " " + n : n
                }, i
            }
            return e.b(t, n), Object.defineProperty(t.prototype, "rateValues", {
                get: function () {
                    return this.rates
                },
                set: function (n) {
                    u.a.setData(this.rates, n);
                    this.fireCallback(this.rateValuesChangedCallback)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "visibleRateValues", {
                get: function () {
                    return this.rateValues.length > 0 ? this.rateValues : t.defaultRateValues
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getType = function () {
                return "rating"
            }, t.prototype.supportGoNextPageAutomatic = function () {
                return !0
            }, t.prototype.supportComment = function () {
                return !0
            }, t.prototype.supportOther = function () {
                return !0
            }, Object.defineProperty(t.prototype, "minRateDescription", {
                get: function () {
                    return this.locMinRateDescription.text
                },
                set: function (n) {
                    this.locMinRateDescription.text = n
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "locMinRateDescription", {
                get: function () {
                    return this.locMinRateDescriptionValue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "maxRateDescription", {
                get: function () {
                    return this.locMaxRateDescription.text
                },
                set: function (n) {
                    this.locMaxRateDescription.text = n
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "locMaxRateDescription", {
                get: function () {
                    return this.locMaxRateDescriptionValue
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(o.a);
        r.defaultRateValues = [];
        u.a.setData(r.defaultRateValues, [1, 2, 3, 4, 5]);
        s.a.metaData.addClass("rating", ["hasComment:boolean", {
            name: "rateValues:itemvalues",
            onGetValue: function (n) {
                return u.a.getData(n.rateValues)
            },
            onSetValue: function (n, t) {
                n.rateValues = t
            }
        }, {
                name: "minRateDescription",
                alternativeName: "mininumRateDescription",
                serializationProperty: "locMinRateDescription"
            }, {
                name: "maxRateDescription",
                alternativeName: "maximumRateDescription",
                serializationProperty: "locMaxRateDescription"
            }], function () {
                return new r("")
            }, "question");
        h.a.Instance.registerQuestion("rating", function (n) {
            return new r(n)
        })
    }, function (n, t, i) {
        "use strict";
        var u = i(0),
            f = i(6),
            e = i(3),
            o = i(10),
            s = i(8),
            r;
        i.d(t, "a", function () {
            return r
        });
        r = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.name = t, i.size = 25, i.inputType = "text", i.locPlaceHolderValue = new s.a(i), i
            }
            return u.b(t, n), t.prototype.getType = function () {
                return "text"
            }, t.prototype.isEmpty = function () {
                return n.prototype.isEmpty.call(this) || "" === this.value
            }, t.prototype.supportGoNextPageAutomatic = function () {
                return !0
            }, Object.defineProperty(t.prototype, "placeHolder", {
                get: function () {
                    return this.locPlaceHolder.text
                },
                set: function (n) {
                    this.locPlaceHolder.text = n
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "locPlaceHolder", {
                get: function () {
                    return this.locPlaceHolderValue
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.setNewValue = function (t) {
                t = this.correctValueType(t);
                n.prototype.setNewValue.call(this, t)
            }, t.prototype.correctValueType = function (n) {
                return n && ("number" == this.inputType || "range" == this.inputType) ? this.isNumber(n) ? parseFloat(n) : "" : n
            }, t.prototype.isNumber = function (n) {
                return !isNaN(parseFloat(n)) && isFinite(n)
            }, t
        }(o.a);
        e.a.metaData.addClass("text", [{
            name: "inputType",
            "default": "text",
            choices: ["color", "date", "datetime", "datetime-local", "email", "month", "number", "password", "range", "tel", "text", "time", "url", "week"]
        }, {
            name: "size:number",
            "default": 25
        }, {
            name: "placeHolder",
            serializationProperty: "locPlaceHolder"
        }], function () {
            return new r("")
        }, "question");
        f.a.Instance.registerQuestion("text", function (n) {
            return new r(n)
        })
    }, function (n, t, i) {
        "use strict";
        var f = i(0),
            r = i(2),
            e = (i.n(r), i(4)),
            u;
        i.d(t, "a", function () {
            return u
        });
        u = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.localeChangedHandler = function (n) {
                    return n.customWidgetData.isNeedRender = !0
                }, i
            }
            return f.b(t, n), t.prototype._afterRender = function () {
                var n = this.refs.root;
                this.questionBase.customWidget && (n = this.refs.widget) && (this.questionBase.customWidget.afterRender(this.questionBase, n), this.questionBase.customWidgetData.isNeedRender = !1)
            }, t.prototype.componentDidMount = function () {
                this.questionBase && (this._afterRender(), this.questionBase.localeChanged.add(this.localeChangedHandler))
            }, t.prototype.componentDidUpdate = function () {
                this.questionBase && this._afterRender()
            }, t.prototype.componentWillUnmount = function () {
                var n = this.refs.root;
                this.questionBase.customWidget && (n = this.refs.widget) && this.questionBase.customWidget.willUnmount(this.questionBase, n);
                this.questionBase.localeChanged.remove(this.localeChangedHandler)
            }, t.prototype.render = function () {
                var n, t, i;
                if (!this.questionBase || !this.creator || !this.questionBase.visible) return null;
                if (n = this.questionBase.customWidget, n.widgetJson.isDefaultRender) return r.createElement("div", {
                    ref: "widget"
                }, this.creator.createQuestionElement(this.questionBase));
                if (t = null, n.widgetJson.render) t = n.widgetJson.render(this.questionBase);
                else if (n.htmlTemplate) return i = {
                    __html: n.htmlTemplate
                }, r.createElement("div", {
                    ref: "widget",
                    dangerouslySetInnerHTML: i
                });
                return r.createElement("div", {
                    ref: "widget"
                }, t)
            }, t
        }(e.b)
    }, function (n, t, i) {
        "use strict";
        var e = i(0),
            r = i(2),
            o = (i.n(r), i(4)),
            s = i(12),
            h = i(7),
            u, f;
        i.d(t, "a", function () {
            return u
        });
        i.d(t, "b", function () {
            return f
        });
        u = function (n) {
            function t(t) {
                var r = n.call(this, t) || this,
                    i;
                return r.state = {
                    choicesChanged: 0
                }, i = r, r.question.choicesChangedCallback = function () {
                    i.state.choicesChanged = i.state.choicesChanged + 1;
                    i.setState(i.state)
                }, r
            }
            return e.b(t, n), Object.defineProperty(t.prototype, "question", {
                get: function () {
                    return this.questionBase
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.render = function () {
                return this.question ? r.createElement("div", {
                    className: this.css.root
                }, this.getItems()) : null
            }, t.prototype.getItems = function () {
                for (var i, r, t = [], n = 0; n < this.question.visibleChoices.length; n++) i = this.question.visibleChoices[n], r = "item" + n, t.push(this.renderItem(r, i, 0 == n));
                return t
            }, Object.defineProperty(t.prototype, "textStyle", {
                get: function () {
                    return null
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.renderItem = function (n, t, i) {
                return r.createElement(f, {
                    key: n,
                    question: this.question,
                    css: this.css,
                    rootCss: this.rootCss,
                    isDisplayMode: this.isDisplayMode,
                    item: t,
                    textStyle: this.textStyle,
                    isFirst: i
                })
            }, t
        }(o.b);
        f = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.item = t.item, i.question = t.question, i.textStyle = t.textStyle, i.isFirst = t.isFirst, i.handleOnChange = i.handleOnChange.bind(i), i
            }
            return e.b(t, n), t.prototype.shouldComponentUpdate = function () {
                return !this.question.customWidget || !!this.question.customWidgetData.isNeedRender || !!this.question.customWidget.widgetJson.render
            }, t.prototype.componentWillReceiveProps = function (t) {
                n.prototype.componentWillReceiveProps.call(this, t);
                this.item = t.item;
                this.textStyle = t.textStyle;
                this.question = t.question;
                this.isFirst = t.isFirst
            }, t.prototype.handleOnChange = function (n) {
                var t = this.question.value,
                    i;
                t || (t = []);
                i = t.indexOf(this.item.value);
                n.target.checked ? i < 0 && t.push(this.item.value) : i > -1 && t.splice(i, 1);
                this.question.value = t;
                this.setState({
                    value: this.question.value
                })
            }, t.prototype.render = function () {
                var n, r;
                if (!this.item || !this.question) return null;
                var t = this.question.colCount > 0 ? 100 / this.question.colCount + "%" : "",
                    u = 0 == this.question.colCount ? "5px" : "0px",
                    i = {
                        marginRight: u
                    };
                return t && (i.width = t), n = this.question.value && this.question.value.indexOf(this.item.value) > -1 || !1, r = this.item.value === this.question.otherItem.value && n ? this.renderOther() : null, this.renderCheckbox(n, i, r)
            }, Object.defineProperty(t.prototype, "inputStyle", {
                get: function () {
                    return {
                        marginRight: "3px"
                    }
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.renderCheckbox = function (n, t, i) {
                var u = this.isFirst ? this.question.inputId : null,
                    f = this.renderLocString(this.item.locText);
                return r.createElement("div", {
                    className: this.css.item,
                    style: t
                }, r.createElement("label", {
                    className: this.css.item
                }, r.createElement("input", {
                    type: "checkbox",
                    id: u,
                    style: this.inputStyle,
                    disabled: this.isDisplayMode,
                    checked: n,
                    onChange: this.handleOnChange
                }), f), i)
            }, t.prototype.renderOther = function () {
                return r.createElement("div", {
                    className: this.css.other
                }, r.createElement(s.a, {
                    question: this.question,
                    css: this.rootCss,
                    isDisplayMode: this.isDisplayMode
                }))
            }, t
        }(o.a);
        h.a.Instance.registerQuestion("checkbox", function (n) {
            return r.createElement(u, n)
        })
    }, function (n, t, i) {
        "use strict";
        var e = i(0),
            r = i(2),
            o = (i.n(r), i(4)),
            s = i(12),
            h = i(7),
            u = i(84),
            f;
        i.d(t, "a", function () {
            return f
        });
        f = function (n) {
            function t(t) {
                var i = n.call(this, t) || this,
                    r;
                return i.state = {
                    value: i.question.value,
                    choicesChanged: 0
                }, r = i, i.question.choicesChangedCallback = function () {
                    r.state.choicesChanged = r.state.choicesChanged + 1;
                    r.setState(r.state)
                }, i.handleOnChange = i.handleOnChange.bind(i), i
            }
            return e.b(t, n), Object.defineProperty(t.prototype, "question", {
                get: function () {
                    return this.questionBase
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.componentWillReceiveProps = function (t) {
                n.prototype.componentWillReceiveProps.call(this, t);
                this.state.value = this.question.value
            }, t.prototype.handleOnChange = function (n) {
                this.question.value = n.target.value;
                this.setState({
                    value: this.question.value
                })
            }, t.prototype.render = function () {
                if (!this.question) return null;
                var n = this.question.value === this.question.otherItem.value ? this.renderOther() : null,
                    t = this.renderSelect();
                return r.createElement("div", {
                    className: this.css.root
                }, t, n)
            }, t.prototype.renderSelect = function () {
                var t, n, f;
                if (this.isDisplayMode) return r.createElement("div", {
                    id: this.question.inputId,
                    className: this.css.control
                }, this.question.value);
                for (t = [], n = 0; n < this.question.visibleChoices.length; n++) {
                    var e = this.question.visibleChoices[n],
                        o = "item" + n,
                        s = r.createElement("option", {
                            key: o,
                            value: e.value
                        }, e.text);
                    t.push(s)
                }
                return f = null, (u.a.msie || u.a.firefox && i.i(u.b)(u.a.version, "51") < 0) && (f = this.handleOnChange), r.createElement("select", {
                    id: this.question.inputId,
                    className: this.css.control,
                    value: this.state.value,
                    onChange: f,
                    onInput: this.handleOnChange
                }, r.createElement("option", {
                    value: ""
                }, this.question.optionsCaption), t)
            }, t.prototype.renderOther = function () {
                return r.createElement("div", {
                    style: {
                        marginTop: "3px"
                    }
                }, r.createElement(s.a, {
                    question: this.question,
                    css: this.rootCss,
                    isDisplayMode: this.isDisplayMode
                }))
            }, t
        }(o.b);
        h.a.Instance.registerQuestion("dropdown", function (n) {
            return r.createElement(f, n)
        })
    }, function (n, t, i) {
        "use strict";
        var f = i(0),
            r = i(2),
            e = (i.n(r), i(4)),
            o = i(7),
            u;
        i.d(t, "a", function () {
            return u
        });
        u = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.state = {
                    fileLoaded: 0
                }, i.handleOnChange = i.handleOnChange.bind(i), i
            }
            return f.b(t, n), Object.defineProperty(t.prototype, "question", {
                get: function () {
                    return this.questionBase
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.handleOnChange = function (n) {
                var t = n.target || n.srcElement;
                window.FileReader && (!t || !t.files || t.files.length < 1 || (this.question.loadFile(t.files[0]), this.setState({
                    fileLoaded: this.state.fileLoaded + 1
                })))
            }, t.prototype.render = function () {
                if (!this.question) return null;
                var t = this.renderImage(),
                    n = null;
                return this.isDisplayMode || (n = r.createElement("input", {
                    id: this.question.inputId,
                    type: "file",
                    onChange: this.handleOnChange
                })), r.createElement("div", null, n, t)
            }, t.prototype.renderImage = function () {
                return this.question.previewValue ? r.createElement("div", null, "  ", r.createElement("img", {
                    src: this.question.previewValue,
                    height: this.question.imageHeight,
                    width: this.question.imageWidth
                })) : null
            }, t
        }(e.b);
        o.a.Instance.registerQuestion("file", function (n) {
            return r.createElement(u, n)
        })
    }, function (n, t, i) {
        "use strict";
        var f = i(0),
            r = i(2),
            e = (i.n(r), i(4)),
            o = i(7),
            u;
        i.d(t, "a", function () {
            return u
        });
        u = function (n) {
            function t(t) {
                return n.call(this, t) || this
            }
            return f.b(t, n), Object.defineProperty(t.prototype, "question", {
                get: function () {
                    return this.questionBase
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.render = function () {
                if (!this.question || !this.question.html) return null;
                var n = {
                    __html: this.question.processedHtml
                };
                return r.createElement("div", {
                    dangerouslySetInnerHTML: n
                })
            }, t
        }(e.b);
        o.a.Instance.registerQuestion("html", function (n) {
            return r.createElement(u, n)
        })
    }, function (n, t, i) {
        "use strict";
        var e = i(0),
            r = i(2),
            o = (i.n(r), i(4)),
            s = i(7),
            u, f;
        i.d(t, "a", function () {
            return u
        });
        i.d(t, "b", function () {
            return f
        });
        u = function (n) {
            function t(t) {
                return n.call(this, t) || this
            }
            return e.b(t, n), Object.defineProperty(t.prototype, "question", {
                get: function () {
                    return this.questionBase
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.render = function () {
                var o, t;
                if (!this.question) return null;
                for (var s = this.question.hasRows ? r.createElement("th", null) : null, i = [], n = 0; n < this.question.columns.length; n++) {
                    var h = this.question.columns[n],
                        t = "column" + n,
                        c = this.renderLocString(h.locText);
                    i.push(r.createElement("th", {
                        key: t
                    }, c))
                }
                for (var u = [], e = this.question.visibleRows, n = 0; n < e.length; n++) o = e[n], t = "row" + n, u.push(r.createElement(f, {
                    key: t,
                    question: this.question,
                    css: this.css,
                    rootCss: this.rootCss,
                    isDisplayMode: this.isDisplayMode,
                    row: o,
                    isFirst: 0 == n
                }));
                return r.createElement("table", {
                    className: this.css.root
                }, r.createElement("thead", null, r.createElement("tr", null, s, i)), r.createElement("tbody", null, u))
            }, t
        }(o.b);
        f = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.question = t.question, i.row = t.row, i.isFirst = t.isFirst, i.handleOnChange = i.handleOnChange.bind(i), i
            }
            return e.b(t, n), t.prototype.handleOnChange = function (n) {
                this.row.value = n.target.value;
                this.setState({
                    value: this.row.value
                })
            }, t.prototype.componentWillReceiveProps = function (t) {
                n.prototype.componentWillReceiveProps.call(this, t);
                this.question = t.question;
                this.row = t.row;
                this.isFirst = t.isFirst
            }, t.prototype.render = function () {
                var t, u, i, n;
                if (!this.row) return null;
                for (t = null, this.question.hasRows && (u = this.renderLocString(this.row.locText), t = r.createElement("td", null, u)), i = [], n = 0; n < this.question.columns.length; n++) {
                    var f = this.question.columns[n],
                        e = "value" + n,
                        o = this.row.value == f.value,
                        s = this.isFirst && 0 == n ? this.question.inputId : null,
                        h = r.createElement("td", {
                            key: e
                        }, r.createElement("input", {
                            id: s,
                            type: "radio",
                            name: this.row.fullName,
                            value: f.value,
                            disabled: this.isDisplayMode,
                            checked: o,
                            onChange: this.handleOnChange
                        }));
                    i.push(h)
                }
                return r.createElement("tr", null, t, i)
            }, t
        }(o.a);
        s.a.Instance.registerQuestion("matrix", function (n) {
            return r.createElement(u, n)
        })
    }, function (n, t, i) {
        "use strict";
        var e = i(0),
            r = i(2),
            o = (i.n(r), i(4)),
            s = i(15),
            h = i(7),
            u, f;
        i.d(t, "a", function () {
            return u
        });
        i.d(t, "b", function () {
            return f
        });
        u = function (n) {
            function t(t) {
                return n.call(this, t) || this
            }
            return e.b(t, n), Object.defineProperty(t.prototype, "question", {
                get: function () {
                    return this.questionBase
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.render = function () {
                var t, n, s, h;
                if (!this.question) return null;
                for (t = [], n = 0; n < this.question.columns.length; n++) {
                    var i = this.question.columns[n],
                        c = "column" + n,
                        u = this.question.getColumnWidth(i),
                        l = u ? {
                            minWidth: u
                        } : {},
                        a = this.renderLocString(i.locTitle);
                    t.push(r.createElement("th", {
                        key: c,
                        style: l
                    }, a))
                }
                for (var e = [], o = this.question.visibleRows, n = 0; n < o.length; n++) s = o[n], e.push(r.createElement(f, {
                    key: n,
                    row: s,
                    css: this.css,
                    rootCss: this.rootCss,
                    isDisplayMode: this.isDisplayMode,
                    creator: this.creator
                }));
                return h = this.question.horizontalScroll ? {
                    overflowX: "scroll"
                } : {}, r.createElement("div", {
                    style: h
                }, r.createElement("table", {
                    className: this.css.root
                }, r.createElement("thead", null, r.createElement("tr", null, r.createElement("th", null), t)), r.createElement("tbody", null, e)))
            }, t
        }(o.b);
        f = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.setProperties(t), i
            }
            return e.b(t, n), t.prototype.componentWillReceiveProps = function (t) {
                n.prototype.componentWillReceiveProps.call(this, t);
                this.setProperties(t)
            }, t.prototype.setProperties = function (n) {
                this.row = n.row;
                this.creator = n.creator
            }, t.prototype.render = function () {
                var t, n, u;
                if (!this.row) return null;
                for (t = [], n = 0; n < this.row.cells.length; n++) {
                    var i = this.row.cells[n],
                        f = r.createElement(s.b, {
                            question: i.question,
                            css: this.rootCss,
                            creator: this.creator
                        }),
                        e = this.renderSelect(i);
                    t.push(r.createElement("td", {
                        key: "row" + n
                    }, f, e))
                }
                return u = this.renderLocString(this.row.locText), r.createElement("tr", null, r.createElement("td", null, u), t)
            }, t.prototype.renderSelect = function (n) {
                return this.creator.createQuestionElement(n.question)
            }, t
        }(o.a);
        h.a.Instance.registerQuestion("matrixdropdown", function (n) {
            return r.createElement(u, n)
        })
    }, function (n, t, i) {
        "use strict";
        var e = i(0),
            r = i(2),
            o = (i.n(r), i(4)),
            s = i(15),
            h = i(7),
            u, f;
        i.d(t, "a", function () {
            return u
        });
        i.d(t, "b", function () {
            return f
        });
        u = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.setProperties(t), i
            }
            return e.b(t, n), Object.defineProperty(t.prototype, "question", {
                get: function () {
                    return this.questionBase
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.componentWillReceiveProps = function (t) {
                n.prototype.componentWillReceiveProps.call(this, t);
                this.setProperties(t)
            }, t.prototype.setProperties = function () {
                var n = this;
                this.state = {
                    rowCounter: 0
                };
                this.question.rowCountChangedCallback = function () {
                    n.state.rowCounter = n.state.rowCounter + 1;
                    n.setState(n.state)
                };
                this.handleOnRowAddClick = this.handleOnRowAddClick.bind(this)
            }, t.prototype.handleOnRowAddClick = function () {
                this.question.addRow()
            }, t.prototype.render = function () {
                var t, n, s, h, c;
                if (!this.question) return null;
                for (t = [], n = 0; n < this.question.columns.length; n++) {
                    var i = this.question.columns[n],
                        l = "column" + n,
                        u = this.question.getColumnWidth(i),
                        a = u ? {
                            minWidth: u
                        } : {},
                        v = this.renderLocString(i.locTitle);
                    t.push(r.createElement("th", {
                        key: l,
                        style: a
                    }, v))
                }
                for (var e = [], o = this.question.visibleRows, n = 0; n < o.length; n++) s = o[n], e.push(r.createElement(f, {
                    key: n,
                    row: s,
                    question: this.question,
                    index: n,
                    css: this.css,
                    rootCss: this.rootCss,
                    isDisplayMode: this.isDisplayMode,
                    creator: this.creator
                }));
                return h = this.question.horizontalScroll ? {
                    overflowX: "scroll"
                } : {}, c = this.isDisplayMode ? null : r.createElement("th", null), r.createElement("div", null, r.createElement("div", {
                    style: h
                }, r.createElement("table", {
                    className: this.css.root
                }, r.createElement("thead", null, r.createElement("tr", null, t, c)), r.createElement("tbody", null, e))), this.renderAddRowButton())
            }, t.prototype.renderAddRowButton = function () {
                return this.isDisplayMode || !this.question.canAddRow ? null : r.createElement("input", {
                    className: this.css.button,
                    type: "button",
                    onClick: this.handleOnRowAddClick,
                    value: this.question.addRowText
                })
            }, t
        }(o.b);
        f = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.setProperties(t), i
            }
            return e.b(t, n), t.prototype.componentWillReceiveProps = function (t) {
                n.prototype.componentWillReceiveProps.call(this, t);
                this.setProperties(t)
            }, t.prototype.setProperties = function (n) {
                this.row = n.row;
                this.question = n.question;
                this.index = n.index;
                this.creator = n.creator;
                this.handleOnRowRemoveClick = this.handleOnRowRemoveClick.bind(this)
            }, t.prototype.handleOnRowRemoveClick = function () {
                this.question.removeRow(this.index)
            }, t.prototype.render = function () {
                var t, n, u;
                if (!this.row) return null;
                for (t = [], n = 0; n < this.row.cells.length; n++) {
                    var i = this.row.cells[n],
                        f = r.createElement(s.b, {
                            question: i.question,
                            css: this.rootCss,
                            creator: this.creator
                        }),
                        e = this.renderQuestion(i);
                    t.push(r.createElement("td", {
                        key: "row" + n
                    }, f, e))
                }
                return !this.isDisplayMode && this.question.canRemoveRow && (u = this.renderButton(), t.push(r.createElement("td", {
                    key: "row" + this.row.cells.length + 1
                }, u))), r.createElement("tr", null, t)
            }, t.prototype.renderQuestion = function (n) {
                return this.creator.createQuestionElement(n.question)
            }, t.prototype.renderButton = function () {
                return r.createElement("input", {
                    className: this.css.button,
                    type: "button",
                    onClick: this.handleOnRowRemoveClick,
                    value: this.question.removeRowText
                })
            }, t
        }(o.a);
        h.a.Instance.registerQuestion("matrixdynamic", function (n) {
            return r.createElement(u, n)
        })
    }, function (n, t, i) {
        "use strict";
        var e = i(0),
            r = i(2),
            o = (i.n(r), i(4)),
            s = i(7),
            u, f;
        i.d(t, "a", function () {
            return u
        });
        i.d(t, "b", function () {
            return f
        });
        u = function (n) {
            function t(t) {
                return n.call(this, t) || this
            }
            return e.b(t, n), Object.defineProperty(t.prototype, "question", {
                get: function () {
                    return this.questionBase
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.render = function () {
                if (!this.question) return null;
                for (var t = this.question.getRows(), i = [], n = 0; n < t.length; n++) i.push(this.renderRow("item" + n, t[n]));
                return r.createElement("table", {
                    className: this.css.root
                }, r.createElement("tbody", null, i))
            }, t.prototype.renderRow = function (n, t) {
                for (var f, e, u = [], i = 0; i < t.length; i++) f = t[i], e = this.renderLocString(f.locTitle), u.push(r.createElement("td", {
                    key: "label" + i
                }, r.createElement("span", {
                    className: this.css.itemTitle
                }, e))), u.push(r.createElement("td", {
                    key: "value" + i
                }, this.renderItem(f, 0 == i)));
                return r.createElement("tr", {
                    key: n
                }, u)
            }, t.prototype.renderItem = function (n, t) {
                var i = t ? this.question.inputId : null;
                return r.createElement(f, {
                    item: n,
                    css: this.css,
                    isDisplayMode: this.isDisplayMode,
                    inputId: i
                })
            }, t
        }(o.b);
        f = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.item = t.item, i.inputId = t.inputId, i.state = {
                    value: i.item.value || ""
                }, i.handleOnChange = i.handleOnChange.bind(i), i.handleOnBlur = i.handleOnBlur.bind(i), i
            }
            return e.b(t, n), t.prototype.handleOnChange = function (n) {
                this.setState({
                    value: n.target.value
                })
            }, t.prototype.handleOnBlur = function (n) {
                this.item.value = n.target.value;
                this.setState({
                    value: this.item.value
                })
            }, t.prototype.componentWillReceiveProps = function (n) {
                this.item = n.item;
                this.css = n.css
            }, t.prototype.render = function () {
                if (!this.item) return null;
                var n = {
                    float: "left"
                };
                return this.isDisplayMode ? r.createElement("div", {
                    id: this.inputId,
                    className: this.css.itemValue,
                    style: n
                }, this.item.value) : r.createElement("input", {
                    id: this.inputId,
                    className: this.css.itemValue,
                    type: this.item.inputType,
                    style: n,
                    value: this.state.value,
                    placeholder: this.item.placeHolder,
                    onBlur: this.handleOnBlur,
                    onChange: this.handleOnChange
                })
            }, Object.defineProperty(t.prototype, "mainClassName", {
                get: function () {
                    return ""
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(o.a);
        s.a.Instance.registerQuestion("multipletext", function (n) {
            return r.createElement(u, n)
        })
    }, function (n, t, i) {
        "use strict";
        var f = i(0),
            r = i(2),
            e = (i.n(r), i(4)),
            o = i(12),
            s = i(7),
            u;
        i.d(t, "a", function () {
            return u
        });
        u = function (n) {
            function t(t) {
                var i = n.call(this, t) || this,
                    r;
                return i.state = {
                    choicesChanged: 0
                }, r = i, i.question.choicesChangedCallback = function () {
                    r.state.choicesChanged = r.state.choicesChanged + 1;
                    r.setState(r.state)
                }, i.handleOnChange = i.handleOnChange.bind(i), i
            }
            return f.b(t, n), Object.defineProperty(t.prototype, "question", {
                get: function () {
                    return this.questionBase
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.componentWillReceiveProps = function (t) {
                n.prototype.componentWillReceiveProps.call(this, t);
                this.handleOnChange = this.handleOnChange.bind(this)
            }, t.prototype.handleOnChange = function (n) {
                this.question.value = n.target.value;
                this.setState({
                    value: this.question.value
                })
            }, t.prototype.render = function () {
                return this.question ? r.createElement("div", {
                    className: this.css.root
                }, this.getItems()) : null
            }, t.prototype.getItems = function () {
                for (var i, r, t = [], n = 0; n < this.question.visibleChoices.length; n++) i = this.question.visibleChoices[n], r = "item" + n, t.push(this.renderItem(r, i, 0 == n));
                return t
            }, Object.defineProperty(t.prototype, "textStyle", {
                get: function () {
                    return {
                        marginLeft: "3px"
                    }
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.renderItem = function (n, t, i) {
                var u = this.question.colCount > 0 ? 100 / this.question.colCount + "%" : "",
                    o = 0 == this.question.colCount ? "5px" : "0px",
                    f = {
                        marginRight: o
                    },
                    r, e;
                return u && (f.width = u), r = this.question.value == t.value, e = r && t.value === this.question.otherItem.value ? this.renderOther() : null, this.renderRadio(n, t, r, f, e, i)
            }, t.prototype.renderRadio = function (n, t, i, u, f, e) {
                var o = e ? this.question.inputId : null,
                    s = this.renderLocString(t.locText, this.textStyle);
                return r.createElement("div", {
                    key: n,
                    className: this.css.item,
                    style: u
                }, r.createElement("label", {
                    className: this.css.label
                }, r.createElement("input", {
                    id: o,
                    type: "radio",
                    name: this.question.name + "_" + this.questionBase.id,
                    checked: i,
                    value: t.value,
                    disabled: this.isDisplayMode,
                    onChange: this.handleOnChange
                }), s), f)
            }, t.prototype.renderOther = function () {
                return r.createElement("div", {
                    className: this.css.other
                }, r.createElement(o.a, {
                    question: this.question,
                    css: this.rootCss,
                    isDisplayMode: this.isDisplayMode
                }))
            }, t
        }(e.b);
        s.a.Instance.registerQuestion("radiogroup", function (n) {
            return r.createElement(u, n)
        })
    }, function (n, t, i) {
        "use strict";
        var f = i(0),
            r = i(2),
            e = (i.n(r), i(4)),
            o = i(12),
            s = i(7),
            u;
        i.d(t, "a", function () {
            return u
        });
        u = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.handleOnChange = i.handleOnChange.bind(i), i
            }
            return f.b(t, n), Object.defineProperty(t.prototype, "question", {
                get: function () {
                    return this.questionBase
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.handleOnChange = function (n) {
                this.question.value = n.target.value;
                this.setState({
                    value: this.question.value
                })
            }, t.prototype.render = function () {
                var i, u, f;
                if (!this.question) return null;
                for (var t = [], e = this.question.minRateDescription ? this.renderLocString(this.question.locMinRateDescription) : null, o = this.question.maxRateDescription ? this.renderLocString(this.question.locMaxRateDescription) : null, n = 0; n < this.question.visibleRateValues.length; n++) i = 0 == n ? e : null, u = n == this.question.visibleRateValues.length - 1 ? o : null, t.push(this.renderItem("value" + n, this.question.visibleRateValues[n], i, u));
                return f = this.question.hasOther ? this.renderOther() : null, r.createElement("div", {
                    className: this.css.root
                }, t, f)
            }, t.prototype.renderItem = function (n, t, i, u) {
                var o = this.question.value == t.value,
                    f = this.css.item,
                    e;
                return o && (f += " active"), e = this.renderLocString(t.locText), r.createElement("label", {
                    key: n,
                    className: f
                }, r.createElement("input", {
                    type: "radio",
                    style: {
                        display: "none"
                    },
                    name: this.question.name,
                    value: t.value,
                    disabled: this.isDisplayMode,
                    checked: this.question.value == t.value,
                    onChange: this.handleOnChange
                }), i, e, u)
            }, t.prototype.renderOther = function () {
                return r.createElement("div", {
                    className: this.css.other
                }, r.createElement(o.a, {
                    question: this.question,
                    css: this.rootCss,
                    isDisplayMode: this.isDisplayMode
                }))
            }, t
        }(e.b);
        s.a.Instance.registerQuestion("rating", function (n) {
            return r.createElement(u, n)
        })
    }, function (n, t, i) {
        "use strict";
        var f = i(0),
            r = i(2),
            e = (i.n(r), i(4)),
            o = i(7),
            u;
        i.d(t, "a", function () {
            return u
        });
        u = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.state = {
                    value: i.question.value || ""
                }, i.handleOnChange = i.handleOnChange.bind(i), i.handleOnBlur = i.handleOnBlur.bind(i), i
            }
            return f.b(t, n), Object.defineProperty(t.prototype, "question", {
                get: function () {
                    return this.questionBase
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.componentWillReceiveProps = function (t) {
                n.prototype.componentWillReceiveProps.call(this, t);
                this.state = {
                    value: this.question.value || ""
                }
            }, t.prototype.handleOnChange = function (n) {
                this.setState({
                    value: n.target.value
                })
            }, t.prototype.handleOnBlur = function (n) {
                this.question.value = n.target.value;
                this.setState({
                    value: this.question.value || ""
                })
            }, t.prototype.render = function () {
                return this.question ? this.isDisplayMode ? r.createElement("div", {
                    id: this.question.inputId,
                    className: this.css
                }, this.question.value) : r.createElement("input", {
                    id: this.question.inputId,
                    className: this.css,
                    type: this.question.inputType,
                    value: this.state.value,
                    size: this.question.size,
                    placeholder: this.question.placeHolder,
                    onBlur: this.handleOnBlur,
                    onChange: this.handleOnChange
                }) : null
            }, t
        }(e.b);
        o.a.Instance.registerQuestion("text", function (n) {
            return r.createElement(u, n)
        })
    }, function (n, t, i) {
        "use strict";
        var u = i(0),
            f = i(5),
            e = i(24),
            r;
        i.d(t, "a", function () {
            return r
        });
        r = function (n) {
            function t(t) {
                var i = n.call(this) || this;
                return i.surveyValue = i.createSurvey(t), i.surveyValue.showTitle = !1, i.windowElement = document.createElement("div"), i
            }
            return u.b(t, n), t.prototype.getType = function () {
                return "window"
            }, Object.defineProperty(t.prototype, "survey", {
                get: function () {
                    return this.surveyValue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isShowing", {
                get: function () {
                    return this.isShowingValue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isExpanded", {
                get: function () {
                    return this.isExpandedValue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "title", {
                get: function () {
                    return this.titleValue ? this.titleValue : this.survey.title
                },
                set: function (n) {
                    this.titleValue = n
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.expand = function () {
                this.expandcollapse(!0)
            }, t.prototype.collapse = function () {
                this.expandcollapse(!1)
            }, t.prototype.createSurvey = function (n) {
                return new e.a(n)
            }, t.prototype.expandcollapse = function (n) {
                this.isExpandedValue = n
            }, t
        }(f.b);
        r.surveyElementName = "windowSurveyJS"
    }, function (n, t, i) {
        "use strict";
        var r = i(0),
            c = i(5),
            u = i(3),
            f;
        i.d(t, "e", function () {
            return f
        });
        i.d(t, "a", function () {
            return e
        });
        i.d(t, "d", function () {
            return o
        });
        i.d(t, "b", function () {
            return s
        });
        i.d(t, "c", function () {
            return h
        });
        f = function (n) {
            function t() {
                var t = n.call(this) || this;
                return t.opValue = "equal", t
            }
            return r.b(t, n), Object.defineProperty(t, "operators", {
                get: function () {
                    return null != t.operatorsValue ? t.operatorsValue : (t.operatorsValue = {
                        empty: function (n) {
                            return !n
                        },
                        notempty: function (n) {
                            return !!n
                        },
                        equal: function (n, t) {
                            return n == t
                        },
                        notequal: function (n, t) {
                            return n != t
                        },
                        contains: function (n, t) {
                            return n && n.indexOf && n.indexOf(t) > -1
                        },
                        notcontains: function (n, t) {
                            return !n || !n.indexOf || -1 == n.indexOf(t)
                        },
                        greater: function (n, t) {
                            return n > t
                        },
                        less: function (n, t) {
                            return n < t
                        },
                        greaterorequal: function (n, t) {
                            return n >= t
                        },
                        lessorequal: function (n, t) {
                            return n <= t
                        }
                    }, t.operatorsValue)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "operator", {
                get: function () {
                    return this.opValue
                },
                set: function (n) {
                    n && (n = n.toLowerCase(), t.operators[n] && (this.opValue = n))
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.check = function (n) {
                t.operators[this.operator](n, this.value) ? this.onSuccess() : this.onFailure()
            }, t.prototype.onSuccess = function () { }, t.prototype.onFailure = function () { }, t
        }(c.b);
        f.operatorsValue = null;
        var e = function (n) {
            function t() {
                var t = n.call(this) || this;
                return t.owner = null, t
            }
            return r.b(t, n), t.prototype.setOwner = function (n) {
                this.owner = n
            }, Object.defineProperty(t.prototype, "isOnNextPage", {
                get: function () {
                    return !1
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(f),
            o = function (n) {
                function t() {
                    var t = n.call(this) || this;
                    return t.pages = [], t.questions = [], t
                }
                return r.b(t, n), t.prototype.getType = function () {
                    return "visibletrigger"
                }, t.prototype.onSuccess = function () {
                    this.onTrigger(this.onItemSuccess)
                }, t.prototype.onFailure = function () {
                    this.onTrigger(this.onItemFailure)
                }, t.prototype.onTrigger = function (n) {
                    if (this.owner)
                        for (var i = this.owner.getObjects(this.pages, this.questions), t = 0; t < i.length; t++) n(i[t])
                }, t.prototype.onItemSuccess = function (n) {
                    n.visible = !0
                }, t.prototype.onItemFailure = function (n) {
                    n.visible = !1
                }, t
            }(e),
            s = function (n) {
                function t() {
                    return n.call(this) || this
                }
                return r.b(t, n), t.prototype.getType = function () {
                    return "completetrigger"
                }, Object.defineProperty(t.prototype, "isOnNextPage", {
                    get: function () {
                        return !0
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.onSuccess = function () {
                    this.owner && this.owner.doComplete()
                }, t
            }(e),
            h = function (n) {
                function t() {
                    return n.call(this) || this
                }
                return r.b(t, n), t.prototype.getType = function () {
                    return "setvaluetrigger"
                }, t.prototype.onSuccess = function () {
                    this.setToName && this.owner && this.owner.setTriggerValue(this.setToName, this.setValue, this.isVariable)
                }, t
            }(e);
        u.a.metaData.addClass("trigger", ["operator", "!value"]);
        u.a.metaData.addClass("surveytrigger", ["!name"], null, "trigger");
        u.a.metaData.addClass("visibletrigger", ["pages", "questions"], function () {
            return new o
        }, "surveytrigger");
        u.a.metaData.addClass("completetrigger", [], function () {
            return new s
        }, "surveytrigger");
        u.a.metaData.addClass("setvaluetrigger", ["!setToName", "setValue", "isVariable:boolean"], function () {
            return new h
        }, "surveytrigger")
    }, function (n, t, i) {
        "use strict";

        function r(n, t) {
            for (var f, e = /(\.0+)+$/, r = n.replace(e, "").split("."), u = t.replace(e, "").split("."), o = Math.min(r.length, u.length), i = 0; i < o; i++)
                if (f = parseInt(r[i], 10) - parseInt(u[i], 10)) return f;
            return r.length - u.length
        }
        i.d(t, "a", function () {
            return c
        });
        i.d(t, "b", function () {
            return r
        });
        var u = /(webkit)[ \/]([\w.]+)/,
            f = /(msie) (\d{1,2}\.\d)/,
            e = /(trident).*rv:(\d{1,2}\.\d)/,
            o = /(edge)\/((\d+)?[\w\.]+)/,
            s = /(mozilla)(?:.*? rv:([\w.]+))/,
            h = function (n) {
                n = n.toLowerCase();
                var i = {},
                    r = f.exec(n) || e.exec(n) || o.exec(n) || n.indexOf("compatible") < 0 && s.exec(n) || u.exec(n) || [],
                    t = r[1],
                    h = r[2];
                return "trident" === t || "edge" === t ? t = "msie" : "mozilla" === t && (t = "firefox"), t && (i[t] = !0, i.version = h), i
            },
            c = h(navigator.userAgent)
    }, function (n, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var e = i(0),
            u = i(2),
            f = (i.n(u), i(2)),
            o = (i.n(f), i(16)),
            s = i(27),
            h = i(37),
            c = i.n(h),
            r = i(36);
        i.d(t, "defaultStandardCss", function () {
            return r.a
        });
        i.d(t, "defaultBootstrapCss", function () {
            return r.b
        });
        i.d(t, "Survey", function () {
            return r.c
        });
        i.d(t, "ReactSurveyModel", function () {
            return r.d
        });
        i.d(t, "Model", function () {
            return r.e
        });
        i.d(t, "SurveyNavigationBase", function () {
            return r.f
        });
        i.d(t, "SurveyNavigation", function () {
            return r.g
        });
        i.d(t, "SurveyPage", function () {
            return r.h
        });
        i.d(t, "SurveyRow", function () {
            return r.i
        });
        i.d(t, "SurveyQuestion", function () {
            return r.j
        });
        i.d(t, "SurveyQuestionErrors", function () {
            return r.k
        });
        i.d(t, "SurveyElementBase", function () {
            return r.l
        });
        i.d(t, "SurveyQuestionElementBase", function () {
            return r.m
        });
        i.d(t, "SurveyQuestionCommentItem", function () {
            return r.n
        });
        i.d(t, "SurveyQuestionComment", function () {
            return r.o
        });
        i.d(t, "SurveyQuestionCheckbox", function () {
            return r.p
        });
        i.d(t, "SurveyQuestionCheckboxItem", function () {
            return r.q
        });
        i.d(t, "SurveyQuestionDropdown", function () {
            return r.r
        });
        i.d(t, "SurveyQuestionMatrixDropdown", function () {
            return r.s
        });
        i.d(t, "SurveyQuestionMatrixDropdownRow", function () {
            return r.t
        });
        i.d(t, "SurveyQuestionMatrix", function () {
            return r.u
        });
        i.d(t, "SurveyQuestionMatrixRow", function () {
            return r.v
        });
        i.d(t, "SurveyQuestionHtml", function () {
            return r.w
        });
        i.d(t, "SurveyQuestionFile", function () {
            return r.x
        });
        i.d(t, "SurveyQuestionMultipleText", function () {
            return r.y
        });
        i.d(t, "SurveyQuestionMultipleTextItem", function () {
            return r.z
        });
        i.d(t, "SurveyQuestionRadiogroup", function () {
            return r.A
        });
        i.d(t, "SurveyQuestionText", function () {
            return r.B
        });
        i.d(t, "SurveyQuestionMatrixDynamic", function () {
            return r.C
        });
        i.d(t, "SurveyQuestionMatrixDynamicRow", function () {
            return r.D
        });
        i.d(t, "SurveyProgress", function () {
            return r.E
        });
        i.d(t, "SurveyQuestionRating", function () {
            return r.F
        });
        i.d(t, "SurveyWindow", function () {
            return r.G
        });
        i.d(t, "ReactQuestionFactory", function () {
            return r.H
        });
        i.d(t, "QuestionFactory", function () {
            return r.I
        });
        i.d(t, "Version", function () {
            return r.J
        });
        i.d(t, "AnswerCountValidator", function () {
            return r.K
        });
        i.d(t, "EmailValidator", function () {
            return r.L
        });
        i.d(t, "NumericValidator", function () {
            return r.M
        });
        i.d(t, "RegexValidator", function () {
            return r.N
        });
        i.d(t, "SurveyValidator", function () {
            return r.O
        });
        i.d(t, "TextValidator", function () {
            return r.P
        });
        i.d(t, "ValidatorResult", function () {
            return r.Q
        });
        i.d(t, "ValidatorRunner", function () {
            return r.R
        });
        i.d(t, "Base", function () {
            return r.S
        });
        i.d(t, "Event", function () {
            return r.T
        });
        i.d(t, "SurveyError", function () {
            return r.U
        });
        i.d(t, "ItemValue", function () {
            return r.V
        });
        i.d(t, "LocalizableString", function () {
            return r.W
        });
        i.d(t, "ChoicesRestfull", function () {
            return r.X
        });
        i.d(t, "Condition", function () {
            return r.Y
        });
        i.d(t, "ConditionNode", function () {
            return r.Z
        });
        i.d(t, "ConditionRunner", function () {
            return r._0
        });
        i.d(t, "ConditionsParser", function () {
            return r._1
        });
        i.d(t, "ProcessValue", function () {
            return r._2
        });
        i.d(t, "CustomError", function () {
            return r._3
        });
        i.d(t, "ExceedSizeError", function () {
            return r._4
        });
        i.d(t, "RequreNumericError", function () {
            return r._5
        });
        i.d(t, "JsonError", function () {
            return r._6
        });
        i.d(t, "JsonIncorrectTypeError", function () {
            return r._7
        });
        i.d(t, "JsonMetadata", function () {
            return r._8
        });
        i.d(t, "JsonMetadataClass", function () {
            return r._9
        });
        i.d(t, "JsonMissingTypeError", function () {
            return r._10
        });
        i.d(t, "JsonMissingTypeErrorBase", function () {
            return r._11
        });
        i.d(t, "JsonObject", function () {
            return r._12
        });
        i.d(t, "JsonObjectProperty", function () {
            return r._13
        });
        i.d(t, "JsonRequiredPropertyError", function () {
            return r._14
        });
        i.d(t, "JsonUnknownPropertyError", function () {
            return r._15
        });
        i.d(t, "MatrixDropdownCell", function () {
            return r._16
        });
        i.d(t, "MatrixDropdownColumn", function () {
            return r._17
        });
        i.d(t, "MatrixDropdownRowModelBase", function () {
            return r._18
        });
        i.d(t, "QuestionMatrixDropdownModelBase", function () {
            return r._19
        });
        i.d(t, "MatrixDropdownRowModel", function () {
            return r._20
        });
        i.d(t, "QuestionMatrixDropdownModel", function () {
            return r._21
        });
        i.d(t, "MatrixDynamicRowModel", function () {
            return r._22
        });
        i.d(t, "QuestionMatrixDynamicModel", function () {
            return r._23
        });
        i.d(t, "MatrixRowModel", function () {
            return r._24
        });
        i.d(t, "QuestionMatrixModel", function () {
            return r._25
        });
        i.d(t, "MultipleTextItemModel", function () {
            return r._26
        });
        i.d(t, "QuestionMultipleTextModel", function () {
            return r._27
        });
        i.d(t, "PanelModel", function () {
            return r._28
        });
        i.d(t, "PanelModelBase", function () {
            return r._29
        });
        i.d(t, "QuestionRowModel", function () {
            return r._30
        });
        i.d(t, "PageModel", function () {
            return r._31
        });
        i.d(t, "Question", function () {
            return r._32
        });
        i.d(t, "QuestionBase", function () {
            return r._33
        });
        i.d(t, "QuestionCheckboxBase", function () {
            return r._34
        });
        i.d(t, "QuestionSelectBase", function () {
            return r._35
        });
        i.d(t, "QuestionCheckboxModel", function () {
            return r._36
        });
        i.d(t, "QuestionCommentModel", function () {
            return r._37
        });
        i.d(t, "QuestionDropdownModel", function () {
            return r._38
        });
        i.d(t, "ElementFactory", function () {
            return r._39
        });
        i.d(t, "QuestionFileModel", function () {
            return r._40
        });
        i.d(t, "QuestionHtmlModel", function () {
            return r._41
        });
        i.d(t, "QuestionRadiogroupModel", function () {
            return r._42
        });
        i.d(t, "QuestionRatingModel", function () {
            return r._43
        });
        i.d(t, "QuestionTextModel", function () {
            return r._44
        });
        i.d(t, "SurveyModel", function () {
            return r._45
        });
        i.d(t, "SurveyTrigger", function () {
            return r._46
        });
        i.d(t, "SurveyTriggerComplete", function () {
            return r._47
        });
        i.d(t, "SurveyTriggerSetValue", function () {
            return r._48
        });
        i.d(t, "SurveyTriggerVisible", function () {
            return r._49
        });
        i.d(t, "Trigger", function () {
            return r._50
        });
        i.d(t, "SurveyWindowModel", function () {
            return r._51
        });
        i.d(t, "TextPreProcessor", function () {
            return r._52
        });
        i.d(t, "dxSurveyService", function () {
            return r._53
        });
        i.d(t, "surveyLocalization", function () {
            return r._54
        });
        i.d(t, "surveyStrings", function () {
            return r._55
        });
        i.d(t, "QuestionCustomWidget", function () {
            return r._56
        });
        i.d(t, "CustomWidgetCollection", function () {
            return r._57
        });
        i.d(t, "__assign", function () {
            return r._58
        });
        i.d(t, "__extends", function () {
            return r._59
        });
        i.d(t, "__decorate", function () {
            return r._60
        });
        c.a.fn.extend({
            Survey: function (n) {
                this.each(function () {
                    f.render(u.createElement(o.a, e.a({}, n)), this)
                })
            },
            SurveyWindow: function (n) {
                this.each(function () {
                    f.render(u.createElement(s.a, e.a({}, n)), this)
                })
            }
        })
    }])
}), currenturl = window.location.href, jQuery(document).ready(function () {
    currenturl.includes("blogs") ? currenturl.includes("search") && (currenturl.includes("AVANADE.COM") ? jQuery("body").bind("DOMNodeInserted", function () {
        jQuery(this).find(".showBlog").hide();
        jQuery(this).find(".avanadeBlog").show()
    }) : currenturl.includes("BLOG%20RESULTS") || currenturl.includes("Suchergebnisse") ? jQuery("body").bind("DOMNodeInserted", function () {
        jQuery(this).find(".showBlog").show();
        jQuery(this).find(".avanadeBlog").hide()
    }) : jQuery("body").bind("DOMNodeInserted", function () {
        jQuery(this).find(".showBlog").show();
        jQuery(this).find(".avanadeBlog").hide()
    }), setTimeout(function () {
        try {
            Coveo.SearchEndpoint.configureSampleEndpoint();
            var n = document.querySelector("#coveo0c5c4669");
            n.addEventListener("click", t);

            function t(n) {
                var t = n.target.title,
                    i;
                console.log(n.target.title);
                t.includes("AVANADE.COM") ? jQuery("body").bind("DOMNodeInserted", function () {
                    jQuery(this).find(".showBlog").hide();
                    jQuery(this).find(".avanadeBlog").show()
                }) : (t.includes("BLOG RESULTS") || t.includes("Suchergebnisse")) && jQuery("body").bind("DOMNodeInserted", function () {
                    jQuery(this).find(".showBlog").show();
                    jQuery(this).find(".avanadeBlog").hide()
                });
                Coveo.$(".CoveoFacet").coveo("reset");
                Coveo.$("#coveo0c5c4669").coveo().selectValue(n.target.title);
                i = new Promise(function (n) {
                    setTimeout(function () {
                        Coveo.$(".coveo-results-column").coveo("executeQuery");
                        n("result")
                    }, 1e3)
                });
                i.then(function (n) {
                    console.log("Fulfilled: " + n)
                }, function (n) {
                    console.log("Rejected: " + n)
                })
            }
        } catch (t) {
            console.log()
        }
    }, 0)) : (currenturl.includes("/search") || currenturl.includes("sc_mode")) && (currenturl.includes("AVANADE.COM") ? jQuery("body").bind("DOMNodeInserted", function () {
        jQuery(this).find(".showBlog").hide();
        jQuery(this).find(".avanadeBlog").show()
    }) : currenturl.includes("BLOG%20RESULTS") || currenturl.includes("Suchergebnisse") ? jQuery("body").bind("DOMNodeInserted", function () {
        jQuery(this).find(".showBlog").show();
        jQuery(this).find(".avanadeBlog").hide()
    }) : jQuery("body").bind("DOMNodeInserted", function () {
        jQuery(this).find(".showBlog").hide();
        jQuery(this).find(".avanadeBlog").show()
    }), setTimeout(function () {
        try {
            Coveo.SearchEndpoint.configureSampleEndpoint();
            var n = document.querySelector("#coveo96646460");
            n.addEventListener("click", t);

            function t(n) {
                var t = n.target.title,
                    i;
                console.log(n.target.title);
                t.includes("AVANADE.COM") ? jQuery("body").bind("DOMNodeInserted", function () {
                    jQuery(this).find(".showBlog").hide();
                    jQuery(this).find(".avanadeBlog").show()
                }) : (t.includes("BLOG RESULTS") || t.includes("Suchergebnisse")) && jQuery("body").bind("DOMNodeInserted", function () {
                    jQuery(this).find(".showBlog").show();
                    jQuery(this).find(".avanadeBlog").hide()
                });
                Coveo.$(".CoveoFacet").coveo("reset");
                Coveo.$("#coveo96646460").coveo().selectValue(n.target.title);
                i = new Promise(function (n) {
                    setTimeout(function () {
                        Coveo.$(".coveo-results-column").coveo("executeQuery");
                        n("result")
                    }, 1e3)
                });
                i.then(function (n) {
                    console.log("Fulfilled: " + n)
                }, function (n) {
                    console.log("Rejected: " + n)
                })
            }
        } catch (t) {
            console.log()
        }
    }, 0));
    currenturl.includes("sc_mode") && (currenturl.includes("AVANADE.COM") ? jQuery("body").bind("DOMNodeInserted", function () {
        jQuery(this).find(".showBlog").hide();
        jQuery(this).find(".avanadeBlog").show()
    }) : currenturl.includes("BLOG%20RESULTS") || currenturl.includes("Suchergebnisse") ? jQuery("body").bind("DOMNodeInserted", function () {
        jQuery(this).find(".showBlog").show();
        jQuery(this).find(".avanadeBlog").hide()
    }) : jQuery("body").bind("DOMNodeInserted", function () {
        jQuery(this).find(".showBlog").hide();
        jQuery(this).find(".avanadeBlog").show()
    }), setTimeout(function () {
        try {
            Coveo.SearchEndpoint.configureSampleEndpoint();
            var n = document.querySelector("#coveo0c5c4669");
            n.addEventListener("click", t);

            function t(n) {
                var t = n.target.title,
                    i;
                console.log(n.target.title);
                t.includes("AVANADE.COM") ? jQuery("body").bind("DOMNodeInserted", function () {
                    jQuery(this).find(".showBlog").hide();
                    jQuery(this).find(".avanadeBlog").show()
                }) : (t.includes("BLOG RESULTS") || t.includes("Suchergebnisse")) && jQuery("body").bind("DOMNodeInserted", function () {
                    jQuery(this).find(".showBlog").show();
                    jQuery(this).find(".avanadeBlog").hide()
                });
                Coveo.$(".CoveoFacet").coveo("reset");
                Coveo.$("#coveo0c5c4669").coveo().selectValue(n.target.title);
                i = new Promise(function (n) {
                    setTimeout(function () {
                        Coveo.$(".coveo-results-column").coveo("executeQuery");
                        n("result")
                    }, 1e3)
                });
                i.then(function (n) {
                    console.log("Fulfilled: " + n)
                }, function (n) {
                    console.log("Rejected: " + n)
                })
            }
        } catch (t) {
            console.log()
        }
    }, 0))
}), window.location.href.includes("/search")) {
    jQuery(document).ready(function () {
        jQuery(".CoveoSearchButton").trigger("click");
        window.location.href.includes("/search") && (window.location.hash.includes("q") === !1 && (jQuery(".coveo-main-section .coveo-facet-column").css({
            display: "none"
        }), jQuery(".coveo-main-section .coveo-results-column").css({
            display: "none"
        })), window.location.hash.includes("q") === !0 && jQuery(".coveo-main-section .CoveoPager").css({
            display: "block"
        }))
    });
    jQuery(window).on("hashchange", function () {
        var n = document.querySelectorAll(".CoveoOmnibox.coveo-query-syntax-disabled.magic-box input");
        n != null && (console.log(n), jQuery(".coveo-main-section .coveo-dropdown-header-wrapper .coveo-dropdown-header").css({
            display: "block"
        }))
    });
    jQuery(document).ready(function () {
        if (jQuery("li.coveo-pager-next a").prepend("<span>Next<\/span>"), jQuery("li.coveo-pager-previous a").append("<span>Previous<\/span>"), window.location.href.includes("/search") && window.addEventListener("keyup", function (n) {
            n.keyCode === 13 && (jQuery(".magic-box-highlight-container span").text().length > 0 && (jQuery(".coveo-main-section .coveo-dropdown-header-wrapper .coveo-dropdown-header").css({
                display: "block"
            }), jQuery(".coveo-results-column").css({
                display: "block"
            }), jQuery(".coveo-main-section .CoveoPager").css({
                display: "block"
            }), jQuery(window).width() > 1024 && jQuery(".coveo-facet-column").css({
                display: "block"
            })), window.location.hash.includes("q") === !1 && jQuery(".magic-box-highlight-container span").text().length <= 0 && (jQuery(".coveo-facet-column").css({
                display: "none"
            }), jQuery(".coveo-results-column").css({
                display: "none"
            })))
        }, !1), window.location.href.includes("/search")) jQuery(document).on("click", "a.CoveoSearchButton", function () {
            var n;
            jQuery(".magic-box-highlight-container span").text().length <= 0 && (jQuery(".coveo-main-section .coveo-dropdown-header-wrapper .coveo-dropdown-header").css({
                display: "none"
            }), jQuery(".coveo-facet-column").css({
                display: "none"
            }), jQuery(".coveo-results-column").css({
                display: "none"
            }));
            jQuery(".magic-box-highlight-container span").text().length > 0 && jQuery(window).width() > 1050 && (jQuery(".coveo-facet-column").css({
                display: "block"
            }), jQuery(".coveo-results-column").css({
                display: "block"
            }), jQuery(".coveo-main-section .CoveoPager").css({
                display: "block"
            }));
            jQuery(window).width() < 1024 && jQuery(".magic-box-highlight-container span").text().length > 0 && (jQuery(".coveo-main-section .coveo-facet-column").css({
                display: "none"
            }), jQuery(".coveo-main-section .coveo-results-column").css({
                display: "block"
            }), jQuery(".coveo-main-section .coveo-dropdown-header-wrapper .coveo-dropdown-header").css({
                display: "block"
            }));
            window.location.hash.includes("q") === !1 && (window.location.href.includes("&f:Tag=[AVANADE.COM]") && (n = document.getElementById("coveo8b5729a3").dataset.allowQueriesWithoutKeywords = !1, jQuery(".magic-box-highlight-container span").text().length <= 0 && n === !1 && (jQuery(".coveo-facet-column").css({
                display: "none"
            }), jQuery(".coveo-results-column").css({
                display: "none"
            }))), window.location.href.includes("&f:Tag=[BLOG%20RESULT]") && (n = document.getElementById("coveofe55779e").dataset.allowQueriesWithoutKeywords = !1, jQuery(".magic-box-highlight-container span").text().length <= 0 && n === !1 && (jQuery(".coveo-facet-column").css({
                display: "none"
            }), jQuery(".coveo-results-column").css({
                display: "none"
            }))))
        })
    })
}
jQuery("body").bind("DOMNodeInserted", function () {
    window.location.hash.includes("q") === !1 && jQuery(".coveo-main-section .coveo-dropdown-header-wrapper .coveo-dropdown-header").css({
        display: "none"
    })
});
jQuery(document).ready(function () {
    jQuery("body").on("click", "a.coveo-facet-dropdown-header,.coveo-dropdown-header-active", function () {
        jQuery("body").toggleClass("no-scroll-sc")
    });
    jQuery("body").on("click", ".coveo-dropdown-background-active,.coveo-dropdown-background", function () {
        jQuery("body").removeClass("no-scroll-sc")
    })
})