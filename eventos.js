/**
 * Fútbol Libre TV - Agenda de Partidos en Directo
 * Base de datos de eventos deportivos y canales en vivo
 */

const EVENTOS_DATA = [
    {
        "id": 1,
        "clase": "BRA",
        "titulo": "Copa do Brasil EN VIVO - Atlético Mineiro vs Cruzeiro 2026-09-02",
        "hora": "01:00",
        "canales": [
            {
                "nombre": "DSports",
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
        "id": 2,
        "clase": "COL",
        "titulo": "Liga BetPlay EN VIVO - Fortaleza CEIF vs Once Caldas 2026-09-02",
        "hora": "02:00",
        "canales": [
            {
                "nombre": "Fanatiz",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6Mw==",
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
        "id": 3,
        "clase": "IT",
        "titulo": "Copa de Italia EN VIVO - Parma vs Cremonese 2026-09-02",
        "hora": "17:00",
        "canales": [
            {
                "nombre": "DSports 2",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kc3BvcnRzMg==",
                "calidad": "720p HD"
            },
            {
                "nombre": "Paramount+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1wYXJhbW91bnQx",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 4,
        "clase": "RU",
        "titulo": "Copa de Rusia EN VIVO - Rostov vs CSKA Moskva 2026-09-02",
        "hora": "18:45",
        "canales": [
            {
                "nombre": "DSports+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kc3BvcnRzcGx1cw==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 5,
        "clase": "ARA",
        "titulo": "Liga Profesional Saudí EN VIVO - Al Hilal vs Al-Ahli 2026-09-02",
        "hora": "19:00",
        "canales": [
            {
                "nombre": "Fox ONE",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mb3hvbmUx",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 6,
        "clase": "ENG",
        "titulo": "EFL Championship EN VIVO - West Ham United vs Wolverhampton 2026-09-02",
        "hora": "19:45",
        "canales": [
            {
                "nombre": "Paramount+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1wYXJhbW91bnQy",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 7,
        "clase": "ENG",
        "titulo": "EFL Championship EN VIVO - Stoke City vs Norwich City 2026-09-02",
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
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 8,
        "clase": "ENG",
        "titulo": "EFL Championship EN VIVO - Birmingham City vs Southampton 2026-09-02",
        "hora": "20:00",
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
        "id": 9,
        "clase": "IT",
        "titulo": "Copa de Italia EN VIVO - Torino vs Monza 2026-09-02",
        "hora": "20:00",
        "canales": [
            {
                "nombre": "DSports",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kc3BvcnRz",
                "calidad": "720p HD"
            },
            {
                "nombre": "Paramount+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1wYXJhbW91bnQ0",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 10,
        "clase": "PY",
        "titulo": "Copa de Primera Paraguay EN VIVO - Rubio Nu vs Sportivo San Lorenzo 2026-09-02",
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
        "id": 11,
        "clase": "PY",
        "titulo": "Copa de Primera Paraguay EN VIVO - 2 de Mayo vs Sportivo Luqueno 2026-09-02",
        "hora": "22:30",
        "canales": [
            {
                "nombre": "Fanatiz",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6Mg==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    }
];
