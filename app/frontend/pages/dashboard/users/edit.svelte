<script>
  const { current_user} = $props()
</script>

<svelte:head>
  <title>{current_user.name}</title>
</svelte:head>

<main class="layout">
  <header
    class="header_image "
    style={current_user.header_image ? `background-image: url('${current_user.header_image.url}')` : ''}
  ></header>
  
  <div class="profile_content flex full gap-4 px-4">
    <div class="rounded-top"></div>
    {#if current_user.profile_image}
      <img src={current_user.profile_image.url} alt="Profile Image" class="avatar" />
    {/if}
    <div class="leading-snug">
      <h2 class="">{current_user.name}</h2>
      <p class="text-gray-500">@{current_user.handle}</p>
    </div>
  </div>
</main>


<style>
  .header_image {
    position: sticky;
    top: 0;
    z-index: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #222;
    height: 200px;
  }

  .profile_content {
    position: relative;
    z-index: 1;
    background: var(--bg-primary);
  }

  .rounded-top {
    position: absolute;
    z-index: -1;
    top: -1rem;
    left: 0;
    right: 0;
    height: 1rem;
    background: var(--bg-primary);
    border-top-left-radius: 9999px;
    border-top-right-radius: 9999px;
  }

  .avatar {
    margin-top: -2rem;
    width: 6rem;
    height: 6rem;
    border-radius: 9999px;
    border: 2px solid white;
    background-color: #d1d5db;
  }
</style>