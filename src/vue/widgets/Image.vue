<template>
    <!-- Image -->
    <img ref="img" v-show="!isLoading()" :src="props.src" :alt="props.alt" class="foxy-image" :class="props.class" @load="_onLoad" @error="_onError">
</template>

<script setup>
import {onMounted, ref, watch} from "vue"

const props = defineProps(['src', 'alt', 'class'])
const emit = defineEmits(['loading', 'loaded', 'error', 'completed'])
const img = ref(null)

/**
 * @enum
 */
const LoadStatus = {
    LOADING: 0,
    LOADED: 1,
    ERROR: -1
}

const loadStatus = ref(LoadStatus.LOADING)

onMounted(() => {
    _onSrcChanged()
})

/** Event Callbacks **/
const _onLoad = () => { _setLoadStatus(LoadStatus.LOADED) }
const _onError = () => { _setLoadStatus(LoadStatus.ERROR) }

const isLoading = () => {
    return loadStatus.value === LoadStatus.LOADING
}

const _setLoadStatus = (status) => {
    loadStatus.value = status
    img.value.setAttribute('loadStatus', status)
    switch(status) {
        case LoadStatus.LOADING:
            emit('loading');
            break

        case LoadStatus.LOADED:
            emit('loaded')
            emit('completed')
            break

        case LoadStatus.ERROR:
            emit('error')
            emit('completed')
            break
    }
}

const _onSrcChanged = () => {
    if(typeof props.src !== 'string') {
        _setLoadStatus(LoadStatus.ERROR)
    }
    else {
        _setLoadStatus(LoadStatus.LOADING)
    }
}

watch(() => props.src, () => {
    _onSrcChanged()
})

defineExpose({
    isLoading
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>