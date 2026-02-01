import emailjs from "@emailjs/browser";

export interface ContactFormPayload {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}

export const sendContactEmail = async (payload: ContactFormPayload) => {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
    {
      from_name: payload.name,
      from_email: payload.email,
      phone: payload.phone,
      address: payload.address,
      message: payload.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};
