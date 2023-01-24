console.log("Bonjour");
compteur=4;
function ajouter(){
    var item=document.getElementById("desc").value;
    var price=document.getElementById("valeur").value;  //ajouter price


    let NewP = document.createElement("p");             //create balise <p>
    let NewS = document.createElement("span")
    
    NewS.innerText = "$" + price ;
    NewP.innerText = item + " : "                       //write dans le paragraphe
   
    document.getElementById("maListe").append(NewP);    //ajouter paragraphe to list
    NewP.append(NewS);


    //update Total
    var oldPrix = document.getElementById("total").innerText;
    var newPrix = +oldPrix + +price;                    //"+"var devient numerique <--> Parse.Int(VAR)
    document.getElementById("total").innerText = newPrix;



    //Create new hidden input dans forms pour send par courriel
    newInput=document.createElement("input");
    newInput.setAttribute("hidden", true);
    newInput.setAttribute("name", "Item_"+compteur);
    newInput.setAttribute("value", item);
    document.forms[0].append(newInput);
    compteur++;

    //alert("L'item est bien ajoute");
}



function ajouterEmail(){
    var email = document.getElementById("email").value;
    document.forms[0].action = "mailto:"+email;
    console.log("mail")
}

function effacer() {
    document.forms[0].action="";
    console.log("eff")
}
