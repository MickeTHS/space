<template>
  <div>
    <b-row>
      <b-col>
        <a
          class="btn btn-primary font-weight-bolder font-size-sm"
          @click.prevent="click1"
        >
          TEST1
        </a>
        
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-button>Test2</b-button>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-button>Test3</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>

export default {
  name: "SelectionFrame",
  data() {
    return {
      
    };
  },
  mounted() {
  
  },
  methods: {

  }
};
</script>
