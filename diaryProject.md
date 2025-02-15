## Anotações Projeto FullStack Spotify

### Para agilizar a maneira de criar uma arrow function

- rafce

### Arrow functions

```
const App2 = () => <h1>Olá, Mundo!</h1>;
```

ou

```
const App2 = () => {
    return (
        <h1>Olá, Mundo</h1>
    )
}
```

### Nomeação de Componente

- Estilo PascalCase

### Nomeação de Variavel, Função...

- Estilo camelCase

### Nomeação de Classes

- Estilo kebab-case

### Self closing tag

`<Header></Header>`

ou

`<Header/>`

### Fragments

- São tags vazias em React
- Permite que seja passado pela restrição de ser passado unicamente um elemento ou component

### Nomeação de classes em CSS

- Metodologia BEM

  - Blocks Elements Modifiers

    - bloco\_\_elemento--modificador

  - Exemplos:

    - header
    - header\_\_link
    - header\_\_link--small

  - Nome compostos são separados por -
    - item-list\_\_heeader

## Components props

- São os parâmetros ou argumentos que o component está recebendo

## Alternativa para resolver questão sobre mostrar um componente várias vezes

**Obs: Não é a forma mais indica**

```
{items === 5 ? (
          <>
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
          </>
        ) : (
          <>
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
          </>
        )}
```

## Listando itens através do map

- O map, recebe como parâmetros o currentValue e o index, para assim trazer toda a relação de itens, como no exemplo abaixo, aonde é relacionado vários SingleItem, de acordo com os id's dos itens e também cada SingleItem tem sua chave identificadora, para tornar o item único.

<!-- definindo um array com tamanho de items, preenchendo os mesmos com 'undefined' através do comando .fill() -->

```
{Array(items)
  .fill()
  .map((currentValue, index) => (
    <SingleItem
      key={`${title}-${index}`}
    />
))}
```

## Diferença entre .map() e .filter()

- .map()

  - Transforma cada item do array original e retorna um novo array do mesmo tamanho

  ```
    const numeros = [1, 2, 3, 4, 5]
    const numerosDobrados = numeros.map(num => num * 2)

    console.log(numerosDobrados)
    <!-- [2, 4, 6, 8, 10] -->
  ```

- .filter()

  - Filtra os itens do array original e retorna um novo array com menos (ou os mesmos) elementos

  ```
    const numeros = [1, 2, 3, 4]
    const numerosMaioresQueDois = numeros.filter(num => num > 2)

    console.log(numerosMaioresQueDois)
    <!-- [3, 4] -->
  ```

## Aplicando método filter() em um array

```
const myArray = [13, 245, 14523534, 12315124, 1515362534235]

myArray.filter((currentValue, index) => currentValue > 10000000)

<!-- resultado: [14523534, 12315124, 1515362534235] -->
```

## Spread Operators

- Maneira de fazer uma copia de um array ou de um objeto
- famoso ...

```
myNewObject = {...myObject}

em vez de

id={currentObject.id}
name={currentObject.name}
image={currentObject.banner}
banner={currentObject.banner}
```

## Browser Router

- Gerencia toda a estrutura de rotas presentes ou que acontecem dentro da aplicação

## Math.round()

- É uma função em JavaScript que arredonda um número para o inteiro mais próximo.
  - Se a parte decimal for menor que 0.5, o número é arredondado para baixo.
  - Se a parte decimal for maior ou igual a 0.5, o número é arredondado para cima.

## Math.floor()

- É uma função em JavaScript que arredonda um número para baixo para o inteiro mais próximo.

## Re-renderização de components

- Uma das ocasiões que ocorre a re-renderização de components é quando uma variável de estado usada por esse componente é atualizada.

## Hook (React)

- São funções especiais que permitem 'enganchar' funcionalidades do React, como state e lifecycle, dentro de componentes funcionais.

  ### Principais Hooks do React

  - useState
    - Gerencia o estado local do componente
  - useEffect
    - Executa efeitos colaterais em componentes funcionais (ex.: Chamadas de API's, timers...)
  - useContext
    - Acessar valores de um contexto sem precisar de props drilling
  - useRef
    - Mantém uma referência mutável que persiste entre renderização sem disparar re-renderizações
  - useReducer
    - Alternativa ao useState, útil para gerenciar estados mais complexos
  - useMemo e useCallback
    - Otimizam performance evitando cálculos/re-renderizações desnecessárias
