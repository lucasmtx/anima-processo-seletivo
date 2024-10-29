/**
 * Composable para adicionar função de
 * auto-play para UCarousel do NuxtUI
 *
 * Para implementar use a composable e vincule o ref:
 * <UCarousel ref="carouselRef">
 */
export const useCarouselAutoPlay = () => {
  const carouselRef = ref()

  onMounted(() => {
    setInterval(() => {
      if (!carouselRef.value) return

      if (carouselRef.value.page === carouselRef.value.pages) {
        return carouselRef.value.select(0)
      }

      carouselRef.value.next()
    }, 3000)
  })

  return { carouselRef }
}
