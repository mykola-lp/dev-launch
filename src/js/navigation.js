const toggle = document.querySelector('[data-mobile-menu-toggle]')
const menu = document.getElementById('mobile-menu')

const clearRestoredFocus = () => {
  const active = document.activeElement

  if (
    active
    && active !== document.body
    && active.closest('header')
  ) {
    active.blur()
  }
}

window.addEventListener('load', clearRestoredFocus)

if (
  toggle
  && menu
) {
  const setMenuState = (isOpen) => {
    menu.classList.toggle('hidden', !isOpen)
    toggle.setAttribute('aria-expanded', String(isOpen))
    menu.setAttribute('aria-hidden', String(!isOpen))
  }

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.contains('hidden')
    setMenuState(isOpen)
  })

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      setMenuState(false)
    })
  })

  // init state
  setMenuState(false)
}
