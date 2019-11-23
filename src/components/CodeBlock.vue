<template>
<pre>
      <code class='code-lines'>
        <span v-for="i in lines">{{i}}
        </span></code>
<code>{{contents}}</code>
  </pre>
</template>

<script>
export default {
  name: 'CodeBlock',
  data() {
    return {}
  },
  props: {
    lines: Number,
    contents: String
  }
}
</script>

<style >
pre {
  background: #181818;
  color: #f2f2f2;
  font-family: Menlo, monospace;
  line-height: 1.5;
  margin: 1rem;
  border-radius: .5rem;
  overflow-wrap: normal;
  overflow: auto;
}

code {
  color: #f2f2f2;
  font-family: Menlo, monospace;
  line-height: 1.5;
  direction: ltr;
  text-align: left;
  word-spacing: normal;
  word-break: normal;
  white-space: pre;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

.code-lines {
  background: #000000;
  color: #555555;
  float: left;
  padding: 0 1.7rem;
  margin: 0 0 0 -5rem;
}
</style>
