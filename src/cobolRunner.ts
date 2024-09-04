import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execPromise = promisify(exec);

async function runCommand(command: string) {
    try {
        const commandPath = path.join(__dirname, '..', `${command}.exe`);
        const { stdout, stderr } = await execPromise(commandPath);
        
        if (stderr) {
            console.error(`Erreur : ${stderr}`);
        } else {
            console.log(`Sortie : ${stdout}`);
        }
    } catch (error) {
        console.error(`Erreur lors de l'exécution de la commande : ${error}`);
    }
}

// Exemples d'exécution de commandes
runCommand('ping');    // Remplace 'ping' par 'status' ou 'echo' selon le besoin
