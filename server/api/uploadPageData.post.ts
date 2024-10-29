import fs from 'fs'
import path from 'path'

/**
 * Essa API espera uma requisição POST com um JSON que
 * contenha as propriedades "page" e "data".
 *
 * Então ela cria na pasta content um arquivo json com o nome
 * da pagina lido de "page", e com os dados recebidos em "data".
 *
 * Existe um bug no nuxt que pode fazer essa API não
 * conseguir ler o body da request.
 * https://github.com/nuxt/nuxt/issues/12410
 */
export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Validação
  if (!body.page || !body.data) {
    return { status: 400, body }
  }

  // Recebe nome do arquivo
  const filePath = path.resolve(`./content/${body.page}.json`)

  // Cria o arquivo
  try {
    fs.writeFileSync(filePath, JSON.stringify(body.data, null, 2))
    return { status: 200, message: 'Arquivo salvo com sucesso' }
  } catch {
    return { status: 500, message: 'Erro ao salvar o arquivo' }
  }
})
