const info = {
    Argumentos: process.argv.slice(2),
    Plataforma: process.platform,
    Version: process.version,
    Carpeta: process.cwd(),
    PID: process.pid,
    Ejecucion: process.execPath
}

export default info;