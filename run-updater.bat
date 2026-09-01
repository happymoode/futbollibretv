@echo off
title Futbol Libre - Safe Match & Embed Link Updater
echo ======================================================
echo    FUTBOL LIBRE TV - SAFE AUTO UPDATER
echo ======================================================
echo.
echo Actualizando partidos y enlaces de video seguros desde https://futbollibretv.sx/...
echo (Excluyendo automaticamente enlaces con publicidad o reportados)
echo.

where node >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    node updater.js
    goto done
)

where php >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    php updater.php
    goto done
)

if exist "c:\xampp\php\php.exe" (
    c:\xampp\php\php.exe updater.php
    goto done
)

echo Ejecutando actualizador via PowerShell...
powershell -NoProfile -ExecutionPolicy Bypass -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12 -bor [Net.SecurityProtocolType]::Tls13; try { $wc = New-Object System.Net.WebClient; $wc.Headers.Add('User-Agent','Mozilla/5.0'); $wc.Headers.Add('Referer','https://futbollibretv.sx/'); $wc.Encoding = [System.Text.Encoding]::UTF8; $raw = $wc.DownloadString('https://futbollibretv.sx/eventos.js'); if ($raw -match '(?is)(?:const|var|let)\s+EVENTOS_DATA\s*=\s*(\[[\s\S]*?\]);') { $jsonStr = $matches[1] -replace ',\s*([\]}])', '$1'; $data = ConvertFrom-Json $jsonStr; $flagRules = @{ 'ENG'=@('premier league','championship','fa cup','liverpool','arsenal','chelsea','west ham','wolverhampton','southampton','norwich','stoke','birmingham'); 'ES'=@('laliga','la liga','copa del rey','real madrid','barcelona','atletico madrid','sevilla'); 'ALE'=@('bundesliga','dfb-pokal','bayern','dortmund','leverkusen'); 'IT'=@('serie a','coppa italia','copa de italia','juventus','milan','inter','roma','napoli','torino','parma','cremonese','monza'); 'ARA'=@('profesional saudi','saudi pro league','saudi','al hilal','al-ahli','al nassr'); 'RU'=@('copa de rusia','rusia','rostov','cska'); 'PY'=@('copa de primera','paraguay','rubio','san lorenzo','2 de mayo','luqueno'); 'BRA'=@('brasileirao','copa do brasil','atletico mineiro','cruzeiro','flamengo'); 'COL'=@('liga betplay','copa colombia','millonarios','fortaleza ceif','once caldas') }; $bList = @('espndeportes','espnplus2','canal5mx','espnplus1','max1','universo_usa'); $today = (Get-Date).ToString('yyyy-MM-dd'); $res = [System.Collections.Generic.List[object]]::new(); $id=1; foreach($ev in $data) { $t = if ($ev.titulo) { $ev.titulo.ToString().Trim() } else { '' }; if (-not $t) { continue }; $cl = $t -replace ':\s*',' - ' -replace '\s+',' '; if (-not $cl.Contains($today)) { $cl = \"$cl $today\" }; $fl = 'FUT'; foreach($k in $flagRules.Keys) { foreach($w in $flagRules[$k]) { if ($t.ToLower().Contains($w)) { $fl = $k; break } } }; if ($ev.clase -and $ev.clase -ne 'FUT') { $fl = $ev.clase.ToUpper() }; $chs = [System.Collections.Generic.List[object]]::new(); if ($ev.canales) { foreach($c in $ev.canales) { $u = if ($c.url) { $c.url.ToString().Trim() } else { '' }; $dec = $u.ToLower(); if ($u -match '[?&]r=([^&]+)') { try { $dec = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($matches[1])).ToLower() } catch {} }; $skip = $false; foreach($b in $bList) { if ($dec.Contains($b)) { $skip = $true; break } }; if ($skip) { continue }; $fin = $u; if ($u.StartsWith('eventos?r=')) { $fin = 'eventos.html?r=' + $u.Substring(10) } elseif ($u.StartsWith('/eventos?r=')) { $fin = 'eventos.html?r=' + $u.Substring(11) }; $chs.Add([PSCustomObject]@{ nombre = if ($c.nombre) { $c.nombre.ToString().Trim() } else { 'Canal' }; url = $fin; calidad = '720p HD' }) } }; if ($chs.Count -gt 0) { $res.Add([PSCustomObject]@{ id = $id++; clase = $fl; titulo = $cl; hora = if ($ev.hora) { $ev.hora.ToString().Trim() } else { '00:00' }; canales = $chs; hora_fin = if ($ev.hora_fin) { $ev.hora_fin.ToString().Trim() } else { '' } }) } }; $out = \"/**`n * Futbol Libre TV - Agenda de Partidos en Directo`n * Base de datos de eventos deportivos y canales en vivo`n */`n`nconst EVENTOS_DATA = \" + ($res | ConvertTo-Json -Depth 5) + \";`n\"; [System.IO.File]::WriteAllText((Join-Path (Get-Location) 'eventos.js'), $out, [System.Text.Encoding]::UTF8); Write-Host \"Exito! Se actualizaron $($res.Count) partidos en eventos.js\" -ForegroundColor Green } } catch { Write-Error $_ }]"

:done
echo.
echo Proceso finalizado.
pause
