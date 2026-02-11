import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "34900123456"; // Replace with actual number
  const message = encodeURIComponent("Hola, me gustaría obtener más información sobre sus servicios de arquitectura.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[hsl(142_70%_45%)] hover:bg-[hsl(142_70%_40%)] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  );
};

export default WhatsAppButton;
