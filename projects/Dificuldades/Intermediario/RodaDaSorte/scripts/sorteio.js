(() => {
    const roleta = document.querySelector("[data-svg-roleta]");
    const div_nomes = document.querySelector("[data-div-opcoes]");

    const btn_atualizar = div_nomes.children[1];
    const name_area = div_nomes.children[0];

    const time = 8;


    roleta.addEventListener("click", () => {
        const names = extrairNomes(name_area);

        sortear(names);
        aguardarResultado();
    });


    function extrairNomes(data) {
        const info = data.value.split("\n")
        const info_tratados = info.reduce((acc, curr) => {
            const info_line = curr.trim();
            if (info_line.length > 0) {
                acc.push(info_line);
            }
    
            return acc;
        }, []);
    
        return info_tratados;
    }

    function sortear(names) {
        const angulo = girar();
        setTimeout(() => {
            anunciarVencedor(angulo, names);
        }, time*1000);
    }

    function girar() {
        const angulo = calcularGiro();

        const style = roleta.style;

        style.transition =  `all ease-out ${time}s`;
        style.transform = `rotate(${angulo}deg)`;

        return angulo;
    }

    function calcularGiro() {
        const delta = Math.random()*50 + 30;

        return delta*360;
    }

    function anunciarVencedor(angulo, names) {
        const intervalos = calcularIntervalos(names.length);
        const angulo_equivalente = angulo%360;
        const sorteado = binarySearch(0, intervalos.length, intervalos, angulo_equivalente);
        const arr_ajuste = names.length - (sorteado+1);

        window.alert(`Resultado: ${names[arr_ajuste]}!`);
    }

    function calcularIntervalos(divisoes) {
        const intervalos = [];
        for (let i = 0; i < divisoes; i++) {
            intervalos[i] = 360/divisoes*(i+1);
        }

        return intervalos;
    }

    function binarySearch(inicio, fim, array, target) {
        const index = parseInt((inicio+fim)/2, 10);
        
        if (inicio == fim) return index;
        
        if (array[index] > target) return binarySearch(inicio, index, array, target);
        else return binarySearch(index+1, fim, array, target);
    }

    function aguardarResultado() {
        btn_atualizar.style.pointerEvents = "none";
        name_area.style.pointerEvents = "none";
        roleta.style.pointerEvents = "none";

        setTimeout(() => {
            btn_atualizar.style.pointerEvents = "all";
            name_area.style.pointerEvents = "all";
            roleta.style.pointerEvents = "all";
        }, time*1000);
    }
})()

