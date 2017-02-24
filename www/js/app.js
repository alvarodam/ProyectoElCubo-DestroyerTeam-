window.addEventListener('load', function() {
    /*Declare views*/
    $JSView.declareView({
        viewA: {
            url: '/viewA',
            template: 'views/viewA.html',
            controller: 'viewA'
        },
        viewB: {
            url: '/viewB',
            template: 'views/viewB.html',
            controller: 'viewB'
        },
        viewC: {
            url: '/viewC',
            template: 'views/viewC.html',
            controller: 'viewC'
        }
    });

    /*Declare modal*/
    $JSView.declareModal({
        modalA: {
            url: '/modalA',
            template: 'views/modalA.html',
            controller: 'modalA'
        }
    });

    $JSView.declareModal({
        modalB: {
            url: '/modalB',
            template: 'views/modalB.html',
            controller: 'modalB'
        }
    });

    $JSView.declareModal({
        modalC: {
            url: '/modalC',
            template: 'views/modalC.html',
            controller: 'modalC'
        }
    });

    $JSView.declareModal({
        modalD: {
            url: '/modalD',
            template: 'views/modalD.html',
            controller: 'modalA'
        }
    });

    /*Asign view start*/
    $JSView
        .initView('viewA');

}, false);
