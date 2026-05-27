const features = [
  { title: "新鲜保证", items: ["每日进货", "冷链运输", "活鲜为主", "品质把控"] },
  { title: "品种齐全", items: ["海水鱼类", "淡水鱼类", "虾蟹贝类", "干货海产"] },
  { title: "贴心服务", items: ["免费宰杀", "真空包装", "配送上门", "售后无忧"] },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-muted-foreground text-sm tracking-wide mb-4 block">
              关于我们
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-8 text-balance">
              用心经营，诚信为本
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                鸿运鱼行始终坚持「新鲜第一，品质至上」的经营理念。
                我们与多个优质渔场建立了长期合作关系，确保每一份海鲜
                都能以最佳状态送到您的手中。
              </p>
              <p>
                多年来，我们积累了丰富的海鲜采购和保鲜经验，
                从挑选、运输到销售的每一个环节都严格把控，
                只为给您带来最放心的海鲜体验。
              </p>
              <p>
                无论您是家庭日常采购，还是餐厅批量进货，
                鸿运鱼行都能满足您的需求。欢迎新老客户前来选购！
              </p>
            </div>
          </div>

          <div>
            <span className="text-muted-foreground text-sm tracking-wide mb-4 block">
              我们的优势
            </span>
            <div className="space-y-8">
              {features.map((feature) => (
                <div key={feature.title}>
                  <h3 className="font-medium mb-4">{feature.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {feature.items.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 bg-secondary rounded-lg text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
