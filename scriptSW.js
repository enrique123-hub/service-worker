if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        this.navigator.serviceWorker.register('./sw/sw.js')
            .then(function(register){
                console.log('Service worker register was successful with scope: ', register.scope);
            }, function(err) {
                console.log('ServiceWorker register failed: ', err);
            })
    })
}