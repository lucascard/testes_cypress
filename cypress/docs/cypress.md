# Introdução ao Cypress

Neste documento, vamos explorar as principais funcionalidades do Cypress, uma ferramenta de automação de testes end-to-end para aplicativos da web.

## Configuração do Ambiente

Antes de começar, é necessário configurar o ambiente de desenvolvimento para usar o Cypress. Siga as etapas abaixo:


Pré-requisito: Umas das versões mais atuais do node e o Visual Studio Code (VSC) como IDE

1. Instalação do Cypress:
   - Execute o seguinte comando no terminal para instalar o Cypress via npm:
     ```
     npm install cypress --save-dev
     ```

2. Abrir o cypress
    ```
    npx cypress open
    ```

3. Configuração do arquivo de teste:
   - Crie um arquivo de teste chamado `spec.cy.ts`.

## Principais Funcionalidades

Aqui estão algumas das principais funcionalidades do Cypress:


### cy.visit
O comando cy.visit é usado para visitar uma URL específica. Por exemplo:

```javascript
cy.visit('https://www.example.com');
```
### cy.get

O comando `cy.get` é usado para selecionar elementos na página com base em seletores CSS e o próprio HTML. Veja um exemplo de uso:

```javascript 
cy.get('.my-class').click() // pegando pela classe
ou cy.get('[class="my-class"]')

cy.get('#username').click() // pegando pelo ID 
ou cy.get('[id="username"]')

cy.contains('Esqueceu sua senha?').click()
```

### .type
O comando cy.type é usado para simular a digitação em elementos de entrada. Veja um exemplo:

```javascript
cy.get('#username').type('lucas');
cy.get('#password').type('senha123');
```

### .should
O comando cy.should é usado para fazer afirmações sobre um elemento. Veja alguns exemplos:

```javascript
cy.get('.my-element').should('be.visible');
cy.url().should('include', '/login');
cy.get('#message').should('have.text', 'Hello, World!');
```

### .contains
O comando cy.contains é usado para encontrar um elemento com um texto específico. Veja um exemplo:

```javascript
cy.contains('Login').click();
cy.contains('Esqueceu sua senha?').click();
```

### Descrevendo Testes
No Cypress, você pode usar as funções describe e it para descrever seus testes. Exemplo:

```javascript
describe('Nome da funcionalidade', () => {
  beforeEach(() => {
    // Configurações antes de cada teste
  });

  it('Nome do teste', () => {
    // Teste específico
  });
});
```

Além disso, aqui estão algumas anotações adicionais sobre o Cypress:

```javascript 
.only // Use .only após describe ou it para executar apenas esse teste ou conjunto de testes.
.skip //Use .skip após describe ou it para pular a execução desse teste ou conjunto de testes.

it.skip ou it.only / describe.skip ou describe.only
```

### beforeEach
O beforeEach é um bloco de código executado antes de cada teste dentro de um describe. Ele é usado para configurar o estado inicial e as condições necessárias antes da execução de cada teste. Veja um exemplo de uso:

```javascript
describe('Nome da funcionalidade', () => {
  beforeEach(() => {
    // Configurações antes de cada teste
    cy.visit('https://www.example.com');
    cy.login('username', 'senha');
  });

  it('Teste 1', () => {
    cy.get('.my-element').click();
  });

  it('Teste 2', () => {
    cy.contains('Logout').click();
  });
});
```

### Execução dos Testes
O Cypress oferece várias opções para executar os testes de forma eficiente e obter informações úteis sobre o resultado dos testes. Vejamos algumas dessas opções:

#### Execução no Modo Headless
O Cypress permite que você execute seus testes no modo headless, o que significa que eles são executados em segundo plano, sem uma interface gráfica visível. Isso é útil para integração contínua e execução automatizada de testes em servidores de integração.

Para executar os testes no modo headless, você pode usar o comando cypress run no terminal. Por exemplo:

```shell
npx cypress run
```

Durante a execução no modo headless, o Cypress registra várias informações, como logs e métricas de desempenho. Além disso, o Cypress também captura screenshots e grava vídeos da execução dos testes.

#### Execução pela Interface do Cypress

1. Abra a interface do Cypress:

No terminal, navegue até o diretório raiz do seu projeto Cypress.
Execute o seguinte comando:
```
npx cypress open
```
Selecione o arquivo de teste:

Na interface do Cypress, você verá uma lista de arquivos de teste disponíveis.
Clique no arquivo de teste que deseja executar.
##### Execução dos testes:

Após selecionar o arquivo de teste, o Cypress abrirá uma nova janela do navegador e começará a executar seus testes.
Você poderá ver o aplicativo alvo sendo testado e acompanhar o progresso dos testes.

Durante a execução pela interface do Cypress, você pode interagir com o aplicativo em teste, visualizar as etapas executadas pelo Cypress e receber feedback instantâneo sobre o resultado dos testes.

Além disso, a interface do Cypress fornece recursos adicionais, como a capacidade de pausar e retomar a execução dos testes, repetir testes individuais ou em grupos e inspecionar os elementos da página em tempo real.

A execução pela interface do Cypress é especialmente útil durante o processo de desenvolvimento e depuração de testes, pois permite uma abordagem interativa para detectar problemas e verificar o comportamento esperado da aplicação.
### Adicionais 

O cypress pode ser integrado com pipelines de integração contínua, como github actions, bitbucket pipelines, jenkins, Azure e etc.

### Exemplo de execução
![Cypress OpenLibrary](exemploCypress.jpeg)


















