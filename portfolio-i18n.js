(function () {
  "use strict";

  const entries = [
    ["Sobre", "About", "Acerca de"],
    ["Idioma do site", "Site language", "Idioma del sitio"],
    ["Português", "Portuguese", "Portugués"],
    ["Español", "Spanish", "Español"],
    ["English", "English", "Inglés"],
    ["Análise de dados", "Data analysis", "Análisis de datos"],
    ["Análise", "Analysis", "Análisis"],
    ["Modelagem, métricas e indicadores", "Modeling, metrics and indicators", "Modelado, métricas e indicadores"],
    ["Modelagem", "Modeling", "Modelado"],
    ["ERP desktop", "Desktop ERP", "ERP de escritorio"],
    ["Ampliar imagem de", "Enlarge image of", "Ampliar imagen de"],
    ["Ampliar evidência:", "Enlarge evidence:", "Ampliar evidencia:"],
    ["Eficiência", "Efficiency", "Eficiencia"],
    ["Logística", "Logistics", "Logística"],
    ["Gestão", "Management", "Gestión"],
    ["Métricas", "Metrics", "Métricas"],
    ["Operação", "Operations", "Operaciones"],
    ["Comercial", "Commercial", "Comercial"],
    ["Estratégia", "Strategy", "Estrategia"],
    ["Modelagem Relacional", "Relational Modeling", "Modelado relacional"],
    ["CTEs", "CTEs", "CTEs"],
    ["Performance", "Performance", "Rendimiento"],
    ["Data Visualization", "Data Visualization", "Visualización de datos"],
    ["Análise de Dados", "Data Analysis", "Análisis de datos"],
    ["Case principal", "Featured case", "Caso principal"],
    ["Quatro perspectivas da solução", "Four views of the solution", "Cuatro perspectivas de la solución"],
    ["Galeria do projeto", "Project gallery", "Galería del proyecto"],
    ["Case principal · Business Intelligence", "Featured case · Business Intelligence", "Caso principal · Business Intelligence"],
    ["Estudo de caso de automação desktop com Python e PyAutoGUI: geração de relatórios, cálculo de períodos úteis, conferência de datas, configuração de posições e gerenciamento de feriados.", "Desktop automation case study with Python and PyAutoGUI: report generation, business-day calculations, date checks, position configuration and holiday management.", "Caso de estudio de automatización de escritorio con Python y PyAutoGUI: generación de informes, cálculo de días hábiles, verificación de fechas, configuración de posiciones y gestión de festivos."],
    ["Estudo de caso de análise de dados industriais com MySQL e SQL: modelagem relacional, análises comerciais, estoque, produção e benchmark de índices.", "Industrial data analytics case study with MySQL and SQL: relational modeling, commercial analysis, inventory, production and index benchmarking.", "Caso de estudio de análisis de datos industriales con MySQL y SQL: modelado relacional, análisis comercial, inventario, producción y pruebas comparativas de índices."],
    ["Portfólio de Bárbara Cabral Paschoalin, Analista de Dados e Business Intelligence com foco em indicadores estratégicos.", "Portfolio of Bárbara Cabral Paschoalin, Data Analyst and Business Intelligence professional focused on strategic indicators.", "Portafolio de Bárbara Cabral Paschoalin, Analista de Datos y Business Intelligence enfocada en indicadores estratégicos."],
    ["Bárbara Cabral Paschoalin | Portfólio de Análise de Dados", "Bárbara Cabral Paschoalin | Data Analytics Portfolio", "Bárbara Cabral Paschoalin | Portafolio de Análisis de Datos"],
    ["Automação de Relatórios com Python | Estudo de Caso — Bárbara Cabral Paschoalin", "Report Automation with Python | Case Study — Bárbara Cabral Paschoalin", "Automatización de informes con Python | Caso de estudio — Bárbara Cabral Paschoalin"],
    ["ERP Industrial Analytics | Estudo de Caso — Bárbara Cabral Paschoalin", "ERP Industrial Analytics | Case Study — Bárbara Cabral Paschoalin", "ERP Industrial Analytics | Caso de estudio — Bárbara Cabral Paschoalin"],
    ["O repositório público reúne o schema, os dados fictícios, as consultas analíticas, os testes de performance, a documentação e as evidências utilizadas neste estudo de caso.", "The public repository brings together the schema, fictional data, analytical queries, performance tests, documentation and evidence used in this case study.", "El repositorio público reúne el esquema, los datos ficticios, las consultas analíticas, las pruebas de rendimiento, la documentación y las evidencias utilizadas en este caso de estudio."],
    ["Dashboard de Pedidos & Atrasos", "Orders & Delays Dashboard", "Dashboard de pedidos y retrasos"],
    ["Solicitação de Estoque", "Inventory Request", "Solicitud de inventario"],
    ["Controle de Chapas", "Sheet Inventory Control", "Control de chapas"],
    ["Mapa de Entregas", "Delivery Map", "Mapa de entregas"],
    ["Curva ABC Estratégica", "Strategic ABC Analysis", "Curva ABC estratégica"],
    ["Dados comerciais e operacionais em uma visão integrada", "Commercial and operational data in an integrated view", "Datos comerciales y operativos en una vista integrada"],
    ["Desenvolvimento de dashboards e indicadores com dados operacionais exportados do ERP.", "Development of dashboards and indicators using operational data exported from the ERP.", "Desarrollo de dashboards e indicadores con datos operativos exportados del ERP."],
    ["Visualização ampliada das imagens", "Enlarged image viewer", "Visualización ampliada de imágenes"],
    ["Idioma do site", "Site language", "Idioma del sitio"],
    ["Visualizar", "View", "Ver"],
    ["Voltar ao portfólio", "Back to portfolio", "Volver al portafolio"],
    ["Habilidades", "Skills", "Habilidades"],
    ["Projetos", "Projects", "Proyectos"],
    ["Experiência", "Experience", "Experiencia"],
    ["Contato", "Contact", "Contacto"],
    ["Falar comigo", "Contact me", "Hablemos"],
    ["Ativar tema escuro", "Enable dark theme", "Activar tema oscuro"],
    ["Ativar tema claro", "Enable light theme", "Activar tema claro"],
    ["Alternar tema", "Toggle theme", "Cambiar tema"],
    ["Tecnologias utilizadas", "Technologies used", "Tecnologías utilizadas"],
    ["Tecnologias e recursos utilizados", "Technologies and resources used", "Tecnologías y recursos utilizados"],
    ["Voltar ao início", "Back to top", "Volver al inicio"],
    ["Abrir menu", "Open menu", "Abrir menú"],
    ["Fechar menu", "Close menu", "Cerrar menú"],
    ["Navegação principal", "Main navigation", "Navegación principal"],
    ["Navegação móvel", "Mobile navigation", "Navegación móvil"],

    ["Maringá – PR · Dados & Business Intelligence", "Maringá – PR · Data & Business Intelligence", "Maringá – PR · Datos e Inteligencia de Negocios"],
    ["Analista de Dados", "Data Analyst", "Analista de Datos"],
    ["& Business Intelligence", "& Business Intelligence", "e Business Intelligence"],
    ["Sou formada em Análise e Desenvolvimento de Sistemas e tenho experiência na indústria desde 2018. Uno conhecimento de processos comerciais e operacionais à análise de dados, desenvolvendo dashboards e indicadores com Power BI e SQL.", "I have a degree in Systems Analysis and Development and have worked in the industrial sector since 2018. I combine knowledge of commercial and operational processes with data analysis, developing Power BI and SQL dashboards and indicators.", "Soy graduada en Análisis y Desarrollo de Sistemas y tengo experiencia en la industria desde 2018. Combino conocimientos de procesos comerciales y operativos con análisis de datos, desarrollando dashboards e indicadores con Power BI y SQL."],
    ["Ver Projetos", "View projects", "Ver proyectos"],
    ["Ver experiência", "View experience", "Ver experiencia"],
    ["Baixar currículo", "Download résumé", "Descargar currículum"],
    ["Tecnologias principais", "Key technologies", "Tecnologías principales"],
    ["Fluxo analítico", "Analytics workflow", "Flujo analítico"],
    ["Da informação à ação", "From information to action", "De la información a la acción"],
    ["Do dado à decisão", "From data to decisions", "Del dato a la decisión"],
    ["Um processo estruturado para transformar informações dispersas em indicadores claros e úteis para o negócio.", "A structured process for turning scattered information into clear, useful business indicators.", "Un proceso estructurado para transformar información dispersa en indicadores claros y útiles para el negocio."],
    ["Fontes de dados", "Data sources", "Fuentes de datos"],
    ["ERP, planilhas e bases operacionais", "ERP, spreadsheets and operational databases", "ERP, hojas de cálculo y bases operativas"],
    ["Preparação", "Preparation", "Preparación"],
    ["Limpeza, padronização e validação", "Cleaning, standardization and validation", "Limpieza, estandarización y validación"],
    ["Análise", "Analysis", "Análisis"],
    ["Modelagem, métricas e indicadores", "Modeling, metrics and indicators", "Modelado, métricas e indicadores"],
    ["Decisão", "Decision", "Decisión"],
    ["Dashboards e acompanhamento", "Dashboards and monitoring", "Dashboards y seguimiento"],
    ["Da coleta à tomada de decisão", "From data collection to decision-making", "De la recopilación a la toma de decisiones"],

    ["8 anos", "8 years", "8 años"],
    ["de experiência na indústria", "of experience in the industrial sector", "de experiencia en la industria"],
    ["Vivência em processos comerciais e operacionais", "Hands-on experience with commercial and operational processes", "Experiencia práctica en procesos comerciales y operativos"],
    ["graduação concluída", "degree completed", "titulación completada"],
    ["Análise e Desenvolvimento de Sistemas", "Systems Analysis and Development", "Análisis y Desarrollo de Sistemas"],
    ["projetos de Business Intelligence", "Business Intelligence projects", "proyectos de Business Intelligence"],
    ["Dashboards, indicadores, DAX e Power Query", "Dashboards, KPIs, DAX and Power Query", "Dashboards, indicadores, DAX y Power Query"],
    ["projeto prático de banco de dados", "hands-on database project", "proyecto práctico de base de datos"],
    ["Modelagem relacional e consultas analíticas", "Relational modeling and analytical queries", "Modelado relacional y consultas analíticas"],

    ["Sobre Mim", "About Me", "Sobre mí"],
    ["Da indústria para os dados", "From industry to data", "De la industria a los datos"],
    ["Sou formada em", "I have a degree in", "Soy graduada en"],
    ["pela UniCesumar (2024). Minha trajetória profissional começou na indústria, em 2018, como Jovem Aprendiz.", "from UniCesumar (2024). My professional journey began in the industrial sector in 2018 as an apprentice.", "por UniCesumar (2024). Mi trayectoria profesional comenzó en la industria en 2018, como aprendiz."],
    ["Ao longo desse período, passei por rotinas administrativas, programação CNC e, desde 2021, atuo como Auxiliar Administrativa de Vendas. Essa experiência me deu contato direto com processos de produção, pedidos, orçamentos e informações de um ERP industrial.", "During this time, I worked in administrative routines and CNC programming. Since 2021, I have worked as a Sales Administrative Assistant. This experience has given me direct exposure to production processes, orders, quotations and industrial ERP information.", "Durante ese período, trabajé en tareas administrativas y programación CNC. Desde 2021, trabajo como Asistente Administrativa de Ventas. Esta experiencia me ha dado contacto directo con procesos de producción, pedidos, presupuestos e información de un ERP industrial."],
    ["Paralelamente às atividades do cargo, desenvolvi dashboards e indicadores em Power BI a partir de relatórios exportados do ERP. Nesse trabalho, utilizei Power Query, DAX e Excel para organizar os dados e construir visões de acompanhamento.", "Alongside my regular responsibilities, I developed Power BI dashboards and indicators using reports exported from the ERP. I used Power Query, DAX and Excel to organize data and build monitoring views.", "Paralelamente a mis funciones, desarrollé dashboards e indicadores en Power BI a partir de informes exportados del ERP. Utilicé Power Query, DAX y Excel para organizar los datos y crear vistas de seguimiento."],
    ["Tenho direcionado meus estudos e projetos para análise de dados, SQL e Business Intelligence, com foco em entender a estrutura dos dados e as regras de negócio antes de transformar informações em indicadores.", "I have focused my studies and projects on data analysis, SQL and Business Intelligence, prioritizing an understanding of data structures and business rules before turning information into indicators.", "He orientado mis estudios y proyectos al análisis de datos, SQL y Business Intelligence, centrándome en comprender la estructura de los datos y las reglas de negocio antes de convertir la información en indicadores."],
    ["Vivência industrial", "Industrial experience", "Experiencia industrial"],
    ["Experiência em rotinas administrativas, programação CNC e processos de produção.", "Experience in administrative routines, CNC programming and production processes.", "Experiencia en tareas administrativas, programación CNC y procesos de producción."],
    ["Análise de dados", "Data analysis", "Análisis de datos"],
    ["Desenvolvimento de dashboards e indicadores com dados operacionais exportados do ERP.", "Development of dashboards and indicators using operational data exported from the ERP.", "Desarrollo de dashboards e indicadores con datos operativos exportados del ERP."],
    ["Entendimento de processos", "Process knowledge", "Conocimiento de procesos"],
    ["Conhecimento prático de pedidos, orçamentos, produção e rotinas de uma indústria.", "Practical knowledge of orders, quotations, production and industrial routines.", "Conocimiento práctico de pedidos, presupuestos, producción y rutinas industriales."],

    ["Business Intelligence", "Business Intelligence", "Business Intelligence"],
    ["Transformação de dados em indicadores e análises visuais.", "Turning data into indicators and visual analysis.", "Transformación de datos en indicadores y análisis visuales."],
    ["Modelagem de Dados", "Data Modeling", "Modelado de datos"],
    ["Dashboards", "Dashboards", "Dashboards"],
    ["Data Visualization", "Data Visualization", "Visualización de datos"],
    ["Construção de painéis gerenciais e operacionais, definição de métricas e acompanhamento de indicadores.", "Building management and operational dashboards, defining metrics and monitoring indicators.", "Creación de paneles de gestión y operación, definición de métricas y seguimiento de indicadores."],
    ["Dados e Automação", "Data & Automation", "Datos y automatización"],
    ["Preparação, consulta, organização e integração de dados.", "Data preparation, querying, organization and integration.", "Preparación, consulta, organización e integración de datos."],
    ["ETL e Tratamento", "ETL & Data Processing", "ETL y tratamiento de datos"],
    ["Consultas e validações, tratamento de bases e automação de rotinas com planilhas, ERP e aplicações.", "Queries and validation, data cleaning, and automation of routines involving spreadsheets, ERP systems and applications.", "Consultas y validaciones, tratamiento de bases y automatización de tareas con hojas de cálculo, ERP y aplicaciones."],
    ["Negócio e Processos", "Business & Processes", "Negocio y procesos"],
    ["Conhecimento dos processos que dão contexto aos dados.", "Understanding the processes that give context to data.", "Conocimiento de los procesos que dan contexto a los datos."],
    ["KPIs e Indicadores", "KPIs & Indicators", "KPIs e indicadores"],
    ["Análise de Processos", "Process Analysis", "Análisis de procesos"],
    ["ERP Industrial", "Industrial ERP", "ERP industrial"],
    ["Análise Comercial", "Commercial Analysis", "Análisis comercial"],
    ["Produção e Estoque", "Production & Inventory", "Producción e inventario"],
    ["Melhoria Contínua", "Continuous Improvement", "Mejora continua"],
    ["Leitura de processos comerciais e industriais, identificação de gargalos e apoio à tomada de decisão.", "Understanding commercial and industrial processes, identifying bottlenecks and supporting decision-making.", "Análisis de procesos comerciales e industriales, identificación de cuellos de botella y apoyo a la toma de decisiones."],
    ["Aplicação prática", "Practical application", "Aplicación práctica"],
    ["Como conecto essas habilidades ao trabalho.", "How I apply these skills at work.", "Cómo conecto estas habilidades con el trabajo."],
    ["Meu diferencial", "What sets me apart", "Mi diferencial"],
    ["Vivência prática em ambiente industrial, conectando o conhecimento dos processos comerciais e produtivos à análise de dados e ao desenvolvimento de soluções.", "Hands-on industrial experience, connecting knowledge of commercial and production processes with data analysis and solution development.", "Experiencia práctica en un entorno industrial, conectando el conocimiento de los procesos comerciales y productivos con el análisis de datos y el desarrollo de soluciones."],

    ["Projetos em Destaque", "Featured Projects", "Proyectos destacados"],
    ["Dashboard de Produção", "Production Dashboard", "Dashboard de producción"],
    ["Consolidação de informações de produção antes dispersas em relatórios do ERP, com acompanhamento operacional em uma única fonte.", "Consolidation of production information previously scattered across ERP reports, enabling operational monitoring from a single source.", "Consolidación de información de producción que antes estaba dispersa en informes del ERP, con seguimiento operativo desde una única fuente."],
    ["As informações de produção e os indicadores estavam distribuídos em relatórios diferentes do ERP.", "Production information and indicators were spread across different ERP reports.", "La información de producción y los indicadores estaban distribuidos en distintos informes del ERP."],
    ["Dificuldade em monitorar produção e eficiência operacional.", "Difficulty monitoring production and operational efficiency.", "Dificultad para supervisar la producción y la eficiencia operativa."],
    ["Criação de um modelo de dados unificado no Power BI.", "Creation of a unified data model in Power BI.", "Creación de un modelo de datos unificado en Power BI."],
    ["Rastreamento de KPIs e suporte à tomada de decisão.", "KPI tracking and decision-making support.", "Seguimiento de KPIs y apoyo a la toma de decisiones."],
    ["Dashboard de Pedidos & Atrasos", "Orders & Delays Dashboard", "Dashboard de pedidos y retrasos"],
    ["Monitoramento operacional para identificar atrasos e melhorar a gestão de entregas.", "Operational monitoring to identify delays and improve delivery management.", "Seguimiento operativo para identificar retrasos y mejorar la gestión de entregas."],
    ["Necessidade de visualizar pedidos em aberto e acompanhar prazos.", "Need to view open orders and track deadlines.", "Necesidad de visualizar pedidos abiertos y hacer seguimiento de los plazos."],
    ["Organização dos pedidos por status e situação de entrega.", "Organization of orders by status and delivery situation.", "Organización de pedidos por estado y situación de entrega."],
    ["Construção de indicadores para destacar atrasos e prioridades.", "Development of indicators to highlight delays and priorities.", "Creación de indicadores para destacar retrasos y prioridades."],
    ["Visão consolidada para apoiar o acompanhamento operacional.", "Consolidated view to support operational monitoring.", "Vista consolidada para apoyar el seguimiento operativo."],
    ["Indicadores de Produção", "Production Indicators", "Indicadores de producción"],
    ["Análise de métricas produtivas para identificar gargalos e produtividade.", "Analysis of production metrics to identify bottlenecks and productivity trends.", "Análisis de métricas de producción para identificar cuellos de botella y productividad."],
    ["Necessidade de acompanhar indicadores de desempenho da produção.", "Need to monitor production performance indicators.", "Necesidad de supervisar los indicadores de rendimiento de producción."],
    ["Organização das métricas em uma visão analítica.", "Organization of metrics in an analytical view.", "Organización de métricas en una vista analítica."],
    ["Acompanhamento de produtividade e identificação de pontos de atenção.", "Productivity monitoring and identification of areas of concern.", "Seguimiento de la productividad e identificación de puntos de atención."],
    ["Indicadores apresentados para apoiar a análise da operação.", "Indicators presented to support operational analysis.", "Indicadores presentados para apoyar el análisis de la operación."],
    ["Curva ABC Estratégica", "Strategic ABC Analysis", "Curva ABC estratégica"],
    ["Análise comercial estratégica para priorização de clientes e concentração de receita.", "Strategic commercial analysis to prioritize customers and assess revenue concentration.", "Análisis comercial estratégico para priorizar clientes y evaluar la concentración de ingresos."],
    ["Necessidade de identificar os clientes mais importantes.", "Need to identify the most important customers.", "Necesidad de identificar a los clientes más importantes."],
    ["Análise comercial e de concentração de receita.", "Commercial analysis and revenue concentration.", "Análisis comercial y de concentración de ingresos."],
    ["Classificação dinâmica de produtos e clientes (ABC).", "Dynamic product and customer classification (ABC).", "Clasificación dinámica de productos y clientes (ABC)."],
    ["Melhor priorização de atendimento e foco comercial.", "Improved service prioritization and commercial focus.", "Mejor priorización de la atención y enfoque comercial."],
    ["Mapa de Entregas", "Delivery Map", "Mapa de entregas"],
    ["Sistema web para planejamento e acompanhamento de rotas de entrega, com visualização geográfica em tempo real.", "Web system for planning and monitoring delivery routes, with real-time geographic visualization.", "Sistema web para planificar y supervisar rutas de entrega, con visualización geográfica en tiempo real."],
    ["Necessidade de organizar entregas e consultar rotas em uma visão geográfica.", "Need to organize deliveries and view routes on a map.", "Necesidad de organizar entregas y consultar rutas en una vista geográfica."],
    ["Desenvolvimento de mapa interativo com Leaflet.js para apoiar o planejamento.", "Development of an interactive map with Leaflet.js to support planning.", "Desarrollo de un mapa interactivo con Leaflet.js para apoyar la planificación."],
    ["Interfaces para coordenação, motoristas e consulta pela equipe de vendas.", "Interfaces for coordination, drivers and sales team queries.", "Interfaces para coordinación, conductores y consultas del equipo de ventas."],
    ["Cadastro e reutilização de endereços de clientes.", "Customer address registration and reuse.", "Registro y reutilización de direcciones de clientes."],
    ["Controle de Chapas", "Sheet Inventory Control", "Control de chapas"],
    ["Sistema de rastreamento de chapas metálicas, do estoque até a produção, com totem, painel de TV e conferência.", "Metal sheet tracking system from inventory to production, with a kiosk, TV dashboard and verification.", "Sistema de seguimiento de chapas metálicas desde el inventario hasta la producción, con tótem, panel de TV y verificación."],
    ["Necessidade de registrar a movimentação de chapas entre estoque e produção.", "Need to record sheet movements between inventory and production.", "Necesidad de registrar el movimiento de chapas entre el inventario y la producción."],
    ["Interface de totem para registrar movimentações no chão de fábrica.", "Kiosk interface to record shop-floor movements.", "Interfaz de tótem para registrar movimientos en planta."],
    ["Painel de acompanhamento e página de conferência para o PCP.", "Monitoring dashboard and verification page for production planning and control.", "Panel de seguimiento y página de verificación para planificación y control de producción."],
    ["Integração com Google Sheets e Apps Script.", "Integration with Google Sheets and Apps Script.", "Integración con Google Sheets y Apps Script."],
    ["Solicitação de Estoque", "Inventory Request", "Solicitud de inventario"],
    ["Controle de estoque de peças com geração de etiquetas térmicas e leitura por QR Code.", "Parts inventory control with thermal label generation and QR Code scanning.", "Control de inventario de piezas con generación de etiquetas térmicas y lectura de códigos QR."],
    ["Necessidade de identificar peças e acompanhar sua movimentação no estoque.", "Need to identify parts and track their movement in inventory.", "Necesidad de identificar piezas y seguir sus movimientos en el inventario."],
    ["Aplicação web integrada ao Google Sheets e Apps Script.", "Web application integrated with Google Sheets and Apps Script.", "Aplicación web integrada con Google Sheets y Apps Script."],
    ["Geração de etiquetas térmicas para identificação dos itens.", "Generation of thermal labels to identify items.", "Generación de etiquetas térmicas para identificar artículos."],
    ["Leitura de QR Code para consulta e solicitação de peças.", "QR Code scanning to look up and request parts.", "Lectura de códigos QR para consultar y solicitar piezas."],
    ["ERP Industrial Analytics", "ERP Industrial Analytics", "ERP Industrial Analytics"],
    ["Projeto demonstrativo de análise de dados com MySQL, baseado em uma indústria fictícia. Integra dados comerciais, compras, estoque e produção para gerar indicadores e apoiar decisões operacionais.", "A MySQL data analytics demonstration project based on a fictional industrial company. It integrates commercial, purchasing, inventory and production data to generate indicators and support operational decisions.", "Proyecto demostrativo de análisis de datos con MySQL, basado en una industria ficticia. Integra datos comerciales, compras, inventario y producción para generar indicadores y apoyar decisiones operativas."],
    ["Modelagem relacional com tabelas de clientes, fornecedores, produtos, pedidos de venda e compra, estoque e ordens de produção.", "Relational modeling with tables for customers, suppliers, products, sales and purchase orders, inventory and production orders.", "Modelado relacional con tablas de clientes, proveedores, productos, pedidos de venta y compra, inventario y órdenes de producción."],
    ["Consultas analíticas com JOINs, agregações, CASE, CTEs, funções de janela e Views.", "Analytical queries using JOINs, aggregations, CASE, CTEs, window functions and views.", "Consultas analíticas con JOINs, agregaciones, CASE, CTEs, funciones de ventana y vistas."],
    ["Indicadores e análises de faturamento, pedidos, saldo e reposição de estoque, produção, qualidade e consumo de materiais.", "Indicators and analyses covering revenue, orders, inventory balances and replenishment, production, quality and material consumption.", "Indicadores y análisis de facturación, pedidos, saldos y reposición de inventario, producción, calidad y consumo de materiales."],
    ["Análise de desempenho com EXPLAIN ANALYZE e comparação entre índices simples e compostos.", "Performance analysis with EXPLAIN ANALYZE and comparison of single-column and composite indexes.", "Análisis de rendimiento con EXPLAIN ANALYZE y comparación entre índices simples y compuestos."],
    ["Base de dados 100% fictícia, criada para estudo e demonstração, sem informações confidenciais de empresas.", "100% fictional database created for learning and demonstration, with no confidential company information.", "Base de datos 100 % ficticia, creada para estudio y demostración, sin información confidencial de empresas."],
    ["Ver solução e detalhes", "View solution and details", "Ver solución y detalles"],
    ["Ver estudo de caso completo", "View full case study", "Ver estudio de caso completo"],
    ["Ver código-fonte no GitHub", "View source code on GitHub", "Ver código fuente en GitHub"],
    ["Case principal · Business Intelligence", "Featured case · Business Intelligence", "Caso principal · Business Intelligence"],
    ["Dados comerciais e operacionais em uma visão integrada", "Commercial and operational data in an integrated view", "Datos comerciales y operativos en una vista integrada"],
    ["Solução de Business Intelligence desenvolvida para consolidar informações de diferentes rotinas do negócio e facilitar o acompanhamento de pedidos, produção, prazos e desempenho comercial.", "Business Intelligence solution developed to consolidate information from different business routines and make it easier to monitor orders, production, deadlines and commercial performance.", "Solución de Business Intelligence desarrollada para consolidar información de distintas rutinas del negocio y facilitar el seguimiento de pedidos, producción, plazos y rendimiento comercial."],
    ["Contexto", "Context", "Contexto"],
    ["Informações distribuídas em relatórios e controles distintos dificultavam uma leitura conjunta dos indicadores comerciais e operacionais.", "Information spread across separate reports and controls made it difficult to get a unified view of commercial and operational indicators.", "La información distribuida en informes y controles separados dificultaba una lectura conjunta de los indicadores comerciales y operativos."],
    ["Solução", "Solution", "Solución"],
    ["Organização dos dados em um modelo analítico no Power BI, com páginas e indicadores voltados ao acompanhamento de diferentes áreas.", "Data organized into an analytical Power BI model, with pages and indicators designed to monitor different business areas.", "Organización de los datos en un modelo analítico en Power BI, con páginas e indicadores orientados al seguimiento de distintas áreas."],
    ["Escopo técnico", "Technical scope", "Alcance técnico"],
    ["páginas analíticas", "analytical pages", "páginas analíticas"],
    ["medidas DAX", "DAX measures", "medidas DAX"],
    ["tabelas de negócio no modelo", "business tables in the model", "tablas de negocio en el modelo"],
    ["Quatro perspectivas da solução", "Four views of the solution", "Cuatro perspectivas de la solución"],
    ["Selecione uma imagem para ampliar a visualização.", "Select an image to enlarge it.", "Selecciona una imagen para ampliarla."],
    ["Galeria do projeto", "Project gallery", "Galería del proyecto"],
    ["Imagem anterior", "Previous image", "Imagen anterior"],
    ["Próxima imagem", "Next image", "Imagen siguiente"],
    ["Banco de dados e SQL", "Database & SQL", "Base de datos y SQL"],
    ["Modelagem relacional, consultas analíticas e análise de performance com MySQL", "Relational modeling, analytical queries and performance analysis with MySQL", "Modelado relacional, consultas analíticas y análisis de rendimiento con MySQL"],
    ["Projeto prático · MySQL", "Hands-on project · MySQL", "Proyecto práctico · MySQL"],
    ["Banco de dados relacional desenvolvido para simular a operação de uma indústria. O projeto conecta informações de vendas, compras, produtos, estoque e produção em uma base fictícia, permitindo praticar consultas SQL e construir análises próximas de problemas reais de negócio.", "A relational database built to simulate the operations of an industrial company. The project connects sales, purchasing, product, inventory and production information in a fictional database, making it possible to practice SQL queries and build analyses based on realistic business problems.", "Base de datos relacional desarrollada para simular la operación de una industria. El proyecto conecta información de ventas, compras, productos, inventario y producción en una base ficticia, permitiendo practicar consultas SQL y crear análisis cercanos a problemas reales de negocio."],
    ["tabelas relacionais", "relational tables", "tablas relacionales"],
    ["O que foi desenvolvido", "What was developed", "Qué se desarrolló"],
    ["Modelagem relacional com chaves primárias, estrangeiras e restrições.", "Relational modeling with primary keys, foreign keys and constraints.", "Modelado relacional con claves primarias, foráneas y restricciones."],
    ["Consultas com JOINs, agregações, CTEs e Window Functions.", "Queries using JOINs, aggregations, CTEs and Window Functions.", "Consultas con JOINs, agregaciones, CTEs y Window Functions."],
    ["Views para organizar consultas analíticas de faturamento e estoque.", "Views to organize analytical revenue and inventory queries.", "Vistas para organizar consultas analíticas de facturación e inventario."],
    ["Testes de desempenho com EXPLAIN ANALYZE e análise de índices.", "Performance tests with EXPLAIN ANALYZE and index analysis.", "Pruebas de rendimiento con EXPLAIN ANALYZE y análisis de índices."],
    ["Explorar repositório no GitHub", "Explore the repository on GitHub", "Explorar el repositorio en GitHub"],
    ["Automação e RPA", "Automation & RPA", "Automatización y RPA"],
    ["Automação desktop com Python para rotinas recorrentes de relatórios", "Desktop automation with Python for recurring reporting routines", "Automatización de escritorio con Python para tareas recurrentes de informes"],
    ["Projeto prático · Python", "Hands-on project · Python", "Proyecto práctico · Python"],
    ["Case anonimizado", "Anonymized case study", "Caso anonimizado"],
    ["Automação de relatórios com Python", "Report automation with Python", "Automatización de informes con Python"],
    ["Automação de uma rotina recorrente em ERP desktop, com cálculo de períodos úteis, conferência das datas, execução de relatórios e encaminhamento ao destino configurado.", "Automation of a recurring desktop ERP routine, including business-day calculations, date verification, report execution and delivery to the configured destination.", "Automatización de una rutina recurrente en un ERP de escritorio, con cálculo de días hábiles, verificación de fechas, ejecución de informes y envío al destino configurado."],
    ["Cálculo de períodos úteis", "Business-day calculation", "Cálculo de días hábiles"],
    ["Conferência e cancelamento", "Verification and cancellation", "Verificación y cancelación"],
    ["Tempo manual", "Manual process", "Tiempo manual"],
    ["Automação + conferência", "Automation + verification", "Automatización + verificación"],
    ["30 minutos economizados por execução · redução média de 75% no tempo.", "30 minutes saved per run · average time reduction of 75%.", "30 minutos ahorrados por ejecución · reducción media del 75 % del tiempo."],
    ["Evidências da automação", "Automation evidence", "Evidencias de la automatización"],
    ["Evidência anterior", "Previous evidence", "Evidencia anterior"],
    ["Ver estudo de caso completo", "View full case study", "Ver estudio de caso completo"],
    ["Capturas reais com e-mail e caminho local ocultados. Clique na imagem para ampliar.", "Real screenshots with email addresses and local paths hidden. Click the image to enlarge it.", "Capturas reales con correos electrónicos y rutas locales ocultos. Haz clic en la imagen para ampliarla."],
    ["Outras soluções digitais", "Other digital solutions", "Otras soluciones digitales"],
    ["Aplicações e automações desenvolvidas para necessidades operacionais", "Applications and automations developed for operational needs", "Aplicaciones y automatizaciones desarrolladas para necesidades operativas"],
    ["Ampliar imagem de ", "Enlarge image of ", "Ampliar imagen de "],
    ["Ampliar evidência: ", "Enlarge evidence: ", "Ampliar evidencia: "],
    ["Ver ", "View ", "Ver "],
    ["Evidência anterior", "Previous evidence", "Evidencia anterior"],
    ["Próxima evidência", "Next evidence", "Siguiente evidencia"],
    ["Visualização ampliada das imagens", "Enlarged image viewer", "Visualización ampliada de imágenes"],
    ["Fechar imagem ampliada", "Close enlarged image", "Cerrar imagen ampliada"],
    ["Visualização em tela cheia", "Full-screen view", "Vista a pantalla completa"],

    ["Experiência Profissional", "Professional Experience", "Experiencia profesional"],
    ["Trajetória na indústria · 2018 – Atual", "Industrial career · 2018 – Present", "Trayectoria en la industria · 2018 – Actualidad"],
    ["Auxiliar Administrativa de Vendas", "Sales Administrative Assistant", "Asistente Administrativa de Ventas"],
    ["2021 – Atual", "2021 – Present", "2021 – Actualidad"],
    ["Elaboração de orçamentos, lançamento e acompanhamento de pedidos de venda.", "Preparing quotations, entering and tracking sales orders.", "Elaboración de presupuestos, registro y seguimiento de pedidos de venta."],
    ["Consulta, conferência e atualização de informações comerciais no ERP industrial.", "Reviewing, checking and updating commercial information in the industrial ERP.", "Consulta, verificación y actualización de información comercial en el ERP industrial."],
    ["Atendimento a clientes e apoio às rotinas de faturamento e à equipe de vendas.", "Customer service and support for invoicing routines and the sales team.", "Atención a clientes y apoyo a las tareas de facturación y al equipo de ventas."],
    ["Acompanhamento de informações de pedidos e prazos, em contato direto com os processos da operação.", "Tracking order information and deadlines through direct contact with operational processes.", "Seguimiento de la información de pedidos y plazos, en contacto directo con los procesos operativos."],
    ["ERP industrial", "Industrial ERP", "ERP industrial"],
    ["Pedidos e orçamentos", "Orders & quotations", "Pedidos y presupuestos"],
    ["Processos comerciais", "Commercial processes", "Procesos comerciales"],
    ["Programadora CNC", "CNC Programmer", "Programadora CNC"],
    ["Programação de máquinas CNC para operações de corte de chapas metálicas.", "Programming CNC machines for metal sheet cutting operations.", "Programación de máquinas CNC para operaciones de corte de chapas metálicas."],
    ["Análise de encaixe e aproveitamento de material conforme as especificações dos serviços.", "Analyzing part nesting and material utilization according to job specifications.", "Análisis del encaje y aprovechamiento del material según las especificaciones de los trabajos."],
    ["Interpretação de desenhos técnicos e contato direto com a rotina de produção.", "Interpreting technical drawings and working directly with production routines.", "Interpretación de planos técnicos y contacto directo con las tareas de producción."],
    ["Programação CNC", "CNC Programming", "Programación CNC"],
    ["Desenho técnico", "Technical Drawing", "Dibujo técnico"],
    ["Produção industrial", "Industrial Production", "Producción industrial"],
    ["Jovem Aprendiz", "Apprentice", "Aprendiz"],
    ["Apoio às rotinas administrativas e à organização de informações.", "Supporting administrative routines and information organization.", "Apoyo a las tareas administrativas y a la organización de información."],
    ["Contato inicial com processos de pedidos e atividades de suporte à operação.", "Initial exposure to order processes and operational support activities.", "Primer contacto con procesos de pedidos y actividades de apoyo operativo."],
    ["Rotinas administrativas", "Administrative routines", "Tareas administrativas"],
    ["Organização", "Organization", "Organización"],
    ["Suporte operacional", "Operational Support", "Apoyo operativo"],
    ["Cargo atual", "Current role", "Puesto actual"],
    ["Da operação à análise de dados", "From operations to data analysis", "De las operaciones al análisis de datos"],
    ["A vivência em diferentes etapas da indústria me ajuda a entender o contexto por trás dos números. A partir desse conhecimento, desenvolvo projetos de análise de dados e dashboards em Power BI, transformando informações de processos comerciais e operacionais em indicadores que apoiam a tomada de decisão.", "My experience across different stages of industrial operations helps me understand the context behind the numbers. I use this knowledge to develop data analysis projects and Power BI dashboards, turning commercial and operational process information into indicators that support decision-making.", "Mi experiencia en distintas etapas de la industria me ayuda a comprender el contexto detrás de los números. A partir de ese conocimiento, desarrollo proyectos de análisis de datos y dashboards en Power BI, transformando información de procesos comerciales y operativos en indicadores que apoyan la toma de decisiones."],
    ["Formação Acadêmica", "Education", "Formación académica"],
    ["Concluído em 2024", "Completed in 2024", "Finalizado en 2024"],
    ["Formação em lógica de programação, banco de dados, desenvolvimento de sistemas e análise de requisitos.", "Training in programming logic, databases, systems development and requirements analysis.", "Formación en lógica de programación, bases de datos, desarrollo de sistemas y análisis de requisitos."],

    ["Vamos conversar sobre uma oportunidade?", "Let’s talk about an opportunity", "¿Hablamos de una oportunidad?"],
    ["Estou em busca de uma oportunidade na área de Análise de Dados / Business Intelligence, onde possa aplicar meus conhecimentos em Power BI, SQL e análise de processos para apoiar equipes com informações que contribuam para decisões melhores.", "I am seeking an opportunity in Data Analysis / Business Intelligence where I can apply my knowledge of Power BI, SQL and process analysis to help teams make better-informed decisions.", "Estoy buscando una oportunidad en Análisis de Datos / Business Intelligence donde pueda aplicar mis conocimientos de Power BI, SQL y análisis de procesos para ayudar a los equipos a tomar mejores decisiones."],
    ["WhatsApp", "WhatsApp", "WhatsApp"],
    ["E-mail", "Email", "Correo electrónico"],
    ["LinkedIn", "LinkedIn", "LinkedIn"],
    ["Todos os direitos reservados.", "All rights reserved.", "Todos los derechos reservados."],
    ["Maringá - PR, Brasil", "Maringá, Paraná, Brazil", "Maringá, Paraná, Brasil"],
    ["©", "©", "©"],

    ["Voltar aos projetos", "Back to projects", "Volver a proyectos"],
    ["Voltar ao portfólio", "Back to portfolio", "Volver al portafolio"],
    ["Portfólio", "Portfolio", "Portafolio"],
    ["Estudo de caso · Python e RPA", "Case study · Python & RPA", "Caso de estudio · Python y RPA"],
    ["Automação desktop para executar rotinas recorrentes de geração e encaminhamento de relatórios em um ERP, com cálculo automático de períodos, conferência prévia de datas e controles para interromper a execução com segurança.", "Desktop automation for recurring report generation and delivery routines in an ERP, with automatic period calculations, date checks and controls to safely stop execution.", "Automatización de escritorio para ejecutar rutinas recurrentes de generación y envío de informes en un ERP, con cálculo automático de períodos, verificación previa de fechas y controles para detener la ejecución de forma segura."],
    ["Tecnologias utilizadas", "Technologies used", "Tecnologías utilizadas"],
    ["Automação desktop", "Desktop automation", "Automatización de escritorio"],
    ["Rotinas úteis", "Business-day routines", "Rutinas de días hábiles"],
    ["Visão geral do fluxo", "Workflow overview", "Visión general del flujo"],
    ["Representação conceitual, sem reproduzir a interface do sistema corporativo.", "Conceptual representation; it does not reproduce the corporate system interface.", "Representación conceptual; no reproduce la interfaz del sistema corporativo."],
    ["01 · PREPARAÇÃO", "01 · PREPARATION", "01 · PREPARACIÓN"],
    ["Datas e feriados", "Dates and holidays", "Fechas y festivos"],
    ["Cálculo dos períodos úteis", "Business-day period calculation", "Cálculo de períodos hábiles"],
    ["02 · VALIDAÇÃO", "02 · VALIDATION", "02 · VALIDACIÓN"],
    ["Conferência", "Verification", "Verificación"],
    ["Usuário confirma antes de iniciar", "User confirms before starting", "El usuario confirma antes de comenzar"],
    ["03 · EXECUÇÃO", "03 · EXECUTION", "03 · EJECUCIÓN"],
    ["Interações automatizadas", "Automated interactions", "Interacciones automatizadas"],
    ["04 · CONTROLE", "04 · CONTROL", "04 · CONTROL"],
    ["Finalização", "Completion", "Finalización"],
    ["Envio e opções de cancelamento", "Delivery and cancellation options", "Envío y opciones de cancelación"],
    ["Resultado observado", "Observed results", "Resultados observados"],
    ["Redução do tempo operacional", "Reduced operational time", "Reducción del tiempo operativo"],
    ["Comparação do tempo médio para concluir a rotina de filtragem dos relatórios e atualização da planilha no Google Sheets.", "Comparison of the average time required to filter reports and update the Google Sheets spreadsheet.", "Comparación del tiempo medio necesario para filtrar los informes y actualizar la hoja de cálculo de Google Sheets."],
    ["Antes da automação · processo manual", "Before automation · manual process", "Antes de la automatización · proceso manual"],
    ["Em média,", "On average,", "En promedio,"],
    ["40 minutos", "40 minutes", "40 minutos"],
    ["para filtrar os relatórios, realizar as etapas manualmente e inserir as informações na planilha do Google Sheets.", "to filter reports, perform the steps manually and enter the information into the Google Sheets spreadsheet.", "para filtrar los informes, realizar los pasos manualmente e introducir la información en la hoja de Google Sheets."],
    ["Depois da automação · execução + conferência", "After automation · execution + verification", "Después de la automatización · ejecución + verificación"],
    ["10 minutos", "10 minutes", "10 minutos"],
    ["considerando o tempo de execução da automação e a conferência dos resultados.", "including automation execution time and result verification.", "considerando el tiempo de ejecución de la automatización y la verificación de los resultados."],
    ["30 minutos economizados", "30 minutes saved", "30 minutos ahorrados"],
    ["Redução média por execução da rotina.", "Average reduction per run.", "Reducción media por ejecución de la rutina."],
    ["75% menos tempo", "75% less time", "75 % menos tiempo"],
    ["Queda do tempo médio em relação ao processo manual.", "Reduction in average time compared with the manual process.", "Reducción del tiempo medio en comparación con el proceso manual."],
    ["4 vezes mais rápido", "4 times faster", "4 veces más rápido"],
    ["A rotina passou a levar cerca de um quarto do tempo anterior.", "The routine now takes about one quarter of the previous time.", "La rutina pasó a tardar aproximadamente una cuarta parte del tiempo anterior."],
    ["Tempos médios informados com base na execução habitual do processo; o resultado pode variar conforme a quantidade de relatórios e a necessidade de conferência.", "Average times are based on the usual process; results may vary depending on the number of reports and the verification required.", "Los tiempos medios se basan en la ejecución habitual del proceso; el resultado puede variar según la cantidad de informes y la verificación necesaria."],
    ["Evidências visuais", "Visual evidence", "Evidencias visuales"],
    ["As ferramentas em funcionamento", "The tools in action", "Las herramientas en funcionamiento"],
    ["Capturas reais das interfaces auxiliares e das etapas de confirmação da automação. As informações de e-mail e caminho local foram borradas para preservar dados do ambiente.", "Real screenshots of the helper interfaces and automation confirmation steps. Email addresses and local paths have been blurred to protect environment data.", "Capturas reales de las interfaces auxiliares y de las etapas de confirmación de la automatización. Se han difuminado los correos electrónicos y las rutas locales para proteger los datos del entorno."],
    ["Menu principal", "Main menu", "Menú principal"],
    ["Conferência das datas", "Date verification", "Verificación de fechas"],
    ["Confirmação de início", "Start confirmation", "Confirmación de inicio"],
    ["Configurador de posições", "Position configurator", "Configurador de posiciones"],
    ["Gerenciador de feriados", "Holiday manager", "Gestor de festivos"],
    ["Menu", "Menu", "Menú"],
    ["Datas", "Dates", "Fechas"],
    ["Início", "Start", "Inicio"],
    ["Configuração", "Configuration", "Configuración"],
    ["Feriados", "Holidays", "Festivos"],
    ["Use as setas ou selecione uma miniatura", "Use the arrows or select a thumbnail", "Usa las flechas o selecciona una miniatura"],
    ["Visualização ampliada da evidência", "Enlarged evidence viewer", "Vista ampliada de la evidencia"],
    ["Contexto", "Context", "Contexto"],
    ["O desafio operacional", "The operational challenge", "El desafío operativo"],
    ["A rotina exigia acessar telas do ERP, selecionar relatórios, preencher datas e parâmetros, gerar os arquivos e encaminhá-los ao destino configurado. A repetição dessas etapas tornava a atividade adequada à automação de interface.", "The routine required opening ERP screens, selecting reports, entering dates and parameters, generating files and sending them to a configured destination. Repeating these steps made the task a good candidate for interface automation.", "La rutina requería acceder a pantallas del ERP, seleccionar informes, introducir fechas y parámetros, generar archivos y enviarlos al destino configurado. La repetición de estos pasos hacía que la actividad fuera adecuada para la automatización de interfaces."],
    ["Objetivo", "Objective", "Objetivo"],
    ["Padronizar a execução de relatórios recorrentes, reduzindo a necessidade de repetir manualmente a navegação e o preenchimento de campos.", "Standardize recurring report execution and reduce the need to repeat navigation and field entry manually.", "Estandarizar la ejecución de informes recurrentes y reducir la necesidad de repetir manualmente la navegación y el llenado de campos."],
    ["Abordagem", "Approach", "Enfoque"],
    ["Construção de um fluxo em Python que controla mouse e teclado no ERP desktop, com interfaces auxiliares para configuração, validação e manutenção de feriados.", "Development of a Python workflow that controls the mouse and keyboard in the desktop ERP, with helper interfaces for configuration, validation and holiday management.", "Desarrollo de un flujo en Python que controla el ratón y el teclado en el ERP de escritorio, con interfaces auxiliares para configuración, validación y mantenimiento de festivos."],
    ["Funcionamento", "How it works", "Funcionamiento"],
    ["Etapas da automação", "Automation steps", "Etapas de la automatización"],
    ["O processo foi dividido em etapas para tornar a execução previsível e permitir conferência antes de interagir com o sistema.", "The process was divided into steps to make execution predictable and allow verification before interacting with the system.", "El proceso se dividió en etapas para que la ejecución fuera predecible y permitiera verificar antes de interactuar con el sistema."],
    ["Preparação das datas", "Date preparation", "Preparación de fechas"],
    ["Lê o calendário de feriados e identifica o último dia útil anterior para calcular os períodos necessários.", "Reads the holiday calendar and identifies the previous business day to calculate the required periods.", "Lee el calendario de festivos e identifica el último día hábil anterior para calcular los períodos necesarios."],
    ["Seleção e conferência", "Selection and verification", "Selección y verificación"],
    ["Permite escolher uma rotina específica ou executar o conjunto. Exibe as datas calculadas para confirmação do usuário.", "Allows a specific routine or the full set to be selected. Displays calculated dates for user confirmation.", "Permite elegir una rutina específica o ejecutar el conjunto. Muestra las fechas calculadas para que el usuario las confirme."],
    ["Execução no ERP", "ERP execution", "Ejecución en el ERP"],
    ["Usa PyAutoGUI e colagem pelo clipboard para navegar, preencher campos, gerar relatórios e encaminhá-los ao destino configurado.", "Uses PyAutoGUI and clipboard pasting to navigate, fill fields, generate reports and send them to the configured destination.", "Utiliza PyAutoGUI y pegado desde el portapapeles para navegar, rellenar campos, generar informes y enviarlos al destino configurado."],
    ["Controle e encerramento", "Control and completion", "Control y finalización"],
    ["Registra mensagens no console, encerra a rotina selecionada e oferece mecanismos de interrupção durante a execução.", "Logs messages to the console, closes the selected routine and provides interruption mechanisms during execution.", "Registra mensajes en la consola, cierra la rutina seleccionada y ofrece mecanismos de interrupción durante la ejecución."],
    ["Regras de negócio", "Business rules", "Reglas de negocio"],
    ["Cálculo de períodos com dias úteis", "Business-day period calculation", "Cálculo de períodos con días hábiles"],
    ["O calendário é considerado antes do preenchimento dos filtros. Sábados, domingos e datas cadastradas como feriado não são tratados como dias úteis.", "The calendar is checked before filters are filled in. Saturdays, Sundays and dates registered as holidays are not treated as business days.", "El calendario se tiene en cuenta antes de rellenar los filtros. Los sábados, domingos y las fechas registradas como festivos no se consideran días hábiles."],
    ["Data de referência", "Reference date", "Fecha de referencia"],
    ["Último dia útil anterior à data de execução.", "Last business day before the execution date.", "Último día hábil anterior a la fecha de ejecución."],
    ["Período mensal", "Monthly period", "Período mensual"],
    ["Do primeiro dia do mês da referência até o último dia útil anterior.", "From the first day of the reference month through the previous business day.", "Desde el primer día del mes de referencia hasta el último día hábil anterior."],
    ["Período anual", "Annual period", "Período anual"],
    ["Do primeiro dia do ano da referência até o último dia útil anterior.", "From the first day of the reference year through the previous business day.", "Desde el primer día del año de referencia hasta el último día hábil anterior."],
    ["Componentes auxiliares", "Helper components", "Componentes auxiliares"],
    ["Ferramentas de configuração e manutenção", "Configuration and maintenance tools", "Herramientas de configuración y mantenimiento"],
    ["Além do script principal, o projeto possui duas aplicações auxiliares em Tkinter.", "In addition to the main script, the project includes two helper applications built with Tkinter.", "Además del script principal, el proyecto cuenta con dos aplicaciones auxiliares desarrolladas con Tkinter."],
    ["Permite capturar posições do mouse por tecla de atalho, testar coordenadas e salvar a configuração em JSON. Também permite configurar o destino dos relatórios.", "Allows mouse positions to be captured with a keyboard shortcut, coordinates to be tested and settings to be saved as JSON. It also allows the report destination to be configured.", "Permite capturar posiciones del ratón mediante un atajo de teclado, probar coordenadas y guardar la configuración en JSON. También permite configurar el destino de los informes."],
    ["Gerenciador de feriados", "Holiday manager", "Gestor de festivos"],
    ["Interface para consultar e cadastrar datas no arquivo CSV, com validação de formato, prevenção de duplicidade e atualização da lista.", "Interface for viewing and adding dates to the CSV file, with format validation, duplicate prevention and list updates.", "Interfaz para consultar y registrar fechas en el archivo CSV, con validación de formato, prevención de duplicados y actualización de la lista."],
    ["Conferência e segurança", "Verification and safety", "Verificación y seguridad"],
    ["Confirmação das datas antes de iniciar, cancelamento por ESC e mecanismo FailSafe do PyAutoGUI para interromper a automação.", "Date confirmation before starting, cancellation with ESC and the PyAutoGUI FailSafe mechanism to stop the automation.", "Confirmación de fechas antes de iniciar, cancelación con ESC y mecanismo FailSafe de PyAutoGUI para detener la automatización."],
    ["Implementação", "Implementation", "Implementación"],
    ["Stack técnica", "Technology stack", "Stack tecnológica"],
    ["Bibliotecas e recursos utilizados conforme os scripts desenvolvidos.", "Libraries and resources used in the scripts.", "Bibliotecas y recursos utilizados según los scripts desarrollados."],
    ["Decisões e limitações", "Design decisions and limitations", "Decisiones y limitaciones"],
    ["Cuidados da solução", "Solution considerations", "Consideraciones de la solución"],
    ["Controles implementados", "Implemented controls", "Controles implementados"],
    ["Conferência explícita das datas antes de iniciar. Escolha entre executar uma rotina ou o conjunto de relatórios. Configuração das posições para diferentes disposições de tela. Interrupção por ESC e pelo mecanismo FailSafe. Separação entre automação principal, configuração e calendário.", "Explicit date verification before starting. Choice between running one routine or the full report set. Position configuration for different screen layouts. Interruption with ESC and the FailSafe mechanism. Separation of the main automation, configuration and calendar.", "Verificación explícita de fechas antes de iniciar. Elección entre ejecutar una rutina o el conjunto de informes. Configuración de posiciones para distintas disposiciones de pantalla. Interrupción mediante ESC y el mecanismo FailSafe. Separación entre automatización principal, configuración y calendario."],
    ["Limitações técnicas", "Technical limitations", "Limitaciones técnicas"],
    ["Automação baseada em coordenadas de mouse e sequência de teclas. Depende do ERP estar aberto na tela esperada e das posições estarem configuradas corretamente. Durante a execução, o usuário não deve interferir com mouse ou teclado. Não é uma integração via API: o controle ocorre pela interface desktop.", "Automation based on mouse coordinates and keystroke sequences. It depends on the ERP being open on the expected screen and positions being configured correctly. The user should not interfere with the mouse or keyboard during execution. This is not an API integration; control takes place through the desktop interface.", "Automatización basada en coordenadas del ratón y secuencias de teclas. Depende de que el ERP esté abierto en la pantalla esperada y de que las posiciones estén bien configuradas. Durante la ejecución, el usuario no debe intervenir con el ratón ni el teclado. No es una integración mediante API: el control se realiza a través de la interfaz de escritorio."],
    ["Privacidade:", "Privacy:", "Privacidad:"],
    ["este estudo de caso descreve a solução de forma anonimizada. Não são publicados código-fonte, credenciais, endereços de e-mail, coordenadas, nomes de relatórios internos, dados operacionais ou capturas da interface proprietária.", "this case study describes the solution in anonymized form. Source code, credentials, email addresses, coordinates, internal report names, operational data or screenshots of the proprietary interface are not published.", "este caso de estudio describe la solución de forma anonimizada. No se publican código fuente, credenciales, direcciones de correo electrónico, coordenadas, nombres de informes internos, datos operativos ni capturas de la interfaz propietaria."],

    ["Estudo de caso · SQL & Data Analytics", "Case study · SQL & Data Analytics", "Caso de estudio · SQL y análisis de datos"],
    ["Da estrutura do banco à análise dos indicadores: um projeto demonstrativo em MySQL que simula a operação de uma indústria e conecta informações comerciais, compras, estoque e produção.", "From database structure to indicator analysis: a MySQL demonstration project that simulates an industrial operation and connects commercial, purchasing, inventory and production information.", "De la estructura de la base de datos al análisis de indicadores: un proyecto demostrativo en MySQL que simula la operación de una industria y conecta información comercial, compras, inventario y producción."],
    ["Acessar código no GitHub", "Access code on GitHub", "Acceder al código en GitHub"],
    ["Ver as seis evidências", "View the six pieces of evidence", "Ver las seis evidencias"],
    ["Visão comercial", "Commercial overview", "Vista comercial"],
    ["Dados inteiramente fictícios", "Entirely fictional data", "Datos totalmente ficticios"],
    ["O problema de negócio que o projeto simula", "The business problem simulated by the project", "El problema de negocio que simula el proyecto"],
    ["Uma operação industrial reúne dados de diferentes etapas. O desafio é estruturar essas informações de forma consistente e conseguir responder perguntas práticas sem depender de consultas isoladas e difíceis de manter.", "An industrial operation brings together data from different stages. The challenge is to structure this information consistently and answer practical questions without relying on isolated, hard-to-maintain queries.", "Una operación industrial reúne datos de distintas etapas. El reto es estructurar esta información de forma coherente y responder preguntas prácticas sin depender de consultas aisladas y difíciles de mantener."],
    ["Construir uma base relacional de demonstração e utilizar SQL para transformar registros operacionais em análises que apoiem decisões sobre vendas, disponibilidade de materiais e desempenho da produção.", "Build a demonstration relational database and use SQL to turn operational records into analyses that support decisions about sales, material availability and production performance.", "Construir una base de datos relacional de demostración y utilizar SQL para transformar registros operativos en análisis que apoyen decisiones sobre ventas, disponibilidad de materiales y rendimiento de la producción."],
    ["Definir entidades, relacionamentos e regras de integridade.", "Define entities, relationships and integrity rules.", "Definir entidades, relaciones y reglas de integridad."],
    ["Gerar dados de teste coerentes com o cenário industrial.", "Generate test data consistent with the industrial scenario.", "Generar datos de prueba coherentes con el escenario industrial."],
    ["Criar consultas reutilizáveis para indicadores e análises.", "Create reusable queries for indicators and analyses.", "Crear consultas reutilizables para indicadores y análisis."],
    ["Examinar planos de execução e o efeito de índices.", "Examine execution plans and the effect of indexes.", "Examinar planes de ejecución y el efecto de los índices."],
    ["Perguntas que a base permite responder", "Questions the database can answer", "Preguntas que permite responder la base de datos"],
    ["Qual é o faturamento, o ticket médio e a situação dos pedidos?", "What are revenue, average order value and order status?", "¿Cuáles son la facturación, el valor medio del pedido y el estado de los pedidos?"],
    ["Quais materiais estão disponíveis e quais precisam de reposição?", "Which materials are available and which need replenishment?", "¿Qué materiales están disponibles y cuáles necesitan reposición?"],
    ["A quantidade planejada para produção está sendo cumprida?", "Is the planned production quantity being achieved?", "¿Se está cumpliendo la cantidad planificada de producción?"],
    ["Como o consumo real de matéria-prima se compara ao previsto?", "How does actual raw material consumption compare with the forecast?", "¿Cómo se compara el consumo real de materia prima con el previsto?"],
    ["Como os índices alteram o volume de linhas examinadas nas consultas?", "How do indexes change the number of rows examined by queries?", "¿Cómo cambian los índices el número de filas examinadas por las consultas?"],
    ["Escopo e confidencialidade:", "Scope and confidentiality:", "Alcance y confidencialidad:"],
    ["este é um projeto independente, feito com cadastros, pedidos, movimentações e apontamentos fictícios. Não utiliza banco de dados, documentos, logotipo ou informações comerciais reais de qualquer empresa.", "this is an independent project built with fictional records, orders, movements and production entries. It does not use any company’s real database, documents, logo or commercial information.", "este es un proyecto independiente, realizado con registros, pedidos, movimientos y apuntes ficticios. No utiliza bases de datos, documentos, logotipos ni información comercial real de ninguna empresa."],
    ["Como os dados percorrem o projeto", "How data flows through the project", "Cómo fluyen los datos por el proyecto"],
    ["O trabalho foi organizado em camadas para separar a criação da estrutura, a preparação dos dados, as regras analíticas e a validação dos resultados.", "The work was organized in layers to separate schema creation, data preparation, analytical rules and result validation.", "El trabajo se organizó en capas para separar la creación de la estructura, la preparación de los datos, las reglas analíticas y la validación de resultados."],
    ["Entidades organizadas por domínio", "Entities organized by domain", "Entidades organizadas por dominio"],
    ["O schema erp_industrial_analytics reúne onze tabelas principais e duas views para facilitar consultas recorrentes. Os relacionamentos foram definidos com chaves e restrições para manter a consistência dos registros.", "The erp_industrial_analytics schema contains eleven main tables and two views to simplify recurring queries. Relationships use keys and constraints to keep records consistent.", "El esquema erp_industrial_analytics reúne once tablas principales y dos vistas para facilitar consultas recurrentes. Las relaciones se definieron con claves y restricciones para mantener la coherencia de los registros."],
    ["Cadastros", "Master data", "Datos maestros"],
    ["Entidades de referência utilizadas pelos demais módulos.", "Reference entities used by the other modules.", "Entidades de referencia utilizadas por los demás módulos."],
    ["Comercial e compras", "Sales and purchasing", "Ventas y compras"],
    ["Cabeçalhos e itens dos documentos de venda e aquisição.", "Headers and line items for sales and purchasing documents.", "Cabeceras y partidas de los documentos de venta y compra."],
    ["Estoque e produção", "Inventory and production", "Inventario y producción"],
    ["Rastreio de movimentações, ordens, apontamentos e composição de produtos.", "Tracking of movements, orders, production entries and product structures.", "Seguimiento de movimientos, órdenes, registros de producción y composición de productos."],
    ["Integridade dos dados", "Data integrity", "Integridad de los datos"],
    ["O modelo utiliza PKs e FKs, restrições UNIQUE e CHECK, tipos adequados para valores monetários e quantidades, além de relacionamentos entre documentos, produtos e movimentos.", "The model uses primary and foreign keys, UNIQUE and CHECK constraints, suitable data types for monetary values and quantities, and relationships between documents, products and movements.", "El modelo utiliza claves primarias y foráneas, restricciones UNIQUE y CHECK, tipos adecuados para valores monetarios y cantidades, además de relaciones entre documentos, productos y movimientos."],
    ["Views criadas", "Views created", "Vistas creadas"],
    ["vw_faturamento_pedidos consolida informações dos pedidos para análise comercial.", "vw_faturamento_pedidos consolidates order information for commercial analysis.", "vw_faturamento_pedidos consolida información de pedidos para el análisis comercial."],
    ["vw_saldo_estoque organiza a visão de saldo por produto para consultas de disponibilidade.", "vw_saldo_estoque organizes inventory balances by product for availability queries.", "vw_saldo_estoque organiza la vista de saldo por producto para consultas de disponibilidad."],
    ["Três frentes conectadas à operação", "Three areas connected to operations", "Tres áreas conectadas a la operación"],
    ["As consultas do projeto integrador foram agrupadas por área de negócio e executadas sobre a base fictícia.", "The integrator project queries were grouped by business area and run against the fictional database.", "Las consultas del proyecto integrador se agruparon por área de negocio y se ejecutaron sobre la base ficticia."],
    ["05 · Técnicas SQL", "05 · SQL techniques", "05 · Técnicas SQL"],
    ["Recursos aplicados na prática", "Techniques applied in practice", "Recursos aplicados en la práctica"],
    ["O foco não foi apenas escrever consultas, mas combinar técnicas de SQL para estruturar análises, tratar exceções e expressar regras de negócio.", "The goal was not just to write queries, but to combine SQL techniques to structure analyses, handle exceptions and express business rules.", "El objetivo no fue solo escribir consultas, sino combinar técnicas SQL para estructurar análisis, tratar excepciones y expresar reglas de negocio."],
    ["Exemplo · CTE para demanda de materiais", "Example · CTE for material demand", "Ejemplo · CTE para demanda de materiales"],
    ["Trecho ilustrativo de uma das etapas da consulta de necessidade de reposição. No repositório está disponível a consulta completa, incluindo a composição dos materiais, cálculo de perdas e comparação com o saldo do estoque.", "Illustrative excerpt from one stage of the replenishment needs query. The repository contains the full query, including material composition, loss calculations and comparison with inventory balances.", "Fragmento ilustrativo de una de las etapas de la consulta de necesidades de reposición. En el repositorio está disponible la consulta completa, incluida la composición de materiales, el cálculo de pérdidas y la comparación con el saldo del inventario."],
    ["Comparação de índices em uma base de teste", "Index comparison in a test database", "Comparación de índices en una base de prueba"],
    ["Foi criado um conjunto isolado de 100.000 movimentações fictícias para observar o efeito de índices simples e compostos em uma consulta filtrada por produto, origem e data.", "An isolated dataset of 100,000 fictional movements was created to observe the effect of single-column and composite indexes on a query filtered by product, source and date.", "Se creó un conjunto aislado de 100.000 movimientos ficticios para observar el efecto de índices simples y compuestos en una consulta filtrada por producto, origen y fecha."],
    ["Cenário", "Scenario", "Escenario"],
    ["Linhas examinadas", "Rows examined", "Filas examinadas"],
    ["Tempo observado", "Observed time", "Tiempo observado"],
    ["Sem índice secundário", "Without secondary index", "Sin índice secundario"],
    ["Índice simples", "Single-column index", "Índice simple"],
    ["Índice composto", "Composite index", "Índice compuesto"],
    ["Índice avaliado", "Index evaluated", "Índice evaluado"],
    ["O que o plano mostrou", "What the execution plan showed", "Qué mostró el plan"],
    ["No cenário medido, o índice composto permitiu aproveitar os três filtros, examinar menos linhas e eliminar a operação Sort no plano observado. A escolha do índice pelo otimizador foi conferida após atualização das estatísticas.", "In the measured scenario, the composite index used all three filters, examined fewer rows and eliminated the Sort operation in the observed plan. The optimizer’s index choice was checked after statistics were updated.", "En el escenario medido, el índice compuesto permitió aprovechar los tres filtros, examinar menos filas y eliminar la operación Sort del plan observado. La elección del índice por el optimizador se verificó después de actualizar las estadísticas."],
    ["Os tempos são medições pontuais no MySQL Server 8.4.13 com InnoDB, usando dados artificiais e ambiente local. São resultados daquele teste, não uma promessa de ganho em produção. Índices também têm custo de armazenamento e podem aumentar o trabalho de INSERT, UPDATE e DELETE; a escolha precisa considerar o padrão de leitura e escrita.", "Times are point-in-time measurements on MySQL Server 8.4.13 with InnoDB, using artificial data in a local environment. They reflect that test and do not guarantee production gains. Indexes also require storage and can increase INSERT, UPDATE and DELETE work; selection should consider read and write patterns.", "Los tiempos son mediciones puntuales en MySQL Server 8.4.13 con InnoDB, utilizando datos artificiales y un entorno local. Son resultados de esa prueba, no una promesa de mejora en producción. Los índices también requieren almacenamiento y pueden aumentar el trabajo de INSERT, UPDATE y DELETE; la elección debe considerar el patrón de lectura y escritura."],
    ["Resultados das consultas no MySQL Workbench", "Query results in MySQL Workbench", "Resultados de las consultas en MySQL Workbench"],
    ["As seis capturas abaixo documentam a execução das análises comerciais, de pedidos, estoque e produção. Clique em qualquer imagem para ampliar.", "The six screenshots below document the execution of commercial, order, inventory and production analyses. Click any image to enlarge it.", "Las seis capturas siguientes documentan la ejecución de los análisis comerciales, de pedidos, inventario y producción. Haz clic en cualquier imagen para ampliarla."],
    ["Indicadores comerciais", "Commercial indicators", "Indicadores comerciales"],
    ["Análise de pedidos", "Order analysis", "Análisis de pedidos"],
    ["Saldo de estoque", "Inventory balance", "Saldo de inventario"],
    ["Necessidade de materiais", "Material requirements", "Necesidades de materiales"],
    ["Indicadores de produção", "Production indicators", "Indicadores de producción"],
    ["Consumo de materiais", "Material consumption", "Consumo de materiales"],
    ["Projeto documentado e reproduzível", "Documented and reproducible project", "Proyecto documentado y reproducible"],
    ["Os arquivos foram separados por finalidade para facilitar a navegação e permitir que outra pessoa explore a modelagem, os scripts e os resultados.", "Files were organized by purpose to make navigation easier and allow others to explore the data model, scripts and results.", "Los archivos se organizaron por finalidad para facilitar la navegación y permitir que otras personas exploren el modelado, los scripts y los resultados."],
    ["Principais diretórios", "Main directories", "Directorios principales"],
    ["criação das tabelas e carga dos dados fictícios.", "table creation and loading of fictional data.", "creación de tablas y carga de datos ficticios."],
    ["consultas finais por domínio de negócio.", "final queries by business domain.", "consultas finales por dominio de negocio."],
    ["exercícios e análises SQL por técnica.", "SQL exercises and analyses by technique.", "ejercicios y análisis SQL por técnica."],
    ["criação de visões analíticas.", "creation of analytical views.", "creación de vistas analíticas."],
    ["EXPLAIN e scripts de benchmark.", "EXPLAIN and benchmark scripts.", "EXPLAIN y scripts de benchmark."],
    ["documentação e capturas dos resultados.", "documentation and result screenshots.", "documentación y capturas de los resultados."],
    ["Ambiente utilizado", "Environment used", "Entorno utilizado"],
    ["MySQL Server 8.4.13.", "MySQL Server 8.4.13.", "MySQL Server 8.4.13."],
    ["Engine InnoDB e charset utf8mb4.", "InnoDB engine and utf8mb4 character set.", "Motor InnoDB y conjunto de caracteres utf8mb4."],
    ["Dados inteiramente fictícios e criados para o estudo.", "Entirely fictional data created for this study.", "Datos totalmente ficticios creados para este estudio."],
    ["Versionamento com Git e publicação no GitHub.", "Version control with Git and publication on GitHub.", "Control de versiones con Git y publicación en GitHub."],
    ["O README do repositório contém a descrição geral e os caminhos dos arquivos SQL.", "The repository README contains the overview and paths to the SQL files.", "El README del repositorio contiene la descripción general y las rutas de los archivos SQL."],
    ["Explore o projeto", "Explore the project", "Explora el proyecto"],
    ["Veja os scripts e a estrutura completa", "Explore the scripts and full structure", "Consulta los scripts y la estructura completa"],
    ["O repositório público reúne o schema, os dados fictícios, as consultas analíticas, os testes de performance, a documentação e as evidências utilizadas neste estudo de caso.", "The public repository brings together the schema, fictional data, analytical queries, performance tests, documentation and evidence used in this case study.", "El repositorio público reúne el esquema, los datos ficticios, las consultas analíticas, las pruebas de rendimiento, la documentación y las evidencias utilizadas en este caso de estudio."],
    ["Abrir repositório", "Open repository", "Abrir repositorio"],
    ["Voltar aos projetos", "Back to projects", "Volver a proyectos"],
    ["Voltar ao portfólio", "Back to portfolio", "Volver al portafolio"],
    ["Evidência do projeto", "Project evidence", "Evidencia del proyecto"],
    ["11 tabelas relacionais principais", "11 main relational tables", "11 tablas relacionales principales"],
    ["2 views analíticas", "2 analytical views", "2 vistas analíticas"],
    ["3 frentes de análise", "3 analysis areas", "3 áreas de análisis"],
    ["6 evidências de execução", "6 execution evidence items", "6 evidencias de ejecución"],
    ["01 · Visão geral", "01 · Overview", "01 · Visión general"],
    ["02 · Arquitetura", "02 · Architecture", "02 · Arquitectura"],
    ["01 Estrutura e carga", "01 Structure and loading", "01 Estructura y carga"],
    ["Criação do schema, tabelas, chaves primárias e estrangeiras, restrições de integridade e inserção de dados fictícios para simular os fluxos de operação.", "Creation of the schema, tables, primary and foreign keys, integrity constraints and fictional data to simulate operational workflows.", "Creación del esquema, tablas, claves primarias y foráneas, restricciones de integridad e inserción de datos ficticios para simular los flujos operativos."],
    ["02 Camada analítica", "02 Analytics layer", "02 Capa analítica"],
    ["Views, consultas SQL, CTEs, agregações e funções de janela para relacionar eventos de vendas, compras, estoque e produção.", "Views, SQL queries, CTEs, aggregations and window functions to connect sales, purchasing, inventory and production events.", "Vistas, consultas SQL, CTEs, agregaciones y funciones de ventana para relacionar eventos de ventas, compras, inventario y producción."],
    ["03 Validação e performance", "03 Validation and performance", "03 Validación y rendimiento"],
    ["Execução das consultas no MySQL Workbench, conferência dos resultados e avaliação dos planos com EXPLAIN e EXPLAIN ANALYZE.", "Execution of queries in MySQL Workbench, result verification and plan evaluation using EXPLAIN and EXPLAIN ANALYZE.", "Ejecución de consultas en MySQL Workbench, verificación de resultados y evaluación de planes con EXPLAIN y EXPLAIN ANALYZE."],
    ["03 · Modelagem relacional", "03 · Relational modeling", "03 · Modelado relacional"],
    ["04 · Análises desenvolvidas", "04 · Analyses developed", "04 · Análisis desarrollados"],
    ["Três frentes conectadas à operação", "Three areas connected to operations", "Tres áreas conectadas a la operación"],
    ["As consultas do projeto integrador foram agrupadas por área de negócio e executadas sobre a base fictícia.", "The integrator project queries were grouped by business area and run against the fictional database.", "Las consultas del proyecto integrador se agruparon por área de negocio y se ejecutaron sobre la base ficticia."],
    ["01 / COMERCIAL", "01 / COMMERCIAL", "01 / COMERCIAL"],
    ["Pedidos e faturamento", "Orders and revenue", "Pedidos y facturación"],
    ["Consolidação de indicadores para acompanhar o desempenho comercial.", "Consolidated indicators to monitor commercial performance.", "Consolidación de indicadores para supervisar el rendimiento comercial."],
    ["Faturamento e ticket médio.", "Revenue and average order value.", "Facturación y valor medio del pedido."],
    ["Pedidos entregues, pendentes e sem itens.", "Delivered, pending and empty orders.", "Pedidos entregados, pendientes y sin artículos."],
    ["Faturamento por cliente e participação na receita.", "Revenue by customer and share of revenue.", "Facturación por cliente y participación en los ingresos."],
    ["Classificação e análise de prazos.", "Deadline classification and analysis.", "Clasificación y análisis de plazos."],
    ["02 / ESTOQUE", "02 / INVENTORY", "02 / INVENTARIO"],
    ["Disponibilidade e reposição", "Availability and replenishment", "Disponibilidad y reposición"],
    ["Visibilidade do saldo e da necessidade de materiais para atender à produção.", "Visibility into inventory balances and material requirements for production.", "Visibilidad del saldo y de las necesidades de materiales para atender a la producción."],
    ["Saldo por produto e movimentações.", "Balance by product and movements.", "Saldo por producto y movimientos."],
    ["Alertas de estoque mínimo.", "Minimum stock alerts.", "Alertas de inventario mínimo."],
    ["Necessidade de matéria-prima por ordem.", "Raw material requirements by order.", "Necesidad de materia prima por orden."],
    ["Demanda considerando perdas previstas na estrutura.", "Demand including expected losses in the product structure.", "Demanda considerando las pérdidas previstas en la estructura."],
    ["03 / PRODUÇÃO", "03 / PRODUCTION", "03 / PRODUCCIÓN"],
    ["Produtividade e consumo", "Productivity and consumption", "Productividad y consumo"],
    ["Comparação entre o que foi planejado, produzido, aprovado e consumido.", "Comparison of planned, produced, approved and consumed quantities.", "Comparación entre lo planificado, producido, aprobado y consumido."],
    ["Quantidade planejada, produzida e aprovada.", "Planned, produced and approved quantities.", "Cantidad planificada, producida y aprobada."],
    ["Taxa de conclusão e percentual de refugo.", "Completion rate and scrap percentage.", "Tasa de finalización y porcentaje de rechazo."],
    ["Indicadores por etapa, centro de trabalho e máquina.", "Indicators by stage, work center and machine.", "Indicadores por etapa, centro de trabajo y máquina."],
    ["Consumo previsto versus consumo registrado.", "Expected consumption versus recorded consumption.", "Consumo previsto frente al consumo registrado."],
    ["08 · Organização do repositório", "08 · Repository organization", "08 · Organización del repositorio"],
    ["Faturamento, ticket médio e situação dos pedidos.", "Revenue, average order value and order status.", "Facturación, valor medio del pedido y estado de los pedidos."],
    ["Classificação, prazos e participação dos pedidos.", "Classification, deadlines and order share.", "Clasificación, plazos y participación de los pedidos."],
    ["Saldo atual e classificação de disponibilidade.", "Current balance and availability classification.", "Saldo actual y clasificación de disponibilidad."],
    ["Demanda de matéria-prima versus estoque disponível.", "Raw material demand versus available inventory.", "Demanda de materia prima frente al inventario disponible."],
    ["Planejado, produzido, aprovado e refugo.", "Planned, produced, approved and scrap.", "Planificado, producido, aprobado y rechazo."],
    ["Consumo previsto comparado ao registrado.", "Expected consumption compared with recorded consumption.", "Consumo previsto comparado con el registrado."],
    ["1 de 5", "1 of 5", "1 de 5"],
    ["2 de 5", "2 of 5", "2 de 5"],
    ["3 de 5", "3 of 5", "3 de 5"],
    ["4 de 5", "4 of 5", "4 de 5"],
    ["5 de 5", "5 of 5", "5 de 5"],
    ["Fechar ✕", "Close ✕", "Cerrar ✕"],
    ["Visualização ampliada da evidência", "Enlarged evidence view", "Vista ampliada de la evidencia"],
    ["Amostra", "Sample", "Muestra"],

    ["© 2026 Bárbara Cabral Paschoalin. Todos os direitos reservados.", "© 2026 Bárbara Cabral Paschoalin. All rights reserved.", "© 2026 Bárbara Cabral Paschoalin. Todos los derechos reservados."],
    ["© 2026 Bárbara Cabral Paschoalin · Portfólio de Análise de Dados & BI", "© 2026 Bárbara Cabral Paschoalin · Data Analytics & BI Portfolio", "© 2026 Bárbara Cabral Paschoalin · Portafolio de Análisis de Datos & BI"],
    ["© Bárbara Cabral Paschoalin · Portfólio", "© Bárbara Cabral Paschoalin · Portfolio", "© Bárbara Cabral Paschoalin · Portafolio"],
    // ---- Estudo de caso e card: ERP Industrial 3D com IA
    ["ERP Industrial 3D com IA | Estudo de Caso — Bárbara Cabral Paschoalin", "ERP Industrial 3D with AI | Case Study — Bárbara Cabral Paschoalin", "ERP Industrial 3D con IA | Caso de Estudio — Bárbara Cabral Paschoalin"],
    ["Estudo de caso full stack: painel industrial 3D com Three.js, API Node/Express, banco MySQL e assistente de IA com function calling, publicado gratuitamente.", "Full stack case study: 3D industrial dashboard with Three.js, a Node/Express API, a MySQL database and an AI assistant using function calling, published for free.", "Caso de estudio full stack: panel industrial 3D con Three.js, API Node/Express, base de datos MySQL y asistente de IA con function calling, publicado gratuitamente."],
    ["ERP Industrial 3D com IA | Estudo de Caso", "ERP Industrial 3D with AI | Case Study", "ERP Industrial 3D con IA | Caso de Estudio"],
    ["Painel industrial em 3D com API Node, MySQL e assistente de IA que consulta o banco por ferramentas seguras.", "3D industrial dashboard with a Node API, MySQL and an AI assistant that queries the database through safe tools.", "Panel industrial en 3D con API Node, MySQL y asistente de IA que consulta la base de datos mediante herramientas seguras."],
    ["/ Projetos / ERP Industrial 3D", "/ Projects / ERP Industrial 3D", "/ Proyectos / ERP Industrial 3D"],
    ["Estudo de caso · Full stack & IA aplicada", "Case study · Full stack & applied AI", "Caso de estudio · Full stack e IA aplicada"],
    ["3D com IA", "3D with AI", "3D con IA"],
    ["Um painel industrial em 3D no qual o gestor conversa com os dados da fábrica: uma API Node lê o banco MySQL e um assistente de IA responde em português, consulta o banco por ferramentas seguras e leva a câmera até a máquina, o lote ou o vendedor citado.", "A 3D industrial dashboard where the manager talks to the factory's data: a Node API reads the MySQL database and an AI assistant answers in Portuguese, queries the database through safe tools and moves the camera to the machine, lot or salesperson mentioned.", "Un panel industrial en 3D donde el gestor conversa con los datos de la fábrica: una API Node lee la base de datos MySQL y un asistente de IA responde en portugués, consulta la base mediante herramientas seguras y lleva la cámara hasta la máquina, el lote o el vendedor mencionado."],
    ["Tecnologias e ferramentas utilizadas", "Technologies and tools used", "Tecnologías y herramientas utilizadas"],
    ["IA com function calling", "AI with function calling", "IA con function calling"],
    ["Abrir demonstração ao vivo", "Open live demo", "Abrir demostración en vivo"],
    ["Código no GitHub", "Code on GitHub", "Código en GitHub"],
    ["Ver as capturas", "See the screenshots", "Ver las capturas"],
    ["A demonstração usa uma API em plano gratuito: na primeira visita após um período sem acesso, ela pode levar cerca de 1 minuto para acordar.", "The demo uses an API on a free plan: on the first visit after a period without access, it may take about 1 minute to wake up.", "La demostración usa una API en plan gratuito: en la primera visita tras un período sin acceso, puede tardar alrededor de 1 minuto en despertar."],
    ["Deploy gratuito", "Free deployment", "Despliegue gratuito"],
    ["Painel de produção em 3D com máquinas, KPIs e evolução diária", "3D production dashboard with machines, KPIs and daily output", "Panel de producción en 3D con máquinas, KPIs y evolución diaria"],
    ["Painel de produção", "Production dashboard", "Panel de producción"],
    ["Resumo do projeto", "Project summary", "Resumen del proyecto"],
    ["máquinas na planta 3D", "machines in the 3D plant", "máquinas en la planta 3D"],
    ["ferramentas expostas ao modelo de IA", "tools exposed to the AI model", "herramientas expuestas al modelo de IA"],
    ["provedores de IA suportados", "supported AI providers", "proveedores de IA soportados"],
    ["de hospedagem, com planos gratuitos", "in hosting, using free plans", "de alojamiento, con planes gratuitos"],
    ["O problema e a proposta", "The problem and the proposal", "El problema y la propuesta"],
    ["Painéis de BI mostram números, mas raramente dizem onde está o problema e o que fazer a respeito. O projeto junta contexto espacial, dados de um banco relacional e uma conversa em linguagem natural, sem dar à IA acesso livre ao banco.", "BI dashboards show numbers but rarely say where the problem is or what to do about it. The project combines spatial context, data from a relational database and a natural-language conversation, without giving the AI free access to the database.", "Los paneles de BI muestran números, pero rara vez dicen dónde está el problema y qué hacer al respecto. El proyecto une contexto espacial, datos de una base relacional y una conversación en lenguaje natural, sin dar a la IA acceso libre a la base de datos."],
    ["Construir uma aplicação completa, do banco ao navegador, que mostre a operação de uma metalúrgica em 3D e responda perguntas do gestor com dados reais da base.", "Build a complete application, from the database to the browser, that shows a metalworking plant's operation in 3D and answers the manager's questions with real data from the database.", "Construir una aplicación completa, de la base de datos al navegador, que muestre la operación de una metalúrgica en 3D y responda preguntas del gestor con datos reales de la base."],
    ["Modelar um ERP industrial em MySQL, com vendas, estoque e produção.", "Model an industrial ERP in MySQL, covering sales, inventory and production.", "Modelar un ERP industrial en MySQL, con ventas, inventario y producción."],
    ["Expor os dados por uma API Node/Express com consultas fixas.", "Expose the data through a Node/Express API with fixed queries.", "Exponer los datos mediante una API Node/Express con consultas fijas."],
    ["Representar a fábrica em 3D e destacar máquinas, lotes e vendedores.", "Represent the factory in 3D and highlight machines, lots and salespeople.", "Representar la fábrica en 3D y destacar máquinas, lotes y vendedores."],
    ["Integrar um LLM por function calling, com limites e alternativa offline.", "Integrate an LLM through function calling, with limits and an offline alternative.", "Integrar un LLM mediante function calling, con límites y alternativa offline."],
    ["Publicar tudo na nuvem sem custo.", "Publish everything in the cloud at no cost.", "Publicar todo en la nube sin costo."],
    ["Perguntas que o painel responde", "Questions the dashboard answers", "Preguntas que responde el panel"],
    ["Quais máquinas estão paradas ou com refugo alto?", "Which machines are stopped or have high scrap?", "¿Qué máquinas están paradas o con alto desecho?"],
    ["Quais vendedores estão abaixo da meta?", "Which salespeople are below target?", "¿Qué vendedores están por debajo de la meta?"],
    ["Quais lotes de chapas estão abaixo do estoque mínimo e o que repor?", "Which sheet lots are below minimum stock and what should be replenished?", "¿Qué lotes de chapas están por debajo del stock mínimo y qué reponer?"],
    ["Qual é a tendência dos pedidos para os próximos períodos?", "What is the order trend for the coming periods?", "¿Cuál es la tendencia de los pedidos para los próximos períodos?"],
    ["Como uma máquina se compara às demais?", "How does a machine compare with the others?", "¿Cómo se compara una máquina con las demás?"],
    ["este é um projeto independente de portfólio, com clientes, pedidos, máquinas, vendedores e estoque fictícios gerados por scripts SQL públicos. Não utiliza dados, marcas ou documentos de nenhuma empresa real.", "this is an independent portfolio project, with fictitious customers, orders, machines, salespeople and inventory generated by public SQL scripts. It uses no data, brands or documents from any real company.", "este es un proyecto independiente de portafolio, con clientes, pedidos, máquinas, vendedores e inventario ficticios generados por scripts SQL públicos. No utiliza datos, marcas ni documentos de ninguna empresa real."],
    ["Quatro camadas e uma rede de segurança", "Four layers and a safety net", "Cuatro capas y una red de seguridad"],
    ["O navegador nunca fala direto com o banco nem recebe chaves: tudo passa pela API. Se a IA ficar indisponível, o painel continua respondendo com um motor local.", "The browser never talks directly to the database or receives keys: everything goes through the API. If the AI becomes unavailable, the dashboard keeps answering with a local engine.", "El navegador nunca habla directamente con la base de datos ni recibe claves: todo pasa por la API. Si la IA deja de estar disponible, el panel sigue respondiendo con un motor local."],
    ["Diagrama da arquitetura: o painel 3D no navegador consulta a API Node, que acessa o banco MySQL e os provedores de IA; sem API, o painel usa o motor local.", "Architecture diagram: the 3D dashboard in the browser queries the Node API, which accesses the MySQL database and the AI providers; without the API, the dashboard uses the local engine.", "Diagrama de la arquitectura: el panel 3D en el navegador consulta la API Node, que accede a la base MySQL y a los proveedores de IA; sin API, el panel usa el motor local."],
    ["Painel 3D", "3D dashboard", "Panel 3D"],
    ["Navegador · GitHub Pages", "Browser · GitHub Pages", "Navegador · GitHub Pages"],
    ["Motor local", "Local engine", "Motor local"],
    ["Estatística e regras", "Statistics and rules", "Estadística y reglas"],
    ["Funciona offline", "Works offline", "Funciona sin conexión"],
    ["sem API ou chave", "no API or key", "sin API o clave"],
    ["Consultas SQL fixas", "Fixed SQL queries", "Consultas SQL fijas"],
    ["Ferramentas de IA", "AI tools", "Herramientas de IA"],
    ["Limites e validação", "Limits and validation", "Límites y validación"],
    ["Render · plano gratuito", "Render · free plan", "Render · plan gratuito"],
    ["Banco MySQL", "MySQL database", "Base de datos MySQL"],
    ["Conexão com TLS", "TLS connection", "Conexión con TLS"],
    ["Provedores de IA", "AI providers", "Proveedores de IA"],
    ["Todo acesso ao banco passa pela API: o navegador e o modelo de IA nunca recebem SQL livre.", "All database access goes through the API: the browser and the AI model never receive free-form SQL.", "Todo acceso a la base de datos pasa por la API: el navegador y el modelo de IA nunca reciben SQL libre."],
    ["Banco de dados", "Database", "Base de datos"],
    ["MySQL 8 localmente e TiDB Cloud na nuvem. Scripts SQL idempotentes criam vendedores, chapas, máquinas, ordens e pedidos, com cenários variados para a demonstração.", "MySQL 8 locally and TiDB Cloud in the cloud. Idempotent SQL scripts create salespeople, sheets, machines, orders and sales orders, with varied scenarios for the demo.", "MySQL 8 localmente y TiDB Cloud en la nube. Scripts SQL idempotentes crean vendedores, chapas, máquinas, órdenes y pedidos, con escenarios variados para la demostración."],
    ["Rotas de dados, de saúde e de IA com mysql2, consultas SQL fixas, CORS configurável e limites de uso por IP e por dia.", "Data, health and AI routes using mysql2, fixed SQL queries, configurable CORS and usage limits per IP and per day.", "Rutas de datos, de salud y de IA con mysql2, consultas SQL fijas, CORS configurable y límites de uso por IP y por día."],
    ["Vite, TypeScript e Three.js. Cena da fábrica, três abas (Produção, Estoque e Comercial), KPIs, gráficos e painéis arrastáveis.", "Vite, TypeScript and Three.js. Factory scene, three tabs (Production, Inventory and Sales), KPIs, charts and draggable panels.", "Vite, TypeScript y Three.js. Escena de la fábrica, tres pestañas (Producción, Inventario y Comercial), KPIs, gráficos y paneles arrastrables."],
    ["Assistente de IA", "AI assistant", "Asistente de IA"],
    ["LLM com function calling sobre 10 ferramentas. A resposta vem em português, com as ferramentas consultadas e ações como \"Ver no 3D\".", "LLM with function calling over 10 tools. The answer comes in Portuguese, with the tools consulted and actions such as \"View in 3D\".", "LLM con function calling sobre 10 herramientas. La respuesta llega en portugués, con las herramientas consultadas y acciones como \"Ver en 3D\"."],
    ["Alternativa offline", "Offline alternative", "Alternativa sin conexión"],
    ["Motor local no navegador, com estatística e regras. Entra em ação sem API, sem chave, sem cota ou com erro do provedor.", "Local engine in the browser, using statistics and rules. It takes over without an API, without a key, without quota or when the provider fails.", "Motor local en el navegador, con estadística y reglas. Entra en acción sin API, sin clave, sin cuota o con error del proveedor."],
    ["GitHub Pages com GitHub Actions para o painel, Render para a API e TiDB Cloud para o banco, todos em plano gratuito.", "GitHub Pages with GitHub Actions for the dashboard, Render for the API and TiDB Cloud for the database, all on free plans.", "GitHub Pages con GitHub Actions para el panel, Render para la API y TiDB Cloud para la base de datos, todos en plan gratuito."],
    ["03 · Banco de dados", "03 · Database", "03 · Base de datos"],
    ["Um ERP industrial modelado em MySQL", "An industrial ERP modeled in MySQL", "Un ERP industrial modelado en MySQL"],
    ["Pedidos de venda ligados a vendedores com meta mensal.", "Sales orders linked to salespeople with a monthly target.", "Pedidos de venta vinculados a vendedores con meta mensual."],
    ["Lotes de chapas calculados pelo saldo (entradas menos saídas) e comparados ao mínimo.", "Sheet lots computed from the balance (inflows minus outflows) and compared with the minimum.", "Lotes de chapas calculados por el saldo (entradas menos salidas) y comparados con el mínimo."],
    ["Produção", "Production", "Producción"],
    ["Apontamentos por máquina: produzido, aprovado e refugo. Base do status e do OEE estimados.", "Records per machine: produced, approved and scrap. Basis of the estimated status and OEE.", "Registros por máquina: producido, aprobado y desecho. Base del estado y del OEE estimados."],
    ["Scripts idempotentes", "Idempotent scripts", "Scripts idempotentes"],
    ["Os scripts podem ser reexecutados sem duplicar dados. Os ajustes que alteram registros existentes rodam uma única vez, controlados pela tabela", "The scripts can be rerun without duplicating data. Adjustments that change existing records run only once, controlled by the table", "Los scripts pueden volver a ejecutarse sin duplicar datos. Los ajustes que modifican registros existentes se ejecutan una sola vez, controlados por la tabla"],
    ["cria vendedores, liga aos pedidos e cadastra as chapas.", "creates salespeople, links them to orders and registers the sheets.", "crea vendedores, los vincula a los pedidos y registra las chapas."],
    ["corrige o que as restrições CHECK barraram.", "fixes what the CHECK constraints rejected.", "corrige lo que las restricciones CHECK rechazaron."],
    ["expande para uma empresa de médio porte.", "expands to a mid-sized company.", "se amplía a una empresa de tamaño medio."],
    ["cria os cenários variados de demonstração.", "creates the varied demo scenarios.", "crea los escenarios variados de demostración."],
    ["Cenários de demonstração", "Demo scenarios", "Escenarios de demostración"],
    ["Máquinas: 10 operando, 2 com falha (refugo alto) e 3 paradas.", "Machines: 10 running, 2 faulty (high scrap) and 3 stopped.", "Máquinas: 10 operando, 2 con falla (desecho alto) y 3 paradas."],
    ["Vendedores: de 36% a 165% da meta.", "Salespeople: from 36% to 165% of target.", "Vendedores: del 36% al 165% de la meta."],
    ["Estoque: lotes cheios, equilibrados, abaixo do mínimo, críticos e sem estoque.", "Inventory: full, balanced, below-minimum, critical and out-of-stock lots.", "Inventario: lotes llenos, equilibrados, por debajo del mínimo, críticos y sin stock."],
    ["Cerca de 60 dias de apontamentos de produção.", "About 60 days of production records.", "Cerca de 60 días de registros de producción."],
    ["Cumprimento do plano ajustado para um valor realista, perto de 94%.", "Plan attainment adjusted to a realistic value, close to 94%.", "Cumplimiento del plan ajustado a un valor realista, cercano al 94%."],
    ["Trecho real · status estimado da máquina (api/queries.js)", "Real excerpt · estimated machine status (api/queries.js)", "Fragmento real · estado estimado de la máquina (api/queries.js)"],
    ["O banco não tem sensores de chão de fábrica, então status e OEE são estimativas feitas a partir dos apontamentos, e a interface e o assistente deixam isso claro. A referência de tempo é o apontamento mais recente da base, não a data de hoje, e a janela é configurável.", "The database has no shop-floor sensors, so status and OEE are estimates made from the production records, and the interface and the assistant make that clear. The time reference is the most recent record in the database, not today's date, and the window is configurable.", "La base de datos no tiene sensores en planta, así que el estado y el OEE son estimaciones hechas a partir de los registros, y la interfaz y el asistente lo dejan claro. La referencia de tiempo es el registro más reciente de la base, no la fecha de hoy, y la ventana es configurable."],
    ["Compatibilidade entre MySQL e TiDB", "MySQL and TiDB compatibility", "Compatibilidad entre MySQL y TiDB"],
    ["Dois detalhes funcionavam no MySQL local e falharam no TiDB Cloud. Os scripts foram ajustados para rodar nos dois e a correção foi reproduzida localmente antes de ser aplicada.", "Two details worked on local MySQL and failed on TiDB Cloud. The scripts were adjusted to run on both and the fix was reproduced locally before being applied.", "Dos detalles funcionaban en MySQL local y fallaron en TiDB Cloud. Los scripts se ajustaron para funcionar en ambos y la corrección se reprodujo localmente antes de aplicarla."],
    ["deu erro 1582;", "failed with error 1582;", "dio el error 1582;"],
    ["funciona nos dois.", "works on both.", "funciona en ambos."],
    ["Subtração com chaves", "Subtraction with keys of type", "Resta con claves de tipo"],
    ["deu erro 1690; a solução foi", "failed with error 1690; the fix was", "dio el error 1690; la solución fue"],
    ["Modelo de dados", "Data model", "Modelo de datos"],
    ["Chaves primárias e estrangeiras, restrições UNIQUE e CHECK, e duas views para consultas recorrentes. As chapas são produtos da categoria \"Chapas\", e a ocupação de cada lote é o saldo dividido pelo estoque máximo.", "Primary and foreign keys, UNIQUE and CHECK constraints, and two views for recurring queries. Sheets are products in the \"Chapas\" category, and each lot's occupancy is the balance divided by the maximum stock.", "Claves primarias y foráneas, restricciones UNIQUE y CHECK, y dos vistas para consultas recurrentes. Las chapas son productos de la categoría \"Chapas\", y la ocupación de cada lote es el saldo dividido por el stock máximo."],
    ["04 · API e segurança", "04 · API and security", "04 · API y seguridad"],
    ["Uma camada fina, com limites claros", "A thin layer with clear limits", "Una capa fina, con límites claros"],
    ["A API em Node/Express entrega os dados do painel, protege as chaves e serve de ponte entre o modelo de IA e o banco.", "The Node/Express API delivers the dashboard data, protects the keys and bridges the AI model and the database.", "La API en Node/Express entrega los datos del panel, protege las claves y sirve de puente entre el modelo de IA y la base de datos."],
    ["01 / ROTAS", "01 / ROUTES", "01 / RUTAS"],
    ["Endpoints", "Endpoints", "Endpoints"],
    ["Rotas pequenas e com uma responsabilidade cada.", "Small routes, each with a single responsibility.", "Rutas pequeñas, cada una con una sola responsabilidad."],
    ["dados das três abas.", "data for the three tabs.", "datos de las tres pestañas."],
    ["conexão com o banco.", "database connection.", "conexión con la base de datos."],
    ["verificação de disponibilidade.", "availability check.", "verificación de disponibilidad."],
    ["pergunta ao assistente.", "question to the assistant.", "pregunta al asistente."],
    ["modelos e cota.", "models and quota.", "modelos y cuota."],
    ["diagnóstico dos provedores.", "provider diagnostics.", "diagnóstico de los proveedores."],
    ["02 / SEGURANÇA", "02 / SECURITY", "02 / SEGURIDAD"],
    ["Camadas de proteção", "Layers of protection", "Capas de protección"],
    ["A IA não recebe acesso livre ao banco nem às credenciais.", "The AI gets neither free access to the database nor the credentials.", "La IA no recibe acceso libre a la base de datos ni a las credenciales."],
    ["Chaves e senha apenas no servidor.", "Keys and password only on the server.", "Claves y contraseña solo en el servidor."],
    ["SQL fixo, parametrizado e somente leitura.", "Fixed, parameterized, read-only SQL.", "SQL fijo, parametrizado y de solo lectura."],
    ["Defesa contra prompt injection: dados do banco são tratados como dados.", "Prompt injection defense: database content is treated as data.", "Defensa contra prompt injection: los datos de la base se tratan como datos."],
    ["Limite de 20 perguntas por minuto por IP e teto diário de 300.", "Limit of 20 questions per minute per IP and a daily cap of 300.", "Límite de 20 preguntas por minuto por IP y tope diario de 300."],
    ["CORS restringível e HTML escapado na resposta.", "Restrictable CORS and escaped HTML in the response.", "CORS restringible y HTML escapado en la respuesta."],
    ["Banco em nuvem com TLS.", "Cloud database over TLS.", "Base de datos en la nube con TLS."],
    ["03 / RESILIÊNCIA", "03 / RESILIENCE", "03 / RESILIENCIA"],
    ["Nada fica sem resposta", "Nothing goes unanswered", "Nada queda sin respuesta"],
    ["Cada falha tem um caminho alternativo.", "Every failure has an alternative path.", "Cada falla tiene un camino alternativo."],
    ["Sem API: o painel usa um snapshot estático e, depois, dados de exemplo.", "Without the API: the dashboard uses a static snapshot and, after that, sample data.", "Sin API: el panel usa un snapshot estático y, después, datos de ejemplo."],
    ["Sem chave, sem cota ou com erro: responde o motor local.", "Without a key, without quota or on error: the local engine answers.", "Sin clave, sin cuota o con error: responde el motor local."],
    ["Modelo aposentado pelo provedor: a API descobre outro disponível.", "Model retired by the provider: the API discovers another available one.", "Modelo retirado por el proveedor: la API descubre otro disponible."],
    ["Modelo fixado pelo usuário: o painel mostra o erro real, sem troca silenciosa.", "Model pinned by the user: the dashboard shows the real error, with no silent switching.", "Modelo fijado por el usuario: el panel muestra el error real, sin cambio silencioso."],
    ["05 · Assistente de IA", "05 · AI assistant", "05 · Asistente de IA"],
    ["Function calling em vez de SQL gerado pelo modelo", "Function calling instead of model-generated SQL", "Function calling en lugar de SQL generado por el modelo"],
    ["O modelo não escreve SQL nem inventa números: ele escolhe, entre um conjunto fechado de ferramentas, qual chamar e com quais parâmetros. Cada ferramenta executa uma consulta fixa e somente leitura, e os cálculos pesados são feitos em código.", "The model neither writes SQL nor makes up numbers: it chooses, from a closed set of tools, which one to call and with which parameters. Each tool runs a fixed, read-only query, and the heavy calculations are done in code.", "El modelo no escribe SQL ni inventa números: elige, entre un conjunto cerrado de herramientas, cuál llamar y con qué parámetros. Cada herramienta ejecuta una consulta fija y de solo lectura, y los cálculos pesados se hacen en código."],
    ["O que entrega", "What it returns", "Qué entrega"],
    ["Tipo", "Type", "Tipo"],
    ["KPIs das três abas, contagens e máquinas por status.", "KPIs for the three tabs, counts and machines by status.", "KPIs de las tres pestañas, conteos y máquinas por estado."],
    ["Consulta", "Query", "Consulta"],
    ["Status, OEE, refugo, produção e ordem atual de cada máquina.", "Status, OEE, scrap, output and current order for each machine.", "Estado, OEE, desecho, producción y orden actual de cada máquina."],
    ["Faturamento, percentual da meta, pedidos, ticket médio e principal cliente.", "Revenue, percentage of target, orders, average ticket and top customer.", "Facturación, porcentaje de la meta, pedidos, ticket promedio y principal cliente."],
    ["Saldo, mínimo, déficit, valor, ocupação e localização dos lotes de chapas.", "Balance, minimum, shortfall, value, occupancy and location of the sheet lots.", "Saldo, mínimo, déficit, valor, ocupación y ubicación de los lotes de chapas."],
    ["Série diária ou mensal com tendência e projeção linear já calculadas em código.", "Daily or monthly series with trend and linear projection already computed in code.", "Serie diaria o mensual con tendencia y proyección lineal ya calculadas en código."],
    ["Clientes com maior valor em pedidos.", "Customers with the highest order value.", "Clientes con mayor valor en pedidos."],
    ["Consulta ao banco", "Database query", "Consulta a la base de datos"],
    ["Quantidade e valor de pedidos por status.", "Number and value of orders by status.", "Cantidad y valor de pedidos por estado."],
    ["Produção e refugo diários de uma máquina, com SQL parametrizado.", "Daily output and scrap for one machine, using parameterized SQL.", "Producción y desecho diarios de una máquina, con SQL parametrizado."],
    ["Move a câmera e seleciona o item citado na cena.", "Moves the camera and selects the mentioned item in the scene.", "Mueve la cámara y selecciona el elemento mencionado en la escena."],
    ["Interface", "Interface", "Interfaz"],
    ["Troca a aba do painel (Produção, Estoque ou Comercial).", "Switches the dashboard tab (Production, Inventory or Sales).", "Cambia la pestaña del panel (Producción, Inventario o Comercial)."],
    ["Como uma pergunta é respondida", "How a question is answered", "Cómo se responde una pregunta"],
    ["O navegador envia a pergunta, o histórico curto e o contexto da tela.", "The browser sends the question, the short history and the screen context.", "El navegador envía la pregunta, el historial corto y el contexto de la pantalla."],
    ["A API valida o corpo e aplica os limites de uso.", "The API validates the request body and applies the usage limits.", "La API valida el cuerpo de la solicitud y aplica los límites de uso."],
    ["O modelo escolhe uma ferramenta e a API executa a consulta fixa.", "The model chooses a tool and the API runs the fixed query.", "El modelo elige una herramienta y la API ejecuta la consulta fija."],
    ["O resultado volta ao modelo, em um laço de até 6 voltas.", "The result goes back to the model, in a loop of up to 6 turns.", "El resultado vuelve al modelo, en un ciclo de hasta 6 vueltas."],
    ["A resposta chega com texto, ações, sugestões e as ferramentas consultadas.", "The answer arrives with text, actions, suggestions and the tools consulted.", "La respuesta llega con texto, acciones, sugerencias y las herramientas consultadas."],
    ["Recursos do assistente", "Assistant features", "Recursos del asistente"],
    ["Briefing automático ao abrir, com atalhos \"Ver no 3D\".", "Automatic briefing on open, with \"View in 3D\" shortcuts.", "Briefing automático al abrir, con atajos \"Ver en 3D\"."],
    ["Respostas que levam a câmera até a máquina, o lote ou o vendedor.", "Answers that move the camera to the machine, lot or salesperson.", "Respuestas que llevan la cámara hasta la máquina, el lote o el vendedor."],
    ["Gráficos de barras e projeção linear com indicação de confiança (R²).", "Bar charts and linear projection with a confidence indicator (R²).", "Gráficos de barras y proyección lineal con indicación de confianza (R²)."],
    ["Seletor de modelos com status e cota. Nenhum provedor expõe o saldo em dinheiro, então a cota combina os limites devolvidos pelo provedor com o uso medido pelo servidor.", "Model selector with status and quota. No provider exposes the money balance, so the quota combines the limits returned by the provider with the usage measured by the server.", "Selector de modelos con estado y cuota. Ningún proveedor expone el saldo en dinero, así que la cuota combina los límites devueltos por el proveedor con el uso medido por el servidor."],
    ["Sugestões de perguntas geradas pela própria IA.", "Question suggestions generated by the AI itself.", "Sugerencias de preguntas generadas por la propia IA."],
    ["Provedor", "Provider", "Proveedor"],
    ["Custo", "Cost", "Costo"],
    ["Papel no projeto", "Role in the project", "Papel en el proyecto"],
    ["Gratuito, com limites", "Free, with limits", "Gratuito, con límites"],
    ["Usado na demonstração publicada", "Used in the published demo", "Usado en la demostración publicada"],
    ["Reserva automática", "Automatic fallback", "Respaldo automático"],
    ["Pago", "Paid", "De pago"],
    ["Suportado, exige crédito na conta", "Supported, requires account credit", "Soportado, exige crédito en la cuenta"],
    ["Gratuito, local", "Free, local", "Gratuito, local"],
    ["Modelo rodando no próprio computador", "Model running on your own computer", "Modelo ejecutándose en el propio computador"],
    ["Trecho real · definição de uma ferramenta (api/ai.js)", "Real excerpt · definition of a tool (api/ai.js)", "Fragmento real · definición de una herramienta (api/ai.js)"],
    ["O motor local não é IA generativa: é estatística e regras (z-score, médias e regressão linear). A parte generativa é o modo com provedor, e o selo do chat mostra qual dos dois está ativo.", "The local engine is not generative AI: it is statistics and rules (z-score, averages and linear regression). The generative part is the provider mode, and the chat badge shows which of the two is active.", "El motor local no es IA generativa: es estadística y reglas (z-score, promedios y regresión lineal). La parte generativa es el modo con proveedor, y el sello del chat muestra cuál de los dos está activo."],
    ["06 · Evidências", "06 · Evidence", "06 · Evidencias"],
    ["O painel em funcionamento", "The dashboard in action", "El panel en funcionamiento"],
    ["Capturas das três abas e do assistente, com dados fictícios. Nas capturas do assistente, a resposta vem do motor local (modo offline). Clique em qualquer imagem para ampliar.", "Screenshots of the three tabs and the assistant, with fictitious data. In the assistant screenshots, the answer comes from the local engine (offline mode). Click any image to enlarge.", "Capturas de las tres pestañas y del asistente, con datos ficticios. En las capturas del asistente, la respuesta viene del motor local (modo sin conexión). Haga clic en cualquier imagen para ampliar."],
    ["Aba Produção", "Production tab", "Pestaña Producción"],
    ["Planta 3D, KPIs, evolução diária e máquinas por status.", "3D plant, KPIs, daily output and machines by status.", "Planta 3D, KPIs, evolución diaria y máquinas por estado."],
    ["Aba Estoque", "Inventory tab", "Pestaña Inventario"],
    ["Lotes de chapas por ocupação, saldo e mínimo.", "Sheet lots by occupancy, balance and minimum.", "Lotes de chapas por ocupación, saldo y mínimo."],
    ["Aba Comercial", "Sales tab", "Pestaña Comercial"],
    ["Faturamento, pedidos e vendedores por percentual da meta.", "Revenue, orders and salespeople by percentage of target.", "Facturación, pedidos y vendedores por porcentaje de la meta."],
    ["Assistente: máquinas", "Assistant: machines", "Asistente: máquinas"],
    ["Máquinas paradas ou com refugo alto, com atalhos para o 3D.", "Stopped machines or those with high scrap, with shortcuts to 3D.", "Máquinas paradas o con desecho alto, con atajos al 3D."],
    ["Assistente: vendedores", "Assistant: salespeople", "Asistente: vendedores"],
    ["Ranking de faturamento com gráfico e atalhos.", "Revenue ranking with chart and shortcuts.", "Ranking de facturación con gráfico y atajos."],
    ["07 · Problemas reais", "07 · Real problems", "07 · Problemas reales"],
    ["O que deu errado e como foi resolvido", "What went wrong and how it was solved", "Qué salió mal y cómo se resolvió"],
    ["Cada caso segue a mesma ordem: sintoma, causa e correção.", "Each case follows the same order: symptom, cause and fix.", "Cada caso sigue el mismo orden: síntoma, causa y corrección."],
    ["Todas as máquinas apareciam paradas", "All machines showed as stopped", "Todas las máquinas aparecían paradas"],
    ["Causa:", "Cause:", "Causa:"],
    ["o status comparava o último apontamento com a data de hoje, mas a base de demonstração era mais antiga.", "the status compared the last record with today's date, but the demo database was older.", "el estado comparaba el último registro con la fecha de hoy, pero la base de demostración era más antigua."],
    ["Correção:", "Fix:", "Corrección:"],
    ["a referência passou a ser o apontamento mais recente da base, com janela configurável.", "the reference became the most recent record in the database, with a configurable window.", "la referencia pasó a ser el registro más reciente de la base, con ventana configurable."],
    ["Modelo de IA aposentado pelo provedor", "AI model retired by the provider", "Modelo de IA retirado por el proveedor"],
    ["o plano gratuito retirou o modelo configurado e as chamadas passaram a falhar.", "the free plan removed the configured model and calls started failing.", "el plan gratuito retiró el modelo configurado y las llamadas empezaron a fallar."],
    ["a API lista os modelos disponíveis na chave e escolhe outro sozinha. Se o usuário fixa um modelo, o painel mostra o erro real.", "the API lists the models available for the key and picks another one on its own. If the user pins a model, the dashboard shows the real error.", "la API lista los modelos disponibles para la clave y elige otro por sí sola. Si el usuario fija un modelo, el panel muestra el error real."],
    ["Nome parcial respondido como inexistente", "Partial name answered as nonexistent", "Nombre parcial respondido como inexistente"],
    ["perguntar por um primeiro nome não casava com o cadastro completo, e o modelo concluía que não havia registro.", "asking for a first name did not match the full record, and the model concluded there was no entry.", "preguntar por un nombre de pila no coincidía con el registro completo, y el modelo concluía que no había registro."],
    ["regra no prompt para resolver nomes pelas ferramentas de listagem antes de concluir, e sugestões com o nome completo.", "a prompt rule to resolve names through the listing tools before concluding, and suggestions using the full name.", "regla en el prompt para resolver nombres con las herramientas de listado antes de concluir, y sugerencias con el nombre completo."],
    ["Diferenças entre MySQL e TiDB Cloud", "Differences between MySQL and TiDB Cloud", "Diferencias entre MySQL y TiDB Cloud"],
    ["INTERVAL com expressão e subtração com chaves sem sinal funcionam no MySQL local, mas falharam no TiDB.", "INTERVAL with an expression and subtraction with unsigned keys work on local MySQL but failed on TiDB.", "INTERVAL con expresión y resta con claves sin signo funcionan en MySQL local, pero fallaron en TiDB."],
    ["INTERVAL ROUND e CAST AS SIGNED, reproduzidos localmente antes de aplicar no banco da nuvem.", "INTERVAL ROUND and CAST AS SIGNED, reproduced locally before applying them to the cloud database.", "INTERVAL ROUND y CAST AS SIGNED, reproducidos localmente antes de aplicarlos en la base de datos de la nube."],
    ["08 · Limites e evolução", "08 · Limits and next steps", "08 · Límites y evolución"],
    ["O que o projeto não faz, e o que viria depois", "What the project does not do, and what would come next", "Qué no hace el proyecto y qué vendría después"],
    ["Declarar os limites faz parte da engenharia: o projeto é uma demonstração, e as simplificações abaixo são conscientes.", "Stating the limits is part of engineering: the project is a demonstration, and the simplifications below are deliberate.", "Declarar los límites es parte de la ingeniería: el proyecto es una demostración, y las simplificaciones siguientes son conscientes."],
    ["Limitações conhecidas", "Known limitations", "Limitaciones conocidas"],
    ["Status e OEE são estimados a partir dos apontamentos, sem sensores. O OEE aqui é aprovado dividido por produzido.", "Status and OEE are estimated from production records, without sensors. OEE here is approved divided by produced.", "El estado y el OEE se estiman a partir de los registros, sin sensores. El OEE aquí es aprobado dividido por producido."],
    ["\"Produzido hoje\" é o acumulado do período dos apontamentos, não o total do dia.", "\"Produced today\" is the total for the whole records period, not the day's total.", "\"Producido hoy\" es el acumulado del período de los registros, no el total del día."],
    ["A projeção é uma regressão linear simples, sem sazonalidade.", "The projection is a simple linear regression, with no seasonality.", "La proyección es una regresión lineal simple, sin estacionalidad."],
    ["A IA pode errar. Ferramentas fixas reduzem o risco, mas não o eliminam.", "The AI can be wrong. Fixed tools reduce the risk but do not eliminate it.", "La IA puede equivocarse. Las herramientas fijas reducen el riesgo, pero no lo eliminan."],
    ["A demonstração é somente leitura e não tem login.", "The demo is read-only and has no login.", "La demostración es de solo lectura y no tiene inicio de sesión."],
    ["O plano gratuito da API tem partida a frio de cerca de 1 minuto.", "The API's free plan has a cold start of about 1 minute.", "El plan gratuito de la API tiene un arranque en frío de cerca de 1 minuto."],
    ["Próximos passos", "Next steps", "Próximos pasos"],
    ["Autenticação com perfis de gestor e vendedor.", "Authentication with manager and salesperson profiles.", "Autenticación con perfiles de gestor y vendedor."],
    ["Dados em tempo real, a partir de sensores ou eventos das máquinas.", "Real-time data, from sensors or machine events.", "Datos en tiempo real, a partir de sensores o eventos de las máquinas."],
    ["Testes automatizados das ferramentas, com perguntas-gabarito avaliadas a cada mudança de prompt.", "Automated tests for the tools, with reference questions evaluated on every prompt change.", "Pruebas automatizadas de las herramientas, con preguntas de referencia evaluadas en cada cambio de prompt."],
    ["Respostas em streaming.", "Streaming responses.", "Respuestas en streaming."],
    ["Alertas proativos quando um indicador cruzar um limite.", "Proactive alerts when an indicator crosses a threshold.", "Alertas proactivas cuando un indicador cruce un umbral."],
    ["Cache e índices no banco, e uma API sem partida a frio.", "Caching and database indexes, and an API without cold starts.", "Caché e índices en la base de datos, y una API sin arranque en frío."],
    ["09 · Organização do repositório", "09 · Repository structure", "09 · Organización del repositorio"],
    ["Código, banco e documentação no mesmo lugar", "Code, database and documentation in one place", "Código, base de datos y documentación en un solo lugar"],
    ["O repositório reúne o painel, a API, os scripts SQL e os guias de IA e de deploy, para que outra pessoa consiga executar o projeto.", "The repository brings together the dashboard, the API, the SQL scripts and the AI and deployment guides, so that someone else can run the project.", "El repositorio reúne el panel, la API, los scripts SQL y las guías de IA y de despliegue, para que otra persona pueda ejecutar el proyecto."],
    ["painel 3D, interface, chat e motor local de IA.", "3D dashboard, interface, chat and local AI engine.", "panel 3D, interfaz, chat y motor local de IA."],
    ["servidor Express, consultas SQL e ferramentas de IA.", "Express server, SQL queries and AI tools.", "servidor Express, consultas SQL y herramientas de IA."],
    ["scripts SQL de carga, idempotentes.", "idempotent SQL load scripts.", "scripts SQL de carga, idempotentes."],
    ["guias do assistente de IA e do deploy, e imagens.", "AI assistant and deployment guides, and images.", "guías del asistente de IA y del despliegue, e imágenes."],
    ["publicação automática no GitHub Pages.", "automatic publishing to GitHub Pages.", "publicación automática en GitHub Pages."],
    ["Ambiente e publicação", "Environment and publishing", "Entorno y publicación"],
    ["Node.js 18 ou superior.", "Node.js 18 or later.", "Node.js 18 o superior."],
    ["MySQL 8 localmente e TiDB Cloud Starter na nuvem.", "MySQL 8 locally and TiDB Cloud Starter in the cloud.", "MySQL 8 localmente y TiDB Cloud Starter en la nube."],
    ["Painel no GitHub Pages, API no Render, ambos em plano gratuito.", "Dashboard on GitHub Pages, API on Render, both on free plans.", "Panel en GitHub Pages, API en Render, ambos en plan gratuito."],
    ["Segredos apenas em variáveis de ambiente, nunca no repositório.", "Secrets only in environment variables, never in the repository.", "Secretos solo en variables de entorno, nunca en el repositorio."],
    ["O README do repositório traz o passo a passo para executar localmente e para publicar na nuvem.", "The repository README has the step-by-step guide to run locally and to publish in the cloud.", "El README del repositorio trae el paso a paso para ejecutar localmente y publicar en la nube."],
    ["Veja o painel funcionando", "See the dashboard in action", "Vea el panel funcionando"],
    ["A demonstração está publicada e o repositório público traz o código, os scripts SQL e a documentação. Na primeira visita, a API gratuita pode levar cerca de 1 minuto para acordar.", "The demo is published and the public repository has the code, the SQL scripts and the documentation. On the first visit, the free API may take about 1 minute to wake up.", "La demostración está publicada y el repositorio público trae el código, los scripts SQL y la documentación. En la primera visita, la API gratuita puede tardar alrededor de 1 minuto en despertar."],
    ["Abrir demonstração", "Open demo", "Abrir demostración"],
    ["Imagem ampliada", "Enlarged image", "Imagen ampliada"],
    ["Imagem ampliada da evidência do projeto", "Enlarged image of the project evidence", "Imagen ampliada de la evidencia del proyecto"],
    ["Estoque de chapas", "Sheet inventory", "Inventario de chapas"],
    ["Ferramenta (tool)", "Tool", "Herramienta (tool)"],
    ["O schema erp_industrial_analytics cobre vendas, estoque e produção. Este projeto acrescentou a entidade de vendedores e scripts de carga que geram cenários realistas, em vez de um painel \"todo verde\".", "The erp_industrial_analytics schema covers sales, inventory and production. This project added the salesperson entity and load scripts that generate realistic scenarios, instead of an \"all green\" dashboard.", "El esquema erp_industrial_analytics cubre ventas, inventario y producción. Este proyecto añadió la entidad de vendedores y scripts de carga que generan escenarios realistas, en lugar de un panel \"todo verde\"."],
    ["Aplicação full stack com IA", "Full stack application with AI", "Aplicación full stack con IA"],
    ["Painel 3D, API Node e assistente de IA sobre dados em MySQL", "3D dashboard, Node API and AI assistant on MySQL data", "Panel 3D, API Node y asistente de IA sobre datos en MySQL"],
    ["Projeto prático · Full stack e IA", "Hands-on project · Full stack and AI", "Proyecto práctico · Full stack e IA"],
    ["Dados fictícios", "Fictitious data", "Datos ficticios"],
    ["ERP Industrial 3D com IA", "ERP Industrial 3D with AI", "ERP Industrial 3D con IA"],
    ["Painel industrial em 3D alimentado por uma API Node/Express e por um banco MySQL. Um assistente de IA responde em português usando function calling sobre consultas fixas e somente leitura, e leva a câmera até a máquina, o lote ou o vendedor citado.", "3D industrial dashboard fed by a Node/Express API and a MySQL database. An AI assistant answers in Portuguese using function calling over fixed, read-only queries, and moves the camera to the machine, lot or salesperson mentioned.", "Panel industrial en 3D alimentado por una API Node/Express y una base de datos MySQL. Un asistente de IA responde en portugués usando function calling sobre consultas fijas y de solo lectura, y lleva la cámara hasta la máquina, el lote o el vendedor mencionado."],
    ["ferramentas expostas à IA", "tools exposed to the AI", "herramientas expuestas a la IA"],
    ["Banco MySQL com scripts idempotentes e cenários variados de demonstração.", "MySQL database with idempotent scripts and varied demo scenarios.", "Base de datos MySQL con scripts idempotentes y escenarios variados de demostración."],
    ["API Node/Express com consultas fixas, limites de uso e proteção das chaves.", "Node/Express API with fixed queries, usage limits and key protection.", "API Node/Express con consultas fijas, límites de uso y protección de las claves."],
    ["Cena 3D com Three.js e TypeScript, com abas de Produção, Estoque e Comercial.", "3D scene with Three.js and TypeScript, with Production, Inventory and Sales tabs.", "Escena 3D con Three.js y TypeScript, con pestañas de Producción, Inventario y Comercial."],
    ["Assistente com function calling, motor local offline e deploy gratuito.", "Assistant with function calling, offline local engine and free deployment.", "Asistente con function calling, motor local sin conexión y despliegue gratuito."],
    ["A API da demonstração usa plano gratuito e pode levar cerca de 1 minuto para acordar na primeira visita.", "The demo API uses a free plan and may take about 1 minute to wake up on the first visit.", "La API de la demostración usa un plan gratuito y puede tardar alrededor de 1 minuto en despertar en la primera visita."],
  ];

  const dictionaries = {
    en: Object.create(null),
    es: Object.create(null)
  };
  entries.forEach(function (entry) {
    dictionaries.en[entry[0]] = entry[1];
    dictionaries.es[entry[0]] = entry[2];
  });

  const originalText = new WeakMap();
  const lastTranslatedText = new WeakMap();
  const originalAttributes = new WeakMap();
  const lastTranslatedAttributes = new WeakMap();
  const attributeNames = ["aria-label", "title", "alt", "placeholder", "content"];
  const languages = ["pt", "es", "en"];
  let currentLanguage = "pt";
  let observer = null;

  function readSavedLanguage() {
    try {
      const queryLanguage = new URLSearchParams(window.location.search).get("lang");
      if (languages.indexOf(queryLanguage) >= 0) {
        localStorage.setItem("portfolio-language", queryLanguage);
        return queryLanguage;
      }
      const saved = localStorage.getItem("portfolio-language");
      return languages.indexOf(saved) >= 0 ? saved : "pt";
    } catch (error) {
      return "pt";
    }
  }

  function translateString(value, language) {
    if (language === "pt" || !value) return value;
    const dictionary = dictionaries[language];
    const leading = (value.match(/^\s*/) || [""])[0];
    const trailing = (value.match(/\s*$/) || [""])[0];
    const core = value.slice(leading.length, value.length - trailing.length);
    if (!core) return value;

    if (dictionary[core]) return leading + dictionary[core] + trailing;

    const dynamicPrefixes = [
      ["Ampliar imagem de ", dictionary["Ampliar imagem de"]],
      ["Ampliar evidência: ", dictionary["Ampliar evidência:"]],
      ["Ver ", language === "en" ? "View" : "Ver"]
    ];
    for (let i = 0; i < dynamicPrefixes.length; i++) {
      const prefix = dynamicPrefixes[i][0];
      if (prefix && core.indexOf(prefix) === 0) {
        const translatedPrefix = dynamicPrefixes[i][1] || prefix.trim();
        const remainder = core.slice(prefix.length);
        return leading + translatedPrefix + " " + translateString(remainder, language) + trailing;
      }
    }

    let translated = core;
    const pairs = Object.keys(dictionary).sort(function (a, b) { return b.length - a.length; });
    pairs.forEach(function (source) {
      if (translated.indexOf(source) >= 0) {
        translated = translated.split(source).join(dictionary[source]);
      }
    });
    return leading + translated + trailing;
  }

  function translateTextNode(node) {
    const last = lastTranslatedText.get(node);
    if (!originalText.has(node) || (typeof last !== "undefined" && node.nodeValue !== last)) {
      originalText.set(node, node.nodeValue);
    }
    const original = originalText.get(node);
    const translated = translateString(original, currentLanguage);
    lastTranslatedText.set(node, translated);
    if (node.nodeValue !== translated) node.nodeValue = translated;
  }

  function translateAttribute(element, name) {
    if (!element.hasAttribute(name)) return;
    let stored = originalAttributes.get(element);
    let last = lastTranslatedAttributes.get(element);
    if (!stored) {
      stored = Object.create(null);
      originalAttributes.set(element, stored);
    }
    if (!last) {
      last = Object.create(null);
      lastTranslatedAttributes.set(element, last);
    }
    const current = element.getAttribute(name);
    if (typeof stored[name] === "undefined" || (typeof last[name] !== "undefined" && current !== last[name])) {
      stored[name] = current;
    }
    const translated = translateString(stored[name], currentLanguage);
    last[name] = translated;
    if (current !== translated) element.setAttribute(name, translated);
  }

  function translateTree(node) {
    if (!node) return;
    if (node.nodeType === Node.TEXT_NODE) {
      const parent = node.parentElement;
      if (parent && /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA|PRE|CODE)$/i.test(parent.tagName)) return;
      translateTextNode(node);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE && node.nodeType !== Node.DOCUMENT_NODE) return;

    if (node.nodeType === Node.ELEMENT_NODE) {
      if (/^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA|PRE|CODE)$/i.test(node.tagName)) return;
      attributeNames.forEach(function (name) { translateAttribute(node, name); });
    }
    Array.from(node.childNodes).forEach(translateTree);
  }

  function updateLanguageControls() {
    document.querySelectorAll("[data-language]").forEach(function (button) {
      const active = button.getAttribute("data-language") === currentLanguage;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function applyLanguage(language) {
    if (languages.indexOf(language) < 0) language = "pt";
    currentLanguage = language;
    document.documentElement.setAttribute("lang", language === "pt" ? "pt-BR" : (language === "es" ? "es" : "en"));
    try { localStorage.setItem("portfolio-language", language); } catch (error) {}

    if (document.body) translateTree(document.body);
    translateTree(document.head);
    updateLanguageControls();
    document.dispatchEvent(new CustomEvent("portfolio-language-change", { detail: { language: language } }));
  }

  window.setPortfolioLanguage = applyLanguage;
  window.changePortfolioLanguage = applyLanguage;
  window.getPortfolioLanguage = function () { return currentLanguage; };

  // Fallback de delegação para controles inseridos dinamicamente.
  document.addEventListener("click", function (event) {
    const target = event.target && event.target.nodeType === 1
      ? event.target
      : event.target && event.target.parentElement;
    const control = target && typeof target.closest === "function"
      ? target.closest("[data-language]")
      : null;
    if (control) {
      event.preventDefault();
      applyLanguage(control.getAttribute("data-language"));
    }
  });

  function start() {
    applyLanguage(readSavedLanguage());
    if (!observer && document.body) {
      observer = new MutationObserver(function (records) {
        records.forEach(function (record) {
          if (record.type === "childList") {
            record.addedNodes.forEach(translateTree);
          } else if (record.type === "characterData") {
            translateTextNode(record.target);
          } else if (record.type === "attributes") {
            translateAttribute(record.target, record.attributeName);
          }
        });
        updateLanguageControls();
      });
      observer.observe(document.body, {
        childList: true,
        characterData: true,
        subtree: true,
        attributes: true,
        attributeFilter: attributeNames
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();