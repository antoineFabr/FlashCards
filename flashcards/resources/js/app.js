document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('register')
  const submitButton = document.getElementById('submit')
  const inputs = form.querySelectorAll('input')
  const password = document.getElementById('password')
  const confirmPassword = document.getElementById('confirm')

  function checkFormCompletion() {
    let allFilled = true

    // Vérification si tous les champs sont remplis
    inputs.forEach((input) => {
      if (!input.value) {
        allFilled = false
      }
    })

    // Vérification si le mot de passe et la confirmation du mot de passe sont identiques
    if (password.value !== confirmPassword.value) {
      allFilled = false
    }

    // Affichage du bouton si tout est correct
    if (allFilled) {
      submitButton.classList.add('visible') // Ajouter la classe pour afficher le bouton
    } else {
      submitButton.classList.remove('visible') // Retirer la classe pour masquer le bouton
    }
  }

  // Surveiller les changements dans les champs de formulaire
  inputs.forEach((input) => {
    input.addEventListener('input', checkFormCompletion)
  })

  // Vérifier si le formulaire est initialement rempli
  checkFormCompletion()
})
