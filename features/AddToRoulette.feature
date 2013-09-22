# language: fr
Fonctionnalité: Ajouter un produit sur la roulette
  Afin d'échanger des produits sur la roulette
  En tant qu'utilisateur
  Je peux y ajouter un produit
 
  Scénario: Ajouter à la roulette pour un utilisateur non enregistré
    Soit un utilisateur non-enregistré
    Quand il va sur la roulette
    Et qu'il ajoute un iPhone
    Alors il doit voir la page d'inscription
    Quand il s'inscrit sur NXC
    Alors l'iPhone est présent sur la roulette

  Scénario: Add to roulette when logged in
    Soit un utilisateur enregistré
    Quand il va sur la roulette
    Et qu'il ajoute un iPhone
    Alors l'iPhone est présent sur la roulette
