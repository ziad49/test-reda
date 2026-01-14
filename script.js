// 1. Définition de la logique métier
function getStatusMessage(year) {
    if (year < 2026) {
        return "En cours d'études à l'ISEN";
    } else {
        return "Disponible pour stage de fin d'étude";
    }
}

// 2. Export pour les tests Jenkins (Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getStatusMessage };
}

// 3. Exécution pour le navigateur (Interface du portfolio)
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const display = document.getElementById('experience-summary');
        if (display) {
            display.innerText = getStatusMessage(new Date().getFullYear());
        }
    });
}