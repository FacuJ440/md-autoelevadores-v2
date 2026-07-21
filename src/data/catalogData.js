/**
 * Centralized catalog data.
 *
 * Each category is a tab in the catalog page.
 * Each product has a `slug`, `name`, `brand`, `brandSlug`, `image` (placeholder),
 * `description`, `features` (array of strings), and `href` (link to original site).
 *
 * Source: rodados.com.ar/productos/
 */

const catalogCategories = [
  /* ───────── LINDE TÉRMICOS ───────── */
  {
    title: 'Autoelevadores Térmicos',
    slug: 'termicos',
    brand: 'Linde',
    brandSlug: 'linde',
    products: [
      {
        name: 'H14 – H20',
        slug: 'h14-h20',
        brand: 'Linde',
        brandSlug: 'linde',
        image: '/images/products/h14-h20.png',
        images: [
          '/images/products/h14-h20.png',
          '/images/products/h14-h20-2.png',
          '/images/products/h14-h20-3.png',
          '/images/products/h14-h20-4.png',
          '/images/products/h14-h20-5.png',
          '/images/products/h14-h20-6.png',
        ],
        description:
          'Autoelevador térmico de capacidades 1.400, 1.600 y 2.000 kg. Marco protector de Linde con techo y zona de protección sólida. Transmisión hidrostática genuina sin caja de cambios, embrague ni frenos de estacionamiento. Control preciso del mástil con joysticks integrados en el apoyabrazos.',
        features: [
          'Capacidades: 1.400, 1.600 y 2.000 kg',
          'Marco protector Linde',
          'Transmisión hidrostática original',
          'Control de mástil con joysticks',
          'Cabina espaciosa automovilística',
          'Asiento de clase confort',
        ],
      },
      {
        name: 'H25 – H35',
        slug: 'h25-h35',
        brand: 'Linde',
        brandSlug: 'linde',
        image: '/images/products/h25-h35.png',
        images: [
          '/images/products/h25-h35.png',
          '/images/products/h25-h35-2.png',
          '/images/products/h25-h35-3.png',
          '/images/products/h25-h35-4.png',
          '/images/products/h25-h35-5.png',
          '/images/products/h25-h35-6.png',
        ],
        description:
          'Autoelevador térmico de capacidades 2.500, 3.000 y 3.500 kg. Diseño optimizado con excelente visibilidad en todas las direcciones. Sistemas Linde Curve Assist y Linde Load Assist para reducir riesgo de vuelco.',
        features: [
          'Capacidades: 2.500, 3.000 y 3.500 kg',
          'Linde Curve Assist',
          'Linde Load Assist',
          'Techo con perfiles delgados o cristal blindado',
          'Pantalla de 3,5 pulgadas',
          'Truck Health Monitoring',
        ],
      },
      {
        name: 'H40 – H50',
        slug: 'h40-h50',
        brand: 'Linde',
        brandSlug: 'linde',
        image: '/images/products/h40-h50.png',
        images: [
          '/images/products/h40-h50.png',
          '/images/products/h40-h50-2.png',
          '/images/products/h40-h50-3.png',
          '/images/products/h40-h50-4.png',
          '/images/products/h40-h50-5.png',
          '/images/products/h40-h50-6.png',
        ],
        description:
          'Autoelevador térmico de capacidades 4.000, 4.500 y 5.000 kg. Diseño optimizado con excelente visibilidad. Sistemas Linde Curve Assist y Linde Load Assist. Construcción robusta con componentes de bajo desgaste.',
        features: [
          'Capacidades: 4.000, 4.500 y 5.000 kg',
          'Linde Curve Assist',
          'Linde Load Assist',
          'Techo con perfiles delgados o cristal blindado',
          'Pantalla de 3,5 pulgadas',
          'Linde Engine Protection System (LEPS)',
        ],
      },
      {
        name: 'H50 – H80',
        slug: 'h50-h80',
        brand: 'Linde',
        brandSlug: 'linde',
        image: '/images/products/h50-h80.png',
        images: [
          '/images/products/h50-h80.png',
          '/images/products/h50-h80-2.png',
          '/images/products/h50-h80-3.png',
          '/images/products/h50-h80-4.png',
          '/images/products/h50-h80-5.png',
          '/images/products/h50-h80-6.png',
        ],
        description:
          'Autoelevador térmico de capacidades 5.000, 6.000, 7.000 y 8.000 kg. Sistema Anti-torsión de Linde para excelente estabilidad. Transmisión hidrostática original con motores de alto par y bajo consumo.',
        features: [
          'Capacidades: 5.000, 6.000, 7.000 y 8.000 kg',
          'Sistema Anti-torsión Linde',
          'Marco Protector Linde',
          'Transmisión hidrostática original',
          'Linde Load Control',
          'Intervalos de mantenimiento hasta 1.000 horas',
        ],
      },
      {
        name: 'H100 – H180 | Gran Tonelaje',
        slug: 'h100-h180-gran-tonelaje',
        brand: 'Linde',
        brandSlug: 'linde',
        image: '/images/products/h100-h180-gran-tonelaje.png',
        images: [
          '/images/products/h100-h180-gran-tonelaje.png',
          '/images/products/h100-h180-gran-tonelaje-2.png',
          '/images/products/h100-h180-gran-tonelaje-3.png',
          '/images/products/h100-h180-gran-tonelaje-4.png',
          '/images/products/h100-h180-gran-tonelaje-5.png',
          '/images/products/h100-h180-gran-tonelaje-6.png',
        ],
        description:
          'Autoelevador térmico de gran tonelaje. Capacidades: 10, 12, 14, 15, 16, 18 toneladas. Techo de vidrio blindado con excelente visibilidad de la carga. Motor diésel eficiente con bajo consumo de combustible.',
        features: [
          'Capacidades: 10 a 18 toneladas',
          'Techo de vidrio blindado',
          'Motor diésel eficiente',
          'Linde Load Control',
          'Dirección hidrostática asistida',
          'Cabina con suspensión total',
          'Intervalos de mantenimiento hasta 1.000 horas',
        ],
      },
    ],
  },

  /* ───────── LINDE ELÉCTRICOS ───────── */
  {
    title: 'Autoelevadores Eléctricos',
    slug: 'electricos',
    brand: 'Linde',
    brandSlug: 'linde',
    products: [
      {
        name: 'E12 – E20 | Tres Ruedas',
        slug: 'e12-e20-tres-ruedas',
        brand: 'Linde',
        brandSlug: 'linde',
        image: '/images/products/e12-e20-tres-ruedas.png',
        images: [
          '/images/products/e12-e20-tres-ruedas.png',
          '/images/products/e12-e20-tres-ruedas-2.png',
          '/images/products/e12-e20-tres-ruedas-3.png',
          '/images/products/e12-e20-tres-ruedas-4.png',
          '/images/products/e12-e20-tres-ruedas-5.png',
          '/images/products/e12-e20-tres-ruedas-6.png',
        ],
        description:
          'Autoelevador eléctrico de tres ruedas. Capacidades: 1.200, 1.400, 1.600 y 2.000 kg. Techo protector robusto con óptima integridad estructural. Potentes motores con control electrónico inteligente para máximo nivel de productividad.',
        features: [
          'Capacidades: 1.200, 1.400, 1.600 y 2.000 kg',
          'Tres ruedas',
          'Techo protector robusto',
          'Motores potentes con control electrónico',
          'Linde Load Control',
          'Sistema de gestión de energía Linde',
        ],
      },
      {
        name: 'E16 – E20',
        slug: 'e16-e20',
        brand: 'Linde',
        brandSlug: 'linde',
        image: '/images/products/e16-e20.png',
        images: [
          '/images/products/e16-e20.png',
          '/images/products/e16-e20-2.png',
          '/images/products/e16-e20-3.png',
          '/images/products/e16-e20-4.png',
          '/images/products/e16-e20-5.png',
          '/images/products/e16-e20-6.png',
        ],
        description:
          'Autoelevador eléctrico de tres ruedas. Capacidades: 1.600 y 2.000 kg. Techo protector robusto con máxima seguridad. Eje motriz compacto y sistema de elevación de alto rendimiento.',
        features: [
          'Capacidades: 1.600 y 2.000 kg',
          'Tres ruedas',
          'Techo protector robusto',
          'Eje motriz compacto',
          'Linde Load Control',
          'Sistema de gestión de energía Linde',
        ],
      },
      {
        name: 'E20 – E35',
        slug: 'e20-e35',
        brand: 'Linde',
        brandSlug: 'linde',
        image: '/images/products/e20-e35.png',
        images: [
          '/images/products/e20-e35.png',
          '/images/products/e20-e35-2.png',
          '/images/products/e20-e35-3.png',
          '/images/products/e20-e35-4.png',
          '/images/products/e20-e35-5.png',
          '/images/products/e20-e35-6.png',
        ],
        description:
          'Autoelevador eléctrico de cuatro ruedas. Capacidades: 2.000, 2.500, 3.000 y 3.500 kg. Cabina espaciosa con asiento ergonómico. Tracción delantera de doble motor con Eje Combi de Dirección. Motor síncrono de reluctancia (SRM+).',
        features: [
          'Capacidades: 2.000, 2.500, 3.000 y 3.500 kg',
          'Cuatro ruedas',
          'Motor síncrono de reluctancia (SRM+)',
          'Linde Curve Assist',
          'Linde Load Assist',
          'Freno de estacionamiento automático',
          'Truck Health Monitoring',
        ],
      },
      {
        name: 'E35 – E50',
        slug: 'e35-e50',
        brand: 'Linde',
        brandSlug: 'linde',
        image: '/images/products/e35-e50.png',
        images: [
          '/images/products/e35-e50.png',
          '/images/products/e35-e50-2.png',
          '/images/products/e35-e50-3.png',
          '/images/products/e35-e50-4.png',
          '/images/products/e35-e50-5.png',
          '/images/products/e35-e50-6.png',
        ],
        description:
          'Autoelevador eléctrico. Capacidades: 3.500, 4.000, 4.500 y 5.000 kg. Linde Protector Frame con zona de protección robusta. Potentes motores y control electrónico inteligente para máximo nivel de productividad.',
        features: [
          'Capacidades: 3.500, 4.000, 4.500 y 5.000 kg',
          'Linde Protector Frame',
          'Motores potentes con control electrónico',
          'Linde Load Control',
          'Sistema de gestión de energía Linde',
          'Carcasa de aluminio estanca',
        ],
      },
      {
        name: 'E60 – E80',
        slug: 'e60-e80',
        brand: 'Linde',
        brandSlug: 'linde',
        image: '/images/products/e60-e80.png',
        images: [
          '/images/products/e60-e80.png',
          '/images/products/e60-e80-2.png',
          '/images/products/e60-e80-3.png',
          '/images/products/e60-e80-4.png',
          '/images/products/e60-e80-5.png',
          '/images/products/e60-e80-6.png',
        ],
        description:
          'Autoelevador eléctrico de gran capacidad. Capacidades: 6.000, 7.000 y 8.000 kg. Dos motores eléctricos libres de mantenimiento con sistema de frenos seguro. Velocidad de traslación de 16 km/h con y sin carga.',
        features: [
          'Capacidades: 6.000, 7.000 y 8.000 kg',
          'Dos motores eléctricos libres de mantenimiento',
          'Velocidad de traslación 16 km/h',
          'Linde Load Control',
          'Sistema de gestión energética',
          'Control de circuitos dobles',
        ],
      },
      {
        name: 'E100 – E180 | Gran Tonelaje',
        slug: 'e100-e180-gran-tonelaje',
        brand: 'Linde',
        brandSlug: 'linde',
        image: '/images/products/e100-e180-gran-tonelaje.png',
        images: [
          '/images/products/e100-e180-gran-tonelaje.png',
          '/images/products/e100-e180-gran-tonelaje-2.png',
          '/images/products/e100-e180-gran-tonelaje-3.png',
          '/images/products/e100-e180-gran-tonelaje-4.png',
          '/images/products/e100-e180-gran-tonelaje-5.png',
          '/images/products/e100-e180-gran-tonelaje-6.png',
        ],
        description:
          'Autoelevador eléctrico de gran tonelaje. Capacidades: 10, 12, 14, 15, 16, 18 toneladas. Cuatro potentes motores eléctricos con velocidad hasta 25 km/h. Baterías de plomo ácido o iones de litio.',
        features: [
          'Capacidades: 10 a 18 toneladas',
          'Cuatro motores eléctricos',
          'Velocidad hasta 25 km/h',
          'Baterías de plomo ácido o iones de litio',
          'Cabina de primera clase',
          'Calefactor o aire acondicionado',
        ],
      },
    ],
  },

  /* ───────── LINDE ALMACENAJE ───────── */
  {
    title: 'Almacenaje',
    slug: 'almacenaje',
    brand: 'Linde',
    brandSlug: 'linde',
    products: [
      {
        name: 'Reach R14 G – R20 G',
        slug: 'reach-r14g-r20g',
        brand: 'Linde',
        brandSlug: 'linde',
        image: '/images/products/reach-r14g-r20g.png',
        images: [
          '/images/products/reach-r14g-r20g.png',
          '/images/products/reach-r14g-r20g-2.png',
          '/images/products/reach-r14g-r20g-3.png',
          '/images/products/reach-r14g-r20g-4.png',
          '/images/products/reach-r14g-r20g-5.png',
          '/images/products/reach-r14g-r20g-6.png',
        ],
        description:
          'Reach retráctil apto terrenos irregulares. Capacidades: 1.400, 1.600 y 2.000 kg. Suspensión exclusiva de la unidad motriz y neumáticos grandes para operar en superficies irregulares. Doble propósito interno y externo.',
        features: [
          'Capacidades: 1.400, 1.600 y 2.000 kg',
          'Apto terrenos irregulares',
          'Neumáticos superelásticos',
          'Suspensión exclusiva unidad motriz',
          'Cuatro sistemas de frenado independientes',
          'Circuitos dobles a prueba de fallas',
        ],
      },
      {
        name: 'Reach R14 HD – R20 HD',
        slug: 'reach-r14hd-r20hd',
        brand: 'Linde',
        brandSlug: 'linde',
        image: '/images/products/reach-r14hd-r20hd.png',
        images: [
          '/images/products/reach-r14hd-r20hd.png',
          '/images/products/reach-r14hd-r20hd-2.png',
          '/images/products/reach-r14hd-r20hd-3.png',
          '/images/products/reach-r14hd-r20hd-4.png',
          '/images/products/reach-r14hd-r20hd-5.png',
        ],
        description:
          'Reach retráctil Heavy Duty apto estanterías penetrables. Capacidades: 1.000, 1.200, 1.400, 1.600, 2.000 y 2.500 kg. Excelente maniobrabilidad con sistemas especiales de visualización y asistencia.',
        features: [
          'Capacidades: 1.000 a 2.500 kg',
          'Heavy Duty',
          'Apto estanterías penetrables',
          'Sistemas de visualización y asistencia',
          'Visibilidad panorámica óptima',
          'Cabina de conductor ergonómica',
        ],
      },
      {
        name: 'Apilador L14 – 20',
        slug: 'apilador-l14-20',
        brand: 'Linde',
        brandSlug: 'linde',
        image: '/images/products/apilador-l14-20.png',
        images: [
          '/images/products/apilador-l14-20.png',
          '/images/products/apilador-l14-20-2.png',
          '/images/products/apilador-l14-20-3.png',
          '/images/products/apilador-l14-20-4.png',
          '/images/products/apilador-l14-20-5.png',
          '/images/products/apilador-l14-20-6.png',
        ],
        description:
          'Apilador eléctrico de conductor acompañante a pie. Capacidades: 1.400, 1.600 y 2.000 kg. Sistema que calcula la capacidad residual en todo momento. Permite elevar el mástil con el timón en posición vertical.',
        features: [
          'Capacidades: 1.400, 1.600 y 2.000 kg',
          'Conductor acompañante a pie',
          'Cálculo de capacidad residual',
          'Manejo a dos manos',
          'Seguridad del operario garantizada',
        ],
      },
      {
        name: 'Apilador L14 – 20 AP',
        slug: 'apilador-l14-20-ap',
        brand: 'Linde',
        brandSlug: 'linde',
        image: '/images/products/apilador-l14-20-ap.png',
        images: [
          '/images/products/apilador-l14-20-ap.png',
          '/images/products/apilador-l14-20-ap-2.png',
          '/images/products/apilador-l14-20-ap-3.png',
          '/images/products/apilador-l14-20-ap-4.png',
          '/images/products/apilador-l14-20-ap-5.png',
          '/images/products/apilador-l14-20-ap-6.png',
        ],
        description:
          'Apilador eléctrico sobre plataforma amortiguada. Capacidades: 1.400, 1.600 y 2.000 kg. Sistema exclusivo de cálculo de capacidad residual. Velocidad de tracción varía automáticamente según ángulo de giro.',
        features: [
          'Capacidades: 1.400, 1.600 y 2.000 kg',
          'Plataforma amortiguada',
          'Cálculo de capacidad residual',
          'Velocidad automática en curvas',
          'Máxima seguridad',
        ],
      },
    ],
  },

  /* ───────── LINDE TRANSPORTE ───────── */
  {
    title: 'Transporte',
    slug: 'transporte',
    brand: 'Linde',
    brandSlug: 'linde',
    products: [
      {
        name: 'Transpallet T20 – 25 AP-SP',
        slug: 'transpallet-t20-25-ap-sp',
        brand: 'Linde',
        brandSlug: 'linde',
        image: '/images/products/transpallet-t20-25-ap-sp.jpg',
        images: [
          '/images/products/transpallet-t20-25-ap-sp.jpg',
          '/images/products/transpallet-t20-25-ap-sp-2.png',
          '/images/products/transpallet-t20-25-ap-sp-3.png',
          '/images/products/transpallet-t20-25-ap-sp-4.png',
          '/images/products/transpallet-t20-25-ap-sp-5.png',
        ],
        description:
          'Transpallet eléctrico sobre plataforma amortiguada. Capacidades: 2.000 y 2.500 kg. Versiones AP-SP con condiciones de trabajo ergonómicas personalizadas.',
        features: [
          'Capacidades: 2.000 y 2.500 kg',
          'Plataforma amortiguada',
          'Versiones AP-SP',
          'Condiciones ergonómicas personalizadas',
          'Control de acceso',
          'Respaldo de carga',
        ],
      },
      {
        name: 'Transpallet T16 – T20',
        slug: 'transpallet-t16-t20',
        brand: 'Linde',
        brandSlug: 'linde',
        image: '/images/products/transpallet-t16-t20.png',
        images: [
          '/images/products/transpallet-t16-t20.png',
          '/images/products/transpallet-t16-t20-2.png',
          '/images/products/transpallet-t16-t20-3.png',
          '/images/products/transpallet-t16-t20-4.png',
          '/images/products/transpallet-t16-t20-5.png',
        ],
        description:
          'Transpallet eléctrico. Capacidades: 1.600, 1.800 y 2.000 kg. Chasis de contornos redondeados que protege los pies del operario. Largo brazo anclado en la parte inferior del chasis con amplia distancia de seguridad.',
        features: [
          'Capacidades: 1.600, 1.800 y 2.000 kg',
          'Chasis de contornos redondeados',
          'Protección de pies del operario',
          'Mínimo esfuerzo de conducción',
          'Distancia de seguridad amplia',
        ],
      },
      {
        name: 'Transpallet MT15',
        slug: 'transpallet-mt15',
        brand: 'Linde',
        brandSlug: 'linde',
        image: '/images/products/transpallet-mt15.png',
        images: [
          '/images/products/transpallet-mt15.png',
          '/images/products/transpallet-mt15-2.png',
          '/images/products/transpallet-mt15-3.png',
          '/images/products/transpallet-mt15-4.png',
          '/images/products/transpallet-mt15-5.png',
          '/images/products/transpallet-mt15-6.png',
        ],
        description:
          'Transpallet eléctrico peatonal. Capacidad: 1.500 kg. Largo timón de anclaje bajo con distancia de seguridad. Chasis bajo que impide que los pies se metan debajo. Sistema de frenado eficaz incluso en pendientes.',
        features: [
          'Capacidad: 1.500 kg',
          'Timón de anclaje bajo',
          'Chasis bajo protector',
          'Sistema de frenado en pendientes',
          'Distancia de seguridad',
        ],
      },
      {
        name: 'Transpallet MT12',
        slug: 'transpallet-mt12',
        brand: 'Linde',
        brandSlug: 'linde',
        image: '/images/products/transpallet-mt12.png',
        images: [
          '/images/products/transpallet-mt12.png',
          '/images/products/transpallet-mt12-2.png',
          '/images/products/transpallet-mt12-3.png',
          '/images/products/transpallet-mt12-4.png',
          '/images/products/transpallet-mt12-5.png',
          '/images/products/transpallet-mt12-6.png',
        ],
        description:
          'Transpallet eléctrico peatonal compacto. Capacidad: 1.200 kg. Freno de estacionamiento efectivo en pendientes. Cubierta de metal resistente protege la unidad de accionamiento. Chasis de bajo perfil protege los pies del operador.',
        features: [
          'Capacidad: 1.200 kg',
          'Freno de estacionamiento en pendientes',
          'Cubierta de metal resistente',
          'Chasis de bajo perfil',
          'Timón de montaje bajo y largo',
        ],
      },
    ],
  },

  /* ───────── LINDE PREPARACIÓN DE PEDIDOS ───────── */
  {
    title: 'Preparación de Pedidos',
    slug: 'preparacion-pedidos',
    brand: 'Linde',
    brandSlug: 'linde',
    products: [
      {
        name: 'N 20 – 25',
        slug: 'n20-25',
        brand: 'Linde',
        brandSlug: 'linde',
        image: '/images/products/n20-25.png',
        images: [
          '/images/products/n20-25.png',
          '/images/products/n20-25-2.png',
          '/images/products/n20-25-3.png',
          '/images/products/n20-25-4.png',
          '/images/products/n20-25-5.png',
          '/images/products/n20-25-6.png',
        ],
        description:
          'Preparador de pedidos de baja altura. Capacidades: 2.000 y 2.500 kg. Motor trifásico de CA de 3 kW con velocidad máxima de hasta 14 km/h. Plataforma del operador con baja altura de acceso. Modo peatón disponible.',
        features: [
          'Capacidades: 2.000 y 2.500 kg',
          'Motor trifásico de CA de 3 kW',
          'Velocidad máxima 14 km/h',
          'Plataforma del operador ajustable',
          'Modo peatón',
          'Dirección eléctrica del volante',
          'Pantalla multifunción',
          'Función de elevación inicial',
        ],
      },
    ],
  },

  /* ───────── STILL ───────── */
  {
    title: 'Equipos Still',
    slug: 'equipos-still',
    brand: 'Still',
    brandSlug: 'still',
    products: [
      {
        name: 'Apilador EGV 14 – 16',
        slug: 'apilador-egv-14-16',
        brand: 'Still',
        brandSlug: 'still',
        image: '/images/products/apilador-egv-14-16.png',
        images: ['/images/products/apilador-egv-14-16.png'],
        description:
          'Apilador eléctrico STILL. Capacidades: 1.400 y 1.600 kg. Diseño moderno y funcional, con énfasis en los aspectos ergonómicos y de seguridad. Solución versátil para numerosas aplicaciones de manipulación.',
        features: [
          'Capacidades: 1.400 y 1.600 kg',
          'Diseño moderno y funcional',
          'Énfasis en ergonomía y seguridad',
          'Versátil para múltiples aplicaciones',
        ],
      },
    ],
  },

  /* ───────── BATERÍAS ───────── */
  {
    title: 'Baterías',
    slug: 'baterias',
    brand: 'Otros Productos',
    brandSlug: 'otros-productos',
    products: [
      {
        name: 'Batería Plomo – Ácido',
        slug: 'bateria-plomo-acido',
        brand: 'Otros Productos',
        brandSlug: 'otros-productos',
        image: '/images/products/bateria-plomo-acido.png',
        images: ['/images/products/bateria-plomo-acido.png'],
        description:
          'Batería de plomo-ácido para autoelevadores eléctricos. Tecnología probada y confiable para operaciones de manipulación de cargas. Amplia disponibilidad y relación costo-beneficio óptima.',
        features: [
          'Tecnología plomo-ácido',
          'Amplia disponibilidad',
          'Relación costo-beneficio óptima',
          'Mantenimiento accesible',
        ],
      },
      {
        name: 'Batería de Litio',
        slug: 'bateria-litio',
        brand: 'Otros Productos',
        brandSlug: 'otros-productos',
        image: '/images/products/bateria-litio.jpg',
        images: ['/images/products/bateria-litio.jpg'],
        description:
          'Batería de iones de litio para autoelevadores eléctricos. Mayor densidad energética, ciclos de carga más rápidos y mayor vida útil. Sin necesidad de mantenimiento de agua. Oportunidad de carga intermitente.',
        features: [
          'Tecnología iones de litio',
          'Carga más rápida',
          'Mayor vida útil',
          'Sin mantenimiento de agua',
          'Carga intermitente (oportunidad)',
          'Mayor densidad energética',
        ],
      },
    ],
  },

  /* ───────── CARGADORES ───────── */
  {
    title: 'Cargadores',
    slug: 'cargadores',
    brand: 'Otros Productos',
    brandSlug: 'otros-productos',
    products: [
      {
        name: 'Cargador de Batería Plomo – Ácido',
        slug: 'cargador-bateria-plomo-acido',
        brand: 'Otros Productos',
        brandSlug: 'otros-productos',
        image: '/images/products/cargador-bateria-plomo-acido.png',
        images: ['/images/products/cargador-bateria-plomo-acido.png'],
        description:
          'Cargador de alta frecuencia para baterías de plomo-ácido. Diseñado para optimizar el proceso de carga y prolongar la vida útil de la batería. Compatible con una amplia gama de autoelevadores eléctricos.',
        features: [
          'Alta frecuencia',
          'Optimización de carga',
          'Prolonga vida útil de la batería',
          'Amplia compatibilidad',
        ],
      },
      {
        name: 'Cargador de Batería de Litio',
        slug: 'cargador-bateria-litio',
        brand: 'Otros Productos',
        brandSlug: 'otros-productos',
        image: '/images/products/cargador-bateria-litio.jpg',
        images: ['/images/products/cargador-bateria-litio.jpg'],
        description:
          'Cargador específico para baterías de iones de litio. Carga rápida y eficiente con monitorización inteligente del estado de carga. Diseño compacto ideal para cargas intermitentes.',
        features: [
          'Carga rápida y eficiente',
          'Monitorización inteligente',
          'Diseño compacto',
          'Compatible con carga intermitente',
        ],
      },
    ],
  },

  /* ───────── CUBIERTAS ───────── */
  {
    title: 'Cubiertas',
    slug: 'cubiertas',
    brand: 'Otros Productos',
    brandSlug: 'otros-productos',
    products: [
      {
        name: 'Aros Engomados con Taco',
        slug: 'aros-engomados-con-taco',
        brand: 'Otros Productos',
        brandSlug: 'otros-productos',
        image: '/images/products/aros-engomados-con-taco.png',
        images: ['/images/products/aros-engomados-con-taco.png'],
        description:
          'Aros engomados con taco disponibles en Black y Grey Non Marking. Ideales para superficies que requieren tracción y protección del suelo.',
        features: [
          'Disponible en Black y Grey Non Marking',
          'Con taco para mayor tracción',
          'Protección del suelo',
        ],
      },
      {
        name: 'Macizas Grey Non Marking',
        slug: 'macizas-grey-non-marking',
        brand: 'Otros Productos',
        brandSlug: 'otros-productos',
        image: '/images/products/macizas-grey-non-marking.png',
        images: ['/images/products/macizas-grey-non-marking.png'],
        description:
          'Cubiertas macizas Grey Non Marking. No dejan marcas en el suelo, ideales para interiores con superficies delicadas.',
        features: [
          'Non Marking – no deja marcas',
          'Color Grey',
          'Maciza – sin cámara',
          'Ideal para interiores',
        ],
      },
      {
        name: 'Neumáticas Grey Non Marking',
        slug: 'neumaticas-grey-non-marking',
        brand: 'Otros Productos',
        brandSlug: 'otros-productos',
        image: '/images/products/neumaticas-grey-non-marking.png',
        images: ['/images/products/neumaticas-grey-non-marking.png'],
        description:
          'Cubiertas neumáticas Grey Non Marking. No dejan marcas en el suelo con la amortiguación de una cubierta neumática.',
        features: [
          'Non Marking – no deja marcas',
          'Color Grey',
          'Neumática con cámara',
          'Amortiguación superior',
        ],
      },
      {
        name: 'Aros Engomados Lisos',
        slug: 'aros-engomados-lisos',
        brand: 'Otros Productos',
        brandSlug: 'otros-productos',
        image: '/images/products/aros-engomados-lisos.png',
        images: ['/images/products/aros-engomados-lisos.png'],
        description:
          'Aros engomados lisos disponibles en Black y Grey Non Marking. Superficie lisa para desplazamiento suave y protección del suelo.',
        features: [
          'Disponible en Black y Grey Non Marking',
          'Superficie lisa',
          'Desplazamiento suave',
          'Protección del suelo',
        ],
      },
      {
        name: 'Macizas Black',
        slug: 'macizas-black',
        brand: 'Otros Productos',
        brandSlug: 'otros-productos',
        image: '/images/products/macizas-black.png',
        images: ['/images/products/macizas-black.png'],
        description:
          'Cubiertas macizas Black. Máxima durabilidad para aplicaciones exigentes en interiores y exteriores.',
        features: [
          'Color Black',
          'Maciza – sin cámara',
          'Máxima durabilidad',
          'Interior y exterior',
        ],
      },
      {
        name: 'Neumáticas Black',
        slug: 'neumaticas-black',
        brand: 'Otros Productos',
        brandSlug: 'otros-productos',
        image: '/images/products/neumaticas-black.png',
        images: ['/images/products/neumaticas-black.png'],
        description:
          'Cubiertas neumáticas Black. Amortiguación superior para terrenos irregulares y aplicaciones de exterior.',
        features: [
          'Color Black',
          'Neumática con cámara',
          'Amortiguación superior',
          'Ideal para terrenos irregulares',
        ],
      },
    ],
  },

  /* ───────── REPUESTOS ───────── */
  {
    title: 'Repuestos',
    slug: 'repuestos',
    brand: 'Otros Productos',
    brandSlug: 'otros-productos',
    products: [
      {
        name: 'Repuestos Originales',
        slug: 'repuestos-originales',
        brand: 'Otros Productos',
        brandSlug: 'otros-productos',
        image: '',
        images: [],
        description:
          'Repuestos originales para autoelevadores Linde y Still. Garantizan la máxima compatibilidad, rendimiento y seguridad de su equipo. Stock permanente y asesoramiento técnico especializado.',
        features: [
          'Repuestos originales Linde y Still',
          'Máxima compatibilidad',
          'Garantía de rendimiento y seguridad',
          'Stock permanente',
          'Asesoramiento técnico especializado',
        ],
      },
    ],
  },
]

export { catalogCategories }



