"use client";

import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useDarkMode } from "@/hooks/useDarkMode";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const { isDark } = useDarkMode();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Clear any existing timeout before creating a new one
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Handle form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    timeoutRef.current = setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
      timeoutRef.current = null;
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contato"
      className={cn(
        "py-16 md:py-24 transition-colors duration-300",
        isDark ? "bg-[#1a1a1a]" : "bg-white"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* Left Column - Contact Info */}
          <div className="md:col-span-5">
            <h2
              className={cn(
                "mb-6 text-3xl font-bold md:text-4xl",
                isDark ? "text-white" : "text-[#212529]"
              )}
            >
              Tem um desafio para mim?
            </h2>

            <p
              className={cn(
                "mb-10 text-lg leading-relaxed",
                isDark ? "text-[#b0b0b0]" : "text-[#6C757D]"
              )}
            >
              Estou pronto para colaborar em projetos que exigem dedicação técnica e visão moderna. Vamos construir algo incrível juntos.
            </p>

            {/* Contact Info */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                    "bg-[rgba(91,134,229,0.1)]"
                  )}
                >
                  <Mail size={20} color="#5B86E5" />
                </div>
                <div>
                  <p
                    className={cn(
                      "text-sm m-0",
                      isDark ? "text-[#b0b0b0]" : "text-[#6C757D]"
                    )}
                  >
                    Email
                  </p>
                  <p
                    className={cn(
                      "m-0 font-medium",
                      isDark ? "text-white" : "text-[#212529]"
                    )}
                  >
                    seu.email@exemplo.com
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p
                className={cn(
                  "mb-4 text-sm",
                  isDark ? "text-[#b0b0b0]" : "text-[#6C757D]"
                )}
              >
                Me encontre também nas redes:
              </p>
              <div className="flex gap-2">
                <button
                  className={cn(
                    "w-12 h-12 rounded-lg border flex items-center justify-center transition-all duration-300",
                    "hover:bg-[#5B86E5] hover:border-[#5B86E5]",
                    isDark
                      ? "border-[#2d2d2d] bg-[#1a1a1a]"
                      : "border-[#E9ECEF] bg-white",
                    "hover:[&_svg]:text-white"
                  )}
                  aria-label="GitHub"
                >
                  <Github
                    size={20}
                    color={isDark ? "#b0b0b0" : "#212529"}
                    className="transition-colors"
                  />
                </button>
                <button
                  className={cn(
                    "w-12 h-12 rounded-lg border flex items-center justify-center transition-all duration-300",
                    "hover:bg-[#5B86E5] hover:border-[#5B86E5]",
                    isDark
                      ? "border-[#2d2d2d] bg-[#1a1a1a]"
                      : "border-[#E9ECEF] bg-white",
                    "hover:[&_svg]:text-white"
                  )}
                  aria-label="LinkedIn"
                >
                  <Linkedin
                    size={20}
                    color={isDark ? "#b0b0b0" : "#212529"}
                    className="transition-colors"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="md:col-span-7">
            <form
              onSubmit={handleSubmit}
              className={cn(
                "p-6 md:p-10 rounded-xl border",
                isDark
                  ? "bg-[#1a1a1a] border-[#2d2d2d]"
                  : "bg-[#F8F9FA] border-[#E9ECEF]"
              )}
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className={cn(
                    "block mb-2 text-sm font-medium",
                    isDark ? "text-white" : "text-[#212529]"
                  )}
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border transition-colors",
                    "focus:outline-none focus:ring-2 focus:ring-[#5B86E5] focus:border-transparent",
                    isDark
                      ? "bg-[#2d2d2d] border-[#3d3d3d] text-white placeholder:text-[#6C757D]"
                      : "bg-white border-[#E9ECEF] text-[#212529] placeholder:text-[#6C757D]"
                  )}
                  placeholder="Seu nome"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className={cn(
                    "block mb-2 text-sm font-medium",
                    isDark ? "text-white" : "text-[#212529]"
                  )}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border transition-colors",
                    "focus:outline-none focus:ring-2 focus:ring-[#5B86E5] focus:border-transparent",
                    isDark
                      ? "bg-[#2d2d2d] border-[#3d3d3d] text-white placeholder:text-[#6C757D]"
                      : "bg-white border-[#E9ECEF] text-[#212529] placeholder:text-[#6C757D]"
                  )}
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className={cn(
                    "block mb-2 text-sm font-medium",
                    isDark ? "text-white" : "text-[#212529]"
                  )}
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border transition-colors resize-none",
                    "focus:outline-none focus:ring-2 focus:ring-[#5B86E5] focus:border-transparent",
                    isDark
                      ? "bg-[#2d2d2d] border-[#3d3d3d] text-white placeholder:text-[#6C757D]"
                      : "bg-white border-[#E9ECEF] text-[#212529] placeholder:text-[#6C757D]"
                  )}
                  placeholder="Sua mensagem..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={cn(
                  "w-full md:w-auto px-8 py-3 rounded-lg font-medium text-base transition-all duration-300",
                  "flex items-center justify-center gap-2",
                  "shadow-lg hover:shadow-xl",
                  submitted
                    ? "bg-[#10B981] text-white cursor-not-allowed"
                    : "bg-[#5B86E5] text-white hover:bg-[#4a6bc4]",
                  "disabled:opacity-100"
                )}
              >
                {submitted ? (
                  <>
                    <span>✓</span>
                    <span>Mensagem Enviada!</span>
                  </>
                ) : (
                  <>
                    <span>Enviar Mensagem</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

