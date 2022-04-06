function animation(){
    document.querySelector('.img-btn').addEventListener('click', function() {
        document.querySelector('.cont').classList.toggle('s-signup')
        let txt=document.getElementsByClassName("login")[0].innerHTML;
        document.getElementsByClassName("login")[0].innerHTML = txt === "Se connecter"?"Inscription":"Se connecter";

    });
}