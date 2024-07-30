// Constante pour le nom du groupe
const GROUPE = "Séminaire";

function groupe(nom) {
  var groupe = ContactsApp.getContactGroup(nom);
  if (groupe == null) {
    Logger.log("Groupe créé...");
    groupe = ContactsApp.createContactGroup(nom);
  }
  return groupe;
}

// Fonction pour créer un contact
function creerContact(nom, email, telephone, groupe) {
  var contact = ContactsApp.createContact(nom, "", email);
  contact.setMobilePhone(telephone);
  contact.addToGroup(groupe(GROUPE));
}

// Constante pour le nom de la colonne de validation
const COLONNE_VALIDATION = "E"; // Colonne E

// Fonction pour parcourir les données de la feuille Google
function parcourirFeuille() {
  var feuille = SpreadsheetApp.getActiveSpreadsheet();
  var donnees = feuille.getDataRange().getValues();
  // Supprimer les entêtes
  donnees.shift();
  Logger.log(donnees);
  
  // Itérer sur chaque ligne de données
  for (var i = 0; i < donnees.length; i++) {
    var nom = donnees[i][1];
    var email = donnees[i][2];
    var telephone = donnees[i][3];
    var statut = donnees[i][4];
    Logger.log("Item: " + nom + " " + email + " " + telephone + " " + statut);
    
    // Si la valeur de la colonne de validation est différente de "OK", créer un contact
    if (statut == "OK") {
      Logger.log("PASS");
    } else {
      creerContact(nom, email, telephone, groupe);
      feuille.getRange(COLONNE_VALIDATION + (i+2)).setValue("OK");
      Logger.log("SUCCESS");
    }
  }
}
