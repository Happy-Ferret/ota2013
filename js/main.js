window.addEventListener('DOMComponentsLoaded', function() {
    Brickpresso.init();

    // ensures links in the pres don't trigger slide changes. Might want to move it to brickpresso code?
    arr(document.querySelectorAll('a')).forEach(function(a) {
        a.target = "_blank";
        a.addEventListener('click', function(e) {
            e.stopPropagation();
        }, false);
    });

    function arr(list) {
        return Array.prototype.slice.call(list);
    }
}, false);

