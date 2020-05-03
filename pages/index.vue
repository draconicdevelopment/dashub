<template>
  <div class="container">
    <div class="card">
      <div class="logo"></div>
      <form>
        <div class="input-container">
          <input placeholder="email" type="email" />
          <input placeholder="password" type="password" />
        </div>
        <button class="btn-login">LOG IN</button>
      </form>
    </div>
  </div>
</template>

<style lang="sass">
.container
  height: 100vh
  display: flex
  justify-content: center
  align-items: center

  .card
    display: flex
    flex-direction: column
    align-items: center
    padding: 24px
    background-color: var(--secondary-bg-color)
    width: 400px
    height: 450px
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.25)
    border-radius: 25px

    .logo
      background-image: url("../static/img/dashub.png")
      background-repeat: no-repeat
      background-position: center center
      width: 500px
      height: 90px
      transform: scale(0.7)
      margin-top: 5px

    form
      flex-grow: 2
      display: flex
      flex-direction: column
      justify-content: space-between
      margin-top: 80px
      width: 88%

      .input-container
        width: 100%
        height: 100px
        display: flex
        flex-direction: column
        justify-content: space-between

        input
          background: transparent
          padding: 6px
          border: none
          border-bottom: 1.5px solid #939393
          color: #939393
          font-size: 16px
          line-height: 1.5
          transition: border ease-in-out .4s

          &:focus
            outline: none
            border-bottom-color: #FF007A

          &::placeholder
            color: #939393
            font-size: 16px

      .btn-login
        width: 100%
        padding: 15px

        margin-bottom: 30px
        border-radius: 25px
        border: none
        color: white
        font-weight: bold
        background: linear-gradient(90deg, #FF007A 0%, rgba(255, 0, 199, 0.8) 100%)
        background-color: #FF007A
        box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.25);
        cursor: pointer
        transition: background ease-in-out .25s
        transition: box-shadow ease-in-out .25s

        &:hover
          background: transparent
          background-color: transparent
          box-shadow: 0px 8px 16px rgba(255, 0, 199, 0.25);
          padding: 13px
          border: 2px solid #FF007A
</style>
