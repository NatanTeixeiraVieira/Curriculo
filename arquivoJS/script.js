function mudarTema() {
    const header = document.getElementById('header')
    const main = document.getElementById('main')
    const footer = document.getElementById('footer')

    header.classList.toggle('dark_header')
    main.classList.toggle('dark_main')
    footer.classList.toggle('dark_footer')
}