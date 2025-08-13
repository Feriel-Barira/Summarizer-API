# 🧠 Summarizer API (Node.js + HuggingFace)

Une API REST légère développée avec Node.js permettant de résumer automatiquement un texte en français à l’aide des modèles pré-entraînés de Hugging Face.

## 📦 Fonctionnalités

- Endpoint POST `/api/summarize` pour soumettre un texte à résumer.
- Résumé généré à l’aide de l’API Hugging Face.
- Supporte les requêtes JSON via Postman ou tout client HTTP.
- Gestion sécurisée des clés via `.env`.

---

## 🚀 Démarrage rapide

### 📁 Prérequis

- Node.js >= 14
- npm ou yarn
- Un compte Hugging Face (https://huggingface.co)
- Un token d’accès Hugging Face

### 🔧 Installation

1. Clone le dépôt :

```bash
git clone https://github.com/<ton-utilisateur>/summarizer-api.git
cd summarizer-api
