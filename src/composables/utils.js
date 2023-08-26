/**
 * Created by Ryan Balieiro on 08.26.2023
 * This composable will implement helper functions that can be used by multiple components within the architecture.
 */
export function useUtils() {
    /**
     * @param {Number} value
     * @param {Number} min
     * @param {Number} max
     * @return {number}
     */
    const clamp = (value, min, max) => {
        if(isNaN(Number(value)) || value === null || value === undefined)
            return min

        return Math.min(Math.max(value, min), max)
    }

    /**
     * @param {String} string
     * @return {boolean}
     */
    const isStringAnImageUrl = (string) => {
        return /\.(jpg|jpeg|png|gif|bmp|svg)$/i.test(string)
    }

    /**
     * @return {boolean}
     */
    const isTouchDevice = () => {
        return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0))
    }

    return {
        clamp,
        isStringAnImageUrl,
        isTouchDevice
    }
}