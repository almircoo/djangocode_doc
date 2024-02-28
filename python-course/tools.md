# Instalación y configuración de Python 3

Instalar o actualizar Python en su computadora es el primer paso para convertirse en programador de Python. Hay una multitud de métodos de instalación: puede descargar distribuciones oficiales de Python desde [python.org](https://www.python.org/) , instalarlas desde un administrador de paquetes e incluso instalar distribuciones especializadas para informática científica, Internet de las cosas y sistemas integrados.

::: info
Este tutorial se centra en las distribuciones oficiales, ya que generalmente son la mejor opción para comenzar a aprender a programar en Python.
:::

## En este tutorial aprenderas:

   - Comprobar qué versión de Python está instalada en su dispositivo
   - Instalar o actualizar Python en Windows, macOS y Linux
   - Utilizar Python como intérprete para Web local

No importa en qué sistema operativo esté, este tutorial lo cubre todo. ¡Encuentra tu sistema operativo a continuación y sumérgete!

##  Cómo instalar Python en Windows
Hay tres métodos de instalación en Windows:

>
>   1. Microsoft store
>   2. El instalador oficial 
>   3. Subsistema de Windows para Linux
> 
### Paso 1: Seleccione la versión estable de Python
Decidir sobre una versión depende de lo que quieras hacer en Python. Las dos versiones principales son Python 2 y Python 3. Elegir una u otra puede ser mejor dependiendo de los detalles de tu proyecto. Si no hay restricciones, elige la que prefieras .

Recomendamos Python 3, ya que Python 2 llegó al final de su vida útil en 2020. Descargue Python 2 solo si trabaja con scripts heredados y proyectos más antiguos. Además, elija una versión estable en lugar de la más nueva, ya que la versión más reciente puede tener errores y problemas.

### Paso 2: Descargue el instalador ejecutable de Python

Comience descargando el instalador ejecutable de [Python para Windows](https://www.python.org/downloads/windows/):
>
> 1. Abra un navegador web y navegue hasta la sección Descargas para Windows del sitio web oficial de Python.
> 2. Localice la versión de Python deseada.
>

![Python Windows](https://phoenixnap.com/kb/wp-content/uploads/2023/12/python-executable-download-page-64-and-32-bit.png)

> 3. Haga clic en el enlace para descargar el archivo. Elija el instalador de Windows de 32 bits o de 64 bits.

### Paso 3: Ejecute el instalador ejecutable
> 1. Ejecute el instalador de Python descargado.

> 2. La ventana de instalación muestra dos casillas de verificación:

   - Privilegios de administrador. El parámetro controla si se instala Python para los usuarios actuales o para todos los usuarios del sistema. Esta opción le permite cambiar la carpeta de instalación de Python.
   - Agregue Python a PATH. La segunda opción coloca el ejecutable en la variable PATH después de la instalación. También puede agregar Python a la variable de entorno PATH manualmente más adelante.

![Python installer](https://phoenixnap.com/kb/wp-content/uploads/2023/12/python-installer-admin-privileges-and-path.png)
Para una instalación más sencilla, recomendamos marcar ambas casillas de verificación.

> 3. Seleccione la opción Instalar ahora para la instalación recomendada.


### Cómo comprobar su versión de Python en Windows

::: tip
Así es como se abre PowerShell:

 1. Presione la tecla "Windows".
 2. Escribe  `PowerShell` 
 3. Presione la tecla "Enter"
:::

> También puede utilizar cmd.exe o [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab).


Para comprobar si ya tiene Python en su dispositivo Windows, primero abra una aplicación de línea de comandos, como PowerShell.

Con la línea de comando abierta, escriba el siguiente comando y presione Enter
```powershell 
C:\> python --version 
``` 

Si tiene instalado python obtendra la version instalada o en caso contrario le indicara un error de programa no instalado

```powershell
C:\> python --version
Python 3.11.8
```

El uso del parámetro --version le mostrará la versión que está instalada. Alternativamente, puede usar el parámetro -V:

```powershell
C:\> python -V
Python 3.11.8
```


##  Cómo instalar Python en macOS
Hay dos métodos de instalación en macOS:
>
>   1. El instalador oficial 
>   2. El administrador de paquetes Homebrew
>
En esta sección, aprenderá cómo verificar qué versión de Python, está instalada en su dispositivo macOS. También aprenderá cuál de los dos métodos de instalación debe utilizar.

### Step 1: Instalar Homebrew
Si ya tiene Homebrew instalado, puede omitir este paso. Si no tiene Homebrew instalado, utilice el siguiente procedimiento para instalar Homebrew:

1. Abra un navegador y navegue hasta [http://brew.sh/](http://brew.sh/).

2. Deberías ver un comando para instalar Homebrew cerca de la parte superior de la página, debajo del mosaico "Instalar Homebrew". Este comando será similar al siguiente:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
3. Abra una ventana de terminal y pegue el comando, luego presione Entrar. Esto comenzará la instalación de Homebrew.
4. Ingrese su contraseña de usuario de macOS cuando se le solicite.

Dependiendo de su conexión a Internet, puede tardar unos minutos en descargar todos los archivos necesarios de Homebrew. Una vez que se complete la instalación, volverá al símbolo del shell en la ventana de su terminal.

Ahora que Homebrew está instalado, está listo para instalar Python.

### Step 2: instalar Python
Siga estos pasos para completar la instalación con Homebrew:

1. Abra una aplicación de terminal.
2. Escriba el siguiente comando para actualizar Homebrew:

```shell
$ brew update && brew upgrade
```

Instalar con Homebrew ahora es tan sencillo como ejecutar el sigiente comando Esto descargará y configurará la última versión de Python en su máquina.
```shell
$ brew install python3
```
Puedes asegurarte de que todo salió correctamente probando si puedes acceder a Python desde la terminal:

```shell
$ python3 --version
Python 3.11.8
```
> Felicitaciones, ¡ahora tienes Python en tu macOS!
##  Cómo instalar Python en Linux

Python viene preinstalado en la mayoría de distribuciones de Linux.

Simplemente puede verificar la versión de Python, que ya está instalada en su sistema, ejecutando el comando `python -V` o `python --version` en su terminal.

Cuando Python aún no está instalado: el resultado será algo como esto:

```shell
ubuntu@ubuntu:~$ python --version
command 'python' not found, but can be installed with:

sudo apt install python3
sudo apt install python
...
```
Cuando Python ya está instalado: el resultado será algo como esto:

```shell
ubuntu@ubuntu:~$ python --version
Python 3.12.0
```

### Instale Python en Linux desde el Package Manager:
El siguiente comando podría usarse para instalar la última versión de Python en casi todos los sistemas Linux.

```shell
sudo apt-get install python3
```

Además, puede mencionar la versión especifica de Python que desea instalar, como se muestra a continuación:

```shell
sudo apt-get install python3.12
# o
sudo apt-get install python3.11
```
Escriba `Y` cuando se le solicite y presione Entrar para continuar. El administrador de paquetes descargará e instalará Python por usted.

El siguiente commando le ayudara a actualizar los paquetes instalados

```shell
sudo apt-get update && sudo apt-get upgrade
```

## Download Visual Studio Code

### Instalación
> 1. Descargue el instalador de [Visual Studio Code](https://code.visualstudio.com/download) acorde a su sistema operativo.

![vscode](/python/vscode.png)

> 2. Abra la lista de descargas del navegador y busque la aplicación o el archivo descargado.
> 3. Si es un archivo, extraiga el contenido del archivo. Utilice el doble clic para algunos navegadores o seleccione el icono de "lupa" con Safari.
> 4. Arrastre Visual Studio Code.app a la carpeta Aplicaciones y estará disponible en el Launchpad de macOS.
> 5. Abra VS Code desde la carpeta Aplicaciones, haciendo doble clic en el icono.
> 6. Agregue VS Code a su Dock haciendo clic derecho en el ícono, ubicado en el Dock, para abrir el menú contextual y eligiendo Opciones, Mantener en el Dock.