
import React from 'react';

const socialLinks = [
  { icon: "https://i.postimg.cc/BQX3ZjVk/facebook-Logo-Png.png", alt: "Facebook", href: "#" },
  { icon: "https://i.postimg.cc/pr1tYvps/instagram-Logo-Png.png", alt: "Instagram", href: "#" },
  { icon: "https://i.postimg.cc/PJqjwJrL/whatsapp-Logo-Png.png", alt: "WhatsApp", href: "#" },
];

export function FooterSocial() {
  return (
    <div className="flex items-center space-x-4">
      {socialLinks.map((social) => (
        <a
          key={social.alt}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-80"
        >
          <img
            src={social.icon}
            alt={social.alt}
            className="w-8 h-8 object-contain"
          />
        </a>
      ))}
    </div>
  );
}
