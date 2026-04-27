'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Youtube } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'thuralinn45512@gmail.com',
      link: 'mailto:thuralinn45512@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+66943419908',
      link: 'tel:+66943419908'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bang Na Tai, Bang Na, Bangkok 1260',
      link: null
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', link: 'https://github.com/ThuraLinn45512' },
    { icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/thura-linn-923a83344' },
    { icon: Send, label: 'Telegram', link: 'https://t.me/thuralinn45512' },
    { icon: Youtube, label: 'YouTube', link: 'https://www.youtube.com/@CodeWallTechnologies' }
  ];

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl mb-6 text-center">
          Get In <span className="bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
          Have a project in mind? Let's work together to create something amazing
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-200 hover:text-teal-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-200">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-cyan-400 hover:to-emerald-500 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-xl border border-cyan-400/25 bg-gradient-to-br from-cyan-500/10 via-gray-900/50 to-emerald-500/10 p-8 shadow-[0_0_45px_rgba(45,212,191,0.14)] backdrop-blur-sm"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-emerald-400/15 blur-3xl" />

            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-500 shadow-[0_0_30px_rgba(45,212,191,0.35)]">
                <Send size={26} className="text-white" />
              </div>

              <h3 className="mb-4 text-3xl font-bold">Let&apos;s Build Something</h3>
              <p className="mb-8 max-w-md text-lg leading-8 text-gray-300">
                For project discussions, collaborations, or quick questions, Telegram is the fastest way to reach me.
              </p>

              <div className="space-y-4">
                <a
                  href="https://t.me/thuralinn45512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-3 font-bold text-white shadow-[0_0_28px_rgba(45,212,191,0.35)] transition-all hover:scale-105"
                >
                  <Send size={18} />
                  Message on Telegram
                </a>

                <div className="grid gap-4 pt-6 sm:grid-cols-2">
                  <div className="rounded-lg border border-cyan-400/20 bg-gray-900/30 p-4">
                    <p className="text-sm text-gray-400">Response</p>
                    <p className="mt-1 font-bold text-cyan-200">Usually within a day</p>
                  </div>
                  <div className="rounded-lg border border-cyan-400/20 bg-gray-900/30 p-4">
                    <p className="text-sm text-gray-400">Available For</p>
                    <p className="mt-1 font-bold text-cyan-200">Web & Mobile Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
