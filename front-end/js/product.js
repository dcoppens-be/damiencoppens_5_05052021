const url="http://localhost:3000/api/teddies";
const iid=window.location.search.toString();
console.log(window.location.search);
console.log(window.location.search.toString());
const id=iid.replace('?','');
console.log(id);

fetch(url+'/'+id,{method:'GET'})
        .then(function(response){
            if(response.ok){
                return response.json();
            }
        })
        .then(function(value){
            console.log(value);
            document.title="L'ours " + value.name + " par Orinoco";
        })
        .catch(function(error){
            alert("Problème de récupération des données");
        })