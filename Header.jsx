import React, { useState } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-cyber border-b border-accent">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-cyber flex items-center justify-center glow-cyan">
              <Icon name="Shield" size={24} className="text-primary-foreground" />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-orbitron font-bold text-primary tracking-wider">
              CyberCrypt
            </h1>
            <span className="text-xs font-rajdhani text-muted-foreground uppercase tracking-widest">
              Security Operations
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="/security-operations-dashboard" 
            className="flex items-center space-x-2 px-4 py-2 rounded-cyber text-primary font-medium hover:bg-accent/20 hover:glow-soft transition-all duration-200"
          >
            <Icon name="Shield" size={18} />
            <span>Dashboard</span>
          </a>
          
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-primary hover:glow-soft"
            iconName="Key"
            iconPosition="left"
            iconSize={18}
          >
            Encrypt
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-primary hover:glow-soft"
            iconName="Unlock"
            iconPosition="left"
            iconSize={18}
          >
            Decrypt
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-primary hover:glow-soft"
            iconName="Activity"
            iconPosition="left"
            iconSize={18}
          >
            Logs
          </Button>

          {/* More Menu */}
          <div className="relative">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleMenu}
              className="border-accent hover:border-primary hover:glow-soft"
              iconName="MoreHorizontal"
              iconSize={18}
            >
              More
            </Button>
            
            {isMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-accent rounded-cyber shadow-glow-blue z-50">
                <div className="py-2">
                  <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-accent/20 hover:text-primary transition-colors duration-200 flex items-center space-x-2">
                    <Icon name="Settings" size={16} />
                    <span>Settings</span>
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-accent/20 hover:text-primary transition-colors duration-200 flex items-center space-x-2">
                    <Icon name="HelpCircle" size={16} />
                    <span>Help</span>
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-accent/20 hover:text-primary transition-colors duration-200 flex items-center space-x-2">
                    <Icon name="Info" size={16} />
                    <span>About</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-primary hover:glow-soft"
            iconName={isMenuOpen ? "X" : "Menu"}
            iconSize={24}
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-cyber border-t border-accent">
          <nav className="px-6 py-4 space-y-3">
            <a 
              href="/security-operations-dashboard" 
              className="flex items-center space-x-3 px-4 py-3 rounded-cyber text-primary font-medium bg-accent/20 glow-soft"
            >
              <Icon name="Shield" size={20} />
              <span>Dashboard</span>
            </a>
            
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-cyber text-foreground hover:bg-accent/20 hover:text-primary transition-all duration-200">
              <Icon name="Key" size={20} />
              <span>Encrypt Files</span>
            </button>
            
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-cyber text-foreground hover:bg-accent/20 hover:text-primary transition-all duration-200">
              <Icon name="Unlock" size={20} />
              <span>Decrypt Files</span>
            </button>
            
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-cyber text-foreground hover:bg-accent/20 hover:text-primary transition-all duration-200">
              <Icon name="Activity" size={20} />
              <span>Activity Logs</span>
            </button>
            
            <div className="border-t border-accent pt-3 mt-3">
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-cyber text-muted-foreground hover:bg-accent/20 hover:text-primary transition-all duration-200">
                <Icon name="Settings" size={20} />
                <span>Settings</span>
              </button>
              
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-cyber text-muted-foreground hover:bg-accent/20 hover:text-primary transition-all duration-200">
                <Icon name="HelpCircle" size={20} />
                <span>Help</span>
              </button>
              
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-cyber text-muted-foreground hover:bg-accent/20 hover:text-primary transition-all duration-200">
                <Icon name="Info" size={20} />
                <span>About</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
