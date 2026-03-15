const quizData = {
    1: [
        { q: "¿Qué diferencia principal existe entre Gobierno y Gestión de Datos?", options: ["El Gobierno es estratégico (políticas), la Gestión es táctica (ejecución).", "La Gestión crea leyes y el Gobierno las implementa.", "Son exactamente lo mismo según DAMA."], a: 0 },
        { q: "¿Cuál es el rol del CDO (Chief Data Officer)?", options: ["Programar bases de datos.", "Supervisar la oficina de recursos humanos.", "Liderar la estrategia de datos y asegurar el valor para el negocio."], a: 2 },
        { q: "¿Quién es el 'Data Steward'?", options: ["El dueño legal de la empresa.", "El custodio encargado de la ejecución y rutinas de calidad de datos.", "El software antivirus que protege la BD."], a: 1 },
        { q: "Según la Ley 29733 (Perú), ¿qué se requiere fundamentalmente para procesar datos personales?", options: ["El pago de impuestos.", "El consentimiento libre e informado del titular.", "Una base de datos Oracle."], a: 1 },
        { q: "El Gobierno de Datos se considera:", options: ["Un proyecto temporal.", "Un área exclusiva de TI.", "Un programa continuo centrado en el negocio."], a: 2 }
    ],
    2: [
        { q: "¿Qué conecta la Arquitectura de Datos internamente?", options: ["A los empleados de TI con RRHH.", "La estrategia de negocio con la ejecución tecnológica.", "Servidores físicos con cables de red."], a: 1 },
        { q: "¿Qué es un Modelo de Datos Empresarial?", options: ["Una vista global, conceptual o lógica de las entidades de la empresa.", "Un código en SQL.", "Un servidor en la nube."], a: 0 },
        { q: "¿Qué son los 'Silos de Datos'?", options: ["Bases de datos que no se conectan ni comparten información con el resto.", "Graneros para almacenar backups físicos.", "Bases de datos ultra rápidas."], a: 0 },
        { q: "PIDE en Perú se alinea arquitectónicamente mediante:", options: ["Envío de memorias USB entre ministerios.", "Una Arquitectura Orientada a Servicios (SOA) y APIs.", "Copias completas de bases de datos."], a: 1 },
        { q: "Un diagrama de linaje (Data Flow) permite:", options: ["Crear interfaces de usuario.", "Rastrear de dónde viene y a dónde va un dato.", "Programar en Java."], a: 1 }
    ],
    3: [
        { q: "¿Cuáles son los 3 niveles del modelado de datos?", options: ["Básico, Intermedio, Avanzado.", "Pequeño, Mediano, Big Data.", "Conceptual, Lógico, Físico."], a: 2 },
        { q: "El modelo lógico en base de datos es:", options: ["Específico a Oracle o SQL Server.", "Independiente de la tecnología de BD específica.", "Solo visual para el CEO."], a: 1 },
        { q: "¿Quién fue el creador del Modelo Relacional?", options: ["Bill Gates", "Edgar F. Codd", "Steve Jobs"], a: 1 },
        { q: "¿Qué significa Normalización en bases relacionales?", options: ["Hacer que los datos sean normales y aburridos.", "Estructurar tablas para evitar redundancia y anomalías de actualización.", "Eliminar la base de datos."], a: 1 },
        { q: "Una base de datos de Grafos es útil para:", options: ["Listar recibos.", "Descubrir relaciones y conexiones complejas (ej. Redes sociales).", "Guardar audios mp3."], a: 1 }
    ],
    4: [
        { q: "¿De qué se encarga principalmente el área de Almacenamiento y Op.?", options: ["Vender bases de datos.", "Diseñar logos institucionales.", "Garantizar disponibilidad, rendimiento y recuperación de las BD."], a: 2 },
        { q: "En la sigla ACID, la 'A' significa:", options: ["Automatización", "Atomicidad", "Análisis"], a: 1 },
        { q: "¿Qué hace un 'Rollback'?", options: ["Vuelve a la pantalla anterior.", "Acelera la base de datos.", "Deshace una transacción incompleta para dejar la BD coherente."], a: 2 },
        { q: "¿Qué significa RTO (Recovery Time Objective)?", options: ["El tiempo límite tolerado que la BD puede estar caída.", "El objetivo mensual de ventas.", "La velocidad del disco duro."], a: 0 },
        { q: "¿Qué permite el Archiving (Archivado)?", options: ["Imprimir datos en papel.", "Borrar definitivamente datos de producción.", "Mover datos inactivos a almacén secundario para liberar producción."], a: 2 }
    ],
    5: [
        { q: "La tríada CIA de la Seguridad significa:", options: ["Confidencialidad, Integridad y Disponibilidad", "Central Intelligence Agency", "Cloud, Internet, Apps"], a: 0 },
        { q: "El 'Principio de Menor Privilegio' implica:", options: ["Todos tienen acceso a todo.", "Los usuarios solo deben tener el acceso mínimo necesario para su trabajo.", "Nadie tiene acceso a nada por seguridad."], a: 1 },
        { q: "¿Qué tipo de dato es el DNI peruano bajo la ley?", options: ["Público y libre.", "Interno.", "Sensible / Confidencial, regulado por la Ley 29733."], a: 2 },
        { q: "¿Qué es el Data Masking (Enmascaramiento)?", options: ["Bloquear el monitor.", "Ocultar la base de datos en el sótano.", "Reemplazar caracteres reales por ficticios (ej. XXXX-XXXX) para proteger datos en pruebas."], a: 2 },
        { q: "Un ataque DDoS vulnera principalmente el pilar de:", options: ["Disponibilidad", "Confidencialidad", "Integridad"], a: 0 }
    ],
    6: [
        { q: "¿Qué significan las siglas ETL?", options: ["Extra, Total, Literal", "Extract, Transform, Load", "Enterprise Text Logic"], a: 1 },
        { q: "A diferencia de ETL, en una arquitectura ELT moderno:", options: ["Los datos nunca se cargan.", "Los datos se cargan en crudo a la nube y se transforman adentro.", "Los datos en ELT son estáticos."], a: 1 },
        { q: "¿Qué permite la Interoperabilidad?", options: ["Bloquear ataques cibernéticos.", "Que distintos sistemas puedan intercambiar y entender datos automáticamente.", "Comprar software caro."], a: 1 },
        { q: "Para integrar sistemas en tiempo real sin bases compartidas usamos:", options: ["Disquetes en motocicleta.", "ETL nocturno.", "Llamadas a APIs y Microservicios."], a: 2 },
        { q: "En Perú, ¿cuál es la gran plataforma estatal de interoperabilidad?", options: ["SUNAT", "El Banco de la Nación", "PIDE (Plataforma de Interoperabilidad del Estado)."], a: 2 }
    ],
    7: [
        { q: "¿Qué porcentaje aproximado de datos empresariales es 'no estructurado'?", options: ["5%", "80%", "0%"], a: 1 },
        { q: "Un ejemplo claro de dato No Estructurado es:", options: ["Una tabla Excel con 2 columnas (A,B).", "Una base de datos SQL.", "Una grabación de audio MP3 de una queja."], a: 2 },
        { q: "¿Qué tecnología ayuda a digitalizar recibos escaneados a texto?", options: ["IA y motores OCR.", "Cables HDMI.", "Protocolo FTP."], a: 0 },
        { q: "Taxonomía se refiere a:", options: ["Pago de impuestos SUNAT.", "Clasificar conceptos de forma jerárquica para búsqueda.", "Manejo de taxis corporativos."], a: 1 },
        { q: "La Retención Documental permite:", options: ["Cumplir con los ciclos de vida fiscales y destruir datos cuando caduquen legalmente.", "Que la BD nunca sea borrada.", "Contratar empleados fijos."], a: 0 }
    ],
    8: [
        { q: "Un Dato Maestro (Master Data) es:", options: ["Un archivo que pesa más de 5GB.", "Datos tácticos cambiantes cada segundo.", "Entidades clave (Cliente, Producto) compartidas en la organización."], a: 2 },
        { q: "Un Dato de Referencia (Reference Data) es:", options: ["Catálogos estandarizados fijos (Códigos ISO, País, Moneda).", "El currículo de recursos humanos.", "Las contraseñas del CTO."], a: 0 },
        { q: "¿Qué busca resolver como meta suprema un sistema MDM?", options: ["Cobrar cuotas del banco.", "Unificar duplicados para crear el Golden Record (Registro de Oro).", "Diseñar interfaces web."], a: 1 },
        { q: "Al emparejar 'Juan C.' con 'Juan Carlos' y unificar, hacemos:", options: ["Data Hacking", "Matching & Merging", "Borrado Masivo"], a: 1 },
        { q: "¿Por qué un banco tendería a duplicar clientes?", options: ["Porque es más seguro.", "Porque cada departamento (Tarjetas, Hipotecas) usa su sistema aislado.", "Porque las leyes lo exigen."], a: 1 }
    ],
    9: [
        { q: "Un Data Warehouse sirve centralmente para:", options: ["Registrar compras de e-commerce en milisegundos.", "Analizar historia consolidada y alimentar reportes de Inteligencia de Negocio.", "Guardar archivos PDF."], a: 1 },
        { q: "En el esquema de Estrella (Kimball), una tabla que guarda las 'Ventas' mides es la:", options: ["Tabla de Hechos (Fact Table)", "Tabla Dimensional", "Tabla Maestra"], a: 0 },
        { q: "Las tablas dimensionales guardan:", options: ["El monto en dólares de la transacción.", "El contexto: Quién, Cómo, Dónde, Cuándo.", "Los log del sistema Linux."], a: 1 },
        { q: "Para mostrar tendencias a través del tiempo en BI, el gráfico ideal es:", options: ["Dispersión", "Torta (Pie Chart)", "Gráfico de Líneas"], a: 2 },
        { q: "El propósito de Business Intelligence es:", options: ["Crear bases de datos.", "Brindar información accionable mediante dashboards a tomadores de decisión.", "Instalar antivirus."], a: 1 }
    ],
    10: [
        { q: "¿Qué son los Metadatos?", options: ["Datos en el metaverso.", "Bases de datos extremadamente grandes.", "El contexto: Datos acerca de los datos."], a: 2 },
        { q: "El Tipo de Dato 'VARCHAR(50)' es un ejemplo de metadato:", options: ["De Negocio", "Técnico", "Operacional"], a: 1 },
        { q: "Un Glosario de Negocios contiene fundamentalmente:", options: ["Código Python.", "Reglas, métricas y definiciones conceptuales accesibles al usuario final.", "Tiempos de ejecución nocturna de backups."], a: 1 },
        { q: "El metadato Operacional nos indica:", options: ["Cuánto mide el servidor físicamente.", "Datos de tiempo de carga y desempeño de procesos de datos diarios.", "Cómo se pronuncia en inglés."], a: 1 },
        { q: "Los metadatos EXIF de una fotografía incluyen:", options: ["El filtro de Instagram aplicado.", "Solo los colores base.", "Fecha, GPS, modelo de cámara con que se capturó."], a: 2 }
    ],
    11: [
        { q: "La frase 'Basura entra, Basura sale' (GIGO) alude a problemas en:", options: ["Calidad de Datos", "Metadatos Técnicos", "Almacenamiento SSD"], a: 0 },
        { q: "La Completitud de los datos mide:", options: ["Si el dato no se contradice.", "El porcentaje de campos vacíos (NULL) donde sí debería haber datos.", "Si los datos están protegidos con contraseña."], a: 1 },
        { q: "Si un DNI peruano se ingresa con 10 letras, falla en la dimensión de:", options: ["Disponibilidad", "Oportunidad", "Validez Sintáctica"], a: 2 },
        { q: "Oportunidad (Timeliness) significa que el dato:", options: ["Es muy alegre.", "Debe estar disponible a tiempo para cuando el negocio lo necesita.", "Viene en Oferta."], a: 1 },
        { q: "¿Qué es el Data Profiling (Perfilado)?", options: ["Eliminar perfiles de Facebook.", "Hacer un diagnóstico previo para encontrar patrones o errores sin limpiar nada aún.", "Publicar resultados de rentabilidad a la SUNAT."], a: 1 }
    ],
    12: [
        { q: "El uso primario del Data Lake frente al Data Warehouse es:", options: ["Analizar qué pasó en el histórico (Pasado).", "Alimentar reportes contables perfectos mensualmente.", "Alimentar modelos de Machine Learning y Data Science (Predictivo)."], a: 2 },
        { q: "¿Cuáles son 3 de las 'V' clásicas del Big Data?", options: ["Visión, Valoración, Variables", "Volumen, Velocidad, Variedad", "Viralidad, Validéz, Vector"], a: 1 },
        { q: "Machine Learning (Ciencia de Datos) es catalogada como analítica:", options: ["Predictiva (¿Qué pasará mañana?)", "Descriptiva (¿Qué pasó?)", "Prescriptiva (¿Qué debo hacer?)"], a: 0 },
        { q: "El Big Data maneja datos:", options: ["Genuinamente siempre Estructurados.", "Mayormente No Estructurados y Estructurados masivos.", "Siempre analógicos."], a: 1 },
        { q: "El tamaño inmenso que abarca billones de bytes y sirve de ejemplo para Big Data en redes es el:", options: ["Kilobyte", "Megabyte", "Zettabyte"], a: 2 }
    ]
};
