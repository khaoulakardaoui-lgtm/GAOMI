// Script en ligne de commande pour créer un utilisateur (ex. le premier admin)
// Utilisation :
//   node scripts/createUser.js "Nom Complet" email@exemple.com motdepasse admin
//   node scripts/createUser.js "Jean Dupont" jean@ormva.ma monMotDePasse123 consultation

require('dotenv').config();
const userModel = require('../models/userModel');

async function main() {
  const [nomComplet, email, motDePasse, role] = process.argv.slice(2);

  if (!nomComplet || !email || !motDePasse) {
    console.log('Usage : node scripts/createUser.js "Nom Complet" email@exemple.com motdepasse [admin|consultation]');
    process.exit(1);
  }

  try {
    const id = await userModel.creerUtilisateur({
      nomComplet,
      email,
      motDePasse,
      role: role === 'admin' ? 'admin' : 'consultation'
    });
    console.log(`Utilisateur créé avec succès (id : ${id}, email : ${email}, rôle : ${role || 'consultation'})`);
  } catch (err) {
    console.error('Erreur lors de la création de l\'utilisateur :', err.message);
  } finally {
    process.exit(0);
  }
}

main();
