// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    /**
     * Esse projeto ultiliza o modulo ESLint do Nuxt.
     * https://eslint.nuxt.com/
     *
     * É possivel inspecionar as regras em vigor do ESLint com 'npx @eslint/config-inspector'.
     * https://eslint.org/blog/2024/04/eslint-config-inspector/
     *
     * E você pode sobrescrever elas e adicionar outras aqui.
     *
     * Regras do ESLint.
     * https://eslint.org/docs/latest/rules/
     */

    // Regra para tags que se fecham. Ex.: <img />
    // Redundante com prettier.
    'vue/html-self-closing': 'off',
  },
})
