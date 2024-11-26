# Generador de contraseñas

[Preview](https://denilsonnm.github.io/HEURISTICA-PASSW-IA/index.html)

## Problema
Actualmente existen miles de sitios de Internet que mantienen perfiles creados por usuarios, al momento de crear una cuenta, se vuelve tedioso pensar en una contraseña que cumpla con las características de seguridad recomendadas.
## Heurística
El proyecto se trata de un módulo de un sitio web y es un sistema de recomendación de contraseñas en base a respuestas a preguntas, acorde al consentimiento de usuario.

La heurística del sistema tomara los datos (respuestas del usuario) para generar una contraseña, la cual tendrá parámetros que cumplan con ser contraseñas seguras y confiables.
- mayúsculas y minúsculas.
- números.
- símbolos o caracteres especiales.
- un mínimo de 8 caracteres de longitud.
- Combinación de palabras.

El sistema mostrará la contraseña generada y el usuario elegirá si aceptarla, generar otra o ingresar con una contraseña no generada por el sistema.

## Diagrama de arquitectura

Tomando en cuenta las interfaces que mostrará el sistema de recomendación, se realizó el diagrama de arquitectura del sistema que tendrá la conexión a la heurística y a la base de datos, el modulo está representando con acciones entre usuario y el sistema (interfaz, botones, heurística).

![Diagrama de arquitectura](/img/diagram.png)
