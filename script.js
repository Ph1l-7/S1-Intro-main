console.log("Bonjour");

function ajouter(){
    var item=document.getElementById("desc").value;
    var price=document.getElementById("valeur").value;  //ajouter price


    let NewP = document.createElement("p");             //create balise <p>
    let NewS = document.createElement("span")
    
    NewS.innerText = price + "$";
    NewP.innerText = item + " : "                       //write dans le paragraphe
   
    document.getElementById("maListe").append(NewP);    //ajouter paragraphe to list
    NewP.append(NewS);


    //update Total
    var oldPrix = document.getElementById("total").innerText;
    var newPrix = +oldPrix + +price;                    //"+"var devient numerique <--> Parse.Int(VAR)
    document.getElementById("total").innerText = newPrix;











    //alert("L'item est bien ajoute");
}