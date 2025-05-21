import React from "react";
import { Card, Heading, Text } from "@radix-ui/themes";

export const metadata = {
  title: "Terms of Use | G.E.T.V.I.I.D.",
  description:
    "Read the terms of use for G.E.T.V.I.I.D. By using this website, you agree to these terms and conditions.",
};

export default function TermsOfUsePage() {
  return (
    <main className="flex justify-center items-start min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 py-8 px-2 sm:px-4">
      <Card className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6 sm:p-10 border-t-4 border-blue-600">
        <Heading as="h1" size="7" className="mb-6 text-gray-900 font-bold text-center">
          Terms of Use
        </Heading>
        <Text as="p" size="4" className="mb-4 text-gray-700">
          Welcome to G.E.T.V.I.I.D. Please read these Terms of Use {`("Terms")`} carefully before using this website. By accessing or using G.E.T.V.I.I.D., you agree to be bound by these Terms.
        </Text>
        <section className="mb-4">
          <Heading as="h2" size="5" className="mb-2 text-blue-700 font-semibold">
            1. Use of Content
          </Heading>
          <Text as="p" size="4" className="text-gray-700">
            All content provided on this site is for informational and educational purposes only. You may not reproduce, distribute, or use any content without permission.
          </Text>
        </section>
        <section className="mb-4">
          <Heading as="h2" size="5" className="mb-2 text-blue-700 font-semibold">
            2. No Professional Advice
          </Heading>
          <Text as="p" size="4" className="text-gray-700">
            The information on G.E.T.V.I.I.D. is not a substitute for professional advice, diagnosis, or treatment. Always seek the advice of qualified professionals regarding any concerns about domestic violence or personal well-being.
          </Text>
        </section>
        <section className="mb-4">
          <Heading as="h2" size="5" className="mb-2 text-blue-700 font-semibold">
            3. User Conduct
          </Heading>
          <Text as="p" size="4" className="text-gray-700">
            You agree to use this website respectfully and lawfully. Do not post or transmit any harmful, offensive, or unlawful material.
          </Text>
        </section>
        <section className="mb-4">
          <Heading as="h2" size="5" className="mb-2 text-blue-700 font-semibold">
            4. External Links
          </Heading>
          <Text as="p" size="4" className="text-gray-700">
            G.E.T.V.I.I.D. may contain links to external sites. We are not responsible for the content or practices of those sites.
          </Text>
        </section>
        <section className="mb-4">
          <Heading as="h2" size="5" className="mb-2 text-blue-700 font-semibold">
            5. Changes to Terms
          </Heading>
          <Text as="p" size="4" className="text-gray-700">
            We may update these Terms at any time. Continued use of the site means you accept any changes.
          </Text>
        </section>
        <section>
          <Heading as="h2" size="5" className="mb-2 text-blue-700 font-semibold">
            6. Contact
          </Heading>
          <Text as="p" size="4" className="text-gray-700">
            If you have any questions about these Terms, please contact the site creator.
          </Text>
        </section>
      </Card>
    </main>
  );
}