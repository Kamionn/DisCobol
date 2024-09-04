# COBOL Node.js Integration Project

## Objective

This is a fun project that integrates COBOL programs with a Node.js environment using TypeScript. It provides simple commands such as `ping`, `status`, and `echo` via a Discord bot.

## Project Details

### 1. Project Setup

- **TypeScript Environment:** Set up a Node.js project with TypeScript to execute and manage COBOL programs.
- **TypeScript Compiler:** Configured TypeScript (`tsconfig.json`) and installed the necessary dependencies.

### 2. Creation of COBOL Programs

- **`ping.cob`:** A COBOL program that outputs "Pong! The COBOL program is working correctly."
- **`status.cob`:** A COBOL program that outputs "Status: The COBOL program is operational."
- **`echo.cob`:** A COBOL program that outputs a message passed in as input.

### 3. Compilation of COBOL Programs

- Compiled the COBOL programs into executables (`.exe` for Windows) using GNU COBOL.

### 4. Node.js Integration

- **`commandRunner.ts`:** A TypeScript script to execute the COBOL programs and read the results using `child_process`.
- **Discord Bot (`index.ts`):** A Discord bot that uses these COBOL commands. The bot listens for messages, executes the corresponding COBOL command, and replies with the result in the Discord channel.

## Note

This is a fun project with no support or updates planned for its functionality.

---

Feel free to explore, play around, and enjoy the integration of COBOL with modern Node.js technologies!
