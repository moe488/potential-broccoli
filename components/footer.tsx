export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {currentYear} 鸿运鱼行. 保留所有权利.
        </p>
        <p className="text-sm text-muted-foreground">
          新鲜直达，品质保证
        </p>
      </div>
    </footer>
  )
}
