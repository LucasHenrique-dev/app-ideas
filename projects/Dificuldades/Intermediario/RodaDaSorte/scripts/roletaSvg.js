(() => {
    const div_roleta = document.querySelector("[data-div-roleta]");
    const svg_roleta = document.querySelector("[data-svg-roleta]");
    const div_nomes = document.querySelector("[data-div-opcoes]");

    const svg_style = svg_roleta.style;
    
    const info = div_nomes.children[0];
    const btn_atualizar = div_nomes.children[1];

    const div_heigth = div_roleta.offsetHeight;
    const div_width = div_roleta.offsetWidth;

    const cores = ["#8ECAE6", "#219EBC", "#023047", "#FFB703", "#FB8500"];

    
    apresentarRoleta();
    
    btn_atualizar.addEventListener("mouseover", () => {
        const nomes = extrairNomes(info)

        svg_roleta.innerHTML = "";

        if (nomes.length > 0) {
            montarRoleta(nomes);
            ajustarSVG(360/nomes.length, div_heigth, div_width);
        } else svg_style.border = "0";
    })

    function apresentarRoleta() {
        const nomes = extrairNomes(info)

        svg_roleta.innerHTML = "";

        montarRoleta(nomes);
        ajustarSVG(360/nomes.length, div_heigth, div_width);
    }

    function extrairNomes(data) {
        const info = data.value.split("\n")
        const info_tratados = info.reduce((acc, curr) => {
            if (curr.trim().length > 0) acc.push(curr.trim());
    
            return acc;
        }, []);
    
        return info_tratados;
    }

    function montarRoleta(nomes) {
        const raio = extrairValores(svg_roleta.getAttribute("viewBox")), raio_centro = raio*0.25;;
        const sessoes = criarSessoes(nomes, raio, raio_centro);
        const divisoes = sessoes.length/2;

        for (const sessao of sessoes) {
            svg_roleta.innerHTML += sessao;
        }

        if (divisoes != 1 && (divisoes-1)%cores.length == 0) {
            svg_roleta.innerHTML += `<path d=" M60,60 h ${raio} v 0.3 h -${raio} v 0 " fill="gray"/>`;
        }

        criarBotaoCentral(raio, raio_centro);
    }

    function extrairValores(info) {
        const infos = info.split(" ");
        const raio = Math.min(infos[infos.length-1], infos[infos.length-2])/2

        return raio;
    }

    //centro: (60, 60); raio: 50%
    function criarSessoes(nomes, raio_base, raio_centro) {
        const path_info = [], textos = [];
        const intervalo = Math.ceil(360/nomes.length);
        const raio = raio_base + raio_centro;
        let cores = [];

        for (let angulo = 0; angulo < 360; angulo+=intervalo) {
            const ini_radiano = angulo*Math.PI/180, fim_radiano = (angulo+intervalo)*Math.PI/180;

            path_info.push(calcularPath(nomes.length, raio_base, raio_base, ini_radiano, fim_radiano));
            textos.push(textPosition(nomes[angulo/intervalo], raio/2, raio_base, ini_radiano, fim_radiano));
        }

        if (nomes.length <= 1) cores = path_info;
        else cores = montarPaths(path_info);

        return montarSessoes(cores, textos);
    }

    function calcularPath(sessoes, raio, centro, ini_radiano, fim_radiano) {
        if (sessoes == 1) return `<circle cx="${centro}" cy="${centro}" r="${raio}" fill="#E4F3E2"/>`;

        const ini_x = raio*Math.cos(ini_radiano) + centro, fim_x = raio*Math.cos(fim_radiano) + centro;
        const ini_y = raio*Math.sin(ini_radiano) + centro, fim_y = raio*Math.sin(fim_radiano) + centro;
            
        return `M${raio},${raio} L${ini_x},${ini_y} A${raio},${raio} 0 0,1 ${fim_x},${fim_y}z`;
    }

    function textPosition(nome, raio, centro, ini_radiano, fim_radiano) {
        const x = raio*Math.cos((ini_radiano+fim_radiano)/2) + centro;
        const y = raio*Math.sin((ini_radiano+fim_radiano)/2) + centro;

        return `<text x='${x}' y='${y}' class='svg_text section_text' data-text-svg>${nome}</text>`;
    }

    function montarSessoes(paths, textos) {
        const sessoes = [];

        for (let i = 0; i < paths.length; i++) {
            sessoes.push(paths[i]);
            sessoes.push(textos[i])
        }

        return sessoes;
    }

    function montarPaths(path_info) {
        const paths = [];

        for (const [index, path] of path_info.entries()) {
            paths.push(`<path d='${path}' fill='${cores[index%cores.length]}'/>`);
        }

        return paths;
    }

    function criarBotaoCentral(raio, raio_centro) {
        svg_roleta.innerHTML += `<circle cx="${raio}" cy="${raio}" r="${raio_centro}" fill="#E4F3E2"/>`;
    }

    function ajustarSVG(angulo, div_heigth, div_width) {
        ajustarTamanho(div_heigth, div_width);
        ajustarAnguloTexto(angulo);
    }

    function ajustarTamanho(div_heigth, div_width) {
        svg_roleta.setAttribute("height", `${Math.min(div_heigth, div_width)*0.75}`);
    }

    function ajustarAnguloTexto(angulo_divisao) {
        const nomes = svg_roleta.children;
        const ini_angulo = angulo_divisao/2;

        for (const [index, nome] of Array.from(nomes).entries()) {
            if (index%2 == 0 || nome.classList.contains("middle_text")) continue;
            
            const aux = (index-1)/2;
            const angulo = ini_angulo+(aux*angulo_divisao);
            const x = nome.getAttribute("x");
            const y = nome.getAttribute("y");

            nome.setAttribute("transform", `rotate(${angulo}, ${x}, ${y})`);
        }
    }
})()
//ERRO: 
// Alex
// Lucas
// Maria
// Roberta
// Janaina
// João
// Pedro
// Carlos
// Henrique
// Tenório
// Breno

// ERRO2:
// Lucas
// Maria
// Roberta
// Janaina
// João
// Pedro
// Carlos
// Henrique
// Tenório
// Breno
// Ugo
// // Lucas
// d
// d
// d
// d