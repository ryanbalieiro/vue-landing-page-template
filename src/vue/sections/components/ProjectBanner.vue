<template>
    <div class="project-banner">
        <!-- Image Column -->
        <div class="col-image" :class="{'col-image-shrink': props.type === constants.ProjectBannerType.STANDARD}">
            <ImageView :src="props.project['imageUrl']"
                       :alt="'about-logo'"
                       :spinner-enabled="true"
                       :class="imageViewClassList"/>
        </div>

        <!-- Texts - Featured -->
        <div v-if="props.type === constants.ProjectBannerType.FEATURED" class="col-texts col-texts-featured">
            <h4 class="title mb-2 text-light-5"><i class="fa-solid fa-fire me-2"/> Latest Release</h4>
            <h1 class="project-title display-1 text-white text-uppercase" v-html="props.project['title']"/>
            <p class="description text-5 text-light-5 mt-4 mb-4" v-html="props.project['description']"/>
            <SocialLinks :items="props.project['links']" :color="constants.SocialLinksColor.BLACK" :size="constants.SocialLinksSize.XL" class="mt-xl-5"/>
        </div>

        <!-- Texts - Standard -->
        <div class="col-texts col-texts-standard" v-else>
            <h1 class="mb-2" v-html="props.project['title']"/>

            <!-- Tags -->
            <span class="me-1 text-3"><i class="fa fa-tag me-1"/>Tags: </span>
            <div class="d-inline-block">
                <span v-for="tag in props.project['tags']" class="badge bg-primary me-1 text-1">{{ tag }}</span>
            </div>

            <!-- About Subsection -->
            <div class="subsection mt-4">
                <h5 class="d-none d-lg-inline-block"><i class="fa fa-file me-1"/> About</h5>
                <p class="text-2" v-html="props.project['description']"/>
            </div>

            <!-- Links Subsection -->
            <div class="subsection mt-4">
                <h5><i class="fa fa-external-link me-1"/> Where To Find</h5>
                <p class="text-2"><strong>{{ props.project['title'] }}</strong> is available on the following platforms or services:</p>
                <SocialLinks :items="props.project['links']" :size="constants.SocialLinksSize.LG" :color="constants.SocialLinksColor.DARK"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import ImageView from "../../widgets/ImageView.vue"
import {computed} from "vue"
import {useConstants} from "../../../composables/constants.js"
import SocialLinks from "../../widgets/SocialLinks.vue"

const props = defineProps({
    project:Object,
    type:String
})

const constants = useConstants()

/**
 * @type {ComputedRef<String>}
 */
const imageViewClassList = computed(() => {
    if(props.type === constants.ProjectBannerType.FEATURED) {
        return 'img trace-shadow'
    }

    return 'img'
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.project-banner {
    @include generate-dynamic-styles-with-hash((
        xxxl: (flex-direction: row, width: 100%, padding: 2rem),
        lg:   (flex-direction: column, padding: 1rem, align-items: center),
        md:   (padding: 0.5rem)
    ));

    display: flex;
}

.col-image {
    @include generate-dynamic-styles-with-hash((
        xxxl: (height: 320px, min-width: 320px, margin-right: 6rem),
        xl:   (height: 300px, min-width: 300px, margin-right: 4rem),
        lg:   (height: auto, min-width: 0, margin-right:0, width: min(230px, 35vw), margin-bottom: 2rem),
        md:   (width: min(200px, 35vw)),
        sm:   (width: min(170px, 32.5vw), margin-bottom: 1.5rem),
    ));

    aspect-ratio: 1/1;
}

.col-image-shrink {
    @include generate-dynamic-styles-with-hash((
        xxxl: (height: 280px, min-width: 280px, margin-right: 3rem),
        xl:   (height: 250px, min-width: 250px, margin-right: 3rem),
        lg:   (height: auto, min-width: 0, width: min(200px, 35vw), margin-right:0)
    ));
}

.img {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    border-radius: 20%;
}

.col-texts {
    @include generate-dynamic-styles-with-hash((
        xxxl: (text-align: justify),
        lg:   (text-align: center)
    ));
}
</style>