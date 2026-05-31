<script>
  const { current_user} = $props()
</script>

<svelte:head>
  <title>Dashboard - Edit Profile</title>
</svelte:head>

<main>
  <section class="bg-black">
    <div
      class="header_image full w-full"
      style={current_user.header_image ? `background-image: url('${current_user.header_image.url}')` : ''}
    ></div>

    
    <div class="profile_content flex full px-4">
      <div class="rounded-top"></div>
      {#if current_user.profile_image}
        <img src={current_user.profile_image.url} alt="Profile Image" class="avatar" />
      {/if}
      <div class="ml-4">
        <h1 class="text-2xl font-bold">{current_user.name}</h1>
        <p class="text-gray-500">@{current_user.username}</p>
      </div>
    </div>
  </section>
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
    margin-top: -4rem;
    width: 8rem;
    height: 8rem;
    border-radius: 9999px;
    border: 4px solid white;
    background-color: #d1d5db;
  }
</style>