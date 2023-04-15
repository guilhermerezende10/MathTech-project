function Soma () {
    let soma1 = Number(document.getElementById("soma1").value)
    let soma2 = Number(document.getElementById("soma2").value)
    let soma =  soma1 + soma2
    let somaResultado = document.getElementById("somaResult").innerText = soma

}

function Sub (){
    let sub1 = Number(document.getElementById("sub1").value)
    let sub2 = Number(document.getElementById("sub2").value)
    let sub =  sub1 - sub2
    let subResultado = document.getElementById("subResult").innerText = sub
}
function Div (){
    let div1 = Number(document.getElementById("div1").value)
    let div2 = Number(document.getElementById("div2").value)
    let div =  div1 / div2
    if (div / 1 != div) {
        let divResultado = document.getElementById("divResult").innerText = "0"
    } else {
        let divResultado = document.getElementById("divResult").innerText = div
    }
    
    
}
function Multi(){
    let multi1 = Number(document.getElementById("multi1").value)
    let multi2 = Number(document.getElementById("multi2").value)
    let multi =  multi1 * multi2
    let multiResultado = document.getElementById("multiResult").innerText = multi
}

Number(document.getElementById("raioEsfera").value)

function VolumeEsfera() {
    let raioEsfera = Number(document.getElementById("raioEsfera").value)
    let volEsfera = 4/3 * 3.14 * raioEsfera**3
    let VolResult = document.getElementById("EsferaVolResult").innerText = "Volume ≅ " + volEsfera.toFixed(1) + "cm³"
}

