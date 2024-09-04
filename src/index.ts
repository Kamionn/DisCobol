import { Client, GatewayIntentBits, Message } from 'discord.js';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execPromise = promisify(exec);

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

async function runCobolCommand(command: string) {
    try {
        const commandPath = path.join(__dirname, '..', `${command}.exe`);
        const { stdout, stderr } = await execPromise(commandPath);
        
        return stderr ? `Erreur : ${stderr}` : `Sortie : ${stdout}`;
    } catch (error) {
        return `Erreur lors de l'exécution de la commande : ${error}`;
    }
}

client.on('messageCreate', async (message: Message) => {
    if (message.content.startsWith('!')) {
        const command = message.content.slice(1).trim();
        const response = await runCobolCommand(command);
        message.reply(response);
    }
});

client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user?.tag}`);
});

client.login('MTI4MDc5ODY4MzU4NzQxNjExNQ.GaLRy6.OW2EveHmESBAelLayFzWxOpFAoukG7vwIWp0lc');
