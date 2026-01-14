pipeline {
    agent any

    // Définition de l'environnement (pour s'assurer que Node.js est utilisé)
    stages {
        stage('📥 Récupération du code') {
            steps {
                checkout scm
            }
        }

        stage('📦 Installation') {
            steps {
                // Installe les dépendances (Jest pour les tests)
                sh 'npm install'
            }
        }

        stage('🧪 Tests Unitaires') {
            steps {
                // Jenkins lance tes tests. 
                // Si getStatusMessage() ne renvoie pas ce qui est attendu, tout s'arrête ici !
                sh 'npm test'
            }
        }

        stage('🚀 Déploiement Simulation') {
            steps {
                // Pour l'instant, on simule le déploiement. 
                // Plus tard, on pourra ajouter une commande SCP pour envoyer vers un serveur.
                echo '✅ Tests réussis ! Déploiement du portfolio de Ziad en cours...'
                sh 'ls -la' // Affiche les fichiers pour prouver que tout est là
            }
        }
    }
    
    post {
        always {
            echo 'Traitement terminé.'
        }
        success {
            echo '🎉 Bravo Ziad ! Le pipeline a réussi.'
        }
        failure {
            echo '❌ Échec du pipeline. Vérifie tes tests unitaires ou ton code.'
        }
    }
}