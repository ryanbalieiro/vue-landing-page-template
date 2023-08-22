<template>
    <SectionTemplate :section-data="props.sectionData">
        <!-- Contact Form -->
        <form id="contact-form" class="contact-form">
            <div class="row contact-form-row align-items-stretch">
                <!-- Feedback Alert -->
                <div class="col-12 mb-2" v-if="submitStatus === SubmitStatus.SENT">
                    <div class="alert alert-success text-info-5" role="alert">
                        <i class="fa fa-check-circle me-2"/> <strong>The message has been sent!</strong>
                    </div>
                </div>

                <!-- Left Column -->
                <div class="col-lg-6">
                    <!-- Name Input -->
                    <div class="form-group input-group">
                        <span class="input-group-text input-group-attach"><i class="fa fa-signature"/></span>
                        <input class="form-control" id="form-name" type="text" placeholder="Name *" required/>
                    </div>

                    <!-- E-mail Address Input -->
                    <div class="form-group input-group">
                        <span class="input-group-text input-group-attach"><i class="fa fa-envelope"/></span>
                        <input class="form-control" id="form-email" type="email" placeholder="E-Mail *" required/>
                    </div>

                    <!-- Subject Input -->
                    <div class="form-group input-group">
                        <span class="input-group-text input-group-attach"><i class="fa fa-pen-to-square"/></span>
                        <input class="form-control" id="form-subject" type="text" placeholder="Subject *" required/>
                    </div>
                </div>

                <!-- Right Column -->
                <div class="col-lg-6">
                    <!-- Message TextArea -->
                    <div class="form-group form-group-textarea mb-md-0">
                        <textarea class="form-control" id="form-message" placeholder="Messsage *" required/>
                    </div>
                </div>

                <!-- Bottom Column -->
                <div class="col-12 text-center mt-2 mt-lg-4">
                    <XLButton :label="submitStatus !== SubmitStatus.SENDING ? 'Send Message' : 'Sending...' "
                              :type="'submit'"
                              :icon="'fa fa-envelope me-2'"
                              :id="'btn-submit-message'"
                              :custom-class="{disabled: submitStatus === SubmitStatus.SENDING}"/>
                </div>
            </div>
        </form>
    </SectionTemplate>
</template>

<script setup>
import {onMounted, ref} from "vue"
import SectionTemplate from "../_templates/SectionTemplate.vue"
import XLButton from "../../widgets/XLButton.vue"

/**
 * @property {Object} sectionData
 */
const props = defineProps({
    sectionData: Object
})

/**
 * @type {{SENDING: string, ENABLED: string, SENT: string}}
 */
const SubmitStatus = {
    ENABLED: "enabled",
    SENDING: "sending",
    SENT: "sent"
}

const submitStatus = ref(null)

/**
 * @const
 * @type {string[]}
 */
const FORM_FIELDS = ['name', 'email', 'subject', 'message']

/**
 * @private
 */
onMounted(() => {
    const form = document.getElementById('contact-form')
    if (form.attachEvent) {
        form.attachEvent("submit", _onSubmit)
    } else {
        form.addEventListener("submit", _onSubmit)
    }

    submitStatus.value = SubmitStatus.ENABLED
})

/**
 * @private
 */
const _clearAllFields = () => {
    FORM_FIELDS.forEach(field => {
        const elField = document.getElementById(`form-${field}`)
        elField.value = ''
    })
}

/**
 * @param e
 * @return {boolean}
 * @private
 */
const _onSubmit = (e) => {
    if (e.preventDefault) {
        e.preventDefault()
    }

    const values = {}

    FORM_FIELDS.forEach(field => {
        const elField = document.getElementById(`form-${field}`)
        values[field] = elField.value
    })

    submitStatus.value = SubmitStatus.SENDING
    _sendMessage(values)
    return false
}

/**
 * @param {Object} values
 * @private
 */
const _sendMessage = (values) => {
    // implement the send message logic here...
    setTimeout(() => {
        _onMessageSent()
    }, 1000)
}

/**
 * @private
 */
const _onMessageSent = () => {
    _clearAllFields()
    submitStatus.value = SubmitStatus.SENT
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

$input-background-color: lighten($dark, 5%);
$input-border-color: lighten($dark, 12%);
$input-text-color:$white;
$input-placeholder-text-color:$light-6;

$input-focus-background-color: $dark;
$input-focus-border-color: $primary;
$input-focus-text-color:$white;

$input-attach-background-color: lighten($dark, 1%);
$input-attach-border-color: lighten($dark, 15%);
$input-attach-text-color: $light-5;

$input-border-width:2px;

.contact-form {
    @include media-breakpoint-down(lg) {
        max-width: 680px;
        margin: 0 auto;
    }
}

input,
textarea {
    padding: 1rem;
    background-color: $input-background-color;
    border-color: $input-border-color;
    border-width: $input-border-width;
    color:$input-text-color;

    &:focus {
        background-color: $input-focus-background-color;
        border-color: $input-focus-border-color;
        color:$input-focus-text-color;
    }
}

.input-group {
    margin-bottom: 0.8rem;
    @include media-breakpoint-down(sm) {
        margin-bottom: 0.4rem;
    }
}

.input-group-text {
    min-width: 60px;
    text-align: center;

    background-color: $input-attach-background-color;
    border-color:$input-attach-border-color;
    color:$input-attach-text-color;

    i {
        margin: 0 auto;
    }
}

input {
    height: 65px;
    @include media-breakpoint-down(lg) {
        height: 55px;
    }
    @include media-breakpoint-down(sm) {
        height: min(8vh, 50px);
        font-size: 0.8rem;
    }
}

textarea {
    height: 220px;

    @include media-breakpoint-down(lg) {
        height: 200px;
    }
    @include media-breakpoint-down(sm) {
        height: 150px;
        font-size: 0.8rem;
    }
}

::-webkit-input-placeholder {
    --font-size: 1rem;
    @include media-breakpoint-down(lg) {
        --font-size: 0.9rem;
    }

    font-size: var(--font-size);
    color: $input-placeholder-text-color;
}
</style>