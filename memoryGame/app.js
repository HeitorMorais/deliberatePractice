const cardArray = [
    {
        name: 'america mineiro',
        img: 'images/americamg.png'
    },
    {
        name: 'bahia',
        img: 'images/bahia.png'
    },
    {
        name: 'botafogo',
        img: 'images/botafogo.png'
    },
    {
        name: 'bragantino',
        img: 'images/bragantino.png'
    },
    {
        name: 'corinthians',
        img: 'images/corinthians.png'
    },
    {
        name: 'coritiba',
        img: 'images/coritiba.png'
    },
    {
        name: 'flamengo',
        img: 'images/flamengo.png'
    },
    {
        name: 'fluminense',
        img: 'images/fluminense.png'
    },
    {
        name: 'fortaleza',
        img: 'images/fortaleza.png'
    },
    {
        name: 'goias',
        img: 'images/goias.png'
    },
    {
        nome: 'gremio',
        img: 'images/gremio.png'
    },
    {
        nome: 'santos',
        img: 'images/santos.png'
    }

]

cardArray.sort(() => 0.5 - Math.random())

document.querySelector('#grid')

const gridDisplay = document.querySelector('#grid')

function createBoard () {
    for (let i = 0; i < 10; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/santos.png')
        card.setAttribute('data-id', i)
    }
}
createBoard()