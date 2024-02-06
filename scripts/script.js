// script.js

// Fonction pour ouvrir la fenêtre modale
function openCommandModal() {
    // Créez un élément div pour la fenêtre modale
    var modal = document.createElement('div');
    modal.className = 'command-modal';

    // Contenu de la fenêtre modale
    modal.innerHTML = `
        <div class="modal-content">
            <h2 class="modal-title">Commande en ligne</h2>
            <div>sdzq
                <label for="category">Choisissez une catégorie :</label>
                <select id="category" name="category" onchange="updateOptions()">
                    <option value="burgers">Burgers</option>
                    <option value="boissons">Boissons</option>
                </select>
            </div>

            <div>
                <label for="products">Choisissez un produit :</label>
                <select id="products" name="products">
                    <!-- Les options seront ajoutées dynamiquement via JavaScript -->
                </select>
            </div>

            <!-- Ajoutez ici le reste de votre formulaire de commande -->

            <button class="button_dom" onclick="closeCommandModal()">Fermer</button>
        </div>        
    `;

    // Ajoutez la fenêtre modale à la fin du body
    document.body.appendChild(modal);

    // Positionnez la fenêtre modale au centre de la page
    modal.style.position = 'fixed';
    modal.style.top = '28%';
    modal.style.left = '90%';
    modal.style.transform = 'translate(-50%, -50%)';

    // Spécifiez la largeur de la fenêtre modale
    modal.querySelector('.modal-content').style.width = '70%'; // Ajustez la largeur selon vos besoins
}

// Fonction pour fermer la fenêtre modale
function closeCommandModal() {
    // Récupérez l'élément de la fenêtre modale
    var modal = document.querySelector('.command-modal');

    // Supprimez la fenêtre modale du DOM
    if (modal) {
        modal.parentNode.removeChild(modal);
    }
}
