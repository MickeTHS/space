<template>
  <div>
    <b-row>
      <b-col>
        <a
          class="btn btn-primary font-weight-bolder font-size-sm"
          style="width: 136px"
          @click.prevent="click1"
        >
          CRYOCHAMBER
        </a>
        
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        
        <a
          class="btn btn-primary font-weight-bolder font-size-sm"
          style="width: 136px"
          @click.prevent="click1"
        >
          CREW
        </a>
        

      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <a
          class="btn btn-primary font-weight-bolder font-size-sm"
          style="width: 136px"
          @click.prevent="click1"
        >
          SHIP STATUS
        </a>
        
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
