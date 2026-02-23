## Identificar a causa do problema no código.

> O estado está chegando no map como null, e não como um array.

## Explicar qual é o problema.

> O que acontece é que o map precisa percorrer um array, se o nosso estado
> não for iniciado pelo menos como um array vazio ou o fetch não funcionar e
> o map acontecer antes de products ser populado, aquele erro acontece
> pois nosso estado está como null.

## Sugerir a correção para o código.

> Solução 1 - Iniciar o estado como [].
> Solução 2 - Antes de fazer o map, verificar se products existe.
