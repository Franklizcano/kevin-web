---
title: Preguntas frecuentes de API
layout: article
category: Integraciones y referencias técnicas
summary: Aclara el alcance de la API, los estados y mensajes de respuesta, y qué pasos ocurren en la plataforma web.
status: revisado
source: API/Preguntas frecuentes.docx
reviewed: true
---

Preguntas frecuentes API

me envíen por favor el Catálogo completo de estados/respuestas, disponibles que recibiremos post outbound de datos de pagos

en el api portal &gt; información general &gt; esta toda la descripción funcional que aplica a cualquier transferencia.

entre ellos Mensajes de Respuesta: Se detallan a continuación los errores asociados a la lógica del negocio.

y cada una de estas opciones tiene la opción para

![Imagen original del documento]({{ '/assets/originales/preguntas-frecuentes-api/captura-01.png' | relative_url }})

cuentan con alguna demo/video/vista de como sera en la web?

API no se gestiona via web

cuando subimos un archivo con algun dato erroneo, es visible en pantalla la descripción del error, se mantiene la misma pantalla? Recepcionaremos los mismos status/respuestas?

por  Api portal solo se puede realizar la confección de las transferencias (adjunto), la autorización y el envió la realiza desde la plataforma Web o la app.

reunion por capacitacion:

si tiene soporte comercial - mda o consultasapi

si no tiene – imple

con desarrollo no se deriva caso, se coordina directamente con ellos.

¿Cuáles son todos los valores posibles del campo "status" en /transfers/details? Hasta ahora vimos «Confeccionada», «Enviada banco debito», «Ejecutada» y «Anulada». Necesitamos la lista completa para que nuestro proceso los interprete bien, en especial los estados de una transferencia firmada que todavía no se ejecutó

en el api portal &gt; información general &gt; esta toda la descripción funcional

¿Hay alguna forma de consultar el estado de una transferencia o de un lote directamente por transfer_id o por número de lote, en lugar de recorrer la ventana de fechas?

claro solo por fecha valor. Todavía no tenemos un servicio para buscar algo en particular

¿La consulta /transfers/details refleja las anulaciones? ¿Con qué demora?

efectivamente lo trae ese estado. La consulta solo te devuelve información, la repostería es agnóstica digamos

¿Cuáles son todos los valores posibles del campo "status" en /transfers/details? Hasta ahora vimos «Confeccionada», «Enviada banco debito», «Ejecutada» y «Anulada». Necesitamos la lista completa para que nuestro proceso los interprete bien, en especial los estados de una transferencia firmada que todavía no se ejecutó.

en el api portal &gt; información general &gt; esta toda la descripción funcional

Si en un mismo dia hacemos (por ejemplo) 2 transferencias desde la misma cuenta, por el mismo monto…

Por ejemplo, 2 transferencias desde el Galicia a otra cuenta propia, por 80MM, el mismo dia.

Bank_number, account_number, account_type, currency, movement_date, value_date, debit_credit_type, amount: todas estas van a ser todas iguales en ambos movimientos. CORRELATIVE_NUMBER es distinto en esos movimientos?

si el banco reprocesa la información enviada (algunos bancos suelen reprocesar, es decir, reenvían la información pisando lo que ya estaba y corrigiendo los errores) ese dato cambia también.

Podrían tomar datos propios del movimiento como juntar monto+concepto+fecha de movimiento y hacer un único dato identificador, pero no podemos asegurar que esto genere duplicaciones.

Si notan que con algunos bancos suele ser mas frecuente este tema de duplicados o cambios de un dia al otro también nos es útil para ver si lo informamos dentro del banco mismo.

Confirmar si esta estructura de tef prov, pagos, etc es la exacta que tenemos que enviar a Interbanking

en la documentacion tienen todo lo requerido para armar lo necesario dependiendo del tipo de tef segmentada dentro de la API

Mapeo de campos SAP ↔ INTB

Interbanking no se integra con tu ERP (SAP) ni toma datos de sus tablas, por lo que no existe un mapeo de campos entre SAP (F110 / F-53) y nuestra plataforma. La API solo confecciona transferencias con los datos que ustedes envían en el request; la operación luego continúa su autorización y envío desde las plataformas de Interbanking (web o mobile). Los valores que hoy identificás en SAP (por ejemplo confection_id, customer_code, payment_order_number o payment_number) deben completarse de su lado al armar el request.

Los valores reales esperados para operator_id_number y operator_country_code para la cuenta de Advanta (la documentación solo trae valores de ejemplo/dummy)

| Campo | Descripción | Tipo | Obligatorio | Longitud | Longitud | Leyenda |
| --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  | V1 | V2 |  |
| operator_id_number | Identificador del Operador | string | Sí | 10 | 20 | x = no existe |
| operator_country_code | Codigo pais del Operador | string | Sí | x | fija 2 | - = no tienen validación de longitud máxima de caracteres en el código. En algunos casos es porque son Boolean, en otros (como request_date) porque la validación es de formato de fecha, no de longitud. |

Qué campos son generados por SAP y cuáles son devueltos/asignados por el banco (más allá de order_id y lot_number, que sí se identifican como generados por INTB en la respuesta).

Todos los campos del request se cargan de su lado según la documentación de la API. Interbanking solo devuelve, en la response, los identificadores que genera nuestra plataforma al confeccionar (por ejemplo order_id y lot_number). No asignamos ni devolvemos otros campos más allá de los que figuran en la response documentada

La frecuencia/cadencia del polling (cada cuánto se consulta el estado).

Entendemos que se trata del endpoint de proceso asincrónico (v1/transfers/asynchronous-process/{idProceso}); en ese caso, sugerimos consultar el estado cada 30 segundos, cadencia suficiente para el seguimiento sin generar consultas innecesarias.

El payload exacto de request y response del servicio "Transfer Status Check" (solo se sabe que existe y que se consulta por process_id).

Interbanking no cuenta con ningún endpoint llamado "Transfer Status Check". Entendemos que ese nombre corresponde a una denominación interna de su implementación.

Para dar contexto sobre cómo funciona la confección y el seguimiento del estado:

Cuando se confeccionan hasta 10 transferencias, el procesamiento es sincrónico: la respuesta se devuelve en el momento e incluye el lot_number y el order_id.

Cuando se confeccionan más de 10 transferencias, el procesamiento es asincrónico: la respuesta devuelve un process_id, que luego se utiliza para consultar el estado del proceso a través del endpoint de proceso asincrónico (v1/transfers/asynchronous-process/{idProceso}).

Cómo se relacionan múltiples process_id (uno por lote) con los documentos de pago individuales en SAP cuando un lote agrupa varias transferencias.

Del lado de Interbanking la trazabilidad es: 1 request de confección exitoso → 1 lote (lot_number). Si el request falla, no se genera número de lote. Cuando la confección supera las 10 transferencias, la respuesta devuelve un process_id en lugar del lot_number; ese process_id se consulta en el endpoint asincrónico y, al finalizar, allí se obtiene el lote correspondiente. La asociación de cada lote con los documentos de pago individuales de SAP debe mantenerse desde su implementación, ya que ese vínculo no lo maneja Interbanking.

Si se ejecutan múltiples corridas de pago en un mismo día para diferentes proveedores, ¿se generarán llamadas CPI independientes para cada corrida de pago o podrán consolidarse dentro de una única ejecución de la interfaz?

El criterio para agrupar transferencias dentro de un mismo request es una definición propia del cliente y queda fuera del alcance de Interbanking. La única condición es que nuestras APIs están segmentadas por tipo de transferencia: lo que define si dos pagos van en el mismo request es el tipo de transferencia, no el proveedor. Pagos a distintos proveedores (supplier) pueden consolidarse en una única llamada; solo se usan llamadas separadas cuando cambia el tipo de transferencia. La cantidad de proveedores dentro de una corrida no obliga a separar los envíos.

Si existen diferencias de versión en otros servicios (Token, Third-Party Transfer, Transfer Status Check), ya que estos no están detallados en la documentación entregada.

Una comparación formal y completa V1 vs V2 (parámetros, autenticación, límites, etc.), más allá del comportamiento ante errores

Recomendamos integrar directamente sobre la V2, ya que la V1 está próxima a ser deprecada; por eso no conviene avanzar sobre V1 ni contrastar ambas versiones. En la documentación van a encontrar, para cada endpoint según el tipo de transferencia, el detalle completo: request, esquema y definición de campos

Archivo  zughus

este archivo va a obtener aquellos movimientos cuya fecha valor sea distinta a la fecha de procesamiento. Por esa razón van a ver menos movimientos que consultando únicamente los movimientos anteriores. Cada movimiento siempre va a tener una fecha valor, pero la condición para el archivo será la ya mencionada

limit 0

La opción limit=0 no es válida, ya que semánticamente significa "devolver 0 registros".

Cuando el cliente no especifica el parámetro limit, la API utiliza el valor 64 por defecto.

Respecto a la posibilidad de devolver siempre el total de registros, no es una alternativa que podamos implementar de forma general, ya que ese comportamiento aplicaría a todos los consumidores de la API. Obtener el total implica realizar un procesamiento adicional que, para clientes con grandes volúmenes de información, tendría un impacto negativo en la performance.

Como alternativa, nuestra recomendación es que el cliente configure un limit=100 (o el valor que mejor se adapte a su caso de uso) y utilice la información de totalRows junto con el mecanismo de paginación para consultar la totalidad de los registros cuando sea necesario.

limit = 100

el limit es opcional pero tiene un default, podria probar con filtrar el servicio por 1000 y hasta 2000, deberia traerselo, primero que pruebe con 1000 para ver el tiempo que le toma y ahi ya podría jugar con la cantidad

confection_id

el maximo permitido es 7 caracteres

¿Cuál es el límite correspondiente al plan informacion-financiera, tanto en cantidad de llamadas como en ventana de tiempo?

esto se puede ver al contratar el plan en el portal de api

como obtengo los movimientos con fecha valor

Para obtener los movimientos fecha valor se debe confeccionar el informe ZUGHUS

