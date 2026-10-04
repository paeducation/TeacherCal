# Lehrerkalender

Kalender, Stundenplan (mit A/B-Woche) und Arbeitszeiterfassung für Lehrkräfte.
Eine einzelne Webseite ohne Server und ohne Konto. Alle Daten bleiben im Browser des eigenen Geräts.

## Dateien

Alle Dateien gehören in den **Hauptordner** des Repositories (keine Unterordner):

| Datei | Zweck |
|---|---|
| `index.html` | die ganze App |
| `manifest.webmanifest` | damit die Seite als App auf den Home-Bildschirm kann |
| `apple-touch-icon.png`, `icon-512.png` | Symbole |
| `bricolage-grotesque.woff2` | Schrift, lokal eingebunden (keine Google-Fonts-Abfrage) |
| `FONT-LICENSE.txt` | Lizenz der Schrift (SIL Open Font License) |
| `README.md` | diese Anleitung |

## Auf GitHub veröffentlichen (GitHub Pages)

1. Auf github.com ein neues Repository anlegen, z. B. `lehrerkalender`. Für GitHub Pages im kostenlosen Tarif muss es **öffentlich** sein.
2. **Add file → Upload files** und alle Dateien aus dieser Liste hochladen, dann **Commit changes**.
3. **Settings → Pages**: bei *Source* „Deploy from a branch“, Branch `main`, Ordner `/ (root)` wählen, **Save**.
4. Nach ein bis zwei Minuten steht die Adresse oben auf der Pages-Einstellung, in der Form `https://DEIN-NAME.github.io/lehrerkalender/`.

## Auf dem iPhone als App

In Safari die Adresse öffnen, **Teilen → Zum Home-Bildschirm**. Die Seite startet dann wie eine App.
Wichtig: Safari löscht Webseiten-Daten, die lange nicht genutzt wurden. Eine zum Home-Bildschirm hinzugefügte Seite ist davon ausgenommen. Mach trotzdem regelmäßig eine Sicherung.

## Datenschutz

- **Keine Daten auf GitHub:** Termine, Stundenplan und Arbeitszeiten werden nur im Browser (localStorage) gespeichert. Die Seite stellt keine Verbindung zu anderen Servern her. Das ist zusätzlich in `index.html` per Content-Security-Policy (`connect-src 'none'`) festgelegt.
- **Keine externen Schriften, Skripte oder Statistiken.**
- **Aber:** Wie bei jeder Webseite sieht der Hoster (hier GitHub) beim Aufruf die IP-Adresse. Wenn das für den dienstlichen Einsatz relevant ist, bitte vorher mit der oder dem Datenschutzbeauftragten der Schule klären. Alternativ kann die Schul-IT die Dateien auf einem eigenen Server bereitstellen.
- **Sicherungsdatei:** Sie enthält alle Termine und kann personenbezogene Daten enthalten. Nur an einem dafür freigegebenen Ort speichern.

## Wichtig zu wissen

- **Daten gehören zur Adresse:** Der Browser speichert die Daten pro Webadresse. Wechselst du die Adresse (z. B. anderer Repository-Name), sind die Daten dort nicht vorhanden. Zum Umziehen: in der alten Version **Sichern**, in der neuen **Aus Sicherung wiederherstellen**.
- **Browserdaten löschen = Daten weg.** Darum regelmäßig **Sichern** (der Punkt am Button erinnert nach einer Woche).
- **Kalender-Abos:** Der automatische Abruf von Abo-Links funktioniert nicht, weil die Server (z. B. IServ, WebUntis) den Abruf durch Webseiten nicht erlauben. Kalender werden als `.ics`-Datei importiert („+ Kalender“) und lassen sich pro Kalender neu importieren.
- **Kein Offline-Modus:** Die Seite braucht beim Öffnen eine Internetverbindung.

## Aktualisieren

Eine neue `index.html` im Repository hochladen und mit dem gleichen Dateinamen ersetzen. Die Daten im Browser bleiben erhalten.

## Hinweis zur Arbeitszeit

Die App erfasst Zeiten, sie prüft nichts rechtlich (z. B. Höchstarbeitszeit, Pausen). Die Voreinstellung von 41 Wochenstunden entspricht der regelmäßigen Arbeitszeit in NRW. Das Wochenziel lässt sich im Tab „Arbeitszeit“ anpassen.
