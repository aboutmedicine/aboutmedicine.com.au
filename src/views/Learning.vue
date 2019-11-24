<template>

  <div class="learning">
    <h4>Learning in Public</h4>
    <p>I was inspired to write this page by developer <a href="https://www.taniarascia.com">Tania Rascia</a>.</p>

    <h5>To Learn</h5>
    <p>My current focus is on basic programming and practical machine learning.</p>
    <h6>ML</h6>
    <ul>
      <li><input type="checkbox" disabled=""> Deep learning 101</li>
      <li><input type="checkbox" disabled=""> Forward propagation</li>
      <li><input type="checkbox" disabled=""> Backpropagation</li>
      <li><input type="checkbox" disabled=""> Convolutional neural networks</li>
    </ul>

    <h5>Learning I've Shared</h5>
    <h6>Anatomy</h6>
    <ul>
      <li><input type="checkbox" checked="" disabled=""> Arteries of the abdominal aorta</li>
      <li><input type="checkbox" checked="" disabled=""> Inguinal canal</li>
      <li><input type="checkbox" checked="" disabled=""> Femoral canal</li>
      <li><input type="checkbox" checked="" disabled=""> Axilla</li>
      <li><input type="checkbox" checked="" disabled=""> Perineum</li>
      <li><input type="checkbox" checked="" disabled=""> Peritoneum</li>
      <li><input type="checkbox" checked="" disabled=""> Neuro stuff: cranial nerves, tracts,
        basal ganglia</li>
    </ul>

    <h6>Embryology</h6>
    <ul>
      <li><input type="checkbox" checked="" disabled=""> Summary of the first three weeks</li>
      <li><input type="checkbox" checked="" disabled=""> Gastrulation</li>
      <li><input type="checkbox" checked="" disabled=""> Neurulation</li>
      <li><input type="checkbox" checked="" disabled=""> Amniotic cavity + yolk sac development</li>
    </ul>

    <h6>Social Factors</h6>
    <ul>
      <li><input type="checkbox"
               checked=""
               disabled=""> Current implementations of machine learning in medicine</li>
    </ul>

    <h6>Experiments</h6>
    <ul>
      <li><input type="checkbox" checked="" disabled=""> 3D / MRI brain anatomy</li>
      <li><input type="checkbox" checked="" disabled=""> Schematic abdominal anatomy</li>
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
    margin: 2rem;
    line-height: 1.6;
  }

  h4 {
    margin: 2rem;
  }

  h5,
  h6 {
    margin: 2rem 2rem 1rem;
  }

  ul {
    padding-left: 0.5rem;
    padding-bottom: 1rem;
  }

  ul li {
    list-style-type: none;
    margin-bottom: 0.3rem;
  }

  ul li::before {
    padding-left: 5px;
  }

</style>
