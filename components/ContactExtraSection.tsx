// components/ContactExtraSection.tsx
export default function ContactExtraSection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Need More Help?
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-6">
        If you have questions that aren’t answered here, feel free to reach out directly or check our FAQ.
      </p>
      <a
        href="/faq"
        className="inline-block px-6 py-3 bg-primary text-white rounded hover:bg-secondary transition"
      >
        Visit FAQ
      </a>
    </section>
  )
}
