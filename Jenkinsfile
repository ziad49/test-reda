pipeline {
    agent any

    // Cette partie est cruciale pour corriger l'erreur du Build #1
    tools {
        nodejs 'node' 
    }

    stages {
        stage('📥 Récupération du code') {
            steps {
                checkout scm
            }
        }

        stage('📦 Installation') {
            steps {
                sh 'npm install'
            }
        }

        stage('🧪 Tests Unitaires') {
            steps {
                sh 'npm test'
            }
        }

        stage('🚀 Déploiement Simulation') {
            steps {
                echo '✅ Tests réussis ! Déploiement du portfolio de Ziad FREIJ en cours...' [cite: 30]
            }
        }
    }
}