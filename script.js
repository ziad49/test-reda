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

// Fonction pour calculer les années d'expérience restantes jusqu'au stage
function getStatusMessage(year) {
    if (year < 2026) {
        return "En cours d'études à l'ISEN";
    } else {
        return "Disponible pour stage de fin d'étude";
    }
}

// Export pour Jest (Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getStatusMessage };
}

// Exécution navigateur UNIQUEMENT (On vérifie si 'document' existe)
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const display = document.getElementById('experience-summary');
        if (display) {
            display.innerText = getStatusMessage(new Date().getFullYear());
        }
    });
}