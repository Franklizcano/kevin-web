---
title: Uso de la consola de desarrolladores (F12)
layout: article
category: Integraciones y referencias técnicas
summary: Recopila información técnica de una solicitud fallida para facilitar el diagnóstico.
status: revisado
source: Guias y ayudas/Consola F12.docx
reviewed: true
---

# Uso de la consola de desarrolladores (F12)

## Antes de reproducir el error

1. Abrir las herramientas de desarrollador del navegador.
2. Seleccionar la pestaña Network y dejarla abierta.
3. Reproducir el problema una sola vez y localizar la solicitud fallida.

## Información que puede orientar el análisis

Abrir la solicitud y revisar Response y Payload. La fuente indica que en algunos casos Response puede estar vacío; Payload puede aportar contexto adicional.

## Manejo seguro de la evidencia

Las solicitudes pueden incluir datos personales, tokens, identificadores o información de sesión. Revisar y sanitizar la captura o exportación antes de adjuntarla a un caso. No publicar respuestas, payloads ni registros reales.

## Escalamiento

Compartir la evidencia solo mediante el canal interno autorizado y con los datos mínimos necesarios.

