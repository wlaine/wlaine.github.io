
clouds();

function clouds() {
    /** Clouds */
    var speed = 0.9;
    var WIDTH;
    var HEIGHT;
    var castleWidth;
    var scale;
    var control = false;

    var progress = 0.0;

    TweenLite.defaultEase = Power1.easeInOut;


    if (document.readyState == 'complete') {
        init();
    } else {
        $(window).load(init);
    };

    var resize = function () {
        WIDTH = window.innerWidth;
        HEIGHT = window.innerHeight;
        scale = WIDTH / 1440;
    };

    resize();
    $(window).on('resize', resize);

    var cloudIntro = function () {
        TweenLite.to($('.cloud1'), 20, { x: WIDTH * 2, y: 300 * scale, opacity: 0.3, ease: Linear.easeNone, force3D: true });
        TweenLite.to($('.cloud-shadow1'), 20, { x: WIDTH * 2 + 50 * scale, y: 450 * scale, opacity: 0.2, ease: Linear.easeNone, force3D: true });
        TweenLite.to($('.cloud-shadow2'), 20, { x: WIDTH * 2 + 50 * scale, y: 450 * scale, ease: Linear.easeNone, force3D: true });
        TweenLite.to($('.cloud-shadow3'), 20, { x: WIDTH * 2 + 50 * scale, y: 450 * scale, ease: Linear.easeNone, force3D: true });
        TweenLite.to($('.cloud2'), 20, { x: WIDTH * 2, y: 300 * scale, opacity: 0.5, ease: Linear.easeNone, force3D: true });
        TweenLite.to($('.cloud3'), 20, { x: WIDTH * 2, y: 300 * scale, ease: Linear.easeNone, force3D: true });
        TweenLite.to($('.cloud4'), 20, { x: WIDTH * 2, y: 300 * scale, ease: Linear.easeNone, force3D: true });
        TweenLite.to($('.cloud5'), 20, {
            x: WIDTH * 2, y: 300 * scale, ease: Linear.easeNone, force3D: true, onComplete: function () {
                $('.clouds').remove();
            }
        });
    };

    var init = function () {
        TweenLite.to($('.load-gate'), 0.5, {
            opacity: 0, onComplete: function () {
                $('.load-gate').remove();
            }
        });
        cloudIntro();
    };

    TweenMax.to($('.cloud-bg'), 90, {
        x: WIDTH * 2, y: 200 * scale, ease: Linear.easeNone, repeat: -1, force3D: true, onRepeat: function () {
            TweenLite.set(this.target[0], { y: Math.random() * 200 - 100, rotationZ: Math.round(Math.random() * 60) - 30, scaleX: Math.random() > 0.5 ? 1 : -1 });
        }
    });
    TweenMax.to($('.cloud-bg2'), 250, {
        x: WIDTH * 2, y: 200 * scale, ease: Linear.easeNone, delay: 0, repeat: -1, force3D: true, onRepeat: function () {
            TweenLite.set(this.target[0], { y: Math.random() * 200 - 100, rotationZ: Math.round(Math.random() * 60) - 30, scaleX: Math.random() > 0.5 ? 1 : -1 });
        }
    });
    TweenMax.to($('.cloud-bg3'), 60, {
        x: WIDTH * 2, y: 200 * scale, ease: Linear.easeNone, delay: 3, repeat: -1, force3D: true, onRepeat: function () {
            TweenLite.set(this.target[0], { y: Math.random() * 200 - 100, rotationZ: Math.round(Math.random() * 60) - 30, scaleX: Math.random() > 0.5 ? 1 : -1 });
        }
    });
    TweenMax.to($('.cloud-bg4'), 80, {
        x: WIDTH * 2, y: 200 * scale, ease: Linear.easeNone, delay: 0, repeat: -1, force3D: true, onRepeat: function () {
            TweenLite.set(this.target[0], { y: Math.random() * 200 - 100, rotationZ: Math.round(Math.random() * 60) - 30, scaleX: Math.random() > 0.5 ? 1 : -1 });
        }
    });
    TweenMax.to($('.cloud-bg5'), 100, {
        x: WIDTH * 2, y: 200 * scale, ease: Linear.easeNone, delay: 5, repeat: -1, force3D: true, onRepeat: function () {
            TweenLite.set(this.target[0], { y: Math.random() * 200 - 100, rotationZ: Math.round(Math.random() * 60) - 30, scaleX: Math.random() > 0.5 ? 1 : -1 });
        }
    });

    TweenMax.to($('.sun'), 50, {
        x: 100, y: 400, ease: Linear.easeInOut, delay: 0, force3D: true
    });


    TweenMax.to($('.overlay'), 25, {
        opacity: .5, ease: Linear.easeInOut, delay: 0, force3D: true
    });

    TweenMax.to($('.overlay'), 40, {
        opacity: 0, ease: Linear.easeInOut, delay: 25, force3D: true
    });

}