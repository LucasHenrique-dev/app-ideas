(() => {
    const div_roleta = document.querySelector("[data-div-roleta]");
    
    const roleta = div_roleta.children[0];
    const btn_girar = div_roleta.children[1];
    const div_nomes = div_roleta.children[2];
    
    const roleta_style = roleta.style;
    const btn_girar_style = btn_girar.style;
    const div_nomes_style = div_nomes.style;

    const height = roleta.offsetHeight;
    
    roleta_style.width = `${height}px`;
    btn_girar_style.height = `${0.2*height}px`;
    btn_girar_style.width = `${0.2*height}px`;
    div_nomes_style.height = `${height}px`;
    div_nomes_style.width = `${height}px`;
})()
