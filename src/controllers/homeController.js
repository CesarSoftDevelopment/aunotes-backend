exports.paginaInicial = (req, res) => {
    res.render('index',{
        titulo: 'Cesar Developer',
        numeros: [0, 1, 2, 3, 4, 5]
    });
    return;
};

exports.index = (req, res) => {
    res.render('index');
    return;
};
