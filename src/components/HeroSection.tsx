import { ArrowRight, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting Badge */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="animate-fade-up-delay-1 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
            Hi, I'm{' '}
            <span className="gradient-text">Anushka Palewar</span>
          </h1>

          {/* Tagline */}
          <p className="animate-fade-up-delay-2 font-display text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
            Java Spring Boot Full-Stack Developer
            <span className="hidden sm:inline"> | </span>
            <br className="sm:hidden" />
            Machine Learning Enthusiast
            <span className="hidden sm:inline"> | </span>
            <br className="sm:hidden" />
            Problem Solver
          </p>

          {/* Description */}
          <p className="animate-fade-up-delay-3 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            I build scalable web applications and enjoy solving algorithmic problems. 
            Passionate about creating impactful solutions with clean, efficient code.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://github.com/anushka-palewar" target="_blank" rel="noopener noreferrer">
                <Github size={18} />
                GitHub
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">
                <Mail size={18} />
                Contact Me
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
