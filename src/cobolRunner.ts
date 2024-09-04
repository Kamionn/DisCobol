import { exec } from 'child_process';
import { promisify } from 'util';
import { readFile } from 'fs/promises';
import path from 'path';

const execPromise = promisify(exec);

async function runCobolProgram() {
    try {
        // Déterminer le chemin de l'exécutable COBOL
        const cobolExecutable = path.join(__dirname, '..', 'hello.exe'); // Met à jour le nom de l'exécutable

        // Exécute le programme COBOL
        await execPromise(cobolExecutable);

        // Lis le fichier de sortie
        const data = await readFile('output.txt', 'utf-8');
        console.log('Données du fichier COBOL :', data);
    } catch (error) {
        console.error('Erreur lors de l\'exécution du programme COBOL :', error);
    }
}

runCobolProgram();
