<template>

  <main>

    <div class="about">
      <img id="me" alt="me" src="../assets/me.jpg">
      <h4>Thanks for visiting.</h4>

      <p class="first-para">
        I'm a fourth year medical student about to embark on my medical career. <br
        /> My main interests are:
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

    <p class="second-para">
      If you'd like, you can contact me <a href="mailto:reuben.schmidt@icloud.com">here</a>,
      or follow me on <a href="https://twitter.com/About_Medicine">Twitter</a>.
    </p>

  </main>

</template>

<style scoped>

  .about {
    display: grid;
    grid-template-areas:
      'heading heading photo'
      'paragraph paragraph photo'
      'ul ul photo'
      'ul ul photo';
  }

  .first-para {
    grid-area: paragraph;
    margin: 2rem;
  }

  .second-para {
    margin: 2rem;
  }

  h4 {
    grid-area: heading;
    margin: 2rem 2rem 0;
  }

  ul {
    grid-area: ul;
    margin: 0 2rem;
    line-height: 1.6;
  }

  #me {
    grid-area: photo;
    margin: 2rem;
    border-radius: 140px;
    max-width: 125px;
    height: auto;
  }

  a {
    font-weight: 600;
    color: #5183f5;
    text-decoration: none;
  }

  a:hover {
    cursor: pointer;
    color: #7b98fc;
  }

  @media screen and (max-width: 800px) {
    .about {
      grid-template-areas:
        'heading photo'
        'paragraph photo'
        'ul ul'
        'ul ul';
      min-width: 320px;
    }

    #me {
      width: 96px;
      margin: 2rem 1rem 2rem 0;
    }

    .first-para,
    .second-para {
      margin: 0.5rem 0.1rem 0;
    }

    h4 {
      margin: 0.5rem 0.1rem 0;
    }

    ul {
      margin: 0.5rem 0;
    }
  }

</style>
