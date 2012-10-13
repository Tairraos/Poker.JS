@echo off
echo 1 - poker.js
echo 2 - poker.optimized.js
echo 3 - poker.optimized.99.js
echo 4 - cancel
choice /c 1234 /m "Choice what source file you want build:" 

if errorlevel 4 goto end
if errorlevel 3 goto pokeropt99
if errorlevel 2 goto pokeropt
if errorlevel 1 goto poker

@goto end

:poker
echo build poker.js to poker.min.js, processing...
java -jar yuicompressor-2.4.7.jar --type js --charset utf-8 -v -o ..\release\poker.min.js ..\source\poker.js
goto end

:pokeropt
echo build poker.optimized.js to poker.min.js, processing...
java -jar yuicompressor-2.4.7.jar --type js --charset utf-8 -v -o ..\release\poker.min.js ..\source\poker.optimized.js
goto end

:pokeropt99
echo build poker.optimized.99.js to poker.min.js, processing...
java -jar yuicompressor-2.4.7.jar --type js --charset utf-8 -v -o ..\release\poker.min.js ..\source\poker.optimized.99.js
goto end

:end
echo build completed.
pause
echo on