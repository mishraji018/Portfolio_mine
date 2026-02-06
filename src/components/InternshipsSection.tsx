import { cn } from "@/lib/utils";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const internships = [
  {
    role: "AI/ML Intern",
    company: "Tech Innovations Inc.",
    location: "Remote",
    duration: "Jun 2024 - Aug 2024",
    description: "Developed machine learning models for predictive analytics. Worked on NLP pipelines and model optimization.",
    highlights: ["Built sentiment analysis model", "Improved model accuracy by 15%", "Collaborated with senior engineers"],
  },
  {
    role: "Data Science Intern",
    company: "DataTech Solutions",
    location: "Bangalore, India",
    duration: "Jan 2024 - May 2024",
    description: "Analyzed large datasets and created visualization dashboards. Implemented data preprocessing pipelines.",
    highlights: ["Processed 1M+ data points", "Created automated reports", "Learned cloud deployment"],
  },
  {
    role: "Research Intern",
    company: "University AI Lab",
    location: "Hyderabad, India",
    duration: "Jun 2023 - Dec 2023",
    description: "Conducted research on deep learning algorithms and published findings. Assisted in academic paper writing.",
    highlights: ["Co-authored research paper", "Implemented novel algorithms", "Presented at conference"],
  },
];

const InternshipsSection = () => {
  return (
    <section id="internships" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">My </span>
            <span className="text-glow-orange">Internships</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional experience gained through hands-on industry internships.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {internships.map((internship, index) => (
            <div
              key={internship.role + internship.company}
              className={cn(
                "group glass-card rounded-xl p-6 transition-all duration-500",
                "hover:glow-orange hover:border-glow-orange/50",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-glow-orange transition-colors">
                    {internship.role}
                  </h3>
                  <p className="text-primary font-medium">{internship.company}</p>
                </div>
                <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {internship.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {internship.location}
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{internship.description}</p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {internship.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-glow-orange/10 text-glow-orange"
                  >
                    <Briefcase className="w-3 h-3" />
                    {highlight}
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

export default InternshipsSection;