// Fonction pour ouvrir la fenêtre modale de commande
function openCommandModal() {
    // Créez un élément div pour la fenêtre modale
    var modal = document.createElement('div');
    modal.className = 'command-modal';

    // Contenu de la fenêtre modale
    modal.innerHTML = `
        <div class="modal-content">
            <h2 class="modal-title">Commande en ligne</h2>
            <div>
                <label for="category" class="dom_text" >Choisissez votre burger :</label>
                <select id="category" name="category" onchange="updateOptions()">
                    <option value="burgers">Burger Américain</option>
                    <option value="burgers">Le Savoyard</option>
                    <option value="burgers">Le ptit Français</option>
                    <option value="burgers">Le Coq</option>
                    <option value="burgers">Le Canadien</option>
                    <option value="burgers">Les Triplets</option>
                </select>
            </div>

            <div>
                <label for="products" class="dom_text" >Choisissez votre boissons :</label>
                <select id="products" name="products">
                <option value="burgers">Coca cola</option>
                <option value="burgers">Red Bull</option>
                <option value="burgers">Spritz</option>
                <option value="burgers">Le Coq</option>
                <option value="burgers">Le Canadien</option>
                <option value="burgers">Les Triplets</option>
                </select>
            </div>

            <!-- Ajoutez ici le reste de votre formulaire de commande -->
            
            <!-- Boutons pour fermer la fenêtre modale et confirmer la commande -->
            <button class="button_dom" onclick="closeCommandModal()">Fermer</button>
            <button class="button_dom" onclick="confirm()">Commander</button>
            
        </div>        
    `;

    // Ajoutez la fenêtre modale à la fin du body
    document.body.appendChild(modal);

    // Positionnez la fenêtre modale au centre de la page
    modal.style.position = 'fixed'; // Position fixe pour rester en place même si la page est scrollée
    modal.style.top = '31%'; // Position verticale à 31% de la hauteur de la fenêtre
    modal.style.left = '88%'; // Position horizontale à 88% de la largeur de la fenêtre
    modal.style.transform = 'translate(-50%, -50%)'; // Centrage horizontalement et verticalement

    // Spécifiez la largeur de la fenêtre modale
    modal.querySelector('.modal-content').style.width = '70%'; // Ajustez la largeur selon vos besoins
}

// Fonction pour fermer la fenêtre modale
function closeCommandModal() {
    // Récupérez l'élément de la fenêtre modale
    var modal = document.querySelector('.command-modal');

    // Supprimez la fenêtre modale du DOM si elle existe
    if (modal) {
        modal.parentNode.removeChild(modal);
    }
}

// Fonction pour confirmer la commande
function confirm() {
    closeCommandModal(); // Ferme la fenêtre modale
    alert("Votre commande a bien été enregistrée !"); // Affiche une alerte de confirmation
}
