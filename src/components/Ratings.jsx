export default function Ratings() {
  return (
    <section className="w-full bg-[#FFF8EF] py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* ================= TRUSTED BY ================= */}
        <div className="rounded-3xl bg-[#FCEBDE] border border-[#DFDFDD] px-6 md:px-12 py-14">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-widest text-[#828D9C] mb-3">
              Trusted By
            </p>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#2B333C]">
              Patients Across the Globe
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12">
            <Stat
              value="65,000+"
              label="Procedures Successfully Performed"
            />

            <Divider />

            <Stat
              value="46+"
              label="Years of Medical Experience"
            />

            <Divider />

            <Stat
              value="44+"
              label="Countries Served Worldwide"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= TRUST STAT ================= */
function Stat({ value, label }) {
  return (
    <div className="text-center max-w-[220px]">
      <p className="text-3xl sm:text-4xl font-bold text-[#9E4A47]">
        {value}
      </p>
      <p className="text-sm text-[#828D9C] mt-2 leading-relaxed">
        {label}
      </p>
    </div>
  );
}

/* ================= DIVIDER ================= */
function Divider() {
  return (
    <div className="hidden sm:block h-12 w-px bg-[#DFDFDD]" />
  );
}
