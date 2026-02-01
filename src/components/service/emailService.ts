import emailjs from "@emailjs/browser";

export interface NewsletterPayload {
  subscriberEmail: string;
}

export const sendWelcomeEmail = async ({ subscriberEmail }: NewsletterPayload) => {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      subscriber_email: subscriberEmail,  // template variable inside the email
      to_email: subscriberEmail,          // recipient field
      website_name: "hamwaltechsolution.com"
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};




// import emailjs from "@emailjs/browser";

// export interface NewsletterPayload {
//   subscriberEmail: string;
// }

// export const sendWelcomeEmail = async ({
//   subscriberEmail,
// }: NewsletterPayload): Promise<void> => {
//   await emailjs.send(
//     import.meta.env.VITE_EMAILJS_SERVICE_ID,
//     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//     {
//       subscriber_email: subscriberEmail,
//       website_name: "hamwaltechsolution.com",
//     },
//     import.meta.env.VITE_EMAILJS_PUBLIC_KEY
//   );
// };

// import emailjs from "@emailjs/browser";

// export interface NewsletterPayload {
//   subscriberEmail: string;
// }

// export const sendWelcomeEmail = async ({ subscriberEmail }: NewsletterPayload) => {
//   console.log(
//     "SERVICE_ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID,
//     "TEMPLATE_ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//     "PUBLIC_KEY:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY
//   );

//   return emailjs.send(
//     import.meta.env.VITE_EMAILJS_SERVICE_ID,
//     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//     {
//       subscriber_email: subscriberEmail, // Must exactly match {{subscriber_email}} in your template
//       website_name: "hamwaltechsolution.com"
//     },
//     import.meta.env.VITE_EMAILJS_PUBLIC_KEY
//   );
// };




// service_4t4b5h7