---
title: La cuenta contraparte no está habilitada
layout: article
category: Transferencias y pagos
summary: Al confirmar una TEF BtoB aparece un aviso de cuenta contraparte no habilitada.
status: revisado
source: Pagos/la cuenta contraparte no está habilitada.docx
reviewed: true
---

Descripción general del incidente: está confeccionando una transferencia btob por

PAGOS &gt; preconfecc BtoB &gt; propias una tef a CAJA DE VALORES MK PLACE

y al confirmar le sale msj “ la cuenta contraparte no está habilitada”

![Imagen original del documento]({{ '/assets/originales/cuenta-contraparte-no-habilitada/captura-01.jpg' | relative_url }})

Se verifica si el cliente tiene la habilitada la cuenta contraparte de la comunidad a la que intenta transferir o en proceso de habilitación.

Al ser una tef b2b, no es requerida la cuenta crédito de la comunidad habilitada para el cliente.

select * from prsib.cta_contraparte where cta_id=242331462 and cli_id=503506;

select * from prsib.cta_por_vend where vend_com_id=920125;

