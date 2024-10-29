# Projeto CMS Dinâmico

## Instruções do Processo Seletivo

```
Teste Front-end Ânima

Crie uma landing page (fidedigna ao exemplo: https://eventos.animaeducacao.com.br/teste-front) que
receba seus conteúdos e componentes através de uma API (pode ser mock). Demonstre como preencher
dinamicamente um campo do formulário através de um parâmetro inserido no endereço da LP e envie os
dados do formulário via POST.

Obs .: O envio do formulário pode ser para uma API falsa.

Sugestão para o projeto:

· Componentes;
· Composables;
· Layouts;
· Interfaces;
· Conteinerização;
· Consumo de API.

Recomendado:

· Fidelidade ao design proposto (imagens na pasta /proposto);
· Responsividade para visualização em dispositivos móveis;
· Boas práticas de SEO;
· Aplicação de Clean Code no projeto.

Diferenciais:

· Utilização de Nuxt 4 com diferentes estratégias de renderização com ssr true e false;
· Utilização de SaSS;
· Pontuação no lighthouse;
. Es Lint e Prettier;
· Uso da content;
· Conteinerização da aplicação com Docker;
· Uso da server.
```

---

## Como Iniciar o Projeto

Para executar o projeto localmente e visualizar o CMS, siga as instruções abaixo:

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Gere os arquivos estáticos para o conteúdo:
   ```bash
   npx nuxi generate
   ```
3. Suba o ambiente Docker:
   ```bash
   docker-compose up
   ```
4. Abra o navegador e acesse o projeto:
   ```bash
   http://localhost
   ```

Na página inicial, você encontrará uma interface de exemplo criada conforme o design proposto no processo seletivo.

---

## Sobre o Projeto

Este projeto é um **CMS (Sistema de Gerenciamento de Conteúdo)** altamente dinâmico e configurável, permitindo a criação e edição de páginas via uma API. Ele utiliza uma abordagem baseada em JSON para manipular dados, que são enviados e processados para gerar o conteúdo da página de forma automática e modular.

### Funcionamento

- **Recepção de Dados**: A aplicação recebe dados em formato JSON via uma requisição `POST` usando o Nitro. O JSON contém informações sobre a página a ser criada ou editada e os dados que ela deve exibir.
- **Estrutura do JSON**:

  - Os dados enviados incluem:
    - **Meta informações** para SEO e outros metadados da página.
    - **Header** e **Footer** configuráveis, que podem ser escolhidos dinamicamente para cada página.
    - **Sections** específicas da página, que compõem o conteúdo principal.
  - Cada elemento do tipo `header`, `footer` e `section` possui um campo `data`, que inclui informações detalhadas específicas do componente.

- **Processamento de Dados**: O JSON recebido é interpretado pela API, que extrai os dados da requisição e os armazena em um novo JSON no diretório `content`, com o nome da página especificada.

### Estrutura Dinâmica das Páginas

As páginas são geradas dinamicamente através das rotas `index.vue` e `[page].vue`, que se ajustam automaticamente com base no conteúdo armazenado. Esse sistema permite que novas páginas sejam criadas ou atualizadas apenas enviando um JSON válido para a API.

- **Geração de Páginas**:
  - Ao enviar um JSON válido com a chave `page: "nova-pagina"`, a aplicação gera uma nova página acessível em `http://localhost/nova-pagina`.
  - Cada página criada exibe os elementos `header`, `footer` e `sections` especificados no JSON enviado.
  - Os dados passados para cada seção permitem controle total sobre o conteúdo e o layout, criando uma experiência de CMS flexível e altamente personalizável.

---

Para ilustrar o formato do JSON aceito pela API, veja abaixo um exemplo básico de estrutura para criar uma página chamada `exemplo`:

```json
{
  "page": "/",
  "data": {
    "meta": {
      "title": "Ânima",
      "ogTitle": "Ânima",
      "description": "Teste Front Anima.",
      "ogDescription": "Teste Front Anima."
    },
    "header": {
      "type": "LayoutHeaderDefault",
      "data": {
        "logo": "icon-logo",
        "links": [
          {
            "id": 1,
            "text": "Mais Informações",
            "to": "#mais-informacoes"
          },
          {
            "id": 2,
            "text": "Nossos Pilares",
            "to": "#nossos-pilares"
          }
        ],
        "action": {
          "text": "Inscreva-se",
          "to": "#inscreva-se"
        }
      }
    },
    "footer": {
      "type": "LazyLayoutFooterDefault",
      "data": {
        "logo": "icon-logo-white",
        "link": {
          "text": "Inscreva-se",
          "to": "#inscreva-se"
        },
        "medias": [
          {
            "id": 1,
            "icon": "icon-facebook",
            "to": "https://www.facebook.com/AnimaEducacao"
          },
          {
            "id": 2,
            "icon": "icon-twitter",
            "to": "https://x.com/animaedu"
          },
          {
            "id": 3,
            "icon": "icon-youtube",
            "to": "https://www.youtube.com/channel/UCqJut7vI1PgxaOqCjSevjJQ"
          },
          {
            "id": 4,
            "icon": "icon-instagram",
            "to": "https://www.instagram.com/anima.educacao/"
          },
          {
            "id": 5,
            "icon": "icon-linkedin",
            "to": "https://www.linkedin.com/company/animaeducacao"
          }
        ]
      }
    },
    "sections": [
      {
        "type": "SectionCarouselDefault",
        "data": {
          "id": "hero",
          "images": [
            {
              "id": 1,
              "src": "banner-azul.webp",
              "alt": "Banner pós-graduação azul"
            },
            {
              "id": 2,
              "src": "banner-verde.webp",
              "alt": "Banner pós-graduação verde"
            },
            {
              "id": 3,
              "src": "banner-laranja.webp",
              "alt": "Banner pós-graduação laranja"
            }
          ]
        }
      },
      {
        "type": "SectionImageAndTextDefault",
        "data": {
          "id": "mais-informacoes",
          "image": {
            "src": "/images/banner-roxo.webp",
            "alt": "Banner pós-graduação roxo"
          },
          "title": {
            "type": "h2",
            "text": "Seja protagonista, <b>o futuro já começou!</b>"
          },
          "subtitle": {
            "type": "h3",
            "text": "<b>Venha conosco, nós te ajudamos!</b>"
          },
          "paragraph": {
            "text": "É hora de iniciar uma nova etapa! Sabemos que o momento pode ser assustador, mas não se preocupe.<br/> Quebramos as barreiras entre presencial e virtual e criamos um modelo inovador, exclusivo e com professores prontos para te preparar para os desafios reais do mercado!<br/> A nossa missão não é só pensar no futuro da educação, é fazê-lo chegar antes."
          }
        }
      },
      {
        "type": "LazySectionCardsDefault",
        "data": {
          "id": "nossos-pilares",
          "title": {
            "type": "h2",
            "text": "Conheça os pilares da<br/><b>Ânima Educação.</b>"
          },
          "cards": [
            {
              "id": 1,
              "icon": "icon-star",
              "title": {
                "type": "h3",
                "text": "Espaços inspiradores"
              },
              "paragraph": {
                "text": "Destaque entre as universidades com a melhor infraestrutura do Brasil, oferecemos metodologias inovadoras e equipamentos de última geração."
              }
            },
            {
              "id": 2,
              "icon": "icon-light-bulb",
              "title": {
                "type": "h3",
                "text": "Inovação e Criatividade"
              },
              "paragraph": {
                "text": "Criamos novos padrões de mercado, oferecendo cursos inovadores e disruptivos que preparam você para o futuro."
              }
            },
            {
              "id": 3,
              "icon": "icon-connections",
              "title": {
                "type": "h3",
                "text": "Internacionalização"
              },
              "paragraph": {
                "text": "Conectada com o Novo Futuro e novas Tendências, a Anhembi Morumbi integra um ecossistema global para preparar você para protagonizar o Novo Mundo."
              }
            }
          ]
        }
      },
      {
        "type": "LazySectionFormDefault",
        "data": {
          "id": "inscreva-se",
          "title": {
            "type": "h2",
            "text": "Tem interesse e está em busca de <br/><b>mais informações?</b>"
          },
          "subtitle": {
            "type": "h3",
            "text": "Preencha o formulário abaixo que entraremos em contato."
          },
          "inputs": {
            "name": {
              "id": "name",
              "label": "Nome Completo *",
              "placeholder": "Digite seu nome completo"
            },
            "email": {
              "id": "email",
              "label": "E-mail *",
              "placeholder": "email@email.com"
            },
            "phone": {
              "id": "phone",
              "label": "Telefone *",
              "placeholder": "(99) 9 9999-9999"
            },
            "institution": {
              "id": "institution",
              "label": "Instituição *",
              "placeholder": "Selecione a instituição de interesse",
              "options": [
                "AGES",
                "ANHENBI MORUMBI",
                "BSP",
                "FADERGS",
                "FASEH",
                "FPB",
                "IBMR",
                "MILTON CAMPOS",
                "UNA",
                "UNIBH",
                "UNICURITIBA",
                "UNIFACS",
                "UNIFG BA",
                "UNIFG PE",
                "UNIRITTER",
                "UNISOCIESC",
                "UNISUL",
                "UNP",
                "USJT"
              ]
            }
          },
          "finePrint": {
            "text": "Nós usaremos seus dados para entrar em contato com você sobre as informações solicitadas neste formulário e sobre outras informações correlacionadas que podem ser de seu interesse. Você pode cancelar o envio da divulgação, a qualquer momento, utilizando o opt-out existente nas mensagens encaminhadas por nós."
          },
          "submit": {
            "to": "/api/form",
            "successMessage": "Maravilha, em breve entraremos em contato",
            "errorMessage": "Ocorreu um erro, tente novamente, ou entre em contato"
          },
          "submitButton": {
            "text": "Enviar"
          }
        }
      }
    ]
  }
}
```
