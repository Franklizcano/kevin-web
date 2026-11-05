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

&lt;major.minor&gt;Use Case Specification: &lt;nombre&gt;

SIB

Reglas de negocio: Archivos Generados

Versión 7.0

Revisión Histórica

| Fecha | Version | Descripción | Autor |
| --- | --- | --- | --- |
| 20/06/2005 | 1.0 | Versión inicial. Tomado del doc DisenosDN.doc | Ana Castro Lonné |
| 17/10/2005 | 1.1 | Modificacion al registros de tef ejecutadas por req 12014 | Ana Castro y Fernando DeSimoni |
| 18/11/2005 | 1.2 | Se actualiza diseños de registro por Ticket 12308 y Ticket 12423. | Mónica Reza |
| 22/11/2005 | 1.3 | Se actualiza diseño de registro de Cobranzas de acuerdo a lo solicitado en el ticket 117. | Mónica Reza |
| 13/12/2005 | 1.4 | Se completa diseño de registro de Pagos Recibidos por ticket 10506. | Mónica Reza |
| 11/01/2006 | 1.5 | Modifico formato de archivo de tef ejecutadas. | Ana Castro Lonné |
| 08/02/2006 | 1.6 | Se agrega formato de archivo de cuentas de crédito<br>por requerimiento 13024 y se modifica por req. 13016 – Diseño de Arch Recibidos Tef Ejecutadas. | Mónica Reza |
| 19/03/2006 | 1.7 | Se modifica la generación del campo obser1 en el download de todos los tipos de transferencias y el nombre del archivo ZUGHUS.TXT. | Mónica Reza |
| 22/08/2006 | 1.8 | Se agrega modificación requerimiento 15018. | Mónica Reza |
| 17/11/2008 | 1.9 | Se agrega la modificación del archivo de Pagos Recibidos según Documento que adjuntó Gustavo Jeanplong en el mail del día de la fecha | Marcela Leguizamón |
| 15/07/2009 | 2.0 | Carga del req 20381 Cambios Archivos GenereacionDN cuentas | Irene Pascua |
| 07/12/2009 | 2.1 | Arreglo del pie de página | Marcela Leguizamón |
| 15/03/2011 | 2.2 | Agregado req 5077 archivos generación firmado y encriptado | Irene Pascua |
| 30/10/2012 | 2.3 | Modificacion formato de registro de ZUGHUS.TXT y UMSATZ.TXT | Irene Pascua |
| 19/11/2012 | 2.4 | Se agrega formato de los archivos con PCC y el nombre de los archivos | Marcela Leguizamón |
| 04/05/2015 | 2.5 | Se agrega el número de cuenta DN en los archivos que sólo tienen el número de cuenta corto DNy el código DN para Tipo de Cuenta-Moneda y lo de Movimientos a Conformar Hoy | Marcela Leguizamón |
| 11/05/2015 | 2.6 | Se agregan más valores que puede toma el Tipo-Moneda DN en la aclaración | Marcela Leguizamón |
| 13/08/2015 | 2.7 | Se agreaga el formato del archivo Movimientos y Saldos Formatos CSV | Marcla Leguizamón |
| 04/09/2015 | 2.8 | Se modifica el formato de fecha del encabezado del archivo dncobr.dat y de movimientos y saldos y el comentario de la pagina 18 de los archivos con PCC de moviemientos y saldos | Irene Pascua |
| 04/01/2018 | 2.9 | Agregado de consolidado de saldos en archivos generación | Irene Pascua |
| 19/02/2018 | 3 | Modificación consolidado de saldos | Irene Pascua |
| 04/12/2018 | 4 | Se agrega un nuevo formato de movimientos y saldos y movimientos y saldos nuevos para agregar cbu, cuit/cuil y denominacion | Irene Pascua |
| 17/01/2019 | 5 | Se modifica en Movimientos y Saldos, en el registro inicial, la longitud del nombre y se aclara como se conforma el nombre | Marcla Leguizamón |
| 12/07/2019 | 6 | Se agregan todos los tipos de tefs que faltan para transferencias ejecutadas BtoB, interpagos, depósitos judiciales, pagos judiciales y pagos terceros | Irene Pascua |
| 26/11/2019 | 7 | Agregado de nuevo tipo de archivo transferencias ejecutadas para tefs con CVU | Irene Pascua |

Contenido del documento

1.	Breve Descripción	6

2.	Referencias	6

3.	Reglas adicionales de negocio	6

3.1	Generalidades	6

3.2	Agenda de vencimientos	6

3.2.1	Parámetros recibidos	6

3.2.2	Formato del archivo	6

3.3	Cobranzas	7

3.3.1	Parámetros recibidos	7

3.3.2	Formato del archivo	8

3.4	Consolidado de Saldos	9

3.4.1	Parámetros recibidos	9

3.4.2	Formato del archivo	9

3.5	Disponibilidades	11

3.5.1	Parámetros recibidos	11

3.5.2	Formato del archivo	11

3.6	Movimientos a Conformar Hoy	13

3.6.1	Parámetros recibidos	13

3.6.2	Formato del archivo	13

3.7	Movimientos diferidos	15

3.7.1	Parámetros recibidos	15

3.7.2	Formato del archivo	15

3.8	Movimientos del día	16

3.8.1	Parámetros recibidos	17

3.8.2	Formato del archivo	17

3.9	Movimientos y Saldos	18

3.9.1	Parámetros recibidos	18

3.9.2	Formato ASCII (descarga .DAT)	18

3.9.3	Formato del archivo	19

3.9.4	Formato CSV (descarga .CSV)	23

3.9.5	Formato del archivo	23

3.10	Pago a Proveedores	26

3.10.1	Parámetros recibidos	26

3.10.2	Formato del archivo	27

3.11	Pagos recibidos	28

3.11.1	Parámetros recibidos	28

3.11.2	Formato del archivo	28

3.12	Transferencias Ejecutadas	29

3.12.1	Parametros recibidos	29

3.12.2	Formato del archivo	29

3.13	Cuentas	35

3.13.1	Formato del archivo	35

Diseño de Registros para la recepción de cuentas	35

3.14	Generalidades de los archivos en formato SAP	36

3.14.1	Parámetros recibidos	36

3.15	AUSZUG.TXT	37

3.16	UMSATZ.TXT / UMSATZPCC.TXT	38

3.17	ZUGHUS.TXT / ZUGHUSPCC.TXT	38

3.18	Diseño de Parámetros para SAP	39

3.18.1	SAP_BCO	39

3.18.2	SAP_MON	39

3.18.3	SAP_CTA	40

3.19	Firma y Encripcion de archives	40

3.19.1	Servicio Adicional “Información Financiera Encriptada y Firmada”	40

3.19.2	Procedimiento con información financiera encriptada y firmada	40

4.	Definiciones pendientes	41

Reglas de negocio: Archivos Generados

## Breve Descripción

El presente documento contiene las reglas de negocio de la generación y recepción de archivos en formato DATANET y SAP

## Referencias

## Reglas adicionales de negocio

## Generalidades

Hay una opción en la aplicación para generar los archivos y otra opción de menú para bajarlos a la PC.

Todos los archivos tienen un directorio por defecto y un nombre predeterminado, si al bajar el archivo no se encuentra el directorio el operador debe elegir la ubicación.

Aclaración: En toda definición de archivo que tenga Tipo-Moneda DN, los valores posibles son los siguientes: 01-CC$ / 02-CA$ / 13-CCu$s / 15-CAu$s.

Para los tipos que no tienen moneda va a mostrar: 07 – CE / 05 – TI / 03 – PF / 04 – PR / 06 – CR / 11 – GA / 08 – OP / 10 – RE / 16 – PP / 17 – CO / 12 - TX

## Agenda de vencimientos

Se corresponde con el reporte de información financiera Detalle de vencimientos

Directorio por defecto: \DATANET\FTP\REC\MOVIMIEN.

Nombre del rchive: DNAGEN.DAT

### Parámetros recibidos

Banco/Todos

Fecha desde

Fecha hasta

Se incluyen los registros de AGENDAS para el banco elegido (o para todos los bancos habilitados para el operador) que tengan AGEN_FECVTO en el rango de fechas solicitados

### Formato del archivo

#### Registro inicial

| Tipo de registro | X(1) | Valor ‘I’ |
| --- | --- | --- |
| Nro. Cliente | X(7) | CLIENTES.CLI_INT_ID |
| Fecha proceso | X(8) | CURRENT – DDMMAA |
| Filler | X(34) | BLANCOS |

#### Registro de datos

| Tipo de registro | X(1) | Valor ‘A’ |
| --- | --- | --- |
| Código de banco | 9(3) | AGENDAS.AGEN_CODBAN |
| Tipo de cuenta | 9(2) | CUENTA_TIPO.T_CTA_NRO.DN para CUENTA_TIPO.T_CTA_DESCRIP = AGENDAS.AGEN_TIPCUE |
| Cuenta Datanet | 9(2) | CUENTAS.CTA_NRO_CTA_CORTO  para<br>(AGENDAS.AGEN_CODBAN = BANCOS.BCO_IDBCO y<br>BANCOS.BCO_ID = SUCURSALES.BCO_ID y<br>SUCURSALES.CODSUC_ID = CUENTAS.CODSUC_ID ) y<br>(AGENDAS.AGEN_TIPCUE =CUENTA_TIPO.T_CTA_DESCRIP y<br>CUENTA_TIPO.T_CTA_ID = CUENTAS.T_CTA_ID) y<br>(AGENDAS.AGEN_CODMON = CUENTA_MONEDA.M_CTA_DESCRIP y<br>CUENTA_MONEDA.M_CTA_ID = CUENTAS.M_CTA_ID)  y<br>AGENDAS.AGEN.NUMCTA = CUENTAS.CTA_NRO_CTA |
| Fecha vencim. | 9(8) | AGENDAS.AGEN_FECVTO |
| Código moneda | X(3) | AGENDAS.AGEN_CODMON |
| Débito / Crédito | X(1) | AGENDAS.AGEN_DEBCRE |
| Importe | 9(13)v99 | AGENDAS.AGEN_IMPORT |
| Leyenda | X(10) | AGENDAS.AGEN_LEYEND |
| Nro. de Cuenta Largo DN | X(17) | CUENTAS.CTA_NRO_CTA / AGENDAS.AGEN_NUMCTA |
| Tipo-Moneda DN | 9(2) | CUENTA_MON_TIPO.MT_CTA_NRO_DN |
| Filler | X(16) | BLANCOS |

#### Registro Final

| Tipo de registro | X(1) | Valor ‘F’ |
| --- | --- | --- |
| Filler | X(3) | BLANCOS |
| Cant. Registros | 9(6) | Cantidad de registros tipos 'A' |
| Filler | 9(6) | 0 |
| Filler | X(34) | BLANCOS |

## Cobranzas

Se corresponde con los reportes de información financiera Cobranzas por Fecha de Acreditacion - Detalle Banco y Cobranzas por Fecha de Ingreso - Detalle Banco

Directorio por defecto: \DATANET\FTP\REC\MOVIMIEN.

Nombre del archivo: DNCOBR.DAT

### Parámetros recibidos

Banco / Todos

Moneda: $ o USD

Cuenta: uno o todas

Nro. Cheque (optativo)

Fecha emisión / Pago: E o P

Fecha ingreso / Acreditación: I o A

Fecha desde (optativo)

Fecha hasta

Importe desde (optativo)

Importe hasta (optativo)

Sucursal (optativo)

Clearing (optativo)

Cliente (optativo)

Tipo de movimiento: D o C (optativo)

Para cada Banco/Moneda/Cuenta se debe incluir el registro correspondientes de la vista DACBR1 (la condicion de esta vista es que el campo dacbr_is_last_gral  se encuentre en ‘Y’)con:

Si Nro. Cheque fue informado tiene que ser igual a DACBR1.DACBR1_NRO_CHEQUE

Si eligió fecha de ingreso (emisión)

DACBR1.DACBR1_FECHA_IN:

Si fecha desde fue informada, debe estar en el rango solicitado

Si solo se informó la fecha hasta, debe ser menor o igual que esta

Si eligió fecha de acreditación (pago)

DACBR1.DACBR1_FECHA_CR:

Si fecha desde fue informada, debe estar en el rango solicitado

Si solo se informó la fecha hasta, debe ser menor o igual que esta

DACBR1.DACBR1_IMPORTE:

Si ambos importes fueron informados, debe estar en el rango solicitado

Si solo se informó el importe desde, debe ser mayor o igual que este

Si solo se informó el importe hasta, debe ser menor o igual que este

Si Sucursal fue informado tiene que ser igual a DACBR1.DACBR1_SUCURSAL

Si Clearing fue informado tiene que ser igual a DACBR1.DACBR1_FORMA_DE_PAGO

Si Cliente fue informado tiene que ser igual a DACBR1.DACBR1_NRO_CLIENTE

Si Tipo de Movimiento fue informado DACBR1.DACBR1_IMPORTE debe ser:

Mayor o igual a 0 si se informó D

Menor a 0 si se informó C

### Formato del archivo

#### Registro Inicial

| Tipo de registro | X(1) | Valor ‘I’ |
| --- | --- | --- |
| Nro. De Cliente | X(7) | CLIENTES.CLI_INT_ID |
| Fecha de proceso | X(8) | CURRENT - AAAAMMDD |
| Filler | X(64) | BLANCOS |

#### Registro de Datos

| Tipo de registro | X(01) | Valor 'C' |
| --- | --- | --- |
| Codigo de Banco | 9(03) | DACBR1.DACBR1_BANK |
| Cuenta Datanet | 9(02) | CUENTAS.CTA_NRO_CTA_CORTO  para<br>(DACBR1.DACBR1_BANK = BANCOS.BCO_IDBCO y<br>BANCOS.BCO_ID = SUCURSALES.BCO_ID y<br>SUCURSALES.CODSUC_ID = CUENTAS.CODSUC_ID ) y<br>(CUENTA_TIPO.T_CTA_DESCRIP = 'CO' y<br>CUENTA_TIPO.T_CTA_ID = CUENTAS.T_CTA_ID) y<br>(DACBR1.DACBR1_MONEDA = CUENTA_MONEDA.M_CTA_DESCRIP y<br>CUENTA_MONEDA.M_CTA_ID = CUENTAS.M_CTA_ID)  y<br>DACBR1.DACBR1_NRO_CUENTA = CUENTAS.CTA_NRO_CTA |
| Cuenta Banco | X(17) | DACBR1.DACBR1_NRO_CUENTA |
| Cod. de moneda | X(03) | DACBR1.DACBR1_MONEDA |
| Fecha de acreditacion | 9(08) | DACBR1.DACBR1_FECHA_CR |
| Cod. de sucursal | 9(03) | DACBR1.DACBR1_SUCURSAL |
| Fecha de ingreso | 9(08) | DACBR1.DACBR1_FECHA_IN |
| Nro de factura | X(16) | DACBR1.DACBR1_FACTURA |
| Nro de cliente | X(10) | DACBR1.DACBR1_NRO_CLIENTE |
| Nombre de cliente | X(24) | DACBR1.DACBR1_NOM_CLIENTE |
| Nro de cheque | 9(04) | DACBR1.DACBR1_NRO_CHEQUE |
| Clearing | 9(01) | DACBR1.DACBR1_FORMA_DE_PAGO |
| Importe | 9(16)V99 | DACBR1.DACBR1_IMPORTE |
| Debito o credito | X(01) | Si DACBR1.DACBR1_IMPORTE &gt;=0 'C' sino 'D' |
| Free format | X(79) |  |
| Tipo-Moneda DN | 9(2) | CUENTA_MON_TIPO.MT_CTA_NRO_DN |
| Filler | X(20) | BLANCOS |

La longitud del registro es de 220 caracteres.

#### Registro Final

| Tipo de Registro | X(1) | Valor ‘F’ |
| --- | --- | --- |
| Filler | X(3) | BLANCO |
| Cant.registros | 9(6) | Cantidad de registro 'C' |
| Filler | X(70) | BLANCO |

## Consolidado de Saldos

Se corresponde con el reporte de información financiera Consolidado de saldos

Todo tipo de cuenta (CC$, CCU$S, CA$, CAU$S, CCEUR, CAEUR)

### Parámetros recibidos

Banco: uno, varios o Todos

Tipo de Cuenta: CC o CA o Ambas

Moneda: $ o USD o EUR o Todas

Cuit/Denominación: uno, alguno o todos

O

Cuenta/cbu/cuit/denominación/banco

### Formato del archivo

#### Registro inicial

| Tipo de Registro | X(1) | Valor ‘I’ |
| --- | --- | --- |
| Nro de Cliente | X(7) | CLIENTES.CLI_INT_ID |
| Fecha proceso | X(8) | CURRENT - AAAAMMDD |
| Filler | X(64) | BLANCOS |

#### Registro de Datos:

Cuentas Corrientes

| Tipo de Registro | X(1) | Valor ‘S’ |
| --- | --- | --- |
| Tipo Cuenta | X(2) | CC |
| Código de Banco | 9(3) | SALDOS.SALDOS_CODBAN |
| Moneda | X(3) | SALDOS.SALDOS_CODMON  ‘$’, ‘U$S’, ‘EUR‘ |
| Nro cuenta largo DN | 9(17) | CUENTAS.CTA_NRO_CTA /SALDOS.SALDOS_NUMCTA |
| CBU | 9(22) | CUENTAS.CTA_CBU |
| CUIT | 9(11) | CUENTAS.CTA_CUIT |
| Denominacion | X(40) | CUENTASCTA_DENOMIN |
| Deu/Acre Sdo.con. | X(1) | Para SALCTE.SALCTE_SALCON &gt;= 0 : 'C' sino 'D' |
| Saldo contable | 9(15)v99 | ABS(SALCTE.SALCTE_SALCON) |
| Deu/Acre Sdo.ini | X(1) | Para SALCTE.SALCTE_SALINI &gt;= 0 : 'C' sino 'D' |
| Saldo inicio | 9(15)v99 | ABS(SALCTE.SALCTE_SALINI) |
| Debitos | 9(15)v99 | SALCTE_CHEPAG+SALCTE_OTRDEB |
| Creditos | 9(15)v99 | SALCTE_OTRCRE+SALCTE_DEPEFE |
| Deu/Acre Sdo.ope | X(1) | Para SALCTE.SALCTE_SALOPE &gt;= 0 : 'C' sino 'D' |
| Saldo Operativo | 9(15)v99 | ABS(SALCTE.SALCTE_SALOPE) |
| Debito proyeccion 24 hs. | 9(15)v99 | ABS(SALCTE.SALCTE_DEBI48) |
| Crédito proyeccion 24 hs. | 9(15)v99 | SALCTE.SALCTE_ CR24ON + SALCTE.SALCTE_ CR2448 + SALCTE.SALCTE_ CR2472 + SALCTE.SALCTE_ CREHOY + SALCTE.SALCTE_ CR2436 |
| Deu/Acre Proy 24 hs | X(1) | Para Proyeccion  24 hs &gt;= 0 : 'C' sino 'D' |
| Proyeccion 24hs | 9(15)v99 | ABS(SALCTE.SALCTE_SALOPE –ABS(SALCTE.SALCTE_DEBI48) +CREDITO PROY) |
| Debito Proyeccion 48 hs | 9(15)v99 | ABS(SALCTE.SALCTE_TODB72) |
| Credito proyeccion . 48 hs. | 9(15)v99 | SALCTE.SALCTE_CR4848 + SALCTE.SALCTE_ CR4872 +<br>SALCTE.SALCTE_ CR48XX |
| Deu/Acre Proy 48 hs | X(1) | Para Proyeccion  48 hs &gt;= 0 : 'C' sino 'D' |
| Proyeccion 48hs | 9(15)v99 | ABS(SALCTE.SALCTE_SALOPE– ABS(SALCTE.SALCTE_TODB72)+CREDITO PROY) |
| Filler | X(9) | BLANCOS |

Caja de Ahorro:

| Tipo de Registro | X(1) | Valor ‘S’ |
| --- | --- | --- |
| Tipo Cuenta | X(2) | CA |
| Código de Banco | 9(3) | AHOSAL.AHOSAL_CODBAN |
| Moneda | X(3) | AHOSAL.AHOSAL_CODMON (‘$’, ‘U$S’, ‘EUR‘ (si es pesos queda en el centro de los 3 caracteres)) |
| Nro cuenta largo DN | 9(17) | CUENTAS.CTA_NRO_CTA /AHOSAL.AHOSAL_NUMCTA |
| CBU | 9(22) | CUENTAS.CTA_CBU |
| CUIT | 9(11) | CUENTAS.CTA_CUIT |
| Denominacion | X(40) | CUENTASCTA_DENOMIN |
| Deu/Acre Sdo.con. | X(1) | Para SALAHO. SALAHO_SALCON &gt;= 0 : 'C' sino 'D' |
| Saldo contable | 9(15)v99 | ABS(SALAHO. SALAHO _SALCON) |
| Deu/Acre Sdo.ini | X(1) | Para SALAHO. SALAHO _SALINI &gt;= 0 : 'C' sino 'D' |
| Saldo inicio | 9(15)v99 | ABS(SALAHO. SALAHO _SALINI) |
| Debitos | 9(15)v99 | SALAHO_OTRDEB |
| Creditos | 9(15)v99 | SALAHO_OTRCRE+ SALAHO_DEPEFE |
| Deu/Acre Sdo.dis | X(1) | Para SALAHO. SALAHO _SALDIS &gt;= 0 : 'C' sino 'D' |
| Saldo Operativo | 9(15)v99 | ABS(SALAHO. SALAHO _SALDIS) |
| Debito proyeccion 24 hs. | 9(15)v99 | ABS(SALAHO. SALAHO _DEBI48) |
| Crédito proyeccion 24 hs. | 9(15)v99 | SALAHO. SALAHO _ CR24ON + SALAHO. SALAHO _ CR2448 + SALAHO. SALAHO _ CR2472 + SALAHO. SALAHO _ CR2436+SALAHO_CR24XX |
| Deu/Acre Proy 24 hs | X(1) | Para Proyeccion  24 hs &gt;= 0 : 'C' sino 'D' |
| Proyeccion 24hs | 9(15)v99 | ABS(SALAHO. SALAHO _SALDIS– ABS(SALAHO. SALAHO _DEBI48)+CREDITO PROY) |
| Debito Proyeccion 48 hs | 9(15)v99 | ABS(SALAHO. SALAHO _TODB72) |
| Credito proyección . 48hs. | 9(15)v99 | SALAHO. SALAHO _CR4848 + SALAHO. SALAHO _ CR4872 +<br>SALAHO. SALAHO _ CR48XX |
| Deu/Acre Proy 48 hs | X(1) | Para Proyeccion  48 hs &gt;= 0 : 'C' sino 'D' |
| Proyeccion 48hs | 9(15)v99 | ABS(SALAHO. SALAHO _SALDIS– ABS(SALAHO. SALAHO _TODB72)+CREDITO PROY) |
| Filler | X(9) | BLANCOS |

#### Registro Final

| Tipo de Registro | X(1) | Valor ‘F’ |
| --- | --- | --- |
| Reg. correctos | 9(6) | Cantidad de registros 'S' |
| Filler | X(73) | BLANCOS |

## Disponibilidades

Se corresponde con el reporte de información financiera Disponibilidades.

Directorio por defecto: \DATANET\FTP\REC\MOVIMIEN.

Cta. Cte. en $		Archivo: DNCCDI.DAT

Cja. Ahorro en $	Archivo: DNAHDI.DAT

Cta. Cte. en U$S	Archivo: ADCDDI.DAT

Cja. Ahorro en U$S	Archivo: DNADDI.DAT

### Parámetros recibidos

Banco / Todos

Tipo de Cuenta : CC o CA

Moneda: $ o USD

Cuenta: uno o todas

Para cada Banco/Tipo/Moneda/Cuenta se debe incluir el registro correspondientes de SALDOS / SALCTE o AHOSAL / SALAHO según corresponda a Cta. Cte. o Caja de Ahorro.

### Formato del archivo

#### Registro inicial

| Tipo de Registro | X(1) | Valor ‘I’ |
| --- | --- | --- |
| Nro de Cliente | X(7) | CLIENTES.CLI_INT_ID |
| Fecha proceso | X(8) | CURRENT - AAAAMMDD |
| Filler | X(64) | BLANCOS |

#### Registro de Datos:

Cuenta Corriente:

| Tipo de Registro | X(1) | Valor ‘S’ |
| --- | --- | --- |
| Código de Banco | 9(3) | SALDOS.SALDOS_CODBAN |
| Cuenta Datanet | 9(2) | CUENTAS.CTA_NRO_CTA_CORTO  para<br>(SALDOS.SALDOS_CODBAN = BANCOS.BCO_IDBCO y<br>BANCOS.BCO_ID = SUCURSALES.BCO_ID y<br>SUCURSALES.CODSUC_ID = CUENTAS.CODSUC_ID ) y<br>(SALDOS.SALDOS_TIPO = CUENTA_TIPO.T_CTA_DESCRIP y<br>CUENTA_TIPO.T_CTA_ID = CUENTAS.T_CTA_ID ) y<br>(SALDOS.SALDOS_CODMON = CUENTA_MONEDA.M_CTA_DESCRIP y<br>CUENTA_MONEDA.M_CTA_ID = CUENTAS.M_CTA_ID)  y<br>SALDOS.SALDOS_NUMCTA = CUENTAS.CTA_NRO_CTA |
| Código de Moneda | X(3) | SALDOS.SALDOS_CODMON |
| Deu/Acre Sdo.con. | X(1) | Para SALCTE.SALCTE_SALCON &gt;= 0 : 'C' sino 'D' |
| Saldo contable | 9(13)v99 | ABS(SALCTE.SALCTE_SALCON) |
| Deu/Acre Sdo.ini | X(1) | Para SALCTE.SALCTE_SALINI &gt;= 0 : 'C' sino 'D' |
| Saldo inicio Día | 9(13)v99 | ABS(SALCTE.SALCTE_SALINI) |
| Deu/Acre Sdo.ope | X(1) | Para SALCTE.SALCTE_SALOPE &gt;= 0 : 'C' sino 'D' |
| Saldo Operativo | 9(13)v99 | ABS(SALCTE.SALCTE_SALOPE) |
| Tot. Déb. 24 hs. | 9(13)v99 | ABS(SALCTE.SALCTE_DEBHOY) |
| Tot. Déb. 48 hs. | 9(13)v99 | ABS(SALCTE.SALCTE_DEBI48) |
| Tot. Déb. 72 hs. | 9(13)v99 | ABS(SALCTE.SALCTE_TODB72) |
| Tot. Déb. 96 hs. | 9(13)v99 | ABS(SALCTE.SALCTE_TODB96) |
| Tot. Créd. 24 hs. | 9(13)v99 | SALCTE.SALCTE_ CR24ON + SALCTE.SALCTE_ CR2448 + SALCTE.SALCTE_ CR2472 + SALCTE.SALCTE_ CREHOY + SALCTE.SALCTE_ CR2436 |
| Tot. Créd. 48 hs. | 9(13)v99 | SALCTE.SALCTE_CR4848 + SALCTE.SALCTE_ CR4872 +<br>SALCTE.SALCTE_ CR48XX |
| Tot. Créd. 72 hs. | 9(13)v99 | SALCTE.SALCTE_TOCR72 |
| Tot. Créd. 96 hs. | 9(13)v99 | SALCTE.SALCTE_TOCR96 |
| Total Acuerdos | 9(13)v99 | SALCTE.SALCTE_TOTACU |
| Nro. de Cuenta Largo DN | X(17) | CUENTAS.CTA_NRO_CTA /SALDOS.SALDOS_NUMCTA |
| Tipo-Moneda DN | 9(2) | CUENTA_MON_TIPO.MT_CTA_NRO_DN |
| Filler | X(29) | BLANCOS |

Caja de Ahorro:

| Tipo de Registro | X(1) | Valor ‘S’ |
| --- | --- | --- |
| Código de Banco | 9(3) | AHOSAL.AHOSAL_CODBAN |
| Cuenta Datanet | 9(2) | CUENTAS.CTA_NRO_CTA_CORTO  para<br>(AHOSAL.AHOSAL_CODBAN = BANCOS.BCO_IDBCO y<br>BANCOS.BCO_ID = SUCURSALES.BCO_ID y<br>SUCURSALES.CODSUC_ID = CUENTAS.CODSUC_ID ) y<br>(AHOSAL.AHOSAL_TIPO = CUENTA_TIPO.T_CTA_DESCRIP y<br>CUENTA_TIPO.T_CTA_ID = CUENTAS.T_CTA_ID ) y<br>(AHOSAL.AHOSAL_CODMON = CUENTA_MONEDA.M_CTA_DESCRIP y<br>CUENTA_MONEDA.M_CTA_ID = CUENTAS.M_CTA_ID)  y<br>AHOSAL.AHOSAL_NUMCTA = CUENTAS.CTA_NRO_CTA |
| Código de Moneda | X(3) | AHOSAL.AHOSAL_CODMON |
| Deu/Acre Sdo.con. | X(1) | Para SALAHO.SALAHO_SALCON &gt;= 0 : 'C' sino 'D' |
| Saldo contable | 9(13)v99 | ABS(SALAHO.SALAHO_SALCON) |
| Deu/Acre Sdo.ini | X(1) | Para SALAHO.SALAHO_SALINI &gt;= 0 : 'C' sino 'D' |
| Saldo inicio Día | 9(13)v99 | ABS(SALAHO.SALAHO_SALINI) |
| Deu/Acre Sdo.ope | X(1) | Para SALAHO.SALAHO_SALDIS &gt;= 0 : 'C’ sino 'D' |
| Saldo Operativo | 9(13)v99 | ABS(SALAHO.SALAHO_SALDIS) |
| Tot. Déb. 24 hs. | 9(13)v99 | ABS(SALAHO.SALAHO_DEBI24) |
| Tot. Déb. 48 hs. | 9(13)v99 | ABS(SALAHO.SALAHO_DEBI48) |
| Tot. Déb. 72 hs. | 9(13)v99 | ABS(SALAHO.SALAHO_TODB72) |
| Tot. Déb. 96 hs. | 9(13)v99 | ABS(SALAHO.SALAHO_TODB96) |
| Tot. Créd. 24 hs. | 9(13)v99 | SALAHO.SALAHO_ CR24ON + SALAHO.SALAHO_ CR2448 + SALAHO.SALAHO_ CR2472 + SALAHO.SALAHO_ CR24XX + SALAHO.SALAHO_ CR2436 |
| Tot. Créd. 48 hs. | 9(13)v99 | SALAHO.SALAHO_CR4848 + SALAHO.SALAHO_ CR4872 +<br>SALAHO.SALAHO_ CR48XX + SALAHO.SALAHO_ CR4836 |
| Tot. Créd. 72 hs. | 9(13)v99 | SALAHO.SALAHO_TOCR72 |
| Tot. Créd. 96 hs. | 9(13)v99 | SALAHO.SALAHO_TOCR96 |
| Total Acuerdos | 9(13)v99 | SALAHO.SALAHO_SALIND |
| Nro. de Cuenta Largo DN | X(17) | CUENTAS.CTA_NRO_CTA /AHOSAL.AHOSAL_NUMCTA |
| Tipo-Moneda DN | 9(2) | CUENTA_MON_TIPO.MT_CTA_NRO_DN |
| Filler | X(29) | BLANCOS |

#### Registro Final

| Tipo de Registro | X(1) | Valor ‘F’ |
| --- | --- | --- |
| Filler | X(3) | BLANCOS |
| Reg. correctos | 9(6) | Cantidad de registros 'S' |
| Filler | X(70) | BLANCOS |

## Movimientos a Conformar Hoy

Se corresponde con el reporte de información financiera con el mismo nombre

Directorio por defecto: \DATANET\FTP\REC\MOVIMIEN.

Cta. Cte. en $		Archivo: DNCCPCH.DAT

Cja. Ahorro en $	Archivo: DNAHPCH.DAT

Cta, Cte. en U$S	Archivo: DNCCDCH.DAT

Cja. Ahorro en U$S	Archivo: DNAHDCH.DAT

### Parámetros recibidos

Banco / Todos

Tipo de Cuenta : CC o CA

Moneda: $ o USD

Cuenta: uno o todas

### Formato del archivo

#### Registro inicial

| Tipo de Registro | X(1) | Valor ‘I’ |
| --- | --- | --- |
| Nro de Cliente | X(7) | CLIENTES.CLI_INT_ID |
| Fecha de Imputación | X(8) | CURRENT – DDMMAA. Sería la Fecha del Día |
| Filler | X(64) | BLANCOS |

#### Registro de Datos

| Tipo de registro | X(01) | Valor 'N' |
| --- | --- | --- |
| Codigo de banco | 9(03) | MOVDIF.MOVDIF_CODBAN |
| Cuenta Datanet | 9(02) | CUENTAS.CTA_NRO_CTA_CORTO  para<br>(MOVDIF.MOVDIF_CODBAN = BANCOS.BCO_IDBCO y<br>BANCOS.BCO_ID = SUCURSALES.BCO_ID y<br>SUCURSALES.CODSUC_ID = CUENTAS.CODSUC_ID ) y<br>(MOVDIF.MOVDIF_TIPO = CUENTA_TIPO.T_CTA_DESCRIP y<br>CUENTA_TIPO.T_CTA_ID = CUENTAS.T_CTA_ID ) y<br>(MOVDIF.MOVDIF_CODMON = CUENTA_MONEDA.M_CTA_DESCRIP y<br>CUENTA_MONEDA.M_CTA_ID = CUENTAS.M_CTA_ID)  y<br>MOVDIF.MOVDIF_NUMCTA = CUENTAS.CTA_NRO_CTA |
| Fecha de imputacion | 9(08) | MOVDIF.MOVDIF_FECIMP<br>Sería la fecha del día |
| Debito/credito | X(01) | MOVDIF.MOVDIF_DEBCRE |
| Importe | 9(15)V99 | MOVDIF.MOVDIF_IMPORT |
| Nro de comprobante | 9(12) | MOVDIF.MOVDIF_NROCOM |
| Codigo de movimiento | X(03) | MOVDIF.MOVDIF_CODOPE |
| Cantidad de movimientos | 9(02) | MOVDIF.MOVDIF_CANMOV |
| Sucursal origen del movimiento | X(05) | MOVDIF.MOVDIF_SUCORI |
| Codigo depositante | X(08) | MOVDIF.MOVDIF_DEPOSI |
| Marca de contraasiento | X(01) | MOVDIF.MOVDIF_CONTRA |
| Informacion libre | X(25) | MOVDIF.MOVDIF_DESCRI |
| Nro. de Cuenta Largo DN | X(17) | CUENTAS.CTA_NRO_CTA /MOVDIF.MOVDIF_NUMCTA |
| Tipo-Moneda DN | 9(2) | CUENTA_MON_TIPO.MT_CTA_NRO_DN |
| Filler | X(23) | BLANCOS |

Si la descarga incluye la opción PCC (Plan de Cuentas Contable) los registros “N” pasan a tener una longitud de 200 posiciones, modificándose de la siguiente manera:

| … | … | … |
| --- | --- | --- |
| Informacion libre | X(25) | MOVDIF.MOVDIF_DESCRI |
| PCC | X(11) | CODPCC_PCC.CODOPE_ID |
| Nro. de Cuenta Largo DN | X(17) | CUENTAS.CTA_NRO_CTA /MOVDIF.MOVDIF_NUMCTA |
| Tipo-Moneda DN | 9(2) | CUENTA_MON_TIPO.MT_CTA_NRO_DN |
| Filler | X(82) | BLANCOS |

#### Registro Final

| Tipo de Registro | X(1) | Valor ‘F’ |
| --- | --- | --- |
| Filler | X(3) | BLANCOS |
| Cant.Registros | 9(6) | Cantidad de registros 'N' |
| Filler | X(70) | BLANCOS |

## Movimientos diferidos

Se corresponde con el reporte de información financiera con el mismo nombre

Directorio por defecto: \DATANET\FTP\REC\MOVIMIEN.

Cta. Cte. en $		Archivo: DNCCPF.DAT

Cja. Ahorro en $	Archivo: DNAHPF.DAT

Cta, Cte. en U$S	Archivo: DNCCDF.DAT

Cja. Ahorro en U$S	Archivo: DNAHDF.DAT

### Parámetros recibidos

Banco / Todos

Tipo de Cuenta : CC o CA

Moneda: $ o USD

Cuenta: uno o todas

Fecha desde

Fecha hasta

Para cada Banco/Tipo/Moneda/Cuenta se debe incluir el registro correspondientes de MOVDIF con MOVDIF.MOVDIF_FECIMP dentro del rango de fechas solicitado.

### Formato del archivo

#### Registro inicial

| Tipo de Registro | X(1) | Valor ‘I’ |
| --- | --- | --- |
| Nro de Cliente | X(7) | CLIENTES.CLI_INT_ID |
| Fecha proceso | X(8) | CURRENT - DDMMAA |
| Filler | X(64) | BLANCOS |

#### Registro de Datos

| Tipo de registro | X(01) | Valor 'N' |
| --- | --- | --- |
| Codigo de banco | 9(03) | MOVDIF.MOVDIF_CODBAN |
| Cuenta Datanet | 9(02) | CUENTAS.CTA_NRO_CTA_CORTO  para<br>(MOVDIF.MOVDIF_CODBAN = BANCOS.BCO_IDBCO y<br>BANCOS.BCO_ID = SUCURSALES.BCO_ID y<br>SUCURSALES.CODSUC_ID = CUENTAS.CODSUC_ID ) y<br>(MOVDIF.MOVDIF_TIPO = CUENTA_TIPO.T_CTA_DESCRIP y<br>CUENTA_TIPO.T_CTA_ID = CUENTAS.T_CTA_ID ) y<br>(MOVDIF.MOVDIF_CODMON = CUENTA_MONEDA.M_CTA_DESCRIP y<br>CUENTA_MONEDA.M_CTA_ID = CUENTAS.M_CTA_ID)  y<br>MOVDIF.MOVDIF_NUMCTA = CUENTAS.CTA_NRO_CTA |
| Fecha de imputacion | 9(08) | MOVDIF.MOVDIF_FECIMP |
| Fecha de proceso. | 9(08) | MOVDIF.MOVDIF_FECPRO |
| Debito/credito | X(01) | MOVDIF.MOVDIF_DEBCRE |
| Importe | 9(15)V99 | MOVDIF.MOVDIF_IMPORT |
| Nro de comprobante | 9(12) | MOVDIF.MOVDIF_NROCOM |
| Codigo de movimiento | X(03) | MOVDIF.MOVDIF_CODOPE |
| Cantidad de movimientos | 9(02) | MOVDIF.MOVDIF_CANMOV |
| Sucursal origen del movimiento | X(05) | MOVDIF.MOVDIF_SUCORI |
| Codigo depositante | X(08) | MOVDIF.MOVDIF_DEPOSI |
| Marca de contraasiento | X(01) | MOVDIF.MOVDIF_CONTRA |
| Informacion libre | X(25) | MOVDIF.MOVDIF_DESCRI |
| Código de operación informado por el Banco | X(5) |  |
| Nro. de Cuenta Largo DN | X(17) | CUENTAS.CTA_NRO_CTA /MOVDIF.MOVDIF_NUMCTA |
| Tipo-Moneda DN | 9(2) | CUENTA_MON_TIPO.MT_CTA_NRO_DN |
| Filler | X(10) | BLANCOS |

Si la descarga incluye la opción PCC (Plan de Cuentas Contable) los registros “N” pasan a tener una longitud de 200 posiciones, modificándose de la siguiente manera:

| … | … | … |
| --- | --- | --- |
| Informacion libre | X(5) | MOVDIF.MOVDIF_DESCRI |
| PCC | X(11) | CODPCC_PCC.CODOPE_ID |
| Nro. de Cuenta Largo DN | X(17) | CUENTAS.CTA_NRO_CTA /MOVDIF.MOVDIF_NUMCTA |
| Tipo-Moneda DN | 9(2) | CUENTA_MON_TIPO.MT_CTA_NRO_DN |
| Filler | X(69) | BLANCOS |

#### Registro Final

| Tipo de Registro | X(1) | Valor ‘F’ |
| --- | --- | --- |
| Filler | X(3) | BLANCOS |
| Cant.Registros | 9(6) | Cantidad de registros 'N' |
| Filler | X(70) | BLANCOS |

## Movimientos del día

Se corresponde con el reporte de información financiera con el mismo nombre.

Directorio por defecto: \DATANET\FTP\REC\MOVIMIEN.

Cta. Cte. en $		Archivo: DNCCHY.DAT

Cja. Ahorro en $	Archivo: DNCAHY.DAT

Cta. Cte. en U$S	Archivo: ADCDHY.DAT

Cja. Ahorro en U$S	Archivo: DNADHY.DAT

### Parámetros recibidos

Banco / Todos

Tipo de Cuenta : CC o CA

Moneda: $ o USD

Cuenta: uno o todas

Para cada Banco/Tipo/Moneda/Cuenta se debe incluir el registro correspondientes de MOVHOY para MOVHOY.MOVHOY_FECPRO es igual a la fecha del día.

### Formato del archivo

#### Registro inicial

| Tipo de Registro | X(1) | Valor ‘I’ |
| --- | --- | --- |
| Nro de Cliente | X(7) | CLIENTES.CLI_INT_ID |
| Fecha proceso | X(8) | CURRENT - DDMMAA |
| Filler | X(64) | BLANCOS |

#### Registro de Datos

| Tipo de registro | X(01) | Valor 'Y' |
| --- | --- | --- |
| Codigo de banco | 9(03) | MOVHOY.MOVHOY_CODBAN |
| Cuenta Datanet | 9(02) | CUENTAS.CTA_NRO_CTA_CORTO  para<br>(MOVHOY.MOVHOY_CODBAN = BANCOS.BCO_IDBCO y<br>BANCOS.BCO_ID = SUCURSALES.BCO_ID y<br>SUCURSALES.CODSUC_ID = CUENTAS.CODSUC_ID ) y<br>(MOVHOY.MOVHOY_TIPO = CUENTA_TIPO.T_CTA_DESCRIP y<br>CUENTA_TIPO.T_CTA_ID = CUENTAS.T_CTA_ID ) y<br>(MOVHOY.MOVHOY_CODMON = CUENTA_MONEDA.M_CTA_DESCRIP y<br>CUENTA_MONEDA.M_CTA_ID = CUENTAS.M_CTA_ID)  y<br>MOVHOY.MOVHOY_NUMCTA = CUENTAS.CTA_NRO_CTA |
| Hora del movimiento | 9(07) | MOVHOY.MOVHOY_HORMOV |
| Importe | 9(15)V99 | MOVHOY.MOVHOY_IMPORT |
| Debito/credito | X(01) | MOVHOY.MOVHOY_DEBCRE |
| Nro de comprobante | 9(12) | MOVHOY.MOVHOY_NROCOM |
| Codigo de operacion | X(03) | MOVHOY.MOVHOY_CODOPE |
| Sucursal de origen | X(05) | MOVHOY.MOVHOY_SUCORI |
| Codigo de depositante | X(08) | MOVHOY.MOVHOY_DEPOSI |
| Informacion  libre | X(25) | MOVHOY.MOVHOY_DESCRI |
| Código de operación informado por el Banco | X(5) |  |
| Nro. de Cuenta Largo DN | X(17) | CUENTAS.CTA_NRO_CTA /MOVHOY.MOVHOY_NUMCTA |
| Tipo-Moneda DN | 9(2) | CUENTA_MON_TIPO.MT_CTA_NRO_DN |
| Filler | X(12) | BLANCOS |

Si la descarga incluye la opción PCC (Plan de Cuentas Contable) los registros “N” pasan a tener una longitud de 200 posiciones, modificándose de la siguiente manera:

| … | … | … |
| --- | --- | --- |
| Código de operación informado por el Banco | X(5) |  |
| PCC | X(11) | CODPCC_PCC.CODOPE_ID |
| Nro. de Cuenta Largo DN | X(17) | CUENTAS.CTA_NRO_CTA / MOVHOY.MOVHOY_NUMCTA |
| Tipo-Moneda DN | 9(2) | CUENTA_MON_TIPO.MT_CTA_NRO_DN |
| Filler | X(81) | BLANCOS |

#### Registro Final

| Tipo de Registro | X(1) | Valor ‘F’ |
| --- | --- | --- |
| Filler | X(3) | BLANCOS |
| Cant.Registros | 9(6) | Cantidad de registros 'Y' |
| Filler | X(70) | BLANCOS |

## Movimientos y Saldos

### Parámetros recibidos

Banco / Todos

Tipo de Cuenta : CC o CA

Moneda: $ o USD

Cuenta: uno o todas

Fecha desde

Fecha hasta

Movimientos fecha valor: S/N

Tipo de Descarga (ASCII o CSV)

Descarga con Plan de Cuentas Contables

Descarga con CBU, Cuit/Cuil y Denominación

### Formato ASCII (descarga .DAT)

Se corresponde con el reporte de información financiera Extracto

Directorio por defecto: \DATANET\FTP\REC\MOVIMIEN.

Cta. Cte. en $		Archivo: DNCTAS.DAT

Cja. Ahorro en $	Archivo: DNAHMS.DAT

Cta. Cte. en U$S	Archivo: DNCCDO.DAT

Cja. Ahorro en U$S	Archivo: DNCADO.DAT

Para cada Banco/Tipo/Moneda/Cuenta se debe incluir:

Registros H: Los registro de SALHIS_PDIA que tengan SALHISPD_FECDIA en el rango Fecha desde - 1 habil y Fecha hasta.

Registros M:	Los registros de MOVCUE que tengan MOVCUE_FECMOV en el rango de fechas solicitado.

Registros V:	Los registros de MOVCUE que cumplan con las siguientes condiciones:

MOVCUE_FECPRO &lt;&gt; MOVCUE_FECMOV

MOVCUE_FECPRO se encuentra en el rango de fechas solicitado

MOVCUE_FECMOV se encuetra fuera del rango de fechas solicitado

### Formato del archivo

#### Registro Inicial

| Tipo de Registro | X(1) | Valor ‘I’ |
| --- | --- | --- |
| No de Cliente | X(7) | CLIENTES.CLI_INT_ID |
| Fecha proceso | X(8) | CURRENT - AAAAMMDD |
| Nombre Archivo | X(11) | (*) Nombre de archivo |
| Filler | X(58) | BLANCOS |

(*) Nombre Archivo: esta conformado por

Nombre original + (pcc) + (-v2)

donde

Nombre original =

Para CC $ =&gt; 'DNCTAS'

Para CC U$S =&gt; 'DNCCDO'

Para CA $ =&gt; 'DNAHMS'

Para CA U$S =&gt; 'DNCADO'

ppc: opcional, se agrega al nombre si se elige descargar con Plan de Cuentas Contables

_v2: opcional, se agrega al nombre si se elige descargar con CBU, CUIL/CUIT y Denominación

#### Registros de Datos

Tipo de registro H

| Tipo de Registro | X(01) | Valor 'H' |
| --- | --- | --- |
| Código de Banco | 9(03) | SALHIS.SALHIS.CODBAN |
| Nro de Cuenta | 9(02) | CUENTAS.CTA_NRO_CTA_CORTO  para<br>(SALHIS.SALHIS_CODBAN = BANCOS.BCO_IDBCO y<br>BANCOS.BCO_ID = SUCURSALES.BCO_ID y<br>SUCURSALES.CODSUC_ID = CUENTAS.CODSUC_ID ) y<br>(SALHIS.SALHIS_TIPO = CUENTA_TIPO.T_CTA_DESCRIP y<br>CUENTA_TIPO.T_CTA_ID = CUENTAS.T_CTA_ID ) y<br>(SALHIS.SALHIS_CODMON = CUENTA_MONEDA.M_CTA_DESCRIP y<br>CUENTA_MONEDA.M_CTA_ID = CUENTAS.M_CTA_ID)  y<br>SALHIS.SALHIS.NUMCTA = CUENTAS.CTA_NRO_CTA |
| Fecha | 9(08) | SALHIS_PDIA.SALHISPD_FECDIA |
| Debito/Credito | X(01) | Para SALHIS_PDIA.SALHISPD_SALDIA &gt;= 0 : 'C' sino 'D' |
| Saldo | 9(15)V99 | ABS(SALHIS_PDIA.SALHISPD_SALDIA) |
| Total de Debitos | 9(15)V99 | SALHIS_PDIA.SALHISPD_TOTDEB |
| Total de Creditos | 9(15)V99 | SALHIS_PDIA.SALHISPD_TOTCRE |
| Nro. de Cuenta Largo | X(17) | CUENTAS.CTA_NRO_CTA |
| Tipo-Moneda DN | 9(2) | CUENTA_MON_TIPO.MT_CTA_NRO_DN |
| Filler | X(45) | BLANCOS |

Tipo de registro M

| Tipo de registro | X(01) | Valor 'M' |
| --- | --- | --- |
| Codigo de banco | 9(03) | MOVCUE.MOVCUE_CODBAN |
| Nro de cta corta | 9(02) | CUENTAS.CTA_NRO_CTA_CORTO  para<br>(MOVCUE.MOVCUE_CODBAN = BANCOS.BCO_IDBCO y<br>BANCOS.BCO_ID = SUCURSALES.BCO_ID y<br>SUCURSALES.CODSUC_ID = CUENTAS.CODSUC_ID ) y<br>(MOVCUE.MOVCUE_TIPO = CUENTA_TIPO.T_CTA_DESCRIP y<br>CUENTA_TIPO.T_CTA_ID = CUENTAS.T_CTA_ID ) y<br>(MOVCUE.MOVCUE_CODMON = CUENTA_MONEDA.M_CTA_DESCRIP y<br>CUENTA_MONEDA.M_CTA_ID = CUENTAS.M_CTA_ID)  y<br>MOVCUE.MOVCUE.NUMCTA = CUENTAS.CTA_NRO_CTA |
| Fecha del movimiento | 9(08) | MOVCUE.MOVCUE_FECMOV |
| Fecha valor | 9(08) | MOVCUE.MOVCUE_FECVAL |
| Debito/credito. | X(01) | MOVCUE.MOVCUE_DEBCRE |
| Importe | 9(15)V99 | MOVCUE.MOVCUE_IMPORT |
| Nro de comprobante | 9(12) | MOVCUE.MOVCUE_NROCOM |
| Codigo de operacion | X(03) | MOVCUE.MOVCUE_CODOPE |
| Fecha de proceso | X(08) | MOVCUE.MOVCUE_FECPRO |
| Filler | X(03) | BLANCOS |
| Informacion  libre | X(25) | MOVCUE.MOVCUE_DESCRI |
| Sucursal de origen | X(05) | MOVCUE.MOVCUE_SUCORI |
| Codigo de depositante | X(08) | MOVCUE.MOVCUE_DEPOSI |
| Nro. de Cuenta Largo | X(17) | CUENTAS.CTA_NRO_CTA |
| Código de operación informado por el banco | X(5) |  |
| Tipo-Moneda DN | 9(2) | CUENTA_MON_TIPO.MT_CTA_NRO_DN |
| Filler | X(2) | BLANCOS |

Tipo de registro V

| Tipo de registro | X(01) | Valor 'V' |
| --- | --- | --- |
| Codigo de banco | 9(03) | MOVCUE.MOVCUE_CODBAN |
| Nro de cta corta | 9(02) | CUENTAS.CTA_NRO_CTA_CORTO  para<br>(MOVCUE.MOVCUE_CODBAN = BANCOS.BCO_IDBCO y<br>BANCOS.BCO_ID = SUCURSALES.BCO_ID y<br>SUCURSALES.CODSUC_ID = CUENTAS.CODSUC_ID ) y<br>(MOVCUE.MOVCUE_TIPO = CUENTA_TIPO.T_CTA_DESCRIP y<br>CUENTA_TIPO.T_CTA_ID = CUENTAS.T_CTA_ID ) y<br>(MOVCUE.MOVCUE_CODMON = CUENTA_MONEDA.M_CTA_DESCRIP y<br>CUENTA_MONEDA.M_CTA_ID = CUENTAS.M_CTA_ID)  y<br>MOVCUE.MOVCUE.NUMCTA = CUENTAS.CTA_NRO_CTA |
| Fecha del movimiento | 9(08) | MOVCUE.MOVCUE_FECMOV |
| Fecha valor | 9(08) | MOVCUE.MOVCUE_FECVAL |
| Debito/credito. | X(01) | MOVCUE.MOVCUE_DEBCRE |
| Importe | 9(15)V99 | MOVCUE.MOVCUE_IMPORT |
| Nro de comprobante | 9(12) | MOVCUE.MOVCUE_NROCOM |
| Codigo de operacion | X(03) | MOVCUE.MOVCUE_CODOPE |
| Fecha de proceso | X(08) | MOVCUE.MOVCUE_FECPRO |
| Filler | X(03) | BLANCOS |
| Informacion  libre | X(25) | MOVCUE.MOVCUE_DESCRI |
| Sucursal de origen | X(05) | MOVCUE.MOVCUE_SUCORI |
| Codigo de depositante | X(08) | MOVCUE.MOVCUE_DEPOSI |
| Nro. de Cuenta Largo | X(17) | CUENTAS.CTA_NRO_CTA |
| Código de operación informado por el banco | X(5) |  |
| Tipo-Moneda DN | 9(2) | CUENTA_MON_TIPO.MT_CTA_NRO_DN |
| Filler | X(2) | BLANCOS |

Si la descarga incluye la opción PCC (Plan de Cuentas Contable) los registros “M” lo contendrán y todos los registros pasan a tener una longitud de 200 posiciones.

Los nombres de los archivos con PCC son los siguientes:

Cta. Cte. en $		Archivo: DNCTASPCC.DAT

Cja. Ahorro en $	Archivo: DNAHMSPCC.DAT

Cta. Cte. en U$S	Archivo: DNCCDOPCC.DAT

Cja. Ahorro en U$S	Archivo: DNCADOPCC.DAT

El dato PCC se visualiza en los registros que correspondan modificándose de la siguiente manera:

| … | … | … |
| --- | --- | --- |
| Código de operación informado por el banco | X(5) |  |
| PCC | X(11) | CODPCC_PCC.CODOPE_ID |
| Tipo-Moneda DN | 9(2) | CUENTA_MON_TIPO.MT_CTA_NRO_DN |
| Filler | X(61) | BLANCOS |

Si la descarga incluye la opción Descarga con CBU, Cuit/Cuil y Denominacion y no incluye PCC, todos los registros pasan a tener una longitud de 240 posiciones y los registros que contendrán esa información son los registros “M” y “V”

Los nombres de los archivos con los nuevos campos son los siguientes:

Cta. Cte. en $		Archivo: DNCTAS_V2.DAT

Cja. Ahorro en $	Archivo: DNAHMS_V2.DAT

Cta. Cte. en U$S	Archivo: DNCCDO_V2.DAT

Cja. Ahorro en U$S	Archivo: DNCADO_V2.DAT

El dato CBU, Cuit/Cuil y Denominacion  se visualizan en los registros que correspondan de la siguiente manera:

| … | … | … |
| --- | --- | --- |
| Código de operación informado por el banco | X(5) |  |
| Tipo-Moneda DN | 9(2) | CUENTA_MON_TIPO.MT_CTA_NRO_DN |
| CBU | 9(22) | MOVCUE. MOVCUE_CBU |
| CUIT/CUIL | 9(11) | MOVCUE.MOVCUE_CUIT |
| Denominación | X(40) | MOVCUE.MOVCUE_CUITDENOM |
| Filler | X(39) | BLANCOS |

Si la descarga incluye la opción Descarga con CBU, Cuit/Cuil y Denominacion e incluye PCC, todos los registros pasan a tener una longitud de 240 posiciones y los registros que contendrán esa información son los registros “M” y “V”

Los nombres de los archivos con los nuevos campos son los siguientes:

Cta. Cte. en $		Archivo: DNCTASPCC_V2.DAT

Cja. Ahorro en $	Archivo: DNAHMSPCC_V2.DAT

Cta. Cte. en U$S	Archivo: DNCCDOPCC_V2.DAT

Cja. Ahorro en U$S	Archivo: DNCADOPCC_V2.DAT

El dato CBU, Cuit/Cuil y Denominacion  se visualizan en los registros que correspondan de la siguiente manera:

| … | … | … |
| --- | --- | --- |
| Código de operación informado por el banco | X(5) |  |
| PCC | X(11) | CODPCC_PCC.CODOPE_ID |
| Tipo-Moneda DN | 9(2) | CUENTA_MON_TIPO.MT_CTA_NRO_DN |
| CBU | 9(22) | MOVCUE. MOVCUE_CBU |
| CUIT/CUIL | 9(11) | MOVCUE.MOVCUE_CUIT |
| Denominación | X(40) | MOVCUE.MOVCUE_CUITDENOM |
| Filler | X(28) | BLANCOS |

#### Registro Final

| Tipo de Registro | X(1) | Valor ‘F’ |
| --- | --- | --- |
| Filler | X(3) | BLANCOS |
| Cant. Registros H | 9(6) | Cantidad de registros 'H' |
| Cant. Registros M | 9(6) | Cantidad de registros 'M' y 'V' |
| Filler | X(64) | BLANCOS |

### Formato CSV (descarga .CSV)

Se corresponde con el reporte de información financiera Extracto

Directorio por defecto: \DATANET\FTP\REC\MOVIMIEN.

Cta. Cte. en $		Archivo: DNCTASCSV. CSV

Cja. Ahorro en $	Archivo: DNAHMSCSV. CSV

Cta. Cte. en U$S	Archivo: DNCCDOCSV. CSV

Cja. Ahorro en U$S	Archivo: DNCADOCSV. CSV

Para cada Banco/Tipo/Moneda/Cuenta se debe incluir:

Registros H: Los registro de SALHIS_PDIA que tengan SALHISPD_FECDIA en el rango Fecha desde - 1 habil y Fecha hasta.

Registros M:	Los registros de MOVCUE que tengan MOVCUE_FECMOV en el rango de fechas solicitado.

Registros V:	Los registros de MOVCUE que cumplan con las siguientes condiciones:

MOVCUE_FECPRO &lt;&gt; MOVCUE_FECMOV

MOVCUE_FECPRO se encuentra en el rango de fechas solicitado

MOVCUE_FECMOV se encuetra fuera del rango de fechas solicitado

### Formato del archivo

#### Registro Inicial

| Tipo de Registro | Valor ‘I’ |
| --- | --- |
| No de Cliente | Nro de cliente |
| Fecha proceso | – Fecha de proceso (AAAAMMDD) |
| Nombre Archivo | Para CC $ =&gt; 'DNCTASCSV' O 'DNCTASPCCCSV'<br>Para CC U$S =&gt; 'DNCCDOCSV' O 'DNCCDOPCCCSV’<br>Para CA $ =&gt; 'DNAHMSCSV' O 'DNAHMSPCCCSV'<br>Para CA U$S =&gt; 'DNCADOCSV' O 'DNCADOPCCCSV' |

#### Registros de Datos

Tipo de registro H

Titulo de la columna

| Tipo de Registro | Valor 'H' |
| --- | --- |
| Cod. Bco. | Codigo Banco |
| Nro. Cta. Corto | Nro de cuenta corto |
| Fecha Mov. | Fecha (AAAAMMDD) |
| Deb./Cred. | Marca: 'C'  o'D' |
| Saldo | Saldo |
| Total Débitos | Importe total del debito |
| Total Créditos | Importe total del crédito |
| Nro. Cta. Largo | Nro de cuenta largo |
| Tipo-Moneda DN | CUENTA_MON_TIPO.MT_CTA_NRO_DN |

Tipo de registro M

Titulo de la columna

| Tipo de Registro | Valor 'M' |
| --- | --- |
| Cod. Bco. | Código del banco |
| Nro. Cta. Corto | Nro de cuenta corto |
| Fecha Mov. | Fecha del movimiento (AAAAMMDD) |
| Fecha Valor | Fecha Valor (AAAAMMDD) |
| Deb./Cred. | Marca Debito/ Credito D o C |
| Importe | Importe |
| Nro. Comprob. | Nro de comprobante |
| Cod. Operación | Codigo de Operación |
| Fecha Proceso | Fecha de proceso (AAAAMMDD) |
| Filler | BLANCOS |
| Info Libre | Descripción que informa el banco |
| Suc. Origen | Sucursal de origen |
| Cod. depositante | Codigo de depositante |
| Nro. Cta Largo | Nro de cuenta largo |
| Cod. Ope. Bco. | Codigo de operación del banco |
| P.C.C. | Si lo incluye |
| Tipo-Moneda DN | CUENTA_MON_TIPO.MT_CTA_NRO_DN |
| CBU | Si lo incluye |
| CUIT/CUIL | Si lo incluye |
| Denominación | Si lo incluye |

Tipo de registro V

Titulo de la columna

| Tipo de Registro | Valor 'V' |
| --- | --- |
| Cod. Bco. | Codigo de banco |
| Nro. Cta. Corto | Nro de cta corto |
| Fecha Mov. | Fecha de movimiento (AAAAMMDD) |
| Fecha Valor | Fecha Valor (AAAAMMDD) |
| Deb./Cred. | Marca debito/crédito (D o C) |
| Importe | Importe |
| Nro. Comprob. | Nro de comprobante |
| Cod. Operación | Codigo de operación |
| Fecha Proceso | Fecha de proceso (AAAAMMDD) |
| Filler | BLANCOS |
| Info Libre | Descripcion que informa el banco |
| Suc. Origen | Sucursal de origen |
| Cod. Depositante | código de depositante |
| Nro. Cta. Largo | nro de cuenta largo |
| Cod. Ope. Bco. | Codigo de operación del banco |
| P.C.C. | Si lo incluye |
| Tipo-Moneda DN | CUENTA_MON_TIPO.MT_CTA_NRO_DN |
| CBU | Si lo incluye |
| CUIT/CUIL | Si lo incluye |
| Denominación | Si lo incluye |

Si la descarga incluye la opción PCC (Plan de Cuentas Contable) en los registros “H”, “M” y “V” el dato PCC se visualiza en los registros que correspondan modificándose de la siguiente manera:

| … | … |
| --- | --- |
| Código de operación informado por el banco |  |
| PCC | CODPCC_PCC.CODOPE_ID |
| Tipo-Moneda DN | CUENTA_MON_TIPO.MT_CTA_NRO_DN |

#### Si la descarga incluye la opcion Descarga con CBU, Cuit/Cuil y Denominación, se verá en los registros “M” y “V”

Los nombres de los archivos con los nuevos campos y sin PCC son los siguientes:

Cta. Cte. en $		Archivo: DNCTASCSV_V2.CSV

Cja. Ahorro en $	Archivo: DNAHMSCSV_V2.CSV

Cta. Cte. en U$S	Archivo: DNCCDOCSV_V2.CSV

Cja. Ahorro en U$S	Archivo: DNCADOCSV_V2.CSV

Si la descarga incluye la opción Descarga con CBU, Cuit/Cuil y Denominacion y no incluye PCC, se verán en el siguiente orden

| … | … |
| --- | --- |
| Código de operación informado por el banco |  |
| Tipo-Moneda DN | CUENTA_MON_TIPO.MT_CTA_NRO_DN |
| CBU | MOVCUE. MOVCUE_CBU |
| CUIT/CUIL | MOVCUE.MOVCUE_CUIT |
| Denominación | MOVCUE.MOVCUE_CUITDENOM |

#### Si la descarga incluye la opcion Descarga con CBU, Cuit/Cuil y Denominación, se verá en los registros “M” y “V”

Los nombres de los archivos con los nuevos campos y con PCC son los siguientes:

Cta. Cte. en $		Archivo: DNCTASPCCCSV_V2.CSV

Cja. Ahorro en $	Archivo: DNAHMSPCCCSV_V2.CSV

Cta. Cte. en U$S	Archivo: DNCCDOPCCCSV_V2.CSV

Cja. Ahorro en U$S	Archivo: DNCADOPCCCSV_V2.CSV

Si la descarga incluye la opción Descarga con CBU, Cuit/Cuil y Denominacion e incluye PCC, se verán en el siguiente orden

| … | … |
| --- | --- |
| Código de operación informado por el banco |  |
| PCC | CODPCC_PCC.CODOPE_ID |
| Tipo-Moneda DN | CUENTA_MON_TIPO.MT_CTA_NRO_DN |
| CBU | MOVCUE. MOVCUE_CBU |
| CUIT/CUIL | MOVCUE.MOVCUE_CUIT |
| Denominación | MOVCUE.MOVCUE_CUITDENOM |

#### Registro Final

Titulo de la columna

| Tipo de Registro | Valor ‘F’ |
| --- | --- |
| Filler | BLANCOS |
| Cant. Reg. H | Cantidad de registros 'H' |
| Cant. Reg. M y V | Cantidad de registros 'M' y 'V' |

## Pago a Proveedores

Se corresponde con el reporte de información financiera Detalle de Pagos Pendientes y realizados

Directorio por defecto: \DATANET\FTP\REC\MOVIMIEN.

Nombre del archivo: DNPAGP.DAT

### Parámetros recibidos

Banco / Todos

Moneda: $ o USD

Cuenta: uno o todas

Nro. Referencia (optativo)

Fecha ingreso / acreditación: I o A

Fecha emisión / Pago: E o P

Fecha desde (optativo)

Fecha hasta

Importe desde (optativo)

Importe hasta (optativo)

Para cada Banco/Moneda/Cuenta se debe incluir el registro correspondientes de la vista DAPAG1 con:

Si Nro. Cheque fue informado tiene que ser igual a DAPAG1.DAPAG1_REFER

Si eligió fecha de emision (ingreso)

DAPAG1.DAPAG1_FECHA_EMISION:

Si fecha desde fue informada, debe estar en el rango solicitado

Si solo se informó la fecha hasta, debe ser menor o igual que esta

Si eligió fecha de pago (acreditación)

DAPAG1.DAPAG1_FECHA_PAGO:

Si fecha desde fue informada, debe estar en el rango solicitado

Si solo se informó la fecha hasta, debe ser menor o igual que esta

DAPG1.DAPAG1_IMPORTE:

Si ambos importes fueron informados, debe estar en el rango solicitado

Si solo se informó el importe desde, debe ser mayor o igual que este

Si solo se informó el importe hasta, debe ser menor o igual que este

### Formato del archivo

#### Registro Inicial

| Tipo de registro | X(1) | Valor ‘I’ |
| --- | --- | --- |
| Nro. de Cliente | X(7) | CLIENTES.CLI_INT_ID |
| Fecha de proceso | X(8) | CURRENT – DDMMAA |
| Filler | X(64) | BLANCOS |

#### Registro de Datos

| Tipo de registro | X(01) | Valor 'P' |
| --- | --- | --- |
| Codigo de banco | 9(03) | DAPAG1.DAPAG1_BANK |
| Cuenta Datanet | 9(02) | CUENTAS.CTA_NRO_CTA_CORTO  para<br>(DAPAG1.DAPAG1_BANK = BANCOS.BCO_IDBCO y<br>BANCOS.BCO_ID = SUCURSALES.BCO_ID y<br>SUCURSALES.CODSUC_ID = CUENTAS.CODSUC_ID ) y<br>(CUENTA_TIPO.T_CTA_DESCRIP = 'PP' y<br>CUENTA_TIPO.T_CTA_ID = CUENTAS.T_CTA_ID) y<br>(DAPAG1.DAPAG1_MONEDA = CUENTA_MONEDA.M_CTA_DESCRIP y<br>CUENTA_MONEDA.M_CTA_ID = CUENTAS.M_CTA_ID)  y<br>DAPAG1.DAPAG1_ACCOUNT = CUENTAS.CTA_NRO_CTA |
| Nro Cuenta Bco. | X(17) | DAPAG1.DAPAG1_ACCOUNT |
| Codigo de moneda | X(03) | DAPAG1.DAPAG1_MONEDA |
| Fecha de pago | 9(08) | DAPAG1.DAPAG1_FECHA_PAGO |
| Nro de cheque | X(12) | DAPAG1.DAPAG1_REFER |
| Fecha de emision | 9(08) | DAPAG1.DAPAG1_FECHA_EMISION |
| Nro de factura | X(12) | DAPAG1.DAPAG1_NRO_FACT |
| Nro de cliente | X(10) | DAPAG1.DAPAG1_COD_CLIENTE |
| Tipo de pago | X(01) | DAPAG1.DAPAG1_TIPO_PAGO |
| Importe del pago | 9(16)V99 | DAPAG1.DAPAG1_IMPORTE |
| Estado del pago | X(02) | BLANCO |
| Tipo-Moneda DN | 9(2) | CUENTA_MON_TIPO.MT_CTA_NRO_DN |
| Filler | X(21) | BLANCO |

Registro Final

| Tipo de Registro | X(1) | Valor ‘F’ |
| --- | --- | --- |
| Filler | X(3) | BLANCO |
| Cant.registros | 9(6) | Cantidad de registrio 'P' |
| Filler | X(70) | BLANCO |

## Pagos recibidos

Se corresponde con el reporte de pagos recibidos.

Directorio por default:\DATANET\FTP\REC\MOVIMIEN

Nombre del archivo: DNTCRE.DAT

### Parámetros recibidos

Banco de crédito

Tipo de Cuenta de crédito: CC o CA

Moneda: $ o USD

### Formato del archivo

#### Registro Inicial

| Tipo de Registro | X(01) | Valor ‘I’ |
| --- | --- | --- |
| Nro.de Cliente | X(07) | Clientes.CLI_INT_ID |
| Fecha de Proceso | X(08) | CURRENT – DDMMAAAA |
| Nombre del Archivo | X(06) | ‘DNTCRE’ |
| Filler | X(58) |  |

#### Registro de datos

| Número de Transacción | 9(07) | Pagos_Recibidos.Pag_id |
| --- | --- | --- |
| Fecha de Solicitud | 9(08) | Pagos_Recibidos.Fec_Ope |
| Número de Cliente | X(07) | Pagos_Recibidos.PAG_NROCLI_DEB |
| Nombre del Cliente | X(29) | Pagos_Recibidos.PAG_NOMABO |
| Tipo de Transferencia | X(02) | Pagos_Recibidos.PAG_TIPOTEF |
| Banco de Débito | 9(03) | Pagos_Recibidos.PAG_BANDEB |
| Banco de Crédito | 9(03) | A través de PAG_IDTEF obtiene el BCOCRED |
| Tipo de Cta. Crédito | 9(02) | A través de PAG_IDTEF obtiene el TIPO |
| Cuenta de Crédito | X(17) | A través de PAG_IDTEF obtiene el CTA_ID y busca CTA_NRO_CTA. Se completa con 0 a la izquierda |
| Nombre de Beneficiario | X(29) | A través de PAG_IDTEF obtiene el CTA_ID y busca CTA_DENOMIN |
| Importe de la TEF | 9(15) V99 | Pagos_Recibidos.PAG_IMPORTE |
| Moneda | X(03) | $ o U$S (según campo Tipo Cta. de Crédito). El campo va centrado. |
| Estado de la TEF | X(02) | Pagos_Recibidos.PAG_ESTADO |
| Observaciones | X(60) | Pagos_Recibidos.PAG_OBSER |
| Nro.de Comunidad | X(7) | ADDENDA_INTERPAGO.A_INT_COMUNIDAD |
| Filler | X (11) | Blancos |
| Nro. de Operación | X(1 X(12) | ADDENDA_INTERPAGO.A_INT_NUM_OPER |
| Filler | X (81) | Blancos |
| Observaciones2 | X(100) | Pagos_Recibidos.PAG_OBSER2 |

#### Registro Final

| Tipo de Registro | X(1) | Valor ‘F’ |
| --- | --- | --- |
| Filler | X(3) | BLANCOS |
| Cant. de operaciones | 9(6) | Cantidad de registros de datos. |

## Transferencias Ejecutadas

Se correponde con el reporte de transferencias emitidas que estén ejecutadas.

Directorio por default: /DATANET/FTP/REC/MOVIMIEN

Se realizan dos archivos distintos para la bajada de transferencias. Uno con el formato de cuenta y el otro con el CBU y si el tipo de tef soporta CVU, el segundo archivo también podría tener de estas tefs

Nombres de los archivos: Los nombres de los archivos dependen del tipo de transferencia, si se elige la opción “Todos” los archivos se llamaran

DNTEJE.DAT. para el formato de cuentas datanet

DNTEJECBUCVU.DAT para el formato de CBU y/o CVU

### Parametros recibidos

Para la generación del archivo de transferencias ejecutadas se puede consultar por:

Nro de pago

Nro de lote

Nro de operación

Fecha de solicitud desde y hasta

Fecha de creación desde y hasta

Banco débito y banco crédito

Tipo de cuenta y moneda

Nro de cuenta y CBU

CUIT y Tipo de Transferencia

Rango de Importes (desde y hasta)

Operador

Envío Unificado

Importar desde Archivo Protegido

### Formato del archivo

#### Registro Inicial

| Tipo de registro | X(1) | Valor ‘I’ |
| --- | --- | --- |
| Nro. De Cliente | X(7) | CLIENTES.CLI_INT_ID |
| Fecha de proceso | X(8) | CURRENT – DDMMAA |
| Nombre del Archivo | X(6) | DNXXXX – Depende del tipo de tef, si tiene todos los tipos de tef es 'DNTEJE' o DNTEJECBUCVU, sino va el nombre del archivo que se está generando,  que depende del tipo de transferencia que contenga el mismo. |

Para el resto de los tipos de tefs, el registro cabecera será el siguiente.

Los registros del cuerpo del archivo son todos iguales, por tal motivo se detalla debajo de todos los cabecera

Si el cliente opta por tipo “Cuentas Propias” el diseño de registros deberá ser el siguiente:

| Transferencias Ejecutadas - Cuentas Propias | Transferencias Ejecutadas - Cuentas Propias | Transferencias Ejecutadas - Cuentas Propias | Transferencias Ejecutadas - Cuentas Propias | Transferencias Ejecutadas - Cuentas Propias | Transferencias Ejecutadas - Cuentas Propias | Transferencias Ejecutadas - Cuentas Propias | Transferencias Ejecutadas - Cuentas Propias | Transferencias Ejecutadas - Cuentas Propias |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |
| Directorio: | Directorio: | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien |
| Archivo: | Archivo: | DNTRCP.DAT | DNTRCP.DAT | DNTRCP.DAT | DNTRCP.DAT | DNTRCP.DAT | DNTRCP.DAT | DNTRCP.DAT |
| Directorio: | Directorio: | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien |
| Archivo: | Archivo: | DNTRCPCBUCVU.DAT | DNTRCPCBUCVU.DAT | DNTRCPCBUCVU.DAT | DNTRCPCBUCVU.DAT | DNTRCPCBUCVU.DAT | DNTRCPCBUCVU.DAT | DNTRCPCBUCVU.DAT |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
| Posición | Posición | Posición | Longitud | Longitud | Descripción | Descripción | Descripción | Descripción |
| Desde | Hasta | Hasta |  |  |  |  |  |  |
| Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial |
| 1 | 1 | 1 | X (1) | X (1) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) |
| 2 | 8 | 8 | X (7) | X (7) | Nro. de cliente | Nro. de cliente | Nro. de cliente | Nro. de cliente |
| 9 | 16 | 16 | X (8) | X (8) | Fecha de proceso | Fecha de proceso | Fecha de proceso | Fecha de proceso |
| 17 | 22 | 22 | X (6) | X (6) | Nombre del archivo: DNTRCP/DNTRCPCBUCVU | Nombre del archivo: DNTRCP/DNTRCPCBUCVU | Nombre del archivo: DNTRCP/DNTRCPCBUCVU | Nombre del archivo: DNTRCP/DNTRCPCBUCVU |

Si el cliente opta por tipo “Sueldos” el diseño de registros deberá ser el siguiente:

El nombre del archivo es uno para las tefs con CBU al crédito y otro para las tefs que tienen CVU

| Transferencias Ejecutadas – Sueldos | Transferencias Ejecutadas – Sueldos | Transferencias Ejecutadas – Sueldos | Transferencias Ejecutadas – Sueldos | Transferencias Ejecutadas – Sueldos | Transferencias Ejecutadas – Sueldos | Transferencias Ejecutadas – Sueldos | Transferencias Ejecutadas – Sueldos | Transferencias Ejecutadas – Sueldos |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |
| Directorio: | Directorio: | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien |
| Archivo: | Archivo: | DNTRSU.DAT | DNTRSU.DAT | DNTRSU.DAT | DNTRSU.DAT | DNTRSU.DAT | DNTRSU.DAT | DNTRSU.DAT |
| Directorio: | Directorio: | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien |
| Archivo: | Archivo: | DNTRSUCBUCVU.DAT | DNTRSUCBUCVU.DAT | DNTRSUCBUCVU.DAT | DNTRSUCBUCVU.DAT | DNTRSUCBUCVU.DAT | DNTRSUCBUCVU.DAT | DNTRSUCBUCVU.DAT |
|  |  |  |  |  |  |  |  |  |
| Posición | Posición | Posición | Longitud | Longitud | Descripción | Descripción | Descripción | Descripción |
| Desde | Hasta | Hasta |  |  |  |  |  |  |
| Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial |
| 1 | 1 | 1 | X (1) | X (1) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) |
| 2 | 8 | 8 | X (7) | X (7) | Nro. de cliente | Nro. de cliente | Nro. de cliente | Nro. de cliente |
| 9 | 16 | 16 | X (8) | X (8) | Fecha de proceso | Fecha de proceso | Fecha de proceso | Fecha de proceso |
| 17 | 22 | 22 | X (6) | X (6) | Nombre del archivo: DNTRSU/DNTRSUCBUCVU | Nombre del archivo: DNTRSU/DNTRSUCBUCVU | Nombre del archivo: DNTRSU/DNTRSUCBUCVU | Nombre del archivo: DNTRSU/DNTRSUCBUCVU |

Si el cliente opta por tipo “Proveedores” el diseño de registros deberá ser el siguiente:

El nombre del archivo es uno para las tefs con CBU al crédito y otro para las tefs que tienen CVU

| Transferencias Ejecutadas – Proveedores | Transferencias Ejecutadas – Proveedores | Transferencias Ejecutadas – Proveedores | Transferencias Ejecutadas – Proveedores | Transferencias Ejecutadas – Proveedores | Transferencias Ejecutadas – Proveedores | Transferencias Ejecutadas – Proveedores | Transferencias Ejecutadas – Proveedores | Transferencias Ejecutadas – Proveedores |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |
| Directorio: | Directorio: | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien |
| Archivo: | Archivo: | DNTRPP.DAT | DNTRPP.DAT | DNTRPP.DAT | DNTRPP.DAT | DNTRPP.DAT | DNTRPP.DAT | DNTRPP.DAT |
| Directorio: | Directorio: | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien |
| Archivo: | Archivo: | DNTRPPCBUCVU.DAT | DNTRPPCBUCVU.DAT | DNTRPPCBUCVU.DAT | DNTRPPCBUCVU.DAT | DNTRPPCBUCVU.DAT | DNTRPPCBUCVU.DAT | DNTRPPCBUCVU.DAT |
|  |  |  |  |  |  |  |  |  |
| Posición | Posición | Posición | Longitud | Longitud | Descripción | Descripción | Descripción | Descripción |
| Desde | Hasta | Hasta |  |  |  |  |  |  |
| Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial |
| 1 | 1 | 1 | X (1) | X (1) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) |
| 2 | 8 | 8 | X (7) | X (7) | Nro. de cliente | Nro. de cliente | Nro. de cliente | Nro. de cliente |
| 9 | 16 | 16 | X (8) | X (8) | Fecha de proceso | Fecha de proceso | Fecha de proceso | Fecha de proceso |
| 17 | 22 | 22 | X (6) | X (6) | Nombre del archivo: DNTRPP/DNTRPPCBUCVU | Nombre del archivo: DNTRPP/DNTRPPCBUCVU | Nombre del archivo: DNTRPP/DNTRPPCBUCVU | Nombre del archivo: DNTRPP/DNTRPPCBUCVU |

Si el cliente opta por tipo “BtoB” el diseño de registros deberá ser el siguiente:

| Transferencias Ejecutadas – BtoB | Transferencias Ejecutadas – BtoB | Transferencias Ejecutadas – BtoB | Transferencias Ejecutadas – BtoB | Transferencias Ejecutadas – BtoB | Transferencias Ejecutadas – BtoB | Transferencias Ejecutadas – BtoB | Transferencias Ejecutadas – BtoB | Transferencias Ejecutadas – BtoB |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |
| Directorio: | Directorio: | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien |
| Archivo: | Archivo: | DNTRBB.DAT | DNTRBB.DAT | DNTRBB.DAT | DNTRBB.DAT | DNTRBB.DAT | DNTRBB.DAT | DNTRBB.DAT |
| Directorio: | Directorio: | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien |
| Archivo: | Archivo: | DNTRBBCBUCVU.DAT | DNTRBBCBUCVU.DAT | DNTRBBCBUCVU.DAT | DNTRBBCBUCVU.DAT | DNTRBBCBUCVU.DAT | DNTRBBCBUCVU.DAT | DNTRBBCBUCVU.DAT |
|  |  |  |  |  |  |  |  |  |
| Posición | Posición | Posición | Longitud | Longitud | Descripción | Descripción | Descripción | Descripción |
| Desde | Hasta | Hasta |  |  |  |  |  |  |
| Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial |
| 1 | 1 | 1 | X (1) | X (1) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) |
| 2 | 8 | 8 | X (7) | X (7) | Nro. de cliente | Nro. de cliente | Nro. de cliente | Nro. de cliente |
| 9 | 16 | 16 | X (8) | X (8) | Fecha de proceso | Fecha de proceso | Fecha de proceso | Fecha de proceso |
| 17 | 22 | 22 | X (6) | X (6) | Nombre del archivo: DNTRBB/ DNTRBBCBUCVU | Nombre del archivo: DNTRBB/ DNTRBBCBUCVU | Nombre del archivo: DNTRBB/ DNTRBBCBUCVU | Nombre del archivo: DNTRBB/ DNTRBBCBUCVU |

Si el cliente opta por tipo “AFIP” el diseño de registros deberá ser el siguiente:

| Transferencias Ejecutadas - AFIP | Transferencias Ejecutadas - AFIP | Transferencias Ejecutadas - AFIP | Transferencias Ejecutadas - AFIP | Transferencias Ejecutadas - AFIP | Transferencias Ejecutadas - AFIP | Transferencias Ejecutadas - AFIP | Transferencias Ejecutadas - AFIP | Transferencias Ejecutadas - AFIP |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |
| Directorio: | Directorio: | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien |
| Archivo: | Archivo: | DNTRAF.DAT | DNTRAF.DAT | DNTRAF.DAT | DNTRAF.DAT | DNTRAF.DAT | DNTRAF.DAT | DNTRAF.DAT |
| Directorio: | Directorio: | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien |
| Archivo: | Archivo: | DNTRAFCBUCVU.DAT | DNTRAFCBUCVU.DAT | DNTRAFCBUCVU.DAT | DNTRAFCBUCVU.DAT | DNTRAFCBUCVU.DAT | DNTRAFCBUCVU.DAT | DNTRAFCBUCVU.DAT |
|  |  |  |  |  |  |  |  |  |
| Posición | Posición | Posición | Longitud | Longitud | Descripción | Descripción | Descripción | Descripción |
| Desde | Hasta | Hasta |  |  |  |  |  |  |
| Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial |
| 1 | 1 | 1 | X (1) | X (1) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) |
| 2 | 8 | 8 | X (7) | X (7) | Nro. de cliente | Nro. de cliente | Nro. de cliente | Nro. de cliente |
| 9 | 16 | 16 | X (8) | X (8) | Fecha de proceso | Fecha de proceso | Fecha de proceso | Fecha de proceso |
| 17 | 22 | 22 | X (6) | X (6) | Nombre del archivo: DNTRAF/DNTRAFCBUCVU | Nombre del archivo: DNTRAF/DNTRAFCBUCVU | Nombre del archivo: DNTRAF/DNTRAFCBUCVU | Nombre del archivo: DNTRAF/DNTRAFCBUCVU |

Si el cliente opta por tipo “Depositos Judiciales” el diseño de registros deberá ser el siguiente:

| Transferencias Ejecutadas – Depositos Judiciales | Transferencias Ejecutadas – Depositos Judiciales | Transferencias Ejecutadas – Depositos Judiciales | Transferencias Ejecutadas – Depositos Judiciales | Transferencias Ejecutadas – Depositos Judiciales | Transferencias Ejecutadas – Depositos Judiciales | Transferencias Ejecutadas – Depositos Judiciales | Transferencias Ejecutadas – Depositos Judiciales | Transferencias Ejecutadas – Depositos Judiciales |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |
| Directorio: | Directorio: | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien |
| Archivo: | Archivo: | DNTRPR.DAT | DNTRPR.DAT | DNTRPR.DAT | DNTRPR.DAT | DNTRPR.DAT | DNTRPR.DAT | DNTRPR.DAT |
| Directorio: | Directorio: | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien |
| Archivo: | Archivo: | DNTRPRCBUCVU.DAT | DNTRPRCBUCVU.DAT | DNTRPRCBUCVU.DAT | DNTRPRCBUCVU.DAT | DNTRPRCBUCVU.DAT | DNTRPRCBUCVU.DAT | DNTRPRCBUCVU.DAT |
|  |  |  |  |  |  |  |  |  |
| Posición | Posición | Posición | Longitud | Longitud | Descripción | Descripción | Descripción | Descripción |
| Desde | Hasta | Hasta |  |  |  |  |  |  |
| Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial |
| 1 | 1 | 1 | X (1) | X (1) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) |
| 2 | 8 | 8 | X (7) | X (7) | Nro. de cliente | Nro. de cliente | Nro. de cliente | Nro. de cliente |
| 9 | 16 | 16 | X (8) | X (8) | Fecha de proceso | Fecha de proceso | Fecha de proceso | Fecha de proceso |
| 17 | 22 | 22 | X (6) | X (6) | Nombre del archivo: DNTRPR/DNTRPRCBUCVU | Nombre del archivo: DNTRPR/DNTRPRCBUCVU | Nombre del archivo: DNTRPR/DNTRPRCBUCVU | Nombre del archivo: DNTRPR/DNTRPRCBUCVU |

Si el cliente opta por tipo “Pagos Terceros” el diseño de registros deberá ser el siguiente:

| Transferencias Ejecutadas – Pagos Terceros | Transferencias Ejecutadas – Pagos Terceros | Transferencias Ejecutadas – Pagos Terceros | Transferencias Ejecutadas – Pagos Terceros | Transferencias Ejecutadas – Pagos Terceros | Transferencias Ejecutadas – Pagos Terceros | Transferencias Ejecutadas – Pagos Terceros | Transferencias Ejecutadas – Pagos Terceros | Transferencias Ejecutadas – Pagos Terceros |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |
| Directorio: | Directorio: | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien |
| Archivo: | Archivo: | DNTRTR.DAT | DNTRTR.DAT | DNTRTR.DAT | DNTRTR.DAT | DNTRTR.DAT | DNTRTR.DAT | DNTRTR.DAT |
| Directorio: | Directorio: | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien |
| Archivo: | Archivo: | DNTRTRCBUCVU.DAT | DNTRTRCBUCVU.DAT | DNTRTRCBUCVU.DAT | DNTRTRCBUCVU.DAT | DNTRTRCBUCVU.DAT | DNTRTRCBUCVU.DAT | DNTRTRCBUCVU.DAT |
|  |  |  |  |  |  |  |  |  |
| Posición | Posición | Posición | Longitud | Longitud | Descripción | Descripción | Descripción | Descripción |
| Desde | Hasta | Hasta |  |  |  |  |  |  |
| Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial |
| 1 | 1 | 1 | X (1) | X (1) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) |
| 2 | 8 | 8 | X (7) | X (7) | Nro. de cliente | Nro. de cliente | Nro. de cliente | Nro. de cliente |
| 9 | 16 | 16 | X (8) | X (8) | Fecha de proceso | Fecha de proceso | Fecha de proceso | Fecha de proceso |
| 17 | 22 | 22 | X (6) | X (6) | Nombre del archivo: DNTRTR/DNTRTRCBUCVU | Nombre del archivo: DNTRTR/DNTRTRCBUCVU | Nombre del archivo: DNTRTR/DNTRTRCBUCVU | Nombre del archivo: DNTRTR/DNTRTRCBUCVU |

Si el cliente opta por tipo “Interpagos” el diseño de registros deberá ser el siguiente:

| Transferencias Ejecutadas – Interpagos | Transferencias Ejecutadas – Interpagos | Transferencias Ejecutadas – Interpagos | Transferencias Ejecutadas – Interpagos | Transferencias Ejecutadas – Interpagos | Transferencias Ejecutadas – Interpagos | Transferencias Ejecutadas – Interpagos | Transferencias Ejecutadas – Interpagos | Transferencias Ejecutadas – Interpagos |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |
| Directorio: | Directorio: | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien |
| Archivo: | Archivo: | DNTRIN.DAT | DNTRIN.DAT | DNTRIN.DAT | DNTRIN.DAT | DNTRIN.DAT | DNTRIN.DAT | DNTRIN.DAT |
| Directorio: | Directorio: | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien |
| Archivo: | Archivo: | DNTRINCBUCVU.DAT | DNTRINCBUCVU.DAT | DNTRINCBUCVU.DAT | DNTRINCBUCVU.DAT | DNTRINCBUCVU.DAT | DNTRINCBUCVU.DAT | DNTRINCBUCVU.DAT |
|  |  |  |  |  |  |  |  |  |
| Posición | Posición | Posición | Longitud | Longitud | Descripción | Descripción | Descripción | Descripción |
| Desde | Hasta | Hasta |  |  |  |  |  |  |
| Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial |
| 1 | 1 | 1 | X (1) | X (1) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) |
| 2 | 8 | 8 | X (7) | X (7) | Nro. de cliente | Nro. de cliente | Nro. de cliente | Nro. de cliente |
| 9 | 16 | 16 | X (8) | X (8) | Fecha de proceso | Fecha de proceso | Fecha de proceso | Fecha de proceso |
| 17 | 22 | 22 | X (6) | X (6) | Nombre del archivo: DNTRIN/DNTRINCBUCVU | Nombre del archivo: DNTRIN/DNTRINCBUCVU | Nombre del archivo: DNTRIN/DNTRINCBUCVU | Nombre del archivo: DNTRIN/DNTRINCBUCVU |

Si el cliente opta por tipo “Pagos Judiciales” el diseño de registros deberá ser el siguiente:

| Transferencias Ejecutadas – Interpagos | Transferencias Ejecutadas – Interpagos | Transferencias Ejecutadas – Interpagos | Transferencias Ejecutadas – Interpagos | Transferencias Ejecutadas – Interpagos | Transferencias Ejecutadas – Interpagos | Transferencias Ejecutadas – Interpagos | Transferencias Ejecutadas – Interpagos | Transferencias Ejecutadas – Interpagos |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |
| Directorio: | Directorio: | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien |
| Archivo: | Archivo: | DNTRPJ.DAT | DNTRPJ.DAT | DNTRPJ.DAT | DNTRPJ.DAT | DNTRPJ.DAT | DNTRPJ.DAT | DNTRPJ.DAT |
| Directorio: | Directorio: | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien |
| Archivo: | Archivo: | DNTRPJCBUCVU.DAT | DNTRPJCBUCVU.DAT | DNTRPJCBUCVU.DAT | DNTRPJCBUCVU.DAT | DNTRPJCBUCVU.DAT | DNTRPJCBUCVU.DAT | DNTRPJCBUCVU.DAT |
|  |  |  |  |  |  |  |  |  |
| Posición | Posición | Posición | Longitud | Longitud | Descripción | Descripción | Descripción | Descripción |
| Desde | Hasta | Hasta |  |  |  |  |  |  |
| Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial |
| 1 | 1 | 1 | X (1) | X (1) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) |
| 2 | 8 | 8 | X (7) | X (7) | Nro. de cliente | Nro. de cliente | Nro. de cliente | Nro. de cliente |
| 9 | 16 | 16 | X (8) | X (8) | Fecha de proceso | Fecha de proceso | Fecha de proceso | Fecha de proceso |
| 17 | 22 | 22 | X (6) | X (6) | Nombre del archivo: DNTRPJ/DNTRPJCBUCVU | Nombre del archivo: DNTRPJ/DNTRPJCBUCVU | Nombre del archivo: DNTRPJ/DNTRPJCBUCVU | Nombre del archivo: DNTRPJ/DNTRPJCBUCVU |

Si el cliente no opta por algún tipo de transferencia en particular (elige la opción “Todos”) bajará toda la información respetando el diseño de registro que corresponda pero el nombre del archivo con el que baja la información será DNTEJE.DAT, y en el registro inicial tendrá DNTEJE. El diseño de registro deberá ser el siguiente:

| Transferencias Ejecutadas – Sin especificar Tipo (Opción “Todos”) | Transferencias Ejecutadas – Sin especificar Tipo (Opción “Todos”) | Transferencias Ejecutadas – Sin especificar Tipo (Opción “Todos”) | Transferencias Ejecutadas – Sin especificar Tipo (Opción “Todos”) | Transferencias Ejecutadas – Sin especificar Tipo (Opción “Todos”) | Transferencias Ejecutadas – Sin especificar Tipo (Opción “Todos”) | Transferencias Ejecutadas – Sin especificar Tipo (Opción “Todos”) | Transferencias Ejecutadas – Sin especificar Tipo (Opción “Todos”) | Transferencias Ejecutadas – Sin especificar Tipo (Opción “Todos”) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |
| Directorio: | Directorio: | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien |
| Archivo: | Archivo: | DNTEJE.DAT | DNTEJE.DAT | DNTEJE.DAT | DNTEJE.DAT | DNTEJE.DAT | DNTEJE.DAT | DNTEJE.DAT |
| Directorio: | Directorio: | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien | \datanet\ftp\rec\movimien |
| Archivo: | Archivo: | DNTEJECBUCVU.DAT | DNTEJECBUCVU.DAT | DNTEJECBUCVU.DAT | DNTEJECBUCVU.DAT | DNTEJECBUCVU.DAT | DNTEJECBUCVU.DAT | DNTEJECBUCVU.DAT |
|  |  |  |  |  |  |  |  |  |
| Posición | Posición | Posición | Longitud | Longitud | Descripción | Descripción | Descripción | Descripción |
| Desde | Hasta | Hasta |  |  |  |  |  |  |
| Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial |
| 1 | 1 | 1 | X (1) | X (1) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) | Tipo de registro (Siempre “I”) |
| 2 | 8 | 8 | X (7) | X (7) | Nro. de cliente | Nro. de cliente | Nro. de cliente | Nro. de cliente |
| 9 | 16 | 16 | X (8) | X (8) | Fecha de proceso | Fecha de proceso | Fecha de proceso | Fecha de proceso |
| 17 | 22 | 22 | X (6) | X (6) | Nombre del archivo: DNTEJE/DNTEJECBUCVU | Nombre del archivo: DNTEJE/DNTEJECBUCVU | Nombre del archivo: DNTEJE/DNTEJECBUCVU | Nombre del archivo: DNTEJE/DNTEJECBUCVU |

#### Registro de Datos.con Cta DN credito

Todos los registros contendran los mismos campos.

| Registro de Datos | Registro de Datos | Registro de Datos | Registro de Datos |
| --- | --- | --- | --- |
| 1 | 7 | 9 (7) | Nro. de transacción. TEF_NRO_DN |
| 8 | 15 | 9 (8) | Fecha de solicitud |
| 16 | 17 | X (2) | Tipo de transferencia (*) |
| 18 | 20 | 9 (3) | Banco débito |
| 21 | 22 | 9 (2) | Tipo de cuenta débito: 01-CC$ / 02-CA$ / 13-CCu$s / 15-CAu$s |
| 23 | 39 | X (17) | Nro. de cuenta débito |
| 40 | 42 | 9 (3) | Banco de crédito |
| 43 | 44 | 9 (2) | Tipo de cuenta crédito |
| 45 | 61 | X (17) | Nro. de cuenta crédito |
| 62 | 90 | X (29) | Nombre del beneficiario |
| 91 | 107 | 9 (15) v99 | Importe de la transferencia |
| 108 | 110 | X (3) | Moneda ($ o u$s) |
| 111 | 117 | 9 (7) | Número de referencia |
| 118 | 177 | X (60) | Tabla Tefs :Tef_observ / Tef_Id_Interno ( *** ) |
| 178 | 277 | X (100) | Obser 2 (En este campo se informará lo que corresponda al tipo de transferencia: 01/02/03/14/19/18/63/15/12) |
| 278 | 321 | X (44) | Blancos (En el caso de Tef tipo 03 se informarán los datos que indica el diseño de registro correspondiente). |
| 322 | 350 | X (29) | Filler |

*Tipo de Tef contendra lo siguiente segun el tipo:

01	Cuentas Propias

02	Sueldos

03	Proveedores

12	BtoB

14	AFIP

15	Depósitos Judiciales

18	Interpagos

19	Pagos Judiciales

63	Pagos Terceros

#### Registro de Datos.con CBU/CVU en el credito

Todos los registros contendran los mismos campos.

| Registro de Datos | Registro de Datos | Registro de Datos | Registro de Datos |
| --- | --- | --- | --- |
| 1 | 7 | 9 (7) | Nro. de transacción. TEF_NRO_DN |
| 8 | 15 | 9 (8) | Fecha de solicitud |
| 16 | 17 | X (2) | Tipo de transferencia (*) |
| 18 | 20 | 9 (3) | Banco débito |
| 21 | 22 | 9 (2) | Tipo de cuenta débito: 01-CC$ / 02-CA$ / 13-CCu$s / 15-CAu$s |
| 23 | 39 | X (17) | Nro. de cuenta débito |
| 55 | 76 | 9(22) | CBU O CVU |
| 77 | 126 | X(50) | Denominacion CBU O Denominacion CVU |
| 40 | 43 | 9(4) | PSP (**), Si la tef es con CBU, este campo va vacio |
| 44 | 54 | 9(11) | Cuit CBU O Cuit CVU |
| 127 | 143 | 9 (15) v99 | Importe de la transferencia |
| 144 | 146 | X (3) | Moneda ($ o u$s) |
| 147 | 153 | 9 (7) | Número de referencia |
| 154 | 213 | X (60) | Tabla Tefs :Tef_observ / Tef_Id_Interno ( *** ) |
| 214 | 313 | X (100) | Obser 2 (En este campo se informará lo que corresponda al tipo de transferencia: 02-Sueldos / 03-Proveedores / 63-Pagos terc) |
| 314 | 357 | X (44) | Blancos (En el caso de Tef tipo 03 se informarán los datos que indica el diseño de registro correspondiente). |
| 358 | 400 | X (43) | Filler |

*Tipo de Tef contendra lo siguiente segun el tipo:

01	Cuentas Propias

02	Sueldos para CVU yCBU

03	Proveedores para CVU yCBU

12	BtoB

14	AFIP

15	Depósitos Judiciales

18	Interpagos

19	Pagos Judiciales

63	Pagos Terceros para CVU yCBU

**PSP son los proveedores de servicios de pagos. Los codigos son los siguientes:

0003	Mercado Pago

*** Este campo se completará según el siguiente criterio :

Este campo se puede completar a nivel general para el lote y/o a nivel de detalle de cada pago.

Si solo se completa la general (cabecera), todos los pagos toman dicha observación  TEF_OBSERV

Si se completa en forma individual (en la pantalla de detalle  TEF_ID_INTERNO ), sólo el pago que tenga una observación será afectado (los n pagos pueden tener cada cual su observación y ser distinta o algunos pueden tener y otros no, según lo ingresado). Si se completan ambas (general e individual), cada pago que en forma individual tiene una observación, se queda con esa.

Si a algún pago en forma individual no se le ingresa observación se toma la general.

#### Registro Final, es igual para todos los tipos de tefs.

| Registro Final | Registro Final | Registro Final | Registro Final |
| --- | --- | --- | --- |
| 1 | 1 | X (1) | Tipo de registro (Siempre “F”) |
| 2 | 4 | X (3) | Blancos (siempre en blanco) |
| 5 | 10 | 9 (6) | Total Transferencias del paquete |

## Cuentas

Se permite filtrar las cuentas de crédito para un cliente en particular por:

Fecha Estado Desde: con su respectivo calendario y gif para blanquear las fechas

Fecha Estado Hasta: con su respectivo calendario y gif para blanquear las fechas

Banco Credito al hacer click sobre este combo le debe desplegar los bancos en los cuales el cliente posee cuentas crédito ingresadas en el sistema. Por default se mostrará la opción “Todos”.

Tipo de Cuenta al hacer click sobre este combo le debe desplegar los tipos posibles:

CC, y

CA

Por default se mostrará la opción “Todos”.

Moneda al hacer click sobre este combo le debe desplegar las monedas posibles:

$

u$s

Por default se mostrará la opción “Todos”.

Estado será un combo en el cual se presentarán todas las opciones posibles vigentes. Por default se mostrará la opción “Todos”.

Titularidad será un list box en el cual se presentarán las 3 opciones posibles:

Propia

Terceros

Vinculada

Usos será un list box, en el cual se presentarán las opciones con las que cuenta el cliente:

Cuentas Propias,

Sueldos,

Proveedores,

Pagos Previsionales

Por default los campos Fechas Estado Desde y Hasta contendrán la fecha del día.

### Formato del archivo

| Diseño de Registros para la recepción de cuentas | Diseño de Registros para la recepción de cuentas | Diseño de Registros para la recepción de cuentas | Diseño de Registros para la recepción de cuentas | Diseño de Registros para la recepción de cuentas | Diseño de Registros para la recepción de cuentas | Diseño de Registros para la recepción de cuentas | Diseño de Registros para la recepción de cuentas | Diseño de Registros para la recepción de cuentas |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |
| Directorio: | Directorio: | \datanet\transfer | \datanet\transfer | \datanet\transfer | \datanet\transfer | \datanet\transfer | \datanet\transfer | \datanet\transfer |
| Archivo: | Archivo: | CTASCRED.TXT | CTASCRED.TXT | CTASCRED.TXT | CTASCRED.TXT | CTASCRED.TXT | CTASCRED.TXT | CTASCRED.TXT |
|  |  |  |  |  |  |  |  |  |
| Posición | Posición | Posición | Longitud | Longitud | Descripción | Descripción | Descripción | Descripción |
| Desde | Hasta | Hasta |  |  |  |  |  |  |
| Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial | Registro Inicial |
| 1 | 30 | 30 | X (30) | X (30) | Nombre del banco | Nombre del banco | Nombre del banco | Nombre del banco |
| 31 | 60 | 60 | X (30) | X (30) | Tipo de cuenta (CC$, CA$, CCu$s, CAu$s) | Tipo de cuenta (CC$, CA$, CCu$s, CAu$s) | Tipo de cuenta (CC$, CA$, CCu$s, CAu$s) | Tipo de cuenta (CC$, CA$, CCu$s, CAu$s) |
| 61 | 77 | 77 | X (17) | X (17) | Número de cuenta | Número de cuenta | Número de cuenta | Número de cuenta |
| 78 | 107 | 107 | X (30) | X (30) | Denominación de la cuenta | Denominación de la cuenta | Denominación de la cuenta | Denominación de la cuenta |
| 108 | 118 | 118 | X (11) | X (11) | Número de CUIT | Número de CUIT | Número de CUIT | Número de CUIT |
| 119 | 140 | 140 | X (22) | X (22) | Número de CBU | Número de CBU | Número de CBU | Número de CBU |
| 141 | 150 | 150 | X (10) | X (10) | Titularidad | Titularidad | Titularidad | Titularidad |
| 151 | 190 | 190 | X (40) | X (40) | Estado | Estado | Estado | Estado |
| 191 | 198 | 198 | 9 (08) | 9 (08) | Fecha de estado (AAAAMMDD) | Fecha de estado (AAAAMMDD) | Fecha de estado (AAAAMMDD) | Fecha de estado (AAAAMMDD) |
| 199 | 240 | 240 | X (42) | X (42) | Filler | Filler | Filler | Filler |

## Generalidades de los archivos en formato SAP

El procedimiento debe generar 2 archivos (eventualmente puede generar un tercero) según se especifica más abajo si descarga con Plan de Cuentas Contables es ‘N’:

AUSZUG.TXT

UMSATZ.TXT

ZUGHUS.TXT (Sólo si "Movimientos fecha valor" es igual a S)

El procedimiento debe generar 2 archivos (eventualmente puede generar un tercero) según se especifica más abajo si descarga con Plan de Cuentas Contables es ‘S’:

AUSZUGPCC.TXT

UMSATZPCC.TXT

ZUGHUSPCC.TXT (Sólo si "Movimientos fecha valor" es igual a S)

Consideraciones Generales

Todos los campos van separados por punto y coma (;)

Los campos indicados como "No usado", deben informarse como "string nula" (;;)

### Parámetros recibidos

Cliente

Operador

Banco / Todos

Tipo de Cuenta : CC o CA

Moneda: $ o USD

Cuenta: uno o todas

Fecha desde

Fecha hasta

Movimientos fecha valor: S/N

Descarga con Plan de Cuentas Contable S/N

## AUSZUG.TXT

Para cada Banco/Tipo/Moneda/Cuenta (habilitada para el operador) se debe incluir los registro de SALHIS_PDIA que tengan SALHISPD_FECDIA en el rango de fechas solicitado

| Nro | Nombre de Campo | Tipo<br>(Long. Mínima - Máxima) | Descripción |
| --- | --- | --- | --- |
| 1 | Cód. De Banco | X(00-12) | SAP_BCO.BCO_SAP para SAP_BCO.CLI_ID = Cliente y SAP_BCO.BCO_IDBCO = Banco |
| 2 | Nro de Cuenta | X(00-24) | SAP_CTA.CTA_SAP para SAP_CTA.CLI_ID = Cliente y SAP_CTA.BCO_IDBCO = Banco y<br>SAP_CTA.T_CTA_DESCRIP = Tipo y<br>SAP_CTA.M_CTA_DESCRIP =  Moneda y<br>SAP_CTA.CTA_NRO_CTA = Cuenta |
| 3 | Nro de Extracto | 9(01-04) | Nro. de día del año correspondiente a la fecha del campo "4 - Fecha de Extracto" |
| 4 | Fecha de Extracto | X(08-08) | SALHIS_PDIA.SALHISPD_FECDIA (Formato DD.MM.YY) |
| 5 | Cód de Moneda | X(03-03) | SAP_MON.MON_SAP para SAP_MON.CLI_ID = Cliente y SAP_MON.M_CTA_DESCRIP = Moneda |
| 6 | Saldo Inicial | 9(01-16)V99 | Primer registro: SALHIS_PDIA.SALHISPD_SALDIA del día hábil anterior a la fecha desde<br>Resto de los registros: "9 - Saldo de Cierre" del registro anterior |
| 7 | Total de Débitos | 9(01-16)V99 | SUM(MOVCUE.MOVCUE_IMPORT) para<br>MOVCUE.MOVCUE_CODBAN = Banco y<br>MOVCUE.MOVCUE_TIPO = Tipo y<br>MOVCUE.MOVCUE_CODMON =  Moneda y<br>MOVCUE.MOVCUE_NUMCTA = Cuenta y<br>MOVCUE.MOVCUE_DEBCRE = 'D' y<br>MOVCUE.MOVCUE_FECMOV en el rango solicitado |
| 8 | Total de Créditos | 9(01-16)V99 | SUM(MOVCUE.MOVCUE_IMPORT) para<br>MOVCUE.MOVCUE_CODBAN = Banco y<br>MOVCUE.MOVCUE_TIPO = Tipo y<br>MOVCUE.MOVCUE_CODMON =  Moneda y<br>MOVCUE.MOVCUE_NUMCTA = Cuenta y<br>MOVCUE.MOVCUE_DEBCRE = 'C' y<br>MOVCUE.MOVCUE_FECMOV en el rango solicitado |
| 9 | Saldo de Cierre | 9(01-16)V99 | "6 - Saldo Inicial" - "7 - Total de débitos" + "8 - Total de créditos" |
| 10 | No Usado |  |  |
| …. | …. |  |  |
| 17 | No Usado |  |  |
| 18 | Cant. de Movs. Procesados | 9(01-05) | Cantidad de registros MOVCUE para<br>MOVCUE.MOVCUE_CODBAN = Banco y<br>MOVCUE.MOVCUE_TIPO = Tipo y<br>MOVCUE.MOVCUE_CODMON =  Moneda y<br>MOVCUE.MOVCUE_NUMCTA = Cuenta y<br>MOVCUE.MOVCUE_FECMOV en el rango solicitado |

## UMSATZ.TXT / UMSATZPCC.TXT

Para cada Banco/Tipo/Moneda/Cuenta (habilitada para el operador) se debe incluir los registros de MOVCUE que tengan MOVCUE_FECMOV en el rango de fechas solicitado

| Nro | Nombre de Campo | Tipo<br>(Long. Mínima - Máxima) | Descripción |
| --- | --- | --- | --- |
| 1 | Cód. De Banco | X(00-12) | SAP_BCO.BCO_SAP para SAP_BCO.CLI_ID = Cliente y SAP_BCO.BCO_IDBCO = Banco |
| 2 | Nro de Cuenta | X(00-24) | SAP_CTA.CTA_SAP para SAP_CTA.CLI_ID = Cliente y SAP_CTA.BCO_IDBCO = Banco y<br>SAP_CTA.T_CTA_DESCRIP = Tipo y<br>SAP_CTA.M_CTA_DESCRIP =  Moneda y<br>SAP_CTA.CTA_NRO_CTA = Cuenta |
| 3 | Nro de Extracto | 9(01-04) | Fecha juliana correspondiente al campo MOVCUE.MOVCUE_FECMOV |
| 4 | Fecha de Extracto | X(08-08) | MOVCUE.MOVCUE_FECVAL (Formato DD.MM.YY) |
| 5 | No Usado |  |  |
| 6 | No Usado |  |  |
| 7 | No Usado |  |  |
| 8 | Codigo de depositante | X(08) | MOVCUE.MOVCUE_DEPOSI |
| 9 | No Usado |  |  |
| 10 | Nro de Comprobante | X(00-16) | MOVCUE.MOVCUE_NROCOM |
| 11 | Importe | 9(01-16)V99 | MOVCUE.MOVCUE_IMPORT<br>Si MOVCUE.MOVCUE_DEBCRE = 'D' multiplicarlo por -1 |
| 12 | No Usado |  |  |
| 13 | No Usado |  |  |
| 14 | Fecha del Día | X(08-08) | CURRENT DAY (Formato DD.MM.YY) |
| 15 | No Usado |  |  |
| 16 | No Usado |  |  |
| 17 | Desc del Movimiento | X(00-27) | MOVCUE.MOVCUE_DESCRI |
| 18 | No Usado |  |  |
| …. | ….. |  |  |
| 33 | Código de Operación Bco. | X(00-05) | MOVCUE_CODOPEBAN |
| 34 | Cód de Operación | X(00-03) | MOVCUE.MOVCUE_CODOPE |
| 35 | Código PCC | X(01-11) | CODPCC_PCC.CODPCC_OPE para el CODOPE_ID igual a MOVCUE.MOVCUE_CODOPE |

## ZUGHUS.TXT / ZUGHUSPCC.TXT

Este archivo se genera si "Movimientos Fecha Valor" es igual a S.

Para cada Banco/Tipo/Moneda/Cuenta (habilitada para el operador) se debe incluir los registros de MOVCUE que cumplan con las siguientes condiciones:

MOVCUE_FECPRO &lt;&gt; MOVCUE_FECMOV

MOVCUE_FECPRO se encuentra en el rango de fechas solicitado

MOVCUE_FECMOV se encuetra fuera del rango de fechas solicitado

| Nro | Nombre de Campo | Tipo<br>(Long. Mínima - Máxima) | Descripción |
| --- | --- | --- | --- |
| 1 | Cód. De Banco | X(00-12) | SAP_BCO.BCO_SAP para SAP_BCO.CLI_ID = Cliente y SAP_BCO.BCO_IDBCO = Banco |
| 2 | Nro de Cuenta | X(00-24) | SAP_CTA.CTA_SAP para SAP_CTA.CLI_ID = Cliente y SAP_CTA.BCO_IDBCO = Banco y<br>SAP_CTA.T_CTA_DESCRIP = Tipo y<br>SAP_CTA.M_CTA_DESCRIP =  Moneda y<br>SAP_CTA.CTA_NRO_CTA = Cuenta |
| 3 | Nro de Extracto | 9(01-04) | Fecha juliana correspondiente al campo MOVCUE.MOVCUE_FECMOV |
| 4 | Fecha de Extracto | X(08-08) | MOVCUE.MOVCUE_FECVAL (Formato DD.MM.YY) |
| 5 | No usado |  |  |
| 6 | No Usado |  |  |
| 7 | No Usado |  |  |
| 8 | Codigo de depositante | X(08) | MOVCUE.MOVCUE_DEPOSI |
| 9 | No Usado |  |  |
| 10 | Nro de Comprobante | X(00-16) | MOVCUE.MOVCUE_NROCOM |
| 11 | Importe | 9(01-16)V99 | MOVCUE.MOVCUE_IMPORT<br>Si MOVCUE.MOVCUE_DEBCRE = 'D' multiplicarlo por -1 |
| 12 | No Usado |  |  |
| 13 | No Usado |  |  |
| 14 | Fecha del Día | X(08-08) | CURRENT DAY (Formato DD.MM.YY) |
| 15 | No Usado |  |  |
| 16 | No Usado |  |  |
| 17 | Desc del Movimiento | X(00-27) | MOVCUE.MOVCUE_DESCRI |
| 18 | No Usado |  |  |
| …. | ….. |  |  |
| 33 | Código de Operación Bco. | X(00-05) | MOVCUE_CODOPEBAN |
| 34 | Cód de Operación | X(00-03) | MOVCUE.MOVCUE_CODOPE |
| 35 | Código PCC | X(01-11) | CODPCC_PCC.CODPCC_OPE para el CODOPE_ID igual a MOVCUE.MOVCUE_CODOPE |

## Diseño de Parámetros para SAP

### SAP_BCO

| CLI_ID | NUMBER(10) |  |
| --- | --- | --- |
| BCO_IDBCO | NUMBER(3) | PK |
| BCO_SAP | VARCHAR2(12) |  |

### SAP_MON

| CLI_ID | NUMBER(10) |  |
| --- | --- | --- |
| M_CTA_DESCRIP | NUMBER(3) | PK |
| MON_SAP | VARCHAR2(3) |  |

### SAP_CTA

| CLI_ID | NUMBER(10) |  |
| --- | --- | --- |
| BCO_IDBCO | NUMBER(3) | PK |
| M_CTA_DESCRIP | NUMBER(3) |  |
| T_CTA_DESCRIP | VARCHAR2(3) |  |
| CTA_NRO_CTA | VARCHAR2(17) |  |
| CTA_SAP | VARCHAR2(24) |  |

Todos los parámetros de sap son opcionales, si existen, se toman los valores de la tabla de SAP, si no existen se toman los valores originales.

Por ejemplo, si el banco 072 para SAP es BANCORIO, se coloca el valor BANCORIO, pero si no existe registro en SAP_BCO del 072 se muestra como 072.

## Firma y Encripcion de archives

### Servicio Adicional “Información Financiera Encriptada y Firmada”

Para poder generar archivos Firmados y encriptados, se debe asignar al cliente, desde ib, el servicio adicional “Información Financiera Encriptaqda y Firmada”. Solo pueden poseer este servicio los clientes datanet.

Una vez que el cliente tiene este offering asignado, se le presenta en la ruta Administración &gt; ABM &gt; Cliente, debajo de la cuenta de facturación, la opción para descargar el certificado de ib y para subir el certificado del cliente. Los certificados son los mismos tanto para tefs con firma digital como para la descarga de archivos, con la diferencia que se manejan totalmente a la inversa. Es decir: que en este caso ib es el que manda archivos firmados y encriptados y en el caso de transferencias el cliente manda el archivo firmado y encriptado.

### Procedimiento con información financiera encriptada y firmada

Una vez que los cerificados estén cargados como corresponde, y el offering seleccionado, cuando el cliente reliza una generación de archivos, al ir a Archivos &gt; Recepción &gt; Datanet o Archivos &gt; Recepción &gt; SAP, en la lista de archivos generados, se visualiza un “SI”, que significa que se va a bajar los archivos firmados y encriptados, si los certificados no están cargados, o el offering no esta selecciona, no se va a visualizar nada en el lugar del SI.

Cuando los certificados están cargados, todos los archivos que se generan se bajan con firma y encriptados, si o si, no hay opción de bajar algunos con firma y encripción y otros no.

Los archivos encriptados y firmados, se bajan en una carpeta zipeada, ya que se envían dos archivos, uno con la información encriptada y otro con la firma.

Los archivos a los cuales se les agrega la firma y encripción son todos estos:

Agenda de vencimientos

Cobranzas

Cuentas

Detalles de transferencias

Disponibilidades

Extracto de cuentas

Log de sistema

Movimientos diferidos

Movimientos del dia

Movimientos y saldos

Pago a proveedores

Pagos Recibidos

Transferencias Ejecutadas

Zughus

Umsatz

Auszug

Si no se quiere bajar los archivos con firma y encriptados, primero se tiene que quitar los certificados y recién después, se pueden bajar los archivos.

Los operadores de los clientes que posean este servicios adicional, tienen un permiso en el árbol de permisos “Archivos firmados digitalmente”.

Por un lado se va a mostrar en el árbol de permisos, en administración, la rama de archivos firmados digitalmente, que es el abm de los certificados y se agrega un nuevo permiso en la rama del árbol de permisos Transferencias &gt; Generacion: Upload de tefs firmadas y encriptadas.

Todos los administradores generales van a tener el permiso cargado por default en SI y al resto de los operadores se les va a cargar por default en NO

## Definiciones pendientes

&lt;Cualquier tema que necesite aclaraciones o nuevas definiciones deberá estar en esta sección del documento&gt;

