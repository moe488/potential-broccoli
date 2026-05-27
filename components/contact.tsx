import { Phone, MapPin, Clock } from "lucide-react"

const contactInfo = [
  { name: "电话", icon: Phone, value: "138-XXXX-XXXX", href: "tel:138XXXXXXXX" },
  { name: "地址", icon: MapPin, value: "黑龙江省佳木斯市抚远县", href: "#" },
  { name: "营业时间", icon: Clock, value: "每天 6:00 - 18:00", href: "#" },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <span className="text-muted-foreground text-sm tracking-wide mb-4 block">
            联系我们
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-8 text-balance">
            欢迎前来选购
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            如有任何问题或需要预订海鲜，欢迎随时联系我们。
            我们将竭诚为您服务！
          </p>

          <div className="flex flex-col gap-4">
            {contactInfo.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.name}
                  className="inline-flex items-center gap-4 px-6 py-4 border border-border rounded-lg"
                >
                  <Icon className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">{item.name}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
