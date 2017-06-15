var jq = document.createElement("script");

jq.addEventListener("load", proceed); // pass my hoisted function
jq.src = "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js";
document.querySelector("head").appendChild(jq);

function proceed () {
    // jQuery load complete, do your magic
    
}

