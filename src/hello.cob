IDENTIFICATION DIVISION.
PROGRAM-ID. HelloWorld.

DATA DIVISION.
FILE SECTION.
FD OutputFile.
01 OutputRecord PIC X(100).

WORKING-STORAGE SECTION.
01 WS-Message PIC X(100) VALUE "Hello from COBOL!".

PROCEDURE DIVISION.
    OPEN OUTPUT OutputFile
    MOVE WS-Message TO OutputRecord
    WRITE OutputRecord
    CLOSE OutputFile
    STOP RUN.
