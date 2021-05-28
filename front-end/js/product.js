/*const url="http://localhost:3000/api/teddies";*/
const iid=window.location.search.toString();
console.log(window.location.search);
console.log(window.location.search.toString());
const id=iid.replace('?','');
console.log(id);

localStorage.clear();
localStorage.setItem('currentProductQuantity','0');
localStorage.setItem('color','Tan');

fetch(url+'/'+id,{method:'GET'})
        .then(function(response){
            if(response.ok){
                return response.json();
            }
        })
        .then(function(value){
            console.log(value);
            document.title="L'ours " + value.name + " par Orinoco";
            document.getElementById("main").removeChild(document.querySelector("h1"));
            let currentNode = document.getElementById("main").appendChild(addElement('div',{class:'container bg-secondary'}));
            let x = currentNode.appendChild(addElement('div',{class:'col-6'}));
            x.appendChild(addElement('img',{src: value.imageUrl,class:'img-fluid img-thumbnail'}));

            for (let i in value.colors){
                let option = document.getElementById("colorChoice").appendChild(addElement('option',{value:value.colors[i]}));
                option.textContent=value.colors[i];
            }
            
        })
        .catch(function(error){
            alert("Problème de récupération des données");
        })

document.getElementById("colorChoice").addEventListener('change', (event) =>{
    console.log(event.target.value);
    localStorage.setItem('color',event.target.value);
    console.log(localStorage.getItem('color'));
});