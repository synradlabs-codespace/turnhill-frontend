import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Legal & Privacy | Turnhill International LLP",
    description:
        "Legal Notice and Privacy Policy of Turnhill International LLP covering data protection, confidentiality, compliance, and user rights.",
}

export default function LegalAndPrivacyPage() {
    return (
        <main id="legal-and-privacy" className="px-4 md:px-8 lg:px-12 py-10 md:py-16">
            <section className="mx-auto max-w-5xl">
                {/* Header */}
                <header className="mb-10 md:mb-14">
                    <p className="text-sm text-muted-foreground">Legal</p>
                    <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-balance mt-2 text-left">
                        Legal Notice & Privacy Policy
                    </h1>
                    <p className="mt-4 text-base text-muted-foreground max-w-3xl">
                        This page outlines the legal framework, privacy practices, data protection
                        principles, and confidentiality commitments of Turnhill International LLP.
                    </p>
                </header>

                {/* Content Card */}
                <div className="rounded-lg border bg-card p-6 md:p-10 space-y-10 leading-relaxed text-sm md:text-base">
                    {/* Company Info */}
                    <section>
                        <h2 className="text-xl font-semibold">Turnhill International LLP</h2>
                        <div className="mt-3 space-y-1 text-muted-foreground text-left">
                            <p><strong>Registered Address:</strong> DSS - 122, MCC-1, Aerocity, Mohali, India</p>
                            <p><strong>Contact:</strong> +91 7370000088</p>
                            <p>
                                <strong>Email:</strong>{" "}
                                <a href="mailto:relations@turnhill.in" className="underline">relations@turnhill.in</a>
                                {" "}|{" "}
                                <a href="mailto:managingpartner@turnhill.in" className="underline">managingpartner@turnhill.in</a>
                            </p>
                        </div>
                    </section>

                    {/* Legal Notice */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">Legal Notice</h2>

                        <div>
                            <h3 className="font-medium">1. Introduction</h3>
                            <p className="mt-2">
                                This website and all associated services are owned and operated by{" "}
                                <strong> Turnhill International LLP</strong> ("Turnhill", "we", "our", "us").
                                By accessing, browsing, or using this website and our services, you agree
                                to comply with and be bound by the terms of this Legal Notice.
                            </p>
                            <p className="mt-2">
                                Turnhill provides legal, financial, strategic, compliance, and advisory
                                services to startups, SMEs, and growth-stage enterprises across multiple
                                industries and geographies.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-medium">2. Professional Disclaimer</h3>
                            <p className="mt-2">
                                All information, content, and materials provided on this website are for{" "}
                                <strong> general informational purposes only</strong> and do not constitute
                                legal, financial, tax, accounting, investment, or professional advice.
                            </p>
                            <p className="mt-2">
                                Engaging with this website does not create a client–advisor, lawyer–client,
                                or fiduciary relationship unless a formal written engagement agreement is
                                executed.
                            </p>
                            <p className="mt-2">
                                Users are advised to seek independent professional advice before making any
                                business, financial, legal, or regulatory decisions.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-medium">3. Service Engagement</h3>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Formal engagement letters or agreements</li>
                                <li>Defined scopes of work</li>
                                <li>Professional terms and conditions</li>
                                <li>Applicable statutory and regulatory frameworks</li>
                            </ul>
                            <p className="mt-2">
                                No service obligation arises without a signed engagement agreement.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-medium">4. Intellectual Property Rights</h3>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Text</li>
                                <li>Graphics</li>
                                <li>Branding</li>
                                <li>Logos</li>
                                <li>Layouts</li>
                                <li>Design systems</li>
                                <li>Documents</li>
                                <li>Methodologies</li>
                            </ul>
                            <p className="mt-2">
                                All content is the intellectual property of{" "}
                                <strong>Turnhill International LLP</strong>, unless otherwise stated.
                                Unauthorized reproduction, distribution, modification, or commercial use
                                is strictly prohibited.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-medium">5. Limitation of Liability</h3>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Direct or indirect losses</li>
                                <li>Business interruption</li>
                                <li>Financial losses</li>
                                <li>Data loss</li>
                                <li>Compliance failures</li>
                                <li>Regulatory consequences</li>
                            </ul>
                            <p className="mt-2">
                                All services are provided on a best-effort professional basis, subject to
                                statutory limitations and contractual terms.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-medium">6. Third-Party Links</h3>
                            <p className="mt-2">
                                This website may contain links to third-party websites or platforms.
                                Turnhill does not control or endorse their content and is not responsible
                                for their privacy practices, policies, or operations.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-medium">7. Governing Law & Jurisdiction</h3>
                            <p className="mt-2">
                                This Legal Notice shall be governed by the laws of <strong>India</strong>.
                                All disputes shall be subject to the exclusive jurisdiction of courts in{" "}
                                <strong>Punjab, India</strong>.
                            </p>
                        </div>
                    </section>

                    {/* Privacy Policy */}
                    <section className="space-y-6 pt-6 border-t">
                        <h2 className="text-2xl font-semibold">Privacy Policy</h2>

                        <div>
                            <h3 className="font-medium">1. Purpose</h3>
                            <p className="mt-2">
                                Turnhill International LLP is committed to protecting the privacy,
                                confidentiality, and security of personal and business information.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-medium">2. Information We Collect</h3>
                            <p className="mt-2 font-medium">Personal Information</p>
                            <ul className="list-disc pl-6 mt-1 space-y-1">
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Company name</li>
                                <li>Designation</li>
                                <li>Business details</li>
                            </ul>

                            <p className="mt-3 font-medium">Business Information</p>
                            <ul className="list-disc pl-6 mt-1 space-y-1">
                                <li>Financial data (shared voluntarily for advisory)</li>
                                <li>Compliance documents</li>
                                <li>Corporate records</li>
                                <li>Regulatory filings</li>
                            </ul>

                            <p className="mt-3 font-medium">Technical Data</p>
                            <ul className="list-disc pl-6 mt-1 space-y-1">
                                <li>IP address</li>
                                <li>Browser type</li>
                                <li>Device information</li>
                                <li>Cookies</li>
                                <li>Usage analytics</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-medium">3. Purpose of Data Collection</h3>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Provide advisory and professional services</li>
                                <li>Respond to inquiries</li>
                                <li>Process engagements</li>
                                <li>Maintain client relationships</li>
                                <li>Ensure regulatory compliance</li>
                                <li>Improve service quality</li>
                                <li>Communication and reporting</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-medium">4. Data Sharing & Disclosure</h3>
                            <p className="mt-2">
                                We do <strong>not sell</strong> personal data.
                            </p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Chartered Accountants</li>
                                <li>Lawyers</li>
                                <li>Auditors</li>
                                <li>Regulatory authorities</li>
                                <li>Statutory bodies</li>
                                <li>Banking partners</li>
                                <li>Government portals</li>
                                <li>Technology service providers</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-medium">5. Data Security</h3>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Secure digital infrastructure</li>
                                <li>Access control systems</li>
                                <li>Data confidentiality protocols</li>
                                <li>Encryption standards</li>
                                <li>Role-based access</li>
                                <li>Professional confidentiality obligations</li>
                            </ul>
                            <p className="mt-2">
                                However, no digital system is 100% secure.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-medium">6. Data Retention</h3>
                            <p className="mt-2">
                                Data is retained only for statutory compliance, regulatory requirements,
                                professional obligations, contractual periods, and legitimate business
                                purposes. Thereafter, data is securely archived or deleted.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-medium">7. Client Rights</h3>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Access their data</li>
                                <li>Request corrections</li>
                                <li>Request deletion (subject to legal obligations)</li>
                                <li>Withdraw consent</li>
                                <li>Request data portability</li>
                            </ul>
                            <p className="mt-2">
                                Requests can be made at{" "}
                                <a href="mailto:relations@turnhill.in" className="underline">
                                    relations@turnhill.in
                                </a>
                            </p>
                        </div>

                        <div>
                            <h3 className="font-medium">8. Cookies Policy</h3>
                            <p className="mt-2">
                                This website may use cookies and analytics tools to improve user experience,
                                performance, and service delivery. Users may control cookie preferences via
                                browser settings.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-medium">9. Confidentiality Commitment</h3>
                            <p className="mt-2">
                                All client engagements are governed by strict confidentiality,
                                professional ethics, and non-disclosure principles.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-medium">10. Policy Updates</h3>
                            <p className="mt-2">
                                Turnhill reserves the right to modify this Privacy Policy and Legal Notice
                                at any time. Updates will be posted on this page with revised effective
                                dates.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-medium">11. Contact Information</h3>
                            <div className="mt-2 space-y-1 text-muted-foreground">
                                <p><strong>Turnhill International LLP</strong></p>
                                <p>DSS - 122, MCC-1, Aerocity, Mohali, India</p>
                                <p>📞 +91 7370000088</p>
                                <p>📧 relations@turnhill.in</p>
                                <p>📧 managingpartner@turnhill.in</p>
                            </div>
                        </div>

                        <div className="pt-4 border-t">
                            <p className="font-medium">Effective Date: <span className="text-muted-foreground">4 February 2026</span></p>
                        </div>

                        <blockquote className="mt-6 border-l-4 pl-4 italic text-muted-foreground">
                            Turnhill believes success is built on integrity, accountability, trust, and
                            structured growth. Our legal and privacy frameworks reflect the same
                            institutional discipline we bring to every client engagement.
                        </blockquote>
                    </section>
                </div>
            </section>
        </main>
    )
}
