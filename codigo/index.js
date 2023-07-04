/*Adicionando a classe 'ativo' em elementos que cliquei
e removendo de elementos em que não cliquei*/

var menuItem = document.querySelectorAll('.item-menu');

function selectLink () {
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo');
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')
var colEnfeite = document.querySelector('.col-enfeite')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('encolher')
    colEnfeite.classList.toggle('col-md-2')
})


/* Quando a tela for menor que 1200px, encolher o menu*/
window.addEventListener('resize', function() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth;
    var asideElement = document.querySelector('aside.menu-lateral');
    
    if (screenWidth < 1200) {
      asideElement.classList.add('encolher');
    } else {
      asideElement.classList.remove('encolher');
    }
  });
  