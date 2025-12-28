import { ExternalLink, Github, Newspaper, Brain, Film, FileQuestion } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    icon: Newspaper,
    title: 'NewsBuddy',
    subtitle: 'Role-Based News Management System',
    description: 'Developed a role-based news management platform for publishing digital newspapers, live TV channels, and weekly news summaries. Implemented secure admin access for efficient content management with structured workflows.',
    techStack: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Spring Security', 'REST APIs'],
    featured: true,
    highlights: ['Role-based access control', 'Content management workflows', 'Scalable architecture'],
  },
  {
    icon: Brain,
    title: 'Emotion Detection in News Headlines',
    subtitle: 'Machine Learning Project',
    description: 'Built a machine learning system to classify emotions in news headlines. Applied text preprocessing and feature extraction techniques. Trained and evaluated ML models for accurate emotion prediction.',
    techStack: ['Python', 'TF-IDF', 'Naive Bayes', 'Flask'],
    featured: true,
    highlights: ['Text preprocessing pipeline', 'ML model training', 'REST API deployment'],
  },
  {
    icon: Film,
    title: 'Netflix UI Clone',
    subtitle: 'Frontend Project',
    description: 'Developed a responsive Netflix homepage clone focusing on UI design and CSS layout skills. Implemented modern responsive design patterns.',
    techStack: ['HTML', 'CSS'],
    github: 'https://github.com/anushka-palewar/NetflixClone',
    featured: false,
  },
  {
    icon: FileQuestion,
    title: 'Quiz Management System',
    subtitle: 'Full-Stack Application',
    description: 'Built a complete quiz management system with user authentication, quiz creation, and automatic result evaluation using MVC-based backend structure.',
    techStack: ['Java', 'Servlet', 'JSP', 'JDBC', 'SQL'],
    github: 'https://github.com/anushka-palewar/QuizApp',
    featured: false,
  },
];

const ProjectsSection = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground">
            A collection of projects that showcase my skills in full-stack development and machine learning
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl bg-card border border-border hover-lift ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="p-8 lg:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <span className="text-primary text-sm font-medium uppercase tracking-wider">
                      {project.subtitle}
                    </span>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && (
                  <ul className="grid sm:grid-cols-3 gap-3 mb-6">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-6 text-center">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="group p-6 bg-card rounded-xl border border-border hover-lift"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">
                      {project.title}
                    </h4>
                    <span className="text-xs text-muted-foreground">{project.subtitle}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs bg-secondary text-secondary-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <Github size={14} />
                    View on GitHub
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
