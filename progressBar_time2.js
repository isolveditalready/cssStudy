(function () {
    (function createStructure() {
        var container2 = document.querySelector('.container2');
        for (i = 1; i < 100; i++) {
            console.log(i);
            var outerDiv = document.createElement('div');
            outerDiv.className = 'bar-containerA';
            var container2_outer = container2.appendChild(outerDiv);
            var innerDiv = document.createElement('div');
            innerDiv.className = 'bar' + i;
            container2_outer.appendChild(innerDiv);
        }
    })();
    function increaseWidth(perPercent, selector) {
        var per;
        if (perPercent) {
            per = parseFloat(perPercent);
            if (per === 100) {
                document.querySelector(selector).style.width = '0%';
                return;
            }
        } else {
            per = 0;
        }
        per = per + 10;
        var perVal = per + "%";
        document.querySelector(selector).style.width = perVal;
    }
    function fillBar() {
        for (i = 1; i < 100; i++) {
            const selector = '.bar' + i;
            var currentPercent = document.querySelector(selector).style.width;
            const randomSeed = Math.floor(Math.random() * 9);
            const randomTime = randomSeed * 100;
            if (selector === '.bar77' || selector === '.bar27' || selector === '.bar' || selector === '.bar3' || selector === '.bar13' || selector === '.bar50') {
                increaseWidth(currentPercent, selector);
                continue;
            }
            setTimeout(function () {
                increaseWidth(currentPercent, selector);
            }, randomTime);
        }
    };
    let timerId = setInterval(() => {
        fillBar();
    }, 100);
})();
