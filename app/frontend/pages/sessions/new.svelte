<script>
  import { login } from '~/lib/auth.js'
</script>

<main>
  <section>
    
    <div class="notice">
      Please connect your Zalo account to continue.
    </div>
    <button class="btn" onclick={() => login('zalo')}>
      Continue with Zalo
    </button>
  </section>

</main>


<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .notice {
    border: 1px solid #888;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 6px;
    background-color: #222;
  }
</style>