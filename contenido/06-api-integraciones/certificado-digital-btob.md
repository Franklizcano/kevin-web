---
title: Certificado digital del servicio BtoB
layout: article
category: ABM's, Plataforma 2.0
summary: Referencia para generar, exportar e importar el certificado público utilizado por el servicio BtoB.
status: revisado
source: Guias y ayudas/Instructivo Generación de Certificado Digital Servicio BtoB v1.6.docx
reviewed: true
---

## Instructivo Generación de Certificado Digital

## Versión 1.6

CONTROL DE CAMBIOS

| Fecha | Versión | Descripción del cambio |
| --- | --- | --- |
| 16/01/2017 | 1.0 | Versión Inicial. |
| 29/06/2017 | 1.1 | Se modifica la opción de la aplicación desde donde se sube el certificado. |
| 19/04/2018 | 1.2 | Se modifica pantalla del punto 2.1.1. |
| 14/02/2019 | 1.3 | Se actualiza template. |
| 03/09/2021 | 1.4 | Se actualiza template. |
| 20/07/2021 | 1.5 | Se actualiza formato. |
| 04/04/2024 | 1.6 | Se actualiza template. |

## INDICE

1.	OBJETIVO	4

2.	ÁMBITO DE APLICACIÓN	4

3.	DETALLES TÉCNICOS	4

3.1	Certificado Digital	4

3.1.1	Generar un juego de claves Pública y Privada	4

3.1.2	Exportar el certificado público:	8

4.	Importación del Certificado Público	9

## OBJETIVO

El objetivo del presente documento es detallar las especificaciones técnicas para poder realizar la generación e implementación del certificado digital.

## ÁMBITO DE APLICACIÓN

Los clientes pueden utilizar esta implementación de referencia como una guía de ejemplo para implementar, en sus procesos y sistemas, lo necesario para cumplir con los requisitos técnicos (ver documentaciones del servicio B2B) para el manejo de la firma digital.

## DETALLES TÉCNICOS

## Certificado Digital

Se requerie un certificado digital X.509 que debe contener en el Asunto (Subject) los siguientes valores:

CN=“El CUIT de la Empresa”

OU=“Area de la Organización”

O=“Razón Social de la Empresa”

C=“País”

El cliente puede utilizar un certificado propio de la empresa que ya posea, autogenerado o provisto por una entidad certificante.

Si tuviera que crear un certificado nuevo se puede utilizar el comando keytool que esta incluido en el JDK (Java Development Kit), el Keystore Explorer (http://keystore-explorer.sourceforge.net/) o cualquier otra herramienta de cualquier plataforma que genere un Certificate Signing Request de un Certificado Digital X.509.

### Generar un juego de claves Pública y Privada

Con el keytool de java:

keytool -genkey -alias EmpresaXXX -sigalg SHA1withRSA -keystore KeyStore.ks -keyalg RSA -validity 365 -dname "CN=YYYYYYYY,OU=ZZZZZZZZZZZZZZZ,O=XXXXXXXXX S.A.,C=AR"

Con el Keystore Explorer:

Abrir el Keystore Explorer y seleccionar File -&gt; New

Seleccionar el tipo JKS

En el menú Tools, seleccionar Generate Key Pair

El Key Pair debe ser RSA de 1024

Seleccionar el algoritmo SHA1 with RSA valido por 1 año e ingresar al Name

Completar los datos del certificado

Ingresar un alias para el Key Pair

Ingresar una clave y confirmarla:

Nos aparecerá una ventana de confirmación de la generación y veremos el Key Pair dentro del Keystore

Guardar el Keystore

Esto se realiza desde la opción File-&gt; Save

IMPORTANTE: Utilizar un alias acorde, ubicar el KeyStore.ks en una ubicación segura del servidor de su empresa, completar el subject del certificado (-dname) con los valores correspondiente al CN, OU, O del Certificado, guardar en un lugar seguro la password del keystore y del certificado privado creado con el alias correspondiente.

### Exportar el certificado público:

Con el keytool de java:

keytool -exportcert -alias EmpresaXXX -file cert.cer –keystore KeyStore.ks -storepass ******

Con el Keystore Explorer:

Hacer un click con el botón derecho del mouse sobre el Key Pair y seleccionar Export – Export Certificate Chain

Seleccionar las opciones Head Only – X.509 - PEM

## Importación del Certificado Público

Para realizar la importación del certificado público se debe ingresar por Administración  ABM | Configuración de datos  Comunidad:

Hacer click sobre la opción Crear Nueva  y seleccionar el archivo generado anteriormente con extensión .cer:

Luego de seleccionar el archivo presionar Guardar. El sistema mostrará el mesaje “Operación realizada”.

![Imagen original del documento]({{ '/assets/originales/certificado-digital-btob/captura-01.png' | relative_url }})

![Imagen original del documento]({{ '/assets/originales/certificado-digital-btob/captura-02.png' | relative_url }})

![Imagen original del documento]({{ '/assets/originales/certificado-digital-btob/captura-03.png' | relative_url }})

![Imagen original del documento]({{ '/assets/originales/certificado-digital-btob/captura-04.png' | relative_url }})

![Imagen original del documento]({{ '/assets/originales/certificado-digital-btob/captura-05.png' | relative_url }})

![Imagen original del documento]({{ '/assets/originales/certificado-digital-btob/captura-06.png' | relative_url }})

![Imagen original del documento]({{ '/assets/originales/certificado-digital-btob/captura-07.png' | relative_url }})

![Imagen original del documento]({{ '/assets/originales/certificado-digital-btob/captura-08.png' | relative_url }})

![Imagen original del documento]({{ '/assets/originales/certificado-digital-btob/captura-09.png' | relative_url }})

![Imagen original del documento]({{ '/assets/originales/certificado-digital-btob/captura-10.png' | relative_url }})

![Imagen original del documento]({{ '/assets/originales/certificado-digital-btob/captura-11.png' | relative_url }})

![Imagen original del documento]({{ '/assets/originales/certificado-digital-btob/captura-12.png' | relative_url }})

![Imagen original del documento]({{ '/assets/originales/certificado-digital-btob/captura-13.png' | relative_url }})

![Imagen original del documento]({{ '/assets/originales/certificado-digital-btob/captura-14.png' | relative_url }})

![Imagen original del documento]({{ '/assets/originales/certificado-digital-btob/captura-15.png' | relative_url }})

![Imagen original del documento]({{ '/assets/originales/certificado-digital-btob/captura-16.png' | relative_url }})
