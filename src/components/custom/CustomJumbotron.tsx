/**
 * Componente Jumbotron (hero banner) para encabezados de página.
 * title → título principal con efecto AuroraText (gradiente animado de MagicUI)
 * description → texto opcional con efecto TypingAnimation (máquina de escribir)
 *
 * Ambos efectos vienen de la librería MagicUI registrada en components.json.
 */
import { AuroraText } from "../ui/aurora-text";
import { TypingAnimation } from "../ui/typing-animation";

interface props {
  title: string;
  descriptionDesktop?: string;
  descriptionMobile?: string;
}

const CustomJumbotron = ({
  title,
  descriptionDesktop,
  descriptionMobile,
}: props) => {
  return (
    <div className="text-center mb-8 mt-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        <AuroraText>{title}</AuroraText>
      </h1>
      {(descriptionDesktop || descriptionMobile) && (
        <p className="text-black">
          {descriptionMobile && (
            <span className="sm:hidden">
              <TypingAnimation words={[descriptionMobile]} loop />
            </span>
          )}
          {descriptionDesktop && (
            <span className="hidden sm:inline">
              <TypingAnimation words={[descriptionDesktop]} loop />
            </span>
          )}
        </p>
      )}
    </div>
  );
};

export default CustomJumbotron;
