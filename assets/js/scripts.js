function abrirPdf(categoria) {
    switch (categoria) {
        case 'mobiliario':
            window.open('', '_blank');
            break;
        case 'cocinas':
            window.open('https://docs.google.com/viewerng/viewer?url=https://piacere-warehouseclearencesale.netlify.app/assets/pdf/SESCOCINASRED', '_blank');
            break;
        case 'banos':
            window.open('https://docs.google.com/viewerng/viewer?url=/assets/pdf/banos.pdf', '_blank');
            break;
        default:
            console.log('Categoría no reconocida');
    }
}

