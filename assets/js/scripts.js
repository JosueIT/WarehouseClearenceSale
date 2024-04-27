function abrirPdf(categoria) {
    switch (categoria) {
        case 'mobiliario':
            window.open('https://www.dropbox.com/scl/fi/c8g26i9qqvkyri8kzt9pa/SESMOBILIARIOR.pdf?rlkey=3twnolntk29fot0krhd85rag5&st=jkbsj4py&dl=0', '_blank');
            break;
        case 'cocinas':
            window.open('https://www.dropbox.com/scl/fi/8wzviglucnjfvemt0wm4h/SESCOCINASRED.pdf?rlkey=6r26q24hayvhleuni1eb3f93z&st=xofmfhpe&dl=0', '_blank');
            break;
        case 'banos':
            window.open('https://www.dropbox.com/scl/fi/8m6z9pwpi02l34s0nyshh/SESBA-OSRED.pdf?rlkey=phepqn40xxo6e0grujw4yuvb8&st=f1k5w7fj&dl=0', '_blank');
            break;
        default:
            console.log('Categoría no reconocida');
    }
}

