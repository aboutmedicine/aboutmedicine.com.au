<template>

  <div class="">
    <div id="container">

    </div>

    <div class="btn" id="btn_drawar">Arrows</div>
    <div class="btn" id="btn_delar">Undo Arrow</div>
    <div class="tutorial" id="tutorial">
    </div>


  </div>

</template>

<script>

  export default {
    data: () => ({}),
    mounted() {
      const elm_container = document.querySelector('#container')

      //Draw arrows with SVG in the $parent element between the click coords
      function drawArrowSVG(parent) {
        //From: https://coursesweb.net/javascript/
        var me = this
        var x,
          y = 0 //contain the coordinates
        var drawarrow = 0 //if 2, draw the arrow
        var c_e1 = {} // x,y coords for base line
        var c_e2 = {} // x,y coords for arrow
        var container = parent
        me.draw = -1 //if 1 allow to draw the arrow

        // Get X and Y position of the elm
        function getXYpos(elm) {
          x = elm.offsetLeft // set x to elm’s offsetLeft
          y = elm.offsetTop // set y to elm’s offsetTop

          elm = elm.offsetParent // set elm to its offsetParent

          //use while loop to check if elm is null
          // if not then add current elm’s offsetLeft to x
          //offsetTop to y and set elm to its offsetParent
          while (elm != null) {
            x = parseInt(x) + parseInt(elm.offsetLeft)
            y = parseInt(y) + parseInt(elm.offsetTop)
            elm = elm.offsetParent
          }

          // returns an object with "xp" (Left), "yp" (Top) position
          return {
            xp: x,
            yp: y
          }
        }

        // Get X, Y coords
        function getCoords(e) {
          //if $draw is 1, get the coords and draw arrow
          if (me.draw == 1) {
            var xy_pos = getXYpos(this)

            x = e.pageX
            y = e.pageY

            x = x - xy_pos['xp']
            y = y - xy_pos['yp']

            //set coords in c_e2 and c_e1; if drawarrow is 2 draw the arrow
            drawarrow++
            if (drawarrow == 2) {
              c_e2 = {
                x: x,
                y: y
              }
              drawarrow = 0
              drawArrow(c_e1, c_e2)
            } else
              c_e1 = {
                x: x,
                y: y
              }
          }
        }

        //append in #container SVG arrow with base in $c_e1 and the arrow in $c_e2 coords
        function drawArrow(c_e1, c_e2) {
          var arrsvg =
            '<svg class="arrsvg" style="position:absolute; top:0; left:0; margin:0; width:99.8%; height:99.9%;"><defs><marker id="arrow" markerWidth="8" markerHeight="8" refx="3" refy="4" orient="auto"><path d="M1,1 L1,7 L7,4 L1,1" style="fill:#555;" /></marker></defs><path d="M' +
            c_e1.x +
            ',' +
            c_e1.y +
            ' L' +
            c_e2.x +
            ',' +
            c_e2.y +
            '" style="stroke:#555; stroke-width: 2.3px; fill: none; marker-end: url(#arrow);"/></svg>'
          container.insertAdjacentHTML('beforeend', arrsvg) //add the arrow to the end in #container
        }

        //register click on $container to get the coords
        container.addEventListener('click', getCoords)
      }

      //draw arrow with SVG between the clicks coords in $elm_container
      let drawAr = new drawArrowSVG(elm_container)

      //register click on #btn_drawar to enable /disable drawing action
      var btn_drawar = document.getElementById('btn_drawar')
      if (btn_drawar)
        btn_drawar.addEventListener('click', function(e) {
          drawAr.draw *= -1
          e.target.style.background = drawAr.draw == 1 ? '#bbb' : '#eee'
          e.target.innerHTML = drawAr.draw == 1 ? 'Turn Off' : 'Arrows'
          var tutorial = document.getElementById('tutorial')
          tutorial.innerHTML = drawAr.draw == 1 ? '<div>Click twice to draw arrows</div>' : ''
          document.body.style.cursor = drawAr.draw == 1 ? 'se-resize' : 'default'
        })

      var btn_delar = document.getElementById('btn_delar')
      if (btn_delar)
        btn_delar.addEventListener('click', function(e) {
          var arrsvg = document.querySelectorAll('.arrsvg')
          var last_arr = arrsvg[arrsvg.length - 1];
          last_arr.outerHTML = ''
        })
    }
  }

</script>

<style lang="css" scoped>

  #container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #fff;
    border: 2px dashed #eee;
  }

  .btn {
    background: #eee;
    color: #555;
    width: 150px !important;
    text-align: center;
    padding:.8rem;
    border-radius: 6px;
    position: relative;
    cursor: pointer;
    margin: 1rem;
    z-index: 2;
    border: 3px dotted #888;
    opacity: 1;
  }

  .tutorial {
    color: #555;
    width: 150px;
    height: 20px;
    text-align: center;
    padding:0rem 1rem .6rem;
    position: relative;
    margin: 1rem;
    z-index: 2;
    opacity: 1;
    font-size: .9rem;
  }

  .btn:hover {
    opacity: .8;
  }

  @media screen and (max-width: 500px) {
    .btn {
      max-width: 3.6rem;
      max-height: .8rem;
      overflow: none;
      padding: .5rem;
      font-size: .6rem;
    }

    .tutorial {
      max-width: 4rem;
      max-height: .8rem;
      overflow: none;
      padding: .5rem;
      font-size: .6rem;
    }

  }

</style>
