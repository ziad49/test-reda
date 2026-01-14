pipeline {
    agent any

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
                // On utilise "bat" au lieu de "sh" pour Windows
                bat 'npm install'
            }
        }

        stage('🧪 Tests Unitaires') {
            steps {
                // On utilise "bat" ici aussi
                bat 'npm test'
            }
        }

        stage('🚀 Déploiement Simulation') {
            steps {
                echo 'Tests réussis ! Déploiement du portfolio de Ziad FREIJ en cours...'
            }
        }
    }
}