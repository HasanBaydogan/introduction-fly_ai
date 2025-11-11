"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import axios from "axios";

interface ContactFormInputs {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormInputs>();
  const [serverError, setServerError] = useState("");
  const { t } = useLanguage();
  const onSubmit = async (data: ContactFormInputs) => {
    setServerError("");

    try {
      const response = await axios.post("https://formspree.io/f/xnnlqzbp", data, {
        headers: {
          Accept: "application/json",
        },
      });
      if (response.status === 200) {
        console.log("Form submitted successfully");
      }
      reset();
    } catch (e) {
      setServerError("Bir hata oluştu. Lütfen tekrar deneyin.");
      console.error("Error submitting form:", e);
    }
  };

  return (
    <div
      id="iletisim"
      className="relative max-container padding-container mx-auto p-8 rounded-xl mt-12 gap-12 pb-20 md:gap-16 py-10 lg:py-20"
    >
      <h2 className="bold-40 lg:bold-64 pt-20">{t.contact.contact}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium">
              {t.contact.name} {t.contact.surname}
            </label>
            <input
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              {...register("name", { required: `${t.contact.nameRequired}` })}
              placeholder={t.contact.namePlaceholder}
              disabled={isSubmitting}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>
          <div>
            <label className="block mb-1 font-medium">{t.contact.email}</label>
            <input
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              {...register("email", {
                required: `${t.contact.emailRequired}`,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: `${t.contact.emailErrorMessage}`,
                },
              })}
              placeholder={t.contact.email}
              disabled={isSubmitting}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
          <div>
            <label className="block mb-1 font-medium">{t.contact.subject}</label>
            <input
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.subject ? "border-red-500" : "border-gray-300"
              }`}
              {...register("subject", { required: `${t.contact.subjectRequired}` })}
              placeholder={t.contact.subjectPlaceholder}
              disabled={isSubmitting}
            />
            {errors.subject && (
              <span className="text-red-500 text-sm">{errors.subject.message}</span>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium">{t.contact.phone}</label>
            <input
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              {...register("phone", {
                required: `${t.contact.phoneRequired}`,
                pattern: {
                  value: /^\+?[0-9\s-]{7,15}$/,
                  message: `${t.contact.phoneErrorMessage}`,
                },
              })}
              placeholder={t.contact.phonePlaceholder}
              disabled={isSubmitting}
            />
            {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
          </div>
        </div>
        <div>
          <label className="block mb-1 font-medium">{t.contact.message}</label>
          <textarea
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            {...register("message", { required: `${t.contact.messageRequired}` })}
            placeholder={t.contact.messagePlaceholder}
            rows={5}
            disabled={isSubmitting}
          />
          {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
        </div>
        {serverError && <div className="text-red-600 text-center">{serverError}</div>}
        {isSubmitSuccessful && !serverError && (
          <div className="text-green-600 text-center" key={isSubmitSuccessful ? "success" : ""}>
            {t.contact.messageSuccess}
            {(() => {
              setTimeout(() => {
                reset();
              }, 5000);
              return null;
            })()}
          </div>
        )}
        <button
          type="submit"
          className=" w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors disabled:opacity-60"
          disabled={isSubmitting}
        >
          {isSubmitting ? `${t.contact.sending}` : `${t.contact.send}`}
        </button>
      </form>
    </div>
  );
};

export default Contact;
