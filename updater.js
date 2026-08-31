/**
 * Fútbol Libre TV - Safe Match & Embed Link Auto Updater
 * Scrapes latest matches, formats titles uniquely with ' - ' and dynamic date,
 * detects country flags, includes working embed links, and filters out blacklisted URLs.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const TARGET_FILE = path.join(__dirname, 'eventos.js');
const SOURCE_URL = 'https://futbollibretv.sx/eventos.js';

// Reported / Blacklisted stream keys that must NEVER be added
const BLACKLISTED_STREAMS = [
    'espndeportes',
    'espnplus2',
    'canal5mx',
    'espnplus1',
    'max1',
    'universo_usa'
];

// Flag detection rules mapping keywords to CSS classes
const flagRules = {
    'ENG': ['premier league', 'championship', 'fa cup', 'efl cup', 'carabao', 'liverpool', 'manchester', 'arsenal', 'chelsea', 'tottenham', 'newcastle', 'west ham', 'aston villa', 'middlesbrough', 'west bromwich', 'southampton', 'millwall', 'norwich', 'burnley', 'cardiff', 'watford', 'sheffield', 'bournemouth', 'everton', 'coventry', 'hull city'],
    'ES': ['laliga', 'la liga', 'copa del rey', 'real madrid', 'barcelona', 'atlético madrid', 'atletico madrid', 'sevilla', 'betis', 'valencia', 'villarreal', 'athletic club', 'real sociedad', 'espanyol', 'albacete', 'real oviedo', 'leganés', 'eldense', 'girona', 'las palmas', 'sabadell', 'almería', 'levante'],
    'ALE': ['bundesliga', 'dfb-pokal', 'dfb pokal', 'bayern', 'dortmund', 'leverkusen', 'leipzig', 'frankfurt', 'stuttgart', 'elversberg', 'köln', 'hoffenheim', 'mainz', 'paderborn', 'hamburger'],
    'IT': ['serie a', 'coppa italia', 'juventus', 'inter', 'milan', 'napoli', 'roma', 'lazio', 'atalanta', 'fiorentina', 'frosinone', 'monza', 'udinese', 'sassuolo', 'torino', 'parma'],
    'FRA': ['ligue 1', 'coupe de france', 'psg', 'paris saint-germain', 'marseille', 'lyon', 'monaco', 'lille', 'lens', 'strasbourg', 'auxerre', 'angers', 'brest', 'toulouse', 'lorient', 'troyes', 'le havre'],
    'POR': ['primeira liga', 'taça de portugal', 'porto', 'benfica', 'sporting cp', 'braga', 'arouca', 'santa clara', 'alverca', 'marítimo', 'academico viseu'],
    'HOL': ['eredivisie', 'knvb', 'ajax', 'psv', 'feyenoord', 'az alkmaar', 'go ahead eagles'],
    'TUR': ['super lig', 'süper lig', 'galatasaray', 'fenerbahce', 'besiktas', 'trabzonspor', 'göztepe'],
    'ARA': ['profesional saudí', 'saudi pro league', 'saudí', 'saudi', 'al hilal', 'al-hilal', 'al nassr', 'al-nassr', 'al ittihad', 'al-ittihad', 'al ahli', 'al-ahli', 'al kholood', 'al fateh'],
    'USA': ['mls', 'major league soccer', 'us open cup', 'inter miami', 'la galaxy', 'sounders', 'ny red bulls', 'atlanta united', 'chicago fire', 'charlotte', 'columbus crew', 'new england', 'dc united', 'los angeles fc', 'philadelphia', 'toronto fc', 'new york city', 'houston dynamo', 'sj earthquakes', 'minnesota united', 'orlando city', 'nashville', 'cincinnati', 'sporting kc', 'vancouver', 'colorado rapids', 'real salt lake', 'portland timbers', 'austin', 'san diego', 'dallas', 'st. louis'],
    'MEX': ['liga mx', 'expansion mx', 'expansión mx', 'america', 'américa', 'chivas', 'guadalajara', 'cruz azul', 'pumas', 'tigres', 'monterrey', 'toluca', 'pachuca', 'atlas', 'querétaro', 'puebla', 'santos laguna', 'juárez', 'juarez', 'mazatlán', 'tijuana', 'necaxa', 'león', 'san luis'],
    'AR': ['liga profesional', 'copa de la liga', 'copa argentina', 'boca', 'river', 'racing', 'independiente', 'san lorenzo', 'velez', 'vélez', 'rosario central', 'gimnasia la plata', 'huracán', 'estudiantes', 'atlético tucumán', 'belgrano', 'talleres', 'central córdoba', 'riestra', 'rivadavia', 'newell', 'lanús', 'banfield', 'platense', 'barracas'],
    'COL': ['liga betplay', 'copa colombia', 'nacional', 'millonarios', 'santa fe', 'america de cali', 'américa de cali', 'junior', 'medellin', 'medellín', 'deportivo cali', 'jaguares', 'alianza', 'inter bogotá', 'inter bogota', 'tolima', 'pereira', 'once caldas', 'bucaramanga', 'pastos', 'envigado'],
    'BRA': ['brasileirão', 'brasileirao', 'copa do brasil', 'flamengo', 'palmeiras', 'sao paulo', 'são paulo', 'corinthians', 'santos', 'gremio', 'grêmio', 'internacional', 'cruzeiro', 'atletico mineiro', 'atlético mineiro', 'vitória', 'rb bragantino', 'vasco da gama', 'botafogo', 'fluminense', 'bahia', 'fortaleza'],
    'URU': ['primera división', 'progreso', 'danubio', 'boston river', 'cerro', 'defensor sporting', 'torque', 'peñarol', 'nacional uru', 'juventud', 'deportivo maldonado', 'liverpool mvd', 'wanderers', 'river plate uru'],
    'PE': ['liga 1', 'universitario', 'alianza lima', 'sporting cristal', 'melgar', 'los chankas', 'utc cajamarca', 'deportivo garcilaso', 'juan pablo ii', 'cienciano', 'cusco', 'mannucci', 'comerciantes', 'sport boys'],
    'PARAG': ['copa de primera', 'paraguay', 'olimpia', 'cerro porteño', 'libertad', 'guarani', 'sportivo trinidense', '2 de mayo', 'deportivo recoleta', 'nacional py', 'luqueño'],
    'CH': ['primera división', 'primera division', 'colo-colo', 'universidad de chile', 'u catolica', 'ñublense', 'everton chile', 'deportes limache', 'deportes concepción', 'coquimbo', 'huachipato', 'audax', 'cobresal', 'palestino', 'cobreloa', 'iquique'],
    'ECUA': ['ligapro', 'ecuador', 'ldu quito', 'barcelona sc', 'emelec', 'independiente del valle', 'aucas', 'cuenca', 'orenses', 'delfin', 'macara'],
    'BOL': ['liga boliviana', 'bolivar', 'the strongest', 'wilstermann', 'always ready', 'oruro'],
    'VEN': ['liga futve', 'caracas', 'deportivo tachira', 'monagas', 'puerto cabello', 'zamora'],
    'UCL': ['champions league', 'uefa champions', 'europa league', 'conference league', 'uefa super cup'],
    'LIB': ['copa libertadores', 'copa sudamericana', 'recopa'],
    'F1': ['formula 1', 'f1', 'f2', 'f3', 'gran premio', 'gp '],
    'MOTOGP': ['motogp', 'moto2', 'moto3'],
    'NBA': ['nba', 'euroleague', 'wnba', 'fiba', 'basquet', 'basket', 'baloncesto'],
    'ATP': ['atp', 'wta', 'roland garros', 'wimbledon', 'us open tenis', 'australian open', 'tenis', 'tennis'],
    'UFC': ['ufc', 'mma', 'boxeo', 'box', 'wwe', 'aew'],
    'MLB': ['mlb', 'lmb', 'serie del caribe', 'baseball', 'béisbol'],
    'NFL': ['nfl', 'super bowl', 'rugby']
};

function formatCustomTitle(rawTitle) {
    if (!rawTitle) return '';
    // 1. Replace colon ':' with ' - '
    let cleaned = rawTitle.replace(/:\s*/g, ' - ').replace(/\s+/g, ' ').trim();
    
    // 2. Format current date: YYYY-MM-DD
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;
    
    // 3. If date is not already present in title, append it
    if (!cleaned.includes(dateStr)) {
        cleaned = `${cleaned} ${dateStr}`;
    }
    return cleaned;
}

function detectFlag(title, existingClass) {
    if (existingClass && existingClass !== 'FUT' && isNaN(existingClass)) {
        return existingClass.toUpperCase();
    }
    const lower = (title || '').toLowerCase();
    for (const [cls, keywords] of Object.entries(flagRules)) {
        for (const kw of keywords) {
            if (lower.includes(kw)) return cls;
        }
    }
    return 'FUT';
}

function isBlacklistedUrl(url) {
    if (!url || url === '#') return false;

    // Check query param 'r'
    let decoded = '';
    const match = url.match(/[?&]r=([^&]+)/);
    if (match) {
        try {
            decoded = Buffer.from(match[1], 'base64').toString('utf8').toLowerCase();
        } catch (e) {
            decoded = url.toLowerCase();
        }
    } else {
        decoded = url.toLowerCase();
    }

    // Check against blacklisted stream keywords
    for (const key of BLACKLISTED_STREAMS) {
        if (decoded.includes(key.toLowerCase())) {
            return true;
        }
    }
    return false;
}

function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        const req = https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Referer': 'https://futbollibretv.sx/'
            }
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        });
        req.on('error', reject);
        req.setTimeout(15000, () => {
            req.destroy();
            reject(new Error('Request timed out'));
        });
    });
}

async function updateEvents() {
    console.log(`[${new Date().toISOString()}] Fetching live match agenda from ${SOURCE_URL}...`);
    try {
        const rawContent = await fetchUrl(SOURCE_URL);
        const match = rawContent.match(/(?:const|var|let)\s+EVENTOS_DATA\s*=\s*(\[[\s\S]*?\]);/i);
        
        if (!match) {
            console.error('❌ Could not parse EVENTOS_DATA array from source.');
            return false;
        }

        let cleanedJson = match[1].replace(/,\s*([\]}])/g, '$1');
        const rawEvents = JSON.parse(cleanedJson);

        let idCounter = 1;
        const processedEvents = [];

        for (const evt of rawEvents) {
            const rawTitle = (evt.titulo || '').trim();
            if (!rawTitle) continue;

            const flagClass = detectFlag(rawTitle, evt.clase);
            const customTitle = formatCustomTitle(rawTitle);

            const channels = [];
            for (const ch of (evt.canales || [])) {
                let rawUrl = (ch.url || '').trim();
                
                // Exclude reported / blacklisted stream URLs
                if (isBlacklistedUrl(rawUrl)) {
                    console.log(`🛡️ Filtered out blacklisted stream from "${customTitle}": ${ch.nombre}`);
                    continue;
                }

                // Normalize URL to local eventos.html format
                let finalUrl = rawUrl;
                if (rawUrl.startsWith('eventos?r=')) {
                    finalUrl = 'eventos.html?r=' + rawUrl.substring(10);
                } else if (rawUrl.startsWith('/eventos?r=')) {
                    finalUrl = 'eventos.html?r=' + rawUrl.substring(11);
                }

                let q = (ch.calidad || 'HD').trim();
                if (!q || q === '720p') q = '720p HD';
                if (q === '1080p') q = '1080p Full HD';

                channels.push({
                    nombre: (ch.nombre || 'Canal').trim(),
                    url: finalUrl,
                    calidad: q
                });
            }

            if (channels.length > 0) {
                processedEvents.push({
                    id: idCounter++,
                    clase: flagClass,
                    titulo: customTitle,
                    hora: (evt.hora || '00:00').trim(),
                    canales: channels,
                    hora_fin: (evt.hora_fin || '').trim()
                });
            }
        }

        const fileOutput = `/**\n * Fútbol Libre TV - Agenda de Partidos en Directo\n * Base de datos de eventos deportivos y canales en vivo\n */\n\nconst EVENTOS_DATA = ${JSON.stringify(processedEvents, null, 4)};\n`;

        fs.writeFileSync(TARGET_FILE, fileOutput, 'utf8');
        console.log(`✅ Successfully updated ${processedEvents.length} matches with unique custom titles in eventos.js!`);
        return true;
    } catch (err) {
        console.error('❌ Error during update:', err.message);
        return false;
    }
}

// Execution
updateEvents();
