<template>
<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 500 500">
  <defs>
    <marker id="t" markerWidth="40" markerHeight="40" orient="auto" refY="2">
      <path d="M0,0 L4,2 0,4" />
    </marker>
  </defs>
  <polyline ref="poly" :points="points" />
</svg>
</template>

<script>
export default {
  name: 'mind-map-arrow',
  props: {
    start: Object
  },
  data: () => ({
    end: {
      x: 150,
      y: 0
    }
  }),
  computed: {
    points() {
      let path = this.start.x + "," + this.start.y + " " + this.end.x + "," + this.end.y;
      return path
    }
  },
  mounted() {
    this.makeArrows(this.$refs.poly, 6);
  },
  methods: {
    makeArrows: function(poly, spacing) {
      let svg = poly.ownerSVGElement;
      for (let pts = poly.points, i = 1; i < pts.numberOfItems; ++i) {
        let p0 = pts.getItem(i - 1),
          p1 = pts.getItem(i);
        let dx = p1.x - p0.x,
          dy = p1.y - p0.y;
        let d = Math.sqrt(dx * dx + dy * dy);
        let numPoints = Math.floor(d / spacing);
        dx /= numPoints;
        dy /= numPoints;
        for (let j = numPoints - 1; j > 0; --j) {
          let pt = svg.createSVGPoint();
          pt.x = p0.x + dx * j;
          pt.y = p0.y + dy * j;
          pts.insertItemBefore(pt, i);
        }
        if (numPoints > 0) i += numPoints - 1;
      }
    }
  }
}
</script>

<style scoped>
svg {
  position: absolute;
  top: 0;
  left: 0;
  background: none;
  z-index: -1;
}

path {
  stroke: #555;
  stroke-width: 1;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill-rule: evenodd;
}

polyline {
  stroke: #888;
  fill: none;
  stroke-width: 1;
  marker-start: url(#t);
  marker-mid: url(#t);
  marker-end: url(#t);
}
</style>
