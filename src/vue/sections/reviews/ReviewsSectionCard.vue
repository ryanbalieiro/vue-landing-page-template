<template>
    <!-- Testimonial -->
    <div class="card h-100">
        <!-- Header -->
        <div class="card-header">
            <ImageView  :src="item.avatar"
                        :alt="item.organization"
                        class="img-thumbnail" />

            <h5 class="organization-title">{{ item.organization }}</h5>
        </div>

        <!-- Body -->
        <div class="card-body">
            <p class="info">“{{ item.message }}”</p>
        </div>

        <!-- Footer -->
        <div class="card-footer">
            <!-- Member -->
            <p class="organization-member">
                <i class="fa fa-comment me-1"/> {{ item.staffMember }}
            </p>
        </div>
    </div>
</template>

<script setup>
import ImageView from "../../widgets/ImageView.vue"

const props = defineProps(['item'])
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.card {
    min-height: calc(100% - 25px);
    border: 2px $gray-100 solid;
    border-radius: 0;
    background-color: white;

    @include media-breakpoint-down(md) {
        text-align: center;
        min-height: 40vh;
    }
}

.card-header {
    border: none;
    padding: 1rem;
    background-color: transparent;

    .img-thumbnail {
        display: inline-block;
        height: 60px;
        width: 60px;
        border:none;
    }

    .organization-title {
        display: inline;
        margin-left: 1rem;
    }
}

.card-footer {
    border: none;
    padding-top:1rem;
    background-color: transparent;

    .organization-member {
        font-size: 0.85rem;
        font-weight: bold;
    }
}
</style>