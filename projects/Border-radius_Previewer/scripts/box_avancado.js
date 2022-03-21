(() => {
    const border_radius_button = document.querySelector("[data-button-border_radius]")
    const div_controladores = document.querySelector("[data-div-controladores]")

    const controladores = div_controladores.children
    const box_style = border_radius_button.style

    var topLeftHorizontal = 30, topLeftVertical = 30, topRightHorizontal = 70, topRightVertical = 30, bottomLeftHorizontal = 30, bottomLeftVertical = 70, bottomRightHorizontal = 70, bottomRightVertical = 70

    for (const controlador of controladores) {
        controlador.addEventListener("click", () => {
            if (!controlador.value && controlador.id == "number_0")
                controlador.value = topLeftHorizontal
            if (!controlador.value && controlador.id == "number_1")
                controlador.value = topLeftVertical
            if (!controlador.value && controlador.id == "number_2")
                controlador.value = topRightHorizontal
            if (!controlador.value && controlador.id == "number_3")
                controlador.value = topRightVertical
            if (!controlador.value && controlador.id == "number_4")
                controlador.value = bottomLeftHorizontal
            if (!controlador.value && controlador.id == "number_5")
                controlador.value = bottomLeftVertical
            if (!controlador.value && controlador.id == "number_6")
                controlador.value = bottomRightHorizontal
            if (!controlador.value && controlador.id == "number_7")
                controlador.value = bottomRightVertical
        })
    }

    for (const controlador of controladores) {
        controlador.addEventListener("input", () => {
            if (controlador.id == "number_0" || controlador.id == "number_1") {
                if (controlador.id == "number_0") topLeftHorizontal = controlador.value
                else topLeftVertical = controlador.value
                box_style.borderTopLeftRadius = `${topLeftHorizontal}% ${topLeftVertical}%`
            } else if (controlador.id == "number_2" || controlador.id == "number_3") {
                if (controlador.id == "number_2") topRightHorizontal = controlador.value
                else topRightVertical = controlador.value
                box_style.borderTopRightRadius = `${topRightHorizontal}% ${topRightVertical}%`
            } else if (controlador.id == "number_4" || controlador.id == "number_5") {
                if (controlador.id == "number_4") bottomLeftHorizontal = controlador.value
                else bottomLeftVertical = controlador.value
                box_style.borderBottomLeftRadius = `${bottomLeftHorizontal}% ${bottomLeftVertical}%`
            } else if (controlador.id == "number_6" || controlador.id == "number_7") {
                if (controlador.id == "number_6") bottomRightHorizontal = controlador.value
                else bottomRightVertical = controlador.value
                box_style.borderBottomRightRadius = `${bottomRightHorizontal}% ${bottomRightVertical}%`
            }
        })
    }

    border_radius_button.addEventListener("click", () => {

        const copyText = `border-radius: ${topLeftHorizontal}% ${topRightHorizontal}% ${bottomRightHorizontal}% ${bottomLeftHorizontal}% / ${topLeftVertical}% ${topRightVertical}% ${bottomRightVertical}% ${bottomLeftVertical}%`

        navigator.clipboard.writeText(`${copyText}`).then(() => {
            window.alert("Estilo de Borda Copiado!")
        })
    })
})()