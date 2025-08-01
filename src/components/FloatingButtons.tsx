import { MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingButtons() {
  const openWhatsApp = () => {
    window.open("https://wa.me/916381687588", "_blank");
  };

  const openInstagram = () => {
    window.open("https://instagram.com/_teaksmile_", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Button
        onClick={openWhatsApp}
        size="icon"
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
        style={{ animationDelay: "0s" }}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      <Button
        onClick={openInstagram}
        size="icon"
        className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <Instagram className="h-6 w-6" />
      </Button>
    </div>
  );
}