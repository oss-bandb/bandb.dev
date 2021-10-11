import React from "react"
import { graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"
import { Layout, Section } from "@components"

const ImprintPage = ({ data }) => {
    const { navigation } = data
    return (
        <Layout navItems={navigation.items}>
            <Section>
                <div>
                    <h1>Impressum</h1>

                    <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                    <p>
                        Block &amp; Block Software Engineering GbR
                        <br />
                        Werringser Stra&szlig;e 36b
                        <br />
                        58706 Menden
                    </p>

                    <p>
                        <strong>Vertreten durch:</strong>
                        <br />
                        Dennis Block
                        <br />
                        Gregor Block
                    </p>

                    <h2>Kontakt</h2>
                    <p>E-Mail: contact@bandb.dev</p>

                    <h2>Streitschlichtung</h2>
                    <p>
                        Die Europ&auml;ische Kommission stellt eine Plattform
                        zur Online-Streitbeilegung (OS) bereit:{" "}
                        <a
                            href="https://ec.europa.eu/consumers/odr"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://ec.europa.eu/consumers/odr
                        </a>
                        .<br /> Unsere E-Mail-Adresse finden Sie oben im
                        Impressum.
                    </p>

                    <p>
                        Wir sind nicht bereit oder verpflichtet, an
                        Streitbeilegungsverfahren vor einer
                        Verbraucherschlichtungsstelle teilzunehmen.
                    </p>

                    <h3>Haftung f&uuml;r Inhalte</h3>
                    <p>
                        Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7
                        Abs.1 TMG f&uuml;r eigene Inhalte auf diesen Seiten nach
                        den allgemeinen Gesetzen verantwortlich. Nach
                        &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter
                        jedoch nicht verpflichtet, &uuml;bermittelte oder
                        gespeicherte fremde Informationen zu &uuml;berwachen
                        oder nach Umst&auml;nden zu forschen, die auf eine
                        rechtswidrige T&auml;tigkeit hinweisen.
                    </p>
                    <p>
                        Verpflichtungen zur Entfernung oder Sperrung der Nutzung
                        von Informationen nach den allgemeinen Gesetzen bleiben
                        hiervon unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung
                        ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
                        konkreten Rechtsverletzung m&ouml;glich. Bei
                        Bekanntwerden von entsprechenden Rechtsverletzungen
                        werden wir diese Inhalte umgehend entfernen.
                    </p>
                    <h3>Haftung f&uuml;r Links</h3>
                    <p>
                        Unser Angebot enth&auml;lt Links zu externen Websites
                        Dritter, auf deren Inhalte wir keinen Einfluss haben.
                        Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte
                        auch keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die
                        Inhalte der verlinkten Seiten ist stets der jeweilige
                        Anbieter oder Betreiber der Seiten verantwortlich. Die
                        verlinkten Seiten wurden zum Zeitpunkt der Verlinkung
                        auf m&ouml;gliche Rechtsverst&ouml;&szlig;e
                        &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum
                        Zeitpunkt der Verlinkung nicht erkennbar.
                    </p>
                    <p>
                        Eine permanente inhaltliche Kontrolle der verlinkten
                        Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                        Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                        Rechtsverletzungen werden wir derartige Links umgehend
                        entfernen.
                    </p>
                    <h3>Urheberrecht</h3>
                    <p>
                        Die durch die Seitenbetreiber erstellten Inhalte und
                        Werke auf diesen Seiten unterliegen dem deutschen
                        Urheberrecht. Die Vervielf&auml;ltigung, Bearbeitung,
                        Verbreitung und jede Art der Verwertung au&szlig;erhalb
                        der Grenzen des Urheberrechtes bed&uuml;rfen der
                        schriftlichen Zustimmung des jeweiligen Autors bzw.
                        Erstellers. Downloads und Kopien dieser Seite sind nur
                        f&uuml;r den privaten, nicht kommerziellen Gebrauch
                        gestattet.
                    </p>
                    <p>
                        Soweit die Inhalte auf dieser Seite nicht vom Betreiber
                        erstellt wurden, werden die Urheberrechte Dritter
                        beachtet. Insbesondere werden Inhalte Dritter als solche
                        gekennzeichnet. Sollten Sie trotzdem auf eine
                        Urheberrechtsverletzung aufmerksam werden, bitten wir um
                        einen entsprechenden Hinweis. Bei Bekanntwerden von
                        Rechtsverletzungen werden wir derartige Inhalte umgehend
                        entfernen.
                    </p>

                    <p>
                        Quelle:{" "}
                        <a href="https://www.e-recht24.de/impressum-generator.html">
                            https://www.e-recht24.de/impressum-generator.html
                        </a>
                    </p>
                </div>
                <h1>Datenschutzerklärung</h1>
                <p>
                    Verantwortlicher im Sinne der Datenschutzgesetze,
                    insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:
                </p>
                <p>Dennis Block</p>
                <p>Gregor Block</p>
                <h2>Ihre Betroffenenrechte</h2>
                <p>
                    Unter den angegebenen Kontaktdaten unseres
                    Datenschutzbeauftragten können Sie jederzeit folgende Rechte
                    ausüben:
                </p>
                <ul>
                    <li>
                        Auskunft über Ihre bei uns gespeicherten Daten und deren
                        Verarbeitung (Art. 15 DSGVO),
                    </li>
                    <li>
                        Berichtigung unrichtiger personenbezogener Daten (Art.
                        16 DSGVO),
                    </li>
                    <li>
                        Löschung Ihrer bei uns gespeicherten Daten (Art. 17
                        DSGVO),
                    </li>
                    <li>
                        Einschränkung der Datenverarbeitung, sofern wir Ihre
                        Daten aufgrund gesetzlicher Pflichten noch nicht löschen
                        dürfen (Art. 18 DSGVO),
                    </li>
                    <li>
                        Widerspruch gegen die Verarbeitung Ihrer Daten bei uns
                        (Art. 21 DSGVO) und
                    </li>
                    <li>
                        Datenübertragbarkeit, sofern Sie in die
                        Datenverarbeitung eingewilligt haben oder einen Vertrag
                        mit uns abgeschlossen haben (Art. 20 DSGVO).
                    </li>
                </ul>
                <p>
                    Sofern Sie uns eine Einwilligung erteilt haben, können Sie
                    diese jederzeit mit Wirkung für die Zukunft widerrufen.
                </p>
                <p>
                    Sie können sich jederzeit mit einer Beschwerde an eine
                    Aufsichtsbehörde wenden, z. B. an die zuständige
                    Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an
                    die für uns als verantwortliche Stelle zuständige Behörde.
                </p>
                <p>
                    Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen
                    Bereich) mit Anschrift finden Sie unter:{" "}
                    <a
                        href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                        target="_blank"
                        rel="nofollow noopener"
                    >
                        https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
                    </a>
                    .
                </p>
                <p></p>
                <h2>SSL-Verschlüsselung</h2>
                <p>
                    Um die Sicherheit Ihrer Daten bei der Übertragung zu
                    schützen, verwenden wir dem aktuellen Stand der Technik
                    entsprechende Verschlüsselungsverfahren (z. B. SSL) über
                    HTTPS.
                </p>
                <p></p>
                <h2>Änderung unserer Datenschutzbestimmungen</h2>
                <p>
                    Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
                    damit sie stets den aktuellen rechtlichen Anforderungen
                    entspricht oder um Änderungen unserer Leistungen in der
                    Datenschutzerklärung umzusetzen, z.B. bei der Einführung
                    neuer Services. Für Ihren erneuten Besuch gilt dann die neue
                    Datenschutzerklärung.
                </p>
                <h2>Fragen an den Datenschutzbeauftragten</h2>
                <p>
                    Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns
                    bitte eine E-Mail oder wenden Sie sich direkt an die für den
                    Datenschutz verantwortliche Person in unserer Organisation:
                </p>
                <p></p>
                <p>
                    <em>
                        Die Datenschutzerklärung wurde mithilfe der activeMind
                        AG erstellt, den Experten für{" "}
                        <a
                            href="https://www.activemind.de/datenschutz/datenschutzbeauftragter/"
                            target="_blank"
                            rel="noopener"
                        >
                            externe Datenschutzbeauftragte
                        </a>{" "}
                        (Version #2019-04-10).
                    </em>
                </p>
            </Section>
        </Layout>
    )
}

export default injectIntl(ImprintPage)

export const query = graphql`
    query ImprintData($language: String) {
        navigation: dataYaml(fields: { language: { eq: $language } }) {
            items {
                key
                name
                to
                main
            }
        }
    }
`
