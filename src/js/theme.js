const storageKey = 'devlaunch-theme'
const root = document.documentElement
const toggles = document.querySelectorAll('[data-theme-toggle]')

const applyTheme = (theme) => {
  root.classList.toggle('dark', theme === 'dark')
  root.dataset.theme = theme

  toggles.forEach((btn) => {
    btn.setAttribute('aria-pressed', String(theme === 'dark'))
    btn.setAttribute(
      'aria-label',
      theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
    )
  })
}

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem(storageKey)

  if (
    savedTheme === 'dark'
    || savedTheme === 'light'
  ) {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

const setTheme = (theme) => {
  localStorage.setItem(storageKey, theme)
  applyTheme(theme)
}

const toggleTheme = () => {
  const nextTheme = root.classList.contains('dark') ? 'light' : 'dark'
  setTheme(nextTheme)
}

applyTheme(getInitialTheme())

toggles.forEach((toggle) => {
  toggle.addEventListener('click', toggleTheme)
})
