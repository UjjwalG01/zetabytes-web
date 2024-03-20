import { FaBook, FaChessKing } from "react-icons/fa";
import { BsPuzzle } from "react-icons/bs";
import { MdWbTwilight } from "react-icons/md";
import { GoalCard } from "./goal-card";

export const goals = [
  {
    icon: <FaChessKing />,
    title: "Provide Practical Skills",
    description:
      "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
  },
  {
    icon: <FaBook />,
    title: "Foster Creative Problem-Solving",
    description:
      "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.",
  },
  {
    icon: <BsPuzzle />,
    title: "Promote Collaboration and Community",
    description:
      "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.",
  },
  {
    icon: <MdWbTwilight />,
    title: "Stay Ahead of the Curve",
    description:
      "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.",
  },
];

export const OurGoalsSection = () => {
  return (
    <section className="w-full h-full">
      <div className="container flex flex-col space-y-4">
        <h2 className="text-4xl font-semibold">Our Goals</h2>
        <p className="text-base font-medium text-muted-foreground">
          At Zetabytes, our goal is to empower individuals from all backgrounds
          to thrive in the world of design and development. We believe that
          education should be accessible and transformative, enabling learners
          to pursue their passions and make a meaningful impact. Through our
          carefully crafted courses, we aim to
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {goals.map((goal) => (
            <GoalCard
              key={goal.title}
              icon={goal.icon}
              title={goal.title}
              description={goal.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
