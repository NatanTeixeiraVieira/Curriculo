function mudarTema() {
    const header = document.getElementById('header')
    const main = document.getElementById('main')
    const footer = document.getElementById('footer')

    header.classList.toggle('dark_header')
    main.classList.toggle('dark_main')
    footer.classList.toggle('dark_footer')
}

function mostrarIdadeAtual() {
    const idade = document.getElementById('idade')
    const anoAtual = new Date().getFullYear()
    const mesAtual = new Date().getMonth() + 1
    const diaAtual = new Date().getDate()
    let idadeAtual = undefined

    mesAtual > 6 || (mesAtual === 6 && diaAtual >= 18) ? idadeAtual = anoAtual - 2005 : idadeAtual = anoAtual - 2005 - 1

    idade.innerHTML = `Idade: ${idadeAtual} anos;`
}

window.addEventListener('load', mostrarIdadeAtual)