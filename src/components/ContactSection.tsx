import { Github, Linkedin, Mail, Code2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/anushka-palewar',
    username: '@anushka-palewar',
    color: 'hover:bg-foreground hover:text-background',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/anushka-palewar',
    username: 'Connect with me',
    color: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:anushkapalewar@email.com',
    username: 'anushkapalewar@email.com',
    color: 'hover:bg-primary hover:text-primary-foreground hover:border-primary',
  },
  {
    icon: Code2,
    label: 'LeetCode',
    href: 'https://leetcode.com/anushka-palewar',
    username: 'View my solutions',
    color: 'hover:bg-[#FFA116] hover:text-black hover:border-[#FFA116]',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:anushkapalewar@email.com">
                <Send size={20} />
                Say Hello
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center gap-3 p-6 bg-card rounded-xl border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${link.color}`}
              >
                <link.icon className="w-8 h-8 transition-transform group-hover:scale-110" />
                <div className="text-center">
                  <span className="font-display font-semibold block">{link.label}</span>
                  <span className="text-xs text-muted-foreground group-hover:text-inherit/70 transition-colors">
                    {link.username}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
