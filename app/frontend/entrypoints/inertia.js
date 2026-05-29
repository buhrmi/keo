import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import '~/assets/global.css'

import Default from "~/layouts/default.svelte"


import { createInertiaApp, router } from '@inertiajs/svelte'

createInertiaApp({
  pages: "../pages",
  layout: () => Default,
})

document.addEventListener("inertia:start", () => {
  document.body.classList.add("loading")
})

document.addEventListener("inertia:finish", () => {
  document.body.classList.remove("loading")
})

window.addEventListener('message', function(event) {
  if (event.data == 'session-created') {
    router.reload()
  }
})