import { CheckCircle } from "phosphor-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function PricingSection() {
  const t = useTranslations("pricing");

  const plans = [
    {
      title: t("plans.0.title"),
      price: t("plans.0.price"),
      description: t("plans.0.description"),
      features: [
        t("plans.0.features.0"),
        t("plans.0.features.1"),
        t("plans.0.features.2"),
        t("plans.0.features.3"),
        t("plans.0.features.4"),
      ],
      button: t("plans.0.button"),
      highlight: false,
    },
    {
      title: t("plans.1.title"),
      price: t("plans.1.price"),
      description: t("plans.1.description"),
      features: [
        t("plans.1.features.0"),
        t("plans.1.features.1"),
        t("plans.1.features.2"),
        t("plans.1.features.3"),
        t("plans.1.features.4"),
        t("plans.1.features.5"),
      ],
      button: t("plans.1.button"),
      highlight: true,
    },
  ];

  return (
    <div className="py-8 lg:py-16 text-center relative mt-15">
      <motion.h1
        className="text-4xl font-semibold mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
      >
        {t("title")}
      </motion.h1>

      <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            className={`relative flex-1 bg-white border ${
              plan.highlight ? "border-black" : "border-neutral-300"
            } rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
          >
            {plan.highlight && (
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                {t("recommended")}
              </span>
            )}

            <h2 className="text-xl font-semibold mb-2">{plan.title}</h2>
            <p className="text-gray-600 mb-4 text-sm">{plan.description}</p>
            <p className="text-3xl font-bold mb-6">{plan.price}</p>

            <ul className="mb-20 flex flex-col gap-2 text-left text-gray-700">
              {plan.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-center gap-2">
                  <CheckCircle size={20} weight="bold" className="text-black" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`mt-auto py-2 px-4 rounded-md font-medium hover:cursor-pointer ${
                plan.highlight
                  ? "bg-black text-white"
                  : "bg-white text-black border border-black hover:bg-black hover:text-white transition-colors"
              }`}
            >
              {plan.button}
            </button>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <p className="text-gray-700 text-lg mb-4">{t("enterpriseText")}</p>
        <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition">
          {t("enterpriseButton")}
        </button>
      </motion.div>

      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              135deg, 
              #FF9D00 0px, 
              #FF9D00 2px, 
              transparent 1px, 
              transparent 6px
            )
          `,
          opacity: 0.08,
          zIndex: -1,
          maskImage:
            "radial-gradient(circle at center, rgba(0,0,0,1), rgba(0,0,0,0) 90%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, rgba(0,0,0,1), rgba(0,0,0,0) 90%)",
        }}
      />
    </div>
  );
}
