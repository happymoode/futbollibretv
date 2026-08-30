/**
 * Fútbol Libre TV - Agenda de Partidos en Directo
 * Base de datos de eventos deportivos y canales
 */

const EVENTOS_DATA = [
    {
        "id": 1,
        "clase": "ENG",
        "titulo": "Premier League: Liverpool vs Nottingham Forest",
        "hora": "12:30",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXkx",
                "calidad": "720p HD"
            },
            {
                "nombre": "HBO Max",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1tYXgx",
                "calidad": "720p HD"
            },
            {
                "nombre": "ESPN",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1lc3BuMWNvbA==",
                "calidad": "720p HD"
            },
            {
                "nombre": "Universo",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT11bml2ZXJzb191c2E=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 2,
        "clase": "ENG",
        "titulo": "Championship: Middlesbrough vs West Bromwich Albion",
        "hora": "12:30",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXky",
                "calidad": "720p HD"
            },
            {
                "nombre": "ESPN",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1lc3BuNw==",
                "calidad": "720p HD"
            },
            {
                "nombre": "FOX Sports AR",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mb3gxYXI=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 3,
        "clase": "ALE",
        "titulo": "Bundesliga: Elversberg vs Bayer Leverkusen",
        "hora": "14:30",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXkz",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 4,
        "clase": "ALE",
        "titulo": "Bundesliga: Köln vs Hoffenheim",
        "hora": "14:30",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXk0",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 5,
        "clase": "ALE",
        "titulo": "Bundesliga: Mainz 05 vs Paderborn",
        "hora": "14:30",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXk1",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 6,
        "clase": "ALE",
        "titulo": "Bundesliga: RB Leipzig vs Borussia M'gladbach",
        "hora": "14:30",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXk2",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 7,
        "clase": "ALE",
        "titulo": "Bundesliga: Union Berlin vs Eintracht Frankfurt",
        "hora": "14:30",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXk3",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 8,
        "clase": "ENG",
        "titulo": "Premier League: AFC Bournemouth vs Everton",
        "hora": "15:00",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXk4",
                "calidad": "720p HD"
            },
            {
                "nombre": "ESPN",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1lc3BuMWNvbA==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 9,
        "clase": "ENG",
        "titulo": "Premier League: Coventry City vs Hull City",
        "hora": "15:00",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXk5",
                "calidad": "720p HD"
            },
            {
                "nombre": "HBO Max",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1tYXgy",
                "calidad": "720p HD"
            },
            {
                "nombre": "Universo",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT11bml2ZXJzb191c2E=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 10,
        "clase": "ENG",
        "titulo": "Championship: Cardiff City vs Sheffield United",
        "hora": "15:00",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXkxMA==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 11,
        "clase": "ENG",
        "titulo": "Championship: Watford vs West Ham United",
        "hora": "15:00",
        "canales": [
            {
                "nombre": "Paramount+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1wYXJhbW91bnQx",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 12,
        "clase": "ENG",
        "titulo": "Championship: Southampton vs Millwall",
        "hora": "15:00",
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
        "id": 13,
        "clase": "ENG",
        "titulo": "Championship: Norwich City vs Burnley",
        "hora": "15:00",
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
        "id": 14,
        "clase": "URU",
        "titulo": "Primera División: Progreso vs Danubio",
        "hora": "15:00",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXkxMQ==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 15,
        "clase": "POR",
        "titulo": "Primeira Liga: Alverca vs Santa Clara",
        "hora": "15:30",
        "canales": [
            {
                "nombre": "Sport TV 2",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1zcG9ydHZfMnB0",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 16,
        "clase": "POR",
        "titulo": "Primeira Liga: Arouca vs Marítimo",
        "hora": "15:30",
        "canales": [
            {
                "nombre": "Sport TV 3",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1zcG9ydHZfM3B0",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 17,
        "clase": "ES",
        "titulo": "LaLiga: Levante vs Real Betis",
        "hora": "16:00",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXkxMg==",
                "calidad": "720p HD"
            },
            {
                "nombre": "ESPN+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1lc3BucGx1czE=",
                "calidad": "720p HD"
            },
            {
                "nombre": "ESPN",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1lc3BuM2NvbA==",
                "calidad": "720p HD"
            },
            {
                "nombre": "ESPN Deportes",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1lc3BuZGVwb3J0ZXM=",
                "calidad": "720p HD"
            },
            {
                "nombre": "Canal 5 MX",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1jYW5hbDVteA==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 18,
        "clase": "ES",
        "titulo": "LaLiga 2: Sabadell vs Almería",
        "hora": "16:00",
        "canales": [
            {
                "nombre": "LaLiga TV Hypermotion ES",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1oeXBlcm1vdGlvbjE=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 19,
        "clase": "FRA",
        "titulo": "Ligue 1: Strasbourg vs Lens",
        "hora": "16:15",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXkxMw==",
                "calidad": "720p HD"
            },
            {
                "nombre": "ESPN",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1lc3BuNA==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 20,
        "clase": "ARA",
        "titulo": "Liga Profesional Saudí: Al Kholood vs Al-Ahli",
        "hora": "17:05",
        "canales": [
            {
                "nombre": "FOX Deportes",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mb3hfZGVwb3J0ZXNfdXNh",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 21,
        "clase": "ENG",
        "titulo": "Premier League: Tottenham Hotspur vs Newcastle United",
        "hora": "17:30",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXkxNA==",
                "calidad": "720p HD"
            },
            {
                "nombre": "ESPN",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1lc3BuMWNvbA==",
                "calidad": "720p HD"
            },
            {
                "nombre": "Universo",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT11bml2ZXJzb191c2E=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 22,
        "clase": "ALE",
        "titulo": "Bundesliga: Borussia Dortmund vs Hamburger SV",
        "hora": "17:30",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXkxNQ==",
                "calidad": "720p HD"
            },
            {
                "nombre": "ESPN",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1lc3BuMmNvbA==",
                "calidad": "720p HD"
            },
            {
                "nombre": "Telemundo",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT10ZWxlbXVuZG8=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 23,
        "clase": "IT",
        "titulo": "Serie A: Fiorentina vs Frosinone",
        "hora": "17:30",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXkxNg==",
                "calidad": "720p HD"
            },
            {
                "nombre": "ESPN 3 MX",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1lc3BuM214",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 24,
        "clase": "IT",
        "titulo": "Serie A: Monza vs Udinese",
        "hora": "17:30",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXkxNw==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 25,
        "clase": "IT",
        "titulo": "Serie A: Sassuolo vs Torino",
        "hora": "17:30",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXkxOA==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 26,
        "clase": "HOL",
        "titulo": "Eredivisie: AZ vs Go Ahead Eagles",
        "hora": "18:00",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXkxOQ==",
                "calidad": "720p HD"
            },
            {
                "nombre": "ESPN MX",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1lc3BubXg=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 27,
        "clase": "ES",
        "titulo": "LaLiga: Real Sociedad vs Espanyol",
        "hora": "18:00",
        "canales": [
            {
                "nombre": "DSports (Recomendado FHD)",
                "url": "eventos.html?r=aHR0cHM6Ly9zdWRhbWVyaWNhcGxheS5zYnMvY2FuYWxfODExMi9jemFfZHNwb3J0cy5odG1s",
                "calidad": "1080p Full HD"
            },
            {
                "nombre": "DSports OP.2",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kc3BvcnRz",
                "calidad": "720p HD"
            },
            {
                "nombre": "ESPN+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1lc3BucGx1czI=",
                "calidad": "720p HD"
            },
            {
                "nombre": "M+ LaLiga",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1tbGFsaWdh",
                "calidad": "720p HD"
            },
            {
                "nombre": "ESPN Deportes",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1lc3BuZGVwb3J0ZXM=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 28,
        "clase": "ES",
        "titulo": "LaLiga 2: Albacete vs Real Oviedo",
        "hora": "18:00",
        "canales": [
            {
                "nombre": "LaLiga TV Hypermotion ES",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1oeXBlcm1vdGlvbjE=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 29,
        "clase": "ES",
        "titulo": "LaLiga 2: Leganés vs Eldense",
        "hora": "18:00",
        "canales": [
            {
                "nombre": "LaLiga TV Hypermotion 2 ES",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1oeXBlcm1vdGlvbjI=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 30,
        "clase": "URU",
        "titulo": "Primera División: Boston River vs Cerro",
        "hora": "18:00",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXkyMA==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 31,
        "clase": "URU",
        "titulo": "Primera División: Juventud vs Deportivo Maldonado",
        "hora": "18:00",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXkx",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 32,
        "clase": "POR",
        "titulo": "Primeira Liga: Academico Viseu vs Porto",
        "hora": "18:00",
        "canales": [
            {
                "nombre": "DSports 2",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kc3BvcnRzMg==",
                "calidad": "720p HD"
            },
            {
                "nombre": "Fanatiz",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6MQ==",
                "calidad": "720p HD"
            },
            {
                "nombre": "Sport TV",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1zcG9ydHZfMXB0",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 33,
        "clase": "AR",
        "titulo": "Liga Profesional: Deportivo Riestra vs Vélez Sarsfield",
        "hora": "18:45",
        "canales": [
            {
                "nombre": "Fanatiz",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6Mg==",
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
        "id": 34,
        "clase": "PE",
        "titulo": "Liga 1: Los Chankas vs Juan Pablo II College",
        "hora": "19:00",
        "canales": [
            {
                "nombre": "Liga 1 Max",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1saWdhMW1heA==",
                "calidad": "720p HD"
            },
            {
                "nombre": "Fanatiz",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6Mw==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 35,
        "clase": "ARA",
        "titulo": "Liga Profesional Saudí: Al Fateh vs Al Ittihad",
        "hora": "19:00",
        "canales": [
            {
                "nombre": "FOX Deportes",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mb3hfZGVwb3J0ZXNfdXNh",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 36,
        "clase": "TUR",
        "titulo": "Super Lig: Galatasaray vs Göztepe",
        "hora": "19:30",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXky",
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
        "id": 37,
        "clase": "IT",
        "titulo": "Serie A: Juventus vs Parma",
        "hora": "19:45",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXkz",
                "calidad": "720p HD"
            },
            {
                "nombre": "ESPN",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1lc3BuMWNvbA==",
                "calidad": "720p HD"
            },
            {
                "nombre": "ESPN MX",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1lc3BubXg=",
                "calidad": "720p HD"
            },
            {
                "nombre": "Telemundo",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT10ZWxlbXVuZG8=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 38,
        "clase": "FRA",
        "titulo": "Ligue 1: Auxerre vs Angers SCO",
        "hora": "19:45",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXk0",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 39,
        "clase": "FRA",
        "titulo": "Ligue 1: Brest vs Toulouse",
        "hora": "19:45",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXk1",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 40,
        "clase": "FRA",
        "titulo": "Ligue 1: Lorient vs Troyes",
        "hora": "19:45",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXk2",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 41,
        "clase": "FRA",
        "titulo": "Ligue 1: Olympique Lyonnais vs Le Havre",
        "hora": "19:45",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXk3",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 42,
        "clase": "PY",
        "titulo": "Copa de Primera: Sportivo Trinidense vs 2 de Mayo",
        "hora": "20:00",
        "canales": [
            {
                "nombre": "Fanatiz",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6NQ==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 43,
        "clase": "ES",
        "titulo": "LaLiga: Sevilla vs Atlético Madrid",
        "hora": "20:30",
        "canales": [
            {
                "nombre": "DSports (Recomendado FHD)",
                "url": "eventos.html?r=aHR0cHM6Ly9zdWRhbWVyaWNhcGxheS5zYnMvY2FuYWxfODExMi9jemFfZHNwb3J0cy5odG1s",
                "calidad": "1080p Full HD"
            },
            {
                "nombre": "DSports OP.2",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kc3BvcnRz",
                "calidad": "720p HD"
            },
            {
                "nombre": "ESPN+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1lc3BucGx1czM=",
                "calidad": "720p HD"
            },
            {
                "nombre": "M+ LaLiga",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1tbGFsaWdh",
                "calidad": "720p HD"
            },
            {
                "nombre": "ESPN Deportes",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1lc3BuZGVwb3J0ZXM=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 44,
        "clase": "ES",
        "titulo": "LaLiga 2: Girona vs Las Palmas",
        "hora": "20:30",
        "canales": [
            {
                "nombre": "LaLiga TV Hypermotion ES",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1oeXBlcm1vdGlvbjE=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 45,
        "clase": "AR",
        "titulo": "Liga Profesional: Rosario Central vs Gimnasia La Plata",
        "hora": "21:00",
        "canales": [
            {
                "nombre": "Fanatiz",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6Ng==",
                "calidad": "720p HD"
            },
            {
                "nombre": "ESPN Premium",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1lc3BucHJlbWl1bQ==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 46,
        "clase": "URU",
        "titulo": "Primera División: Defensor Sporting vs Torque",
        "hora": "21:00",
        "canales": [
            {
                "nombre": "Disney+",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1kaXNuZXk4",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 47,
        "clase": "PE",
        "titulo": "Liga 1: UTC Cajamarca vs Universitario",
        "hora": "21:30",
        "canales": [
            {
                "nombre": "Liga 1 Max",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1saWdhMW1heA==",
                "calidad": "720p HD"
            },
            {
                "nombre": "Fanatiz",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6Nw==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 48,
        "clase": "USA",
        "titulo": "MLS: Seattle Sounders FC vs Chicago Fire",
        "hora": "21:30",
        "canales": [
            {
                "nombre": "MLS",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1tbHMxZXM=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 49,
        "clase": "COL",
        "titulo": "Liga BetPlay: Jaguares de Córdoba vs América de Cali",
        "hora": "22:25",
        "canales": [
            {
                "nombre": "Fanatiz",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6OA==",
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
        "id": 50,
        "clase": "PY",
        "titulo": "Copa de Primera: Deportivo Recoleta vs Olimpia",
        "hora": "22:30",
        "canales": [
            {
                "nombre": "Fanatiz",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6OQ==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 51,
        "clase": "CH",
        "titulo": "Primera División: Deportes Limache vs Everton",
        "hora": "22:30",
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
        "id": 52,
        "clase": "BRA",
        "titulo": "Brasileirão: Atlético Mineiro vs Vitória",
        "hora": "22:30",
        "canales": [
            {
                "nombre": "Fanatiz",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6MTA=",
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
        "id": 53,
        "clase": "AR",
        "titulo": "Liga Profesional: Huracán vs Estudiantes Río Cuarto",
        "hora": "23:00",
        "canales": [
            {
                "nombre": "Fanatiz",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6MTE=",
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
        "id": 54,
        "clase": "BRA",
        "titulo": "Brasileirão: São Paulo vs RB Bragantino",
        "hora": "00:00",
        "canales": [
            {
                "nombre": "Fanatiz",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6MTI=",
                "calidad": "720p HD"
            },
            {
                "nombre": "Premiere 3 BR",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1wcmVtaWVyZTM=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 55,
        "clase": "MEX",
        "titulo": "Liga MX: Pachuca vs Guadalajara",
        "hora": "00:00",
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
        "id": 56,
        "clase": "MEX",
        "titulo": "Liga MX: Atlas vs Querétaro",
        "hora": "00:00",
        "canales": [
            {
                "nombre": "Eventos",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1ldmVudG9zMg==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 57,
        "clase": "COL",
        "titulo": "Liga BetPlay: Junior vs Santa Fe",
        "hora": "00:30",
        "canales": [
            {
                "nombre": "Fanatiz",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6MTM=",
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
        "id": 58,
        "clase": "USA",
        "titulo": "MLS: Inter Miami vs CF Montréal",
        "hora": "00:30",
        "canales": [
            {
                "nombre": "MLS",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1tbHMyZXM=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 59,
        "clase": "USA",
        "titulo": "MLS: Atlanta United vs Charlotte",
        "hora": "00:30",
        "canales": [
            {
                "nombre": "MLS",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1tbHMzZXM=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 60,
        "clase": "USA",
        "titulo": "MLS: Columbus Crew vs New England",
        "hora": "00:30",
        "canales": [
            {
                "nombre": "MLS",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1tbHM0ZXM=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 61,
        "clase": "USA",
        "titulo": "MLS: DC United vs Los Angeles FC",
        "hora": "00:30",
        "canales": [
            {
                "nombre": "MLS",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1tbHM1ZXM=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 62,
        "clase": "USA",
        "titulo": "MLS: New York RB vs Philadelphia Union",
        "hora": "00:30",
        "canales": [
            {
                "nombre": "MLS",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1tbHM2ZXM=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 63,
        "clase": "USA",
        "titulo": "MLS: Toronto FC vs New York City",
        "hora": "00:30",
        "canales": [
            {
                "nombre": "MLS",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1tbHM3ZXM=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 64,
        "clase": "CH",
        "titulo": "Primera División: Ñublense vs Deportes Concepción",
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
        "id": 65,
        "clase": "BRA",
        "titulo": "Brasileirão: Vasco da Gama vs Cruzeiro",
        "hora": "01:20",
        "canales": [
            {
                "nombre": "Fanatiz",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6MTQ=",
                "calidad": "720p HD"
            },
            {
                "nombre": "Premiere 2 BR",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1wcmVtaWVyZTI=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 66,
        "clase": "PE",
        "titulo": "Liga 1: Alianza Lima vs Deportivo Garcilaso",
        "hora": "01:30",
        "canales": [
            {
                "nombre": "Liga 1 Max",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1saWdhMW1heA==",
                "calidad": "720p HD"
            },
            {
                "nombre": "Fanatiz",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6MTU=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 67,
        "clase": "AR",
        "titulo": "Liga Profesional: Atlético Tucumán vs Belgrano",
        "hora": "01:30",
        "canales": [
            {
                "nombre": "Fanatiz",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6MQ==",
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
        "id": 68,
        "clase": "AR",
        "titulo": "Liga Profesional: Talleres Córdoba vs Central Córdoba SdE",
        "hora": "01:30",
        "canales": [
            {
                "nombre": "Fanatiz",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1mYW5hdGl6Mg==",
                "calidad": "720p HD"
            },
            {
                "nombre": "ESPN Premium",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1lc3BucHJlbWl1bQ==",
                "calidad": "720p HD"
            },
            {
                "nombre": "ESPN PE",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1lc3Bu",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 69,
        "clase": "USA",
        "titulo": "MLS: Houston Dynamo vs SJ Earthquakes",
        "hora": "01:30",
        "canales": [
            {
                "nombre": "MLS",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1tbHM4ZXM=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 70,
        "clase": "USA",
        "titulo": "MLS: Minnesota United vs Orlando City SC",
        "hora": "01:30",
        "canales": [
            {
                "nombre": "MLS",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1tbHM5ZXM=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 71,
        "clase": "USA",
        "titulo": "MLS: Nashville SC vs Cincinnati",
        "hora": "01:30",
        "canales": [
            {
                "nombre": "MLS",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1tbHMxMGVz",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 72,
        "clase": "USA",
        "titulo": "MLS: Sporting KC vs Vancouver Whitecaps",
        "hora": "01:30",
        "canales": [
            {
                "nombre": "MLS",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1tbHMxMWVz",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 73,
        "clase": "MEX",
        "titulo": "Liga MX: América vs Puebla",
        "hora": "02:05",
        "canales": [
            {
                "nombre": "Canal 5 MX",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1jYW5hbDVteA==",
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
    },
    {
        "id": 74,
        "clase": "COL",
        "titulo": "Liga BetPlay: Alianza vs Atlético Nacional",
        "hora": "02:30",
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
        "id": 75,
        "clase": "USA",
        "titulo": "MLS: Colorado Rapids vs Real Salt Lake",
        "hora": "02:30",
        "canales": [
            {
                "nombre": "MLS",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1tbHMxMg==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 76,
        "clase": "USA",
        "titulo": "MLS: Portland Timbers vs Austin",
        "hora": "03:30",
        "canales": [
            {
                "nombre": "MLS",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1tbHMxMw==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 77,
        "clase": "USA",
        "titulo": "MLS: San Diego vs LA Galaxy",
        "hora": "03:30",
        "canales": [
            {
                "nombre": "MLS",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1tbHMxNA==",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    },
    {
        "id": 78,
        "clase": "MEX",
        "titulo": "Liga MX: Santos Laguna vs Tigres UANL",
        "hora": "04:10",
        "canales": [
            {
                "nombre": "Canal 5 MX",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1jYW5hbDVteA==",
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
            },
            {
                "nombre": "ESPN MX",
                "url": "eventos.html?r=aHR0cHM6Ly9zdHJlYW10cC1nb2xkZW4xLmNsaWNrL2dsb2JhbDEucGhwP3N0cmVhbT1lc3BubXg=",
                "calidad": "720p HD"
            }
        ],
        "hora_fin": ""
    }
];
