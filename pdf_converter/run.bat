@echo off
cd /d "%~dp0"
echo Installing dependencies...
pip install docx2pdf pdf2docx -q
echo Starting converter...
python converter.py
pause
