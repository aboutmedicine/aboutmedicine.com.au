<template>

  <div class="mindmap">

    <div class="flex-row" id="title-input">
      <input class="title" type="text" :name="topic" placeholder="Insert Title Here" @input="changeTitle" ref="title">
    </div>

    <div class="flex-row">
      <input class="author" type="text" :name="author" placeholder="Author Name" @input="changeAuthor">
    </div>

    <template v-for="type in types">
      <div class="click-box" :style="type.style" @click="toggleMindMapMode(type)">
        {{ type.name }}
      </div>
    </template>

    <mind-map-box-helper :type="type" />

    <template v-for="(item) in boxes">
      <mind-map-box :key="item.id" :id="item.id" :type="item.type" :text="item.text" :typestyle="item.style" :height="item.height" :width="item.width"></mind-map-box>
    </template>

    <mind-map-arrow-mode></mind-map-arrow-mode>

    <div class="flex-row-end save-box">
      <img class="save" src="../assets/save.svg" width="36" @click="save">
      <div class="save-text">
        Save
      </div>
    </div>

    <div class="result" id="result" ref="result"></div>

  </div>

</template>

<script>

  import * as axios from 'axios'
  import { mapState, mapGetters } from 'vuex'
  import MindMapBox from '../components/mindmap/MindMapBox.vue'
  import MindMapBoxHelper from '../components/mindmap/MindMapBoxHelper.vue'
  import MindMapArrowMode from '../components/mindmap/MindMapArrowMode.vue'

  export default {
    name: 'mindmap',
    data() {
      return {
        types: [
          {
            name: 'Pathophysiology',
            style: {
              background: '#e1f1f6'
            }
          },
          {
            name: 'Mechanism',
            style: {
              background: '#EBE7F0'
            }
          },
          {
            name: 'Sx / Lab Findings',
            style: {
              background: '#C1F8C3'
            }
          },
          {
            name: 'Complications',
            style: {
              background: '#F4E3E2'
            }
          }
        ],
        type: {},
        topic: '',
        author: '',
        titleIndex: 0,
      }
    },
    components: {
      MindMapBox,
      MindMapBoxHelper,
      MindMapArrowMode
    },
    computed: {
      ...mapState(['activeBox']),
      ...mapGetters(['boxes'])
    },
    methods: {
      toggleMindMapMode(type) {
        this.$store.commit('SET_ACTIVE_BOX', null)
        this.$store.commit('SET_MINDMAP_MODE', !this.mindmapping)
        this.type = type
      },
      changeTitle(e) {
        this.topic = e.target.value
        this.$store.commit('EDIT_MINDMAP_TITLE', {
          value: e.target.value
        })
      },
      changeAuthor(e) {
        this.author = e.target.value
      },
      save() {

        if (this.topic === '') {this.$refs.title.placeholder = "You need a title!"; return}
        if (this.boxes === undefined || this.boxes.length < 1) {this.$refs.result.innerHTML = `<div>You need to add some content first!</div>`; return}

        let mindmapSlug = this.topic.toLowerCase().replace(/\s+/g, '-')
        let mindmapArrows = document.querySelectorAll('.arrsvg')
        let vm = this
        let arrowArray = []

        for (var i = 0; i < mindmapArrows.length; i++) {
          arrowArray.push(mindmapArrows[i].outerHTML)
        }

        axios
          .post('/mindmap', {
            headers: {
              'Access-Control-Allow-Origin': '*'
            },
            title: vm.topic,
            slug: mindmapSlug,
            author: vm.author,
            boxes: vm.boxes,
            arrows: arrowArray
          })
          .then(function(res) {
            console.log(res)
            vm.$refs.result.innerHTML = `<div> Congratulations! Your mindmap has been saved, and is visible here: <a href="https://www.aboutmedicine.com.au/mindmap/view/${mindmapSlug}"> ${
              vm.topic
            } </a></div>`
          })
          .catch(function(err) {
            console.log(err)
          })
      }
    }
  }

</script>

<style scoped>

  input {
    display: block;
    color: #555;
    border: none;
    outline: none;
    font-size: 2rem;
    font-weight: 400;
    font-family: inherit;
    overflow: visible;
    z-index: 2;
    background: none;
  }

  .title {
    padding: 2rem 2rem 1rem 2rem;
    font-size: 2rem;
  }

  #title {
    z-index: 2;
  }

  .author {
    padding: 0.5rem 3rem;
    font-size: 1.1rem;
  }

  .mindmap {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
  }

  .click-box {
    background: #e1f1f6;
    width: 150px;
    text-align: center;
    padding: 1rem;
    border-radius: 6px;
    position: relative;
    cursor: pointer;
    margin: 1rem;
    z-index: 2;
    opacity: 1;
  }

  .click-box:hover,
  .save-box:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  .save-box {
    text-align: left;
    position: relative;
    cursor: pointer;
    z-index: 2;
    opacity: 1;
    width: 150px;
  }

  .save-text {
    padding: 1.2rem 0 0 0;
    font-weight: 600;
    color: #888;
    font-size: 1.1rem;
  }

  .save {
    opacity: 1;
    padding: 0 0.7rem 0 1rem;
  }

  .result {
    position: absolute;
    padding: 1rem;
    z-index: 4;
  }

  .arrow-box {
    background: #fafafa;
    width: 150px;
    text-align: center;
    padding: 1rem;
    border-radius: 6px;
    position: relative;
    cursor: pointer;
    margin: 1rem;
  }

  .flex-row {
    display: flex;
    justify-content: space-between;
  }

  .flex-row-end {
    display: flex;
    justify-content: flex-start;
  }

  .icon {
    height: auto;
    padding: 0 1rem 0;
    cursor: pointer;
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

  @media screen and (max-width: 500px) {
    .click-box {
      width: 4rem;
      max-height: .9rem;
      overflow: scroll;
      padding: .5rem;
      font-size: .8rem;
    }

    .title {
      padding: 1rem 1rem;
      font-size: 1.5rem;
    }

    .author {
      padding: 0rem 1rem;
      font-size: 1rem;
    }
  }

</style>
