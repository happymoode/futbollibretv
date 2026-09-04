/**
 * Fútbol Libre TV - Configuration
 */

const STREAM_CONFIG = {
    // Dominio activo del servidor de streaming / embed
    activeDomain: "streamtp99a.sbs",
    
    // Ruta base del reproductor PHP
    basePath: "/global1.php?stream=",
    
    // Dominio de respaldo (Fallback)
    fallbackDomain: "streamtp-golden1.click",
    fallbackPath: "/global1.php?stream=",
    
    // Parámetros del reproductor iframe
    allowFullscreen: true,
    allowAutoplay: true,
    allowPictureInPicture: true
};
