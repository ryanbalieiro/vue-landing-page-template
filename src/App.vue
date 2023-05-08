<template>
  <Navbar></Navbar>
  <Header></Header>
  <About></About>
  <Services></Services>
  <Portfolio @project-clicked="_onProjectOpened"></Portfolio>
  <Team></Team>
  <Clients></Clients>
  <Contact></Contact>
  <Footer></Footer>
  <PortfolioModal ref="portfolioModal"></PortfolioModal>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Header from "./sections/Header.vue";
import About from "./sections/About.vue";
import Services from "./sections/Services.vue";
import Team from "./sections/Team.vue";
import Clients from "./sections/Clients.vue";
import Contact from "./sections/Contact.vue";
import Footer from "./sections/Footer.vue";
import Portfolio from "./sections/Portfolio.vue";
import PortfolioModal from "./components/PortfolioModal.vue";
import {onMounted, ref} from "vue";

const portfolioModal = ref(null);

const _onProjectOpened = (project) => {
  portfolioModal.value.displayProject(project)
}
</script>

<style scoped>
</style>
