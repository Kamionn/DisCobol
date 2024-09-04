import { exec } from 'child_process';
import { promisify } from 'util';
import { readFile } from 'fs/promises';
import path from 'path';

const execPromise = promisify(exec);

async function runCobolHandler() {
    try {
        // Déterminer le chemin de l'exécutable COBOL
        const cobolExecutable = path.join(__dirname, '..', 'handler.exe'); // Assure-toi que le nom correspond

        // Exécuter le programme COBOL
        await execPromise(cobolExecutable);

        // Lire le fichier de sortie
        const outputPath = path.join(__dirname, '..', 'output.txt');
        const data = await readFile(outputPath, 'utf-8');
        console.log('Données du fichier COBOL :', data);
    } catch (error) {
        console.error('Erreur lors de l\'exécution du programme COBOL :', error);
    }
}

runCobolHandler();
