<?php
/**
 * Fútbol Libre TV - Safe Match & Embed Link Auto Updater (PHP)
 * Scrapes latest matches, formats titles uniquely with ' - ' and dynamic date,
 * detects country flags, includes working embed links, and filters out blacklisted URLs.
 */

header('Content-Type: text/plain; charset=utf-8');

define('TARGET_FILE', __DIR__ . '/eventos.js');
define('SOURCE_URL', 'https://futbollibretv.sx/eventos.js');

// Reported / Blacklisted stream keys that must NEVER be added
$blacklistedStreams = [
    'espndeportes',
    'espnplus2',
    'canal5mx',
    'espnplus1',
    'max1',
    'universo_usa'
];

$flagRules = [
    'ENG'   => ['premier league', 'championship', 'fa cup', 'efl cup', 'carabao', 'liverpool', 'manchester', 'arsenal', 'chelsea', 'tottenham', 'newcastle', 'west ham', 'aston villa', 'middlesbrough', 'west bromwich', 'southampton', 'millwall', 'norwich', 'burnley', 'cardiff', 'watford', 'sheffield', 'bournemouth', 'everton', 'coventry', 'hull city'],
    'ES'    => ['laliga', 'la liga', 'copa del rey', 'real madrid', 'barcelona', 'atlético madrid', 'atletico madrid', 'sevilla', 'betis', 'valencia', 'villarreal', 'athletic club', 'real sociedad', 'espanyol', 'albacete', 'real oviedo', 'leganés', 'eldense', 'girona', 'las palmas', 'sabadell', 'almería', 'levante'],
    'ALE'   => ['bundesliga', 'dfb-pokal', 'dfb pokal', 'bayern', 'dortmund', 'leverkusen', 'leipzig', 'frankfurt', 'stuttgart', 'elversberg', 'köln', 'hoffenheim', 'mainz', 'paderborn', 'hamburger'],
    'IT'    => ['serie a', 'coppa italia', 'juventus', 'inter', 'milan', 'napoli', 'roma', 'lazio', 'atalanta', 'fiorentina', 'frosinone', 'monza', 'udinese', 'sassuolo', 'torino', 'parma'],
    'FRA'   => ['ligue 1', 'coupe de france', 'psg', 'paris saint-germain', 'marseille', 'lyon', 'monaco', 'lille', 'lens', 'strasbourg', 'auxerre', 'angers', 'brest', 'toulouse', 'lorient', 'troyes', 'le havre'],
    'POR'   => ['primeira liga', 'taça de portugal', 'porto', 'benfica', 'sporting cp', 'braga', 'arouca', 'santa clara', 'alverca', 'marítimo', 'academico viseu'],
    'HOL'   => ['eredivisie', 'knvb', 'ajax', 'psv', 'feyenoord', 'az alkmaar', 'go ahead eagles'],
    'TUR'   => ['super lig', 'süper lig', 'galatasaray', 'fenerbahce', 'besiktas', 'trabzonspor', 'göztepe'],
    'ARA'   => ['profesional saudí', 'saudi pro league', 'saudí', 'saudi', 'al hilal', 'al-hilal', 'al nassr', 'al-nassr', 'al ittihad', 'al-ittihad', 'al ahli', 'al-ahli', 'al kholood', 'al fateh'],
    'USA'   => ['mls', 'major league soccer', 'us open cup', 'inter miami', 'la galaxy', 'sounders', 'ny red bulls', 'atlanta united', 'chicago fire', 'charlotte', 'columbus crew', 'new england', 'dc united', 'los angeles fc', 'philadelphia', 'toronto fc', 'new york city', 'houston dynamo', 'sj earthquakes', 'minnesota united', 'orlando city', 'nashville', 'cincinnati', 'sporting kc', 'vancouver', 'colorado rapids', 'real salt lake', 'portland timbers', 'austin', 'san diego', 'dallas', 'st. louis'],
    'MEX'   => ['liga mx', 'expansion mx', 'expansión mx', 'america', 'américa', 'chivas', 'guadalajara', 'cruz azul', 'pumas', 'tigres', 'monterrey', 'toluca', 'pachuca', 'atlas', 'querétaro', 'puebla', 'santos laguna', 'juárez', 'juarez', 'mazatlán', 'tijuana', 'necaxa', 'león', 'san luis'],
    'AR'    => ['liga profesional', 'copa de la liga', 'copa argentina', 'boca', 'river', 'racing', 'independiente', 'san lorenzo', 'velez', 'vélez', 'rosario central', 'gimnasia la plata', 'huracán', 'estudiantes', 'atlético tucumán', 'belgrano', 'talleres', 'central córdoba', 'riestra', 'rivadavia', 'newell', 'lanús', 'banfield', 'platense', 'barracas'],
    'COL'   => ['liga betplay', 'copa colombia', 'nacional', 'millonarios', 'santa fe', 'america de cali', 'américa de cali', 'junior', 'medellin', 'medellín', 'deportivo cali', 'jaguares', 'alianza', 'inter bogotá', 'inter bogota', 'tolima', 'pereira', 'once caldas', 'bucaramanga', 'pastos', 'envigado'],
    'BRA'   => ['brasileirão', 'brasileirao', 'copa do brasil', 'flamengo', 'palmeiras', 'sao paulo', 'são paulo', 'corinthians', 'santos', 'gremio', 'grêmio', 'internacional', 'cruzeiro', 'atletico mineiro', 'atlético mineiro', 'vitória', 'rb bragantino', 'vasco da gama', 'botafogo', 'fluminense', 'bahia', 'fortaleza'],
    'URU'   => ['primera división', 'progreso', 'danubio', 'boston river', 'cerro', 'defensor sporting', 'torque', 'peñarol', 'nacional uru', 'juventud', 'deportivo maldonado'],
    'PE'    => ['liga 1', 'universitario', 'alianza lima', 'sporting cristal', 'melgar', 'los chankas', 'utc cajamarca', 'deportivo garcilaso', 'juan pablo ii', 'cienciano', 'cusco'],
    'RU'    => ['copa de rusia', 'rusia', 'russian', 'premier league rusa', 'cska', 'zenit', 'spartak', 'rostov', 'lokomotiv', 'krasnodar', 'dinamo moscú', 'dinamo moscu', 'rubin kazan'],
    'PY'    => ['copa de primera', 'paraguay', 'olimpia', 'cerro porteño', 'cerro porteno', 'libertad', 'guarani', 'sportivo trinidense', '2 de mayo', 'deportivo recoleta', 'rubio ñú', 'rubio nu', 'sportivo san lorenzo', 'luqueño', 'luqueno', 'tacuary', 'general caballero', 'nacional py'],
    'PARAG' => ['copa de primera', 'paraguay', 'olimpia', 'cerro porteño', 'libertad', 'guarani', 'sportivo trinidense', '2 de mayo', 'deportivo recoleta'],
    'CH'    => ['primera división', 'primera division', 'colo-colo', 'universidad de chile', 'u catolica', 'ñublense', 'everton chile', 'deportes limache', 'deportes concepción', 'coquimbo', 'huachipato'],
    'ECUA'  => ['ligapro', 'ecuador', 'ldu quito', 'barcelona sc', 'emelec', 'independiente del valle'],
    'BOL'   => ['liga boliviana', 'bolivar', 'the strongest', 'wilstermann'],
    'VEN'   => ['liga futve', 'caracas', 'deportivo tachira'],
    'UCL'   => ['champions league', 'uefa champions', 'europa league', 'conference league', 'uefa super cup'],
    'LIB'   => ['copa libertadores', 'copa sudamericana', 'recopa'],
    'F1'    => ['formula 1', 'f1', 'f2', 'f3', 'gran premio', 'gp '],
    'MOTOGP'=> ['motogp', 'moto2', 'moto3'],
    'NBA'   => ['nba', 'euroleague', 'wnba', 'fiba', 'basquet', 'basket', 'baloncesto'],
    'ATP'   => ['atp', 'wta', 'roland garros', 'wimbledon', 'us open tenis', 'australian open', 'tenis', 'tennis'],
    'UFC'   => ['ufc', 'mma', 'boxeo', 'box', 'wwe', 'aew'],
    'MLB'   => ['mlb', 'lmb', 'serie del caribe', 'baseball', 'béisbol'],
    'NFL'   => ['nfl', 'super bowl', 'rugby']
];

function formatCustomMatchTitle($rawTitle) {
    if (empty($rawTitle)) return '';
    // 1. Replace colon ':' with ' - '
    $cleaned = preg_replace('/:\s*/u', ' - ', $rawTitle);
    $cleaned = trim(preg_replace('/\s+/u', ' ', $cleaned));

    // 2. Format current date: YYYY-MM-DD
    $dateStr = date('Y-m-d');

    // 3. Append date if not already present
    if (strpos($cleaned, $dateStr) === false) {
        $cleaned .= ' ' . $dateStr;
    }
    return $cleaned;
}

function detectFlagClass($title, $existingClass, $flagRules) {
    if (!empty($existingClass) && $existingClass !== 'FUT' && !is_numeric($existingClass)) {
        return strtoupper($existingClass);
    }
    
    $lowerTitle = mb_strtolower($title, 'UTF-8');
    foreach ($flagRules as $class => $keywords) {
        foreach ($keywords as $kw) {
            if (mb_strpos($lowerTitle, $kw) !== false) {
                return $class;
            }
        }
    }
    return 'FUT';
}

function isBlacklistedStreamUrl($url, $blacklistedStreams) {
    if (empty($url) || $url === '#') return false;

    $decoded = '';
    if (preg_match('/[?&]r=([^&]+)/', $url, $m)) {
        $decoded = strtolower(base64_decode($m[1]) ?: $url);
    } else {
        $decoded = strtolower($url);
    }

    foreach ($blacklistedStreams as $key) {
        if (strpos($decoded, strtolower($key)) !== false) {
            return true;
        }
    }
    return false;
}

function fetchSourceUrl($url) {
    if (function_exists('curl_init')) {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 15);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Referer: https://futbollibretv.sx/']);
        $result = curl_exec($ch);
        curl_close($ch);
        if (!empty($result)) return $result;
    }
    
    $ctx = stream_context_create([
        'http' => [
            'timeout' => 15,
            'header' => "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36\r\n" .
                        "Referer: https://futbollibretv.sx/\r\n"
        ],
        'ssl' => ['verify_peer' => false, 'verify_peer_name' => false]
    ]);
    return @file_get_contents($url, false, $ctx);
}

echo "[" . date('Y-m-d H:i:s') . "] Conectando a la fuente en vivo...\n";

$js = fetchSourceUrl(SOURCE_URL);
if (!$js || !preg_match('/(?:const|var|let)\s+EVENTOS_DATA\s*=\s*(\[[\s\S]*?\]);/i', $js, $matches)) {
    die("❌ Error al descargar o analizar eventos desde " . SOURCE_URL . "\n");
}

$jsonStr = preg_replace('/,\s*([\]}])/m', '$1', $matches[1]);
$rawEvents = json_decode($jsonStr, true);

if (!is_array($rawEvents)) {
    die("❌ Error al decodificar JSON.\n");
}

$processedEvents = [];
$idCounter = 1;
$filteredCount = 0;

foreach ($rawEvents as $item) {
    $rawTitle = trim($item['titulo'] ?? '');
    if (empty($rawTitle)) continue;

    $cleanTitle = preg_replace('/\s+/', ' ', $rawTitle);
    $detectedClass = detectFlagClass($cleanTitle, $item['clase'] ?? '', $flagRules);
    $uniqueCustomTitle = formatCustomMatchTitle($cleanTitle);

    $channels = [];
    if (!empty($item['canales']) && is_array($item['canales'])) {
        foreach ($item['canales'] as $ch) {
            $rawUrl = trim($ch['url'] ?? '');

            // Blacklist check
            if (isBlacklistedStreamUrl($rawUrl, $blacklistedStreams)) {
                $filteredCount++;
                continue;
            }

            // Normalize URL format
            $finalUrl = $rawUrl;
            if (strpos($rawUrl, 'eventos?r=') === 0) {
                $finalUrl = 'eventos.html?r=' . substr($rawUrl, 10);
            } elseif (strpos($rawUrl, '/eventos?r=') === 0) {
                $finalUrl = 'eventos.html?r=' . substr($rawUrl, 11);
            }

            $chQuality = trim($ch['calidad'] ?? 'HD');
            if (empty($chQuality) || $chQuality === '720p') {
                $chQuality = '720p HD';
            } elseif ($chQuality === '1080p') {
                $chQuality = '1080p Full HD';
            }

            $channels[] = [
                'nombre' => trim($ch['nombre'] ?? 'Canal'),
                'url' => $finalUrl,
                'calidad' => $chQuality
            ];
        }
    }

    if (!empty($channels)) {
        $processedEvents[] = [
            'id' => $idCounter++,
            'clase' => $detectedClass,
            'titulo' => $uniqueCustomTitle,
            'hora' => trim($item['hora'] ?? '00:00'),
            'canales' => $channels,
            'hora_fin' => trim($item['hora_fin'] ?? '')
        ];
    }
}

$jsonOptions = JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES;
$outputJson = json_encode($processedEvents, $jsonOptions);

$fileContent = "/**\n" .
               " * Fútbol Libre TV - Agenda de Partidos en Directo\n" .
               " * Base de datos de eventos deportivos y canales en vivo\n" .
               " */\n\n" .
               "const EVENTOS_DATA = " . $outputJson . ";\n";

file_put_contents(TARGET_FILE, $fileContent);

echo "✅ ¡Éxito! Se actualizaron " . count($processedEvents) . " partidos con títulos únicos y fecha en eventos.js.\n";
echo "🛡️ Total de canales reportados/bloqueados filtrados: " . $filteredCount . "\n";
