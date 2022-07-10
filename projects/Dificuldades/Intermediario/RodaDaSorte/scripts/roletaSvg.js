(() => {
    const div_roleta = document.querySelector("[data-div-roleta]");
    const svg_roleta = document.querySelector("[data-svg-roleta]");
    const div_nomes = document.querySelector("[data-div-opcoes]");
    
    const info = div_nomes.children[0];

    const heigth = div_roleta.offsetHeight;

    const cores = ["#8ECAE6", "#219EBC", "#023047", "#FFB703", "#FB8500"];

    const nomes = extrairNomes(info)
    const paths = calcularPaths(nomes.length);

    montarRoleta();

    
    svg_roleta.setAttribute("height", `${heigth}`);

    function montarRoleta() {
        for (const [index, path] of paths.entries()) {
            svg_roleta.innerHTML += `<path d='${path}' fill='${cores[index]}'/>`
        }
    }

    function extrairNomes(data) {
        const info = data.value.split("\n")
        const info_tratados = info.reduce((acc, curr) => {
            if (curr.trim().length > 0) acc.push(curr.trim());
    
            return acc;
        }, []);
    
        return info_tratados;
    }

    //centro: (60, 60); raio: 50%
    function calcularPaths(divisoes) {
        const paths = [];
        const intervalo = 360/divisoes;

        for (let angulo = 0; angulo < 360; angulo+=intervalo) {
            const ini_radiano = angulo*Math.PI/180, fim_radiano = (angulo+intervalo)*Math.PI/180;
            const ini_x = 50*Math.cos(ini_radiano) + 60, fim_x = 50*Math.cos(fim_radiano) + 60;
            const ini_y = 50*Math.sin(ini_radiano) + 60, fim_y = 50*Math.sin(fim_radiano) + 60;
            
            paths.push(`M60,60 L${ini_x},${ini_y} A50,50 0 0,1 ${fim_x},${fim_y}z`);
        }

        return paths;
    }
})()