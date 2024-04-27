function abrirPdf(categoria) {
    switch (categoria) {
        case 'mobiliario':
            window.open('https://docs.google.com/viewerng/viewer?url=https://piacere-warehouseclearencesale.netlify.app/assets/pdf/SESMOBILIARRED.pdf', '_blank');
            break;
        case 'cocinas':
            window.open('https://docs.google.com/viewerng/viewer?url=https://piacere-warehouseclearencesale.netlify.app/assets/pdf/SESCOCINASRED.pdf', '_blank');
            break;
        case 'banos':
            window.open('https://docs.google.com/viewerng/viewer?url=https://piacere-warehouseclearencesale.netlify.app/assets/pdf/SESBANOSRED.pdf', '_blank');
            break;
        default:
            console.log('Categoría no reconocida');
    }
}

