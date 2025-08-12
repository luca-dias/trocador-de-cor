const cores = ['#FF5733', '#33FF57', '#3357FF', '#F0E68C', '#DA70D6', '#87CEEB', '#B0C4DE', '#98FB98', '#FFDAB9', '#CD5C5C', '#BA55D3', '#7B68EE', '#8B4513', '#20B2AA', '#E9967A', '#4682B4', '#D2691E', '#7FFF00', '#6495ED', '#DC143C', '#FF6347', '#40E0D0', '#FFA07A', '#EE82EE', '#C0C0C0', '#F08080', '#DDA0DD', '#F5DEB3', '#9ACD32', '#6A5ACD', '#48D1CC', '#808000', '#BDB76B', '#E6E6FA', '#FF8C00', '#2E8B57', '#A0522D', '#D8BFD8', '#FF4500', '#ADFF2F',];

function trocarCor() {
    const rootElement = document.documentElement;
    const nomeCor = document.getElementById("p-color-name");
    let novaCor = cores[sortearCor()];
    nomeCor.innerHTML = novaCor;
    rootElement.style.setProperty('--main-bg-color', novaCor)

}

function sortearCor() {
    let index = parseInt(Math.random() * cores.length);
    return index;
}

const botao = document.getElementById("botao-trocar");
botao.addEventListener("click", () => {

})