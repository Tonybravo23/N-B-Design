//Information de connexion autorisées 
const validEmail="admin@nbdesign.com";
const validPassword="motdepasse123";
document.getElementsByTagName('login form').addEventlisterner("submit",function (e) { e.preventDefault();
	const email =
document.getElementsByTagNameById("email").value
const pass=
 document.getElementsByTagNameById("password").value
if (email===validEmail && pass===validPassword){
	//Authentification réussie : stocker une session simple
localstorage.setItem("authentificated", "true");
     window.location.href="index.html";//Rediger vers la principale
 }else{
 document.getElementsByTagNameById("error").style.display = "block";
   }
   function logout(){
   	localstorage.removeItem("authentification");
   	window.location.href = "login.html";
   }
};