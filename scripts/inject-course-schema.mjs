import { readFileSync, writeFileSync } from 'fs';

const pages = [
  {
    file: 'src/pages/en/course/executive/index.astro',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Executive English Course (C1-C2)',
      description: 'Free C1-C2 executive English course. Ten drill-based units that replace vague language with precision, structure, and calm authority.',
      provider: { '@type': 'Person', name: 'Robert Cushman', url: 'https://www.nyenglishteacher.com/en/about/' },
      educationalLevel: 'Executive (C1-C2)',
      inLanguage: 'en',
      url: 'https://www.nyenglishteacher.com/en/course/executive/',
      isAccessibleForFree: true,
      hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', inLanguage: 'en' }
    }
  },
  {
    file: 'src/pages/en/course/beginners/index.astro',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Free English Course for Spanish Speakers (Beginner)',
      description: 'A free 10-unit English course for Spanish speakers. Start from words you already know. Interactive lessons with audio. No textbooks — just real sentences.',
      provider: { '@type': 'Person', name: 'Robert Cushman', url: 'https://www.nyenglishteacher.com/en/about/' },
      educationalLevel: 'Beginner (A1-A2)',
      inLanguage: 'en',
      url: 'https://www.nyenglishteacher.com/en/course/beginners/',
      isAccessibleForFree: true,
      hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', inLanguage: 'en' }
    }
  },
  {
    file: 'src/pages/en/course/intermediate/index.astro',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Free Intermediate English Course (B1-B2)',
      description: 'A free 10-unit intermediate English course for B1-B2 Spanish speakers. Master phrasal verbs, complex tenses, and natural speech through real-world dialogues.',
      provider: { '@type': 'Person', name: 'Robert Cushman', url: 'https://www.nyenglishteacher.com/en/about/' },
      educationalLevel: 'Intermediate (B1-B2)',
      inLanguage: 'en',
      url: 'https://www.nyenglishteacher.com/en/course/intermediate/',
      isAccessibleForFree: true,
      hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', inLanguage: 'en' }
    }
  },
  {
    file: 'src/pages/en/course/executive/capstone.astro',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: 'Executive English Capstone — 90-Second Presentation Challenge',
      description: 'Record a 90-second executive update using the frameworks you mastered. Submit it for personal feedback from Robert — or present it live in a strategy session.',
      learningResourceType: 'Assessment',
      educationalLevel: 'C1-C2',
      inLanguage: 'en',
      url: 'https://www.nyenglishteacher.com/en/course/executive/capstone/',
      isAccessibleForFree: true,
      isPartOf: { '@type': 'Course', name: 'Executive English Course (C1-C2)', url: 'https://www.nyenglishteacher.com/en/course/executive/' }
    }
  },
  {
    file: 'src/pages/es/curso/principiantes/index.astro',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Curso Gratis de Ingles para Hispanohablantes (Principiante)',
      description: 'Curso gratuito de 10 unidades de ingles para hispanohablantes. Empieza con palabras que ya conoces. Lecciones interactivas con audio. Sin libros de texto.',
      provider: { '@type': 'Person', name: 'Robert Cushman', url: 'https://www.nyenglishteacher.com/es/about/' },
      educationalLevel: 'Principiante (A1-A2)',
      inLanguage: 'es',
      url: 'https://www.nyenglishteacher.com/es/curso/principiantes/',
      isAccessibleForFree: true,
      hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', inLanguage: 'es' }
    }
  },
  {
    file: 'src/pages/es/curso/intermedio/index.astro',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Curso Gratis de Ingles Intermedio (B1-B2)',
      description: 'Curso gratuito de 10 unidades de ingles intermedio para hispanohablantes B1-B2. Domina los phrasal verbs, tiempos complejos y el habla natural.',
      provider: { '@type': 'Person', name: 'Robert Cushman', url: 'https://www.nyenglishteacher.com/es/about/' },
      educationalLevel: 'Intermedio (B1-B2)',
      inLanguage: 'es',
      url: 'https://www.nyenglishteacher.com/es/curso/intermedio/',
      isAccessibleForFree: true,
      hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', inLanguage: 'es' }
    }
  },
  {
    file: 'src/pages/es/curso/avanzado/index.astro',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Curso Avanzado de Ingles Gratis (B2-C1)',
      description: 'Curso avanzado gratis de 10 unidades para hispanohablantes B2-C1. Corrige frases debiles, trampas de palabras, articulos y pronunciacion. Solo precision.',
      provider: { '@type': 'Person', name: 'Robert Cushman', url: 'https://www.nyenglishteacher.com/es/about/' },
      educationalLevel: 'Avanzado (B2-C1)',
      inLanguage: 'es',
      url: 'https://www.nyenglishteacher.com/es/curso/avanzado/',
      isAccessibleForFree: true,
      hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', inLanguage: 'es' }
    }
  },
  {
    file: 'src/pages/es/curso/ejecutivo/index.astro',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Curso Ejecutivo de Ingles (C1-C2)',
      description: 'Curso gratuito de ingles ejecutivo C1-C2. Diez unidades basadas en drills que reemplazan el lenguaje vago con precision, estructura y autoridad.',
      provider: { '@type': 'Person', name: 'Robert Cushman', url: 'https://www.nyenglishteacher.com/es/about/' },
      educationalLevel: 'Ejecutivo (C1-C2)',
      inLanguage: 'es',
      url: 'https://www.nyenglishteacher.com/es/curso/ejecutivo/',
      isAccessibleForFree: true,
      hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', inLanguage: 'es' }
    }
  },
  {
    file: 'src/pages/es/curso/ejecutivo/reto-final.astro',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: 'Reto Final Ejecutivo — Presentacion de 90 Segundos',
      description: 'Graba una actualizacion ejecutiva de 90 segundos con los marcos que dominaste. Enviala para recibir retroalimentacion personal de Robert, o presentala en vivo.',
      learningResourceType: 'Assessment',
      educationalLevel: 'C1-C2',
      inLanguage: 'es',
      url: 'https://www.nyenglishteacher.com/es/curso/ejecutivo/reto-final/',
      isAccessibleForFree: true,
      isPartOf: { '@type': 'Course', name: 'Curso Ejecutivo de Ingles (C1-C2)', url: 'https://www.nyenglishteacher.com/es/curso/ejecutivo/' }
    }
  },
  {
    file: 'src/pages/en/courses/index.astro',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Free English Courses for Spanish Speakers',
      description: 'Free, interactive English courses for Spanish speakers — beginner to upper-intermediate. No sign-up, no paywall.',
      url: 'https://www.nyenglishteacher.com/en/courses/',
      itemListElement: [
        { '@type': 'ListItem', position: 1, item: { '@type': 'Course', name: 'Free English Course (Beginner)', url: 'https://www.nyenglishteacher.com/en/course/beginners/' } },
        { '@type': 'ListItem', position: 2, item: { '@type': 'Course', name: 'Free Intermediate English Course (B1-B2)', url: 'https://www.nyenglishteacher.com/en/course/intermediate/' } },
        { '@type': 'ListItem', position: 3, item: { '@type': 'Course', name: 'Free Advanced English Course (B2-C1)', url: 'https://www.nyenglishteacher.com/en/course/advanced/' } },
        { '@type': 'ListItem', position: 4, item: { '@type': 'Course', name: 'Executive English Course (C1-C2)', url: 'https://www.nyenglishteacher.com/en/course/executive/' } }
      ]
    }
  },
  {
    file: 'src/pages/es/cursos/index.astro',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Cursos Gratis de Ingles para Hispanohablantes',
      description: 'Cursos de ingles gratuitos para hispanohablantes. De principiante a intermedio alto. Sin registro ni barreras.',
      url: 'https://www.nyenglishteacher.com/es/cursos/',
      itemListElement: [
        { '@type': 'ListItem', position: 1, item: { '@type': 'Course', name: 'Curso Gratis de Ingles (Principiante)', url: 'https://www.nyenglishteacher.com/es/curso/principiantes/' } },
        { '@type': 'ListItem', position: 2, item: { '@type': 'Course', name: 'Curso Gratis de Ingles Intermedio (B1-B2)', url: 'https://www.nyenglishteacher.com/es/curso/intermedio/' } },
        { '@type': 'ListItem', position: 3, item: { '@type': 'Course', name: 'Curso Avanzado de Ingles (B2-C1)', url: 'https://www.nyenglishteacher.com/es/curso/avanzado/' } },
        { '@type': 'ListItem', position: 4, item: { '@type': 'Course', name: 'Curso Ejecutivo de Ingles (C1-C2)', url: 'https://www.nyenglishteacher.com/es/curso/ejecutivo/' } }
      ]
    }
  }
];

let success = 0, skipped = 0, failed = 0;
for (const { file, schema } of pages) {
  try {
    let content = readFileSync(file, 'utf8');
    if (content.includes('application/ld')) {
      console.log('SKIP (already has JSON-LD):', file);
      skipped++;
      continue;
    }
    const jsonBlock = '\n  <script type="application/ld+json" set:html={JSON.stringify(' + JSON.stringify(schema, null, 2) + ')} />';
    content = content.replace('</Base>', jsonBlock + '\n</Base>');
    writeFileSync(file, content, 'utf8');
    console.log('OK:', file);
    success++;
  } catch(e) {
    console.error('FAIL:', file, e.message);
    failed++;
  }
}
console.log(`\nDone: ${success} updated, ${skipped} skipped, ${failed} failed`);
