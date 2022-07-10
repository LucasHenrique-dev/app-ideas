(() => {
    const opcoes = document.querySelector("[data-div-opcoes]");
    const div_roleta = document.querySelector("[data-div-roleta]");
    
    const nomes = opcoes.children[0];
    const btn_atualizar = opcoes.children[1];
    
    const roleta = div_roleta.children[0];
    const div_nomes = div_roleta.children[2];
    
    const height = roleta.offsetHeight;
    const cores = ["#8ECAE6", "#219EBC", "#023047", "#FFB703", "#FB8500"];
    
    btn_atualizar.addEventListener("mouseover", () => {
        const info = extrairNomes(nomes);
        atualizarRoleta(info);
    })
    
    function atualizarRoleta(data) {
        organizarCores(data.length);
        organizarNomes(data.length);
    }
    
    function organizarCores(divisoes) {
        const roleta = div_roleta.children[0].style;
        const intervalo = 360/divisoes;
        const colors = [];
    
        for (let index = 0, count = 0; index < divisoes; index++) {
            const angle = intervalo*index;
    
            colors[index+count] = `${cores[index%cores.length]} ${angle}deg ${angle+intervalo}deg`;
            
        }
    
        roleta.background = `conic-gradient(${colors.join(",")})`;
    }
    
    function organizarNomes(divisoes) {
        const intervalo = 360/(divisoes*2);

        for (const [index, nome] of Array.from(div_nomes.children).entries()) {
            const nome_style = nome.style;
            const angle = intervalo+(intervalo*2*index);
        
            ajustarAngulo(nome_style, angle);
            ajustarPosicao(nome_style, angle, divisoes, index);
        
            nome_style.color = "white";
        }
    }

    function ajustarAngulo(nome, angle) {
        nome.transform = `rotate(${angle}deg)`;
    }

    function ajustarPosicao(nome, angle, divisoes, index) {
        const centro = height/2;

        if (index == 0) {
            nome.top = `${height/divisoes}px`;
            // nome.left = `${height/divisoes}px`;
        } else if (angle < 180) {
            nome.top = `${centro - height/divisoes}px`;
            nome.right = `${centro - height/divisoes}px`;
        } else if (angle < 270) {
            nome.top = `${centro - height/divisoes}px`;
            nome.right = `${centro + height/divisoes}px`;
        } else {
            nome.top = `${centro - height/divisoes}px`;
            nome.right = `${centro + height/divisoes}px`;
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
})()
