<script>
  const { current_user} = $props()
</script>

<svelte:head>
  <title>Dashboard - Edit Profile</title>
</svelte:head>

<main>
  <section>
    <div class="header_image full w-full">
      
    </div>
    <div class="flex">
      <div class="avatar"></div>
      <div class="ml-4">
        <h1 class="text-2xl font-bold">{current_user.name}</h1>
        <p class="text-gray-500">@{current_user.username}</p>
      </div>
    </div>
  </section>
</main>


<style>
  .header_image {
    background-position: center;
    background-size: cover;
    background-color: #222;
    height: 200px;
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