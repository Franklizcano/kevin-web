---
title: "Archivos generados: formatos DATANET y SAP"
layout: article
category: Integraciones y referencias técnicas
summary: Referencia de archivos generados y recibidos, parámetros de salida y diseños de registros para reportes financieros.
status: revisado
source: Guias y ayudas/Archivos Generados - Reglas de negocio V7 con CVU.doc
version: 7.0
last_source_change: 2019-11-26
reviewed: true
---

# Archivos generados: formatos DATANET y SAP

## Alcance

La especificación describe reglas de negocio y diseños de registro para la generación y recepción de archivos en formatos DATANET y SAP. Es una referencia técnica de integración y conciliación, no un procedimiento de troubleshooting.

## Contenido agrupado

### Reportes y archivos DATANET

- Agenda de vencimientos.
- Cobranzas.
- Consolidado de saldos y disponibilidades.
- Movimientos a conformar hoy, movimientos diferidos y movimientos del día.
- Movimientos y saldos, en formatos ASCII/DAT y CSV.
- Pagos a proveedores y pagos recibidos.
- Transferencias ejecutadas, incluidas las variantes BtoB, interpagos, depósitos y pagos judiciales, pagos a terceros y CVU.
- Archivos de cuentas y recepción de cuentas.

### Formatos SAP

La fuente incluye los archivos AUSZUG.TXT, UMSATZ.TXT y ZUGHUS.TXT, variantes PCC y los parámetros SAP_BCO, SAP_MON y SAP_CTA.

### Reglas transversales

Describe parámetros de reportes, nombres y ubicaciones predeterminadas, selección por banco, cuenta, moneda o período, tipos de registro inicial/detalle/final, longitudes de campos, variantes con Plan de Cuentas Contables (PCC) y campos adicionales de cuenta. También incluye el servicio adicional de información financiera firmada y encriptada.

## Cómo usar esta referencia

Elegir el tipo de reporte o integración, luego consultar en la especificación de origen los parámetros recibidos, nombre del archivo y diseño de registros correspondiente. La ficha web sirve como índice temático; para construir o procesar un archivo se necesita el detalle de campos y longitudes del documento fuente.

## Contexto de versión

La fuente corresponde a la versión 7.0, conserva un historial desde 2005 y registra su última modificación el 26 de noviembre de 2019. Una de sus modificaciones incorporó el formato de transferencias ejecutadas con CVU.

