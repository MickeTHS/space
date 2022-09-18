<template>
  <div class="pod">
    <b-img @click.prevent="podClicked" class="pod-img" src="ui/man_cyan.png"></b-img>
  </div>
</template>

<style lang="css" scoped>
  .pod {
    border: 1px solid #aafffc;
    /*background-color: white;*/
    width: 28px;
  }

  .pod:hover {
    background-color: #2d7977;
    cursor: pointer;
  }

  .pod-img {
    height: 38px;
    padding: 4px;
  }
</style>

<script>


export default {
  name: "PodItem",
  props: ['item'],
  data() {
    return {
      
    };
  },
  mounted() {
  
  },
  methods: {
    podClicked() {
      console.log('pod clicked: ', this.item.id);
    },
  }
};
</script>
