const IntegrationSection = () => {
  const integrations = [
    { name: "Salesforce", category: "CRM" },
    { name: "Slack", category: "Communication" },
    { name: "HubSpot", category: "Marketing" },
    { name: "Stripe", category: "Payments" },
    { name: "Shopify", category: "E-commerce" },
    { name: "Zoom", category: "Video" },
    { name: "QuickBooks", category: "Accounting" },
    { name: "Microsoft Teams", category: "Collaboration" },
    { name: "Mailchimp", category: "Email" },
    { name: "Asana", category: "Project Management" },
  ]

  return (
    <section className="w-full bg-background px-6 py-8 text-foreground sm:py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-0 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {integrations.map((integration, index) => (
            <div key={index} className="group transition-transform duration-300 hover:-translate-y-1">
              <div className="rounded-xl p-4 text-center transition-colors sm:p-6">
                <div
                  className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15 transition-colors duration-300 group-hover:bg-primary/25"
                >
                  <div className="h-6 w-6 rounded bg-primary/40"></div>
                </div>
                <h3 className="mb-3 text-card-foreground">{integration.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IntegrationSection
