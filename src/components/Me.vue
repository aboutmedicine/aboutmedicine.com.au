<template>
<div>
  <h4>Hey I'm Reuben.</h4>
  <p>
    I make videos about medicine + sometimes I write stuff too.
  </p>
  <div class="hero-box">
    <img id="hero" alt="me" src="../assets/heart.jpg">
  </div>
  <div class="social">
    <a href="https://www.youtube.com/c/AboutMedicine"><img alt="youtube" src="../assets/youtube.svg" /></a>
    <a href="https://twitter.com/About_Medicine"><img alt="twitter" src="../assets/twitter.svg" /></a>
  </div>

</div>
</template>

<script>
export default {
  name: 'Me',
  props: {
    msg: String
  }
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
  margin: 2rem 0;
}

.social img {
  width: 2.5rem;
  height: auto;
}

p {
  margin: 0 0 2rem;
  text-align: center;
}

h4 {
  margin: 2rem 0 1rem;
  text-align: center;
}

a {
  padding: 0 1rem;
  opacity: .4;
}

a:hover {
  opacity: 1;
  cursor: pointer;
}

#hero {
  max-width: 360px;
  margin: 0 0 1rem .5rem;
  height: auto;
}

@media screen and (max-width: 500px) {
  #hero {
    max-width: 270px;
  }

  h4 {
    margin: 1rem 0;
    text-align: center;
  }
}
</style>
