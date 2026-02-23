## Explique resumidamente o que é um Back for Front-end e qual seria o principal papel e benefícios de implementar um (ou mais) BFFs nesta situação para a empresa de streaming.

> O BFF ele organiza e adapta exatamente o que cada Front-End precisa, se eu tenho um Back-End único
> Tanto o Web quanto o App, vão usar tudo o que a API retorna.
> O BFF personaliza o Back-End para cada Front-End.

## Você implementaria um único BFF para todos os clientes ou múltiplos BFFs? Justifique sua escolha. Esboce um diagrama simples mostrando como os clientes (Web, Mobile, Smart TV), o(s) BFF(s) e os microsserviços existentes se conectariam.

> Nesse caso, como são 3 Front-Ends (Web, Mobile, Smart TV), muito provavelmente, cada um terá regras específicas, então
> eu separaria cada BFF para um Front-End, se fosse só o Web e o Mobile, e não tivesse tanta diferença entre eles
> ai talvez 1 BFF já seria o suficiente.

```ASCII
  Web → BFF Web → Serviços / APIs
  Mobile → BFF Mobile → Serviços / APIs
  Smart → BFF Smart → Serviços / APIs
```

## Para cada um dos exemplos de lógica/tarefa abaixo, indique onde você acredita que ela seria predominantemente implementada (no cliente, no BFF ou nos microsserviços de back-end) e justifique brevemente:

### a

> Cliente, a renderização dos botões/interface no Mobile, será diferente do Web/Smart TV, por conta disso
> cada Front-End fica responsável pela sua interface.

### b

> BFF, pois o BFF Web vai adaptar o retorno dos dados dos dois MS e pelo fato de ter essa tela somente no Web, os outros não vão precisar disso.

### c

> BFF, Mesmo motivo do anterior, que fica responsável por adaptar e trazer o retorno dos dados exclusivo da tela Mobile, é o BFF Mobile.

### d

> MS de Usuários, Independente de onde o usuário assistiu o filme, a informação de "assistido" vai ser salva no histórico de qualquer maneira.
> e quem faz isso é o MS.

### e

- MS de Streaming, mesma coisa do anterior, persistência de dados, regras de negócio, quem cuida disso é o MS.

### f

> Cliente, A validação do formulário, vai ser feita na tela do WEB, ou seja, as outras plataformas não terão essa regra.
