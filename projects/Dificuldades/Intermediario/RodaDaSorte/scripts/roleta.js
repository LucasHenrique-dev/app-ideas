(() => {
    const opcoes = document.querySelector("[data-div-opcoes]");
    const div_roleta = document.querySelector("[data-div-roleta]");
    
    const nomes = opcoes.children[0];
    const btn_atualizar = opcoes.children[1];
    
    const div_nomes = div_roleta.children[2];
    
    const cores = ["#8ECAE6", "#219EBC", "#023047", "#FFB703", "#FB8500"];
    
    btn_atualizar.addEventListener("click", () => {
        const info = extrairNomes(nomes);
        atualizarRoleta(info);
    })
    
    function atualizarRoleta(data) {
        organizarDivisoes(data.length);
        organizarNomes();
    }
    
    function organizarDivisoes(divisoes) {
        console.log("Divisoes: " + divisoes);
        const roleta = div_roleta.children[0].style;
        const intervalo = 360/divisoes;
        const colors = [];
    
        for (let index = 0, count = 0; index < divisoes; index++) {
            const angle = intervalo*index;
    
            colors[index+count] = `${cores[index%cores.length]} ${angle}deg ${angle+intervalo}deg`;
            
        }
    
        roleta.background = `conic-gradient(${colors.join(",")})`;
    }
    
    function organizarNomes() {
    
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
