import { useState } from 'react';
import emailjs from "@emailjs/browser";
import { useForm } from 'react-hook-form';
import { Input } from '../../../../ui/input';
import { Textarea } from '../../../../ui/textarea';
import { Button } from '../../../../ui/button';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Loader2 } from 'lucide-react';

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const [isSending, setIsSending] = useState(false);

    const handleMessageSubmit = async (data) => {
        const { name, email, subject, message } = data;

        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
        };

        setIsSending(true);

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Message Sent!",
                    text: "Your message has been successfully delivered.",
                    confirmButtonColor: "#4CAF50",
                    background: "#1e1e1e",
                    color: "#f5f5f5",
                });
                reset();
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong while sending your message.",
                    confirmButtonColor: "#F44336",
                    background: "#1e1e1e",
                    color: "#f5f5f5",
                });
            }).finally(() => {
                setIsSending(false);
            })
    };
    return (
        <section className='py-4 md:py-10' id="contact">
            <div className='w-11/12 md:w-10/12 max-w-7xl mx-auto '>
                <h2 className="text-3xl font-semibold mb-6 text-primary text-center">Contact Me</h2>
                <div className='bg-secondary border border-gray-700 min-h-[10vh] rounded-xl p-6 lg:p-10 flex gap-5 items-center flex-col lg:flex-row'>
                    <div className='flex-1'>
                        <div className="flex-1 flex flex-col justify-center space-y-4">
                            <h2 className="text-2xl font-semibold text-white mb-2">Let's Connect</h2>
                            <p className="text-[#d5d5d5]">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>

                            <div className="space-y-3">
                                <a
                                    href="https://www.facebook.com/abusufian.mahin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-[#d5d5d5] hover:text-primary transition-colors duration-200"
                                >
                                    <FaFacebookF className="text-lg bg-blue-600 p-2 rounded-full text-white w-8 h-8" />
                                    <span>Facebook</span>
                                </a>

                                <a
                                    href="https://github.com/AbuSufianMahin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-[#d5d5d5] hover:text-primary transition-colors duration-200"
                                >
                                    <FaGithub className="text-lg bg-gray-800 p-2 rounded-full text-white w-8 h-8" />
                                    <span>GitHub</span>
                                </a>

                                <a
                                    href="https://wa.me/+8801629519313"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-[#d5d5d5] hover:text-primary transition-colors duration-200"
                                >
                                    <FaWhatsapp className="text-lg bg-green-600 p-2 rounded-full text-white w-8 h-8" />
                                    <span>WhatsApp</span>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/abu-sufian-mahin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-[#d5d5d5] hover:text-primary transition-colors duration-200"
                                >
                                    <FaLinkedinIn className="text-lg bg-blue-700 p-2 rounded-full text-white w-8 h-8" />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className='flex-1 w-full border-t border-gray-600 pt-4 lg:border-none lg:pt-0'>
                        <p className='text-[#d5d5d5] mb-4'>Feel free to reach out directly from here</p>
                        <form onSubmit={handleSubmit(handleMessageSubmit)} className='mx-auto space-y-3 md:space-y-5'>
                            <div>
                                <Input type="text" placeholder="Subject" className="bg-background"
                                    {...register("subject", { required: "Please enter a subject." })} />
                                {errors.subject && <p className="text-xs text-red-500 ml-2 mt-2">{errors.subject.message}</p>}
                            </div>

                            <div className='flex flex-col md:flex-row gap-3'>
                                <div className='flex-1'>
                                    <Input type="text" placeholder="Your Name" className="bg-background"
                                        {...register("name", { required: "Please enter your name." })} />
                                    {errors.name && <p className="text-xs text-red-500 ml-2 mt-2">{errors.name.message}</p>}

                                </div>
                                <div className='flex-1'>
                                    <Input type="email" placeholder="Email" className="bg-background"
                                        {...register("email", {
                                            required: "Please enter your email address.", pattern: {
                                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                                message: "Please enter a valid email address.",
                                            },
                                        })} />
                                    {errors.email && <p className="text-xs text-red-500 ml-2 mt-2">{errors.email.message}</p>}
                                </div>
                            </div>
                            <Textarea placeholder="Write your message here." className="bg-background h-32 overflow-y-auto"
                                {...register("message", { required: "Please enter your message." })} />

                            <Button
                                className="w-full"
                                type="submit"
                                disabled={isSending}
                            >
                                {isSending ? (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    "Send"
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;