// src/hooks/useIrParaWhatsApp.js
import { useNavigate } from "react-router-dom";

export function useIrParaWhatsApp() {
  const navigate = useNavigate();

  const irParaWhatsApp = (tipo, destino) => {
    
    if(destino && destino !== '')
      navigate(`/whatsapp?tipo=${tipo}&destino=${destino}`);
    else
      navigate(`/whatsapp?tipo=${tipo}`);
  };

  return irParaWhatsApp;
}