import { Server, Layout, Database, Brain, Wrench } from 'lucide-react';

const skillCategories = [
  {
    icon: Server,
    title: 'Backend Development',
    color: 'from-emerald-500 to-teal-500',
    skills: ['Java (Core & Advanced)', 'Spring Boot', 'Spring Security', 'REST APIs', 'JDBC', 'Servlets & JSP'],
  },
  {
    icon: Layout,
    title: 'Frontend Development',
    color: 'from-blue-500 to-cyan-500',
    skills: ['HTML', 'CSS', 'JavaScript', 'React (Basics)', 'Responsive Design'],
  },
  {
    icon: Database,
    title: 'Database',
    color: 'from-violet-500 to-purple-500',
    skills: ['SQL', 'MySQL', 'Database Design', 'Query Optimization'],
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    color: 'from-orange-500 to-amber-500',
    skills: ['ML Fundamentals', 'Text Preprocessing', 'TF-IDF', 'Naive Bayes', 'Flask Deployment'],
  },
  {
    icon: Wrench,
    title: 'Core CS & Tools',
    color: 'from-rose-500 to-pink-500',
    skills: ['Data Structures & Algorithms', 'OOPs', 'DBMS', 'GitHub', 'VS Code', 'Problem Solving'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Technical Skills
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground">
            A comprehensive set of technologies I've mastered through projects and continuous learning
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group p-6 bg-card rounded-2xl border border-border hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
