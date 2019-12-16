<template>

  <div id="app">
    <div id="nav-container">
      <div id="nav-logo">
        <router-link to="/"><img style="width:48px" alt="AM logo" src="./assets/logo.png"> </router-link>
      </div>
      <div id="nav">
        <router-link to="/models">3D</router-link>
        <router-link to="/notes">Notes</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <router-view />
    <div id="footer">
      <router-link to="/about">contact</router-link>
      <a href="https://www.patreon.com/aboutmedicine">patreon</a>
      <router-link to="/learning">learning</router-link>
    </div>
  </div>

</template>

<style>

  @import url('https://fonts.googleapis.com/css?family=Arvo&display=swap');

  #app {
    font-family: 'Arvo', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0 17rem;
    box-sizing: border-box;
  }

  #nav-container {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0px;
  }

  #nav {
    display: flex;
    padding: 12px 0px;
  }

  #nav a {
    font-weight: 500;
    color: #777;
    padding: 3px 10px;
  }

  #nav a:hover {
    color: #333;
    cursor: pointer;
  }

  #nav a.router-link-exact-active {
    color: #333;
  }

  #footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 10rem;
    margin-top: 2rem;
  }

  #footer a {
    font-size: 14px;
    color: #999;
  }

  #footer a:hover {
    color: #555;
    cursor: pointer;
  }

  ::selection {
    background: rgba(255, 219, 83, 0.8);
    color: #111;
  }

  body {
    margin: 0;
    color: #444;
  }

  a {
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0px;
  }

  h1 {
    font-size: 6rem;
    letter-spacing: -1.5;
    font-weight: 200;
  }

  h2 {
    font-size: 3.75rem;
    letter-spacing: -0.5;
    font-weight: 200;
  }

  h3 {
    font-size: 3rem;
  }

  h4 {
    font-size: 2.125rem;
    letter-spacing: 0.25;
  }

  h5,
  label {
    font-size: 1.5rem;
  }

  h6 {
    font-size: 1.25rem;
    font-weight: 600;
  }

  .subtitle {
    font-size: 1rem;
  }

  p {
    font-size: 1rem;
    letter-spacing: 0.5;
    line-height: 1.5;
  }

  button {
    background: #7b98fc;
    color: #fff;
    max-width: 180px;
    font-family: inherit;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    font-size: 1.1rem;
    text-transform: none;
    padding: 0.8rem 0.9rem;
    margin: 0.8rem 0 0;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    line-height: 1;
  }

  button:hover {
    background: #5183f5;
  }

  @media screen and (max-width: 800px) {
    #app {
      padding: 0 1rem;
    }

    #footer {
      padding: 2rem 2rem;
    }
  }

  @media screen and (min-width: 1600px) {
    #app {
      padding: 0 36rem;
    }

    #footer {
      padding: 2rem 20rem;
    }
  }

</style>
