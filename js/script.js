(() => {
  'use strict'

  const newsletterForm = document.querySelector('#newsletterForm')

  if (!newsletterForm) {
    return
  }

  newsletterForm.addEventListener('submit', event => {
    event.preventDefault()
    newsletterForm.reset()
  })
})()
