!function (n) {
    var e = n.document,
        t = e.documentElement,
        i = 375,
        d = i / 100,
        o = "orientationchange" in n ? "orientationchange" : "resize",
        w = t.clientWidth || 320; w > 720 && (w = 720),
        fn = function () {
            t.style.fontSize = w / d + "px";
        };
    e.addEventListener && (n.addEventListener(o, fn, !1), e.addEventListener("DOMContentLoaded", fn, !1))
    fn(); // 解决刷新过程中加载样式问题
}(window);