import { Heart, Code, Coffee } from 'lucide-react';
import Ballpit from './Ballpit';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-700 relative overflow-hidden">
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, minHeight: '500px', maxHeight: '500px', width: '100%' }}>
        <Ballpit
          count={200}
          gravity={0.7}
          friction={0.8}
          wallBounce={0.95}
          followCursor={true}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                Priyanshu
              </div>
              <p className="text-gray-400 text-sm">
                Building the future, one line of code at a time.
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>&</span>
              <Code className="w-4 h-4 text-blue-400" />
              <span>by Priyanshu</span>
              <Coffee className="w-4 h-4 text-yellow-600" />
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Priyanshu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;