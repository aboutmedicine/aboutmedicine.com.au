<template>
<div class="learning">
  <h4>Learning in Public</h4>
  <p>I was inspired to write this page by developer <a href="https://www.taniarascia.com">Tania Rascia</a>.</p>

  <h5>To Learn</h5>
  <p>My current focus is on basic programming and practical machine learning.</p>
  <h6>ML</h6>
  <ul>
    <li><input type="checkbox" disabled=""> Neural Networks 101</li>
    <li><input type="checkbox" disabled=""> Forward propagation</li>
  </ul>

  <h5>What I’ve Learnt (and shared)</h5>
  <h6>Anatomy</h6>
  <ul>
    <li><input type="checkbox" checked="" disabled=""> Arteries of the Abdominal Aorta</li>
    <li><input type="checkbox" checked="" disabled=""> Femoral Canal</li>
    <li><input type="checkbox" checked="" disabled=""> Inguinal Canal</li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'learning',
  components: {}
}
</script>


<style scoped>
p {
  margin: 16px 0px;
}

h4 {
  margin: 16px 0px;
}

h5,
h6 {
  margin: 32px 0px 16px;
}

ul {
  padding-left: 8px;
  padding-bottom: 16px;
}

ul li {
  list-style-type: none;
  margin-bottom: 0.3rem;
}

ul li::before {
  padding-left: 5px;
}
</style>
