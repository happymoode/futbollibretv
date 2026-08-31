/**
 * Fútbol Libre TV - Agenda de Partidos en Directo
 * Base de datos de eventos deportivos y canales en vivo
 */

const EVENTOS_DATA = [
    {
        "id": 1,
        "clase": "COL",
        "titulo": "Liga BetPlay - Millonarios vs Inter Bogotá 2026-08-31",
        "hora": "00:15",
        "canales": [
            {
                "nombre": "Fanatiz",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6MQ==",
                "calidad": "720p HD"
            },
            {
                "nombre": "Win+ Fútbol",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT13aW5wbHVz",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 2,
        "clase": "PE",
        "titulo": "Liga 1 - Cienciano vs Cusco 2026-08-31",
        "hora": "01:00",
        "canales": [
            {
                "nombre": "Liga 1 Max",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1saWdhMW1heA==",
                "calidad": "720p HD"
            },
            {
                "nombre": "Fanatiz",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6Mg==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 3,
        "clase": "CH",
        "titulo": "Primera División - Coquimbo Unido vs Huachipato 2026-08-31",
        "hora": "01:00",
        "canales": [
            {
                "nombre": "TNT Sports Premium",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT10bnRzcG9ydHNjaGlsZQ==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 4,
        "clase": "MEX",
        "titulo": "Liga MX - Toluca vs Juárez 2026-08-31",
        "hora": "01:00",
        "canales": [
            {
                "nombre": "TUDN US",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT10dWRuX3VzYQ==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 5,
        "clase": "AR",
        "titulo": "Liga Profesional - Independiente Rivadavia vs Racing Club 2026-08-31",
        "hora": "01:30",
        "canales": [
            {
                "nombre": "Fanatiz",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6Mw==",
                "calidad": "720p HD"
            },
            {
                "nombre": "TNT Sports Premium",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT10bnRzcG9ydHM=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 6,
        "clase": "COL",
        "titulo": "Liga BetPlay - Deportivo Cali vs Atlético Bucaramanga 2026-08-31",
        "hora": "02:20",
        "canales": [
            {
                "nombre": "Fanatiz",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6NA==",
                "calidad": "720p HD"
            },
            {
                "nombre": "Win+ Fútbol",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT13aW5wbHVz",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 7,
        "clase": "MEX",
        "titulo": "Liga MX - Monterrey vs Atlético San Luis 2026-08-31",
        "hora": "03:10",
        "canales": [
            {
                "nombre": "TUDN US",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT10dWRuX3VzYQ==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    }
];
