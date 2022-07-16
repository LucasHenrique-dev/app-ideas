(() => {
    const roleta = document.querySelector("[data-svg-roleta]");
    const elementos_roleta = document.querySelectorAll(".elementos_roleta");


    for (const item_roleta of elementos_roleta) {
        item_roleta.addEventListener("click", () => {

            // if (!roleta.classList.contains("sorteio")) primeiroGiro();
            // else sortear();
            primeiroGiro();
            // sortear();
        })
    }


    function primeiroGiro() {
        const style = roleta.style;

        style.animationIterationCount = "5";
        style.transitionTimingFunction = "ease-out";
        style.animationDuration = "1s";
        style.transform = `rotate(${Math.random()*100}deg)`;
        style.transition = "5s all ease";
        roleta.classList.remove("conteudo__girar");
    }

    function sortear() {
        roleta.classList.add("sorteio");
    }

    function calcularAngulo() {
        const style = window.getComputedStyle(roleta, null);
        const info = style.getPropertyValue("-webkit-transform") ||
                style.getPropertyValue("-moz-transform") ||
                style.getPropertyValue("-ms-transform") ||
                style.getPropertyValue("-o-transform") ||
                style.getPropertyValue("transform") ||
                "fail...";
        var values = info.split('(')[1];
            values = values.split(')')[0];
            values = values.split(',');
        const a = values[0];
        const b = values[1];

        const angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    }
})()