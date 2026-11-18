### Declaracion uso IA.

## Modelo IA utilizado:
- Gemini (Flash, version web)

## Para que se uso?
- Solucion de errores clave
- Consultas acerca del uso de API


### Prompts:

## 1er prompt: como puedo organizar de forma limpia mis datos estaticos junto con los datos que traigo desde una API externa en la misma vista?

# resultado: 
```
Para organizar datos estáticos (como un archivo local de configuración o proyectos base) junto con datos dinámicos obtenidos de una API externa en React, la práctica más limpia es separar las responsabilidades en tres capas: almacenamiento, obtención de datos y presentación.

1. Separar el origen de los datos
Datos estáticos (src/data/): Mantén tus arreglos u objetos locales en un archivo independiente y exportable. Esto evita ensuciar la lógica de tus componentes y facilita editar el contenido a futuro.

Datos dinámicos (src/hooks/): Encapsula la petición fetch o axios dentro de un Custom Hook (ej. useFetchApi). Este hook debe encargarse exclusivamente de gestionar el ciclo de vida de la petición y devolver tres estados claros: { data, loading, error }.

2. Decidir cómo combinarlos en la vista
Dependiendo de tu diseño, existen dos estrategias principales dentro del componente de vista (ej. ProjectsPage.jsx):

Opción A: Renderizado por secciones independientes (Recomendado)
Mantienes ambos orígenes separados en bloques visuales distintos dentro de la misma página. La gran ventaja es que los datos estáticos se muestran de inmediato sin esperar la respuesta de red, mientras que la sección dinámica gestiona su propio estado de carga (loading) o fallo (error) sin bloquear el resto de la interfaz.

Opción B: Fusión y normalización en un solo arreglo
Si necesitas mostrarlos mezclados en una misma grilla o aplicarles un filtro/buscador único, debes normalizar ambos conjuntos de datos para que compartan exactamente las mismas propiedades (por ejemplo, mapear los campos de la API para que coincidan con id, title, description y tags de tus datos locales) antes de unirlos:

JavaScript
const normalizedApiData = (apiData || []).map((item) => ({
  id: item.id,
  title: item.name,
  description: item.description || 'Sin descripción',
  tags: item.language ? [item.language] : [],
}));

const allItems = [...staticData, ...normalizedApiData];
3. Reutilizar el componente de tarjeta (UI)
Independientemente de si los muestras por separado o fusionados, crea un componente presentacional único (ej. <ProjectCard/>) que reciba las props estandarizadas. De este modo, el diseño visual es 100 % consistente y el componente de tarjeta no necesita saber si la información vino de un archivo local o de un servidor externo. 
```

## 2do Prompt: ¿Cómo cambio la URL del repositorio remoto (origin) en Git si vinculé el proyecto a uno equivocado por accidente

# Resultado:
```
Para cambiar la URL del repositorio remoto al que apunta tu proyecto en Git cuando te equivocas de enlace, solo tienes que usar el comando git set-url.

Aquí tienes los pasos rápidos para solucionarlo directamente en tu terminal:

1. Actualizar la URL del repositorio remoto
Ejecuta el siguiente comando (reemplaza la URL con la correcta de tu repositorio en GitHub):

Bash
git remote set-url origin https://github.com/tu_usuario/nombre-del-repositorio-correcto.git
2. Verificar que el cambio se haya aplicado correctamente
Puedes comprobar que ahora apunta al repositorio correcto ejecutando:

Bash
git remote -v
(Esto te mostrará las URLs actuales de fetch y push, las cuales deben coincidir con la nueva dirección).

3. Subir tus cambios
Una vez verificado, puedes enviar tus archivos al repositorio correcto:

Bash
git push -u origin main
¡Y listo! Con eso tu proyecto quedará vinculado al repositorio que querías sin perder ninguno de tus avances locales.
```


### Que fragmento se recibio de la IA?
- Del primer prompt recibi/utilize la opcion A que me daba debido a que es la que mas recomienda a la hora de hacer este tipo de cosas.
- Del segundo basicamente utilize el comando debido a que ya tenia creado un repositorio en github donde tenia el codigo base de REACT, pero el profesor solicito que hicieramos un repositorio nuevo asi que solo traspase el codigo base de REACT al otro repositorio.


### Que se ajusto y como verifico manualmente?

## Ajustes: 
- Se ajusto el codigo para cumplir con la estructura de tenerlo en 2 archivos diferentes
- se modifico el comando entregado para que apunte al repositorio correcto al que debia mandar los archivos

## Verificacion manual:
- al momento de usar npm run dev no entregaba errores indicando que se hizo correctamente la separacion de los archivos
- Al momento de usar el comando entregado y luego hacer push el contenido se subio al repositorio correcto

### Reflexion personal sobre el proceso de aprendizaje:
- Pienso que el primer prompt me ayuda en el sentido de identificar errores mas facil debido a que si llega a fallar algo relacionado a los proyectos ya sabre cual es el que falla debido a que estan en archivos diferentes. con el segundo ahora se que puedo hae push a un repositorio que tal vez no deba hacerle push entonces esto me enseña a tener mas cuidado al momento de hacerlo y de revisar hacia donde estoy mandando la informacion