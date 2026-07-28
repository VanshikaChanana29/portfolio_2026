// "use client";

// import { useState } from "react";
// import { createClient } from "@supabase/supabase-js";

// const ContactForm = () => {
//   const supabase = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
//   );

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     setStatus("");

//     if (!form.name || !form.phone || !form.email || !form.message) {
//       setStatus("All fields are required.");
//       return;
//     }

//     setLoading(true);

//     const { error } = await supabase.from("contact_messages").insert([
//       {
//         name: form.name,
//         phone: form.phone,
//         email: form.email,
//         message: form.message,
//       },
//     ]);

//     if (error) {
//       setStatus("Something went wrong.");
//       console.log(error);
//     } else {
//       setStatus("Message sent successfully!");
//       setForm({ name: "", phone: "", email: "", message: "" });
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="w-full max-w-md">
//       <p className="font-bold text-2xl text-black mb-4">Contact Me</p>

//       <div className="text-black bg-[#2F2F2F] rounded-lg border border-[#464c6a] p-4">
        
//         <div className="flex flex-col gap-3">

//           <input
//             name="name"
//             placeholder="Your Name *"
//             value={form.name}
//             onChange={handleChange}
//             className="p-2.5 text-sm rounded-md bg-white outline-none focus:ring-2 focus:ring-[#046a38]"
//           />

//           <input
//             name="phone"
//             placeholder="Phone Number *"
//             value={form.phone}
//             onChange={handleChange}
//             className="p-2.5 text-sm rounded-md bg-white outline-none focus:ring-2 focus:ring-[#046a38]"
//           />

//           <input
//             name="email"
//             placeholder="Email *"
//             value={form.email}
//             onChange={handleChange}
//             className="p-2.5 text-sm rounded-md bg-white outline-none focus:ring-2 focus:ring-[#046a38]"
//           />

//           <textarea
//             name="message"
//             placeholder="Your Message *"
//             rows={4}
//             value={form.message}
//             onChange={handleChange}
//             className="p-2.5 text-sm rounded-md bg-white outline-none focus:ring-2 focus:ring-[#046a38]"
//           />
//         </div>

//         <button
//           className="mt-5 w-full bg-[#046a38] text-white py-2.5 text-sm rounded-md hover:bg-[#055a2e] transition"
//           disabled={loading}
//           onClick={handleSubmit}
//         >
//           {loading ? "Sending..." : "Submit"}
//         </button>

//         {status && <p className="text-white text-sm mt-3">{status}</p>}
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
