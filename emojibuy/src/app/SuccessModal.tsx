import { Rocket, PartyPopper } from 'lucide-react';
const SuccessModal: React.FC<{ 
    isOpen: boolean, 
    onClose: () => void, 
  }> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  // console.log(tokens)
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center  bg-black bg-opacity-50">
        <div className="bg-black p-8 rounded-xl shadow-2xl  text-center max-w-md w-full relative">
          <button 
            onClick={()=>onClose} 
            className="absolute top-4 right-4 text-gray-100 hover:text-gray-800"
          >
            ✕
          </button>
          <div className="flex justify-center mb-4 mt-10">
            <Rocket className="text-green-500 w-16 h-16 animate-bounce" />
            <PartyPopper className="text-purple-500 w-16 h-16 animate-pulse" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-green-100">Emoji Empire Expansion!</h2>
          <p className="mb-6 text-gray-300">
      we all love you champ 🎉
          
          </p>
          {/* <div className="flex justify-center space-x-2 mb-4">
            {emojis.map(emoji => (
              <span key={emoji.id} className="text-4xl">{emoji}</span>
            ))}
          </div> */}
          <p className="text-sm text-gray-500">
            You're not just buying Emojis, you're building a legendary emoji portfolio! 💎
          </p>
          <button 
            onClick={onClose} 
            className="mt-6 px-6 py-3 bg-gray-900 text-green-100 rounded-md hover:bg-green-100 hover:text-black transition"
          >
            Buy More / Research More
          </button>
        </div>
      </div>
    );
  };

  export default SuccessModal;
  