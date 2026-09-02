/**
 * Fútbol Libre TV - Agenda de Partidos en Directo
 * Base de datos de eventos deportivos y canales en vivo
 */

const EVENTOS_DATA = [
    {
        "id": 1,
        "clase": "IT",
        "titulo": "Copa de Italia EN VIVO - Sassuolo vs Frosinone 2026-09-02",
        "hora": "14:00",
        "canales": [
            {
                "nombre": "DSports",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kc3BvcnRz",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 2,
        "clase": "IT",
        "titulo": "Copa de Italia EN VIVO - Udinese vs Venezia 2026-09-02",
        "hora": "17:00",
        "canales": [
            {
                "nombre": "Fox ONE",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mb3hvbmUx",
                "calidad": "720p HD"
            },
            {
                "nombre": "DSports",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kc3BvcnRzMg==",
                "calidad": "720p HD"
            },
            {
                "nombre": "Paramount+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1wYXJhbW91bnQy",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 3,
        "clase": "ENG",
        "titulo": "EFL Championship EN VIVO - West Bromwich vs Charlton 2026-09-02",
        "hora": "19:45",
        "canales": [
            {
                "nombre": "Paramount+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1wYXJhbW91bnQz",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 4,
        "clase": "ENG",
        "titulo": "EFL Championship EN VIVO - Queens Park Rangers vs Cardiff City 2026-09-02",
        "hora": "19:45",
        "canales": [
            {
                "nombre": "Paramount+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1wYXJhbW91bnQ0",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 5,
        "clase": "ENG",
        "titulo": "EFL Championship EN VIVO - Millwall vs Wrexham 2026-09-02",
        "hora": "19:45",
        "canales": [
            {
                "nombre": "Paramount+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1wYXJhbW91bnQ1",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 6,
        "clase": "ENG",
        "titulo": "EFL Championship EN VIVO - Burnley vs Middlesbrough 2026-09-02",
        "hora": "20:00",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXkx",
                "calidad": "720p HD"
            },
            {
                "nombre": "ESPN 5",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1lc3BuNQ==",
                "calidad": "720p HD"
            },
            {
                "nombre": "Paramount+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1wYXJhbW91bnQ2",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 7,
        "clase": "PY",
        "titulo": "Copa de Primera Paraguay EN VIVO - Ameliano vs Trinidense 2026-09-02",
        "hora": "20:00",
        "canales": [
            {
                "nombre": "Fanatiz",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6MQ==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 8,
        "clase": "PY",
        "titulo": "Copa de Primera Paraguay EN VIVO - Nacional Asuncion vs Libertad 2026-09-02",
        "hora": "20:00",
        "canales": [
            {
                "nombre": "Fanatiz",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6Mg==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 9,
        "clase": "PY",
        "titulo": "Copa de Primera Paraguay EN VIVO - Olimpia vs Guarani 2026-09-02",
        "hora": "22:30",
        "canales": [
            {
                "nombre": "Fanatiz",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6Mw==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 10,
        "clase": "CH",
        "titulo": "Primera Division Chile EN VIVO - Coquimbo Unido vs U. de Concepcion 2026-09-02",
        "hora": "23:00",
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
        "id": 11,
        "clase": "BRA",
        "titulo": "Brasileirao Serie A EN VIVO - Flamengo vs Mirassol 2026-09-02",
        "hora": "23:30",
        "canales": [
            {
                "nombre": "Premiere BR",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1wcmVtaWVyZTE=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 12,
        "clase": "AR",
        "titulo": "Copa Argentina EN VIVO - Velez Sarsfield vs Boca Juniors 2026-09-02",
        "hora": "01:15",
        "canales": [
            {
                "nombre": "TyC Sports",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT10eWM=",
                "calidad": "720p HD"
            },
            {
                "nombre": "Fanatiz",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6NA==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 13,
        "clase": "CH",
        "titulo": "Primera Division Chile EN VIVO - Deportes Limache vs Nublense 2026-09-02",
        "hora": "01:30",
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
        "id": 14,
        "clase": "BRA",
        "titulo": "Copa do Brasil EN VIVO - Santos vs Palmeiras 2026-09-02",
        "hora": "01:30",
        "canales": [
            {
                "nombre": "DSports OP.2",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kc3BvcnRz",
                "calidad": "720p HD"
            },
            {
                "nombre": "Premiere BR",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1wcmVtaWVyZTE=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 15,
        "clase": "BRA",
        "titulo": "Copa do Brasil EN VIVO - Vitoria vs Vasco da Gama 2026-09-02",
        "hora": "01:30",
        "canales": [
            {
                "nombre": "Amazon Prime",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1hbWF6b24x",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 16,
        "clase": "LEAGUESCUP",
        "titulo": "Leagues Cup EN VIVO - Toluca vs Leon 2026-09-02",
        "hora": "02:00",
        "canales": [
            {
                "nombre": "MLS",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1tbHMxZXM=",
                "calidad": "720p HD"
            },
            {
                "nombre": "TUDN US",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT10dWRuX3VzYQ==",
                "calidad": "720p HD"
            },
            {
                "nombre": "Fox Sports",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mb3gxdXNh",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 17,
        "clase": "COL",
        "titulo": "Liga BetPlay Colombia EN VIVO - Santa Fe vs Millonarios 2026-09-02",
        "hora": "02:25",
        "canales": [
            {
                "nombre": "Fanatiz",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6NQ==",
                "calidad": "720p HD"
            },
            {
                "nombre": "Win+ Fútbol",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT13aW5wbHVz",
                "calidad": "720p HD"
            },
            {
                "nombre": "Fanatiz | Sonido Ambiente",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6MQ==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 18,
        "clase": "LEAGUESCUP",
        "titulo": "Leagues Cup EN VIVO - Club America vs Monterrey 2026-09-02",
        "hora": "04:00",
        "canales": [
            {
                "nombre": "MLS",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1tbHMyZXM=",
                "calidad": "720p HD"
            },
            {
                "nombre": "TUDN US",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT10dWRuX3VzYQ==",
                "calidad": "720p HD"
            },
            {
                "nombre": "TUDN MX",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT10dWRubXg=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    }
];
