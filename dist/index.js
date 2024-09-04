"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const child_process_1 = require("child_process");
const util_1 = require("util");
const promises_1 = require("fs/promises");
const client = new discord_js_1.Client({ intents: [discord_js_1.GatewayIntentBits.Guilds, discord_js_1.GatewayIntentBits.GuildMessages] });
const execPromise = (0, util_1.promisify)(child_process_1.exec);
async function runCobolProgram() {
    try {
        // Exécute le programme COBOL
        await execPromise('./hello');
        // Lis le fichier de sortie
        const data = await (0, promises_1.readFile)('output.txt', 'utf-8');
        console.log('Données du fichier COBOL :', data);
    }
    catch (error) {
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
                type: discord_js_1.ActivityType.Playing,
            },
        ],
    });
    // Appeler la fonction COBOL lors du démarrage du bot
    runCobolProgram();
});
client.login('MTI4MDc5ODY4MzU4NzQxNjExNQ.GaLRy6.OW2EveHmESBAelLayFzWxOpFAoukG7vwIWp0lc');
