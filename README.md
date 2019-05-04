
# Objetivo
Aprendendo sobre testes funcionais utilizando o Framework Protractor, tal Framework utiliza Javascript + Jasmine + Selenium
para realização de testes End-to-end.

# Como rodar
O passo a passo para rodar o primeiro projeto encontra-se neste [link](https://www.protractortest.org/#/tutorial) porém abaixo complemento o mesmo:

Passo 1:
Rode o comando abaixo para baixar e gerenciar as versões do chromedriver:

webdriver-manager update --versions.chrome

Passo 2:
Após fazer o download do chromedriver adequado, você inicia o servidor local para testes com o comando abaixo:

webdriver-manager start --versions.chrome

Ao executar essa linha, você notará que há uma série de logs sendo exibidos no terminal, não feche este terminal, para rodar os testes, abra um novo terminal dentro do diretório do projeto pontos.

Passo 3:
No novo terminal aberto, execute o comando para execução dos testes:

protractor conf.js
