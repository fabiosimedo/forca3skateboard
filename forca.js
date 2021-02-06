//let scriptArr = Array.from(scripts);
 //agora podemos usar em loop forEach por exemplo
 //val = Array.isArray(num1);
 //checando se é array
//let check = Arrray.isArray(letras);
//console.log(letras[2]);
const titulo1 = document.querySelector('.titulo-do-jogo')
setTimeout(() => {
  titulo1.style.cssText = 'display: none;'
}, 4000);

const res = document.querySelector('#res')
const escolhidas = [
  'hell-flip', 'casper-flip', 'kick-flip', 'cabalerial',
  'grind', 'tailslide', 'bs-flip', 'fs-flip',
  'noseslide', 'crooked', 'rockslide', 'boardslide', 'benihana',
  'darkslide', 'hard-flip', 'finger-flip', 'blunt', 'nollie', 'ollie', 'varial', 'shuv-it', 'impossible', 'air-walk', 'disaster'

]
const x =  Math.floor(Math.random(escolhidas.length) * escolhidas.length);
const dispor = escolhidas[x].split('');

for(let i = 0;i < dispor.length;i++) {
  const divs = document.createElement('div');
  divs.classList.add('letras', 'image', 'cor');
  divs.textContent = dispor[i];
  res.insertAdjacentElement("beforeend", divs);
}

const btn = document.querySelectorAll('.btn');
const divs2 = document.querySelectorAll('.letras');
const img = document.querySelector('img');

btn.forEach(x => {
  const letraBtn = x.textContent;
  x.setAttribute('id', 'escolhido')
  x.addEventListener('click', () => {
    if(dispor.includes(letraBtn)) {
      divs2.forEach(y => {
        const letraDivs = y.textContent;
        if(letraDivs.includes(letraBtn)) {
          y.classList.remove('cor')
          x.style.cssText = 'visibility: hidden;'
          const diminui = document.getElementsByClassName('cor')
          if(diminui.length === 0) {
            setTimeout(() => {
              const botoes = document.getElementById('botoes')
              botoes.style.cssText = 'display: none;'
              res.innerHTML = `<div class="final" style="margin-left: 25%;cursor: pointer;"><h3>Parabéns</h3>
                <h1 style="color: red;">${dispor.join('')}</h1>
                 <h3>é a manobra correta!</h3><button>Reiniciar</button></div>`
              res.addEventListener('click', () => window.location.reload())
            }, 3000);
          }
        }
            
      });
    } else {
      x.setAttribute('style', 'visibility: hidden;')
      const erro = document.createElement('span')
      erro.textContent = letraBtn;
      const erroDiv = document.getElementById('erro')
      erroDiv.appendChild(erro)
      const arrSpan = erroDiv.children
      switch (arrSpan.length) {
       case 2:
          img.setAttribute('src', 'img/forca-1cabesa.png')
        break;
        case 3:
          img.setAttribute('src', 'img/forca-2tronco.png')
        break;
        case 4:
          img.setAttribute('src', 'img/forca-3braso-esq.png')
        break;
        case 5:
          img.setAttribute('src', 'img/forca-4brasos.png')
        break;
        case 6:
          img.setAttribute('src', 'img/forca-5pernaesq.png')
          alert('Se você errar mais uma vez você perderá...Boa sorte!')
        break;
        case 7:
          img.setAttribute('src', 'img/forca-6.png')
          const h2 = document.querySelector('h2');
          h2.innerHTML = `A palavra é: <div style="background-color: tomato;padding: 0 2rem;">${dispor.join('')}</div>`;
          setTimeout(() => {
            const container = document.querySelector('.container')
            const botoes = document.getElementById('botoes')
            botoes.style.cssText = 'display: none;'
            res.style.cssText = 'display: none;'
            const reset = document.createElement('button');
            reset.classList.add('btn-tryAgain')
            reset.textContent = 'Tentar novamente'
            container.insertAdjacentElement('beforeend', reset)
            reset.addEventListener('click', () => window.location.reload())
          }, 7000);
          break;
        default:
          erroDiv.removeChild(erro)
        break;
      }

    }
  })
});
