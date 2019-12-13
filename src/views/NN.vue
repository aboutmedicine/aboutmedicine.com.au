<template>
<div>
  <h4>Coding your First Neural Network</h4>

  <p>There is any number of ways you can describe neural networks and how they function. But for me at least, the most intuitive
  way to understand them was just to get stuck into coding one.</p>
  <p>In this post, I’ll take you through the simplest way to craft a neural network from scratch. We’re going to start from
  the very beginning, and take it step by step.</p>
  <p>Firstly, you’ll need to <a href="https://www.anaconda.com/distribution/#macos">install Anaconda</a>. It’s a program designed
  to simplify the setup of machine learning projects.</p>
  <p>The programming language du jour for machine learning is called Python. With Anaconda installed, open Terminal, type <strong>python</strong> and press enter. You should see a response like this: <super-popup contents="If you see Python 2.7 in the first line, close the terminal and reopen it. Type python3 and press enter - this will ensure you're running the latest version."></super-popup></p>

  <code-block :lines="4" contents="  Python 3.7.3 (default, Mar 27 2019, 16:54:48)
  [Clang 4.0.1 (tags/RELEASE_401/final)] :: Anaconda, Inc. on darwin
  Type 'help', 'copyright', 'credits' or 'license' for more information.
  >>>" />

  <p>From here you can write and execute any code written in the Python language. Python is a general purpose programming language, which means you can perform any kind of task from it - from using it as a calculator to creating a neural network. Try typing in something like this:</p>

  <code-block :lines="2" contents="  >>> 4 ** 3
  >>> 64" />

  <p>Python is the perfect language for AI and machine learning, because of its vast community, and the contributions of this community.
     The open source packages available makes it super easy to create a neural network from scratch.
     These packages are modules of code, written to perform a specific set of tasks. Two of these packages
  packages are Numpy and Matplotlib. Numpy is short for Numerical Python. It's capable of certain types of computation that Python can't do alone.
  Matplotlib is a visualisation library, mostly used for creating graphs. To check that both of
  these are installed correctly, type into your python ‘shell’:   <super-popup title="i" contents="In layman's terms, a shell is a program you can use to
        type and execute code from a certain language. When you first open Terminal, you are inside the GNU bash shell.
        Then, if you type <strong>python</strong> and hit enter, you are in the python shell." />
  </p>

  <code-block :lines="4" contents="  >>> import numpy
  >>> numpy.__version__
  >>> import matplotlib
  >>> matplotlib.__version__" />

  <p>Numpy is the universal go-to for operations like matrix multiplication (watch <a href="https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab">3b1b</a>’s introductory linear algebra series
  if those two words gave you palpitations).</p>

  <code-block :lines="3" contents="  >>> a = numpy.array([[1,2],[3,4]])
  >>> b = numpy.array([[4,3],[2,1]])
  >>> print(a, b)" />

  <p>As you can see from the output, we’ve made two matrices, which are stored in the variables <strong>a</strong> and <strong>b</strong>.
  The result of multiplying two matrices is also referred to as their dot product. This is achieved by typing:</p>

  <code-block :lines="3" contents="  >>> numpy.dot(a, b)
  >>> array([[ 8,  5],
         [20, 13]])" />

  <p>Take a look back at the original matrices. How did we get from there to here? Working it out by hand, we take the
  first row of the first matrix (1,2), and the first column of the second matrix (4,2). The first entry in the new matrix is (4*1 + 2*2). The second entry is the same operation between (1,2) and the second column of the second matrix: (1*3 + 2*1) = 5. And so on with this pattern: <a href="http://matrixmultiplication.xyz/">here</a> is an awesome graphic which visualises this process.</p>

  <p>This may seem like an unnecessary detour, but is an important part of understanding neural networks. </p>

  <p>You don’t have to have heaps of experience in maths to understand how they function. But if you never dip your toes into
  the maths behind them, you probably won’t be able to build neural networks reliably. And at the end of the day, that's
  what we're aiming for.</p>

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

  <p>You may have seen a diagram like this to describe neural networks. Think of neural networks as a broad umbrella term, of
  which this is a subtype called a fully connected network. It's generally used as the first example for introducing people
  to the topic.</p>

  <p>The job of a fully connected network is to produce outputs when we supply it with data (inputs). At the beginning these outputs are random, but as we'll see in a moment, training
the network will transform them into something meaningful. </p>

  <p>Neural networks are capable of some pretty sophisticated tasks. One such task is image recognition. For example, we supply an image of a cat, and the network produces a numerical label that
  corresponds to the category “cat”. In this example, the classification is binary: it's either a cat, or not a cat.</p>

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
    Cat
    </div>
    <div style="padding: 2rem 1rem 2rem 3rem;">
    Not a cat
    </div>
  </div>

  </div>

  <p>Here we see the network has correctly classified the cat image. But it can only do this well once it has been <strong>trained</strong>,
  so let’s talk about that process first. To train the network to accurately produce the label cat when it is supplied
  with a cat pic, we have to supply it with thousands of cat pics.</p>

  <p>Computers don't have eyes; they read images as lists of numbers (in a grayscale image, each number represents a single pixel).
    Each number is an entry in this long list, which gets called a vector. The network makes predictions, then compares them to the correct
  category (which is of course supplied, for the training data). Each piece of training data is therefore formatted like
  so:
  </p>

  <h6 class="flex-row">{ vector of pixel values, correct category for this image }</h6>

  <p>For a greyscale image that is 28 by 28 pixels, that does have a cat in it, that piece of training data will look like:</p>

  <h6 class="flex-row">{&ensp; [784, 1]

  <super-popup title="i" contents="This is what's known as a column vector, with 784 entries (because 28 x 28 = 784 pixels make up this image) all in 1 column.
      Each entry will be a value between 0 and 1, representing the brightness of that pixel (where 0 is black, 1 is white)." /> , &ensp; 1

  <super-popup title="i" contents="In this example, 0 will be the numerical label representing 'not a cat', 1 representing 'cat'." /> &ensp;}

  </h6>

  <p>
  The length of this vector becomes the number of input nodes for the network. So rather than the two blue circles we had above, we'd see
  784. The output will be 2 nodes, one for each potential category.
  </p>

  <p>
  The contents of this output will, for our example, be a list of probabilities. We'll refer to these individual probability
  values as 'scores' from now on. For a cat input, we'd like to see the network produce a high score for the cat category
  only.
  </p>

  <p>So - how do we get from this list of pixel values at one end, to a list of scores for each category at the other?
  </p>

  <p>The answer lies, of course, in the intermediary. To make things simple we have just one intermediate layer. We refer to
  this architecture as a 'two-layer' fully connected network, counting the intermediate and output layers. Let's isolate
  one intermediate neuron and observe what will happen to its value as it passes through the network.
  </p>

  <div class="flex-row">

  <svg width="300" height="200">

    <!-- lines  -->
    <path id="0-0" d="M45 62.5 L130 25 Z" />
    <path id="1-0" d="M45 137.5 L130 25 Z" />


    <!-- input  -->

    <circle cx="25" cy="62.5" r="20" stroke="#555" stroke-width="3" fill="#d9eaff" />
    <circle cx="25" cy="137.5" r="20" stroke="#555" stroke-width="3" fill="#d9eaff" />

    <!-- hidden -->
    <circle cx="150" cy="25" r="20" stroke="#555" stroke-width="3" fill="#fafafa" />

  </svg>

  </div>

  <p>
  Each neuron takes the entire input vector, then multiplies each of its values by a different ‘weight’ (wx, wy, etc.). The
  results are summed, and sometimes a ‘bias’ value is added to the sum.
  </p>

  <p>(The symbol Σ means "the sum of" in case you didn't know.)</p>

  <div class="flex-row">

  <svg width="300" height="200">

    <!-- lines  -->
    <path id="0-0" d="M45 62.5 L130 25 Z" />
    <path id="1-0" d="M45 137.5 L130 25 Z" />
    <text>
    <textPath startOffset="25" href="#0-0"> * wy </textPath>
    <textPath startOffset="33" href="#1-0"> * wz </textPath>
    </text>

    <!-- input  -->

    <circle cx="25" cy="62.5" r="20" stroke="#555" stroke-width="3" fill="#d9eaff" />
    <circle cx="25" cy="137.5" r="20" stroke="#555" stroke-width="3" fill="#d9eaff" />
    <text x="14" y="70">x1</text>
    <text x="13" y="145">x2</text>
    <!-- hidden -->
    <circle cx="150" cy="25" r="20" stroke="#555" stroke-width="3" fill="#fafafa" />
    <text x="143" y="34">Σ</text>

  </svg>

  </div>

  <div class="flex-row">
  <h6>neuron output = wy * x1 + wz * x2 + b</h6>
  </div>


<p>To be clear, each of these weights are part of a greater matrix, which we'll call W1 and W2.</p>

<div class="flex-row">

  <svg width="300" height="200">

  <!-- lines  -->

  <line style="stroke: #ccc;" x1="45" y1="62.5" x2="130" y2="25" />
  <line style="stroke: #ccc;"x1="45" y1="62.5" x2="130" y2="100" />
  <line style="stroke: #ccc;"x1="45" y1="62.5" x2="130" y2="175" />
  <line style="stroke: #ccc;"x1="45" y1="137.5" x2="130" y2="25" />
  <line style="stroke: #ccc;"x1="45" y1="137.5" x2="130" y2="100" />
  <line style="stroke: #ccc;"x1="45" y1="137.5" x2="130" y2="175" />

  <line style="stroke: #ccc;"x1="170" y1="25" x2="255" y2="62.5" />
  <line style="stroke: #ccc;"x1="170" y1="100" x2="255" y2="62.5" />
  <line style="stroke: #ccc;"x1="170" y1="175" x2="255" y2="62.5" />
  <line style="stroke: #ccc;"x1="170" y1="25" x2="255" y2="137.5" />
  <line style="stroke: #ccc;"x1="170" y1="100" x2="255" y2="137.5" />
  <line style="stroke: #ccc;"x1="170" y1="175" x2="255" y2="137.5" />



  <!-- input  -->
  <circle cx="25" cy="62.5" r="20" stroke="#555" stroke-width="3" fill="#d9eaff" />
  <circle cx="25" cy="137.5" r="20" stroke="#555" stroke-width="3" fill="#d9eaff" />

  <!-- hidden -->
  <circle cx="150" cy="25" r="20" stroke="#555" stroke-width="3" fill="#fafafa" />

  <!-- output -->
  <circle cx="275" cy="62.5" r="20" stroke="#555" stroke-width="3" fill="#ffdcd9" />
  <circle cx="275" cy="137.5" r="20" stroke="#555" stroke-width="3" fill="#ffdcd9" />

  <text x="60" y="108">W1</text>
  <text x="200" y="108">W2</text>

  </svg>

</div>

  <p>
  The neuron output is then passed through an ‘activation function’, which determines to what degree this neuron will activate (whether
  it will contribute strongly to the end result, or remain mostly 'silent'). The most common activation function is called <strong>ReLU</strong>, or rectified
  linear unit. It’s very simple: if the result is a negative value, it outputs zero, otherwise it passes through the result
  unchanged.
  </p>

  <div class="flex-column">
  <svg width="300" height="200">

    <!-- lines  -->
    <path id="0-0" d="M45 62.5 L130 25 Z" />
    <path id="1-0" d="M45 137.5 L130 25 Z" />
    <text>
    <textPath startOffset="25" href="#0-0"> * wy </textPath>
    <textPath startOffset="33" href="#1-0"> * wz </textPath>
    </text>

    <!-- input  -->

    <circle cx="25" cy="62.5" r="20" stroke="#555" stroke-width="3" fill="#d9eaff" />
    <circle cx="25" cy="137.5" r="20" stroke="#555" stroke-width="3" fill="#d9eaff" />
    <text x="14" y="70">x1</text>
    <text x="13" y="145">x2</text>
    <!-- hidden -->
    <circle cx="150" cy="25" r="20" stroke="#555" stroke-width="3" fill="#fafafa" />
    <text x="143" y="34">Σ</text>

    <text x="180" y="31">→ ReLU</text>


  </svg>
  <h6>if neuron output < 0: activated output = 0</h6>
  <h6>if neuron output >= 0: activated output = neuron output</h6>


  </div>

  <p>This process is then repeated for each node: Take the vector of inputs, multiply it by a weights vector, sum up the values
  in the resulting vector (maybe add a bias value), then feed the result through an activation function. We then have our value
  for this particular neuron, which makes up one entry in this layer's vector.</p>

  <p>And now, that process is repeated on this entire layer. At this point in our model, we generate an output, and have completed
  the network's "forward pass" for this piece of training data.</p>

  <p>You’re probably itching to write some more code, so let’s get down some of what we’ve learned so far.</p>

  <p>In any text editor on your Mac (I use Atom, but TextEdit will do just fine), create a new file in an easily accessible
  folder, and save it as neural-network.py. To make sure everything’s working, type the following into your new file:
  </p>

  <code-block :lines="1" contents="  print(9 * 9)"></code-block>

  <p>Save the file. Head to the parent folder of where you saved your file, and right-click on the folder it is in. Select New
  Terminal at Folder.</p>

  <p>You’re now running the GNU Bash shell in that specific directory. Type in</p>

  <code-block :lines="1" contents="  python neural-network.py"></code-block>

  <p>And hey presto, you should receive an output of 81. Now in the same file, let’s begin writing up our neural network. First
  we need to import the modules we’ll be using (numpy and matplotlib). Convention has it that we do this in the following
  way:
  </p>

  <code-block :lines="3" contents="  import numpy as np
  from matplotlib import pyplot as plt
  from numpy.random import randn"></code-block>

  <p>That last one will come in handy for our first network, where we’ll be using random toy data to get things up and running
  quickly.
  </p>

  <p>First we’ll be defining our variables. Our first proper line of code looks like this:
  </p>

  <code-block :lines="1" contents="  batch_size, dimensions, hidden_nodes, output_nodes = 16, 2, 2, 3"></code-block>

  <p><strong>batch size</strong> is simply the number of pieces of training data we will put through
  the network at the same time.</p>
  <p><strong>dimensions</strong> refers to the number of input entries we have. For our earlier image example, this was
  784.
  </p>
  <p><strong>hidden nodes</strong> is the number of neurons in the hidden layer. We will have only one hidden layer with 24 nodes. We had three neurons in our hidden layer in the last example. </p>
  <p><strong>output nodes</strong> is the number of categories we want to have a prediction for. In our cat pic example, it was two: "cat" and "not a cat". </p>
  <p>Now lets initialise our random data.</p>

  <code-block :lines="2" contents="  input = randn(batch_size, dimensions)
  scores = randn(batch_size, output_nodes)"></code-block>

  <p>So for each run through our network, we’ll pass 16 input vectors, and 16 scores vectors. </p>
  <p>Let’s print out one of these input vectors to get an idea what it will look like. </p>

  <code-block :lines="2" contents="  print(input[0]) # print the first input
  print(input.shape)"></code-block>

  <p>Your input[0] should have looked like a list of 2 numbers. This is just gibberish data - but making a purposeless network
  will teach us the fundamentals more simply. And there’s something zen about the idea of a purposeless neural network.
  Or is that just me?</p>
  <p>Next we randomly initialise the weights matrices. Have a think about what the dimensions of these might look like, and why,
  before you read on any further.</p>

  <code-block :lines="2" contents="  w1 = randn(dimensions, hidden_nodes)
  w2 = randn(hidden_nodes, output_nodes)"></code-block>

  <p>So w1 holds 2 values for every H. We have 3 neurons in our hidden layer, so w1 should hold 6 values, right? Let’s print
  it out:</p>

  <code-block :lines="1" contents="  print(w1)"></code-block>

  <p>And w2 has 3 values for every dimension in the output. It’s shape will be different though, which is worth having a look
  at: </p>

  <code-block :lines="1" contents="  print(w2)"></code-block>

  <p>So to begin with, remember how we multiply the input values by the weights vector? Well, when we pass in the data like
  this, we have two matrices: x is a matrix because of the batch size, and w1 is a matrix because it is a collection of
  each weights vector.</p>
  <p>Our detour into matrix multiplication finally proves useful. When we multiply two matrices we are said to be taking their
  dot product, and in numpy we achieve this like so:</p>

  <code-block :lines="1" contents="  dot_product = input.dot(w1)"></code-block>

  <p>Awesome! Now we just have to add our bias value:</p>

  <code-block :lines="1" contents="  hidden_layer = dot_product + b"></code-block>

  <p>And pass the result through our activation function, achieved like so:</p>

  <code-block :lines="1" contents="  hidden_layer_relu = np.maximum(hidden_layer, 0)"></code-block>

  <p>Print out the result, and see what it looks like. The more of this work you’ll do, the more you realise that visualising
  every detail is crucial to your success (and preserving your sanity).</p>

  <code-block :lines="1" contents="  print(hidden_layer_relu)"></code-block>

  <p>Now we multiply this result by our second weights matrix:</p>

  <code-block :lines="1" contents="  scores_prediction = hidden_layer_relu.dot(w2)"></code-block>

  <p>This final result is the predicted scores for each category. We have completed what's known as our “forward pass”.</p>

  <p>To find out how well our model has done, we will calculate the degree of error.</p>

  <p>A simple way to do this is to calculate the difference between the actual label, and the prediction made by our model.</p>

  <p>In order to give more weight to large errors, we take the square of the error.</p>

  <p>Introducing the ‘loss function’, whose purpose is to establish how good our prediction is. A simple loss function is the squared difference between the correct category, and our prediction.</p>

  <code-block :lines="1" contents="  loss = np.square(scores_prediction - scores).sum()"></code-block>

  <p>We sum together the loss for each score, to get the total loss for this set of predictions. The higher the loss, the worse
  the predictions.</p>

  <p>The “learning” process of a neural network is all about modifying the values in w and b, to improve our predictions and
  thereby reduce our loss.</p>

  <p>Basically, we know that theoretically, there exists an optimal set of values for w and b, that will give us a minimal loss
  value. We want to find these optimal parameters.</p>

  <p>The process of doing this we call optimisation. It sounds like a difficult task at first glance, right?</p>

  <p>Fortunately, calculus provides us with a beautiful set of tools for performing this optimisation. If you haven’t seen any
  calculus before, don’t worry too much. I’ll try and make this intuitive.</p>

  <p>One of the core principles of calculus is the derivative. The derivative of a function tells us what the slope of it’s
  line is at any point in time. So if we have a curve like that of y = x^3, it’s slope at three different points looks
  like this:
  </p>

  <div class="flex-row">
  <svg xmlns="http://www.w3.org/2000/svg" width="700" height="517.5" viewBox="0 0 1562 1035">
    <path class="cls-1" d="M468.406-19.988h6V1030.77h-6V-19.988Z" />
    <path class="cls-1" d="M-13.942,576.442v-6H1547.18v6H-13.942Z" />
    <text id="_75" data-name="75" class="cls-2" transform="translate(458.623 100.873) scale(2)">
    <tspan x="0">75</tspan>
    </text>
    <text id="_50" data-name="50" class="cls-2" transform="translate(458.623 266.993) scale(2)">
    <tspan x="0">50</tspan>
    </text>
    <text id="_-50" data-name="-50" class="cls-2" transform="translate(458.623 913.459) scale(2)">
    <tspan x="0">-50</tspan>
    </text>
    <text id="_0" data-name="0" class="cls-2" transform="translate(460.579 607.45) scale(2)">
    <tspan x="0">0</tspan>
    </text>
    <text id="_1" data-name="1" class="cls-2" transform="translate(625.674 603.447) scale(2)">
    <tspan x="0">1</tspan>
    </text>
    <text id="_2" data-name="2" class="cls-2" transform="translate(785.79 607.45) scale(2)">
    <tspan x="0">2</tspan>
    </text>
    <text id="_3" data-name="3" class="cls-2" transform="translate(945.906 607.45) scale(2)">
    <tspan x="0">3</tspan>
    </text>
    <text id="_4" data-name="4" class="cls-2" transform="translate(1106.02 607.45) scale(2)">
    <tspan x="0">4</tspan>
    </text>
    <text id="_5" data-name="5" class="cls-2" transform="translate(1270.14 607.45) scale(2)">
    <tspan x="0">5</tspan>
    </text>
    <text id="_6" data-name="6" class="cls-2" transform="translate(1434.258 607.45) scale(2)">
    <tspan x="0">6</tspan>
    </text>
    <text id="_-1_" data-name="-1 " class="cls-2" transform="translate(297.438 607.45) scale(2)">
    <tspan x="0">-1</tspan>
    </text>
    <text id="_-2_" data-name="-2 " class="cls-2" transform="translate(143.326 607.45) scale(2)">
    <tspan x="0">-2</tspan>
    </text>
    <text id="_25" data-name="25" class="cls-2" transform="translate(458.623 429.11) scale(2)">
    <tspan x="0">25</tspan>
    </text>
    <text id="_-25" data-name="-25" class="cls-2" transform="translate(458.623 749.342) scale(2)">
    <tspan x="0">-25</tspan>
    </text>
    <path id="Red" class="cls-3" d="M-130,1016s9.634-445,601-445c246.982,0,313.874-27.113,409-103,253.18-201.971,365.4-617.916,393-737" />
    <path id="Blue" stroke-dasharray="20,10" class="cls-4" d="M1546,162L-69,940" />
    <path id="Green" stroke-dasharray="20,10" class="cls-5" d="M1563,455L-74,650" />
    <path id="Yellow" stroke-dasharray="20,10" class="cls-6" d="M384,1024L1334-12" />
    <text id="red" data-name="red" class="cls-2" transform="translate(885.79 200.45) scale(4)" style="fill: #ff6f67;">
    <tspan x="0">y = x^3</tspan>
    </text>
  </svg>
  </div>

  <p>And the concept of the derivative is that there is a function that will tell us exactly what this slope will look like,
  wherever we are in the function. For this curve, the derivative is 3x^2. If we ask, what is the slope of the line when
  x equals 2? The answer is 3(2)^2: 12. And if we line that up on the graph, it checks out (it's the <span style="border-bottom: 3px dotted #7b97ff">dark blue dotted line</span>).
  <super-popup title="i"
    contents=" As an aside, it’s been a revelation for me to find something that makes real use of slightly complex maths. I was completely turned off maths in high school because it seemed so irrelevant to the real world. But here is the humble derivative, making itself known in one of the most influential intellectual inventions in recent times!">
  </super-popup>
  </p>

  <div class="flex-row">
  <svg xmlns="http://www.w3.org/2000/svg" width="700" height="517.5" viewBox="0 0 1562 1035">
    <path class="cls-1" d="M468.406-19.988h6V1030.77h-6V-19.988Z" />
    <path class="cls-1" d="M-13.942,576.442v-6H1547.18v6H-13.942Z" />
    <text id="_75" data-name="75" class="cls-2" transform="translate(458.623 100.873) scale(2)">
    <tspan x="0">75</tspan>
    </text>
    <text id="_50" data-name="50" class="cls-2" transform="translate(458.623 266.993) scale(2)">
    <tspan x="0">50</tspan>
    </text>
    <text id="_-50" data-name="-50" class="cls-2" transform="translate(458.623 913.459) scale(2)">
    <tspan x="0">-50</tspan>
    </text>
    <text id="_0" data-name="0" class="cls-2" transform="translate(460.579 607.45) scale(2)">
    <tspan x="0">0</tspan>
    </text>
    <text id="_1" data-name="1" class="cls-2" transform="translate(625.674 603.447) scale(2)">
    <tspan x="0">1</tspan>
    </text>
    <text id="_2" data-name="2" class="cls-2" transform="translate(785.79 607.45) scale(2)">
    <tspan x="0">2</tspan>
    </text>
    <text id="_3" data-name="3" class="cls-2" transform="translate(945.906 607.45) scale(2)">
    <tspan x="0">3</tspan>
    </text>
    <text id="_4" data-name="4" class="cls-2" transform="translate(1106.02 607.45) scale(2)">
    <tspan x="0">4</tspan>
    </text>
    <text id="_5" data-name="5" class="cls-2" transform="translate(1270.14 607.45) scale(2)">
    <tspan x="0">5</tspan>
    </text>
    <text id="_6" data-name="6" class="cls-2" transform="translate(1434.258 607.45) scale(2)">
    <tspan x="0">6</tspan>
    </text>
    <text id="_-1_" data-name="-1 " class="cls-2" transform="translate(297.438 607.45) scale(2)">
    <tspan x="0">-1</tspan>
    </text>
    <text id="_-2_" data-name="-2 " class="cls-2" transform="translate(143.326 607.45) scale(2)">
    <tspan x="0">-2</tspan>
    </text>
    <text id="_25" data-name="25" class="cls-2" transform="translate(458.623 429.11) scale(2)">
    <tspan x="0">25</tspan>
    </text>
    <text id="_-25" data-name="-25" class="cls-2" transform="translate(458.623 749.342) scale(2)">
    <tspan x="0">-25</tspan>
    </text>
    <path id="Red" class="cls-3" d="M-130,1016s9.634-445,601-445c246.982,0,313.874-27.113,409-103,253.18-201.971,365.4-617.916,393-737" />
    <path id="Blue" stroke-dasharray="20,10" class="cls-4" d="M1546,162L-69,940" />
    <text id="red" data-name="red" class="cls-2" transform="translate(885.79 200.45) scale(4)" style="fill: #ff6f67;">
    <tspan x="0">y = x^3</tspan>
    </text>
    <text id="red" data-name="red" class="cls-2" transform="translate(885.79 400.45) scale(4)" style="fill: #555;">
    <tspan x="0">when x = 2,</tspan>
    </text>
    <text id="blue" data-name="blue" class="cls-2" transform="translate(1300 500.45) scale(4)" style="fill: #7b97ff;">
    <tspan x="0">slope = 12</tspan>
    </text>
  </svg>
  </div>

  <p>This concept can come in handy if we want to find the minimum value of a function, because if we take a random point, and
  know what the slope looks like, we can take a short step in the direction of the slope, downward, to head tentatively
  toward the minimum.</p>

  <p>So this is great for a single-variable function like this, which only has two dimensions. If we plump it out into three
  dimensions, then our minimum looks like a proper valley. To take a step in the direction of this valley, we need to know
  the derivative of not just one of these dimensions, but both.</p>

  <div class="flex-row">
  <img src="../assets/gradient.png" alt="">
  </div>

  <p>When we’re looking at derivatives beyond single-variable functions, each of these slopes we call a partial derivative.
  Partial derivatives are denoted by the symbol ∂, which is pronounced "del".
  So in order to take a step down into this 3D valley, we need to know the partial derivative for each of these variables
  that make up our function. </p>

  <p>The collection of partial derivatives for a single, multivariable function goes by a pretty nice and intuitive name: we
  call this collection the <strong>gradient</strong> of the function. </p>

  <p>If we can work out the gradient, we know where we need to step in order to minimise the output of our function, which in
  our neural network’s case is our loss value. Awesome!</p>

  <p>To put it a little more formally, our goal is to uncover the gradient of the output function with respect to each variable.
  A clever approach to doing this is with the Chain Rule. That’s our cue to start another brief but important sidequest:
  </p>

  <p>Calculus has heaps of rules that make computation easier. They’re tried and tested patterns to simplify our work. Let’s
  take a simple example first:</p>

  <div class="flex-row">
  <h6>y(x) = 4x</h6>
  </div>

  <p>What is the derivative of y with respect to x?</p>

  <p>The answer is 4: the slope of the graph will always equal four.</p>

  <p>Now what if we wanted to work out the derivative of z with respect to x, given</p>

  <div class="flex-row">
  <h6>z(x, y) = 4y + x</h6>
  </div>

  <p>What we can do is insert our other equation, giving us</p>

  <div class="flex-row">
  <h6>z(x, y) = 4 ( 4x ) * 1</h6>
  </div>

  <p>In order to find the derivative of z with respect to x, which is 16.</p>

  <p>Now say z was our output function, and x was one of our input variables. We have worked out that for every tiny change
  in x, the change in z will be 16 times that. </p>

  <p>For our neural network, we want to work out what the gradient of the output function is, with respect to every value in
  the network. Then we can change our weights and biases, in the hope that following this gradient will lead to a reduced
  loss value.
  </p>

  <p>The first gradient we calculate is for the final output. Remember, we are trying to work out how each part of the network
  will affect the loss function. So our first gradient is actually just the derivative of</p>

  <code-block :lines="1" contents="  loss = np.square(scores_prediction - scores).sum()"></code-block>

  <p>We follow something called the power rule to uncover the gradient here:   <super-popup title="i" contents="Without going into the intuition, the power rule is this pattern: For a function y=x^3, the derivative is 3x^2. For y = x^4, the derivative is 4x^3. And for y = x^2, the derivative is 2x."></super-popup>
  </p>

  <code-block :lines="1" contents="  gradient_wrt_predicted_scores = 2 * (scores_prediction - scores)"></code-block>

  <p>So now we know for each change in the predicted scores, what effect it will have on the loss function. But that’s of no
  use to us. Our next step will be though, calculating the gradient with regards to w2, the second weights matrix.</p>

  <p>One way to express the chain rule is like this:</p>

  <div class="flex-row">
  <h6>∂f / ∂x = (∂f / ∂y) * (∂y / ∂x)</h6>
  </div>

  <p>This might seem kind of redundant at first glance. We're essentially adding something that could be immediately cancelled out (∂y). But what we're really saying is that in order to work out the effect that a small change in x would have on the function f, we can introduce an intermediate that will simplify our computation.</p>

  <p>Let's apply it to our network now, to see the magic in action. The next gradient we want is ∂f / ∂w2. <super-popup contents="This is the next step I mentioned earlier: calculating the gradient of the output function with regards to w2, the second weights matrix."></super-popup></p>

  <p>Applying the chain rule, we can obtain: </p>

  <div class="flex-row">
  <h6>∂f / ∂w2 = (∂f / ∂y) * (∂y / ∂w2)</h6>
  </div>

  <p>Our intermediate (∂y) will be our previously calculated <strong>scores_prediction</strong>. Why?</p>

  <p>For starters, because we already know (∂f / ∂scores_prediction): it's the gradient_wrt_predicted_scores we just calculated.</p>

  <p>Secondly: when y = 3x, ∂y / ∂x = 3. For every slight change in x, <strong>y</strong> changed by <strong>3</strong> times this.</p>

  <p>And in our network, remember that <strong>scores_prediction = hidden_layer_relu * w2</strong>, therefore ∂scores_prediction / ∂w2 = hidden_layer_relu. Because for every slight change in w2, <strong>(scores_prediction)</strong> changed by <strong>(hidden_layer_relu)</strong> times this.</p>

  <p>So,</p>

  <div class="flex-row">
  <h6>∂f / ∂w2 = (∂f / ∂y) * (∂y / ∂w2)</h6>
  </div>

  <p>Is identical to:</p>

  <div class="flex-row">
  <h6>∂f / ∂w2 = gradient_wrt_predicted_scores * hidden_layer_relu</h6>
  </div>

  <p>Now, because each step of our network involved matrix multiplication, we can use this as a pattern for our backward pass. We've essentially established that the gradient for each part of the network will just be the preceding layer multiplied by the gradient of the subsequent layer, and can thus can continue all the way back to the beginning of our network like so.</p>

  <code-block :lines="6" contents="  gradient_wrt_predicted_scores = 2 * (scores_prediction - scores)
  gradient_wrt_w2 = hidden_layer_relu.T.dot(gradient_wrt_predicted_scores)
  gradient_wrt_hidden_relu = gradient_wrt_predicted_scores.dot(w2.T)
  gradient_wrt_hidden = gradient_wrt_hidden_relu.copy()
  gradient_wrt_hidden[h < 0] = 0
  gradient_wrt_w1 = input.T.dot(gradient_wrt_hidden)"></code-block>

<p>With a couple of caveats: you’ll notice for a start the capital T, which seems to be lurking fairly arbitrarily in our dot products.
  This stands for transpose. We get the transpose of a matrix by converting all its rows into columns, or vice versa.

For example transpose of a 2 by 3 matrix will be 3 by 2:</p>

<code-block :lines="6" contents="  x = [[2, 3, 4],
       [1, 2, 3]]

  x.T = [[2, 1],
         [3, 2],
         [4, 3]]"></code-block>

<p>This is necessary because matrices can only be multiplied if their neighbouring dimensions are alike. For example, you can multiply a matrix of dimensions (3, <strong>2</strong>), with one of (<strong>2</strong>, 3): </p>

<div class="flex-row">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" height="200" viewBox="0 0 500 200">
  <path class="class-1" d="M22,50H82v90H22V50Z"/>
  <path class="class-1" d="M21,79H83"/>
  <path class="class-1" d="M52,48v93"/>
  <path class="class-1" d="M20,110H83"/>
  <text id="_2_3_" data-name="(2, 3)" class="class-2" x="45" y="160"><tspan x="70">(2, 3)</tspan></text>
  <path class="class-1" d="M118,50h60v90H118V50Z"/>
  <path class="class-1" d="M117,79h62"/>
  <path class="class-1" d="M148,48v93"/>
  <path class="class-1" d="M116,110h63"/>
  <text id="_2_3_2" data-name="(2, 3)" class="class-2" x="118" y="160"><tspan x="166">(2, 3)</tspan></text>
  <path class="class-1" d="M256,50h60v90H256V50Z"/>
  <path class="class-1" d="M255,79h62"/>
  <path class="class-1" d="M286,48v93"/>
  <path class="class-1" d="M254,110h63"/>
  <text id="_2_3_3" data-name="(2, 3)" class="class-2" x="256" y="160"><tspan x="305">(2, 3)</tspan></text>
  <path class="class-1" d="M351.5,80h90v60h-90V80Z"/>
  <path class="class-1" d="M412.5,79v62"/>
  <path class="class-1" d="M443.5,110h-93"/>
  <path class="class-1" d="M381.5,78v63"/>
  <text id="_3_2_" data-name="(3, 2)" class="class-2" x="369" y="160"><tspan x="415">(3, 2)</tspan></text>
  <path class="class-3" d="M181.391,84.432l35.479,37.906"/>
  <path class="class-3" d="M182.87,124.568l34.739-40.136"/>
  <path class="class-4" d="M437.975,101.425l18.341,24.63,28.709-42.11"/>
  <path class="class-5" d="M68.333,172.5c9.65,7.8,12.22,11,33.334,11s25.136-5.573,32-11"/>
  <path class="class-5" d="M65,179l1-10h6"/>
  <path class="class-5" d="M126,170h7l1,10"/>
  </svg>
</div>

<p>Our hidden_layer_relu output looked like <span style="background:#7b97ff; border: 2px solid #5c7efe; padding: 0 .4rem"></span> &nbsp;, of (16 rows, 100 columns), to be precise. And our scores prediction matrix looked like <span style="background:#7b97ff; border: 2px solid #5c7efe; padding: 0 .4rem"></span> &nbsp; also (16 rows, 10 columns). We have to flip the first in the dot product to produce the result we’re looking for: (100, 16) * (16, 10). We won’t go into any more detail here, but this can be a bit finicky, so take care when you’re manually constructing a net like this. <super-popup contents=" Most of the time, you won’t be, but having an understanding of these details will serve you well down the track."></super-popup></p>

<p>Lastly, we need to substitute all negative numbers in our h gradient with
zeros, before we can calculate the gradient for w1. This is expressed in Python like so:</p>

<code-block :lines="1" contents="  gradient_wrt_hidden[h < 0] = 0"></code-block>

<p>Goodness me. We’ve now worked out the gradient of this function with respect to our weights matrices! As discussed earlier, we can now take a step downwards in the direction of these gradients, treading toward a local minimum.</p>

<p>The size of this step is held in a variable we call ‘learning_rate’. It’s negative, because we want to take a downward step, and its small. If it's too small, training will happen extremely slowly. If it is much bigger, then our optimisation step will be too big and we may miss the optimal parameters entirely.</p>

<p>And with that, our two-layer network is done! Here is the complete code:</p>

<code-block :lines="47" contents="  import numpy as np
  from numpy.random import randn
  from matplotlib import pyplot as plt

  # batch size ( = number of pieces of training data in each pass), dimensions in the input layer, hidden layer size, and number of output nodes (which correlate to the number of scores for our data)
  batch_size, dimensions, hidden_nodes, output_nodes  = 16, 2, 2, 3

  # random input and output data
  input = randn(batch_size, dimensions)
  scores = randn(batch_size, output_nodes)

  # random weights
  w1 = randn(dimensions, hidden_nodes)
  w2 = randn(hidden_nodes, output_nodes)

  learning_rate = 1e-8

  loss_array = np.array([[]])
  indices = np.array([[]])

  for i in range(10000):
    # forward pass
    hidden = input.dot(w1)
    hidden_relu = np.maximum(h, 0)
    scores_prediction = hidden_relu.dot(w2)

    # calculate and print loss
    loss = np.square(scores_prediction - scores).sum()
    print('Loss: %s' %loss)

    # backward pass
    gradient_wrt_predicted_scores = 2 * (scores_prediction - scores)
    gradient_wrt_w2 = hidden_layer_relu.T.dot(gradient_wrt_predicted_scores)
    gradient_wrt_hidden_relu = gradient_wrt_predicted_scores.dot(w2.T)
    gradient_wrt_hidden = gradient_wrt_hidden_relu.copy()
    gradient_wrt_hidden[h < 0] = 0
    gradient_wrt_w1 = input.T.dot(gradient_wrt_hidden)

    w1 -= learning_rate * gradient_wrt_w1
    w2 -= learning_rate * gradient_wrt_w2

    loss_array = np.append(loss_array, loss)
    indices = np.append(indices, i)

  plt.plot(indices, loss_array)
  plt.legend(['Loss over iterations'])
  plt.show()"></code-block>

<p>You will notice I've added a few lines to visualise the process, using the matplotlib library. </p>

<p>Head to your terminal and again run python neural-network.py. You should see a high initial loss value, quickly reduced. Although all of our data was random, our network is successfully determining some kind of pattern within it. We are training our network to better understand this pattern; our machine is learning.</p>



  <p>Thanks to <a href="https://github.com/jcjohnson">Justin Johnson</a> and
  <a href="https://github.com/Kayzaks">Michael Kissner</a> for their work on clarifying this topic. </p>

</div>
</template>

<script>
import SuperPopup from '@/components/SuperPopup.vue'
import CodeBlock from '@/components/CodeBlock.vue'

export default {
  name: 'neural-networks',
  components: {
  SuperPopup,
  CodeBlock
  },
  data() {
  return {}
  }
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

h6 {
  font-size: 16px;
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
  color: #5183f5;
}

pre {
  background: #181818;
  color: #f2f2f2;
  font-family: Menlo, monospace;
  line-height: 1.5;
  margin: 1rem;
  border-radius: 0.5rem;
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

.cls-1 {
  fill: #818283;
}

.cls-2 {
  font-size: 16px;
  fill: #222;
  text-anchor: end;
}

.cls-3 {
  fill: none;
  stroke: #ff6f67;
  stroke-width: 12px;
}

.cls-4 {
  fill: #7b97ff;
  stroke: #7b97ff;
}

.cls-4,
.cls-5,
.cls-6 {
  stroke-width: 8px;
}

.cls-5 {
  fill: #fdc689;
  stroke: #8ed4f1;
}

.cls-6 {
  fill: #ffdb54;
  stroke: #bc8cbe;
}

.clas-1, .clas-2 {
  fill: #7b97ff;
  stroke: #5c7efe;
  stroke-width: 3px;
}

.clas-3 {
  fill: none;
  stroke: #555;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 6px;
}

.clas-4 {
  font-size: 16px;
  fill: #222;
  text-anchor: end;
}

.class-1 {
  fill: #7b97ff;
  stroke: #5c7efe;
  stroke-width: 3px;
}

.class-1, .class-3, .class-4, .class-5 {
  stroke-linecap: round;
  stroke-linejoin: round;
  fill-rule: evenodd;
}

.class-2 {
  font-size: 16px;
  fill: #222;
  text-anchor: end;
}

.class-3, .class-4, .class-5 {
  fill: none;
}

.class-3 {
  stroke: #ff6f67;
}

.class-3, .class-4 {
  stroke-width: 20px;
}

.class-4 {
  stroke: #98dfa3;
}

.class-5 {
  stroke: #555;
  stroke-width: 5px;
}

@media screen and (max-width: 500px) {
  .content {
  margin: 1rem 0;
  }

  h4,
  p {
  margin: 1rem 0.5rem;
  }

  pre {
  margin: 1rem 0rem;
  }

  .flex-row>svg {
  max-width: 320px;
  max-height: 280px;
  }

  .flex-row>img {
  max-width: 320px;
  }
}
</style>
