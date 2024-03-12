import {
  Briefcase,
  Code,
  CodeSquareIcon,
  FileCode2,
  GraduationCap,
  LineChart,
  Pen,
} from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const internships = [
  {
    icon: FileCode2,
    title: "WordPress Intern (Paid Internship) at PlutonicTech",
    description:
      "This paid internship position, located near Kathmandu, Nepal, focuses on WordPress development. As a WordPress intern, you’ll gain hands-on experience in website design, customization, and content management using the popular platform.",
  },
  {
    icon: CodeSquareIcon,
    title: "Python Intern at Docsumo",
    description:
      "Join the Docsumo team in Kathmandu for an internship focused on Python. You’ll work on various projects, gaining practical experience in Python programming, data analysis, and automation.",
  },
  {
    icon: Code,
    title: "Software Engineering Internship",
    description:
      "Dive into software development! As a software engineering intern, you’ll collaborate with our development team, write code, debug applications, and contribute to real-world projects. Gain insights into software architecture, testing, and agile methodologies.",
  },
  {
    icon: Briefcase,
    title: "Associate Product Manager Internship:",
    description:
      "Explore the intersection of technology and product management. Assist our product team in defining requirements, conducting market research, and creating roadmaps. Learn about product lifecycles and user-centric design.",
  },
  {
    icon: GraduationCap,
    title: "Legal Internship",
    description:
      "Combine law and technology! Join our legal department to understand legal aspects related to software, intellectual property, contracts, and compliance. Gain exposure to legal research and drafting.",
  },
  {
    icon: LineChart,
    title: "Data Science Internship",
    description:
      "Dive into data! Work with our data science team to analyze large datasets, build predictive models, and extract meaningful insights. Learn about machine learning, statistical analysis, and data visualization.",
  },
];

export const Internships = () => {
  return (
    <div className="w-full my-12 lg:my-12">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-6">
          <span className="section-title relative z-10">Our Internships</span>
          <h2 className="font-semibold text-3xl text-center">
            High-impact services for your business
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {internships.map((intern) => (
              <Card key={intern.title} className="max-w-[467px] p-2">
                <CardHeader className="space-y-4">
                  <div className="bg-blue-300/80 w-fit p-4 rounded-full">
                    <intern.icon className="backdrop:filter" />
                  </div>
                  <CardTitle className="leading-6">{intern.title}</CardTitle>
                  <CardDescription className="text-base">
                    {intern.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
