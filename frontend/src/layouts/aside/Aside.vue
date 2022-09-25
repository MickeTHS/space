<template>
  <!-- begin:: Aside -->
  <div
    class="aside aside-left aside-fixed d-flex flex-column flex-row-auto"
    @mouseover="mouseEnter"
    @mouseleave="mouseLeave"
  >
    <!-- begin:: Aside -->
    <!-- end:: Aside -->

    <!-- begin:: Aside Menu -->
    <div
      class="aside-menu-wrapper flex-column-fluid"
      id="kt_aside_menu_wrapper"
    >
      <div
        ref="kt_aside_menu"
        id="kt_aside_menu"
        class="aside-menu my-4"
        data-menu-vertical="1"
        data-menu-dropdown-timeout="500"
      >
        <!-- example static menu here -->
        <KTMenu></KTMenu>
      </div>
    </div>
  </div>
  <!-- end:: Aside -->
</template>

<script>

import KTMenu from "@/layouts/aside/Menu.vue";

export default {
  name: "KTAside",
  data() {
    return {
      insideTm: 0,
      outsideTm: 0
    };
  },
  components: {
    KTMenu
  },
  mounted() {
    this.$nextTick(() => {
      // Init Aside
      //KTLayoutAside.init(this.$refs["kt_aside"]);

      // Init Aside Menu
      //KTLayoutAsideMenu.init(this.$refs["kt_aside_menu"]);
    });
  },
  methods: {
    /**
     * Use for fixed left aside menu, to show menu on mouseenter event.
     */
    mouseEnter() {
      
    },

    /**
     * Use for fixed left aside menu, to show menu on mouseenter event.
     */
    mouseLeave() {
      
    }
  },
  computed: {
    
  }
};
</script>
