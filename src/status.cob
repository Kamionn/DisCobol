IDENTIFICATION DIVISION.
PROGRAM-ID. Status.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 WS-Status PIC X(100) VALUE "Statut : Le programme COBOL est opérationnel.".

PROCEDURE DIVISION.
    DISPLAY WS-Status
    STOP RUN.
