import { Code2, Database, Brain, Target } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Building scalable applications with Java Spring Boot and React',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Designing efficient SQL schemas and optimizing queries',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Applying ML concepts for real-world problem solving',
  },
  {
    icon: Target,
    title: 'Problem Solving',
    description: 'Active DSA practice on LeetCode and competitive coding',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Passionate about building{' '}
              <span className="gradient-text">meaningful solutions</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hi, I'm <strong className="text-foreground">Anushka Palewar</strong>, a Computer Science Engineering 
                student at <strong className="text-foreground">RCOEM, Nagpur</strong> and an aspiring Java Spring Boot 
                Full-Stack Developer.
              </p>
              <p>
                I enjoy building scalable web applications and solving algorithmic problems. I have hands-on 
                experience in <strong className="text-foreground">Java, Spring Boot, REST APIs, SQL</strong>, and 
                front-end technologies like <strong className="text-foreground">HTML, CSS, JavaScript, and React</strong>.
              </p>
              <p>
                Along with full-stack development, I have worked on <strong className="text-foreground">Machine Learning 
                projects</strong>, applying concepts such as text preprocessing, feature extraction, and model deployment.
              </p>
              <p>
                I actively practice <strong className="text-foreground">Data Structures & Algorithms</strong> on LeetCode 
                and continuously work on improving my problem-solving skills.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 bg-card rounded-xl border border-border hover-lift cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
