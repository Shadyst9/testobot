# Vorstellung:
Testobot soll einen fahrenden Roboter simulieren, dessen Zweck es ist in Wohnungen jeglicher Größe nach Temperaturunstimmigkeiten pro Quadratmeter zu suchen und diese zu melden. Testobot erkennt hierbei Wände bevor es zu einer Kollision kommt und verhindert diese. Zum Bewegen des Testobot kann eine simple Fernbedienung mit den Befehlen „nach links drehen“, „nach rechts drehen“ und „forwärts“ genutzt werden.

# Komponenten:
### App:
Oberste Start-Komponente die alle Komponenten miteinander verbindet.

### Settings:
Komponente zum Setzen der Startbedingungen der Wohnung und des Testobot, sowie aktuelle Statusanzeige des Testobot.

### RemoteControl:
Komponente bestehend aus den drei beschriebenen Befehlen zur Fernsteuerung des Testobot.

### Apartment:
Die aus der Settings-Komponente generierte Wohnung.

### Squaremeter:
Die einzelnen Quadratmeter der Wohnung welche den Status kalt, heiß oder gut enthalten. Enthält auch die Information ob sich ein Testobot auf diesem Quadratmeter befindet oder nicht.

### Testobot:
Die Komponente zur Darstellung des Testobot.

# Starten des Projekts:
Um das Projekt im Browser auszuführen muss zunächst das Projekt via „git clone“ oder als .zip-Datei von hier (Github) heruntergeladen werden. Sobald das Projekt bereitgestellt ist (.zip-Datei muss vorher entpackt werden) sollte im Ordner „testobot“ eine neue Kommandozeile geöffnet werden. Mit dem Befehl „npm start“ sollte sich ein neues Browser-Fenster öffnen mit der Url „localhost:3000“. Das Projekt kann jetzt begutachtet werden.