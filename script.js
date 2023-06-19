        //passo 1: de cada função para ser executada
//
//event.preventDefault() - previnir q o formulario seja enviado
//event.preventDefault() previne o comportamento padrão que aquele formulario deveria ter
//pegar oq ele enviou no submit
//impedir que o input não envie nada e apareça um AVISO


        //passo 2: passar informações do clima para o js
//pegar o link API do site do clima
//encodeURI - tranforma a mensagem de um jeito que o url aceite
//API key - uma forma do openWeather(site), controlar quantas vezes esta consultando a API deles
//pegar as requisições necessarias para rodar o clima
//fetch para passar a url e virar um json (um objeto com as informações)
//let dwaidjka = element.getAttribute()
//quando o resultado json der certo, mostrar as informações do resultado (do json), se não aparecer a mensgem de não encontrado.
//function para mostrar as informações
//nessa function de mostrar informação, pegar o informações do resultado, titulo, velocidade do vento, tempo etc...
//modificar a imagem, pegamos um link fake e modificamos apenas o numero
//depois de tudo, se alguma informação estier errada, devemos limpar a area de informação e executar APENAS o texto de erro



document.querySelector('button').addEventListener('click', async (event)=> {
    event.preventDefault()
    let input = document.querySelector('#searchInput').value  

    if(input !== '') {
        showWarning('Carregando...')

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=9d4adf84a94a9d549563c3ab96f46f5e&units=metric&lang=pt_br`

        let results = await fetch(url)

        let json = await results.json()

        if(json.code === 200) {
            InfoResults({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                Tempicon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            })
        }
    }else {
        showWarning('Não encontramos esta localização')
    }
})

function showWarning(input) {
    document.querySelector('.aviso').innerHTML = input
}

function InfoResults(json) {
    showWarning('')

    document.querySelector('.resultado').style.display = 'block'
}