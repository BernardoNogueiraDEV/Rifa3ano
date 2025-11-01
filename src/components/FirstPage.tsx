import React from "react";
import { motion } from "framer-motion";

const FirstPage: React.FC = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: `linear-gradient(180deg, #fcbaa1, #f8f7f1, #f8f7f1)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <motion.header
        className="flex items-center p-6 space-x-3"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-4xl font-[Comforter] tracking-wider">
          Terceirão Maria Anália
        </span>
      </motion.header>

      {/* Main content */}
      <main className="flex-grow flex flex-col md:flex-row items-center justify-evenly px-10">
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light mb-4 border-b border-black pb-2 max-w-max font-comforter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Ação entre amigos
          </motion.h1>

          <motion.a
            href="https://www.instagram.com/3rao_analia/"
            target="_blank"
            className="text-center mt-6 w-40 py-2 px-4 border border-black rounded-full font-bold text-xs tracking-widest hover:bg-black hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            SAIBA MAIS
          </motion.a>
        </motion.div>
      </main>

      {/* Footer author */}
      <motion.footer
        className="p-6 flex justify-end space-x-4 text-xs font-bold tracking-widest"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="text-right font-comforter">
          <p>RIFAS DO TERCEIRÃO</p>
          <div className="border-b border-black mt-1"></div>
        </div>
      </motion.footer>
    </div>
  );
};

export default FirstPage;
