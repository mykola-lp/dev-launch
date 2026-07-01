const toggle = document.querySelector('[data-mobile-menu-toggle]')
const menu = document.getElementById('mobile-menu')

const clearRestoredFocus = () => {
  const active = document.activeElement

  if (active && active !== document.body && active.closest('header')) {
    active.blur()
  }
}

window.addEventListener('load', clearRestoredFocus)

if (toggle && menu) {
  const mobileLinks = menu.querySelectorAll('a')

  const setMenuState = (isOpen) => {
    menu.classList.toggle('is-open', isOpen)

    toggle.setAttribute('aria-expanded', String(isOpen))
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu')

    menu.setAttribute('aria-hidden', String(!isOpen))

    document.body.style.overflow = isOpen ? 'hidden' : ''
  }

  toggle.addEventListener('click', () => {
    setMenuState(!menu.classList.contains('is-open'))
  })

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      setMenuState(false)
    })
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      setMenuState(false)
      toggle.focus()
    }
  })

  document.addEventListener('click', (event) => {
    if (
      !menu.classList.contains('is-open') ||
      menu.contains(event.target) ||
      toggle.contains(event.target)
    ) {
      return
    }

    setMenuState(false)
  })

  setMenuState(false)
}
