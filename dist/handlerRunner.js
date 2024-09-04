"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const util_1 = require("util");
const promises_1 = require("fs/promises");
const path_1 = __importDefault(require("path"));
const execPromise = (0, util_1.promisify)(child_process_1.exec);
async function runCobolHandler() {
    try {
        // Déterminer le chemin de l'exécutable COBOL
        const cobolExecutable = path_1.default.join(__dirname, '..', 'handler.exe');
        // Exécuter le programme COBOL
        await execPromise(cobolExecutable);
        // Lire le fichier de sortie
        const outputPath = path_1.default.join(__dirname, '..', 'output.txt');
        const data = await (0, promises_1.readFile)(outputPath, 'utf-8');
        console.log('Données du fichier COBOL :', data);
    }
    catch (error) {
        console.error('Erreur lors de l\'exécution du programme COBOL :', error);
    }
}
runCobolHandler();
