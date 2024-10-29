import DOMPurify from 'isomorphic-dompurify'

/**
 * Essa composable garante a segurança do
 * HTML recebido, usando a biblioteca isomorphic-dompurify
 * https://github.com/kkomelin/isomorphic-dompurify
 */
export const useSecureHTML = () => {
  const secureHtml = (rawHTML: string) => DOMPurify.sanitize(rawHTML)

  return { secureHtml }
}
