const { getStatusMessage } = require('../script.js');

test('Vérifie le message de statut pour l\'année 2026', () => {
    expect(getStatusMessage(2026)).toBe("Disponible pour stage de fin d'étude");
});

test('Vérifie le message de statut pour l\'année 2024', () => {
    expect(getStatusMessage(2024)).toBe("En cours d'études à l'ISEN");
});