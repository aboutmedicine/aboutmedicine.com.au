<template>
<sup @mouseenter="show($event)" @mouseleave="hide($event)">

  {{title}}

  <div class="popup" v-html="contents"> </div>

</sup>
</template>

<script>

export default {
  name: 'SuperPopup',
  data() {
    return {
      posts_array: []
    }
  },
  props: {
    contents: String,
    title: String
  },
  methods: {
    show: function(e) {
      if (e) {
        e.target.firstElementChild.style.opacity = 1;
        e.target.firstElementChild.hidden = false;
        e.target.firstElementChild.style.left = e.clientX.toString() + "px"
        e.target.firstElementChild.style.top = e.clientY.toString() + "px"
      }
    },
    hide: function(e) {
      if (e) {
        e.target.firstElementChild.style.opacity = 0;
        e.target.firstElementChild.hidden = true;
      }
    }
  }
}
</script>

<style >
sup {
  font-size: .8rem;
  font-weight: 600;
  color: #7b98fc;
  text-decoration: none;
  vertical-align: baseline;
  position: relative;
  top: -0.4em;
  z-index: 4
}

sup:hover {
  cursor: pointer;
  color: #5183f5
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
  border-radius: 0 .5rem .5rem .5rem;
  line-height: 1.6;
  max-width: 24rem;
}
</style>
