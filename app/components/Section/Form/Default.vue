<script lang="ts" setup>
  import type { SectionFormDefaultData } from '~/types/SectionFormDefaultData'
  import { object, string, type InferType } from 'yup'
  import type { FormSubmitEvent } from '#ui/types'

  const props = defineProps<{
    data: SectionFormDefaultData
  }>()

  const { secureHtml } = useSecureHTML()

  const { schema, formState, onSubmit, isFormSent, formResponse } =
    useDefaultForm()
  function useDefaultForm() {
    /**
     * Validação do form com Yup
     * https://ui.nuxt.com/components/form
     */
    const schema = object({
      name: string()
        .trim()
        .min(8, 'Precisamos do nome completo.')
        .required('Precisamos do nome completo.'),
      email: string()
        .trim()
        .email('Precisamos de um e-mail válido.')
        .required('Precisamos de um e-mail válido.'),
      phone: string()
        .min(14, 'Precisamos de um telefone válido.')
        .required('Precisamos de um telefone válido.'),
      institution: string()
        .trim()
        .required('Precisamos de uma instituição válida.'),
    })

    type Schema = InferType<typeof schema>

    const route = useRoute()

    /**
     * Estado reativo do formulário.
     * Os dados são inicializados pelo valor na query ou undefined.
     */
    const formState = reactive<{
      name: string | undefined
      email: string | undefined
      phone: string | undefined
      institution: string | undefined
    }>({
      name: route.query.name ? String(route.query.name) : undefined,
      email: route.query.email ? String(route.query.email) : undefined,
      phone: route.query.phone ? String(route.query.phone) : undefined,
      institution: route.query.institution
        ? String(route.query.institution)
        : undefined,
    })

    const isFormSent = ref(false)
    const formResponse = ref('')

    async function onSubmit(event: FormSubmitEvent<Schema>) {
      // Envio do formulário usando POST
      try {
        const { error } = await useFetch(props.data.submit.to, {
          method: 'POST',
          body: event.data,
          headers: {
            'Content-Type': 'application/json',
          },
        })

        /**
         * Para a demonstração decidi exibir apenas a mensagem de sucesso
         * que havia no design proposto.
         * Mas uma mensagem de erro estaria disponivel em:
         * props.data.submit.errorMessage
         */
        if (error) {
          formResponse.value = props.data.submit.successMessage
        } else {
          formResponse.value = props.data.submit.successMessage
        }
      } catch {
        formResponse.value = props.data.submit.successMessage
      } finally {
        isFormSent.value = true
      }
    }

    return { schema, formState, onSubmit, isFormSent, formResponse }
  }

  /**
   * Verifica se há erros no form em tempo real (para o botão de submit)
   */
  const formHasErrors = ref(false)
  watch(
    formState,
    async (newState) => {
      try {
        await schema.validate(newState, { abortEarly: false })
        formHasErrors.value = false
      } catch {
        formHasErrors.value = true
      }
    },
    { deep: true }
  )

  /**
   * Função que decide se o botão de submit é habilitado
   */
  const canSubmit = computed(() => {
    if (
      formState.name &&
      formState.email &&
      formState.phone &&
      formState.institution &&
      !formHasErrors.value
    ) {
      return false
    } else {
      return true
    }
  })
</script>

<template>
  <section :id="data.id" class="default-form">
    <div class="default-form__container">
      <div class="default-form__narrow-container">
        <!-- Titulo -->
        <component :is="data.title.type" class="default-form__title">
          <span v-html="secureHtml(data.title.text)" />
        </component>

        <!-- Subtitulo -->
        <component :is="data.subtitle.type" class="default-form__subtitle">
          <span v-html="secureHtml(data.subtitle.text)" />
        </component>

        <UForm
          :schema="schema"
          :state="formState"
          class="default-form__form"
          @submit.prevent="onSubmit($event)"
        >
          <!-- Nome -->
          <UFormGroup
            :name="data.inputs.name.id"
            class="default-form__input"
            eager-validation
          >
            <template #label>
              <span class="default-form__label">{{
                data.inputs.name.label
              }}</span>
            </template>
            <template #default>
              <UInput
                v-model="formState.name"
                :placeholder="data.inputs.name.placeholder"
                size="md"
                :ui="{
                  color: { white: { outline: 'focus:ring-indigo-600' } },
                }"
              />
            </template>
            <template #error="{ error }">
              <span v-if="error" class="default-form__error">
                {{ error }}
              </span>
            </template>
          </UFormGroup>

          <!-- Email -->
          <UFormGroup :name="data.inputs.email.id" class="default-form__input">
            <template #label>
              <span class="default-form__label">{{
                data.inputs.email.label
              }}</span>
            </template>
            <template #default>
              <UInput
                v-model="formState.email"
                :placeholder="data.inputs.email.placeholder"
                size="md"
                :ui="{
                  color: { white: { outline: 'focus:ring-indigo-600' } },
                }"
              />
            </template>
            <template #error="{ error }">
              <span v-if="error" class="default-form__error">
                {{ error }}
              </span>
            </template>
          </UFormGroup>

          <!-- Telefone -->
          <UFormGroup :name="data.inputs.phone.id" class="default-form__input">
            <template #label>
              <span class="default-form__label">{{
                data.inputs.phone.label
              }}</span>
            </template>
            <template #default>
              <UInput
                v-model="formState.phone"
                :placeholder="data.inputs.phone.placeholder"
                size="md"
                :ui="{
                  color: { white: { outline: 'focus:ring-indigo-600' } },
                }"
              />
            </template>
            <template #error="{ error }">
              <span v-if="error" class="default-form__error">
                {{ error }}
              </span>
            </template>
          </UFormGroup>

          <!-- Instituição -->
          <UFormGroup
            :name="data.inputs.institution.id"
            class="default-form__input"
          >
            <template #label>
              <span class="default-form__label">{{
                data.inputs.institution.label
              }}</span>
            </template>
            <template #default>
              <USelectMenu
                v-model="formState.institution"
                searchable
                :options="data.inputs.institution.options"
                :placeholder="data.inputs.institution.placeholder"
                :searchable-placeholder="data.inputs.institution.placeholder"
                :popper="{ offsetDistance: 0 }"
                size="xl"
                class="default-form__select-input"
                :ui="{
                  color: { white: { outline: 'focus:ring-transparent' } },
                  rounded: 'rounded-xl',
                }"
              />
            </template>
            <template #error="{ error }">
              <span v-if="error" class="default-form__error">
                {{ error }}
              </span>
            </template>
          </UFormGroup>

          <!-- Feedback do formulario -->
          <div v-if="isFormSent" class="default-form__submit-message">
            {{ formResponse }}
          </div>

          <!-- Letras miudas -->
          <p
            class="default-form__fineprint"
            v-html="secureHtml(data.finePrint.text)"
          />

          <!-- Botão de enviar -->
          <button
            class="default-form__submit-button"
            type="submit"
            :disabled="canSubmit"
          >
            {{ data.submitButton.text }}
          </button>
        </UForm>
      </div>
    </div>
  </section>
</template>
