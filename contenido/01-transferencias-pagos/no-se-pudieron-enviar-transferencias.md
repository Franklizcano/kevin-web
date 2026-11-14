---
title: No se pudieron enviar las transferencias
layout: article
category: Transferencias en general y pago de servicios
summary: El operador no logra enviar una o más transferencias desde banca electrónica.
status: revisado
source: Pagos/no se pudieron enviar las transferencias.docx
reviewed: true
---

Este error se da cuando algún operador de una empresa quiere enviar transferencias de banca electrónica (cuentas propias, proveedores, terceros, sueldos) y le da el error que no se pudieron enviar las tefs

![Imagen original del documento]({{ '/assets/originales/no-se-pudieron-enviar-transferencias/captura-01.png' | relative_url }})

Habitualmente puede que el cliente no tiene registros en la tabla prsib.tope_cliente y debemos insertárselos mediante script.

Igualmente, para agilizar y evitar idas y vueltas en exceso, es necesario contar con:

Cuenta origen y destino en texto plano

Captura completa legible con Fecha y hora del incidente

cuiL del op al que le salto el incidente
