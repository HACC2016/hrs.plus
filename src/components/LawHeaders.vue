<template lang="jade">
div.law(v-if='law')
  .law-header.division(v-if='law.division')
    p Division {{ law.division }}. {{ law.division_text }}

  .law-header.title(v-if='law.title')
    p Title {{ law.title }}. {{ law.title_text }}

  .law-header.subtitle(v-if='law.subtitle')
    p Subtitle {{ law.subtitle }}. {{ law.subtitle_text }}

  .law-header.chapter
    p Chapter {{ law.chapter }}. {{ law.chapter_text }}

  .law-header.article(v-if='law.article')
    p Article {{ law.article }}. {{ law.article_text }}

  .law-header.part(v-if='law.part')
      p Part {{ law.part }}. {{ law.part_text }}

  .law-header.catchline
      p.catchline {{ catchline }}


</template>

<script>
import store from 'src/store'


export default {
  store,
  vuex: {
    getters: {
    },
    actions: {
    }
  },

  props: ['law'],

  components: {
  },

  computed: {
    catchline: () => {
      const law = store.state.law
      return "§" + law.chapter + "-" + law.section + " " + law.section_text
    }

  }
}
</script>

<style>


.law {
  width: 100%;
}

.law-body {
  padding-left: 1em;
  padding-right: 1em;

}


div .law-header {
  box-shadow: 0px -3px 5px rgba(0,0,0,0.5);
  padding-top: 4px;
  padding-bottom: 4px;
}

.law-header.division {
  background-color: rgba(128,128,128, 0.30);
  color: rgba(0,0,0,0.7);
}

.law-header.title {
  background-color: rgba(128,128,128, 0.25);
  color:rgba(0,0,0,0.75);

}

.law-header.subtitle {
  background-color: rgba(128,128,128, 0.20);
  color:rgba(0,0,0,0.8);
}

.law-header.chapter {
  background-color: rgba(128,128,128, 0.15);
  color:rgba(0,0,0,0.85);
}

.law-header.article {
  background-color: rgba(128,128,128, 0.10);
  color:rgba(0,0,0,0.90);
}

.law-header.part {
  background-color: rgba(128,128,128, 0.05);
  color:rgba(0,0,0,0.95);
}

.law-header.catchline {
  font-weight: bold;
  font-size: 1.1em;
}

.law-header p {
  margin: 0px;
  font-family: "Quattrocento";
  margin-left: 0.4em;
}

.external-link {
  text-decoration:underline;
  color: #2323EE;

}


</style>
