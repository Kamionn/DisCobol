# DisCobol

Objective: Create a project that integrates COBOL programs with a Node.js environment using TypeScript, and provides simple commands like ping, status, and echo via a Discord bot.

Project Details
Project Setup:

TypeScript Environment: I set up a Node.js project with TypeScript to execute and manage COBOL programs.
TypeScript Compiler: I configured TypeScript (tsconfig.json) and installed the necessary dependencies.
Creation of COBOL Programs:

ping.cob : A COBOL program that outputs "Pong! The COBOL program is working correctly."
status.cob : A COBOL program that outputs "Status: The COBOL program is operational."
echo.cob : A COBOL program that outputs a message passed in as input.
Compilation of COBOL Programs:

I compiled these programs into executables (.exe for Windows) using GNU COBOL.
Node.js Integration:

commandRunner.ts : A TypeScript script to execute the COBOL programs and read the results using child_process.
Discord Bot (index.ts) : A Discord bot that uses these COBOL commands. The bot listens for messages, executes the corresponding COBOL command, and replies with the result in the Discord channel.
