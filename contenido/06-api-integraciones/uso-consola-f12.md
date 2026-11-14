---
title: Uso de la consola de desarrolladores (F12)
layout: article
category: ABM's, Plataforma 2.0
summary: Recopila información técnica de una solicitud fallida para facilitar el diagnóstico.
status: revisado
source: Guias y ayudas/Consola F12.docx
reviewed: true
---

F12 (consola desarrolladores)

IMPORTANTE: la consola debe estar abierta antes de reproducir el error

Consola F12 en Chrome, posicionando el cursor en cualquier parte de la pantalla que no ejecute ninguna acción el cursor, clic secundario &gt; inspeccionar y nos paramos sobre la pestaña Network

Reproducir el error, podemos verificar en el listado desplegable debajo de “NAME” e ingresar en el titulo en ROJO el cual sería nuestro error en este caso, luego ir a RESPONSE y PAYLOAD para verificar el contexto del error, el mismo nos dará guía

En algunos casos puede no mostrar detalles del error en RESPONSE y PAYLOAD

![Imagen original del documento]({{ '/assets/originales/uso-consola-f12/captura-01.png' | relative_url }})

![Imagen original del documento]({{ '/assets/originales/uso-consola-f12/captura-02.png' | relative_url }})

en este caso la ref. es el error “company” que es el ultimo

luego de dar clic (si ya no está abierta) se abrirá una sección adicional en la que nos posicionamos sobre “RESPONSE”, (de estar vacío, pararse sobre PAYLOAD)

en la siguiente imagen veremos el contexto del error el cual nos proporciona suficiente info para determinar si podemos atajar el error en primera instancia o debe derivarse a Soporte Productivo.

![Imagen original del documento]({{ '/assets/originales/uso-consola-f12/captura-03.png' | relative_url }})

Esta captura de pantalla es requerida en la mayoría de los errores para un análisis más eficiente y Ágil y rápido.  
  
PD 1: también nos podemos guiar por las X rojas que están en la misma línea que el menú “network” esto nos dice la cantidad de errores reflejados al intentar una acción que no se nos permite.

![Imagen original del documento]({{ '/assets/originales/uso-consola-f12/captura-04.png' | relative_url }})

PD 2: siempre dejar las capturas de pantalla con fecha y hora para facilitar búsqueda en logs.
