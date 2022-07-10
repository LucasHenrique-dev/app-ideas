(() => {
    const div_roleta = document.querySelector("[data-div-roleta]");
    
    const roleta = div_roleta.children[0];
    const div_nomes = div_roleta.children[2];

    // const alex = div_nomes.children[0];
    // const alex_style = alex.style;

    const height = roleta.offsetHeight;

    // alex_style.top = `${height/2 - height/4}px`;
    // alex_style.left = `${height/2 - height/4}px`;

    // alex_style.inset = `${height/2}px 0px 0px 0px`;
    // alex_style.transform = "rotate(225deg)";

    for (const [index, nome] of Array.from(div_nomes.children).entries()) {
        const nome_style = nome.style;
        const angle = 4*(index+1);
    
        nome_style.transform = `rotate(${angle}deg)`;
    
        nome_style.color = "purple";
    }
})()