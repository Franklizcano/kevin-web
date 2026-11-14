---
title: La suscripción no se envía al banco
layout: article
category: Onboarding
summary: El envío de la suscripción no se completa y puede estar relacionado con la cuenta o las credenciales.
status: revisado
source: ONB/No se envia suscrip al banco.docx
reviewed: true
---

En algunas ocasiones, no deja realizar el envió de la suscripción al banco.

Nos podríamos en la consola F12, muy probable tengamos indicio del inconveniente que se presenta, o en su defecto, derivar a MDA para que Soporte verifique si es una de las dos casuísticas más recurrentes.

La cuenta con CBU “021213612873” pertenece a otra empresa

El cliente está utilizando cuentas que no le pertenecen en ruc como primer titular. (corregible por script si en ruc esta ok y en nuestra base falta actualizar, caso contrario no sea el titular en ruc, no se pueden utilizar ni regularizar en SIB)

Falta user_id y passw_id

Algún op de la suscripción, no tiene generado credenciales para una empresa anterior. (corregible por recupero)

ar.com.ib.ruc.service.RutinasCbuBancosRucException: validaCuenta.digitoErroneo

Imagen de referencia, donde podemos visualizar “No podemos enviar la solicitud”

![Imagen original del documento]({{ '/assets/originales/suscripcion-no-se-envia-banco/captura-01.png' | relative_url }})
