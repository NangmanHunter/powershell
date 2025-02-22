let script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/markdown-it/dist/markdown-it.min.js";
document.getElementsByTagName("body")[0].append(script);


script.onload = function() {
    const md = window.markdownit(); 
    let m; 
    
    let url = window.location.href;
    let last = url.split('/').pop();
    last = last.replace(".html",".md");
    
    fetch(last)
    .then(response => response.text()) 
    .then(d => {
        m = d;  
        m = md.render(m); 
        document.getElementById('cnt').innerHTML = m;
    });
}