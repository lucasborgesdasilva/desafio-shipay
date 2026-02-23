# O que você poderia propor para otimização de performance no caso do consumo de múltiplos endpoints da API para a utilização do formulário de leads?

> Primeira coisa seria criar uma função getToken, fetchToken, que busca o token, se o tempo de expiração não acabar ele usa
> o que já foi buscado na primeira vez.
> Todas as requisições, eu passaria o token no Authorization.

> Em relação ao consumo de múltiplos endpoints, eu faria um promise.allSettled, pois, caso
> qualquer uma dessas requisições desse errado, as outras não quebrariam.
