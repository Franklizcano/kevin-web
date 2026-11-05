---
title: Inconsistencia al crear o volver a registrar un suscriptor
layout: article
category: Alta, suscripciones y representantes legales
summary: No se puede crear nuevamente un suscriptor porque existen datos de una suscripción anterior.
status: revisado
source: ONB/inconveniente con el suscriptor.docx
reviewed: true
---

IMPORTANTE: tener en cuenta que siempre que un suscriptor elimine por su cuenta, una suscripción y quiera cargar una nueva, no va a poder, primero deben derivar un caso a Soporte mediante MDA para limpiar residuos y habilitar de nuevo al suscriptor.

Si un suscriptor trata de hacer su “primera” suscripción, no recuerda si tiene una anterior que no finalizo, dejo una a medias, etc,  y al intentar crearse la cuenta nueva de suscriptor, le indica que ya existen los datos.

![Imagen original del documento]({{ '/assets/originales/inconsistencia-suscriptor/captura-01.png' | relative_url }})

Pedirle a MDA que levante el caso y nos lo derive ya que es muy posible que tenga una inconsistencia en la base que no es un error, hasta hoy en día el flujo esta así determinado en la cual baja la persona registrada pero el suscriptor queda vivo y esto choca entre si impidiendo la nueva carga o el recupero de credenciales, por lo cual se deriva el caso mediante MDA.

PD: no solicitar ABC, incognito, otra compu, distintos navegadores, etc.

El ABC solo se realiza antes de iniciar la carga y en ventana común, o caso contrario ir directamente a una nueva de incognito sin realizar ABC.

Adicional:

Si abrimos la consola F12, sobre “Console” veríamos error 401 Unauthorized

![Imagen original del documento]({{ '/assets/originales/inconsistencia-suscriptor/captura-02.png' | relative_url }})

Esto complementa lo antes mencionado sobre el flujo ya que si ingresa a realizar el recupero “por las dudas”, le saltara el cartel

![Imagen original del documento]({{ '/assets/originales/inconsistencia-suscriptor/captura-03.png' | relative_url }})

Otra molestia es el cartel siguiente

![Imagen original del documento]({{ '/assets/originales/inconsistencia-suscriptor/captura-04.png' | relative_url }})

Esto sucede cuando realizan recupero de credenciales de manera exitosa y posterior intentar loguearse, primero deben realizar un borrado de cache si están sobre una ventana común, o bien desde incognito abriendo una nueva ventana, NO pestaña.

