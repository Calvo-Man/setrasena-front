<template>
  <div class="menu-item" :class="{ opened: expanded }">
    <!-- Si 'to' no es null, renderiza <router-link>, de lo contrario, renderiza un <div> -->
    <router-link v-if="to" class="button" :to="to">
      <div
        class="label"
        @click="toggleMenu()"
      >
        <div class="left">
          <span v-if="icon" class="material-icons">{{ icon }}</span>
          <span class="text" v-if="showLabel">{{ label }}</span>
        </div>
        <div v-if="data" class="right">
          <i class="expand material-icons arrow" :class="{ opened: expanded }">
            expand_more
          </i>
        </div>
      </div>
    </router-link>

    <!-- Renderiza un <div> si 'to' es null -->
    <div v-else class="button" @click="toggleMenu()">
      <div class="label">
        <div class="left">
          <span v-if="icon" class="material-icons">{{ icon }}</span>
          <span class="text" v-if="showLabel">{{ label }}</span>
        </div>
        <div v-if="data" class="right">
          <i class="expand material-icons arrow" :class="{ opened: expanded }">
            expand_more
          </i>
        </div>
      </div>
    </div>

    <div
      v-show="showChildren"
      :class="{ 'small-menu': smallMenu }"
      class="items-container"
      :style="{ height: containerHeight }"
      ref="container"
    >
      <menu-item
        :class="{ opened: showChildren }"
        v-for="(item, index) in data"
        :key="index"
        :data="item.children"
        :label="item.label"
        :icon="item.icon"
        :to="item.to"
        :depth="depth + 1"
        :smallMenu="smallMenu"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "menu-item",
  data: () => ({
    showChildren: false,
    expanded: false,
    containerHeight: 0,
  }),
  props: {
    data: {
      type: Array,
    },
    label: {
      type: String,
    },
    icon: {
      type: String,
    },
    depth: {
      type: Number,
    },
    smallMenu: {
      type: Boolean,
    },
    to: { type: String },
  },
  computed: {
    showLabel() {
      return this.smallMenu ? this.depth > 0 : true;
    },
  },
  methods: {
    toggleMenu() {
      this.expanded = !this.expanded;
      if (!this.showChildren) {
        this.showChildren = true;
        this.$nextTick(() => {
          this.containerHeight = this.$refs["container"].scrollHeight + "px";
          setTimeout(() => {
            this.containerHeight = "fit-content";
            if (navigator.userAgent.indexOf("Firefox") != -1)
              this.containerHeight = "-moz-max-content";
            this.$refs["container"].style.overflow = "visible";
          }, 300);
        });
      } else {
        this.containerHeight = this.$refs["container"].scrollHeight + "px";
        this.$refs["container"].style.overflow = "hidden";
        setTimeout(() => {
          this.containerHeight = 0 + "px";
        }, 10);
        setTimeout(() => {
          this.showChildren = false;
        }, 300);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-item {
  position: relative;
  width: 100%;
  .label {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    white-space: nowrap;
    user-select: none;
    height: 50px;
    
    box-sizing: border-box;
    transition: all 0.3s ease;
    > div {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .arrow {
      transition: all 0.3s ease;
      &.expand {
        &.opened {
          transform: rotate(180deg);
        }
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
    margin-left: calc(5% + 6px);
  }
  .button{
    &:hover{
      cursor: pointer;
    }
  }
}
</style>
