import React from "react";
import { Card, Heading, Text } from "@radix-ui/themes";

export const metadata = {
  title: "About | G.E.T.V.I.I.D.",
  description:
    "Learn more about G.E.T.V.I.I.D., a project dedicated to empowering individuals with guidance, resources, and support to overcome domestic violence, heal, and build lives of dignity and safety.",
};

export default function AboutPage() {
  return (
    <main className="flex justify-center items-start min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 py-8 px-2 sm:px-4">
      <Card className="w-full max-w-lg sm:max-w-xl md:max-w-2xl bg-white shadow-lg rounded-2xl p-5 sm:p-8 md:p-10 border-t-4 border-blue-600">
        <Heading
          as="h1"
          size={{ initial: "6", sm: "7" }}
          className="mb-4 text-gray-900 font-extrabold text-center"
        >
          About G.E.T.V.I.I.D.
        </Heading>
        <Text as="p" size="4" className="mb-6 text-gray-700 leading-relaxed text-center">
          <span className="font-semibold text-blue-700">G.E.T.V.I.I.D.</span> (Guiding Everyone To Victory In Intimate Integrity & Dignity) is a personal project dedicated to empowering individuals affected by domestic violence—whether you are a survivor or someone seeking to change your behavior. My mission is to provide guidance, resources, and a supportive community to help you recognize abuse, find safety, heal, and rebuild your life with dignity and hope.
        </Text>
        <section className="mb-6">
          <Heading as="h2" size="5" className="mb-2 text-blue-700 font-semibold">
            My Mission
          </Heading>
          <Text as="p" size="4" className="text-gray-700">
            To guide and support everyone—especially those impacted by domestic violence—on their journey toward safety, healing, and personal growth. If you have caused harm, you are also welcome here: change is possible, and support is available to help you build healthier relationships and a better future.
          </Text>
        </section>
        <section className="mb-6">
          <Heading as="h2" size="5" className="mb-2 text-purple-700 font-semibold">
            My Vision
          </Heading>
          <Text as="p" size="4" className="text-gray-700">
            A world where every individual lives free from violence, with the integrity and dignity they deserve—and where everyone is empowered to grow, heal, and make positive change.
          </Text>
        </section>
        <section>
          <Heading as="h2" size="5" className="mb-2 text-blue-700 font-semibold">
            About the Creator
          </Heading>
          <Text as="p" size="4" className="text-gray-700">
            Hi, I am <span className="font-semibold text-blue-700">Sakiasi Baleiwai Komaidrakulu</span>, the creator and sole author of G.E.T.V.I.I.D. I am passionate about helping others find strength, safety, and hope through awareness, education, and community support—for both survivors and those seeking to change.
          </Text>
        </section>
      </Card>
    </main>
  );
}