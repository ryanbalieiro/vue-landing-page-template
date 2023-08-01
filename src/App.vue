<template>
  <!-- Navigation -->
  <Navbar :data="agencyData.navbar" :section-list="navbarSections"></Navbar>

  <!-- Header -->
  <Header :data="agencyData.header"></Header>

  <!-- Sections -->
  <About :data="agencyData.sections.about" @vue:mounted="_onNavigationSectionMounted"></About>
  <Services :data="agencyData.sections.services" @vue:mounted="_onNavigationSectionMounted"></Services>
  <Timeline :data="agencyData.sections.history" @vue:mounted="_onNavigationSectionMounted"></Timeline>
  <Featured :data="agencyData.sections.featured"></Featured>
  <Portfolio :data="agencyData.sections.portfolio" @vue:mounted="_onNavigationSectionMounted" @project-clicked="_onProjectOpened"></Portfolio>
  <Team :data="agencyData.sections.team" @vue:mounted="_onNavigationSectionMounted"></Team>
  <Clients :data="agencyData.sections.reviews" @vue:mounted="_onNavigationSectionMounted"></Clients>
  <Faq :data="agencyData.sections.faq" @vue:mounted="_onNavigationSectionMounted"></Faq>
  <Contact :data="agencyData.sections.contact" @vue:mounted="_onNavigationSectionMounted"></Contact>

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
import Featured from "./sections/custom/featured/Featured.vue"
import Portfolio from "./sections/custom/portfolio/Portfolio.vue"
import Timeline from "./sections/custom/timeline/Timeline.vue"
import Team from "./sections/custom/team/Team.vue"
import Clients from "./sections/custom/clients/Clients.vue"
import Faq from "./sections/custom/faq/Faq.vue"
import Contact from "./sections/custom/contact/Contact.vue"

const navbarSections = ref([])
const portfolioModal = ref(null)

const _onNavigationSectionMounted = (ref) => {
  navbarSections.value.push(ref.props.data)
}

const _onProjectOpened = (project) => {
  portfolioModal.value.displayProject(project)
}
</script>

<style scoped>
</style>
