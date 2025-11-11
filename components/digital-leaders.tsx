export function DigitalLeaders() {
  const clients = [
    { name: "Banglalink", image: "/banglalink-logo.jpg" },
    { name: "Bhutan Telecom", image: "/bhutan-telecom-logo.jpg" },
    { name: "Cable & Wireless", image: "/cable-wireless-logo.jpg" },
    { name: "Dhiraagu", image: "/dhiraagu-logo.jpg" },
    { name: "Jersey Telecom", image: "/jersey-telecom-logo.jpg" },
    { name: "Loop Mobile", image: "/loop-mobile-logo.jpg" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-cyan-500 mb-12 text-balance">
          Digital Leaders with Tayana
        </h2>

        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed mb-12">
          <p>
            We take pride in establishing a long-term caring relationship with all our clients- A bond that gets only
            stronger as the years pass, thanks to our flexible approach to the rapidly changing needs of our clients,
            and ability to deliver a customized solution with a high-value proposition to our clients that suites their
            current scale of operation perfectly.
          </p>

          <p>
            This rock-solid performance has created a working partnership with all our clients with mutual respect. As a
            result, all of our clients and Products and Solutions are 100% referenceable! without exception.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="w-full h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <img
                src={client.image || "/placeholder.svg"}
                alt={client.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
