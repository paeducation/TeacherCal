# Lehrerkalender

Kalender, Stundenplan (mit A/B-Woche) und Arbeitszeiterfassung für Lehrkräfte.
Eine einzelne Webseite ohne Server und ohne Konto. Alle Daten bleiben im Browser des eigenen Geräts.

## Dateien

Alle Dateien gehören in den **Hauptordner** des Repositories (keine Unterordner):

| Datei | Zweck |
|---|---|
| `index.html` | die ganze App (das Logo im Kopf ist darin eingebettet) |
| `manifest.webmanifest` | damit die Seite als App auf den Home-Bildschirm kann |
| `sw.js` | macht die App offline nutzbar und meldet neue Versionen (Service Worker) |
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

## Bedienung in Kürze

- **Erste Schritte:** Beim ersten Start zeigt eine Karte oben die zwei Schritte (Stundenplan eintragen, Wochenziel prüfen). Mit × blendest du sie aus.
- **Termin anlegen:** Auf eine freie Stelle im Kalender tippen. Tag und Uhrzeit sind schon eingetragen, die Schnellauswahl (Konferenz, Elternabend, Aufsicht, Vertretung, Elterngespräch, Besprechung) setzt Titel, Dauer und Arbeitszeit-Kategorie. „Vertretung“ ist auch eine eigene Kategorie in der Arbeitszeit.
- **Zeit erfassen:** In „Arbeitszeit“ auf eine Kategorie tippen startet die Zeit sofort, ein zweiter Tipp stoppt sie.
- **Stundenplan:** Beim Eintragen helfen Vorschläge aus bisherigen Stunden und die Auswahl „Dieselbe Stunde auch an“ (Mo bis Fr).
- **Rückgängig:** Nach dem Löschen erscheint kurz „Rückgängig“.
- **Serientermine:** Beim Termin unter „Wiederholen“ wählen: jede Woche, alle 2 Wochen, nur A- oder nur B-Wochen, optional mit Enddatum. Einzelne Termine der Serie lassen sich über die Details löschen.
- **Jetzt und gleich:** Oben im Kalender zeigt eine Karte die laufende und die nächste Stunde (mit Raum und Restzeit).
- **Wochenprognose:** In „Arbeitszeit“ schätzt eine Karte für die aktuelle und kommende Wochen die Gesamtzeit aus erfasster Zeit, geplantem Unterricht, Terminen mit Kategorie und deinem Durchschnitt der letzten Wochen. Es ist eine Schätzung.
- **Verschlüsselte Sicherung:** Im Fenster „Sichern“ kannst du die Sicherungsdatei mit einem Passwort verschlüsseln (AES-256, direkt im Browser). Ohne das Passwort lässt sie sich nicht öffnen, auch nicht von mir oder GitHub.
- **Abwesenheiten:** Ein Tipp auf den Wochentag im Kalender (z. B. „Mi 7.10.“) öffnet die Auswahl, alternativ geht es über „Arbeitszeit“ (Knopf „Abwesenheit“). Es gibt nur zwei Arten: „Krank“ (rotes Kreuz neben dem Wochentag) und „Beweglicher Ferientag“ (Palme). An diesen Tagen entfällt der Unterricht (durchgestrichen), und das Tagesziel der Arbeitszeit ist 0. Alles andere zählt als Arbeitszeit.
- **Dienstliche Veranstaltungen:** Klassen-, Stufen- und Studienfahrten, Fortbildungen und andere mehrtägige dienstliche Veranstaltungen trägst du ein: über den letzten Punkt der Schnellauswahl im Fenster „Neuer Termin“ („Dienstl. Veranstaltung (mehrtägig)“). Dort verwaltest du sie auch. Der Unterricht dieser Tage entfällt, und pro Tag zählt eine Pauschale als Arbeitszeit (vorbelegt: 10 Stunden, änderbar).
- **NRW-Schulferien:** Die offiziellen Ferientermine des Landes (bis Sommer 2030, Stand Oktober 2026, ohne Gewähr) sind eingebaut und werden automatisch berücksichtigt: Der Unterricht entfällt, im Kalender steht der Name der Ferien, und das Ziel der Arbeitszeit ist 0 (abschaltbar in den Einstellungen). Unter „Ferien eintragen“ kannst du die Automatik ausschalten und eigene freie Zeiträume ergänzen. Für spätere Jahre kommen die Termine mit einer neuen Version der App.
- **Feiertage:** Die gesetzlichen Feiertage in NRW werden automatisch berechnet, im Kalender angezeigt und vom Ziel abgezogen.
- **Teilzeit:** Unter „Einstellungen“ (in der Arbeitszeit) legst du Wochenziel und Arbeitstage fest. Ziele, Prognose und Statistik rechnen nur mit diesen Tagen.
- **Zeitkonto:** Wenn du unter „Einstellungen“ ein Startdatum einträgst, zeigt die App dein Plus oder Minus seit diesem Tag. Feiertage, Ferien (falls eingestellt) und Abwesenheiten zählen als frei. Das ist eine Orientierung und keine rechtlich geprüfte Berechnung.
- **Export:** In der Statistik (Woche oder Monat) gibt es „Als PDF“ (Arbeitszeitnachweis mit Tagesliste, Zusammenfassung und Unterschriftszeile) und „Als CSV“ für Excel. Beides wird lokal im Browser erzeugt.
- **Ansicht:** Anzahl der Tage und das Stundenraster stellst du über „Ansicht“ ein.

## Datenschutz

- **Keine Daten auf GitHub:** Termine, Stundenplan und Arbeitszeiten werden nur im Browser (localStorage) gespeichert. Die Seite stellt keine Verbindung zu anderen Servern her. Das ist zusätzlich in `index.html` per Content-Security-Policy (`connect-src 'none'`) festgelegt.
- **Keine externen Schriften, Skripte oder Statistiken.**
- **Aber:** Wie bei jeder Webseite sieht der Hoster (hier GitHub) beim Aufruf die IP-Adresse. Wenn das für den dienstlichen Einsatz relevant ist, bitte vorher mit der oder dem Datenschutzbeauftragten der Schule klären. Alternativ kann die Schul-IT die Dateien auf einem eigenen Server bereitstellen.
- **Sicherungsdatei:** Sie enthält alle Termine und kann personenbezogene Daten enthalten. Verschlüssele sie mit Passwort und speichere sie nur an einem dafür freigegebenen Ort.

## Wichtig zu wissen

- **Daten gehören zur Adresse:** Der Browser speichert die Daten pro Webadresse. Wechselst du die Adresse (z. B. anderer Repository-Name), sind die Daten dort nicht vorhanden. Zum Umziehen: in der alten Version **Sichern**, in der neuen **Aus Sicherung wiederherstellen**.
- **Browserdaten löschen = Daten weg.** Darum regelmäßig **Sichern** (der Punkt am Button erinnert nach einer Woche).
- **Kalender-Abos:** Der automatische Abruf von Abo-Links funktioniert nicht, weil die Server (z. B. IServ, WebUntis) den Abruf durch Webseiten nicht erlauben. Kalender werden als `.ics`-Datei importiert („+ Kalender“) und lassen sich pro Kalender neu importieren.
- **Offline:** Nach dem ersten Aufruf öffnet die App auch ohne Internet. Dafür muss `sw.js` mit hochgeladen sein.
- **Updates mit Pop-up:** Lädst du eine neue Version auf GitHub hoch, meldet die App beim nächsten Öffnen mit Internet „Update verfügbar!“. Du erstellst zuerst ein Backup, dann tippst du auf „Update jetzt ausführen“. Bis dahin läuft die alte Version weiter. Die Version steht im Fenster „Sichern“.
- **Dauerhafter Speicher:** Die App bittet den Browser beim Start, die Daten dauerhaft zu speichern. Ob er zusagt, steht im Fenster „Sichern“. Eine Sicherung bleibt trotzdem wichtig.
- **Stundenplan-Versionen:** Änderungen am Stundenplan kannst du „ab nächster Woche“ als neue Version anlegen. Dann bleiben vergangene Wochen und ihre erfasste Unterrichtszeit unverändert.

## Aktualisieren

Eine neue `index.html` **und** die neue `sw.js` im Repository hochladen und mit dem gleichen Dateinamen ersetzen (beide gehören zusammen). Die Daten im Browser bleiben erhalten. Auf dem Handy erscheint danach beim nächsten Öffnen das Pop-up „Update verfügbar!“.

## Hinweis zur Arbeitszeit

Die App erfasst Zeiten, sie prüft nichts rechtlich (z. B. Höchstarbeitszeit, Pausen). Die Voreinstellung von 41 Wochenstunden entspricht der regelmäßigen Arbeitszeit in NRW. Das Wochenziel lässt sich im Tab „Arbeitszeit“ anpassen.

## Wenn ein Update nicht ankommt

1. **Veröffentlichung prüfen:** Unter **Actions** muss der Lauf „pages build and deployment“ einen grünen Haken haben. Steht dort ein Fehler (z. B. „The job was not acquired by Runner“), liegt es bei GitHub. Öffne den Lauf und tippe auf **Re-run all jobs**, oder prüfe githubstatus.com.
2. Warte nach dem Hochladen zwei bis fünf Minuten.
3. Schließe die App ganz und öffne sie neu. Dann erscheint „Update verfügbar!“. Erst „Backup erstellen“, dann „Update jetzt ausführen“.
4. Zeigt die Startadresse noch die alte Version, öffne einmal die Adresse mit `/index.html` am Ende.
5. Lösche keine Website-Daten, ohne vorher gesichert zu haben.
