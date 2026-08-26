import type { Metadata } from "next";
import Link from "next/link";
import AnimatedHeading from "@/components/AnimatedHeading";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Find Me: Hidden Objects Puzzle by Fire Divine Games.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const sections = [
  { id: "information-we-collect", label: "Information we collect" },
  { id: "how-we-use-information", label: "How we use information" },
  { id: "legal-bases", label: "Legal bases for processing" },
  { id: "third-party-services", label: "Third-party services" },
  { id: "data-retention", label: "Data retention" },
  { id: "your-choices", label: "Your choices and rights" },
  { id: "childrens-privacy", label: "Children's privacy" },
  { id: "data-security", label: "Data security" },
  { id: "international-transfers", label: "International data transfers" },
  { id: "third-party-links", label: "Third-party links and ads" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact-us", label: "Contact us" },
];

const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noreferrer">
    {children} <span aria-hidden="true">&#8599;</span>
  </a>
);

export default function PrivacyPolicyPage() {
  return (
    <main className="subpage legal-page">
      <Header />

      <section className="legal-hero section-shell" aria-labelledby="privacy-policy-title">
        <div className="legal-hero__heading">
          <span className="section-kicker section-kicker--light">Legal / Find Me</span>
          <AnimatedHeading
            as="h1"
            id="privacy-policy-title"
            className="heading-light"
            lines={["Privacy", "Policy."]}
          />
        </div>
        <div className="legal-hero__summary">
          <p>
            How Fire Divine Games collects, uses, and protects information when you
            play <strong>Find Me: Hidden Objects Puzzle</strong>.
          </p>
          <dl className="legal-hero__dates">
            <div>
              <dt>Effective date</dt>
              <dd>August 26, 2026</dd>
            </div>
            <div>
              <dt>Last updated</dt>
              <dd>August 26, 2026</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="legal-layout section-shell">
        <aside className="legal-toc" aria-label="Privacy policy contents">
          <span>On this page</span>
          <nav>
            <ol>
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {section.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <article className="legal-content">
          <div className="legal-introduction">
            <p>
              Fire Divine Games (&ldquo;Fire Divine Games,&rdquo; &ldquo;we,&rdquo;
              &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates <strong>Find Me: Hidden
              Objects Puzzle</strong>, package name <code>com.DelightPlusGames.FindMe</code>
              (&ldquo;the Game&rdquo;).
            </p>
            <p>
              This Privacy Policy explains what information may be collected when you
              use the Game, why it is collected, how it is used, and the choices
              available to you.
            </p>
            <p>
              By downloading or using the Game, you acknowledge the practices described
              in this Privacy Policy.
            </p>
          </div>

          <section id="information-we-collect">
            <h2><span>01</span> Information We Collect</h2>

            <h3>1.1 Google Play Games Sign-In</h3>
            <p>
              The Game offers Google Play Games Sign-In so players can save their
              progress and restore it on another supported device.
            </p>
            <p>
              When you use this feature, Google Play Games Services may provide the
              Game with information such as:
            </p>
            <ul>
              <li>Your Google Play Games Player ID</li>
              <li>Your Play Games display name or profile information</li>
              <li>Authentication information required to confirm your identity</li>
              <li>Information necessary to access your Game-specific saved data</li>
            </ul>
            <p>We do not receive or store your Google Account password.</p>
            <p>
              Google Play Games Sign-In is optional unless clearly stated otherwise
              within the Game. If you do not sign in, you may still be able to play
              using locally stored progress, but cross-device synchronization may not
              be available.
            </p>

            <h3>1.2 Saved Game and Gameplay Progress</h3>
            <p>
              When Google Play Games Saved Games is enabled, the Game may save
              information including:
            </p>
            <ul>
              <li>Current or highest unlocked level</li>
              <li>Completed levels</li>
              <li>Game progress and achievements</li>
              <li>Lives, hints, rewards, or other in-game status</li>
              <li>Game settings and preferences</li>
              <li>Saved-game timestamps</li>
              <li>Information required to resolve save conflicts between devices</li>
            </ul>
            <p>
              Saved Games data is stored through Google Play Games Services in an
              app-specific Google Drive storage area. The Game does not receive access
              to your personal Google Drive files, photographs, documents, or other
              unrelated Drive content.
            </p>
            <p>Some game progress and preferences may also be stored locally on your device.</p>

            <h3>1.3 Device, Usage and Diagnostic Information</h3>
            <p>
              We and our service providers may automatically process technical and
              usage information, including:
            </p>
            <ul>
              <li>Device type and model</li>
              <li>Operating-system version</li>
              <li>App version</li>
              <li>Language, country, region, or approximate location</li>
              <li>Device or advertising identifiers</li>
              <li>Internet Protocol address</li>
              <li>Game sessions and session duration</li>
              <li>Levels started, completed, skipped, or failed</li>
              <li>In-game interactions and feature usage</li>
              <li>Advertising interactions</li>
              <li>Error reports, diagnostic information, and crash information</li>
              <li>General performance and stability data</li>
            </ul>
            <p>
              We use this information to operate the Game, understand how it is used,
              improve levels and features, fix errors, prevent abuse, and maintain security.
            </p>

            <h3>1.4 Advertising Information</h3>
            <p>
              The Game displays advertisements using Google AdMob and related Google
              advertising services.
            </p>
            <p>
              Depending on your location, device settings, age settings, and consent
              choices, advertising providers may process information such as:
            </p>
            <ul>
              <li>Advertising ID</li>
              <li>IP address</li>
              <li>Device information</li>
              <li>Approximate location</li>
              <li>Ad impressions and clicks</li>
              <li>Interactions with advertisements</li>
              <li>
                Information used for advertising measurement, fraud prevention,
                frequency control, and personalization
              </li>
            </ul>
            <p>
              Where required by law, the Game displays a consent message before using
              personal data for personalized advertising. You may be offered personalized,
              non-personalized, or limited advertisements depending on your consent
              choices and regional requirements.
            </p>
            <p>
              You can manage certain advertising preferences through the consent options
              presented in the Game, your Android device settings, and your Google
              Account advertising settings.
            </p>
            <p>
              We do not sell personal information for money. However, some privacy laws
              may classify personalized advertising or the disclosure of identifiers to
              advertising partners as &ldquo;sharing&rdquo; or use for targeted advertising.
              Where applicable, you may use the available consent and privacy controls
              to opt out.
            </p>

            <h3>1.5 In-App Purchases</h3>
            <p>
              If you make a purchase, such as removing advertisements or purchasing
              another digital item, the transaction is processed by Google Play.
            </p>
            <p>
              We do not receive your complete payment-card or bank-account information.
              We may receive limited transaction information, such as:
            </p>
            <ul>
              <li>Product purchased</li>
              <li>Purchase status</li>
              <li>Transaction or purchase identifier</li>
              <li>Purchase time</li>
              <li>Information required to confirm, restore, or manage the purchase</li>
            </ul>
            <p>Google processes payments according to its own terms and privacy practices.</p>

            <h3>1.6 Support Communications</h3>
            <p>
              If you contact us for support, report a problem, or request data deletion,
              we may receive:
            </p>
            <ul>
              <li>Your email address</li>
              <li>Information included in your message</li>
              <li>Screenshots or diagnostic information you voluntarily provide</li>
              <li>
                Your Google Play Games Player ID, if needed to investigate a Saved Games issue
              </li>
            </ul>
            <p>
              Please do not send passwords, payment-card information, government
              identification, or other unnecessary sensitive information.
            </p>
          </section>

          <section id="how-we-use-information">
            <h2><span>02</span> How We Use Information</h2>
            <p>We may use information to:</p>
            <ul>
              <li>Provide and operate the Game</li>
              <li>Authenticate players through Google Play Games Services</li>
              <li>Save and restore progress across devices</li>
              <li>Maintain local and cloud-based saved-game functionality</li>
              <li>Deliver game levels and other content</li>
              <li>Process and restore in-app purchases</li>
              <li>Display, measure, and manage advertisements</li>
              <li>Analyze gameplay and improve player experience</li>
              <li>Diagnose crashes, errors, and performance problems</li>
              <li>Prevent fraud, abuse, cheating, and security incidents</li>
              <li>Respond to support requests</li>
              <li>Comply with legal obligations and platform requirements</li>
              <li>
                Enforce our rights and protect players, Fire Divine Games, and third parties
              </li>
            </ul>
          </section>

          <section id="legal-bases">
            <h2><span>03</span> Legal Bases for Processing</h2>
            <p>
              Where applicable privacy law requires a legal basis, we process information
              based on one or more of the following:
            </p>
            <ul>
              <li>
                <strong>Performance of a service:</strong> To provide gameplay, Google Play
                Games Sign-In, Saved Games, purchases, and requested features.
              </li>
              <li>
                <strong>Consent:</strong> For personalized advertising and other processing
                where consent is required.
              </li>
              <li>
                <strong>Legitimate interests:</strong> To analyze performance, improve the
                Game, prevent abuse, maintain security, and provide support.
              </li>
              <li>
                <strong>Legal obligations:</strong> To comply with applicable laws, lawful
                requests, accounting requirements, and platform policies.
              </li>
            </ul>
            <p>
              You may withdraw consent where consent is the legal basis. Withdrawing
              consent does not affect processing completed before the withdrawal.
            </p>
          </section>

          <section id="third-party-services">
            <h2><span>04</span> Third-Party Services</h2>
            <p>
              The Game may use third-party services that process information under their
              own privacy policies. These services may include:
            </p>

            <div className="legal-provider">
              <h3>Google Play Games Services</h3>
              <p>Used for player authentication, Player IDs, and cross-device Saved Games.</p>
              <div className="legal-provider__links">
                <ExternalLink href="https://policies.google.com/privacy">Google Privacy Policy</ExternalLink>
                <ExternalLink href="https://policies.google.com/terms">Google Terms of Service</ExternalLink>
              </div>
            </div>

            <div className="legal-provider">
              <h3>Google AdMob</h3>
              <p>
                Used to display, personalize where permitted, measure, and protect advertisements.
              </p>
              <div className="legal-provider__links">
                <ExternalLink href="https://policies.google.com/technologies/partner-sites">
                  How Google uses information from apps and sites
                </ExternalLink>
                <ExternalLink href="https://policies.google.com/privacy">Google Privacy Policy</ExternalLink>
              </div>
            </div>

            <div className="legal-provider">
              <h3>Google Analytics for Firebase</h3>
              <p>
                Used to understand gameplay activity, engagement, performance, and feature usage.
              </p>
              <div className="legal-provider__links">
                <ExternalLink href="https://firebase.google.com/support/privacy">
                  Firebase Privacy and Security
                </ExternalLink>
                <ExternalLink href="https://policies.google.com/privacy">Google Privacy Policy</ExternalLink>
              </div>
            </div>

            <div className="legal-provider">
              <h3>Google Play Billing</h3>
              <p>Used to process in-app purchases and manage transaction status.</p>
              <div className="legal-provider__links">
                <ExternalLink href="https://play.google.com/about/play-terms/">Google Play Terms</ExternalLink>
                <ExternalLink href="https://policies.google.com/privacy">Google Privacy Policy</ExternalLink>
              </div>
            </div>

            <div className="legal-provider">
              <h3>Amazon Web Services</h3>
              <p>
                The Game may use Amazon Web Services, including content-delivery and
                cloud-hosting services, to deliver game assets, levels, and related content.
                Technical request information may be processed for content delivery,
                reliability, and security.
              </p>
              <div className="legal-provider__links">
                <ExternalLink href="https://aws.amazon.com/privacy/">AWS Privacy Notice</ExternalLink>
              </div>
            </div>

            <p>
              We encourage you to review the privacy policies of these providers. Their
              processing is governed by their respective policies and your settings with
              those services.
            </p>
          </section>

          <section id="data-retention">
            <h2><span>05</span> Data Retention</h2>
            <p>
              We retain information only for as long as reasonably necessary for the
              purposes described in this Policy, subject to legal, security, operational,
              and platform requirements.
            </p>
            <p>Retention may vary as follows:</p>
            <ul>
              <li>
                Local game progress remains on your device until you delete the Game,
                clear its storage, reset the Game, or remove the data through an available
                in-game option.
              </li>
              <li>
                Google Play Games Saved Games data may remain associated with your Google
                Play Games account until it is deleted through available Game or Google settings.
              </li>
              <li>
                Analytics, advertising, and diagnostic information is retained according
                to the settings and retention practices of the applicable service provider.
              </li>
              <li>
                Purchase records may be retained as required to confirm purchases, provide
                restorations, prevent fraud, and comply with accounting or legal obligations.
              </li>
              <li>
                Support communications may be retained for as long as necessary to resolve
                the request, maintain records, prevent abuse, or comply with legal obligations.
              </li>
            </ul>
          </section>

          <section id="your-choices">
            <h2><span>06</span> Your Choices and Rights</h2>
            <p>Depending on where you live, you may have rights to:</p>
            <ul>
              <li>Request access to personal information associated with you</li>
              <li>Request correction or deletion</li>
              <li>Object to or restrict certain processing</li>
              <li>Withdraw consent</li>
              <li>Opt out of personalized or targeted advertising</li>
              <li>Request information about how data is used or shared</li>
              <li>Submit a complaint to an applicable data-protection authority</li>
            </ul>

            <h3>Google Play Games and Saved Progress</h3>
            <p>
              You can choose not to sign in to Google Play Games, where the Game allows
              guest or local play.
            </p>
            <p>
              You may also manage or remove Play Games information through your Google
              Account or Google Play Games settings. Removing cloud data may permanently
              delete synchronized progress and may prevent it from being restored on
              another device.
            </p>

            <h3>Advertising Choices</h3>
            <p>
              Where available, you can review or change your advertising consent choices
              through the privacy options presented in the Game.
            </p>
            <p>You may also manage advertising settings through:</p>
            <ul>
              <li>Your Android device's privacy or advertising settings</li>
              <li>Your Google Account's advertising settings</li>
              <li>Any regional consent controls presented by Google or the Game</li>
            </ul>
            <p>
              Disabling personalized advertisements does not necessarily remove all
              advertisements. You may continue to receive non-personalized or limited advertisements.
            </p>

            <h3>Data-Deletion Requests</h3>
            <p>
              The Game does not create a separate Fire Divine Games username-and-password
              account. Google Play Games authentication is managed by Google.
            </p>
            <p>To request deletion of information directly controlled by Fire Divine Games, contact:</p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:deepeshkumar384@gmail.com">deepeshkumar384@gmail.com</a>
            </p>
            <p>Please use the subject line:</p>
            <p><strong>Find Me Data Deletion Request</strong></p>
            <p>
              Include enough information for us to understand and process the request,
              such as your Google Play Games Player ID, if available. Do not send your
              Google password.
            </p>
            <p>
              We may need to verify the request before acting on it. Some information may
              be retained where required for legal compliance, security, fraud prevention,
              dispute resolution, or enforcement of agreements.
            </p>
          </section>

          <section id="childrens-privacy">
            <h2><span>07</span> Children's Privacy</h2>
            <p>
              The Game is intended for a general audience and is not designed to knowingly
              collect direct personal information from children without appropriate authorization.
            </p>
            <p>
              We do not ask players to provide their real name, home address, phone number,
              password, or payment-card details directly to Fire Divine Games.
            </p>
            <p>
              Advertising and data-processing practices may be adjusted based on applicable
              age requirements, platform settings, consent signals, and regional laws.
            </p>
            <p>
              If you are a parent or legal guardian and believe that a child has provided
              personal information directly to us inappropriately, contact us at{" "}
              <a href="mailto:deepeshkumar384@gmail.com">deepeshkumar384@gmail.com</a>. We
              will review the request and take appropriate action.
            </p>
          </section>

          <section id="data-security">
            <h2><span>08</span> Data Security</h2>
            <p>
              We use reasonable administrative and technical measures intended to protect
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p>
              However, no internet transmission, mobile application, or storage system can
              be guaranteed to be completely secure. You are responsible for protecting your
              Google Account and device against unauthorized access.
            </p>
          </section>

          <section id="international-transfers">
            <h2><span>09</span> International Data Transfers</h2>
            <p>
              Fire Divine Games and its service providers may process information in
              countries other than the country where you live. These countries may have
              different data-protection laws.
            </p>
            <p>
              Where required, service providers use appropriate safeguards for international
              transfers in accordance with applicable law.
            </p>
          </section>

          <section id="third-party-links">
            <h2><span>10</span> Third-Party Links and Advertisements</h2>
            <p>
              The Game may contain advertisements or links leading to third-party
              applications, websites, products, or services.
            </p>
            <p>
              Fire Divine Games does not control the privacy practices or content of those
              third parties. When you leave the Game or interact with a third-party
              advertisement, the third party's own terms and privacy policy apply.
            </p>
          </section>

          <section id="changes">
            <h2><span>11</span> Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy to reflect changes to the Game, third-party
              services, legal requirements, or our data practices.
            </p>
            <p>
              When we make changes, we will update the &ldquo;Last updated&rdquo; date at the
              top of this page. If required, we may provide additional notice within the
              Game or through another appropriate method.
            </p>
            <p>We encourage you to review this Policy periodically.</p>
          </section>

          <section id="contact-us">
            <h2><span>12</span> Contact Us</h2>
            <p>If you have questions, privacy concerns, or data-deletion requests, contact:</p>
            <address className="legal-contact">
              <strong>Fire Divine Games</strong>
              <span>
                <b>Email</b>
                <a href="mailto:deepeshkumar384@gmail.com">deepeshkumar384@gmail.com</a>
              </span>
              <span>
                <b>Website</b>
                <ExternalLink href="https://firedivine.com">firedivine.com</ExternalLink>
              </span>
              <span>
                <b>Game page</b>
                <Link href="/games/find-me">Find Me: Hidden Objects Puzzle</Link>
              </span>
            </address>
          </section>
        </article>
      </div>

      <SiteFooter />
    </main>
  );
}
