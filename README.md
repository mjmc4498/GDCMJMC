# GDCMJMC — Sistema Educativo de Gobierno de Datos

Sistema web educativo e interactivo para el aprendizaje de los **12 dominios de Gestión de Datos** del marco **DAMA-DMBOK**, contextualizado con principios de **Gobierno Corporativo** y la **Ley N.° 29733** de Protección de Datos Personales del Perú.

Desplegado en **GitHub Pages**: cada push a `main` publica automáticamente.

---

## Tabla de Contenidos

- [Descripcion General](#descripcion-general)
- [Arquitectura del Sistema](#arquitectura-del-sistema)
- [Stack Tecnologico](#stack-tecnologico)
- [Estructura de Archivos](#estructura-de-archivos)
- [Flujo de Usuario](#flujo-de-usuario)
- [Modulos Educativos](#modulos-educativos)
- [Sistema de Evaluacion](#sistema-de-evaluacion)
- [Generacion de Certificado](#generacion-de-certificado)
- [Persistencia de Datos](#persistencia-de-datos)
- [Sistema de Secciones Colapsables](#sistema-de-secciones-colapsables)
- [Despliegue CI/CD](#despliegue-cicd)
- [Diagrama de Componentes](#diagrama-de-componentes)
- [Modelo de Datos en LocalStorage](#modelo-de-datos-en-localstorage)
- [Secciones de Cada Modulo](#secciones-de-cada-modulo)
- [Frameworks y Estandares Referenciados](#frameworks-y-estandares-referenciados)
- [Autor](#autor)

---

## Descripcion General

El sistema permite a profesionales y estudiantes recorrer los 12 dominios del DAMA-DMBOK a traves de modulos interactivos que incluyen:

- Contenido teorico con secciones colapsables
- Relacion de cada dominio con DAMA-DMBOK, Gobierno Corporativo y la Ley 29733
- Minijuegos de decision situacional
- Evaluaciones de 5 preguntas por modulo
- Frameworks y estandares internacionales de referencia por modulo
- Generacion de certificado PDF con QR al completar los 12 modulos

---

## Arquitectura del Sistema

```mermaid
graph TB
    subgraph cliente [Navegador del Usuario]
        Dashboard[index.html<br>Dashboard Principal]
        Modulos[modules/*.html<br>12 Modulos Educativos]
        Certificado[certificado.html<br>Generador de PDF]
        Manual[docs/manual.html<br>Documentacion]
    end

    subgraph assets [Recursos Estaticos]
        CSS_Global[css/styles.css<br>Tema Oscuro Global]
        CSS_Module[css/module.css<br>Tema Claro Modulos]
        JS_App[js/app.js<br>Dashboard y Tarjetas]
        JS_Quiz[js/quiz.js<br>Motor de Evaluacion]
        JS_QuizData[js/quiz-data.js<br>Banco de Preguntas]
        JS_Collapse[js/module-collapse.js<br>Secciones Colapsables]
        Imagenes[assets/img/<br>Logo, Sello, Favicon]
    end

    subgraph cdn [CDN - jsDelivr]
        Mermaid[mermaid.min.js<br>Diagramas]
        Html2Canvas[html2canvas<br>Captura DOM]
        JsPDF[jsPDF<br>Generacion PDF]
        QRCode[qrcode.min.js<br>Codigo QR]
    end

    subgraph persistencia [Persistencia Local]
        LS[(localStorage)]
    end

    subgraph deploy [Despliegue]
        GH[GitHub Actions]
        Pages[GitHub Pages]
    end

    Dashboard --> JS_App
    Dashboard --> CSS_Global
    Modulos --> CSS_Module
    Modulos --> JS_Quiz
    Modulos --> JS_QuizData
    Modulos --> JS_Collapse
    Modulos --> Mermaid
    Certificado --> Html2Canvas
    Certificado --> JsPDF
    Certificado --> QRCode
    JS_App --> LS
    JS_Quiz --> LS
    GH --> Pages
```

---

## Stack Tecnologico

| Capa | Tecnologia | Proposito |
|------|-----------|-----------|
| Markup | HTML5 | Estructura semantica |
| Estilos | CSS3 con variables custom | Tema dual (oscuro dashboard, claro modulos) |
| Logica | JavaScript ES6+ vanilla | Interactividad sin dependencias de build |
| Fuentes | Google Fonts (Outfit, Space Grotesk, Playfair Display) | Tipografia profesional |
| Diagramas | Mermaid.js (CDN) | Diagramas conceptuales en modulos |
| PDF | html2canvas + jsPDF (CDN) | Exportacion de certificado |
| QR | QRCode.js (CDN) | Codigo de verificacion en certificado |
| Persistencia | localStorage | Progreso del usuario |
| CI/CD | GitHub Actions | Despliegue automatico a GitHub Pages |

---

## Estructura de Archivos

```
GDCMJMC/
├── .github/
│   └── workflows/
│       └── static.yml          # CI/CD: deploy a GitHub Pages
├── assets/
│   └── img/
│       ├── faveicon.png        # Favicon del sitio
│       ├── logotipo.png        # Logo principal
│       ├── sello-v2.png        # Sello del certificado
│       └── sellomjmc.png       # Sello alternativo
├── css/
│   ├── styles.css              # Estilos globales (tema oscuro, loader, grid, quiz modal)
│   └── module.css              # Estilos de modulos (tema claro, secciones, colapsables)
├── docs/
│   └── manual.html             # Manual del sistema
├── js/
│   ├── app.js                  # Logica del dashboard: tarjetas, progreso, certificado
│   ├── quiz.js                 # Motor de evaluacion: modal, preguntas, calificacion
│   ├── quiz-data.js            # Banco de 60 preguntas (5 por modulo)
│   └── module-collapse.js      # Secciones colapsables + controles globales
├── modules/
│   ├── 01-gobierno.html        # Gobierno de Datos
│   ├── 02-arquitectura.html    # Arquitectura de Datos
│   ├── 03-modelado.html        # Modelado de Datos
│   ├── 04-almacenamiento.html  # Almacenamiento y Operaciones
│   ├── 05-seguridad.html       # Seguridad de Datos
│   ├── 06-integracion.html     # Integracion e Interoperabilidad
│   ├── 07-documentos.html      # Gestion de Documentos y Contenido
│   ├── 08-maestros.html        # Datos Maestros y de Referencia
│   ├── 09-dwbi.html            # Data Warehousing y BI
│   ├── 10-metadatos.html       # Gestion de Metadatos
│   ├── 11-calidad.html         # Calidad de Datos
│   └── 12-bigdata.html         # Big Data y Data Science
├── certificado.html            # Generador de certificado PDF con QR
├── index.html                  # Dashboard principal (punto de entrada)
└── README.md                   # Este archivo
```

---

## Flujo de Usuario

```mermaid
flowchart TD
    A[Usuario ingresa al Dashboard] --> B{Selecciona un modulo}
    B --> C[Lee contenido del modulo]
    C --> D[Interactua con minijuego]
    D --> E[Colapsa/expande secciones]
    E --> F[Inicia evaluacion interactiva]
    F --> G{Responde 5 preguntas}
    G -->|4 o mas correctas| H[Modulo aprobado]
    G -->|Menos de 4| I[Puede reintentar]
    I --> F
    H --> J{Los 12 modulos aprobados?}
    J -->|No| B
    J -->|Si| K[Banner de felicitacion visible]
    K --> L[Accede a certificado.html]
    L --> M[Ingresa nombre completo]
    M --> N[Genera certificado PDF con QR]
    N --> O[Descarga PDF]
```

---

## Modulos Educativos

Los 12 modulos cubren el cuerpo completo de conocimiento del DAMA-DMBOK:

```mermaid
graph TD
    subgraph rueda [Rueda DAMA-DMBOK]
        GOB[01 Gobierno de Datos]
    end

    subgraph dominios [Dominios de Soporte]
        ARQ[02 Arquitectura]
        MOD[03 Modelado]
        ALM[04 Almacenamiento]
        SEG[05 Seguridad]
        INT[06 Integracion]
        DOC[07 Documentos]
        MAE[08 Maestros]
        DWB[09 DW y BI]
        MET[10 Metadatos]
        CAL[11 Calidad]
        BIG[12 Big Data]
    end

    GOB --> ARQ
    GOB --> MOD
    GOB --> ALM
    GOB --> SEG
    GOB --> INT
    GOB --> DOC
    GOB --> MAE
    GOB --> DWB
    GOB --> MET
    GOB --> CAL
    GOB --> BIG
```

| N. | Modulo | Dominio DAMA-DMBOK | Archivo |
|----|--------|--------------------|---------|
| 01 | Gobierno de Datos | Data Governance | `01-gobierno.html` |
| 02 | Arquitectura de Datos | Data Architecture | `02-arquitectura.html` |
| 03 | Modelado de Datos | Data Modeling & Design | `03-modelado.html` |
| 04 | Almacenamiento de Datos | Data Storage & Operations | `04-almacenamiento.html` |
| 05 | Seguridad de Datos | Data Security | `05-seguridad.html` |
| 06 | Integracion de Datos | Data Integration & Interoperability | `06-integracion.html` |
| 07 | Documentos y Contenido | Document & Content Management | `07-documentos.html` |
| 08 | Datos Maestros | Reference & Master Data | `08-maestros.html` |
| 09 | DW y Business Intelligence | DW & BI Management | `09-dwbi.html` |
| 10 | Metadatos | Metadata Management | `10-metadatos.html` |
| 11 | Calidad de Datos | Data Quality | `11-calidad.html` |
| 12 | Big Data y Data Science | Big Data & Data Science | `12-bigdata.html` |

---

## Sistema de Evaluacion

```mermaid
sequenceDiagram
    participant U as Usuario
    participant Q as quiz.js
    participant D as quiz-data.js
    participant LS as localStorage

    U->>Q: Click "Iniciar Evaluacion"
    Q->>D: Obtener preguntas del modulo N
    D-->>Q: Array de 5 preguntas
    Q->>U: Mostrar modal con pregunta 1

    loop Para cada pregunta (1 a 5)
        U->>Q: Selecciona opcion
        Q->>U: Feedback visual (verde/rojo)
        Q->>Q: Registrar acierto o fallo
        U->>Q: Click "Siguiente"
        Q->>U: Mostrar siguiente pregunta
    end

    Q->>Q: Calcular resultado (aciertos >= 4?)
    alt Aprobado
        Q->>LS: module_N_progress = 100
        Q->>U: Pantalla de felicitacion
        Q->>LS: Verificar 12 modulos completos
        alt Todos completos
            Q->>LS: course_completed = true
        end
    else No aprobado
        Q->>U: Pantalla con opcion de reintento
    end
```

**Reglas:**
- 5 preguntas de opcion multiple por modulo
- Aprobacion: 4 de 5 correctas (80%)
- Retroalimentacion inmediata por pregunta
- Posibilidad de reintento ilimitado

---

## Generacion de Certificado

```mermaid
flowchart LR
    subgraph entrada [Entrada]
        Nombre[Nombre completo]
        Progreso[12 modulos aprobados<br>o clave admin 4498]
    end

    subgraph proceso [Proceso]
        Fill[Rellenar certificado HTML]
        QR[Generar QR con folio]
        Capture[html2canvas captura DOM]
        PDF[jsPDF genera landscape A4]
    end

    subgraph salida [Salida]
        Download[Descarga PDF]
    end

    Nombre --> Fill
    Progreso --> Fill
    Fill --> QR
    QR --> Capture
    Capture --> PDF
    PDF --> Download
```

**Datos del certificado:**
- Nombre del estudiante
- Folio unico (`GD-XXXXX`)
- Fecha y hora de emision
- Codigo QR de verificacion
- Firma: Miguel J. Mogrovejo Cardenas

---

## Persistencia de Datos

Toda la informacion del usuario se almacena en `localStorage` del navegador.

```mermaid
erDiagram
    LOCALSTORAGE {
        string module_1_progress "0 o 100"
        string module_2_progress "0 o 100"
        string module_3_progress "0 o 100"
        string module_4_progress "0 o 100"
        string module_5_progress "0 o 100"
        string module_6_progress "0 o 100"
        string module_7_progress "0 o 100"
        string module_8_progress "0 o 100"
        string module_9_progress "0 o 100"
        string module_10_progress "0 o 100"
        string module_11_progress "0 o 100"
        string module_12_progress "0 o 100"
        string course_completed "true cuando 12 de 12"
    }
```

| Clave | Valores | Descripcion |
|-------|---------|-------------|
| `module_{1-12}_progress` | `"0"` o `"100"` | Progreso individual por modulo |
| `course_completed` | `"true"` | Flag de curso completo (12/12) |

El boton "Reiniciar Progreso" en el dashboard limpia todas las claves.

---

## Sistema de Secciones Colapsables

Cada modulo contiene entre 15 y 18 secciones. El script `module-collapse.js` las convierte automaticamente en paneles colapsables al cargar la pagina.

```mermaid
flowchart TD
    A[DOMContentLoaded] --> B[Seleccionar .module-section]
    B --> C{Es Resumen o Referencias?}
    C -->|Si| D[Marcar como no-colapsable]
    C -->|No| E[Inyectar boton toggle + chevron]
    E --> F[Envolver contenido en .section-collapsible]
    F --> G[Agregar listener de click]
    B --> H{Mas de 3 secciones?}
    H -->|Si| I[Insertar barra Colapsar/Expandir todo]
    H -->|No| J[Sin barra global]
```

**Comportamiento:**
- Todas las secciones inician **abiertas**
- Click en el titulo colapsa/expande la seccion individual
- Chevron rota al colapsar (animacion CSS de 0.3s)
- Botones globales "Colapsar todo" / "Expandir todo" en la parte superior

---

## Despliegue CI/CD

```mermaid
flowchart LR
    Dev[Push a main] --> GHA[GitHub Actions]
    GHA --> Checkout[Checkout codigo]
    Checkout --> Setup[Setup Pages]
    Setup --> Upload[Upload artifact]
    Upload --> Deploy[Deploy to GitHub Pages]
    Deploy --> Live[Sitio en vivo]
```

El workflow `.github/workflows/static.yml` se ejecuta automaticamente en cada push a `main` o manualmente con `workflow_dispatch`.

---

## Diagrama de Componentes

```mermaid
graph LR
    subgraph paginas [Paginas HTML]
        Index[index.html]
        M01[01-gobierno]
        M02[02-arquitectura]
        M03[03-modelado]
        M04[04-almacenamiento]
        M05[05-seguridad]
        M06[06-integracion]
        M07[07-documentos]
        M08[08-maestros]
        M09[09-dwbi]
        M10[10-metadatos]
        M11[11-calidad]
        M12[12-bigdata]
        Cert[certificado.html]
    end

    subgraph scripts [JavaScript]
        App[app.js]
        Quiz[quiz.js]
        QData[quiz-data.js]
        Collapse[module-collapse.js]
    end

    subgraph estilos [CSS]
        Global[styles.css]
        Module[module.css]
    end

    Index --> App
    Index --> Global

    M01 --> Quiz
    M01 --> QData
    M01 --> Collapse
    M01 --> Module
    M01 --> Global

    Cert --> Global
```

---

## Secciones de Cada Modulo

Cada uno de los 12 modulos sigue una estructura estandarizada:

| Seccion | Icono | Descripcion |
|---------|-------|-------------|
| Descripcion del Modulo | 📋 | Introduccion al dominio DAMA |
| Relacion con DAMA-DMBOK | 📘 | Marco teorico del dominio |
| Relacion con Gobierno Corporativo | ⚖️ | Contexto de gobierno corporativo |
| Cumplimiento — Ley 29733 | 🔒 | Aplicacion de la ley peruana |
| Objetivos de Aprendizaje | 🎯 | 5 objetivos por modulo |
| Conceptos Clave | 🔑 | 5-7 definiciones fundamentales |
| Explicacion Tecnica Detallada | ⚙️ | Profundizacion tecnica |
| Ejemplos en Organizaciones | 🏢 | Casos Peru e internacionales |
| Buenas Practicas Internacionales | ✅ | 5 practicas recomendadas |
| Errores Comunes | ⚠️ | 5 antipatrones frecuentes |
| Casos de Uso Reales | 💼 | Empresas reales (BCP, SUNAT, UPS) |
| Herramientas y Tecnologias | 🛠️ | 5 herramientas relevantes |
| Frameworks y Estandares | 📚 | 4-6 frameworks de referencia |
| Ejercicio Practico | ✏️ | Actividad aplicada |
| Recomendaciones de Implementacion | 💡 | 5 consejos de implementacion |
| Resumen del Modulo | 📌 | Sintesis final |
| Minijuego Interactivo | 🎮 | Simulador de decision |
| Evaluacion (5 preguntas) | 📝 | Examen de aprobacion |

---

## Frameworks y Estandares Referenciados

Cada modulo incluye una seccion de frameworks relevantes a su tema:

| Modulo | Frameworks |
|--------|-----------|
| 01 Gobierno | DAMA-DMBOK, DCAM (EDM Council), CMMI-DMM, DGI Framework, COBIT 2019 |
| 02 Arquitectura | TOGAF, Zachman, ArchiMate 3.2, DAMA-DMBOK Cap. 4 |
| 03 Modelado | ER Model (Chen), IDEF1X, UML (OMG), Data Vault 2.0 |
| 04 Almacenamiento | ITIL v4, ISO 27001, AWS Well-Architected, Azure CAF |
| 05 Seguridad | ISO 27001/27002, NIST CSF, CIS Controls, PCI-DSS, OWASP |
| 06 Integracion | EAI Patterns (Hohpe & Woolf), ETL/ELT Patterns, Medallion, Apache |
| 07 Documentos | ISO 15489, Dublin Core, ECM (AIIM), MoReq2010 |
| 08 Maestros | MDM Framework (IBM), CDMP, Gartner MDM, ISO 8000 |
| 09 DW/BI | Kimball, Inmon CIF, Data Vault 2.0, TDWI Maturity Model |
| 10 Metadatos | ISO 11179, Dublin Core, CWM (OMG), W3C DCAT |
| 11 Calidad | ISO 8000, ISO 25012, DQAF (FMI), TDQM (MIT), Six Sigma, DAMA Cap. 13 |
| 12 Big Data | NIST Big Data, Lambda, Kappa, CRISP-DM, AI/ML Governance (OECD) |

El modulo 11 (Calidad) incluye ademas una **tabla comparativa de dimensiones de calidad** entre DAMA-DMBOK, ISO 25012, ISO 8000 y DQAF del FMI.

---

## Autor

**Miguel J. Mogrovejo Cardenas**
Sistema desarrollado con fines educativos basado en el marco DAMA-DMBOK, principios de Gobierno Corporativo y la Ley N.° 29733 de Proteccion de Datos Personales del Peru.

&copy; 2026 mjmc4498. Todos los derechos reservados.
