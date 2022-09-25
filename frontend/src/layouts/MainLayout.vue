<template>
  <div class="d-flex flex-column flex-root">
    
    <!-- <Loader v-if="loaderEnabled" v-bind:logo="loaderLogo"></Loader> -->

    <!-- begin::Body -->
    <div class="d-flex flex-row flex-column-fluid page">
      <!-- begin:: Aside Left -->
      <Aside></Aside>
      <!-- end:: Aside Left -->

      <div id="kt_wrapper" class="d-flex flex-fill">
        <transition name="fade-in-up">
          <router-view />
        </transition>
      </div>
    </div>
    
  </div>
</template>

<script>
import Aside from '@/layouts/aside/Aside.vue';

export default {
  data() {
    return {
      show: true
    };
  },
  name: 'MainLayout',
  components: {
    Aside
  },
  beforeMount() {
    
  },
  mounted() {
    

  },
  watch: {
    
  },
  methods: {
    
  },
  computed: {
    
    /**
     * Check if the page loader is enabled
     * @returns {boolean}
     */
    loaderEnabled() {
      return false;
    },

    /**
     * Check if container width is fluid
     * @returns {boolean}
     */
    contentFluid() {
      return true;
    },

    /**
     * Page loader logo image using require() function
     * @returns {string}
     */
    loaderLogo() {
      return '';
    },

    /**
     * Check if the left aside menu is enabled
     * @returns {boolean}
     */
    asideEnabled() {
      return true;
    },

    /**
     * Set the right toolbar display
     * @returns {boolean}
     */
    toolbarDisplay() {
      // return !!this.layoutConfig("toolbar.display");
      return false;
    },

    /**
     * Set the subheader display
     * @returns {boolean}
     */
    subheaderDisplay() {
      return false;
    }
  }
};
</script>

<style lang="css" scoped>
.refresh-container {
  width: 600px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: calc(50% - 200px);
  right: calc(50% - 300px);
  padding: 25px;
  z-index: 9999;
  font-size: 24px;
  background-color: #fff;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.05);
}
.close-refresh-modal {
  position: absolute;
  right: 15px;
  top: 5px;
  border: none;
}
</style>
