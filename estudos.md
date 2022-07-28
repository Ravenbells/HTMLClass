# == 
## Verifica se é verdadeiro ou falso
    - Sem levar em conta o tipo das variaveis 

```js
if ("11" == 11) { "É verdadeiro" }
```

# ===
## Verifica se é verdadeiro ou falso
    - Leva em conta o tipo das variaveis

```js
if ("11" === 11) { "É falso" }
``` 

# =
## Coloca dados em uma variavel

```js
let minhavariavel = "olá";
```

# != 

## Verifica se a DIFERENÇA é verdadeira ou falsa
    - Sem levar em conta o tipo das variaveis


```js
if (11 != 11) { "É falso" };

if (11 != 15) { "É verdadeiro" };
```

# !==

## Verifica se a DIFERENÇA é verdadeira ou falsa
    - Leva em conta o tipo das variaveis

```js
if (11 !== 11) { "É falso" };

if ("11" !== 11) { "É verdadeiro" };
```

# && (E)
```js
let texto = "olá";
let numero = 20;
if (texto == "bla" && numero == 20) {
    console.log("é igual a bla e o número é igual a 20");
}
else {
    console.log("não é igual a bla ou o número não é igual a 20");
} 
```

# || (OU)
```js
let texto = "olá";
let numero = 20;
if (texto == "olá" || numero == 20) { */
    console.log("é igual a olá OU número é igual a 20");   
}
else {
    console.log("não é igual a olá e o número não é igual a 20"); 
}
```
 