<template>
  <!-- Navigation -->
  <Navbar :data="agencyData.navbar" :section-list="listOfMountedSections"></Navbar>

  <!-- Header -->
  <Header :data="agencyData.header"></Header>

  <!-- Sections -->
  <About :data="agencyData.sections.about" @vue:mounted="_onSectionMounted"></About>
  <Services :data="agencyData.sections.services" @vue:mounted="_onSectionMounted"></Services>
  <Portfolio :data="agencyData.sections.portfolio" @vue:mounted="_onSectionMounted" @project-clicked="_onProjectOpened"></Portfolio>
  <Team :data="agencyData.sections.team" @vue:mounted="_onSectionMounted"></Team>
  <Clients :data="agencyData.sections.reviews" @vue:mounted="_onSectionMounted"></Clients>
  <Faq :data="agencyData.sections.faq" @vue:mounted="_onSectionMounted"></Faq>
  <Contact :data="agencyData.sections.contact" @vue:mounted="_onSectionMounted"></Contact>

  <!-- Footer -->
  <Footer :data="agencyData.footer"></Footer>

  <!-- PopUps -->
  <PortfolioModal ref="portfolioModal"></PortfolioModal>
</template>

<script setup>
import agencyData from './data/agency.json'
import {onMounted, ref} from "vue"

import Navbar from "./components/Navbar.vue"
import Header from "./sections/static/Header.vue"
import PortfolioModal from "./components/PortfolioModal.vue"
import Footer from "./sections/static/Footer.vue"
import About from "./sections/custom/about/About.vue"
import Services from "./sections/custom/services/Services.vue"
import Portfolio from "./sections/custom/portfolio/Portfolio.vue"
import Team from "./sections/custom/team/Team.vue"
import Clients from "./sections/custom/clients/Clients.vue"
import Faq from "./sections/custom/faq/Faq.vue"
import Contact from "./sections/custom/contact/Contact.vue"

const listOfMountedSections = ref([])
const portfolioModal = ref(null)

const _onSectionMounted = (ref) => {
  listOfMountedSections.value.push(ref.props.data)
}

const _onProjectOpened = (project) => {
  portfolioModal.value.displayProject(project)
}
</script>

<style scoped>
</style>
