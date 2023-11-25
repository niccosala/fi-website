var types = ["salute", "casa", "auto", "risparmio", "azienda", "altro"];

function scrollDown() {
    var scrollSpan = 0.7 * window.innerHeight;
    window.scrollTo(0, scrollSpan);
}

function locateArticles() {
    var divs = document.getElementsByTagName('div');
    var filteredDivs = [];
  
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].getAttribute("article-type")) {
            filteredDivs.push(divs[i]);
            divs[i].style.display = "flex";
        }
    }
  
    //console.log(filteredDivs);
    return filteredDivs;
}

function filterArticles(type) {
    var articles = locateArticles();

    for (var i = 0; i < articles.length; i++) {
        let match = false;
        var values = articles[i].getAttribute("article-type").split(' ');;
        //console.log(values);

        for (var v = 0; v < values.length; v++) {
            //console.log(values[v]);
            if(values[v] == type) {
                match = true;
                break;
            }
        }
        if (!match)
            articles[i].style.display = "none";
    }

    for (var i = 0; i < types.length; i++) {
        if(type == types[i]) 
            document.getElementById("blog-" + types[i]).style.opacity = "1";
        else 
            document.getElementById("blog-" + types[i]).style.opacity = ".8";
    }

    document.getElementById("blog-reset").style.bottom = "0%";

    scrollDown()
}

function resetFilters() {
    var articles = locateArticles();

    for (var i = 0; i < articles.length; i++) 
        articles[i].style.display = "flex";
    
    for (var i = 0; i < types.length; i++) 
        document.getElementById("blog-" + types[i]).style.opacity = ".8";

    document.getElementById("blog-reset").style.bottom = "-20%";
}