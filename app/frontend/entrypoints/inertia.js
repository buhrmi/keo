import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import '~/assets/global.css'
import Default from "~/layouts/default.svelte"

import { createInertiaApp, router } from 'inertiax-svelte'

createInertiaApp({
  pages: "../pages",
  layout: () => Default,
})

window.addEventListener('message', function(event) {
  if (event.data == 'session-created') {
    router.reload()
  }
})