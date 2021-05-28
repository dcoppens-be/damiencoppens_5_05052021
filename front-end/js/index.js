

async function getFromAPI(url) {
    try{
        /* const donnees = fetch(url); */

        fetch(url)
        .then(function(response){
            if(response.ok){
                /* console.log(response.json());*/
                return response.json();
            }
        })
        .then(function(value){
            console.log(value);
        })
        .catch(function(error){
            alert("Problème de récupération des données");
        })

        let contenu = document.createElement('ul');
        contenu.setAttribute('id','liste');
        document.getElementById('main').appendChild(contenu);

        let monElement = document.getElementById('products').appendChild(addElement('div',{class:'col-12 col-sm-6 col-lg-3', id:'test'}));
        monElement = monElement.appendChild(addElement('div',{class:'card mb-5'}));
        monElement.appendChild(addElement('img',{class:'card-img-top',src:'images/logo.jpg'}));
        monElement = monElement.appendChild(addElement('div',{class:'card-body text-center'}));
        let titre = monElement.appendChild(addElement('h5',{class:'card-title'}));
        titre.textContent="Produit 5";
        let produit = monElement.appendChild(addElement('p',{class:'card-text'}));
        produit.textContent="L'ourson E ...";
        let lien = monElement.appendChild(addElement('a',{class:'btn btn-primary', role:'button', href:'pages/product.html'}));
        lien.textContent="Détails du produit";

        /* Fonction de création d'une carte produit */
        /* Paramètres: 
                - [NODE] noeud du parent où la carte doit être ajoutée
                - [STRING] nom du produit. Exemple: ...
                - [STRING] chemin de l'image
                - [STRING] description */

        function newCard(node, name,imageUrl,description,link){
            let currentNode = node.appendChild(addElement('div',{class:'col-12 col-sm-6 col-lg-3'}));
            currentNode = currentNode.appendChild(addElement('div',{class:'card mb-5 h-100'}));
            currentNode.appendChild(addElement('img',{class:'card-img-top',src:imageUrl}));
            currentNode = currentNode.appendChild(addElement('div',{class:'card-body text-center'}));
            let titre = currentNode.appendChild(addElement('h5',{class:'card-title'}));
            titre.textContent=name;
            let produit = currentNode.appendChild(addElement('p',{class:'card-text'}));
            produit.textContent=description;
            let lien = currentNode.appendChild(addElement('a',{class:'btn btn-primary', role:'button', href:link}));
            lien.textContent="Détails du produit";
        }

        newCard(document.getElementById('products'),'Produit 6','images/logo.jpg','L ourson F','pages/product.html' );

        fetch(url)
        .then(function(response){
            if(response.ok){
                return response.json();    
            }
        })
        .then(function(value){
            let donnees = value;
            console.log(donnees.length);
            for(let i in donnees){
                let contenu = document.createElement('li');
                contenu.setAttribute('id',donnees[i]._id);
                let image = document.createElement('img');
                image.setAttribute('src',donnees[i].imageUrl);
                let lien = document.createElement('a');
                /*lien.setAttribute('href',"pages/product.html?".concat(donnees[i]._id));*/
                lien.setAttribute('href',"pages/product.html"+"?"+donnees[i]._id);
                document.getElementById('liste').appendChild(contenu);
                document.getElementById(donnees[i]._id).appendChild(lien).appendChild(image);

                newCard(document.getElementById('products'),donnees[i].name,donnees[i].imageUrl,donnees[i].description, "pages/product.html"+"?"+donnees[i]._id )
                }
        })
        

    }
    catch(error){
        console.log("Erreur de communication avec l'API",error)
    }
}

getFromAPI(url);