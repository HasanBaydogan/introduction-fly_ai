"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

interface ContactFormInputs {
  name: string;
  email: string;
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
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      reset();
    } catch (e) {
      setServerError("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
      <div id="iletisim" className="max-container mx-auto p-8 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">{t.contact.contact}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
          <div className="text-green-600 text-center">Mesajınız başarıyla gönderildi!</div>
        )}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors disabled:opacity-60"
          disabled={isSubmitting}
        >
          {isSubmitting ? `${t.contact.sending}` : `${t.contact.send}`}
        </button>
      </form>
    </div>
  );
};

export default Contact;
