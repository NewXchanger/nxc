# language: fr
Fonctionnalité: Réaliser un échange simple
  Afin d'échanger des produits
  En tant qu'utilisateur
  Je peux faire des propositions d'échange simple
 
Scénario: Echange simple JE VEUX visualisation pour un utilisateur
  Soit un utilisateur
  Quand il va sur échange simple
  Et qu'il recherche un iPhone sur JE VEUX
  Alors il doit voir tous les produits appartenant aux utilisateurs possédant un iPhone

Scénario: Echange simple J'AI visualisation pour un utilisateur
  Soit un utilisateur
  Quand il va sur échange simple
  Et qu'il recherche un iPhone sur J'AI
  Alors il doit voir tous les produits appartenant aux utilisateurs qui recherchent un iPhone

Scénario: Echange simple Selection
  Soit un utilisateur sur la page des résultats
  Quand il clic sur un produit
  Alors la fiche du produit s'affiche
 	
Scénario: Echange simple Proposition non enregistré
  Soit un utilisateur non enregistré sur la fiche produit
  Quand il clic sur proposition
  Alors il doit voir la page d'inscription
  Quand il s'inscrit sur NXC
  Alors la page de proposition s'affiche
 	
Scénario: Echange simple Proposition enregistré
  Soit un utilisateur enregistré sur la fiche produit
  Quand il clic sur proposition
  Alors la page de proposition s'affiche
 	
Scénario: Echange simple ajout de produit
  Soit un utilisateur enregistré sur la page de proposition
  Quand il clic sur ajouter un produit
  Alors la page de création de fiche produit s'affiche
 	
Scénario: Echange simple envoi Proposition
  Soit un utilisateur sur la page de proposition ayant ajouté au moins un produit
  Quand il fait une proposition
  Alors l'autre utilisateur concerné reçoit un email
  Et le produit apparait dans son tableau de bord
 	
Scénario: Echange simple Notification
  Soit un utilisateur enregistré ayant reçu une proposition
  Quand il se rend sur le site
  Alors il a une notification le renvoyant sur son tableau de bord
 	
Scénario: Echange simple Réponse
  Soit un utilisateur enregistré ayant reçu une proposition
  Quand il se rend sur son tableau de bord
  Alors il peut voir la proposition
  Et la refuser ou l'accepter
 	
Scénario: Echange simple Réponse accepter
  Soit un utilisateur enregistré visualisant une proposition
  Quand il clic sur accepté
  Alors l'autre utilisateur reçoit une notification de réussite
  Et toutes les propositions relatives aux produits en jeu autres que celle dont il est question sont perdues
 	
Scénario: Echange simple Réponse refuser
  Soit un utilisateur enregistré visualisant une proposition
  Quand il clic sur refuser
  Alors le site lui propose de faire une contre-proposition
 	
Scénario: Echange simple Réponse refuser definitivement
  Soit un utilisateur enregistré visualisation une proposition et refusant une contre-proposition
  Quand il clic sur refuser definitivement
  Alors le statut de la proposition est perdue
