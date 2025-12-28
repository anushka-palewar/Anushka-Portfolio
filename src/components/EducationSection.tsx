import { GraduationCap, Award, Trophy, Code } from 'lucide-react';

const education = {
  degree: 'B.Tech in Computer Science & Engineering',
  duration: '2023 – 2027',
  institution: 'Shri Ramdeobaba College of Engineering and Management (RCOEM)',
  location: 'Nagpur',
  achievements: [
    { label: 'HSC', value: '88.67%', description: 'Higher Secondary Certificate' },
    { label: 'SSC', value: '95%', description: 'Secondary School Certificate' },
  ],
};

const achievements = [
  {
    icon: Trophy,
    title: 'Smart India Hackathon (SIH) 2025',
    description: 'Internal Round Finalist',
    color: 'from-amber-500 to-yellow-500',
  },
  {
    icon: Award,
    title: 'Java Full-Stack Development',
    description: 'Certification from Eduskills Academy',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Code,
    title: 'Active LeetCode Problem Solver',
    description: 'Consistently practicing DSA problems',
    color: 'from-orange-500 to-red-500',
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
              Education
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Academic <span className="gradient-text">Background</span>
            </h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-border" />

              {/* Main Education Card */}
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg z-10">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <div className="bg-card rounded-xl border border-border p-6 hover-lift">
                  <span className="text-primary text-sm font-medium">{education.duration}</span>
                  <h3 className="font-display text-xl font-bold text-foreground mt-1">
                    {education.degree}
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    {education.institution}
                  </p>
                  <p className="text-sm text-muted-foreground">{education.location}</p>

                  {/* Academic Scores */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {education.achievements.map((item) => (
                      <div key={item.label} className="text-center p-4 bg-secondary/50 rounded-lg">
                        <span className="block text-2xl font-bold text-primary font-display">
                          {item.value}
                        </span>
                        <span className="text-xs text-muted-foreground">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
              Recognition
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Achievements & <span className="gradient-text">Certifications</span>
            </h2>

            <div className="space-y-4">
              {achievements.map((item, index) => (
                <div
                  key={item.title}
                  className="group flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
