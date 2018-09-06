<script>
export default {
  props: {
    menu: { type: Array, required: true },
    close: { type: Function, required: true }
  },
  data() {
    return {
      currentMenu: this.menu,
      selectedMenuIndexes: []
    }
  },
  methods: {
    closeMenu() {
      this.close()
    }
  }
}
</script>

<template>
  <transition name="hamburger-menu">
    <div
      v-click-outside="closeMenu"
      class="hamburger-menu">
      <div
        class="close-icon"
        @click.native="closeMenu">
        <!-- eslint-disable-next-line vue/max-attributes-per-line -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M25.71 7.71l-1.42-1.42-8.29 8.3-8.29-8.3-1.42 1.42 8.3 8.29-8.3 8.29 1.42 1.42 8.29-8.3 8.29 8.3 1.42-1.42-8.3-8.29 8.3-8.29z"/></svg>
      </div>
      <nav>
        <ul v-if="!!menu">
          <li
            v-for="item in menu"
            :key="item.id">
            <router-link
              :to="{ name: item.name }"
              @click.native="closeMenu">
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </transition>
</template>

<style lang="postcss">
@import url(../assets/vars-include.css);

/* used with <transition> */
.hamburger-menu-enter-active,
.hamburger-menu-leave-active {
  transform: translateX(-100%);
}

.hamburger-menu-enter,
.hamburger-menu-leave-to {
  opacity: 0;
}

.hamburger-menu {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 360px;
  height: 100%;
  padding: 24px 12px;
  background: var(--color-primary);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  transition: transform 0.3s;

  & .menu-logo {
    width: 230px;
    height: 44px;
    margin: 0 0 36px 24px;
  }

  & .close-icon {
    position: absolute;
    right: 30px;
    width: 24px;
    height: 24px;
    fill: var(--color-dark);
    cursor: pointer;
  }

  & nav {
    @apply --font-twenty;
    color: var(--color-dark);
    font-weight: bold;

    & li {
      position: relative;
      margin-bottom: 12px;
      padding: 6px 0;

      & li {
        padding-left: 24px;
      }
    }
  }

  & .bottom-wrapper {
    margin: 48px 24px 24px;
  }

  & .social-icons {
    display: flex;
    height: 27px;
    margin-bottom: 6px;

    & svg {
      height: 24px;
      width: 24px;
      margin: 0 3px;
    }
  }

  & .copyright {
    @apply --font-twelve;
  }
}
</style>
