(function (window, document) {
    'use strict';
    
    const $toggles = document.querySelectorAll('.toggle');
    const $togglesBtn = document.getElementById('toggle-btn');
    
    $togglesBtn.addEventListener('click', function () {
        toggleElements();
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 1024) {
            offElements();
        }
    })

    function toggleElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');
        });
    }

    function offElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.remove('on');
        });
    }
})(window, document)