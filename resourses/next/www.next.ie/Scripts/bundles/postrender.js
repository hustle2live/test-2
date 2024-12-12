function checkNextSaleBagWarning(n) {
    var u = readCookie("NextSaleBagWarning"),
        f, t = "",
        o = 0,
        s = 0,
        h = "",
        e = "",
        c = "",
        i = "",
        r;
    if (u && u.indexOf("&") > -1) {
        for (f = u.split("&"), r = 0; r < f.length; r++) {
            e = f[r];
            c = e.split("=")[0];
            i = e.split("=")[1];
            switch (c) {
                case "readOnMainSite":
                    t = i;
                    break;
                case "nxti":
                    o = i;
                    break;
                case "nxtv":
                    s = i
            }
        }
        t != null && t != "" && t == "False" && (h = "NextSaleBagWarning=readOnMainSite=True;path=/;", document.cookie = h, saleBagWarningModal(o, s, n))
    }
}

function saleBagWarningModal(n, t, i) {
    var f = "s",
        r, u;
    n == 1 && (f = "");
    $("body").append('<div id="nmcontent"><\/div>');
    i.indexOf("//") == 0 && (i = "http:" + i);
    var e = '<a href="' + i + '" class="buttonleft button">Yes, return to sale<\/a>',
        o = '<p class="modal-title"> You could lose your sale bag.<br />Would you like to return to our Sale Site?<\/p><p style="text-align:center">' + e + '<a href="#" onclick="nmtidy()" class="buttonright button">No, Thank You<\/a><\/p>';
    $("#nmcontent").html(o);
    $("#nmcontent").wrap('<div id="nmwrap" />');
    $("#nmwrap").wrap('<div id="nmwrap-outer" />');
    r = $('<div id="nmtop" <p  <\/p> CAREFUL <a href="#" id="nmclose" title="Click to close this window"> <\/a><\/div>');
    u = $("<div id='nmbottom'><\/div>");
    $(r).insertBefore("#nmcontent");
    $(u).insertAfter("#nmcontent");
    $("body").append('<div id="nmmask" />');
    var s = $(window).height(),
        h = $("body").height(),
        c = h - s;
    $("#nmmask").css("bottom", -c);
    $("#nmclose").click(function() {
        $("#nmwrap").fadeOut(1e3);
        $("#nmmask").fadeOut(1e3);
        setTimeout(function() {
            $("#nmwrap").remove()
        }, 1e3);
        setTimeout(function() {
            $("#nmmask").remove()
        }, 1e3)
    });
    $("#nmmask").click(function() {
        $("#nmwrap").fadeOut(1e3);
        $("#nmmask").fadeOut(1e3);
        setTimeout(function() {
            $("#nmwrap").remove()
        }, 1e3);
        setTimeout(function() {
            $("#nmmask").remove()
        }, 1e3)
    })
}

function nmtidy() {
    $("#nmwrap").fadeOut(1e3);
    $("#nmmask").fadeOut(1e3);
    setTimeout(function() {
        $("#nmwrap").remove()
    }, 1e3);
    setTimeout(function() {
        $("#nmmask").remove()
    }, 1e3)
}
var nxt = nxt || {};
if (nxt.postrender = function() {
        var n = {
            init: function() {
                n.checkPreloadSupported();
                n.postLoadCss();
                n.postLoadImg()
            },
            checkPreloadSupported: function() {
                if (!window.isPreloadSupportedChecked) {
                    window.isPreloadSupportedChecked = !0;
                    var n = document.createElement("link").relList;
                    window.isPreloadSupported = !!(n && n.supports && n.supports("preload"))
                }
            },
            postLoadCss: function() {
                $.each(postloadcss, function(t, i) {
                    i.length && n.loadCss(i)
                })
            },
            loadCss: function(n) {
                var i = document.getElementsByTagName("head")[0],
                    t = document.createElement("link");
                t.href = n;
                t.rel = "stylesheet";
                window.isPreloadSupported && (t.rel = "preload", t.setAttribute("as", "style"), t.setAttribute("onload", "this.onload=null;this.rel='stylesheet';"));
                i.appendChild(t)
            },
            postLoadImg: function() {
                $("[data-img-src]").each(function() {
                    var n = $(this),
                        t;
                    n.find("img").length || (t = $("<img/>").attr("src", n.data("img-src")), n.data("img-alt").length && t.attr("alt", n.data("img-alt")), n.append(t))
                })
            }
        };
        return {
            init: n.init
        }
    }(), jqueryUpgradeEnabledOnPage) $(window).on("load", function() {
    nxt.postrender.init();
    $(".PageHeader").hasClass("Large") && window.location.pathname.toLowerCase() === Next.Settings.Channel.MainSiteAbsolutePath.toLowerCase() + "/" && $(".BreadcrumbNavigation").css("display", "none")
});
else $(window).load(function() {
    nxt.postrender.init();
    $(".PageHeader").hasClass("Large") && window.location.pathname.toLowerCase() === Next.Settings.Channel.MainSiteAbsolutePath.toLowerCase() + "/" && $(".BreadcrumbNavigation").css("display", "none")
});
$(function() {
    "placeholder" in document.createElement("input") || $("input[placeholder], textarea[placeholder]").each(function() {
        if ($(this).attr("type") != "password") {
            var n = $(this),
                t = n.attr("placeholder");
            this.value == "" && (this.value = t);
            n.focus(function() {
                this.value == t && (this.value = "")
            }).blur(function() {
                $.trim(this.value) == "" && (this.value = t)
            });
            n.parents("form").submit(function() {
                n.attr("placeholder") == n.val() && n.val("")
            });
            n.parents("form") && n.parents("form").data("events") && n.parents("form").data("events").submit.reverse()
        }
    })
});
$(document).ready(function() {
    for (var r, n, u = $('a[href$="/changedevice/mobile"]'), t = 0, i = u.length; t < i; t++) n = u[t], n.href = "#", n.className += " changedevice-link", $(n).attr("data-devicetarget", "mobile");
    for (r = $('a[href$="/changedevice/desktop"]'), t = 0, i = r.length; t < i; t++) n = r[t], n.href = "#", n.className += " changedevice-link", $(n).attr("data-devicetarget", "desktop");
    $(".changedevice-link").on("click", function() {});
    $("body").on("click", ".changedevice-link", function(n) {
        n.preventDefault();
        var i = "/changedevice/" + $(".changedevice-link").data("devicetarget"),
            t = Next.getIntlUri(i);
        t = t.replace("//", "/");
        $.ajax({
            type: "GET",
            dataType: "json",
            url: t,
            success: function() {
                location.reload()
            }
        })
    })
});
$(document).ready(function() {
    function st() {
        var i = $("#totalPlatformPartnershipBanner"),
            n = $("#totalPlatformPartnershipBanner").height(),
            t, r, u;
        i.css("display", "none");
        Next.Settings.Channel.IsMobileSite ? (l.removeClass("tpBannerActive"), c.removeClass("tpBannerActive"), a.removeClass("tpBannerActive"), v.removeClass("tpBannerActive"), vt(), at(), $("#fixedSmallItemImage").css("margin-top", "4%"), t = $("div[data-pattern='navigation-control']"), $(t) && $(t).css("padding-top", "10px"), $(".SNDefaultNAV").removeClass("withTpLiteBanner"), $(".mob-nav-overlay").removeClass("withTpLiteBanner"), $(".mob-nav-overlay").css("top", "88px"), $('div[data-pattern="navigation-control"]').find("div[data-tab-menu]").removeClass("TpLiteSofaTabs")) : (ct(i.height()), Next.Settings.UI.HorizontalFiltersEnabled || $("#ResultHeader").css("margin-top", parseInt($("#ResultHeader").css("margin-top")) - n + "px"), r = parseInt($("#desktop-list-page #FLP-header-section").css("margin-top")) - n, $("#desktop-list-page #FLP-header-section").css("margin-top", r + "px"), u = $(".HeaderSpacer").height() - n, $(".HeaderSpacer").height(u + "px"), $(".TabbedContentPage.sofas .tabbedContent").removeClass("tpLiteBanner"))
    }

    function ht() {
        var f = Next.Settings.Channel.TotalPlatformLiteClientCookieName,
            r = {},
            u = readCookie(f),
            i, n, t;
        if (u != null)
            for (i = u.split("&"), n = 0; n < i.length; n++) t = i[n].split("="), t != null && (r[t[0]] = t[1]);
        return r
    }

    function ct(n) {
        $(".filterControls").css("margin-top", parseInt($(".filterControls").css("margin-top")) - n + "px");
        $(".ResultCount").css("margin-top", parseInt($(".ResultCount").css("margin-top")) - n + "px")
    }

    function lt() {
        var n = parseInt($("#header_upper-nav_nav").css("height")) + parseInt($("#header_lower-nav_nav").css("height"));
        $("#nav-headers-spacer").height(n)
    }

    function at() {
        var n = parseInt($("#header_upper-nav_nav").css("height")) + parseInt($("#header_lower-nav_nav").css("height"));
        $("#nav-headers-spacer").height(n)
    }

    function vt() {
        $(".mob-nav-overlay").addClass("SNDefaultNavAdjustOverlay");
        $(".SNDefaultNAV").addClass("SNDefaultNavAdjustNav")
    }

    function ft(n) {
        if (n === void 0 && (n = !1), Next.Settings.Channel.IsTotalPlatformLiteClient && Next.Settings.Channel.TotalPlatformLiteClientCookieEnabled) {
            var t = "/totalplatformliteclient/updatecookie";
            Next.Settings.Channel.MainSiteAbsolutePath && Next.Settings.Channel.MainSiteAbsolutePath !== "/" && (t = Next.Settings.Channel.MainSiteAbsolutePath + t);
            $.ajax({
                url: t,
                type: "POST",
                cache: !1,
                data: {
                    hidePartnershipBanner: n
                },
                async: !0,
                success: function(n) {
                    console.log(n)
                },
                error: function() {
                    console.log("Total Platform Lite Client - Update Cookie - Failed")
                }
            })
        }
    }
    var s, f, h, rt, y, n, i, ut, e, o;
    ft();
    var u = ht(),
        et = u[Next.Settings.Channel.TotalPlatformLiteClientCookieNameKey],
        t = u[Next.Settings.Channel.TotalPlatformLiteClientCookieThemeKey],
        ot = u[Next.Settings.Channel.TotalPlatformLiteClientCookieShowHeaderPartnershipBannerKey] === "True",
        p = u[Next.Settings.Channel.TotalPlatformLiteClientCookieUrlKey],
        r = Next.Settings.Channel.IsMobileSite;
    if (et && t && p)
        if (s = Next.Settings.Channel.ChannelTheme ? Next.Settings.Channel.ChannelTheme : "", s !== t) {
            if (f = $("#totalPlatformBanner"), h = f.find("#TpShopBannerLink"), $(h).attr("href", p), $(h).find("#TpLogo").addClass(t), $(f).css("display", "block"), n = f.height(), r) {
                var w = parseInt($("#filter-header").css("top")),
                    b = w + n,
                    k = parseInt($("#filter-wrapper").css("top")),
                    d = k + n,
                    g = parseInt($("#sort-wrapper").css("margin-top")),
                    nt = g + n,
                    tt = parseInt($("#more-wrapper").css("margin-top")),
                    it = tt + n,
                    c = $("#header_upper-nav_nav"),
                    l = $("#header_lower-nav_nav"),
                    a = $(".navbar"),
                    v = $("#nav-headers-spacer");
                $("#filter-header").css("top", b + "px");
                $("#filter-wrapper").css("top", d + "px");
                $("#sort-wrapper").css("margin-top", nt + "px");
                $("#more-wrapper").css("margin-top", it + "px");
                l.addClass("tpBannerActive");
                c.addClass("tpBannerActive");
                a.addClass("tpBannerActive");
                v.addClass("tpBannerActive");
                $("#fixedSmallItemImage").css("margin-top", "8%");
                $("#searchTextField, #viewToggleButton").attr("style", "top: " + ($("#nav-headers").height() + 6) + "px !important");
                i = $("div[data-pattern='navigation-control']");
                $(i) && $(i).css("padding-top", "50px");
                $('div[data-pattern="navigation-control"]').find("div[data-tab-menu]").addClass("TpLiteSofaTabs")
            } else e = $(".HeaderSpacer").height(), $(".HeaderSpacer").height(e + n + "px"), $(".filterControls").css("margin-top", parseInt($(".filterControls").css("margin-top")) + n + "px"), $(".ResultCount").css("margin-top", parseInt($(".ResultCount").css("margin-top")) + n + "px"), Next.Settings.UI.HorizontalFiltersEnabled || $("#ResultHeader").css("margin-top", parseInt($("#ResultHeader").css("margin-top")) + n + "px"), o = $("#desktop-list-page #FLP-header-section"), $("#desktop-list-page #FLP-header-section").css("margin-top", parseInt($(o).css("margin-top")) + n + "px"), rt = $(".search-dropdown-container"), $(rt).addClass("bannerShowing"), $(".TabbedContentPage.sofas .tabbedContent").addClass("tpLiteBanner");
            $("#totalPlatformBanner").on("click", function() {
                var n = "Shop_" + t;
                r ? TrackGTMEvent(t, "tap", n) : TrackGAEvent(t, "click", n)
            })
        } else if (s === t && ot) {
        if (y = $("#totalPlatformPartnershipBanner"), $("#totalPlatformPartnershipBanner .tpBannerContent").append("<span class=Bannerclose><\/span>"), $(y).css("display", "block"), n = y.height(), r) {
            var w = parseInt($("#filter-header").css("top")),
                b = w + n,
                k = parseInt($("#filter-wrapper").css("top")),
                d = k + n,
                g = parseInt($("#sort-wrapper").css("margin-top")),
                nt = g + n,
                tt = parseInt($("#more-wrapper").css("margin-top")),
                it = tt + n,
                c = $("#header_upper-nav_nav"),
                l = $("#header_lower-nav_nav"),
                a = $(".navbar"),
                v = $("#nav-headers-spacer");
            $("#filter-header").css("top", b + "px");
            $("#filter-wrapper").css("top", d + "px");
            $("#sort-wrapper").css("margin-top", nt + "px");
            $("#more-wrapper").css("margin-top", it + "px");
            l.addClass("tpBannerActive");
            c.addClass("tpBannerActive");
            a.addClass("tpBannerActive");
            v.addClass("tpBannerActive");
            $("#searchTextField, #viewToggleButton").attr("style", "top: " + ($("#nav-headers").height() + 6) + "px !important");
            $("#fixedSmallItemImage").css("margin-top", "8%");
            i = $("div[data-pattern='navigation-control']");
            $(i) && $(i).css("padding-top", "50px");
            $(".SNDefaultNAV").addClass("withTpLiteBanner");
            $(".mob-nav-overlay").addClass("withTpLiteBanner");
            $('div[data-pattern="navigation-control"]').find("div[data-tab-menu]").addClass("TpLiteSofaTabs")
        } else ut = $("#totalPlatformPartnershipBanner"), $(ut).css("display", "block"), e = $(".HeaderSpacer").height(), $(".HeaderSpacer").height(e + n + "px"), $(".filterControls").css("margin-top", parseInt($(".filterControls").css("margin-top")) + n + "px"), $(".ResultCount").css("margin-top", parseInt($(".ResultCount").css("margin-top")) + n + "px"), Next.Settings.UI.HorizontalFiltersEnabled || $("#ResultHeader").css("margin-top", parseInt($("#ResultHeader").css("margin-top")) + n + "px"), o = $("#desktop-list-page #FLP-header-section"), $("#desktop-list-page #FLP-header-section").css("margin-top", parseInt($(o).css("margin-top")) + n + "px"), $(".TabbedContentPage.sofas .tabbedContent").addClass("tpLiteBanner");
        $('.DesktopContent a[data-link="unlimited"]').on("click", function() {
            var n = t + "_Partnership_Banner_Unlimited Pass";
            r ? TrackGTMEvent(t, "tap", n) : TrackGAEvent(t, "click", n)
        });
        $('.DesktopContent a[data-link="findmore"]').on("click", function() {
            TrackGAEvent(t, "click", t + "_Partnership_Banner_Findoutmore")
        });
        $(".partnershipText a").on("click", function() {
            TrackGTMEvent(t, "tap", t + "_Partnership_Banner_Findoutmore")
        })
    }
    $(".PageHeader").ready(function() {
        lt()
    });
    $(".Bannerclose").click(function() {
        st();
        ft(!0);
        r ? TrackGTMEvent(t, "tap", t + "_Partnership_Banner_Close") : TrackGAEvent(t, "click", t + "_Partnership_Banner_Close")
    });
    $(".BagBannerClose").on("click", function() {
        $("#tpLiteBagBanner").hide()
    })
})