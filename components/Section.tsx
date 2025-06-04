
import React from 'react';
import { SectionData, ContentItem, StepDetail } from '../types';
import ComprehensionQuiz from './games/ComprehensionQuiz';
import PadIdentificationGame from './games/PadIdentificationGame';

interface SectionProps {
  data: SectionData;
}

// Helper to parse simple markdown-like bold/italic text
const renderTextWithFormatting = (text: string): React.ReactNode => {
  // Handles **bold** and _italic_.
  const parts = text.split(/(\*\*.*?\*\*|_.*?_)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('_') && part.endsWith('_')) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
};


const Section: React.FC<SectionProps> = ({ data }) => {
  const titleColorClass = data.titleColor || data.textColor;
  const isHeroSection = data.id === 'hero-inicio';

  const renderContentItem = (item: ContentItem, index: number) => {
    switch (item.type) {
      case 'paragraph':
        return <p key={index} className={`mb-4 text-lg leading-relaxed ${data.textColor}`}>{item.text ? renderTextWithFormatting(item.text) : ''}</p>;
      case 'subheading':
        return <h3 key={index} className={`text-2xl font-['Fredoka_One'] mt-6 mb-3 ${data.titleColor || data.textColor}`}>{item.text ? renderTextWithFormatting(item.text) : ''}</h3>;
      case 'list':
        return (
          <ul key={index} className={`list-disc list-inside mb-4 pl-4 space-y-2 text-lg ${data.textColor}`}>
            {item.items?.map((listItem, i) => <li key={i}>{renderTextWithFormatting(listItem)}</li>)}
          </ul>
        );
      case 'orderedList':
        return (
          <ol key={index} className={`list-decimal list-outside mb-4 pl-6 space-y-6 text-lg ${data.textColor}`}>
            {item.orderedItems?.map((orderedItem, i) => {
              if (typeof orderedItem === 'string') {
                return <li key={i} className="pl-2">{renderTextWithFormatting(orderedItem)}</li>;
              }
              const step = orderedItem as StepDetail;
              return (
                <li key={step.id || i} className="pl-2">
                  <div className="flex flex-col md:flex-row md:items-start gap-x-6 gap-y-3"> {/* Flex container for step content & image */}
                    <div className="flex-1"> {/* Text content */}
                      {step.text ? renderTextWithFormatting(step.text) : ''}
                    </div>
                    {step.imageUrl && ( /* Conditional image rendering */
                      <div className="flex-shrink-0 w-full md:w-48 lg:w-56 mt-2 md:mt-0"> {/* Image container */}
                        <img
                          src={step.imageUrl}
                          alt={step.altText || 'Ilustración del paso'}
                          className="rounded-lg shadow-md w-full h-auto object-cover"
                          aria-hidden={!step.altText} // Hide from screen readers if alt text is purely decorative or missing
                        />
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        );
      case 'image':
        if (!item.imageUrl) return null;
        return (
          <div key={index} className="my-6 flex justify-center">
            <img src={item.imageUrl} alt={item.altText || 'Ilustración'} className="rounded-lg shadow-lg max-w-full h-auto md:max-w-md" />
          </div>
        );
      case 'customHtml':
         return item.htmlContent ? <div key={index} className={`mb-4 text-lg leading-relaxed ${data.textColor}`} dangerouslySetInnerHTML={{ __html: item.htmlContent }} /> : null;
      case 'comprehensionQuiz':
        if (!item.quizData) return null;
        return <ComprehensionQuiz key={index} quizData={item.quizData} />;
      case 'padIdentificationGame':
        if (!item.identificationGameData) return null;
        return <PadIdentificationGame key={index} gameData={item.identificationGameData} />;
      default:
        return null;
    }
  };

  return (
    <section 
      id={data.id} 
      className={`py-12 md:py-20 px-4 sm:px-6 lg:px-8 ${data.bgColor} transition-colors duration-500 ease-in-out ${isHeroSection ? 'min-h-[60vh] flex flex-col justify-center items-center' : ''}`}
    >
      <div className={`mx-auto ${isHeroSection ? 'max-w-full text-center' : 'max-w-4xl'}`}>
        <h2 className={`font-['Fredoka_One'] ${isHeroSection ? 'text-5xl md:text-7xl mb-4' : 'text-4xl md:text-5xl mb-8 text-center'} ${titleColorClass}`}>
          {!isHeroSection && data.icon && (
            <span className="mr-3" role="img" aria-label={data.icon ? `${data.icon} icon` : "section icon"}>{data.icon}</span>
          )}
          {data.title}
        </h2>
        {isHeroSection && data.content.length > 0 && data.content[0].type === 'paragraph' && data.content[0].text && (
          <p className={`text-xl md:text-2xl mt-[-0.5rem] mb-8 ${data.textColor}`}>
            {renderTextWithFormatting(data.content[0].text)}
          </p>
        )}
        {!isHeroSection && data.content.map((item, index) => renderContentItem(item, index))}
      </div>
    </section>
  );
};

export default Section;
