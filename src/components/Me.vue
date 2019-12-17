<template>

  <div>
    <h3>Hey I'm Reuben.</h3>
    <h6>
      I make videos about medicine + sometimes I write stuff too.
    </h6>
    <div class="hero-box">
      <a href="/models/heart-schematic"><img id="hero" alt="me" src="../assets/heart_01.png"></a>
    </div>
    <div class="social">
      <a href="https://www.youtube.com/c/AboutMedicine"><img alt="youtube" src="../assets/youtube.svg" /></a>
      <a href="https://twitter.com/About_Medicine"><img alt="twitter" src="../assets/twitter.svg" /></a>
    </div>

  </div>

</template>

<script>

  export default {
    name: 'Me'
  }

</script>

<style scoped>

  .hero-box {
    display: flex;
    justify-content: center;
  }

  .social {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
  }

  .social img {
    width: 4rem;
    height: auto;
  }

  h6 {
    margin: 0 0 2rem;
    font-weight: 400;
    text-align: center;
  }

  h3 {
    margin: 2rem 0 1rem;
    text-align: center;
  }

  .social a {
    padding: 0 2rem;
    opacity: 0.4;
  }

  .social a:hover {
    opacity: 1;
    cursor: pointer;
  }

  #hero {
    width: 498px;
    margin: .5rem 0 .5rem 2rem;
    height: auto;
  }

  @media screen and (max-width: 500px) {
    #hero {
      width: 270px;
      height: 238px;
    }

    h3 {
      margin: 1rem 0;
      text-align: center;
    }
  }

</style>
