<template>
    <SectionTemplate :section-data="props.sectionData">
        <form id="contact-form" class="px-0 px-md-2">
            <div class="row contact-form-row align-items-stretch">
                <!-- Left Column -->
                <div class="col-md-6">
                    <!-- Name Input -->
                    <div class="form-group input-group">
                        <span class="input-group-text input-group-attach"><i class="fa fa-signature"/></span>
                        <input class="form-control" id="name" type="text" :placeholder="_getPlaceholder('name')" required/>
                    </div>

                    <!-- E-mail Address Input -->
                    <div class="form-group input-group">
                        <span class="input-group-text input-group-attach"><i class="fa fa-envelope"/></span>
                        <input class="form-control" id="email" type="email" :placeholder="_getPlaceholder('email')" required/>
                    </div>

                    <!-- Subject Input -->
                    <div class="form-group input-group">
                        <span class="input-group-text input-group-attach"><i class="fa fa-pen-to-square"/></span>
                        <input class="form-control" id="subject" type="text" :placeholder="_getPlaceholder('subject')" required/>
                    </div>
                </div>

                <!-- Right Column -->
                <div class="col-md-6">
                    <!-- Message TextArea -->
                    <div class="form-group form-group-textarea mb-md-0">
                        <textarea class="form-control" id="message" :placeholder="_getPlaceholder('message')" required/>
                    </div>
                </div>

                <!-- Bottom Column -->
                <div class="col-12 text-center mt-lg-3">
                    <XLButton :label="_getPlaceholder('send')"
                              :type="'submit'"
                              :icon="'fa fa-envelope me-2'"
                    />
                </div>
            </div>
        </form>
    </SectionTemplate>
</template>

<script setup>
import SectionTemplate from "../_templates/SectionTemplate.vue"
import XLButton from "../../widgets/XLButton.vue"

const props = defineProps(['sectionData'])

const _getPlaceholder = (key) => {
    return props.sectionData.sectionContent.placeholders[key] || 'staticTexts.' + key
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.form-group {
    --padding-bottom:0.8rem;
    @include media-breakpoint-down(lg) {
        --padding-bottom:0.5rem;
    }

    padding-bottom: var(--padding-bottom);
}

.form-group-textarea {
    height: 100%;
}

.input-group-text {
    min-width: 60px;
    text-align: center;
    i {
        margin: 0 auto;
    }
}

.input-group-attach {
    background-color: lighten($dark, 1%);
    border-color: lighten($dark, 15%);
    border-width: 2px;
    border-right: 1px;
    color: $gray-500;
}

input,
textarea {
    padding: 1.25rem;
    border-width: 2px;
    background-color: lighten($dark, 5%);
    border-color: lighten($dark, 12%);
    color: $white;

    &:focus {
        border-color: $primary;
        background-color: $dark;
        color:$white;
    }

    @include media-breakpoint-down(md) {
        font-size: 0.9rem;
        padding: 1rem;
    }
}

input {
    --height: auto;
    @include media-breakpoint-down(md) {
        --height: min(50px, 8vh);
    }

    height: var(--height);
    &:focus {
        border-color: $primary;
    }
}

textarea {
    height: 100%;
    min-height: 200px;
    @include media-breakpoint-down(lg) {
        min-height: 150px;
    }
    @include media-breakpoint-up(md) {
        min-height: 140px;
    }
}

::-webkit-input-placeholder {
    --font-size: 1rem;
    @include media-breakpoint-down(lg) {
        --font-size: 0.9rem;
    }

    font-size: var(--font-size);
    color: $gray-600;
}
</style>