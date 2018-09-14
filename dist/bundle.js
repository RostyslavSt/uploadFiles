! function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function (t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 9)
}({
    7: function (e, t, n) {
        (function (t) {
            var n = t && t.pid ? t.pid.toString(36) : "";

            function r() {
                var e = Date.now(),
                    t = r.last || e;
                return r.last = e > t ? e : t + 1
            }
            e.exports = e.exports.default = function (e) {
                return (e || "") + "" + n + r().toString(36)
            }, e.exports.process = function (e) {
                return (e || "") + n + r().toString(36)
            }, e.exports.time = function (e) {
                return (e || "") + r().toString(36)
            }
        }).call(this, n(8))
    },
    8: function (e, t) {
        var n, r, o = e.exports = {};

        function i() {
            throw new Error("setTimeout has not been defined")
        }

        function l() {
            throw new Error("clearTimeout has not been defined")
        }

        function a(e) {
            if (n === setTimeout) return setTimeout(e, 0);
            if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }! function () {
            try {
                n = "function" == typeof setTimeout ? setTimeout : i
            } catch (e) {
                n = i
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : l
            } catch (e) {
                r = l
            }
        }();
        var s, u = [],
            c = !1,
            d = -1;

        function p() {
            c && s && (c = !1, s.length ? u = s.concat(u) : d = -1, u.length && f())
        }

        function f() {
            if (!c) {
                var e = a(p);
                c = !0;
                for (var t = u.length; t;) {
                    for (s = u, u = []; ++d < t;) s && s[d].run();
                    d = -1, t = u.length
                }
                s = null, c = !1,
                    function (e) {
                        if (r === clearTimeout) return clearTimeout(e);
                        if ((r === l || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                        try {
                            r(e)
                        } catch (t) {
                            try {
                                return r.call(null, e)
                            } catch (t) {
                                return r.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function g(e, t) {
            this.fun = e, this.array = t
        }

        function h() {}
        o.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            u.push(new g(e, t)), 1 !== u.length || c || a(f)
        }, g.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = h, o.addListener = h, o.once = h, o.off = h, o.removeListener = h, o.removeAllListeners = h, o.emit = h, o.prependListener = h, o.prependOnceListener = h, o.listeners = function (e) {
            return []
        }, o.binding = function (e) {
            throw new Error("process.binding is not supported")
        }, o.cwd = function () {
            return "/"
        }, o.chdir = function (e) {
            throw new Error("process.chdir is not supported")
        }, o.umask = function () {
            return 0
        }
    },
    9: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = function (e, t, n, r) {
            return `<div class="li-item">\n                <div class="image"><img src="${e}"></div>\n                <div class="file-name">${t}</div>\n                <div class="progress progressBar-for-li">\n                    <div class="progress-bar single" role="progressbar" ></div>\n                </div>\n                <div class="file-size">${n}<span> Kb</span></div>\n                <div class="buttons">\n                    <button class="btn btn-primary start" id="${r}">\n                        <i class="glyphicon glyphicon-upload"></i>\n                        <span>Start</span>\n                    </button>\n                    <button class="btn btn-warning cancel">\n                        <i class="glyphicon glyphicon-ban-circle"></i>\n                        <span>Cancel</span>\n                    </button>\n                 </div>\n            </div>`
        };
        var o = function (e, t, n, r) {
            let o = document.querySelectorAll(".start"),
                i = new FormData;
            if (e.length > 0)
                for (let t = 0; t < e.length; t++) {
                    let n = e[t];
                    i.append("uploads[]", n, n.name)
                }
            if (t.length > 0)
                for (let e = 0; e < t.length; e++) {
                    let n = t[e];
                    i.append("uploads[]", n, n.name)
                }
            let l = new XMLHttpRequest;
            l.open("POST", "http://localhost:3002/upload", !0), l.upload.addEventListener("progress", e => {
                if (e.lengthComputable) {
                    let t = e.loaded / e.total;
                    t = parseInt(100 * t), n.setAttribute("style", `width: ${t}%`), n.innerHTML = `${t} %`, 100 === t && (n.innerHTML = "Done"), r.forEach(e => {
                        e.setAttribute("style", `width: ${t}%`), e.innerHTML = `${t} %`, 100 === t && (e.innerHTML = "Done")
                    })
                }
            }), l.send(i), l.onreadystatechange = (() => {
                4 == l.readyState && (200 != l.status ? console.log(l.status + ": " + l.statusText) : (o.forEach(e => {
                    e.setAttribute("disabled", "disabled")
                }), console.log("upload successful!\n")))
            })
        };
        var i = function (e, t, n) {
            [...e].forEach(e => {
                let o = e,
                    i = document.createElement("li"),
                    l = new FileReader;
                l.onload = (e => {
                    let l = o.name.split(".")[1],
                        a = e.target.result;
                    switch (l) {
                        case "pdf":
                            a = "./img/pdf.png";
                            break;
                        case "docx":
                        case "doc":
                            a = "./img/word.png";
                            break;
                        case "xlsx":
                        case "xls":
                            a = "./img/excel.png";
                            break;
                        case "txt":
                            a = "./img/text.png"
                    }
                    let s = r(a, o.name, o.size, o.id);
                    i.innerHTML += s, t.appendChild(i);
                    let u = document.getElementById(o.id);
                    u.addEventListener("click", e => {
                        let t = u.parentNode.parentNode.children[2].children[0],
                            r = u.getAttribute("id");
                        n(r, t, u)
                    })
                }), l.readAsDataURL(o)
            })
        };
        var l = function (e, t, n, r, o, i) {
            let l = new FormData;
            l.append("uploads[]", e, e.name);
            let a = parseInt(o / r * 100),
                s = new XMLHttpRequest;
            s.open("POST", "http://localhost:3002/upload", !0), s.upload.addEventListener("progress", e => {
                if (e.lengthComputable) {
                    let r = e.loaded / e.total;
                    r = parseInt(100 * r), t.setAttribute("style", `width: ${r}%`), t.innerHTML = `${r} %`, n.setAttribute("style", `width: ${a}%`), n.innerHTML = `${a} %`, 100 === r && (t.innerHTML = "Done")
                }
            }), s.send(l), s.onreadystatechange = (() => {
                4 == s.readyState && (200 != s.status ? console.log(s.status + ": " + s.statusText) : (i.setAttribute("disabled", "disabled"), console.log("upload successful!\n")))
            })
        };
        var a = function (e, t) {
            let n = 0;
            e.length > 0 && [...e].forEach(e => {
                n += e.size
            });
            t.length > 0 && [...t].forEach(e => {
                n += e.size
            });
            return n
        };
        var s = function (e, t, n, r) {
            return '<section id="drop-area">\n                        <form method="post" enctype="multipart/form-data" name="formUpFiles">\n                            <div class="container" id="form-container">\n                                <div class="row">\n                                    <div class="col-xs-12">\n                                        <div class="panel panel-default">\n                                            <div class="panel-body">\n                                                <span class="glyphicon glyphicon-cloud-upload"></span>\n                                                <h2>File Uploader</h2>\n                                                <div class="progress">\n                                                    <div class="progress-bar" role="progressbar"></div>\n                                                </div>\n                                                \x3c!-- <button class="btn btn-lg choose-btn" type="button">Choose File</button> --\x3e\n                                                <input id="choose-input" type="file" name="uploads[]" multiple="multiple">\n                                                <label for="choose-input" class="btn btn-lg choose-btn" type="button">Choose File</label>\n                                                \x3c!-- <button class="btn btn-lg upload-btn" type="button">Upload File</button> --\x3e\n                                                <input type="submit" class="btn btn-lg upload-btn" value="Upload Files" name="submit">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </section>;'
        };
        t.default = function (e) {
            let t = n(7),
                r = s();
            rootElementforRendering.innerHTML = r;
            const u = document.querySelector("form"),
                c = document.querySelector("#selectedFiles"),
                d = document.createElement("ul"),
                p = document.querySelector(".progress-bar");
            let f = 0,
                g = 0;
            c.appendChild(d);
            let h = {},
                b = {};

            function m(e) {
                if (e.target.files && window.FileReader) {
                    for (let n = 0; n < e.target.files.length; n++) e.target.files[n].id = t();
                    h = e.target.files, f = a(h, b), i(e.target.files, d, T)
                }
            }
            document.addEventListener("DOMContentLoaded", function () {
                u.addEventListener("change", m)
            }), u.addEventListener("submit", e => {
                e.preventDefault();
                let t = document.querySelectorAll(".single");
                o(h, b, p, t)
            });
            let v = document.getElementById("drop-area");

            function y(e) {
                e.preventDefault(), e.stopPropagation()
            }

            function T(e, t, n) {
                for (let r = 0; r < h.length; r++) e === h[r].id && (g += h[r].size, l(h[r], t, p, f, g, n));
                for (let r = 0; r < b.length; r++) e === b[r].id && (g += b[r].size, l(b[r], t, p, f, g, n))
            } ["dragenter", "dragover", "dragleave", "drop"].forEach(e => {
                v.addEventListener(e, y)
            }), v.addEventListener("drop", e => {
                let n = e.dataTransfer;
                for (let e = 0; e < n.files.length; e++) n.files[e].id = t();
                b = n.files, f = a(h, b), i(b, d, T)
            })
        }
    }
});