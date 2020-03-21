<template>
  <div>
    <div class="nav">
      <div class="logo-container">
        <img
          class="logo"
          src="../static/img/LightIcon.svg"
          width="106"
          height="106"
          color="red"
        />
      </div>
      <ul class="navbar-nav">
        <li class="nav-item"></li>
      </ul>
    </div>
    <nuxt />
  </div>
</template>

<style>
:root {
  --primary-bg-color: #202020;
  --secondary-bg-color: #303030;
}
</style>

<style lang="sass" scoped>
.nav
  width: 128px
  height: 96%
  top: 2%
  background-color: var(--secondary-bg-color)
  position: fixed
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.25);
  border-radius: 0px 25px 25px 0px;
  transition: ease 300ms

  &:hover
    width: 360px

    .logo-container
      justify-content: flex-end


  .logo-container
    background: red
    display: flex
    height: 128px
    background: linear-gradient(135deg, #8A2BE2 0%, #E22BD0 100%)
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.25)
    border-radius: 0px 25px 25px 0px;
    align-items: center
    justify-content: center

  .navbar-nav
    padding: 0
    margin: 0
    list-style-type: none
    display: flex
    flex-direction: column
    align-items: center
</style>
