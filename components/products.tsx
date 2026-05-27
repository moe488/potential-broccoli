"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 1,
    title: "鲜活海鱼",
    category: "海鱼",
    description: "每日新鲜捕捞，鲈鱼、黄鱼、鲳鱼等多种选择",
    tags: ["新鲜", "野生", "当日到货"],
    price: "时价",
    link: "#",
  },
  {
    id: 2,
    title: "精品大虾",
    category: "虾类",
    description: "基围虾、明虾、皮皮虾，个大肉鲜",
    tags: ["鲜活", "肥美", "精选"],
    price: "时价",
    link: "#",
  },
  {
    id: 3,
    title: "优质蟹类",
    category: "蟹类",
    description: "大闸蟹、梭子蟹、青蟹，蟹膏肥美",
    tags: ["膏满", "肉厚", "鲜甜"],
    price: "时价",
    link: "#",
  },
  {
    id: 4,
    title: "贝类海鲜",
    category: "贝类",
    description: "生蚝、扇贝、花蛤、蛏子，品种齐全",
    tags: ["鲜活", "干净", "多样"],
    price: "时价",
    link: "#",
  },
  {
    id: 5,
    title: "淡水鱼类",
    category: "淡水",
    description: "草鱼、鲤鱼、鲫鱼、黑鱼，肉质细嫩",
    tags: ["活鱼", "新鲜", "实惠"],
    price: "时价",
    link: "#",
  },
]

export function Products() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="products" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-medium">精选产品</h2>
          <span className="text-muted-foreground text-sm hidden sm:block">
            Fresh Seafood
          </span>
        </div>

        <div className="grid gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.link}
              className="group block"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <article className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-8 border-t border-border hover:bg-secondary/50 transition-colors px-4 -mx-4 rounded-lg">
                <span className="text-muted-foreground text-sm w-16 shrink-0">
                  {product.category}
                </span>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl md:text-2xl font-medium truncate">
                      {product.title}
                    </h3>
                    <ArrowUpRight 
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                        hoveredId === product.id ? "translate-x-1 -translate-y-1" : ""
                      }`}
                    />
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 md:justify-end md:w-48 shrink-0">
                  {product.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-secondary rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
