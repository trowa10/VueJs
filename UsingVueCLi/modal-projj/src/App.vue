<template>
  <h1>{{ title }}</h1>
  <p>Welcome... </p>
  <teleports to="#modals" v-if="showModal">
    <Modal :header="header" :text="text" theme="sale" @close="toggleModal">
       {{showModal}} {{showModalTwo}}
      <!-- close is a custom event using emit -->
      <template v-slot:links>
        <a href="http://">sign up</a>
        <a href="http://">more info</a>
      </template>
      <h1>Title 2</h1>
      <!-- passing template using slot-->
      <p>
        content 2
      </p>
    </Modal>
    <!-- end tag require for slot-->
  </teleports>

 
  <teleports to="#modals" v-if="showModalTwo">
    <Modal theme="" @close="toggleModal2">
       {{showModal}} {{showModalTwo}}
      <!-- close is a custom event using emit -->
      <h1>New Modal 2</h1>
      <!-- passing template using slot-->
      <p>
        New Modal 2
      </p>
    </Modal>
    <!-- end tag require for slot-->
  </teleports>

  <button @click.alt="toggleModal">Open Modal(press alt with click)</button>
  <button @click="toggleModal2">Open Modal</button>
  <input type="text" ref="name" />
  <button @click="handleClick">Click me</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      title: "My First s",     
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("Active");
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
#app, #modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
