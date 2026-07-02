@echo off
echo Starting local server...
PowerShell -NoProfile -ExecutionPolicy Bypass -File "%~dp0run-local.ps1"
pause
