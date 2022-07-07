(() => {
    const btn_conversor = document.querySelector('[data-converter-button]')
    const binario = document.querySelector('[data-input-binario]')
    const decimal = document.querySelector('[data-input-decimal]')
    
    btn_conversor.addEventListener("click", () => {
        if(binario.value == "") window.alert("Insira algum valor em Binário para ser convertido em Decimal")
        else if (verificar(binario.value)) decimal.value = bin2Dec(binario.value)
        else window.alert("Certifique-se que a entrada contenha apenas 0's e 1's")
    })

    function verificar(input) {
        return !input.replaceAll("0", "").replaceAll("1", "")
    }

    function bin2Dec(binario) {
        if (binario.length <= 1) {
            return parseInt(binario)
        }
        return Math.pow(2, binario.length - 1) * binario.charAt(0) + bin2Dec(binario.slice(1))
    }
})()
