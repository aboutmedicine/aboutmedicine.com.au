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
    <router-view/>
    <div id="footer">
      <router-link to="/contact">contact</router-link>
      <router-link to="/contact">patreon</router-link>
      <router-link to="/learning">learning</router-link>
    </div>
  </div>

</template>

<style>

  @import url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre&display=swap');

  #app {
    font-family: 'Frank Ruhl Libre', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0px 90px;
  }

  #nav-container {
    display: flex;
    justify-content: space-between;
    padding: 16px 0px;
  }

  #nav-logo {
    font-weight: bold;
  }

  #nav {
    display: flex;
    padding: 12px;
  }

  #nav a {
    font-weight: bold;
    color: #777;
    padding: 0px 10px;
  }

  #nav a:hover {
    color: #333;
  }

  #nav a.router-link-exact-active {
    color: #333;
  }

  #footer {
    display: flex;
    justify-content: space-between;
    padding: 12px;
  }

  #footer a {
    color: #999;
    padding: 0px 10px;
  }

  #footer a:hover {
    color: #555;
  }

  ::selection {
    background: rgba(255,219,83,.8);
    color: #111;
}

code {
    font-family: Menlo,Roboto Mono,Courier New,monospace;
    font-size: 13px;
    color: #b3b9c5;
    direction: ltr;
    text-align: left;
    white-space: pre-wrap;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.7;
    font-weight: 400;
    margin: 2rem 0;
    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    border-radius: 4px;
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
  label,
  input {
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
  }

</style>
