<template>
    <!-- Grid Item -->
    <div class="col-12 col-md-6 col-lg-4 mx-auto team-grid-item">
        <!-- Quote Balloon -->
        <div class="balloon">
            <div class="triangle"></div>
            <p class="text-muted info-sm mt-2 px-3">
                <i class="fa fa-quote-left me-2 text-primary"></i>{{item.quote}}<i class="fa fa-quote-right ms-2 text-primary"></i>
            </p>
        </div>

        <!-- Avatar -->
        <div class="thumbnail-wrapper">
            <ImageView :src="item.avatar"
                       :alt="item.name"
                       class="img-avatar"/>
        </div>

        <!-- Texts And Links -->
        <div class="about-wrapper pb-5">
            <!-- Header -->
            <h4 class="my-3 mb-1">{{ item.name }}</h4>
            <p class="text-muted info fw-bold mb-2 pb-1">{{ item.role }}</p>
            <!-- Social Links -->
            <SocialLinks :items="item.socialLinks" :color="'lightDark'" :size="'md'" class="mb-3"></SocialLinks>
        </div>
    </div>
</template>

<script setup>
import SocialLinks from "../../widgets/SocialLinks.vue"
import ImageView from "../../widgets/ImageView.vue"
const props = defineProps(['item'])
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.img-avatar {
    max-height: 170px;
    max-width: 170px;
    overflow: hidden;

    @include media-breakpoint-down(sm) {
        max-height: 120px;
        max-width: 120px;
    }

    border-radius: 100%;
    border: 6px $balloon-color solid;
}

.balloon {
    --height: 150px;

    display: flex;
    justify-content: center;
    align-items: center;

    height: var(--height);
    overflow: hidden;
    padding: 0.5rem;
    margin-bottom: 1.5rem;

    background-color: $balloon-color;
    border-radius: 20px;

    .triangle {
        position: absolute;
        margin-top: calc(var(--height) + 10px);
        width: 0;
        height: 0;

        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid $balloon-color;
    }
}
</style>