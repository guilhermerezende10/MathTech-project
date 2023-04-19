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

function AreaCirculo() {
    let raioCirculo = Number(document.getElementById("raioCirculo").value)
    let AreaCirculo = 3.14 * raioCirculo**2
    let AreaCircResult = document.getElementById("areaCircResult").innerText = "Area = " + AreaCirculo.toFixed(2) + "cm²"
}

function AreaTriangulo() {
    let baseTriangulo = Number(document.getElementById("baseTriangulo").value)
    let alturaTriangulo = Number(document.getElementById("alturaTriangulo").value)
    let areaTriangulo = baseTriangulo * alturaTriangulo / 2
    let AreaTriResult = document.getElementById("areaTriResult").innerText = "Area = " + areaTriangulo.toFixed(2) + "cm²"
}

function AreaLosango() {
    let diametromenor = Number(document.getElementById("diametroMenorLosango").value)
    let diametromaior = Number(document.getElementById("diametroMaiorLosango").value)
    let areaLosango = diametromaior * diametromenor / 2
    let AreaLosResult = document.getElementById("areaLosResult").innerText = "Area = " + areaLosango.toFixed(2) + "cm²"
}

function AreaPentagono() {
    let ladoPentagono = Number(document.getElementById("ladoPentagono").value)
    let AreaPentagono1 = (ladoPentagono / 1.453)
    let AreaPentagono = 5 * ladoPentagono * AreaPentagono1
    let AreaPentResult = document.getElementById("areaPentResult").innerText = "Area = " + AreaPentagono.toFixed(2) + "cm²"
}
function AreaQuadrado() {
    let ladoQuadrado = Number(document.getElementById("ladoQuadrado").value)
    let AreaQuadrado = ladoQuadrado**2
    let AreaQuadResult = document.getElementById("areaQuadResult").innerText = "Area = " + AreaQuadrado.toFixed(2) + "cm²"
}

function AreaRetangulo() {
    let baseRetangulo = Number(document.getElementById("baseRetangulo").value)
    let alturaRetangulo = Number(document.getElementById("alturaRetangulo").value)
    let areaRetangulo = baseRetangulo * alturaRetangulo
    let AreaRetResult = document.getElementById("areaRetResult").innerText = "Area = " + areaRetangulo.toFixed(2) + "cm²"
}


function VolumeEsfera() {
    let raioEsfera = Number(document.getElementById("raioEsfera").value)
    let volEsfera = 4/3 * 3.14 * raioEsfera**3
    let VolumeEsfResult = document.getElementById("EsferaVolResult").innerText = "Volume ≅ " + volEsfera.toFixed(1) + "cm³"
}

function VolumeCilindro() {
    let raioCilindro = Number(document.getElementById("raioCilindro").value)
    let alturaCilindro = Number(document.getElementById("alturaCilindro").value)
    let volumeCilindro = 3.14 * raioCilindro**2 * alturaCilindro
    let VolumeCilResult = document.getElementById("volumeCilResult").innerText = "Volume ≅ " + volumeCilindro.toFixed(2) + "cm²"
}
function VolumeCone() {
    let raioCone = Number(document.getElementById("raioCone").value)
    let alturaCone = Number(document.getElementById("alturaCone").value)
    let volumeCone = 3.14 * raioCone ** 2 * alturaCone / 3
    let VolumeConeResult = document.getElementById("volumeConeResult").innerText = "Volume ≅ " + volumeCone.toFixed(2) + "cm²"
}

function VolumeCubo() {
    let arestaCubo = Number(document.getElementById("arestaCubo").value)
    let volCubo = arestaCubo ** 3
    let VolumeCuboResult = document.getElementById("CuboVolResult").innerText = "Volume ≅ " + volCubo.toFixed(2) + "cm³"
}


function clickMenu() {
    if (container.style.display == 'grid') {
        container.style.display = 'none'
    } else {
        container.style.display = 'grid'
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        container.style.display = 'flex'
    } else {
        container.style.display = 'none'
    }
}
