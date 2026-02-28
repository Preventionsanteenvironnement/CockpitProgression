/**
 * utils.js — Fonctions partagées CockpitProgression PSE
 * Centralise : Firebase config, modules PSE, classes, calendrier, design system
 */

// ═══════════════════════════════════════════════════════════
// FIREBASE CONFIG
// ═══════════════════════════════════════════════════════════
export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyAWdCMvOiAJln3eT9LIAQD3RWJUD0lQcLI",
    authDomain: "devoirs-pse.firebaseapp.com",
    projectId: "devoirs-pse",
    storageBucket: "devoirs-pse.firebasestorage.app",
    messagingSenderId: "614730413904",
    appId: "1:614730413904:web:a5dd478af5de30f6bede55"
};

// ═══════════════════════════════════════════════════════════
// CLASSES CONFIG — Classe → Niveau
// ═══════════════════════════════════════════════════════════
export const CLASSES_CONFIG = {
    // CAP 1ère année
    'C1CAN': 'CAP', 'C1HORT': 'CAP', 'C1JP': 'CAP', 'C1PSR': 'CAP', 'C1VAN': 'CAP',
    // CAP 2ème année
    'C2CAN': 'CAP', 'C2HORT': 'CAP', 'C2JP': 'CAP', 'C2PSR': 'CAP', 'C2VAN': 'CAP',
    // BAC PRO 2nde
    'B2GATL1': 'BAC_PRO_2NDE', 'B2GATL2': 'BAC_PRO_2NDE', 'B2MELEC': 'BAC_PRO_2NDE',
    'B2AGO': 'BAC_PRO_2NDE', 'B2AGORA': 'BAC_PRO_2NDE',
    // BAC PRO 1ère
    'B1AGO1': 'BAC_PRO_1ERE', 'B1AGO2': 'BAC_PRO_1ERE', 'B1AGO': 'BAC_PRO_1ERE',
    'B1MELEC': 'BAC_PRO_1ERE', 'B1AGORA': 'BAC_PRO_1ERE',
    // BAC PRO Terminale
    'BTAGO1': 'BAC_PRO_TERM', 'BTAGO2': 'BAC_PRO_TERM', 'BTAGO': 'BAC_PRO_TERM',
    'BTMELEC': 'BAC_PRO_TERM', 'BTAGORA': 'BAC_PRO_TERM'
};

// ═══════════════════════════════════════════════════════════
// MODULES PSE PAR NIVEAU
// ═══════════════════════════════════════════════════════════
export const MODULES_PSE = {
    'CAP': [
        { id: 'PRES', titre: 'Présentation PSE', theme: 'A' },
        { id: 'A1', titre: 'Le système de santé', theme: 'A' },
        { id: 'A2', titre: 'Le sommeil, un rythme biologique', theme: 'A' },
        { id: 'A3', titre: "L'activité physique", theme: 'A' },
        { id: 'A4', titre: 'Les addictions', theme: 'A' },
        { id: 'A5', titre: 'La sexualité – La contraception', theme: 'A' },
        { id: 'A6', titre: 'Prévenir les IST', theme: 'A' },
        { id: 'A7', titre: "L'alimentation adaptée à son activité", theme: 'A' },
        { id: 'B1', titre: 'Les ressources en eau', theme: 'B' },
        { id: 'B2', titre: 'Le risque majeur', theme: 'B' },
        { id: 'B3', titre: "Les ressources en énergie", theme: 'B' },
        { id: 'B4', titre: 'Le bruit au quotidien', theme: 'B' },
        { id: 'C1', titre: 'Les différents contrats de travail', theme: 'C' },
        { id: 'C2', titre: 'Les enjeux de la santé et sécurité au travail', theme: 'C' },
        { id: 'C3', titre: 'La démarche de prévention (activité de travail)', theme: 'C' },
        { id: 'C4', titre: 'La démarche de prévention (risque spécifique au métier)', theme: 'C' },
        { id: 'C4.1', titre: 'Le risque lié au bruit', theme: 'C' },
        { id: 'C4.2', titre: 'Le risque lié aux poussières', theme: 'C' },
        { id: 'C4.3', titre: 'Le risque chimique', theme: 'C' },
        { id: 'C4.4', titre: 'Le risque mécanique', theme: 'C' },
        { id: 'C4.5', titre: 'Le risque électrique', theme: 'C' },
        { id: 'C4.6', titre: "Le risque lié à l'éclairage", theme: 'C' },
        { id: 'C4.7', titre: 'Le risque de chute', theme: 'C' },
        { id: 'C4.8', titre: 'Le risque incendie', theme: 'C' },
        { id: 'C5', titre: "Les risques liés à l'activité physique du métier", theme: 'C' },
        { id: 'C6', titre: 'Les acteurs et organismes de prévention', theme: 'C' },
        { id: 'C7', titre: 'Le suivi médical des salariés et la vaccination', theme: 'C' },
        { id: 'C8', titre: 'Fiches de secourisme', theme: 'C' },
        { id: 'D1', titre: "L'assurance", theme: 'D' },
        { id: 'D2', titre: 'Le budget', theme: 'D' },
        { id: 'D3', titre: 'Les achats', theme: 'D' },
        { id: 'CG1.1', titre: 'PSE (ESC)', theme: 'E' },
        { id: 'CDO', titre: "Chef d'œuvre", theme: 'E' }
    ],
    'BAC_PRO_2NDE': [
        { id: 'A1', titre: 'Le système de santé', theme: 'A' },
        { id: 'A2', titre: 'Les rythmes biologiques – Le sommeil', theme: 'A' },
        { id: 'A3', titre: "L'activité physique", theme: 'A' },
        { id: 'A4', titre: 'Les addictions', theme: 'A' },
        { id: 'A5', titre: 'La sexualité – La contraception', theme: 'A' },
        { id: 'B1', titre: "L'alimentation écoresponsable", theme: 'B' },
        { id: 'B2', titre: 'Les risques majeurs', theme: 'B' },
        { id: 'C1', titre: 'Les enjeux de la santé et sécurité au travail', theme: 'C' },
        { id: 'C2', titre: 'Les notions de base en prévention', theme: 'C' }
    ],
    'BAC_PRO_1ERE': [
        { id: 'A6', titre: 'Les infections sexuellement transmissibles', theme: 'A' },
        { id: 'A7', titre: 'Les pratiques alimentaires', theme: 'A' },
        { id: 'A8', titre: 'Le stress au quotidien', theme: 'A' },
        { id: 'B3', titre: 'Le bruit au quotidien', theme: 'B' },
        { id: 'B4', titre: "L'eau et le développement durable", theme: 'B' },
        { id: 'C3', titre: 'Les acteurs de prévention', theme: 'C' },
        { id: 'C4', titre: "L'assistance et le secours en milieu professionnel", theme: 'C' },
        { id: 'C5', titre: "L'analyse des risques professionnels", theme: 'C' },
        { id: 'C6', titre: "L'analyse d'un risque spécifique", theme: 'C' }
    ],
    'BAC_PRO_TERM': [
        { id: 'A9', titre: 'La sécurité alimentaire', theme: 'A' },
        { id: 'B5', titre: 'Les ressources en énergie et développement durable', theme: 'B' },
        { id: 'C7', titre: 'Le suivi de la santé au travail', theme: 'C' },
        { id: 'C8', titre: 'Déclaration et réparation des AT/MP', theme: 'C' },
        { id: 'C9', titre: 'Les risques psychosociaux', theme: 'C' },
        { id: 'C10', titre: "Les risques liés à l'activité physique", theme: 'C' },
        { id: 'C11', titre: "L'analyse d'une situation de travail", theme: 'C' },
        { id: 'C12', titre: "L'égalité de traitement au travail", theme: 'C' }
    ]
};

export const THEME_LABELS = {
    'A': 'Thème A — Santé',
    'B': 'Thème B — Environnement',
    'C': 'Thème C — Travail',
    'D': 'Thème D — Consommation',
    'E': "Chef d'œuvre"
};

// ═══════════════════════════════════════════════════════════
// EMPLOI DU TEMPS — Données spec 2025-2026
// ═══════════════════════════════════════════════════════════
export const EDT = [
    // LUNDI
    { jour: 1, heure: '09:30', heureFin: '10:30', classe: 'C2PSR',   salle: '010', alternance: 'toutes' },
    { jour: 1, heure: '10:30', heureFin: '11:30', classe: 'C1PSR',   salle: '010', alternance: 'SB' },
    { jour: 1, heure: '14:00', heureFin: '17:00', classe: 'C1PSR',   salle: '010', type: 'chef_oeuvre', alternance: 'toutes' },
    { jour: 1, heure: '17:00', heureFin: '18:00', classe: 'B2AGORA', salle: '205', alternance: 'toutes' },
    // MARDI
    { jour: 2, heure: '08:30', heureFin: '09:30', classe: 'B1MELEC', salle: '205', alternance: 'toutes' },
    { jour: 2, heure: '09:30', heureFin: '10:30', classe: 'C2HORT',  salle: '205', alternance: 'toutes' },
    { jour: 2, heure: '10:30', heureFin: '11:30', classe: 'BTAGORA', salle: '205', alternance: 'SB' },
    { jour: 2, heure: '11:30', heureFin: '12:30', classe: 'BTAGORA', salle: '205', alternance: 'toutes' },
    // JEUDI
    { jour: 4, heure: '09:30', heureFin: '10:30', classe: 'C2JP',    salle: '205', alternance: 'toutes' },
    { jour: 4, heure: '11:30', heureFin: '12:30', classe: 'BTMELEC', salle: '205', alternance: 'toutes' },
    { jour: 4, heure: '14:00', heureFin: '15:00', classe: 'C1JP',    salle: '205', alternance: 'SA' },
    // VENDREDI
    { jour: 5, heure: '08:30', heureFin: '09:30', classe: 'C1JP',    salle: '118', alternance: 'toutes' },
    { jour: 5, heure: '09:30', heureFin: '10:30', classe: 'B2MELEC', salle: '118', alternance: 'toutes' },
    { jour: 5, heure: '10:30', heureFin: '11:30', classe: 'C1VAN',   salle: '118', alternance: 'toutes' },
    { jour: 5, heure: '10:30', heureFin: '11:30', classe: 'C2VAN',   salle: '118', alternance: 'toutes' },
    { jour: 5, heure: '11:30', heureFin: '12:30', classe: 'C1PSR',   salle: '205', alternance: 'toutes' },
    { jour: 5, heure: '14:00', heureFin: '15:00', classe: 'B1AGORA', salle: '205', alternance: 'toutes' },
    { jour: 5, heure: '15:00', heureFin: '16:00', classe: 'C1CAN',   salle: '205', alternance: 'toutes' },
];

// ═══════════════════════════════════════════════════════════
// VACANCES / FERIES / PFMP / ABSENCES
// ═══════════════════════════════════════════════════════════
export const VACANCES = [
    { label: 'Toussaint',  debut: '2025-10-18', fin: '2025-11-02' },
    { label: 'Noël',       debut: '2025-12-20', fin: '2026-01-04' },
    { label: 'Hiver',      debut: '2026-02-07', fin: '2026-02-22' },
    { label: 'Printemps',  debut: '2026-04-04', fin: '2026-04-19' },
    { label: 'Été',        debut: '2026-07-04', fin: '2026-08-31' },
];

export const FERIES = [
    { date: '2025-11-11', label: 'Armistice' },
    { date: '2026-01-01', label: "Jour de l'an" },
    { date: '2026-04-06', label: 'Lundi de Pâques' },
    { date: '2026-05-01', label: 'Fête du Travail' },
    { date: '2026-05-08', label: 'Victoire 1945' },
    { date: '2026-05-14', label: 'Ascension' },
    { date: '2026-05-15', label: 'Pont Ascension' },
    { date: '2026-05-25', label: 'Lundi de Pentecôte' },
];

export const ABSENCES_PERSO = [
    { date: '2026-03-20', label: 'Absence administrative', classes: 'toutes' },
];

export const PFMP = {
    'C1JP':    [{ debut: '2026-02-23', fin: '2026-03-15' }, { debut: '2026-06-08', fin: '2026-06-28' }],
    'C2JP':    [{ debut: '2025-09-29', fin: '2025-10-19' }, { debut: '2026-03-16', fin: '2026-04-05' }],
    'C2HORT':  [{ debut: '2025-09-29', fin: '2025-10-19' }, { debut: '2026-03-16', fin: '2026-04-05' }],
    'C1PSR':   [{ debut: '2026-01-12', fin: '2026-02-01' }, { debut: '2026-06-01', fin: '2026-06-21' }],
    'C2PSR':   [{ debut: '2025-11-24', fin: '2025-12-15' }, { debut: '2026-05-04', fin: '2026-05-31' }],
    'C1CAN':   [],
    'C1VAN':   [],
    'C2VAN':   [],
    'B2AGORA': [{ debut: '2026-05-18', fin: '2026-06-28' }],
    'B1AGORA': [{ debut: '2026-01-12', fin: '2026-02-08' }, { debut: '2026-06-01', fin: '2026-06-28' }],
    'BTAGORA': [{ debut: '2025-11-10', fin: '2025-12-21', label: 'PFMP' }, { debut: '2026-05-18', fin: '2026-06-28', label: 'Parcours Y' }],
    'B2MELEC': [{ debut: '2026-05-18', fin: '2026-06-28' }],
    'B1MELEC': [{ debut: '2026-01-12', fin: '2026-02-08' }, { debut: '2026-06-01', fin: '2026-06-28' }],
    'BTMELEC': [{ debut: '2025-11-10', fin: '2025-12-21', label: 'PFMP' }, { debut: '2026-05-18', fin: '2026-06-28', label: 'Parcours Y' }],
};

// ═══════════════════════════════════════════════════════════
// CLASS GROUPS / ALIASES
// ═══════════════════════════════════════════════════════════
export const CLASS_GROUPS = {
    'B2AGORA': ['B2GATL1', 'B2GATL2', 'B2AGO', 'B2AGORA', 'BPSE1'],
    'BTAGORA': ['BTAGO1', 'BTAGO2', 'BTAGORA', 'TAGORA'],
    'B1AGORA': ['B1AGO1', 'B1AGO2', 'B1AGORA', 'BPSE2', '1AGORA'],
    'BTMELEC': ['BTMELEC', 'TMELEC'],
    'B1MELEC': ['B1MELEC', '1MELEC'],
    'B2MELEC': ['B2MELEC', '2MELEC'],
};

// Alias groups étendus pour matching Pronote (compat avec l'ancien code)
export const CLASS_ALIAS_GROUPS = {
    CAP_VAN: ['CPSE1', 'CAPVAN', 'C1VAN', 'C2VAN', 'C1VANC2VAN', 'VAN'],
    PREMIERE_AGORA: ['BPSE2', '1AGORA', '1EREAGORA', 'PREMIEREAGORA', 'B1AGO', 'B1AGORA', 'B1AGO1', 'B1AGO2'],
    TERMINALE_AGORA: ['TAGORA', 'BTAGO', 'BTAGORA', 'BTAGO1', 'BTAGO2'],
    B2_AGORA: ['B2GATL1', 'B2GATL2', 'B2AGO', 'B2AGORA', '2GATL']
};

// Toutes les classes de l'EDT (pour boucles)
export const ALL_CLASSES = [
    'C1JP', 'C2JP', 'C2HORT', 'C1PSR', 'C2PSR', 'C1CAN', 'C1VAN', 'C2VAN',
    'B2AGORA', 'B1AGORA', 'BTAGORA', 'B2MELEC', 'B1MELEC', 'BTMELEC'
];

// ═══════════════════════════════════════════════════════════
// SEMAINE A/B
// ═══════════════════════════════════════════════════════════
const REF_SB_DATE = new Date(2026, 1, 23); // 23 février 2026 = lundi SB de référence

/**
 * Retourne le lundi de la semaine contenant `date`
 */
export function getLundi(date) {
    const d = new Date(date);
    const day = d.getDay();
    d.setDate(d.getDate() - (day === 0 ? 6 : day - 1));
    d.setHours(0, 0, 0, 0);
    return d;
}

/**
 * Retourne 'SA' ou 'SB' pour la semaine contenant `date`
 * SB = semaine de référence (23/02/2026) et semaines paires
 * SA = semaines impaires
 */
export function getSemaineType(date) {
    const lundi = getLundi(date);
    const refLundi = getLundi(REF_SB_DATE);
    const diffWeeks = Math.round((lundi - refLundi) / (7 * 24 * 60 * 60 * 1000));
    return (diffWeeks % 2 === 0) ? 'SB' : 'SA';
}

/**
 * Vérifie si un cours de l'EDT se déroule à la date donnée (alternance A/B)
 */
export function coursSePasse(coursEdt, date) {
    if (coursEdt.alternance === 'toutes') return true;
    return getSemaineType(date) === coursEdt.alternance;
}

// ═══════════════════════════════════════════════════════════
// CALENDRIER — Tests vacances / fériés / PFMP / absences
// ═══════════════════════════════════════════════════════════

/**
 * Formate une date en 'YYYY-MM-DD'
 */
export function formatDateISO(date) {
    const d = new Date(date);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${dd}`;
}

/**
 * Formate en 'DD/MM/YYYY'
 */
export function formatDateFR(date) {
    const d = new Date(date);
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    return `${dd}/${mm}/${d.getFullYear()}`;
}

/**
 * Vérifie si une date est en vacances. Retourne l'objet vacances ou null
 */
export function isVacances(date, vacances) {
    vacances = vacances || VACANCES;
    const ds = formatDateISO(date);
    for (let i = 0; i < vacances.length; i++) {
        if (ds >= vacances[i].debut && ds <= vacances[i].fin) return vacances[i];
    }
    return null;
}

/**
 * Vérifie si une date est un jour férié. Retourne l'objet férié ou null
 */
export function isFerie(date, feries) {
    feries = feries || FERIES;
    const ds = formatDateISO(date);
    for (let i = 0; i < feries.length; i++) {
        if (feries[i].date === ds) return feries[i];
    }
    return null;
}

/**
 * Vérifie si une date est une absence perso. Retourne l'objet ou null
 */
export function isAbsencePerso(date, absences) {
    absences = absences || ABSENCES_PERSO;
    const ds = formatDateISO(date);
    for (let i = 0; i < absences.length; i++) {
        if (absences[i].date === ds) return absences[i];
    }
    return null;
}

/**
 * Vérifie si une classe est en PFMP à la date donnée. Retourne l'objet PFMP ou null
 */
export function isPFMP(date, classeId, pfmpData) {
    pfmpData = pfmpData || PFMP;
    const ds = formatDateISO(date);
    // Chercher dans les PFMP directement et via aliases
    const classesToCheck = [classeId];
    // Ajouter les clés de PFMP qui matchent via alias
    for (const key of Object.keys(pfmpData)) {
        if (classesMatch(classeId, key) && !classesToCheck.includes(key)) {
            classesToCheck.push(key);
        }
    }
    for (const clId of classesToCheck) {
        const periods = pfmpData[clId];
        if (!periods) continue;
        for (let i = 0; i < periods.length; i++) {
            if (ds >= periods[i].debut && ds <= periods[i].fin) return periods[i];
        }
    }
    return null;
}

/**
 * Vérifie si un jour est "indisponible" (vacances, férié, absence perso, weekend)
 */
export function isJourIndisponible(date) {
    const d = new Date(date);
    const day = d.getDay();
    if (day === 0 || day === 6) return 'weekend';
    if (isVacances(date)) return 'vacances';
    if (isFerie(date)) return 'ferie';
    if (isAbsencePerso(date)) return 'absence';
    return null;
}

// ═══════════════════════════════════════════════════════════
// COURS DU JOUR
// ═══════════════════════════════════════════════════════════

/**
 * Retourne les cours EDT pour un jour donné, en tenant compte de l'alternance A/B
 * @param {Date} date - La date à vérifier
 * @param {Array} edt - L'emploi du temps (optionnel, défaut = EDT)
 * @returns {Array} Les cours du jour, triés par heure
 */
export function getCoursForDay(date, edt) {
    edt = edt || EDT;
    const d = new Date(date);
    const jour = d.getDay(); // 0=dim, 1=lun, ... 5=ven
    if (jour === 0 || jour === 6) return [];

    return edt
        .filter(c => c.jour === jour && coursSePasse(c, date))
        .sort((a, b) => a.heure.localeCompare(b.heure));
}

/**
 * Retourne les cours EDT pour un jour + classe donnée
 */
export function getCoursForDayAndClasse(date, classeId, edt) {
    return getCoursForDay(date, edt).filter(c => classesMatch(c.classe, classeId));
}

// ═══════════════════════════════════════════════════════════
// COMPTEUR DE SÉANCES DISPONIBLES
// ═══════════════════════════════════════════════════════════

/**
 * Calcule le nombre de séances disponibles pour une classe entre deux dates
 * Exclut vacances, fériés, PFMP, absences perso
 * Tient compte de l'alternance A/B
 * @returns {{ count: number, dates: string[] }}
 */
export function computeSeancesDisponibles(classeId, dateDebut, dateFin, edt, vacances, feries, pfmpData) {
    edt = edt || EDT;
    vacances = vacances || VACANCES;
    feries = feries || FERIES;
    pfmpData = pfmpData || PFMP;

    const dates = [];
    const start = new Date(dateDebut);
    start.setHours(0, 0, 0, 0);
    const end = new Date(dateFin);
    end.setHours(23, 59, 59, 999);

    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        const day = d.getDay();
        if (day === 0 || day === 6) continue; // Weekend
        if (isVacances(d, vacances)) continue;
        if (isFerie(d, feries)) continue;
        if (isAbsencePerso(d)) continue;
        if (isPFMP(d, classeId, pfmpData)) continue;

        // Vérifier si cette classe a un cours PSE ce jour selon l'EDT (exclure chef_oeuvre)
        const coursJour = edt.filter(c =>
            !c.type &&
            c.jour === day &&
            classesMatch(c.classe, classeId) &&
            coursSePasse(c, d)
        );
        for (let i = 0; i < coursJour.length; i++) {
            dates.push(formatDateISO(d));
        }
    }

    return { count: dates.length, dates: dates };
}

// ═══════════════════════════════════════════════════════════
// CLASS MATCHING — Normalisation et matching robuste
// ═══════════════════════════════════════════════════════════

/**
 * Normalise un nom de classe (supprime accents, espaces, met en majuscules)
 */
export function normalizeClass(v) {
    return (v || '')
        .toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, '');
}

// Alias pour compatibilité
export const normalizeKey = normalizeClass;
export const normalizeClassKey = normalizeClass;

/**
 * Détecte le groupe d'alias d'une classe
 */
export function detectClassGroup(rawClass) {
    const norm = normalizeClass(rawClass);
    if (!norm) return '';
    const groups = Object.keys(CLASS_ALIAS_GROUPS);
    for (let i = 0; i < groups.length; i++) {
        const aliases = CLASS_ALIAS_GROUPS[groups[i]];
        for (let j = 0; j < aliases.length; j++) {
            const aliasNorm = normalizeClass(aliases[j]);
            if (!aliasNorm) continue;
            if (norm === aliasNorm || norm.includes(aliasNorm) || aliasNorm.includes(norm)) {
                return groups[i];
            }
        }
    }
    return '';
}

/**
 * Vérifie si deux noms de classe correspondent (même classe ou alias)
 */
export function classesMatch(a, b) {
    const na = normalizeClass(a);
    const nb = normalizeClass(b);
    if (!na || !nb) return false;
    if (na === nb) return true;
    if (na.includes(nb) || nb.includes(na)) return true;

    // Vérifier CLASS_GROUPS (spec)
    for (const [group, aliases] of Object.entries(CLASS_GROUPS)) {
        const normAliases = aliases.map(normalizeClass);
        const normGroup = normalizeClass(group);
        const aIn = normAliases.includes(na) || normGroup === na;
        const bIn = normAliases.includes(nb) || normGroup === nb;
        if (aIn && bIn) return true;
    }

    // Vérifier CLASS_ALIAS_GROUPS (Pronote compat)
    const ga = detectClassGroup(na);
    const gb = detectClassGroup(nb);
    if (ga && gb && ga === gb) return true;

    return false;
}

/**
 * Retourne le niveau PSE d'une classe (CAP, BAC_PRO_2NDE, etc.)
 */
export function getNiveauForClasse(classeId) {
    // Chercher directement
    if (CLASSES_CONFIG[classeId]) return CLASSES_CONFIG[classeId];
    // Chercher via normalisation
    for (const [key, niveau] of Object.entries(CLASSES_CONFIG)) {
        if (classesMatch(classeId, key)) return niveau;
    }
    return null;
}

/**
 * Retourne les modules PSE pour une classe (via son niveau)
 */
export function getModulesForClasse(classeId) {
    const niveau = getNiveauForClasse(classeId);
    return niveau ? (MODULES_PSE[niveau] || []) : [];
}

// ═══════════════════════════════════════════════════════════
// UTILITAIRES — Strings, dates, parsing
// ═══════════════════════════════════════════════════════════

/**
 * Nettoie un nom de module (tronque à 60 chars)
 */
export function cleanModuleName(str) {
    if (!str) return '';
    return str.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim().substring(0, 60);
}

/**
 * Nom de module sans suffixe Évaluation/Correction
 */
export function baseModuleName(raw) {
    const c = cleanModuleName(raw);
    return c.replace(/\s*[–-]\s*(Évaluation|Evaluation|Correction)$/i, '').trim();
}

/**
 * Capitalize (première lettre majuscule)
 */
export function capitalize(s) {
    if (!s) return '';
    if (s === 'agenda') return 'Agenda';
    return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * Parse une date DD/MM/YYYY ou ISO
 */
export function parseDate(dateStr) {
    if (!dateStr) return null;
    const parts = dateStr.split('/');
    if (parts.length === 3) {
        return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
    }
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? null : d;
}

/**
 * Retourne le lundi de la semaine actuelle en DD/MM/YYYY
 */
export function getCurrentWeekMonday() {
    const monday = getLundi(new Date());
    return formatDateFR(monday);
}

// ═══════════════════════════════════════════════════════════
// STATUT / SITUATION — Helpers pour timeline et couleurs
// ═══════════════════════════════════════════════════════════

export function isRealise(sem) {
    return sem.valide || sem.statut === 'Realise' || sem.statut === 'Réalisé';
}
export function isPrevu(sem) {
    return sem.statut === 'Prévu' || sem.statut === 'Prevu';
}
export function isReporte(sem) {
    return sem.statut === 'Reporté' || sem.statut === 'Reporte';
}
export function isNonRealise(sem) {
    return sem.statut === 'Non réalisé' || sem.statut === 'Non realise' || sem.statut === 'Non réalisé';
}

/**
 * Phase → label court pour cellules timeline (E=Évaluation, C=Correction, etc.)
 */
export function phaseLabel(sem) {
    const phase = (sem.phase || '').toLowerCase();
    if (phase === 'evaluation') return 'E';
    if (phase === 'correction') return 'C';
    if (phase === 'presentation') return 'P';
    const seance = (sem.seance || '').trim();
    if (seance && seance !== 'N/A') {
        const m = seance.match(/(\d[\d\-]*)/);
        if (m) return m[1];
    }
    return '';
}

/**
 * Situation → classe CSS pour couleur
 */
export function situationClass(sem) {
    const sit = (sem.situation || '').toLowerCase();
    if (sit.includes('vacances')) return 'c-vacances';
    if (sit.includes('pfmp')) return 'c-pfmp';
    if (sit.includes('bac blanc') || sit.includes('epreuv')) return 'c-bac';
    if (sit.includes('ccf')) return 'c-ccf';
    if (sit.includes('sortie')) return 'c-sortie';
    if (sit.includes('annul')) return 'c-annule';
    if (sit.includes('feri') || sit.includes('féri')) return 'c-ferie';
    if (sit.includes('absence') || sit.includes('formation')) return 'c-absence';
    if (isRealise(sem)) return 'c-realise';
    if (isReporte(sem)) return 'c-reporte';
    if (isNonRealise(sem)) return 'c-non-realise';
    if (isPrevu(sem)) return 'c-prevu';
    return 'c-normal';
}

/**
 * Situation → couleur directe pour timeline annuelle
 */
export function situationColor(sem) {
    const sit = (sem.situation || '').toLowerCase();
    if (sit.includes('vacances')) return '#f0f0f0';
    if (sit.includes('pfmp')) return '#8b5cf6';
    if (sit.includes('bac blanc') || sit.includes('epreuv')) return '#ec4899';
    if (sit.includes('ccf')) return '#f472b6';
    if (sit.includes('sortie')) return '#06b6d4';
    if (sit.includes('annul')) return '#dc2626';
    if (sit.includes('feri') || sit.includes('féri')) return '#a1a1aa';
    if (sit.includes('absence') || sit.includes('formation')) return '#78716c';
    if (isRealise(sem)) return '#22c55e';
    if (isReporte(sem)) return '#f59e0b';
    if (isNonRealise(sem)) return '#dc2626';
    if (isPrevu(sem)) return '#6366f1';
    return '#e2e8f0';
}

// ═══════════════════════════════════════════════════════════
// COULEURS BLOCS VUE SEMAINE
// ═══════════════════════════════════════════════════════════
export const BLOC_COLORS = {
    realise:    { bg: '#10b981', text: '#ffffff', icon: '✅' },
    reporte:    { bg: '#f59e0b', text: '#ffffff', icon: '🔄' },
    non_realise:{ bg: '#dc2626', text: '#ffffff', icon: '❌' },
    annule:     { bg: '#6b7280', text: '#ffffff', icon: '🚫' },
    a_saisir:   { bg: '#6366f1', text: '#ffffff', icon: '○' },
    planifie:   { bg: '#818cf8', text: '#ffffff', icon: '📅' },
    vide_futur: { bg: '#1e293b', text: '#94a3b8', icon: '' },
    pfmp:       { bg: '#8b5cf6', text: '#ffffff', icon: '🏭' },
    vacances:   { bg: '#374151', text: '#9ca3af', icon: '⬜' },
    ferie:      { bg: '#4b5563', text: '#9ca3af', icon: '⚫' },
};

// ═══════════════════════════════════════════════════════════
// DESIGN SYSTEM — Couleurs thème sombre
// ═══════════════════════════════════════════════════════════
export const DESIGN = {
    bg: '#0f172a',
    surface: '#1e293b',
    surface2: '#334155',
    border: '#334155',
    text: '#f1f5f9',
    muted: '#94a3b8',
    primary: '#6366f1',
    primaryLight: '#1e1b4b',
    success: '#10b981',
    successLight: '#064e3b',
    warning: '#f59e0b',
    warningLight: '#78350f',
    danger: '#ef4444',
    dangerLight: '#7f1d1d',
    pfmp: '#8b5cf6',
    radius: '14px',
    font: "'DM Sans', sans-serif",
};

// ═══════════════════════════════════════════════════════════
// CSS DARK THEME (injectable)
// ═══════════════════════════════════════════════════════════
export const DARK_THEME_CSS = `
:root {
    --bg: #0f172a;
    --surface: #1e293b;
    --surface-2: #334155;
    --border: #334155;
    --text: #f1f5f9;
    --muted: #94a3b8;
    --primary: #6366f1;
    --primary-light: #1e1b4b;
    --success: #10b981;
    --success-light: #064e3b;
    --warning: #f59e0b;
    --warning-light: #78350f;
    --danger: #ef4444;
    --danger-light: #7f1d1d;
    --pfmp: #8b5cf6;
    --radius: 14px;
    --font: 'DM Sans', sans-serif;
}
`;

// ═══════════════════════════════════════════════════════════
// CHECKLIST ITEMS
// ═══════════════════════════════════════════════════════════
export const CHECKLIST = [
    { key: 'eval_diagnostique', label: 'Éval diagnostique', icon: '🔍' },
    { key: 'cours_complet', label: 'Cours complet distribué', icon: '📄' },
    { key: 'cours_seance', label: 'Cours séance seule', icon: '📃' },
    { key: 'docs_distribues', label: 'Docs distribués', icon: '📋' },
    { key: 'devoir_donne', label: 'Devoir donné', icon: '📝' },
    { key: 'copies_ramassees', label: 'Copies ramassées', icon: '📥' },
    { key: 'copies_corrigees', label: 'Copies corrigées', icon: '✏️' },
    { key: 'copies_rendues', label: 'Copies rendues', icon: '📤' },
    { key: 'auto_eval_ligne', label: 'Auto-éval en ligne', icon: '💻' },
    { key: 'exercice_en_ligne', label: 'Exercice en ligne', icon: '🌐' },
    { key: 'eval_formative', label: 'Éval formative', icon: '📊' },
    { key: 'eval_sommative', label: 'Éval sommative', icon: '📝' },
    { key: 'eval_corrigee', label: 'Éval corrigée', icon: '✅' },
    { key: 'eval_rendue', label: 'Éval rendue', icon: '📤' }
];

// ═══════════════════════════════════════════════════════════
// SÉANCES OPTIONS
// ═══════════════════════════════════════════════════════════
export const SEANCES = [
    'Séance 1', 'Séance 1-2', 'Séance 2', 'Séance 2-3',
    'Séance 3', 'Séance 3-4', 'Séance 4', 'Séance 4-5',
    'Séance 5', 'Séance 6', 'Évaluation', 'Correction', 'Corr.+séance 1'
];

// ═══════════════════════════════════════════════════════════
// METEO EMOJI → SCORE
// ═══════════════════════════════════════════════════════════
export const METEO_SCORES = {
    '⛈': 1, 'Très difficile': 1,
    '🌧': 2, 'Difficile': 2,
    '⛅': 3, 'Mitigé': 3,
    '🌤': 4, 'Bien': 4,
    '☀️': 5, '☀': 5, 'Excellent': 5,
};

export function meteoToScore(meteo) {
    if (!meteo) return 0;
    if (typeof meteo === 'number') return meteo;
    if (typeof meteo === 'object') {
        // { emoji: '☀️', label: 'Excellent' }
        return METEO_SCORES[meteo.emoji] || METEO_SCORES[meteo.label] || 0;
    }
    return METEO_SCORES[meteo] || 0;
}

// ═══════════════════════════════════════════════════════════
// LOCALSTORAGE KEYS
// ═══════════════════════════════════════════════════════════
export const STUDENTS_STORAGE_KEY = 'cockpit_progression_students_v1';

// ═══════════════════════════════════════════════════════════
// NOMS DES JOURS / MOIS
// ═══════════════════════════════════════════════════════════
export const JOURS = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
export const JOURS_COURTS = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
export const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
export const MOIS_COURTS = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];

/**
 * Formate une date en texte court : "24 févr."
 */
export function formatDateCourt(date) {
    const d = new Date(date);
    return d.getDate() + ' ' + MOIS_COURTS[d.getMonth()];
}

/**
 * Formate un label de semaine : "Semaine du 24 févr. au 28 févr."
 */
export function formatSemaineLabel(lundiDate) {
    const lundi = new Date(lundiDate);
    const vendredi = new Date(lundi);
    vendredi.setDate(vendredi.getDate() + 4);
    return `Semaine du ${formatDateCourt(lundi)} au ${formatDateCourt(vendredi)}`;
}

// ═══════════════════════════════════════════════════════════
// ANNÉE SCOLAIRE
// ═══════════════════════════════════════════════════════════
export const ANNEE_SCOLAIRE = {
    debut: '2025-09-01',
    fin: '2026-07-04',
    label: '2025-2026'
};
