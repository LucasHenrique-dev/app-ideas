(() => {
    const border_radius_button = document.querySelector("[data-button-border_radius]")
    const div_controladores = document.querySelector("[data-div-controladores]")

    const controladores = div_controladores.children
    const box_style = border_radius_button.style

    for (const controlador of controladores) {
        controlador.addEventListener("click", () => {
            if (!controlador.value && controlador.id == "number_0") {
                controlador.value = 5
            } else if (!controlador.value && controlador.id == "number_1") {
                controlador.value = 5
            } else if (!controlador.value && controlador.id == "number_2") {
                controlador.value = 5
            } else if (!controlador.value && controlador.id == "number_3") {
                controlador.value = 5
            }
        })
    }

    for (const controlador of controladores) {
        controlador.addEventListener("input", () => {
            if (controlador.id == "number_0") {
                box_style.borderTopLeftRadius = `${controlador.value}px`
            } else if (controlador.id == "number_1") {
                box_style.borderTopRightRadius = `${controlador.value}px`
            } else if (controlador.id == "number_2") {
                box_style.borderBottomLeftRadius = `${controlador.value}px`
            } else if (controlador.id == "number_3") {
                box_style.borderBottomRightRadius = `${controlador.value}px`
            }
        })
    }

    border_radius_button.addEventListener("click", () => {
        const top_left = !controladores[0].value ? "5" : controladores[0].value,
        top_right = !controladores[1].value ? "5" : controladores[1].value,
        bottom_left = !controladores[2].value ? "5" : controladores[2].value,
        bottom_right = !controladores[3].value ? "5" : controladores[3].value

        const copyText = `border-radius: ${top_left}px ${top_right}px ${bottom_right}px ${bottom_left}px`

        navigator.clipboard.writeText(`${copyText}`).then(() => {
            window.alert("Estilo de Borda Copiado!")
        })
    })
})()