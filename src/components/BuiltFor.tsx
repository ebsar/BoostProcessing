const categories = ["Cafés", "Salons & barbershops", "Restaurants", "Retail shops", "Auto & repair services"];

const BuiltFor = () => (
  <section aria-label="The kind of businesses we work with" className="bg-white px-5 py-12 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-5xl text-center">
      <p className="text-sm font-semibold text-slate">The kind of counters we show up at</p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        {categories.map((category) => (
          <span key={category} className="rounded-full bg-cloud px-4 py-2 text-sm font-semibold text-ink">
            {category}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default BuiltFor;
