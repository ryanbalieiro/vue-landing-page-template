<template>
    <!-- Testimonial -->
    <div class="card h-100">
        <!-- Header -->
        <div class="card-header">
            <ImageView  :src="item['imageUrl']"
                        :alt="item['title']"
                        class="img-thumbnail"/>

            <h4 class="organization-title">{{ item['title'] }}</h4>
        </div>

        <!-- Body -->
        <div class="card-body">
            <p class="text-info-4">“{{ item['quote'] }}”</p>
        </div>

        <!-- Footer -->
        <div class="card-footer">
            <!-- Member -->
            <p class="organization-member">
                <i class="fa fa-comment me-1"/> {{ item['description'] }}
            </p>
        </div>
    </div>
</template>

<script setup>
import ImageView from "../../widgets/ImageView.vue"

/**
 * @property {Object} item
 */
const props = defineProps({
    item: Object
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.card {
    --min-height: calc(100% - 25px);
    @include media-breakpoint-down(md) {--min-height: 40vh;}
    @include media-breakpoint-down(md) {--min-height: 30vh;}

    border: 2px $light-1 solid;
    border-radius: 0;
    background-color: $white;
    min-height: var(--min-height);
}

.card-header {
    --icon-size:60px;
    @include media-breakpoint-down(sm) {--icon-size: 50px;}

    border: none;
    padding: 1rem;
    background-color: transparent;

    .img-thumbnail {
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
    --padding-top:1rem;
    @include media-breakpoint-down(sm) {--padding-top:0;}

    border: none;
    padding-top:var(--padding-top);
    background-color: transparent;

    .organization-member {
        font-size: 0.85rem;
        font-weight: bold;
    }
}
</style>