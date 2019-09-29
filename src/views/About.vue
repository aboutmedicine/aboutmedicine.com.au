<template>
<div class="about">
  <img id="me" alt="me" src="../assets/me.jpg">
  <h4>Thanks for visiting.</h4>
  <p>
    I'm a fourth year medical student about to embark on my medical career. <br /> My main interests are:
  </p>
  <ul>
    <li>
      The rational use of technology in healthcare
    </li>
    <li>
      Education for clarity, and for empathy
    </li>
  </ul>
</div>
</template>

<style scoped>
p {
  margin: 2rem;
}

h4 {
  margin: 2rem;
}

ul {
  margin: 0 2rem;
  line-height: 1.6;
}

#me {
  position: absolute;
  right: 19rem;
  margin-top: .5rem;
  border-radius: 140px;
}

@media screen and (max-width: 800px) {
  #me {
    right: 2rem;
  }
}
</style>
