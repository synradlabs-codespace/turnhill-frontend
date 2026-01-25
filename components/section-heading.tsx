type Props = {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
}
export function SectionHeading({ eyebrow, title, description, align = "center" }: Props) {
  return (
    <div className={`${align === "center" ? "text-center max-w-xl mx-auto" : ""}`}>
      {eyebrow ? <div className="text-xs text-[#70AD47] font-medium">{eyebrow}</div> : null}
      {/* Always keep the title aligned, ignoring global text-justify */}
      <h2 className="text-pretty text-2xl sm:text-3xl font-semibold tracking-tight text-left">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  )
}
