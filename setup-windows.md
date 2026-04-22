
### Instalando o Choco
No Windows, para instalar o nvm, vamos utilizar o [Chocolatey](https://chocolatey.org/).
A instalação desse gerenciador de pacotes deve ser feita em um terminal com permissões de administrador.

Para isso, abra o PowerShell como administrador:
- Na barra de pesquisa, pesquise "windows powershell"
- Selecione a opção "Executar como administrador"

Dentro do terminal, cole esse comando:

```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Agora, feche e abra o terminal novamente (como administrador).
Se tudo estiver funcionando, ao rodar o comando *choco* no terminal, ele irá mostrar qual versão está instalada.

### Instalando o nvm

Caso algum dos seguintes comandos não rode, pode ser necessário reiniciar o terminal.

```
choco install nvm
```

Após rodar esse comando, instale a versão lts do Node:

```
nvm install lts
```

Ative a versão lts:

```
nvm use lts
```

Agora que o node está instalado, vamos ativar o yarn:

```
corepack enable
```

Caso o powershell acuse que o Node não tem permissão de rodar scripts:

```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Feito isso, o ambiente está configurado e podemos começar!



