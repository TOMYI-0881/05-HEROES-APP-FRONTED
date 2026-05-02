import { AuroraText } from "../ui/aurora-text";
import { TypingAnimation } from "../ui/typing-animation";

interface props {
  title: string;
  description?: string;
}

const CustomJumbotron = ({ title, description }: props) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        <AuroraText>{title}</AuroraText>
      </h1>
      {description && (
        <p className="text-black">
          <TypingAnimation words={[description]} loop />
        </p>
      )}
    </div>
  );
};

export default CustomJumbotron;
