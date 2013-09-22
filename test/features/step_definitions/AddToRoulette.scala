package cucumber.steps

import cucumber.api.scala.{FR, ScalaDsl}

class AddToRoulette extends ScalaDsl with FR {
  Soit("""^un utilisateur ([a-z-]+)"""){ (userState:String) =>

  }

  Quand("""^il va sur la roulette$"""){ () =>

  }

  Et("""^qu'il ajoute un ([a-zA-Z]+)$"""){ (obj:String) =>

  }

  Alors("""^il doit voir la page d'inscription$"""){ () =>

  }

  Quand("""^il s'inscrit sur NXC$"""){ (obj:String) =>

  }

  Alors("""^[l'|le ]([a-zA-Z])+ est présent sur la roulette$"""){ (obj:String) =>

  }
}