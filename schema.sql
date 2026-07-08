-- Base de données : gestion_ao_marches
-- Table des utilisateurs (authentification et gestion des droits)

CREATE DATABASE IF NOT EXISTS gestion_ao_marches
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE gestion_ao_marches;

CREATE TABLE IF NOT EXISTS utilisateurs (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  nom_complet   VARCHAR(150) NOT NULL,
  email         VARCHAR(150) NOT NULL UNIQUE,
  mot_de_passe  VARCHAR(255) NOT NULL,        -- hash bcrypt, jamais en clair
  role          ENUM('admin', 'consultation') NOT NULL DEFAULT 'consultation',
  actif         TINYINT(1) NOT NULL DEFAULT 1, -- désactivation logique, jamais de suppression physique
  date_creation DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

INSERT INTO utilisateurs (nom_complet, email, mot_de_passe, role, actif)
VALUES
  ('Administrateur Principal', 'admin@ormva.ma', 'kwl-kardaoui-2008/@@@@/13/', 'admin', 1);
