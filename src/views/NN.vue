<template>
<div>
  <h4>Coding your First Neural Network</h4>

  <p>There is any number of ways you can describe neural networks and how they function.
    For me, the most intuitive way to understand them was just to get stuck into coding one.</p>
  <p>In this post, I’ll take you through the simplest way to craft a neural network from scratch.
    We’re going to start from the very beginning, and take it step by step.</p>
  <p>Firstly, you’ll need to <a href="https://www.anaconda.com/distribution/#macos">install Anaconda</a>. It’s a program designed to simplify the setup of machine learning projects.</p>
  <p>The programming language du jour for machine learning is called Python. With Anaconda installed, open Terminal, type python and press enter. You should see a response like this:</p>

  <pre>
      <code class='code-lines'>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </code>
<code>  Python 3.7.3 (default, Mar 27 2019, 16:54:48)
  [Clang 4.0.1 (tags/RELEASE_401/final)] :: Anaconda, Inc. on darwin
  Type "help", "copyright", "credits" or "license" for more information.
  >>></code>
  </pre>

  <p>Python deals in packages - modules of code that are written to perform a specific function. Two of the most popular packages are Numpy and Matplotlib.
    Numpy is used for math operations. Python can already do math, but numpy allows us a much deeper and faster set of utilities. Matplotlib we use to display graphs.
    To check that both of these are installed correctly, type into your python ‘shell’(1):</p>

  <pre>
        <code class='code-lines'>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </code>
  <code>  >>> import numpy
    >>> numpy.__version__
    >>> import matplotlib
    >>> matplotlib.__version__</code>
    </pre>

  <p>Numpy is the universal go-to for operations like matrix multiplication (watch 3b1b’s introductory linear algebra series if those two words gave you palpitations).</p>

  <pre>
        <code class='code-lines'>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </code>
  <code>  >>> a = numpy.array([1,2],[3,4]])
    >>> b = numpy.array([4,3],[2,1]])
    >>> print(a, b)</code>
  </pre>

  <p>As you can see from the output, we’ve made two matrices, which are stored in the variables a and b.
    The result of multiplying two matrices is also referred to as their dot product. </p>

  <pre>
      <code class='code-lines'>
        <span>1</span>
      </code>
  <code>  >>> numpy.dot(a, b)</code>
  </pre>

  <p>Working it out by hand, we take the product sum of the first row and the first column, the second row and the first column, and so on with this pattern.</p>
  <p>This may seem like a stranger and unnecessary detour, but is actually fundamental to understanding neural networks. </p>
  <p>(with thanks to the legendary <a href="https://github.com/jcjohnson">Justin Johnson</a>)</p>

</div>
</template>

<script>
import * as axios from 'axios'

export default {
  name: 'neural-networks',
  data() {
    return {}
  },
  methods: {},
  mounted() {},
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

.posts {
  padding: 16px;
  display: block;
  border-radius: 8px;
}

a {
  font-weight: 600;
  color: #7b98fc;
  text-decoration: none;
}

a:hover {
  cursor: pointer;
  color: #5183f5
}

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
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
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

@media screen and (max-width: 800px) {
  h5 {
    margin: 1rem 1rem;
  }
}
</style>
