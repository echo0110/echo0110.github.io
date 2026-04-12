window.SITE_CONFIG = {
  brandName: "Yungu Studio",
  legalOperatorName: "{{LEGAL_OPERATOR_NAME}}",
  supportEmail: "820713556@qq.com",
  effectiveDate: "{{EFFECTIVE_DATE}}",
  refundWindow: "7 days",
  supportResponseWindow: "3 business days",
  futureBillingProcessor: "Paddle",
  products: {
    chatgptTimelineNavigate: {
      slug: "chatgpt-timeline-navigate",
      name: "ChatGPT Timeline Navigate",
      shortName: "ChatGPT Timeline Navigate",
      type: "Chrome Extension",
      platform: "Google Chrome",
      pricingModel: "one_time",
      pricingModelLabel: "One-time purchase",
      price: "$9.99",
      billingNote: "One-time purchase",
      delivery: "Extension access and setup instructions",
      updates: "Minor updates included",
      support: "Email support",
      tagline: "Navigate long ChatGPT conversations more efficiently with timeline-based browsing.",
      checkoutUrl: "{{PADDLE_CHATGPT_TIMELINE_NAVIGATE_CHECKOUT_URL}}"
    },
    dock: {
      slug: "dock",
      name: "Dock",
      shortName: "Dock",
      type: "macOS App",
      platform: "macOS",
      pricingModel: "one_time",
      pricingModelLabel: "One-time purchase",
      price: "$14.99",
      billingNote: "One-time purchase",
      delivery: "App access and setup instructions",
      updates: "Minor updates included",
      support: "Email support",
      tagline: "A focused macOS utility that improves window and app-switching workflow.",
      checkoutUrl: "{{PADDLE_DOCK_CHECKOUT_URL}}"
    }
  }
};
