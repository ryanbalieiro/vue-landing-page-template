<template>
    <div class="gallery-grid row gy-4 mb-4 pb-3 pb-xxl-0 gy-xxl-5 mb-xxl-5">
        <!-- Grid Column -->
        <div v-for="item in props.items" class="gallery-grid-col col-4 col-sm-4 col-xl-3 p-0 p-sm-2 text-center">
            <!-- Item -->
            <div class="gallery-item">
                <!-- Logo -->
                <div class="gallery-thumb-wrapper" @click="_open(item)">
                    <ImageView :src="item.logo"
                               :alt="item.title"
                               class="gallery-thumb"
                    />

                    <!-- Logo Highlight (Hover) -->
                    <div class="gallery-thumb-overlay">
                        <div class="gallery-thumb-overlay-content eq-h5">
                            <i class="fas fa-eye fa-2x"/>
                        </div>
                    </div>
                </div>

                <!-- Project Info -->
                <div class="gallery-description-wrapper mt-2">
                    <button class="gallery-title eq-h5" @click="_open(item)">{{ item.title }}</button>
                    <p class="gallery-category info text-muted mb-0">{{ item.category }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ImageView from "../../widgets/ImageView.vue"

const props = defineProps(['items'])
const emit = defineEmits(['open'])

const _open = (item) => {
    emit('open', item)
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.gallery-item {
    display: inline-flex;
    flex-direction: column;
    position: relative;
}

.gallery-thumb-wrapper {
    --dimensions: min(180px, 15vw);
    @include media-breakpoint-down(xl) {
        --dimensions: min(170px, 20vw);
    }
    @include media-breakpoint-down(lg) {
        --dimensions: min(160px, 20vw);
    }
    @include media-breakpoint-down(sm) {
        --dimensions: min(90px, 20vw);
    }

    position: relative;
    margin: 0 auto;
    cursor: pointer;
    height: var(--dimensions);
    width: var(--dimensions);
    overflow: hidden;
    border-radius: calc(var(--dimensions)/4.5);

    .gallery-thumb {
        width: 100%;
        height: 100%;
    }

    .gallery-thumb-overlay {
        position: absolute;
        top: 0;
        opacity: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100%;

        background: fade-out(lighten($primary, 10%), 0.1);
        border-radius: calc(var(--dimensions)/4.5);
        transition: opacity ease-in-out 0.25s;

        &-content {
            color: white;
        }
    }
}

.gallery-title {
    margin-bottom: 0.1rem;
    border: none;
    font-family: $headings-font-family;
    background-color: transparent;
    color: $dark;
}

@media (max-width: 350px) {
    .gallery-title {
        font-size: 0.85rem;
    }
    .gallery-category {
        font-size: 0.7rem;
    }
}

.gallery-item:hover {
    .gallery-title {
        color: lighten($primary, 10%);
        transition: color ease-in-out 0.3s;
    }

    .gallery-thumb-overlay {
        opacity: 1;
    }
}
</style>