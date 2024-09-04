import { Client, GatewayIntentBits, ActivityType } from 'discord.js';
import { exec } from 'child_process';
import { promisify } from 'util';
import { readFile } from 'fs/promises';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

const execPromise = promisify(exec);

async function runCobolProgram() {
    try {
        // Exécute le programme COBOL
        await execPromise('./hello');

        // Lis le fichier de sortie
        const data = await readFile('output.txt', 'utf-8');
        console.log('Données du fichier COBOL :', data);
    } catch (error) {
        console.error('Erreur lors de l\'exécution du programme COBOL :', error);
    }
}

client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user?.tag}`);
    client.user?.setPresence({
        status: 'dnd',
        activities: [
            {
                name: 'Dev en Cobol!',
                type: ActivityType.Playing,
            },
        ],
    });

    // Appeler la fonction COBOL lors du démarrage du bot
    runCobolProgram();
});

client.login('MTI4MDc5ODY4MzU4NzQxNjExNQ.GaLRy6.OW2EveHmESBAelLayFzWxOpFAoukG7vwIWp0lc');
