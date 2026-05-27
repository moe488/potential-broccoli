import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <p className="text-muted-foreground mb-4 tracking-wide">欢迎光临</p>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-balance leading-[1.1] mb-8">
          鸿运鱼行
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
          专注于提供最新鲜的海鲜水产，从源头到餐桌，品质始终如一。
          我们精选每一条鱼、每一只虾，只为您的美味佳肴。
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#products"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            浏览产品
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 border border-border text-sm font-medium rounded-lg hover:bg-secondary transition-colors"
          >
            了解我们
          </Link>
        </div>

        <div className="mt-24 flex items-center gap-2 text-muted-foreground">
          <ArrowDown className="w-4 h-4 animate-bounce" />
          <span className="text-sm">向下滚动</span>
        </div>
      </div>
    </section>
  )
}
