echo off & color 0A

set DIR="%cd%"
set PROTOC=protoc.exe
set GoPath=..\..\qpservice\msg\ptopb

echo DIR=%DIR% GoPath=%GoPath%
echo                START
echo -------------proto-file------------------
for /R %DIR% %%f in (*.proto) do ( 
    echo %%f 
    REM %PROTOC% --go_out=%GoPath% -I=%DIR% %%f
	%PROTOC% --go_out=%GoPath% -I=%DIR% %%f
	%PROTOC% -I=%DIR% %%f --go_out=plugins=grpc:.
)

echo "--------------END-------------------"
timeout 3
REM pause
Exit