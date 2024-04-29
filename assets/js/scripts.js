function abrirPdf(categoria) {
    switch (categoria) {
        case 'mobiliario':
            window.open('https://www.dropbox.com/scl/fi/injbmtuon45m6ypa79d25/SESMOBILIARIOREDPDF.pdf?rlkey=5am1uyp1bm2v4caijyrmlje6w&st=cjmlncsj&dl=0', '_blank');
            break;
        case 'cocinas':
            window.open('https://www.dropbox.com/scl/fi/tf3tpif7lnlh4qaz3v4lo/SESCOCINASRED.pdf?rlkey=g40iz1he1vpiojpaamdt4cuyg&st=12z7l74k&dl=0', '_blank');
            break;
        case 'banos':
            window.open('https://www.dropbox.com/scl/fi/dwyl35hplaamdy15nve70/SESBANOSRED.pdf?rlkey=6jsi8oj25myqi5uhao8qrzlri&st=65u15xoo&dl=0', '_blank');
            break;
        default:
            console.log('Categoría no reconocida');
    }
}

