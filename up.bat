@echo off
echo Git Repository Update
echo ====================
echo.

REM Alle Änderungen hinzufügen
git add .

REM Commit mit Nachricht (als Parameter oder Standard)
if "%~1"=="" (
    git commit -m "Update"
) else (
    git commit -m "%*"
)

REM Push zum Remote Repository
git push

echo.
echo Fertig!
pause
