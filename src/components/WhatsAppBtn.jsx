import { MessageCircle } from 'lucide-react';
import './WhatsAppBtn.css';

const WhatsAppBtn = () => {
  const phoneNumber = "1234567890"; // Replace with actual number
  const message = "Hello, I would like to inquire about booking a stay at Aurelia Coast Resort.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-btn" aria-label="Chat on WhatsApp">
      <MessageCircle size={32} />
    </a>
  );
};

export default WhatsAppBtn;
