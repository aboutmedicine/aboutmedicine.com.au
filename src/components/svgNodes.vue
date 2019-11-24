<template>

  <svg :width="width" :height="height">

    <!-- edges -->
    <path id="0-0" d="M97 78.6 L158 43 Z" />
    <path id="1-0" d="M97 145.3 L158 43 Z" />
    <text>
      <textPath startOffset="50" href="#0-0"> w1 </textPath>
      <textPath startOffset="50" href="#1-0"> w2 </textPath>
    </text>

    <!-- input -->
    <circle v-if="input < 3"
            r="20" stroke="#555"
            @mouseenter="dark($event)"
            @mouseleave="light($event)"
            v-for="i in input"
            :key="i"
            :cx="start"
            :cy="i*(height/hidden)-(strokeWidth+radius)+35"
            :stroke-width="strokeWidth"
            fill="#d9eaff" />

    <circle v-else
            v-for="i in input"
            :key="i"
            :cx="start"
            :cy="i*(height/input)-(strokeWidth+radius)"
            v-bind:r="radius"
            stroke="#555"
            :stroke-width="strokeWidth"
            fill="#d9eaff" />

    <!-- hidden -->
    <circle v-for="j in hidden"
            :key="j"
            :cx="end - (end - start)/2"
            :cy="j*(height/hidden)-(strokeWidth+radius)"
            v-bind:r="radius"
            stroke="#555"
            :stroke-width="strokeWidth"
            fill="#fafafa" />

    <!-- output -->
    <circle @mouseenter="show('output', $event)"
            @mouseleave="hide('output')"
            v-if="output < 3"
            v-for="k in output"
            :key="k" :cx="end"
            :cy="k*(height/hidden)-(strokeWidth+radius)+35"
            r="20"
            stroke="#555"
            :stroke-width="strokeWidth"
            fill="#ffdcd9" />

    <circle v-else
            v-for="k in output"
            :key="k"
            :cx="end"
            :cy="k*(height/output)-(strokeWidth+radius)"
            v-bind:r="radius"
            stroke="#555"
            :stroke-width="strokeWidth"
            fill="#ffdcd9" />

  </svg>

</template>

<script>

  export default {
    name: 'svgNodes',
    data() {
      return {
        width: 300,
        height: 200,
        radius: 20,
        strokeWidth: 3,
        colour: null
      }
    },
    props: {
      layers: Number,
      input: Number,
      hidden: Number,
      output: Number,
      contents: String
    },
    components: {
      SuperPopup
    },
    methods: {
      log: function() {
        console.log()
      },
      dark: function(e) {
        this.colour = e.target.attributes.fill.nodeValue
        e.target.attributes.fill.nodeValue = '#a9aaff'
      },
      light: function(e) {
        e.target.attributes.fill.nodeValue = this.colour
      }
    },
    mounted() {},
    computed: {
      start: function() {
        return this.width / this.layers - this.radius - this.strokeWidth
      },
      end: function() {
        return this.width - this.radius - this.strokeWidth
      }
    }
  }

</script>

<style scoped>

  line,
  path {
    stroke: #888;
    stroke-width: 3;
  }

  text {
    fill: #555;
    font-weight: 600;
    font-size: 1.5rem;
  }

  .popup {
    font-size: 1rem;
    opacity: 0;
    position: fixed;
    background: #fafafa;
    color: #555;
    font-weight: 400;
    padding: 1rem;
    border: 3px solid #7b98fc;
    border-radius: 0 0.5rem 0.5rem 0.5rem;
    line-height: 1.6;
    max-width: 24rem;
  }

</style>
