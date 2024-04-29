function abrirPdf(categoria) {
    switch (categoria) {
        case 'mobiliario':
            window.open('https://www.dropbox.com/scl/fi/cw325r5jr1s7b0m4ei83l/SESMOBILIARIOREDPDF.pdf?rlkey=bl4y6datbccg1cvbb07g2h600&st=kj6eg3dt&dl=0', '_blank');
            break;
        case 'cocinas':
            window.open('https://www.dropbox.com/scl/fi/6s2vh33i0x98pk3mbwvl1/SESCOCINASRED.pdf?rlkey=scyebibsaen47fe913fqtwny4&st=vpp0z974&dl=0', '_blank');
            break;
        case 'banos':
            window.open('https://www.dropbox.com/scl/fi/o5yx519nld4ce2bx5lvhi/SESBANOSRED.pdf?rlkey=4jvqqii4x2tkwwhs3zfg2og6x&st=pv97kknm&dl=0', '_blank');
            break;
        default:
            console.log('Categoría no reconocida');
    }
}

