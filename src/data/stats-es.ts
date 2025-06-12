export interface Stat {
    value: number;
    label: string;
    prefix?: string;
    suffix?: string;
}

export interface StatsList {
    id: string;
    stats: Stat[];
    content?: {
        title: string;
        description: string;
        button?: {
            text: string;
            link: string;
            variant?: 'primary' | 'secondary' | 'ghostLight' | 'ghostDark';
        };
    };
}

export const statsLists: Record<string, StatsList> = {
    main: {
        id: 'main',
        stats: [
            {
                value: 10,
                label: 'Configuraciones de Tema',
            },
            {
                value: 11,
                label: 'Componentes Prediseñados',
            },
            {
                value: 48,
                label: 'Miembros del Equipo',
            },
            {
                value: 500000,
                label: 'Líneas de Código',
                prefix: '+'
            }
        ]
    },
    withContent: {
        id: 'withContent',
        stats: [
            {
                value: 8,
                label: 'Años de Experiencia Docente',
                suffix: '+'
            },
            {
                value: 15,
                label: 'Años de Consultoría Corporativa',
                suffix: '+'
            },
            {
                value: 100,
                label: 'Profesionales Entrenados',
                suffix: '+'
            },
            {
                value: 100,
                label: 'Satisfacción del Estudiante',
                suffix: '%'
            }
        ]
    }
};
