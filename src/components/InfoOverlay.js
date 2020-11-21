import React from "react";
import {
  Layer,
  Box,
  Heading,
  Markdown,
  Paragraph,
  Anchor,
  Nav,
  Text,
  Accordion,
  AccordionPanel,
} from "grommet";
import { Close, Facebook, Instagram, Twitter, Youtube } from "grommet-icons";

export default function InfoOverlay({ onDismiss }) {
  return (
    <Layer
      animation="fadeIn"
      onClickOutside={() => onDismiss()}
      onEsc={() => onDismiss()}
      style={{ overflow: "auto" }}
    >
      <Box pad="medium">
        <Anchor icon={<Close />} onClick={() => onDismiss()} />
        <Heading textAlign="center">Kack & Sach Bingo</Heading>
        <Markdown>
          Dieses Bingo ist ein nicht-kommerzielles, privates Fan-Projekt mit
          freundlicher Unterstützung der [Kack &
          Sachgeschichten](www.kackundsach.de). Vielen Dank für die unzähligen
          Stunden Spaß und die Unterstützung dieses Projekts!
        </Markdown>
        <Paragraph>Folgt den Kackis auf Social Media:</Paragraph>
        <Nav direction="row">
          <Anchor
            icon={<Facebook />}
            href="https://www.facebook.com/kackundsach/"
            hoverIndicator
          />
          <Anchor
            icon={<Instagram />}
            href="https://www.instagram.com/kackundsach/"
            hoverIndicator
          />
          <Anchor
            icon={<Twitter />}
            href="https://twitter.com/kackundsach"
            hoverIndicator
          />
          <Anchor
            icon={<Youtube />}
            href="https://www.youtube.com/channel/UCHVZoNOgTrt_f_OcaB24P-A"
            hoverIndicator
          />
        </Nav>
        <Paragraph size="small">
          Das Logo und der Name der Kack & Sachgeschichten sind eine
          eingetragene Marke der Hilke Hansen Aengenheyster GbR.
        </Paragraph>
        <Accordion>
          <AccordionPanel label="Impressum">
            <Box>
              <Heading level="5">Angaben gem&auml;&szlig; &sect; 5 TMG</Heading>
              <Paragraph size="small">
                David Scheidt
                <br />
                Dürerstr. 2<br />
                48147 Münster
              </Paragraph>
              <Heading level="5">Kontakt</Heading>
              <Paragraph size="small">E-Mail: scheidt.dav@gmail.com</Paragraph>
              <Heading level="6">Haftung für Inhalte</Heading>
              <Paragraph size="small">
                Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG
                f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen
                Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir
                als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte
                oder gespeicherte fremde Informationen zu &uuml;berwachen oder
                nach Umst&auml;nden zu forschen, die auf eine rechtswidrige
                T&auml;tigkeit hinweisen.
              </Paragraph>
              <Paragraph size="small">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst
                ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                m&ouml;glich. Bei Bekanntwerden von entsprechenden
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </Paragraph>
              <Heading level="6">Haftung f&uuml;r Links</Heading>
              <Paragraph size="small">
                Unser Angebot enth&auml;lt Links zu externen Websites Dritter,
                auf deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen
                wir f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr
                &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist
                stets der jeweilige Anbieter oder Betreiber der Seiten
                verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
                Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e
                &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt
                der Verlinkung nicht erkennbar.
              </Paragraph>
              <Paragraph size="small">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
                jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
                derartige Links umgehend entfernen.
              </Paragraph>
              <Heading level="6">Urheberrecht</Heading>
              <Paragraph size="small">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes
                bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors
                bzw. Erstellers. Downloads und Kopien dieser Seite sind nur
                f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet.
              </Paragraph>
              <Paragraph size="small">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
                werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
                von Rechtsverletzungen werden wir derartige Inhalte umgehend
                entfernen.
              </Paragraph>
              <Paragraph size="small">
                Quelle:
                <a href="https://www.e-recht24.de/impressum-generator.html">
                  https://www.e-recht24.de/impressum-generator.html
                </a>
              </Paragraph>
            </Box>
          </AccordionPanel>
          <AccordionPanel label="Datenschutzerklärung">
            <Box>
              <Heading level="6">1. Datenschutz auf einen Blick</Heading>
              <Heading level="6">Allgemeine Hinweise</Heading>
              <Paragraph size="small">
                Die folgenden Hinweise geben einen einfachen &Uuml;berblick
                dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert,
                wenn Sie diese Website besuchen. Personenbezogene Daten sind
                alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden
                k&ouml;nnen. Ausf&uuml;hrliche Informationen zum Thema
                Datenschutz entnehmen Sie unserer unter diesem Text
                aufgef&uuml;hrten Datenschutzerkl&auml;rung.
              </Paragraph>
              <Paragraph>
                Die Website nutzt keinerlei Tracking- oder Analysetools und auch
                keine Cookies. All diese sind technisch nicht notwendig, um
                diese Angebot bereitzustellen.
              </Paragraph>
              <Heading level="6">Datenerfassung auf dieser Website</Heading>
              <Text>
                Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser
                Website?
              </Text>
              <Paragraph size="small">
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem
                Impressum dieser Website entnehmen.
              </Paragraph>
              <Text>Wie erfassen wir Ihre Daten?</Text>
              <Paragraph size="small">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die
                Sie per E-Mail an mich versenden.
              </Paragraph>
              <Paragraph size="small">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung
                beim Besuch der Website durch unsere IT-Systeme erfasst. Das
                sind vor allem technische Daten (z.&nbsp;B. Internetbrowser,
                Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung
                dieser Daten erfolgt automatisch, sobald Sie diese Website
                betreten.
              </Paragraph>
              <Paragraph size="small">
                Diese Webseite wird gehostet auf Servern der Github Inc., 88
                Colin P Kelly Jr. Street, San Francisco, CA 94107, USA.
                Technische Informationen (u.a. ihre IP-Adresse), die beim
                Aufrufen der Website übertragen werden, können daher von
                aufzeichnen. Dazu hat GitHub eine eigene Datenschutzerklärung
                veröffentlicht:
                <a href="https://help.github.com/articles/github-privacy-policy">
                  https://help.github.com/articles/github-privacy-policy
                </a>
                .
              </Paragraph>
              <Text>Wof&uuml;r nutzen wir Ihre Daten?</Text>
              <Paragraph size="small">
                Ausschließlich zur Kontaktaufnahme nach vorheriger Anfrage. Es
                kommen keine Werkzeuge zur Analyse des Nutzungsverhaltens o.ä.
                zum Einsatz.
              </Paragraph>
              <Text>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</Text>
              <Paragraph size="small">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber
                Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem
                ein Recht, die Berichtigung oder L&ouml;schung dieser Daten zu
                verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung
                erteilt haben, k&ouml;nnen Sie diese Einwilligung jederzeit
                f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben Sie das
                Recht, unter bestimmten Umst&auml;nden die Einschr&auml;nkung
                der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des
                Weiteren steht Ihnen ein Beschwerderecht bei der
                zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.
              </Paragraph>
              <Paragraph size="small">
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz
                k&ouml;nnen Sie sich jederzeit unter der im Impressum
                angegebenen Adresse an uns wenden.
              </Paragraph>
              <Heading level="6">
                2. Hosting und Content Delivery Networks (CDN)
              </Heading>
              <Heading level="6">Externes Hosting</Heading>
              <Paragraph size="small">
                Diese Website wird bei einem externen Dienstleister gehostet
                (Hoster). Die personenbezogenen Daten, die auf dieser Website
                erfasst werden, werden auf den Servern des Hosters gespeichert.
                Hierbei kann es sich v. a. um IP-Adressen, Meta- und
                Kommunikationsdaten, Websitezugriffe und sonstige Daten, die
                &uuml;ber eine Website generiert werden, handeln.
              </Paragraph>
              <Paragraph size="small">
                Der Einsatz des Hosters erfolgt zum Zwecke der
                Vertragserf&uuml;llung gegen&uuml;ber unseren potenziellen und
                bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse
                einer sicheren, schnellen und effizienten Bereitstellung unseres
                Online-Angebots durch einen professionellen Anbieter (Art. 6
                Abs. 1 lit. f DSGVO).
              </Paragraph>
              <Paragraph size="small">
                Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies
                zur Erf&uuml;llung seiner Leistungspflichten erforderlich ist
                und unsere Weisungen in Bezug auf diese Daten befolgen.
              </Paragraph>
              <Paragraph size="small">
                Wir setzen folgenden Hoster ein:
              </Paragraph>
              <Paragraph size="small">
                GitHub, Inc.
                <br />
                88 Colin P. Kelly Jr. Street
                <br />
                San Francisco, CA 94107
              </Paragraph>
              <Heading level="6">
                3. Allgemeine Hinweise und Pflicht&shy;informationen
              </Heading>
              <Heading level="6">Datenschutz</Heading>
              <Paragraph size="small">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre
                personenbezogenen Daten vertraulich und entsprechend der
                gesetzlichen Datenschutzvorschriften sowie dieser
                Datenschutzerkl&auml;rung.
              </Paragraph>
              <Paragraph size="small">
                Wenn Sie diese Website benutzen, werden verschiedene
                personenbezogene Daten erhoben. Personenbezogene Daten sind
                Daten, mit denen Sie pers&ouml;nlich identifiziert werden
                k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung
                erl&auml;utert, welche Daten wir erheben und wof&uuml;r wir sie
                nutzen. Sie erl&auml;utert auch, wie und zu welchem Zweck das
                geschieht.
              </Paragraph>
              <Paragraph size="small">
                Wir weisen darauf hin, dass die Daten&uuml;bertragung im
                Internet (z.&nbsp;B. bei der Kommunikation per E-Mail)
                Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser
                Schutz der Daten vor dem Zugriff durch Dritte ist nicht
                m&ouml;glich.
              </Paragraph>
              <Heading level="6">Hinweis zur verantwortlichen Stelle</Heading>
              <Paragraph size="small">
                Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf
                dieser Website ist:
              </Paragraph>
              <Paragraph size="small">
                David Scheidt
                <br />
                Dürerstr. 2<br />
                48147 Münster
                <br />
                E-Mail: scheidt.dav@gmail.com
              </Paragraph>
              <Heading level="6">
                Widerruf Ihrer Einwilligung zur Datenverarbeitung
              </Heading>
              <Paragraph size="small">
                Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer
                ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen
                eine bereits erteilte Einwilligung jederzeit widerrufen. Die
                Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten
                Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.
              </Paragraph>
              <Heading level="6">
                Widerspruchsrecht gegen die Datenerhebung in besonderen
                F&auml;llen sowie gegen Direktwerbung (Art. 21 DSGVO)
              </Heading>
              <Paragraph size="small">
                WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT.
                E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS
                GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN,
                GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH
                EINZULEGEN; DIES GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN
                GEST&Uuml;TZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF
                DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
                DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN
                WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR
                VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE
                SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG
                NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN
                &Uuml;BERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG,
                AUS&Uuml;BUNG ODER VERTEIDIGUNG VON RECHTSANSPR&Uuml;CHEN
                (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
              </Paragraph>
              <Paragraph size="small">
                WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM
                DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT
                WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER
                PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG
                EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS PROFILING, SOWEIT ES MIT
                SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
                WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND
                NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH
                NACH ART. 21 ABS. 2 DSGVO).
              </Paragraph>
              <Heading level="6">
                Beschwerde&shy;recht bei der zust&auml;ndigen
                Aufsichts&shy;beh&ouml;rde
              </Heading>
              <Paragraph size="small">
                Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den
                Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde,
                insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen
                Aufenthalts, ihres Arbeitsplatzes oder des Orts des
                mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht
                besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
                gerichtlicher Rechtsbehelfe.
              </Paragraph>
              <Heading level="6">
                Recht auf Daten&shy;&uuml;bertrag&shy;barkeit
              </Heading>
              <Paragraph size="small">
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                Einwilligung oder in Erf&uuml;llung eines Vertrags automatisiert
                verarbeiten, an sich oder an einen Dritten in einem
                g&auml;ngigen, maschinenlesbaren Format aush&auml;ndigen zu
                lassen. Sofern Sie die direkte &Uuml;bertragung der Daten an
                einen anderen Verantwortlichen verlangen, erfolgt dies nur,
                soweit es technisch machbar ist.
              </Paragraph>
              <Heading level="6">SSL- bzw. TLS-Verschl&uuml;sselung</Heading>
              <Paragraph size="small">
                Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der
                &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel
                Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
                senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine
                verschl&uuml;sselte Verbindung erkennen Sie daran, dass die
                Adresszeile des Browsers von &bdquo;http://&ldquo; auf
                &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in
                Ihrer Browserzeile.
              </Paragraph>
              <Paragraph size="small">
                Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist,
                k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht
                von Dritten mitgelesen werden.
              </Paragraph>
              <Heading level="6">
                Auskunft, L&ouml;schung und Berichtigung
              </Heading>
              <Paragraph size="small">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre
                gespeicherten personenbezogenen Daten, deren Herkunft und
                Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein
                Recht auf Berichtigung oder L&ouml;schung dieser Daten. Hierzu
                sowie zu weiteren Fragen zum Thema personenbezogene Daten
                k&ouml;nnen Sie sich jederzeit unter der im Impressum
                angegebenen Adresse an mich wenden.
              </Paragraph>
              <Heading level="6">3. Datenerfassung auf dieser Website</Heading>
              <Heading level="6">Server-Log-Dateien</Heading>
              <Paragraph size="small">
                Der Provider der Seiten erhebt und speichert automatisch
                Informationen in so genannten Server-Log-Dateien, die Ihr
                Browser automatisch an uns &uuml;bermittelt. Dies sind:
              </Paragraph>
              <ul>
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li> <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li> <li>IP-Adresse</li>
              </ul>
              <Paragraph size="small">
                Eine Zusammenf&uuml;hrung dieser Daten mit anderen Datenquellen
                wird nicht vorgenommen.
              </Paragraph>
              <Paragraph size="small">
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs.
                1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
                Interesse an der technisch fehlerfreien Darstellung und der
                Optimierung seiner Website &ndash; hierzu m&uuml;ssen die
                Server-Log-Files erfasst werden.
              </Paragraph>
              <Heading level="6">Anfrage per E-Mail</Heading>
              <Paragraph size="small">
                Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage
                inklusive aller daraus hervorgehenden personenbezogenen Daten
                (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei
                uns gespeichert und verarbeitet. Diese Daten geben wir nicht
                ohne Ihre Einwilligung weiter.
              </Paragraph>
              <Paragraph size="small">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung
                eines Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung
                vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen
                &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem
                berechtigten Interesse an der effektiven Bearbeitung der an uns
                gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
                wurde.
              </Paragraph>
              <Paragraph size="small">
                Die von Ihnen an uns per Kontaktanfragen &uuml;bersandten Daten
                verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern,
                Ihre Einwilligung zur Speicherung widerrufen oder der Zweck
                f&uuml;r die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach
                abgeschlossener Bearbeitung Ihres Anliegens). Zwingende
                gesetzliche Bestimmungen &ndash; insbesondere gesetzliche
                Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
              </Paragraph>
              <Heading level="6">4. Plugins und Tools</Heading>
              <Heading level="6">Google Web Fonts (lokales Hosting)</Heading>
              <Paragraph size="small">
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
                so genannte Web Fonts, die von Google bereitgestellt werden. Die
                Google Fonts sind lokal installiert. Eine Verbindung zu Servern
                von Google findet dabei nicht statt.
              </Paragraph>
              <Paragraph size="small">
                Weitere Informationen zu Google Web Fonts finden Sie unter
                <a
                  href="https://developers.google.com/fonts/faq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://developers.google.com/fonts/faq
                </a>
                und in der Datenschutzerkl&auml;rung von Google:
                <a
                  href="https://policies.google.com/privacy?hl=de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com/privacy?hl=de
                </a>
                .
              </Paragraph>
              <Paragraph size="small">
                Quelle:
                <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
              </Paragraph>
            </Box>
          </AccordionPanel>
        </Accordion>
      </Box>
    </Layer>
  );
}
