import { cn } from "@/lib/utils";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
{
  degree: "B.Tech in Computer Science Engineering",
  institution: "KIET Group of Institutions",
  year: "2024 - 2028",
  grade: "CGPA: 8.5/10",
  specialization: "Artificial Intelligence & Machine Learning"
},
{
  degree: "Higher Secondary (12th)",
  institution: "RPM Academy",
  year: "2022 - 2023",
  grade: "Percentage: 81%",
  specialization: "Science (PCM)"
}];


const achievements = [
"Dean's List for Academic Excellence",
"1st Place in National AI Hackathon 2024",
"Published research paper on Deep Learning",
"AWS Certified Machine Learning Specialist",
"Google Cloud AI/ML Badge Holder",
"Top 5% in Data Science Coursera Specialization"];


const courses = [
"Data Structures & Algorithms",
"Object Oriented Programming",
"Database Management Systems",
"Operating Systems",
"Computer Networks",
"Discrete Mathematics",
"Theory of Computation",
"Software Engineering",
"Computer Architecture",
"Web Development"];


const AcademicsSection = () => {
  return (
    <section id="academics" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">My </span>
            <span className="text-glow-green">Academics</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Educational background and academic achievements.
          </p>
        </div>

        {/* Achievements & Courses */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-semibold flex items-center gap-3 text-foreground mb-6">
              <Award className="w-6 h-6 text-glow-green" />
              Achievements
            </h3>
            <div className="glass-card rounded-xl p-6">
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li
                    key={achievement}
                    className="flex items-start gap-3 text-muted-foreground animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}>
                    <span className="w-2 h-2 mt-2 rounded-full bg-glow-green flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold flex items-center gap-3 text-foreground mb-6">
              <BookOpen className="w-6 h-6 text-glow-green" />
              Key Courses
            </h3>
            <div className="flex flex-wrap gap-2">
              {courses.map((course, index) => (
                <span
                  key={course}
                  className={cn(
                    "group px-4 py-2 rounded-lg cursor-default",
                    "glass-card border transition-all duration-300",
                    "hover:glow-green hover:border-glow-green/50",
                    "text-muted-foreground hover:text-glow-green",
                    "animate-fade-in"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}>
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Education - Last */}
        <div>
          <h3 className="text-2xl font-semibold flex items-center gap-3 text-foreground mb-6">
            <GraduationCap className="w-6 h-6 text-glow-green" />
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className="glass-card rounded-xl p-6 border border-glow-green/10 hover:border-glow-green/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}>
                <h4 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h4>
                <p className="text-glow-green font-medium mb-2">{edu.institution}</p>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span>{edu.year}</span>
                  <span>•</span>
                  <span>{edu.grade}</span>
                </div>
                {edu.specialization && (
                  <p className="text-sm text-muted-foreground mt-2">{edu.specialization}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>);

};

export default AcademicsSection;