
export default function Container({children, id, bg}) {
  return (
    <section id={id} className={`py-4 md:py-10 ${bg}`}>
        <div className="m-auto px-2 md:px-10">
        {children}
        </div>
    </section>
  )
}
