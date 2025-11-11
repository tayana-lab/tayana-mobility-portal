import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ProductsPreview() {
  const products = [
    {
      title: "Digital BSS",
      description:
        "Cloud-native, 5G-ready BSS empowers service providers to offer customers a real time digital experience. Our converged charging and policy solution enables multi services providers to offer converged services for mobile, fixed line...",
      icon: "/cloud-database-icon-blue.jpg",
    },
    {
      title: "Analytics & BI",
      description:
        "Transform your telecom data into actionable insights with our comprehensive analytics and business intelligence solutions designed specifically for CSPs.",
      icon: "/analytics-chart-icon-blue.jpg",
    },
    {
      title: "Messaging and VAS",
      description:
        "Enable rich messaging experiences and value-added services that drive revenue growth and enhance customer engagement across multiple channels.",
      icon: "/message-bubble-icon-blue.jpg",
    },
    {
      title: "Network Solutions",
      description:
        "Optimize your network performance with intelligent solutions that ensure seamless connectivity and superior quality of service for your customers.",
      icon: "/network-connection-icon-blue.jpg",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-cyan-500 mb-16">Our Products & Solutions</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={index}
              className="border-2 border-cyan-100 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl group"
            >
              <CardHeader>
                <div className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform">
                  <img src={product.icon || "/placeholder.svg"} alt="" className="w-full h-full object-contain" />
                </div>
                <CardTitle className="text-xl text-cyan-600">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">{product.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
