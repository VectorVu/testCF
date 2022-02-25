let btnSubmit = document.getElementById("btnSm");
let inputUrl = document.getElementById("InputLink");

btnSubmit.addEventListener("click", shorted(inputUrl.value))


function shorted(inputUrl){
    if(inputUrl!==null){
        console.log(inputUrl);
        fetch(`https://api.shrtco.de/v2/shorten?url=${inputUrl}/very/long/link.html`).then(res => res.json()).then(data => {
	console.log(data.result["full_short_link"]);
    document.getElementById("rs").innerText = data.result["full_short_link"];
});
    }
    
}
