function shareArticle() {
    if (navigator.share) {
        navigator.share({
        url: window.location.href
        })
        .then(function() {
            console.log('URL condiviso con successo');
        })
        .catch(function(error) {
            console.log('Errore nella condivisione:', error);
        });
    } else {
        console.log('La condivisione non è supportata dal tuo browser');
    }
}