import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Github } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#fcbaa1] text-white py-6 shadow-inner">
      <motion.div
        className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Texto principal */}
        <div className="text-center md:text-left">
          <h2 className="font-semibold text-lg">🎟️ Ação Entre Amigos 2025</h2>
          <p className="text-sm opacity-90">
            Feito por{" "}
            <a
              href="https://github.com/BernardoNogueiraDev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-200"
            >
              Bernardo Nogueira
            </a>
          </p>
        </div>

        {/* Ícones de contato */}
        <div className="flex gap-6 items-center">
          <motion.a
            href="https://github.com/BernardoNogueiraDev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-white hover:text-gray-200"
          >
            <Github size={22} />
            <span className="hidden sm:inline">GitHub</span>
          </motion.a>

          <motion.a
            href="https://api.whatsapp.com/send?phone=5531995175307&text=Ol%C3%A1%2C%20Bernardo!%20Vim%20pelo%20site%20da%20A%C3%A7%C3%A3o%20Entre%20Amigos."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-white hover:text-gray-200"
          >
            <MessageCircle size={22} />
            <span className="hidden sm:inline">Contato</span>
          </motion.a>
        </div>
      </motion.div>

      <motion.p
        className="text-center text-xs mt-4 opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        © {new Date().getFullYear()} Todos os direitos reservados.
      </motion.p>
    </footer>
  );
};

export default Footer;
