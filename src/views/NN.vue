<template>
<div>
  <h4>Coding your First Neural Network</h4>

  <p>There is any number of ways you can describe neural networks and how they function.
    But for me at least, the most intuitive way to understand them was just to get stuck into coding one.</p>
  <p>In this post, I’ll take you through the simplest way to craft a neural network from scratch.
    We’re going to start from the very beginning, and take it step by step.</p>
  <p>Firstly, you’ll need to <a href="https://www.anaconda.com/distribution/#macos">install Anaconda</a>.
    It’s a program designed to simplify the setup of machine learning projects.</p>
  <p>The programming language du jour for machine learning is called Python.
    With Anaconda installed, open Terminal, type <strong>python</strong> and press enter. You should see a response like this:</p>

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

  <p>From here you can write and execute any code written in the Python language. You can also use it as a calculator:</p>

  <pre>
      <code class='code-lines'>
        <span>1</span>
        <span>2</span>
      </code>
<code>  >>> 4 ** 3
  >>> 64</code>
  </pre>

  <p>So Python deals in packages - modules of code that are written to perform a specific function. Two of the most popular packages are Numpy and Matplotlib.
    Numpy is used for math operations. As we've seen, Python can already do math, but numpy allows us a much deeper and faster set of utilities.
    Matplotlib we use to display graphs.
    To check that both of these are installed correctly, type into your python ‘shell’

    <SuperPopup title="[info]" contents="In layman's terms, a shell is a program you can use to type and execute code from a certain language. When you first open Terminal, you are inside the GNU bash shell.
      Then, if you type <strong>python</strong> and hit enter, you are in the python shell." />
    :</p>

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
      </code>
<code>  >>> a = numpy.array([[1,2],[3,4]])
  >>> b = numpy.array([[4,3],[2,1]])
  >>> print(a, b)</code>
</pre>

  <p>As you can see from the output, we’ve made two matrices, which are stored in the variables <strong>a</strong> and <strong>b</strong>.
    The result of multiplying two matrices is also referred to as their dot product. This is achieved by typing:</p>

  <pre>
      <code class='code-lines'>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </code>
<code>  >>> numpy.dot(a, b)</code>
<code>  >>> array([[ 8,  5],
               [20, 13]])</code>
  </pre>

  <p>Take a look back at the original matrices. How did we get from there to here? Working it out by hand, we take the product
    sum of the first row and the first column, the second row and the first column, and so on with this pattern.</p>

  <p>This may seem like an unnecessary detour, but is an important part of understanding neural networks. </p>

  <p>You don’t have to have heaps of experience in maths to understand how they function.
    But if you never dip your toes into the maths behind them, you probably won’t be able to build neural networks reliably.
    And at the end of the day, that's what we're aiming for.</p>

  <div class="flex-row">

    <div style="padding: 1rem;">
      Input
    </div>

    <svg width="200" height="200">

      <!-- lines  -->
      <line x1="45" y1="62.5" x2="80" y2="25" />
      <line x1="45" y1="62.5" x2="80" y2="100" />
      <line x1="45" y1="62.5" x2="80" y2="175" />
      <line x1="45" y1="137.5" x2="80" y2="25" />
      <line x1="45" y1="137.5" x2="80" y2="100" />
      <line x1="45" y1="137.5" x2="80" y2="175" />

      <line x1="120" y1="25" x2="155" y2="62.5" />
      <line x1="120" y1="100" x2="155" y2="62.5" />
      <line x1="120" y1="175" x2="155" y2="62.5" />
      <line x1="120" y1="25" x2="155" y2="137.5" />
      <line x1="120" y1="100" x2="155" y2="137.5" />
      <line x1="120" y1="175" x2="155" y2="137.5" />

      <!-- input  -->
      <circle cx="25" cy="62.5" r="20" stroke="#555" stroke-width="3" fill="#d9eaff" />
      <circle cx="25" cy="137.5" r="20" stroke="#555" stroke-width="3" fill="#d9eaff" />

      <!-- hidden -->
      <circle cx="100" cy="25" r="20" stroke="#555" stroke-width="3" fill="#fafafa" />
      <circle cx="100" cy="100" r="20" stroke="#555" stroke-width="3" fill="#fafafa" />
      <circle cx="100" cy="175" r="20" stroke="#555" stroke-width="3" fill="#fafafa" />

      <!-- output -->
      <circle cx="175" cy="62.5" r="20" stroke="#555" stroke-width="3" fill="#ffdcd9" />
      <circle cx="175" cy="137.5" r="20" stroke="#555" stroke-width="3" fill="#ffdcd9" />

    </svg>

    <div style="padding: 1rem;">
      Output
    </div>

  </div>

  <p>You may have seen a diagram like this to describe neural networks. Think of neural networks as a broad umbrella
    term, of which this is a subtype called a fully connected network.
    It's generally used as the first example for introducing people to the topic.</p>

  <p>The aim of a fully connected network is to produce correct outputs when we supply it with data (inputs).</p>

  <p>The canonical example is image recognition. We supply an image of a cat, and the network produces a numerical
    label that corresponds to the category “cat”. In this example, the classification is binary: it's either a cat, or not a cat.</p>

  <div class="flex-row">

    <div style="padding-right: 1rem;">
      Input: Cat Image
    </div>

    <svg width="200" height="200">

      <!-- lines  -->
      <line x1="45" y1="62.5" x2="80" y2="25" />
      <line x1="45" y1="62.5" x2="80" y2="100" />
      <line x1="45" y1="62.5" x2="80" y2="175" />
      <line x1="45" y1="137.5" x2="80" y2="25" />
      <line x1="45" y1="137.5" x2="80" y2="100" />
      <line x1="45" y1="137.5" x2="80" y2="175" />

      <line x1="120" y1="25" x2="155" y2="62.5" />
      <line x1="120" y1="100" x2="155" y2="62.5" />
      <line x1="120" y1="175" x2="155" y2="62.5" />
      <line x1="120" y1="25" x2="155" y2="137.5" />
      <line x1="120" y1="100" x2="155" y2="137.5" />
      <line x1="120" y1="175" x2="155" y2="137.5" />

      <!-- input  -->
      <circle cx="25" cy="62.5" r="20" stroke="#555" stroke-width="3" fill="#d9eaff" />
      <circle cx="25" cy="137.5" r="20" stroke="#555" stroke-width="3" fill="#d9eaff" />

      <!-- hidden -->
      <circle cx="100" cy="25" r="20" stroke="#555" stroke-width="3" fill="#fafafa" />
      <circle cx="100" cy="100" r="20" stroke="#555" stroke-width="3" fill="#fafafa" />
      <circle cx="100" cy="175" r="20" stroke="#555" stroke-width="3" fill="#fafafa" />

      <!-- output -->
      <circle cx="175" cy="62.5" r="20" stroke="#555" stroke-width="3" fill="#ff7469" />
      <circle cx="175" cy="137.5" r="20" stroke="#555" stroke-width="3" fill="#ffdcd9" />

    </svg>

    <div class="flex-column">
      <div style="padding: 2rem 1rem;">
        O = cat
      </div>
      <div style="padding: 2rem 1rem 2rem 3rem;">
        1 = not a cat
      </div>
    </div>


  </div>

  <p>Here we see the network has correctly classified the cat image. But it can only do this well once it has
    been <strong>trained</strong>, so let’s talk about that process first. To train the network to accurately
    produce the label cat when it is supplied with a cat pic, we have to supply it with thousands of cat pics.</p>

  <p>Computers can’t see an image like we can, so we have to convert the pixels of the image into numerical values.
    Each number is an entry in this long list, which gets called a vector. The network makes predictions, then compares them to the
    correct category (which is of course supplied, for the training data). Each piece of training data is therefore formatted like so:</p>

  <h6 class="flex-row">{ vector of pixel values, correct category for this image }</h6>

  <p>For a greyscale image that is 28 by 28 pixels, that does have a cat in it, that piece of training data will look like:</p>

  <h6 class="flex-row">{&ensp; [784, 1]

    <SuperPopup title="[info]" contents="This is what we call a column vector, with 784 entries all in one column. Each entry will be a value
      between 0 and 1, representing the brightness of that pixel (0 is black, 1 is white)." />

    , &ensp; 0

    <SuperPopup title="[info]" contents="Scroll back up to the network shown earlier: 0 was the numerical label representing 'cat', 1 representing 'not a cat'." />

    &ensp;}</h6>

  <p>
    The length of this vector becomes the number of input nodes for the network. So rather than the two we had above, we'd see 784.
    The output - the network’s prediction - will be 2 nodes, one for each potential category.
  </p>

  <p>
    The contents of this output will, for our example, be a list of probabilities. We'll refer to these individual probability values as 'scores' from now on. For a cat input, we'd like to see the network produce a high score for the cat category
    only.
  </p>

  <p>So - how do we get from this list of pixel values at one end, to a list of scores for each category at the other?
  </p>

  <p>The answer lies, of course, in the intermediary. To make things simple we have just one intermediate layer.
    We refer to this architecture as a 'two-layer' fully connected network, counting the intermediate and output layers.
    Let's isolate one intermediate neuron and observe what will happen to its value as it passes through the network.
  </p>

  <div class="flex-row">

    <svg width="300" height="200">

      <!-- lines  -->
      <path id="0-0" d="M45 62.5 L130 25 Z" />
      <path id="1-0" d="M45 137.5 L130 25 Z" />
      <text> <textPath startOffset="25" href="#0-0"> w1 </textPath><textPath startOffset="33" href="#1-0"> w2 </textPath> </text>
      <!-- <text x="60" y="100">W</text>
      <text x="60" y="100">W</text> -->

      <line x1="170" y1="25" x2="255" y2="62.5" />
      <line x1="170" y1="25" x2="255" y2="137.5" />

      <!-- input  -->
      <circle cx="25" cy="62.5" r="20" stroke="#555" stroke-width="3" fill="#d9eaff" />
      <circle cx="25" cy="137.5" r="20" stroke="#555" stroke-width="3" fill="#d9eaff" />

      <!-- hidden -->
      <circle cx="150" cy="25" r="20" stroke="#555" stroke-width="3" fill="#fafafa" />

      <!-- output -->
      <circle cx="275" cy="62.5" r="20" stroke="#555" stroke-width="3" fill="#ff7469" />
      <circle cx="275" cy="137.5" r="20" stroke="#555" stroke-width="3" fill="#ffdcd9" />

    </svg>

  </div>

  <p>
    Each layer represents a number of equations our input vector will be passed through. To begin with, we
    multiply it by another vector which we’ll call W (for 'weights'). So each pixel value will be multiplied by a corresponding value in the vector W.
    We add the results up, and then add a scalar value b to it.</p>

  <p>Lastly, we feed the result through something called an activation function.
    The most common of these is called ReLU, or a rectified linear unit. All it does is clip all the
    negative values to zero, like so.
  </p>

  <p>This process is then repeated for each node: Take the vector of inputs, multiply it by a vector W, sum up the values in the resulting vector, add another value b, then feed the result through an activation function. We then have our value for
    this particular neuron, which makes up one entry in this layer's vector.</p>

  <p>You’re probably itching to write some more code, so let’s get down some of what we’ve learned so far.</p>

  <p>In any text editor on your Mac (I use Atom, but TextEdit will do just fine), create a new file in an
    easily accessible folder, and save it as neural-network.py.

    To make sure everything’s working, type the following into your new file:
  </p>

  <pre>
      <code class='code-lines'>
        <span>1</span>
      </code>
<code>  print(9 * 9)</code>
</pre>

  <p>Save the file. Head to the parent folder of where you saved your file, and right-click on the
    folder it is in. Click New Terminal at Folder.</p>

  <p>You’re now running the GNU Bash shell in that specific directory. Type in</p>

  <pre>
      <code class='code-lines'>
        <span>1</span>
      </code>
<code>  python neural-network.py </code>
</pre>

  <p>And hey presto, you should receive an output of 81.

    Now in the same file, let’s begin writing up our neural network. First we need to import the
    modules we’ll be using (numpy and matplotlib). Convention has it that we do this in the following way:
  </p>

  <pre>
      <code class='code-lines'>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </code>
<code>  import numpy as np
  from matplotlib import pyplot as plt
  from numpy.random import randn</code>
</pre>

  <p>That last one will come in handy for our first network, where we’ll be using random toy data
    to get things up and running quickly.</p>

  <p>First we’ll be defining our variables. I’ll be using some conventional notation, so that stuff
    you learn in future looks familiar.

    Our first proper line of code looks like this:
  </p>

  <pre>
      <code class='code-lines'>
        <span>1</span>
      </code>
<code>  N, D_in, H, D_out = 8, 8, 8, 8</code>
</pre>

<div class="flex-row">
<svgNodes :input="2" :hidden="3" :output="2" :layers="3"></svgNodes>
</div>




  <p>Thanks to <a href="https://github.com/jcjohnson">Justin Johnson</a> and
    <a href="https://github.com/Kayzaks">Michael Kissner</a> for their work on clarifying this topic. </p>

</div>
</template>

<script>
import SuperPopup from '@/components/SuperPopup.vue'
import svgNodes from '@/components/svgNodes.vue'

export default {
  name: 'neural-networks',
  components: {
    SuperPopup,
    svgNodes
  },
  data() {
    return {}
  },
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

.flex-row {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

line, path {
  stroke: #888;
  stroke-width: 3;
}

text {
  fill: #555;
  font-weight: 600;
  font-size: 1.5rem;
}

@media screen and (max-width: 500px) {

  .content {
    margin: 1rem 0;
  }

  h4,
  p {
    margin: 1rem .5rem;
  }

  pre {
    margin: 1rem 0rem;
  }

  .flex-row>svg {
    min-width: 200px;
  }
}
</style>
