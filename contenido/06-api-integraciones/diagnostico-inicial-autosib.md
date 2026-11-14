---
title: Diagnóstico inicial de AUTOSIB
layout: article
category: ABM's, Plataforma 2.0
summary: Primeras verificaciones ante problemas de conexión, acceso, cortes o reinicios de AUTOSIB.
status: revisado
source: Autosib/Validaciones de errores.docx; Guias y ayudas/autosib.docx
reviewed: true
---

Diagnóstico inicial de AUTOSIB

Este instructivo está pensado para que desde MDA pueda realizar la puesta a punto y el diagnóstico inicial ante casos de AUTOSIB en los que el cliente informa problemas de conexión, errores de acceso, cortes o reinicios de conexión.

## 1. Contexto del servicio

Aclaración importante: si el servicio presentara una falla general, normalmente se recibirían múltiples casos, consultas o alarmas asociadas a la gravedad del evento. En la mayoría de los casos aislados, el inconveniente suele estar relacionado con una configuración o bloqueo del lado del cliente.

## 2. Evidencias necesarias antes de escalar

Antes de considerar que el error corresponde a nuestra aplicación, se debe solicitar al cliente una serie de pruebas y evidencias que permitan validar el origen del problema.

## 3. Pasos de diagnóstico

Solicitar al cliente que reinstale el software de AUTOSIB y valide nuevamente la conexión.

Si el log de AUTOSIB muestra errores de SSL, de conexión, o reset de conexión, revisar el Visor de eventos del sistema para identificar actualizaciones, cambios de configuración o posibles inconvenientes recientes. En caso de ser necesario, consultar con Soporte Local, Redes o Seguridad para obtener información técnica adicional.

Realizar una traza de salida de trafico, que se ejecute con la versión de Java requerida, que inicie el handshake con el TLS 1.2 y confirmar no hay un freno en algún punto de su configuración, firewall, etc o que no este ejecutando el TLS 1.0 ya que esto frenaría la salida del trafico.

Verificar la versión de TLS aceptada. AUTOSIB requiere TLS 1.2. La validación puede realizarse mediante OpenSSL con el siguiente comando: openssl s_client -connect sib1.interbanking.com.ar:443.

Validar el acceso local desde el equipo del cliente ingresando a http://127.0.0.1:8999/.

Confirmar si existe firewall, proxy, IPS u otros controles de seguridad que puedan afectar la conexión. Solicitar a Redes o Seguridad el trazado de salida desde la IP del cliente hacia AUTOSIB para identificar dónde se produce la traba.

Consultar si es posible desactivar temporalmente el antivirus para realizar una prueba controlada durante una ventana corta.

Validar una prueba con línea directa a Internet durante una ventana corta, si el cliente puede habilitarla.

Solicitar la ejecución del programa en otra máquina y, de ser posible, desde otra red para descartar inconvenientes locales del equipo o de la conectividad.

## 4. Información obligatoria del caso

Para recibir y analizar el caso, se debe contar con capturas de pantalla de las pruebas realizadas, evidencia del error, IP pública del cliente, log de AUTOSIB y una propuesta de ventana con fecha y horario para una posible reunión técnica.

## Checklist final de puesta a punto

| Verificado | Ítem a confirmar | Observaciones |
| --- | --- | --- |
| ☐ | Software de AUTOSIB reinstalado y probado nuevamente. |  |
| ☐ | Logs de AUTOSIB revisados para identificar errores de SSL, conexión o reset. |  |
| ☐ | Visor de eventos validado para detectar actualizaciones o cambios recientes. |  |
| ☐ | Compatibilidad con TLS 1.2 confirmada mediante prueba técnica. |  |
| ☐ | Acceso local validado en http://127.0.0.1:8999/. |  |
| ☐ | Firewall, proxy, IPS o controles de seguridad revisados con Redes o Seguridad. |  |
| ☐ | Prueba temporal sin antivirus realizada o solicitada. |  |
| ☐ | Prueba con línea directa de Internet realizada o solicitada. |  |
| ☐ | Prueba en otra máquina y/o red realizada o solicitada. |  |
| ☐ | Capturas, IP pública, logs y ventana de reunión técnica adjuntados al caso. |  |

---

Diagnóstico inicial de AUTOSIB

Este instructivo está pensado para que un nuevo colaborador del sector pueda realizar la puesta a punto y el diagnóstico inicial ante casos de AUTOSIB en los que el cliente informa problemas de conexión, errores de acceso, cortes o reinicios de conexión.

## 1. Contexto del servicio

Aclaración importante: si el servicio presentara una falla general, normalmente se recibirían múltiples casos, consultas o alarmas asociadas a la gravedad del evento. En la mayoría de los casos aislados, el inconveniente suele estar relacionado con una configuración del lado del cliente.

## 2. Evidencias necesarias antes de escalar

Antes de considerar que el error corresponde a nuestra aplicación, se debe solicitar al cliente una serie de pruebas y evidencias que permitan validar el origen del problema.

## 3. Pasos de diagnóstico

Solicitar al cliente que reinstale el software de AUTOSIB y valide nuevamente la conexión.

Si el log de AUTOSIB muestra errores de SSL o de conexión, revisar el Visor de eventos del sistema para identificar actualizaciones, cambios de configuración o posibles inconvenientes recientes. En caso de ser necesario, consultar con Soporte Local, Redes o Seguridad para obtener información técnica adicional.

Verificar la versión de TLS aceptada. AUTOSIB requiere TLS 1.2. La validación puede realizarse mediante OpenSSL con el siguiente comando: openssl s_client -connect sib1.interbanking.com.ar:443.

Validar el acceso local desde el equipo del cliente ingresando a http://127.0.0.1:8999/.

Confirmar si existe firewall, proxy, IPS u otros controles de seguridad que puedan afectar la conexión. Solicitar a Redes o Seguridad el trazado de salida desde la IP del cliente hacia AUTOSIB para identificar dónde se produce la traba.

Consultar si es posible desactivar temporalmente el antivirus para realizar una prueba controlada durante una ventana corta.

Validar una prueba con línea directa de Internet durante una ventana corta, si el cliente puede habilitarla.

Solicitar la ejecución del programa en otra máquina y, de ser posible, desde otra red para descartar inconvenientes locales del equipo o de la conectividad.

## 4. Información obligatoria del caso

Al recibir o analizar el caso, se debe contar con capturas de pantalla de las pruebas realizadas, evidencia del error, IP pública del cliente, log de AUTOSIB y una propuesta de ventana con fecha y horario para una posible reunión técnica.

## Checklist final de puesta a punto

| Verificado | Ítem a confirmar | Observaciones |
| --- | --- | --- |
| ☐ | Software de AUTOSIB reinstalado y probado nuevamente. |  |
| ☐ | Logs de AUTOSIB revisados para identificar errores de SSL, conexión o reset. |  |
| ☐ | Visor de eventos validado para detectar actualizaciones o cambios recientes. |  |
| ☐ | Compatibilidad con TLS 1.2 confirmada mediante prueba técnica. |  |
| ☐ | Acceso local validado en http://127.0.0.1:8999/. |  |
| ☐ | Firewall, proxy, IPS o controles de seguridad revisados con Redes o Seguridad. |  |
| ☐ | Prueba temporal sin antivirus realizada o solicitada. |  |
| ☐ | Prueba con línea directa de Internet realizada o solicitada. |  |
| ☐ | Prueba en otra máquina y/o red realizada o solicitada. |  |
| ☐ | Capturas, IP pública, logs y ventana de reunión técnica adjuntados al caso. |  |
