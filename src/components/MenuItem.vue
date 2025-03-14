<template>
  <div class="menu-item" :class="{ opened: expanded }">
    <!-- Renderizar el enlace o el div dependiendo de 'to' o 'href' -->
    <component :is="to ? 'router-link' : 'div'" 
      v-bind="to ? { to } : {}" 
      class="button" 
      @click="handleClick"
      v-show="showItems"
    >
      <div class="label">
        <div class="left">
          <span v-if="icon" class="material-icons">{{ icon }}</span>
          <span class="text" v-if="showLabel">{{ label }}</span>
        </div>
        <div v-if="data" class="right">
          <i class="expand material-icons arrow" :class="{ opened: expanded }">expand_more</i>
        </div>
      </div>
    </component>

    <div
      v-if="showChildren"
      class="items-container"
      :style="{ height: containerHeight }"
      ref="container"
    >
      <menu-item
        v-for="(item, index) in data"
        :key="index"
        :data="item.children"
        :label="item.label"
        :icon="item.icon"
        :to="item.to"
        :href="item.href"
        :noRequiresAdmin="item.noRequiresAdmin"
        :depth="depth + 1"
        :smallMenu="smallMenu"
        @click="CloseSidebar"
      />
    </div>
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: "menu-item",
  data() {
    return {
      expanded: false,
      showChildren: false,
      containerHeight: 0,
    };
  },
  props: {
    data: Array,
    label: String,
    icon: String,
    depth: Number,
    smallMenu: Boolean,
    to: String,
    href: String,
    noRequiresAdmin: Boolean,
  },
  computed: {
    showLabel() {
      return this.smallMenu ? this.depth > 0 : true;
    },
    showItems() {
      if (this.noRequiresAdmin === true && store.getters.isAuthenticated === false) {
        return true;
      } else if (this.noRequiresAdmin === true && store.getters.isAuthenticated === true) {
        return true;
      }else if (this.noRequiresAdmin === false && store.getters.isAuthenticated === true) {
        return true;
      }else {
        return false;
      }
    }
  },
  methods: {
    handleClick() {
      this.toggleMenu();
      this.CloseSidebar();
    },
    toggleMenu() {
      this.expanded = !this.expanded;
      if (!this.showChildren) {
        this.showChildren = true;
        this.$nextTick(() => {
          this.containerHeight = `${this.$refs.container.scrollHeight}px`;
          setTimeout(() => {
            this.containerHeight = "fit-content";
            if (navigator.userAgent.indexOf("Firefox") !== -1) {
              this.containerHeight = "-moz-max-content";
            }
            this.$refs.container.style.overflow = "visible";
          }, 300);
        });
      } else {
        this.containerHeight = `${this.$refs.container.scrollHeight}px`;
        this.$refs.container.style.overflow = "hidden";
        setTimeout(() => {
          this.containerHeight = "0px";
        }, 10);
        setTimeout(() => {
          this.showChildren = false;
        }, 300);
      }
    },
    CloseSidebar() {
      this.$emit("CloseSidebar");
    },
  },
};
</script>

<style scoped lang="scss">
.menu-item {
  position: relative;
  width: 100%;
  
  .label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    white-space: nowrap;
    user-select: none;
    height: 50px;
    text-decoration: none;
    box-sizing: border-box;
    transition: all 0.3s ease;

    > div {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .arrow {
      transition: all 0.3s ease;
      &.opened {
        transform: rotate(180deg);
      }
    }

    &.small-item {
      width: fit-content;
    }
  }

  .items-container {
    width: 100%;
    transition: height 0.3s ease;
    overflow: hidden;
    border-left: solid 1px var(--dark-alt);
  }

  .button {
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
