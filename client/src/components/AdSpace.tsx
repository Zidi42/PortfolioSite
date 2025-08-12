import { cn } from "@/lib/utils";
import { Accessibility } from "lucide-react";

interface AdSpaceProps {
  type: 'banner' | 'sidebar' | 'bottom';
  className?: string;
}

const AdSpace = ({ type, className }: AdSpaceProps) => {
  const getAdContent = () => {
    switch (type) {
      case 'banner':
        return {
          text: 'TOP BANNER AD PLACEMENT - 728x90',
          size: 'h-20'
        };
      case 'sidebar':
        return {
          text: 'SIDEBAR AD PLACEMENT\n160x600 or 300x250',
          size: 'h-96'
        };
      case 'bottom':
        return {
          text: 'BOTTOM BANNER AD PLACEMENT - 728x90',
          size: 'h-24'
        };
      default:
        return {
          text: 'AD PLACEMENT',
          size: 'h-32'
        };
    }
  };

  const { text, size } = getAdContent();

  return (
    <div className={cn("w-full py-2", className)}>
      <div className="container mx-auto px-4">
        <div className={cn(
          "bg-slate-200 dark:bg-slate-700 border-2 border-dashed border-slate-400 dark:border-slate-500 rounded flex items-center justify-center text-slate-600 dark:text-slate-400 text-sm",
          size
        )}>
          <div className="text-center">
            <Accessibility className="w-6 h-6 mx-auto mb-2" />
            <div className="whitespace-pre-line">{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdSpace;
