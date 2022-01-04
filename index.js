var form = document.querySelector("form");
var loginResult = document.querySelector("p")
var loginUrl = 'http://localhost/pohja/login.php'

form.addEventListener("submit", login)

/**
 * 
 * @param {Event} e 
 */
function login(e){
    e.preventDefault();

    var data = new FormData(form)

    var base64cred = btoa( data.get("username")+":"+data.get("passwd") )

    //Authorization: Basic asfkjasödfljasklfja
    var params = {
        headers: { 'Authorization':'Basic ' + base64cred },
        withCredentials: true,
        method: 'post'
    }


    fetch(loginUrl, params)
        .then(resp => resp.json())
        .then( data => loginResult.textContent = data.info)
        .catch(e => {
            loginResult.textContent = "Epäonnistui!!!!"
        })
        
}