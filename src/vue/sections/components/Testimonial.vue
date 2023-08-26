<template>
    <!-- Testimonial -->
    <div class="card h-100">
        <!-- Header -->
        <div class="card-header">
            <ImageView :src="testimonialData['imageUrl']" :alt="testimonialData['title']" class="img-thumbnail"/>
            <h4 class="organization-title">{{ testimonialData['title'] }}</h4>
        </div>

        <!-- Body -->
        <div class="card-body">
            <p class="text-4">“{{ testimonialData['quote'] }}”</p>
        </div>

        <!-- Footer -->
        <div class="card-footer">
            <p class="organization-member text-3 fw-bold">
                <i class="fa fa-comment me-1"/> {{ testimonialData['description'] }}
            </p>
        </div>
    </div>
</template>

<script setup>
import ImageView from "../../widgets/ImageView.vue"

/**
 * @property {Object} testimonialData
 */
const props = defineProps({
    testimonialData: Object
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.card {
    @include generate-dynamic-styles-with-hash((
        xxxl: (min-height: calc(100% - 25px)),
        md:   (min-height: 30vh)
    ));

    border: 2px $light-1 solid;
    border-radius: 0;
    background-color: $white;
}

.card-header {
    border: none;
    padding: 1rem;
    background-color: transparent;

    .img-thumbnail {
        --icon-size:60px;
        @include media-breakpoint-down(sm) {--icon-size: 50px;}

        display: inline-block;
        height: var(--icon-size);
        width: var(--icon-size);
        border:none;
    }

    .organization-title {
        display: inline-block;
        position: relative;
        top: -20px;
        left: 10px;
    }
}

.card-footer {
    @include generate-dynamic-styles-with-hash((
        xxxl: (padding-top: 1rem),
        sm:   (padding-top: 0)
    ));

    border: none;
    background-color: transparent;
}
</style>