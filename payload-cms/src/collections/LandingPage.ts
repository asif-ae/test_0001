import { CollectionConfig } from "payload";

const LandingPage: CollectionConfig = {
  slug: "landing-page",
  access: { read: () => true },
  fields: [
    // Hero Section
    {
      name: "heroTitle",
      type: "text",
      required: true,
    },
    {
      name: "heroSubtitle",
      type: "textarea",
      required: true,
    },
    {
      name: "heroCTAButton",
      type: "text",
      required: true,
    },

    // Features Section (Repeater Field for Multiple Features)
    {
      name: "features",
      type: "array",
      required: true,
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          required: true,
        },
      ],
    },

    // Testimonials Section
    {
      name: "testimonials",
      type: "array",
      required: true,
      fields: [
        {
          name: "clientName",
          type: "text",
          required: true,
        },
        {
          name: "feedback",
          type: "textarea",
          required: true,
        },
      ],
    },

    // Call-to-Action (CTA) Section
    {
      name: "ctaHeadline",
      type: "text",
      required: true,
    },
    {
      name: "ctaSubheadline",
      type: "textarea",
      required: true,
    },
    {
      name: "ctaButton",
      type: "text",
      required: true,
    },
  ],
};

export default LandingPage;
