---
title: Error al ingresar a Aprobación de Suscripción Manual
layout: article
category: Alta, suscripciones y representantes legales
summary: La pantalla de suscripciones manuales devuelve un error de referencia al ingresar.
status: revisado
source: ONB/error al ingresar a adm_aprob_suscrip_Manual.docx
reviewed: true
---

Al op 27266902129 le da error de referencia cuando quiere ingresar a Administración &gt; Aprobación &gt; Suscripcion Manual

![Imagen original del documento]({{ '/assets/originales/error-aprobacion-suscripcion-manual/captura-01.png' | relative_url }})

null-ar.com.eds.x71.ui.suscripcion.banco.SuscripcionBancoAction-java.lang.NullPointerException at ar.com.eds.x71.ui.suscripcion.SuscripcionHelper$2.tratarTipoCartaRat(SuscripcionHelper.java:303) at

esto es… alguna de las suscripciones pendientes para ese banco se encuentra el pendiente de la carta sin una cuenta asociada, y el pendiente se ve así.

Pend con error, se diferencia fácilmente porque un pend sin error es 4 o 5 veces mas largo.

&lt;?xml version="1.0" encoding="ISO-8859-1"?&gt;

&lt;DYNAMICBEAN TYPE="DYNAMICBEAN" FORMAT="CONDENSED"&gt;

&lt;P N="clave" T="L"&gt;110644953&lt;/P&gt;

&lt;P N="fechaAlta" T="CAL"&gt;1772215797000&lt;/P&gt;

&lt;P N="fechaEstado" T="CAL"&gt;1791989422229&lt;/P&gt;

&lt;P N="fechaEstadoAutorizacion" T="CAL"&gt;1791989422229&lt;/P&gt;

&lt;P N="fechaEstadoAutorizacionBanco" T="CAL"&gt;1791989422229&lt;/P&gt;

&lt;P N="idBanco" T="L"&gt;35&lt;/P&gt;

&lt;P N="idCliente" T="L"&gt;502512&lt;/P&gt;

&lt;P N="idEntidad" T="L"&gt;100006046&lt;/P&gt;

&lt;P N="idEstado" T="S"&gt;PA&lt;/P&gt;

&lt;P N="idEstadoAutorizacion" T="S"&gt;V&lt;/P&gt;

&lt;P N="idEstadoAutorizacionBanco" T="S"&gt;V&lt;/P&gt;

&lt;P N="idEstAutClientePermPant" T="S"&gt;V&lt;/P&gt;

&lt;P N="idMotivo" T="L"&gt;0&lt;/P&gt;

&lt;P N="idPendiente" T="S"&gt;|ar.com.eds.x71.persistence.entity.offering.CartaRatificacion|:

110644953&lt;/P&gt;

&lt;P N="idVersion" T="L"&gt;1791989351652&lt;/P&gt;

&lt;P N="motivoEstadoDescripcion" T="S"&gt; &lt;/P&gt;

&lt;P N="otroMotivo" T="S"&gt;&lt;/P&gt;

&lt;/DYNAMICBEAN&gt;

y no nos queda otra más que ir 1 x 1 a ver los pendientes de las cartas, descodificando y chequeando

cuando detectamos un pendiente así corto... bingo

se le baja todo por script.

