// Fonction pour calculer les années d'expérience restantes jusqu'au stage
function getStatusMessage(year) {
    if (year < 2026) {
        return "En cours d'études à l'ISEN";
    } else {
        return "Disponible pour stage de fin d'étude";
    }
}

// Pour permettre les tests unitaires avec Node.js/Jest
if (typeof module !== 'undefined') {
    module.exports = { getStatusMessage };
}

// Affichage dynamique sur la page
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('experience-summary');
    if (display) {
        display.innerText = getStatusMessage(new Date().getFullYear());
    }
});